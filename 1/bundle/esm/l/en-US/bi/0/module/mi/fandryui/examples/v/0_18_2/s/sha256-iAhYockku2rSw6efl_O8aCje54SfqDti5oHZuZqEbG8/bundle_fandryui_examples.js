import{registerTemplate as m,freezeTemplate as y,registerDecorators as v,registerComponent as h,LightningElement as V,parseFragment as _}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function ot(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}main"+t+` {background: radial-gradient(
 circle at 15% 0%,
 hsl(var(--brand-primary, 330 81% 48%) / 0.12),
 transparent 55%
 ),
 radial-gradient(
 circle at 85% 10%,
 hsl(var(--brand-accent, 199 89% 36%) / 0.12),
 transparent 55%
 );}`}var de=[ot];function it(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":a+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 1.75rem;height: 1.75rem;border-radius: var(--fd-radius-md);background: linear-gradient(135deg, hsl(var(--brand-primary, 330 81% 48%)), hsl(var(--brand-accent, 199 89% 36%)));color: var(--fd-color-on-primary);font-size: 0.9rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;justify-content: center;gap: var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var le=[it];function dt(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline;}.link"+t+" {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: var(--_fd-link-underline-offset);cursor: pointer;transition: color var(--_fd-duration-fast) ease;}.link:hover"+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var ce=[dt];const lt={"tab-stop":!0},ct={key:2},pt=[];function C(r,e,n,t){const{ti:a,gid:s,b:o,ncls:i,fid:l,s:d,h:c}=r,{_m0:g}=t;return[c("span",{classMap:lt,attrs:{part:"base",role:"link",tabindex:a(e.tabStopIndex),"aria-labelledby":s("anchor"),"aria-disabled":e.ariaDisabled},key:0,on:g||(t._m0={keydown:o(e.handleKeydown)})},[c("a",{className:i(e.classes),attrs:{id:s("anchor"),part:e.linkPart,href:l(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[d("",ct,pt,n)])])]}var ft=m(C);C.slots=[""],C.stylesheets=[],C.stylesheetToken="lwc-38j32sll441",C.legacyStylesheetToken="fandry-link_link",ce&&C.stylesheets.push.apply(C.stylesheets,ce),y(C);var ht=void 0;function ut(r,e,n){var t=r?"["+r+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 330 81% 48%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 199 89% 36%));--_fd-accent-foreground: var(--fd-accent-foreground, 0 0% 100%);--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 271 55% 40%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-radius-full: var(--fd-radius-full, 999px);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-switch-padding: var(--fd-switch-padding, 0.125rem);--_fd-switch-width: var(--fd-switch-width, calc(var(--_fd-size-sm) * 2 + 2 * var(--_fd-switch-padding)));--_fd-tooltip-arrow-size: var(--fd-tooltip-arrow-size, 0.625rem);--_fd-sidebar-width: var(--fd-sidebar-width, 16rem);--_fd-toast-width: var(--fd-toast-width, 20rem);--_fd-form-column-min-width: var(--fd-form-column-min-width, 16rem);--_fd-link-underline-offset: var(--fd-link-underline-offset, 0.125em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var mt=[ut];function yt(r,e,n){var t=r?"-"+r:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}"}var bt=[yt];function gt(r,e,n){var t=r?"["+r+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}[hidden]"+t+" {display: none !important;}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var vt=[mt,bt,gt];class se extends V{constructor(...e){super(...e);this.lastWarnedElementProps=null}activateAnchorOnEnter(e){e.key!=="Enter"||e.target!==e.currentTarget||this.template.querySelector("a")?.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey}))}resolveTabStopIndex(e,n){if(!!n)return Number(e.tabIndex)===-1?"-1":"0"}withoutTabIndex(e){const{tabIndex:n,...t}=e;return t}resolveElementProps(e,n,t,a="elementProps"){const s={},o=[];for(const[i,l]of Object.entries(e))n.includes(i)?o.push(i):s[i]=l;return o.length&&e!==this.lastWarnedElementProps&&(this.lastWarnedElementProps=e,console.warn(`${t}: ${a} included ${o.map(i=>`"${i}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),s}}se.stylesheets=[vt],v(se,{fields:["lastWarnedElementProps"]});const k=h(se,{tmpl:ht,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function P(r,e={}){return[r,...Object.keys(e).filter(n=>e[n])].join(" ")}const kt=["href","target","rel","class","ariaDisabled"];class pe extends k{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return this.resolveTabStopIndex(this.elementProps,!this.disabled)}handleKeydown(e){this.activateAnchorOnEnter(e)}get resolvedElementProps(){return this.withoutTabIndex(this.resolveElementProps(this.elementProps,kt,"fandry-link"))}get linkPart(){return P("link",{[this.variant||"default"]:!0,disabled:this.disabled})}}v(pe,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const b=h(pe,{tmpl:ft,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function _t(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease, color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--default:hover:not(:disabled)"+t+" {filter: brightness(var(--_fd-hover-brightness));box-shadow: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}.button--secondary:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}.button--ghost:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}.button:focus-visible"+t+` {outline: none;box-shadow: 0 0 0 var(--_fd-ring-width)\r
 hsl(var(--_fd-ring-color));}.button:disabled`+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled)"+t+" {transform: translateY(1px);box-shadow: none;}"}var fe=[_t];const wt={key:1},xt=[];function M(r,e,n,t){const{ncls:a,s,h:o}=r;return[o("button",{className:a(e.classes),attrs:{part:e.basePart,type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0},[s("",wt,xt,n)])]}var St=m(M);M.slots=[""],M.stylesheets=[],M.stylesheetToken="lwc-4ejlbgtq1p9",M.legacyStylesheetToken="fandry-button_button",fe&&M.stylesheets.push.apply(M.stylesheets,fe),y(M);const zt=["type","class","disabled"];class he extends k{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,zt,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}get basePart(){return P("base",{[this.variant||"default"]:!0,disabled:this.disabled})}}v(he,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const j=h(he,{tmpl:St,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Pt(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var ue=[Pt];const Ct={key:1},Mt=[];function E(r,e,n,t){const{ncls:a,s,h:o}=r;return[o("span",{className:a(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.ariaLabel},key:0},[s("",Ct,Mt,n)])]}var Et=m(E);E.slots=[""],E.stylesheets=[],E.stylesheetToken="lwc-17qhee1uo3s",E.legacyStylesheetToken="fandry-icon_icon",ue&&E.stylesheets.push.apply(E.stylesheets,ue),y(E);class me extends k{constructor(...e){super(...e);this.size="md",this.label=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get ariaLabel(){return this.isDecorative?void 0:this.label}}v(me,{publicProps:{size:{config:0},label:{config:0}}});const ae=h(me,{tmpl:Et,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function $t(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var ye=[$t];const Tt=_`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,It=_`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,At=_`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,Dt={panel:!0},Nt={classMap:{search:!0},attrs:{part:"search"},key:2},Rt={input:!0},Lt={listbox:!0},Ft={group:!0},Ot={classMap:{empty:!0},attrs:{part:"empty"},key:14},Bt={attrs:{name:"empty"},key:15};function $(r,e,n,t){const{ncls:a,b:s,gid:o,h:i,k:l,d,sp:c,st:g,dc:S,i:J,f:Z,t:p,s:et}=r,{_m0:tt,_m1:at,_m2:rt,_m3:st,_m4:nt}=t;return[e.isMounted?i("div",{className:a(e.backdropClasses),attrs:{part:"backdrop",inert:e.backdropInert},key:0,on:tt||(t._m0={click:s(e.handleBackdropClick)})},[i("div",{classMap:Dt,attrs:{part:"panel",role:"dialog","aria-modal":"true","aria-label":e.label},key:1,on:at||(t._m1={mousedown:s(e.handlePanelMouseDown)})},[i("div",Nt,[i("input",{classMap:Rt,attrs:{id:o("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.label,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":o("listbox"),"aria-activedescendant":o(e.activeDescendant)},props:{value:e.query},key:3,on:rt||(t._m2={input:s(e.handleInput),keydown:s(e.handleInputKeydown)})})]),i("div",{classMap:Lt,attrs:{id:o("listbox"),part:"listbox",role:"listbox","aria-label":e.label},key:4,on:st||(t._m3={mousedown:s(e.handleListboxMouseDown)})},J(e.renderGroups,function(ee){return i("div",{classMap:Ft,attrs:{part:"group",role:"group","aria-label":ee.label},key:l(5,ee.key)},Z([ee.hasLabel?g(Tt,7,[c(1,null,d(ee.label))]):null,J(ee.options,function(w){return i("div",{className:a(w.classes),attrs:{id:o(w.id),part:w.part,role:"option","data-option-id":w.id,"aria-selected":w.ariaSelected,"aria-disabled":w.ariaDisabled},key:l(8,w.id),on:nt||(t._m4={click:s(e.handleOptionClick),mousemove:s(e.handleOptionMouseMove)})},[w.component?S(w.component,{props:{...w.resolvedComponentProps},key:9}):null,w.component?null:g(It,11,[c(1,null,d(w.label))]),w.component?null:w.hasDescription?g(At,13,[c(1,null,d(w.description))]):null])})]))})),e.hasResults?null:i("div",Ot,[et("empty",Bt,[p("No results found")],n)])])]):null]}var qt=m($);$.slots=["empty"],$.stylesheets=[],$.stylesheetToken="lwc-4bgejodik1n",$.legacyStylesheetToken="fandry-command_command",ye&&$.stylesheets.push.apply($.stylesheets,ye),y($);var Vt=void 0;const jt=/[\s\-_/.]/;function re(r,e,n){const t=r.toLowerCase().indexOf(e);return t===-1?0:t===0?n*3:jt.test(r[t-1])?n*2:n}function Ht(r,e){let n=0;for(const t of e){const a=Math.max(re(r.label,t,10),...(r.keywords??[]).map(s=>re(s,t,6)),re(r.description??"",t,3),re(r.group??"",t,2));if(a===0)return-1;n+=a}return n}class be extends k{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}commit(e){}filterItems(e,n){const t=n.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((a,s)=>({item:a,index:s,score:Ht(a,t)})).filter(a=>a.score>=0).sort((a,s)=>s.score-a.score||a.index-s.index).map(a=>a.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,n=this.query,t=this.entriesCache;if(t.source===e&&t.query===n)return t.entries;const a=this.buildEntries(e,n);return t.source=e,t.query=n,t.entries=a,a}buildEntries(e,n){const t=this.filterItems(e,n),a=t.filter(i=>!i.group),s=Array.from(new Set(t.filter(i=>i.group).map(i=>i.group)));return[...a,...s.flatMap(i=>t.filter(l=>l.group===i))].map((i,l)=>({id:`option-${l}`,item:i}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(n=>n.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,n=[];for(const t of this.entries){const a=t.item.group??"";let s=n.find(o=>o.label===a);s||(s={key:`group-${n.length}`,label:a,hasLabel:!!a,options:[]},n.push(s)),s.options.push(this.decorate(t,e))}return n}decorate(e,n){const{item:t,id:a}=e,s=!!t.disabled,o=this.isSelected(t);return{id:a,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:s,ariaSelected:o?"true":"false",ariaDisabled:s?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",o?"option--selected":"",a===n?"option--active":"",s?"option--disabled":""].filter(Boolean).join(" "),part:P("option",{selected:o,active:a===n,disabled:s})}}activateSelected(){const e=this.enabledEntries.find(n=>this.isSelected(n.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const n=this.enabledEntries;if(!n.length)return;const a=(n.findIndex(s=>s.id===this.resolvedActiveId)+e+n.length)%n.length;this.activeId=n[a].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const n=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);n&&this.commit(n.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const n=e.currentTarget.dataset.optionId,t=this.entries.find(a=>a.id===n);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const n=e.currentTarget.dataset.optionId;if(n===this.resolvedActiveId)return;const t=this.entries.find(a=>a.id===n);t&&!t.item.disabled&&(this.activeId=t.id)}}v(be,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const Kt=h(be,{tmpl:Vt,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Gt(r){return!r||typeof r.getAnimations!="function"?Promise.resolve():Promise.allSettled(r.getAnimations({subtree:!0}).map(e=>e.finished))}const Ut=[];class ge extends Kt{constructor(...e){super(...e);this.label="",this.placeholder="",this.items=[],this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=n=>{this.open&&n.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const n=this._open;this._open=e,e&&(this.isMounted=!0),!n&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):n&&!e&&(this.unlockBodyScroll(),this.previouslyFocused?.focus(),this.previouslyFocused=null)}get source(){return this.items??Ut}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");Gt(e).then(()=>{this.open||(this.isMounted=!1)})}}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}v(ge,{publicProps:{label:{config:0},placeholder:{config:0},items:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const Wt=h(ge,{tmpl:qt,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Qt=_`<a class="logo${0}" href="/"${2}><span class="logo-mark${0}"${2}>F</span>Fandry UI</a>`,Yt=_`<span class="shortcut${0}"${2}>${"t1"}</span>`,Xt=_`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,Jt={classMap:{header:!0},key:0},Zt={classMap:{container:!0},key:1},ea={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:4},ta={props:{href:"/getting-started"},key:5},aa={props:{href:"/examples"},key:6},ra={props:{href:"/components"},key:7},sa={props:{href:"/blocks"},key:8},na={classMap:{actions:!0},key:9},oa={variant:"secondary",size:"sm"},ia={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:13},da={props:{size:"sm",label:"GitHub"},key:14};function H(r,e,n,t){const{st:a,t:s,c:o,h:i,b:l,d,sp:c}=r,{_m0:g,_m1:S}=t;return[i("header",Jt,[i("div",Zt,[a(Qt,3),i("nav",ea,[o("fandry-link",b,ta,[s("Get started")]),o("fandry-link",b,aa,[s("Examples")]),o("fandry-link",b,ra,[s("Components")]),o("fandry-link",b,sa,[s("Blocks")])]),i("div",na,[o("fandry-button",j,{props:oa,key:10,on:g||(t._m0={click:l(e.handlePaletteOpen)})},[s("Search "),a(Yt,12,[c(1,null,d(e.shortcutHint))])]),o("fandry-link",b,ia,[o("fandry-icon",ae,da,[a(Xt,16)])])])])]),o("fandry-command",Wt,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:17,on:S||(t._m1={toggle:l(e.handlePaletteToggle),select:l(e.handlePaletteSelect)})})]}var la=m(H);H.stylesheets=[],H.stylesheetToken="lwc-2hoqs8gnsf6",H.legacyStylesheetToken="fandryui-siteHeader_siteHeader",le&&H.stylesheets.push.apply(H.stylesheets,le),y(H);const ca=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],pa=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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
}`},category:"Layout",description:"A navigation trail of ancestor pages \u2014 pair with fandry-breadcrumb-item for each crumb.",props:[{name:"aria-label",type:"string",default:"'Breadcrumb'",description:"Accessible name for the nav landmark."}],code:`<fandry-breadcrumb>
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
}`},category:"Layout",description:"Previous/next navigation \u2014 as links between two adjacent pages, or as Previous / Page N of M / Next buttons for paging a collection.",props:[{name:"previous-href",type:"string",default:"''",description:"Omit to hide the previous link (e.g. on the first page)."},{name:"previous-label",type:"string",default:"''",description:"Title of the previous page."},{name:"next-href",type:"string",default:"''",description:"Omit to hide the next link (e.g. on the last page)."},{name:"next-label",type:"string",default:"''",description:"Title of the next page."},{name:"page-index",type:"number",default:"undefined",description:"Zero-based current page. Setting it switches from links to Previous/Next buttons; listen for `change` (detail.pageIndex) and update it. Replace controls via the previous, status and next slots, or just the buttons' words via previous-text and next-text."},{name:"page-count",type:"number",default:"-1",description:"Total pages in page mode; -1 means unknown (Next stays enabled)."},{name:"messages",type:"{ label, status(page, pageCount) }",default:"{}",description:`Replaces the landmark name and page mode's status line, e.g. to translate them. Link mode's "Previous" / "Next" lines are the previous-eyebrow and next-eyebrow slots.`}],code:`<fandry-pagination
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
}`},category:"Layout",description:"A vertical navigation rail \u2014 pair with fandry-sidebar-item for links.",props:[{name:"aria-label",type:"string",default:"'Sidebar'",description:"Accessible name for the nav landmark."}],code:`<fandry-sidebar aria-label="Components">
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
}`},category:"Typography",description:"A sizing/color frame around a slotted glyph \u2014 brings no icon set of its own.",props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Icon size."},{name:"label",type:"string",default:"''",description:"Set only when the icon is the sole content conveying meaning (icon-only button)."}],code:`<fandry-icon size="md" label="Favorite">
  <svg viewBox="0 0 24 24">...</svg>
</fandry-icon>`},{slug:"label",name:"Label",tag:"fandry-label",parts:["base","required"],customize:{title:"Custom colors and parts",demo:"label-theme",code:`<!-- template -->
<div class="brand stack narrow">
  <fandry-label html-for="theme-email" required>Email</fandry-label>
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
}`},category:"Typography",description:"A form label, with an optional required indicator.",props:[{name:"html-for",type:"string",default:"''",description:"id of the control this label describes."},{name:"required",type:"boolean",default:"false",description:"Shows a required indicator."}],code:`<fandry-label html-for="username" required>Username</fandry-label>
<input id="username" />`},{slug:"text",name:"Text",tag:"fandry-text",parts:["base"],states:["default","muted"],customize:{title:"Custom colors and parts",demo:"text-theme",code:`<!-- template -->
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
}`},category:"Typography",description:"Body text \u2014 pick the rendered tag and size independently.",props:[{name:"as",type:"'p' | 'span' | 'div'",default:"'p'",description:"Layout: block (p/div) or inline (span)."},{name:"size",type:"'xs' | 'sm' | 'md'",default:"'md'",description:"Font size."},{name:"variant",type:"'default' | 'muted'",default:"'default'",description:"Text color."}],code:'<fandry-text variant="muted" size="sm">Helper text</fandry-text>'},{slug:"button",name:"Button",tag:"fandry-button",parts:["base"],states:["default","secondary","ghost","disabled"],customize:{title:"Custom colors and parts",demo:"button-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-button class="cta">Add to cart</fandry-button>
  <fandry-button variant="secondary">Save for later</fandry-button>
  <fandry-button variant="ghost">Share</fandry-button>
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
}`},category:"Forms",description:"A native button with default/secondary/ghost variants and three sizes.",props:[{name:"variant",type:"'default' | 'secondary' | 'ghost'",default:"'default'",description:"Visual style."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Button size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the button."},{name:"type",type:"'button' | 'submit' | 'reset'",default:"'button'",description:"Native button type."}],code:'<fandry-button variant="secondary" size="lg">Save</fandry-button>'},{slug:"checkbox",name:"Checkbox",tag:"fandry-checkbox",parts:["base","control","indicator","label"],states:["checked","indeterminate","disabled"],customize:{title:"Custom colors and parts",demo:"checkbox-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A checkbox with a built-in label and indeterminate support.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"Checked state."},{name:"indeterminate",type:"boolean",default:"false",description:"Visual mixed state (synced onto the native input imperatively)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the checkbox."},{name:"default slot",type:"slot",default:"the label prop",description:"Markup in place of the label. Shown even without the label prop."}],code:'<fandry-checkbox label="Accept terms" onchange={handleChange}></fandry-checkbox>'},{slug:"combobox",name:"Combobox",tag:"fandry-combobox",parts:["base","label","required","control","input","chevron","panel","listbox","group","group-label","option","option-label","option-description","empty","help-text"],states:["disabled","selected","active"],customize:{title:"Custom colors and parts",demo:"combobox-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A searchable select \u2014 type to narrow the options, then pick one.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown when nothing is selected or typed."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"name",type:"string",default:"''",description:"Exposed as `data-name` on the input."},{name:"options",type:"{ label, value, description?, group?, keywords?, disabled? }[]",default:"[]",description:"The options. Search matches label, description, keywords and group; a prefix in the label ranks first."},{name:"value",type:"string",default:"''",description:"Selected value. Listen for `change` (detail is the new value)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"required",type:"boolean",default:"false",description:"Marks the field required (asterisk + aria-required)."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native input (e.g. `{ tabIndex: 2 }`); keys the component controls are ignored with a warning."},{name:"empty (slot)",type:"slot",default:"'No results'",description:"Replaces the message shown when nothing matches."},{name:"label \xB7 help-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label or help text. Shown even without the matching prop."}],code:`<fandry-combobox
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
// can't point across a shadow boundary.`}]},{slug:"input",name:"Input",tag:"fandry-input",parts:["base","label","control","prefix","input","suffix","help-text","required"],states:["disabled"],customize:{title:"Custom colors and parts",demo:"input-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A text input with a label, help text, and prefix/suffix slots.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"type",type:"string",default:"'text'",description:"Native input type (email, password, ...)."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Field size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"label \xB7 help-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label or help text (a link, an icon). Shown even without the matching prop."}],code:'<fandry-input label="Email" type="email" placeholder="you@company.com"></fandry-input>'},{slug:"link",name:"Link",tag:"fandry-link",parts:["base","link"],states:["default","muted","disabled"],customize:{title:"Custom colors and parts",demo:"link-theme",code:`<!-- template -->
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
</fandry-radio-group>`},{slug:"select",name:"Select",tag:"fandry-select",parts:["base","label","required","control","value","chevron","listbox","option","group","group-label","help-text","panel"],states:["disabled","selected","active"],customize:{title:"Custom colors and parts",demo:"select-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A custom listbox-style select, with optional grouped options.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown when nothing is selected."},{name:"options",type:"{ label, value, disabled?, component?, componentProps? }[]",default:"[]",description:"Flat option list. An option's `component` (with `componentProps`) draws its own row instead of the label -- see the custom options example."},{name:"groups",type:"{ label, options }[]",default:"[]",description:"Grouped option list (used instead of options)."},{name:"value",type:"string",default:"''",description:"Selected value."},{name:"label \xB7 help-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label or help text. Shown even without the matching prop."}],code:`<fandry-select
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
// lightning__dynamicComponent capability (API 55+), which \`fandry add\` writes.`}]},{slug:"switch",name:"Switch",tag:"fandry-switch",parts:["base","control","indicator","label"],states:["checked","disabled"],customize:{title:"Custom colors and parts",demo:"switch-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A toggle switch with a built-in label.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"On/off state."},{name:"disabled",type:"boolean",default:"false",description:"Disables the switch."},{name:"default slot",type:"slot",default:"the label prop",description:"Markup in place of the label. Shown even without the label prop."}],code:'<fandry-switch label="Enable notifications" checked></fandry-switch>'},{slug:"textarea",name:"Textarea",tag:"fandry-textarea",parts:["base","label","control","textarea","help-text","required"],states:["disabled"],customize:{title:"Custom colors and parts",demo:"textarea-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A multi-line text input with a label and help text.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"rows",type:"number",default:"3",description:"Visible row count."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"label \xB7 help-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label or help text. Shown even without the matching prop."}],code:'<fandry-textarea label="Notes" rows="4"></fandry-textarea>'},{slug:"alert",name:"Alert",tag:"fandry-alert",parts:["base","title","body"],states:["info","success","warning","danger"],customize:{title:"Custom colors and parts",demo:"alert-theme",code:`<!-- template -->
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
}`},category:"Feedback",description:"A determinate or indeterminate progress bar.",props:[{name:"value",type:"number",default:"0",description:"Current progress, from 0 to max."},{name:"max",type:"number",default:"100",description:"Maximum value."},{name:"label",type:"string",default:"''",description:"Accessible label."},{name:"indeterminate",type:"boolean",default:"false",description:"Shows an animated bar of unknown duration instead of value/max."}],code:'<fandry-progress value="60" label="Uploading"></fandry-progress>'},{slug:"skeleton",name:"Skeleton",tag:"fandry-skeleton",parts:["base"],customize:{title:"Custom colors and parts",demo:"skeleton-theme",code:`<!-- template -->
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
<fandry-skeleton variant="text"></fandry-skeleton>`},{slug:"spinner",name:"Spinner",tag:"fandry-spinner",parts:["base"],customize:{title:"Custom colors and parts",demo:"spinner-theme",code:`<!-- template -->
<div class="brand row">
  <fandry-spinner size="sm" label="Loading"></fandry-spinner>
  <fandry-spinner size="md" label="Loading"></fandry-spinner>
  <fandry-spinner size="lg" label="Loading"></fandry-spinner>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-border: 160 30% 90%;
  --fd-border-width-lg: 4px;
}

fandry-spinner::part(base) {
  border-right-color: hsl(45 90% 50%);
}`},category:"Feedback",description:"A loading spinner in three sizes.",props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Spinner size."},{name:"label",type:"string",default:"'Loading'",description:"Accessible label."}],code:'<fandry-spinner size="md"></fandry-spinner>'},{slug:"toast",name:"Toast",tag:"fandry-toast",parts:["base"],states:["info","success","warning","danger"],customize:{title:"Custom colors and parts",demo:"toast-theme",code:`<!-- template -->
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
}`},category:"Feedback",description:"A fixed or contained stacking region that positions fandry-toast.",props:[{name:"placement",type:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",default:"'bottom-right'",description:"Corner to stack from."},{name:"contained",type:"boolean",default:"false",description:"position: absolute against the nearest positioned ancestor instead of the viewport."},{name:"label",type:"string",default:"''",description:"Accessible label for the stacking region."}],code:`<fandry-toast-viewport placement="bottom-right" label="Notifications">
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
}`},category:"Overlays & Data",description:"A command palette \u2014 a modal search box over a list of actions. Generic: it reports the chosen value and leaves what it does (and the Cmd+K shortcut) to you.",props:[{name:"open",type:"boolean",default:"false",description:"Whether the palette is shown. Listen for `toggle` (detail is the new state) and update it."},{name:"label",type:"string",default:"''",description:"Accessible name of the palette."},{name:"placeholder",type:"string",default:"''",description:"Hint shown in the empty search box."},{name:"items",type:"{ label, value, description?, group?, keywords?, disabled? }[]",default:"[]",description:"The commands. Ungrouped items list first; grouped items sit under their heading."},{name:"select (event)",type:"CustomEvent<{ value }>",default:"\u2014",description:"Fired when an item is picked; the palette then closes itself."},{name:"empty (slot)",type:"slot",default:"'No results found'",description:"Replaces the message shown when nothing matches."}],code:`<fandry-command
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
}`},category:"Overlays & Data",description:"A modal panel over a backdrop, with Escape/backdrop-click to close and focus returned to the trigger.",props:[{name:"open",type:"boolean",default:"false",description:"Open state (consumer-controlled via ontoggle)."},{name:"label",type:"string",default:"''",description:"Accessible name for the dialog (aria-label)."}],code:`<fandry-dialog open={isOpen} label="Delete item" ontoggle={handleToggle}>
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
}`},category:"Overlays & Data",description:"An anchored floating panel \u2014 owns positioning, not the trigger or content.",props:[{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'bottom'",description:"Panel position relative to the trigger."},{name:"align",type:"'start' | 'end'",default:"'start'",description:"Which edge of the trigger the panel aligns to, for 'top'/'bottom' placement."},{name:"open",type:"boolean",default:"false",description:"Open state (consumer-controlled via ontoggle)."}],code:`<fandry-popover placement="bottom" open={isOpen} ontoggle={handleToggle}>
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
></fandry-table>`},{slug:"lookup",name:"Lookup",tag:"fandry-lookup",parts:["base","label","required","control","selection","selection-label","clear-button","chips","chip","chip-label","chip-remove","input","clear-all","panel","listbox","group","group-label","option","option-label","option-description","status","empty","help-text"],states:["disabled","selected","active"],customize:{title:"Custom colors and parts",demo:"lookup-theme",code:`<!-- template -->
<div class="brand narrow">
  <fandry-lookup
    label="Account"
    placeholder="Search accounts"
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
}`},category:"Salesforce",description:"Find and pick a record \u2014 one by default, or several with `multiple`. It fetches nothing itself: it reports what was typed, you run the query and hand the records back.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown in the empty search box."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"name",type:"string",default:"''",description:"Exposed as `data-name` on the input."},{name:"results",type:"{ id, label, description?, disabled?, \u2026 }[]",default:"[]",description:"Matches for the current search, shown exactly as given (never re-filtered). Extra fields ride along and come back in `change`."},{name:"loading",type:"boolean",default:"false",description:"Shows a searching indicator while your query is in flight."},{name:"multiple",type:"boolean",default:"false",description:"Allow any number of records, shown as removable chips with a \u201CClear all\u201D. The list stays open after each pick, already-chosen records are not offered again, and Backspace in an empty field removes the last chip."},{name:"value",type:"string | string[]",default:"''",description:"The selected id (an array of ids with `multiple`). Set it to render existing data; it updates when the user picks or clears. The lookup names each id from `record`/`records` or `results`; for any it can't, it fires `resolve` and shows the raw id (muted) until you supply the record."},{name:"record",type:"{ id, label, \u2026 } | null",default:"null",description:"Single mode: the selected record, shown as the field's value with a clear button. On its own it preselects; once `value` has been set it only supplies the name for that id."},{name:"records",type:"{ id, label, \u2026 }[]",default:"[]",description:"Multiple mode: the selected records. On its own it preselects; once `value` has been set it only supplies names for those ids (any subset is fine)."},{name:"required",type:"boolean",default:"false",description:"Marks the field required (asterisk + aria-required)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field and the pill's clear button."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native input; keys the component controls are ignored with a warning."},{name:"search (event)",type:"CustomEvent<{ query }>",default:"\u2014",description:"Fires when the list opens by click or ArrowDown (immediately, so an empty query can offer recent records), after typing pauses, and in `multiple` mode after each pick."},{name:"resolve (event)",type:"CustomEvent<{ values }>",default:"\u2014",description:"Fires once for ids set through `value` that the lookup can't name yet. Look them up and set `record`/`records`. It does not repeat for an id already asked about."},{name:"change (event)",type:"CustomEvent<{ value, record }> | CustomEvent<{ values, records }>",default:"\u2014",description:"Single mode: `{ value, record }` on pick, and `{ value: '', record: null }` on clear. Multiple mode: `{ values, records }` on every pick, removal and Clear all."},{name:"empty (slot)",type:"slot",default:"'No records found'",description:"Replaces the message shown when a search has no matches."},{name:"clear-all \xB7 searching (slots)",type:"slot",default:"'Clear all' \xB7 'Searching\u2026'",description:"Replace the Clear all button's text and the searching line."},{name:"messages",type:"{ searching, clear(name), remove(name) }",default:"{}",description:"Replaces the accessible names of the spinner and the clear and remove buttons, e.g. to translate them."},{name:"label \xB7 help-text (slots)",type:"slot",default:"the props",description:"Markup in place of the label or help text. Shown even without the matching prop."}],code:`<!-- template -->
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
}`}]}],fa=[{label:"Home",value:"/"},{label:"Getting started",value:"/getting-started"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce"},{label:"Components",value:"/components"},{label:"Blocks",value:"/blocks"},{label:"Blocks: Data table",value:"/blocks/data-table"},{label:"Blocks: Form",value:"/blocks/form"},{label:"Examples",value:"/examples"}],ve=/Mac|iPhone|iPad/.test(navigator.platform);class ke extends V{constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[...fa.map(n=>({...n,group:"Pages"})),...ca.flatMap(n=>pa.filter(t=>t.category===n).map(t=>({label:t.name,value:`/components/${t.slug}`,group:n,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=n=>{(ve?n.metaKey:n.ctrlKey)&&n.key?.toLowerCase()==="k"&&(n.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get shortcutHint(){return ve?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}v(ke,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const ha=h(ke,{tmpl:la,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ua(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}.intro"+t+" {padding: calc(var(--fd-space-6) * 1.5) 0 var(--fd-space-6);text-align: center;}.container"+t+" {max-width: 40rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);}.subhead"+t+" {max-width: 32rem;}"}var _e=[ua];function ma(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var we=[ma];const ya={key:1},ba=[];function T(r,e,n,t){const{ncls:a,s,h:o}=r;return[o("div",{className:a(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[s("",ya,ba,n)])]}var ga=m(T);T.slots=[""],T.stylesheets=[],T.stylesheetToken="lwc-4htp61u8vnv",T.legacyStylesheetToken="fandry-heading_heading",we&&T.stylesheets.push.apply(T.stylesheets,we),y(T);class xe extends k{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}v(xe,{publicProps:{level:{config:3}},fields:["_level"]});const u=h(xe,{tmpl:ga,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function va(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var Se=[va];const ka={key:1},_a=[];function I(r,e,n,t){const{ncls:a,s,h:o}=r;return[o("div",{className:a(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[s("",ka,_a,n)])]}var wa=m(I);I.slots=[""],I.stylesheets=[],I.stylesheetToken="lwc-4f041bjpr1h",I.legacyStylesheetToken="fandry-text_text",Se&&I.stylesheets.push.apply(I.stylesheets,Se),y(I);class ze extends k{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}get basePart(){return P("base",{[this.variant||"default"]:!0})}}v(ze,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const f=h(ze,{tmpl:wa,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),xa={classMap:{intro:!0},key:0},Sa={classMap:{container:!0},key:1},za={props:{level:"1"},key:2},Pa={classMap:{subhead:!0},props:{variant:"muted"},key:3};function K(r,e,n,t){const{d:a,t:s,c:o,h:i}=r;return[i("section",xa,[i("div",Sa,[o("fandry-heading",u,za,[s(a(e.pageTitle))]),o("fandry-text",f,Pa,[s(a(e.subtitle))])])])]}var Ca=m(K);K.stylesheets=[],K.stylesheetToken="lwc-k2m23m8iid",K.legacyStylesheetToken="fandryui-pageIntro_pageIntro",_e&&K.stylesheets.push.apply(K.stylesheets,_e),y(K);class Pe extends V{constructor(...e){super(...e);this.pageTitle="",this.subtitle=""}}v(Pe,{publicProps:{pageTitle:{config:0},subtitle:{config:0}}});const Ma=h(Pe,{tmpl:Ca,sel:"fandryui-page-intro",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ea(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}.section"+t+" {padding: var(--fd-space-6) 0 calc(var(--fd-space-6) * 2);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.gallery"+t+" {display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: var(--fd-space-6);}@media (max-width: 48rem) {.gallery"+t+" {grid-template-columns: 1fr;}}.pattern"+t+" {display: flex;flex-direction: column;align-items: center;text-align: center;gap: var(--fd-space-1);}.pattern-head"+t+" {width: 100%;max-width: 24rem;display: flex;align-items: center;justify-content: space-between;}.pattern"+t+" > fandry-heading"+t+" {margin-top: var(--fd-space-1);}.pattern"+t+" > fandry-text"+t+" {max-width: 24rem;}.demo"+t+" {width: 100%;max-width: 24rem;margin-top: var(--fd-space-3);}.demo"+t+" > *"+t+" + *"+t+" {margin-top: var(--fd-space-3);display: block;}.price-heading"+t+" {margin-top: var(--fd-space-2) !important;}.price"+t+" {display: flex;align-items: baseline;gap: var(--fd-space-1);}.amount"+t+" {font-size: var(--fd-font-size-2xl, 1.875rem);font-weight: var(--fd-font-weight-bold);}.period"+t+" {color: var(--fd-color-muted);font-size: var(--fd-font-size-sm);}.check-list"+t+" {list-style: none;margin: 0;padding: 0;display: flex;flex-direction: column;gap: var(--fd-space-2);}.check-list"+t+" li"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);color: hsl(142 71% 30%);}.check-list"+t+" li"+t+" fandry-text"+t+" {color: var(--fd-color-text);}.form-row"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-3);}.setting-row"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);}.setting-copy"+t+" {display: flex;flex-direction: column;gap: 2px;}.empty-state"+t+" {text-align: center;}.empty-state"+t+" > *"+t+" + *"+t+" {margin-left: auto;margin-right: auto;}.empty-icon"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 3rem;height: 3rem;border-radius: var(--fd-radius-lg);background: hsl(var(--brand-primary, 330 81% 48%) / 0.1);color: hsl(var(--brand-primary-dark, 330 81% 40%));}.notif-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-2);}.team-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-3);}.team-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);}.team-copy"+t+" {flex: 1;display: flex;flex-direction: column;gap: 2px;}.file-list"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-3);}.file-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);}.file-copy"+t+" {flex: 1;display: flex;flex-direction: column;gap: 2px;}.checklist"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-2);}.search-results"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-1);}.search-result"+t+" {display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-3);padding: var(--fd-space-2) 0;border-bottom: 1px solid var(--fd-color-border);}.search-result:last-child"+t+" {border-bottom: none;}.crumb-nav"+t+" {width: 100%;max-width: 24rem;margin-top: var(--fd-space-3);}.kpi-row"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-3);}.kpi"+t+" {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-1);}"}var Ce=[Ea];function $a(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.badge--success"+t+" {background: hsl(var(--_fd-success));color: hsl(var(--_fd-success-foreground));}.badge--warning"+t+" {background: hsl(var(--_fd-warning));color: hsl(var(--_fd-warning-foreground));}.badge--danger"+t+" {background: hsl(var(--_fd-danger));color: hsl(var(--_fd-danger-foreground));}"}var Me=[$a];const Ta={key:1},Ia=[];function A(r,e,n,t){const{ncls:a,s,h:o}=r;return[o("span",{className:a(e.classes),attrs:{part:e.basePart},key:0},[s("",Ta,Ia,n)])]}var Aa=m(A);A.slots=[""],A.stylesheets=[],A.stylesheetToken="lwc-7jnsj78lpql",A.legacyStylesheetToken="fandry-badge_badge",Me&&A.stylesheets.push.apply(A.stylesheets,Me),y(A);class Ee extends k{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}get basePart(){return P("base",{[this.variant||"default"]:!0})}}v(Ee,{publicProps:{variant:{config:0}}});const x=h(Ee,{tmpl:Aa,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Da(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var $e=[Da];const Na={classMap:{card:!0},attrs:{part:"base"},key:0},Ra={key:1},La=[];function D(r,e,n,t){const{s:a,h:s}=r;return[s("div",Na,[a("",Ra,La,n)])]}var Fa=m(D);D.slots=[""],D.stylesheets=[],D.stylesheetToken="lwc-66cpcf0iuus",D.legacyStylesheetToken="fandry-card_card",$e&&D.stylesheets.push.apply(D.stylesheets,$e),y(D);class Oa extends k{}const z=h(Oa,{tmpl:Fa,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ba(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));}.input"+t+" {flex: 1;min-width: 0;border: none;outline: none;font: inherit;background: transparent;}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.control"+t+` {display: flex;align-items: center;border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-1) var(--_fd-space-2);background: hsl(var(--_fd-bg));transition: border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease;}.control:focus-within`+t+" {border-color: hsl(var(--_fd-border-focus));box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:focus"+t+" {outline: none;}.control--sm"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-xs);}.control--md"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-md);}.control--lg"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3);font-size: var(--_fd-font-size-md);}"}var Te=[Ba];function qa(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline-block;}.label"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"}var Ie=[qa];const Va=_`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,ja={label:!0},Ha={key:1},Ka=[];function N(r,e,n,t){const{gid:a,s,st:o,h:i}=r;return[i("label",{classMap:ja,attrs:{part:"base",for:a(e.htmlFor)},props:{...e.resolvedElementProps},key:0},[s("",Ha,Ka,n),e.required?o(Va,3):null])]}var Ga=m(N);N.slots=[""],N.stylesheets=[],N.stylesheetToken="lwc-2qgum40845j",N.legacyStylesheetToken="fandry-label_label",Ie&&N.stylesheets.push.apply(N.stylesheets,Ie),y(N);const Ua=["htmlFor","class"];class Ae extends k{constructor(...e){super(...e);this.htmlFor="",this.required=!1,this.elementProps={}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Ua,"fandry-label")}}v(Ae,{publicProps:{htmlFor:{config:0},required:{config:0},elementProps:{config:0}}});const Wa=h(Ae,{tmpl:Ga,sel:"fandry-label",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Qa={classMap:{"form-control":!0},attrs:{part:"base"},key:0},Ya={exportparts:"base: label, required"},Xa={name:"label"},Ja={classMap:{prefix:!0},attrs:{part:"prefix"},key:4},Za={attrs:{name:"prefix"},key:5},De=[],er={input:!0},tr={classMap:{suffix:!0},attrs:{part:"suffix"},key:7},ar={attrs:{name:"suffix"},key:8},rr={"help-text":!0},sr={name:"help-text"};function R(r,e,n,t){const{b:a,d:s,t:o,s:i,c:l,ncls:d,h:c,gid:g}=r,{_m0:S,_m1:J,_m2:Z}=t;return[c("div",Qa,[l("fandry-label",Wa,{attrs:Ya,props:{htmlFor:"input",required:e.required,hidden:e.labelHidden},key:1},[i("label",{attrs:Xa,key:2,on:S||(t._m0={slotchange:a(e.handleTextSlotChange)})},[o(s(e.label))],n)]),c("div",{className:d(e.controlClasses),attrs:{part:e.controlPart},key:3},[c("span",Ja,[i("prefix",Za,De,n)]),c("input",{classMap:er,attrs:{part:"input",id:g("input"),type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":g("help-text")},props:{value:e.value,...e.resolvedElementProps},key:6,on:J||(t._m1={input:a(e.handleInput),change:a(e.handleChange),focus:a(e.handleFocus),blur:a(e.handleBlur)})}),c("span",tr,[i("suffix",ar,De,n)])]),c("div",{classMap:rr,attrs:{id:g("help-text"),part:"help-text",hidden:e.helpTextHidden?"":null},key:9},[i("help-text",{attrs:sr,key:10,on:Z||(t._m2={slotchange:a(e.handleTextSlotChange)})},[o(s(e.helpText))],n)])])]}var nr=m(R);R.slots=["help-text","label","prefix","suffix"],R.stylesheets=[],R.stylesheetToken="lwc-24cs3ca29bn",R.legacyStylesheetToken="fandry-input_input",Te&&R.stylesheets.push.apply(R.stylesheets,Te),y(R);const or=["id","type","name","value","disabled","readonly","required","class","ariaDescribedby","ariaDescribedByElements","oninput","onchange","onfocus","onblur"];class Ne extends k{constructor(...e){super(...e);this.label="",this.helpText="",this.value="",this.type="text",this.name="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.size="md",this.elementProps={},this.hasFocus=!1,this.textSlots={}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,or,"fandry-input")}get hasLabel(){return!!this.label||!!this.textSlots.label}get hasHelpText(){return!!this.helpText||!!this.textSlots["help-text"]}get controlClasses(){return["control",`control--${this.size}`].join(" ")}focus(){this.template.querySelector("input")?.focus()}handleInput(e){e.stopPropagation();const n=e.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const n=e.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}handleFocus(){this.hasFocus=!0}handleBlur(){this.hasFocus=!1}get controlPart(){return P("control",{disabled:this.disabled})}handleTextSlotChange(e){const n=e.target,t=n.assignedNodes().some(a=>a.nodeType===1||a.nodeType===3&&!!a.textContent?.trim());this.textSlots={...this.textSlots,[n.name||"default"]:t}}get labelHidden(){return!this.hasLabel}get helpTextHidden(){return!this.hasHelpText}}v(Ne,{publicProps:{label:{config:0},helpText:{config:0},value:{config:0},type:{config:0},name:{config:0},placeholder:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},size:{config:0},elementProps:{config:0}},publicMethods:["focus"],track:{hasFocus:1},fields:["textSlots"]});const ne=h(Ne,{tmpl:nr,sel:"fandry-input",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ir(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline-block;}.box"+t+` {width: var(--_fd-size-sm);height: var(--_fd-size-sm);flex: 0 0 var(--_fd-size-sm);border-radius: var(--_fd-radius-sm);border: var(--_fd-border-width) solid hsl(var(--_fd-border));background: hsl(var(--_fd-bg));display: inline-flex;align-items: center;justify-content: center;transition: border-color var(--_fd-duration-fast) ease,
 background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.control`+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.check"+t+` {width: calc(var(--_fd-size-sm) * 0.625);height: calc(var(--_fd-size-sm) * 0.375);border-left: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));border-bottom: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));transform: translateY(-1px) rotate(-45deg) scale(0.9);opacity: 0;transition: opacity var(--_fd-duration-fast) ease,
 transform var(--_fd-duration-fast) ease;}.input:checked`+t+" + .box"+t+" {background: hsl(var(--_fd-primary));border-color: hsl(var(--_fd-primary));}.input:checked"+t+" + .box"+t+" .check"+t+" {opacity: 1;transform: translateY(-1px) rotate(-45deg) scale(1);}.control:focus-within"+t+" .box"+t+" {box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:disabled"+t+" + .box"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"}var Re=[ir];const dr=_`<span class="box${0}"${"a0:part"} aria-hidden="true"${2}><span class="check${0}" part="indicator"${2}></span></span>`,lr={control:!0},cr={input:!0},pr={label:!0};function L(r,e,n,t){const{b:a,h:s,sp:o,st:i,d:l,t:d,s:c}=r,{_m0:g,_m1:S}=t;return[s("label",{classMap:lr,attrs:{part:"base","aria-disabled":e.disabled},key:0},[s("input",{classMap:cr,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,"aria-checked":e.ariaChecked,"aria-label":e.ariaLabel},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:g||(t._m0={change:a(e.handleChange)})}),i(dr,3,[o(0,{attrs:{part:e.controlPart}},null)]),s("span",{classMap:pr,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[c("",{key:5,on:S||(t._m1={slotchange:a(e.handleTextSlotChange)})},[d(l(e.label))],n)])])]}var fr=m(L);L.slots=[""],L.stylesheets=[],L.stylesheetToken="lwc-375ftk9u572",L.legacyStylesheetToken="fandry-checkbox_checkbox",Re&&L.stylesheets.push.apply(L.stylesheets,Re),y(L);const hr=["type","name","value","checked","disabled","class","onchange","ariaChecked","ariaLabel"];class Le extends k{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.ariaLabel="",this.elementProps={tabIndex:0},this.indeterminate=!1,this.textSlots={}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,hr,"fandry-checkbox")}get ariaChecked(){return this.indeterminate?"mixed":this.checked?"true":"false"}renderedCallback(){const e=this.template.querySelector(".input");e&&(e.indeterminate=this.indeterminate)}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const n=e.target;this.checked=n.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return P("control",{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled})}handleTextSlotChange(e){const n=e.target,t=n.assignedNodes().some(a=>a.nodeType===1||a.nodeType===3&&!!a.textContent?.trim());this.textSlots={...this.textSlots,[n.name||"default"]:t}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}v(Le,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},ariaLabel:{config:0},elementProps:{config:0},indeterminate:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const te=h(Le,{tmpl:fr,sel:"fandry-checkbox",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ur(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline-block;}.control"+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.track"+t+` {width: var(--_fd-switch-width);height: calc(var(--_fd-size-sm) + 2 * var(--_fd-switch-padding));flex: 0 0 var(--_fd-switch-width);border-radius: var(--_fd-radius-full);background: hsl(var(--_fd-border));display: inline-flex;align-items: center;padding: var(--_fd-switch-padding);transition: background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.thumb`+t+" {width: var(--_fd-size-sm);height: var(--_fd-size-sm);border-radius: 50%;background: hsl(var(--_fd-bg));transform: translateX(0);transition: transform var(--_fd-duration-fast) ease;}.input:checked"+t+" + .track"+t+" {background: hsl(var(--_fd-primary));}.input:checked"+t+" + .track"+t+" .thumb"+t+" {transform: translateX(calc(var(--_fd-switch-width) - var(--_fd-size-sm) - 2 * var(--_fd-switch-padding)));}.control:focus-within"+t+" .track"+t+` {box-shadow: 0 0 0 var(--_fd-ring-width)
 hsl(var(--_fd-ring-color));}.input:disabled`+t+" + .track"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"}var Fe=[ur];const mr=_`<span class="track${0}"${"a0:part"} aria-hidden="true"${2}><span class="thumb${0}" part="indicator"${2}></span></span>`,yr={control:!0},br={input:!0},gr={label:!0};function F(r,e,n,t){const{b:a,h:s,sp:o,st:i,d:l,t:d,s:c}=r,{_m0:g,_m1:S}=t;return[s("label",{classMap:yr,attrs:{part:"base","aria-disabled":e.disabled},key:0},[s("input",{classMap:br,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,role:"switch","aria-checked":e.ariaChecked},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:g||(t._m0={change:a(e.handleChange)})}),i(mr,3,[o(0,{attrs:{part:e.controlPart}},null)]),s("span",{classMap:gr,attrs:{part:"label",hidden:e.labelHidden?"":null},key:4},[c("",{key:5,on:S||(t._m1={slotchange:a(e.handleTextSlotChange)})},[d(l(e.label))],n)])])]}var vr=m(F);F.slots=[""],F.stylesheets=[],F.stylesheetToken="lwc-2gg3sokj2de",F.legacyStylesheetToken="fandry-switch_switch",Fe&&F.stylesheets.push.apply(F.stylesheets,Fe),y(F);const kr=["type","name","value","checked","disabled","class","role","onchange","ariaChecked"];class Oe extends k{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.elementProps={tabIndex:0},this.textSlots={}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,kr,"fandry-switch")}get ariaChecked(){return this.checked?"true":"false"}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const n=e.target;this.checked=n.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return P("control",{checked:this.checked,disabled:this.disabled})}handleTextSlotChange(e){const n=e.target,t=n.assignedNodes().some(a=>a.nodeType===1||a.nodeType===3&&!!a.textContent?.trim());this.textSlots={...this.textSlots,[n.name||"default"]:t}}get hasLabel(){return!!this.label||!!this.textSlots.default}get labelHidden(){return!this.hasLabel}}v(Oe,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},elementProps:{config:0}},publicMethods:["focus"],fields:["textSlots"]});const oe=h(Oe,{tmpl:vr,sel:"fandry-switch",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function _r(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;align-self: stretch;}.divider"+t+" {background: hsl(var(--_fd-border));border: none;}.divider--horizontal"+t+" {width: 100%;height: var(--_fd-border-width);}.divider--vertical"+t+" {width: var(--_fd-border-width);height: 100%;}"}var Be=[_r];const wr=_`<div${"c0"} part="base" role="separator"${"a0:aria-orientation"}${2}></div>`;function G(r,e,n,t){const{ncls:a,sp:s,st:o}=r;return[o(wr,1,[s(0,{className:a(e.classes),attrs:{"aria-orientation":e.orientation}},null)])]}var xr=m(G);G.stylesheets=[],G.stylesheetToken="lwc-4rg533bd481",G.legacyStylesheetToken="fandry-divider_divider",Be&&G.stylesheets.push.apply(G.stylesheets,Be),y(G);class qe extends k{constructor(...e){super(...e);this.orientation="horizontal"}get classes(){return["divider",`divider--${this.orientation}`].join(" ")}}v(qe,{publicProps:{orientation:{config:0}}});const Ve=h(qe,{tmpl:xr,sel:"fandry-divider",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Sr(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}.alert"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);padding: var(--_fd-space-3);border-radius: var(--_fd-radius-md);border-left: var(--_fd-border-width-lg) solid hsl(var(--_fd-accent));background: color-mix(in srgb, hsl(var(--_fd-accent)) var(--_fd-surface-tint), transparent);font-size: var(--_fd-font-size-sm);}.alert--success"+t+" {border-left-color: hsl(var(--_fd-success));background: color-mix(in srgb, hsl(var(--_fd-success)) var(--_fd-surface-tint), transparent);}.alert--warning"+t+" {border-left-color: hsl(var(--_fd-warning));background: color-mix(in srgb, hsl(var(--_fd-warning)) var(--_fd-surface-tint), transparent);}.alert--danger"+t+" {border-left-color: hsl(var(--_fd-danger));background: color-mix(in srgb, hsl(var(--_fd-danger)) var(--_fd-surface-tint), transparent);}.title"+t+" {margin: 0;font-weight: var(--_fd-font-weight-semibold);color: hsl(var(--_fd-text));}.body"+t+" {color: hsl(var(--_fd-text));}"}var je=[Sr];const zr={title:!0},Pr={name:"title"},Cr={classMap:{body:!0},attrs:{part:"body"},key:3},Mr={key:4},Er=[];function O(r,e,n,t){const{ncls:a,b:s,d:o,t:i,s:l,h:d}=r,{_m0:c}=t;return[d("div",{className:a(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[d("p",{classMap:zr,attrs:{part:"title",hidden:e.titleHidden?"":null},key:1},[l("title",{attrs:Pr,key:2,on:c||(t._m0={slotchange:s(e.handleTextSlotChange)})},[i(o(e.title))],n)]),d("div",Cr,[l("",Mr,Er,n)])])]}var $r=m(O);O.slots=["","title"],O.stylesheets=[],O.stylesheetToken="lwc-1j963p9v2mf",O.legacyStylesheetToken="fandry-alert_alert",je&&O.stylesheets.push.apply(O.stylesheets,je),y(O);class He extends k{constructor(...e){super(...e);this.variant="info",this.title="",this.textSlots={}}get classes(){return["alert",`alert--${this.variant}`].join(" ")}get hasTitle(){return!!this.title||!!this.textSlots.title}get role(){return this.variant==="warning"||this.variant==="danger"?"alert":"status"}get basePart(){return P("base",{[this.variant||"info"]:!0})}handleTextSlotChange(e){const n=e.target,t=n.assignedNodes().some(a=>a.nodeType===1||a.nodeType===3&&!!a.textContent?.trim());this.textSlots={...this.textSlots,[n.name||"default"]:t}}get titleHidden(){return!this.hasTitle}}v(He,{publicProps:{variant:{config:0},title:{config:0}},fields:["textSlots"]});const ie=h(He,{tmpl:$r,sel:"fandry-alert",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Tr(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: inline-block;}.avatar"+t+" {display: inline-flex;align-items: center;justify-content: center;overflow: hidden;flex-shrink: 0;border-radius: 50%;background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text-muted));font-weight: var(--_fd-font-weight-semibold);text-transform: uppercase;}.avatar--sm"+t+" {width: var(--_fd-avatar-size-sm);height: var(--_fd-avatar-size-sm);font-size: calc(var(--_fd-avatar-size-sm) * 0.4);}.avatar--md"+t+" {width: var(--_fd-avatar-size-md);height: var(--_fd-avatar-size-md);font-size: calc(var(--_fd-avatar-size-md) * 0.4);}.avatar--lg"+t+" {width: var(--_fd-avatar-size-lg);height: var(--_fd-avatar-size-lg);font-size: calc(var(--_fd-avatar-size-lg) * 0.4);}.image"+t+" {width: 100%;height: 100%;object-fit: cover;}.initials"+t+" {line-height: 1;}"}var Ke=[Tr];const Ir=_`<span class="initials${0}" part="initials"${2}>${"t1"}</span>`,Ar={part:"base"},Dr={image:!0};function U(r,e,n,t){const{ncls:a,b:s,h:o,d:i,sp:l,st:d}=r,{_m0:c}=t;return[o("span",{className:a(e.classes),attrs:Ar,key:0},[e.showImage?o("img",{classMap:Dr,attrs:{part:"image",src:e.src,alt:e.alt},props:{...e.resolvedElementProps},key:1,on:c||(t._m0={error:s(e.handleImageError)})}):null,e.showInitials?d(Ir,3,[l(1,null,i(e.initials))]):null])]}var Nr=m(U);U.stylesheets=[],U.stylesheetToken="lwc-3sp4g3rf1ki",U.legacyStylesheetToken="fandry-avatar_avatar",Ke&&U.stylesheets.push.apply(U.stylesheets,Ke),y(U);const Rr=["src","alt","class","onerror"];class Ge extends k{constructor(...e){super(...e);this.alt="",this.initials="",this.size="md",this.elementProps={},this.imageFailed=!1,this._src=""}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Rr,"fandry-avatar")}get src(){return this._src}set src(e){this._src=e,this.imageFailed=!1}get classes(){return["avatar",`avatar--${this.size}`].join(" ")}get showImage(){return!!this.src&&!this.imageFailed}get showInitials(){return!this.showImage&&!!this.initials}handleImageError(){this.imageFailed=!0}}v(Ge,{publicProps:{alt:{config:0},initials:{config:0},size:{config:0},elementProps:{config:0},src:{config:3}},track:{imageFailed:1},fields:["_src"]});const Lr=h(Ge,{tmpl:Nr,sel:"fandry-avatar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Fr(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: contents;}.item"+t+" {display: flex;align-items: center;gap: var(--_fd-space-1);}.separator"+t+" {color: hsl(var(--_fd-text-muted));}.link"+t+" {color: hsl(var(--_fd-text-muted));font-size: var(--_fd-font-size-sm);text-decoration: none;}.link[href]:hover"+t+" {color: hsl(var(--_fd-text));text-decoration: underline;}.link:not([href])"+t+" {color: hsl(var(--_fd-text));font-weight: var(--_fd-font-weight-medium);cursor: default;}.tab-stop"+t+" {border-radius: var(--_fd-radius-sm);}"}var Ue=[Fr];const Or=_`<span class="separator${0}" part="separator" aria-hidden="true"${2}>/</span>`,Br={classMap:{item:!0},attrs:{part:"base"},key:0},qr={"tab-stop":!0},Vr={link:!0},jr={key:5},Hr=[];function B(r,e,n,t){const{st:a,ti:s,gid:o,b:i,fid:l,s:d,h:c}=r,{_m0:g}=t;return[c("li",Br,[e.first?null:a(Or,2),c("span",{classMap:qr,attrs:{role:e.linkRole,tabindex:s(e.tabStopIndex),"aria-labelledby":o(e.labelledBy)},key:3,on:g||(t._m0={keydown:i(e.handleKeydown)})},[c("a",{classMap:Vr,attrs:{id:o("anchor"),part:e.linkPart,href:l(e.computedHref),"aria-current":e.ariaCurrent,"aria-hidden":e.anchorAriaHidden,tabindex:"-1"},props:{...e.resolvedElementProps},key:4},[d("",jr,Hr,n)])])])]}var Kr=m(B);B.slots=[""],B.stylesheets=[],B.stylesheetToken="lwc-1hgi77eb8ab",B.legacyStylesheetToken="fandry-breadcrumbItem_breadcrumbItem",Ue&&B.stylesheets.push.apply(B.stylesheets,Ue),y(B);const Gr=["href","class","ariaCurrent"];class We extends k{constructor(...e){super(...e);this.href="",this.current=!1,this.first=!1,this.elementProps={}}get computedHref(){return this.href&&!this.current?this.href:void 0}get ariaCurrent(){return this.current?"page":void 0}get isLink(){return Boolean(this.computedHref)}get linkRole(){return this.isLink?"link":void 0}get labelledBy(){return this.isLink?"anchor":void 0}get anchorAriaHidden(){return this.isLink?"true":void 0}get tabStopIndex(){return this.resolveTabStopIndex(this.elementProps,this.isLink)}handleKeydown(e){this.activateAnchorOnEnter(e)}get resolvedElementProps(){return this.withoutTabIndex(this.resolveElementProps(this.elementProps,Gr,"fandry-breadcrumb-item"))}get linkPart(){return P("link",{current:this.current})}}v(We,{publicProps:{href:{config:0},current:{config:0},first:{config:0},elementProps:{config:0}}});const Ur=h(We,{tmpl:Kr,sel:"fandry-breadcrumb-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Wr(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}.list"+t+" {display: flex;flex-wrap: wrap;align-items: center;gap: var(--_fd-space-1);margin: 0;padding: 0;list-style: none;}"}var Qe=[Wr];const Qr={classMap:{list:!0},attrs:{part:"list"},key:1},Yr=[];function q(r,e,n,t){const{b:a,s,h:o}=r,{_m0:i}=t;return[o("nav",{attrs:{part:"base","aria-label":e.ariaLabel},key:0},[o("ol",Qr,[s("",{key:2,on:i||(t._m0={slotchange:a(e.handleSlotChange)})},Yr,n)])])]}var Xr=m(q);q.slots=[""],q.stylesheets=[],q.stylesheetToken="lwc-ft9ar9t9td",q.legacyStylesheetToken="fandry-breadcrumb_breadcrumb",Qe&&q.stylesheets.push.apply(q.stylesheets,Qe),y(q);class Ye extends k{constructor(...e){super(...e);this.ariaLabel="Breadcrumb",this.handleSlotChange=()=>{this.updateItemPositions()}}renderedCallback(){this.updateItemPositions()}updateItemPositions(){Array.from(this.querySelectorAll("fandry-breadcrumb-item")).forEach((n,t)=>{n.first=t===0})}}v(Ye,{publicProps:{ariaLabel:{config:0}},fields:["handleSlotChange"]});const Jr=h(Ye,{tmpl:Xr,sel:"fandry-breadcrumb",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Zr=_`<div class="price${0}"${2}><span class="amount${0}"${2}>$29</span><span class="period${0}"${2}>/mo</span></div>`,es=_`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M20 6L9 17l-5-5"${3}/></svg>`,ts=_`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"${3}/></svg>`,as=_`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"${3}/></svg>`,rs={classMap:{section:!0},key:0},ss={classMap:{container:!0},key:1},ns={classMap:{gallery:!0},key:2},os={classMap:{pattern:!0},key:3},is={classMap:{"pattern-head":!0},key:4},ds={key:5},ls={props:{level:"3"},key:7},cs={props:{variant:"muted",size:"sm"},key:8},ps={classMap:{demo:!0},key:9},fs={props:{variant:"primary"},key:10},hs={classMap:{"price-heading":!0},props:{level:"4"},key:11},us={classMap:{"check-list":!0},key:14},ms={props:{size:"sm"},key:16},ys={props:{as:"span",size:"sm"},key:19},bs={key:20},gs={classMap:{pattern:!0},key:21},vs={classMap:{"pattern-head":!0},key:22},ks={key:23},_s={props:{level:"3"},key:25},ws={props:{variant:"muted",size:"sm"},key:26},xs={classMap:{demo:!0},key:27},Ss={props:{level:"4"},key:28},zs={props:{label:"Email",type:"email",placeholder:"you@company.com"},key:29},Ps={props:{label:"Password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"},key:30},Cs={classMap:{"form-row":!0},key:31},Ms={props:{label:"Remember me"},key:32},Es={variant:"muted",href:"#"},$s={key:34},Ts={classMap:{pattern:!0},key:35},Is={classMap:{"pattern-head":!0},key:36},As={key:37},Ds={props:{level:"3"},key:39},Ns={props:{variant:"muted",size:"sm"},key:40},Rs={classMap:{demo:!0},key:41},Ls={props:{level:"4"},key:42},Fs={classMap:{"setting-row":!0},key:43},Os={classMap:{"setting-copy":!0},key:44},Bs={props:{as:"span"},key:45},qs={props:{as:"span",size:"xs",variant:"muted"},key:46},Vs={props:{checked:!0},key:47},js={key:48},Hs={classMap:{"setting-row":!0},key:49},Ks={classMap:{"setting-copy":!0},key:50},Gs={props:{as:"span"},key:51},Us={props:{as:"span",size:"xs",variant:"muted"},key:52},Ws={key:53},Qs={key:54},Ys={classMap:{"setting-row":!0},key:55},Xs={classMap:{"setting-copy":!0},key:56},Js={props:{as:"span"},key:57},Zs={props:{as:"span",size:"xs",variant:"muted"},key:58},en={props:{checked:!0},key:59},tn={classMap:{pattern:!0},key:60},an={classMap:{"pattern-head":!0},key:61},rn={key:62},sn={props:{level:"3"},key:64},nn={props:{variant:"muted",size:"sm"},key:65},on={classMap:{demo:!0,"empty-state":!0},key:66},dn={classMap:{"empty-icon":!0},key:67},ln={props:{size:"lg"},key:68},cn={props:{level:"4"},key:71},pn={props:{variant:"muted",size:"sm"},key:72},fn={props:{variant:"secondary"},key:73},hn={classMap:{pattern:!0},key:74},un={classMap:{"pattern-head":!0},key:75},mn={key:76},yn={props:{level:"3"},key:78},bn={props:{variant:"muted",size:"sm"},key:79},gn={classMap:{demo:!0},key:80},vn={props:{level:"4"},key:81},kn={classMap:{"notif-list":!0},key:82},_n={props:{variant:"info"},key:83},wn={props:{variant:"success",title:"Payment received"},key:84},xn={props:{variant:"warning",title:"Low stock"},key:85},Sn={classMap:{pattern:!0},key:86},zn={classMap:{"pattern-head":!0},key:87},Pn={key:88},Cn={props:{level:"3"},key:90},Mn={props:{variant:"muted",size:"sm"},key:91},En={classMap:{demo:!0},key:92},$n={props:{level:"4"},key:93},Tn={classMap:{"team-list":!0},key:94},In={"team-row":!0},An={classMap:{"team-copy":!0},key:97},Dn={props:{as:"span",size:"sm"},key:98},Nn={props:{as:"span",size:"xs",variant:"muted"},key:99},Rn={classMap:{pattern:!0},key:101},Ln={classMap:{"pattern-head":!0},key:102},Fn={key:103},On={props:{level:"3"},key:105},Bn={props:{variant:"muted",size:"sm"},key:106},qn={classMap:{demo:!0},key:107},Vn={props:{level:"4"},key:108},jn={classMap:{"file-list":!0},key:109},Hn={"file-row":!0},Kn={props:{size:"md"},key:111},Gn={classMap:{"file-copy":!0},key:114},Un={props:{as:"span",size:"sm"},key:115},Wn={props:{as:"span",size:"xs",variant:"muted"},key:116},Qn={variant:"ghost",size:"sm"},Yn={classMap:{pattern:!0},key:118},Xn={classMap:{"pattern-head":!0},key:119},Jn={key:120},Zn={props:{level:"3"},key:122},eo={props:{variant:"muted",size:"sm"},key:123},to={classMap:{demo:!0},key:124},ao={props:{level:"4"},key:125},ro={props:{variant:"muted",size:"sm"},key:126},so={classMap:{checklist:!0},key:127},no={props:{label:"Create your account",checked:!0,disabled:!0},key:128},oo={props:{label:"Verify your email",checked:!0,disabled:!0},key:129},io={props:{label:"Invite your team"},key:130},lo={props:{label:"Place your first order"},key:131},co={classMap:{pattern:!0},key:132},po={classMap:{"pattern-head":!0},key:133},fo={key:134},ho={props:{level:"3"},key:136},uo={props:{variant:"muted",size:"sm"},key:137},mo={classMap:{demo:!0},key:138},yo={props:{label:"Quick search",placeholder:"Search orders, products, people\u2026"},key:139},bo={slotAssignment:"prefix",key:140},go={classMap:{"search-results":!0},key:141},vo={"search-result":!0},ko={props:{as:"span",size:"sm"},key:143},_o={key:144},wo={classMap:{pattern:!0},key:145},xo={classMap:{"pattern-head":!0},key:146},So={key:147},zo={props:{level:"3"},key:149},Po={props:{variant:"muted",size:"sm"},key:150},Co={classMap:{demo:!0},key:151},Mo={props:{level:"4"},key:152},Eo={classMap:{"kpi-row":!0},key:153},$o={kpi:!0},To={props:{as:"span",size:"xs",variant:"muted"},key:155},Io={props:{level:"4"},key:156},Ao={classMap:{pattern:!0},key:158},Do={classMap:{"pattern-head":!0},key:159},No={key:160},Ro={props:{level:"3"},key:162},Lo={props:{variant:"muted",size:"sm"},key:163},Fo={classMap:{"crumb-nav":!0},props:{ariaLabel:"Folder path"},key:164},Oo={classMap:{demo:!0},key:166},Bo={props:{level:"4"},key:167},qo={props:{variant:"muted",size:"sm"},key:168};function W(r,e,n,t){const{t:a,c:s,h:o,st:i,k:l,d,i:c,b:g}=r,{_m0:S,_m1:J,_m2:Z}=t;return[o("section",rs,[o("div",ss,[o("div",ns,[o("div",os,[o("div",is,[s("fandry-badge",x,ds,[a("01")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:6},[a("View source")])]),s("fandry-heading",u,ls,[a("Pricing card")]),s("fandry-text",f,cs,[a("A plan card with a badge, feature list, and single CTA.")]),s("fandry-card",z,ps,[s("fandry-badge",x,fs,[a("Popular")]),s("fandry-heading",u,hs,[a("Pro")]),i(Zr,13),o("ul",us,c(e.pricingFeatures,function(p){return o("li",{key:l(15,p)},[s("fandry-icon",ae,ms,[i(es,18)]),s("fandry-text",f,ys,[a(d(p))])])})),s("fandry-button",j,bs,[a("Choose Pro")])])]),o("div",gs,[o("div",vs,[s("fandry-badge",x,ks,[a("02")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:24},[a("View source")])]),s("fandry-heading",u,_s,[a("Login form")]),s("fandry-text",f,ws,[a("Inputs, a checkbox, and a link, wired together.")]),s("fandry-card",z,xs,[s("fandry-heading",u,Ss,[a("Sign in")]),s("fandry-input",ne,zs),s("fandry-input",ne,Ps),o("div",Cs,[s("fandry-checkbox",te,Ms),s("fandry-link",b,{props:Es,key:33,on:S||(t._m0={click:g(e.handleNoopClick)})},[a("Forgot password?")])]),s("fandry-button",j,$s,[a("Sign in")])])]),o("div",Ts,[o("div",Is,[s("fandry-badge",x,As,[a("03")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:38},[a("View source")])]),s("fandry-heading",u,Ds,[a("Settings list")]),s("fandry-text",f,Ns,[a("Label, description, and a switch, repeated with dividers.")]),s("fandry-card",z,Rs,[s("fandry-heading",u,Ls,[a("Notifications")]),o("div",Fs,[o("div",Os,[s("fandry-text",f,Bs,[a("Email alerts")]),s("fandry-text",f,qs,[a("Get notified when an order ships.")])]),s("fandry-switch",oe,Vs)]),s("fandry-divider",Ve,js),o("div",Hs,[o("div",Ks,[s("fandry-text",f,Gs,[a("SMS alerts")]),s("fandry-text",f,Us,[a("Text messages for urgent updates.")])]),s("fandry-switch",oe,Ws)]),s("fandry-divider",Ve,Qs),o("div",Ys,[o("div",Xs,[s("fandry-text",f,Js,[a("Weekly digest")]),s("fandry-text",f,Zs,[a("A Monday summary of account activity.")])]),s("fandry-switch",oe,en)])])]),o("div",tn,[o("div",an,[s("fandry-badge",x,rn,[a("04")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:63},[a("View source")])]),s("fandry-heading",u,sn,[a("Empty state")]),s("fandry-text",f,nn,[a("Icon, heading, muted copy, and a way forward.")]),s("fandry-card",z,on,[o("div",dn,[s("fandry-icon",ae,ln,[i(ts,70)])]),s("fandry-heading",u,cn,[a("No invoices yet")]),s("fandry-text",f,pn,[a("Invoices show up here once you place your first order.")]),s("fandry-button",j,fn,[a("Browse Products")])])]),o("div",hn,[o("div",un,[s("fandry-badge",x,mn,[a("05")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:77},[a("View source")])]),s("fandry-heading",u,yn,[a("Notification list")]),s("fandry-text",f,bn,[a("A stack of fandry-alert, each with its own variant.")]),s("fandry-card",z,gn,[s("fandry-heading",u,vn,[a("Notifications")]),o("div",kn,[s("fandry-alert",ie,_n,[a("New comment on ticket #4821.")]),s("fandry-alert",ie,wn,[a("Invoice INV-2044 is now paid.")]),s("fandry-alert",ie,xn,[a("Valve Assembly is running low.")])])])]),o("div",Sn,[o("div",zn,[s("fandry-badge",x,Pn,[a("06")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:89},[a("View source")])]),s("fandry-heading",u,Cn,[a("Team list")]),s("fandry-text",f,Mn,[a("Avatar, name, role, and a badge, data-driven with for:each.")]),s("fandry-card",z,En,[s("fandry-heading",u,$n,[a("Team")]),o("div",Tn,c(e.teamMembers,function(p){return o("div",{classMap:In,key:l(95,p.key)},[s("fandry-avatar",Lr,{props:{initials:p.initials,size:"sm"},key:96}),o("div",An,[s("fandry-text",f,Dn,[a(d(p.name))]),s("fandry-text",f,Nn,[a(d(p.role))])]),s("fandry-badge",x,{props:{variant:p.variant},key:100},[a(d(p.badge))])])}))])]),o("div",Rn,[o("div",Ln,[s("fandry-badge",x,Fn,[a("07")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:104},[a("View source")])]),s("fandry-heading",u,On,[a("Attachment list")]),s("fandry-text",f,Bn,[a("File icon, filename, size, and a remove action.")]),s("fandry-card",z,qn,[s("fandry-heading",u,Vn,[a("Attachments")]),o("div",jn,c(e.files,function(p){return o("div",{classMap:Hn,key:l(110,p.key)},[s("fandry-icon",ae,Kn,[i(as,113)]),o("div",Gn,[s("fandry-text",f,Un,[a(d(p.name))]),s("fandry-text",f,Wn,[a(d(p.size))])]),s("fandry-button",j,{props:Qn,key:117,on:J||(t._m1={click:g(e.handleNoopClick)})},[a("Remove")])])}))])]),o("div",Yn,[o("div",Xn,[s("fandry-badge",x,Jn,[a("08")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:121},[a("View source")])]),s("fandry-heading",u,Zn,[a("Onboarding checklist")]),s("fandry-text",f,eo,[a("Completed steps locked, the rest genuinely checkable.")]),s("fandry-card",z,to,[s("fandry-heading",u,ao,[a("Get started")]),s("fandry-text",f,ro,[a("2 of 4 steps complete")]),o("div",so,[s("fandry-checkbox",te,no),s("fandry-checkbox",te,oo),s("fandry-checkbox",te,io),s("fandry-checkbox",te,lo)])])]),o("div",co,[o("div",po,[s("fandry-badge",x,fo,[a("09")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:135},[a("View source")])]),s("fandry-heading",u,ho,[a("Search bar")]),s("fandry-text",f,uo,[a("fandry-input's prefix slot plus a static results list.")]),s("fandry-card",z,mo,[s("fandry-input",ne,yo,[o("span",bo,[a("\u{1F50D}")])]),o("div",go,c(e.searchResults,function(p){return o("div",{classMap:vo,key:l(142,p.key)},[s("fandry-text",f,ko,[a(d(p.label))]),s("fandry-badge",x,_o,[a(d(p.badge))])])}))])]),o("div",wo,[o("div",xo,[s("fandry-badge",x,So,[a("10")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:148},[a("View source")])]),s("fandry-heading",u,zo,[a("KPI row")]),s("fandry-text",f,Po,[a("Three stat tiles with a trend badge each.")]),s("fandry-card",z,Co,[s("fandry-heading",u,Mo,[a("This month")]),o("div",Eo,c(e.kpis,function(p){return o("div",{classMap:$o,key:l(154,p.key)},[s("fandry-text",f,To,[a(d(p.label))]),s("fandry-heading",u,Io,[a(d(p.value))]),s("fandry-badge",x,{props:{variant:p.variant},key:157},[a(d(p.change))])])}))])]),o("div",Ao,[o("div",Do,[s("fandry-badge",x,No,[a("11")]),s("fandry-link",b,{props:{href:e.sourceUrl,target:"_blank",variant:"muted"},key:161},[a("View source")])]),s("fandry-heading",u,Ro,[a("Breadcrumb navigation")]),s("fandry-text",f,Lo,[a("Each crumb swaps the card below \u2014 fandry-breadcrumb driving real state.")]),s("fandry-breadcrumb",Jr,Fo,c(e.crumbItems,function(p){return s("fandry-breadcrumb-item",Ur,{attrs:{"data-key":p.key},props:{href:"#",current:p.current},key:l(165,p.key),on:Z||(t._m2={click:g(e.handleCrumbClick)})},[a(d(p.label))])})),s("fandry-card",z,Oo,[s("fandry-heading",u,Bo,[a(d(e.activePage.title))]),s("fandry-text",f,qo,[a(d(e.activePage.body))])])])])])])]}var Vo=m(W);W.stylesheets=[],W.stylesheetToken="lwc-52k25qoua6k",W.legacyStylesheetToken="fandryui-exampleGallery_exampleGallery",Ce&&W.stylesheets.push.apply(W.stylesheets,Ce),y(W);class Xe extends V{constructor(...e){super(...e);this.sourceUrl="https://github.com/rahulgawale/fandryui/blob/main/src/modules/fandryui/exampleGallery/exampleGallery.html",this.pricingFeatures=["Unlimited components","Priority support","Custom theming"],this.teamMembers=[{key:"ada",initials:"AL",name:"Ada Lovelace",role:"Engineer",badge:"Admin",variant:"primary"},{key:"grace",initials:"GH",name:"Grace Hopper",role:"Engineer",badge:"Member",variant:"default"},{key:"alan",initials:"AT",name:"Alan Turing",role:"Researcher",badge:"Member",variant:"default"}],this.files=[{key:"report",name:"quarterly-report.pdf",size:"2.4 MB"},{key:"warranty",name:"warranty-terms.docx",size:"640 KB"}],this.kpis=[{key:"revenue",label:"Revenue",value:"$84,200",change:"+12%",variant:"success"},{key:"customers",label:"New customers",value:"38",change:"+4%",variant:"success"},{key:"churn",label:"Churn",value:"1.2%",change:"+0.3%",variant:"danger"}],this.searchResults=[{key:"order",label:"#10482 \u2014 Industrial Pump",badge:"Order"},{key:"person",label:"Ada Lovelace",badge:"Person"},{key:"product",label:"Filter Kit",badge:"Product"}],this.crumbPages=[{key:"documents",label:"Documents",title:"Documents",body:"Every file synced to your account, organized by project."},{key:"projects",label:"Projects",title:"Projects",body:"One folder per active project across the team."},{key:"redesign",label:"Redesign",title:"Website Redesign",body:"Design files, briefs, and assets for the Q3 site redesign."}],this.activeCrumbKey="redesign"}get crumbItems(){return this.crumbPages.map(e=>({...e,current:e.key===this.activeCrumbKey}))}get activePage(){return this.crumbPages.find(e=>e.key===this.activeCrumbKey)??this.crumbPages[0]}handleNoopClick(e){e.preventDefault()}handleCrumbClick(e){e.preventDefault();const n=e.currentTarget.dataset.key;n&&(this.activeCrumbKey=n)}}v(Xe,{fields:["sourceUrl","pricingFeatures","teamMembers","files","kpis","searchResults","crumbPages","activeCrumbKey"]});const jo=h(Xe,{tmpl:Vo,sel:"fandryui-example-gallery",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ho(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;}.cta"+t+" {padding: calc(var(--fd-space-6) * 2) 0;text-align: center;background: radial-gradient(circle at 50% 0%, hsl(var(--brand-primary, 330 81% 48%) / 0.08), transparent 60%);border-top: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 34rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);}.cta-row"+t+" {display: flex;gap: var(--fd-space-3);flex-wrap: wrap;justify-content: center;margin-top: var(--fd-space-2);}"}var Je=[Ho];const Ko={classMap:{cta:!0},key:0},Go={classMap:{container:!0},key:1},Uo={props:{level:"2"},key:2},Wo={props:{variant:"muted"},key:3},Qo={classMap:{"cta-row":!0},key:4},Yo={variant:"default",size:"lg"},Xo={variant:"secondary",size:"lg"};function Q(r,e,n,t){const{t:a,c:s,b:o,h:i}=r,{_m0:l,_m1:d}=t;return[i("section",Ko,[i("div",Go,[s("fandry-heading",u,Uo,[a("Ready to build?")]),s("fandry-text",f,Wo,[a("Every pattern above is just fandry-* primitives, composed. Grab the components and start.")]),i("div",Qo,[s("fandry-button",j,{props:Yo,key:5,on:l||(t._m0={click:o(e.handleBrowseClick)})},[a("Browse Components")]),s("fandry-button",j,{props:Xo,key:6,on:d||(t._m1={click:o(e.handleGithubClick)})},[a("View on GitHub")])])])])]}var Jo=m(Q);Q.stylesheets=[],Q.stylesheetToken="lwc-5a15g8bv0bl",Q.legacyStylesheetToken="fandryui-ctaBanner_ctaBanner",Je&&Q.stylesheets.push.apply(Q.stylesheets,Je),y(Q);const Zo="https://github.com/rahulgawale/fandryui";class ei extends V{handleBrowseClick(){window.location.assign("/components")}handleGithubClick(){window.open(Zo,"_blank","noopener,noreferrer")}}const ti=h(ei,{tmpl:Jo,sel:"fandryui-cta-banner",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ai(r,e,n){var t=r?"["+r+"]":"",a=r?"["+r+"-host]":"";return(e?":host {":a+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}"}var Ze=[ai];const ri={classMap:{footer:!0},key:0},si={classMap:{container:!0},key:1},ni={props:{as:"span",size:"sm",variant:"muted"},key:2},oi={classMap:{links:!0},key:3},ii={props:{href:"/getting-started",variant:"muted"},key:4},di={props:{href:"/examples",variant:"muted"},key:5},li={props:{href:"/components",variant:"muted"},key:6},ci={props:{href:"/blocks",variant:"muted"},key:7},pi={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:8};function Y(r,e,n,t){const{d:a,t:s,c:o,h:i}=r;return[i("footer",ri,[i("div",si,[o("fandry-text",f,ni,[s("\xA9 "+a(e.year)+" Fandry UI \xB7 MIT License")]),i("div",oi,[o("fandry-link",b,ii,[s("Get started")]),o("fandry-link",b,di,[s("Examples")]),o("fandry-link",b,li,[s("Components")]),o("fandry-link",b,ci,[s("Blocks")]),o("fandry-link",b,pi,[s("GitHub")])])])])]}var fi=m(Y);Y.stylesheets=[],Y.stylesheetToken="lwc-3atbjjo9jl4",Y.legacyStylesheetToken="fandryui-siteFooter_siteFooter",Ze&&Y.stylesheets.push.apply(Y.stylesheets,Ze),y(Y);class hi extends V{get year(){return new Date().getFullYear()}}const ui=h(hi,{tmpl:fi,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),mi={key:0},yi={key:1},bi={props:{pageTitle:"11 patterns, built from these primitives",subtitle:"Real, interactive UI built entirely from fandry-* components \u2014 not screenshots."},key:2},gi={key:3},vi={key:4},ki={key:5};function X(r,e,n,t){const{c:a,h:s}=r;return[a("fandryui-site-header",ha,mi),s("main",yi,[a("fandryui-page-intro",Ma,bi),a("fandryui-example-gallery",jo,gi),a("fandryui-cta-banner",ti,vi)]),a("fandryui-site-footer",ui,ki)]}var _i=m(X);X.stylesheets=[],X.stylesheetToken="lwc-175l6qtgr6f",X.legacyStylesheetToken="fandryui-examples_examples",de&&X.stylesheets.push.apply(X.stylesheets,de),y(X);class wi extends V{}const xi=h(wi,{tmpl:_i,sel:"fandryui-examples",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{xi as default};
