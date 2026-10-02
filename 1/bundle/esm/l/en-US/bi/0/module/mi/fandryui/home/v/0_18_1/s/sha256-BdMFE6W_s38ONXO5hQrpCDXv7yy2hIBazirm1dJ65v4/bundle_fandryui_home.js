import{registerTemplate as u,freezeTemplate as f,registerDecorators as y,registerComponent as h,LightningElement as E,parseFragment as v}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function Dt(a,e,r){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+"display: block;}"}var ke=[Dt];function Lt(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":s+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 1.75rem;height: 1.75rem;border-radius: var(--fd-radius-md);background: linear-gradient(135deg, hsl(var(--brand-primary, 330 81% 48%)), hsl(var(--brand-accent, 199 89% 36%)));color: var(--fd-color-on-primary);font-size: 0.9rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;justify-content: center;gap: var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var we=[Lt];function Rt(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline;}.link"+t+" {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: var(--_fd-link-underline-offset);cursor: pointer;transition: color var(--_fd-duration-fast) ease;}.link:hover"+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var xe=[Rt];const Ft={"tab-stop":!0},Ot={key:2},Nt=[];function M(a,e,r,t){const{ti:s,gid:n,b:o,ncls:i,fid:d,s:c,h:p}=a,{_m0:l}=t;return[p("span",{classMap:Ft,attrs:{part:"base",role:"link",tabindex:s(e.tabStopIndex),"aria-labelledby":n("anchor"),"aria-disabled":e.ariaDisabled},key:0,on:l||(t._m0={keydown:o(e.handleKeydown)})},[p("a",{className:i(e.classes),attrs:{id:n("anchor"),part:e.linkPart,href:d(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[c("",Ot,Nt,r)])])]}var Vt=u(M);M.slots=[""],M.stylesheets=[],M.stylesheetToken="lwc-38j32sll441",M.legacyStylesheetToken="fandry-link_link",xe&&M.stylesheets.push.apply(M.stylesheets,xe),f(M);var qt=void 0;function Bt(a,e,r){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 330 81% 48%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 199 89% 36%));--_fd-accent-foreground: var(--fd-accent-foreground, 0 0% 100%);--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 271 55% 40%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-radius-full: var(--fd-radius-full, 999px);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-switch-padding: var(--fd-switch-padding, 0.125rem);--_fd-switch-width: var(--fd-switch-width, calc(var(--_fd-size-sm) * 2 + 2 * var(--_fd-switch-padding)));--_fd-tooltip-arrow-size: var(--fd-tooltip-arrow-size, 0.625rem);--_fd-sidebar-width: var(--fd-sidebar-width, 16rem);--_fd-toast-width: var(--fd-toast-width, 20rem);--_fd-form-column-min-width: var(--fd-form-column-min-width, 16rem);--_fd-link-underline-offset: var(--fd-link-underline-offset, 0.125em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var Kt=[Bt];function jt(a,e,r){var t=a?"-"+a:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}"}var Ht=[jt];function Gt(a,e,r){var t=a?"["+a+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var Wt=[Kt,Ht,Gt];class ye extends E{constructor(...e){super(...e);this.lastWarnedElementProps=null}activateAnchorOnEnter(e){e.key!=="Enter"||e.target!==e.currentTarget||this.template.querySelector("a")?.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey}))}resolveTabStopIndex(e,r){if(!!r)return Number(e.tabIndex)===-1?"-1":"0"}withoutTabIndex(e){const{tabIndex:r,...t}=e;return t}resolveElementProps(e,r,t,s="elementProps"){const n={},o=[];for(const[i,d]of Object.entries(e))r.includes(i)?o.push(i):n[i]=d;return o.length&&e!==this.lastWarnedElementProps&&(this.lastWarnedElementProps=e,console.warn(`${t}: ${s} included ${o.map(i=>`"${i}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),n}}ye.stylesheets=[Wt],y(ye,{fields:["lastWarnedElementProps"]});const _=h(ye,{tmpl:qt,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function z(a,e={}){return[a,...Object.keys(e).filter(r=>e[r])].join(" ")}const Ut=["href","target","rel","class","ariaDisabled"];class Se extends _{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return this.resolveTabStopIndex(this.elementProps,!this.disabled)}handleKeydown(e){this.activateAnchorOnEnter(e)}get resolvedElementProps(){return this.withoutTabIndex(this.resolveElementProps(this.elementProps,Ut,"fandry-link"))}get linkPart(){return z("link",{[this.variant||"default"]:!0,disabled:this.disabled})}}y(Se,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const S=h(Se,{tmpl:Vt,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Qt(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease, color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--default:hover:not(:disabled)"+t+" {filter: brightness(var(--_fd-hover-brightness));box-shadow: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}.button--secondary:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}.button--ghost:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}.button:focus-visible"+t+` {outline: none;box-shadow: 0 0 0 var(--_fd-ring-width)\r
 hsl(var(--_fd-ring-color));}.button:disabled`+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled)"+t+" {transform: translateY(1px);box-shadow: none;}"}var Pe=[Qt];const Yt={key:1},Jt=[];function $(a,e,r,t){const{ncls:s,s:n,h:o}=a;return[o("button",{className:s(e.classes),attrs:{part:e.basePart,type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0},[n("",Yt,Jt,r)])]}var Xt=u($);$.slots=[""],$.stylesheets=[],$.stylesheetToken="lwc-4ejlbgtq1p9",$.legacyStylesheetToken="fandry-button_button",Pe&&$.stylesheets.push.apply($.stylesheets,Pe),f($);const Zt=["type","class","disabled"];class ze extends _{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Zt,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}get basePart(){return z("base",{[this.variant||"default"]:!0,disabled:this.disabled})}}y(ze,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const C=h(ze,{tmpl:Xt,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ea(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var Ce=[ea];const ta={key:1},aa=[];function I(a,e,r,t){const{ncls:s,s:n,h:o}=a;return[o("span",{className:s(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.ariaLabel},key:0},[n("",ta,aa,r)])]}var sa=u(I);I.slots=[""],I.stylesheets=[],I.stylesheetToken="lwc-17qhee1uo3s",I.legacyStylesheetToken="fandry-icon_icon",Ce&&I.stylesheets.push.apply(I.stylesheets,Ce),f(I);class Ee extends _{constructor(...e){super(...e);this.size="md",this.label=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get ariaLabel(){return this.isDecorative?void 0:this.label}}y(Ee,{publicProps:{size:{config:0},label:{config:0}}});const Me=h(Ee,{tmpl:sa,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ra(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var $e=[ra];const na=v`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,oa=v`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,ia=v`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,da={panel:!0},la={classMap:{search:!0},attrs:{part:"search"},key:2},ca={input:!0},pa={listbox:!0},ha={group:!0},ua={classMap:{empty:!0},attrs:{part:"empty"},key:14},fa={attrs:{name:"empty"},key:15};function T(a,e,r,t){const{ncls:s,b:n,gid:o,h:i,k:d,d:c,sp:p,st:l,dc:g,i:k,f:W,t:oe,s:ie}=a,{_m0:de,_m1:le,_m2:P,_m3:fe,_m4:me}=t;return[e.isMounted?i("div",{className:s(e.backdropClasses),attrs:{part:"backdrop",inert:e.backdropInert},key:0,on:de||(t._m0={click:n(e.handleBackdropClick)})},[i("div",{classMap:da,attrs:{part:"panel",role:"dialog","aria-modal":"true","aria-label":e.label},key:1,on:le||(t._m1={mousedown:n(e.handlePanelMouseDown)})},[i("div",la,[i("input",{classMap:ca,attrs:{id:o("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.label,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":o("listbox"),"aria-activedescendant":o(e.activeDescendant)},props:{value:e.query},key:3,on:P||(t._m2={input:n(e.handleInput),keydown:n(e.handleInputKeydown)})})]),i("div",{classMap:pa,attrs:{id:o("listbox"),part:"listbox",role:"listbox","aria-label":e.label},key:4,on:fe||(t._m3={mousedown:n(e.handleListboxMouseDown)})},k(e.renderGroups,function(U){return i("div",{classMap:ha,attrs:{part:"group",role:"group","aria-label":U.label},key:d(5,U.key)},W([U.hasLabel?l(na,7,[p(1,null,c(U.label))]):null,k(U.options,function(w){return i("div",{className:s(w.classes),attrs:{id:o(w.id),part:w.part,role:"option","data-option-id":w.id,"aria-selected":w.ariaSelected,"aria-disabled":w.ariaDisabled},key:d(8,w.id),on:me||(t._m4={click:n(e.handleOptionClick),mousemove:n(e.handleOptionMouseMove)})},[w.component?g(w.component,{props:{...w.resolvedComponentProps},key:9}):null,w.component?null:l(oa,11,[p(1,null,c(w.label))]),w.component?null:w.hasDescription?l(ia,13,[p(1,null,c(w.description))]):null])})]))})),e.hasResults?null:i("div",ua,[ie("empty",fa,[oe("No results found")],r)])])]):null]}var ma=u(T);T.slots=["empty"],T.stylesheets=[],T.stylesheetToken="lwc-4bgejodik1n",T.legacyStylesheetToken="fandry-command_command",$e&&T.stylesheets.push.apply(T.stylesheets,$e),f(T);var ya=void 0;const ba=/[\s\-_/.]/;function ce(a,e,r){const t=a.toLowerCase().indexOf(e);return t===-1?0:t===0?r*3:ba.test(a[t-1])?r*2:r}function ga(a,e){let r=0;for(const t of e){const s=Math.max(ce(a.label,t,10),...(a.keywords??[]).map(n=>ce(n,t,6)),ce(a.description??"",t,3),ce(a.group??"",t,2));if(s===0)return-1;r+=s}return r}class Ie extends _{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}commit(e){}filterItems(e,r){const t=r.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((s,n)=>({item:s,index:n,score:ga(s,t)})).filter(s=>s.score>=0).sort((s,n)=>n.score-s.score||s.index-n.index).map(s=>s.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,r=this.query,t=this.entriesCache;if(t.source===e&&t.query===r)return t.entries;const s=this.buildEntries(e,r);return t.source=e,t.query=r,t.entries=s,s}buildEntries(e,r){const t=this.filterItems(e,r),s=t.filter(i=>!i.group),n=Array.from(new Set(t.filter(i=>i.group).map(i=>i.group)));return[...s,...n.flatMap(i=>t.filter(d=>d.group===i))].map((i,d)=>({id:`option-${d}`,item:i}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(r=>r.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,r=[];for(const t of this.entries){const s=t.item.group??"";let n=r.find(o=>o.label===s);n||(n={key:`group-${r.length}`,label:s,hasLabel:!!s,options:[]},r.push(n)),n.options.push(this.decorate(t,e))}return r}decorate(e,r){const{item:t,id:s}=e,n=!!t.disabled,o=this.isSelected(t);return{id:s,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:n,ariaSelected:o?"true":"false",ariaDisabled:n?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",o?"option--selected":"",s===r?"option--active":"",n?"option--disabled":""].filter(Boolean).join(" "),part:z("option",{selected:o,active:s===r,disabled:n})}}activateSelected(){const e=this.enabledEntries.find(r=>this.isSelected(r.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const r=this.enabledEntries;if(!r.length)return;const s=(r.findIndex(n=>n.id===this.resolvedActiveId)+e+r.length)%r.length;this.activeId=r[s].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const r=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);r&&this.commit(r.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const r=e.currentTarget.dataset.optionId,t=this.entries.find(s=>s.id===r);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const r=e.currentTarget.dataset.optionId;if(r===this.resolvedActiveId)return;const t=this.entries.find(s=>s.id===r);t&&!t.item.disabled&&(this.activeId=t.id)}}y(Ie,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const va=h(Ie,{tmpl:ya,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function be(a){return!a||typeof a.getAnimations!="function"?Promise.resolve():Promise.allSettled(a.getAnimations({subtree:!0}).map(e=>e.finished))}const _a=[];class Te extends va{constructor(...e){super(...e);this.label="",this.placeholder="",this.items=[],this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=r=>{this.open&&r.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const r=this._open;this._open=e,e&&(this.isMounted=!0),!r&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):r&&!e&&(this.unlockBodyScroll(),this.previouslyFocused?.focus(),this.previouslyFocused=null)}get source(){return this.items??_a}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");be(e).then(()=>{this.open||(this.isMounted=!1)})}}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}y(Te,{publicProps:{label:{config:0},placeholder:{config:0},items:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const ka=h(Te,{tmpl:ma,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),wa=v`<a class="logo${0}" href="/"${2}><span class="logo-mark${0}"${2}>F</span>Fandry UI</a>`,xa=v`<span class="shortcut${0}"${2}>${"t1"}</span>`,Sa=v`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,Pa={classMap:{header:!0},key:0},za={classMap:{container:!0},key:1},Ca={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:4},Ea={props:{href:"/getting-started"},key:5},Ma={props:{href:"/examples"},key:6},$a={props:{href:"/components"},key:7},Ia={props:{href:"/blocks"},key:8},Ta={classMap:{actions:!0},key:9},Aa={variant:"secondary",size:"sm"},Da={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:13},La={props:{size:"sm",label:"GitHub"},key:14};function Q(a,e,r,t){const{st:s,t:n,c:o,h:i,b:d,d:c,sp:p}=a,{_m0:l,_m1:g}=t;return[i("header",Pa,[i("div",za,[s(wa,3),i("nav",Ca,[o("fandry-link",S,Ea,[n("Get started")]),o("fandry-link",S,Ma,[n("Examples")]),o("fandry-link",S,$a,[n("Components")]),o("fandry-link",S,Ia,[n("Blocks")])]),i("div",Ta,[o("fandry-button",C,{props:Aa,key:10,on:l||(t._m0={click:d(e.handlePaletteOpen)})},[n("Search "),s(xa,12,[p(1,null,c(e.shortcutHint))])]),o("fandry-link",S,Da,[o("fandry-icon",Me,La,[s(Sa,16)])])])])]),o("fandry-command",ka,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:17,on:g||(t._m1={toggle:d(e.handlePaletteToggle),select:d(e.handlePaletteSelect)})})]}var Ra=u(Q);Q.stylesheets=[],Q.stylesheetToken="lwc-2hoqs8gnsf6",Q.legacyStylesheetToken="fandryui-siteHeader_siteHeader",we&&Q.stylesheets.push.apply(Q.stylesheets,we),f(Q);const Fa=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],Oa=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A checkbox with a built-in label and indeterminate support.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"Checked state."},{name:"indeterminate",type:"boolean",default:"false",description:"Visual mixed state (synced onto the native input imperatively)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the checkbox."}],code:'<fandry-checkbox label="Accept terms" onchange={handleChange}></fandry-checkbox>'},{slug:"combobox",name:"Combobox",tag:"fandry-combobox",parts:["base","label","required","control","input","chevron","panel","listbox","group","group-label","option","option-label","option-description","empty","help-text"],states:["disabled","selected","active"],customize:{title:"Custom colors and parts",demo:"combobox-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A searchable select \u2014 type to narrow the options, then pick one.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown when nothing is selected or typed."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"name",type:"string",default:"''",description:"Exposed as `data-name` on the input."},{name:"options",type:"{ label, value, description?, group?, keywords?, disabled? }[]",default:"[]",description:"The options. Search matches label, description, keywords and group; a prefix in the label ranks first."},{name:"value",type:"string",default:"''",description:"Selected value. Listen for `change` (detail is the new value)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."},{name:"required",type:"boolean",default:"false",description:"Marks the field required (asterisk + aria-required)."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native input (e.g. `{ tabIndex: 2 }`); keys the component controls are ignored with a warning."},{name:"empty (slot)",type:"slot",default:"'No results'",description:"Replaces the message shown when nothing matches."}],code:`<fandry-combobox
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
  <fandry-input
    label="Email"
    type="email"
    placeholder="you@brand.com"
    help-text="We'll send your receipt here."
    required
  ></fandry-input>
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
}`},category:"Forms",description:"A text input with a label, help text, and prefix/suffix slots.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"type",type:"string",default:"'text'",description:"Native input type (email, password, ...)."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Field size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."}],code:'<fandry-input label="Email" type="email" placeholder="you@company.com"></fandry-input>'},{slug:"link",name:"Link",tag:"fandry-link",parts:["base","link"],states:["default","muted","disabled"],customize:{title:"Custom colors and parts",demo:"link-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A single radio input \u2014 pair with fandry-radio-group for the roving-tabindex group.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"name",type:"string",default:"''",description:"Radio group name (must match the group)."},{name:"value",type:"string",default:"''",description:"This option's value."},{name:"checked",type:"boolean",default:"false",description:"Checked state."}],code:`<fandry-radio-group name="plan" value="pro" label="Choose a plan">
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
}`},category:"Forms",description:"A roving-tabindex container for a set of fandry-radio buttons.",props:[{name:"name",type:"string",default:"''",description:"Shared name for every radio in the group."},{name:"value",type:"string",default:"''",description:"Selected value."},{name:"label",type:"string",default:"''",description:"Group label (rendered as the fieldset legend equivalent)."}],code:`<fandry-radio-group name="plan" value="pro" label="Choose a plan">
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
}`},category:"Forms",description:"A custom listbox-style select, with optional grouped options.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown when nothing is selected."},{name:"options",type:"{ label, value, disabled?, component?, componentProps? }[]",default:"[]",description:"Flat option list. An option's `component` (with `componentProps`) draws its own row instead of the label -- see the custom options example."},{name:"groups",type:"{ label, options }[]",default:"[]",description:"Grouped option list (used instead of options)."},{name:"value",type:"string",default:"''",description:"Selected value."}],code:`<fandry-select
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
}`},category:"Forms",description:"A toggle switch with a built-in label.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"On/off state."},{name:"disabled",type:"boolean",default:"false",description:"Disables the switch."}],code:'<fandry-switch label="Enable notifications" checked></fandry-switch>'},{slug:"textarea",name:"Textarea",tag:"fandry-textarea",parts:["base","label","control","textarea","help-text","required"],states:["disabled"],customize:{title:"Custom colors and parts",demo:"textarea-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A multi-line text input with a label and help text.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"rows",type:"number",default:"3",description:"Visible row count."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."}],code:'<fandry-textarea label="Notes" rows="4"></fandry-textarea>'},{slug:"alert",name:"Alert",tag:"fandry-alert",parts:["base","title","body"],states:["info","success","warning","danger"],customize:{title:"Custom colors and parts",demo:"alert-theme",code:`<!-- template -->
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
}`},category:"Feedback",description:"An inline banner for a status message, with an optional title.",props:[{name:"variant",type:"'info' | 'success' | 'warning' | 'danger'",default:"'info'",description:"Status color and icon."},{name:"title",type:"string",default:"''",description:"Optional bold title above the message."}],code:'<fandry-alert variant="success" title="Saved">Your changes have been saved.</fandry-alert>'},{slug:"badge",name:"Badge",tag:"fandry-badge",parts:["base"],states:["default","primary","success","warning","danger"],customize:{title:"Custom colors and parts",demo:"badge-theme",code:`<!-- template -->
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
}`},category:"Salesforce",description:"Find and pick a record \u2014 one by default, or several with `multiple`. It fetches nothing itself: it reports what was typed, you run the query and hand the records back.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown in the empty search box."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"name",type:"string",default:"''",description:"Exposed as `data-name` on the input."},{name:"results",type:"{ id, label, description?, disabled?, \u2026 }[]",default:"[]",description:"Matches for the current search, shown exactly as given (never re-filtered). Extra fields ride along and come back in `change`."},{name:"loading",type:"boolean",default:"false",description:"Shows a searching indicator while your query is in flight."},{name:"multiple",type:"boolean",default:"false",description:"Allow any number of records, shown as removable chips with a \u201CClear all\u201D. The list stays open after each pick, already-chosen records are not offered again, and Backspace in an empty field removes the last chip."},{name:"value",type:"string | string[]",default:"''",description:"The selected id (an array of ids with `multiple`). Set it to render existing data; it updates when the user picks or clears. The lookup names each id from `record`/`records` or `results`; for any it can't, it fires `resolve` and shows the raw id (muted) until you supply the record."},{name:"record",type:"{ id, label, \u2026 } | null",default:"null",description:"Single mode: the selected record, shown as the field's value with a clear button. On its own it preselects; once `value` has been set it only supplies the name for that id."},{name:"records",type:"{ id, label, \u2026 }[]",default:"[]",description:"Multiple mode: the selected records. On its own it preselects; once `value` has been set it only supplies names for those ids (any subset is fine)."},{name:"required",type:"boolean",default:"false",description:"Marks the field required (asterisk + aria-required)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field and the pill's clear button."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native input; keys the component controls are ignored with a warning."},{name:"search (event)",type:"CustomEvent<{ query }>",default:"\u2014",description:"Fires when the list opens by click or ArrowDown (immediately, so an empty query can offer recent records), after typing pauses, and in `multiple` mode after each pick."},{name:"resolve (event)",type:"CustomEvent<{ values }>",default:"\u2014",description:"Fires once for ids set through `value` that the lookup can't name yet. Look them up and set `record`/`records`. It does not repeat for an id already asked about."},{name:"change (event)",type:"CustomEvent<{ value, record }> | CustomEvent<{ values, records }>",default:"\u2014",description:"Single mode: `{ value, record }` on pick, and `{ value: '', record: null }` on clear. Multiple mode: `{ values, records }` on every pick, removal and Clear all."},{name:"empty (slot)",type:"slot",default:"'No records found'",description:"Replaces the message shown when a search has no matches."},{name:"clear-all \xB7 searching (slots)",type:"slot",default:"'Clear all' \xB7 'Searching\u2026'",description:"Replace the Clear all button's text and the searching line."},{name:"messages",type:"{ searching, clear(name), remove(name) }",default:"{}",description:"Replaces the accessible names of the spinner and the clear and remove buttons, e.g. to translate them."}],code:`<!-- template -->
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
}`}]}],Na=[{label:"Home",value:"/"},{label:"Getting started",value:"/getting-started"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce"},{label:"Components",value:"/components"},{label:"Blocks",value:"/blocks"},{label:"Blocks: Data table",value:"/blocks/data-table"},{label:"Blocks: Form",value:"/blocks/form"},{label:"Examples",value:"/examples"}],Ae=/Mac|iPhone|iPad/.test(navigator.platform);class De extends E{constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[...Na.map(r=>({...r,group:"Pages"})),...Fa.flatMap(r=>Oa.filter(t=>t.category===r).map(t=>({label:t.name,value:`/components/${t.slug}`,group:r,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=r=>{(Ae?r.metaKey:r.ctrlKey)&&r.key?.toLowerCase()==="k"&&(r.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get shortcutHint(){return Ae?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}y(De,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const Va=h(De,{tmpl:Ra,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function qa(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+`display: block;background: radial-gradient(
 circle at 15% 0%,
 hsl(var(--brand-primary, 330 81% 48%) / 0.12),
 transparent 55%
 ),
 radial-gradient(
 circle at 85% 10%,
 hsl(var(--brand-accent, 199 89% 36%) / 0.12),
 transparent 55%
 );}.container`+t+" {max-width: 44rem;margin: 0 auto;padding: var(--fd-space-6) var(--fd-space-6) 0;display: flex;flex-direction: column;align-items: center;text-align: center;gap: var(--fd-space-4);}.headline"+t+" {margin: 0;}.subhead"+t+" {max-width: 34rem;}.cta-row"+t+" {display: flex;gap: var(--fd-space-3);flex-wrap: wrap;justify-content: center;margin-top: var(--fd-space-2);}.demo-grid-wrap"+t+" {max-width: 72rem;margin: 0 auto;padding: calc(var(--fd-space-6) * 1.5) var(--fd-space-6) calc(var(--fd-space-6) * 2);}"}var Le=[qa];function Ba(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.badge--success"+t+" {background: hsl(var(--_fd-success));color: hsl(var(--_fd-success-foreground));}.badge--warning"+t+" {background: hsl(var(--_fd-warning));color: hsl(var(--_fd-warning-foreground));}.badge--danger"+t+" {background: hsl(var(--_fd-danger));color: hsl(var(--_fd-danger-foreground));}"}var Re=[Ba];const Ka={key:1},ja=[];function A(a,e,r,t){const{ncls:s,s:n,h:o}=a;return[o("span",{className:s(e.classes),attrs:{part:e.basePart},key:0},[n("",Ka,ja,r)])]}var Ha=u(A);A.slots=[""],A.stylesheets=[],A.stylesheetToken="lwc-7jnsj78lpql",A.legacyStylesheetToken="fandry-badge_badge",Re&&A.stylesheets.push.apply(A.stylesheets,Re),f(A);class Fe extends _{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}get basePart(){return z("base",{[this.variant||"default"]:!0})}}y(Fe,{publicProps:{variant:{config:0}}});const Y=h(Fe,{tmpl:Ha,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ga(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var Oe=[Ga];const Wa={key:1},Ua=[];function D(a,e,r,t){const{ncls:s,s:n,h:o}=a;return[o("div",{className:s(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[n("",Wa,Ua,r)])]}var Qa=u(D);D.slots=[""],D.stylesheets=[],D.stylesheetToken="lwc-4htp61u8vnv",D.legacyStylesheetToken="fandry-heading_heading",Oe&&D.stylesheets.push.apply(D.stylesheets,Oe),f(D);class Ne extends _{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}y(Ne,{publicProps:{level:{config:3}},fields:["_level"]});const x=h(Ne,{tmpl:Qa,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ya(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var Ve=[Ya];const Ja={key:1},Xa=[];function L(a,e,r,t){const{ncls:s,s:n,h:o}=a;return[o("div",{className:s(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[n("",Ja,Xa,r)])]}var Za=u(L);L.slots=[""],L.stylesheets=[],L.stylesheetToken="lwc-4f041bjpr1h",L.legacyStylesheetToken="fandry-text_text",Ve&&L.stylesheets.push.apply(L.stylesheets,Ve),f(L);class qe extends _{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}get basePart(){return z("base",{[this.variant||"default"]:!0})}}y(qe,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const m=h(qe,{tmpl:Za,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function es(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.grid"+t+" {display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: var(--fd-space-4);text-align: left;}@media (max-width: 60rem) {.grid"+t+" {grid-template-columns: repeat(2, minmax(0, 1fr));}}@media (max-width: 32rem) {.grid"+t+" {grid-template-columns: 1fr;}}.demo-card"+t+" > *"+t+" + *"+t+" {margin-top: var(--fd-space-3);display: block;}.btn-row"+t+" {display: flex;gap: var(--fd-space-2);flex-wrap: wrap;}.mini-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);flex-wrap: wrap;}.bars"+t+" {display: flex;align-items: flex-end;gap: var(--fd-space-2);height: 6rem;}.bar-col"+t+" {flex: 1;display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-1);height: 100%;justify-content: flex-end;}.bar"+t+` {width: 100%;border-radius: var(--fd-radius-sm) var(--fd-radius-sm) 0 0;background: linear-gradient(
 90deg,
 hsl(var(--brand-primary-dark, 330 81% 40%)),
 hsl(var(--brand-accent-dark, 199 89% 28%))
 );}.notif-card`+t+" {position: relative;}"}var Be=[es];function ts(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));}.input"+t+" {flex: 1;min-width: 0;border: none;outline: none;font: inherit;background: transparent;}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.control"+t+` {display: flex;align-items: center;border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-1) var(--_fd-space-2);background: hsl(var(--_fd-bg));transition: border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease;}.control:focus-within`+t+" {border-color: hsl(var(--_fd-border-focus));box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:focus"+t+" {outline: none;}.control--sm"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-xs);}.control--md"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-md);}.control--lg"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3);font-size: var(--_fd-font-size-md);}"}var Ke=[ts];function as(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-block;}.label"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"}var je=[as];const ss=v`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,rs={label:!0},ns={key:1},os=[];function R(a,e,r,t){const{gid:s,s:n,st:o,h:i}=a;return[i("label",{classMap:rs,attrs:{part:"base",for:s(e.htmlFor)},props:{...e.resolvedElementProps},key:0},[n("",ns,os,r),e.required?o(ss,3):null])]}var is=u(R);R.slots=[""],R.stylesheets=[],R.stylesheetToken="lwc-2qgum40845j",R.legacyStylesheetToken="fandry-label_label",je&&R.stylesheets.push.apply(R.stylesheets,je),f(R);const ds=["htmlFor","class"];class He extends _{constructor(...e){super(...e);this.htmlFor="",this.required=!1,this.elementProps={}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,ds,"fandry-label")}}y(He,{publicProps:{htmlFor:{config:0},required:{config:0},elementProps:{config:0}}});const Ge=h(He,{tmpl:is,sel:"fandry-label",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),ls=v`<div${"a0:id"} class="help-text${0}" part="help-text"${2}>${"t1"}</div>`,cs={classMap:{"form-control":!0},attrs:{part:"base"},key:0},ps={exportparts:"base: label, required"},hs={classMap:{prefix:!0},attrs:{part:"prefix"},key:3},us={attrs:{name:"prefix"},key:4},We=[],fs={input:!0},ms={classMap:{suffix:!0},attrs:{part:"suffix"},key:6},ys={attrs:{name:"suffix"},key:7};function F(a,e,r,t){const{d:s,t:n,c:o,ncls:i,s:d,h:c,gid:p,b:l,sp:g,st:k}=a,{_m0:W}=t;return[c("div",cs,[e.hasLabel?o("fandry-label",Ge,{attrs:ps,props:{htmlFor:"input",required:e.required},key:1},[n(" "+s(e.label)+" ")]):null,c("div",{className:i(e.controlClasses),attrs:{part:e.controlPart},key:2},[c("span",hs,[d("prefix",us,We,r)]),c("input",{classMap:fs,attrs:{part:"input",id:p("input"),type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":p("help-text")},props:{value:e.value,...e.resolvedElementProps},key:5,on:W||(t._m0={input:l(e.handleInput),change:l(e.handleChange),focus:l(e.handleFocus),blur:l(e.handleBlur)})}),c("span",ms,[d("suffix",ys,We,r)])]),e.hasHelpText?k(ls,9,[g(0,{attrs:{id:p("help-text")}},null),g(1,null,s(e.helpText))]):null])]}var bs=u(F);F.slots=["prefix","suffix"],F.stylesheets=[],F.stylesheetToken="lwc-24cs3ca29bn",F.legacyStylesheetToken="fandry-input_input",Ke&&F.stylesheets.push.apply(F.stylesheets,Ke),f(F);const gs=["id","type","name","value","disabled","readonly","required","class","ariaDescribedby","ariaDescribedByElements","oninput","onchange","onfocus","onblur"];class Ue extends _{constructor(...e){super(...e);this.label="",this.helpText="",this.value="",this.type="text",this.name="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.size="md",this.elementProps={},this.hasFocus=!1}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,gs,"fandry-input")}get hasLabel(){return!!this.label}get hasHelpText(){return!!this.helpText}get controlClasses(){return["control",`control--${this.size}`].join(" ")}focus(){this.template.querySelector("input")?.focus()}handleInput(e){e.stopPropagation();const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}handleFocus(){this.hasFocus=!0}handleBlur(){this.hasFocus=!1}get controlPart(){return z("control",{disabled:this.disabled})}}y(Ue,{publicProps:{label:{config:0},helpText:{config:0},value:{config:0},type:{config:0},name:{config:0},placeholder:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},size:{config:0},elementProps:{config:0}},publicMethods:["focus"],track:{hasFocus:1}});const pe=h(Ue,{tmpl:bs,sel:"fandry-input",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function vs(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));}.textarea"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-2);font: inherit;resize: vertical;background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));}.textarea:focus-visible"+t+` {outline: none;border-color: hsl(var(--_fd-border-focus));box-shadow: 0 0 0 var(--_fd-ring-offset) hsl(var(--_fd-bg)),
 0 0 0 calc(var(--_fd-ring-width) + var(--_fd-ring-offset))
 hsl(var(--_fd-ring-color));}.help-text`+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}"}var Qe=[vs];const _s=v`<div${"a0:id"} class="help-text${0}" part="help-text"${2}>${"t1"}</div>`,ks={classMap:{"form-control":!0},attrs:{part:"base"},key:0},ws={exportparts:"base: label, required"},xs={textarea:!0};function J(a,e,r,t){const{d:s,t:n,c:o,gid:i,b:d,h:c,sp:p,st:l}=a,{_m0:g}=t;return[c("div",ks,[e.hasLabel?o("fandry-label",Ge,{attrs:ws,props:{htmlFor:"textarea",required:e.required},key:1},[n(" "+s(e.label)+" ")]):null,c("textarea",{classMap:xs,attrs:{part:e.controlPart,id:i("textarea"),name:e.name,placeholder:e.placeholder,rows:e.rows,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":i("help-text"),"data-value":e.value},props:{...e.resolvedElementProps},key:2,on:g||(t._m0={input:d(e.handleInput),change:d(e.handleChange)})}),e.hasHelpText?l(_s,4,[p(0,{attrs:{id:i("help-text")}},null),p(1,null,s(e.helpText))]):null])]}var Ss=u(J);J.stylesheets=[],J.stylesheetToken="lwc-70m3k602isk",J.legacyStylesheetToken="fandry-textarea_textarea",Qe&&J.stylesheets.push.apply(J.stylesheets,Qe),f(J);const Ps=["id","name","value","rows","disabled","readonly","required","class","ariaDescribedby","ariaDescribedByElements","oninput","onchange"];class Ye extends _{constructor(...e){super(...e);this.label="",this.helpText="",this.value="",this.name="",this.placeholder="",this.rows=3,this.disabled=!1,this.readonly=!1,this.required=!1,this.elementProps={}}get hasLabel(){return!!this.label}get hasHelpText(){return!!this.helpText}renderedCallback(){const e=this.template.querySelector(".textarea");e&&e.value!==this.value&&(e.value=this.value)}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Ps,"fandry-textarea")}focus(){this.template.querySelector("textarea")?.focus()}handleInput(e){e.stopPropagation();const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}get controlPart(){return z("control textarea",{disabled:this.disabled})}}y(Ye,{publicProps:{label:{config:0},helpText:{config:0},value:{config:0},name:{config:0},placeholder:{config:0},rows:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const zs=h(Ye,{tmpl:Ss,sel:"fandry-textarea",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Cs(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-block;}.box"+t+` {width: var(--_fd-size-sm);height: var(--_fd-size-sm);flex: 0 0 var(--_fd-size-sm);border-radius: var(--_fd-radius-sm);border: var(--_fd-border-width) solid hsl(var(--_fd-border));background: hsl(var(--_fd-bg));display: inline-flex;align-items: center;justify-content: center;transition: border-color var(--_fd-duration-fast) ease,
 background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.control`+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.check"+t+` {width: calc(var(--_fd-size-sm) * 0.625);height: calc(var(--_fd-size-sm) * 0.375);border-left: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));border-bottom: calc(var(--_fd-size-sm) * 0.125) solid hsl(var(--_fd-primary-foreground));transform: translateY(-1px) rotate(-45deg) scale(0.9);opacity: 0;transition: opacity var(--_fd-duration-fast) ease,
 transform var(--_fd-duration-fast) ease;}.input:checked`+t+" + .box"+t+" {background: hsl(var(--_fd-primary));border-color: hsl(var(--_fd-primary));}.input:checked"+t+" + .box"+t+" .check"+t+" {opacity: 1;transform: translateY(-1px) rotate(-45deg) scale(1);}.control:focus-within"+t+" .box"+t+" {box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:disabled"+t+" + .box"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"}var Je=[Cs];const Es=v`<span class="box${0}"${"a0:part"} aria-hidden="true"${2}><span class="check${0}" part="indicator"${2}></span></span>`,Ms={control:!0},$s={input:!0},Is={classMap:{label:!0},attrs:{part:"label"},key:4},Ts={key:5};function O(a,e,r,t){const{b:s,h:n,sp:o,st:i,d,t:c,s:p}=a,{_m0:l}=t;return[n("label",{classMap:Ms,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:$s,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,"aria-checked":e.ariaChecked,"aria-label":e.ariaLabel},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:l||(t._m0={change:s(e.handleChange)})}),i(Es,3,[o(0,{attrs:{part:e.controlPart}},null)]),e.label?n("span",Is,[p("",Ts,[c(d(e.label))],r)]):null])]}var As=u(O);O.slots=[""],O.stylesheets=[],O.stylesheetToken="lwc-375ftk9u572",O.legacyStylesheetToken="fandry-checkbox_checkbox",Je&&O.stylesheets.push.apply(O.stylesheets,Je),f(O);const Ds=["type","name","value","checked","disabled","class","onchange","ariaChecked","ariaLabel"];class Xe extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.ariaLabel="",this.elementProps={tabIndex:0},this.indeterminate=!1}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Ds,"fandry-checkbox")}get ariaChecked(){return this.indeterminate?"mixed":this.checked?"true":"false"}renderedCallback(){const e=this.template.querySelector(".input");e&&(e.indeterminate=this.indeterminate)}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const r=e.target;this.checked=r.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return z("control",{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled})}}y(Xe,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},ariaLabel:{config:0},elementProps:{config:0},indeterminate:{config:0}},publicMethods:["focus"]});const Ls=h(Xe,{tmpl:As,sel:"fandry-checkbox",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Rs(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-block;}.control"+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.track"+t+` {width: var(--_fd-switch-width);height: calc(var(--_fd-size-sm) + 2 * var(--_fd-switch-padding));flex: 0 0 var(--_fd-switch-width);border-radius: var(--_fd-radius-full);background: hsl(var(--_fd-border));display: inline-flex;align-items: center;padding: var(--_fd-switch-padding);transition: background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.thumb`+t+" {width: var(--_fd-size-sm);height: var(--_fd-size-sm);border-radius: 50%;background: hsl(var(--_fd-bg));transform: translateX(0);transition: transform var(--_fd-duration-fast) ease;}.input:checked"+t+" + .track"+t+" {background: hsl(var(--_fd-primary));}.input:checked"+t+" + .track"+t+" .thumb"+t+" {transform: translateX(calc(var(--_fd-switch-width) - var(--_fd-size-sm) - 2 * var(--_fd-switch-padding)));}.control:focus-within"+t+" .track"+t+` {box-shadow: 0 0 0 var(--_fd-ring-width)
 hsl(var(--_fd-ring-color));}.input:disabled`+t+" + .track"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"}var Ze=[Rs];const Fs=v`<span class="track${0}"${"a0:part"} aria-hidden="true"${2}><span class="thumb${0}" part="indicator"${2}></span></span>`,Os=v`<span class="label${0}" part="label"${2}>${"t1"}</span>`,Ns={control:!0},Vs={input:!0};function X(a,e,r,t){const{b:s,h:n,sp:o,st:i,d}=a,{_m0:c}=t;return[n("label",{classMap:Ns,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:Vs,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,role:"switch","aria-checked":e.ariaChecked},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:c||(t._m0={change:s(e.handleChange)})}),i(Fs,3,[o(0,{attrs:{part:e.controlPart}},null)]),e.label?i(Os,5,[o(1,null,d(e.label))]):null])]}var qs=u(X);X.stylesheets=[],X.stylesheetToken="lwc-2gg3sokj2de",X.legacyStylesheetToken="fandry-switch_switch",Ze&&X.stylesheets.push.apply(X.stylesheets,Ze),f(X);const Bs=["type","name","value","checked","disabled","class","role","onchange","ariaChecked"];class et extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.elementProps={tabIndex:0}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Bs,"fandry-switch")}get ariaChecked(){return this.checked?"true":"false"}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const r=e.target;this.checked=r.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}get controlPart(){return z("control",{checked:this.checked,disabled:this.disabled})}}y(et,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const Ks=h(et,{tmpl:qs,sel:"fandry-switch",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function js(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var tt=[js];const Hs={classMap:{card:!0},attrs:{part:"base"},key:0},Gs={key:1},Ws=[];function N(a,e,r,t){const{s,h:n}=a;return[n("div",Hs,[s("",Gs,Ws,r)])]}var Us=u(N);N.slots=[""],N.stylesheets=[],N.stylesheetToken="lwc-66cpcf0iuus",N.legacyStylesheetToken="fandry-card_card",tt&&N.stylesheets.push.apply(N.stylesheets,tt),f(N);class Qs extends _{}const Z=h(Qs,{tmpl:Us,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ys(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.toast"+t+" {display: flex;align-items: flex-start;justify-content: space-between;gap: var(--_fd-space-3);padding: var(--_fd-space-3) var(--_fd-space-4);border-radius: var(--_fd-radius-md);border-left: var(--_fd-border-width-lg) solid hsl(var(--_fd-accent));background: hsl(var(--_fd-bg));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));animation: fd-fade-up-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.toast--success"+t+" {border-left-color: hsl(var(--_fd-success));}.toast--warning"+t+" {border-left-color: hsl(var(--_fd-warning));}.toast--danger"+t+" {border-left-color: hsl(var(--_fd-danger));}.toast--closing"+t+" {animation: fd-fade-up-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}"}var at=[Ys];const Js={key:1},Xs=[];function V(a,e,r,t){const{ncls:s,s:n,h:o}=a;return[o("div",{className:s(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[n("",Js,Xs,r)])]}var Zs=u(V);V.slots=[""],V.stylesheets=[],V.stylesheetToken="lwc-73ujeb3ppoa",V.legacyStylesheetToken="fandry-toast_toast",at&&V.stylesheets.push.apply(V.stylesheets,at),f(V);class st extends _{constructor(...e){super(...e);this.variant="info",this._duration=5e3,this.isClosing=!1,this.dismissTimerId=null,this.dismissNotified=!1}get duration(){return this._duration}set duration(e){this._duration=Number(e)}connectedCallback(){this.scheduleAutoDismiss()}disconnectedCallback(){this.clearDismissTimer()}get classes(){return["toast",`toast--${this.variant}`,this.isClosing?"toast--closing":""].filter(Boolean).join(" ")}get role(){return this.variant==="warning"||this.variant==="danger"?"alert":"status"}scheduleAutoDismiss(){this.duration>0&&(this.dismissTimerId=window.setTimeout(()=>this.dismiss(),this.duration))}clearDismissTimer(){this.dismissTimerId!==null&&(window.clearTimeout(this.dismissTimerId),this.dismissTimerId=null)}dismiss(){this.isClosing||(this.clearDismissTimer(),this.isClosing=!0)}renderedCallback(){!this.isClosing||this.dismissNotified||(this.dismissNotified=!0,be(this.template.querySelector(".toast")).then(()=>{this.dispatchEvent(new CustomEvent("dismiss",{bubbles:!0}))}))}get basePart(){return z("base",{[this.variant||"info"]:!0})}}y(st,{publicProps:{variant:{config:0},duration:{config:3}},publicMethods:["dismiss"],track:{isClosing:1},fields:["_duration","dismissTimerId","dismissNotified"]});const er=h(st,{tmpl:Zs,sel:"fandry-toast",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function tr(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: contents;}.viewport"+t+" {position: fixed;z-index: var(--_fd-z-overlay);display: flex;flex-direction: column;gap: var(--_fd-space-2);width: var(--_fd-toast-width);max-width: calc(100vw - var(--_fd-space-4) * 2);pointer-events: none;}.viewport--contained"+t+" {position: absolute;max-width: calc(100% - var(--_fd-space-4) * 2);}.viewport"+t+" "+t+"::slotted(*) {pointer-events: auto;}.viewport--top-left"+t+" {top: var(--_fd-space-4);left: var(--_fd-space-4);}.viewport--top-right"+t+" {top: var(--_fd-space-4);right: var(--_fd-space-4);}.viewport--bottom-left"+t+" {bottom: var(--_fd-space-4);left: var(--_fd-space-4);}.viewport--bottom-right"+t+" {bottom: var(--_fd-space-4);right: var(--_fd-space-4);}"}var rt=[tr];const ar={key:1},sr=[];function q(a,e,r,t){const{ncls:s,s:n,h:o}=a;return[o("div",{className:s(e.classes),attrs:{part:"base",role:e.role,"aria-label":e.ariaLabel},key:0},[n("",ar,sr,r)])]}var rr=u(q);q.slots=[""],q.stylesheets=[],q.stylesheetToken="lwc-1i36vtch1o7",q.legacyStylesheetToken="fandry-toastViewport_toastViewport",rt&&q.stylesheets.push.apply(q.stylesheets,rt),f(q);class nt extends _{constructor(...e){super(...e);this.placement="bottom-right",this.contained=!1,this.label=""}get classes(){return["viewport",`viewport--${this.placement}`,this.contained?"viewport--contained":""].filter(Boolean).join(" ")}get role(){return this.label?"region":void 0}get ariaLabel(){return this.label?this.label:void 0}}y(nt,{publicProps:{placement:{config:0},contained:{config:0},label:{config:0}}});const nr=h(nt,{tmpl:rr,sel:"fandry-toast-viewport",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),or=v`<div class="bar${0}"${"s0"}${2}></div>`,ir={classMap:{grid:!0},key:0},dr={classMap:{"demo-card":!0,"controls-card":!0},key:1},lr={classMap:{"btn-row":!0},key:2},cr={props:{size:"sm"},key:3},pr={props:{size:"sm",variant:"secondary"},key:4},hr={props:{size:"sm",variant:"ghost"},key:5},ur={props:{size:"sm",placeholder:"Name"},key:6},fr={props:{placeholder:"Message",rows:"2"},key:7},mr={classMap:{"mini-row":!0},key:8},yr={key:9},br={props:{variant:"primary"},key:10},gr={props:{label:"Checked",checked:!0},key:11},vr={props:{checked:!0},key:12},_r={classMap:{"demo-card":!0,"chart-card":!0},key:13},kr={props:{as:"span",size:"xs",variant:"muted"},key:14},wr={props:{level:"4"},key:15},xr={classMap:{bars:!0},key:16},Sr={"bar-col":!0},Pr={props:{as:"span",size:"xs",variant:"muted"},key:20},zr={classMap:{"demo-card":!0,"theme-card":!0},key:21},Cr={props:{level:"4"},key:22},Er={props:{variant:"muted",size:"sm"},key:23},Mr={classMap:{"btn-row":!0},key:26},ot={size:"sm"},$r={size:"sm",variant:"secondary"},Ir={classMap:{"demo-card":!0,"notif-card":!0},key:29},Tr={props:{level:"4"},key:30},Ar={props:{variant:"muted",size:"sm"},key:31},Dr={props:{placement:"bottom-right",contained:!0,label:"Notifications"},key:33},Lr={variant:"success",duration:"3000"};function ee(a,e,r,t){const{t:s,c:n,h:o,k:i,sp:d,st:c,d:p,i:l,b:g}=a,{_m0:k,_m1:W,_m2:oe,_m3:ie,_m4:de,_m5:le}=t;return[o("div",ir,[n("fandry-card",Z,dr,[o("div",lr,[n("fandry-button",C,cr,[s("Button")]),n("fandry-button",C,pr,[s("Secondary")]),n("fandry-button",C,hr,[s("Ghost")])]),n("fandry-input",pe,ur),n("fandry-textarea",zs,fr),o("div",mr,[n("fandry-badge",Y,yr,[s("Default")]),n("fandry-badge",Y,br,[s("Primary")]),n("fandry-checkbox",Ls,gr),n("fandry-switch",Ks,vr)])]),n("fandry-card",Z,_r,[n("fandry-text",m,kr,[s("Build velocity")]),n("fandry-heading",x,wr,[s("Faster every month")]),o("div",xr,l(e.bars,function(P){return o("div",{classMap:Sr,key:i(17,P.key)},[c(or,19,[d(0,{style:P.barStyle},null)]),n("fandry-text",m,Pr,[s(p(P.label))])])}))]),n("fandry-card",Z,zr,[n("fandry-heading",x,Cr,[s("Theme your brand")]),n("fandry-text",m,Er,[s("One token scale, retheme anywhere.")]),n("fandry-input",pe,{props:{label:"Primary color",value:e.primaryColor},key:24,on:k||(t._m0={input:g(e.handlePrimaryColorInput)})}),n("fandry-input",pe,{props:{label:"Accent color",value:e.accentColor},key:25,on:W||(t._m1={input:g(e.handleAccentColorInput)})}),o("div",Mr,[n("fandry-button",C,{props:ot,key:27,on:oe||(t._m2={click:g(e.handleApplyTheme)})},[s("Apply theme")]),n("fandry-button",C,{props:$r,key:28,on:ie||(t._m3={click:g(e.handleResetTheme)})},[s("Reset")])])]),n("fandry-card",Z,Ir,[n("fandry-heading",x,Tr,[s("Try it live")]),n("fandry-text",m,Ar,[s("A real fandry-toast, not a screenshot.")]),n("fandry-button",C,{props:ot,key:32,on:de||(t._m4={click:g(e.handleShowToast)})},[s("Show notification")]),n("fandry-toast-viewport",nr,Dr,l(e.toasts,function(P){return n("fandry-toast",er,{attrs:{"data-id":P.id},props:Lr,key:i(34,P.id),on:le||(t._m5={dismiss:g(e.handleToastDismiss)})},[s(p(P.message))])}))])])]}var Rr=u(ee);ee.stylesheets=[],ee.stylesheetToken="lwc-75i9pi7s0jp",ee.legacyStylesheetToken="fandryui-heroDemoGrid_heroDemoGrid",Be&&ee.stylesheets.push.apply(ee.stylesheets,Be),f(ee);const it="#DB1B6F",dt="#0A7AAE",lt=8;function ct(a){const e=/^#?([0-9a-f]{6})$/i.exec(a.trim());if(!e)return null;const r=parseInt(e[1],16),t=(r>>16&255)/255,s=(r>>8&255)/255,n=(r&255)/255,o=Math.max(t,s,n),i=Math.min(t,s,n),d=(o+i)/2;let c=0,p=0;if(o!==i){const l=o-i;switch(p=d>.5?l/(2-o-i):l/(o+i),o){case t:c=(s-n)/l+(s<n?6:0);break;case s:c=(n-t)/l+2;break;default:c=(t-s)/l+4}c/=6}return{h:c*360,s:p*100,l:d*100}}function he({h:a,s:e,l:r}){return`${Math.round(a)} ${Math.round(e)}% ${Math.round(r)}%`}function pt(a,e){return{...a,l:Math.max(0,a.l-e)}}class ht extends E{constructor(...e){super(...e);this.primaryColor=it,this.accentColor=dt,this.bars=[{key:"dec",label:"Dec",barStyle:"height: 35%"},{key:"jan",label:"Jan",barStyle:"height: 58%"},{key:"feb",label:"Feb",barStyle:"height: 44%"},{key:"mar",label:"Mar",barStyle:"height: 82%"},{key:"apr",label:"Apr",barStyle:"height: 68%"}],this.toastIdCounter=0,this.toasts=[]}handleShowToast(){this.toastIdCounter+=1,this.toasts=[...this.toasts,{id:this.toastIdCounter,message:"Toast fired \u2014 this one is real."}]}handleToastDismiss(e){const r=Number(e.target.dataset.id);this.toasts=this.toasts.filter(t=>t.id!==r)}handlePrimaryColorInput(e){this.primaryColor=e.detail}handleAccentColorInput(e){this.accentColor=e.detail}handleApplyTheme(){const e=ct(this.primaryColor),r=ct(this.accentColor);if(!e||!r)return;const t=document.documentElement.style;t.setProperty("--brand-primary",he(e)),t.setProperty("--brand-accent",he(r)),t.setProperty("--brand-primary-dark",he(pt(e,lt))),t.setProperty("--brand-accent-dark",he(pt(r,lt)))}handleResetTheme(){this.primaryColor=it,this.accentColor=dt;const e=document.documentElement.style;e.removeProperty("--brand-primary"),e.removeProperty("--brand-accent"),e.removeProperty("--brand-primary-dark"),e.removeProperty("--brand-accent-dark")}}y(ht,{fields:["primaryColor","accentColor","bars","toastIdCounter","toasts"]});const Fr=h(ht,{tmpl:Rr,sel:"fandryui-hero-demo-grid",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Or={classMap:{hero:!0},key:0},Nr={classMap:{container:!0},key:1},Vr={props:{variant:"primary"},key:2},qr={classMap:{headline:!0},props:{level:"1"},key:3},Br={classMap:{subhead:!0},props:{size:"md",variant:"muted"},key:4},Kr={classMap:{"cta-row":!0},key:5},jr={variant:"default",size:"lg"},Hr={variant:"secondary",size:"lg"},Gr={classMap:{subhead:!0},props:{size:"sm",variant:"muted"},key:8},Wr={classMap:{"demo-grid-wrap":!0},key:9},Ur={key:10};function te(a,e,r,t){const{t:s,c:n,b:o,h:i}=a,{_m0:d,_m1:c}=t;return[i("section",Or,[i("div",Nr,[n("fandry-badge",Y,Vr,[s("Native LWC")]),n("fandry-heading",x,qr,[s("Beautiful interfaces. Built on Salesforce.")]),n("fandry-text",m,Br,[s("A lightweight, composable UI library for building modern B2B and B2C experiences on Salesforce.")]),i("div",Kr,[n("fandry-button",C,{props:jr,key:6,on:d||(t._m0={click:o(e.handlePrimaryClick)})},[s("Browse Components")]),n("fandry-button",C,{props:Hr,key:7,on:c||(t._m1={click:o(e.handleGithubClick)})},[s("View on GitHub")])]),n("fandry-text",m,Gr,[s("Built with native LWC. Designed for LWR. Made to look like your brand.")])]),i("div",Wr,[n("fandryui-hero-demo-grid",Fr,Ur)])])]}var Qr=u(te);te.stylesheets=[],te.stylesheetToken="lwc-57886c7j2ti",te.legacyStylesheetToken="fandryui-heroSection_heroSection",Le&&te.stylesheets.push.apply(te.stylesheets,Le),f(te);const Yr="https://github.com/rahulgawale/fandryui";class Jr extends E{handlePrimaryClick(){window.location.assign("/components")}handleGithubClick(){window.open(Yr,"_blank","noopener,noreferrer")}}const Xr=h(Jr,{tmpl:Qr,sel:"fandryui-hero-section",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Zr(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.section"+t+` {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);background: linear-gradient(
 180deg,
 hsl(var(--brand-accent, 199 89% 36%) / 0.06),
 transparent 60%
 );}.container`+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.title"+t+" {text-align: center;margin-bottom: var(--fd-space-6);display: block;}.grid"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-5);align-items: stretch;}@media (max-width: 60rem) {.grid"+t+" {grid-template-columns: repeat(2, minmax(0, 1fr));}}@media (max-width: 40rem) {.grid"+t+" {grid-template-columns: 1fr;}}.card-wrap"+t+" {border-radius: var(--fd-radius-lg);overflow: hidden;transition: transform 160ms ease, box-shadow 160ms ease;}.card-wrap"+t+" fandry-card"+t+",.card-wrap"+t+" fandry-card"+t+"::part(base) {height: 100%;}@media (hover: hover) {.card-wrap:hover"+t+" {transform: translateY(-4px);box-shadow: 0 12px 24px -12px color-mix(in srgb, var(--fd-color-text) 25%, transparent);}}.card-wrap"+t+" fandry-heading"+t+" + fandry-text"+t+" {display: block;margin-top: calc(var(--fd-space-3) * 2);}.icon-chip"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 2.75rem;height: 2.75rem;border-radius: var(--fd-radius-lg);margin-bottom: var(--fd-space-3);}.tint-primary"+t+" {background: hsl(var(--brand-primary, 330 81% 48%) / 0.12);color: hsl(var(--brand-primary-dark, 330 81% 40%));}.tint-accent"+t+" {background: hsl(var(--brand-accent, 199 89% 36%) / 0.12);color: hsl(var(--brand-accent-dark, 199 89% 30%));}.tint-success"+t+" {background: hsl(142 71% 30% / 0.12);color: hsl(142 71% 26%);}.tint-warning"+t+" {background: hsl(38 92% 32% / 0.12);color: hsl(38 92% 28%);}.tint-danger"+t+" {background: hsl(0 72% 51% / 0.12);color: hsl(0 72% 42%);}"}var ut=[Zr];const en=v`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path${"a1:d"}${3}/></svg>`,tn={classMap:{section:!0},key:0},an={classMap:{container:!0},key:1},sn={classMap:{title:!0},props:{level:"2"},key:2},rn={classMap:{grid:!0},key:3},nn={"card-wrap":!0},on={key:5},dn={props:{size:"md"},key:7},ln={props:{level:"3"},key:10},cn={props:{variant:"muted"},key:11};function ae(a,e,r,t){const{t:s,c:n,k:o,ncls:i,sp:d,st:c,h:p,d:l,i:g}=a;return[p("section",tn,[p("div",an,[n("fandry-heading",x,sn,[s("What you get")]),p("div",rn,g(e.features,function(k){return p("div",{classMap:nn,key:o(4,k.key)},[n("fandry-card",Z,on,[p("div",{className:i(k.chipClass),key:6},[n("fandry-icon",Me,dn,[c(en,9,[d(1,{attrs:{d:k.iconPath}},null)])])]),n("fandry-heading",x,ln,[s(l(k.title))]),n("fandry-text",m,cn,[s(l(k.description))])])])}))])])]}var pn=u(ae);ae.stylesheets=[],ae.stylesheetToken="lwc-25gq2u9na9h",ae.legacyStylesheetToken="fandryui-featureGrid_featureGrid",ut&&ae.stylesheets.push.apply(ae.stylesheets,ut),f(ae);class ft extends E{constructor(...e){super(...e);this.features=[{key:"native",chipClass:"icon-chip tint-primary",title:"Native LWC components",description:"Built with native Lightning Web Components \u2014 no framework to fight, no compile step surprises.",iconPath:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"},{key:"lightweight",chipClass:"icon-chip tint-accent",title:"Lightweight & composable",description:"Small, dependency-light primitives you compose with slots, not a dozen config props.",iconPath:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12"},{key:"branded",chipClass:"icon-chip tint-success",title:"Doesn't look like Salesforce",description:"Ship a fully-branded Salesforce site your customers would never guess runs on Lightning.",iconPath:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},{key:"faster",chipClass:"icon-chip tint-warning",title:"Faster development",description:"Sensible defaults and Claude Code-friendly source make every screen faster to build.",iconPath:"M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6"},{key:"tokens",chipClass:"icon-chip tint-danger",title:"Design tokens, not magic numbers",description:"Every color, spacing, and radius comes from one token scale you can retheme in a single place.",iconPath:"M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"},{key:"accessible",chipClass:"icon-chip tint-primary",title:"Accessible by default",description:"WCAG AA-tuned color tokens, keyboard-first controls, and correct ARIA out of the box.",iconPath:"M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3"},{key:"customizable",chipClass:"icon-chip tint-accent",title:"Highly customizable",description:"Override styling, swap markup, or extend a class directly \u2014 nothing here is a black box.",iconPath:"M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6"},{key:"brandable",chipClass:"icon-chip tint-success",title:"Brandable",description:"Reskin an entire site by changing tokens, not by rewriting components.",iconPath:"M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},{key:"boring",chipClass:"icon-chip tint-warning",title:"Boring, on purpose",description:"No hidden state, no magic \u2014 every primitive does exactly one predictable thing.",iconPath:"M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},{key:"real-world",chipClass:"icon-chip tint-danger",title:"Built for the real world",description:"Real focus management, correct tab order, and Safari quirks handled, so you don\u2019t have to.",iconPath:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]}}y(ft,{fields:["features"]});const hn=h(ft,{tmpl:pn,sel:"fandryui-feature-grid",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function un(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.section"+t+" {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.title"+t+" {text-align: center;margin-bottom: var(--fd-space-2);display: block;}.subtitle"+t+" {display: block;text-align: center;margin: 0 auto var(--fd-space-6);max-width: 34rem;}.frame-scroll"+t+" {overflow-x: auto;}.frame"+t+" {min-width: 40rem;border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-lg);overflow: hidden;background: var(--fd-color-surface);box-shadow: 0 24px 48px -24px color-mix(in srgb, var(--fd-color-text) 35%, transparent);}.topbar"+t+" {display: flex;align-items: center;gap: var(--fd-space-5);padding: var(--fd-space-3) var(--fd-space-5);border-bottom: 1px solid var(--fd-color-border);}.brand"+t+" {font-weight: var(--fd-font-weight-bold);}.topbar-links"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-4);}.search-input"+t+" {display: block;max-width: 14rem;}.account-trigger"+t+" {display: inline-flex;}.account-trigger"+t+"::part(base) {border-radius: 999px;padding-inline: 0;border-width: 0;}.menu-header"+t+" {display: flex;flex-direction: column;gap: 2px;padding: var(--fd-space-1) var(--fd-space-3) var(--fd-space-2);margin-bottom: var(--fd-space-1);border-bottom: 1px solid var(--fd-color-border);}.body"+t+" {display: flex;min-height: 22rem;}.sidebar"+t+" {width: 12rem;flex-shrink: 0;border-right: 1px solid var(--fd-color-border);padding: var(--fd-space-3);display: flex;flex-direction: column;gap: var(--fd-space-1);}.nav-item"+t+" {padding: var(--fd-space-2) var(--fd-space-3);border-radius: var(--fd-radius-md);font-size: var(--fd-font-size-sm);color: var(--fd-color-muted);cursor: pointer;user-select: none;}@media (hover: hover) {.nav-item:hover"+t+" {background: color-mix(in srgb, var(--fd-color-text) 4%, transparent);}}.nav-item:focus-visible"+t+" {outline: 2px solid hsl(var(--brand-primary, 330 81% 48%));outline-offset: 2px;}.nav-item--active"+t+",.nav-item--active:hover"+t+" {background: hsl(var(--brand-primary, 330 81% 48%));color: var(--fd-color-on-primary);}.main"+t+" {flex: 1;padding: var(--fd-space-5);}.stats"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-3);margin: var(--fd-space-4) 0 var(--fd-space-5);}.stat-card"+t+" {display: block;}.stat-card:nth-child(1)"+t+`::part(base) {background: linear-gradient(
 135deg,
 hsl(var(--brand-primary, 330 81% 48%) / 0.14),
 hsl(var(--brand-primary, 330 81% 48%) / 0.02)
 );}.stat-card:nth-child(2)`+t+`::part(base) {background: linear-gradient(
 135deg,
 hsl(var(--brand-accent, 199 89% 36%) / 0.14),
 hsl(var(--brand-accent, 199 89% 36%) / 0.02)
 );}.stat-card:nth-child(3)`+t+`::part(base) {background: linear-gradient(
 135deg,
 hsl(142 71% 30% / 0.14),
 hsl(142 71% 30% / 0.02)
 );}.orders-title`+t+" {display: block;margin-bottom: var(--fd-space-2);}.filter-bar"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);margin-bottom: var(--fd-space-2);}.orders"+t+" {display: flex;flex-direction: column;}.order-row"+t+" {display: grid;grid-template-columns: 5rem 1fr auto;align-items: center;gap: var(--fd-space-3);padding: var(--fd-space-2);margin: 0 calc(var(--fd-space-2) * -1);border-bottom: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-sm);cursor: pointer;}.order-row:last-child"+t+" {border-bottom: none;}@media (hover: hover) {.order-row:hover"+t+" {background: color-mix(in srgb, var(--fd-color-text) 3%, transparent);}}.order-row:focus-visible"+t+" {outline: 2px solid hsl(var(--brand-primary, 330 81% 48%));outline-offset: -2px;}.status-filter"+t+" {display: inline-flex;border-radius: var(--fd-radius-md);cursor: pointer;}.status-filter:hover"+t+" {filter: brightness(0.95);}.status-filter:focus-visible"+t+" {outline: 2px solid hsl(var(--brand-primary, 330 81% 48%));outline-offset: 2px;}.back-link"+t+" {display: inline-block;margin-bottom: var(--fd-space-4);}.detail-head"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);}.detail-body"+t+" {display: block;margin-top: var(--fd-space-3);max-width: 32rem;}"}var mt=[un];function fn(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-block;}.avatar"+t+" {display: inline-flex;align-items: center;justify-content: center;overflow: hidden;flex-shrink: 0;border-radius: 50%;background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text-muted));font-weight: var(--_fd-font-weight-semibold);text-transform: uppercase;}.avatar--sm"+t+" {width: var(--_fd-avatar-size-sm);height: var(--_fd-avatar-size-sm);font-size: calc(var(--_fd-avatar-size-sm) * 0.4);}.avatar--md"+t+" {width: var(--_fd-avatar-size-md);height: var(--_fd-avatar-size-md);font-size: calc(var(--_fd-avatar-size-md) * 0.4);}.avatar--lg"+t+" {width: var(--_fd-avatar-size-lg);height: var(--_fd-avatar-size-lg);font-size: calc(var(--_fd-avatar-size-lg) * 0.4);}.image"+t+" {width: 100%;height: 100%;object-fit: cover;}.initials"+t+" {line-height: 1;}"}var yt=[fn];const mn=v`<span class="initials${0}" part="initials"${2}>${"t1"}</span>`,yn={part:"base"},bn={image:!0};function se(a,e,r,t){const{ncls:s,b:n,h:o,d:i,sp:d,st:c}=a,{_m0:p}=t;return[o("span",{className:s(e.classes),attrs:yn,key:0},[e.showImage?o("img",{classMap:bn,attrs:{part:"image",src:e.src,alt:e.alt},props:{...e.resolvedElementProps},key:1,on:p||(t._m0={error:n(e.handleImageError)})}):null,e.showInitials?c(mn,3,[d(1,null,i(e.initials))]):null])]}var gn=u(se);se.stylesheets=[],se.stylesheetToken="lwc-3sp4g3rf1ki",se.legacyStylesheetToken="fandry-avatar_avatar",yt&&se.stylesheets.push.apply(se.stylesheets,yt),f(se);const vn=["src","alt","class","onerror"];class bt extends _{constructor(...e){super(...e);this.alt="",this.initials="",this.size="md",this.elementProps={},this.imageFailed=!1,this._src=""}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,vn,"fandry-avatar")}get src(){return this._src}set src(e){this._src=e,this.imageFailed=!1}get classes(){return["avatar",`avatar--${this.size}`].join(" ")}get showImage(){return!!this.src&&!this.imageFailed}get showInitials(){return!this.showImage&&!!this.initials}handleImageError(){this.imageFailed=!0}}y(bt,{publicProps:{alt:{config:0},initials:{config:0},size:{config:0},elementProps:{config:0},src:{config:3}},track:{imageFailed:1},fields:["_src"]});const _n=h(bt,{tmpl:gn,sel:"fandry-avatar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function kn(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.item"+t+` {display: flex;align-items: center;gap: var(--_fd-space-2);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);font-family: inherit;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));white-space: nowrap;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,
 color var(--_fd-duration-fast) ease;}.item:hover:not(.item--disabled)`+t+" {background: hsl(var(--_fd-bg-muted));}.item:focus-visible"+t+" {outline: none;background: hsl(var(--_fd-bg-muted));box-shadow: inset 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.item--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}"}var gt=[kn];const wn={key:1};function B(a,e,r,t){const{ncls:s,b:n,d:o,t:i,s:d,h:c}=a,{_m0:p}=t;return[c("div",{className:s(e.classes),attrs:{part:e.basePart,role:"menuitem","aria-disabled":e.ariaDisabled},props:{...e.resolvedElementProps},key:0,on:p||(t._m0={click:n(e.handleClick),keydown:n(e.handleKeydown)})},[d("",wn,[i(o(e.label))],r)])]}var xn=u(B);B.slots=[""],B.stylesheets=[],B.stylesheetToken="lwc-7bqhtrvn7hj",B.legacyStylesheetToken="fandry-menuItem_menuItem",gt&&B.stylesheets.push.apply(B.stylesheets,gt),f(B);const Sn=["role","class","ariaDisabled","onclick","onkeydown"];class vt extends _{constructor(...e){super(...e);this.value="",this.label="",this._disabled=!1,this.elementProps={tabIndex:0},this.handleClick=()=>{this.activate()},this.handleKeydown=r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this.activate())}}get disabled(){return this._disabled}set disabled(e){const r=!!e;r!==this._disabled&&(this._disabled=r,this.dispatchEvent(new CustomEvent("itemchange",{bubbles:!0})))}get classes(){return["item",this.disabled?"item--disabled":""].filter(Boolean).join(" ")}get ariaDisabled(){return this.disabled?"true":"false"}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Sn,"fandry-menu-item")}focus(){this.template.querySelector(".item")?.focus()}activate(){this.disabled||this.dispatchEvent(new CustomEvent("select",{detail:{value:this.value},bubbles:!0}))}get basePart(){return z("base",{disabled:this.disabled})}}y(vt,{publicProps:{value:{config:0},label:{config:0},disabled:{config:3},elementProps:{config:0}},publicMethods:["focus"],fields:["_disabled","handleClick","handleKeydown"]});const ge=h(vt,{tmpl:xn,sel:"fandry-menu-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Pn(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.menu"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);min-width: var(--_fd-overlay-min-width-sm);}"}var _t=[Pn];const zn={classMap:{menu:!0},attrs:{part:"base",role:"menu","aria-orientation":"vertical"},key:0},Cn=[];function K(a,e,r,t){const{b:s,s:n,h:o}=a,{_m0:i}=t;return[o("div",zn,[n("",{key:1,on:i||(t._m0={slotchange:s(e.handleSlotChange)})},Cn,r)])]}var En=u(K);K.slots=[""],K.stylesheets=[],K.stylesheetToken="lwc-1t4hh1hikp",K.legacyStylesheetToken="fandry-menu_menu",_t&&K.stylesheets.push.apply(K.stylesheets,_t),f(K);const Mn=["ArrowDown","ArrowUp"];class kt extends _{constructor(...e){super(...e);this.handleItemChange=()=>{this.updateRovingTabIndex()},this.handleSlotChange=()=>{this.updateRovingTabIndex()},this.handleKeydown=r=>{const t=this.currentItem(r);if(!!t){if(Mn.includes(r.key)){r.preventDefault(),this.moveFocus(t,r.key==="ArrowDown"?1:-1);return}if(r.key==="Home"||r.key==="End"){const s=this.getItems().filter(o=>!o.disabled),n=r.key==="Home"?s[0]:s[s.length-1];n&&(r.preventDefault(),this.updateRovingTabIndex(n),n.focus())}}}}connectedCallback(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("itemchange",this.handleItemChange)}disconnectedCallback(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("itemchange",this.handleItemChange)}renderedCallback(){this.updateRovingTabIndex()}getItems(){return Array.from(this.querySelectorAll("fandry-menu-item"))}updateRovingTabIndex(e){const r=this.getItems();let t=e??this.activeItem;(!t||t.disabled||!r.includes(t))&&(t=r.find(s=>!s.disabled)),this.activeItem=t,r.forEach(s=>{s.elementProps={tabIndex:s===t?0:-1}})}currentItem(e){return e.composedPath().find(r=>r.tagName==="FANDRY-MENU-ITEM")}moveFocus(e,r){const t=this.getItems(),s=t.indexOf(e);if(s===-1)return;let n=s;for(let i=0;i<t.length&&(n=(n+r+t.length)%t.length,!!t[n].disabled);i++);const o=t[n];o!==e&&(this.updateRovingTabIndex(o),o.focus())}}y(kt,{fields:["handleItemChange","handleSlotChange","handleKeydown"]});const $n=h(kt,{tmpl:En,sel:"fandry-menu",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function In(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: inline-block;position: relative;}.trigger"+t+" {display: inline-block;cursor: pointer;}.panel"+t+" {position: fixed;z-index: var(--_fd-z-overlay);min-width: max-content;background: hsl(var(--_fd-bg));border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));padding: var(--_fd-space-2);animation: fd-slide-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.panel--closing"+t+" {animation: fd-slide-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;pointer-events: none;}.panel--bottom"+t+" {margin-top: var(--_fd-space-1);--_fd-slide-y: calc(var(--_fd-space-2) * -1);}.panel--top"+t+" {margin-bottom: var(--_fd-space-1);--_fd-slide-y: var(--_fd-space-2);}.panel--left"+t+" {margin-right: var(--_fd-space-1);--_fd-slide-x: var(--_fd-space-2);}.panel--right"+t+" {margin-left: var(--_fd-space-1);--_fd-slide-x: calc(var(--_fd-space-2) * -1);}"}var wt=[In];const Tn={classMap:{trigger:!0},attrs:{part:"trigger"},key:0},An={attrs:{name:"trigger"},key:1},xt=[],Dn={key:3};function j(a,e,r,t){const{s,h:n,ncls:o}=a;return[n("span",Tn,[s("trigger",An,xt,r)]),e.isMounted?n("div",{className:o(e.panelClasses),style:e.panelStyle,attrs:{part:"panel",inert:e.panelInert},key:2},[s("",Dn,xt,r)]):null]}var Ln=u(j);j.slots=["","trigger"],j.stylesheets=[],j.stylesheetToken="lwc-3g2epjm4vo6",j.legacyStylesheetToken="fandry-popover_popover",wt&&j.stylesheets.push.apply(j.stylesheets,wt),f(j);class St extends _{constructor(...e){super(...e);this.placement="bottom",this.align="start",this._open=!1,this.isMounted=!1,this.panelStyle="",this.positionFrame=0,this.handleViewportChange=()=>{cancelAnimationFrame(this.positionFrame),this.positionFrame=requestAnimationFrame(()=>this.updatePosition())},this.insideClickStamp=-1,this.handleHostClick=r=>{this.insideClickStamp=r.timeStamp,r.target.closest('[slot="trigger"]')&&this.setOpen(!this.open)},this.handleDocumentClick=r=>{this.open&&r.timeStamp!==this.insideClickStamp&&this.setOpen(!1)},this.handleDocumentKeydown=r=>{this.open&&r.key==="Escape"&&(this.setOpen(!1),this.querySelector('[slot="trigger"]')?.focus())}}get open(){return this._open}set open(e){const r=this._open;this._open=e,e&&(this.isMounted=!0,this.updatePosition(),this.trackTrigger()),r&&!e&&(this.untrackTrigger(),this.restoreFocusIfStillOurs())}updatePosition(){const e=this.template.querySelector(".trigger");if(!e)return;const r=e.getBoundingClientRect(),t=document.documentElement.clientWidth,s=document.documentElement.clientHeight,n={top:"auto",right:"auto",bottom:"auto",left:"auto"};switch(this.placement){case"top":n.bottom=`${s-r.top}px`;break;case"left":n.right=`${t-r.left}px`,n.top=`${r.top}px`;break;case"right":n.left=`${r.right}px`,n.top=`${r.top}px`;break;default:n.top=`${r.bottom}px`}(this.placement==="top"||this.placement==="bottom")&&(this.align==="end"?n.right=`${t-r.right}px`:n.left=`${r.left}px`),this.panelStyle=`top: ${n.top}; right: ${n.right}; bottom: ${n.bottom}; left: ${n.left};`}trackTrigger(){window.addEventListener("scroll",this.handleViewportChange,!0),window.addEventListener("resize",this.handleViewportChange)}untrackTrigger(){window.removeEventListener("scroll",this.handleViewportChange,!0),window.removeEventListener("resize",this.handleViewportChange),cancelAnimationFrame(this.positionFrame)}get panelClasses(){return["panel",`panel--${this.placement}`,`panel--align-${this.align}`,this.open?"":"panel--closing"].filter(Boolean).join(" ")}get panelInert(){return this.open?void 0:""}renderedCallback(){if(this.open&&!this.panelStyle&&this.updatePosition(),this.open||!this.isMounted)return;const e=this.template.querySelector(".panel");be(e).then(()=>{this.open||(this.isMounted=!1)})}connectedCallback(){this.addEventListener("click",this.handleHostClick),document.addEventListener("click",this.handleDocumentClick),document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){this.untrackTrigger(),this.removeEventListener("click",this.handleHostClick),document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("keydown",this.handleDocumentKeydown)}restoreFocusIfStillOurs(){if(!this.isFocusInsideOwnContent())return;this.querySelector('[slot="trigger"]')?.focus()}isFocusInsideOwnContent(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;const r=this.template.host;let t=e;for(;t;){if(t===r)return!0;t=t instanceof ShadowRoot?t.host:t.parentNode}return!1}setOpen(e){this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent("toggle",{detail:this.open,bubbles:!0})))}}y(St,{publicProps:{placement:{config:0},align:{config:0},open:{config:3}},track:{isMounted:1,panelStyle:1},fields:["_open","positionFrame","handleViewportChange","insideClickStamp","handleHostClick","handleDocumentClick","handleDocumentKeydown"]});const Rn=h(St,{tmpl:Ln,sel:"fandry-popover",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Fn=v`<span class="brand${0}"${2}>ACME</span>`,On=v`<div${"c0"}${"a0:data-key"} role="button" tabindex="0"${2}>${"t1"}</div>`,Nn={classMap:{section:!0},key:0},Vn={classMap:{container:!0},key:1},qn={classMap:{title:!0},props:{level:"2"},key:2},Bn={classMap:{subtitle:!0},props:{variant:"muted"},key:3},Kn={classMap:{"frame-scroll":!0},key:4},jn={classMap:{frame:!0},key:5},Hn={classMap:{topbar:!0},key:6},Gn={classMap:{"topbar-links":!0},key:9},Wn={"search-input":!0},ue={variant:"muted",href:"#"},Un={"account-trigger":!0},Qn={props:{initials:"A",size:"md"},key:14},Yn={classMap:{"menu-header":!0},key:16},Jn={props:{as:"span",size:"sm"},key:17},Xn={props:{as:"span",size:"xs",variant:"muted"},key:18},Zn={props:{value:"profile",label:"Profile"},key:19},eo={props:{value:"settings",label:"Account settings"},key:20},to={props:{value:"signout",label:"Sign out"},key:21},ao={classMap:{body:!0},key:22},so={classMap:{sidebar:!0},key:23},ro={classMap:{main:!0},key:26},no={"back-link":!0},oo={classMap:{"detail-head":!0},key:28},io={props:{level:"3"},key:29},lo={props:{as:"span",size:"sm",variant:"muted"},key:31},co={classMap:{"detail-body":!0},key:32},po={props:{level:"3"},key:33},ho={props:{variant:"muted"},key:34},uo={classMap:{stats:!0},key:35},fo={"stat-card":!0},mo={props:{as:"span",size:"xs",variant:"muted"},key:37},yo={props:{level:"4"},key:38},bo={classMap:{"orders-title":!0},props:{level:"4"},key:39},go={classMap:{"filter-bar":!0},key:40},vo={props:{as:"span",size:"xs",variant:"muted"},key:41},_o={classMap:{orders:!0},key:43},Pt={"order-row":!0},ko={props:{as:"span",size:"sm"},key:45},wo={props:{as:"span",size:"sm"},key:46},zt={"status-filter":!0},xo={props:{level:"3"},key:49},So={props:{variant:"muted"},key:50},Po={classMap:{"filter-bar":!0},key:51},zo={props:{as:"span",size:"xs",variant:"muted"},key:52},Co={classMap:{orders:!0},key:54},Eo={props:{as:"span",size:"sm"},key:56},Mo={props:{as:"span",size:"sm"},key:57};function re(a,e,r,t){const{t:s,c:n,st:o,b:i,h:d,ncls:c,k:p,d:l,sp:g,i:k}=a,{_m0:W,_m1:oe,_m2:ie,_m3:de,_m4:le,_m5:P,_m6:fe,_m7:me,_m8:U,_m9:w,_m10:It,_m11:Tt,_m12:At}=t;return[d("section",Nn,[d("div",Vn,[n("fandry-heading",x,qn,[s("A B2B dashboard, built entirely from these primitives")]),n("fandry-text",m,Bn,[s("No custom UI components. Just Fandry primitives composed together.")]),d("div",Kn,[d("div",jn,[d("div",Hn,[o(Fn,8),d("div",Gn,[n("fandry-input",pe,{classMap:Wn,props:{placeholder:"Search\u2026",value:e.searchQuery},key:10,on:W||(t._m0={input:i(e.handleSearchInput)})}),n("fandry-link",S,{props:ue,key:11,on:oe||(t._m1={click:i(e.handleTopbarLinkClick)})},[s("Help")])]),n("fandry-popover",Rn,{props:{open:e.accountMenuOpen,placement:"bottom",align:"end"},key:12,on:ie||(t._m2={toggle:i(e.handleAccountMenuToggle)})},[n("fandry-button",C,{slotAssignment:"trigger",classMap:Un,props:{variant:"ghost",size:"md",elementProps:e.accountTriggerProps},key:13},[n("fandry-avatar",_n,Qn)]),n("fandry-menu",$n,{key:15,on:de||(t._m3={select:i(e.handleAccountMenuSelect)})},[d("div",Yn,[n("fandry-text",m,Jn,[s("Alex")]),n("fandry-text",m,Xn,[s("alex@acme.com")])]),n("fandry-menu-item",ge,Zn),n("fandry-menu-item",ge,eo),n("fandry-menu-item",ge,to)])])]),d("div",ao,[d("aside",so,k(e.navItemClasses,function(b){return o(On,p(25,b.key),[g(0,{on:P||(t._m5={click:i(e.handleNavClick),keydown:i(e.handleNavKeydown)}),className:c(b.className),attrs:{"data-key":b.key}},null),g(1,null,l(b.label))])})),d("main",ro,[e.showDetail?n("fandry-link",S,{classMap:no,props:ue,key:27,on:fe||(t._m6={click:i(e.handleBackFromDetail)})},[s("\u2190 Back")]):null,e.showDetail?d("div",oo,[n("fandry-heading",x,io,[s(l(e.detailRow.label))]),n("fandry-badge",Y,{props:{variant:e.detailRow.badgeVariant},key:30},[s(l(e.detailRow.badgeLabel))])]):null,e.showDetail?n("fandry-text",m,lo,[s(l(e.detailRow.code))]):null,e.showDetail?n("fandry-text",m,co,[s(l(e.detailRow.detail))]):null,e.showOverview?n("fandry-heading",x,po,[s("Good morning, Alex")]):null,e.showOverview?n("fandry-text",m,ho,[s("Here's what's happening with your account.")]):null,e.showOverview?d("div",uo,k(e.stats,function(b){return n("fandry-card",Z,{classMap:fo,key:p(36,b.key)},[n("fandry-text",m,mo,[s(l(b.label))]),n("fandry-heading",x,yo,[s(l(b.value))])])})):null,e.showOverview?n("fandry-heading",x,bo,[s("Recent Orders")]):null,e.showOverview&&e.hasStatusFilter?d("div",go,[n("fandry-text",m,vo,[s('Filtered by "'+l(e.statusFilter)+'"')]),n("fandry-link",S,{props:ue,key:42,on:me||(t._m7={click:i(e.handleClearStatusFilter)})},[s("Clear")])]):null,e.showOverview?d("div",_o,k(e.visibleRecentOrders,function(b){return d("div",{classMap:Pt,attrs:{"data-key":b.key,role:"button",tabindex:"0"},key:p(44,b.key),on:U||(t._m8={click:i(e.handleRowClick),keydown:i(e.handleRowKeydown)})},[n("fandry-text",m,ko,[s(l(b.code))]),n("fandry-text",m,wo,[s(l(b.label))]),d("span",{classMap:zt,attrs:{role:"button",tabindex:"0","data-status":b.badgeLabel},key:47,on:w||(t._m9={click:i(e.handleStatusClick),keydown:i(e.handleStatusKeydown)})},[n("fandry-badge",Y,{props:{variant:b.badgeVariant},key:48},[s(l(b.badgeLabel))])])])})):null,e.showList?n("fandry-heading",x,xo,[s(l(e.selectedView.title))]):null,e.showList?n("fandry-text",m,So,[s(l(e.selectedView.subtitle))]):null,e.showList&&e.hasStatusFilter?d("div",Po,[n("fandry-text",m,zo,[s('Filtered by "'+l(e.statusFilter)+'"')]),n("fandry-link",S,{props:ue,key:53,on:It||(t._m10={click:i(e.handleClearStatusFilter)})},[s("Clear")])]):null,e.showList?d("div",Co,k(e.visibleListRows,function(b){return d("div",{classMap:Pt,attrs:{"data-key":b.key,role:"button",tabindex:"0"},key:p(55,b.key),on:Tt||(t._m11={click:i(e.handleRowClick),keydown:i(e.handleRowKeydown)})},[n("fandry-text",m,Eo,[s(l(b.code))]),n("fandry-text",m,Mo,[s(l(b.label))]),d("span",{classMap:zt,attrs:{role:"button",tabindex:"0","data-status":b.badgeLabel},key:58,on:At||(t._m12={click:i(e.handleStatusClick),keydown:i(e.handleStatusKeydown)})},[n("fandry-badge",Y,{props:{variant:b.badgeVariant},key:59},[s(l(b.badgeLabel))])])])})):null])])])])])])]}var $o=u(re);re.stylesheets=[],re.stylesheetToken="lwc-6k3t8bovika",re.legacyStylesheetToken="fandryui-dashboardExample_dashboardExample",mt&&re.stylesheets.push.apply(re.stylesheets,mt),f(re);const ve={orders:{title:"Orders",subtitle:"All orders placed by your account.",rows:[{key:"10482",code:"#10482",label:"Industrial Pump",badgeLabel:"Shipped",badgeVariant:"primary",detail:"Placed Sep 2. Left the warehouse via ground freight \u2014 tracking updates daily."},{key:"10471",code:"#10471",label:"Valve Assembly",badgeLabel:"Processing",badgeVariant:"warning",detail:"Placed Aug 29. Awaiting stock confirmation from the Ohio facility."},{key:"10463",code:"#10463",label:"Filter Kit",badgeLabel:"Delivered",badgeVariant:"success",detail:"Placed Aug 21, delivered Aug 24. Signed for by receiving dock."},{key:"10455",code:"#10455",label:"Gasket Set",badgeLabel:"Delivered",badgeVariant:"success",detail:"Placed Aug 14, delivered Aug 18. Signed for by receiving dock."}]},products:{title:"Products",subtitle:"Items available to order.",rows:[{key:"sku-1042",code:"SKU-1042",label:"Industrial Pump",badgeLabel:"In stock",badgeVariant:"success",detail:"42 units on hand across 2 warehouses. Standard lead time: 2 business days."},{key:"sku-1041",code:"SKU-1041",label:"Valve Assembly",badgeLabel:"Low stock",badgeVariant:"warning",detail:"6 units on hand. Restock expected next week \u2014 order soon to avoid delay."},{key:"sku-1039",code:"SKU-1039",label:"Filter Kit",badgeLabel:"In stock",badgeVariant:"success",detail:"118 units on hand. Standard lead time: 1 business day."}]},invoices:{title:"Invoices",subtitle:"Billing history for your account.",rows:[{key:"inv-2044",code:"INV-2044",label:"September statement",badgeLabel:"Paid",badgeVariant:"success",detail:"$12,480.00 \u2014 paid in full via ACH on Sep 3."},{key:"inv-2039",code:"INV-2039",label:"August statement",badgeLabel:"Paid",badgeVariant:"success",detail:"$9,150.00 \u2014 paid in full via ACH on Aug 3."},{key:"inv-2031",code:"INV-2031",label:"July statement",badgeLabel:"Overdue",badgeVariant:"danger",detail:"$4,020.00 \u2014 14 days past due. A reminder was sent Aug 28."}]},service:{title:"Open Cases",subtitle:"Support cases opened by your team.",rows:[{key:"4821",code:"#4821",label:"Pump running hot",badgeLabel:"High",badgeVariant:"danger",detail:"Opened Sep 1. Field technician scheduled for Sep 4, 9am-noon."},{key:"4790",code:"#4790",label:"Replacement gasket request",badgeLabel:"Normal",badgeVariant:"warning",detail:"Opened Aug 27. Replacement part shipped Aug 30, arriving Sep 3."},{key:"4772",code:"#4772",label:"Installation question",badgeLabel:"Low",badgeVariant:"primary",detail:"Opened Aug 20. Answered by support Aug 21 \u2014 awaiting your confirmation."}]},knowledge:{title:"Knowledge Base",subtitle:"Guides and docs for your equipment.",rows:[{key:"kb-1",code:"Guide",label:"Installing a Filter Kit",badgeLabel:"Guide",badgeVariant:"default",detail:"Step-by-step install guide, 8 min read. Last updated Jul 12."},{key:"kb-2",code:"Guide",label:"Valve Assembly Maintenance",badgeLabel:"Guide",badgeVariant:"default",detail:"Recommended maintenance schedule, 5 min read. Last updated Jun 30."},{key:"kb-3",code:"FAQ",label:"Warranty & Returns",badgeLabel:"FAQ",badgeVariant:"default",detail:"Common questions on warranty coverage and the returns process."}]}};class Ct extends E{constructor(...e){super(...e);this.navItems=[{key:"overview",label:"Overview"},{key:"orders",label:"Orders"},{key:"products",label:"Products"},{key:"invoices",label:"Invoices"},{key:"service",label:"Service"},{key:"knowledge",label:"Knowledge"}],this.selectedKey="overview",this.detailRow=null,this.statusFilter=null,this.searchQuery="",this.accountMenuOpen=!1,this.stats=[{key:"orders",label:"Orders",value:"12"},{key:"balance",label:"Balance",value:"$42,050"},{key:"cases",label:"Open Cases",value:"3"}],this.recentOrders=ve.orders.rows.slice(0,3)}get navItemClasses(){return this.navItems.map(e=>({...e,className:e.key===this.selectedKey?"nav-item nav-item--active":"nav-item"}))}get isOverviewTab(){return this.selectedKey==="overview"}get showDetail(){return!!this.detailRow}get showOverview(){return!this.showDetail&&this.isOverviewTab}get showList(){return!this.showDetail&&!this.isOverviewTab}get selectedView(){return ve[this.selectedKey]??ve.orders}filterRows(e){const r=this.searchQuery.trim().toLowerCase();return e.filter(t=>{const s=!this.statusFilter||t.badgeLabel===this.statusFilter,n=!r||t.label.toLowerCase().includes(r)||t.code.toLowerCase().includes(r);return s&&n})}get visibleRecentOrders(){return this.filterRows(this.recentOrders)}get visibleListRows(){return this.filterRows(this.selectedView.rows)}get hasStatusFilter(){return!!this.statusFilter}get accountTriggerProps(){return{tabIndex:0,ariaHasPopup:"menu",ariaExpanded:this.accountMenuOpen}}handleNavClick(e){const r=e.currentTarget.dataset.key;r&&r!==this.selectedKey&&(this.selectedKey=r,this.statusFilter=null,this.searchQuery="",this.detailRow=null)}handleNavKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.handleNavClick(e))}findRowByKey(e){return e?(this.isOverviewTab?this.visibleRecentOrders:this.visibleListRows).find(t=>t.key===e):void 0}handleRowClick(e){const r=this.findRowByKey(e.currentTarget.dataset.key);r&&(this.detailRow=r)}handleRowKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.handleRowClick(e))}handleBackFromDetail(e){e.preventDefault(),this.detailRow=null}toggleStatusFilter(e){!e||(this.statusFilter=this.statusFilter===e?null:e)}handleStatusClick(e){e.stopPropagation(),this.toggleStatusFilter(e.currentTarget.dataset.status)}handleStatusKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation(),this.toggleStatusFilter(e.currentTarget.dataset.status))}handleClearStatusFilter(e){e.preventDefault(),this.statusFilter=null}handleSearchInput(e){this.searchQuery=e.detail}handleAccountMenuToggle(e){this.accountMenuOpen=e.detail}handleAccountMenuSelect(){this.accountMenuOpen=!1}handleTopbarLinkClick(e){e.preventDefault()}}y(Ct,{fields:["navItems","selectedKey","detailRow","statusFilter","searchQuery","accountMenuOpen","stats","recentOrders"]});const Io=h(Ct,{tmpl:$o,sel:"fandryui-dashboard-example",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function To(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;}.section"+t+" {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.title"+t+" {text-align: center;margin-bottom: var(--fd-space-2);display: block;}.subtitle"+t+" {display: block;text-align: center;margin: 0 auto var(--fd-space-6);max-width: 34rem;}.frame"+t+" {border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-lg);background: var(--fd-color-surface);padding-block: var(--fd-space-6);}.order-card-body"+t+" {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-2);}"}var Et=[To];const Ao=v`<code${3}>.fandry-container</code>`,Do=v`<code${3}>.fandry-grid</code>`,Lo=v`<code${3}>src/assets/styles/global.css</code>`,Ro={classMap:{section:!0},key:0},Fo={classMap:{container:!0},key:1},Oo={classMap:{title:!0},props:{level:"2"},key:2},No={classMap:{subtitle:!0},props:{variant:"muted"},key:3},Vo={classMap:{frame:!0},key:10},qo={classMap:{"fandry-container":!0},key:11},Bo={props:{level:"1"},key:12},Ko={props:{variant:"muted"},key:13},jo={classMap:{"fandry-grid":!0},key:14},Ho={classMap:{"order-card-body":!0},key:16},Go={props:{as:"span",size:"xs",variant:"muted"},key:17},Wo={props:{level:"4"},key:18},Uo={props:{as:"span",size:"sm"},key:19};function H(a,e,r,t){const{t:s,c:n,st:o,k:i,d,h:c,i:p}=a;return[c("section",Ro,[c("div",Fo,[n("fandry-heading",x,Oo,[s("Layout is just CSS")]),n("fandry-text",m,No,[o(Ao,5),s(" and "),o(Do,7),s(" aren't fandry-* components -- they're plain CSS classes from"),o(Lo,9),s(", wrapping ordinary fandry-* primitives.")]),c("div",Vo,[c("div",qo,[n("fandry-heading",x,Bo,[s("Orders")]),n("fandry-text",m,Ko,[s("3 orders placed today.")]),c("div",jo,p(e.orders,function(l){return n("fandry-card",Z,{key:i(15,l.key)},[c("div",Ho,[n("fandry-text",m,Go,[s(d(l.code))]),n("fandry-heading",x,Wo,[s(d(l.customer))]),n("fandry-text",m,Uo,[s(d(l.amount))]),n("fandry-badge",Y,{props:{variant:l.badgeVariant},key:20},[s(d(l.badgeLabel))])])])}))])])])])]}var Qo=u(H);H.renderMode="light",H.stylesheets=[],H.stylesheetToken="lwc-1i6o2cn3jqk",H.legacyStylesheetToken="fandryui-layoutPatternsExample_layoutPatternsExample",Et&&H.stylesheets.push.apply(H.stylesheets,Et),f(H);class _e extends E{constructor(...e){super(...e);this.orders=[{key:"ord-10482",code:"#10482",customer:"Acme Robotics",amount:"$1,240.00",badgeLabel:"Shipped",badgeVariant:"success"},{key:"ord-10483",code:"#10483",customer:"Bramble & Co",amount:"$86.50",badgeLabel:"Processing",badgeVariant:"warning"},{key:"ord-10484",code:"#10484",customer:"Nimbus Traders",amount:"$412.00",badgeLabel:"Backordered",badgeVariant:"danger"}]}}_e.renderMode="light",y(_e,{fields:["orders"]});const Yo=h(_e,{tmpl:Qo,sel:"fandryui-layout-patterns-example",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Jo(a,e,r){var t=a?"["+a+"]":"",s=a?"["+a+"-host]":"";return(e?":host {":s+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}"}var Mt=[Jo];const Xo={classMap:{footer:!0},key:0},Zo={classMap:{container:!0},key:1},ei={props:{as:"span",size:"sm",variant:"muted"},key:2},ti={classMap:{links:!0},key:3},ai={props:{href:"/getting-started",variant:"muted"},key:4},si={props:{href:"/examples",variant:"muted"},key:5},ri={props:{href:"/components",variant:"muted"},key:6},ni={props:{href:"/blocks",variant:"muted"},key:7},oi={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:8};function ne(a,e,r,t){const{d:s,t:n,c:o,h:i}=a;return[i("footer",Xo,[i("div",Zo,[o("fandry-text",m,ei,[n("\xA9 "+s(e.year)+" Fandry UI \xB7 MIT License")]),i("div",ti,[o("fandry-link",S,ai,[n("Get started")]),o("fandry-link",S,si,[n("Examples")]),o("fandry-link",S,ri,[n("Components")]),o("fandry-link",S,ni,[n("Blocks")]),o("fandry-link",S,oi,[n("GitHub")])])])])]}var ii=u(ne);ne.stylesheets=[],ne.stylesheetToken="lwc-3atbjjo9jl4",ne.legacyStylesheetToken="fandryui-siteFooter_siteFooter",Mt&&ne.stylesheets.push.apply(ne.stylesheets,Mt),f(ne);class di extends E{get year(){return new Date().getFullYear()}}const li=h(di,{tmpl:ii,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),ci={key:0},pi={key:1},hi={key:2},ui={key:3},fi={key:4},mi={key:5},yi={key:6};function G(a,e,r,t){const{c:s,h:n}=a;return[s("fandryui-site-header",Va,ci),n("main",pi,[s("fandryui-hero-section",Xr,hi),s("fandryui-feature-grid",hn,ui),s("fandryui-dashboard-example",Io,fi),s("fandryui-layout-patterns-example",Yo,mi)]),s("fandryui-site-footer",li,yi)]}var bi=u(G);G.renderMode="light",G.stylesheets=[],G.stylesheetToken="lwc-67rvm7fvdt8",G.legacyStylesheetToken="fandryui-home_home",ke&&G.stylesheets.push.apply(G.stylesheets,ke),f(G);class $t extends E{}$t.renderMode="light";const gi=h($t,{tmpl:bi,sel:"fandryui-home",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{gi as default};
