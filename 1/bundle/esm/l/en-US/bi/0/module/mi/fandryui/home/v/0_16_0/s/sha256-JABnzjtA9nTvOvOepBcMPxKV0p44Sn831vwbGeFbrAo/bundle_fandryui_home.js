import{registerTemplate as u,freezeTemplate as f,registerDecorators as y,registerComponent as h,LightningElement as P,parseFragment as v}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function At(a,e,s){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+"display: block;}"}var _e=[At];function Dt(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":r+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 1.75rem;height: 1.75rem;border-radius: var(--fd-radius-md);background: linear-gradient(135deg, hsl(var(--brand-primary, 330 81% 48%)), hsl(var(--brand-accent, 199 89% 36%)));color: var(--fd-color-on-primary);font-size: 0.9rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;justify-content: center;gap: var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var ke=[Dt];function Lt(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline;}.link"+t+" {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: 2px;cursor: pointer;transition: color var(--_fd-duration-fast) ease;}.link:hover"+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var we=[Lt];const Rt={"tab-stop":!0},Ft={key:2},Ot=[];function $(a,e,s,t){const{ti:r,gid:n,b:o,ncls:i,fid:d,s:c,h:p}=a,{_m0:l}=t;return[p("span",{classMap:Rt,attrs:{part:"base",role:"link",tabindex:r(e.tabStopIndex),"aria-labelledby":n("anchor"),"aria-disabled":e.ariaDisabled},key:0,on:l||(t._m0={keydown:o(e.handleKeydown)})},[p("a",{className:i(e.classes),attrs:{id:n("anchor"),part:"link",href:d(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[c("",Ft,Ot,s)])])]}var Nt=u($);$.slots=[""],$.stylesheets=[],$.stylesheetToken="lwc-38j32sll441",$.legacyStylesheetToken="fandry-link_link",we&&$.stylesheets.push.apply($.stylesheets,we),f($);var Vt=void 0;function qt(a,e,s){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 330 81% 48%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 199 89% 36%));--_fd-accent-foreground: var(--fd-accent-foreground, 0 0% 100%);--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 271 55% 40%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var Bt=[qt];function Kt(a,e,s){var t=a?"-"+a:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--fd-slide-x, 0) var(--fd-slide-y, 0);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--fd-slide-x, 0) var(--fd-slide-y, 0);}}"}var jt=[Kt];function Ht(a,e,s){var t=a?"["+a+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var Gt=[Bt,jt,Ht];class me extends P{constructor(...e){super(...e);this.lastWarnedElementProps=null}activateAnchorOnEnter(e){e.key!=="Enter"||e.target!==e.currentTarget||this.template.querySelector("a")?.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey}))}resolveTabStopIndex(e,s){if(!!s)return Number(e.tabIndex)===-1?"-1":"0"}withoutTabIndex(e){const{tabIndex:s,...t}=e;return t}resolveElementProps(e,s,t,r="elementProps"){const n={},o=[];for(const[i,d]of Object.entries(e))s.includes(i)?o.push(i):n[i]=d;return o.length&&e!==this.lastWarnedElementProps&&(this.lastWarnedElementProps=e,console.warn(`${t}: ${r} included ${o.map(i=>`"${i}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),n}}me.stylesheets=[Gt],y(me,{fields:["lastWarnedElementProps"]});const _=h(me,{tmpl:Vt,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Wt=["href","target","rel","class","ariaDisabled"];class xe extends _{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return this.resolveTabStopIndex(this.elementProps,!this.disabled)}handleKeydown(e){this.activateAnchorOnEnter(e)}get resolvedElementProps(){return this.withoutTabIndex(this.resolveElementProps(this.elementProps,Wt,"fandry-link"))}}y(xe,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const S=h(xe,{tmpl:Nt,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ut(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease, color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--default:hover:not(:disabled)"+t+" {filter: brightness(var(--_fd-hover-brightness));box-shadow: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}.button--secondary:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}.button--ghost:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}.button:focus-visible"+t+` {outline: none;box-shadow: 0 0 0 var(--_fd-ring-width)\r
 hsl(var(--_fd-ring-color));}.button:disabled`+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled)"+t+" {transform: translateY(1px);box-shadow: none;}"}var Se=[Ut];const Qt={key:1},Yt=[];function E(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("button",{className:r(e.classes),attrs:{part:"base",type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0},[n("",Qt,Yt,s)])]}var Jt=u(E);E.slots=[""],E.stylesheets=[],E.stylesheetToken="lwc-4ejlbgtq1p9",E.legacyStylesheetToken="fandry-button_button",Se&&E.stylesheets.push.apply(E.stylesheets,Se),f(E);const Xt=["type","class","disabled"];class Ce extends _{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Xt,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}}y(Ce,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const z=h(Ce,{tmpl:Jt,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Zt(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var ze=[Zt];const ea={key:1},ta=[];function M(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("span",{className:r(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.ariaLabel},key:0},[n("",ea,ta,s)])]}var aa=u(M);M.slots=[""],M.stylesheets=[],M.stylesheetToken="lwc-17qhee1uo3s",M.legacyStylesheetToken="fandry-icon_icon",ze&&M.stylesheets.push.apply(M.stylesheets,ze),f(M);class Pe extends _{constructor(...e){super(...e);this.size="md",this.label=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get ariaLabel(){return this.isDecorative?void 0:this.label}}y(Pe,{publicProps:{size:{config:0},label:{config:0}}});const $e=h(Pe,{tmpl:aa,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ra(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var Ee=[ra];const sa=v`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,na=v`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,oa=v`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,ia={panel:!0},da={classMap:{search:!0},attrs:{part:"search"},key:2},la={input:!0},ca={listbox:!0},pa={group:!0},ha={classMap:{empty:!0},attrs:{part:"empty"},key:14},ua={attrs:{name:"empty"},key:15};function I(a,e,s,t){const{ncls:r,b:n,gid:o,h:i,k:d,d:c,sp:p,st:l,dc:g,i:k,f:G,t:ne,s:oe}=a,{_m0:ie,_m1:de,_m2:C,_m3:ue,_m4:fe}=t;return[e.isMounted?i("div",{className:r(e.backdropClasses),attrs:{part:"backdrop",inert:e.backdropInert},key:0,on:ie||(t._m0={click:n(e.handleBackdropClick)})},[i("div",{classMap:ia,attrs:{part:"panel",role:"dialog","aria-modal":"true","aria-label":e.label},key:1,on:de||(t._m1={mousedown:n(e.handlePanelMouseDown)})},[i("div",da,[i("input",{classMap:la,attrs:{id:o("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.label,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":o("listbox"),"aria-activedescendant":o(e.activeDescendant)},props:{value:e.query},key:3,on:C||(t._m2={input:n(e.handleInput),keydown:n(e.handleInputKeydown)})})]),i("div",{classMap:ca,attrs:{id:o("listbox"),part:"listbox",role:"listbox","aria-label":e.label},key:4,on:ue||(t._m3={mousedown:n(e.handleListboxMouseDown)})},k(e.renderGroups,function(W){return i("div",{classMap:pa,attrs:{part:"group",role:"group","aria-label":W.label},key:d(5,W.key)},G([W.hasLabel?l(sa,7,[p(1,null,c(W.label))]):null,k(W.options,function(w){return i("div",{className:r(w.classes),attrs:{id:o(w.id),part:"option",role:"option","data-option-id":w.id,"aria-selected":w.ariaSelected,"aria-disabled":w.ariaDisabled},key:d(8,w.id),on:fe||(t._m4={click:n(e.handleOptionClick),mousemove:n(e.handleOptionMouseMove)})},[w.component?g(w.component,{props:{...w.resolvedComponentProps},key:9}):null,w.component?null:l(na,11,[p(1,null,c(w.label))]),w.component?null:w.hasDescription?l(oa,13,[p(1,null,c(w.description))]):null])})]))})),e.hasResults?null:i("div",ha,[oe("empty",ua,[ne("No results found")],s)])])]):null]}var fa=u(I);I.slots=["empty"],I.stylesheets=[],I.stylesheetToken="lwc-4bgejodik1n",I.legacyStylesheetToken="fandry-command_command",Ee&&I.stylesheets.push.apply(I.stylesheets,Ee),f(I);var ma=void 0;const ya=/[\s\-_/.]/;function le(a,e,s){const t=a.toLowerCase().indexOf(e);return t===-1?0:t===0?s*3:ya.test(a[t-1])?s*2:s}function ba(a,e){let s=0;for(const t of e){const r=Math.max(le(a.label,t,10),...(a.keywords??[]).map(n=>le(n,t,6)),le(a.description??"",t,3),le(a.group??"",t,2));if(r===0)return-1;s+=r}return s}class Me extends _{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}commit(e){}filterItems(e,s){const t=s.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((r,n)=>({item:r,index:n,score:ba(r,t)})).filter(r=>r.score>=0).sort((r,n)=>n.score-r.score||r.index-n.index).map(r=>r.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,s=this.query,t=this.entriesCache;if(t.source===e&&t.query===s)return t.entries;const r=this.buildEntries(e,s);return t.source=e,t.query=s,t.entries=r,r}buildEntries(e,s){const t=this.filterItems(e,s),r=t.filter(i=>!i.group),n=Array.from(new Set(t.filter(i=>i.group).map(i=>i.group)));return[...r,...n.flatMap(i=>t.filter(d=>d.group===i))].map((i,d)=>({id:`option-${d}`,item:i}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(s=>s.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,s=[];for(const t of this.entries){const r=t.item.group??"";let n=s.find(o=>o.label===r);n||(n={key:`group-${s.length}`,label:r,hasLabel:!!r,options:[]},s.push(n)),n.options.push(this.decorate(t,e))}return s}decorate(e,s){const{item:t,id:r}=e,n=!!t.disabled,o=this.isSelected(t);return{id:r,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:n,ariaSelected:o?"true":"false",ariaDisabled:n?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",o?"option--selected":"",r===s?"option--active":"",n?"option--disabled":""].filter(Boolean).join(" ")}}activateSelected(){const e=this.enabledEntries.find(s=>this.isSelected(s.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const s=this.enabledEntries;if(!s.length)return;const r=(s.findIndex(n=>n.id===this.resolvedActiveId)+e+s.length)%s.length;this.activeId=s[r].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const s=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);s&&this.commit(s.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const s=e.currentTarget.dataset.optionId,t=this.entries.find(r=>r.id===s);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const s=e.currentTarget.dataset.optionId;if(s===this.resolvedActiveId)return;const t=this.entries.find(r=>r.id===s);t&&!t.item.disabled&&(this.activeId=t.id)}}y(Me,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const ga=h(Me,{tmpl:ma,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ye(a){return!a||typeof a.getAnimations!="function"?Promise.resolve():Promise.allSettled(a.getAnimations({subtree:!0}).map(e=>e.finished))}const va=[];class Ie extends ga{constructor(...e){super(...e);this.label="",this.placeholder="",this.items=[],this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=s=>{this.open&&s.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const s=this._open;this._open=e,e&&(this.isMounted=!0),!s&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):s&&!e&&(this.unlockBodyScroll(),this.previouslyFocused?.focus(),this.previouslyFocused=null)}get source(){return this.items??va}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");ye(e).then(()=>{this.open||(this.isMounted=!1)})}}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}y(Ie,{publicProps:{label:{config:0},placeholder:{config:0},items:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const _a=h(Ie,{tmpl:fa,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),ka=v`<a class="logo${0}" href="/"${2}><span class="logo-mark${0}"${2}>F</span>Fandry UI</a>`,wa=v`<span class="shortcut${0}"${2}>${"t1"}</span>`,xa=v`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,Sa={classMap:{header:!0},key:0},Ca={classMap:{container:!0},key:1},za={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:4},Pa={props:{href:"/getting-started"},key:5},$a={props:{href:"/examples"},key:6},Ea={props:{href:"/components"},key:7},Ma={props:{href:"/blocks"},key:8},Ia={classMap:{actions:!0},key:9},Ta={variant:"secondary",size:"sm"},Aa={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:13},Da={props:{size:"sm",label:"GitHub"},key:14};function U(a,e,s,t){const{st:r,t:n,c:o,h:i,b:d,d:c,sp:p}=a,{_m0:l,_m1:g}=t;return[i("header",Sa,[i("div",Ca,[r(ka,3),i("nav",za,[o("fandry-link",S,Pa,[n("Get started")]),o("fandry-link",S,$a,[n("Examples")]),o("fandry-link",S,Ea,[n("Components")]),o("fandry-link",S,Ma,[n("Blocks")])]),i("div",Ia,[o("fandry-button",z,{props:Ta,key:10,on:l||(t._m0={click:d(e.handlePaletteOpen)})},[n("Search "),r(wa,12,[p(1,null,c(e.shortcutHint))])]),o("fandry-link",S,Aa,[o("fandry-icon",$e,Da,[r(xa,16)])])])])]),o("fandry-command",_a,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:17,on:g||(t._m1={toggle:d(e.handlePaletteToggle),select:d(e.handlePaletteSelect)})})]}var La=u(U);U.stylesheets=[],U.stylesheetToken="lwc-2hoqs8gnsf6",U.legacyStylesheetToken="fandryui-siteHeader_siteHeader",ke&&U.stylesheets.push.apply(U.stylesheets,ke),f(U);const Ra=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],Fa=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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
</fandry-breadcrumb>`},{slug:"breadcrumb-item",name:"Breadcrumb Item",tag:"fandry-breadcrumb-item",parts:["base","separator","link"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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

/* A per-component hook: the card's background, gradient included. */
.promo {
  --fd-card-bg: linear-gradient(135deg, hsl(160 60% 95%), hsl(45 90% 93%));
}

fandry-card::part(base) {
  padding: 1.5rem;
  box-shadow: 0 8px 24px hsl(160 40% 20% / 0.12);
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
<fandry-divider orientation="vertical"></fandry-divider>`},{slug:"pagination",name:"Pagination",tag:"fandry-pagination",parts:["base","link","previous","eyebrow","title","next","status","button"],customize:{title:"Custom colors and parts",demo:"pagination-theme",code:`<!-- template -->
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
}`},category:"Layout",description:"Previous/next navigation \u2014 as links between two adjacent pages, or as Previous / Page N of M / Next buttons for paging a collection.",props:[{name:"previous-href",type:"string",default:"''",description:"Omit to hide the previous link (e.g. on the first page)."},{name:"previous-label",type:"string",default:"''",description:"Title of the previous page."},{name:"next-href",type:"string",default:"''",description:"Omit to hide the next link (e.g. on the last page)."},{name:"next-label",type:"string",default:"''",description:"Title of the next page."},{name:"page-index",type:"number",default:"undefined",description:"Zero-based current page. Setting it switches from links to Previous/Next buttons; listen for `change` (detail.pageIndex) and update it. Replace controls via the previous, status and next slots."},{name:"page-count",type:"number",default:"-1",description:"Total pages in page mode; -1 means unknown (Next stays enabled)."}],code:`<fandry-pagination
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
</fandry-sidebar>`},{slug:"sidebar-item",name:"Sidebar Item",tag:"fandry-sidebar-item",parts:["base","link"],customize:{title:"Custom colors and parts",demo:"sidebar-theme",code:`<!-- template -->
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

/* A per-component hook: the icon's size. */
.large {
  --fd-icon-size: 2.5rem;
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
<input id="username" />`},{slug:"text",name:"Text",tag:"fandry-text",parts:["base"],customize:{title:"Custom colors and parts",demo:"text-theme",code:`<!-- template -->
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
}`},category:"Typography",description:"Body text \u2014 pick the rendered tag and size independently.",props:[{name:"as",type:"'p' | 'span' | 'div'",default:"'p'",description:"Layout: block (p/div) or inline (span)."},{name:"size",type:"'xs' | 'sm' | 'md'",default:"'md'",description:"Font size."},{name:"variant",type:"'default' | 'muted'",default:"'default'",description:"Text color."}],code:'<fandry-text variant="muted" size="sm">Helper text</fandry-text>'},{slug:"button",name:"Button",tag:"fandry-button",parts:["base"],customize:{title:"Custom colors and parts",demo:"button-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A native button with default/secondary/ghost variants and three sizes.",props:[{name:"variant",type:"'default' | 'secondary' | 'ghost'",default:"'default'",description:"Visual style."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Button size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the button."},{name:"type",type:"'button' | 'submit' | 'reset'",default:"'button'",description:"Native button type."}],code:'<fandry-button variant="secondary" size="lg">Save</fandry-button>'},{slug:"checkbox",name:"Checkbox",tag:"fandry-checkbox",parts:["base","control","indicator","label"],customize:{title:"Custom colors and parts",demo:"checkbox-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A checkbox with a built-in label and indeterminate support.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"Checked state."},{name:"indeterminate",type:"boolean",default:"false",description:"Visual mixed state (synced onto the native input imperatively)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the checkbox."}],code:'<fandry-checkbox label="Accept terms" onchange={handleChange}></fandry-checkbox>'},{slug:"combobox",name:"Combobox",tag:"fandry-combobox",parts:["base","label","required","control","input","chevron","panel","listbox","group","group-label","option","option-label","option-description","empty","help-text"],customize:{title:"Custom colors and parts",demo:"combobox-theme",code:`<!-- template -->
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
// can't point across a shadow boundary.`}]},{slug:"input",name:"Input",tag:"fandry-input",parts:["base","label","control","prefix","input","suffix","help-text","required"],customize:{title:"Custom colors and parts",demo:"input-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A text input with a label, help text, and prefix/suffix slots.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"type",type:"string",default:"'text'",description:"Native input type (email, password, ...)."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Field size."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."}],code:'<fandry-input label="Email" type="email" placeholder="you@company.com"></fandry-input>'},{slug:"link",name:"Link",tag:"fandry-link",parts:["base","link"],customize:{title:"Custom colors and parts",demo:"link-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"Anchor styling with default/muted variants and a disabled state.",props:[{name:"href",type:"string",default:"''",description:"Link target."},{name:"target",type:"'_self' | '_blank' | '_parent' | '_top'",default:"'_self'",description:"Native anchor target."},{name:"variant",type:"'default' | 'muted'",default:"'default'",description:"Visual style."},{name:"disabled",type:"boolean",default:"false",description:"Renders with no href, removing it from tab order."}],code:'<fandry-link href="https://github.com/rahulgawale/fandryui" target="_blank">GitHub</fandry-link>'},{slug:"radio",name:"Radio",tag:"fandry-radio",parts:["base","control","indicator","label"],customize:{title:"Custom colors and parts",demo:"radio-theme",code:`<!-- template -->
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
</fandry-radio-group>`},{slug:"select",name:"Select",tag:"fandry-select",parts:["base","label","required","control","value","chevron","listbox","option","group","group-label","help-text","panel"],customize:{title:"Custom colors and parts",demo:"select-theme",code:`<!-- template -->
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
// lightning__dynamicComponent capability (API 55+), which \`fandry add\` writes.`}]},{slug:"switch",name:"Switch",tag:"fandry-switch",parts:["base","control","indicator","label"],customize:{title:"Custom colors and parts",demo:"switch-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A toggle switch with a built-in label.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"checked",type:"boolean",default:"false",description:"On/off state."},{name:"disabled",type:"boolean",default:"false",description:"Disables the switch."}],code:'<fandry-switch label="Enable notifications" checked></fandry-switch>'},{slug:"textarea",name:"Textarea",tag:"fandry-textarea",parts:["base","label","control","textarea","help-text","required"],customize:{title:"Custom colors and parts",demo:"textarea-theme",code:`<!-- template -->
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
}`},category:"Forms",description:"A multi-line text input with a label and help text.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"rows",type:"number",default:"3",description:"Visible row count."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field."}],code:'<fandry-textarea label="Notes" rows="4"></fandry-textarea>'},{slug:"alert",name:"Alert",tag:"fandry-alert",parts:["base","title","body"],customize:{title:"Custom colors and parts",demo:"alert-theme",code:`<!-- template -->
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
}`},category:"Feedback",description:"An inline banner for a status message, with an optional title.",props:[{name:"variant",type:"'info' | 'success' | 'warning' | 'danger'",default:"'info'",description:"Status color and icon."},{name:"title",type:"string",default:"''",description:"Optional bold title above the message."}],code:'<fandry-alert variant="success" title="Saved">Your changes have been saved.</fandry-alert>'},{slug:"badge",name:"Badge",tag:"fandry-badge",parts:["base"],customize:{title:"Custom colors and parts",demo:"badge-theme",code:`<!-- template -->
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
}`},category:"Feedback",description:"A small status/label pill.",props:[{name:"variant",type:"'default' | 'primary' | 'success' | 'warning' | 'danger'",default:"'default'",description:"Color variant."}],code:'<fandry-badge variant="primary">New</fandry-badge>'},{slug:"progress",name:"Progress",tag:"fandry-progress",parts:["base","indicator"],customize:{title:"Custom colors and parts",demo:"progress-theme",code:`<!-- template -->
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
}`},category:"Feedback",description:"A loading spinner in three sizes.",props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Spinner size."},{name:"label",type:"string",default:"'Loading'",description:"Accessible label."}],code:'<fandry-spinner size="md"></fandry-spinner>'},{slug:"toast",name:"Toast",tag:"fandry-toast",parts:["base"],customize:{title:"Custom colors and parts",demo:"toast-theme",code:`<!-- template -->
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
}`},category:"Overlays & Data",description:"A circular avatar with an image and initials fallback.",props:[{name:"src",type:"string",default:"''",description:"Image URL \u2014 falls back to initials on error."},{name:"initials",type:"string",default:"''",description:"Fallback initials."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Avatar size."}],code:'<fandry-avatar initials="JD" size="md"></fandry-avatar>'},{slug:"command",name:"Command",tag:"fandry-command",parts:["backdrop","panel","search","input","listbox","group","group-label","option","option-label","option-description","empty"],customize:{title:"Custom colors and parts",demo:"command-theme",code:`<!-- template -->
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
</fandry-menu>`},{slug:"menu-item",name:"Menu Item",tag:"fandry-menu-item",parts:["base"],customize:{title:"Custom colors and parts",demo:"menu-theme",code:`<!-- template -->
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
</fandry-popover>`},{slug:"table",name:"Table",tag:"fandry-table",parts:["toolbar","container","table","caption","header-row","header-cell","selection-cell","sort-button","header-label","sort-indicator","row","loading-row","cell","empty-row","empty","footer","selection-status","pagination"],customize:{title:"Custom colors and parts",demo:"table-theme",code:`<!-- template -->
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
}`},category:"Overlays & Data",description:"A data table with sorting, pagination, selection, and filtering \u2014 wraps @tanstack/table-core.",props:[{name:"columns",type:"ColumnDef[]",default:"[]",description:"Column definitions."},{name:"data",type:"RowData[]",default:"[]",description:"Row data."},{name:"enable-pagination",type:"boolean",default:"false",description:"Turns on page-size-driven pagination."},{name:"enable-row-selection",type:"boolean",default:"false",description:"Turns on checkbox row selection."},{name:"enable-global-filter",type:"boolean",default:"false",description:"Turns on a search box that filters all columns."}],code:`<fandry-table
  columns={columns}
  data={data}
  caption="Team members"
  enable-pagination
></fandry-table>`},{slug:"lookup",name:"Lookup",tag:"fandry-lookup",parts:["base","label","required","control","selected","selected-label","clear-button","chips","chip","chip-label","chip-remove","input","clear-all","panel","listbox","group","group-label","option","option-label","option-description","status","empty","help-text"],customize:{title:"Custom colors and parts",demo:"lookup-theme",code:`<!-- template -->
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
}`},category:"Salesforce",description:"Find and pick a record \u2014 one by default, or several with `multiple`. It fetches nothing itself: it reports what was typed, you run the query and hand the records back.",props:[{name:"label",type:"string",default:"''",description:"Visible label."},{name:"placeholder",type:"string",default:"''",description:"Shown in the empty search box."},{name:"help-text",type:"string",default:"''",description:"Helper text below the field."},{name:"name",type:"string",default:"''",description:"Exposed as `data-name` on the input."},{name:"results",type:"{ id, label, description?, disabled?, \u2026 }[]",default:"[]",description:"Matches for the current search, shown exactly as given (never re-filtered). Extra fields ride along and come back in `change`."},{name:"loading",type:"boolean",default:"false",description:"Shows a searching indicator while your query is in flight."},{name:"multiple",type:"boolean",default:"false",description:"Allow any number of records, shown as removable chips with a \u201CClear all\u201D. The list stays open after each pick, already-chosen records are not offered again, and Backspace in an empty field removes the last chip."},{name:"value",type:"string | string[]",default:"''",description:"The selected id (an array of ids with `multiple`). Set it to render existing data; it updates when the user picks or clears. The lookup names each id from `record`/`records` or `results`; for any it can't, it fires `resolve` and shows the raw id (muted) until you supply the record."},{name:"record",type:"{ id, label, \u2026 } | null",default:"null",description:"Single mode: the selected record, shown as the field's value with a clear button. On its own it preselects; once `value` has been set it only supplies the name for that id."},{name:"records",type:"{ id, label, \u2026 }[]",default:"[]",description:"Multiple mode: the selected records. On its own it preselects; once `value` has been set it only supplies names for those ids (any subset is fine)."},{name:"required",type:"boolean",default:"false",description:"Marks the field required (asterisk + aria-required)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the field and the pill's clear button."},{name:"element-props",type:"Record<string, unknown>",default:"{}",description:"Spread onto the native input; keys the component controls are ignored with a warning."},{name:"search (event)",type:"CustomEvent<{ query }>",default:"\u2014",description:"Fires when the list opens by click or ArrowDown (immediately, so an empty query can offer recent records), after typing pauses, and in `multiple` mode after each pick."},{name:"resolve (event)",type:"CustomEvent<{ values }>",default:"\u2014",description:"Fires once for ids set through `value` that the lookup can't name yet. Look them up and set `record`/`records`. It does not repeat for an id already asked about."},{name:"change (event)",type:"CustomEvent<{ value, record }> | CustomEvent<{ values, records }>",default:"\u2014",description:"Single mode: `{ value, record }` on pick, and `{ value: '', record: null }` on clear. Multiple mode: `{ values, records }` on every pick, removal and Clear all."},{name:"empty (slot)",type:"slot",default:"'No records found'",description:"Replaces the message shown when a search has no matches."}],code:`<!-- template -->
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
}`}]}],Oa=[{label:"Home",value:"/"},{label:"Getting started",value:"/getting-started"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce"},{label:"Components",value:"/components"},{label:"Blocks",value:"/blocks"},{label:"Blocks: Data table",value:"/blocks/data-table"},{label:"Blocks: Form",value:"/blocks/form"},{label:"Examples",value:"/examples"}],Te=/Mac|iPhone|iPad/.test(navigator.platform);class Ae extends P{constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[...Oa.map(s=>({...s,group:"Pages"})),...Ra.flatMap(s=>Fa.filter(t=>t.category===s).map(t=>({label:t.name,value:`/components/${t.slug}`,group:s,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=s=>{(Te?s.metaKey:s.ctrlKey)&&s.key?.toLowerCase()==="k"&&(s.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get shortcutHint(){return Te?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}y(Ae,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const Na=h(Ae,{tmpl:La,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Va(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+`display: block;background: radial-gradient(
 circle at 15% 0%,
 hsl(var(--brand-primary, 330 81% 48%) / 0.12),
 transparent 55%
 ),
 radial-gradient(
 circle at 85% 10%,
 hsl(var(--brand-accent, 199 89% 36%) / 0.12),
 transparent 55%
 );}.container`+t+" {max-width: 44rem;margin: 0 auto;padding: var(--fd-space-6) var(--fd-space-6) 0;display: flex;flex-direction: column;align-items: center;text-align: center;gap: var(--fd-space-4);}.headline"+t+" {margin: 0;}.subhead"+t+" {max-width: 34rem;}.cta-row"+t+" {display: flex;gap: var(--fd-space-3);flex-wrap: wrap;justify-content: center;margin-top: var(--fd-space-2);}.demo-grid-wrap"+t+" {max-width: 72rem;margin: 0 auto;padding: calc(var(--fd-space-6) * 1.5) var(--fd-space-6) calc(var(--fd-space-6) * 2);}"}var De=[Va];function qa(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.badge--success"+t+" {background: hsl(var(--_fd-success));color: hsl(var(--_fd-success-foreground));}.badge--warning"+t+" {background: hsl(var(--_fd-warning));color: hsl(var(--_fd-warning-foreground));}.badge--danger"+t+" {background: hsl(var(--_fd-danger));color: hsl(var(--_fd-danger-foreground));}"}var Le=[qa];const Ba={part:"base"},Ka={key:1},ja=[];function T(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("span",{className:r(e.classes),attrs:Ba,key:0},[n("",Ka,ja,s)])]}var Ha=u(T);T.slots=[""],T.stylesheets=[],T.stylesheetToken="lwc-7jnsj78lpql",T.legacyStylesheetToken="fandry-badge_badge",Le&&T.stylesheets.push.apply(T.stylesheets,Le),f(T);class Re extends _{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}}y(Re,{publicProps:{variant:{config:0}}});const Q=h(Re,{tmpl:Ha,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ga(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var Fe=[Ga];const Wa={key:1},Ua=[];function A(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[n("",Wa,Ua,s)])]}var Qa=u(A);A.slots=[""],A.stylesheets=[],A.stylesheetToken="lwc-4htp61u8vnv",A.legacyStylesheetToken="fandry-heading_heading",Fe&&A.stylesheets.push.apply(A.stylesheets,Fe),f(A);class Oe extends _{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}y(Oe,{publicProps:{level:{config:3}},fields:["_level"]});const x=h(Oe,{tmpl:Qa,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ya(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var Ne=[Ya];const Ja={key:1},Xa=[];function D(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:e.role},key:0},[n("",Ja,Xa,s)])]}var Za=u(D);D.slots=[""],D.stylesheets=[],D.stylesheetToken="lwc-4f041bjpr1h",D.legacyStylesheetToken="fandry-text_text",Ne&&D.stylesheets.push.apply(D.stylesheets,Ne),f(D);class Ve extends _{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}}y(Ve,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const m=h(Ve,{tmpl:Za,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function er(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.grid"+t+" {display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: var(--fd-space-4);text-align: left;}@media (max-width: 60rem) {.grid"+t+" {grid-template-columns: repeat(2, minmax(0, 1fr));}}@media (max-width: 32rem) {.grid"+t+" {grid-template-columns: 1fr;}}.demo-card"+t+" > *"+t+" + *"+t+" {margin-top: var(--fd-space-3);display: block;}.btn-row"+t+" {display: flex;gap: var(--fd-space-2);flex-wrap: wrap;}.mini-row"+t+" {display: flex;align-items: center;gap: var(--fd-space-3);flex-wrap: wrap;}.bars"+t+" {display: flex;align-items: flex-end;gap: var(--fd-space-2);height: 6rem;}.bar-col"+t+" {flex: 1;display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-1);height: 100%;justify-content: flex-end;}.bar"+t+` {width: 100%;border-radius: var(--fd-radius-sm) var(--fd-radius-sm) 0 0;background: linear-gradient(
 90deg,
 hsl(var(--brand-primary-dark, 330 81% 40%)),
 hsl(var(--brand-accent-dark, 199 89% 28%))
 );}.notif-card`+t+" {position: relative;}"}var qe=[er];function tr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));}.input"+t+" {flex: 1;min-width: 0;border: none;outline: none;font: inherit;background: transparent;}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.control"+t+` {display: flex;align-items: center;border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-1) var(--_fd-space-2);background: hsl(var(--_fd-bg));transition: border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease;}.control:focus-within`+t+" {border-color: hsl(var(--_fd-border-focus));box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:focus"+t+" {outline: none;}.control--sm"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-xs);}.control--md"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-md);}.control--lg"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3);font-size: var(--_fd-font-size-md);}"}var Be=[tr];function ar(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.label"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"}var Ke=[ar];const rr=v`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,sr={label:!0},nr={key:1},or=[];function L(a,e,s,t){const{gid:r,s:n,st:o,h:i}=a;return[i("label",{classMap:sr,attrs:{part:"base",for:r(e.htmlFor)},props:{...e.resolvedElementProps},key:0},[n("",nr,or,s),e.required?o(rr,3):null])]}var ir=u(L);L.slots=[""],L.stylesheets=[],L.stylesheetToken="lwc-2qgum40845j",L.legacyStylesheetToken="fandry-label_label",Ke&&L.stylesheets.push.apply(L.stylesheets,Ke),f(L);const dr=["htmlFor","class"];class je extends _{constructor(...e){super(...e);this.htmlFor="",this.required=!1,this.elementProps={}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,dr,"fandry-label")}}y(je,{publicProps:{htmlFor:{config:0},required:{config:0},elementProps:{config:0}}});const He=h(je,{tmpl:ir,sel:"fandry-label",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),lr=v`<div${"a0:id"} class="help-text${0}" part="help-text"${2}>${"t1"}</div>`,cr={classMap:{"form-control":!0},attrs:{part:"base"},key:0},pr={exportparts:"base: label, required"},hr={part:"control"},ur={classMap:{prefix:!0},attrs:{part:"prefix"},key:3},fr={attrs:{name:"prefix"},key:4},Ge=[],mr={input:!0},yr={classMap:{suffix:!0},attrs:{part:"suffix"},key:6},br={attrs:{name:"suffix"},key:7};function R(a,e,s,t){const{d:r,t:n,c:o,ncls:i,s:d,h:c,gid:p,b:l,sp:g,st:k}=a,{_m0:G}=t;return[c("div",cr,[e.hasLabel?o("fandry-label",He,{attrs:pr,props:{htmlFor:"input",required:e.required},key:1},[n(" "+r(e.label)+" ")]):null,c("div",{className:i(e.controlClasses),attrs:hr,key:2},[c("span",ur,[d("prefix",fr,Ge,s)]),c("input",{classMap:mr,attrs:{part:"input",id:p("input"),type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":p("help-text")},props:{value:e.value,...e.resolvedElementProps},key:5,on:G||(t._m0={input:l(e.handleInput),change:l(e.handleChange),focus:l(e.handleFocus),blur:l(e.handleBlur)})}),c("span",yr,[d("suffix",br,Ge,s)])]),e.hasHelpText?k(lr,9,[g(0,{attrs:{id:p("help-text")}},null),g(1,null,r(e.helpText))]):null])]}var gr=u(R);R.slots=["prefix","suffix"],R.stylesheets=[],R.stylesheetToken="lwc-24cs3ca29bn",R.legacyStylesheetToken="fandry-input_input",Be&&R.stylesheets.push.apply(R.stylesheets,Be),f(R);const vr=["id","type","name","value","disabled","readonly","required","class","ariaDescribedby","ariaDescribedByElements","oninput","onchange","onfocus","onblur"];class We extends _{constructor(...e){super(...e);this.label="",this.helpText="",this.value="",this.type="text",this.name="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.size="md",this.elementProps={},this.hasFocus=!1}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,vr,"fandry-input")}get hasLabel(){return!!this.label}get hasHelpText(){return!!this.helpText}get controlClasses(){return["control",`control--${this.size}`].join(" ")}focus(){this.template.querySelector("input")?.focus()}handleInput(e){e.stopPropagation();const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}handleFocus(){this.hasFocus=!0}handleBlur(){this.hasFocus=!1}}y(We,{publicProps:{label:{config:0},helpText:{config:0},value:{config:0},type:{config:0},name:{config:0},placeholder:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},size:{config:0},elementProps:{config:0}},publicMethods:["focus"],track:{hasFocus:1}});const ce=h(We,{tmpl:gr,sel:"fandry-input",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function _r(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));}.textarea"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-2);font: inherit;resize: vertical;background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));}.textarea:focus-visible"+t+` {outline: none;border-color: hsl(var(--_fd-border-focus));box-shadow: 0 0 0 var(--_fd-ring-offset) hsl(var(--_fd-bg)),
 0 0 0 calc(var(--_fd-ring-width) + var(--_fd-ring-offset))
 hsl(var(--_fd-ring-color));}.help-text`+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}"}var Ue=[_r];const kr=v`<div${"a0:id"} class="help-text${0}" part="help-text"${2}>${"t1"}</div>`,wr={classMap:{"form-control":!0},attrs:{part:"base"},key:0},xr={exportparts:"base: label, required"},Sr={textarea:!0};function Y(a,e,s,t){const{d:r,t:n,c:o,gid:i,b:d,h:c,sp:p,st:l}=a,{_m0:g}=t;return[c("div",wr,[e.hasLabel?o("fandry-label",He,{attrs:xr,props:{htmlFor:"textarea",required:e.required},key:1},[n(" "+r(e.label)+" ")]):null,c("textarea",{classMap:Sr,attrs:{part:"control textarea",id:i("textarea"),name:e.name,placeholder:e.placeholder,rows:e.rows,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":i("help-text"),"data-value":e.value},props:{...e.resolvedElementProps},key:2,on:g||(t._m0={input:d(e.handleInput),change:d(e.handleChange)})}),e.hasHelpText?l(kr,4,[p(0,{attrs:{id:i("help-text")}},null),p(1,null,r(e.helpText))]):null])]}var Cr=u(Y);Y.stylesheets=[],Y.stylesheetToken="lwc-70m3k602isk",Y.legacyStylesheetToken="fandry-textarea_textarea",Ue&&Y.stylesheets.push.apply(Y.stylesheets,Ue),f(Y);const zr=["id","name","value","rows","disabled","readonly","required","class","ariaDescribedby","ariaDescribedByElements","oninput","onchange"];class Qe extends _{constructor(...e){super(...e);this.label="",this.helpText="",this.value="",this.name="",this.placeholder="",this.rows=3,this.disabled=!1,this.readonly=!1,this.required=!1,this.elementProps={}}get hasLabel(){return!!this.label}get hasHelpText(){return!!this.helpText}renderedCallback(){const e=this.template.querySelector(".textarea");e&&e.value!==this.value&&(e.value=this.value)}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,zr,"fandry-textarea")}focus(){this.template.querySelector("textarea")?.focus()}handleInput(e){e.stopPropagation();const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const s=e.target;this.value=s.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}}y(Qe,{publicProps:{label:{config:0},helpText:{config:0},value:{config:0},name:{config:0},placeholder:{config:0},rows:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const Pr=h(Qe,{tmpl:Cr,sel:"fandry-textarea",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function $r(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.box"+t+` {width: var(--_fd-size-sm);height: var(--_fd-size-sm);flex: 0 0 var(--_fd-size-sm);border-radius: var(--_fd-radius-sm);border: var(--_fd-border-width) solid hsl(var(--_fd-border));background: hsl(var(--_fd-bg));display: inline-flex;align-items: center;justify-content: center;transition: border-color var(--_fd-duration-fast) ease,
 background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.control`+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.check"+t+` {width: 10px;height: 6px;border-left: 2px solid hsl(var(--_fd-primary-foreground));border-bottom: 2px solid hsl(var(--_fd-primary-foreground));transform: translateY(-1px) rotate(-45deg) scale(0.9);opacity: 0;transition: opacity var(--_fd-duration-fast) ease,
 transform var(--_fd-duration-fast) ease;}.input:checked`+t+" + .box"+t+" {background: hsl(var(--_fd-primary));border-color: hsl(var(--_fd-primary));}.input:checked"+t+" + .box"+t+" .check"+t+" {opacity: 1;transform: translateY(-1px) rotate(-45deg) scale(1);}.control:focus-within"+t+" .box"+t+" {box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.input:disabled"+t+" + .box"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"}var Ye=[$r];const Er=v`<span class="box${0}" part="control" aria-hidden="true"${2}><span class="check${0}" part="indicator"${2}></span></span>`,Mr={control:!0},Ir={input:!0},Tr={classMap:{label:!0},attrs:{part:"label"},key:4},Ar={key:5};function F(a,e,s,t){const{b:r,h:n,st:o,d:i,t:d,s:c}=a,{_m0:p}=t;return[n("label",{classMap:Mr,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:Ir,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,"aria-checked":e.ariaChecked,"aria-label":e.ariaLabel},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:p||(t._m0={change:r(e.handleChange)})}),o(Er,3),e.label?n("span",Tr,[c("",Ar,[d(i(e.label))],s)]):null])]}var Dr=u(F);F.slots=[""],F.stylesheets=[],F.stylesheetToken="lwc-375ftk9u572",F.legacyStylesheetToken="fandry-checkbox_checkbox",Ye&&F.stylesheets.push.apply(F.stylesheets,Ye),f(F);const Lr=["type","name","value","checked","disabled","class","onchange","ariaChecked","ariaLabel"];class Je extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.ariaLabel="",this.elementProps={tabIndex:0},this.indeterminate=!1}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Lr,"fandry-checkbox")}get ariaChecked(){return this.indeterminate?"mixed":this.checked?"true":"false"}renderedCallback(){const e=this.template.querySelector(".input");e&&(e.indeterminate=this.indeterminate)}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const s=e.target;this.checked=s.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}}y(Je,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},ariaLabel:{config:0},elementProps:{config:0},indeterminate:{config:0}},publicMethods:["focus"]});const Rr=h(Je,{tmpl:Dr,sel:"fandry-checkbox",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Fr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.control"+t+" {position: relative;display: inline-flex;align-items: center;gap: var(--_fd-space-2);cursor: pointer;user-select: none;}.input"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.track"+t+` {width: 36px;height: 20px;flex: 0 0 36px;border-radius: 999px;background: hsl(var(--_fd-border));display: inline-flex;align-items: center;padding: 2px;transition: background-color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) ease;}.thumb`+t+" {width: var(--_fd-size-sm);height: var(--_fd-size-sm);border-radius: 50%;background: hsl(var(--_fd-bg));transform: translateX(0);transition: transform var(--_fd-duration-fast) ease;}.input:checked"+t+" + .track"+t+" {background: hsl(var(--_fd-primary));}.input:checked"+t+" + .track"+t+" .thumb"+t+" {transform: translateX(16px);}.control:focus-within"+t+" .track"+t+` {box-shadow: 0 0 0 var(--_fd-ring-width)
 hsl(var(--_fd-ring-color));}.input:disabled`+t+" + .track"+t+",.input:disabled"+t+" ~ .label"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.label"+t+" {font-size: var(--_fd-font-size-sm);}"}var Xe=[Fr];const Or=v`<span class="track${0}" part="control" aria-hidden="true"${2}><span class="thumb${0}" part="indicator"${2}></span></span>`,Nr=v`<span class="label${0}" part="label"${2}>${"t1"}</span>`,Vr={control:!0},qr={input:!0};function J(a,e,s,t){const{b:r,h:n,st:o,d:i,sp:d}=a,{_m0:c}=t;return[n("label",{classMap:Vr,attrs:{part:"base","aria-disabled":e.disabled},key:0},[n("input",{classMap:qr,attrs:{type:"checkbox",name:e.name,disabled:e.disabled?"":null,role:"switch","aria-checked":e.ariaChecked},props:{value:e.value,checked:e.checked,...e.resolvedElementProps},key:1,on:c||(t._m0={change:r(e.handleChange)})}),o(Or,3),e.label?o(Nr,5,[d(1,null,i(e.label))]):null])]}var Br=u(J);J.stylesheets=[],J.stylesheetToken="lwc-2gg3sokj2de",J.legacyStylesheetToken="fandry-switch_switch",Xe&&J.stylesheets.push.apply(J.stylesheets,Xe),f(J);const Kr=["type","name","value","checked","disabled","class","role","onchange","ariaChecked"];class Ze extends _{constructor(...e){super(...e);this.label="",this.checked=!1,this.disabled=!1,this.name="",this.value="",this.elementProps={tabIndex:0}}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Kr,"fandry-switch")}get ariaChecked(){return this.checked?"true":"false"}focus(){this.template.querySelector(".input")?.focus()}handleChange(e){const s=e.target;this.checked=s.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked,bubbles:!0}))}}y(Ze,{publicProps:{label:{config:0},checked:{config:0},disabled:{config:0},name:{config:0},value:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const jr=h(Ze,{tmpl:Br,sel:"fandry-switch",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Hr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var et=[Hr];const Gr={classMap:{card:!0},attrs:{part:"base"},key:0},Wr={key:1},Ur=[];function O(a,e,s,t){const{s:r,h:n}=a;return[n("div",Gr,[r("",Wr,Ur,s)])]}var Qr=u(O);O.slots=[""],O.stylesheets=[],O.stylesheetToken="lwc-66cpcf0iuus",O.legacyStylesheetToken="fandry-card_card",et&&O.stylesheets.push.apply(O.stylesheets,et),f(O);class Yr extends _{}const X=h(Yr,{tmpl:Qr,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Jr(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.toast"+t+" {display: flex;align-items: flex-start;justify-content: space-between;gap: var(--_fd-space-3);padding: var(--_fd-space-3) var(--_fd-space-4);border-radius: var(--_fd-radius-md);border-left: var(--_fd-border-width-lg) solid hsl(var(--_fd-accent));background: hsl(var(--_fd-bg));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));animation: fd-fade-up-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.toast--success"+t+" {border-left-color: hsl(var(--_fd-success));}.toast--warning"+t+" {border-left-color: hsl(var(--_fd-warning));}.toast--danger"+t+" {border-left-color: hsl(var(--_fd-danger));}.toast--closing"+t+" {animation: fd-fade-up-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}"}var tt=[Jr];const Xr={key:1},Zr=[];function N(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:e.role},key:0},[n("",Xr,Zr,s)])]}var es=u(N);N.slots=[""],N.stylesheets=[],N.stylesheetToken="lwc-73ujeb3ppoa",N.legacyStylesheetToken="fandry-toast_toast",tt&&N.stylesheets.push.apply(N.stylesheets,tt),f(N);class at extends _{constructor(...e){super(...e);this.variant="info",this._duration=5e3,this.isClosing=!1,this.dismissTimerId=null,this.dismissNotified=!1}get duration(){return this._duration}set duration(e){this._duration=Number(e)}connectedCallback(){this.scheduleAutoDismiss()}disconnectedCallback(){this.clearDismissTimer()}get classes(){return["toast",`toast--${this.variant}`,this.isClosing?"toast--closing":""].filter(Boolean).join(" ")}get role(){return this.variant==="warning"||this.variant==="danger"?"alert":"status"}scheduleAutoDismiss(){this.duration>0&&(this.dismissTimerId=window.setTimeout(()=>this.dismiss(),this.duration))}clearDismissTimer(){this.dismissTimerId!==null&&(window.clearTimeout(this.dismissTimerId),this.dismissTimerId=null)}dismiss(){this.isClosing||(this.clearDismissTimer(),this.isClosing=!0)}renderedCallback(){!this.isClosing||this.dismissNotified||(this.dismissNotified=!0,ye(this.template.querySelector(".toast")).then(()=>{this.dispatchEvent(new CustomEvent("dismiss",{bubbles:!0}))}))}}y(at,{publicProps:{variant:{config:0},duration:{config:3}},publicMethods:["dismiss"],track:{isClosing:1},fields:["_duration","dismissTimerId","dismissNotified"]});const ts=h(at,{tmpl:es,sel:"fandry-toast",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function as(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.viewport"+t+" {position: fixed;z-index: var(--_fd-z-overlay);display: flex;flex-direction: column;gap: var(--_fd-space-2);width: 20rem;max-width: calc(100vw - var(--_fd-space-4) * 2);pointer-events: none;}.viewport--contained"+t+" {position: absolute;max-width: calc(100% - var(--_fd-space-4) * 2);}.viewport"+t+" "+t+"::slotted(*) {pointer-events: auto;}.viewport--top-left"+t+" {top: var(--_fd-space-4);left: var(--_fd-space-4);}.viewport--top-right"+t+" {top: var(--_fd-space-4);right: var(--_fd-space-4);}.viewport--bottom-left"+t+" {bottom: var(--_fd-space-4);left: var(--_fd-space-4);}.viewport--bottom-right"+t+" {bottom: var(--_fd-space-4);right: var(--_fd-space-4);}"}var rt=[as];const rs={key:1},ss=[];function V(a,e,s,t){const{ncls:r,s:n,h:o}=a;return[o("div",{className:r(e.classes),attrs:{part:"base",role:e.role,"aria-label":e.ariaLabel},key:0},[n("",rs,ss,s)])]}var ns=u(V);V.slots=[""],V.stylesheets=[],V.stylesheetToken="lwc-1i36vtch1o7",V.legacyStylesheetToken="fandry-toastViewport_toastViewport",rt&&V.stylesheets.push.apply(V.stylesheets,rt),f(V);class st extends _{constructor(...e){super(...e);this.placement="bottom-right",this.contained=!1,this.label=""}get classes(){return["viewport",`viewport--${this.placement}`,this.contained?"viewport--contained":""].filter(Boolean).join(" ")}get role(){return this.label?"region":void 0}get ariaLabel(){return this.label?this.label:void 0}}y(st,{publicProps:{placement:{config:0},contained:{config:0},label:{config:0}}});const os=h(st,{tmpl:ns,sel:"fandry-toast-viewport",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),is=v`<div class="bar${0}"${"s0"}${2}></div>`,ds={classMap:{grid:!0},key:0},ls={classMap:{"demo-card":!0,"controls-card":!0},key:1},cs={classMap:{"btn-row":!0},key:2},ps={props:{size:"sm"},key:3},hs={props:{size:"sm",variant:"secondary"},key:4},us={props:{size:"sm",variant:"ghost"},key:5},fs={props:{size:"sm",placeholder:"Name"},key:6},ms={props:{placeholder:"Message",rows:"2"},key:7},ys={classMap:{"mini-row":!0},key:8},bs={key:9},gs={props:{variant:"primary"},key:10},vs={props:{label:"Checked",checked:!0},key:11},_s={props:{checked:!0},key:12},ks={classMap:{"demo-card":!0,"chart-card":!0},key:13},ws={props:{as:"span",size:"xs",variant:"muted"},key:14},xs={props:{level:"4"},key:15},Ss={classMap:{bars:!0},key:16},Cs={"bar-col":!0},zs={props:{as:"span",size:"xs",variant:"muted"},key:20},Ps={classMap:{"demo-card":!0,"theme-card":!0},key:21},$s={props:{level:"4"},key:22},Es={props:{variant:"muted",size:"sm"},key:23},Ms={classMap:{"btn-row":!0},key:26},nt={size:"sm"},Is={size:"sm",variant:"secondary"},Ts={classMap:{"demo-card":!0,"notif-card":!0},key:29},As={props:{level:"4"},key:30},Ds={props:{variant:"muted",size:"sm"},key:31},Ls={props:{placement:"bottom-right",contained:!0,label:"Notifications"},key:33},Rs={variant:"success",duration:"3000"};function Z(a,e,s,t){const{t:r,c:n,h:o,k:i,sp:d,st:c,d:p,i:l,b:g}=a,{_m0:k,_m1:G,_m2:ne,_m3:oe,_m4:ie,_m5:de}=t;return[o("div",ds,[n("fandry-card",X,ls,[o("div",cs,[n("fandry-button",z,ps,[r("Button")]),n("fandry-button",z,hs,[r("Secondary")]),n("fandry-button",z,us,[r("Ghost")])]),n("fandry-input",ce,fs),n("fandry-textarea",Pr,ms),o("div",ys,[n("fandry-badge",Q,bs,[r("Default")]),n("fandry-badge",Q,gs,[r("Primary")]),n("fandry-checkbox",Rr,vs),n("fandry-switch",jr,_s)])]),n("fandry-card",X,ks,[n("fandry-text",m,ws,[r("Build velocity")]),n("fandry-heading",x,xs,[r("Faster every month")]),o("div",Ss,l(e.bars,function(C){return o("div",{classMap:Cs,key:i(17,C.key)},[c(is,19,[d(0,{style:C.barStyle},null)]),n("fandry-text",m,zs,[r(p(C.label))])])}))]),n("fandry-card",X,Ps,[n("fandry-heading",x,$s,[r("Theme your brand")]),n("fandry-text",m,Es,[r("One token scale, retheme anywhere.")]),n("fandry-input",ce,{props:{label:"Primary color",value:e.primaryColor},key:24,on:k||(t._m0={input:g(e.handlePrimaryColorInput)})}),n("fandry-input",ce,{props:{label:"Accent color",value:e.accentColor},key:25,on:G||(t._m1={input:g(e.handleAccentColorInput)})}),o("div",Ms,[n("fandry-button",z,{props:nt,key:27,on:ne||(t._m2={click:g(e.handleApplyTheme)})},[r("Apply theme")]),n("fandry-button",z,{props:Is,key:28,on:oe||(t._m3={click:g(e.handleResetTheme)})},[r("Reset")])])]),n("fandry-card",X,Ts,[n("fandry-heading",x,As,[r("Try it live")]),n("fandry-text",m,Ds,[r("A real fandry-toast, not a screenshot.")]),n("fandry-button",z,{props:nt,key:32,on:ie||(t._m4={click:g(e.handleShowToast)})},[r("Show notification")]),n("fandry-toast-viewport",os,Ls,l(e.toasts,function(C){return n("fandry-toast",ts,{attrs:{"data-id":C.id},props:Rs,key:i(34,C.id),on:de||(t._m5={dismiss:g(e.handleToastDismiss)})},[r(p(C.message))])}))])])]}var Fs=u(Z);Z.stylesheets=[],Z.stylesheetToken="lwc-75i9pi7s0jp",Z.legacyStylesheetToken="fandryui-heroDemoGrid_heroDemoGrid",qe&&Z.stylesheets.push.apply(Z.stylesheets,qe),f(Z);const ot="#DB1B6F",it="#0A7AAE",dt=8;function lt(a){const e=/^#?([0-9a-f]{6})$/i.exec(a.trim());if(!e)return null;const s=parseInt(e[1],16),t=(s>>16&255)/255,r=(s>>8&255)/255,n=(s&255)/255,o=Math.max(t,r,n),i=Math.min(t,r,n),d=(o+i)/2;let c=0,p=0;if(o!==i){const l=o-i;switch(p=d>.5?l/(2-o-i):l/(o+i),o){case t:c=(r-n)/l+(r<n?6:0);break;case r:c=(n-t)/l+2;break;default:c=(t-r)/l+4}c/=6}return{h:c*360,s:p*100,l:d*100}}function pe({h:a,s:e,l:s}){return`${Math.round(a)} ${Math.round(e)}% ${Math.round(s)}%`}function ct(a,e){return{...a,l:Math.max(0,a.l-e)}}class pt extends P{constructor(...e){super(...e);this.primaryColor=ot,this.accentColor=it,this.bars=[{key:"dec",label:"Dec",barStyle:"height: 35%"},{key:"jan",label:"Jan",barStyle:"height: 58%"},{key:"feb",label:"Feb",barStyle:"height: 44%"},{key:"mar",label:"Mar",barStyle:"height: 82%"},{key:"apr",label:"Apr",barStyle:"height: 68%"}],this.toastIdCounter=0,this.toasts=[]}handleShowToast(){this.toastIdCounter+=1,this.toasts=[...this.toasts,{id:this.toastIdCounter,message:"Toast fired \u2014 this one is real."}]}handleToastDismiss(e){const s=Number(e.target.dataset.id);this.toasts=this.toasts.filter(t=>t.id!==s)}handlePrimaryColorInput(e){this.primaryColor=e.detail}handleAccentColorInput(e){this.accentColor=e.detail}handleApplyTheme(){const e=lt(this.primaryColor),s=lt(this.accentColor);if(!e||!s)return;const t=document.documentElement.style;t.setProperty("--brand-primary",pe(e)),t.setProperty("--brand-accent",pe(s)),t.setProperty("--brand-primary-dark",pe(ct(e,dt))),t.setProperty("--brand-accent-dark",pe(ct(s,dt)))}handleResetTheme(){this.primaryColor=ot,this.accentColor=it;const e=document.documentElement.style;e.removeProperty("--brand-primary"),e.removeProperty("--brand-accent"),e.removeProperty("--brand-primary-dark"),e.removeProperty("--brand-accent-dark")}}y(pt,{fields:["primaryColor","accentColor","bars","toastIdCounter","toasts"]});const Os=h(pt,{tmpl:Fs,sel:"fandryui-hero-demo-grid",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Ns={classMap:{hero:!0},key:0},Vs={classMap:{container:!0},key:1},qs={props:{variant:"primary"},key:2},Bs={classMap:{headline:!0},props:{level:"1"},key:3},Ks={classMap:{subhead:!0},props:{size:"md",variant:"muted"},key:4},js={classMap:{"cta-row":!0},key:5},Hs={variant:"default",size:"lg"},Gs={variant:"secondary",size:"lg"},Ws={classMap:{subhead:!0},props:{size:"sm",variant:"muted"},key:8},Us={classMap:{"demo-grid-wrap":!0},key:9},Qs={key:10};function ee(a,e,s,t){const{t:r,c:n,b:o,h:i}=a,{_m0:d,_m1:c}=t;return[i("section",Ns,[i("div",Vs,[n("fandry-badge",Q,qs,[r("Native LWC")]),n("fandry-heading",x,Bs,[r("Beautiful interfaces. Built on Salesforce.")]),n("fandry-text",m,Ks,[r("A lightweight, composable UI library for building modern B2B and B2C experiences on Salesforce.")]),i("div",js,[n("fandry-button",z,{props:Hs,key:6,on:d||(t._m0={click:o(e.handlePrimaryClick)})},[r("Browse Components")]),n("fandry-button",z,{props:Gs,key:7,on:c||(t._m1={click:o(e.handleGithubClick)})},[r("View on GitHub")])]),n("fandry-text",m,Ws,[r("Built with native LWC. Designed for LWR. Made to look like your brand.")])]),i("div",Us,[n("fandryui-hero-demo-grid",Os,Qs)])])]}var Ys=u(ee);ee.stylesheets=[],ee.stylesheetToken="lwc-57886c7j2ti",ee.legacyStylesheetToken="fandryui-heroSection_heroSection",De&&ee.stylesheets.push.apply(ee.stylesheets,De),f(ee);const Js="https://github.com/rahulgawale/fandryui";class Xs extends P{handlePrimaryClick(){window.location.assign("/components")}handleGithubClick(){window.open(Js,"_blank","noopener,noreferrer")}}const Zs=h(Xs,{tmpl:Ys,sel:"fandryui-hero-section",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function en(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+` {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);background: linear-gradient(
 180deg,
 hsl(var(--brand-accent, 199 89% 36%) / 0.06),
 transparent 60%
 );}.container`+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.title"+t+" {text-align: center;margin-bottom: var(--fd-space-6);display: block;}.grid"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-5);align-items: stretch;}@media (max-width: 60rem) {.grid"+t+" {grid-template-columns: repeat(2, minmax(0, 1fr));}}@media (max-width: 40rem) {.grid"+t+" {grid-template-columns: 1fr;}}.card-wrap"+t+" {border-radius: var(--fd-radius-lg);--fd-card-height: 100%;overflow: hidden;transition: transform 160ms ease, box-shadow 160ms ease;}@media (hover: hover) {.card-wrap:hover"+t+" {transform: translateY(-4px);box-shadow: 0 12px 24px -12px color-mix(in srgb, var(--fd-color-text) 25%, transparent);}}.card-wrap"+t+" fandry-heading"+t+" + fandry-text"+t+" {display: block;margin-top: calc(var(--fd-space-3) * 2);}.icon-chip"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 2.75rem;height: 2.75rem;border-radius: var(--fd-radius-lg);margin-bottom: var(--fd-space-3);}.tint-primary"+t+" {background: hsl(var(--brand-primary, 330 81% 48%) / 0.12);color: hsl(var(--brand-primary-dark, 330 81% 40%));}.tint-accent"+t+" {background: hsl(var(--brand-accent, 199 89% 36%) / 0.12);color: hsl(var(--brand-accent-dark, 199 89% 30%));}.tint-success"+t+" {background: hsl(142 71% 30% / 0.12);color: hsl(142 71% 26%);}.tint-warning"+t+" {background: hsl(38 92% 32% / 0.12);color: hsl(38 92% 28%);}.tint-danger"+t+" {background: hsl(0 72% 51% / 0.12);color: hsl(0 72% 42%);}"}var ht=[en];const tn=v`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${3}><path${"a1:d"}${3}/></svg>`,an={classMap:{section:!0},key:0},rn={classMap:{container:!0},key:1},sn={classMap:{title:!0},props:{level:"2"},key:2},nn={classMap:{grid:!0},key:3},on={"card-wrap":!0},dn={key:5},ln={props:{size:"md"},key:7},cn={props:{level:"3"},key:10},pn={props:{variant:"muted"},key:11};function te(a,e,s,t){const{t:r,c:n,k:o,ncls:i,sp:d,st:c,h:p,d:l,i:g}=a;return[p("section",an,[p("div",rn,[n("fandry-heading",x,sn,[r("What you get")]),p("div",nn,g(e.features,function(k){return p("div",{classMap:on,key:o(4,k.key)},[n("fandry-card",X,dn,[p("div",{className:i(k.chipClass),key:6},[n("fandry-icon",$e,ln,[c(tn,9,[d(1,{attrs:{d:k.iconPath}},null)])])]),n("fandry-heading",x,cn,[r(l(k.title))]),n("fandry-text",m,pn,[r(l(k.description))])])])}))])])]}var hn=u(te);te.stylesheets=[],te.stylesheetToken="lwc-25gq2u9na9h",te.legacyStylesheetToken="fandryui-featureGrid_featureGrid",ht&&te.stylesheets.push.apply(te.stylesheets,ht),f(te);class ut extends P{constructor(...e){super(...e);this.features=[{key:"native",chipClass:"icon-chip tint-primary",title:"Native LWC components",description:"Built with native Lightning Web Components \u2014 no framework to fight, no compile step surprises.",iconPath:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"},{key:"lightweight",chipClass:"icon-chip tint-accent",title:"Lightweight & composable",description:"Small, dependency-light primitives you compose with slots, not a dozen config props.",iconPath:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12"},{key:"branded",chipClass:"icon-chip tint-success",title:"Doesn't look like Salesforce",description:"Ship a fully-branded Salesforce site your customers would never guess runs on Lightning.",iconPath:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},{key:"faster",chipClass:"icon-chip tint-warning",title:"Faster development",description:"Sensible defaults and Claude Code-friendly source make every screen faster to build.",iconPath:"M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6"},{key:"tokens",chipClass:"icon-chip tint-danger",title:"Design tokens, not magic numbers",description:"Every color, spacing, and radius comes from one token scale you can retheme in a single place.",iconPath:"M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"},{key:"accessible",chipClass:"icon-chip tint-primary",title:"Accessible by default",description:"WCAG AA-tuned color tokens, keyboard-first controls, and correct ARIA out of the box.",iconPath:"M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3"},{key:"customizable",chipClass:"icon-chip tint-accent",title:"Highly customizable",description:"Override styling, swap markup, or extend a class directly \u2014 nothing here is a black box.",iconPath:"M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6"},{key:"brandable",chipClass:"icon-chip tint-success",title:"Brandable",description:"Reskin an entire site by changing tokens, not by rewriting components.",iconPath:"M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},{key:"boring",chipClass:"icon-chip tint-warning",title:"Boring, on purpose",description:"No hidden state, no magic \u2014 every primitive does exactly one predictable thing.",iconPath:"M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},{key:"real-world",chipClass:"icon-chip tint-danger",title:"Built for the real world",description:"Real focus management, correct tab order, and Safari quirks handled, so you don\u2019t have to.",iconPath:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]}}y(ut,{fields:["features"]});const un=h(ut,{tmpl:hn,sel:"fandryui-feature-grid",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function fn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+" {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.title"+t+" {text-align: center;margin-bottom: var(--fd-space-2);display: block;}.subtitle"+t+" {display: block;text-align: center;margin: 0 auto var(--fd-space-6);max-width: 34rem;}.frame-scroll"+t+" {overflow-x: auto;}.frame"+t+" {min-width: 40rem;border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-lg);overflow: hidden;background: var(--fd-color-surface);box-shadow: 0 24px 48px -24px color-mix(in srgb, var(--fd-color-text) 35%, transparent);}.topbar"+t+" {display: flex;align-items: center;gap: var(--fd-space-5);padding: var(--fd-space-3) var(--fd-space-5);border-bottom: 1px solid var(--fd-color-border);}.brand"+t+" {font-weight: var(--fd-font-weight-bold);}.topbar-links"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-4);}.search-input"+t+" {display: block;max-width: 14rem;}.account-trigger"+t+" {display: inline-flex;--fd-button-radius: 999px;--fd-button-padding-x: 0;--fd-button-border-width: 0;}.menu-header"+t+" {display: flex;flex-direction: column;gap: 2px;padding: var(--fd-space-1) var(--fd-space-3) var(--fd-space-2);margin-bottom: var(--fd-space-1);border-bottom: 1px solid var(--fd-color-border);}.body"+t+" {display: flex;min-height: 22rem;}.sidebar"+t+" {width: 12rem;flex-shrink: 0;border-right: 1px solid var(--fd-color-border);padding: var(--fd-space-3);display: flex;flex-direction: column;gap: var(--fd-space-1);}.nav-item"+t+" {padding: var(--fd-space-2) var(--fd-space-3);border-radius: var(--fd-radius-md);font-size: var(--fd-font-size-sm);color: var(--fd-color-muted);cursor: pointer;user-select: none;}@media (hover: hover) {.nav-item:hover"+t+" {background: color-mix(in srgb, var(--fd-color-text) 4%, transparent);}}.nav-item:focus-visible"+t+" {outline: 2px solid hsl(var(--brand-primary, 330 81% 48%));outline-offset: 2px;}.nav-item--active"+t+",.nav-item--active:hover"+t+" {background: hsl(var(--brand-primary, 330 81% 48%));color: var(--fd-color-on-primary);}.main"+t+" {flex: 1;padding: var(--fd-space-5);}.stats"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-3);margin: var(--fd-space-4) 0 var(--fd-space-5);}.stat-card"+t+" {display: block;}.stat-card:nth-child(1)"+t+` {--fd-card-bg: linear-gradient(
 135deg,
 hsl(var(--brand-primary, 330 81% 48%) / 0.14),
 hsl(var(--brand-primary, 330 81% 48%) / 0.02)
 );}.stat-card:nth-child(2)`+t+` {--fd-card-bg: linear-gradient(
 135deg,
 hsl(var(--brand-accent, 199 89% 36%) / 0.14),
 hsl(var(--brand-accent, 199 89% 36%) / 0.02)
 );}.stat-card:nth-child(3)`+t+` {--fd-card-bg: linear-gradient(
 135deg,
 hsl(142 71% 30% / 0.14),
 hsl(142 71% 30% / 0.02)
 );}.orders-title`+t+" {display: block;margin-bottom: var(--fd-space-2);}.filter-bar"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);margin-bottom: var(--fd-space-2);}.orders"+t+" {display: flex;flex-direction: column;}.order-row"+t+" {display: grid;grid-template-columns: 5rem 1fr auto;align-items: center;gap: var(--fd-space-3);padding: var(--fd-space-2);margin: 0 calc(var(--fd-space-2) * -1);border-bottom: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-sm);cursor: pointer;}.order-row:last-child"+t+" {border-bottom: none;}@media (hover: hover) {.order-row:hover"+t+" {background: color-mix(in srgb, var(--fd-color-text) 3%, transparent);}}.order-row:focus-visible"+t+" {outline: 2px solid hsl(var(--brand-primary, 330 81% 48%));outline-offset: -2px;}.status-filter"+t+" {display: inline-flex;border-radius: var(--fd-radius-md);cursor: pointer;}.status-filter:hover"+t+" {filter: brightness(0.95);}.status-filter:focus-visible"+t+" {outline: 2px solid hsl(var(--brand-primary, 330 81% 48%));outline-offset: 2px;}.back-link"+t+" {display: inline-block;margin-bottom: var(--fd-space-4);}.detail-head"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);}.detail-body"+t+" {display: block;margin-top: var(--fd-space-3);max-width: 32rem;}"}var ft=[fn];function mn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.avatar"+t+" {display: inline-flex;align-items: center;justify-content: center;overflow: hidden;flex-shrink: 0;border-radius: 50%;background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text-muted));font-weight: var(--_fd-font-weight-semibold);text-transform: uppercase;}.avatar--sm"+t+" {width: var(--_fd-avatar-size-sm);height: var(--_fd-avatar-size-sm);font-size: calc(var(--_fd-avatar-size-sm) * 0.4);}.avatar--md"+t+" {width: var(--_fd-avatar-size-md);height: var(--_fd-avatar-size-md);font-size: calc(var(--_fd-avatar-size-md) * 0.4);}.avatar--lg"+t+" {width: var(--_fd-avatar-size-lg);height: var(--_fd-avatar-size-lg);font-size: calc(var(--_fd-avatar-size-lg) * 0.4);}.image"+t+" {width: 100%;height: 100%;object-fit: cover;}.initials"+t+" {line-height: 1;}"}var mt=[mn];const yn=v`<span class="initials${0}" part="initials"${2}>${"t1"}</span>`,bn={part:"base"},gn={image:!0};function ae(a,e,s,t){const{ncls:r,b:n,h:o,d:i,sp:d,st:c}=a,{_m0:p}=t;return[o("span",{className:r(e.classes),attrs:bn,key:0},[e.showImage?o("img",{classMap:gn,attrs:{part:"image",src:e.src,alt:e.alt},props:{...e.resolvedElementProps},key:1,on:p||(t._m0={error:n(e.handleImageError)})}):null,e.showInitials?c(yn,3,[d(1,null,i(e.initials))]):null])]}var vn=u(ae);ae.stylesheets=[],ae.stylesheetToken="lwc-3sp4g3rf1ki",ae.legacyStylesheetToken="fandry-avatar_avatar",mt&&ae.stylesheets.push.apply(ae.stylesheets,mt),f(ae);const _n=["src","alt","class","onerror"];class yt extends _{constructor(...e){super(...e);this.alt="",this.initials="",this.size="md",this.elementProps={},this.imageFailed=!1,this._src=""}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,_n,"fandry-avatar")}get src(){return this._src}set src(e){this._src=e,this.imageFailed=!1}get classes(){return["avatar",`avatar--${this.size}`].join(" ")}get showImage(){return!!this.src&&!this.imageFailed}get showInitials(){return!this.showImage&&!!this.initials}handleImageError(){this.imageFailed=!0}}y(yt,{publicProps:{alt:{config:0},initials:{config:0},size:{config:0},elementProps:{config:0},src:{config:3}},track:{imageFailed:1},fields:["_src"]});const kn=h(yt,{tmpl:vn,sel:"fandry-avatar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function wn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.item"+t+` {display: flex;align-items: center;gap: var(--_fd-space-2);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);font-family: inherit;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text));white-space: nowrap;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,
 color var(--_fd-duration-fast) ease;}.item:hover:not(.item--disabled)`+t+" {background: hsl(var(--_fd-bg-muted));}.item:focus-visible"+t+" {outline: none;background: hsl(var(--_fd-bg-muted));box-shadow: inset 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.item--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}"}var bt=[wn];const xn={key:1};function q(a,e,s,t){const{ncls:r,b:n,d:o,t:i,s:d,h:c}=a,{_m0:p}=t;return[c("div",{className:r(e.classes),attrs:{part:"base",role:"menuitem","aria-disabled":e.ariaDisabled},props:{...e.resolvedElementProps},key:0,on:p||(t._m0={click:n(e.handleClick),keydown:n(e.handleKeydown)})},[d("",xn,[i(o(e.label))],s)])]}var Sn=u(q);q.slots=[""],q.stylesheets=[],q.stylesheetToken="lwc-7bqhtrvn7hj",q.legacyStylesheetToken="fandry-menuItem_menuItem",bt&&q.stylesheets.push.apply(q.stylesheets,bt),f(q);const Cn=["role","class","ariaDisabled","onclick","onkeydown"];class gt extends _{constructor(...e){super(...e);this.value="",this.label="",this._disabled=!1,this.elementProps={tabIndex:0},this.handleClick=()=>{this.activate()},this.handleKeydown=s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.activate())}}get disabled(){return this._disabled}set disabled(e){const s=!!e;s!==this._disabled&&(this._disabled=s,this.dispatchEvent(new CustomEvent("itemchange",{bubbles:!0})))}get classes(){return["item",this.disabled?"item--disabled":""].filter(Boolean).join(" ")}get ariaDisabled(){return this.disabled?"true":"false"}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Cn,"fandry-menu-item")}focus(){this.template.querySelector(".item")?.focus()}activate(){this.disabled||this.dispatchEvent(new CustomEvent("select",{detail:{value:this.value},bubbles:!0}))}}y(gt,{publicProps:{value:{config:0},label:{config:0},disabled:{config:3},elementProps:{config:0}},publicMethods:["focus"],fields:["_disabled","handleClick","handleKeydown"]});const be=h(gt,{tmpl:Sn,sel:"fandry-menu-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function zn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.menu"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);min-width: var(--_fd-overlay-min-width-sm);}"}var vt=[zn];const Pn={classMap:{menu:!0},attrs:{part:"base",role:"menu","aria-orientation":"vertical"},key:0},$n=[];function B(a,e,s,t){const{b:r,s:n,h:o}=a,{_m0:i}=t;return[o("div",Pn,[n("",{key:1,on:i||(t._m0={slotchange:r(e.handleSlotChange)})},$n,s)])]}var En=u(B);B.slots=[""],B.stylesheets=[],B.stylesheetToken="lwc-1t4hh1hikp",B.legacyStylesheetToken="fandry-menu_menu",vt&&B.stylesheets.push.apply(B.stylesheets,vt),f(B);const Mn=["ArrowDown","ArrowUp"];class _t extends _{constructor(...e){super(...e);this.handleItemChange=()=>{this.updateRovingTabIndex()},this.handleSlotChange=()=>{this.updateRovingTabIndex()},this.handleKeydown=s=>{const t=this.currentItem(s);if(!!t){if(Mn.includes(s.key)){s.preventDefault(),this.moveFocus(t,s.key==="ArrowDown"?1:-1);return}if(s.key==="Home"||s.key==="End"){const r=this.getItems().filter(o=>!o.disabled),n=s.key==="Home"?r[0]:r[r.length-1];n&&(s.preventDefault(),this.updateRovingTabIndex(n),n.focus())}}}}connectedCallback(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("itemchange",this.handleItemChange)}disconnectedCallback(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("itemchange",this.handleItemChange)}renderedCallback(){this.updateRovingTabIndex()}getItems(){return Array.from(this.querySelectorAll("fandry-menu-item"))}updateRovingTabIndex(e){const s=this.getItems();let t=e??this.activeItem;(!t||t.disabled||!s.includes(t))&&(t=s.find(r=>!r.disabled)),this.activeItem=t,s.forEach(r=>{r.elementProps={tabIndex:r===t?0:-1}})}currentItem(e){return e.composedPath().find(s=>s.tagName==="FANDRY-MENU-ITEM")}moveFocus(e,s){const t=this.getItems(),r=t.indexOf(e);if(r===-1)return;let n=r;for(let i=0;i<t.length&&(n=(n+s+t.length)%t.length,!!t[n].disabled);i++);const o=t[n];o!==e&&(this.updateRovingTabIndex(o),o.focus())}}y(_t,{fields:["handleItemChange","handleSlotChange","handleKeydown"]});const In=h(_t,{tmpl:En,sel:"fandry-menu",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Tn(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;position: relative;}.trigger"+t+" {display: inline-block;cursor: pointer;}.panel"+t+" {position: fixed;z-index: var(--_fd-z-overlay);min-width: max-content;background: hsl(var(--_fd-bg));border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));padding: var(--_fd-space-2);animation: fd-slide-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.panel--closing"+t+" {animation: fd-slide-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;pointer-events: none;}.panel--bottom"+t+" {margin-top: var(--_fd-space-1);--fd-slide-y: calc(var(--_fd-space-2) * -1);}.panel--top"+t+" {margin-bottom: var(--_fd-space-1);--fd-slide-y: var(--_fd-space-2);}.panel--left"+t+" {margin-right: var(--_fd-space-1);--fd-slide-x: var(--_fd-space-2);}.panel--right"+t+" {margin-left: var(--_fd-space-1);--fd-slide-x: calc(var(--_fd-space-2) * -1);}"}var kt=[Tn];const An={classMap:{trigger:!0},attrs:{part:"trigger"},key:0},Dn={attrs:{name:"trigger"},key:1},wt=[],Ln={key:3};function K(a,e,s,t){const{s:r,h:n,ncls:o}=a;return[n("span",An,[r("trigger",Dn,wt,s)]),e.isMounted?n("div",{className:o(e.panelClasses),style:e.panelStyle,attrs:{part:"panel",inert:e.panelInert},key:2},[r("",Ln,wt,s)]):null]}var Rn=u(K);K.slots=["","trigger"],K.stylesheets=[],K.stylesheetToken="lwc-3g2epjm4vo6",K.legacyStylesheetToken="fandry-popover_popover",kt&&K.stylesheets.push.apply(K.stylesheets,kt),f(K);class xt extends _{constructor(...e){super(...e);this.placement="bottom",this.align="start",this._open=!1,this.isMounted=!1,this.panelStyle="",this.positionFrame=0,this.handleViewportChange=()=>{cancelAnimationFrame(this.positionFrame),this.positionFrame=requestAnimationFrame(()=>this.updatePosition())},this.insideClickStamp=-1,this.handleHostClick=s=>{this.insideClickStamp=s.timeStamp,s.target.closest('[slot="trigger"]')&&this.setOpen(!this.open)},this.handleDocumentClick=s=>{this.open&&s.timeStamp!==this.insideClickStamp&&this.setOpen(!1)},this.handleDocumentKeydown=s=>{this.open&&s.key==="Escape"&&(this.setOpen(!1),this.querySelector('[slot="trigger"]')?.focus())}}get open(){return this._open}set open(e){const s=this._open;this._open=e,e&&(this.isMounted=!0,this.updatePosition(),this.trackTrigger()),s&&!e&&(this.untrackTrigger(),this.restoreFocusIfStillOurs())}updatePosition(){const e=this.template.querySelector(".trigger");if(!e)return;const s=e.getBoundingClientRect(),t=document.documentElement.clientWidth,r=document.documentElement.clientHeight,n={top:"auto",right:"auto",bottom:"auto",left:"auto"};switch(this.placement){case"top":n.bottom=`${r-s.top}px`;break;case"left":n.right=`${t-s.left}px`,n.top=`${s.top}px`;break;case"right":n.left=`${s.right}px`,n.top=`${s.top}px`;break;default:n.top=`${s.bottom}px`}(this.placement==="top"||this.placement==="bottom")&&(this.align==="end"?n.right=`${t-s.right}px`:n.left=`${s.left}px`),this.panelStyle=`top: ${n.top}; right: ${n.right}; bottom: ${n.bottom}; left: ${n.left};`}trackTrigger(){window.addEventListener("scroll",this.handleViewportChange,!0),window.addEventListener("resize",this.handleViewportChange)}untrackTrigger(){window.removeEventListener("scroll",this.handleViewportChange,!0),window.removeEventListener("resize",this.handleViewportChange),cancelAnimationFrame(this.positionFrame)}get panelClasses(){return["panel",`panel--${this.placement}`,`panel--align-${this.align}`,this.open?"":"panel--closing"].filter(Boolean).join(" ")}get panelInert(){return this.open?void 0:""}renderedCallback(){if(this.open&&!this.panelStyle&&this.updatePosition(),this.open||!this.isMounted)return;const e=this.template.querySelector(".panel");ye(e).then(()=>{this.open||(this.isMounted=!1)})}connectedCallback(){this.addEventListener("click",this.handleHostClick),document.addEventListener("click",this.handleDocumentClick),document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){this.untrackTrigger(),this.removeEventListener("click",this.handleHostClick),document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("keydown",this.handleDocumentKeydown)}restoreFocusIfStillOurs(){if(!this.isFocusInsideOwnContent())return;this.querySelector('[slot="trigger"]')?.focus()}isFocusInsideOwnContent(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;const s=this.template.host;let t=e;for(;t;){if(t===s)return!0;t=t instanceof ShadowRoot?t.host:t.parentNode}return!1}setOpen(e){this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent("toggle",{detail:this.open,bubbles:!0})))}}y(xt,{publicProps:{placement:{config:0},align:{config:0},open:{config:3}},track:{isMounted:1,panelStyle:1},fields:["_open","positionFrame","handleViewportChange","insideClickStamp","handleHostClick","handleDocumentClick","handleDocumentKeydown"]});const Fn=h(xt,{tmpl:Rn,sel:"fandry-popover",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),On=v`<span class="brand${0}"${2}>ACME</span>`,Nn=v`<div${"c0"}${"a0:data-key"} role="button" tabindex="0"${2}>${"t1"}</div>`,Vn={classMap:{section:!0},key:0},qn={classMap:{container:!0},key:1},Bn={classMap:{title:!0},props:{level:"2"},key:2},Kn={classMap:{subtitle:!0},props:{variant:"muted"},key:3},jn={classMap:{"frame-scroll":!0},key:4},Hn={classMap:{frame:!0},key:5},Gn={classMap:{topbar:!0},key:6},Wn={classMap:{"topbar-links":!0},key:9},Un={"search-input":!0},he={variant:"muted",href:"#"},Qn={"account-trigger":!0},Yn={props:{initials:"A",size:"md"},key:14},Jn={classMap:{"menu-header":!0},key:16},Xn={props:{as:"span",size:"sm"},key:17},Zn={props:{as:"span",size:"xs",variant:"muted"},key:18},eo={props:{value:"profile",label:"Profile"},key:19},to={props:{value:"settings",label:"Account settings"},key:20},ao={props:{value:"signout",label:"Sign out"},key:21},ro={classMap:{body:!0},key:22},so={classMap:{sidebar:!0},key:23},no={classMap:{main:!0},key:26},oo={"back-link":!0},io={classMap:{"detail-head":!0},key:28},lo={props:{level:"3"},key:29},co={props:{as:"span",size:"sm",variant:"muted"},key:31},po={classMap:{"detail-body":!0},key:32},ho={props:{level:"3"},key:33},uo={props:{variant:"muted"},key:34},fo={classMap:{stats:!0},key:35},mo={"stat-card":!0},yo={props:{as:"span",size:"xs",variant:"muted"},key:37},bo={props:{level:"4"},key:38},go={classMap:{"orders-title":!0},props:{level:"4"},key:39},vo={classMap:{"filter-bar":!0},key:40},_o={props:{as:"span",size:"xs",variant:"muted"},key:41},ko={classMap:{orders:!0},key:43},St={"order-row":!0},wo={props:{as:"span",size:"sm"},key:45},xo={props:{as:"span",size:"sm"},key:46},Ct={"status-filter":!0},So={props:{level:"3"},key:49},Co={props:{variant:"muted"},key:50},zo={classMap:{"filter-bar":!0},key:51},Po={props:{as:"span",size:"xs",variant:"muted"},key:52},$o={classMap:{orders:!0},key:54},Eo={props:{as:"span",size:"sm"},key:56},Mo={props:{as:"span",size:"sm"},key:57};function re(a,e,s,t){const{t:r,c:n,st:o,b:i,h:d,ncls:c,k:p,d:l,sp:g,i:k}=a,{_m0:G,_m1:ne,_m2:oe,_m3:ie,_m4:de,_m5:C,_m6:ue,_m7:fe,_m8:W,_m9:w,_m10:Mt,_m11:It,_m12:Tt}=t;return[d("section",Vn,[d("div",qn,[n("fandry-heading",x,Bn,[r("A B2B dashboard, built entirely from these primitives")]),n("fandry-text",m,Kn,[r("No custom UI components. Just Fandry primitives composed together.")]),d("div",jn,[d("div",Hn,[d("div",Gn,[o(On,8),d("div",Wn,[n("fandry-input",ce,{classMap:Un,props:{placeholder:"Search\u2026",value:e.searchQuery},key:10,on:G||(t._m0={input:i(e.handleSearchInput)})}),n("fandry-link",S,{props:he,key:11,on:ne||(t._m1={click:i(e.handleTopbarLinkClick)})},[r("Help")])]),n("fandry-popover",Fn,{props:{open:e.accountMenuOpen,placement:"bottom",align:"end"},key:12,on:oe||(t._m2={toggle:i(e.handleAccountMenuToggle)})},[n("fandry-button",z,{slotAssignment:"trigger",classMap:Qn,props:{variant:"ghost",size:"md",elementProps:e.accountTriggerProps},key:13},[n("fandry-avatar",kn,Yn)]),n("fandry-menu",In,{key:15,on:ie||(t._m3={select:i(e.handleAccountMenuSelect)})},[d("div",Jn,[n("fandry-text",m,Xn,[r("Alex")]),n("fandry-text",m,Zn,[r("alex@acme.com")])]),n("fandry-menu-item",be,eo),n("fandry-menu-item",be,to),n("fandry-menu-item",be,ao)])])]),d("div",ro,[d("aside",so,k(e.navItemClasses,function(b){return o(Nn,p(25,b.key),[g(0,{on:C||(t._m5={click:i(e.handleNavClick),keydown:i(e.handleNavKeydown)}),className:c(b.className),attrs:{"data-key":b.key}},null),g(1,null,l(b.label))])})),d("main",no,[e.showDetail?n("fandry-link",S,{classMap:oo,props:he,key:27,on:ue||(t._m6={click:i(e.handleBackFromDetail)})},[r("\u2190 Back")]):null,e.showDetail?d("div",io,[n("fandry-heading",x,lo,[r(l(e.detailRow.label))]),n("fandry-badge",Q,{props:{variant:e.detailRow.badgeVariant},key:30},[r(l(e.detailRow.badgeLabel))])]):null,e.showDetail?n("fandry-text",m,co,[r(l(e.detailRow.code))]):null,e.showDetail?n("fandry-text",m,po,[r(l(e.detailRow.detail))]):null,e.showOverview?n("fandry-heading",x,ho,[r("Good morning, Alex")]):null,e.showOverview?n("fandry-text",m,uo,[r("Here's what's happening with your account.")]):null,e.showOverview?d("div",fo,k(e.stats,function(b){return n("fandry-card",X,{classMap:mo,key:p(36,b.key)},[n("fandry-text",m,yo,[r(l(b.label))]),n("fandry-heading",x,bo,[r(l(b.value))])])})):null,e.showOverview?n("fandry-heading",x,go,[r("Recent Orders")]):null,e.showOverview&&e.hasStatusFilter?d("div",vo,[n("fandry-text",m,_o,[r('Filtered by "'+l(e.statusFilter)+'"')]),n("fandry-link",S,{props:he,key:42,on:fe||(t._m7={click:i(e.handleClearStatusFilter)})},[r("Clear")])]):null,e.showOverview?d("div",ko,k(e.visibleRecentOrders,function(b){return d("div",{classMap:St,attrs:{"data-key":b.key,role:"button",tabindex:"0"},key:p(44,b.key),on:W||(t._m8={click:i(e.handleRowClick),keydown:i(e.handleRowKeydown)})},[n("fandry-text",m,wo,[r(l(b.code))]),n("fandry-text",m,xo,[r(l(b.label))]),d("span",{classMap:Ct,attrs:{role:"button",tabindex:"0","data-status":b.badgeLabel},key:47,on:w||(t._m9={click:i(e.handleStatusClick),keydown:i(e.handleStatusKeydown)})},[n("fandry-badge",Q,{props:{variant:b.badgeVariant},key:48},[r(l(b.badgeLabel))])])])})):null,e.showList?n("fandry-heading",x,So,[r(l(e.selectedView.title))]):null,e.showList?n("fandry-text",m,Co,[r(l(e.selectedView.subtitle))]):null,e.showList&&e.hasStatusFilter?d("div",zo,[n("fandry-text",m,Po,[r('Filtered by "'+l(e.statusFilter)+'"')]),n("fandry-link",S,{props:he,key:53,on:Mt||(t._m10={click:i(e.handleClearStatusFilter)})},[r("Clear")])]):null,e.showList?d("div",$o,k(e.visibleListRows,function(b){return d("div",{classMap:St,attrs:{"data-key":b.key,role:"button",tabindex:"0"},key:p(55,b.key),on:It||(t._m11={click:i(e.handleRowClick),keydown:i(e.handleRowKeydown)})},[n("fandry-text",m,Eo,[r(l(b.code))]),n("fandry-text",m,Mo,[r(l(b.label))]),d("span",{classMap:Ct,attrs:{role:"button",tabindex:"0","data-status":b.badgeLabel},key:58,on:Tt||(t._m12={click:i(e.handleStatusClick),keydown:i(e.handleStatusKeydown)})},[n("fandry-badge",Q,{props:{variant:b.badgeVariant},key:59},[r(l(b.badgeLabel))])])])})):null])])])])])])]}var Io=u(re);re.stylesheets=[],re.stylesheetToken="lwc-6k3t8bovika",re.legacyStylesheetToken="fandryui-dashboardExample_dashboardExample",ft&&re.stylesheets.push.apply(re.stylesheets,ft),f(re);const ge={orders:{title:"Orders",subtitle:"All orders placed by your account.",rows:[{key:"10482",code:"#10482",label:"Industrial Pump",badgeLabel:"Shipped",badgeVariant:"primary",detail:"Placed Sep 2. Left the warehouse via ground freight \u2014 tracking updates daily."},{key:"10471",code:"#10471",label:"Valve Assembly",badgeLabel:"Processing",badgeVariant:"warning",detail:"Placed Aug 29. Awaiting stock confirmation from the Ohio facility."},{key:"10463",code:"#10463",label:"Filter Kit",badgeLabel:"Delivered",badgeVariant:"success",detail:"Placed Aug 21, delivered Aug 24. Signed for by receiving dock."},{key:"10455",code:"#10455",label:"Gasket Set",badgeLabel:"Delivered",badgeVariant:"success",detail:"Placed Aug 14, delivered Aug 18. Signed for by receiving dock."}]},products:{title:"Products",subtitle:"Items available to order.",rows:[{key:"sku-1042",code:"SKU-1042",label:"Industrial Pump",badgeLabel:"In stock",badgeVariant:"success",detail:"42 units on hand across 2 warehouses. Standard lead time: 2 business days."},{key:"sku-1041",code:"SKU-1041",label:"Valve Assembly",badgeLabel:"Low stock",badgeVariant:"warning",detail:"6 units on hand. Restock expected next week \u2014 order soon to avoid delay."},{key:"sku-1039",code:"SKU-1039",label:"Filter Kit",badgeLabel:"In stock",badgeVariant:"success",detail:"118 units on hand. Standard lead time: 1 business day."}]},invoices:{title:"Invoices",subtitle:"Billing history for your account.",rows:[{key:"inv-2044",code:"INV-2044",label:"September statement",badgeLabel:"Paid",badgeVariant:"success",detail:"$12,480.00 \u2014 paid in full via ACH on Sep 3."},{key:"inv-2039",code:"INV-2039",label:"August statement",badgeLabel:"Paid",badgeVariant:"success",detail:"$9,150.00 \u2014 paid in full via ACH on Aug 3."},{key:"inv-2031",code:"INV-2031",label:"July statement",badgeLabel:"Overdue",badgeVariant:"danger",detail:"$4,020.00 \u2014 14 days past due. A reminder was sent Aug 28."}]},service:{title:"Open Cases",subtitle:"Support cases opened by your team.",rows:[{key:"4821",code:"#4821",label:"Pump running hot",badgeLabel:"High",badgeVariant:"danger",detail:"Opened Sep 1. Field technician scheduled for Sep 4, 9am-noon."},{key:"4790",code:"#4790",label:"Replacement gasket request",badgeLabel:"Normal",badgeVariant:"warning",detail:"Opened Aug 27. Replacement part shipped Aug 30, arriving Sep 3."},{key:"4772",code:"#4772",label:"Installation question",badgeLabel:"Low",badgeVariant:"primary",detail:"Opened Aug 20. Answered by support Aug 21 \u2014 awaiting your confirmation."}]},knowledge:{title:"Knowledge Base",subtitle:"Guides and docs for your equipment.",rows:[{key:"kb-1",code:"Guide",label:"Installing a Filter Kit",badgeLabel:"Guide",badgeVariant:"default",detail:"Step-by-step install guide, 8 min read. Last updated Jul 12."},{key:"kb-2",code:"Guide",label:"Valve Assembly Maintenance",badgeLabel:"Guide",badgeVariant:"default",detail:"Recommended maintenance schedule, 5 min read. Last updated Jun 30."},{key:"kb-3",code:"FAQ",label:"Warranty & Returns",badgeLabel:"FAQ",badgeVariant:"default",detail:"Common questions on warranty coverage and the returns process."}]}};class zt extends P{constructor(...e){super(...e);this.navItems=[{key:"overview",label:"Overview"},{key:"orders",label:"Orders"},{key:"products",label:"Products"},{key:"invoices",label:"Invoices"},{key:"service",label:"Service"},{key:"knowledge",label:"Knowledge"}],this.selectedKey="overview",this.detailRow=null,this.statusFilter=null,this.searchQuery="",this.accountMenuOpen=!1,this.stats=[{key:"orders",label:"Orders",value:"12"},{key:"balance",label:"Balance",value:"$42,050"},{key:"cases",label:"Open Cases",value:"3"}],this.recentOrders=ge.orders.rows.slice(0,3)}get navItemClasses(){return this.navItems.map(e=>({...e,className:e.key===this.selectedKey?"nav-item nav-item--active":"nav-item"}))}get isOverviewTab(){return this.selectedKey==="overview"}get showDetail(){return!!this.detailRow}get showOverview(){return!this.showDetail&&this.isOverviewTab}get showList(){return!this.showDetail&&!this.isOverviewTab}get selectedView(){return ge[this.selectedKey]??ge.orders}filterRows(e){const s=this.searchQuery.trim().toLowerCase();return e.filter(t=>{const r=!this.statusFilter||t.badgeLabel===this.statusFilter,n=!s||t.label.toLowerCase().includes(s)||t.code.toLowerCase().includes(s);return r&&n})}get visibleRecentOrders(){return this.filterRows(this.recentOrders)}get visibleListRows(){return this.filterRows(this.selectedView.rows)}get hasStatusFilter(){return!!this.statusFilter}get accountTriggerProps(){return{tabIndex:0,ariaHasPopup:"menu",ariaExpanded:this.accountMenuOpen}}handleNavClick(e){const s=e.currentTarget.dataset.key;s&&s!==this.selectedKey&&(this.selectedKey=s,this.statusFilter=null,this.searchQuery="",this.detailRow=null)}handleNavKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.handleNavClick(e))}findRowByKey(e){return e?(this.isOverviewTab?this.visibleRecentOrders:this.visibleListRows).find(t=>t.key===e):void 0}handleRowClick(e){const s=this.findRowByKey(e.currentTarget.dataset.key);s&&(this.detailRow=s)}handleRowKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.handleRowClick(e))}handleBackFromDetail(e){e.preventDefault(),this.detailRow=null}toggleStatusFilter(e){!e||(this.statusFilter=this.statusFilter===e?null:e)}handleStatusClick(e){e.stopPropagation(),this.toggleStatusFilter(e.currentTarget.dataset.status)}handleStatusKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation(),this.toggleStatusFilter(e.currentTarget.dataset.status))}handleClearStatusFilter(e){e.preventDefault(),this.statusFilter=null}handleSearchInput(e){this.searchQuery=e.detail}handleAccountMenuToggle(e){this.accountMenuOpen=e.detail}handleAccountMenuSelect(){this.accountMenuOpen=!1}handleTopbarLinkClick(e){e.preventDefault()}}y(zt,{fields:["navItems","selectedKey","detailRow","statusFilter","searchQuery","accountMenuOpen","stats","recentOrders"]});const To=h(zt,{tmpl:Io,sel:"fandryui-dashboard-example",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ao(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.section"+t+" {padding: calc(var(--fd-space-6) * 2) 0 calc(var(--fd-space-6) * 2);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.title"+t+" {text-align: center;margin-bottom: var(--fd-space-2);display: block;}.subtitle"+t+" {display: block;text-align: center;margin: 0 auto var(--fd-space-6);max-width: 34rem;}.frame"+t+" {border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-lg);background: var(--fd-color-surface);padding-block: var(--fd-space-6);}.order-card-body"+t+" {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-2);}"}var Pt=[Ao];const Do=v`<code${3}>.fandry-container</code>`,Lo=v`<code${3}>.fandry-grid</code>`,Ro=v`<code${3}>src/assets/styles/global.css</code>`,Fo={classMap:{section:!0},key:0},Oo={classMap:{container:!0},key:1},No={classMap:{title:!0},props:{level:"2"},key:2},Vo={classMap:{subtitle:!0},props:{variant:"muted"},key:3},qo={classMap:{frame:!0},key:10},Bo={classMap:{"fandry-container":!0},key:11},Ko={props:{level:"1"},key:12},jo={props:{variant:"muted"},key:13},Ho={classMap:{"fandry-grid":!0},key:14},Go={classMap:{"order-card-body":!0},key:16},Wo={props:{as:"span",size:"xs",variant:"muted"},key:17},Uo={props:{level:"4"},key:18},Qo={props:{as:"span",size:"sm"},key:19};function j(a,e,s,t){const{t:r,c:n,st:o,k:i,d,h:c,i:p}=a;return[c("section",Fo,[c("div",Oo,[n("fandry-heading",x,No,[r("Layout is just CSS")]),n("fandry-text",m,Vo,[o(Do,5),r(" and "),o(Lo,7),r(" aren't fandry-* components -- they're plain CSS classes from"),o(Ro,9),r(", wrapping ordinary fandry-* primitives.")]),c("div",qo,[c("div",Bo,[n("fandry-heading",x,Ko,[r("Orders")]),n("fandry-text",m,jo,[r("3 orders placed today.")]),c("div",Ho,p(e.orders,function(l){return n("fandry-card",X,{key:i(15,l.key)},[c("div",Go,[n("fandry-text",m,Wo,[r(d(l.code))]),n("fandry-heading",x,Uo,[r(d(l.customer))]),n("fandry-text",m,Qo,[r(d(l.amount))]),n("fandry-badge",Q,{props:{variant:l.badgeVariant},key:20},[r(d(l.badgeLabel))])])])}))])])])])]}var Yo=u(j);j.renderMode="light",j.stylesheets=[],j.stylesheetToken="lwc-1i6o2cn3jqk",j.legacyStylesheetToken="fandryui-layoutPatternsExample_layoutPatternsExample",Pt&&j.stylesheets.push.apply(j.stylesheets,Pt),f(j);class ve extends P{constructor(...e){super(...e);this.orders=[{key:"ord-10482",code:"#10482",customer:"Acme Robotics",amount:"$1,240.00",badgeLabel:"Shipped",badgeVariant:"success"},{key:"ord-10483",code:"#10483",customer:"Bramble & Co",amount:"$86.50",badgeLabel:"Processing",badgeVariant:"warning"},{key:"ord-10484",code:"#10484",customer:"Nimbus Traders",amount:"$412.00",badgeLabel:"Backordered",badgeVariant:"danger"}]}}ve.renderMode="light",y(ve,{fields:["orders"]});const Jo=h(ve,{tmpl:Yo,sel:"fandryui-layout-patterns-example",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Xo(a,e,s){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}"}var $t=[Xo];const Zo={classMap:{footer:!0},key:0},ei={classMap:{container:!0},key:1},ti={props:{as:"span",size:"sm",variant:"muted"},key:2},ai={classMap:{links:!0},key:3},ri={props:{href:"/getting-started",variant:"muted"},key:4},si={props:{href:"/examples",variant:"muted"},key:5},ni={props:{href:"/components",variant:"muted"},key:6},oi={props:{href:"/blocks",variant:"muted"},key:7},ii={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:8};function se(a,e,s,t){const{d:r,t:n,c:o,h:i}=a;return[i("footer",Zo,[i("div",ei,[o("fandry-text",m,ti,[n("\xA9 "+r(e.year)+" Fandry UI \xB7 MIT License")]),i("div",ai,[o("fandry-link",S,ri,[n("Get started")]),o("fandry-link",S,si,[n("Examples")]),o("fandry-link",S,ni,[n("Components")]),o("fandry-link",S,oi,[n("Blocks")]),o("fandry-link",S,ii,[n("GitHub")])])])])]}var di=u(se);se.stylesheets=[],se.stylesheetToken="lwc-3atbjjo9jl4",se.legacyStylesheetToken="fandryui-siteFooter_siteFooter",$t&&se.stylesheets.push.apply(se.stylesheets,$t),f(se);class li extends P{get year(){return new Date().getFullYear()}}const ci=h(li,{tmpl:di,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),pi={key:0},hi={key:1},ui={key:2},fi={key:3},mi={key:4},yi={key:5},bi={key:6};function H(a,e,s,t){const{c:r,h:n}=a;return[r("fandryui-site-header",Na,pi),n("main",hi,[r("fandryui-hero-section",Zs,ui),r("fandryui-feature-grid",un,fi),r("fandryui-dashboard-example",To,mi),r("fandryui-layout-patterns-example",Jo,yi)]),r("fandryui-site-footer",ci,bi)]}var gi=u(H);H.renderMode="light",H.stylesheets=[],H.stylesheetToken="lwc-67rvm7fvdt8",H.legacyStylesheetToken="fandryui-home_home",_e&&H.stylesheets.push.apply(H.stylesheets,_e),f(H);class Et extends P{}Et.renderMode="light";const vi=h(Et,{tmpl:gi,sel:"fandryui-home",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{vi as default};
