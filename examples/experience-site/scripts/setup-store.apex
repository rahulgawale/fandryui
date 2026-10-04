// Run by setup-store.mjs, which replaces __DATA__ with data/products.json
// plus the CMS ids of the uploaded images. Adds what's missing, never deletes.
Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped('__DATA__');
String storeName = (String) data.get('store');
List<Object> products = (List<Object>) data.get('products');
Map<String, Object> media = (Map<String, Object>) data.get('media');

WebStore store = [SELECT Id, StrikethroughPricebookId FROM WebStore WHERE Name = :storeName];
Id catalogId = [SELECT ProductCatalogId FROM WebStoreCatalog WHERE SalesStoreId = :store.Id LIMIT 1].ProductCatalogId;
Id rootCategoryId = [SELECT Id FROM ProductCategory WHERE CatalogId = :catalogId AND ParentCategoryId = null ORDER BY CreatedDate LIMIT 1].Id;
Id standardPricebookId = [SELECT Id FROM Pricebook2 WHERE IsStandard = true].Id;
Id storePricebookId = [SELECT Pricebook2Id FROM WebStorePricebook WHERE WebStoreId = :store.Id AND IsActive = true LIMIT 1].Pricebook2Id;
Id strikethroughPricebookId = store.StrikethroughPricebookId;
Id buyerGroupId = [SELECT BuyerGroupId FROM WebStoreBuyerGroup WHERE WebStoreId = :store.Id LIMIT 1].BuyerGroupId;
Id policyId = [SELECT PolicyId FROM CommerceEntitlementBuyerGroup WHERE BuyerGroupId = :buyerGroupId LIMIT 1].PolicyId;
Id colorSetId = [SELECT Id FROM ProductAttributeSet WHERE DeveloperName = 'Color'].Id;
Map<String, Id> mediaGroup = new Map<String, Id>();
for (ElectronicMediaGroup g : [SELECT Id, DeveloperName FROM ElectronicMediaGroup WHERE DeveloperName IN ('productListImage', 'productDetailImage', 'tileImage')]) {
    mediaGroup.put(g.DeveloperName, g.Id);
}

// ---- products: one Product2 per SKU, parents first so variations can point at them

Map<String, Product2> bySku = new Map<String, Product2>();
for (Product2 p : [SELECT Id, StockKeepingUnit FROM Product2 WHERE StockKeepingUnit LIKE 'AO-%']) {
    bySku.put(p.StockKeepingUnit, p);
}

Product2 upsertProduct(Map<String, Product2> bySku, String sku, Map<String, Object> fields) {
    Product2 p = bySku.containsKey(sku) ? bySku.get(sku) : new Product2(StockKeepingUnit = sku);
    for (String field : fields.keySet()) p.put(field, fields.get(field));
    bySku.put(sku, p);
    return p;
}

List<Product2> parents = new List<Product2>();
for (Object o : products) {
    Map<String, Object> p = (Map<String, Object>) o;
    List<Object> colors = (List<Object>) p.get('colors');
    Map<String, Object> fields = new Map<String, Object>{
        'Name' => p.get('name'),
        'ProductCode' => p.get('sku'),
        'Description' => p.get('description'),
        'Family' => p.get('category'),
        'IsActive' => true,
        'Flair__c' => p.get('flair'),
        'Flair_Variant__c' => p.get('flairVariant')
    };
    if (colors.size() > 1) {
        // A variation parent; Type can only be set when the product is created.
        if (!bySku.containsKey((String) p.get('sku'))) fields.put('Type', 'Base');
    } else {
        fields.put('Swatch_Color__c', ((Map<String, Object>) colors[0]).get('swatch'));
    }
    parents.add(upsertProduct(bySku, (String) p.get('sku'), fields));
}
upsert parents;

List<Product2> variations = new List<Product2>();
for (Object o : products) {
    Map<String, Object> p = (Map<String, Object>) o;
    List<Object> colors = (List<Object>) p.get('colors');
    if (colors.size() < 2) continue;
    for (Object c : colors) {
        Map<String, Object> color = (Map<String, Object>) c;
        String sku = p.get('sku') + '-' + ((String) color.get('name')).toUpperCase();
        variations.add(upsertProduct(bySku, sku, new Map<String, Object>{
            'Name' => p.get('name') + ', ' + color.get('name'),
            'ProductCode' => sku,
            'Description' => p.get('description'),
            'Family' => p.get('category'),
            'IsActive' => true,
            'Swatch_Color__c' => color.get('swatch')
        }));
    }
}
upsert variations;

// ---- variation structure: the parent in the Color set, each variation's colour

Set<Id> inColorSet = new Set<Id>();
for (ProductAttributeSetProduct x : [SELECT ProductId FROM ProductAttributeSetProduct WHERE ProductAttributeSetId = :colorSetId]) inColorSet.add(x.ProductId);
Set<Id> hasAttribute = new Set<Id>();
for (ProductAttribute x : [SELECT ProductId FROM ProductAttribute WHERE Product.StockKeepingUnit LIKE 'AO-%']) hasAttribute.add(x.ProductId);

List<ProductAttributeSetProduct> setLinks = new List<ProductAttributeSetProduct>();
List<ProductAttribute> attributes = new List<ProductAttribute>();
for (Object o : products) {
    Map<String, Object> p = (Map<String, Object>) o;
    List<Object> colors = (List<Object>) p.get('colors');
    if (colors.size() < 2) continue;
    Product2 parent = bySku.get((String) p.get('sku'));
    if (!inColorSet.contains(parent.Id)) {
        setLinks.add(new ProductAttributeSetProduct(ProductAttributeSetId = colorSetId, ProductId = parent.Id));
    }
    Integer sequence = 1;
    for (Object c : colors) {
        Map<String, Object> color = (Map<String, Object>) c;
        Product2 variation = bySku.get(p.get('sku') + '-' + ((String) color.get('name')).toUpperCase());
        if (!hasAttribute.contains(variation.Id)) {
            attributes.add(new ProductAttribute(
                ProductId = variation.Id,
                VariantParentId = parent.Id,
                Color__c = (String) color.get('name'),
                Sequence = sequence
            ));
        }
        sequence++;
    }
}
insert setLinks;
insert attributes;

// ---- prices: the standard book (required first), the store's, and the strikethrough book

Map<String, PricebookEntry> entries = new Map<String, PricebookEntry>();
for (PricebookEntry e : [SELECT Id, Pricebook2Id, Product2Id, UnitPrice FROM PricebookEntry WHERE Product2.StockKeepingUnit LIKE 'AO-%']) {
    entries.put(e.Pricebook2Id + ':' + e.Product2Id, e);
}

List<PricebookEntry> standardEntries = new List<PricebookEntry>();
List<PricebookEntry> storeEntries = new List<PricebookEntry>();
void price(Map<String, PricebookEntry> entries, List<PricebookEntry> target, Id pricebookId, Id productId, Object amount) {
    PricebookEntry e = entries.containsKey(pricebookId + ':' + productId)
        ? entries.get(pricebookId + ':' + productId)
        : new PricebookEntry(Pricebook2Id = pricebookId, Product2Id = productId, IsActive = true);
    e.UnitPrice = Decimal.valueOf(String.valueOf(amount));
    target.add(e);
}
for (Object o : products) {
    Map<String, Object> p = (Map<String, Object>) o;
    List<Id> ids = new List<Id>{ bySku.get((String) p.get('sku')).Id };
    List<Object> colors = (List<Object>) p.get('colors');
    if (colors.size() > 1) {
        for (Object c : colors) {
            ids.add(bySku.get(p.get('sku') + '-' + ((String) ((Map<String, Object>) c).get('name')).toUpperCase()).Id);
        }
    }
    for (Id productId : ids) {
        price(entries, standardEntries, standardPricebookId, productId, p.get('price'));
        price(entries, storeEntries, storePricebookId, productId, p.get('price'));
        if (p.get('compareAtPrice') != null) {
            price(entries, storeEntries, strikethroughPricebookId, productId, p.get('compareAtPrice'));
        }
    }
}
upsert standardEntries;
upsert storeEntries;

// ---- categories under the catalog's root, and each product's primary category

Map<String, Id> categories = new Map<String, Id>();
for (ProductCategory c : [SELECT Id, Name FROM ProductCategory WHERE CatalogId = :catalogId AND ParentCategoryId = :rootCategoryId]) {
    categories.put(c.Name, c.Id);
}
List<ProductCategory> newCategories = new List<ProductCategory>();
for (Object o : products) {
    String name = (String) ((Map<String, Object>) o).get('category');
    if (!categories.containsKey(name)) {
        ProductCategory c = new ProductCategory(Name = name, CatalogId = catalogId, ParentCategoryId = rootCategoryId);
        newCategories.add(c);
        categories.put(name, null);
    }
}
insert newCategories;
for (ProductCategory c : newCategories) categories.put(c.Name, c.Id);

Set<Id> categorized = new Set<Id>();
for (ProductCategoryProduct x : [SELECT ProductId FROM ProductCategoryProduct WHERE Product.StockKeepingUnit LIKE 'AO-%']) categorized.add(x.ProductId);
List<ProductCategoryProduct> categoryLinks = new List<ProductCategoryProduct>();
for (Object o : products) {
    Map<String, Object> p = (Map<String, Object>) o;
    Id productId = bySku.get((String) p.get('sku')).Id;
    if (!categorized.contains(productId)) {
        categoryLinks.add(new ProductCategoryProduct(
            ProductCategoryId = categories.get((String) p.get('category')),
            ProductId = productId,
            IsPrimaryCategory = true
        ));
    }
}
insert categoryLinks;

// ---- entitlements: every AO- product, parents and variations

Set<Id> entitled = new Set<Id>();
for (CommerceEntitlementProduct x : [SELECT ProductId FROM CommerceEntitlementProduct WHERE PolicyId = :policyId]) entitled.add(x.ProductId);
List<CommerceEntitlementProduct> entitlements = new List<CommerceEntitlementProduct>();
for (Product2 p : bySku.values()) {
    if (!entitled.contains(p.Id)) entitlements.add(new CommerceEntitlementProduct(PolicyId = policyId, ProductId = p.Id));
}
insert entitlements;

// ---- media: a list image, and two detail images (front, then the other angle)

Set<String> linked = new Set<String>();
for (ProductMedia m : [SELECT ProductId, ElectronicMediaGroupId, SortOrder FROM ProductMedia WHERE Product.StockKeepingUnit LIKE 'AO-%']) {
    linked.add(m.ProductId + ':' + m.ElectronicMediaGroupId + ':' + m.SortOrder);
}
List<ProductMedia> productMedia = new List<ProductMedia>();
void addMedia(Set<String> linked, List<ProductMedia> target, Map<String, Id> mediaGroup, Map<String, Object> media, Id productId, Map<String, Object> color) {
    List<Object[]> rows = new List<Object[]>{
        new Object[]{ 'productListImage', 0, color.get('image') },
        new Object[]{ 'productDetailImage', 0, color.get('image') },
        new Object[]{ 'productDetailImage', 1, color.get('hoverImage') }
    };
    for (Object[] row : rows) {
        Id groupId = mediaGroup.get((String) row[0]);
        if (linked.contains(productId + ':' + groupId + ':' + row[1])) continue;
        target.add(new ProductMedia(
            ProductId = productId,
            ElectronicMediaGroupId = groupId,
            ElectronicMediaId = (Id) media.get((String) row[2]),
            SortOrder = (Integer) row[1]
        ));
    }
}
for (Object o : products) {
    Map<String, Object> p = (Map<String, Object>) o;
    List<Object> colors = (List<Object>) p.get('colors');
    // The parent (or the simple product) shows its first colour.
    addMedia(linked, productMedia, mediaGroup, media, bySku.get((String) p.get('sku')).Id, (Map<String, Object>) colors[0]);
    if (colors.size() < 2) continue;
    for (Object c : colors) {
        Map<String, Object> color = (Map<String, Object>) c;
        addMedia(linked, productMedia, mediaGroup, media, bySku.get(p.get('sku') + '-' + ((String) color.get('name')).toUpperCase()).Id, color);
    }
}
insert productMedia;

// ---- category tiles: each category shows its first product's image

Set<Id> tiled = new Set<Id>();
for (ProductCategoryMedia m : [SELECT ProductCategoryId FROM ProductCategoryMedia WHERE ProductCategoryId IN :categories.values()]) tiled.add(m.ProductCategoryId);
List<ProductCategoryMedia> tiles = new List<ProductCategoryMedia>();
for (Object o : products) {
    Map<String, Object> p = (Map<String, Object>) o;
    Id categoryId = categories.get((String) p.get('category'));
    if (tiled.contains(categoryId)) continue;
    Map<String, Object> firstColor = (Map<String, Object>) ((List<Object>) p.get('colors'))[0];
    tiles.add(new ProductCategoryMedia(
        ProductCategoryId = categoryId,
        ElectronicMediaGroupId = mediaGroup.get('tileImage'),
        ElectronicMediaId = (Id) media.get((String) firstColor.get('image')),
        SortOrder = 0
    ));
    tiled.add(categoryId);
}
insert tiles;

System.debug(parents.size() + ' products, ' + variations.size() + ' variations, ' + attributes.size() + ' new colour attributes');
System.debug((standardEntries.size() + storeEntries.size()) + ' prices, ' + newCategories.size() + ' new categories, ' + entitlements.size() + ' new entitlements, ' + productMedia.size() + ' new media, ' + tiles.size() + ' new category tiles');
