import{registerTemplate as m,freezeTemplate as y,registerComponent as f,LightningElement as j,registerDecorators as v,parseFragment as k}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function pt(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}main"+t+` {background: radial-gradient(
 circle at 15% 0%,
 hsl(var(--brand-primary, 330 81% 48%) / 0.12),
 transparent 55%
 ),
 radial-gradient(
 circle at 85% 10%,
 hsl(var(--brand-accent, 199 89% 36%) / 0.12),
 transparent 55%
 );}`}var he=[pt];function ht(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":r+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 1.75rem;height: 1.75rem;border-radius: var(--fd-radius-md);background: linear-gradient(135deg, hsl(var(--brand-primary, 330 81% 48%)), hsl(var(--brand-accent, 199 89% 36%)));color: var(--fd-color-on-primary);font-size: 0.9rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;justify-content: center;gap: var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var fe=[ht];function ft(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline;}.link"+t+" {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: var(--_fd-link-underline-offset);cursor: pointer;transition: color var(--_fd-duration-fast) ease;}.link:hover"+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var ue=[ft];const ut={"tab-stop":!0},mt={key:2},yt=[];function C(a,e,n,t){const{ti:r,gid:s,b:o,ncls:i,fid:d,s:l,h:c}=a,{_m0:g}=t;return[c("span",{classMap:ut,attrs:{part:"base",role:"link",tabindex:r(e.tabStopIndex),"aria-labelledby":s("anchor"),"aria-disabled":e.ariaDisabled},key:0,on:g||(t._m0={keydown:o(e.handleKeydown),click:o(e.handleClick)})},[c("a",{className:i(e.classes),attrs:{id:s("anchor"),part:e.linkPart,href:d(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[l("",mt,yt,n)])])]}var bt=m(C);C.slots=[""],C.stylesheets=[],C.stylesheetToken="lwc-38j32sll441",C.legacyStylesheetToken="fandry-link_link",ue&&C.stylesheets.push.apply(C.stylesheets,ue),y(C);var gt=void 0;function vt(a,e,n){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 330 81% 48%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 199 89% 36%));--_fd-accent-foreground: var(--fd-accent-foreground, 0 0% 100%);--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 271 55% 40%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-z-overlay-contained: var(--fd-z-overlay-contained, 1);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-radius-full: var(--fd-radius-full, 999px);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-switch-padding: var(--fd-switch-padding, 0.125rem);--_fd-switch-width: var(--fd-switch-width, calc(var(--_fd-size-sm) * 2 + 2 * var(--_fd-switch-padding)));--_fd-tooltip-arrow-size: var(--fd-tooltip-arrow-size, 0.625rem);--_fd-spinner-thickness: var(--fd-spinner-thickness, 0.125em);--_fd-sidebar-width: var(--fd-sidebar-width, 16rem);--_fd-toast-width: var(--fd-toast-width, 20rem);--_fd-form-column-min-width: var(--fd-form-column-min-width, 16rem);--_fd-link-underline-offset: var(--fd-link-underline-offset, 0.125em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-loading-overlay-delay: var(--fd-loading-overlay-delay, 150ms);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var kt=[vt];function wt(a,e,n){var t=a?"-"+a:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}"}var _t=[wt];function xt(a,e,n){var t=a?"["+a+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}[hidden]"+t+" {display: none !important;}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var St=[kt,_t,xt];const me=new WeakMap;function M(a,e,n,t,r="elementProps"){const s={},o=[];for(const[i,d]of Object.entries(e))n.includes(i)?o.push(i):s[i]=d;return o.length&&me.get(a)!==e&&(me.set(a,e),console.warn(`${t}: ${r} included ${o.map(i=>`"${i}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),s}function ne(a,e){a.key!=="Enter"||a.target!==a.currentTarget||e.querySelector("a")?.dispatchEvent(be(a))}function ye(a,e){const n=e.querySelector("a");!n||a.target!==a.currentTarget||(a.stopPropagation(),n.dispatchEvent(be(a)))}function be(a){return new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,altKey:a.altKey,metaKey:a.metaKey})}function oe(a,e){if(!!e)return Number(a.tabIndex)===-1?"-1":"0"}function ie(a){const{tabIndex:e,...n}=a;return n}class de extends j{activateAnchorOnEnter(e){ne(e,this.template)}resolveTabStopIndex(e,n){return oe(e,n)}withoutTabIndex(e){return ie(e)}resolveElementProps(e,n,t,r="elementProps"){return M(this,e,n,t,r)}}de.stylesheets=[St],de.shadowSupportMode="native";const w=f(de,{tmpl:gt,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function P(a,e={}){return[a,...Object.keys(e).filter(n=>e[n])].join(" ")}const zt=["href","target","rel","class","ariaDisabled"];class ge extends w{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return oe(this.elementProps,!this.disabled)}handleKeydown(e){ne(e,this.template)}handleClick(e){ye(e,this.template)}get resolvedElementProps(){return ie(M(this,this.elementProps,zt,"fandry-link"))}get linkPart(){return P("link",{[this.variant||"default"]:!0,disabled:this.disabled})}}v(ge,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const b=f(ge,{tmpl:bt,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Pt(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease, color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}@media (hover: hover) {.button--default:hover:not(:disabled):not([aria-disabled='true'])"+t+" {filter: brightness(var(--_fd-hover-brightness));box-shadow: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}@media (hover: hover) {.button--secondary:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}@media (hover: hover) {.button--ghost:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}}.button:focus-visible"+t+` {outline: var(--_fd-ring-width) solid transparent;box-shadow: 0 0 0 var(--_fd-ring-width)\r
 hsl(var(--_fd-ring-color));}.button:disabled`+t+",\r.button[aria-disabled='true']"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled):not([aria-disabled='true'])"+t+" {transform: translateY(1px);box-shadow: none;}"}var ve=[Pt];const Ct={key:1},Mt=[];function E(a,e,n,t){const{ncls:r,b:s,s:o,h:i}=a,{_m0:d}=t;return[i("button",{className:r(e.classes),attrs:{part:e.basePart,type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0,on:d||(t._m0={click:s(e.handleClick)})},[o("",Ct,Mt,n)])]}var Et=m(E);E.slots=[""],E.stylesheets=[],E.stylesheetToken="lwc-4ejlbgtq1p9",E.legacyStylesheetToken="fandry-button_button",ve&&E.stylesheets.push.apply(E.stylesheets,ve),y(E);const Tt=["type","class","disabled"];class ke extends w{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return M(this,this.elementProps,Tt,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}get basePart(){return P("base",{[this.variant||"default"]:!0,disabled:this.disabled||this.isAriaDisabled})}get isAriaDisabled(){return String(this.elementProps?.ariaDisabled)==="true"}handleClick(e){this.isAriaDisabled&&(e.preventDefault(),e.stopImmediatePropagation())}}v(ke,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const V=f(ke,{tmpl:Et,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function It(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var we=[It];const $t={key:1},At=[];function T(a,e,n,t){const{ncls:r,s,h:o}=a;return[o("span",{className:r(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.accessibleLabel},key:0},[s("",$t,At,n)])]}var Dt=m(T);T.slots=[""],T.stylesheets=[],T.stylesheetToken="lwc-17qhee1uo3s",T.legacyStylesheetToken="fandry-icon_icon",we&&T.stylesheets.push.apply(T.stylesheets,we),y(T);class _e extends w{constructor(...e){super(...e);this.size="md",this.label="",this.ariaLabel=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.ariaLabel&&!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get accessibleLabel(){return this.isDecorative?void 0:this.ariaLabel||this.label}}v(_e,{publicProps:{size:{config:0},label:{config:0},ariaLabel:{config:0}}});const ae=f(_e,{tmpl:Dt,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Lt(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);box-sizing: border-box;width: 100%;max-width: none;height: 100%;max-height: none;margin: 0;border: 0;color: inherit;}.backdrop"+t+"::backdrop {background: transparent;}.backdrop[open]"+t+",.backdrop--closing"+t+" {display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.status"+t+" {flex-shrink: 0;}.count"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var xe=[Lt];const Nt=k`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,Rt=k`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,Ot=k`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,Ft=k`<span class="count${0}"${2}>${"t1"}</span>`,Bt={panel:!0},qt={part:"panel"},jt={classMap:{search:!0},attrs:{part:"search"},key:2},Vt={input:!0},Ht={listbox:!0},Gt={group:!0},Kt={classMap:{status:!0},attrs:{role:"status"},key:14},Ut={classMap:{empty:!0},attrs:{part:"empty"},key:17},Wt={attrs:{name:"empty"},key:18};function I(a,e,n,t){const{ncls:r,b:s,gid:o,h:i,k:d,d:l,sp:c,st:g,dc:S,i:Z,f:J,t:p,s:nt}=a,{_m0:ot,_m1:it,_m2:dt,_m3:lt,_m4:ct}=t;return[e.isMounted?i("dialog",{className:r(e.backdropClasses),attrs:{part:"backdrop","aria-label":e.accessibleLabel,inert:e.backdropInert},key:0,on:ot||(t._m0={click:s(e.handleBackdropClick),cancel:s(e.handleCancel)})},[i("div",{classMap:Bt,attrs:qt,key:1,on:it||(t._m1={mousedown:s(e.handlePanelMouseDown)})},[i("div",jt,[i("input",{classMap:Vt,attrs:{id:o("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.accessibleLabel,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":o("listbox"),"aria-activedescendant":o(e.activeDescendant)},props:{value:e.query},key:3,on:dt||(t._m2={input:s(e.handleInput),keydown:s(e.handleInputKeydown)})})]),i("div",{classMap:Ht,attrs:{id:o("listbox"),part:"listbox",role:"listbox","aria-label":e.accessibleLabel},key:4,on:lt||(t._m3={mousedown:s(e.handleListboxMouseDown)})},Z(e.renderGroups,function(ee){return i("div",{classMap:Gt,attrs:{part:"group",role:"group","aria-label":ee.label},key:d(5,ee.key)},J([ee.hasLabel?g(Nt,7,[c(1,null,l(ee.label))]):null,Z(ee.options,function(_){return i("div",{className:r(_.classes),attrs:{id:o(_.id),part:_.part,role:"option","data-option-id":_.id,"aria-selected":_.ariaSelected,"aria-disabled":_.ariaDisabled},key:d(8,_.id),on:ct||(t._m4={click:s(e.handleOptionClick),mousemove:s(e.handleOptionMouseMove)})},[_.component?S(_.component,{props:{..._.resolvedComponentProps},key:9}):null,_.component?null:g(Rt,11,[c(1,null,l(_.label))]),_.component?null:_.hasDescription?g(Ot,13,[c(1,null,l(_.description))]):null])})]))})),i("div",Kt,[e.hasResults?g(Ft,16,[c(1,null,l(e.resultsText))]):null,e.hasResults?null:i("div",Ut,[nt("empty",Wt,[p("No results found")],n)])])])]):null]}var Yt=m(I);I.slots=["empty"],I.stylesheets=[],I.stylesheetToken="lwc-4bgejodik1n",I.legacyStylesheetToken="fandry-command_command",xe&&I.stylesheets.push.apply(I.stylesheets,xe),y(I);var Qt=void 0;const Xt=/[\s\-_/.]/;function re(a,e,n){const t=a.toLowerCase().indexOf(e);return t===-1?0:t===0?n*3:Xt.test(a[t-1])?n*2:n}function Zt(a,e){let n=0;for(const t of e){const r=Math.max(re(a.label,t,10),...(a.keywords??[]).map(s=>re(s,t,6)),re(a.description??"",t,3),re(a.group??"",t,2));if(r===0)return-1;n+=r}return n}class Se extends w{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}isAriaSelected(e,n){return e}get resultCount(){return this.entries.length}commit(e){}filterItems(e,n){const t=n.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((r,s)=>({item:r,index:s,score:Zt(r,t)})).filter(r=>r.score>=0).sort((r,s)=>s.score-r.score||r.index-s.index).map(r=>r.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,n=this.query,t=this.entriesCache;if(t.source===e&&t.query===n)return t.entries;const r=this.buildEntries(e,n);return t.source=e,t.query=n,t.entries=r,r}buildEntries(e,n){const t=this.filterItems(e,n),r=t.filter(i=>!i.group),s=Array.from(new Set(t.filter(i=>i.group).map(i=>i.group)));return[...r,...s.flatMap(i=>t.filter(d=>d.group===i))].map((i,d)=>({id:`option-${d}`,item:i}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(n=>n.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,n=[];for(const t of this.entries){const r=t.item.group??"";let s=n.find(o=>o.label===r);s||(s={key:`group-${n.length}`,label:r,hasLabel:!!r,options:[]},n.push(s)),s.options.push(this.decorate(t,e))}return n}decorate(e,n){const{item:t,id:r}=e,s=!!t.disabled,o=this.isSelected(t);return{id:r,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:s,ariaSelected:this.isAriaSelected(o,r===n)?"true":"false",ariaDisabled:s?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",o?"option--selected":"",r===n?"option--active":"",s?"option--disabled":""].filter(Boolean).join(" "),part:P("option",{selected:o,active:r===n,disabled:s})}}activateSelected(){const e=this.enabledEntries.find(n=>this.isSelected(n.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const n=this.enabledEntries;if(!n.length)return;const r=(n.findIndex(s=>s.id===this.resolvedActiveId)+e+n.length)%n.length;this.activeId=n[r].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const n=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);n&&this.commit(n.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const n=e.currentTarget.dataset.optionId,t=this.entries.find(r=>r.id===n);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const n=e.currentTarget.dataset.optionId;if(n===this.resolvedActiveId)return;const t=this.entries.find(r=>r.id===n);t&&!t.item.disabled&&(this.activeId=t.id)}}v(Se,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const Jt=f(Se,{tmpl:Qt,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ea(a){return!a||typeof a.getAnimations!="function"?Promise.resolve():Promise.allSettled(a.getAnimations({subtree:!0}).map(e=>e.finished))}const ta={results:a=>a===1?"1 result":`${a} results`},aa=[];class ze extends Jt{constructor(...e){super(...e);this.label="",this.ariaLabel="",this.placeholder="",this.items=[],this.messages={},this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=n=>{this.open&&n.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const n=this._open;this._open=e,e&&(this.isMounted=!0),!n&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):n&&!e&&(this.unlockBodyScroll(),this.dialog?.close?.(),this.previouslyFocused?.focus(),this.previouslyFocused=null)}get source(){return this.items??aa}isAriaSelected(e,n){return n}get resultsText(){return{...ta,...this.messages}.results(this.resultCount)}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get accessibleLabel(){return this.ariaLabel||this.label}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.showModal(),this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");ea(e).then(()=>{this.open||(this.isMounted=!1)})}}get dialog(){return this.template.querySelector("dialog")}showModal(){const e=this.dialog;e&&!e.open&&typeof e.showModal=="function"&&e.showModal()}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}v(ze,{publicProps:{label:{config:0},ariaLabel:{config:0},placeholder:{config:0},items:{config:0},messages:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const ra=f(ze,{tmpl:Yt,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),sa=k`<a class="logo${0}" href="/"${2}><span class="logo-mark${0}"${2}>F</span>Fandry UI</a>`,na=k`<span class="shortcut${0}"${2}>${"t1"}</span>`,oa=k`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,ia={classMap:{header:!0},key:0},da={classMap:{container:!0},key:1},la={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:4},ca={props:{href:"/getting-started"},key:5},pa={props:{href:"/examples"},key:6},ha={props:{href:"/components"},key:7},fa={props:{href:"/blocks"},key:8},ua={classMap:{actions:!0},key:9},ma={variant:"secondary",size:"sm"},ya={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:13},ba={props:{size:"sm",label:"GitHub"},key:14};function H(a,e,n,t){const{st:r,t:s,c:o,h:i,b:d,d:l,sp:c}=a,{_m0:g,_m1:S}=t;return[i("header",ia,[i("div",da,[r(sa,3),i("nav",la,[o("fandry-link",b,ca,[s("Get started")]),o("fandry-link",b,pa,[s("Examples")]),o("fandry-link",b,ha,[s("Components")]),o("fandry-link",b,fa,[s("Blocks")])]),i("div",ua,[o("fandry-button",V,{props:ma,key:10,on:g||(t._m0={click:d(e.handlePaletteOpen)})},[s("Search "),r(na,12,[c(1,null,l(e.shortcutHint))])]),o("fandry-link",b,ya,[o("fandry-icon",ae,ba,[r(oa,16)])])])])]),o("fandry-command",ra,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:17,on:S||(t._m1={toggle:d(e.handlePaletteToggle),select:d(e.handlePaletteSelect)})})]}var ga=m(H);H.stylesheets=[],H.stylesheetToken="lwc-2hoqs8gnsf6",H.legacyStylesheetToken="fandryui-siteHeader_siteHeader",fe&&H.stylesheets.push.apply(H.stylesheets,fe),y(H);const va=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],ka=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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
}`},category:"Layout",description:"Previous/next navigation \u2014 as links between two adjacent pages, or as Previous / Page N of M / Next buttons for paging a collection.",props:[{name:"previous-href",type:"string",default:"''",description:"Omit to hide the previous link (e.g. on the first page)."},{name:"previous-label",type:"string",default:"''",description:"Title of the previous page."},{name:"next-href",type:"string",default:"''",description:"Omit to hide the next link (e.g. on the last page)."},{name:"next-label",type:"string",default:"''",description:"Title of the next page."},{name:"page-index",type:"number",default:"undefined",description:"Zero-based current page. Setting it switches from links to Previous/Next buttons; listen for `change` (detail.pageIndex) and update it. Replace controls via the previous, status and next slots, or just the buttons' words via previous-text and next-text."},{name:"page-count",type:"number",default:"-1",description:"Total pages in page mode; -1 means unknown (Next stays enabled)."},{name:"aria-label",type:"string",default:"\u2014",description:'Names this nav landmark, e.g. "Results pages". Overrides messages.label.'},{name:"messages",type:"{ label, status(page, pageCount) }",default:"{}",description:`Replaces the default landmark name ("Pagination") and page mode's status line, e.g. to translate them. Link mode's "Previous" / "Next" lines are the previous-eyebrow and next-eyebrow slots.`}],code:`<fandry-pagination
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
}`},category:"Typography",description:"The text of a form label, with an optional required indicator. Put it inside your own `<label>`, or in the `label` slot of a field.",notes:[{title:"Why you write the <label> yourself",paragraphs:["A label finds its control by id, and the browser looks an id up inside one shadow root only. A <label> rendered inside fandry-label could never reach a control outside it: it would look right, give the control no name for a screen reader, and do nothing when clicked.","So you write the <label>, beside its control, and fandry-label goes inside it as the text. That is how web components work, not something particular to this library: each component is a tree of its own, so two elements that refer to each other have to be in the same one.","The fields (fandry-input, fandry-textarea, fandry-select, fandry-combobox, fandry-lookup) follow the same rule from the inside. Each renders its own <label> next to its own control, so they take the label as a prop or a slot and need no fandry-label."]}],props:[{name:"required",type:"boolean",default:"false",description:"Shows the required asterisk. It is only the mark: set `required` on your control as well. In a field's `label` slot the field shows it instead, from its own `required`."},{name:"html-for",type:"string",default:"\u2014",description:"Deprecated: it does nothing. The `for` goes on the `<label>` you wrap this in."}],code:`<!-- with your own control -->
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
  box-shadow: 0 6px 16px hsl(160 84% 26% / 0.35);
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
}`},category:"Forms",description:"A native button with default/secondary/ghost variants and three sizes.",props:[{name:"variant",type:"'default' | 'secondary' | 'ghost'",default:"'default'",description:"Visual style."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Button size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the button. A button that must keep focus (one that is saving) takes `element-props={ tabIndex: 0, ariaDisabled: 'true' }` instead: it looks the same, has the same `disabled` state, and its clicks are ignored."},{name:"type",type:"'button' | 'submit' | 'reset'",default:"'button'",description:"Native button type."}],code:'<fandry-button variant="secondary" size="lg">Save</fandry-button>'},{slug:"checkbox",name:"Checkbox",tag:"fandry-checkbox",parts:["base","control","indicator","label"],states:["checked","indeterminate","disabled"],customize:{title:"Custom colors and parts",demo:"checkbox-theme",code:`<!-- template -->
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

/* A state: only the checked box. */
fandry-checkbox::part(control checked) {
  box-shadow: 0 0 0 3px hsl(160 84% 26% / 0.2);
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
}`},category:"Forms",description:"A text input with a label, help text, and prefix/suffix slots.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"error-text",type:"string",default:"''",description:"An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused."},{name:"type",type:"string",default:"'text'",description:"Native input type (email, password, ...)."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Field size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"label \xB7 help-text \xB7 error-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label, help text or error text (a link, an icon). Shown even without the matching prop."}],code:'<fandry-input label="Email" type="email" placeholder="you@company.com"></fandry-input>'},{slug:"link",name:"Link",tag:"fandry-link",parts:["base","link"],states:["default","muted","disabled"],customize:{title:"Custom colors and parts",demo:"link-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"Anchor styling with default/muted variants and a disabled state.",props:[{name:"href",type:"string",default:"''",description:"Link target."},{name:"target",type:"'_self' | '_blank' | '_parent' | '_top'",default:"'_self'",description:"Native anchor target."},{name:"variant",type:"'default' | 'muted'",default:"'default'",description:"Visual style."},{name:"disabled",type:"boolean",default:"false",description:"Renders with no href, removing it from tab order."}],code:'<fandry-link href="https://github.com/rahulgawale/fandryui" target="_blank">GitHub</fandry-link>'},{slug:"radio",name:"Radio",tag:"fandry-radio",parts:["base","control","indicator","label"],states:["checked","disabled"],customize:{title:"Custom colors and parts",demo:"radio-theme",code:`<!-- template -->
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
  --fd-accent: 45 90% 40%;
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
}`},category:"Feedback",description:"A small status/label pill.",props:[{name:"variant",type:"'default' | 'primary' | 'success' | 'warning' | 'danger'",default:"'default'",description:"Color variant."}],code:'<fandry-badge variant="primary">New</fandry-badge>'},{slug:"progress",name:"Progress",tag:"fandry-progress",parts:["base","indicator"],states:["indeterminate"],customize:{title:"Custom colors and parts",demo:"progress-theme",code:`<!-- template -->
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
}`},category:"Feedback",description:"A loading spinner in three sizes, with optional text beside it.",props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Spinner size. The ring's thickness follows it (--fd-spinner-thickness, in em of the ring)."},{name:"default slot",type:"slot",default:"\u2014",description:'Text shown beside the ring, e.g. "Loading fields\u2026". It becomes the status a screen reader reads, in place of label.'},{name:"label",type:"string",default:"''",description:'Names a spinner that shows no text, e.g. "Saving changes". Not displayed. Overrides messages.label.'},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label, and is read in place of slotted text."},{name:"messages",type:"{ label }",default:"{}",description:'Replaces the default name ("Loading") for every instance, e.g. to translate it.'}],examples:[{title:"With a label",demo:"spinner-label",code:`<!-- Text in the default slot shows beside the ring. Style it with ::part(label). -->
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
}`},category:"Feedback",description:"Covers the page, or one panel, while it is busy: a backdrop that blocks the pointer and the keyboard, and a panel with a spinner and a label.",props:[{name:"open",type:"boolean",default:"false",description:"Whether the page or panel is busy. Bind it rather than wrapping the overlay in lwc:if: it stays in the page so its label is announced, and so it can fade out."},{name:"contained",type:"boolean",default:"false",description:"Covers the nearest positioned ancestor (position: relative) instead of the viewport, and blocks keys inside its parent element. Put the overlay directly inside the panel it covers."},{name:"label",type:"string",default:"''",description:'The text under the spinner, e.g. "Saving record\u2026". Wins over messages.label. To restyle it (bold, color), use ::part(label), not the slot.'},{name:"messages",type:"{ label }",default:"{}",description:'Replaces the default label ("Loading") for every instance, e.g. to translate it.'},{name:"default slot",type:"slot",default:"spinner and label",description:"The whole content of the panel, spinner included: your own indicator, markup in the text, a progress bar, a Cancel button. Its text (minus anything aria-hidden) is what is announced, or the label when it has none."}],notes:[{title:"Not a dialog",paragraphs:["It blocks the pointer and the keyboard the moment it opens, but takes no focus and has nothing to close: the page must always set open back to false, on errors and timeouts too. It only shows after --fd-loading-overlay-delay (150ms), so an operation that finishes sooner never flashes an overlay.","Focus stays where it was. Over the page, keys do nothing until it closes (typing, Tab, Enter, Space, arrow-key scrolling, paste, the page's own shortcuts); the browser's shortcuts and wheel or touch scrolling still work. A contained overlay blocks keys inside the element it is in and lets Tab leave it. Keys still reach content in the overlay once it has focus: focus a Cancel button you put there yourself.","It blocks hardware keys, not every input method: text from an IME or an on-screen keyboard, and a screen reader's own click, can still reach what is behind it. Guard the actions that must not run twice.",`It keeps a polite status region in the page at all times and puts the content's text into it once the overlay shows, so a screen reader announces it. A label edited in place while it is open is not announced again. Mark a slotted spinner aria-hidden="true": the region already says what is happening.`]}],examples:[{title:"Your own content",demo:"loading-overlay-custom",code:`<!-- template: the default slot replaces the spinner and label, so bring your own indicator -->
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
}`},category:"Feedback",description:"An auto-dismissing notification \u2014 pair with fandry-toast-viewport for placement.",props:[{name:"variant",type:"'info' | 'success' | 'warning' | 'danger'",default:"'info'",description:"Status color."},{name:"duration",type:"number",default:"4000",description:"Milliseconds before auto-dismiss."}],code:`<fandry-toast variant="success" duration="4000" ondismiss={handleDismiss}>
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
}`},category:"Feedback",description:"A fixed or contained stacking region that positions fandry-toast.",props:[{name:"placement",type:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",default:"'bottom-right'",description:"Corner to stack from."},{name:"contained",type:"boolean",default:"false",description:"position: absolute against the nearest positioned ancestor instead of the viewport."},{name:"label",type:"string",default:"''",description:"Accessible label for the stacking region."},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label."}],code:`<fandry-toast-viewport placement="bottom-right" label="Notifications">
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
}`},category:"Overlays & Data",description:"A command palette \u2014 a modal search box over a list of actions. Generic: it reports the chosen value and leaves what it does (and the Cmd+K shortcut) to you.",props:[{name:"open",type:"boolean",default:"false",description:"Whether the palette is shown. Listen for `toggle` (detail is the new state) and update it."},{name:"label",type:"string",default:"''",description:"Accessible name of the palette."},{name:"aria-label",type:"string",default:"\u2014",description:"The same name, set the standard way. Wins over label."},{name:"placeholder",type:"string",default:"''",description:"Hint shown in the empty search box."},{name:"messages",type:"{ results(count) }",default:"{}",description:'Replaces what a screen reader hears as the list narrows ("3 results"), e.g. to translate it. "No results" is the `empty` slot.'},{name:"items",type:"{ label, value, description?, group?, keywords?, disabled? }[]",default:"[]",description:"The commands. Ungrouped items list first; grouped items sit under their heading."},{name:"select (event)",type:"CustomEvent<{ value }>",default:"\u2014",description:"Fired when an item is picked; the palette then closes itself."},{name:"empty (slot)",type:"slot",default:"'No results found'",description:"Replaces the message shown when nothing matches."}],code:`<fandry-command
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
}`},category:"Overlays & Data",description:"A single selectable row inside fandry-menu.",props:[{name:"value",type:"string",default:"''",description:"Value reported to onselect."},{name:"label",type:"string",default:"''",description:"Visible label."},{name:"disabled",type:"boolean",default:"false",description:"Excludes the item from selection."}],code:'<fandry-menu-item value="edit" label="Edit"></fandry-menu-item>'},{slug:"popover",name:"Popover",tag:"fandry-popover",parts:["trigger","panel"],customize:{title:"Custom colors and parts",demo:"popover-theme",code:`<!-- template -->
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
}`},category:"Overlays & Data",description:"An anchored floating panel \u2014 owns positioning, not the trigger or content. The panel is never narrower than its trigger; set display: block on the popover for a trigger that fills its row.",props:[{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'bottom'",description:"Side of the trigger the panel opens on. It opens on the opposite side instead when it would run off the viewport and that side has more room."},{name:"align",type:"'start' | 'end'",default:"'start'",description:"Which edge of the trigger the panel aligns to, for 'top'/'bottom' placement."},{name:"open",type:"boolean",default:"false",description:"Open state (consumer-controlled via ontoggle)."}],code:`<fandry-popover placement="bottom" open={isOpen} ontoggle={handleToggle}>
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
}`},category:"Overlays & Data",description:"A data table with sorting, pagination, selection, and filtering \u2014 wraps @tanstack/table-core.",props:[{name:"columns",type:"ColumnDef[]",default:"[]",description:"Column definitions."},{name:"data",type:"RowData[]",default:"[]",description:"Row data."},{name:"enable-pagination",type:"boolean",default:"false",description:"Turns on page-size-driven pagination."},{name:"enable-row-selection",type:"boolean",default:"false",description:"Turns on checkbox row selection."},{name:"enable-global-filter",type:"boolean",default:"false",description:"Turns on a search box that filters all columns."},{name:"messages",type:"{ selectionStatus, selectRow, selectAll, pageStatus, paginationLabel, previousPage, nextPage }",default:"{}",description:`Replaces the table's own text ("2 of 5 selected", checkbox names, the pagination's name, Previous/Next and "Page 1 of 3"), e.g. to translate it. Any key left out keeps its English default.`}],code:`<fandry-table
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
}`}]}],wa=[{label:"Home",value:"/"},{label:"Getting started",value:"/getting-started"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce"},{label:"Theming",value:"/getting-started/theming"},{label:"Components",value:"/components"},{label:"Blocks",value:"/blocks"},{label:"Blocks: Data table",value:"/blocks/data-table"},{label:"Blocks: Form",value:"/blocks/form"},{label:"Examples",value:"/examples"}],Pe=/Mac|iPhone|iPad/.test(navigator.platform);class Ce extends j{constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[...wa.map(n=>({...n,group:"Pages"})),...va.flatMap(n=>ka.filter(t=>t.category===n).map(t=>({label:t.name,value:`/components/${t.slug}`,group:n,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=n=>{(Pe?n.metaKey:n.ctrlKey)&&n.key?.toLowerCase()==="k"&&(n.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get shortcutHint(){return Pe?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}v(Ce,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const _a=f(Ce,{tmpl:ga,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function xa(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.intro"+t+" {padding: calc(var(--fd-space-6) * 1.5) 0 var(--fd-space-6);text-align: center;}.container"+t+" {max-width: 40rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);}.subhead"+t+" {max-width: 32rem;}"}var Me=[xa];function Sa(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var Ee=[Sa];const za={key:1},Pa=[];function $(a,e,n,t){const{ncls:r,s,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[s("",za,Pa,n)])]}var Ca=m($);$.slots=[""],$.stylesheets=[],$.stylesheetToken="lwc-4htp61u8vnv",$.legacyStylesheetToken="fandry-heading_heading",Ee&&$.stylesheets.push.apply($.stylesheets,Ee),y($);class Te extends w{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}v(Te,{publicProps:{level:{config:3}},fields:["_level"]});const u=f(Te,{tmpl:Ca,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ma(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var Ie=[Ma];const Ea={key:1},Ta=[];function A(a,e,n,t){const{ncls:r,s,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[s("",Ea,Ta,n)])]}var Ia=m(A);A.slots=[""],A.stylesheets=[],A.stylesheetToken="lwc-4f041bjpr1h",A.legacyStylesheetToken="fandry-text_text",Ie&&A.stylesheets.push.apply(A.stylesheets,Ie),y(A);class $e extends w{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}get basePart(){return P("base",{[this.variant||"default"]:!0})}}v($e,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const h=f($e,{tmpl:Ia,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),$a={classMap:{intro:!0},key:0},Aa={classMap:{container:!0},key:1},Da={props:{level:"1"},key:2},La={classMap:{subhead:!0},props:{variant:"muted"},key:3};function G(a,e,n,t){const{d:r,t:s,c:o,h:i}=a;return[i("section",$a,[i("div",Aa,[o("fandry-heading",u,Da,[s(r(e.pageTitle))]),o("fandry-text",h,La,[s(r(e.subtitle))])])])]}var Na=m(G);G.stylesheets=[],G.stylesheetToken="lwc-k2m23m8iid",G.legacyStylesheetToken="fandryui-pageIntro_pageIntro",Me&&G.stylesheets.push.apply(G.stylesheets,Me),y(G);class Ae extends j{constructor(...e){super(...e);this.pageTitle="",this.subtitle=""}}v(Ae,{publicProps:{pageTitle:{config:0},subtitle:{config:0}}});const Ra=f(Ae,{tmpl:Na,sel:"fandryui-page-intro",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Oa(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+" {padding: var(--fd-space-6) 0 calc(var(--fd-space-6) * 2);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.gallery"+t+" {display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: var(--fd-space-6);}@media (max-width: 48rem) {.gallery"+t+" {grid-template-columns: 1fr;}}.pattern"+t+" {display: flex;flex-direction: column;align-items: center;text-align: center;gap: var(--fd-space-1);}.pattern-head"+t+" {width: 100%;max-width: 24rem;display: flex;align-items: center;justify-content: space-between;}.pattern"+t+" > fandry-heading"+t+" {margin-top: var(--fd-space-1);}.pattern"+t+" > fandry-text"+t+" {max-width: 24rem;}.demo"+t+" {width: 100%;max-width: 24rem;margin-top: var(--fd-space-3);}.demo"+t+" > *"+t+" + *"+t+" {margin-top: var(--fd-space-3);display: block;}.price-heading"+t+" {margin-top: var(--fd-space-2) !important;}.price"+t+" {display: flex;align-items: baseline;gap: var(--fd-space-1);}.amount"+t+" {font-size: var(--fd-font-size-2xl, 1.875rem);font-weight: var(--fd-font-weight-bold);}.period"+t+" {color: var(--fd-color-muted);font-size: var(--fd-font-size-sm);}.check-list"+t+" {list-style: none;margin: 0;padding: 0;display: flex;flex-direction: column;gap: var(--fd-space-2);}.check-list"+t+" li"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);color: hsl(142 71% 30%);}.check-list"+t+" li"+t+" fandry-text"+t+" {color: var(--fd-color-text);}.form-row"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-3);}.setting-row"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);}.setting-copy"+t+" {display: flex;flex-direction: column;gap: 2px;}.empty-state"+t+" {text-align: center;}.empty-state"+t+" > *"+t+" + *"+t+" {margin-left: auto;margin-right: auto;}.empty-icon"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 3rem;height: 3rem;border-radius: var(--fd-radius-lg);background: hsl(var(--brand-primary, 330 81% 48%) / 0.1);color: hsl(var(--brand-primary-dark, 330 81% 40%));}.notif-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-2);}.team-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-3);}.team-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);}.team-copy"+t+" {flex: 1;display: flex;flex-direction: column;gap: 2px;}.file-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-3);}.file-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);}.file-copy"+t+" {flex: 1;display: flex;flex-direction: column;gap: 2px;}.checklist"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-2);}.search-results"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-1);}.search-result"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-3);padding: var(--fd-space-2) 0;border-bottom: 1px solid var(--fd-color-border);}.search-result:last-child"+t+" {border-bottom: none;}.crumb-nav"+t+" {width: 100%;max-width: 24rem;margin-top: var(--fd-space-3);}.kpi-row"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-3);}.kpi"+t+" {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-1);}"}var De=[Oa];function Fa(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.badge--success"+t+" {background: hsl(var(--_fd-success));color: hsl(var(--_fd-success-foreground));}.badge--warning"+t+" {background: hsl(var(--_fd-warning));color: hsl(var(--_fd-warning-foreground));}.badge--danger"+t+" {background: hsl(var(--_fd-danger));color: hsl(var(--_fd-danger-foreground));}"}var Le=[Fa];const Ba={key:1},qa=[];function D(a,e,n,t){const{ncls:r,s,h:o}=a;return[o("span",{className:r(e.classes),attrs:{part:e.basePart},key:0},[s("",Ba,qa,n)])]}var ja=m(D);D.slots=[""],D.stylesheets=[],D.stylesheetToken="lwc-7jnsj78lpql",D.legacyStylesheetToken="fandry-badge_badge",Le&&D.stylesheets.push.apply(D.stylesheets,Le),y(D);class Ne extends w{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}get basePart(){return P("base",{[this.variant||"default"]:!0})}}v(Ne,{publicProps:{variant:{config:0}}});const x=f(Ne,{tmpl:ja,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Va(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var Re=[Va];const Ha={classMap:{card:!0},attrs:{part:"base"},key:0},Ga={key:1},Ka=[];function L(a,e,n,t){const{s:r,h:s}=a;return[s("div",Ha,[r("",Ga,Ka,n)])]}var Ua=m(L);L.slots=[""],L.stylesheets=[],L.stylesheetToken="lwc-66cpcf0iuus",L.legacyStylesheetToken="fandry-card_card",Re&&L.stylesheets.push.apply(L.stylesheets,Re),y(L);class Wa extends w{}const z=f(Wa,{tmpl:Ua,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ya(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {display: inline-flex;align-items: center;align-self: flex-start;gap: var(--_fd-space-1);font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;--_fd-label-asterisk: none;}.input"+t+" {flex: 1;min-width: 0;border: none;outline: none;font: inherit;background: transparent;}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.control"+t+` {display: flex;align-items: center;border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-1) var(--_fd-space-2);background: hsl(var(--_fd-bg));transition: border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease;}.control:focus-within`+t+" {outline: var(--_fd-ring-width) solid transparent;border-color: hsl(var(--_fd-border-focus));box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:focus"+t+" {outline: none;}.control--sm"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-xs);}.control--md"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-md);}.control--lg"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3);font-size: var(--_fd-font-size-md);}.error-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-danger));}.error-text--empty"+t+" {position: absolute;}.control[part~='invalid']"+t+" {border-color: hsl(var(--_fd-danger));}"}var Oe=[Ya];const Qa=k`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,Xa={classMap:{"form-control":!0},attrs:{part:"base"},key:0},Za={label:!0},Ja={name:"label"},er={classMap:{prefix:!0},attrs:{part:"prefix"},key:6},tr={attrs:{name:"prefix"},key:7},Fe=[],ar={input:!0},rr={classMap:{suffix:!0},attrs:{part:"suffix"},key:9},sr={attrs:{name:"suffix"},key:10},nr={name:"error-text"},or={"help-text":!0},ir={name:"help-text"};function N(a,e,n,t){const{gid:r,b:s,d:o,t:i,s:d,st:l,h:c,ncls:g}=a,{_m0:S,_m1:Z,_m2:J,_m3:p}=t;return[c("div",Xa,[c("label",{classMap:Za,attrs:{part:"label",for:r("input"),hidden:e.labelHidden?"":null},key:1},[d("label",{attrs:Ja,key:2,on:S||(t._m0={slotchange:s(e.handleTextSlotChange)})},[i(o(e.label))],n),e.required?l(Qa,4):null]),c("div",{className:g(e.controlClasses),attrs:{part:e.controlPart},key:5},[c("span",er,[d("prefix",tr,Fe,n)]),c("input",{classMap:ar,attrs:{part:"input",id:r("input"),type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":r(e.describedBy),"aria-invalid":e.ariaInvalid},props:{value:e.inputValue,...e.resolvedElementProps},key:8,on:Z||(t._m1={input:s(e.handleInput),change:s(e.handleChange),focus:s(e.handleFocus),blur:s(e.handleBlur)})}),c("span",rr,[d("suffix",sr,Fe,n)])]),c("div",{className:g(e.errorTextClasses),attrs:{id:r("error-text"),part:"error-text","aria-live":"polite"},key:11},[d("error-text",{attrs:nr,key:12,on:J||(t._m2={slotchange:s(e.handleTextSlotChange)})},[i(o(e.errorText))],n)]),c("div",{classMap:or,attrs:{id:r("help-text"),part:"help-text",hidden:e.helpTextHidden?"":null},key:13},[d("help-text",{attrs:ir,key:14,on:p||(t._m3={slotchange:s(e.handleTextSlotChange)})},[i(o(e.helpText))],n)])])]}var dr=m(N);N.slots=["error-text","help-text","label","prefix","suffix"],N.stylesheets=[],N.stylesheetToken="lwc-24cs3ca29bn",N.legacyStylesheetToken="fandry-input_input",Oe&&N.stylesheets.push.apply(N.stylesheets,Oe),y(N);function se(a){return a.assignedNodes().some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim())}function lr(a,e){return a||String(e?.ariaInvalid)==="true"}function cr(a,e){return[a?"error-text":"",e?"help-text":""].filter(Boolean).join(" ")||null}function pr(a){const{ariaInvalid:e,...n}=a;return n}const hr=["id","type","name","value","disabled","readonly","required","class","ariaDescribedBy","ariaDescribedByElements","oninput","onchange","onfocus","onblur"];class Be extends w{constructor(...e){super(...e);this.label="",this.helpText="",this.errorText="",this.value="",this.type="text",this.name="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.size="md",this.elementProps={},this.hasFocus=!1,this.textSlots={}}get resolvedElementProps(){return pr(M(this,this.elementProps,hr,"fandry-input"))}get hasLabel(){return!!this.label||!!this.textSlots.label}get hasHelpText(){return!!this.helpText||!!this.textSlots["help-text"]}get hasErrorText(){return!!this.errorText||!!this.textSlots["error-text"]}get errorTextClasses(){return this.hasErrorText?"error-text":"error-text error-text--empty"}get invalid(){return lr(this.hasErrorText,this.elementProps)}get ariaInvalid(){return this.invalid?"true":null}get inputValue(){return this.value??""}get describedBy(){return cr(this.hasErrorText,this.hasHelpText)}get controlClasses(){return["control",`control--${this.size}`].join(" ")}focus(){this.template.querySelector("input")?.focus()}handleInput(e){e.stopPropagation();const n=e.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const n=e.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}handleFocus(){this.hasFocus=!0}handleBlur(){this.hasFocus=!1}get controlPart(){return P("control",{disabled:this.disabled,invalid:this.invalid})}handleTextSlotChange(e){const n=e.target;this.textSlots={...this.textSlots,[n.name||"default"]:se(n)}}get labelHidden(){return!this.hasLabel}get helpTextHidden(){return!this.hasHelpText}}v(Be,{publicProps:{label:{config:0},helpText:{config:0},errorText:{config:0},value:{config:0},type:{config:0},name:{config:0},placeholder:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},size:{config:0},elementProps:{config:0}},publicMethods:["focus"],track:{hasFocus:1},fields:["textSlots"]});const le=f(Be,{tmpl:dr,sel:"fandry-input",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function fr(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.box"+t+` {width: var(--_fd-size-sm);height: var(--_fd-size-sm);flex: 0 0 var(--_fd-size-sm);border-radius: var(--_fd-radius-sm);border: var(--_fd-border-width) solid hsl(var(--_fd-border));background: hsl(var(--_fd-bg));display: inline-flex;align-items: center;justify-content: center;transition: border-color var(--_fd-duration-fast) ease,
 background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.control`+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.check"+t+` {width: calc(var(--_fd-size-sm) * 0.625);height: calc(var(--_fd-size-sm) * 0.375);border-left: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));border-bottom: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));transform: translateY(-1px) rotate(-45deg) scale(0.9);opacity: 0;transition: opacity var(--_fd-duration-fast) ease,
 transform var(--_fd-duration-fast) ease;}.input:checked`+t+" + .box"+t+" {background: hsl(var(--_fd-primary));border-color: hsl(var(--_fd-primary));}.input:checked"+t+" + .box"+t+" .check"+t+" {opacity: 1;transform: translateY(-1px) rotate(-45deg) scale(1);}.control:focus-within"+t+" .box"+t+" {box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:disabled"+t+" + .box"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}"}var qe=[fr];const ur=k`<span class="box${0}"${"a0:part"} aria-hidden="true"${2}><span class="check${0}" part="indicator"${2}></span></span>`,mr={control:!0},yr={input:!0},br={label:!0};function R(a,e,n,t){const{b:r,h:s,sp:o,st:i,d,t:l,s:c}=a,{_m0:g,_m1:S}=t;return[s("label",{classMap:mr,attrs:{part:"base","aria-disabled":e.disabled},key:0},[s("input",{classMap:yr,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,"aria-checked":e.ariaChecked,"aria-label":e.ariaLabel},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:g||(t._m0={change:r(e.handleChange)})}),i(ur,3,[o(0,{attrs:{part:e.controlPart}},null)]),s("span",{classMap:br,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[c("",{key:5,on:S||(t._m1={slotchange:r(e.handleTextSlotChange)})},[l(d(e.label))],n)])])]}var gr=m(R);R.slots=[""],R.stylesheets=[],R.stylesheetToken="lwc-375ftk9u572",R.legacyStylesheetToken="fandry-checkbox_checkbox",qe&&R.stylesheets.push.apply(R.stylesheets,qe),y(R);const vr=["type","name","value","checked","disabled","class","onchange","ariaChecked","ariaLabel"];class je extends w{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.ariaLabel="",this.elementProps={tabIndex:0},this.indeterminate=!1,this.textSlots={}}get resolvedElementProps(){return M(this,this.elementProps,vr,"fandry-checkbox")}get ariaChecked(){return this.indeterminate?"mixed":this.checked?"true":"false"}renderedCallback(){const e=this.template.querySelector(".input");e&&(e.indeterminate=this.indeterminate)}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const n=e.target;this.checked=n.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return P("control",{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled})}handleTextSlotChange(e){const n=e.target;this.textSlots={...this.textSlots,[n.name||"default"]:se(n)}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}v(je,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},ariaLabel:{config:0},elementProps:{config:0},indeterminate:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const te=f(je,{tmpl:gr,sel:"fandry-checkbox",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function kr(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.control"+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.track"+t+` {width: var(--_fd-switch-width);height: calc(var(--_fd-size-sm) + 2 * var(--_fd-switch-padding));flex: 0 0 var(--_fd-switch-width);border-radius: var(--_fd-radius-full);background: hsl(var(--_fd-border));display: inline-flex;align-items: center;padding: var(--_fd-switch-padding);transition: background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.thumb`+t+" {width: var(--_fd-size-sm);height: var(--_fd-size-sm);border-radius: 50%;background: hsl(var(--_fd-bg));transform: translateX(0);transition: transform var(--_fd-duration-fast) ease;}.input:checked"+t+" + .track"+t+" {background: hsl(var(--_fd-primary));}.input:checked"+t+" + .track"+t+" .thumb"+t+" {transform: translateX(calc(var(--_fd-switch-width) - var(--_fd-size-sm) - 2 * var(--_fd-switch-padding)));}.control:focus-within"+t+" .track"+t+` {box-shadow: 0 0 0 var(--_fd-ring-width)
 hsl(var(--_fd-ring-color));}.input:disabled`+t+" + .track"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}"}var Ve=[kr];const wr=k`<span class="track${0}"${"a0:part"} aria-hidden="true"${2}><span class="thumb${0}" part="indicator"${2}></span></span>`,_r={control:!0},xr={input:!0},Sr={label:!0};function O(a,e,n,t){const{b:r,h:s,sp:o,st:i,d,t:l,s:c}=a,{_m0:g,_m1:S}=t;return[s("label",{classMap:_r,attrs:{part:"base","aria-disabled":e.disabled},key:0},[s("input",{classMap:xr,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,role:"switch","aria-checked":e.ariaChecked},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:g||(t._m0={change:r(e.handleChange)})}),i(wr,3,[o(0,{attrs:{part:e.controlPart}},null)]),s("span",{classMap:Sr,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[c("",{key:5,on:S||(t._m1={slotchange:r(e.handleTextSlotChange)})},[l(d(e.label))],n)])])]}var zr=m(O);O.slots=[""],O.stylesheets=[],O.stylesheetToken="lwc-2gg3sokj2de",O.legacyStylesheetToken="fandry-switch_switch",Ve&&O.stylesheets.push.apply(O.stylesheets,Ve),y(O);const Pr=["type","name","value","checked","disabled","class","role","onchange","ariaChecked"];class He extends w{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.elementProps={tabIndex:0},this.textSlots={}}get resolvedElementProps(){return M(this,this.elementProps,Pr,"fandry-switch")}get ariaChecked(){return this.checked?"true":"false"}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const n=e.target;this.checked=n.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return P("control",{checked:this.checked,disabled:this.disabled})}handleTextSlotChange(e){const n=e.target;this.textSlots={...this.textSlots,[n.name||"default"]:se(n)}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}v(He,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},elementProps:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const ce=f(He,{tmpl:zr,sel:"fandry-switch",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Cr(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;align-self: stretch;}.divider"+t+" {background: hsl(var(--_fd-border));border: none;}.divider--horizontal"+t+" {width: 100%;height: var(--_fd-border-width);}.divider--vertical"+t+" {width: var(--_fd-border-width);height: 100%;}"}var Ge=[Cr];const Mr=k`<div${"c0"} part="base" role="separator"${"a0:aria-orientation"}${2}></div>`;function K(a,e,n,t){const{ncls:r,sp:s,st:o}=a;return[o(Mr,1,[s(0,{className:r(e.classes),attrs:{"aria-orientation":e.orientation}},null)])]}var Er=m(K);K.stylesheets=[],K.stylesheetToken="lwc-4rg533bd481",K.legacyStylesheetToken="fandry-divider_divider",Ge&&K.stylesheets.push.apply(K.stylesheets,Ge),y(K);class Ke extends w{constructor(...e){super(...e);this.orientation="horizontal"}get classes(){return["divider",`divider--${this.orientation}`].join(" ")}}v(Ke,{publicProps:{orientation:{config:0}}});const Ue=f(Ke,{tmpl:Er,sel:"fandry-divider",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Tr(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.alert"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);padding: var(--_fd-space-3);border-radius: var(--_fd-radius-md);border-left: var(--_fd-border-width-lg) solid hsl(var(--_fd-accent));background: color-mix(in srgb, hsl(var(--_fd-accent)) var(--_fd-surface-tint), transparent);font-size: var(--_fd-font-size-sm);}.alert--success"+t+" {border-left-color: hsl(var(--_fd-success));background: color-mix(in srgb, hsl(var(--_fd-success)) var(--_fd-surface-tint), transparent);}.alert--warning"+t+" {border-left-color: hsl(var(--_fd-warning));background: color-mix(in srgb, hsl(var(--_fd-warning)) var(--_fd-surface-tint), transparent);}.alert--danger"+t+" {border-left-color: hsl(var(--_fd-danger));background: color-mix(in srgb, hsl(var(--_fd-danger)) var(--_fd-surface-tint), transparent);}.title"+t+" {margin: 0;font-weight: var(--_fd-font-weight-semibold);color: hsl(var(--_fd-text));}.body"+t+" {color: hsl(var(--_fd-text));}"}var We=[Tr];const Ir={title:!0},$r={name:"title"},Ar={classMap:{body:!0},attrs:{part:"body"},key:3},Dr={key:4},Lr=[];function F(a,e,n,t){const{ncls:r,b:s,d:o,t:i,s:d,h:l}=a,{_m0:c}=t;return[l("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[l("p",{classMap:Ir,attrs:{part:"title",hidden:e.titleHidden?"":null},key:1},[d("title",{attrs:$r,key:2,on:c||(t._m0={slotchange:s(e.handleTextSlotChange)})},[i(o(e.title))],n)]),l("div",Ar,[d("",Dr,Lr,n)])])]}var Nr=m(F);F.slots=["","title"],F.stylesheets=[],F.stylesheetToken="lwc-1j963p9v2mf",F.legacyStylesheetToken="fandry-alert_alert",We&&F.stylesheets.push.apply(F.stylesheets,We),y(F);class Ye extends w{constructor(...e){super(...e);this.variant="info",this.title="",this.textSlots={}}get classes(){return["alert",`alert--${this.variant}`].join(" ")}get hasTitle(){return!!this.title||!!this.textSlots.title}get role(){return this.variant==="warning"||this.variant==="danger"?"alert":"status"}get basePart(){return P("base",{[this.variant||"info"]:!0})}handleTextSlotChange(e){const n=e.target;this.textSlots={...this.textSlots,[n.name||"default"]:se(n)}}get titleHidden(){return!this.hasTitle}}v(Ye,{publicProps:{variant:{config:0},title:{config:0}},fields:["textSlots"]});const pe=f(Ye,{tmpl:Nr,sel:"fandry-alert",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Rr(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.avatar"+t+" {display: inline-flex;align-items: center;justify-content: center;overflow: hidden;flex-shrink: 0;border-radius: 50%;background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text-muted));font-weight: var(--_fd-font-weight-semibold);text-transform: uppercase;}.avatar--sm"+t+" {width: var(--_fd-avatar-size-sm);height: var(--_fd-avatar-size-sm);font-size: calc(var(--_fd-avatar-size-sm) * 0.4);}.avatar--md"+t+" {width: var(--_fd-avatar-size-md);height: var(--_fd-avatar-size-md);font-size: calc(var(--_fd-avatar-size-md) * 0.4);}.avatar--lg"+t+" {width: var(--_fd-avatar-size-lg);height: var(--_fd-avatar-size-lg);font-size: calc(var(--_fd-avatar-size-lg) * 0.4);}.image"+t+" {width: 100%;height: 100%;object-fit: cover;}.initials"+t+" {line-height: 1;}"}var Qe=[Rr];const Or=k`<span class="initials${0}" part="initials"${2}>${"t1"}</span>`,Fr={part:"base"},Br={image:!0};function U(a,e,n,t){const{ncls:r,b:s,h:o,d:i,sp:d,st:l}=a,{_m0:c}=t;return[o("span",{className:r(e.classes),attrs:Fr,key:0},[e.showImage?o("img",{classMap:Br,attrs:{part:"image",src:e.src,alt:e.alt},props:{...e.resolvedElementProps},key:1,on:c||(t._m0={error:s(e.handleImageError)})}):null,e.showInitials?l(Or,3,[d(1,null,i(e.initials))]):null])]}var qr=m(U);U.stylesheets=[],U.stylesheetToken="lwc-3sp4g3rf1ki",U.legacyStylesheetToken="fandry-avatar_avatar",Qe&&U.stylesheets.push.apply(U.stylesheets,Qe),y(U);const jr=["src","alt","class","onerror"];class Xe extends w{constructor(...e){super(...e);this.alt="",this.initials="",this.size="md",this.elementProps={},this.imageFailed=!1,this._src=""}get resolvedElementProps(){return M(this,this.elementProps,jr,"fandry-avatar")}get src(){return this._src}set src(e){this._src=e,this.imageFailed=!1}get classes(){return["avatar",`avatar--${this.size}`].join(" ")}get showImage(){return!!this.src&&!this.imageFailed}get showInitials(){return!this.showImage&&!!this.initials}handleImageError(){this.imageFailed=!0}}v(Xe,{publicProps:{alt:{config:0},initials:{config:0},size:{config:0},elementProps:{config:0},src:{config:3}},track:{imageFailed:1},fields:["_src"]});const Vr=f(Xe,{tmpl:qr,sel:"fandry-avatar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Hr(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.item"+t+" {display: flex;align-items: center;gap: var(--_fd-space-1);}.separator"+t+" {color: hsl(var(--_fd-text-muted));}"+(e?":host(:first-child) .separator":r+":first-child .separator")+t+" {display: none;}.link"+t+" {color: hsl(var(--_fd-text-muted));font-size: var(--_fd-font-size-sm);text-decoration: none;}.link[href]:hover"+t+" {color: hsl(var(--_fd-text));text-decoration: underline;}.link:not([href])"+t+" {color: hsl(var(--_fd-text));font-weight: var(--_fd-font-weight-medium);cursor: default;}.tab-stop"+t+" {border-radius: var(--_fd-radius-sm);}"}var Ze=[Hr];const Gr=k`<span class="separator${0}" part="separator" aria-hidden="true"${2}>/</span>`,Kr={classMap:{item:!0},attrs:{part:"base"},key:0},Ur={"tab-stop":!0},Wr={link:!0},Yr={key:5},Qr=[];function B(a,e,n,t){const{st:r,ti:s,gid:o,b:i,fid:d,s:l,h:c}=a,{_m0:g}=t;return[c("li",Kr,[r(Gr,2),c("span",{classMap:Ur,attrs:{role:e.linkRole,tabindex:s(e.tabStopIndex),"aria-labelledby":o(e.labelledBy)},key:3,on:g||(t._m0={keydown:i(e.handleKeydown),click:i(e.handleClick)})},[c("a",{classMap:Wr,attrs:{id:o("anchor"),part:e.linkPart,href:d(e.computedHref),"aria-current":e.ariaCurrent,"aria-hidden":e.anchorAriaHidden,tabindex:"-1"},props:{...e.resolvedElementProps},key:4},[l("",Yr,Qr,n)])])])]}var Xr=m(B);B.slots=[""],B.stylesheets=[],B.stylesheetToken="lwc-1hgi77eb8ab",B.legacyStylesheetToken="fandry-breadcrumbItem_breadcrumbItem",Ze&&B.stylesheets.push.apply(B.stylesheets,Ze),y(B);const Zr=["href","class","ariaCurrent"];class Je extends w{constructor(...e){super(...e);this.href="",this.current=!1,this.elementProps={}}get computedHref(){return this.href&&!this.current?this.href:void 0}get ariaCurrent(){return this.current?"page":void 0}get isLink(){return Boolean(this.computedHref)}get linkRole(){return this.isLink?"link":void 0}get labelledBy(){return this.isLink?"anchor":void 0}get anchorAriaHidden(){return this.isLink?"true":void 0}get tabStopIndex(){return oe(this.elementProps,this.isLink)}handleKeydown(e){ne(e,this.template)}handleClick(e){ye(e,this.template)}get resolvedElementProps(){return ie(M(this,this.elementProps,Zr,"fandry-breadcrumb-item"))}get linkPart(){return P("link",{current:this.current})}}v(Je,{publicProps:{href:{config:0},current:{config:0},elementProps:{config:0}}});const Jr=f(Je,{tmpl:Xr,sel:"fandry-breadcrumb-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function es(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.list"+t+" {display: flex;flex-wrap: wrap;align-items: center;gap: var(--_fd-space-1);margin: 0;padding: 0;list-style: none;}"}var et=[es];const ts={classMap:{list:!0},attrs:{part:"list"},key:1},as={key:2},rs=[];function q(a,e,n,t){const{s:r,h:s}=a;return[s("nav",{attrs:{part:"base","aria-label":e.navLabel},key:0},[s("ol",ts,[r("",as,rs,n)])])]}var ss=m(q);q.slots=[""],q.stylesheets=[],q.stylesheetToken="lwc-ft9ar9t9td",q.legacyStylesheetToken="fandry-breadcrumb_breadcrumb",et&&q.stylesheets.push.apply(q.stylesheets,et),y(q);const ns={label:"Breadcrumb"};class tt extends w{constructor(...e){super(...e);this.messages={},this.ariaLabel=""}get navLabel(){return this.ariaLabel||{...ns,...this.messages}.label}}v(tt,{publicProps:{messages:{config:0},ariaLabel:{config:0}}});const os=f(tt,{tmpl:ss,sel:"fandry-breadcrumb",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),is=k`<div class="price${0}"${2}><span class="amount${0}"${2}>$29</span><span class="period${0}"${2}>/mo</span></div>`,ds=k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M20 6L9 17l-5-5"${3}/></svg>`,ls=k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"${3}/></svg>`,cs=k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"${3}/></svg>`,ps={classMap:{section:!0},key:0},hs={classMap:{container:!0},key:1},fs={classMap:{gallery:!0},key:2},us={classMap:{pattern:!0},key:3},ms={classMap:{"pattern-head":!0},key:4},ys={key:5},bs={props:{level:"3"},key:7},gs={props:{variant:"muted",size:"sm"},key:8},vs={classMap:{demo:!0},key:9},ks={props:{variant:"primary"},key:10},ws={classMap:{"price-heading":!0},props:{level:"4"},key:11},_s={classMap:{"check-list":!0},key:14},xs={props:{size:"sm"},key:16},Ss={props:{as:"span",size:"sm"},key:19},zs={key:20},Ps={classMap:{pattern:!0},key:21},Cs={classMap:{"pattern-head":!0},key:22},Ms={key:23},Es={props:{level:"3"},key:25},Ts={props:{variant:"muted",size:"sm"},key:26},Is={classMap:{demo:!0},key:27},$s={props:{level:"4"},key:28},As={props:{label:"Email",type:"email",placeholder:"you@company.com"},key:29},Ds={props:{label:"Password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"},key:30},Ls={classMap:{"form-row":!0},key:31},Ns={props:{label:"Remember me"},key:32},Rs={variant:"muted",href:"#"},Os={key:34},Fs={classMap:{pattern:!0},key:35},Bs={classMap:{"pattern-head":!0},key:36},qs={key:37},js={props:{level:"3"},key:39},Vs={props:{variant:"muted",size:"sm"},key:40},Hs={classMap:{demo:!0},key:41},Gs={props:{level:"4"},key:42},Ks={classMap:{"setting-row":!0},key:43},Us={classMap:{"setting-copy":!0},key:44},Ws={props:{as:"span"},key:45},Ys={props:{as:"span",size:"xs",variant:"muted"},key:46},Qs={props:{checked:!0},key:47},Xs={key:48},Zs={classMap:{"setting-row":!0},key:49},Js={classMap:{"setting-copy":!0},key:50},en={props:{as:"span"},key:51},tn={props:{as:"span",size:"xs",variant:"muted"},key:52},an={key:53},rn={key:54},sn={classMap:{"setting-row":!0},key:55},nn={classMap:{"setting-copy":!0},key:56},on={props:{as:"span"},key:57},dn={props:{as:"span",size:"xs",variant:"muted"},key:58},ln={props:{checked:!0},key:59},cn={classMap:{pattern:!0},key:60},pn={classMap:{"pattern-head":!0},key:61},hn={key:62},fn={props:{level:"3"},key:64},un={props:{variant:"muted",size:"sm"},key:65},mn={classMap:{demo:!0,"empty-state":!0},key:66},yn={classMap:{"empty-icon":!0},key:67},bn={props:{size:"lg"},key:68},gn={props:{level:"4"},key:71},vn={props:{variant:"muted",size:"sm"},key:72},kn={props:{variant:"secondary"},key:73},wn={classMap:{pattern:!0},key:74},_n={classMap:{"pattern-head":!0},key:75},xn={key:76},Sn={props:{level:"3"},key:78},zn={props:{variant:"muted",size:"sm"},key:79},Pn={classMap:{demo:!0},key:80},Cn={props:{level:"4"},key:81},Mn={classMap:{"notif-list":!0},key:82},En={props:{variant:"info"},key:83},Tn={props:{variant:"success",title:"Payment received"},key:84},In={props:{variant:"warning",title:"Low stock"},key:85},$n={classMap:{pattern:!0},key:86},An={classMap:{"pattern-head":!0},key:87},Dn={key:88},Ln={props:{level:"3"},key:90},Nn={props:{variant:"muted",size:"sm"},key:91},Rn={classMap:{demo:!0},key:92},On={props:{level:"4"},key:93},Fn={classMap:{"team-list":!0},key:94},Bn={"team-row":!0},qn={classMap:{"team-copy":!0},key:97},jn={props:{as:"span",size:"sm"},key:98},Vn={props:{as:"span",size:"xs",variant:"muted"},key:99},Hn={classMap:{pattern:!0},key:101},Gn={classMap:{"pattern-head":!0},key:102},Kn={key:103},Un={props:{level:"3"},key:105},Wn={props:{variant:"muted",size:"sm"},key:106},Yn={classMap:{demo:!0},key:107},Qn={props:{level:"4"},key:108},Xn={classMap:{"file-list":!0},key:109},Zn={"file-row":!0},Jn={props:{size:"md"},key:111},eo={classMap:{"file-copy":!0},key:114},to={props:{as:"span",size:"sm"},key:115},ao={props:{as:"span",size:"xs",variant:"muted"},key:116},ro={variant:"ghost",size:"sm"},so={classMap:{pattern:!0},key:118},no={classMap:{"pattern-head":!0},key:119},oo={key:120},io={props:{level:"3"},key:122},lo={props:{variant:"muted",size:"sm"},key:123},co={classMap:{demo:!0},key:124},po={props:{level:"4"},key:125},ho={props:{variant:"muted",size:"sm"},key:126},fo={classMap:{checklist:!0},key:127},uo={props:{label:"Create your account",checked:!0,disabled:!0},key:128},mo={props:{label:"Verify your email",checked:!0,disabled:!0},key:129},yo={props:{label:"Invite your team"},key:130},bo={props:{label:"Place your first order"},key:131},go={classMap:{pattern:!0},key:132},vo={classMap:{"pattern-head":!0},key:133},ko={key:134},wo={props:{level:"3"},key:136},_o={props:{variant:"muted",size:"sm"},key:137},xo={classMap:{demo:!0},key:138},So={props:{label:"Quick search",placeholder:"Search orders, products, people\u2026"},key:139},zo={slotAssignment:"prefix",key:140},Po={classMap:{"search-results":!0},key:141},Co={"search-result":!0},Mo={props:{as:"span",size:"sm"},key:143},Eo={key:144},To={classMap:{pattern:!0},key:145},Io={classMap:{"pattern-head":!0},key:146},$o={key:147},Ao={props:{level:"3"},key:149},Do={props:{variant:"muted",size:"sm"},key:150},Lo={classMap:{demo:!0},key:151},No={props:{level:"4"},key:152},Ro={classMap:{"kpi-row":!0},key:153},Oo={kpi:!0},Fo={props:{as:"span",size:"xs",variant:"muted"},key:155},Bo={props:{level:"4"},key:156},qo={classMap:{pattern:!0},key:158},jo={classMap:{"pattern-head":!0},key:159},Vo={key:160},Ho={props:{level:"3"},key:162},Go={props:{variant:"muted",size:"sm"},key:163},Ko={classMap:{"crumb-nav":!0},props:{ariaLabel:"Folder path"},key:164},Uo={classMap:{demo:!0},key:166},Wo={props:{level:"4"},key:167},Yo={props:{variant:"muted",size:"sm"},key:168};function W(a,e,n,t){const{t:r,c:s,h:o,st:i,k:d,d:l,i:c,b:g}=a,{_m0:S,_m1:Z,_m2:J}=t;return[o("section",ps,[o("div",hs,[o("div",fs,[o("div",us,[o("div",ms,[s("fandry-badge",x,ys,[r("01")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:6},[r("View source")])]),s("fandry-heading",u,bs,[r("Pricing card")]),s("fandry-text",h,gs,[r("A plan card with a badge, feature list, and single CTA.")]),s("fandry-card",z,vs,[s("fandry-badge",x,ks,[r("Popular")]),s("fandry-heading",u,ws,[r("Pro")]),i(is,13),o("ul",_s,c(e.pricingFeatures,function(p){return o("li",{key:d(15,p)},[s("fandry-icon",ae,xs,[i(ds,18)]),s("fandry-text",h,Ss,[r(l(p))])])})),s("fandry-button",V,zs,[r("Choose Pro")])])]),o("div",Ps,[o("div",Cs,[s("fandry-badge",x,Ms,[r("02")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:24},[r("View source")])]),s("fandry-heading",u,Es,[r("Login form")]),s("fandry-text",h,Ts,[r("Inputs, a checkbox, and a link, wired together.")]),s("fandry-card",z,Is,[s("fandry-heading",u,$s,[r("Sign in")]),s("fandry-input",le,As),s("fandry-input",le,Ds),o("div",Ls,[s("fandry-checkbox",te,Ns),s("fandry-link",b,{props:Rs,key:33,on:S||(t._m0={click:g(e.handleNoopClick)})},[r("Forgot password?")])]),s("fandry-button",V,Os,[r("Sign in")])])]),o("div",Fs,[o("div",Bs,[s("fandry-badge",x,qs,[r("03")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:38},[r("View source")])]),s("fandry-heading",u,js,[r("Settings list")]),s("fandry-text",h,Vs,[r("Label, description, and a switch, repeated with dividers.")]),s("fandry-card",z,Hs,[s("fandry-heading",u,Gs,[r("Notifications")]),o("div",Ks,[o("div",Us,[s("fandry-text",h,Ws,[r("Email alerts")]),s("fandry-text",h,Ys,[r("Get notified when an order ships.")])]),s("fandry-switch",ce,Qs)]),s("fandry-divider",Ue,Xs),o("div",Zs,[o("div",Js,[s("fandry-text",h,en,[r("SMS alerts")]),s("fandry-text",h,tn,[r("Text messages for urgent updates.")])]),s("fandry-switch",ce,an)]),s("fandry-divider",Ue,rn),o("div",sn,[o("div",nn,[s("fandry-text",h,on,[r("Weekly digest")]),s("fandry-text",h,dn,[r("A Monday summary of account activity.")])]),s("fandry-switch",ce,ln)])])]),o("div",cn,[o("div",pn,[s("fandry-badge",x,hn,[r("04")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:63},[r("View source")])]),s("fandry-heading",u,fn,[r("Empty state")]),s("fandry-text",h,un,[r("Icon, heading, muted copy, and a way forward.")]),s("fandry-card",z,mn,[o("div",yn,[s("fandry-icon",ae,bn,[i(ls,70)])]),s("fandry-heading",u,gn,[r("No invoices yet")]),s("fandry-text",h,vn,[r("Invoices show up here once you place your first order.")]),s("fandry-button",V,kn,[r("Browse Products")])])]),o("div",wn,[o("div",_n,[s("fandry-badge",x,xn,[r("05")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:77},[r("View source")])]),s("fandry-heading",u,Sn,[r("Notification list")]),s("fandry-text",h,zn,[r("A stack of fandry-alert, each with its own variant.")]),s("fandry-card",z,Pn,[s("fandry-heading",u,Cn,[r("Notifications")]),o("div",Mn,[s("fandry-alert",pe,En,[r("New comment on ticket #4821.")]),s("fandry-alert",pe,Tn,[r("Invoice INV-2044 is now paid.")]),s("fandry-alert",pe,In,[r("Valve Assembly is running low.")])])])]),o("div",$n,[o("div",An,[s("fandry-badge",x,Dn,[r("06")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:89},[r("View source")])]),s("fandry-heading",u,Ln,[r("Team list")]),s("fandry-text",h,Nn,[r("Avatar, name, role, and a badge, data-driven with for:each.")]),s("fandry-card",z,Rn,[s("fandry-heading",u,On,[r("Team")]),o("div",Fn,c(e.teamMembers,function(p){return o("div",{classMap:Bn,key:d(95,p.key)},[s("fandry-avatar",Vr,{props:{initials:p.initials,size:"sm"},key:96}),o("div",qn,[s("fandry-text",h,jn,[r(l(p.name))]),s("fandry-text",h,Vn,[r(l(p.role))])]),s("fandry-badge",x,{props:{variant:p.variant},key:100},[r(l(p.badge))])])}))])]),o("div",Hn,[o("div",Gn,[s("fandry-badge",x,Kn,[r("07")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:104},[r("View source")])]),s("fandry-heading",u,Un,[r("Attachment list")]),s("fandry-text",h,Wn,[r("File icon, filename, size, and a remove action.")]),s("fandry-card",z,Yn,[s("fandry-heading",u,Qn,[r("Attachments")]),o("div",Xn,c(e.files,function(p){return o("div",{classMap:Zn,key:d(110,p.key)},[s("fandry-icon",ae,Jn,[i(cs,113)]),o("div",eo,[s("fandry-text",h,to,[r(l(p.name))]),s("fandry-text",h,ao,[r(l(p.size))])]),s("fandry-button",V,{props:ro,key:117,on:Z||(t._m1={click:g(e.handleNoopClick)})},[r("Remove")])])}))])]),o("div",so,[o("div",no,[s("fandry-badge",x,oo,[r("08")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:121},[r("View source")])]),s("fandry-heading",u,io,[r("Onboarding checklist")]),s("fandry-text",h,lo,[r("Completed steps locked, the rest genuinely checkable.")]),s("fandry-card",z,co,[s("fandry-heading",u,po,[r("Get started")]),s("fandry-text",h,ho,[r("2 of 4 steps complete")]),o("div",fo,[s("fandry-checkbox",te,uo),s("fandry-checkbox",te,mo),s("fandry-checkbox",te,yo),s("fandry-checkbox",te,bo)])])]),o("div",go,[o("div",vo,[s("fandry-badge",x,ko,[r("09")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:135},[r("View source")])]),s("fandry-heading",u,wo,[r("Search bar")]),s("fandry-text",h,_o,[r("fandry-input's prefix slot plus a static results list.")]),s("fandry-card",z,xo,[s("fandry-input",le,So,[o("span",zo,[r("\u{1F50D}")])]),o("div",Po,c(e.searchResults,function(p){return o("div",{classMap:Co,key:d(142,p.key)},[s("fandry-text",h,Mo,[r(l(p.label))]),s("fandry-badge",x,Eo,[r(l(p.badge))])])}))])]),o("div",To,[o("div",Io,[s("fandry-badge",x,$o,[r("10")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:148},[r("View source")])]),s("fandry-heading",u,Ao,[r("KPI row")]),s("fandry-text",h,Do,[r("Three stat tiles with a trend badge each.")]),s("fandry-card",z,Lo,[s("fandry-heading",u,No,[r("This month")]),o("div",Ro,c(e.kpis,function(p){return o("div",{classMap:Oo,key:d(154,p.key)},[s("fandry-text",h,Fo,[r(l(p.label))]),s("fandry-heading",u,Bo,[r(l(p.value))]),s("fandry-badge",x,{props:{variant:p.variant},key:157},[r(l(p.change))])])}))])]),o("div",qo,[o("div",jo,[s("fandry-badge",x,Vo,[r("11")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:161},[r("View source")])]),s("fandry-heading",u,Ho,[r("Breadcrumb navigation")]),s("fandry-text",h,Go,[r("Each crumb swaps the card below \u2014 fandry-breadcrumb driving real state.")]),s("fandry-breadcrumb",os,Ko,c(e.crumbItems,function(p){return s("fandry-breadcrumb-item",Jr,{attrs:{"data-key":p.key},props:{href:"#",current:p.current},key:d(165,p.key),on:J||(t._m2={click:g(e.handleCrumbClick)})},[r(l(p.label))])})),s("fandry-card",z,Uo,[s("fandry-heading",u,Wo,[r(l(e.activePage.title))]),s("fandry-text",h,Yo,[r(l(e.activePage.body))])])])])])])]}var Qo=m(W);W.stylesheets=[],W.stylesheetToken="lwc-52k25qoua6k",W.legacyStylesheetToken="fandryui-exampleGallery_exampleGallery",De&&W.stylesheets.push.apply(W.stylesheets,De),y(W);class at extends j{constructor(...e){super(...e);this.sourceUrl="https://github.com/rahulgawale/fandryui/blob/main/src/modules/fandryui/exampleGallery/exampleGallery.html",this.pricingFeatures=["Unlimited components","Priority support","Custom theming"],this.teamMembers=[{key:"ada",initials:"AL",name:"Ada Lovelace",role:"Engineer",badge:"Admin",variant:"primary"},{key:"grace",initials:"GH",name:"Grace Hopper",role:"Engineer",badge:"Member",variant:"default"},{key:"alan",initials:"AT",name:"Alan Turing",role:"Researcher",badge:"Member",variant:"default"}],this.files=[{key:"report",name:"quarterly-report.pdf",size:"2.4 MB"},{key:"warranty",name:"warranty-terms.docx",size:"640 KB"}],this.kpis=[{key:"revenue",label:"Revenue",value:"$84,200",change:"+12%",variant:"success"},{key:"customers",label:"New customers",value:"38",change:"+4%",variant:"success"},{key:"churn",label:"Churn",value:"1.2%",change:"+0.3%",variant:"danger"}],this.searchResults=[{key:"order",label:"#10482 \u2014 Industrial Pump",badge:"Order"},{key:"person",label:"Ada Lovelace",badge:"Person"},{key:"product",label:"Filter Kit",badge:"Product"}],this.crumbPages=[{key:"documents",label:"Documents",title:"Documents",body:"Every file synced to your account, organized by project."},{key:"projects",label:"Projects",title:"Projects",body:"One folder per active project across the team."},{key:"redesign",label:"Redesign",title:"Website Redesign",body:"Design files, briefs, and assets for the Q3 site redesign."}],this.activeCrumbKey="redesign"}get crumbItems(){return this.crumbPages.map(e=>({...e,current:e.key===this.activeCrumbKey}))}get activePage(){return this.crumbPages.find(e=>e.key===this.activeCrumbKey)??this.crumbPages[0]}handleNoopClick(e){e.preventDefault()}handleCrumbClick(e){e.preventDefault();const n=e.currentTarget.dataset.key;n&&(this.activeCrumbKey=n)}}v(at,{fields:["sourceUrl","pricingFeatures","teamMembers","files","kpis","searchResults","crumbPages","activeCrumbKey"]});const Xo=f(at,{tmpl:Qo,sel:"fandryui-example-gallery",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Zo(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.cta"+t+" {padding: calc(var(--fd-space-6) * 2) 0;text-align: center;background: radial-gradient(circle at 50% 0%, hsl(var(--brand-primary, 330 81% 48%) / 0.08), transparent 60%);border-top: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 34rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);}.cta-row"+t+" {display: flex;gap: var(--fd-space-3);flex-wrap: wrap;justify-content: center;margin-top: var(--fd-space-2);}"}var rt=[Zo];const Jo={classMap:{cta:!0},key:0},ei={classMap:{container:!0},key:1},ti={props:{level:"2"},key:2},ai={props:{variant:"muted"},key:3},ri={classMap:{"cta-row":!0},key:4},si={variant:"default",size:"lg"},ni={variant:"secondary",size:"lg"};function Y(a,e,n,t){const{t:r,c:s,b:o,h:i}=a,{_m0:d,_m1:l}=t;return[i("section",Jo,[i("div",ei,[s("fandry-heading",u,ti,[r("Ready to build?")]),s("fandry-text",h,ai,[r("Every pattern above is just fandry-* primitives, composed. Grab the components and start.")]),i("div",ri,[s("fandry-button",V,{props:si,key:5,on:d||(t._m0={click:o(e.handleBrowseClick)})},[r("Browse Components")]),s("fandry-button",V,{props:ni,key:6,on:l||(t._m1={click:o(e.handleGithubClick)})},[r("View on GitHub")])])])])]}var oi=m(Y);Y.stylesheets=[],Y.stylesheetToken="lwc-5a15g8bv0bl",Y.legacyStylesheetToken="fandryui-ctaBanner_ctaBanner",rt&&Y.stylesheets.push.apply(Y.stylesheets,rt),y(Y);const ii="https://github.com/rahulgawale/fandryui";class di extends j{handleBrowseClick(){window.location.assign("/components")}handleGithubClick(){window.open(ii,"_blank","noopener,noreferrer")}}const li=f(di,{tmpl:oi,sel:"fandryui-cta-banner",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ci(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;flex-wrap: wrap;gap: var(--fd-space-2) var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {padding: var(--fd-space-4);}}"}var st=[ci];const pi={classMap:{footer:!0},key:0},hi={classMap:{container:!0},key:1},fi={props:{as:"span",size:"sm",variant:"muted"},key:2},ui={classMap:{links:!0},key:3},mi={props:{href:"/getting-started",variant:"muted"},key:4},yi={props:{href:"/examples",variant:"muted"},key:5},bi={props:{href:"/components",variant:"muted"},key:6},gi={props:{href:"/blocks",variant:"muted"},key:7},vi={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:8};function Q(a,e,n,t){const{d:r,t:s,c:o,h:i}=a;return[i("footer",pi,[i("div",hi,[o("fandry-text",h,fi,[s("\xA9 "+r(e.year)+" Fandry UI \xB7 MIT License")]),i("div",ui,[o("fandry-link",b,mi,[s("Get started")]),o("fandry-link",b,yi,[s("Examples")]),o("fandry-link",b,bi,[s("Components")]),o("fandry-link",b,gi,[s("Blocks")]),o("fandry-link",b,vi,[s("GitHub")])])])])]}var ki=m(Q);Q.stylesheets=[],Q.stylesheetToken="lwc-3atbjjo9jl4",Q.legacyStylesheetToken="fandryui-siteFooter_siteFooter",st&&Q.stylesheets.push.apply(Q.stylesheets,st),y(Q);class wi extends j{get year(){return new Date().getFullYear()}}const _i=f(wi,{tmpl:ki,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),xi={key:0},Si={key:1},zi={props:{pageTitle:"11 patterns, built from these primitives",subtitle:"Real, interactive UI built entirely from fandry-* components \u2014 not screenshots."},key:2},Pi={key:3},Ci={key:4},Mi={key:5};function X(a,e,n,t){const{c:r,h:s}=a;return[r("fandryui-site-header",_a,xi),s("main",Si,[r("fandryui-page-intro",Ra,zi),r("fandryui-example-gallery",Xo,Pi),r("fandryui-cta-banner",li,Ci)]),r("fandryui-site-footer",_i,Mi)]}var Ei=m(X);X.stylesheets=[],X.stylesheetToken="lwc-175l6qtgr6f",X.legacyStylesheetToken="fandryui-examples_examples",he&&X.stylesheets.push.apply(X.stylesheets,he),y(X);class Ti extends j{}const Ii=f(Ti,{tmpl:Ei,sel:"fandryui-examples",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{Ii as default};
