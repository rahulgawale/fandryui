import{registerTemplate as b,freezeTemplate as g,registerComponent as u,LightningElement as M,registerDecorators as w,parseFragment as k}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function ut(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}main"+t+` {background: radial-gradient(
 circle at 15% 0%,
 hsl(var(--site-primary) / 0.12),
 transparent 55%
 ),
 radial-gradient(
 circle at 85% 10%,
 hsl(var(--site-accent) / 0.12),
 transparent 55%
 );}`}var ue=[ut];function mt(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":r+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: block;}.logo"+t+"::part(link) {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: block;width: 2rem;height: 2rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.nav-link"+t+"::part(link) {color: hsl(var(--site-text-quiet));text-decoration: none;font-weight: var(--fd-font-weight-medium);}.nav-link::part(link):hover"+t+",.nav-link"+t+"::part(link current) {color: hsl(var(--site-primary));}.nav-link"+t+"::part(link current) {font-weight: var(--fd-font-weight-semibold);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;flex-wrap: wrap;justify-content: center;gap: var(--fd-space-2) var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var me=[mt];function yt(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline;}.link"+t+` {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: var(--_fd-link-underline-offset);cursor: pointer;transition: color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.link:hover`+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+" {outline: none;}.tab-stop:focus-visible"+t+" .link"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: var(--_fd-ring-control);}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var ye=[yt];const bt={"tab-stop":!0},gt={key:2},vt=[];function T(a,e,s,t){const{ti:r,gid:n,b:o,ncls:i,fid:d,s:l,h:c}=a,{_m0:h}=t;return[c("span",{classMap:bt,attrs:{part:"base",role:"link",tabindex:r(e.tabStopIndex),"aria-labelledby":n("anchor"),"aria-disabled":e.ariaDisabled,"aria-current":e.ariaCurrent},key:0,on:h||(t._m0={keydown:o(e.handleKeydown),click:o(e.handleClick)})},[c("a",{className:i(e.classes),attrs:{id:n("anchor"),part:e.linkPart,href:d(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[l("",gt,vt,s)])])]}var kt=b(T);T.slots=[""],T.stylesheets=[],T.stylesheetToken="lwc-38j32sll441",T.legacyStylesheetToken="fandry-link_link",ye&&T.stylesheets.push.apply(T.stylesheets,ye),g(T);var wt=void 0;function _t(a,e,s){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 226 90% 50%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 162 72% 42%));--_fd-accent-foreground: var(--fd-accent-foreground, 160 40% 12%);--_fd-info: var(--fd-info, var(--fd-accent, var(--brand-accent, 199 89% 36%)));--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 252 56% 44%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-z-overlay-contained: var(--fd-z-overlay-contained, 1);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-ring-halo-width: var(--fd-ring-halo-width, 3px);--_fd-ring-halo-blur: var(--fd-ring-halo-blur, 4px);--_fd-ring-halo-opacity: var(--fd-ring-halo-opacity, 0.3);--_fd-ring-field: var(--fd-ring-field, inset 0 0 0 var(--_fd-border-width) hsl(var(--_fd-ring-color)),\r
 0 0 var(--_fd-ring-halo-blur) var(--_fd-ring-halo-width)\r
 hsl(var(--_fd-ring-color) / var(--_fd-ring-halo-opacity))\r
 );--_fd-ring-control: var(--fd-ring-control, 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color)),\r
 0 0 var(--_fd-ring-halo-blur) calc(var(--_fd-ring-width) + var(--_fd-ring-halo-width))\r
 hsl(var(--_fd-ring-color) / var(--_fd-ring-halo-opacity))\r
 );--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-radius-full: var(--fd-radius-full, 999px);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-switch-padding: var(--fd-switch-padding, 0.125rem);--_fd-switch-width: var(--fd-switch-width, calc(var(--_fd-size-sm) * 2 + 2 * var(--_fd-switch-padding)));--_fd-tooltip-arrow-size: var(--fd-tooltip-arrow-size, 0.625rem);--_fd-spinner-thickness: var(--fd-spinner-thickness, 0.125em);--_fd-sidebar-width: var(--fd-sidebar-width, 16rem);--_fd-toast-width: var(--fd-toast-width, 20rem);--_fd-form-column-min-width: var(--fd-form-column-min-width, 16rem);--_fd-media-columns: var(--fd-media-columns, 4);--_fd-media-gap: var(--fd-media-gap, var(--_fd-space-3));--_fd-media-min-width: var(--fd-media-min-width, 8rem);--_fd-media-aspect-ratio: var(--fd-media-aspect-ratio, 1 / 1);--_fd-media-fit: var(--fd-media-fit, cover);--_fd-link-underline-offset: var(--fd-link-underline-offset, 0.125em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-loading-overlay-delay: var(--fd-loading-overlay-delay, 150ms);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var xt=[_t];function St(a,e,s){var t=a?"-"+a:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}@keyframes fd-pulse"+t+" {50% {opacity: var(--_fd-pulse-opacity);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}"}var zt=[St];function Pt(a,e,s){var t=a?"["+a+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}[hidden]"+t+" {display: none !important;}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var Ct=[xt,zt,Pt];const be=new WeakMap;function E(a,e,s,t,r="elementProps"){const n={},o=[];for(const[i,d]of Object.entries(e))s.includes(i)?o.push(i):n[i]=d;return o.length&&be.get(a)!==e&&(be.set(a,e),console.warn(`${t}: ${r} included ${o.map(i=>`"${i}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),n}function oe(a,e){a.key!=="Enter"||a.target!==a.currentTarget||e.querySelector("a")?.dispatchEvent(ve(a))}function ge(a,e){const s=e.querySelector("a");!s||a.target!==a.currentTarget||(a.stopPropagation(),s.dispatchEvent(ve(a)))}function ve(a){return new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,altKey:a.altKey,metaKey:a.metaKey})}function ie(a,e){if(!!e)return Number(a.tabIndex)===-1?"-1":"0"}function de(a){const{tabIndex:e,...s}=a;return s}class le extends M{activateAnchorOnEnter(e){oe(e,this.template)}resolveTabStopIndex(e,s){return ie(e,s)}withoutTabIndex(e){return de(e)}resolveElementProps(e,s,t,r="elementProps"){return E(this,e,s,t,r)}}le.stylesheets=[Ct],le.shadowSupportMode="native";const _=u(le,{tmpl:wt,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function P(a,e={}){return[a,...Object.keys(e).filter(s=>e[s])].join(" ")}const Mt=["href","target","rel","class","ariaDisabled"];class ke extends _{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return ie(this.elementProps,!this.disabled)}handleKeydown(e){oe(e,this.template)}handleClick(e){ge(e,this.template)}get resolvedElementProps(){return de(E(this,this.elementProps,Mt,"fandry-link"))}get ariaCurrent(){const e=this.elementProps?.ariaCurrent;return e&&e!=="false"?String(e):void 0}get linkPart(){return P("link",{[this.variant||"default"]:!0,disabled:this.disabled,current:!!this.ariaCurrent})}}w(ke,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const v=u(ke,{tmpl:kt,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Tt(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard), color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));--_fd-button-lift: 0 0 transparent;box-shadow: var(--_fd-button-lift);}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}@media (hover: hover) {.button--default:hover:not(:disabled):not([aria-disabled='true'])"+t+" {filter: brightness(var(--_fd-hover-brightness));--_fd-button-lift: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}@media (hover: hover) {.button--secondary:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));--_fd-button-lift: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}@media (hover: hover) {.button--ghost:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));--_fd-button-lift: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}}.button:focus-visible"+t+" {outline: var(--_fd-ring-width) solid transparent;box-shadow: var(--_fd-ring-control), var(--_fd-button-lift);}.button--default:focus-visible"+t+` {box-shadow: inset 0 0 0 var(--_fd-ring-width)\r
 color-mix(in srgb, hsl(var(--_fd-primary-foreground)) 75%, hsl(var(--_fd-primary))),\r
 var(--_fd-ring-control), var(--_fd-button-lift);}.button:disabled`+t+",\r.button[aria-disabled='true']"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled):not([aria-disabled='true'])"+t+" {transform: translateY(1px);--_fd-button-lift: 0 0 transparent;}"}var we=[Tt];const Et={key:1},$t=[];function $(a,e,s,t){const{ncls:r,b:n,s:o,h:i}=a,{_m0:d}=t;return[i("button",{className:r(e.classes),attrs:{part:e.basePart,type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0,on:d||(t._m0={click:n(e.handleClick)})},[o("",Et,$t,s)])]}var It=b($);$.slots=[""],$.stylesheets=[],$.stylesheetToken="lwc-4ejlbgtq1p9",$.legacyStylesheetToken="fandry-button_button",we&&$.stylesheets.push.apply($.stylesheets,we),g($);const At=["type","class","disabled"];class _e extends _{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return E(this,this.elementProps,At,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}get basePart(){return P("base",{[this.variant||"default"]:!0,disabled:this.disabled||this.isAriaDisabled})}get isAriaDisabled(){return String(this.elementProps?.ariaDisabled)==="true"}handleClick(e){this.isAriaDisabled&&(e.preventDefault(),e.stopImmediatePropagation())}}w(_e,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const G=u(_e,{tmpl:It,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Dt(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var xe=[Dt];const Lt={key:1},Nt=[];function I(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("span",{className:r(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.accessibleLabel},key:0},[n("",Lt,Nt,s)])]}var Rt=b(I);I.slots=[""],I.stylesheets=[],I.stylesheetToken="lwc-17qhee1uo3s",I.legacyStylesheetToken="fandry-icon_icon",xe&&I.stylesheets.push.apply(I.stylesheets,xe),g(I);class Se extends _{constructor(...e){super(...e);this.size="md",this.label="",this.ariaLabel=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.ariaLabel&&!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get accessibleLabel(){return this.isDecorative?void 0:this.ariaLabel||this.label}}w(Se,{publicProps:{size:{config:0},label:{config:0},ariaLabel:{config:0}}});const re=u(Se,{tmpl:Rt,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ft(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);box-sizing: border-box;width: 100%;max-width: none;height: 100%;max-height: none;margin: 0;border: 0;color: inherit;}.backdrop"+t+"::backdrop {background: transparent;}.backdrop[open]"+t+",.backdrop--closing"+t+" {display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.status"+t+" {flex-shrink: 0;}.count"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var ze=[Ft];const Ot=k`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,Bt=k`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,qt=k`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,Vt=k`<span class="count${0}"${2}>${"t1"}</span>`,jt={panel:!0},Ht={part:"panel"},Gt={classMap:{search:!0},attrs:{part:"search"},key:2},Kt={input:!0},Ut={listbox:!0},Wt={group:!0},Yt={classMap:{status:!0},attrs:{role:"status"},key:14},Qt={classMap:{empty:!0},attrs:{part:"empty"},key:17},Xt={attrs:{name:"empty"},key:18};function A(a,e,s,t){const{ncls:r,b:n,gid:o,h:i,k:d,d:l,sp:c,st:h,dc:y,i:C,f:H,t:p,s:dt}=a,{_m0:lt,_m1:ct,_m2:pt,_m3:ft,_m4:ht}=t;return[e.isMounted?i("dialog",{className:r(e.backdropClasses),attrs:{part:"backdrop","aria-label":e.accessibleLabel,inert:e.backdropInert},key:0,on:lt||(t._m0={click:n(e.handleBackdropClick),cancel:n(e.handleCancel)})},[i("div",{classMap:jt,attrs:Ht,key:1,on:ct||(t._m1={mousedown:n(e.handlePanelMouseDown)})},[i("div",Gt,[i("input",{classMap:Kt,attrs:{id:o("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.accessibleLabel,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":o("listbox"),"aria-activedescendant":o(e.activeDescendant)},props:{value:e.query},key:3,on:pt||(t._m2={input:n(e.handleInput),keydown:n(e.handleInputKeydown)})})]),i("div",{classMap:Ut,attrs:{id:o("listbox"),part:"listbox",role:"listbox","aria-label":e.accessibleLabel},key:4,on:ft||(t._m3={mousedown:n(e.handleListboxMouseDown)})},C(e.renderGroups,function(te){return i("div",{classMap:Wt,attrs:{part:"group",role:"group","aria-label":te.label},key:d(5,te.key)},H([te.hasLabel?h(Ot,7,[c(1,null,l(te.label))]):null,C(te.options,function(x){return i("div",{className:r(x.classes),attrs:{id:o(x.id),part:x.part,role:"option","data-option-id":x.id,"aria-selected":x.ariaSelected,"aria-disabled":x.ariaDisabled},key:d(8,x.id),on:ht||(t._m4={click:n(e.handleOptionClick),mousemove:n(e.handleOptionMouseMove)})},[x.component?y(x.component,{props:{...x.resolvedComponentProps},key:9}):null,x.component?null:h(Bt,11,[c(1,null,l(x.label))]),x.component?null:x.hasDescription?h(qt,13,[c(1,null,l(x.description))]):null])})]))})),i("div",Yt,[e.hasResults?h(Vt,16,[c(1,null,l(e.resultsText))]):null,e.hasResults?null:i("div",Qt,[dt("empty",Xt,[p("No results found")],s)])])])]):null]}var Zt=b(A);A.slots=["empty"],A.stylesheets=[],A.stylesheetToken="lwc-4bgejodik1n",A.legacyStylesheetToken="fandry-command_command",ze&&A.stylesheets.push.apply(A.stylesheets,ze),g(A);var Jt=void 0;const ea=/[\s\-_/.]/;function ne(a,e,s){const t=a.toLowerCase().indexOf(e);return t===-1?0:t===0?s*3:ea.test(a[t-1])?s*2:s}function ta(a,e){let s=0;for(const t of e){const r=Math.max(ne(a.label,t,10),...(a.keywords??[]).map(n=>ne(n,t,6)),ne(a.description??"",t,3),ne(a.group??"",t,2));if(r===0)return-1;s+=r}return s}class Pe extends _{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}isAriaSelected(e,s){return e}get resultCount(){return this.entries.length}commit(e){}filterItems(e,s){const t=s.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((r,n)=>({item:r,index:n,score:ta(r,t)})).filter(r=>r.score>=0).sort((r,n)=>n.score-r.score||r.index-n.index).map(r=>r.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,s=this.query,t=this.entriesCache;if(t.source===e&&t.query===s)return t.entries;const r=this.buildEntries(e,s);return t.source=e,t.query=s,t.entries=r,r}buildEntries(e,s){const t=this.filterItems(e,s),r=t.filter(i=>!i.group),n=Array.from(new Set(t.filter(i=>i.group).map(i=>i.group)));return[...r,...n.flatMap(i=>t.filter(d=>d.group===i))].map((i,d)=>({id:`option-${d}`,item:i}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(s=>s.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,s=[];for(const t of this.entries){const r=t.item.group??"";let n=s.find(o=>o.label===r);n||(n={key:`group-${s.length}`,label:r,hasLabel:!!r,options:[]},s.push(n)),n.options.push(this.decorate(t,e))}return s}decorate(e,s){const{item:t,id:r}=e,n=!!t.disabled,o=this.isSelected(t);return{id:r,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:n,ariaSelected:this.isAriaSelected(o,r===s)?"true":"false",ariaDisabled:n?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",o?"option--selected":"",r===s?"option--active":"",n?"option--disabled":""].filter(Boolean).join(" "),part:P("option",{selected:o,active:r===s,disabled:n})}}activateSelected(){const e=this.enabledEntries.find(s=>this.isSelected(s.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const s=this.enabledEntries;if(!s.length)return;const r=(s.findIndex(n=>n.id===this.resolvedActiveId)+e+s.length)%s.length;this.activeId=s[r].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const s=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);s&&this.commit(s.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const s=e.currentTarget.dataset.optionId,t=this.entries.find(r=>r.id===s);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const s=e.currentTarget.dataset.optionId;if(s===this.resolvedActiveId)return;const t=this.entries.find(r=>r.id===s);t&&!t.item.disabled&&(this.activeId=t.id)}}w(Pe,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const aa=u(Pe,{tmpl:Jt,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ra(a){return!a||typeof a.getAnimations!="function"?Promise.resolve():Promise.allSettled(a.getAnimations({subtree:!0}).map(e=>e.finished))}const na={results:a=>a===1?"1 result":`${a} results`},sa=[];class Ce extends aa{constructor(...e){super(...e);this.label="",this.ariaLabel="",this.placeholder="",this.items=[],this.messages={},this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=s=>{this.open&&s.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const s=this._open;this._open=e,e&&(this.isMounted=!0),typeof document!="undefined"&&(!s&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):s&&!e&&(this.unlockBodyScroll(),this.dialog?.close?.(),this.previouslyFocused?.focus(),this.previouslyFocused=null))}get source(){return this.items??sa}isAriaSelected(e,s){return s}get resultsText(){return{...na,...this.messages}.results(this.resultCount)}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){typeof document!="undefined"&&document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get accessibleLabel(){return this.ariaLabel||this.label}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.showModal(),this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");ra(e).then(()=>{this.open||(this.isMounted=!1)})}}get dialog(){return this.template.querySelector("dialog")}showModal(){const e=this.dialog;e&&!e.open&&typeof e.showModal=="function"&&e.showModal()}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}w(Ce,{publicProps:{label:{config:0},ariaLabel:{config:0},placeholder:{config:0},items:{config:0},messages:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const oa=u(Ce,{tmpl:Zt,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),ia=k`<img class="logo-mark${0}" src="/assets/logo.png" alt width="32" height="32"${2}>`,da=k`<span class="shortcut${0}"${2}>${"t1"}</span>`,la=k`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,ca={classMap:{header:!0},key:0},pa={classMap:{container:!0},key:1},fa={classMap:{logo:!0},props:{href:"/"},key:2},ha={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:5},ua={"nav-link":!0},ma={classMap:{actions:!0},key:7},ya={variant:"secondary",size:"sm"},ba={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:11},ga={props:{size:"sm",label:"GitHub"},key:12};function K(a,e,s,t){const{st:r,t:n,c:o,k:i,d,i:l,h:c,b:h,sp:y}=a,{_m0:C,_m1:H}=t;return[c("header",ca,[c("div",pa,[o("fandry-link",v,fa,[r(ia,4),n("Fandry UI")]),c("nav",ha,l(e.navItems,function(p){return o("fandry-link",v,{classMap:ua,props:{href:p.href,elementProps:p.elementProps},key:i(6,p.href)},[n(d(p.label))])})),c("div",ma,[o("fandry-button",G,{props:ya,key:8,on:C||(t._m0={click:h(e.handlePaletteOpen)})},[n("Search "),r(da,10,[y(1,null,d(e.shortcutHint))])]),o("fandry-link",v,ba,[o("fandry-icon",re,ga,[r(la,14)])])])])]),o("fandry-command",oa,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:15,on:H||(t._m1={toggle:h(e.handlePaletteToggle),select:h(e.handlePaletteSelect)})})]}var va=b(K);K.stylesheets=[],K.stylesheetToken="lwc-2hoqs8gnsf6",K.legacyStylesheetToken="fandryui-siteHeader_siteHeader",me&&K.stylesheets.push.apply(K.stylesheets,me),g(K);const ka=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],wa=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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
}`}]}],_a=[{label:"Home",value:"/"},{label:"Why Fandry UI",value:"/why-fandry/"},{label:"Getting started",value:"/getting-started/"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss/"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce/"},{label:"Theming",value:"/getting-started/theming/"},{label:"Components",value:"/components/"},{label:"Blocks",value:"/blocks/"},{label:"Blocks: Data table",value:"/blocks/data-table/"},{label:"Blocks: Form",value:"/blocks/form/"},{label:"Blocks: Media gallery",value:"/blocks/media-gallery/"},{label:"Examples",value:"/examples/"}],xa=[{label:"Why Fandry",href:"/why-fandry/"},{label:"Get started",href:"/getting-started/"},{label:"Examples",href:"/examples/"},{label:"Components",href:"/components/"},{label:"Blocks",href:"/blocks/"}],Me=/Mac|iPhone|iPad/.test(navigator.platform);class Te extends M{constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[..._a.map(s=>({...s,group:"Pages"})),...ka.flatMap(s=>wa.filter(t=>t.category===s).map(t=>({label:t.name,value:`/components/${t.slug}/`,group:s,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=s=>{(Me?s.metaKey:s.ctrlKey)&&s.key?.toLowerCase()==="k"&&(s.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get navItems(){const e=window.location.pathname.replace(/\/?$/,"/");return xa.map(s=>({...s,elementProps:e.startsWith(s.href)?{ariaCurrent:"page"}:{}}))}get shortcutHint(){return Me?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}w(Te,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const Sa=u(Te,{tmpl:va,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function za(a,e,s){var t=a?"["+a+"]":"";return[".lede",t," {display: block;margin-top: var(--fd-space-3);max-width: 38rem;}.lede",t,"::part(base) {font-size: var(--fd-font-size-lg);}:not(pre)",t," > code",t,' {font-family: var(--font-code, "Geist Mono", monospace);font-size: 0.875em;padding: 0.1em 0.35em;border-radius: var(--fd-radius-sm);background: color-mix(in srgb, var(--fd-color-text) 6%, transparent);border: 1px solid color-mix(in srgb, var(--fd-color-text) 10%, transparent);overflow-wrap: anywhere;}.list',t," {margin: 0;padding-left: var(--fd-space-5);}.list",t," li",t," + li",t," {margin-top: var(--fd-space-2);}.props-table-wrap",t," {overflow-x: auto;border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-md);}.props-table",t," {width: 100%;border-collapse: collapse;font-size: var(--fd-font-size-sm);}.props-table",t," th",t,",.props-table",t," td",t," {text-align: left;padding: var(--fd-space-2) var(--fd-space-3);border-bottom: 1px solid var(--fd-color-border);vertical-align: top;}.props-table",t," thead",t," th",t," {color: var(--fd-color-muted);font-weight: var(--fd-font-weight-semibold);font-size: var(--fd-font-size-xs);text-transform: uppercase;letter-spacing: 0.04em;}.props-table",t," tbody",t," tr:last-child",t," td",t," {border-bottom: none;}fandry-link.chip:hover",t," > fandry-badge",t,"::part(base),fandry-link.chip:focus-within",t," > fandry-badge",t,"::part(base) {border-color: var(--fd-color-primary);color: var(--fd-color-primary);}.props-table",t," td",t," > code",t," {padding: 0;border: 0;background: none;font-size: 0.85em;overflow-wrap: normal;}.toc",t," {display: none;}@media (min-width: 72rem) {.toc",t," {display: block;flex: none;width: 11rem;position: sticky;top: 4rem;padding: var(--fd-space-6) 0;}}.props-table-wrap",t," + fandryui-code-block",t," {display: block;margin-top: var(--fd-space-3);}.link-card",t," {position: relative;border-radius: var(--fd-radius-lg);transition: transform 160ms ease, box-shadow 160ms ease;}@media (hover: hover) {.link-card:hover",t," {transform: translateY(-2px);box-shadow: 0 12px 24px -12px color-mix(in srgb, var(--fd-color-text) 25%, transparent);}}.link-card-title",t,"::part(link) {color: inherit;text-decoration: none;box-shadow: none;}.link-card-title",t,"::part(link)::after {content: '';position: absolute;inset: 0;}.link-card-title::part(link):hover",t," {filter: none;}.link-card-title",t,"::part(base)::after {content: '';position: absolute;inset: 0;border-radius: var(--fd-radius-lg);pointer-events: none;}.link-card-title::part(base):focus-visible",t,"::after {box-shadow: var(--_fd-ring-control);}:where(.block-page)",t," {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-6) var(--fd-space-6) calc(var(--fd-space-6) * 2);}:where(.block-page)",t," .kind",t," {margin-top: var(--fd-space-4);}:where(.block-page)",t," .title",t," {display: block;margin-top: var(--fd-space-2);}:where(.block-page)",t," .lede",t," {margin-top: var(--fd-space-2);max-width: 44rem;}:where(.block-page)",t," .section",t," {margin-top: calc(var(--fd-space-6) * 2);}:where(.block-page)",t," .section-title",t," {display: block;margin-bottom: var(--fd-space-3);}:where(.block-page)",t," .demo-controls",t," {display: flex;flex-wrap: wrap;align-items: center;gap: var(--fd-space-4);margin-bottom: var(--fd-space-3);}:where(.block-page)",t," .demo-frame",t," {display: block;}:where(.block-page)",t," .two-up",t," {display: grid;grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));gap: var(--fd-space-4);}:where(.block-page)",t," .label",t,",:where(.block-page)",t," .note",t," {display: block;margin: var(--fd-space-3) 0 var(--fd-space-2);}:where(.block-page)",t," .chip",t," {margin-right: var(--fd-space-1);}"].join("")}var Ee=[za];function Pa(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.intro"+t+" {padding: calc(var(--fd-space-6) * 1.5) 0 var(--fd-space-6);text-align: center;}.container"+t+" {max-width: 40rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);}.subhead"+t+" {max-width: 32rem;}"}var $e=[Ee,Pa];function Ca(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var Ie=[Ca];const Ma={key:1},Ta=[];function D(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[n("",Ma,Ta,s)])]}var Ea=b(D);D.slots=[""],D.stylesheets=[],D.stylesheetToken="lwc-4htp61u8vnv",D.legacyStylesheetToken="fandry-heading_heading",Ie&&D.stylesheets.push.apply(D.stylesheets,Ie),g(D);class Ae extends _{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}w(Ae,{publicProps:{level:{config:3}},fields:["_level"]});const m=u(Ae,{tmpl:Ea,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),$a=k`<code${3}>${"t1"}</code>`,Ia=k`<code${3}>${"t1"}</code>`,Aa=k`<span${3}>${"t1"}</span>`;function ee(a,e,s,t){const{k:r,d:n,sp:o,st:i,fr:d,t:l,c,i:h}=a;return h(e.segments,function(y){return y.href?d(0,[c("fandry-link",v,{props:{href:y.href},key:r(1,y.key)},[y.code?d(2,[i($a,4,[o(1,null,n(y.text))])],0):d(2,[l(n(y.text))],0)])],0):y.code?d(0,[i(Ia,r(6,y.key),[o(1,null,n(y.text))])],0):d(0,[i(Aa,r(8,y.key),[o(1,null,n(y.text))])],0)})}var Da=b(ee);ee.renderMode="light",ee.stylesheets=[],ee.stylesheetToken="lwc-dbe5maib8n",ee.legacyStylesheetToken="fandryui-docText_docText",g(ee);const La=["breadcrumb","breadcrumb-item","card","divider","pagination","sidebar","sidebar-item","heading","icon","label","text","button","checkbox","combobox","input","link","radio","radio-group","select","switch","textarea","alert","badge","progress","skeleton","spinner","loading-overlay","toast","toast-viewport","tooltip","avatar","command","dialog","menu","menu-item","popover","table","lookup"];function Na(a){return`/components/${a}/`}function Ra(a){const e=a.replace(/^fandry-/,"");return a.startsWith("fandry-")&&La.includes(e)?Na(e):""}function Fa(a="",e){const s=a.split("`");s.length%2==0&&s.splice(-2,2,`${s[s.length-2]}\`${s[s.length-1]}`);const t=s.map((r,n)=>({key:String(n),text:r,code:n%2==1})).filter(r=>r.text);return e?Oa(t,e):t}function Oa(a,{current:e=""}){const s=new Set(e?[`fandry-${e}`]:[]),t=r=>{const n=s.has(r)?"":Ra(r);return n&&s.add(r),n};return a.flatMap(r=>{if(r.code){const o=t(r.text);return o?[{...r,href:o}]:[r]}const n=r.text.split(/(fandry-[a-z]+(?:-[a-z]+)*)/);return n.length===1?[r]:n.map((o,i)=>{const d=i%2==1?t(o):"",l=`${r.key}.${i}`;return d?{key:l,text:o,code:!1,href:d}:{key:l,text:o,code:!1}}).filter(o=>o.text)})}class ce extends M{constructor(...e){super(...e);this.text="",this.links=!1,this.current=""}get segments(){return Fa(this.text,this.links?{current:this.current}:void 0)}}ce.renderMode="light",w(ce,{publicProps:{text:{config:0},links:{config:0},current:{config:0}}});const Ba=u(ce,{tmpl:Da,sel:"fandryui-doc-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function qa(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var De=[qa];const Va={key:1},ja=[];function L(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[n("",Va,ja,s)])]}var Ha=b(L);L.slots=[""],L.stylesheets=[],L.stylesheetToken="lwc-4f041bjpr1h",L.legacyStylesheetToken="fandry-text_text",De&&L.stylesheets.push.apply(L.stylesheets,De),g(L);class Le extends _{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}get basePart(){return P("base",{[this.variant||"default"]:!0})}}w(Le,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const f=u(Le,{tmpl:Ha,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Ga={classMap:{intro:!0},key:0},Ka={classMap:{container:!0},key:1},Ua={props:{level:"1"},key:2},Wa={classMap:{subhead:!0},props:{variant:"muted"},key:3};function U(a,e,s,t){const{d:r,t:n,c:o,h:i}=a;return[i("section",Ga,[i("div",Ka,[o("fandry-heading",m,Ua,[n(r(e.pageTitle))]),o("fandry-text",f,Wa,[o("fandryui-doc-text",Ba,{props:{links:!0,text:e.subtitle},key:4})])])])]}var Ya=b(U);U.stylesheets=[],U.stylesheetToken="lwc-k2m23m8iid",U.legacyStylesheetToken="fandryui-pageIntro_pageIntro",$e&&U.stylesheets.push.apply(U.stylesheets,$e),g(U);class Ne extends M{constructor(...e){super(...e);this.pageTitle="",this.subtitle=""}}w(Ne,{publicProps:{pageTitle:{config:0},subtitle:{config:0}}});const Qa=u(Ne,{tmpl:Ya,sel:"fandryui-page-intro",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Xa(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+" {padding: var(--fd-space-6) 0 calc(var(--fd-space-6) * 2);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.gallery"+t+" {display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: var(--fd-space-6);}@media (max-width: 48rem) {.gallery"+t+" {grid-template-columns: 1fr;}}.pattern"+t+" {display: flex;flex-direction: column;align-items: center;text-align: center;gap: var(--fd-space-1);}.pattern-head"+t+" {width: 100%;max-width: 24rem;display: flex;align-items: center;justify-content: space-between;}.pattern"+t+" > fandry-heading"+t+" {margin-top: var(--fd-space-1);}.pattern"+t+" > fandry-text"+t+" {max-width: 24rem;}.demo"+t+" {width: 100%;max-width: 24rem;margin-top: var(--fd-space-3);}.demo"+t+" > *"+t+" + *"+t+" {margin-top: var(--fd-space-3);display: block;}.price-heading"+t+" {margin-top: var(--fd-space-2) !important;}.price"+t+" {display: flex;align-items: baseline;gap: var(--fd-space-1);}.amount"+t+" {font-size: var(--fd-font-size-2xl, 1.875rem);font-weight: var(--fd-font-weight-bold);}.period"+t+" {color: var(--fd-color-muted);font-size: var(--fd-font-size-sm);}.check-list"+t+" {list-style: none;margin: 0;padding: 0;display: flex;flex-direction: column;gap: var(--fd-space-2);}.check-list"+t+" li"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);color: hsl(142 71% 30%);}.check-list"+t+" li"+t+" fandry-text"+t+" {color: var(--fd-color-text);}.form-row"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-3);}.setting-row"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);}.setting-copy"+t+" {display: flex;flex-direction: column;gap: 2px;}.empty-state"+t+" {text-align: center;}.empty-state"+t+" > *"+t+" + *"+t+" {margin-left: auto;margin-right: auto;}.empty-icon"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 3rem;height: 3rem;border-radius: var(--fd-radius-lg);background: hsl(var(--site-primary) / 0.1);color: hsl(var(--site-primary-dark));}.notif-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-2);}.team-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-3);}.team-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);}.team-copy"+t+" {flex: 1;display: flex;flex-direction: column;gap: 2px;}.file-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-3);}.file-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);}.file-copy"+t+" {flex: 1;display: flex;flex-direction: column;gap: 2px;}.checklist"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-2);}.search-results"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-1);}.search-result"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-3);padding: var(--fd-space-2) 0;border-bottom: 1px solid var(--fd-color-border);}.search-result:last-child"+t+" {border-bottom: none;}.crumb-nav"+t+" {width: 100%;max-width: 24rem;margin-top: var(--fd-space-3);}.kpi-row"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-3);}.kpi"+t+" {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-1);}"}var Re=[Xa];function Za(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {--_fd-badge-color: var(--_fd-primary);}.badge--success"+t+" {--_fd-badge-color: var(--_fd-success);}.badge--warning"+t+" {--_fd-badge-color: var(--_fd-warning);}.badge--danger"+t+" {--_fd-badge-color: var(--_fd-danger);}.badge--primary"+t+",.badge--success"+t+",.badge--warning"+t+",.badge--danger"+t+" {background: color-mix(in srgb, hsl(var(--_fd-badge-color)) var(--_fd-surface-tint), hsl(var(--_fd-bg)));border-color: color-mix(in srgb, hsl(var(--_fd-badge-color)) min(var(--_fd-surface-tint) * 3, 100%), hsl(var(--_fd-bg)));color: color-mix(in srgb, hsl(var(--_fd-badge-color)) max(100% - var(--_fd-surface-tint) * 3.5, 0%), hsl(var(--_fd-text)));}"}var Fe=[Za];const Ja={key:1},er=[];function N(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("span",{className:r(e.classes),attrs:{part:e.basePart},key:0},[n("",Ja,er,s)])]}var tr=b(N);N.slots=[""],N.stylesheets=[],N.stylesheetToken="lwc-7jnsj78lpql",N.legacyStylesheetToken="fandry-badge_badge",Fe&&N.stylesheets.push.apply(N.stylesheets,Fe),g(N);class Oe extends _{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}get basePart(){return P("base",{[this.variant||"default"]:!0})}}w(Oe,{publicProps:{variant:{config:0}}});const S=u(Oe,{tmpl:tr,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ar(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var Be=[ar];const rr={classMap:{card:!0},attrs:{part:"base"},key:0},nr={key:1},sr=[];function R(a,e,s,t){const{s:r,h:n}=a;return[n("div",rr,[r("",nr,sr,s)])]}var or=b(R);R.slots=[""],R.stylesheets=[],R.stylesheetToken="lwc-66cpcf0iuus",R.legacyStylesheetToken="fandry-card_card",Be&&R.stylesheets.push.apply(R.stylesheets,Be),g(R);class ir extends _{}const z=u(ir,{tmpl:or,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function dr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {display: inline-flex;align-items: center;align-self: flex-start;gap: var(--_fd-space-1);font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;--_fd-label-asterisk: none;}.input"+t+" {flex: 1;min-width: 0;border: none;outline: none;font: inherit;background: transparent;}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.control"+t+` {display: flex;align-items: center;border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-1) var(--_fd-space-2);background: hsl(var(--_fd-bg));transition: border-color var(--_fd-duration-fast) var(--_fd-ease-standard),\r
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.control:focus-within`+t+" {outline: var(--_fd-ring-width) solid transparent;border-color: hsl(var(--_fd-border-focus));box-shadow: var(--_fd-ring-field);}.input:focus"+t+" {outline: none;}.control--sm"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-xs);}.control--md"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-md);}.control--lg"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3);font-size: var(--_fd-font-size-md);}.error-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-danger));}.error-text--empty"+t+" {position: absolute;}.control[part~='invalid']"+t+" {border-color: hsl(var(--_fd-danger));}"}var qe=[dr];const lr=k`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,cr={classMap:{"form-control":!0},attrs:{part:"base"},key:0},pr={label:!0},fr={name:"label"},hr={classMap:{prefix:!0},attrs:{part:"prefix"},key:6},ur={attrs:{name:"prefix"},key:7},Ve=[],mr={input:!0},yr={classMap:{suffix:!0},attrs:{part:"suffix"},key:9},br={attrs:{name:"suffix"},key:10},gr={name:"error-text"},vr={"help-text":!0},kr={name:"help-text"};function F(a,e,s,t){const{gid:r,b:n,d:o,t:i,s:d,st:l,h:c,ncls:h}=a,{_m0:y,_m1:C,_m2:H,_m3:p}=t;return[c("div",cr,[c("label",{classMap:pr,attrs:{part:"label",for:r("input"),hidden:e.labelHidden?"":null},key:1},[d("label",{attrs:fr,key:2,on:y||(t._m0={slotchange:n(e.handleTextSlotChange)})},[i(o(e.label))],s),e.required?l(lr,4):null]),c("div",{className:h(e.controlClasses),attrs:{part:e.controlPart},key:5},[c("span",hr,[d("prefix",ur,Ve,s)]),c("input",{classMap:mr,attrs:{part:"input",id:r("input"),type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":r(e.describedBy),"aria-invalid":e.ariaInvalid},props:{value:e.inputValue,...e.resolvedElementProps},key:8,on:C||(t._m1={input:n(e.handleInput),change:n(e.handleChange),focus:n(e.handleFocus),blur:n(e.handleBlur)})}),c("span",yr,[d("suffix",br,Ve,s)])]),c("div",{className:h(e.errorTextClasses),attrs:{id:r("error-text"),part:"error-text","aria-live":"polite"},key:11},[d("error-text",{attrs:gr,key:12,on:H||(t._m2={slotchange:n(e.handleTextSlotChange)})},[i(o(e.errorText))],s)]),c("div",{classMap:vr,attrs:{id:r("help-text"),part:"help-text",hidden:e.helpTextHidden?"":null},key:13},[d("help-text",{attrs:kr,key:14,on:p||(t._m3={slotchange:n(e.handleTextSlotChange)})},[i(o(e.helpText))],s)])])]}var wr=b(F);F.slots=["error-text","help-text","label","prefix","suffix"],F.stylesheets=[],F.stylesheetToken="lwc-24cs3ca29bn",F.legacyStylesheetToken="fandry-input_input",qe&&F.stylesheets.push.apply(F.stylesheets,qe),g(F);function se(a){return a.assignedNodes().some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim())}function _r(a,e){return a||String(e?.ariaInvalid)==="true"}function xr(a,e){return[a?"error-text":"",e?"help-text":""].filter(Boolean).join(" ")||null}function Sr(a){const{ariaInvalid:e,...s}=a;return s}const zr=["id","type","name","value","disabled","readonly","required","class","ariaDescribedBy","ariaDescribedByElements","oninput","onchange","onfocus","onblur"];class je extends _{constructor(...e){super(...e);this.label="",this.helpText="",this.errorText="",this.value="",this.type="text",this.name="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.size="md",this.elementProps={},this.hasFocus=!1,this.textSlots={}}get resolvedElementProps(){return Sr(E(this,this.elementProps,zr,"fandry-input"))}get hasLabel(){return!!this.label||!!this.textSlots.label}get hasHelpText(){return!!this.helpText||!!this.textSlots["help-text"]}get hasErrorText(){return!!this.errorText||!!this.textSlots["error-text"]}get errorTextClasses(){return this.hasErrorText?"error-text":"error-text error-text--empty"}get invalid(){return _r(this.hasErrorText,this.elementProps)}get ariaInvalid(){return this.invalid?"true":null}get inputValue(){return this.value??""}get describedBy(){return xr(this.hasErrorText,this.hasHelpText)}get controlClasses(){return["control",`control--${this.size}`].join(" ")}focus(){this.template.querySelector("input")?.focus()}handleInput(e){e.stopPropagation();const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}handleFocus(){this.hasFocus=!0}handleBlur(){this.hasFocus=!1}get controlPart(){return P("control",{disabled:this.disabled,invalid:this.invalid})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:se(s)}}get labelHidden(){return!this.hasLabel}get helpTextHidden(){return!this.hasHelpText}}w(je,{publicProps:{label:{config:0},helpText:{config:0},errorText:{config:0},value:{config:0},type:{config:0},name:{config:0},placeholder:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},size:{config:0},elementProps:{config:0}},publicMethods:["focus"],track:{hasFocus:1},fields:["textSlots"]});const pe=u(je,{tmpl:wr,sel:"fandry-input",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Pr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.box"+t+` {width: var(--_fd-size-sm);height: var(--_fd-size-sm);flex: 0 0 var(--_fd-size-sm);border-radius: var(--_fd-radius-sm);border: var(--_fd-border-width) solid hsl(var(--_fd-border));background: hsl(var(--_fd-bg));display: inline-flex;align-items: center;justify-content: center;transition: border-color var(--_fd-duration-fast) ease,
 background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.control`+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.check"+t+` {width: calc(var(--_fd-size-sm) * 0.625);height: calc(var(--_fd-size-sm) * 0.375);border-left: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));border-bottom: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));transform: translateY(-1px) rotate(-45deg) scale(0.9);opacity: 0;transition: opacity var(--_fd-duration-fast) ease,
 transform var(--_fd-duration-fast) ease;}.input:checked`+t+" + .box"+t+" {background: hsl(var(--_fd-primary));border-color: hsl(var(--_fd-primary));}.input:checked"+t+" + .box"+t+" .check"+t+" {opacity: 1;transform: translateY(-1px) rotate(-45deg) scale(1);}.control:focus-within"+t+" .box"+t+" {box-shadow: var(--_fd-ring-control);}.input:disabled"+t+" + .box"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}"}var He=[Pr];const Cr=k`<span class="box${0}"${"a0:part"} aria-hidden="true"${2}><span class="check${0}" part="indicator"${2}></span></span>`,Mr={control:!0},Tr={input:!0},Er={label:!0};function O(a,e,s,t){const{b:r,h:n,sp:o,st:i,d,t:l,s:c}=a,{_m0:h,_m1:y}=t;return[n("label",{classMap:Mr,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:Tr,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,"aria-checked":e.ariaChecked,"aria-label":e.ariaLabel},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:h||(t._m0={change:r(e.handleChange)})}),i(Cr,3,[o(0,{attrs:{part:e.controlPart}},null)]),n("span",{classMap:Er,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[c("",{key:5,on:y||(t._m1={slotchange:r(e.handleTextSlotChange)})},[l(d(e.label))],s)])])]}var $r=b(O);O.slots=[""],O.stylesheets=[],O.stylesheetToken="lwc-375ftk9u572",O.legacyStylesheetToken="fandry-checkbox_checkbox",He&&O.stylesheets.push.apply(O.stylesheets,He),g(O);const Ir=["type","name","value","checked","disabled","class","onchange","ariaChecked","ariaLabel"];class Ge extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.ariaLabel="",this.elementProps={tabIndex:0},this.indeterminate=!1,this.textSlots={}}get resolvedElementProps(){return E(this,this.elementProps,Ir,"fandry-checkbox")}get ariaChecked(){return this.indeterminate?"mixed":this.checked?"true":"false"}renderedCallback(){const e=this.template.querySelector(".input");e&&(e.indeterminate=this.indeterminate)}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const s=e.target;this.checked=s.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return P("control",{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:se(s)}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}w(Ge,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},ariaLabel:{config:0},elementProps:{config:0},indeterminate:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const ae=u(Ge,{tmpl:$r,sel:"fandry-checkbox",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ar(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.control"+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.track"+t+` {width: var(--_fd-switch-width);height: calc(var(--_fd-size-sm) + 2 * var(--_fd-switch-padding));flex: 0 0 var(--_fd-switch-width);border-radius: var(--_fd-radius-full);background: hsl(var(--_fd-border));display: inline-flex;align-items: center;padding: var(--_fd-switch-padding);transition: background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.thumb`+t+" {width: var(--_fd-size-sm);height: var(--_fd-size-sm);border-radius: 50%;background: hsl(var(--_fd-bg));transform: translateX(0);transition: transform var(--_fd-duration-fast) ease;}.input:checked"+t+" + .track"+t+" {background: hsl(var(--_fd-primary));}.input:checked"+t+" + .track"+t+" .thumb"+t+" {transform: translateX(calc(var(--_fd-switch-width) - var(--_fd-size-sm) - 2 * var(--_fd-switch-padding)));}.control:focus-within"+t+" .track"+t+" {box-shadow: var(--_fd-ring-control);}.input:disabled"+t+" + .track"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;}"}var Ke=[Ar];const Dr=k`<span class="track${0}"${"a0:part"} aria-hidden="true"${2}><span class="thumb${0}" part="indicator"${2}></span></span>`,Lr={control:!0},Nr={input:!0},Rr={label:!0};function B(a,e,s,t){const{b:r,h:n,sp:o,st:i,d,t:l,s:c}=a,{_m0:h,_m1:y}=t;return[n("label",{classMap:Lr,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:Nr,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,role:"switch","aria-checked":e.ariaChecked},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:h||(t._m0={change:r(e.handleChange)})}),i(Dr,3,[o(0,{attrs:{part:e.controlPart}},null)]),n("span",{classMap:Rr,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[c("",{key:5,on:y||(t._m1={slotchange:r(e.handleTextSlotChange)})},[l(d(e.label))],s)])])]}var Fr=b(B);B.slots=[""],B.stylesheets=[],B.stylesheetToken="lwc-2gg3sokj2de",B.legacyStylesheetToken="fandry-switch_switch",Ke&&B.stylesheets.push.apply(B.stylesheets,Ke),g(B);const Or=["type","name","value","checked","disabled","class","role","onchange","ariaChecked"];class Ue extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.elementProps={tabIndex:0},this.textSlots={}}get resolvedElementProps(){return E(this,this.elementProps,Or,"fandry-switch")}get ariaChecked(){return this.checked?"true":"false"}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const s=e.target;this.checked=s.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return P("control",{checked:this.checked,disabled:this.disabled})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:se(s)}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}w(Ue,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},elementProps:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const fe=u(Ue,{tmpl:Fr,sel:"fandry-switch",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Br(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;align-self: stretch;}.divider"+t+" {background: hsl(var(--_fd-border));border: none;}.divider--horizontal"+t+" {width: 100%;height: var(--_fd-border-width);}.divider--vertical"+t+" {width: var(--_fd-border-width);height: 100%;}"}var We=[Br];const qr=k`<div${"c0"} part="base" role="separator"${"a0:aria-orientation"}${2}></div>`;function W(a,e,s,t){const{ncls:r,sp:n,st:o}=a;return[o(qr,1,[n(0,{className:r(e.classes),attrs:{"aria-orientation":e.orientation}},null)])]}var Vr=b(W);W.stylesheets=[],W.stylesheetToken="lwc-4rg533bd481",W.legacyStylesheetToken="fandry-divider_divider",We&&W.stylesheets.push.apply(W.stylesheets,We),g(W);class Ye extends _{constructor(...e){super(...e);this.orientation="horizontal"}get classes(){return["divider",`divider--${this.orientation}`].join(" ")}}w(Ye,{publicProps:{orientation:{config:0}}});const Qe=u(Ye,{tmpl:Vr,sel:"fandry-divider",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function jr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.alert"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);padding: var(--_fd-space-3);border-radius: var(--_fd-radius-md);border-left: var(--_fd-border-width-lg) solid hsl(var(--_fd-info));background: color-mix(in srgb, hsl(var(--_fd-info)) var(--_fd-surface-tint), transparent);font-size: var(--_fd-font-size-sm);}.alert--success"+t+" {border-left-color: hsl(var(--_fd-success));background: color-mix(in srgb, hsl(var(--_fd-success)) var(--_fd-surface-tint), transparent);}.alert--warning"+t+" {border-left-color: hsl(var(--_fd-warning));background: color-mix(in srgb, hsl(var(--_fd-warning)) var(--_fd-surface-tint), transparent);}.alert--danger"+t+" {border-left-color: hsl(var(--_fd-danger));background: color-mix(in srgb, hsl(var(--_fd-danger)) var(--_fd-surface-tint), transparent);}.title"+t+" {margin: 0;font-weight: var(--_fd-font-weight-semibold);color: hsl(var(--_fd-text));}.body"+t+" {color: hsl(var(--_fd-text));}"}var Xe=[jr];const Hr={title:!0},Gr={name:"title"},Kr={classMap:{body:!0},attrs:{part:"body"},key:3},Ur={key:4},Wr=[];function q(a,e,s,t){const{ncls:r,b:n,d:o,t:i,s:d,h:l}=a,{_m0:c}=t;return[l("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[l("p",{classMap:Hr,attrs:{part:"title",hidden:e.titleHidden?"":null},key:1},[d("title",{attrs:Gr,key:2,on:c||(t._m0={slotchange:n(e.handleTextSlotChange)})},[i(o(e.title))],s)]),l("div",Kr,[d("",Ur,Wr,s)])])]}var Yr=b(q);q.slots=["","title"],q.stylesheets=[],q.stylesheetToken="lwc-1j963p9v2mf",q.legacyStylesheetToken="fandry-alert_alert",Xe&&q.stylesheets.push.apply(q.stylesheets,Xe),g(q);class Ze extends _{constructor(...e){super(...e);this.variant="info",this.title="",this.textSlots={}}get classes(){return["alert",`alert--${this.variant}`].join(" ")}get hasTitle(){return!!this.title||!!this.textSlots.title}get role(){return this.variant==="warning"||this.variant==="danger"?"alert":"status"}get basePart(){return P("base",{[this.variant||"info"]:!0})}handleTextSlotChange(e){const s=e.target;this.textSlots={...this.textSlots,[s.name||"default"]:se(s)}}get titleHidden(){return!this.hasTitle}}w(Ze,{publicProps:{variant:{config:0},title:{config:0}},fields:["textSlots"]});const he=u(Ze,{tmpl:Yr,sel:"fandry-alert",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Qr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.avatar"+t+" {display: inline-flex;align-items: center;justify-content: center;overflow: hidden;flex-shrink: 0;border-radius: 50%;background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text-muted));font-weight: var(--_fd-font-weight-semibold);text-transform: uppercase;}.avatar--sm"+t+" {width: var(--_fd-avatar-size-sm);height: var(--_fd-avatar-size-sm);font-size: calc(var(--_fd-avatar-size-sm) * 0.4);}.avatar--md"+t+" {width: var(--_fd-avatar-size-md);height: var(--_fd-avatar-size-md);font-size: calc(var(--_fd-avatar-size-md) * 0.4);}.avatar--lg"+t+" {width: var(--_fd-avatar-size-lg);height: var(--_fd-avatar-size-lg);font-size: calc(var(--_fd-avatar-size-lg) * 0.4);}.image"+t+" {width: 100%;height: 100%;object-fit: cover;}.initials"+t+" {line-height: 1;}"}var Je=[Qr];const Xr=k`<span class="initials${0}" part="initials"${2}>${"t1"}</span>`,Zr={part:"base"},Jr={image:!0};function Y(a,e,s,t){const{ncls:r,b:n,h:o,d:i,sp:d,st:l}=a,{_m0:c}=t;return[o("span",{className:r(e.classes),attrs:Zr,key:0},[e.showImage?o("img",{classMap:Jr,attrs:{part:"image",src:e.src,alt:e.alt},props:{...e.resolvedElementProps},key:1,on:c||(t._m0={error:n(e.handleImageError)})}):null,e.showInitials?l(Xr,3,[d(1,null,i(e.initials))]):null])]}var en=b(Y);Y.stylesheets=[],Y.stylesheetToken="lwc-3sp4g3rf1ki",Y.legacyStylesheetToken="fandry-avatar_avatar",Je&&Y.stylesheets.push.apply(Y.stylesheets,Je),g(Y);const tn=["src","alt","class","onerror"];class et extends _{constructor(...e){super(...e);this.alt="",this.initials="",this.size="md",this.elementProps={},this.imageFailed=!1,this._src=""}get resolvedElementProps(){return E(this,this.elementProps,tn,"fandry-avatar")}get src(){return this._src}set src(e){this._src=e,this.imageFailed=!1}get classes(){return["avatar",`avatar--${this.size}`].join(" ")}get showImage(){return!!this.src&&!this.imageFailed}get showInitials(){return!this.showImage&&!!this.initials}handleImageError(){this.imageFailed=!0}}w(et,{publicProps:{alt:{config:0},initials:{config:0},size:{config:0},elementProps:{config:0},src:{config:3}},track:{imageFailed:1},fields:["_src"]});const an=u(et,{tmpl:en,sel:"fandry-avatar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function rn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.item"+t+" {display: flex;align-items: center;gap: var(--_fd-space-1);}.separator"+t+" {color: hsl(var(--_fd-text-muted));}"+(e?":host(:first-child) .separator":r+":first-child .separator")+t+" {display: none;}.link"+t+" {color: hsl(var(--_fd-text-muted));font-size: var(--_fd-font-size-sm);text-decoration: none;}.link[href]:hover"+t+" {color: hsl(var(--_fd-text));text-decoration: underline;}.link:not([href])"+t+" {color: hsl(var(--_fd-text));font-weight: var(--_fd-font-weight-medium);cursor: default;}.tab-stop"+t+" {border-radius: var(--_fd-radius-sm);}"}var tt=[rn];const nn=k`<span class="separator${0}" part="separator" aria-hidden="true"${2}>/</span>`,sn={classMap:{item:!0},attrs:{part:"base"},key:0},on={"tab-stop":!0},dn={link:!0},ln={key:5},cn=[];function V(a,e,s,t){const{st:r,ti:n,gid:o,b:i,fid:d,s:l,h:c}=a,{_m0:h}=t;return[c("li",sn,[r(nn,2),c("span",{classMap:on,attrs:{role:e.linkRole,tabindex:n(e.tabStopIndex),"aria-labelledby":o(e.labelledBy)},key:3,on:h||(t._m0={keydown:i(e.handleKeydown),click:i(e.handleClick)})},[c("a",{classMap:dn,attrs:{id:o("anchor"),part:e.linkPart,href:d(e.computedHref),"aria-current":e.ariaCurrent,"aria-hidden":e.anchorAriaHidden,tabindex:"-1"},props:{...e.resolvedElementProps},key:4},[l("",ln,cn,s)])])])]}var pn=b(V);V.slots=[""],V.stylesheets=[],V.stylesheetToken="lwc-1hgi77eb8ab",V.legacyStylesheetToken="fandry-breadcrumbItem_breadcrumbItem",tt&&V.stylesheets.push.apply(V.stylesheets,tt),g(V);const fn=["href","class","ariaCurrent"];class at extends _{constructor(...e){super(...e);this.href="",this.current=!1,this.elementProps={}}get computedHref(){return this.href&&!this.current?this.href:void 0}get ariaCurrent(){return this.current?"page":void 0}get isLink(){return Boolean(this.computedHref)}get linkRole(){return this.isLink?"link":void 0}get labelledBy(){return this.isLink?"anchor":void 0}get anchorAriaHidden(){return this.isLink?"true":void 0}get tabStopIndex(){return ie(this.elementProps,this.isLink)}handleKeydown(e){oe(e,this.template)}handleClick(e){ge(e,this.template)}get resolvedElementProps(){return de(E(this,this.elementProps,fn,"fandry-breadcrumb-item"))}get linkPart(){return P("link",{current:this.current})}}w(at,{publicProps:{href:{config:0},current:{config:0},elementProps:{config:0}}});const hn=u(at,{tmpl:pn,sel:"fandry-breadcrumb-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function un(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.list"+t+" {display: flex;flex-wrap: wrap;align-items: center;gap: var(--_fd-space-1);margin: 0;padding: 0;list-style: none;}"}var rt=[un];const mn={classMap:{list:!0},attrs:{part:"list"},key:1},yn={key:2},bn=[];function j(a,e,s,t){const{s:r,h:n}=a;return[n("nav",{attrs:{part:"base","aria-label":e.navLabel},key:0},[n("ol",mn,[r("",yn,bn,s)])])]}var gn=b(j);j.slots=[""],j.stylesheets=[],j.stylesheetToken="lwc-ft9ar9t9td",j.legacyStylesheetToken="fandry-breadcrumb_breadcrumb",rt&&j.stylesheets.push.apply(j.stylesheets,rt),g(j);const vn={label:"Breadcrumb"};class nt extends _{constructor(...e){super(...e);this.messages={},this.ariaLabel=""}get navLabel(){return this.ariaLabel||{...vn,...this.messages}.label}}w(nt,{publicProps:{messages:{config:0},ariaLabel:{config:0}}});const kn=u(nt,{tmpl:gn,sel:"fandry-breadcrumb",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),wn=k`<div class="price${0}"${2}><span class="amount${0}"${2}>$29</span><span class="period${0}"${2}>/mo</span></div>`,_n=k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M20 6L9 17l-5-5"${3}/></svg>`,xn=k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"${3}/></svg>`,Sn=k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"${3}/></svg>`,zn={classMap:{section:!0},key:0},Pn={classMap:{container:!0},key:1},Cn={classMap:{gallery:!0},key:2},Mn={classMap:{pattern:!0},key:3},Tn={classMap:{"pattern-head":!0},key:4},En={key:5},$n={props:{level:"3"},key:7},In={props:{variant:"muted",size:"sm"},key:8},An={classMap:{demo:!0},key:9},Dn={props:{variant:"primary"},key:10},Ln={classMap:{"price-heading":!0},props:{level:"4"},key:11},Nn={classMap:{"check-list":!0},key:14},Rn={props:{size:"sm"},key:16},Fn={props:{as:"span",size:"sm"},key:19},On={key:20},Bn={classMap:{pattern:!0},key:21},qn={classMap:{"pattern-head":!0},key:22},Vn={key:23},jn={props:{level:"3"},key:25},Hn={props:{variant:"muted",size:"sm"},key:26},Gn={classMap:{demo:!0},key:27},Kn={props:{level:"4"},key:28},Un={props:{label:"Email",type:"email",placeholder:"you@company.com"},key:29},Wn={props:{label:"Password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"},key:30},Yn={classMap:{"form-row":!0},key:31},Qn={props:{label:"Remember me"},key:32},Xn={variant:"muted",href:"#"},Zn={key:34},Jn={classMap:{pattern:!0},key:35},es={classMap:{"pattern-head":!0},key:36},ts={key:37},as={props:{level:"3"},key:39},rs={props:{variant:"muted",size:"sm"},key:40},ns={classMap:{demo:!0},key:41},ss={props:{level:"4"},key:42},os={classMap:{"setting-row":!0},key:43},is={classMap:{"setting-copy":!0},key:44},ds={props:{as:"span"},key:45},ls={props:{as:"span",size:"xs",variant:"muted"},key:46},cs={props:{checked:!0},key:47},ps={key:48},fs={classMap:{"setting-row":!0},key:49},hs={classMap:{"setting-copy":!0},key:50},us={props:{as:"span"},key:51},ms={props:{as:"span",size:"xs",variant:"muted"},key:52},ys={key:53},bs={key:54},gs={classMap:{"setting-row":!0},key:55},vs={classMap:{"setting-copy":!0},key:56},ks={props:{as:"span"},key:57},ws={props:{as:"span",size:"xs",variant:"muted"},key:58},_s={props:{checked:!0},key:59},xs={classMap:{pattern:!0},key:60},Ss={classMap:{"pattern-head":!0},key:61},zs={key:62},Ps={props:{level:"3"},key:64},Cs={props:{variant:"muted",size:"sm"},key:65},Ms={classMap:{demo:!0,"empty-state":!0},key:66},Ts={classMap:{"empty-icon":!0},key:67},Es={props:{size:"lg"},key:68},$s={props:{level:"4"},key:71},Is={props:{variant:"muted",size:"sm"},key:72},As={props:{variant:"secondary"},key:73},Ds={classMap:{pattern:!0},key:74},Ls={classMap:{"pattern-head":!0},key:75},Ns={key:76},Rs={props:{level:"3"},key:78},Fs={props:{variant:"muted",size:"sm"},key:79},Os={classMap:{demo:!0},key:80},Bs={props:{level:"4"},key:81},qs={classMap:{"notif-list":!0},key:82},Vs={props:{variant:"info"},key:83},js={props:{variant:"success",title:"Payment received"},key:84},Hs={props:{variant:"warning",title:"Low stock"},key:85},Gs={classMap:{pattern:!0},key:86},Ks={classMap:{"pattern-head":!0},key:87},Us={key:88},Ws={props:{level:"3"},key:90},Ys={props:{variant:"muted",size:"sm"},key:91},Qs={classMap:{demo:!0},key:92},Xs={props:{level:"4"},key:93},Zs={classMap:{"team-list":!0},key:94},Js={"team-row":!0},eo={classMap:{"team-copy":!0},key:97},to={props:{as:"span",size:"sm"},key:98},ao={props:{as:"span",size:"xs",variant:"muted"},key:99},ro={classMap:{pattern:!0},key:101},no={classMap:{"pattern-head":!0},key:102},so={key:103},oo={props:{level:"3"},key:105},io={props:{variant:"muted",size:"sm"},key:106},lo={classMap:{demo:!0},key:107},co={props:{level:"4"},key:108},po={classMap:{"file-list":!0},key:109},fo={"file-row":!0},ho={props:{size:"md"},key:111},uo={classMap:{"file-copy":!0},key:114},mo={props:{as:"span",size:"sm"},key:115},yo={props:{as:"span",size:"xs",variant:"muted"},key:116},bo={variant:"ghost",size:"sm"},go={classMap:{pattern:!0},key:118},vo={classMap:{"pattern-head":!0},key:119},ko={key:120},wo={props:{level:"3"},key:122},_o={props:{variant:"muted",size:"sm"},key:123},xo={classMap:{demo:!0},key:124},So={props:{level:"4"},key:125},zo={props:{variant:"muted",size:"sm"},key:126},Po={classMap:{checklist:!0},key:127},Co={props:{label:"Create your account",checked:!0,disabled:!0},key:128},Mo={props:{label:"Verify your email",checked:!0,disabled:!0},key:129},To={props:{label:"Invite your team"},key:130},Eo={props:{label:"Place your first order"},key:131},$o={classMap:{pattern:!0},key:132},Io={classMap:{"pattern-head":!0},key:133},Ao={key:134},Do={props:{level:"3"},key:136},Lo={props:{variant:"muted",size:"sm"},key:137},No={classMap:{demo:!0},key:138},Ro={props:{label:"Quick search",placeholder:"Search orders, products, people\u2026"},key:139},Fo={slotAssignment:"prefix",key:140},Oo={classMap:{"search-results":!0},key:141},Bo={"search-result":!0},qo={props:{as:"span",size:"sm"},key:143},Vo={key:144},jo={classMap:{pattern:!0},key:145},Ho={classMap:{"pattern-head":!0},key:146},Go={key:147},Ko={props:{level:"3"},key:149},Uo={props:{variant:"muted",size:"sm"},key:150},Wo={classMap:{demo:!0},key:151},Yo={props:{level:"4"},key:152},Qo={classMap:{"kpi-row":!0},key:153},Xo={kpi:!0},Zo={props:{as:"span",size:"xs",variant:"muted"},key:155},Jo={props:{level:"4"},key:156},ei={classMap:{pattern:!0},key:158},ti={classMap:{"pattern-head":!0},key:159},ai={key:160},ri={props:{level:"3"},key:162},ni={props:{variant:"muted",size:"sm"},key:163},si={classMap:{"crumb-nav":!0},props:{ariaLabel:"Folder path"},key:164},oi={classMap:{demo:!0},key:166},ii={props:{level:"4"},key:167},di={props:{variant:"muted",size:"sm"},key:168};function Q(a,e,s,t){const{t:r,c:n,h:o,st:i,k:d,d:l,i:c,b:h}=a,{_m0:y,_m1:C,_m2:H}=t;return[o("section",zn,[o("div",Pn,[o("div",Cn,[o("div",Mn,[o("div",Tn,[n("fandry-badge",S,En,[r("01")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:6},[r("View source")])]),n("fandry-heading",m,$n,[r("Pricing card")]),n("fandry-text",f,In,[r("A plan card with a badge, feature list, and single CTA.")]),n("fandry-card",z,An,[n("fandry-badge",S,Dn,[r("Popular")]),n("fandry-heading",m,Ln,[r("Pro")]),i(wn,13),o("ul",Nn,c(e.pricingFeatures,function(p){return o("li",{key:d(15,p)},[n("fandry-icon",re,Rn,[i(_n,18)]),n("fandry-text",f,Fn,[r(l(p))])])})),n("fandry-button",G,On,[r("Choose Pro")])])]),o("div",Bn,[o("div",qn,[n("fandry-badge",S,Vn,[r("02")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:24},[r("View source")])]),n("fandry-heading",m,jn,[r("Login form")]),n("fandry-text",f,Hn,[r("Inputs, a checkbox, and a link, wired together.")]),n("fandry-card",z,Gn,[n("fandry-heading",m,Kn,[r("Sign in")]),n("fandry-input",pe,Un),n("fandry-input",pe,Wn),o("div",Yn,[n("fandry-checkbox",ae,Qn),n("fandry-link",v,{props:Xn,key:33,on:y||(t._m0={click:h(e.handleNoopClick)})},[r("Forgot password?")])]),n("fandry-button",G,Zn,[r("Sign in")])])]),o("div",Jn,[o("div",es,[n("fandry-badge",S,ts,[r("03")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:38},[r("View source")])]),n("fandry-heading",m,as,[r("Settings list")]),n("fandry-text",f,rs,[r("Label, description, and a switch, repeated with dividers.")]),n("fandry-card",z,ns,[n("fandry-heading",m,ss,[r("Notifications")]),o("div",os,[o("div",is,[n("fandry-text",f,ds,[r("Email alerts")]),n("fandry-text",f,ls,[r("Get notified when an order ships.")])]),n("fandry-switch",fe,cs)]),n("fandry-divider",Qe,ps),o("div",fs,[o("div",hs,[n("fandry-text",f,us,[r("SMS alerts")]),n("fandry-text",f,ms,[r("Text messages for urgent updates.")])]),n("fandry-switch",fe,ys)]),n("fandry-divider",Qe,bs),o("div",gs,[o("div",vs,[n("fandry-text",f,ks,[r("Weekly digest")]),n("fandry-text",f,ws,[r("A Monday summary of account activity.")])]),n("fandry-switch",fe,_s)])])]),o("div",xs,[o("div",Ss,[n("fandry-badge",S,zs,[r("04")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:63},[r("View source")])]),n("fandry-heading",m,Ps,[r("Empty state")]),n("fandry-text",f,Cs,[r("Icon, heading, muted copy, and a way forward.")]),n("fandry-card",z,Ms,[o("div",Ts,[n("fandry-icon",re,Es,[i(xn,70)])]),n("fandry-heading",m,$s,[r("No invoices yet")]),n("fandry-text",f,Is,[r("Invoices show up here once you place your first order.")]),n("fandry-button",G,As,[r("Browse Products")])])]),o("div",Ds,[o("div",Ls,[n("fandry-badge",S,Ns,[r("05")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:77},[r("View source")])]),n("fandry-heading",m,Rs,[r("Notification list")]),n("fandry-text",f,Fs,[r("A stack of fandry-alert, each with its own variant.")]),n("fandry-card",z,Os,[n("fandry-heading",m,Bs,[r("Notifications")]),o("div",qs,[n("fandry-alert",he,Vs,[r("New comment on ticket #4821.")]),n("fandry-alert",he,js,[r("Invoice INV-2044 is now paid.")]),n("fandry-alert",he,Hs,[r("Valve Assembly is running low.")])])])]),o("div",Gs,[o("div",Ks,[n("fandry-badge",S,Us,[r("06")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:89},[r("View source")])]),n("fandry-heading",m,Ws,[r("Team list")]),n("fandry-text",f,Ys,[r("Avatar, name, role, and a badge, data-driven with for:each.")]),n("fandry-card",z,Qs,[n("fandry-heading",m,Xs,[r("Team")]),o("div",Zs,c(e.teamMembers,function(p){return o("div",{classMap:Js,key:d(95,p.key)},[n("fandry-avatar",an,{props:{initials:p.initials,size:"sm"},key:96}),o("div",eo,[n("fandry-text",f,to,[r(l(p.name))]),n("fandry-text",f,ao,[r(l(p.role))])]),n("fandry-badge",S,{props:{variant:p.variant},key:100},[r(l(p.badge))])])}))])]),o("div",ro,[o("div",no,[n("fandry-badge",S,so,[r("07")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:104},[r("View source")])]),n("fandry-heading",m,oo,[r("Attachment list")]),n("fandry-text",f,io,[r("File icon, filename, size, and a remove action.")]),n("fandry-card",z,lo,[n("fandry-heading",m,co,[r("Attachments")]),o("div",po,c(e.files,function(p){return o("div",{classMap:fo,key:d(110,p.key)},[n("fandry-icon",re,ho,[i(Sn,113)]),o("div",uo,[n("fandry-text",f,mo,[r(l(p.name))]),n("fandry-text",f,yo,[r(l(p.size))])]),n("fandry-button",G,{props:bo,key:117,on:C||(t._m1={click:h(e.handleNoopClick)})},[r("Remove")])])}))])]),o("div",go,[o("div",vo,[n("fandry-badge",S,ko,[r("08")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:121},[r("View source")])]),n("fandry-heading",m,wo,[r("Onboarding checklist")]),n("fandry-text",f,_o,[r("Completed steps locked, the rest genuinely checkable.")]),n("fandry-card",z,xo,[n("fandry-heading",m,So,[r("Get started")]),n("fandry-text",f,zo,[r("2 of 4 steps complete")]),o("div",Po,[n("fandry-checkbox",ae,Co),n("fandry-checkbox",ae,Mo),n("fandry-checkbox",ae,To),n("fandry-checkbox",ae,Eo)])])]),o("div",$o,[o("div",Io,[n("fandry-badge",S,Ao,[r("09")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:135},[r("View source")])]),n("fandry-heading",m,Do,[r("Search bar")]),n("fandry-text",f,Lo,[r("fandry-input's prefix slot plus a static results list.")]),n("fandry-card",z,No,[n("fandry-input",pe,Ro,[o("span",Fo,[r("\u{1F50D}")])]),o("div",Oo,c(e.searchResults,function(p){return o("div",{classMap:Bo,key:d(142,p.key)},[n("fandry-text",f,qo,[r(l(p.label))]),n("fandry-badge",S,Vo,[r(l(p.badge))])])}))])]),o("div",jo,[o("div",Ho,[n("fandry-badge",S,Go,[r("10")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:148},[r("View source")])]),n("fandry-heading",m,Ko,[r("KPI row")]),n("fandry-text",f,Uo,[r("Three stat tiles with a trend badge each.")]),n("fandry-card",z,Wo,[n("fandry-heading",m,Yo,[r("This month")]),o("div",Qo,c(e.kpis,function(p){return o("div",{classMap:Xo,key:d(154,p.key)},[n("fandry-text",f,Zo,[r(l(p.label))]),n("fandry-heading",m,Jo,[r(l(p.value))]),n("fandry-badge",S,{props:{variant:p.variant},key:157},[r(l(p.change))])])}))])]),o("div",ei,[o("div",ti,[n("fandry-badge",S,ai,[r("11")]),n("fandry-link",v,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:161},[r("View source")])]),n("fandry-heading",m,ri,[r("Breadcrumb navigation")]),n("fandry-text",f,ni,[r("Each crumb swaps the card below \u2014 fandry-breadcrumb driving real state.")]),n("fandry-breadcrumb",kn,si,c(e.crumbItems,function(p){return n("fandry-breadcrumb-item",hn,{attrs:{"data-key":p.key},props:{href:"#",current:p.current},key:d(165,p.key),on:H||(t._m2={click:h(e.handleCrumbClick)})},[r(l(p.label))])})),n("fandry-card",z,oi,[n("fandry-heading",m,ii,[r(l(e.activePage.title))]),n("fandry-text",f,di,[r(l(e.activePage.body))])])])])])])]}var li=b(Q);Q.stylesheets=[],Q.stylesheetToken="lwc-52k25qoua6k",Q.legacyStylesheetToken="fandryui-exampleGallery_exampleGallery",Re&&Q.stylesheets.push.apply(Q.stylesheets,Re),g(Q);class st extends M{constructor(...e){super(...e);this.sourceUrl="https://github.com/rahulgawale/fandryui/blob/main/src/modules/fandryui/exampleGallery/exampleGallery.html",this.pricingFeatures=["Unlimited components","Priority support","Custom theming"],this.teamMembers=[{key:"ada",initials:"AL",name:"Ada Lovelace",role:"Engineer",badge:"Admin",variant:"primary"},{key:"grace",initials:"GH",name:"Grace Hopper",role:"Engineer",badge:"Member",variant:"default"},{key:"alan",initials:"AT",name:"Alan Turing",role:"Researcher",badge:"Member",variant:"default"}],this.files=[{key:"report",name:"quarterly-report.pdf",size:"2.4 MB"},{key:"warranty",name:"warranty-terms.docx",size:"640 KB"}],this.kpis=[{key:"revenue",label:"Revenue",value:"$84,200",change:"+12%",variant:"success"},{key:"customers",label:"New customers",value:"38",change:"+4%",variant:"success"},{key:"churn",label:"Churn",value:"1.2%",change:"+0.3%",variant:"danger"}],this.searchResults=[{key:"order",label:"#10482 \u2014 Industrial Pump",badge:"Order"},{key:"person",label:"Ada Lovelace",badge:"Person"},{key:"product",label:"Filter Kit",badge:"Product"}],this.crumbPages=[{key:"documents",label:"Documents",title:"Documents",body:"Every file synced to your account, organized by project."},{key:"projects",label:"Projects",title:"Projects",body:"One folder per active project across the team."},{key:"redesign",label:"Redesign",title:"Website Redesign",body:"Design files, briefs, and assets for the Q3 site redesign."}],this.activeCrumbKey="redesign"}get crumbItems(){return this.crumbPages.map(e=>({...e,current:e.key===this.activeCrumbKey}))}get activePage(){return this.crumbPages.find(e=>e.key===this.activeCrumbKey)??this.crumbPages[0]}handleNoopClick(e){e.preventDefault()}handleCrumbClick(e){e.preventDefault();const s=e.currentTarget.dataset.key;s&&(this.activeCrumbKey=s)}}w(st,{fields:["sourceUrl","pricingFeatures","teamMembers","files","kpis","searchResults","crumbPages","activeCrumbKey"]});const ci=u(st,{tmpl:li,sel:"fandryui-example-gallery",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function pi(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.cta"+t+" {padding: calc(var(--fd-space-6) * 2) 0;text-align: center;background: radial-gradient(circle at 50% 0%, hsl(var(--site-primary) / 0.08), transparent 60%);border-top: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 34rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);}.cta-row"+t+" {display: flex;gap: var(--fd-space-3);flex-wrap: wrap;justify-content: center;margin-top: var(--fd-space-2);}"}var ot=[Ee,pi];const fi=k`<code${3}>fandry-*</code>`,hi={classMap:{cta:!0},key:0},ui={classMap:{container:!0},key:1},mi={props:{level:"2"},key:2},yi={props:{variant:"muted"},key:3},bi={classMap:{"cta-row":!0},key:6},gi={variant:"default",size:"lg"},vi={variant:"secondary",size:"lg"};function X(a,e,s,t){const{t:r,c:n,st:o,b:i,h:d}=a,{_m0:l,_m1:c}=t;return[d("section",hi,[d("div",ui,[n("fandry-heading",m,mi,[r("Ready to build?")]),n("fandry-text",f,yi,[r("Every pattern above is just "),o(fi,5),r(" primitives, composed. Grab the components and start.")]),d("div",bi,[n("fandry-button",G,{props:gi,key:7,on:l||(t._m0={click:i(e.handleBrowseClick)})},[r("Browse Components")]),n("fandry-button",G,{props:vi,key:8,on:c||(t._m1={click:i(e.handleGithubClick)})},[r("View on GitHub")])])])])]}var ki=b(X);X.stylesheets=[],X.stylesheetToken="lwc-5a15g8bv0bl",X.legacyStylesheetToken="fandryui-ctaBanner_ctaBanner",ot&&X.stylesheets.push.apply(X.stylesheets,ot),g(X);const wi="https://github.com/rahulgawale/fandryui";class _i extends M{handleBrowseClick(){window.location.assign("/components/")}handleGithubClick(){window.open(wi,"_blank","noopener,noreferrer")}}const xi=u(_i,{tmpl:ki,sel:"fandryui-cta-banner",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Si(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;flex-wrap: wrap;gap: var(--fd-space-2) var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {padding: var(--fd-space-4);}}"}var it=[Si];const zi={classMap:{footer:!0},key:0},Pi={classMap:{container:!0},key:1},Ci={props:{as:"span",size:"sm",variant:"muted"},key:2},Mi={classMap:{links:!0},key:3},Ti={props:{href:"/why-fandry/",variant:"muted"},key:4},Ei={props:{href:"/getting-started/",variant:"muted"},key:5},$i={props:{href:"/examples/",variant:"muted"},key:6},Ii={props:{href:"/components/",variant:"muted"},key:7},Ai={props:{href:"/blocks/",variant:"muted"},key:8},Di={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:9};function Z(a,e,s,t){const{d:r,t:n,c:o,h:i}=a;return[i("footer",zi,[i("div",Pi,[o("fandry-text",f,Ci,[n("\xA9 "+r(e.year)+" Fandry UI \xB7 MIT License")]),i("div",Mi,[o("fandry-link",v,Ti,[n("Why Fandry")]),o("fandry-link",v,Ei,[n("Get started")]),o("fandry-link",v,$i,[n("Examples")]),o("fandry-link",v,Ii,[n("Components")]),o("fandry-link",v,Ai,[n("Blocks")]),o("fandry-link",v,Di,[n("GitHub")])])])])]}var Li=b(Z);Z.stylesheets=[],Z.stylesheetToken="lwc-3atbjjo9jl4",Z.legacyStylesheetToken="fandryui-siteFooter_siteFooter",it&&Z.stylesheets.push.apply(Z.stylesheets,it),g(Z);class Ni extends M{get year(){return new Date().getFullYear()}}const Ri=u(Ni,{tmpl:Li,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Fi={key:0},Oi={key:1},Bi={props:{pageTitle:"11 patterns, built from these primitives",subtitle:"Real, interactive UI built entirely from `fandry-*` components, not screenshots. Retheme them with tokens to make them your own."},key:2},qi={key:3},Vi={key:4},ji={key:5};function J(a,e,s,t){const{c:r,h:n}=a;return[r("fandryui-site-header",Sa,Fi),n("main",Oi,[r("fandryui-page-intro",Qa,Bi),r("fandryui-example-gallery",ci,qi),r("fandryui-cta-banner",xi,Vi)]),r("fandryui-site-footer",Ri,ji)]}var Hi=b(J);J.stylesheets=[],J.stylesheetToken="lwc-175l6qtgr6f",J.legacyStylesheetToken="fandryui-examples_examples",ue&&J.stylesheets.push.apply(J.stylesheets,ue),g(J);class Gi extends M{}const Ki=u(Gi,{tmpl:Hi,sel:"fandryui-examples",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{Ki as default};
