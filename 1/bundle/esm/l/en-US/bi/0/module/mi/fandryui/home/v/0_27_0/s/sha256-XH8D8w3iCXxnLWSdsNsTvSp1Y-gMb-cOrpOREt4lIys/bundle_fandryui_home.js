import{registerTemplate as u,freezeTemplate as m,registerComponent as h,LightningElement as $,registerDecorators as y,parseFragment as b}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function da(a,e,s){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+"display: block;}"}var Ae=[da];function ca(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":r+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: block;}.logo"+t+"::part(link) {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: block;width: 2rem;height: 2rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.nav-link"+t+"::part(link) {color: hsl(var(--site-text-quiet));text-decoration: none;font-weight: var(--fd-font-weight-medium);}.nav-link::part(link):hover"+t+",.nav-link"+t+"::part(link current) {color: hsl(var(--site-primary));}.nav-link"+t+"::part(link current) {font-weight: var(--fd-font-weight-semibold);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;flex-wrap: wrap;justify-content: center;gap: var(--fd-space-2) var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var Le=[ca];function pa(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline;}.link"+t+` {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: var(--_fd-link-underline-offset);cursor: pointer;transition: color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.link:hover`+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+" {outline: none;}.tab-stop:focus-visible"+t+" .link"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: var(--_fd-ring-control);}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var De=[pa];const ha={"tab-stop":!0},fa={key:2},ua=[];function L(a,e,s,t){const{ti:r,gid:n,b:o,ncls:i,fid:d,s:c,h:l}=a,{_m0:p}=t;return[l("span",{classMap:ha,attrs:{part:"base",role:"link",tabindex:r(e.tabStopIndex),"aria-labelledby":n("anchor"),"aria-disabled":e.ariaDisabled,"aria-current":e.ariaCurrent},key:0,on:p||(t._m0={keydown:o(e.handleKeydown),click:o(e.handleClick)})},[l("a",{className:i(e.classes),attrs:{id:n("anchor"),part:e.linkPart,href:d(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[c("",fa,ua,s)])])]}var ma=u(L);L.slots=[""],L.stylesheets=[],L.stylesheetToken="lwc-38j32sll441",L.legacyStylesheetToken="fandry-link_link",De&&L.stylesheets.push.apply(L.stylesheets,De),m(L);var ya=void 0;function ba(a,e,s){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 226 90% 50%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 162 72% 42%));--_fd-accent-foreground: var(--fd-accent-foreground, 160 40% 12%);--_fd-info: var(--fd-info, var(--fd-accent, var(--brand-accent, 199 89% 36%)));--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 252 56% 44%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-z-overlay-contained: var(--fd-z-overlay-contained, 1);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-ring-halo-width: var(--fd-ring-halo-width, 3px);--_fd-ring-halo-blur: var(--fd-ring-halo-blur, 4px);--_fd-ring-halo-opacity: var(--fd-ring-halo-opacity, 0.3);--_fd-ring-field: var(--fd-ring-field, inset 0 0 0 var(--_fd-border-width) hsl(var(--_fd-ring-color)),\r
 0 0 var(--_fd-ring-halo-blur) var(--_fd-ring-halo-width)\r
 hsl(var(--_fd-ring-color) / var(--_fd-ring-halo-opacity))\r
 );--_fd-ring-control: var(--fd-ring-control, 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color)),\r
 0 0 var(--_fd-ring-halo-blur) calc(var(--_fd-ring-width) + var(--_fd-ring-halo-width))\r
 hsl(var(--_fd-ring-color) / var(--_fd-ring-halo-opacity))\r
 );--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-radius-full: var(--fd-radius-full, 999px);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-switch-padding: var(--fd-switch-padding, 0.125rem);--_fd-switch-width: var(--fd-switch-width, calc(var(--_fd-size-sm) * 2 + 2 * var(--_fd-switch-padding)));--_fd-tooltip-arrow-size: var(--fd-tooltip-arrow-size, 0.625rem);--_fd-spinner-thickness: var(--fd-spinner-thickness, 0.125em);--_fd-sidebar-width: var(--fd-sidebar-width, 16rem);--_fd-toast-width: var(--fd-toast-width, 20rem);--_fd-form-column-min-width: var(--fd-form-column-min-width, 16rem);--_fd-media-columns: var(--fd-media-columns, 4);--_fd-media-gap: var(--fd-media-gap, var(--_fd-space-3));--_fd-media-min-width: var(--fd-media-min-width, 8rem);--_fd-media-aspect-ratio: var(--fd-media-aspect-ratio, 1 / 1);--_fd-media-fit: var(--fd-media-fit, cover);--_fd-link-underline-offset: var(--fd-link-underline-offset, 0.125em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-loading-overlay-delay: var(--fd-loading-overlay-delay, 150ms);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var ga=[ba];function va(a,e,s){var t=a?"-"+a:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}@keyframes fd-pulse"+t+" {50% {opacity: var(--_fd-pulse-opacity);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}"}var ka=[va];function _a(a,e,s){var t=a?"["+a+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}[hidden]"+t+" {display: none !important;}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var wa=[ga,ka,_a];const Re=new WeakMap;function I(a,e,s,t,r="elementProps"){const n={},o=[];for(const[i,d]of Object.entries(e))s.includes(i)?o.push(i):n[i]=d;return o.length&&Re.get(a)!==e&&(Re.set(a,e),console.warn(`${t}: ${r} included ${o.map(i=>`"${i}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),n}function Se(a,e){a.key!=="Enter"||a.target!==a.currentTarget||e.querySelector("a")?.dispatchEvent(Ne(a))}function Oe(a,e){const s=e.querySelector("a");!s||a.target!==a.currentTarget||(a.stopPropagation(),s.dispatchEvent(Ne(a)))}function Ne(a){return new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,altKey:a.altKey,metaKey:a.metaKey})}function Ce(a,e){if(!!e)return Number(a.tabIndex)===-1?"-1":"0"}function Pe(a){const{tabIndex:e,...s}=a;return s}class ze extends ${activateAnchorOnEnter(e){Se(e,this.template)}resolveTabStopIndex(e,s){return Ce(e,s)}withoutTabIndex(e){return Pe(e)}resolveElementProps(e,s,t,r="elementProps"){return I(this,e,s,t,r)}}ze.stylesheets=[wa],ze.shadowSupportMode="native";const _=h(ze,{tmpl:ya,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function z(a,e={}){return[a,...Object.keys(e).filter(s=>e[s])].join(" ")}const xa=["href","target","rel","class","ariaDisabled"];class Fe extends _{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return Ce(this.elementProps,!this.disabled)}handleKeydown(e){Se(e,this.template)}handleClick(e){Oe(e,this.template)}get resolvedElementProps(){return Pe(I(this,this.elementProps,xa,"fandry-link"))}get ariaCurrent(){const e=this.elementProps?.ariaCurrent;return e&&e!=="false"?String(e):void 0}get linkPart(){return z("link",{[this.variant||"default"]:!0,disabled:this.disabled,current:!!this.ariaCurrent})}}y(Fe,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const C=h(Fe,{tmpl:ma,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Sa(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard), color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));--_fd-button-lift: 0 0 transparent;box-shadow: var(--_fd-button-lift);}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}@media (hover: hover) {.button--default:hover:not(:disabled):not([aria-disabled='true'])"+t+" {filter: brightness(var(--_fd-hover-brightness));--_fd-button-lift: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}@media (hover: hover) {.button--secondary:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));--_fd-button-lift: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}@media (hover: hover) {.button--ghost:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));--_fd-button-lift: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}}.button:focus-visible"+t+" {outline: var(--_fd-ring-width) solid transparent;box-shadow: var(--_fd-ring-control), var(--_fd-button-lift);}.button--default:focus-visible"+t+` {box-shadow: inset 0 0 0 var(--_fd-ring-width)\r
 color-mix(in srgb, hsl(var(--_fd-primary-foreground)) 75%, hsl(var(--_fd-primary))),\r
 var(--_fd-ring-control), var(--_fd-button-lift);}.button:disabled`+t+",\r.button[aria-disabled='true']"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled):not([aria-disabled='true'])"+t+" {transform: translateY(1px);--_fd-button-lift: 0 0 transparent;}"}var Ve=[Sa];const Ca={key:1},Pa=[];function D(a,e,s,t){const{ncls:r,b:n,s:o,h:i}=a,{_m0:d}=t;return[i("button",{className:r(e.classes),attrs:{part:e.basePart,type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0,on:d||(t._m0={click:n(e.handleClick)})},[o("",Ca,Pa,s)])]}var za=u(D);D.slots=[""],D.stylesheets=[],D.stylesheetToken="lwc-4ejlbgtq1p9",D.legacyStylesheetToken="fandry-button_button",Ve&&D.stylesheets.push.apply(D.stylesheets,Ve),m(D);const Ma=["type","class","disabled"];class qe extends _{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return I(this,this.elementProps,Ma,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}get basePart(){return z("base",{[this.variant||"default"]:!0,disabled:this.disabled||this.isAriaDisabled})}get isAriaDisabled(){return String(this.elementProps?.ariaDisabled)==="true"}handleClick(e){this.isAriaDisabled&&(e.preventDefault(),e.stopImmediatePropagation())}}y(qe,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const M=h(qe,{tmpl:za,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ea(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var Be=[Ea];const Ta={key:1},$a=[];function R(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("span",{className:r(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.accessibleLabel},key:0},[n("",Ta,$a,s)])]}var Ia=u(R);R.slots=[""],R.stylesheets=[],R.stylesheetToken="lwc-17qhee1uo3s",R.legacyStylesheetToken="fandry-icon_icon",Be&&R.stylesheets.push.apply(R.stylesheets,Be),m(R);class He extends _{constructor(...e){super(...e);this.size="md",this.label="",this.ariaLabel=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.ariaLabel&&!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get accessibleLabel(){return this.isDecorative?void 0:this.ariaLabel||this.label}}y(He,{publicProps:{size:{config:0},label:{config:0},ariaLabel:{config:0}}});const Ke=h(He,{tmpl:Ia,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Aa(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);box-sizing: border-box;width: 100%;max-width: none;height: 100%;max-height: none;margin: 0;border: 0;color: inherit;}.backdrop"+t+"::backdrop {background: transparent;}.backdrop[open]"+t+",.backdrop--closing"+t+" {display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.status"+t+" {flex-shrink: 0;}.count"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var je=[Aa];const La=b`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,Da=b`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,Ra=b`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,Oa=b`<span class="count${0}"${2}>${"t1"}</span>`,Na={panel:!0},Fa={part:"panel"},Va={classMap:{search:!0},attrs:{part:"search"},key:2},qa={input:!0},Ba={listbox:!0},Ha={group:!0},Ka={classMap:{status:!0},attrs:{role:"status"},key:14},ja={classMap:{empty:!0},attrs:{part:"empty"},key:17},Ga={attrs:{name:"empty"},key:18};function O(a,e,s,t){const{ncls:r,b:n,gid:o,h:i,k:d,d:c,sp:l,st:p,dc:v,i:k,f:E,t:S,s:ue}=a,{_m0:me,_m1:ye,_m2:T,_m3:we,_m4:xe}=t;return[e.isMounted?i("dialog",{className:r(e.backdropClasses),attrs:{part:"backdrop","aria-label":e.accessibleLabel,inert:e.backdropInert},key:0,on:me||(t._m0={click:n(e.handleBackdropClick),cancel:n(e.handleCancel)})},[i("div",{classMap:Na,attrs:Fa,key:1,on:ye||(t._m1={mousedown:n(e.handlePanelMouseDown)})},[i("div",Va,[i("input",{classMap:qa,attrs:{id:o("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.accessibleLabel,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":o("listbox"),"aria-activedescendant":o(e.activeDescendant)},props:{value:e.query},key:3,on:T||(t._m2={input:n(e.handleInput),keydown:n(e.handleInputKeydown)})})]),i("div",{classMap:Ba,attrs:{id:o("listbox"),part:"listbox",role:"listbox","aria-label":e.accessibleLabel},key:4,on:we||(t._m3={mousedown:n(e.handleListboxMouseDown)})},k(e.renderGroups,function(re){return i("div",{classMap:Ha,attrs:{part:"group",role:"group","aria-label":re.label},key:d(5,re.key)},E([re.hasLabel?p(La,7,[l(1,null,c(re.label))]):null,k(re.options,function(x){return i("div",{className:r(x.classes),attrs:{id:o(x.id),part:x.part,role:"option","data-option-id":x.id,"aria-selected":x.ariaSelected,"aria-disabled":x.ariaDisabled},key:d(8,x.id),on:xe||(t._m4={click:n(e.handleOptionClick),mousemove:n(e.handleOptionMouseMove)})},[x.component?v(x.component,{props:{...x.resolvedComponentProps},key:9}):null,x.component?null:p(Da,11,[l(1,null,c(x.label))]),x.component?null:x.hasDescription?p(Ra,13,[l(1,null,c(x.description))]):null])})]))})),i("div",Ka,[e.hasResults?p(Oa,16,[l(1,null,c(e.resultsText))]):null,e.hasResults?null:i("div",ja,[ue("empty",Ga,[S("No results found")],s)])])])]):null]}var Wa=u(O);O.slots=["empty"],O.stylesheets=[],O.stylesheetToken="lwc-4bgejodik1n",O.legacyStylesheetToken="fandry-command_command",je&&O.stylesheets.push.apply(O.stylesheets,je),m(O);var Ua=void 0;const Qa=/[\s\-_/.]/;function be(a,e,s){const t=a.toLowerCase().indexOf(e);return t===-1?0:t===0?s*3:Qa.test(a[t-1])?s*2:s}function Ya(a,e){let s=0;for(const t of e){const r=Math.max(be(a.label,t,10),...(a.keywords??[]).map(n=>be(n,t,6)),be(a.description??"",t,3),be(a.group??"",t,2));if(r===0)return-1;s+=r}return s}class Ge extends _{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}isAriaSelected(e,s){return e}get resultCount(){return this.entries.length}commit(e){}filterItems(e,s){const t=s.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((r,n)=>({item:r,index:n,score:Ya(r,t)})).filter(r=>r.score>=0).sort((r,n)=>n.score-r.score||r.index-n.index).map(r=>r.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,s=this.query,t=this.entriesCache;if(t.source===e&&t.query===s)return t.entries;const r=this.buildEntries(e,s);return t.source=e,t.query=s,t.entries=r,r}buildEntries(e,s){const t=this.filterItems(e,s),r=t.filter(i=>!i.group),n=Array.from(new Set(t.filter(i=>i.group).map(i=>i.group)));return[...r,...n.flatMap(i=>t.filter(d=>d.group===i))].map((i,d)=>({id:`option-${d}`,item:i}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(s=>s.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,s=[];for(const t of this.entries){const r=t.item.group??"";let n=s.find(o=>o.label===r);n||(n={key:`group-${s.length}`,label:r,hasLabel:!!r,options:[]},s.push(n)),n.options.push(this.decorate(t,e))}return s}decorate(e,s){const{item:t,id:r}=e,n=!!t.disabled,o=this.isSelected(t);return{id:r,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:n,ariaSelected:this.isAriaSelected(o,r===s)?"true":"false",ariaDisabled:n?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",o?"option--selected":"",r===s?"option--active":"",n?"option--disabled":""].filter(Boolean).join(" "),part:z("option",{selected:o,active:r===s,disabled:n})}}activateSelected(){const e=this.enabledEntries.find(s=>this.isSelected(s.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const s=this.enabledEntries;if(!s.length)return;const r=(s.findIndex(n=>n.id===this.resolvedActiveId)+e+s.length)%s.length;this.activeId=s[r].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const s=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);s&&this.commit(s.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const s=e.currentTarget.dataset.optionId,t=this.entries.find(r=>r.id===s);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const s=e.currentTarget.dataset.optionId;if(s===this.resolvedActiveId)return;const t=this.entries.find(r=>r.id===s);t&&!t.item.disabled&&(this.activeId=t.id)}}y(Ge,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const Ja=h(Ge,{tmpl:Ua,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Me(a){return!a||typeof a.getAnimations!="function"?Promise.resolve():Promise.allSettled(a.getAnimations({subtree:!0}).map(e=>e.finished))}const Xa={results:a=>a===1?"1 result":`${a} results`},Za=[];class We extends Ja{constructor(...e){super(...e);this.label="",this.ariaLabel="",this.placeholder="",this.items=[],this.messages={},this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=s=>{this.open&&s.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const s=this._open;this._open=e,e&&(this.isMounted=!0),typeof document!="undefined"&&(!s&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):s&&!e&&(this.unlockBodyScroll(),this.dialog?.close?.(),this.previouslyFocused?.focus(),this.previouslyFocused=null))}get source(){return this.items??Za}isAriaSelected(e,s){return s}get resultsText(){return{...Xa,...this.messages}.results(this.resultCount)}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){typeof document!="undefined"&&document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get accessibleLabel(){return this.ariaLabel||this.label}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.showModal(),this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");Me(e).then(()=>{this.open||(this.isMounted=!1)})}}get dialog(){return this.template.querySelector("dialog")}showModal(){const e=this.dialog;e&&!e.open&&typeof e.showModal=="function"&&e.showModal()}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}y(We,{publicProps:{label:{config:0},ariaLabel:{config:0},placeholder:{config:0},items:{config:0},messages:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const er=h(We,{tmpl:Wa,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),tr=b`<img class="logo-mark${0}" src="/assets/logo.png" alt width="32" height="32"${2}>`,ar=b`<span class="shortcut${0}"${2}>${"t1"}</span>`,rr=b`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,sr={classMap:{header:!0},key:0},nr={classMap:{container:!0},key:1},or={classMap:{logo:!0},props:{href:"/"},key:2},ir={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:5},lr={"nav-link":!0},dr={classMap:{actions:!0},key:7},cr={variant:"secondary",size:"sm"},pr={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:11},hr={props:{size:"sm",label:"GitHub"},key:12};function se(a,e,s,t){const{st:r,t:n,c:o,k:i,d,i:c,h:l,b:p,sp:v}=a,{_m0:k,_m1:E}=t;return[l("header",sr,[l("div",nr,[o("fandry-link",C,or,[r(tr,4),n("Fandry UI")]),l("nav",ir,c(e.navItems,function(S){return o("fandry-link",C,{classMap:lr,props:{href:S.href,elementProps:S.elementProps},key:i(6,S.href)},[n(d(S.label))])})),l("div",dr,[o("fandry-button",M,{props:cr,key:8,on:k||(t._m0={click:p(e.handlePaletteOpen)})},[n("Search "),r(ar,10,[v(1,null,d(e.shortcutHint))])]),o("fandry-link",C,pr,[o("fandry-icon",Ke,hr,[r(rr,14)])])])])]),o("fandry-command",er,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:15,on:E||(t._m1={toggle:p(e.handlePaletteToggle),select:p(e.handlePaletteSelect)})})]}var fr=u(se);se.stylesheets=[],se.stylesheetToken="lwc-2hoqs8gnsf6",se.legacyStylesheetToken="fandryui-siteHeader_siteHeader",Le&&se.stylesheets.push.apply(se.stylesheets,Le),m(se);const ur=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],mr=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
<div class="brand" onclick={handleNoopClick}>
  <fandry-breadcrumb>
    <fandry-breadcrumb-item href="#">Home</fandry-breadcrumb-item>
    <fandry-breadcrumb-item href="#">Shoes</fandry-breadcrumb-item>
    <fandry-breadcrumb-item current>Stride Runner</fandry-breadcrumb-item>
  </fandry-breadcrumb>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-text-muted: 160 15% 38%;
}

fandry-breadcrumb::part(list) {
  padding: 0.5rem 1rem;
  background: hsl(160 40% 96%);
  border-radius: 999px;
}

fandry-breadcrumb-item::part(separator) {
  color: hsl(160 84% 26%);
}

fandry-breadcrumb-item::part(link) {
  font-weight: 600;
  text-decoration: none;
}`},category:"Layout",description:"A navigation trail of ancestor pages \u2014 pair with fandry-breadcrumb-item for each crumb.",props:[{name:"aria-label",type:"string",default:"\u2014",description:'Names this nav landmark, e.g. "Folder path". Overrides messages.label.'},{name:"messages",type:"{ label }",default:"{}",description:'Replaces the default name ("Breadcrumb") for every instance, e.g. to translate it.'}],code:`<fandry-breadcrumb>
  <fandry-breadcrumb-item href="/">Home</fandry-breadcrumb-item>
  <fandry-breadcrumb-item href="/components">Components</fandry-breadcrumb-item>
  <fandry-breadcrumb-item current>Breadcrumb</fandry-breadcrumb-item>
</fandry-breadcrumb>`},{slug:"breadcrumb-item",name:"Breadcrumb Item",tag:"fandry-breadcrumb-item",parts:["base","separator","link"],states:["current"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
<div class="brand" onclick={handleNoopClick}>
  <fandry-breadcrumb>
    <fandry-breadcrumb-item href="#">Home</fandry-breadcrumb-item>
    <fandry-breadcrumb-item href="#">Shoes</fandry-breadcrumb-item>
    <fandry-breadcrumb-item current>Stride Runner</fandry-breadcrumb-item>
  </fandry-breadcrumb>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-text-muted: 160 15% 38%;
}

fandry-breadcrumb::part(list) {
  padding: 0.5rem 1rem;
  background: hsl(160 40% 96%);
  border-radius: 999px;
}

fandry-breadcrumb-item::part(separator) {
  color: hsl(160 84% 26%);
}

fandry-breadcrumb-item::part(link) {
  font-weight: 600;
  text-decoration: none;
}`},category:"Layout",description:"A single crumb inside fandry-breadcrumb, with a current-page state.",props:[{name:"href",type:"string",default:"''",description:"Link target \u2014 omitted (along with the current page) renders as plain text."},{name:"current",type:"boolean",default:"false",description:"Marks this as the current page (plain text, not a link, + aria-current)."}],code:'<fandry-breadcrumb-item href="/components">Components</fandry-breadcrumb-item>'},{slug:"card",name:"Card",tag:"fandry-card",parts:["base"],customize:{title:"Custom colors and parts",demo:"card-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-card class="promo">
    <fandry-heading level="4">Summer sale</fandry-heading>
    <fandry-text variant="muted">Up to 40% off trail gear, this week only.</fandry-text>
  </fandry-card>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-lg: 1.25rem;
  --fd-border: 160 30% 85%;
  --fd-text-muted: 160 15% 38%;
}

fandry-card::part(base) {
  padding: 1.5rem;
  box-shadow: 0 8px 24px hsl(160 40% 20% / 0.12);
}

/* One card only, gradient and all. */
.promo::part(base) {
  background: linear-gradient(135deg, hsl(160 60% 95%), hsl(45 90% 93%));
}`},category:"Layout",description:"A bordered, padded surface for grouping related content.",props:[],code:`<fandry-card>
  <fandry-heading level="3">Pro Plan</fandry-heading>
  <fandry-text variant="muted">Everything in Free, plus priority support.</fandry-text>
</fandry-card>`},{slug:"divider",name:"Divider",tag:"fandry-divider",parts:["base"],customize:{title:"Custom colors and parts",demo:"divider-theme",code:`<!-- template -->
<div class="brand stack narrow">
  <fandry-text>Free shipping over $50</fandry-text>
  <fandry-divider></fandry-divider>
  <fandry-text>30-day returns</fandry-text>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-border: 160 84% 26%;
  --fd-border-width: 3px;
}

fandry-divider::part(base) {
  border-radius: 999px;
  opacity: 0.35;
}`},category:"Layout",description:"A horizontal or vertical rule for separating content.",props:[{name:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'",description:"Rule direction."}],code:`<fandry-divider></fandry-divider>
<fandry-divider orientation="vertical"></fandry-divider>`},{slug:"pagination",name:"Pagination",tag:"fandry-pagination",parts:["base","link","previous","eyebrow","title","next","status","button"],states:["disabled"],customize:{title:"Custom colors and parts",demo:"pagination-theme",code:`<!-- template -->
<div class="brand stack">
  <fandry-pagination
    previous-href="#"
    previous-label="Sizing guide"
    next-href="#"
    next-label="Care instructions"
    onclick={handleNoopClick}
  ></fandry-pagination>
  <fandry-pagination page-index={pageIndex} page-count="5" onchange={handlePageChange}></fandry-pagination>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-lg: 1rem;
  --fd-radius-md: 999px;
  --fd-border: 160 30% 85%;
}

fandry-pagination::part(link) {
  background: hsl(160 40% 97%);
}

fandry-pagination::part(eyebrow) {
  color: hsl(160 84% 26%);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

fandry-pagination::part(title) {
  font-weight: 700;
}

fandry-pagination::part(status) {
  font-weight: 600;
}`},category:"Layout",description:"Previous/next navigation between pages. Links between two adjacent pages, or Previous / Page N of M / Next buttons for paging a collection.",props:[{name:"previous-href",type:"string",default:"''",description:"Omit to hide the previous link (e.g. on the first page)."},{name:"previous-label",type:"string",default:"''",description:"Title of the previous page."},{name:"next-href",type:"string",default:"''",description:"Omit to hide the next link (e.g. on the last page)."},{name:"next-label",type:"string",default:"''",description:"Title of the next page."},{name:"page-index",type:"number",default:"undefined",description:"Zero-based current page. Setting it switches from links to Previous/Next buttons; listen for `change` (detail.pageIndex) and update it. Replace controls via the previous, status and next slots, or just the buttons' words via previous-text and next-text."},{name:"page-count",type:"number",default:"-1",description:"Total pages in page mode; -1 means unknown (Next stays enabled)."},{name:"aria-label",type:"string",default:"\u2014",description:'Names this nav landmark, e.g. "Results pages". Overrides messages.label.'},{name:"messages",type:"{ label, status(page, pageCount) }",default:"{}",description:`Replaces the default landmark name ("Pagination") and page mode's status line, e.g. to translate them. Link mode's "Previous" / "Next" lines are the previous-eyebrow and next-eyebrow slots.`}],code:`<fandry-pagination
  previous-href="/components/pagination"
  previous-label="Pagination"
  next-href="/components/sidebar"
  next-label="Sidebar"
></fandry-pagination>`,examples:[{title:"Page mode",demo:"pagination-pages",code:`<!-- template -->
<fandry-pagination
  page-index={pageIndex}
  page-count={pageCount}
  onchange={handlePageChange}
></fandry-pagination>

// component
pageIndex = 0;
pageCount = 5;

handlePageChange(event) {
  this.pageIndex = event.detail.pageIndex;
}`}]},{slug:"sidebar",name:"Sidebar",tag:"fandry-sidebar",parts:["base"],customize:{title:"Custom colors and parts",demo:"sidebar-theme",code:`<!-- template -->
<div class="brand narrow" onclick={handleNoopClick}>
  <fandry-sidebar aria-label="Shop">
    <fandry-sidebar-item href="#" active>Shoes</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Bags</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Home</fandry-sidebar-item>
  </fandry-sidebar>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-md: 999px;
}

fandry-sidebar::part(base) {
  padding: 0.5rem;
  background: hsl(160 40% 97%);
  border-radius: 1rem;
}

fandry-sidebar-item::part(link) {
  font-weight: 600;
}`},category:"Layout",description:"A vertical navigation rail \u2014 pair with fandry-sidebar-item for links.",props:[{name:"aria-label",type:"string",default:"\u2014",description:'Names this nav landmark, e.g. "Components". Overrides messages.label.'},{name:"messages",type:"{ label }",default:"{}",description:'Replaces the default name ("Sidebar") for every instance, e.g. to translate it.'}],code:`<fandry-sidebar aria-label="Components">
  <fandry-sidebar-item href="/components/button" active>Button</fandry-sidebar-item>
  <fandry-sidebar-item href="/components/card">Card</fandry-sidebar-item>
</fandry-sidebar>`},{slug:"sidebar-item",name:"Sidebar Item",tag:"fandry-sidebar-item",parts:["base","link"],states:["current"],customize:{title:"Custom colors and parts",demo:"sidebar-theme",code:`<!-- template -->
<div class="brand narrow" onclick={handleNoopClick}>
  <fandry-sidebar aria-label="Shop">
    <fandry-sidebar-item href="#" active>Shoes</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Bags</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Home</fandry-sidebar-item>
  </fandry-sidebar>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-md: 999px;
}

fandry-sidebar::part(base) {
  padding: 0.5rem;
  background: hsl(160 40% 97%);
  border-radius: 1rem;
}

fandry-sidebar-item::part(link) {
  font-weight: 600;
}`},category:"Layout",description:"A single navigation row for fandry-sidebar, with an active/current-page state.",props:[{name:"href",type:"string",default:"''",description:"Link target."},{name:"active",type:"boolean",default:"false",description:"Marks this as the current page (styling + aria-current)."}],code:'<fandry-sidebar-item href="/components/card" active>Card</fandry-sidebar-item>'},{slug:"heading",name:"Heading",tag:"fandry-heading",parts:["base"],customize:{title:"Custom colors and parts",demo:"heading-theme",code:`<!-- template -->
<div class="brand stack">
  <fandry-heading level="4" class="eyebrow">New arrivals</fandry-heading>
  <fandry-heading level="2">The summer collection</fandry-heading>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-font-heading: Georgia, "Times New Roman", serif;
  --fd-text: 160 40% 14%;
  --fd-heading-letter-spacing: -0.02em;
}

fandry-heading.eyebrow::part(base) {
  font-family: system-ui, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: hsl(160 84% 26%);
}`},category:"Typography",description:"A semantically-leveled heading, sized off the shared type scale.",props:[{name:"level",type:"1 | 2 | 3 | 4 | 5 | 6",default:"2",description:'Heading level (role="heading" aria-level, not a real h1-h6).'}],code:'<fandry-heading level="2">Section title</fandry-heading>'},{slug:"icon",name:"Icon",tag:"fandry-icon",parts:["base"],customize:{title:"Custom colors and parts",demo:"icon-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-icon size="md">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9L22 9.3l-5.5 4.8L18 21l-6-3.6L6 21l1.5-6.9L2 9.3l7.1-.4z"></path>
    </svg>
  </fandry-icon>
  <fandry-icon size="md" class="large">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9L22 9.3l-5.5 4.8L18 21l-6-3.6L6 21l1.5-6.9L2 9.3l7.1-.4z"></path>
    </svg>
  </fandry-icon>
</div>

/* css */
fandry-icon::part(base) {
  box-sizing: content-box;
  padding: 0.5rem;
  color: hsl(45 90% 45%);
  background: hsl(45 90% 94%);
  border-radius: 999px;
}

/* One icon only, at any size. */
.large::part(base) {
  width: 2.5rem;
  height: 2.5rem;
}`},category:"Typography",description:"A sizing/color frame around a slotted glyph \u2014 brings no icon set of its own.",props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Icon size."},{name:"label",type:"string",default:"''",description:"Set only when the icon is the sole content conveying meaning (icon-only button)."},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label."}],code:`<fandry-icon size="md" label="Favorite">
  <svg viewBox="0 0 24 24">...</svg>
</fandry-icon>`},{slug:"label",name:"Label",tag:"fandry-label",parts:["base","required"],customize:{title:"Custom colors and parts",demo:"label-theme",code:`<!-- template -->
<div class="brand stack narrow">
  <label for="theme-email"><fandry-label required>Email</fandry-label></label>
  <input id="theme-email" type="email" class="native-input" placeholder="you@brand.com" />
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-text: 160 40% 14%;
}

fandry-label::part(base) {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

fandry-label::part(required) {
  color: hsl(160 84% 26%);
}`},category:"Typography",description:"The text of a form label, with an optional required indicator. Put it inside your own `<label>`, or in the `label` slot of a field.",notes:[{title:"Why you write the <label> yourself",paragraphs:["A label finds its control by id, and the browser looks an id up inside one shadow root only. A `<label>` rendered inside `fandry-label` could never reach a control outside it: it would look right, give the control no name for a screen reader, and do nothing when clicked.","So you write the `<label>`, beside its control, and `fandry-label` goes inside it as the text. That is how web components work, not something particular to this library: each component is a tree of its own, so two elements that refer to each other have to be in the same one.","The fields (`fandry-input`, `fandry-textarea`, `fandry-select`, `fandry-combobox`, `fandry-lookup`) follow the same rule from the inside. Each renders its own `<label>` next to its own control, so they take the label as a prop or a slot and need no `fandry-label`."]}],props:[{name:"required",type:"boolean",default:"false",description:"Shows the required asterisk. It is only the mark: set `required` on your control as well. In a field's `label` slot the field shows it instead, from its own `required`."},{name:"html-for",type:"string",default:"\u2014",description:"Deprecated: it does nothing. The `for` goes on the `<label>` you wrap this in."}],code:`<!-- with your own control -->
<label for="username"><fandry-label required>Username</fandry-label></label>
<input id="username" />

<!-- in a field's label slot: it looks like the field's label, and the
     field shows the asterisk -->
<fandry-input required>
  <fandry-label slot="label">Username</fandry-label>
</fandry-input>`},{slug:"text",name:"Text",tag:"fandry-text",parts:["base"],states:["default","muted"],customize:{title:"Custom colors and parts",demo:"text-theme",code:`<!-- template -->
<div class="brand stack narrow">
  <fandry-text>Every pair is made to order in our Porto workshop.</fandry-text>
  <fandry-text variant="muted" size="sm">Ships in 5 to 7 days.</fandry-text>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-font-sans: Georgia, "Times New Roman", serif;
  --fd-text: 160 40% 14%;
  --fd-text-muted: 160 15% 38%;
}

fandry-text::part(base) {
  line-height: 1.7;
}`},category:"Typography",description:"Body text \u2014 pick the rendered tag and size independently.",props:[{name:"as",type:"'p' | 'span' | 'div'",default:"'p'",description:"Layout: block (p/div) or inline (span)."},{name:"size",type:"'xs' | 'sm' | 'md'",default:"'md'",description:"Font size."},{name:"variant",type:"'default' | 'muted'",default:"'default'",description:"Text color."}],code:'<fandry-text variant="muted" size="sm">Helper text</fandry-text>'},{slug:"button",name:"Button",tag:"fandry-button",examples:[{title:"A loading state, with a slot",demo:"button-loading",code:`<!-- template: the spinner is just slotted content -->
<fandry-button element-props={saveButtonProps} onclick={handleSave}>
  <template lwc:if={saving}>
    <fandry-spinner size="sm" aria-hidden="true"></fandry-spinner>
  </template>
  {saveLabel}
</fandry-button>

// js
saving = false;

// The text says what's happening; the spinner beside it is decoration.
get saveLabel() {
  return this.saving ? 'Saving\u2026' : 'Save';
}

// aria-disabled, not disabled: disabling the focused button would drop
// focus to the page. It keeps focus but ignores clicks, so handleSave
// can't run twice. tabIndex: 0 is fandry-button's own default.
get saveButtonProps() {
  return { tabIndex: 0, ariaDisabled: this.saving ? 'true' : null };
}

async handleSave() {
  this.saving = true;
  try {
    await this.save();
  } finally {
    this.saving = false;
  }
}

<!-- Need it on many screens? Wrap it once in your own small component that
     renders fandry-button like this: composition, nothing copied. -->`}],parts:["base"],states:["default","secondary","ghost","disabled"],customize:{title:"Custom colors and parts",demo:"button-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-button class="cta">Add to cart</fandry-button>
  <fandry-button variant="secondary">Save for later</fandry-button>
  <fandry-button variant="ghost">Share</fandry-button>
  <fandry-button class="rainbow">Launch sale</fandry-button>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
  --fd-radius-md: 999px;
}

fandry-button::part(base) {
  font-weight: 700;
  letter-spacing: 0.02em;
}

fandry-button.cta::part(base) {
  padding-inline: 1.5rem;
}

/* The glow goes on the element, not the part: a box-shadow on the part
   would replace the button's focus ring. */
fandry-button.cta {
  filter: drop-shadow(0 6px 12px hsl(160 84% 26% / 0.35));
}

/* A variant is a state too: only secondary buttons. */
fandry-button::part(base secondary) {
  color: hsl(160 84% 26%);
  border-color: hsl(160 84% 26%);
}

/* Even a rainbow border is only CSS: two layers under the label, on the
   part's own ::before and ::after. No copy of the component needed. */
fandry-button.rainbow::part(base) {
  position: relative;
  isolation: isolate;
  border-color: transparent;
  background: transparent;
  color: hsl(160 40% 14%);
}

fandry-button.rainbow::part(base)::before,
fandry-button.rainbow::part(base)::after {
  content: '';
  position: absolute;
  border-radius: inherit;
}

fandry-button.rainbow::part(base)::before {
  inset: -1px;
  z-index: -2;
  background: conic-gradient(#ff4d4d, #ffb84d, #f5f54d, #4dff88, #4dd2ff, #7a4dff, #ff4de1, #ff4d4d);
  animation: rainbow-turn 4s linear infinite;
}

fandry-button.rainbow::part(base)::after {
  inset: 2px;
  z-index: -1;
  background: hsl(0 0% 100%);
}

@keyframes rainbow-turn {
  to {
    filter: hue-rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  fandry-button.rainbow::part(base)::before {
    animation: none;
  }
}`},category:"Forms",description:"A native button with `default`/`secondary`/`ghost` variants and three sizes.",props:[{name:"variant",type:"'default' | 'secondary' | 'ghost'",default:"'default'",description:"Visual style."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Button size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the button. A button that must keep focus (one that is saving) takes `element-props={ tabIndex: 0, ariaDisabled: 'true' }` instead: it looks the same, has the same `disabled` state, and its clicks are ignored."},{name:"type",type:"'button' | 'submit' | 'reset'",default:"'button'",description:"Native button type."}],code:'<fandry-button variant="secondary" size="lg">Save</fandry-button>'},{slug:"checkbox",name:"Checkbox",tag:"fandry-checkbox",parts:["base","control","indicator","label"],states:["checked","indeterminate","disabled"],customize:{title:"Custom colors and parts",demo:"checkbox-theme",code:`<!-- template -->
<div class="brand stack">
  <fandry-checkbox label="Gift wrap this order" checked></fandry-checkbox>
  <fandry-checkbox label="Email me about new arrivals"></fandry-checkbox>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
  --fd-radius-sm: 0.375rem;
}

fandry-checkbox::part(control) {
  border-color: hsl(160 84% 26%);
}

fandry-checkbox::part(label) {
  font-weight: 600;
}

/* A state: only the checked box. A glow, as a filter: the box draws
   its focus ring with box-shadow. */
fandry-checkbox::part(control checked) {
  filter: drop-shadow(0 0 3px hsl(160 84% 26% / 0.45));
}`},category:"Forms",description:"A checkbox with a built-in label and indeterminate support.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"Checked state."},{name:"indeterminate",type:"boolean",default:"false",description:"Visual mixed state (synced onto the native input imperatively)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the checkbox."},{name:"default slot",type:"slot",default:"the label prop",description:"Markup in place of the label. Shown even without the label prop."}],code:'<fandry-checkbox label="Accept terms" onchange={handleChange}></fandry-checkbox>'},{slug:"combobox",name:"Combobox",tag:"fandry-combobox",parts:["base","label","required","control","input","chevron","panel","listbox","group","group-label","option","option-label","option-description","empty","help-text","error-text"],states:["disabled","invalid","selected","active"],customize:{title:"Custom colors and parts",demo:"combobox-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-combobox
    label="Category"
    placeholder="Search categories"
    options={options}
    value={value}
    onchange={handleChange}
  ></fandry-combobox>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 0.75rem;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
  --fd-bg-muted: 160 40% 94%;
}

fandry-combobox::part(control) {
  background: hsl(160 40% 98%);
  font-weight: 600;
}

fandry-combobox::part(group-label) {
  color: hsl(160 84% 26%);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

fandry-combobox::part(option-description) {
  font-style: italic;
}`},category:"Forms",description:"A searchable select \u2014 type to narrow the options, then pick one.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown when nothing is selected or typed."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"error-text",type:"string",default:"''",description:"An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused."},{name:"name",type:"string",default:"''",description:"Exposed as `data-name` on the input."},{name:"options",type:"{ label, value, description?, group?, keywords?, disabled? }[]",default:"[]",description:"The options. Search matches label, description, keywords and group; a prefix in the label ranks first."},{name:"value",type:"string",default:"''",description:"Selected value. Listen for `change` (detail is the new value)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"required",type:"boolean",default:"false",description:"Marks the field required (asterisk + aria-required)."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native input (e.g. `{ tabIndex: 2 }`); keys the component controls are ignored with a warning."},{name:"empty (slot)",type:"slot",default:"'No results'",description:"Replaces the message shown when nothing matches."},{name:"label \xB7 help-text \xB7 error-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label, help text or error text. Shown even without the matching prop."}],code:`<fandry-combobox
  label="Framework"
  placeholder="Search frameworks"
  options={frameworkOptions}
  value={value}
  onchange={handleChange}
></fandry-combobox>`,examples:[{title:"Custom rows and empty state",demo:"combobox-custom",code:`<!-- template -->
<fandry-combobox label="Plan" options={planOptions}
  value={value} onchange={handleChange}>
  <span slot="empty">No plan matches.</span>
</fandry-combobox>

// component
import PlanRow from 'my/planRow'; // your LWC: @api icon, label, hint

planOptions = [
  {
    label: 'Free', value: 'free', component: PlanRow,
    componentProps: { icon: '\u{1F331}', label: 'Free' }
  },
  {
    label: 'Pro', value: 'pro', component: PlanRow,
    componentProps: { icon: '\u{1F48E}', label: 'Pro', hint: 'Popular' }
  }
];

// The component draws only the inside of the row; the row keeps its
// highlight, hover and click. Search still matches on \`label\`
// (and keywords/description), so give every item a real one.`},{title:"Build on the base class: own template, async search",demo:"search-custom",code:`<!-- template: your own markup, bound to the inherited handlers -->
<input role="combobox" aria-expanded="true"
  aria-controls="people"
  aria-activedescendant={activeDescendant}
  oninput={handleInput}
  onkeydown={handleInputKeydown} />
<ul id="people" role="listbox"
  onmousedown={handleListboxMouseDown}>
  <template for:each={renderGroups} for:item="group">
    <template for:each={group.options} for:item="option">
      <li key={option.id} id={option.id} class={option.classes}
        role="option" data-option-id={option.id}
        onclick={handleOptionClick}
        onmousemove={handleOptionMouseMove}>
        {option.label}
      </li>
    </template>
  </template>
</ul>

// component
import FdSearchState from 'fandry/searchState';

export default class PeopleSearch extends FdSearchState {
  results = [];

  // what to list
  protected get source() { return this.results; }
  // the server already filtered
  protected filterItems(items) { return items; }
  // what picking one does
  protected commit(item) { this.picked = item.label; }

  // start the search
  protected setQuery(value) {
    super.setQuery(value);
    fetchPeople(value).then((people) => (this.results = people));
  }
}

// Keep the input and the options in the same template: aria-activedescendant
// can't point across a shadow boundary.`}]},{slug:"input",name:"Input",tag:"fandry-input",examples:[{title:"An error",demo:"input-error",code:`<!-- template -->
<fandry-input label="Email" type="email" required
  help-text="We'll send the receipt here."
  error-text={emailError} value={email}
  oninput={handleInput} onchange={handleChange}></fandry-input>

// component
email = '';
emailError = '';

// Checked when the field is left: an error while still typing is noise.
handleChange(event) {
  this.email = event.detail;
  this.emailError = this.check(this.email);
}

// Once there is an error, it goes as soon as the value is right.
handleInput(event) {
  this.email = event.detail;
  if (this.emailError) this.emailError = this.check(this.email);
}

// A field is invalid while it has error text: there is no separate flag.
// The control gets aria-invalid and the error as its description, and a
// screen reader hears the error when it appears. Textarea, select,
// combobox and lookup take error-text the same way.
//
// Markup instead of a string goes in the slot:
//   <span slot="error-text">Taken. <a href="/login">Sign in?</a></span>

/* css: the field while it is invalid, and the message */
fandry-input::part(control invalid) { background: hsl(0 80% 98%); }
fandry-input::part(error-text) { font-weight: 600; }`}],parts:["base","label","control","prefix","input","suffix","help-text","error-text","required"],states:["disabled","invalid"],customize:{title:"Custom colors and parts",demo:"input-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-input label="Email" type="email" placeholder="you@brand.com" required>
    <span slot="help-text">We'll send your receipt here. <a href="#privacy">How we use it</a></span>
  </fandry-input>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 999px;
  --fd-border: 160 30% 80%;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
}

fandry-input::part(control) {
  padding-inline: 1rem;
  background: hsl(160 40% 98%);
}

fandry-input::part(label) {
  font-weight: 700;
}

fandry-input::part(required) {
  color: hsl(160 84% 26%);
}

fandry-input::part(help-text) {
  font-style: italic;
}`},category:"Forms",description:"A text input with a label, help text, and prefix/suffix slots.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"error-text",type:"string",default:"''",description:"An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused."},{name:"type",type:"string",default:"'text'",description:"Native input type (email, password, ...)."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Field size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"label \xB7 help-text \xB7 error-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label, help text or error text (a link, an icon). Shown even without the matching prop."}],code:'<fandry-input label="Email" type="email" placeholder="you@company.com"></fandry-input>'},{slug:"link",name:"Link",tag:"fandry-link",parts:["base","link"],states:["default","muted","disabled","current"],customize:{title:"Custom colors and parts",demo:"link-theme",code:`<!-- template -->
<div class="brand" onclick={handleNoopClick}>
  <fandry-text>
    Not the right size? See <fandry-link href="#">shipping and returns</fandry-link>.
  </fandry-text>
</div>

/* css */
fandry-link::part(link) {
  color: hsl(160 84% 26%);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid hsl(160 84% 26% / 0.3);
}

fandry-link::part(link):hover {
  border-bottom-color: currentColor;
}`},category:"Forms",description:"Anchor styling with default/muted variants and a disabled state.",props:[{name:"href",type:"string",default:"''",description:"Link target."},{name:"target",type:"'_self' | '_blank' | '_parent' | '_top'",default:"'_self'",description:"Native anchor target."},{name:"variant",type:"'default' | 'muted'",default:"'default'",description:"Visual style."},{name:"disabled",type:"boolean",default:"false",description:"Renders with no href, removing it from tab order."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native `<a>` (e.g. `{ title: 'Docs' }`). `{ ariaCurrent: 'page' }` marks a nav's current page for assistive tech and adds the `current` state."}],code:'<fandry-link href="https://github.com/rahulgawale/fandryui" target="_blank">GitHub</fandry-link>'},{slug:"radio",name:"Radio",tag:"fandry-radio",parts:["base","control","indicator","label"],states:["checked","disabled"],customize:{title:"Custom colors and parts",demo:"radio-theme",code:`<!-- template -->
<div class="brand">
  <fandry-radio-group name="theme-shipping" value="standard" label="Shipping">
    <fandry-radio name="theme-shipping" value="standard" label="Standard" checked></fandry-radio>
    <fandry-radio name="theme-shipping" value="express" label="Express"></fandry-radio>
    <fandry-radio name="theme-shipping" value="pickup" label="Pick up in store"></fandry-radio>
  </fandry-radio-group>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
}

fandry-radio-group::part(label) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

fandry-radio-group::part(list) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

fandry-radio::part(control) {
  border-color: hsl(160 84% 26%);
}

fandry-radio::part(label) {
  font-weight: 600;
}`},category:"Forms",description:"A single radio input \u2014 pair with fandry-radio-group for the roving-tabindex group.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"name",type:"string",default:"''",description:"Radio group name (must match the group)."},{name:"value",type:"string",default:"''",description:"This option's value."},{name:"checked",type:"boolean",default:"false",description:"Checked state."},{name:"default slot",type:"slot",default:"the label prop",description:"Markup in place of the label. Shown even without the label prop."}],code:`<fandry-radio-group name="plan" value="pro" label="Choose a plan">
  <fandry-radio name="plan" value="free" label="Free"></fandry-radio>
  <fandry-radio name="plan" value="pro" label="Pro"></fandry-radio>
</fandry-radio-group>`},{slug:"radio-group",name:"Radio Group",tag:"fandry-radio-group",parts:["base","label","list"],customize:{title:"Custom colors and parts",demo:"radio-theme",code:`<!-- template -->
<div class="brand">
  <fandry-radio-group name="theme-shipping" value="standard" label="Shipping">
    <fandry-radio name="theme-shipping" value="standard" label="Standard" checked></fandry-radio>
    <fandry-radio name="theme-shipping" value="express" label="Express"></fandry-radio>
    <fandry-radio name="theme-shipping" value="pickup" label="Pick up in store"></fandry-radio>
  </fandry-radio-group>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
}

fandry-radio-group::part(label) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

fandry-radio-group::part(list) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

fandry-radio::part(control) {
  border-color: hsl(160 84% 26%);
}

fandry-radio::part(label) {
  font-weight: 600;
}`},category:"Forms",description:"A roving-tabindex container for a set of fandry-radio buttons.",props:[{name:"name",type:"string",default:"''",description:"Shared name for every radio in the group."},{name:"value",type:"string",default:"''",description:"Selected value."},{name:"label",type:"string",default:"''",description:"Group label (rendered as the fieldset legend equivalent)."},{name:"label (slot)",type:"slot",default:"the label prop",description:"Markup in place of the group label. Shown even without the label prop."}],code:`<fandry-radio-group name="plan" value="pro" label="Choose a plan">
  <fandry-radio name="plan" value="free" label="Free"></fandry-radio>
  <fandry-radio name="plan" value="pro" label="Pro"></fandry-radio>
  <fandry-radio name="plan" value="enterprise" label="Enterprise"></fandry-radio>
</fandry-radio-group>`},{slug:"select",name:"Select",tag:"fandry-select",parts:["base","label","required","control","value","chevron","listbox","option","group","group-label","help-text","error-text","panel"],states:["disabled","invalid","selected","active"],customize:{title:"Custom colors and parts",demo:"select-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-select label="Size" placeholder="Choose a size" options={options} value="m"></fandry-select>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 0.75rem;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
  --fd-bg-muted: 160 40% 94%;
}

fandry-select::part(control) {
  background: hsl(160 40% 98%);
  font-weight: 600;
}

fandry-select::part(panel) {
  box-shadow: 0 12px 32px hsl(160 40% 20% / 0.18);
}

fandry-select::part(option) {
  padding-block: 0.5rem;
}

/* A state: only the chosen option. */
fandry-select::part(option selected) {
  font-weight: 700;
  color: hsl(160 84% 26%);
}`},category:"Forms",description:"A custom listbox-style select, with optional grouped options.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown when nothing is selected."},{name:"options",type:"{ label, value, disabled?, component?, componentProps? }[]",default:"[]",description:"Flat option list. An option's `component` (with `componentProps`) draws its own row instead of the label -- see the custom options example."},{name:"groups",type:"{ label, options }[]",default:"[]",description:"Grouped option list (used instead of options)."},{name:"value",type:"string",default:"''",description:"Selected value. `''` (or null) is no selection and shows the placeholder, unless an option has that value: give one `value: ''` to offer \"None\"."},{name:"change (event)",type:"CustomEvent<string>",default:"\u2014",description:"Fires when the user picks a different value; `event.detail` is the new value. Not fired when `value` is set from code."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"error-text",type:"string",default:"''",description:"An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused."},{name:"label \xB7 help-text \xB7 error-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label, help text or error text. Shown even without the matching prop."}],code:`<fandry-select
  label="Plan"
  placeholder="Choose a plan"
  options={planOptions}
  value="pro"
></fandry-select>`,examples:[{title:"Custom options",demo:"select-custom",code:`<!-- template -->
<fandry-select label="Plan" options={planOptions}
  value={value} onchange={handleChange}></fandry-select>

// component
import PlanRow from 'my/planRow'; // your LWC: @api icon, label, hint

planOptions = [
  {
    label: 'Free', value: 'free', component: PlanRow,
    componentProps: { icon: '\u{1F331}', label: 'Free' }
  },
  {
    label: 'Pro', value: 'pro', component: PlanRow,
    componentProps: { icon: '\u{1F48E}', label: 'Pro', hint: 'Popular' }
  },
  { label: 'Enterprise', value: 'enterprise', disabled: true } // plain option
];

// The component draws only the inside of the row; the row keeps its
// highlight, hover, keyboard and click, and \`label\` stays the accessible
// name and what typeahead matches, so give every option a real one.
// The chosen option's component is also shown in the closed control.
//
// On Salesforce this uses lwc:is: fandry-select's .js-meta.xml needs the
// lightning__dynamicComponent capability (API 55+), which \`fandry add\` writes.`},{title:"A long list, with the keyboard",demo:"select-long",code:`<!-- template -->
<fandry-select label="Country" placeholder="Choose a country"
  options={countryOptions} value={value} onchange={handleChange}></fandry-select>

// component
handleChange(event) {
  this.value = event.detail;
}

// The list scrolls once it is taller than --fd-listbox-max-height, and
// the option the keyboard is on is kept in view. Hovering never scrolls.
//
// Closed:  Enter, Space, ArrowDown or ArrowUp open the list
//          ArrowLeft / ArrowRight choose the previous or next option
//          typing chooses the option that starts with what was typed
// Open:    ArrowUp / ArrowDown move, and stop at the first and last option
//          Home / End, Page Up / Page Down move further
//          typing moves to a match: "new z" finds New Zealand, and "s"
//          pressed again steps through the options that start with s
//          Enter or Space choose; Escape or Tab close without choosing`}]},{slug:"switch",name:"Switch",tag:"fandry-switch",parts:["base","control","indicator","label"],states:["checked","disabled"],customize:{title:"Custom colors and parts",demo:"switch-theme",code:`<!-- template -->
<div class="brand stack">
  <fandry-switch label="Email me when it's back in stock" checked></fandry-switch>
  <fandry-switch label="Text me delivery updates"></fandry-switch>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-border: 160 20% 80%;
  --fd-ring-color: 160 84% 36%;
}

fandry-switch::part(indicator) {
  box-shadow: 0 1px 3px hsl(0 0% 0% / 0.3);
}

fandry-switch::part(label) {
  font-weight: 600;
}`},category:"Forms",description:"A toggle switch with a built-in label.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"On/off state."},{name:"disabled",type:"boolean",default:"false",description:"Disables the switch."},{name:"default slot",type:"slot",default:"the label prop",description:"Markup in place of the label. Shown even without the label prop."}],code:'<fandry-switch label="Enable notifications" checked></fandry-switch>'},{slug:"textarea",name:"Textarea",tag:"fandry-textarea",parts:["base","label","control","textarea","help-text","error-text","required"],states:["disabled","invalid"],customize:{title:"Custom colors and parts",demo:"textarea-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-textarea label="Gift message" placeholder="Add a note for the recipient" rows="3"></fandry-textarea>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 1rem;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
}

fandry-textarea::part(control) {
  padding: 0.75rem 1rem;
  font-family: Georgia, "Times New Roman", serif;
  background: hsl(45 90% 97%);
}

fandry-textarea::part(label) {
  font-weight: 700;
}`},category:"Forms",description:"A multi-line text input with a label and help text.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"error-text",type:"string",default:"''",description:"An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused."},{name:"rows",type:"number",default:"3",description:"Visible row count."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"label \xB7 help-text \xB7 error-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label, help text or error text. Shown even without the matching prop."}],code:'<fandry-textarea label="Notes" rows="4"></fandry-textarea>'},{slug:"alert",name:"Alert",tag:"fandry-alert",parts:["base","title","body"],states:["info","success","warning","danger"],customize:{title:"Custom colors and parts",demo:"alert-theme",code:`<!-- template -->
<div class="brand stack">
  <fandry-alert title="Free shipping">Orders over $50 ship free, anywhere in the EU.</fandry-alert>
  <fandry-alert variant="success" title="Order placed">We'll email you when it ships.</fandry-alert>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-info: 45 90% 40%;
  --fd-success: 160 84% 26%;
  --fd-radius-md: 0.75rem;
  --fd-surface-tint: 10%;
}

fandry-alert::part(base) {
  border-left-width: 6px;
}

fandry-alert::part(title) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}`},category:"Feedback",description:"An inline banner for a status message, with an optional title.",props:[{name:"variant",type:"'info' | 'success' | 'warning' | 'danger'",default:"'info'",description:"Status color and icon."},{name:"title",type:"string",default:"''",description:"Optional bold title above the message."},{name:"title (slot)",type:"slot",default:"the title prop",description:"Markup in place of the title. Shown even without the title prop."}],code:'<fandry-alert variant="success" title="Saved">Your changes have been saved.</fandry-alert>'},{slug:"badge",name:"Badge",tag:"fandry-badge",parts:["base"],states:["default","primary","success","warning","danger"],customize:{title:"Custom colors and parts",demo:"badge-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-badge variant="danger">Sale</fandry-badge>
  <fandry-badge variant="success">New</fandry-badge>
  <fandry-badge variant="primary">Buy 2, get 1 free</fandry-badge>
  <fandry-badge>Bestseller</fandry-badge>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-success: 160 84% 26%;
  --fd-danger: 350 80% 42%;
  --fd-bg-muted: 45 90% 90%;
}

fandry-badge::part(base) {
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 999px;
}`},category:"Feedback",description:"A small status/label pill.",props:[{name:"variant",type:"'default' | 'primary' | 'success' | 'warning' | 'danger'",default:"'default'",description:"Color variant. The colored ones are soft, not solid, so a column of badges stays quieter than the data beside it. Each derives its fill, border and text from its own color (`--fd-primary`, `--fd-success`, `--fd-warning`, `--fd-danger`) with `--fd-bg`, `--fd-text` and `--fd-surface-tint`, so it follows a rebrand and dark themes."}],code:'<fandry-badge variant="primary">New</fandry-badge>'},{slug:"progress",name:"Progress",tag:"fandry-progress",parts:["base","indicator"],states:["indeterminate"],customize:{title:"Custom colors and parts",demo:"progress-theme",code:`<!-- template -->
<div class="brand stack narrow">
  <fandry-progress value="35" label="Free shipping progress"></fandry-progress>
  <fandry-progress value="80" label="Order progress"></fandry-progress>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-bg-muted: 160 30% 90%;
}

fandry-progress::part(base) {
  height: 0.75rem;
  border-radius: 999px;
}

fandry-progress::part(indicator) {
  border-radius: 999px;
  background: linear-gradient(90deg, hsl(160 84% 26%), hsl(45 90% 50%));
}`},category:"Feedback",description:"A determinate or indeterminate progress bar.",props:[{name:"value",type:"number",default:"0",description:"Current progress, from 0 to max."},{name:"max",type:"number",default:"100",description:"Maximum value."},{name:"label",type:"string",default:"''",description:"Accessible label."},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label."},{name:"indeterminate",type:"boolean",default:"false",description:"Shows an animated bar of unknown duration instead of value/max."}],code:'<fandry-progress value="60" label="Uploading"></fandry-progress>'},{slug:"skeleton",name:"Skeleton",tag:"fandry-skeleton",parts:["base"],customize:{title:"Custom colors and parts",demo:"skeleton-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-skeleton variant="circle"></fandry-skeleton>
  <div class="stack grow">
    <fandry-skeleton variant="text"></fandry-skeleton>
    <fandry-skeleton variant="rect"></fandry-skeleton>
  </div>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 90%;
  --fd-radius-md: 1rem;
  --fd-radius-sm: 999px;
}

fandry-skeleton::part(base) {
  background: linear-gradient(90deg, hsl(160 40% 90%), hsl(45 80% 92%));
}`},category:"Feedback",description:"A loading placeholder shaped like the content it stands in for.",props:[{name:"variant",type:"'text' | 'circle' | 'rect'",default:"'text'",description:"Placeholder shape."}],code:`<fandry-skeleton variant="circle"></fandry-skeleton>
<fandry-skeleton variant="text"></fandry-skeleton>`},{slug:"spinner",name:"Spinner",tag:"fandry-spinner",parts:["base","label"],customize:{title:"Custom colors and parts",demo:"spinner-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-spinner size="sm" label="Loading"></fandry-spinner>
  <fandry-spinner size="md" label="Loading"></fandry-spinner>
  <fandry-spinner size="lg" label="Loading"></fandry-spinner>
  <fandry-spinner size="sm">Saving record\u2026</fandry-spinner>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-spinner-thickness: 0.2em;
}

/* The track is the border color. Set on the spinner alone, it is a tint
   of the primary color here and the border color everywhere else. */
fandry-spinner {
  --fd-border: 160 84% 26% / 0.2;
}

fandry-spinner::part(base) {
  border-right-color: hsl(45 90% 50%);
}

fandry-spinner::part(label) {
  color: hsl(160 84% 26%);
  font-weight: 600;
}`},category:"Feedback",description:"A loading spinner in three sizes, with optional text beside it.",props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Spinner size. The ring's thickness follows it (`--fd-spinner-thickness`, in em of the ring)."},{name:"default slot",type:"slot",default:"\u2014",description:'Text shown beside the ring, e.g. "Loading fields\u2026". It becomes the status a screen reader reads, in place of label.'},{name:"label",type:"string",default:"''",description:'Names a spinner that shows no text, e.g. "Saving changes". Not displayed. Overrides messages.label.'},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label, and is read in place of slotted text."},{name:"messages",type:"{ label }",default:"{}",description:'Replaces the default name ("Loading") for every instance, e.g. to translate it.'}],examples:[{title:"With a label",demo:"spinner-label",code:`<!-- Text in the default slot shows beside the ring. Style it with ::part(label). -->
<fandry-spinner size="sm">Loading fields\u2026</fandry-spinner>
<fandry-spinner size="md">Saving record\u2026</fandry-spinner>
<fandry-spinner size="lg">Converting lead\u2026</fandry-spinner>`}],code:'<fandry-spinner size="md"></fandry-spinner>'},{slug:"loading-overlay",name:"Loading Overlay",tag:"fandry-loading-overlay",parts:["backdrop","panel","spinner","label"],customize:{title:"Custom colors and parts",demo:"loading-overlay-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-button onclick={handleSave}>Save record</fandry-button>
  <fandry-loading-overlay open={saving} label="Saving record\u2026"></fandry-loading-overlay>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-backdrop: 160 40% 10%;
  --fd-backdrop-opacity: 0.4;
  --fd-loading-overlay-delay: 0ms;
}

/* The spinner's track is the border color: a tint of the primary here. */
fandry-loading-overlay {
  --fd-border: 160 84% 26% / 0.2;
}

fandry-loading-overlay::part(backdrop) {
  backdrop-filter: blur(4px);
}

fandry-loading-overlay::part(panel) {
  flex-direction: row;
  padding: 1rem 1.5rem;
  border-radius: 999px;
}

/* The ring is 1em square: its font-size is its size. */
fandry-loading-overlay::part(spinner) {
  font-size: 1.25rem;
}

fandry-loading-overlay::part(label) {
  font-weight: 600;
}`},category:"Feedback",description:"Covers the page, or one panel, while it is busy. A backdrop blocks the pointer and the keyboard, and a panel shows a spinner and a label.",props:[{name:"open",type:"boolean",default:"false",description:"Whether the page or panel is busy. Bind it rather than wrapping the overlay in `lwc:if`: it stays in the page so its label is announced, and so it can fade out."},{name:"contained",type:"boolean",default:"false",description:"Covers the nearest positioned ancestor (position: relative) instead of the viewport, and blocks keys inside its parent element. Put the overlay directly inside the panel it covers."},{name:"label",type:"string",default:"''",description:'The text under the spinner, e.g. "Saving record\u2026". Wins over messages.label. To restyle it (bold, color), use `::part(label)`, not the slot.'},{name:"messages",type:"{ label }",default:"{}",description:'Replaces the default label ("Loading") for every instance, e.g. to translate it.'},{name:"default slot",type:"slot",default:"spinner and label",description:"The whole content of the panel, spinner included: your own indicator, markup in the text, a progress bar, a Cancel button. Its text (minus anything `aria-hidden`) is what is announced, or the label when it has none."}],notes:[{title:"Not a dialog",paragraphs:["It blocks the pointer and the keyboard the moment it opens, but takes no focus and has nothing to close: the page must always set open back to false, on errors and timeouts too. It only shows after `--fd-loading-overlay-delay` (`150ms`), so an operation that finishes sooner never flashes an overlay.","Focus stays where it was. Over the page, keys do nothing until it closes (typing, Tab, Enter, Space, arrow-key scrolling, paste, the page's own shortcuts); the browser's shortcuts and wheel or touch scrolling still work. A contained overlay blocks keys inside the element it is in and lets Tab leave it. Keys still reach content in the overlay once it has focus: focus a Cancel button you put there yourself.","It blocks hardware keys, not every input method: text from an IME or an on-screen keyboard, and a screen reader's own click, can still reach what is behind it. Guard the actions that must not run twice.",'It keeps a polite status region in the page at all times and puts the content\'s text into it once the overlay shows, so a screen reader announces it. A label edited in place while it is open is not announced again. Mark a slotted spinner `aria-hidden="true"`: the region already says what is happening.']}],examples:[{title:"Your own content",demo:"loading-overlay-custom",code:`<!-- template: the default slot replaces the spinner and label, so bring your own indicator -->
<fandry-button onclick={handleImport}>Import contacts</fandry-button>
<fandry-loading-overlay open={importing}>
  <fandry-progress value={percent} label="Import progress"></fandry-progress>
  <fandry-text>Importing contacts\u2026</fandry-text>
  <fandry-button variant="secondary" onclick={handleCancel}>Cancel</fandry-button>
</fandry-loading-overlay>

// js: keys are blocked outside the overlay, so put focus on the action
async handleImport() {
  this.importing = true;
  await Promise.resolve();
  this.template.querySelector('fandry-loading-overlay fandry-button').focus();
}`},{title:"Over one panel",demo:"loading-overlay-contained",code:`<!-- template: the overlay goes directly inside the panel it covers -->
<div class="panel">
  <fandry-card>
    ...
    <fandry-button variant="secondary" onclick={handleRefresh}>Refresh</fandry-button>
  </fandry-card>
  <fandry-loading-overlay open={refreshing} contained label="Refreshing\u2026"></fandry-loading-overlay>
</div>

/* css */
.panel {
  position: relative;
}

/* Follow the panel's corners */
.panel fandry-loading-overlay::part(backdrop) {
  border-radius: var(--fd-radius-lg, 0.5rem);
}`}],code:`<fandry-button onclick={handleConvert}>Convert lead</fandry-button>
<fandry-loading-overlay open={converting} label="Converting lead\u2026"></fandry-loading-overlay>`},{slug:"toast",name:"Toast",tag:"fandry-toast",parts:["base"],states:["info","success","warning","danger"],customize:{title:"Custom colors and parts",demo:"toast-theme",code:`<!-- template -->
<div class="brand panel">
  <fandry-button variant="secondary" onclick={handleAdd}>Add to cart</fandry-button>
  <fandry-toast-viewport placement="bottom-right" contained label="Notifications">
    <template for:each={toasts} for:item="toast">
      <fandry-toast key={toast.id} data-id={toast.id} variant="success" duration="3000" ondismiss={handleDismiss}>
        {toast.message}
      </fandry-toast>
    </template>
  </fandry-toast-viewport>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-success: 160 84% 26%;
  --fd-radius-md: 0.75rem;
}

fandry-toast::part(base) {
  font-weight: 600;
  border-left-width: 6px;
  background: hsl(160 40% 97%);
}

fandry-toast-viewport::part(base) {
  gap: 0.75rem;
}`},category:"Feedback",description:"An auto-dismissing notification \u2014 pair with `fandry-toast-viewport` for placement.",props:[{name:"variant",type:"'info' | 'success' | 'warning' | 'danger'",default:"'info'",description:"Status color."},{name:"duration",type:"number",default:"4000",description:"Milliseconds before auto-dismiss."}],code:`<fandry-toast variant="success" duration="4000" ondismiss={handleDismiss}>
  Changes saved.
</fandry-toast>`},{slug:"toast-viewport",name:"Toast Viewport",tag:"fandry-toast-viewport",parts:["base"],customize:{title:"Custom colors and parts",demo:"toast-theme",code:`<!-- template -->
<div class="brand panel">
  <fandry-button variant="secondary" onclick={handleAdd}>Add to cart</fandry-button>
  <fandry-toast-viewport placement="bottom-right" contained label="Notifications">
    <template for:each={toasts} for:item="toast">
      <fandry-toast key={toast.id} data-id={toast.id} variant="success" duration="3000" ondismiss={handleDismiss}>
        {toast.message}
      </fandry-toast>
    </template>
  </fandry-toast-viewport>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-success: 160 84% 26%;
  --fd-radius-md: 0.75rem;
}

fandry-toast::part(base) {
  font-weight: 600;
  border-left-width: 6px;
  background: hsl(160 40% 97%);
}

fandry-toast-viewport::part(base) {
  gap: 0.75rem;
}`},category:"Feedback",description:"A fixed or contained stacking region that positions `fandry-toast`.",props:[{name:"placement",type:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",default:"'bottom-right'",description:"Corner to stack from."},{name:"contained",type:"boolean",default:"false",description:"position: absolute against the nearest positioned ancestor instead of the viewport."},{name:"label",type:"string",default:"''",description:"Accessible label for the stacking region."},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label."}],code:`<fandry-toast-viewport placement="bottom-right" label="Notifications">
  <fandry-toast variant="info">Heads up.</fandry-toast>
</fandry-toast-viewport>`},{slug:"tooltip",name:"Tooltip",tag:"fandry-tooltip",parts:["trigger","panel","arrow"],customize:{title:"Custom colors and parts",demo:"tooltip-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-tooltip placement="top" open-delay="0">
    <fandry-button slot="trigger" variant="secondary">Hover me</fandry-button>
    Free returns within 30 days
  </fandry-tooltip>
</div>

/* css */
fandry-tooltip::part(panel) {
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  background: hsl(160 84% 26%);
  border-radius: 0.5rem;
}

fandry-tooltip::part(arrow) {
  background: hsl(160 84% 26%);
}`},category:"Feedback",description:"A hover/focus description bubble for a slotted trigger.",props:[{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:"Bubble position relative to the trigger."},{name:"open-delay",type:"number",default:"300",description:"Milliseconds of hover before the bubble opens."}],code:`<fandry-tooltip placement="top">
  <fandry-button slot="trigger" variant="secondary">Hover me</fandry-button>
  Saves your changes
</fandry-tooltip>`},{slug:"avatar",name:"Avatar",tag:"fandry-avatar",parts:["base","image","initials"],customize:{title:"Custom colors and parts",demo:"avatar-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-avatar initials="AL" size="sm"></fandry-avatar>
  <fandry-avatar initials="GH" size="md"></fandry-avatar>
  <fandry-avatar initials="KJ" size="lg"></fandry-avatar>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 90%;
  --fd-text-muted: 160 84% 22%;
}

fandry-avatar::part(base) {
  border-radius: 0.75rem;
  font-weight: 700;
}

fandry-avatar::part(initials) {
  letter-spacing: 0.04em;
}`},category:"Overlays & Data",description:"A circular avatar with an image and initials fallback.",props:[{name:"src",type:"string",default:"''",description:"Image URL \u2014 falls back to initials on error."},{name:"initials",type:"string",default:"''",description:"Fallback initials."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Avatar size."}],code:'<fandry-avatar initials="JD" size="md"></fandry-avatar>'},{slug:"command",name:"Command",tag:"fandry-command",parts:["backdrop","panel","search","input","listbox","group","group-label","option","option-label","option-description","empty"],states:["selected","active","disabled"],customize:{title:"Custom colors and parts",demo:"command-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-button variant="secondary" onclick={handleOpen}>Search the shop</fandry-button>
  <fandry-command
    label="Search the shop"
    placeholder="Search products and pages\u2026"
    items={items}
    open={isOpen}
    ontoggle={handleToggle}
  ></fandry-command>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-lg: 1.25rem;
  --fd-backdrop: 160 40% 10%;
  --fd-backdrop-opacity: 0.45;
  --fd-bg-muted: 160 40% 94%;
}

fandry-command::part(search) {
  border-bottom: 2px solid hsl(160 84% 26%);
}

fandry-command::part(group-label) {
  color: hsl(160 84% 26%);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

fandry-command::part(option-description) {
  font-style: italic;
}`},category:"Overlays & Data",description:"A command palette \u2014 a modal search box over a list of actions. Generic: it reports the chosen value and leaves what it does (and the `Cmd+K`/`Ctrl+K` shortcut) to you.",props:[{name:"open",type:"boolean",default:"false",description:"Whether the palette is shown. Listen for `toggle` (detail is the new state) and update it."},{name:"label",type:"string",default:"''",description:"Accessible name of the palette."},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label."},{name:"placeholder",type:"string",default:"''",description:"Hint shown in the empty search box."},{name:"messages",type:"{ results(count) }",default:"{}",description:'Replaces what a screen reader hears as the list narrows ("3 results"), e.g. to translate it. "No results" is the `empty` slot.'},{name:"items",type:"{ label, value, description?, group?, keywords?, disabled? }[]",default:"[]",description:"The commands. Ungrouped items list first; grouped items sit under their heading."},{name:"select (event)",type:"CustomEvent<{ value }>",default:"\u2014",description:"Fired when an item is picked; the palette then closes itself."},{name:"empty (slot)",type:"slot",default:"'No results found'",description:"Replaces the message shown when nothing matches."}],code:`<fandry-command
  label="Command palette"
  placeholder="Type a command or search\u2026"
  items={items}
  open={isOpen}
  ontoggle={handleToggle}
  onselect={handleSelect}
></fandry-command>

// component
handleToggle(event) { this.isOpen = event.detail; }
handleSelect(event) { run(event.detail.value); }`,examples:[{title:"Custom rows and empty state",demo:"command-custom",code:`<!-- template -->
<fandry-command label="Command palette" items={items}
  open={isOpen} ontoggle={handleToggle} onselect={handleSelect}>
  <span slot="empty">Nothing to run for that.</span>
</fandry-command>

// component
import CommandRow from 'my/commandRow'; // your LWC: @api icon, label, hint

items = [
  {
    label: 'New file', value: 'new-file', group: 'File',
    component: CommandRow,
    componentProps: { icon: '\u{1F4C4}', label: 'New file', hint: '\u2318N' }
  },
  {
    label: 'Toggle theme', value: 'toggle-theme', group: 'View',
    component: CommandRow,
    componentProps: { icon: '\u{1F317}', label: 'Toggle theme' }
  }
];

// The component draws only the inside of the row; the row keeps its
// highlight, hover and click. Search still matches on \`label\`
// (and keywords/description), so give every item a real one.`},{title:"Build on the base class: own template, async search",demo:"search-custom",code:`<!-- template: your own markup, bound to the inherited handlers -->
<input role="combobox" aria-expanded="true"
  aria-controls="people"
  aria-activedescendant={activeDescendant}
  oninput={handleInput}
  onkeydown={handleInputKeydown} />
<ul id="people" role="listbox"
  onmousedown={handleListboxMouseDown}>
  <template for:each={renderGroups} for:item="group">
    <template for:each={group.options} for:item="option">
      <li key={option.id} id={option.id} class={option.classes}
        role="option" data-option-id={option.id}
        onclick={handleOptionClick}
        onmousemove={handleOptionMouseMove}>
        {option.label}
      </li>
    </template>
  </template>
</ul>

// component
import FdSearchState from 'fandry/searchState';

export default class PeopleSearch extends FdSearchState {
  results = [];

  // what to list
  protected get source() { return this.results; }
  // the server already filtered
  protected filterItems(items) { return items; }
  // what picking one does
  protected commit(item) { this.picked = item.label; }

  // start the search
  protected setQuery(value) {
    super.setQuery(value);
    fetchPeople(value).then((people) => (this.results = people));
  }
}

// Keep the input and the options in the same template: aria-activedescendant
// can't point across a shadow boundary.`}]},{slug:"dialog",name:"Dialog",tag:"fandry-dialog",parts:["backdrop","panel"],customize:{title:"Custom colors and parts",demo:"dialog-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-button onclick={handleOpen}>Remove from cart</fandry-button>
  <fandry-dialog open={isOpen} label="Remove from cart" ontoggle={handleToggle}>
    <fandry-heading level="3">Remove Stride Runner?</fandry-heading>
    <fandry-text variant="muted">You can add it back any time.</fandry-text>
    <div class="row actions">
      <fandry-button variant="secondary" onclick={handleClose}>Keep it</fandry-button>
      <fandry-button onclick={handleClose}>Remove</fandry-button>
    </div>
  </fandry-dialog>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-lg: 1.25rem;
  --fd-backdrop: 160 40% 10%;
}

fandry-dialog::part(panel) {
  padding: 2rem;
  border-top: 6px solid hsl(160 84% 26%);
}

fandry-dialog::part(backdrop) {
  backdrop-filter: blur(4px);
}`},category:"Overlays & Data",description:"A modal panel over a backdrop, with Escape/backdrop-click to close and focus returned to the trigger.",props:[{name:"open",type:"boolean",default:"false",description:"Open state (consumer-controlled via ontoggle)."},{name:"label",type:"string",default:"''",description:"Accessible name for the dialog."},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label."}],code:`<fandry-dialog open={isOpen} label="Delete item" ontoggle={handleToggle}>
  <fandry-heading level="3">Delete item?</fandry-heading>
  <fandry-text variant="muted">This action can't be undone.</fandry-text>
</fandry-dialog>`},{slug:"menu",name:"Menu",tag:"fandry-menu",parts:["base"],customize:{title:"Custom colors and parts",demo:"menu-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-menu>
    <fandry-menu-item value="edit" label="Edit order"></fandry-menu-item>
    <fandry-menu-item value="track" label="Track package"></fandry-menu-item>
    <fandry-menu-item value="cancel" label="Cancel order" class="danger"></fandry-menu-item>
  </fandry-menu>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 94%;
  --fd-radius-sm: 0.5rem;
}

fandry-menu::part(base) {
  padding: 0.375rem;
  border: 1px solid hsl(160 30% 85%);
  border-radius: 0.75rem;
}

fandry-menu-item::part(base) {
  font-weight: 600;
}

fandry-menu-item.danger::part(base) {
  color: hsl(0 72% 42%);
}`},category:"Overlays & Data",description:"A listbox-style menu \u2014 composes with fandry-popover for its own trigger and positioning.",props:[],code:`<fandry-menu onselect={handleSelect}>
  <fandry-menu-item value="edit" label="Edit"></fandry-menu-item>
  <fandry-menu-item value="delete" label="Delete"></fandry-menu-item>
</fandry-menu>`},{slug:"menu-item",name:"Menu Item",tag:"fandry-menu-item",parts:["base"],states:["disabled"],customize:{title:"Custom colors and parts",demo:"menu-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-menu>
    <fandry-menu-item value="edit" label="Edit order"></fandry-menu-item>
    <fandry-menu-item value="track" label="Track package"></fandry-menu-item>
    <fandry-menu-item value="cancel" label="Cancel order" class="danger"></fandry-menu-item>
  </fandry-menu>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 94%;
  --fd-radius-sm: 0.5rem;
}

fandry-menu::part(base) {
  padding: 0.375rem;
  border: 1px solid hsl(160 30% 85%);
  border-radius: 0.75rem;
}

fandry-menu-item::part(base) {
  font-weight: 600;
}

fandry-menu-item.danger::part(base) {
  color: hsl(0 72% 42%);
}`},category:"Overlays & Data",description:"A single selectable row inside `fandry-menu`.",props:[{name:"value",type:"string",default:"''",description:"Value reported to onselect."},{name:"label",type:"string",default:"''",description:"Visible label."},{name:"disabled",type:"boolean",default:"false",description:"Excludes the item from selection."}],code:'<fandry-menu-item value="edit" label="Edit"></fandry-menu-item>'},{slug:"popover",name:"Popover",tag:"fandry-popover",parts:["trigger","panel"],customize:{title:"Custom colors and parts",demo:"popover-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-popover placement="bottom">
    <fandry-button slot="trigger" variant="secondary">Delivery options</fandry-button>
    <fandry-text size="sm">Standard: 3 to 5 days. Express: next day.</fandry-text>
  </fandry-popover>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 1rem;
}

fandry-popover::part(panel) {
  padding: 1rem;
  border-top: 4px solid hsl(160 84% 26%);
  box-shadow: 0 12px 32px hsl(160 40% 20% / 0.18);
}`},category:"Overlays & Data",description:"An anchored floating panel \u2014 owns positioning, not the trigger or content. The panel is never narrower than its trigger; set `display: block` on the popover for a trigger that fills its row.",props:[{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'bottom'",description:"Side of the trigger the panel opens on. It opens on the opposite side instead when it would run off the viewport and that side has more room."},{name:"align",type:"'start' | 'end'",default:"'start'",description:"Which edge of the trigger the panel aligns to, for 'top'/'bottom' placement."},{name:"open",type:"boolean",default:"false",description:"Open state (consumer-controlled via ontoggle)."}],code:`<fandry-popover placement="bottom" open={isOpen} ontoggle={handleToggle}>
  <fandry-button slot="trigger" variant="secondary">Actions</fandry-button>
  <div>Popover content</div>
</fandry-popover>`},{slug:"table",name:"Table",tag:"fandry-table",parts:["toolbar","container","table","caption","header-row","header-cell","selection-cell","sort-button","header-label","sort-indicator","row","loading-row","cell","empty-row","empty","footer","selection-status","pagination"],states:["selected","sorted","ascending","descending"],customize:{title:"Custom colors and parts",demo:"table-theme",code:`<!-- template -->
<div class="brand">
  <fandry-table columns={columns} data={data} caption="Recent orders"></fandry-table>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-bg-muted: 160 40% 96%;
  --fd-border: 160 30% 88%;
}

fandry-table::part(container) {
  border: 1px solid hsl(160 30% 88%);
  border-radius: 1rem;
}

fandry-table::part(caption) {
  padding: 0.75rem 1rem 0;
}

fandry-table::part(header-cell) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: hsl(160 84% 22%);
}

fandry-table::part(row):hover {
  background: hsl(160 40% 97%);
}`},category:"Overlays & Data",description:"A data table with sorting, pagination, selection, and filtering \u2014 wraps `@tanstack/table-core`.",props:[{name:"columns",type:"ColumnDef[]",default:"[]",description:"Column definitions."},{name:"data",type:"RowData[]",default:"[]",description:"Row data."},{name:"enable-pagination",type:"boolean",default:"false",description:"Turns on page-size-driven pagination."},{name:"enable-row-selection",type:"boolean",default:"false",description:"Turns on checkbox row selection."},{name:"enable-global-filter",type:"boolean",default:"false",description:"Turns on a search box that filters all columns."},{name:"messages",type:"{ selectionStatus, selectRow, selectAll, pageStatus, paginationLabel, previousPage, nextPage }",default:"{}",description:`Replaces the table's own text ("2 of 5 selected", checkbox names, the pagination's name, Previous/Next and "Page 1 of 3"), e.g. to translate it. Any key left out keeps its English default.`}],code:`<fandry-table
  columns={columns}
  data={data}
  caption="Team members"
  enable-pagination
></fandry-table>`},{slug:"lookup",name:"Lookup",tag:"fandry-lookup",parts:["base","label","required","control","selection","selection-label","clear-button","chips","chip","chip-label","chip-remove","input","clear-all","panel","listbox","group","group-label","option","option-label","option-description","status","empty","help-text","error-text"],states:["disabled","invalid","selected","active"],customize:{title:"Custom colors and parts",demo:"lookup-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-lookup
    label="Account"
    placeholder="Search accounts"
    debounce-ms="300"
    results={results}
    loading={loading}
    record={account}
    onsearch={handleSearch}
    onchange={handleChange}
  ></fandry-lookup>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 999px;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
  --fd-bg-muted: 160 40% 94%;
}

fandry-lookup::part(control) {
  padding-inline: 0.75rem;
  background: hsl(160 40% 98%);
}

fandry-lookup::part(panel) {
  border-radius: 1rem;
  box-shadow: 0 12px 32px hsl(160 40% 20% / 0.18);
}

fandry-lookup::part(option-description) {
  font-style: italic;
}`},category:"Salesforce",description:"Find and pick a record \u2014 one by default, or several with `multiple`. It fetches nothing itself: it reports what was typed, you run the query and hand the records back.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown in the empty search box."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"error-text",type:"string",default:"''",description:"An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused."},{name:"name",type:"string",default:"''",description:"Exposed as `data-name` on the input."},{name:"results",type:"{ id, label, description?, disabled?, \u2026 }[]",default:"[]",description:"Matches for the current search, shown exactly as given (never re-filtered). Extra fields ride along and come back in `change`."},{name:"loading",type:"boolean",default:"false",description:"Shows a searching indicator while your query is in flight."},{name:"multiple",type:"boolean",default:"false",description:"Allow any number of records, shown as removable chips with a \u201CClear all\u201D. The list stays open after each pick, already-chosen records are not offered again, and Backspace in an empty field removes the last chip."},{name:"debounce-ms",type:"number",default:"250",description:"Milliseconds typing must pause before `search` fires; 0 searches on every keystroke. Opening the list still searches at once."},{name:"value",type:"string | string[]",default:"''",description:"The selected id (an array of ids with `multiple`). Set it to render existing data; it updates when the user picks or clears. The lookup names each id from `record`/`records` or `results`; for any it can't, it fires `resolve` and shows the raw id (muted) until you supply the record."},{name:"record",type:"{ id, label, \u2026 } | null",default:"null",description:"Single mode: the selected record, shown as the field's value with a clear button. On its own it preselects; once `value` has been set it only supplies the name for that id."},{name:"records",type:"{ id, label, \u2026 }[]",default:"[]",description:"Multiple mode: the selected records. On its own it preselects; once `value` has been set it only supplies names for those ids (any subset is fine)."},{name:"required",type:"boolean",default:"false",description:"Marks the field required (asterisk + aria-required)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field and the pill's clear button."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native input; keys the component controls are ignored with a warning."},{name:"search (event)",type:"CustomEvent<{ query }>",default:"\u2014",description:"Fires when the list opens by click or ArrowDown (immediately, so an empty query can offer recent records), after typing pauses, and in `multiple` mode after each pick."},{name:"resolve (event)",type:"CustomEvent<{ values }>",default:"\u2014",description:"Fires once for ids set through `value` that the lookup can't name yet. Look them up and set `record`/`records`. It does not repeat for an id already asked about."},{name:"change (event)",type:"CustomEvent<{ value, record }> | CustomEvent<{ values, records }>",default:"\u2014",description:"Single mode: `{ value, record }` on pick, and `{ value: '', record: null }` on clear. Multiple mode: `{ values, records }` on every pick, removal and Clear all."},{name:"empty (slot)",type:"slot",default:"'No records found'",description:"Replaces the message shown when a search has no matches."},{name:"clear-all \xB7 searching (slots)",type:"slot",default:"'Clear all' \xB7 'Searching\u2026'",description:"Replace the Clear all button's text and the searching line."},{name:"messages",type:"{ searching, clear(name), remove(name) }",default:"{}",description:"Replaces the accessible names of the spinner and the clear and remove buttons, e.g. to translate them."},{name:"label \xB7 help-text \xB7 error-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label, help text or error text. Shown even without the matching prop."}],code:`<!-- template -->
<fandry-lookup
  label="Account"
  placeholder="Search accounts"
  results={results}
  loading={loading}
  record={account}
  onsearch={handleSearch}
  onchange={handleChange}
></fandry-lookup>

// component
async handleSearch(event) {
  this.loading = true;
  // Apex, GraphQL, UI API -- whatever you already use:
  this.results = await findAccounts(event.detail.query);
  this.loading = false;
}

handleChange(event) {
  this.account = event.detail.record; // null when cleared
}

// Ignore a slow earlier answer landing after a newer one: keep a request
// counter and only apply the result of the latest.`,examples:[{title:"Multiple records",demo:"lookup-multiple",code:`<!-- template: bind \`records\` instead of \`record\` -->
<fandry-lookup
  label="Accounts"
  multiple
  results={results}
  loading={loading}
  records={accounts}
  onsearch={handleSearch}
  onchange={handleChange}
></fandry-lookup>

// component
handleChange(event) {
  this.accounts = event.detail.records; // also event.detail.values (the ids)
}

// The list stays open after each pick and fires \`search\` again with an
// empty query, so refresh it (recent records, minus what's now chosen).
// Records already chosen are hidden from \`results\` automatically.`},{title:"Existing value (single and multiple)",demo:"lookup-value",code:`<!-- template: bind \`value\`. Bind \`record\`/\`records\` too, to supply names. -->
<fandry-lookup
  label="Account"
  value={accountId}
  record={account}
  onresolve={handleResolve}
  onchange={handleChange}
></fandry-lookup>

<fandry-lookup
  label="Accounts"
  multiple
  value={accountIds}
  records={accounts}
  onresolve={handleResolveMany}
  onchange={handleChangeMany}
></fandry-lookup>

// component
accountId = '001C';               // straight off a saved record
accountIds = ['001A', '001D'];

// The lookup can't name an id it has no record for. It shows the id, and asks:
async handleResolve(event) {
  const [account] = await getAccounts(event.detail.values);
  this.account = account;
}

async handleResolveMany(event) {
  const found = await getAccounts(event.detail.values);
  this.accounts = [...this.accounts, ...found];
}

// Only the ids it asked about are in event.detail.values. Records for ids
// that aren't in \`value\` are ignored: value decides what's selected.
handleChange(event) {
  this.accountId = event.detail.value;
}
handleChangeMany(event) {
  this.accountIds = event.detail.values;
  this.accounts = event.detail.records;
}`}]}];function yr(a){return`/components/${a}/`}const br=[{label:"Home",value:"/"},{label:"Why Fandry UI",value:"/why-fandry/"},{label:"Getting started",value:"/getting-started/"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss/"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce/"},{label:"Theming",value:"/getting-started/theming/"},{label:"Components",value:"/components/"},{label:"Blocks",value:"/blocks/"},{label:"Blocks: Data table",value:"/blocks/data-table/"},{label:"Blocks: Form",value:"/blocks/form/"},{label:"Blocks: Media gallery",value:"/blocks/media-gallery/"},{label:"Examples",value:"/examples/"}],gr=[{label:"Why Fandry",href:"/why-fandry/"},{label:"Get started",href:"/getting-started/"},{label:"Examples",href:"/examples/"},{label:"Components",href:"/components/"},{label:"Blocks",href:"/blocks/"}],Ue=/Mac|iPhone|iPad/.test(navigator.platform);class Qe extends ${constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[...br.map(s=>({...s,group:"Pages"})),...ur.flatMap(s=>mr.filter(t=>t.category===s).map(t=>({label:t.name,value:yr(t.slug),group:s,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=s=>{(Ue?s.metaKey:s.ctrlKey)&&s.key?.toLowerCase()==="k"&&(s.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get navItems(){const e=window.location.pathname.replace(/\/?$/,"/");return gr.map(s=>({...s,elementProps:e.startsWith(s.href)?{ariaCurrent:"page"}:{}}))}get shortcutHint(){return Ue?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}y(Qe,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const vr=h(Qe,{tmpl:fr,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function kr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"",n=a?"-"+a:"";return(e?":host {":r+" {")+`display: block;background: radial-gradient(
 circle at 15% 0%,
 hsl(var(--site-primary) / 0.12),
 transparent 55%
 ),
 radial-gradient(
 circle at 85% 10%,
 hsl(var(--site-accent) / 0.12),
 transparent 55%
 );}.container`+t+" {max-width: 44rem;margin: 0 auto;padding: var(--fd-space-6) var(--fd-space-6) 0;display: flex;flex-direction: column;align-items: center;text-align: center;gap: var(--fd-space-4);}.headline"+t+" {margin: 0;}.gradient-text"+t+` {background-image:
 linear-gradient(
 105deg,
 transparent 42%,
 hsl(0 0% 100% / 0.55) 50%,
 transparent 58%
 ),
 linear-gradient(
 90deg,
 color-mix(in srgb, hsl(var(--site-accent)) 82%, black),
 hsl(var(--site-primary))
 );background-size: 250% 100%, 100% 100%;background-repeat: no-repeat;background-position: 100% 0, 0 0;animation: hero-sheen`+n+" 7s ease-in-out 1.2s infinite;-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;color: transparent;-webkit-box-decoration-break: clone;box-decoration-break: clone;}@keyframes hero-sheen"+n+" {0% {background-position: 100% 0, 0 0;}35%, 100% {background-position: 0% 0, 0 0;}}@media (prefers-reduced-motion: reduce) {.gradient-text"+t+" {animation: none;}}.subhead"+t+" {max-width: 34rem;}.cta-row"+t+" {display: flex;gap: var(--fd-space-3);flex-wrap: wrap;justify-content: center;margin-top: var(--fd-space-2);}.demo-grid-wrap"+t+" {max-width: 72rem;margin: 0 auto;padding: calc(var(--fd-space-6) * 1.5) var(--fd-space-6) calc(var(--fd-space-6) * 2);}.note-row"+t+" {display: flex;justify-content: center;margin-top: var(--fd-space-5);}.demo-note"+t+"::part(base) {display: inline-flex;align-items: center;gap: var(--fd-space-2);padding: var(--fd-space-2) var(--fd-space-4);border: 1px solid color-mix(in srgb, var(--fd-color-border) 70%, transparent);border-radius: 999px;background: hsl(0 0% 100% / 0.6);box-shadow: 0 1px 2px color-mix(in srgb, var(--fd-color-text) 6%, transparent);text-align: center;}.note-dot"+t+" {flex: none;width: var(--fd-space-2);height: var(--fd-space-2);border-radius: 50%;background: hsl(var(--site-accent));box-shadow: 0 0 0 3px hsl(var(--site-accent) / 0.18);}@media (max-width: 48rem) {.demo-note"+t+"::part(base) {align-items: flex-start;border-radius: var(--fd-radius-lg);text-align: left;}.note-dot"+t+" {margin-top: 0.45em;}}"}var Ye=[kr];function _r(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {--_fd-badge-color: var(--_fd-primary);}.badge--success"+t+" {--_fd-badge-color: var(--_fd-success);}.badge--warning"+t+" {--_fd-badge-color: var(--_fd-warning);}.badge--danger"+t+" {--_fd-badge-color: var(--_fd-danger);}.badge--primary"+t+",.badge--success"+t+",.badge--warning"+t+",.badge--danger"+t+" {background: color-mix(in srgb, hsl(var(--_fd-badge-color)) var(--_fd-surface-tint), hsl(var(--_fd-bg)));border-color: color-mix(in srgb, hsl(var(--_fd-badge-color)) min(var(--_fd-surface-tint) * 3, 100%), hsl(var(--_fd-bg)));color: color-mix(in srgb, hsl(var(--_fd-badge-color)) max(100% - var(--_fd-surface-tint) * 3.5, 0%), hsl(var(--_fd-text)));}"}var Je=[_r];const wr={key:1},xr=[];function N(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("span",{className:r(e.classes),attrs:{part:e.basePart},key:0},[n("",wr,xr,s)])]}var Sr=u(N);N.slots=[""],N.stylesheets=[],N.stylesheetToken="lwc-7jnsj78lpql",N.legacyStylesheetToken="fandry-badge_badge",Je&&N.stylesheets.push.apply(N.stylesheets,Je),m(N);class Xe extends _{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}get basePart(){return z("base",{[this.variant||"default"]:!0})}}y(Xe,{publicProps:{variant:{config:0}}});const P=h(Xe,{tmpl:Sr,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Cr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var Ze=[Cr];const Pr={key:1},zr=[];function F(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[n("",Pr,zr,s)])]}var Mr=u(F);F.slots=[""],F.stylesheets=[],F.stylesheetToken="lwc-4htp61u8vnv",F.legacyStylesheetToken="fandry-heading_heading",Ze&&F.stylesheets.push.apply(F.stylesheets,Ze),m(F);class et extends _{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}y(et,{publicProps:{level:{config:3}},fields:["_level"]});const w=h(et,{tmpl:Mr,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Er(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var tt=[Er];const Tr={key:1},$r=[];function V(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[n("",Tr,$r,s)])]}var Ir=u(V);V.slots=[""],V.stylesheets=[],V.stylesheetToken="lwc-4f041bjpr1h",V.legacyStylesheetToken="fandry-text_text",tt&&V.stylesheets.push.apply(V.stylesheets,tt),m(V);class at extends _{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}get basePart(){return z("base",{[this.variant||"default"]:!0})}}y(at,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const f=h(at,{tmpl:Ir,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ar(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.grid"+t+" {display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: var(--fd-space-4);text-align: left;}@media (max-width: 60rem) {.grid"+t+" {grid-template-columns: repeat(2, minmax(0, 1fr));}}@media (max-width: 32rem) {.grid"+t+" {grid-template-columns: 1fr;}}.demo-card"+t+"::part(base) {box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);}.demo-card"+t+" > *"+t+" + *"+t+" {margin-top: var(--fd-space-3);display: block;}.btn-row"+t+" {display: flex;gap: var(--fd-space-2);flex-wrap: wrap;}.mini-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);flex-wrap: wrap;}.bars"+t+" {display: flex;align-items: flex-end;gap: var(--fd-space-2);height: 6rem;}.bar-col"+t+" {flex: 1;display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-1);height: 100%;justify-content: flex-end;}.bar"+t+` {width: 100%;border-radius: var(--fd-radius-sm) var(--fd-radius-sm) 0 0;background: linear-gradient(
 90deg,
 hsl(var(--site-primary-dark)),
 hsl(var(--site-accent-dark))
 );}.notif-card`+t+" {position: relative;}"}var rt=[Ar];function Lr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {display: inline-flex;align-items: center;align-self: flex-start;gap: var(--_fd-space-1);font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;--_fd-label-asterisk: none;}.input"+t+" {flex: 1;min-width: 0;border: none;outline: none;font: inherit;background: transparent;}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.control"+t+` {display: flex;align-items: center;border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-1) var(--_fd-space-2);background: hsl(var(--_fd-bg));transition: border-color var(--_fd-duration-fast) var(--_fd-ease-standard),\r
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.control:focus-within`+t+" {outline: var(--_fd-ring-width) solid transparent;border-color: hsl(var(--_fd-border-focus));box-shadow: var(--_fd-ring-field);}.input:focus"+t+" {outline: none;}.control--sm"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-xs);}.control--md"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-md);}.control--lg"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3);font-size: var(--_fd-font-size-md);}.error-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-danger));}.error-text--empty"+t+" {position: absolute;}.control[part~='invalid']"+t+" {border-color: hsl(var(--_fd-danger));}"}var st=[Lr];const Dr=b`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,Rr={classMap:{"form-control":!0},attrs:{part:"base"},key:0},Or={label:!0},Nr={name:"label"},Fr={classMap:{prefix:!0},attrs:{part:"prefix"},key:6},Vr={attrs:{name:"prefix"},key:7},nt=[],qr={input:!0},Br={classMap:{suffix:!0},attrs:{part:"suffix"},key:9},Hr={attrs:{name:"suffix"},key:10},Kr={name:"error-text"},jr={"help-text":!0},Gr={name:"help-text"};function q(a,e,s,t){const{gid:r,b:n,d:o,t:i,s:d,st:c,h:l,ncls:p}=a,{_m0:v,_m1:k,_m2:E,_m3:S}=t;return[l("div",Rr,[l("label",{classMap:Or,attrs:{part:"label",for:r("input"),hidden:e.labelHidden?"":null},key:1},[d("label",{attrs:Nr,key:2,on:v||(t._m0={slotchange:n(e.handleTextSlotChange)})},[i(o(e.label))],s),e.required?c(Dr,4):null]),l("div",{className:p(e.controlClasses),attrs:{part:e.controlPart},key:5},[l("span",Fr,[d("prefix",Vr,nt,s)]),l("input",{classMap:qr,attrs:{part:"input",id:r("input"),type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":r(e.describedBy),"aria-invalid":e.ariaInvalid},props:{value:e.inputValue,...e.resolvedElementProps},key:8,on:k||(t._m1={input:n(e.handleInput),change:n(e.handleChange),focus:n(e.handleFocus),blur:n(e.handleBlur)})}),l("span",Br,[d("suffix",Hr,nt,s)])]),l("div",{className:p(e.errorTextClasses),attrs:{id:r("error-text"),part:"error-text","aria-live":"polite"},key:11},[d("error-text",{attrs:Kr,key:12,on:E||(t._m2={slotchange:n(e.handleTextSlotChange)})},[i(o(e.errorText))],s)]),l("div",{classMap:jr,attrs:{id:r("help-text"),part:"help-text",hidden:e.helpTextHidden?"":null},key:13},[d("help-text",{attrs:Gr,key:14,on:S||(t._m3={slotchange:n(e.handleTextSlotChange)})},[i(o(e.helpText))],s)])])]}var Wr=u(q);q.slots=["error-text","help-text","label","prefix","suffix"],q.stylesheets=[],q.stylesheetToken="lwc-24cs3ca29bn",q.legacyStylesheetToken="fandry-input_input",st&&q.stylesheets.push.apply(q.stylesheets,st),m(q);function fe(a){return a.assignedNodes().some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim())}function ot(a,e){return a||String(e?.ariaInvalid)==="true"}function it(a,e){return[a?"error-text":"",e?"help-text":""].filter(Boolean).join(" ")||null}function lt(a){const{ariaInvalid:e,...s}=a;return s}const Ur=["id","type","name","value","disabled","readonly","required","class","ariaDescribedBy","ariaDescribedByElements","oninput","onchange","onfocus","onblur"];class dt extends _{constructor(...e){super(...e);this.label="",this.helpText="",this.errorText="",this.value="",this.type="text",this.name="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.size="md",this.elementProps={},this.hasFocus=!1,this.textSlots={}}get resolvedElementProps(){return lt(I(this,this.elementProps,Ur,"fandry-input"))}get hasLabel(){return!!this.label||!!this.textSlots.label}get hasHelpText(){return!!this.helpText||!!this.textSlots["help-text"]}get hasErrorText(){return!!this.errorText||!!this.textSlots["error-text"]}get errorTextClasses(){return this.hasErrorText?"error-text":"error-text error-text--empty"}get invalid(){return ot(this.hasErrorText,this.elementProps)}get ariaInvalid(){return this.invalid?"true":null}get inputValue(){return this.value??""}get describedBy(){return it(this.hasErrorText,this.hasHelpText)}get controlClasses(){return["control",`control--${this.size}`].join(" ")}focus(){this.template.querySelector("input")?.focus()}handleInput(e){e.stopPropagation();const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}handleFocus(){this.hasFocus=!0}handleBlur(){this.hasFocus=!1}get controlPart(){return z("control",{disabled:this.disabled,invalid:this.invalid})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:fe(s)}}get labelHidden(){return!this.hasLabel}get helpTextHidden(){return!this.hasHelpText}}y(dt,{publicProps:{label:{config:0},helpText:{config:0},errorText:{config:0},value:{config:0},type:{config:0},name:{config:0},placeholder:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},size:{config:0},elementProps:{config:0}},publicMethods:["focus"],track:{hasFocus:1},fields:["textSlots"]});const ge=h(dt,{tmpl:Wr,sel:"fandry-input",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Qr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {display: inline-flex;align-items: center;align-self: flex-start;gap: var(--_fd-space-1);font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;--_fd-label-asterisk: none;}.textarea"+t+` {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-2);font: inherit;resize: vertical;background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));transition: border-color var(--_fd-duration-fast) var(--_fd-ease-standard),
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.textarea:focus-visible`+t+" {outline: var(--_fd-ring-width) solid transparent;border-color: hsl(var(--_fd-border-focus));box-shadow: var(--_fd-ring-field);}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.error-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-danger));}.error-text--empty"+t+" {position: absolute;}.textarea[part~='invalid']"+t+" {border-color: hsl(var(--_fd-danger));}"}var ct=[Qr];const Yr=b`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,Jr={classMap:{"form-control":!0},attrs:{part:"base"},key:0},Xr={label:!0},Zr={name:"label"},es={textarea:!0},ts={name:"error-text"},as={"help-text":!0},rs={name:"help-text"};function B(a,e,s,t){const{gid:r,b:n,d:o,t:i,s:d,st:c,h:l,ncls:p}=a,{_m0:v,_m1:k,_m2:E,_m3:S}=t;return[l("div",Jr,[l("label",{classMap:Xr,attrs:{part:"label",for:r("textarea"),hidden:e.labelHidden?"":null},key:1},[d("label",{attrs:Zr,key:2,on:v||(t._m0={slotchange:n(e.handleTextSlotChange)})},[i(o(e.label))],s),e.required?c(Yr,4):null]),l("textarea",{classMap:es,attrs:{part:e.controlPart,id:r("textarea"),name:e.name,placeholder:e.placeholder,rows:e.rows,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":r(e.describedBy),"aria-invalid":e.ariaInvalid,"data-value":e.value},props:{...e.resolvedElementProps},key:5,on:k||(t._m1={input:n(e.handleInput),change:n(e.handleChange)})}),l("div",{className:p(e.errorTextClasses),attrs:{id:r("error-text"),part:"error-text","aria-live":"polite"},key:6},[d("error-text",{attrs:ts,key:7,on:E||(t._m2={slotchange:n(e.handleTextSlotChange)})},[i(o(e.errorText))],s)]),l("div",{classMap:as,attrs:{id:r("help-text"),part:"help-text",hidden:e.helpTextHidden?"":null},key:8},[d("help-text",{attrs:rs,key:9,on:S||(t._m3={slotchange:n(e.handleTextSlotChange)})},[i(o(e.helpText))],s)])])]}var ss=u(B);B.slots=["error-text","help-text","label"],B.stylesheets=[],B.stylesheetToken="lwc-70m3k602isk",B.legacyStylesheetToken="fandry-textarea_textarea",ct&&B.stylesheets.push.apply(B.stylesheets,ct),m(B);const ns=["id","name","value","rows","disabled","readonly","required","class","ariaDescribedBy","ariaDescribedByElements","oninput","onchange"];class pt extends _{constructor(...e){super(...e);this.label="",this.helpText="",this.errorText="",this.value="",this.name="",this.placeholder="",this.rows=3,this.disabled=!1,this.readonly=!1,this.required=!1,this.elementProps={},this.textSlots={}}get hasLabel(){return!!this.label||!!this.textSlots.label}get hasHelpText(){return!!this.helpText||!!this.textSlots["help-text"]}get hasErrorText(){return!!this.errorText||!!this.textSlots["error-text"]}get errorTextClasses(){return this.hasErrorText?"error-text":"error-text error-text--empty"}get invalid(){return ot(this.hasErrorText,this.elementProps)}get ariaInvalid(){return this.invalid?"true":null}get describedBy(){return it(this.hasErrorText,this.hasHelpText)}renderedCallback(){const e=this.value??"",s=this.template.querySelector(".textarea");s&&s.value!==e&&(s.value=e)}get resolvedElementProps(){return lt(I(this,this.elementProps,ns,"fandry-textarea"))}focus(){this.template.querySelector("textarea")?.focus()}handleInput(e){e.stopPropagation();const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}get controlPart(){return z("control textarea",{disabled:this.disabled,invalid:this.invalid})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:fe(s)}}get labelHidden(){return!this.hasLabel}get helpTextHidden(){return!this.hasHelpText}}y(pt,{publicProps:{label:{config:0},helpText:{config:0},errorText:{config:0},value:{config:0},name:{config:0},placeholder:{config:0},rows:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},elementProps:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const os=h(pt,{tmpl:ss,sel:"fandry-textarea",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function is(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.box"+t+` {width: var(--_fd-size-sm);height: var(--_fd-size-sm);flex: 0 0 var(--_fd-size-sm);border-radius: var(--_fd-radius-sm);border: var(--_fd-border-width) solid hsl(var(--_fd-border));background: hsl(var(--_fd-bg));display: inline-flex;align-items: center;justify-content: center;transition: border-color var(--_fd-duration-fast) ease,
 background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.control`+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.check"+t+` {width: calc(var(--_fd-size-sm) * 0.625);height: calc(var(--_fd-size-sm) * 0.375);border-left: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));border-bottom: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));transform: translateY(-1px) rotate(-45deg) scale(0.9);opacity: 0;transition: opacity var(--_fd-duration-fast) ease,
 transform var(--_fd-duration-fast) ease;}.input:checked`+t+" + .box"+t+" {background: hsl(var(--_fd-primary));border-color: hsl(var(--_fd-primary));}.input:checked"+t+" + .box"+t+" .check"+t+" {opacity: 1;transform: translateY(-1px) rotate(-45deg) scale(1);}.control:focus-within"+t+" .box"+t+" {box-shadow: var(--_fd-ring-control);}.input:disabled"+t+" + .box"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}"}var ht=[is];const ls=b`<span class="box${0}"${"a0:part"} aria-hidden="true"${2}><span class="check${0}" part="indicator"${2}></span></span>`,ds={control:!0},cs={input:!0},ps={label:!0};function H(a,e,s,t){const{b:r,h:n,sp:o,st:i,d,t:c,s:l}=a,{_m0:p,_m1:v}=t;return[n("label",{classMap:ds,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:cs,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,"aria-checked":e.ariaChecked,"aria-label":e.ariaLabel},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:p||(t._m0={change:r(e.handleChange)})}),i(ls,3,[o(0,{attrs:{part:e.controlPart}},null)]),n("span",{classMap:ps,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[l("",{key:5,on:v||(t._m1={slotchange:r(e.handleTextSlotChange)})},[c(d(e.label))],s)])])]}var hs=u(H);H.slots=[""],H.stylesheets=[],H.stylesheetToken="lwc-375ftk9u572",H.legacyStylesheetToken="fandry-checkbox_checkbox",ht&&H.stylesheets.push.apply(H.stylesheets,ht),m(H);const fs=["type","name","value","checked","disabled","class","onchange","ariaChecked","ariaLabel"];class ft extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.ariaLabel="",this.elementProps={tabIndex:0},this.indeterminate=!1,this.textSlots={}}get resolvedElementProps(){return I(this,this.elementProps,fs,"fandry-checkbox")}get ariaChecked(){return this.indeterminate?"mixed":this.checked?"true":"false"}renderedCallback(){const e=this.template.querySelector(".input");e&&(e.indeterminate=this.indeterminate)}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const s=e.target;this.checked=s.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return z("control",{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:fe(s)}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}y(ft,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},ariaLabel:{config:0},elementProps:{config:0},indeterminate:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const us=h(ft,{tmpl:hs,sel:"fandry-checkbox",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ms(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.control"+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.track"+t+` {width: var(--_fd-switch-width);height: calc(var(--_fd-size-sm) + 2 * var(--_fd-switch-padding));flex: 0 0 var(--_fd-switch-width);border-radius: var(--_fd-radius-full);background: hsl(var(--_fd-border));display: inline-flex;align-items: center;padding: var(--_fd-switch-padding);transition: background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.thumb`+t+" {width: var(--_fd-size-sm);height: var(--_fd-size-sm);border-radius: 50%;background: hsl(var(--_fd-bg));transform: translateX(0);transition: transform var(--_fd-duration-fast) ease;}.input:checked"+t+" + .track"+t+" {background: hsl(var(--_fd-primary));}.input:checked"+t+" + .track"+t+" .thumb"+t+" {transform: translateX(calc(var(--_fd-switch-width) - var(--_fd-size-sm) - 2 * var(--_fd-switch-padding)));}.control:focus-within"+t+" .track"+t+" {box-shadow: var(--_fd-ring-control);}.input:disabled"+t+" + .track"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}"}var ut=[ms];const ys=b`<span class="track${0}"${"a0:part"} aria-hidden="true"${2}><span class="thumb${0}" part="indicator"${2}></span></span>`,bs={control:!0},gs={input:!0},vs={label:!0};function K(a,e,s,t){const{b:r,h:n,sp:o,st:i,d,t:c,s:l}=a,{_m0:p,_m1:v}=t;return[n("label",{classMap:bs,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:gs,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,role:"switch","aria-checked":e.ariaChecked},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:p||(t._m0={change:r(e.handleChange)})}),i(ys,3,[o(0,{attrs:{part:e.controlPart}},null)]),n("span",{classMap:vs,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[l("",{key:5,on:v||(t._m1={slotchange:r(e.handleTextSlotChange)})},[c(d(e.label))],s)])])]}var ks=u(K);K.slots=[""],K.stylesheets=[],K.stylesheetToken="lwc-2gg3sokj2de",K.legacyStylesheetToken="fandry-switch_switch",ut&&K.stylesheets.push.apply(K.stylesheets,ut),m(K);const _s=["type","name","value","checked","disabled","class","role","onchange","ariaChecked"];class mt extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.elementProps={tabIndex:0},this.textSlots={}}get resolvedElementProps(){return I(this,this.elementProps,_s,"fandry-switch")}get ariaChecked(){return this.checked?"true":"false"}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const s=e.target;this.checked=s.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return z("control",{checked:this.checked,disabled:this.disabled})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:fe(s)}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}y(mt,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},elementProps:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const yt=h(mt,{tmpl:ks,sel:"fandry-switch",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ws(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var bt=[ws];const xs={classMap:{card:!0},attrs:{part:"base"},key:0},Ss={key:1},Cs=[];function j(a,e,s,t){const{s:r,h:n}=a;return[n("div",xs,[r("",Ss,Cs,s)])]}var Ps=u(j);j.slots=[""],j.stylesheets=[],j.stylesheetToken="lwc-66cpcf0iuus",j.legacyStylesheetToken="fandry-card_card",bt&&j.stylesheets.push.apply(j.stylesheets,bt),m(j);class zs extends _{}const A=h(zs,{tmpl:Ps,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ms(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.toast"+t+" {display: flex;align-items: flex-start;justify-content: space-between;gap: var(--_fd-space-3);padding: var(--_fd-space-3) var(--_fd-space-4);border-radius: var(--_fd-radius-md);border-left: var(--_fd-border-width-lg) solid hsl(var(--_fd-info));background: hsl(var(--_fd-bg));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));animation: fd-fade-up-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.toast--success"+t+" {border-left-color: hsl(var(--_fd-success));}.toast--warning"+t+" {border-left-color: hsl(var(--_fd-warning));}.toast--danger"+t+" {border-left-color: hsl(var(--_fd-danger));}.toast--closing"+t+" {animation: fd-fade-up-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}"}var gt=[Ms];const Es={key:1},Ts=[];function G(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[n("",Es,Ts,s)])]}var $s=u(G);G.slots=[""],G.stylesheets=[],G.stylesheetToken="lwc-73ujeb3ppoa",G.legacyStylesheetToken="fandry-toast_toast",gt&&G.stylesheets.push.apply(G.stylesheets,gt),m(G);class vt extends _{constructor(...e){super(...e);this.variant="info",this._duration=5e3,this.isClosing=!1,this.dismissTimerId=null,this.dismissNotified=!1}get duration(){return this._duration}set duration(e){this._duration=Number(e)}connectedCallback(){typeof document!="undefined"&&this.scheduleAutoDismiss()}disconnectedCallback(){this.clearDismissTimer()}get classes(){return["toast",`toast--${this.variant}`,this.isClosing?"toast--closing":""].filter(Boolean).join(" ")}get role(){return this.variant==="warning"||this.variant==="danger"?"alert":"status"}scheduleAutoDismiss(){this.duration>0&&(this.dismissTimerId=window.setTimeout(()=>this.dismiss(),this.duration))}clearDismissTimer(){this.dismissTimerId!==null&&(window.clearTimeout(this.dismissTimerId),this.dismissTimerId=null)}dismiss(){this.isClosing||(this.clearDismissTimer(),this.isClosing=!0)}renderedCallback(){!this.isClosing||this.dismissNotified||(this.dismissNotified=!0,Me(this.template.querySelector(".toast")).then(()=>{this.dispatchEvent(new CustomEvent("dismiss",{bubbles:!0}))}))}get basePart(){return z("base",{[this.variant||"info"]:!0})}}y(vt,{publicProps:{variant:{config:0},duration:{config:3}},publicMethods:["dismiss"],track:{isClosing:1},fields:["_duration","dismissTimerId","dismissNotified"]});const Is=h(vt,{tmpl:$s,sel:"fandry-toast",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function As(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.viewport"+t+" {position: fixed;z-index: var(--_fd-z-overlay);display: flex;flex-direction: column;gap: var(--_fd-space-2);width: var(--_fd-toast-width);max-width: calc(100vw - var(--_fd-space-4) * 2);pointer-events: none;}.viewport--contained"+t+" {position: absolute;max-width: calc(100% - var(--_fd-space-4) * 2);}.viewport"+t+" "+t+"::slotted(*) {pointer-events: auto;}.viewport--top-left"+t+" {top: var(--_fd-space-4);left: var(--_fd-space-4);}.viewport--top-right"+t+" {top: var(--_fd-space-4);right: var(--_fd-space-4);}.viewport--bottom-left"+t+" {bottom: var(--_fd-space-4);left: var(--_fd-space-4);}.viewport--bottom-right"+t+" {bottom: var(--_fd-space-4);right: var(--_fd-space-4);}"}var kt=[As];const Ls={key:1},Ds=[];function W(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:e.role,"aria-label":e.accessibleLabel},key:0},[n("",Ls,Ds,s)])]}var Rs=u(W);W.slots=[""],W.stylesheets=[],W.stylesheetToken="lwc-1i36vtch1o7",W.legacyStylesheetToken="fandry-toastViewport_toastViewport",kt&&W.stylesheets.push.apply(W.stylesheets,kt),m(W);class _t extends _{constructor(...e){super(...e);this.placement="bottom-right",this.contained=!1,this.label="",this.ariaLabel=""}get classes(){return["viewport",`viewport--${this.placement}`,this.contained?"viewport--contained":""].filter(Boolean).join(" ")}get accessibleLabel(){return this.ariaLabel||this.label||void 0}get role(){return this.accessibleLabel?"region":void 0}}y(_t,{publicProps:{placement:{config:0},contained:{config:0},label:{config:0},ariaLabel:{config:0}}});const Os=h(_t,{tmpl:Rs,sel:"fandry-toast-viewport",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Ns=b`<div class="bar${0}"${"s0"}${2}></div>`,Fs={classMap:{grid:!0},key:0},Vs={classMap:{"demo-card":!0,"controls-card":!0},key:1},qs={classMap:{"btn-row":!0},key:2},Bs={props:{size:"sm"},key:3},Hs={props:{size:"sm",variant:"secondary"},key:4},Ks={props:{size:"sm",variant:"ghost"},key:5},js={props:{size:"sm",placeholder:"Name"},key:6},Gs={props:{placeholder:"Message",rows:"2"},key:7},Ws={classMap:{"mini-row":!0},key:8},Us={key:9},Qs={props:{variant:"primary"},key:10},Ys={props:{label:"Checked",checked:!0},key:11},Js={props:{checked:!0},key:12},Xs={classMap:{"demo-card":!0,"chart-card":!0},key:13},Zs={props:{as:"span",size:"xs",variant:"muted"},key:14},en={props:{level:"4"},key:15},tn={classMap:{bars:!0},key:16},an={"bar-col":!0},rn={props:{as:"span",size:"xs",variant:"muted"},key:20},sn={classMap:{"demo-card":!0,"theme-card":!0},key:21},nn={props:{level:"4"},key:22},on={props:{variant:"muted",size:"sm"},key:23},ln={classMap:{"btn-row":!0},key:26},wt={size:"sm"},dn={size:"sm",variant:"secondary"},cn={classMap:{"demo-card":!0,"notif-card":!0},key:29},pn={props:{level:"4"},key:30},hn={props:{variant:"muted",size:"sm"},key:31},fn={props:{placement:"bottom-right",contained:!0,label:"Notifications"},key:33},un={variant:"success",duration:"3000"};function ne(a,e,s,t){const{t:r,c:n,h:o,k:i,sp:d,st:c,d:l,i:p,b:v}=a,{_m0:k,_m1:E,_m2:S,_m3:ue,_m4:me,_m5:ye}=t;return[o("div",Fs,[n("fandry-card",A,Vs,[o("div",qs,[n("fandry-button",M,Bs,[r("Button")]),n("fandry-button",M,Hs,[r("Secondary")]),n("fandry-button",M,Ks,[r("Ghost")])]),n("fandry-input",ge,js),n("fandry-textarea",os,Gs),o("div",Ws,[n("fandry-badge",P,Us,[r("Default")]),n("fandry-badge",P,Qs,[r("Primary")]),n("fandry-checkbox",us,Ys),n("fandry-switch",yt,Js)])]),n("fandry-card",A,Xs,[n("fandry-text",f,Zs,[r("Build velocity")]),n("fandry-heading",w,en,[r("Faster every month")]),o("div",tn,p(e.bars,function(T){return o("div",{classMap:an,key:i(17,T.key)},[c(Ns,19,[d(0,{style:T.barStyle},null)]),n("fandry-text",f,rn,[r(l(T.label))])])}))]),n("fandry-card",A,sn,[n("fandry-heading",w,nn,[r("Theme your brand")]),n("fandry-text",f,on,[r("One token scale, retheme anywhere.")]),n("fandry-input",ge,{props:{label:"Primary color",value:e.primaryColor},key:24,on:k||(t._m0={input:v(e.handlePrimaryColorInput)})}),n("fandry-input",ge,{props:{label:"Accent color",value:e.accentColor},key:25,on:E||(t._m1={input:v(e.handleAccentColorInput)})}),o("div",ln,[n("fandry-button",M,{props:wt,key:27,on:S||(t._m2={click:v(e.handleApplyTheme)})},[r("Apply theme")]),n("fandry-button",M,{props:dn,key:28,on:ue||(t._m3={click:v(e.handleResetTheme)})},[r("Reset")])])]),n("fandry-card",A,cn,[n("fandry-heading",w,pn,[r("Try it live")]),n("fandry-text",f,hn,[r("A real fandry-toast, not a screenshot.")]),n("fandry-button",M,{props:wt,key:32,on:me||(t._m4={click:v(e.handleShowToast)})},[r("Show notification")]),n("fandry-toast-viewport",Os,fn,p(e.toasts,function(T){return n("fandry-toast",Is,{attrs:{"data-id":T.id},props:un,key:i(34,T.id),on:ye||(t._m5={dismiss:v(e.handleToastDismiss)})},[r(l(T.message))])}))])])]}var mn=u(ne);ne.stylesheets=[],ne.stylesheetToken="lwc-75i9pi7s0jp",ne.legacyStylesheetToken="fandryui-heroDemoGrid_heroDemoGrid",rt&&ne.stylesheets.push.apply(ne.stylesheets,rt),m(ne);const xt="#0D42F2",St="#1EB88A",Ct=8;function Pt(a){const e=/^#?([0-9a-f]{6})$/i.exec(a.trim());if(!e)return null;const s=parseInt(e[1],16),t=(s>>16&255)/255,r=(s>>8&255)/255,n=(s&255)/255,o=Math.max(t,r,n),i=Math.min(t,r,n),d=(o+i)/2;let c=0,l=0;if(o!==i){const p=o-i;switch(l=d>.5?p/(2-o-i):p/(o+i),o){case t:c=(r-n)/p+(r<n?6:0);break;case r:c=(n-t)/p+2;break;default:c=(t-r)/p+4}c/=6}return{h:c*360,s:l*100,l:d*100}}function ve({h:a,s:e,l:s}){return`${Math.round(a)} ${Math.round(e)}% ${Math.round(s)}%`}function zt(a,e){return{...a,l:Math.max(0,a.l-e)}}class Mt extends ${constructor(...e){super(...e);this.primaryColor=xt,this.accentColor=St,this.bars=[{key:"dec",label:"Dec",barStyle:"height: 35%"},{key:"jan",label:"Jan",barStyle:"height: 58%"},{key:"feb",label:"Feb",barStyle:"height: 44%"},{key:"mar",label:"Mar",barStyle:"height: 82%"},{key:"apr",label:"Apr",barStyle:"height: 68%"}],this.toastIdCounter=0,this.toasts=[]}handleShowToast(){this.toastIdCounter+=1,this.toasts=[...this.toasts,{id:this.toastIdCounter,message:"Toast fired \u2014 this one is real."}]}handleToastDismiss(e){const s=Number(e.target.dataset.id);this.toasts=this.toasts.filter(t=>t.id!==s)}handlePrimaryColorInput(e){this.primaryColor=e.detail}handleAccentColorInput(e){this.accentColor=e.detail}handleApplyTheme(){const e=Pt(this.primaryColor),s=Pt(this.accentColor);if(!e||!s)return;const t=document.documentElement.style;t.setProperty("--brand-primary",ve(e)),t.setProperty("--brand-accent",ve(s)),t.setProperty("--brand-primary-dark",ve(zt(e,Ct))),t.setProperty("--brand-accent-dark",ve(zt(s,Ct)))}handleResetTheme(){this.primaryColor=xt,this.accentColor=St;const e=document.documentElement.style;e.removeProperty("--brand-primary"),e.removeProperty("--brand-accent"),e.removeProperty("--brand-primary-dark"),e.removeProperty("--brand-accent-dark")}}y(Mt,{fields:["primaryColor","accentColor","bars","toastIdCounter","toasts"]});const yn=h(Mt,{tmpl:mn,sel:"fandryui-hero-demo-grid",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),bn=b`<span class="gradient-text${0}"${2}>modern UI</span>`,gn=b`<span class="gradient-text${0}"${2}>simplicity of LWC</span>`,vn=b`<span class="note-dot${0}" aria-hidden="true"${2}></span>`,kn={classMap:{hero:!0},key:0},_n={classMap:{container:!0},key:1},wn={props:{variant:"primary"},key:2},xn={classMap:{headline:!0},props:{level:"1"},key:3},Sn={classMap:{subhead:!0},props:{size:"md",variant:"muted"},key:8},Cn={classMap:{"cta-row":!0},key:9},Pn={variant:"default",size:"lg"},zn={variant:"secondary",size:"lg"},Mn={classMap:{"demo-grid-wrap":!0},key:12},En={key:13},Tn={classMap:{"note-row":!0},key:14},$n={classMap:{"demo-note":!0},props:{size:"sm",variant:"muted"},key:15};function oe(a,e,s,t){const{t:r,c:n,st:o,b:i,h:d}=a,{_m0:c,_m1:l}=t;return[d("section",kn,[d("div",_n,[n("fandry-badge",P,wn,[r("Native LWC")]),n("fandry-heading",w,xn,[r("The flexibility of "),o(bn,5),r(" development. The "),o(gn,7),r(".")]),n("fandry-text",f,Sn,[r("A modern, composable UI component library for Salesforce LWC. Build distinctive, customizable experiences for your product, in Salesforce's own component model.")]),d("div",Cn,[n("fandry-button",M,{props:Pn,key:10,on:c||(t._m0={click:i(e.handlePrimaryClick)})},[r("Browse Components")]),n("fandry-button",M,{props:zn,key:11,on:l||(t._m1={click:i(e.handleGithubClick)})},[r("View on GitHub")])])]),d("div",Mn,[n("fandryui-hero-demo-grid",yn,En),d("div",Tn,[n("fandry-text",f,$n,[o(vn,17),r("Built with native LWC. Designed for LWR and Experience Cloud. Made to look like your product.")])])])])]}var In=u(oe);oe.stylesheets=[],oe.stylesheetToken="lwc-57886c7j2ti",oe.legacyStylesheetToken="fandryui-heroSection_heroSection",Ye&&oe.stylesheets.push.apply(oe.stylesheets,Ye),m(oe);const An="https://github.com/rahulgawale/fandryui";class Ln extends ${handlePrimaryClick(){window.location.assign("/components/")}handleGithubClick(){window.open(An,"_blank","noopener,noreferrer")}}const Dn=h(Ln,{tmpl:In,sel:"fandryui-hero-section",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Rn(a,e,s){var t=a?"["+a+"]":"";return".info-card"+t+",.info-card"+t+"::part(base) {height: 100%;min-width: 0;}.info-card"+t+"::part(base) {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-3);padding: var(--fd-space-6);}.info-card"+t+" fandry-text"+t+" {display: block;}"}var Et=[Rn];function On(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+" {padding: calc(var(--fd-space-6) * 2) 0;border-top: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;text-align: center;gap: var(--fd-space-3);}.title"+t+" {display: block;max-width: 44rem;}.lede"+t+" {display: block;max-width: 36rem;}.bento"+t+" {width: 100%;display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-5);margin-top: var(--fd-space-5);text-align: left;}.tile-tokens"+t+" {grid-column: span 2;}.tile-lwc"+t+" {grid-column: 1 / -1;}.copy"+t+" fandry-heading"+t+" + fandry-text"+t+" {margin-top: var(--fd-space-3);}.tokens-layout"+t+",.lwc-layout"+t+",.compose-code"+t+" {align-self: stretch;}:not(pre)"+t+" > code"+t+' {font-family: var(--font-code, "Geist Mono", monospace);font-size: 0.875em;padding: 0.1em 0.35em;border-radius: var(--fd-radius-sm);background: color-mix(in srgb, var(--fd-color-text) 6%, transparent);border: 1px solid color-mix(in srgb, var(--fd-color-text) 10%, transparent);overflow-wrap: anywhere;}.copy'+t+" {min-width: 0;}.tokens-layout"+t+" {display: grid;grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);gap: var(--fd-space-5);align-items: center;}.presets"+t+" {display: block;margin-top: var(--fd-space-4);}.token-code"+t+" {display: block;margin-top: var(--fd-space-4);}.compose-code"+t+" {display: block;}.preview"+t+" {display: flex;align-items: center;justify-content: center;align-self: stretch;padding: var(--fd-space-5);border-radius: var(--fd-radius-lg);background: hsl(var(--site-primary) / 0.06);transition: background-color var(--fd-duration-normal, 200ms) ease;}.order"+t+" {width: 100%;max-width: 20rem;}.order"+t+"::part(base) {display: flex;flex-direction: column;gap: var(--fd-space-3);}.order-head"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-2);}.order-actions"+t+" {display: flex;flex-wrap: wrap;gap: var(--fd-space-2);}.lwc-layout"+t+" {display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;gap: var(--fd-space-5);}.lwc-layout"+t+" .copy"+t+" {flex: 1 1 20rem;}.traits"+t+" {display: flex;flex-wrap: wrap;gap: var(--fd-space-2);margin: 0;padding: 0;list-style: none;}@media (max-width: 60rem) {.bento"+t+" {grid-template-columns: minmax(0, 1fr);}.tile-tokens"+t+" {grid-column: auto;}.tokens-layout"+t+" {grid-template-columns: minmax(0, 1fr);}}.more"+t+" {margin-top: var(--fd-space-5);}.more"+t+`::part(link) {display: inline-flex;align-items: center;padding: var(--fd-space-3) var(--fd-space-5);border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-md);background: var(--fd-color-surface);color: var(--fd-color-text);font-weight: var(--fd-font-weight-medium);text-decoration: none;transition:
 background-color var(--fd-duration-fast, 150ms) ease,
 border-color var(--fd-duration-fast, 150ms) ease,
 transform var(--fd-duration-fast, 150ms) ease;}@media (hover: hover) {.more:hover`+t+"::part(link) {background: hsl(var(--site-primary) / 0.06);border-color: hsl(var(--site-primary));transform: translateY(-1px);}}"}var Tt=[Et,On];function Nn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.control"+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.circle"+t+` {width: var(--_fd-size-sm);height: var(--_fd-size-sm);flex: 0 0 var(--_fd-size-sm);border-radius: 50%;border: var(--_fd-border-width-md) solid hsl(var(--_fd-border));background: transparent;display: inline-flex;align-items: center;justify-content: center;transition: border-color var(--_fd-duration-fast) ease,
 background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.control:hover:not(:has(.input:disabled))`+t+" .circle"+t+" {border-color: hsl(var(--_fd-primary));}.dot"+t+` {width: calc(var(--_fd-size-sm) * 0.375);height: calc(var(--_fd-size-sm) * 0.375);border-radius: 50%;background: hsl(var(--_fd-primary));opacity: 0;transform: scale(0.5);transition: opacity var(--_fd-duration-fast) ease,
 transform var(--_fd-duration-fast) ease;}.input:checked`+t+" + .circle"+t+" {border-color: hsl(var(--_fd-primary));}.input:checked"+t+" + .circle"+t+" .dot"+t+" {opacity: 1;transform: scale(1);}.control:focus-within"+t+" .circle"+t+" {box-shadow: var(--_fd-ring-control);}.input:disabled"+t+" + .circle"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}"}var $t=[Nn];const Fn=b`<span class="circle${0}"${"a0:part"} aria-hidden="true"${2}><span class="dot${0}" part="indicator"${2}></span></span>`,Vn={control:!0},qn={input:!0},Bn={label:!0};function U(a,e,s,t){const{b:r,h:n,sp:o,st:i,d,t:c,s:l}=a,{_m0:p,_m1:v}=t;return[n("label",{classMap:Vn,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:qn,attrs:{type:"radio",name:e.name,disabled:e.disabled?"":null},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:p||(t._m0={change:r(e.handleChange)})}),i(Fn,3,[o(0,{attrs:{part:e.controlPart}},null)]),n("span",{classMap:Bn,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[l("",{key:5,on:v||(t._m1={slotchange:r(e.handleTextSlotChange)})},[c(d(e.label))],s)])])]}var Hn=u(U);U.slots=[""],U.stylesheets=[],U.stylesheetToken="lwc-2rqdcfbhoo9",U.legacyStylesheetToken="fandry-radio_radio",$t&&U.stylesheets.push.apply(U.stylesheets,$t),m(U);const Kn=["type","name","value","checked","disabled","class","onchange"];class It extends _{constructor(...e){super(...e);this.label="",this.name="",this.value="",this.checked=!1,this.disabled=!1,this.elementProps={tabIndex:0},this.textSlots={}}get resolvedElementProps(){return I(this,this.elementProps,Kn,"fandry-radio")}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){e.target.checked&&(this.checked=!0,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value,name:this.name},bubbles:!0})))}get controlPart(){return z("control",{checked:this.checked,disabled:this.disabled})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:fe(s)}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}y(It,{publicProps:{label:{config:0},name:{config:0},value:{config:0},checked:{config:0},disabled:{config:0},elementProps:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const jn=h(It,{tmpl:Hn,sel:"fandry-radio",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Gn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-2);}.label"+t+" {font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}.radio-group"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-2);}"}var At=[Gn];const Wn={classMap:{"form-control":!0},attrs:{part:"base"},key:0},Un={label:!0},Qn={name:"label"},Yn={"radio-group":!0},Jn=[];function Q(a,e,s,t){const{gid:r,b:n,d:o,t:i,s:d,h:c}=a,{_m0:l,_m1:p}=t;return[c("div",Wn,[c("span",{classMap:Un,attrs:{part:"label",id:r("radio-group-label"),hidden:e.labelHidden?"":null},key:1},[d("label",{attrs:Qn,key:2,on:l||(t._m0={slotchange:n(e.handleTextSlotChange)})},[i(o(e.label))],s)]),c("div",{classMap:Yn,attrs:{part:"list",role:"radiogroup","aria-labelledby":r(e.labelledBy),"aria-label":e.ariaLabel},key:3},[d("",{key:4,on:p||(t._m1={slotchange:n(e.handleSlotChange)})},Jn,s)])])]}var Xn=u(Q);Q.slots=["","label"],Q.stylesheets=[],Q.stylesheetToken="lwc-b7b4ggs4bj",Q.legacyStylesheetToken="fandry-radioGroup_radioGroup",At&&Q.stylesheets.push.apply(Q.stylesheets,At),m(Q);const Zn=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"];class Lt extends _{constructor(...e){super(...e);this.name="",this.value="",this.label="",this.ariaLabel="",this.handleSlotChange=()=>{this.updateRovingTabIndex()},this.handleRadioChange=s=>{const t=s.detail;t&&t.name===this.name&&(this.value=t.value,this.updateRadioButtons(t.value),this.updateRovingTabIndex(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0})))},this.handleKeydown=s=>{if(!Zn.includes(s.key))return;s.preventDefault();const t=s.target.closest("fandry-radio")??void 0;if(!t)return;const r=this.getGroupRadios(),n=r.indexOf(t);if(n===-1)return;const o=s.key==="ArrowDown"||s.key==="ArrowRight"?1:-1;let i=n;for(let c=0;c<r.length&&(i=(i+o+r.length)%r.length,!!r[i].disabled);c++);const d=r[i];d!==t&&(this.value=d.value,this.updateRadioButtons(d.value),this.updateRovingTabIndex(),d.focus(),this.dispatchEvent(new CustomEvent("change",{detail:{value:d.value},bubbles:!0})))},this.textSlots={}}get hasLabel(){return!!this.label||!!this.textSlots.label}get labelledBy(){return this.hasLabel?"radio-group-label":null}connectedCallback(){this.addEventListener("change",this.handleRadioChange),this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){this.removeEventListener("change",this.handleRadioChange),this.removeEventListener("keydown",this.handleKeydown)}focus(){const e=this.getGroupRadios();if(!e.length)return;const s=e.findIndex(t=>t.value===this.value);e[s>=0?s:0].focus()}renderedCallback(){this.updateRovingTabIndex()}getGroupRadios(){return Array.from(this.querySelectorAll("fandry-radio")).filter(e=>e.name===this.name)}updateRovingTabIndex(){const e=this.getGroupRadios();if(!e.length)return;const s=e.findIndex(r=>r.value===this.value),t=s>=0?s:0;e.forEach((r,n)=>{r.elementProps={tabIndex:n===t?0:-1}})}updateRadioButtons(e){this.querySelectorAll("fandry-radio").forEach(t=>{t.name===this.name&&(t.checked=t.value===e)})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:fe(s)}}get labelHidden(){return!this.hasLabel}}y(Lt,{publicProps:{name:{config:0},value:{config:0},label:{config:0},ariaLabel:{config:0}},publicMethods:["focus"],fields:["handleSlotChange","handleRadioChange","handleKeydown","textSlots"]});const eo=h(Lt,{tmpl:Xn,sel:"fandry-radio-group",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function to(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.figure"+t+" {margin: 0;}.label"+t+' {display: block;margin-bottom: var(--fd-space-1);font-family: var(--font-code, "Geist Mono", monospace);font-weight: var(--fd-font-weight-medium);}.code-block'+t+` {margin: 0;padding: var(--fd-space-4);background: linear-gradient(
 135deg,
 hsl(var(--site-code-start)),
 hsl(var(--site-code-end))
 );color: hsl(220 14% 96%);border-radius: var(--fd-radius-md);overflow-x: auto;font-size: var(--fd-font-size-sm);line-height: var(--fd-line-height-normal, 1.5);}.code-block`+t+" code"+t+' {font-family: var(--font-code, "Geist Mono", monospace);font-size: inherit;white-space: pre;}.code-block:focus-visible'+t+" {outline: 2px solid hsl(var(--site-primary));outline-offset: 2px;}.code-block.tree"+t+" {background: var(--fd-color-surface, transparent);color: var(--fd-color-text);border: 1px solid var(--fd-color-border);}.selection-stop"+t+" {height: 0;overflow: hidden;}"}var Dt=[to];const ao=b`<pre${"c0"} tabindex="0"${2}><code${3}>${"t2"}</code></pre>`,ro=b`<div class="selection-stop${0}" aria-hidden="true"${2}>​</div>`,so={classMap:{figure:!0},key:0},no={key:2},oo={classMap:{label:!0},props:{as:"span",size:"xs",variant:"muted"},key:3};function ie(a,e,s,t){const{d:r,t:n,c:o,h:i,fr:d,ncls:c,sp:l,st:p}=a;return[i("figure",so,[e.hasLabel?d(1,[i("figcaption",no,[o("fandry-text",f,oo,[n(r(e.label))])])],0):null,p(ao,5,[l(0,{className:c(e.preClass)},null),l(2,null,r(e.code))]),p(ro,7)])]}var io=u(ie);ie.stylesheets=[],ie.stylesheetToken="lwc-3fffmevd3ta",ie.legacyStylesheetToken="fandryui-codeBlock_codeBlock",Dt&&ie.stylesheets.push.apply(ie.stylesheets,Dt),m(ie);function lo(a,e){if(!!a.getComposedRanges)try{return a.getComposedRanges({shadowRoots:[e]})[0]}catch{return a.getComposedRanges(e)[0]}}class Rt extends ${constructor(...e){super(...e);this.code="",this.label="",this.variant="default",this.trimSelection=()=>{const s=document.getSelection(),t=this.template.querySelector(".selection-stop"),r=this.template.querySelector("code"),n=s&&lo(s,this.template);if(!s||!n||!r?.lastChild||n.endContainer!==t||!r.contains(n.startContainer))return;const o=r.lastChild;s.setBaseAndExtent(n.startContainer,n.startOffset,o,o.textContent?.length??0)}}get preClass(){return this.variant==="tree"?"code-block tree":"code-block"}get hasLabel(){return!!this.label}connectedCallback(){document.addEventListener("selectionchange",this.trimSelection)}disconnectedCallback(){document.removeEventListener("selectionchange",this.trimSelection)}}y(Rt,{publicProps:{code:{config:0},label:{config:0},variant:{config:0}},fields:["trimSelection"]});const Ee=h(Rt,{tmpl:io,sel:"fandryui-code-block",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),co=b`<code${3}>--fd-*</code>`,po=b`<code${3}>:root</code>`,ho=b`<code${3}>loading</code>`,fo=b`<code${3}>--fd-*</code>`,uo=b`<code${3}>::part()</code>`,mo={classMap:{section:!0},key:0},yo={classMap:{container:!0},key:1},bo={props:{variant:"primary"},key:2},go={classMap:{title:!0},props:{level:"2"},key:3},vo={classMap:{lede:!0},props:{variant:"muted"},key:4},ko={classMap:{bento:!0},key:5},_o={classMap:{tile:!0,"info-card":!0,"tile-tokens":!0},key:6},wo={classMap:{"tokens-layout":!0},key:7},xo={classMap:{copy:!0},key:8},So={props:{level:"3"},key:9},Co={props:{variant:"muted"},key:10},Po={presets:!0},zo={"token-code":!0},Mo={preview:!0},Eo={classMap:{order:!0},key:19},To={classMap:{"order-head":!0},key:20},$o={props:{level:"4"},key:21},Io={props:{variant:"primary"},key:22},Ao={props:{variant:"muted",size:"sm"},key:23},Lo={props:{label:"Gift wrap",checked:!0},key:24},Do={classMap:{"order-actions":!0},key:25},Ro={key:26},Oo={props:{variant:"secondary"},key:27},No={classMap:{tile:!0,"info-card":!0,"tile-compose":!0},key:28},Fo={props:{level:"3"},key:29},Vo={props:{variant:"muted"},key:30},qo={"compose-code":!0},Bo={classMap:{tile:!0,"info-card":!0,"tile-lwc":!0},key:38},Ho={classMap:{"lwc-layout":!0},key:39},Ko={classMap:{copy:!0},key:40},jo={props:{level:"3"},key:41},Go={props:{variant:"muted"},key:42},Wo={classMap:{traits:!0},key:43},Uo={key:45},Qo={classMap:{more:!0},props:{href:"/why-fandry/"},key:46};function le(a,e,s,t){const{t:r,c:n,st:o,b:i,k:d,i:c,h:l,d:p}=a,{_m0:v}=t;return[l("section",mo,[l("div",yo,[n("fandry-badge",P,bo,[r("Why Fandry UI")]),n("fandry-heading",w,go,[r("Build Salesforce apps that look like your product, not the platform.")]),n("fandry-text",f,vo,[r("A modern, composable UI library for Salesforce LWC. Get design freedom, extensibility and control over your UI without adding another frontend framework.")]),l("div",ko,[n("fandry-card",A,_o,[l("div",wo,[l("div",xo,[n("fandry-heading",w,So,[r("Token-driven from the core")]),n("fandry-text",f,Co,[r("Set "),o(co,12),r(" tokens on "),o(po,14),r(" to theme the whole site, or on one section to theme just that. They reach inside every component's shadow root.")]),n("fandry-radio-group",eo,{classMap:Po,props:{name:"why-theme",label:"Theme this section",value:e.presetValue},key:15,on:v||(t._m0={change:i(e.handlePresetChange)})},c(e.presets,function(k){return n("fandry-radio",jn,{props:{name:"why-theme",value:k.key,label:k.name,checked:k.checked},key:d(16,k.key)})})),n("fandryui-code-block",Ee,{classMap:zo,props:{code:e.tokenCode},key:17})]),l("div",{classMap:Mo,style:e.previewStyle,key:18},[n("fandry-card",A,Eo,[l("div",To,[n("fandry-heading",w,$o,[r("Order #1042")]),n("fandry-badge",P,Io,[r("Paid")])]),n("fandry-text",f,Ao,[r("3 items \xB7 ships Friday")]),n("fandry-switch",yt,Lo),l("div",Do,[n("fandry-button",M,Ro,[r("Track order")]),n("fandry-button",M,Oo,[r("Invoice")])])])])])]),n("fandry-card",A,No,[n("fandry-heading",w,Fo,[r("Slots, not another prop")]),n("fandry-text",f,Vo,[r("There is no "),o(ho,32),r(" flag: the spinner is markup you put in the slot, and you can put anything else there too. "),o(fo,34),r(" tokens style the spinner and \xA0"),o(uo,36),r(" restyles any element inside.")]),n("fandryui-code-block",Ee,{classMap:qo,props:{code:e.composeCode},key:37})]),n("fandry-card",A,Bo,[l("div",Ho,[l("div",Ko,[n("fandry-heading",w,jo,[r("Zero framework overhead")]),n("fandry-text",f,Go,[r("Plain Lightning Web Components in native shadow DOM. Nothing to learn, bundle or ship on top of LWC.")])]),l("ul",Wo,c(e.traits,function(k){return l("li",{key:d(44,k)},[n("fandry-badge",P,Uo,[r(p(k))])])}))])])]),n("fandry-link",C,Qo,[r("Read why Fandry UI exists \u2192")])])])]}var Yo=u(le);le.stylesheets=[],le.stylesheetToken="lwc-1f3map70chi",le.legacyStylesheetToken="fandryui-whySection_whySection",Tt&&le.stylesheets.push.apply(le.stylesheets,Tt),m(le);const ke=[{key:"default",name:"Default",note:"No tokens set.",tokens:{},surface:{}},{key:"editorial",name:"Editorial",note:"Serif headings, square corners, warm palette.",tokens:{"--fd-primary":"24 70% 38%","--fd-primary-foreground":"40 33% 98%","--fd-bg":"40 33% 97%","--fd-bg-muted":"36 30% 92%","--fd-text":"24 20% 15%","--fd-text-muted":"24 10% 36%","--fd-border":"30 20% 78%","--fd-radius-sm":"0","--fd-radius-md":"0","--fd-radius-lg":"0","--fd-font-heading":"Georgia, serif"},surface:{background:"hsl(36 30% 92%)",color:"hsl(24 20% 15%)"}},{key:"midnight",name:"Midnight",note:"Dark surfaces, rounder corners, bright accent.",tokens:{"--fd-primary":"160 84% 45%","--fd-primary-foreground":"222 47% 11%","--fd-bg":"222 47% 14%","--fd-bg-muted":"222 40% 20%","--fd-text":"210 40% 96%","--fd-text-muted":"215 20% 72%","--fd-border":"217 30% 30%","--fd-border-focus":"160 84% 45%","--fd-ring-color":"160 84% 45%","--fd-radius-sm":"0.75rem","--fd-radius-md":"1rem","--fd-radius-lg":"1.5rem","--fd-font-heading":'"Sora", sans-serif'},surface:{background:"hsl(222 47% 9%)",color:"hsl(210 40% 96%)","border-color":"hsl(217 30% 30%)"}}];function Ot(a){return Object.entries(a).map(([e,s])=>`${e}: ${s};`)}function Jo(a){return[...Ot(a.tokens),...Ot(a.surface)].join(" ")}const Nt=["--fd-primary","--fd-bg","--fd-radius-md","--fd-font-heading"],Xo=`<fandry-button>
  <fandry-spinner></fandry-spinner>
  Saving
</fandry-button>

fandry-button::part(base) {
  border-radius: 999px;
}`;class Ft extends ${constructor(...e){super(...e);this.presetValue="default",this.composeCode=Xo,this.traits=["Native shadow DOM","LWR & Experience Cloud","Salesforce orgs via fandry add","No second framework"]}get presets(){return ke.map(e=>({...e,checked:e.key===this.presetValue}))}get preset(){return ke.find(e=>e.key===this.presetValue)||ke[0]}get previewStyle(){return Jo(this.preset)}get tokenCode(){const{tokens:e}=this.preset,s=Nt.map(r=>e[r]?`  ${r}: ${e[r]};`:`  /* ${r}: inherited */`),t=Object.keys(e).length-Nt.filter(r=>e[r]).length;return s.push(t>0?`  /* + ${t} more tokens */`:"  /* nothing set: the site theme */"),`.checkout {
${s.join(`
`)}
}`}handlePresetChange(e){const s=e.detail?.value;s&&ke.some(t=>t.key===s)&&(this.presetValue=s)}}y(Ft,{fields:["presetValue","composeCode","traits"]});const Zo=h(Ft,{tmpl:Yo,sel:"fandryui-why-section",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ei(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+` {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);border-top: 1px solid var(--fd-color-border);background: linear-gradient(
 180deg,
 hsl(var(--site-accent) / 0.06),
 transparent 60%
 );}.container`+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.intro"+t+" {display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);margin-bottom: var(--fd-space-6);text-align: center;}.title"+t+" {display: block;}.grid"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-5);align-items: stretch;}@media (max-width: 60rem) {.grid"+t+" {grid-template-columns: repeat(2, minmax(0, 1fr));}}@media (max-width: 40rem) {.grid"+t+" {grid-template-columns: 1fr;}}.card-wrap"+t+" {border-radius: var(--fd-radius-lg);overflow: hidden;transition: transform 160ms ease, box-shadow 160ms ease;}@media (hover: hover) {.card-wrap:hover"+t+" {transform: translateY(-4px);box-shadow: 0 12px 24px -12px color-mix(in srgb, var(--fd-color-text) 25%, transparent);}}.icon-chip"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 2.75rem;height: 2.75rem;border-radius: var(--fd-radius-lg);}.tint-primary"+t+" {background: hsl(var(--site-primary) / 0.12);color: hsl(var(--site-primary-dark));}.tint-accent"+t+" {background: hsl(var(--site-accent) / 0.12);color: hsl(var(--site-accent-dark));}.tint-success"+t+" {background: hsl(142 71% 30% / 0.12);color: hsl(142 71% 26%);}.tint-warning"+t+" {background: hsl(38 92% 32% / 0.12);color: hsl(38 92% 28%);}.tint-danger"+t+" {background: hsl(0 72% 51% / 0.12);color: hsl(0 72% 42%);}"}var Vt=[Et,ei];const ti=b`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path${"a1:d"}${3}/></svg>`,ai={classMap:{section:!0},key:0},ri={classMap:{container:!0},key:1},si={classMap:{intro:!0},key:2},ni={props:{variant:"primary"},key:3},oi={classMap:{title:!0},props:{level:"2"},key:4},ii={classMap:{grid:!0},key:5},li={"card-wrap":!0},di={classMap:{"info-card":!0},key:7},ci={props:{size:"md"},key:9},pi={props:{level:"3"},key:12},hi={props:{variant:"muted"},key:13};function de(a,e,s,t){const{t:r,c:n,h:o,k:i,ncls:d,sp:c,st:l,d:p,i:v}=a;return[o("section",ai,[o("div",ri,[o("div",si,[n("fandry-badge",P,ni,[r("Features")]),n("fandry-heading",w,oi,[r("What you get")])]),o("div",ii,v(e.features,function(k){return o("div",{classMap:li,key:i(6,k.key)},[n("fandry-card",A,di,[o("div",{className:d(k.chipClass),key:8},[n("fandry-icon",Ke,ci,[l(ti,11,[c(1,{attrs:{d:k.iconPath}},null)])])]),n("fandry-heading",w,pi,[r(p(k.title))]),n("fandry-text",f,hi,[r(p(k.description))])])])}))])])]}var fi=u(de);de.stylesheets=[],de.stylesheetToken="lwc-25gq2u9na9h",de.legacyStylesheetToken="fandryui-featureGrid_featureGrid",Vt&&de.stylesheets.push.apply(de.stylesheets,Vt),m(de);class qt extends ${constructor(...e){super(...e);this.features=[{key:"native",chipClass:"icon-chip tint-primary",title:"Native shadow DOM, even on Salesforce",description:"Plain Lightning Web Components in real, standards-based shadow DOM, on LWR and in your org, not the synthetic polyfill base components grew up on.",iconPath:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"},{key:"lightweight",chipClass:"icon-chip tint-accent",title:"Lightweight & composable",description:"Small, dependency-light primitives you compose with slots, not a dozen config props.",iconPath:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12"},{key:"branded",chipClass:"icon-chip tint-success",title:"Your product, not the platform",description:"Give your app or site its own type, colors and spacing instead of the standard Salesforce look.",iconPath:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},{key:"faster",chipClass:"icon-chip tint-warning",title:"Faster development",description:"Sensible defaults and Claude Code-friendly source make every screen faster to build.",iconPath:"M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6"},{key:"tokens",chipClass:"icon-chip tint-danger",title:"Design tokens, not magic numbers",description:"Every color, spacing, and radius comes from one token scale you can retheme in a single place.",iconPath:"M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"},{key:"accessible",chipClass:"icon-chip tint-primary",title:"Accessible by default",description:"WCAG AA-tuned color tokens, keyboard-first controls, and correct ARIA out of the box.",iconPath:"M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3"},{key:"customizable",chipClass:"icon-chip tint-accent",title:"Components you control",description:"Restyle with parts, replace content with slots, extend a state class, or copy the source. Nothing here is a black box.",iconPath:"M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6"},{key:"brandable",chipClass:"icon-chip tint-success",title:"Brandable",description:"Reskin an entire site by changing tokens, not by rewriting components.",iconPath:"M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},{key:"boring",chipClass:"icon-chip tint-warning",title:"Boring, on purpose",description:"No hidden state, no magic \u2014 every primitive does exactly one predictable thing.",iconPath:"M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},{key:"real-world",chipClass:"icon-chip tint-danger",title:"Built for the real world",description:"Real focus management, correct tab order, and Safari quirks handled, so you don\u2019t have to.",iconPath:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]}}y(qt,{fields:["features"]});const ui=h(qt,{tmpl:fi,sel:"fandryui-feature-grid",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function mi(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+" {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);border-top: 1px solid var(--fd-color-border);background: linear-gradient(180deg, hsl(var(--site-primary) / 0.05), transparent 60%);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.intro"+t+" {display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);text-align: center;}.title"+t+" {display: block;max-width: 44rem;}.subtitle"+t+" {display: block;text-align: center;margin: 0 auto var(--fd-space-6);max-width: 34rem;}.stage"+t+` {padding: var(--fd-space-6);border-radius: calc(var(--fd-radius-lg) * 2);background:
 radial-gradient(circle at 15% 0%, hsl(var(--site-primary) / 0.18), transparent 55%),
 radial-gradient(circle at 85% 100%, hsl(var(--site-accent) / 0.18), transparent 55%),
 color-mix(in srgb, var(--fd-color-text) 3%, transparent);}@media (max-width: 40rem) {.stage`+t+" {padding: var(--fd-space-3);}}.frame-scroll"+t+" {overflow-x: auto;}.frame"+t+" {min-width: 40rem;border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-lg);overflow: hidden;background: var(--fd-color-surface);box-shadow: 0 24px 48px -24px color-mix(in srgb, var(--fd-color-text) 35%, transparent);}.chrome"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);padding: var(--fd-space-2) var(--fd-space-4);border-bottom: 1px solid var(--fd-color-border);background: color-mix(in srgb, var(--fd-color-text) 3%, var(--fd-color-surface));}.dot"+t+" {width: var(--fd-space-3);height: var(--fd-space-3);border-radius: 50%;background: color-mix(in srgb, var(--fd-color-text) 15%, transparent);}.url"+t+" {flex: 1;max-width: 20rem;margin-inline: auto;padding: var(--fd-space-1) var(--fd-space-3);border-radius: var(--fd-radius-md);background: var(--fd-color-surface);border: 1px solid var(--fd-color-border);color: var(--fd-color-muted);font-size: var(--fd-font-size-xs);text-align: center;}.topbar"+t+" {display: flex;align-items: center;gap: var(--fd-space-5);padding: var(--fd-space-3) var(--fd-space-5);border-bottom: 1px solid var(--fd-color-border);}.brand"+t+" {font-weight: var(--fd-font-weight-bold);}.topbar-links"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-4);}.search-input"+t+" {display: block;max-width: 14rem;}.account-trigger"+t+" {display: inline-flex;}.account-trigger"+t+"::part(base) {border-radius: 999px;padding-inline: 0;border-width: 0;}.menu-header"+t+" {display: flex;flex-direction: column;gap: 2px;padding: var(--fd-space-1) var(--fd-space-3) var(--fd-space-2);margin-bottom: var(--fd-space-1);border-bottom: 1px solid var(--fd-color-border);}.body"+t+" {display: flex;min-height: 22rem;}.sidebar"+t+" {--fd-sidebar-width: 12rem;flex-shrink: 0;border-right: 1px solid var(--fd-color-border);padding: var(--fd-space-2);}.sidebar"+t+" fandry-sidebar-item"+t+"::part(link current) {background: hsl(var(--site-primary));color: var(--fd-color-on-primary);}.main"+t+" {flex: 1;padding: var(--fd-space-5);}.stats"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-3);margin: var(--fd-space-4) 0 var(--fd-space-5);}.stat-card"+t+" {display: block;}.stat-card:nth-child(1)"+t+`::part(base) {background: linear-gradient(
 135deg,
 hsl(var(--site-primary) / 0.14),
 hsl(var(--site-primary) / 0.02)
 );}.stat-card:nth-child(2)`+t+`::part(base) {background: linear-gradient(
 135deg,
 hsl(var(--site-accent) / 0.14),
 hsl(var(--site-accent) / 0.02)
 );}.stat-card:nth-child(3)`+t+`::part(base) {background: linear-gradient(
 135deg,
 hsl(142 71% 30% / 0.14),
 hsl(142 71% 30% / 0.02)
 );}.orders-title`+t+" {display: block;margin-bottom: var(--fd-space-2);}.filter-bar"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);margin-bottom: var(--fd-space-2);}.orders"+t+" {display: flex;flex-direction: column;}.order-row"+t+" {display: grid;grid-template-columns: 5rem 1fr auto;align-items: center;gap: var(--fd-space-3);padding: var(--fd-space-2);margin: 0 calc(var(--fd-space-2) * -1);border-bottom: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-sm);cursor: pointer;}.order-row:last-child"+t+" {border-bottom: none;}@media (hover: hover) {.order-row:hover"+t+" {background: color-mix(in srgb, var(--fd-color-text) 3%, transparent);}}.order-row:focus-visible"+t+" {outline: 2px solid hsl(var(--site-primary));outline-offset: -2px;}.status-filter"+t+" {display: inline-flex;border-radius: var(--fd-radius-md);cursor: pointer;}.status-filter:hover"+t+" {filter: brightness(0.95);}.status-filter:focus-visible"+t+" {outline: 2px solid hsl(var(--site-primary));outline-offset: 2px;}.back-link"+t+" {display: inline-block;margin-bottom: var(--fd-space-4);}.detail-head"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);}.detail-body"+t+" {display: block;margin-top: var(--fd-space-3);max-width: 32rem;}.built-with"+t+" {display: flex;flex-wrap: wrap;align-items: center;justify-content: center;gap: var(--fd-space-3);margin-top: var(--fd-space-5);}.primitives"+t+" {display: flex;flex-wrap: wrap;justify-content: center;gap: var(--fd-space-2);margin: 0;padding: 0;list-style: none;}.primitive"+t+"::part(base) {font-family: var(--fd-font-mono);}"}var Bt=[mi];function yi(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.avatar"+t+" {display: inline-flex;align-items: center;justify-content: center;overflow: hidden;flex-shrink: 0;border-radius: 50%;background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text-muted));font-weight: var(--_fd-font-weight-semibold);text-transform: uppercase;}.avatar--sm"+t+" {width: var(--_fd-avatar-size-sm);height: var(--_fd-avatar-size-sm);font-size: calc(var(--_fd-avatar-size-sm) * 0.4);}.avatar--md"+t+" {width: var(--_fd-avatar-size-md);height: var(--_fd-avatar-size-md);font-size: calc(var(--_fd-avatar-size-md) * 0.4);}.avatar--lg"+t+" {width: var(--_fd-avatar-size-lg);height: var(--_fd-avatar-size-lg);font-size: calc(var(--_fd-avatar-size-lg) * 0.4);}.image"+t+" {width: 100%;height: 100%;object-fit: cover;}.initials"+t+" {line-height: 1;}"}var Ht=[yi];const bi=b`<span class="initials${0}" part="initials"${2}>${"t1"}</span>`,gi={part:"base"},vi={image:!0};function ce(a,e,s,t){const{ncls:r,b:n,h:o,d:i,sp:d,st:c}=a,{_m0:l}=t;return[o("span",{className:r(e.classes),attrs:gi,key:0},[e.showImage?o("img",{classMap:vi,attrs:{part:"image",src:e.src,alt:e.alt},props:{...e.resolvedElementProps},key:1,on:l||(t._m0={error:n(e.handleImageError)})}):null,e.showInitials?c(bi,3,[d(1,null,i(e.initials))]):null])]}var ki=u(ce);ce.stylesheets=[],ce.stylesheetToken="lwc-3sp4g3rf1ki",ce.legacyStylesheetToken="fandry-avatar_avatar",Ht&&ce.stylesheets.push.apply(ce.stylesheets,Ht),m(ce);const _i=["src","alt","class","onerror"];class Kt extends _{constructor(...e){super(...e);this.alt="",this.initials="",this.size="md",this.elementProps={},this.imageFailed=!1,this._src=""}get resolvedElementProps(){return I(this,this.elementProps,_i,"fandry-avatar")}get src(){return this._src}set src(e){this._src=e,this.imageFailed=!1}get classes(){return["avatar",`avatar--${this.size}`].join(" ")}get showImage(){return!!this.src&&!this.imageFailed}get showInitials(){return!this.showImage&&!!this.initials}handleImageError(){this.imageFailed=!0}}y(Kt,{publicProps:{alt:{config:0},initials:{config:0},size:{config:0},elementProps:{config:0},src:{config:3}},track:{imageFailed:1},fields:["_src"]});const wi=h(Kt,{tmpl:ki,sel:"fandry-avatar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function xi(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.item"+t+` {display: flex;align-items: center;gap: var(--_fd-space-2);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);font-family: inherit;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));white-space: nowrap;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,
 color var(--_fd-duration-fast) ease;}.item:hover:not(.item--disabled)`+t+" {background: hsl(var(--_fd-bg-muted));}.item:focus-visible"+t+" {outline: none;background: hsl(var(--_fd-bg-muted));box-shadow: inset 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.item--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}"}var jt=[xi];const Si={key:1};function Y(a,e,s,t){const{ncls:r,b:n,d:o,t:i,s:d,h:c}=a,{_m0:l}=t;return[c("div",{className:r(e.classes),attrs:{part:e.basePart,role:"menuitem","aria-disabled":e.ariaDisabled},props:{...e.resolvedElementProps},key:0,on:l||(t._m0={click:n(e.handleClick),keydown:n(e.handleKeydown)})},[d("",Si,[i(o(e.label))],s)])]}var Ci=u(Y);Y.slots=[""],Y.stylesheets=[],Y.stylesheetToken="lwc-7bqhtrvn7hj",Y.legacyStylesheetToken="fandry-menuItem_menuItem",jt&&Y.stylesheets.push.apply(Y.stylesheets,jt),m(Y);const Pi=["role","class","ariaDisabled","onclick","onkeydown"];class Gt extends _{constructor(...e){super(...e);this.value="",this.label="",this._disabled=!1,this.elementProps={tabIndex:0},this.handleClick=()=>{this.activate()},this.handleKeydown=s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.activate())}}get disabled(){return this._disabled}set disabled(e){const s=!!e;s!==this._disabled&&(this._disabled=s,this.dispatchEvent(new CustomEvent("itemchange",{bubbles:!0})))}get classes(){return["item",this.disabled?"item--disabled":""].filter(Boolean).join(" ")}get ariaDisabled(){return this.disabled?"true":"false"}get resolvedElementProps(){return I(this,this.elementProps,Pi,"fandry-menu-item")}focus(){this.template.querySelector(".item")?.focus()}activate(){this.disabled||this.dispatchEvent(new CustomEvent("select",{detail:{value:this.value},bubbles:!0}))}get basePart(){return z("base",{disabled:this.disabled})}}y(Gt,{publicProps:{value:{config:0},label:{config:0},disabled:{config:3},elementProps:{config:0}},publicMethods:["focus"],fields:["_disabled","handleClick","handleKeydown"]});const Te=h(Gt,{tmpl:Ci,sel:"fandry-menu-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function zi(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.menu"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);min-width: var(--_fd-overlay-min-width-sm);}"}var Wt=[zi];const Mi={classMap:{menu:!0},attrs:{part:"base",role:"menu","aria-orientation":"vertical"},key:0},Ei=[];function J(a,e,s,t){const{b:r,s:n,h:o}=a,{_m0:i}=t;return[o("div",Mi,[n("",{key:1,on:i||(t._m0={slotchange:r(e.handleSlotChange)})},Ei,s)])]}var Ti=u(J);J.slots=[""],J.stylesheets=[],J.stylesheetToken="lwc-1t4hh1hikp",J.legacyStylesheetToken="fandry-menu_menu",Wt&&J.stylesheets.push.apply(J.stylesheets,Wt),m(J);const $i=["ArrowDown","ArrowUp"];class Ut extends _{constructor(...e){super(...e);this.handleItemChange=s=>{s.stopPropagation(),this.updateRovingTabIndex()},this.handleSlotChange=()=>{this.updateRovingTabIndex()},this.handleKeydown=s=>{const t=this.currentItem(s);if(!!t){if($i.includes(s.key)){s.preventDefault(),this.moveFocus(t,s.key==="ArrowDown"?1:-1);return}if(s.key==="Home"||s.key==="End"){const r=this.getItems().filter(o=>!o.disabled),n=s.key==="Home"?r[0]:r[r.length-1];n&&(s.preventDefault(),this.updateRovingTabIndex(n),n.focus())}}}}connectedCallback(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("itemchange",this.handleItemChange)}disconnectedCallback(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("itemchange",this.handleItemChange)}renderedCallback(){this.updateRovingTabIndex()}getItems(){return Array.from(this.querySelectorAll("fandry-menu-item"))}updateRovingTabIndex(e){const s=this.getItems();let t=e??this.activeItem;(!t||t.disabled||!s.includes(t))&&(t=s.find(r=>!r.disabled)),this.activeItem=t,s.forEach(r=>{r.elementProps={tabIndex:r===t?0:-1}})}currentItem(e){return e.target.closest("fandry-menu-item")??void 0}moveFocus(e,s){const t=this.getItems(),r=t.indexOf(e);if(r===-1)return;let n=r;for(let i=0;i<t.length&&(n=(n+s+t.length)%t.length,!!t[n].disabled);i++);const o=t[n];o!==e&&(this.updateRovingTabIndex(o),o.focus())}}y(Ut,{fields:["handleItemChange","handleSlotChange","handleKeydown"]});const Ii=h(Ut,{tmpl:Ti,sel:"fandry-menu",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ai(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;position: relative;}.trigger"+t+" {display: block;}"+t+"::slotted([slot='trigger']) {cursor: pointer;}.origin"+t+" {position: fixed;inset: 0;visibility: hidden;pointer-events: none;}.panel"+t+" {position: fixed;z-index: var(--_fd-z-overlay);width: max-content;min-width: var(--_fd-popover-trigger-width, 0);background: hsl(var(--_fd-bg));border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));padding: var(--_fd-space-2);animation: fd-slide-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.panel--closing"+t+" {animation: fd-slide-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;pointer-events: none;}.panel--bottom"+t+" {margin-top: var(--_fd-space-1);--_fd-slide-y: calc(var(--_fd-space-2) * -1);}.panel--top"+t+" {margin-bottom: var(--_fd-space-1);--_fd-slide-y: var(--_fd-space-2);}.panel--left"+t+" {margin-right: var(--_fd-space-1);--_fd-slide-x: var(--_fd-space-2);}.panel--right"+t+" {margin-left: var(--_fd-space-1);--_fd-slide-x: calc(var(--_fd-space-2) * -1);}"}var Qt=[Ai];const Li=b`<span class="origin${0}" aria-hidden="true"${2}></span>`,Di={classMap:{trigger:!0},attrs:{part:"trigger"},key:0},Ri={attrs:{name:"trigger"},key:1},Yt=[],Oi={key:5};function X(a,e,s,t){const{s:r,h:n,st:o,ncls:i}=a;return[n("span",Di,[r("trigger",Ri,Yt,s)]),e.isMounted?o(Li,3):null,e.isMounted?n("div",{className:i(e.panelClasses),style:e.panelStyle,attrs:{part:"panel",inert:e.panelInert},key:4},[r("",Oi,Yt,s)]):null]}var Ni=u(X);X.slots=["","trigger"],X.stylesheets=[],X.stylesheetToken="lwc-3g2epjm4vo6",X.legacyStylesheetToken="fandry-popover_popover",Qt&&X.stylesheets.push.apply(X.stylesheets,Qt),m(X);const Fi=["top","bottom","left","right"],Jt={top:"bottom",bottom:"top",left:"right",right:"left"};class Xt extends _{constructor(...e){super(...e);this.placement="bottom",this.align="start",this._open=!1,this.isMounted=!1,this.panelStyle="",this.flipped=!1,this.positionFrame=0,this.followTrigger=()=>{typeof document!="undefined"&&(cancelAnimationFrame(this.positionFrame),!(!this._open||!this.isConnected)&&(this.updatePosition(),this.positionFrame=requestAnimationFrame(this.followTrigger)))},this.insideClickStamp=-1,this.handleHostClick=s=>{this.insideClickStamp=s.timeStamp,s.target.closest('[slot="trigger"]')&&this.setOpen(!this.open)},this.handleDocumentClick=s=>{this.open&&s.timeStamp!==this.insideClickStamp&&this.setOpen(!1)},this.handleDocumentKeydown=s=>{this.open&&s.key==="Escape"&&(this.setOpen(!1),this.querySelector('[slot="trigger"]')?.focus())}}get open(){return this._open}set open(e){const s=this._open;this._open=e,e&&(this.isMounted||(this.panelStyle="",this.flipped=!1),this.isMounted=!0,this.followTrigger()),s&&!e&&(cancelAnimationFrame(this.positionFrame),this.restoreFocusIfStillOurs())}updatePosition(){const e=this.template.querySelector(".trigger"),s=this.template.querySelector(".panel");if(!e||!s)return;const t=this.triggerRect(e),r=this.template.querySelector(".origin")?.getBoundingClientRect()??{top:0,left:0,right:document.documentElement.clientWidth,bottom:document.documentElement.clientHeight};this.flipped=this.shouldFlip(t,s);const n=this.side,o={top:"auto",right:"auto",bottom:"auto",left:"auto"};switch(n){case"top":o.bottom=`${r.bottom-t.top}px`;break;case"left":o.right=`${r.right-t.left}px`,o.top=`${t.top-r.top}px`;break;case"right":o.left=`${t.right-r.left}px`,o.top=`${t.top-r.top}px`;break;default:o.top=`${t.bottom-r.top}px`}let i="";(n==="top"||n==="bottom")&&(i=` --_fd-popover-trigger-width: ${t.width}px;`,this.align==="end"?o.right=`${r.right-t.right}px`:o.left=`${t.left-r.left}px`),this.panelStyle=`top: ${o.top}; right: ${o.right}; bottom: ${o.bottom}; left: ${o.left};${i}`}triggerRect(e){const t=e.querySelector("slot")?.assignedElements({flatten:!0})[0]?.getBoundingClientRect();return t&&(t.width||t.height)?t:e.getBoundingClientRect()}get preferredSide(){return Fi.includes(this.placement)?this.placement:"bottom"}get side(){return this.flipped?Jt[this.preferredSide]:this.preferredSide}shouldFlip(e,s){const t=this.preferredSide,r={top:e.top,bottom:document.documentElement.clientHeight-e.bottom,left:e.left,right:document.documentElement.clientWidth-e.right};if(r[Jt[t]]<=r[t])return!1;const n=getComputedStyle(s),o=d=>parseFloat(n.getPropertyValue(`margin-${d}`))||0;return(t==="top"||t==="bottom"?s.offsetHeight+o("top")+o("bottom"):s.offsetWidth+o("left")+o("right"))>r[t]}get panelClasses(){return["panel",`panel--${this.side}`,`panel--align-${this.align}`,this.open?"":"panel--closing"].filter(Boolean).join(" ")}get panelInert(){return this.open?void 0:""}renderedCallback(){if(this.open&&!this.panelStyle&&this.updatePosition(),this.open||!this.isMounted)return;const e=this.template.querySelector(".panel");Me(e).then(()=>{this.open||(this.isMounted=!1)})}connectedCallback(){this.addEventListener("click",this.handleHostClick),typeof document!="undefined"&&(document.addEventListener("click",this.handleDocumentClick),document.addEventListener("keydown",this.handleDocumentKeydown),this.followTrigger())}disconnectedCallback(){cancelAnimationFrame(this.positionFrame),this.removeEventListener("click",this.handleHostClick),document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("keydown",this.handleDocumentKeydown)}restoreFocusIfStillOurs(){if(!this.isFocusInsideOwnContent())return;this.querySelector('[slot="trigger"]')?.focus()}isFocusInsideOwnContent(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;const s=this.template.host;let t=e;for(;t;){if(t===s)return!0;t=t instanceof ShadowRoot?t.host:t.parentNode}return!1}setOpen(e){this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent("toggle",{detail:this.open,bubbles:!0})))}}y(Xt,{publicProps:{placement:{config:0},align:{config:0},open:{config:3}},track:{isMounted:1,panelStyle:1,flipped:1},fields:["_open","positionFrame","followTrigger","insideClickStamp","handleHostClick","handleDocumentClick","handleDocumentKeydown"]});const Vi=h(Xt,{tmpl:Ni,sel:"fandry-popover",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function qi(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.tab-stop"+t+" {display: block;border-radius: var(--_fd-radius-md);}.item"+t+" {display: block;padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-md);color: hsl(var(--_fd-text-muted));font-size: var(--_fd-font-size-sm);text-decoration: none;line-height: var(--_fd-line-height-tight);}.item:hover"+t+" {background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.item--active"+t+" {background: hsl(var(--_fd-primary) / 0.1);color: color-mix(in srgb, hsl(var(--_fd-primary)) 70%, hsl(var(--_fd-text)));font-weight: var(--_fd-font-weight-semibold);}.item--active:hover"+t+" {background: hsl(var(--_fd-primary) / 0.14);}"}var Zt=[qi];const Bi={"tab-stop":!0},Hi={key:2},Ki=[];function Z(a,e,s,t){const{ti:r,gid:n,b:o,ncls:i,fid:d,s:c,h:l}=a,{_m0:p}=t;return[l("span",{classMap:Bi,attrs:{part:"base",role:"link",tabindex:r(e.tabStopIndex),"aria-labelledby":n("anchor"),"aria-current":e.ariaCurrent},key:0,on:p||(t._m0={keydown:o(e.handleKeydown),click:o(e.handleClick)})},[l("a",{className:i(e.classes),attrs:{id:n("anchor"),part:e.linkPart,href:d(e.href),"aria-current":e.ariaCurrent,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[c("",Hi,Ki,s)])])]}var ji=u(Z);Z.slots=[""],Z.stylesheets=[],Z.stylesheetToken="lwc-3rs0ldcssl0",Z.legacyStylesheetToken="fandry-sidebarItem_sidebarItem",Zt&&Z.stylesheets.push.apply(Z.stylesheets,Zt),m(Z);const Gi=["href","class","ariaCurrent"];class ea extends _{constructor(...e){super(...e);this.href="",this.active=!1,this.elementProps={}}get classes(){return["item",this.active?"item--active":""].filter(Boolean).join(" ")}get ariaCurrent(){return this.active?"page":void 0}get tabStopIndex(){return Ce(this.elementProps,!0)}handleKeydown(e){Se(e,this.template)}handleClick(e){Oe(e,this.template)}get resolvedElementProps(){return Pe(I(this,this.elementProps,Gi,"fandry-sidebar-item"))}get linkPart(){return z("link",{current:this.active})}}y(ea,{publicProps:{href:{config:0},active:{config:0},elementProps:{config:0}}});const Wi=h(ea,{tmpl:ji,sel:"fandry-sidebar-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ui(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;width: var(--_fd-sidebar-width);flex-shrink: 0;}.sidebar"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);height: 100%;overflow-y: auto;--sidebar-ring-room: calc(var(--_fd-ring-offset) + var(--_fd-ring-width));padding: var(--sidebar-ring-room);padding-inline-end: calc(var(--sidebar-ring-room) + var(--_fd-space-3));}"}var ta=[Ui];const Qi={sidebar:!0},Yi={key:1},Ji=[];function ee(a,e,s,t){const{s:r,h:n}=a;return[n("nav",{classMap:Qi,attrs:{part:"base","aria-label":e.navLabel},key:0},[r("",Yi,Ji,s)])]}var Xi=u(ee);ee.slots=[""],ee.stylesheets=[],ee.stylesheetToken="lwc-457dnk7cfc4",ee.legacyStylesheetToken="fandry-sidebar_sidebar",ta&&ee.stylesheets.push.apply(ee.stylesheets,ta),m(ee);const Zi={label:"Sidebar"};class aa extends _{constructor(...e){super(...e);this.messages={},this.ariaLabel=""}get navLabel(){return this.ariaLabel||{...Zi,...this.messages}.label}}y(aa,{publicProps:{messages:{config:0},ariaLabel:{config:0}}});const el=h(aa,{tmpl:Xi,sel:"fandry-sidebar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),tl=b`<div class="chrome${0}" aria-hidden="true"${2}><span class="dot${0}"${2}></span><span class="dot${0}"${2}></span><span class="dot${0}"${2}></span><span class="url${0}"${2}>acme.my.site.com/portal</span></div>`,al=b`<span class="brand${0}"${2}>ACME</span>`,rl={classMap:{section:!0},key:0},sl={classMap:{container:!0},key:1},nl={classMap:{intro:!0},key:2},ol={props:{variant:"primary"},key:3},il={classMap:{title:!0},props:{level:"2"},key:4},ll={classMap:{subtitle:!0},props:{variant:"muted"},key:5},dl={classMap:{stage:!0},key:6},cl={classMap:{"frame-scroll":!0},key:7},pl={classMap:{frame:!0},key:8},hl={classMap:{topbar:!0},key:11},fl={classMap:{"topbar-links":!0},key:14},ul={"search-input":!0},_e={variant:"muted",href:"#"},ml={"account-trigger":!0},yl={props:{initials:"A",size:"md"},key:19},bl={classMap:{"menu-header":!0},key:21},gl={props:{as:"span",size:"sm"},key:22},vl={props:{as:"span",size:"xs",variant:"muted"},key:23},kl={props:{value:"profile",label:"Profile"},key:24},_l={props:{value:"settings",label:"Account settings"},key:25},wl={props:{value:"signout",label:"Sign out"},key:26},xl={classMap:{body:!0},key:27},Sl={classMap:{sidebar:!0},props:{ariaLabel:"Portal"},key:28},Cl={classMap:{main:!0},key:30},Pl={"back-link":!0},zl={classMap:{"detail-head":!0},key:32},Ml={props:{level:"3"},key:33},El={props:{as:"span",size:"sm",variant:"muted"},key:35},Tl={classMap:{"detail-body":!0},key:36},$l={props:{level:"3"},key:37},Il={props:{variant:"muted"},key:38},Al={classMap:{stats:!0},key:39},Ll={"stat-card":!0},Dl={props:{as:"span",size:"xs",variant:"muted"},key:41},Rl={props:{level:"4"},key:42},Ol={classMap:{"orders-title":!0},props:{level:"4"},key:43},Nl={classMap:{"filter-bar":!0},key:44},Fl={props:{as:"span",size:"xs",variant:"muted"},key:45},Vl={classMap:{orders:!0},key:47},ra={"order-row":!0},ql={props:{as:"span",size:"sm"},key:49},Bl={props:{as:"span",size:"sm"},key:50},sa={"status-filter":!0},Hl={props:{level:"3"},key:53},Kl={props:{variant:"muted"},key:54},jl={classMap:{"filter-bar":!0},key:55},Gl={props:{as:"span",size:"xs",variant:"muted"},key:56},Wl={classMap:{orders:!0},key:58},Ul={props:{as:"span",size:"sm"},key:60},Ql={props:{as:"span",size:"sm"},key:61},Yl={classMap:{"built-with":!0},key:64},Jl={classMap:{"built-with-label":!0},props:{as:"span",size:"xs",variant:"muted"},key:65},Xl={classMap:{primitives:!0},key:66},Zl={classMap:{primitive:!0},key:68};function pe(a,e,s,t){const{t:r,c:n,h:o,st:i,b:d,k:c,d:l,i:p}=a,{_m0:v,_m1:k,_m2:E,_m3:S,_m4:ue,_m5:me,_m6:ye,_m7:T,_m8:we,_m9:xe,_m10:re,_m11:x}=t;return[o("section",rl,[o("div",sl,[o("div",nl,[n("fandry-badge",P,ol,[r("Live demo")]),n("fandry-heading",w,il,[r("A B2B dashboard, built entirely from these primitives")]),n("fandry-text",f,ll,[r("No custom UI components. Just Fandry primitives composed together. Click around: it's interactive.")])]),o("div",dl,[o("div",cl,[o("div",pl,[i(tl,10),o("div",hl,[i(al,13),o("div",fl,[n("fandry-input",ge,{classMap:ul,props:{placeholder:"Search\u2026",elementProps:e.searchProps,value:e.searchQuery},key:15,on:v||(t._m0={input:d(e.handleSearchInput)})}),n("fandry-link",C,{props:_e,key:16,on:k||(t._m1={click:d(e.handleTopbarLinkClick)})},[r("Help")])]),n("fandry-popover",Vi,{props:{open:e.accountMenuOpen,placement:"bottom",align:"end"},key:17,on:E||(t._m2={toggle:d(e.handleAccountMenuToggle)})},[n("fandry-button",M,{slotAssignment:"trigger",classMap:ml,props:{variant:"ghost",size:"md",elementProps:e.accountTriggerProps},key:18},[n("fandry-avatar",wi,yl)]),n("fandry-menu",Ii,{key:20,on:S||(t._m3={select:d(e.handleAccountMenuSelect)})},[o("div",bl,[n("fandry-text",f,gl,[r("Alex")]),n("fandry-text",f,vl,[r("alex@acme.com")])]),n("fandry-menu-item",Te,kl),n("fandry-menu-item",Te,_l),n("fandry-menu-item",Te,wl)])])]),o("div",xl,[n("fandry-sidebar",el,Sl,p(e.navItemStates,function(g){return n("fandry-sidebar-item",Wi,{attrs:{"data-key":g.key},props:{href:"#",active:g.active},key:c(29,g.key),on:ue||(t._m4={click:d(e.handleNavClick)})},[r(l(g.label))])})),o("div",Cl,[e.showDetail?n("fandry-link",C,{classMap:Pl,props:_e,key:31,on:me||(t._m5={click:d(e.handleBackFromDetail)})},[r("\u2190 Back")]):null,e.showDetail?o("div",zl,[n("fandry-heading",w,Ml,[r(l(e.detailRow.label))]),n("fandry-badge",P,{props:{variant:e.detailRow.badgeVariant},key:34},[r(l(e.detailRow.badgeLabel))])]):null,e.showDetail?n("fandry-text",f,El,[r(l(e.detailRow.code))]):null,e.showDetail?n("fandry-text",f,Tl,[r(l(e.detailRow.detail))]):null,e.showOverview?n("fandry-heading",w,$l,[r("Good morning, Alex")]):null,e.showOverview?n("fandry-text",f,Il,[r("Here's what's happening with your account.")]):null,e.showOverview?o("div",Al,p(e.stats,function(g){return n("fandry-card",A,{classMap:Ll,key:c(40,g.key)},[n("fandry-text",f,Dl,[r(l(g.label))]),n("fandry-heading",w,Rl,[r(l(g.value))])])})):null,e.showOverview?n("fandry-heading",w,Ol,[r("Recent Orders")]):null,e.showOverview&&e.hasStatusFilter?o("div",Nl,[n("fandry-text",f,Fl,[r('Filtered by "'+l(e.statusFilter)+'"')]),n("fandry-link",C,{props:_e,key:46,on:ye||(t._m6={click:d(e.handleClearStatusFilter)})},[r("Clear")])]):null,e.showOverview?o("div",Vl,p(e.visibleRecentOrders,function(g){return o("div",{classMap:ra,attrs:{"data-key":g.key,role:"button",tabindex:"0"},key:c(48,g.key),on:T||(t._m7={click:d(e.handleRowClick),keydown:d(e.handleRowKeydown)})},[n("fandry-text",f,ql,[r(l(g.code))]),n("fandry-text",f,Bl,[r(l(g.label))]),o("span",{classMap:sa,attrs:{role:"button",tabindex:"0","data-status":g.badgeLabel},key:51,on:we||(t._m8={click:d(e.handleStatusClick),keydown:d(e.handleStatusKeydown)})},[n("fandry-badge",P,{props:{variant:g.badgeVariant},key:52},[r(l(g.badgeLabel))])])])})):null,e.showList?n("fandry-heading",w,Hl,[r(l(e.selectedView.title))]):null,e.showList?n("fandry-text",f,Kl,[r(l(e.selectedView.subtitle))]):null,e.showList&&e.hasStatusFilter?o("div",jl,[n("fandry-text",f,Gl,[r('Filtered by "'+l(e.statusFilter)+'"')]),n("fandry-link",C,{props:_e,key:57,on:xe||(t._m9={click:d(e.handleClearStatusFilter)})},[r("Clear")])]):null,e.showList?o("div",Wl,p(e.visibleListRows,function(g){return o("div",{classMap:ra,attrs:{"data-key":g.key,role:"button",tabindex:"0"},key:c(59,g.key),on:re||(t._m10={click:d(e.handleRowClick),keydown:d(e.handleRowKeydown)})},[n("fandry-text",f,Ul,[r(l(g.code))]),n("fandry-text",f,Ql,[r(l(g.label))]),o("span",{classMap:sa,attrs:{role:"button",tabindex:"0","data-status":g.badgeLabel},key:62,on:x||(t._m11={click:d(e.handleStatusClick),keydown:d(e.handleStatusKeydown)})},[n("fandry-badge",P,{props:{variant:g.badgeVariant},key:63},[r(l(g.badgeLabel))])])])})):null])])])])]),o("div",Yl,[n("fandry-text",f,Jl,[r("Built from")]),o("ul",Xl,p(e.primitivesUsed,function(g){return o("li",{key:c(67,g)},[n("fandry-badge",P,Zl,[r(l(g))])])}))])])])]}var ed=u(pe);pe.stylesheets=[],pe.stylesheetToken="lwc-6k3t8bovika",pe.legacyStylesheetToken="fandryui-dashboardExample_dashboardExample",Bt&&pe.stylesheets.push.apply(pe.stylesheets,Bt),m(pe);const $e={orders:{title:"Orders",subtitle:"All orders placed by your account.",rows:[{key:"10482",code:"#10482",label:"Industrial Pump",badgeLabel:"Shipped",badgeVariant:"primary",detail:"Placed Sep 2. Left the warehouse via ground freight \u2014 tracking updates daily."},{key:"10471",code:"#10471",label:"Valve Assembly",badgeLabel:"Processing",badgeVariant:"warning",detail:"Placed Aug 29. Awaiting stock confirmation from the Ohio facility."},{key:"10463",code:"#10463",label:"Filter Kit",badgeLabel:"Delivered",badgeVariant:"success",detail:"Placed Aug 21, delivered Aug 24. Signed for by receiving dock."},{key:"10455",code:"#10455",label:"Gasket Set",badgeLabel:"Delivered",badgeVariant:"success",detail:"Placed Aug 14, delivered Aug 18. Signed for by receiving dock."}]},products:{title:"Products",subtitle:"Items available to order.",rows:[{key:"sku-1042",code:"SKU-1042",label:"Industrial Pump",badgeLabel:"In stock",badgeVariant:"success",detail:"42 units on hand across 2 warehouses. Standard lead time: 2 business days."},{key:"sku-1041",code:"SKU-1041",label:"Valve Assembly",badgeLabel:"Low stock",badgeVariant:"warning",detail:"6 units on hand. Restock expected next week \u2014 order soon to avoid delay."},{key:"sku-1039",code:"SKU-1039",label:"Filter Kit",badgeLabel:"In stock",badgeVariant:"success",detail:"118 units on hand. Standard lead time: 1 business day."}]},invoices:{title:"Invoices",subtitle:"Billing history for your account.",rows:[{key:"inv-2044",code:"INV-2044",label:"September statement",badgeLabel:"Paid",badgeVariant:"success",detail:"$12,480.00 \u2014 paid in full via ACH on Sep 3."},{key:"inv-2039",code:"INV-2039",label:"August statement",badgeLabel:"Paid",badgeVariant:"success",detail:"$9,150.00 \u2014 paid in full via ACH on Aug 3."},{key:"inv-2031",code:"INV-2031",label:"July statement",badgeLabel:"Overdue",badgeVariant:"danger",detail:"$4,020.00 \u2014 14 days past due. A reminder was sent Aug 28."}]},service:{title:"Open Cases",subtitle:"Support cases opened by your team.",rows:[{key:"4821",code:"#4821",label:"Pump running hot",badgeLabel:"High",badgeVariant:"danger",detail:"Opened Sep 1. Field technician scheduled for Sep 4, 9am-noon."},{key:"4790",code:"#4790",label:"Replacement gasket request",badgeLabel:"Normal",badgeVariant:"warning",detail:"Opened Aug 27. Replacement part shipped Aug 30, arriving Sep 3."},{key:"4772",code:"#4772",label:"Installation question",badgeLabel:"Low",badgeVariant:"primary",detail:"Opened Aug 20. Answered by support Aug 21 \u2014 awaiting your confirmation."}]},knowledge:{title:"Knowledge Base",subtitle:"Guides and docs for your equipment.",rows:[{key:"kb-1",code:"Guide",label:"Installing a Filter Kit",badgeLabel:"Guide",badgeVariant:"default",detail:"Step-by-step install guide, 8 min read. Last updated Jul 12."},{key:"kb-2",code:"Guide",label:"Valve Assembly Maintenance",badgeLabel:"Guide",badgeVariant:"default",detail:"Recommended maintenance schedule, 5 min read. Last updated Jun 30."},{key:"kb-3",code:"FAQ",label:"Warranty & Returns",badgeLabel:"FAQ",badgeVariant:"default",detail:"Common questions on warranty coverage and the returns process."}]}};class na extends ${constructor(...e){super(...e);this.primitivesUsed=["fandry-input","fandry-popover","fandry-menu","fandry-avatar","fandry-button","fandry-card","fandry-badge","fandry-heading","fandry-text","fandry-link","fandry-sidebar","fandry-sidebar-item"],this.navItems=[{key:"overview",label:"Overview"},{key:"orders",label:"Orders"},{key:"products",label:"Products"},{key:"invoices",label:"Invoices"},{key:"service",label:"Service"},{key:"knowledge",label:"Knowledge"}],this.selectedKey="overview",this.detailRow=null,this.statusFilter=null,this.searchQuery="",this.accountMenuOpen=!1,this.stats=[{key:"orders",label:"Orders",value:"12"},{key:"balance",label:"Balance",value:"$42,050"},{key:"cases",label:"Open Cases",value:"3"}],this.recentOrders=$e.orders.rows.slice(0,3),this.searchProps={ariaLabel:"Search orders and products"}}get navItemStates(){return this.navItems.map(e=>({...e,active:e.key===this.selectedKey}))}get isOverviewTab(){return this.selectedKey==="overview"}get showDetail(){return!!this.detailRow}get showOverview(){return!this.showDetail&&this.isOverviewTab}get showList(){return!this.showDetail&&!this.isOverviewTab}get selectedView(){return $e[this.selectedKey]??$e.orders}filterRows(e){const s=this.searchQuery.trim().toLowerCase();return e.filter(t=>{const r=!this.statusFilter||t.badgeLabel===this.statusFilter,n=!s||t.label.toLowerCase().includes(s)||t.code.toLowerCase().includes(s);return r&&n})}get visibleRecentOrders(){return this.filterRows(this.recentOrders)}get visibleListRows(){return this.filterRows(this.selectedView.rows)}get hasStatusFilter(){return!!this.statusFilter}get accountTriggerProps(){return{tabIndex:0,ariaHasPopup:"menu",ariaExpanded:this.accountMenuOpen}}handleNavClick(e){e.preventDefault();const s=e.currentTarget.dataset.key;s&&s!==this.selectedKey&&(this.selectedKey=s,this.statusFilter=null,this.searchQuery="",this.detailRow=null)}findRowByKey(e){return e?(this.isOverviewTab?this.visibleRecentOrders:this.visibleListRows).find(t=>t.key===e):void 0}handleRowClick(e){const s=this.findRowByKey(e.currentTarget.dataset.key);s&&(this.detailRow=s)}handleRowKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.handleRowClick(e))}handleBackFromDetail(e){e.preventDefault(),this.detailRow=null}toggleStatusFilter(e){!e||(this.statusFilter=this.statusFilter===e?null:e)}handleStatusClick(e){e.stopPropagation(),this.toggleStatusFilter(e.currentTarget.dataset.status)}handleStatusKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation(),this.toggleStatusFilter(e.currentTarget.dataset.status))}handleClearStatusFilter(e){e.preventDefault(),this.statusFilter=null}handleSearchInput(e){this.searchQuery=e.detail}handleAccountMenuToggle(e){this.accountMenuOpen=e.detail}handleAccountMenuSelect(){this.accountMenuOpen=!1}handleTopbarLinkClick(e){e.preventDefault()}}y(na,{fields:["primitivesUsed","navItems","selectedKey","detailRow","statusFilter","searchQuery","accountMenuOpen","stats","recentOrders","searchProps"]});const td=h(na,{tmpl:ed,sel:"fandryui-dashboard-example",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ad(a,e,s){var t=a?"["+a+"]":"";return"fandryui-layout-patterns-example"+t+" {display: block;}.lp-section"+t+" {padding: calc(var(--fd-space-6) * 2) 0;border-top: 1px solid var(--fd-color-border);background: linear-gradient(180deg, color-mix(in srgb, var(--fd-color-text) 3%, transparent), transparent 70%);}.lp-inner"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: grid;grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);gap: calc(var(--fd-space-6) * 2);align-items: center;}@media (max-width: 60rem) {.lp-inner"+t+" {grid-template-columns: minmax(0, 1fr);gap: var(--fd-space-6);}}.lp-copy"+t+" {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-3);}.lp-title"+t+",.lp-lede"+t+",.lp-frame-lede"+t+" {display: block;}.lp-lede"+t+" code"+t+' {font-family: var(--font-code, "Geist Mono", monospace);font-size: 0.875em;padding: 0.1em 0.35em;border-radius: var(--fd-radius-sm);background: color-mix(in srgb, var(--fd-color-text) 6%, transparent);border: 1px solid color-mix(in srgb, var(--fd-color-text) 10%, transparent);overflow-wrap: anywhere;}.lp-code'+t+" {display: block;width: 100%;margin-top: var(--fd-space-2);}.lp-stage"+t+` {padding: var(--fd-space-6);border-radius: calc(var(--fd-radius-lg) * 2);border: 1px dashed color-mix(in srgb, hsl(var(--site-primary)) 35%, transparent);background-color: hsl(var(--site-primary) / 0.04);background-image:
 linear-gradient(hsl(var(--site-primary) / 0.08) 1px, transparent 1px),
 linear-gradient(90deg, hsl(var(--site-primary) / 0.08) 1px, transparent 1px);background-size: var(--fd-space-6) var(--fd-space-6);}@media (max-width: 40rem) {.lp-stage`+t+" {padding: var(--fd-space-3);}}.lp-frame"+t+" {border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-lg);background: var(--fd-color-surface);padding-block: var(--fd-space-6);box-shadow: 0 24px 48px -24px color-mix(in srgb, var(--fd-color-text) 35%, transparent);}.lp-frame-lede"+t+" {margin-bottom: var(--fd-space-4);}.order-card-body"+t+" {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-2);}"}var oa=[ad];const rd=b`<code${3}>global.css</code>`,sd={classMap:{"lp-section":!0},key:0},nd={classMap:{"lp-inner":!0},key:1},od={classMap:{"lp-copy":!0},key:2},id={props:{variant:"primary"},key:3},ld={classMap:{"lp-title":!0},props:{level:"2"},key:4},dd={classMap:{"lp-lede":!0},props:{variant:"muted"},key:5},cd={"lp-code":!0},pd={classMap:{"lp-stage":!0},key:9},hd={classMap:{"lp-frame":!0},key:10},fd={classMap:{"fandry-container":!0},key:11},ud={props:{level:"3"},key:12},md={classMap:{"lp-frame-lede":!0},props:{variant:"muted"},key:13},yd={classMap:{"fandry-grid":!0},key:14},bd={classMap:{"order-card-body":!0},key:16},gd={props:{as:"span",size:"xs",variant:"muted"},key:17},vd={props:{level:"4"},key:18},kd={props:{as:"span",size:"sm"},key:19};function te(a,e,s,t){const{t:r,c:n,st:o,h:i,k:d,d:c,i:l}=a;return[i("section",sd,[i("div",nd,[i("div",od,[n("fandry-badge",P,id,[r("Layout")]),n("fandry-heading",w,ld,[r("Layout is just CSS")]),n("fandry-text",f,dd,[r("No Container or Grid components to learn. Two plain classes from "),o(rd,7),r(" wrap ordinary primitives, and the grid finds its own columns as the space changes.")]),n("fandryui-code-block",Ee,{classMap:cd,props:{label:"orders.html",code:e.markup},key:8})]),i("div",pd,[i("div",hd,[i("div",fd,[n("fandry-heading",w,ud,[r("Orders")]),n("fandry-text",f,md,[r("3 orders placed today.")]),i("div",yd,l(e.orders,function(p){return n("fandry-card",A,{key:d(15,p.key)},[i("div",bd,[n("fandry-text",f,gd,[r(c(p.code))]),n("fandry-heading",w,vd,[r(c(p.customer))]),n("fandry-text",f,kd,[r(c(p.amount))]),n("fandry-badge",P,{props:{variant:p.badgeVariant},key:20},[r(c(p.badgeLabel))])])])}))])])])])])]}var _d=u(te);te.renderMode="light",te.stylesheets=[],te.stylesheetToken="lwc-1i6o2cn3jqk",te.legacyStylesheetToken="fandryui-layoutPatternsExample_layoutPatternsExample",oa&&te.stylesheets.push.apply(te.stylesheets,oa),m(te);const wd=`<div class="fandry-container">
  <fandry-heading>Orders</fandry-heading>
  <div class="fandry-grid">
    <fandry-card>\u2026</fandry-card>
    <fandry-card>\u2026</fandry-card>
  </div>
</div>

/* global.css */
.fandry-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: var(--fd-space-6);
}`;class Ie extends ${constructor(...e){super(...e);this.markup=wd,this.orders=[{key:"ord-10482",code:"#10482",customer:"Acme Robotics",amount:"$1,240.00",badgeLabel:"Shipped",badgeVariant:"success"},{key:"ord-10483",code:"#10483",customer:"Bramble & Co",amount:"$86.50",badgeLabel:"Processing",badgeVariant:"warning"},{key:"ord-10484",code:"#10484",customer:"Nimbus Traders",amount:"$412.00",badgeLabel:"Backordered",badgeVariant:"danger"}]}}Ie.renderMode="light",y(Ie,{fields:["markup","orders"]});const xd=h(Ie,{tmpl:_d,sel:"fandryui-layout-patterns-example",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Sd(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;flex-wrap: wrap;gap: var(--fd-space-2) var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {padding: var(--fd-space-4);}}"}var ia=[Sd];const Cd={classMap:{footer:!0},key:0},Pd={classMap:{container:!0},key:1},zd={props:{as:"span",size:"sm",variant:"muted"},key:2},Md={classMap:{links:!0},key:3},Ed={props:{href:"/why-fandry/",variant:"muted"},key:4},Td={props:{href:"/getting-started/",variant:"muted"},key:5},$d={props:{href:"/examples/",variant:"muted"},key:6},Id={props:{href:"/components/",variant:"muted"},key:7},Ad={props:{href:"/blocks/",variant:"muted"},key:8},Ld={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:9};function he(a,e,s,t){const{d:r,t:n,c:o,h:i}=a;return[i("footer",Cd,[i("div",Pd,[o("fandry-text",f,zd,[n("\xA9 "+r(e.year)+" Fandry UI \xB7 MIT License")]),i("div",Md,[o("fandry-link",C,Ed,[n("Why Fandry")]),o("fandry-link",C,Td,[n("Get started")]),o("fandry-link",C,$d,[n("Examples")]),o("fandry-link",C,Id,[n("Components")]),o("fandry-link",C,Ad,[n("Blocks")]),o("fandry-link",C,Ld,[n("GitHub")])])])])]}var Dd=u(he);he.stylesheets=[],he.stylesheetToken="lwc-3atbjjo9jl4",he.legacyStylesheetToken="fandryui-siteFooter_siteFooter",ia&&he.stylesheets.push.apply(he.stylesheets,ia),m(he);class Rd extends ${get year(){return new Date().getFullYear()}}const Od=h(Rd,{tmpl:Dd,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Nd={key:0},Fd={key:1},Vd={key:2},qd={key:3},Bd={key:4},Hd={key:5},Kd={key:6},jd={key:7};function ae(a,e,s,t){const{c:r,h:n}=a;return[r("fandryui-site-header",vr,Nd),n("main",Fd,[r("fandryui-hero-section",Dn,Vd),r("fandryui-why-section",Zo,qd),r("fandryui-feature-grid",ui,Bd),r("fandryui-dashboard-example",td,Hd),r("fandryui-layout-patterns-example",xd,Kd)]),r("fandryui-site-footer",Od,jd)]}var Gd=u(ae);ae.renderMode="light",ae.stylesheets=[],ae.stylesheetToken="lwc-67rvm7fvdt8",ae.legacyStylesheetToken="fandryui-home_home",Ae&&ae.stylesheets.push.apply(ae.stylesheets,Ae),m(ae);class la extends ${}la.renderMode="light";const Wd=h(la,{tmpl:Gd,sel:"fandryui-home",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{Wd as default};
