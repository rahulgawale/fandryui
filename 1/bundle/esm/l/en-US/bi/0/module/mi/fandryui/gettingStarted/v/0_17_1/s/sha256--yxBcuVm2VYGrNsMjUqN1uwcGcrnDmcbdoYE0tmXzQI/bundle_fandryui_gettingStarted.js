import{registerTemplate as h,freezeTemplate as y,registerDecorators as b,registerComponent as f,LightningElement as q,parseFragment as k}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function Ee(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.layout"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;align-items: flex-start;gap: var(--fd-space-6);}.nav"+t+" {position: sticky;top: 4rem;height: calc(100vh - 4rem);min-width: 12rem;padding: var(--fd-space-6) 0;border-right: 1px solid var(--fd-color-border);}@media (max-width: 56rem) {.layout"+t+" {flex-direction: column;align-items: stretch;}.nav"+t+" {position: static;width: 100%;height: auto;border-right: none;border-bottom: 1px solid var(--fd-color-border);padding: var(--fd-space-4) 0;}}.group-label"+t+" {display: block;text-transform: uppercase;letter-spacing: 0.04em;padding: 0 var(--fd-space-3);margin-bottom: var(--fd-space-1);}.content"+t+" {flex: 1;min-width: 0;max-width: 46rem;padding: var(--fd-space-6) 0 calc(var(--fd-space-6) * 2);}.title"+t+" {margin-top: var(--fd-space-2);display: block;}.lede"+t+" {display: block;margin-top: var(--fd-space-2);max-width: 36rem;}.section"+t+" {margin-top: calc(var(--fd-space-6) * 1.5);}.section-title"+t+" {display: block;margin-bottom: var(--fd-space-3);}.block"+t+" + .block"+t+" {margin-top: var(--fd-space-4);}.list"+t+" {margin: 0;padding-left: var(--fd-space-5);}.list"+t+" li"+t+" + li"+t+" {margin-top: var(--fd-space-2);}.figure"+t+" {margin: 0;}.code-label"+t+' {display: block;margin-bottom: var(--fd-space-1);font-family: var(--font-code, "Geist Mono", monospace);}.code-block'+t+` {margin: 0;padding: var(--fd-space-4);background: linear-gradient(
 135deg,
 hsl(var(--brand-primary-dark, 330 81% 40%)),
 hsl(var(--brand-accent-dark, 199 89% 30%))
 );color: hsl(220 14% 96%);border-radius: var(--fd-radius-md);overflow-x: auto;font-size: var(--fd-font-size-sm);line-height: var(--fd-line-height-normal, 1.5);}.code-block`+t+" code"+t+' {font-family: var(--font-code, "Geist Mono", monospace);white-space: pre;}.code-block:focus-visible'+t+" {outline: 2px solid hsl(var(--brand-primary, 330 81% 48%));outline-offset: 2px;}.code-block.tree"+t+" {background: var(--fd-color-surface, transparent);color: var(--fd-color-text);border: 1px solid var(--fd-color-border);}.grid"+t+" {display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: var(--fd-space-4);margin-top: var(--fd-space-6);align-items: stretch;}@media (max-width: 40rem) {.grid"+t+" {grid-template-columns: 1fr;}}.card-link"+t+" {display: block;text-decoration: none;color: inherit;border-radius: var(--fd-radius-lg);overflow: hidden;transition: transform 160ms ease, box-shadow 160ms ease;}@media (hover: hover) {.card-link:hover"+t+" {transform: translateY(-2px);box-shadow: 0 12px 24px -12px color-mix(in srgb, var(--fd-color-text) 25%, transparent);}}.card"+t+" {--fd-card-height: 100%;}.card"+t+" > *"+t+" + *"+t+" {margin-top: var(--fd-space-2);display: block;}.end-divider"+t+" {display: block;margin: calc(var(--fd-space-6) * 1.5) 0 var(--fd-space-4);}"}var H=[Ee];function Ae(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":r+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: inline-flex;align-items: center;justify-content: center;width: 1.75rem;height: 1.75rem;border-radius: var(--fd-radius-md);background: linear-gradient(135deg, hsl(var(--brand-primary, 330 81% 48%)), hsl(var(--brand-accent, 199 89% 36%)));color: var(--fd-color-on-primary);font-size: 0.9rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;justify-content: center;gap: var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var U=[Ae];function Me(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline;}.link"+t+" {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: 2px;cursor: pointer;transition: color var(--_fd-duration-fast) ease;}.link:hover"+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color));}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var Y=[Me];const De={"tab-stop":!0},Le={key:2},Oe=[];function _(a,e,n,t){const{ti:r,gid:o,b:s,ncls:i,fid:l,s:m,h:d}=a,{_m0:g}=t;return[d("span",{classMap:De,attrs:{part:"base",role:"link",tabindex:r(e.tabStopIndex),"aria-labelledby":o("anchor"),"aria-disabled":e.ariaDisabled},key:0,on:g||(t._m0={keydown:s(e.handleKeydown)})},[d("a",{className:i(e.classes),attrs:{id:o("anchor"),part:e.linkPart,href:l(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[m("",Le,Oe,n)])])]}var Ne=h(_);_.slots=[""],_.stylesheets=[],_.stylesheetToken="lwc-38j32sll441",_.legacyStylesheetToken="fandry-link_link",Y&&_.stylesheets.push.apply(_.stylesheets,Y),y(_);var Re=void 0;function je(a,e,n){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 330 81% 48%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 199 89% 36%));--_fd-accent-foreground: var(--fd-accent-foreground, 0 0% 100%);--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 271 55% 40%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var Fe=[je];function Be(a,e,n){var t=a?"-"+a:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--fd-slide-x, 0) var(--fd-slide-y, 0);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--fd-slide-x, 0) var(--fd-slide-y, 0);}}"}var qe=[Be];function Ve(a,e,n){var t=a?"["+a+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var Ge=[Fe,qe,Ve];class G extends q{constructor(...e){super(...e);this.lastWarnedElementProps=null}activateAnchorOnEnter(e){e.key!=="Enter"||e.target!==e.currentTarget||this.template.querySelector("a")?.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey}))}resolveTabStopIndex(e,n){if(!!n)return Number(e.tabIndex)===-1?"-1":"0"}withoutTabIndex(e){const{tabIndex:n,...t}=e;return t}resolveElementProps(e,n,t,r="elementProps"){const o={},s=[];for(const[i,l]of Object.entries(e))n.includes(i)?s.push(i):o[i]=l;return s.length&&e!==this.lastWarnedElementProps&&(this.lastWarnedElementProps=e,console.warn(`${t}: ${r} included ${s.map(i=>`"${i}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),o}}G.stylesheets=[Ge],b(G,{fields:["lastWarnedElementProps"]});const v=f(G,{tmpl:Re,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function D(a,e={}){return[a,...Object.keys(e).filter(n=>e[n])].join(" ")}const Ke=["href","target","rel","class","ariaDisabled"];class Q extends v{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return this.resolveTabStopIndex(this.elementProps,!this.disabled)}handleKeydown(e){this.activateAnchorOnEnter(e)}get resolvedElementProps(){return this.withoutTabIndex(this.resolveElementProps(this.elementProps,Ke,"fandry-link"))}get linkPart(){return D("link",{[this.variant||"default"]:!0,disabled:this.disabled})}}b(Q,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const w=f(Q,{tmpl:Ne,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function We(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) ease, color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.button--default:hover:not(:disabled)"+t+" {filter: brightness(var(--_fd-hover-brightness));box-shadow: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}.button--secondary:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}.button--ghost:hover:not(:disabled)"+t+" {background: hsl(var(--_fd-bg-muted));box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}.button:focus-visible"+t+` {outline: none;box-shadow: 0 0 0 var(--_fd-ring-width)\r
 hsl(var(--_fd-ring-color));}.button:disabled`+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled)"+t+" {transform: translateY(1px);box-shadow: none;}"}var X=[We];const He={key:1},Ue=[];function S(a,e,n,t){const{ncls:r,s:o,h:s}=a;return[s("button",{className:r(e.classes),attrs:{part:e.basePart,type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0},[o("",He,Ue,n)])]}var Ye=h(S);S.slots=[""],S.stylesheets=[],S.stylesheetToken="lwc-4ejlbgtq1p9",S.legacyStylesheetToken="fandry-button_button",X&&S.stylesheets.push.apply(S.stylesheets,X),y(S);const Qe=["type","class","disabled"];class J extends v{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return this.resolveElementProps(this.elementProps,Qe,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}get basePart(){return D("base",{[this.variant||"default"]:!0,disabled:this.disabled})}}b(J,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const Xe=f(J,{tmpl:Ye,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Je(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var Z=[Je];const Ze={key:1},et=[];function z(a,e,n,t){const{ncls:r,s:o,h:s}=a;return[s("span",{className:r(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.ariaLabel},key:0},[o("",Ze,et,n)])]}var tt=h(z);z.slots=[""],z.stylesheets=[],z.stylesheetToken="lwc-17qhee1uo3s",z.legacyStylesheetToken="fandry-icon_icon",Z&&z.stylesheets.push.apply(z.stylesheets,Z),y(z);class ee extends v{constructor(...e){super(...e);this.size="md",this.label=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get ariaLabel(){return this.isDecorative?void 0:this.label}}b(ee,{publicProps:{size:{config:0},label:{config:0}}});const at=f(ee,{tmpl:tt,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function rt(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var te=[rt];const nt=k`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,ot=k`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,st=k`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,it={panel:!0},dt={classMap:{search:!0},attrs:{part:"search"},key:2},lt={input:!0},ct={listbox:!0},pt={group:!0},ft={classMap:{empty:!0},attrs:{part:"empty"},key:14},mt={attrs:{name:"empty"},key:15};function C(a,e,n,t){const{ncls:r,b:o,gid:s,h:i,k:l,d:m,sp:d,st:g,dc:j,i:c,f:p,t:B,s:ze}=a,{_m0:Ce,_m1:Pe,_m2:$e,_m3:Te,_m4:Ie}=t;return[e.isMounted?i("div",{className:r(e.backdropClasses),attrs:{part:"backdrop",inert:e.backdropInert},key:0,on:Ce||(t._m0={click:o(e.handleBackdropClick)})},[i("div",{classMap:it,attrs:{part:"panel",role:"dialog","aria-modal":"true","aria-label":e.label},key:1,on:Pe||(t._m1={mousedown:o(e.handlePanelMouseDown)})},[i("div",dt,[i("input",{classMap:lt,attrs:{id:s("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.label,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":s("listbox"),"aria-activedescendant":s(e.activeDescendant)},props:{value:e.query},key:3,on:$e||(t._m2={input:o(e.handleInput),keydown:o(e.handleInputKeydown)})})]),i("div",{classMap:ct,attrs:{id:s("listbox"),part:"listbox",role:"listbox","aria-label":e.label},key:4,on:Te||(t._m3={mousedown:o(e.handleListboxMouseDown)})},c(e.renderGroups,function(F){return i("div",{classMap:pt,attrs:{part:"group",role:"group","aria-label":F.label},key:l(5,F.key)},p([F.hasLabel?g(nt,7,[d(1,null,m(F.label))]):null,c(F.options,function(u){return i("div",{className:r(u.classes),attrs:{id:s(u.id),part:u.part,role:"option","data-option-id":u.id,"aria-selected":u.ariaSelected,"aria-disabled":u.ariaDisabled},key:l(8,u.id),on:Ie||(t._m4={click:o(e.handleOptionClick),mousemove:o(e.handleOptionMouseMove)})},[u.component?j(u.component,{props:{...u.resolvedComponentProps},key:9}):null,u.component?null:g(ot,11,[d(1,null,m(u.label))]),u.component?null:u.hasDescription?g(st,13,[d(1,null,m(u.description))]):null])})]))})),e.hasResults?null:i("div",ft,[ze("empty",mt,[B("No results found")],n)])])]):null]}var ut=h(C);C.slots=["empty"],C.stylesheets=[],C.stylesheetToken="lwc-4bgejodik1n",C.legacyStylesheetToken="fandry-command_command",te&&C.stylesheets.push.apply(C.stylesheets,te),y(C);var ht=void 0;const yt=/[\s\-_/.]/;function V(a,e,n){const t=a.toLowerCase().indexOf(e);return t===-1?0:t===0?n*3:yt.test(a[t-1])?n*2:n}function bt(a,e){let n=0;for(const t of e){const r=Math.max(V(a.label,t,10),...(a.keywords??[]).map(o=>V(o,t,6)),V(a.description??"",t,3),V(a.group??"",t,2));if(r===0)return-1;n+=r}return n}class ae extends v{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}commit(e){}filterItems(e,n){const t=n.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((r,o)=>({item:r,index:o,score:bt(r,t)})).filter(r=>r.score>=0).sort((r,o)=>o.score-r.score||r.index-o.index).map(r=>r.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,n=this.query,t=this.entriesCache;if(t.source===e&&t.query===n)return t.entries;const r=this.buildEntries(e,n);return t.source=e,t.query=n,t.entries=r,r}buildEntries(e,n){const t=this.filterItems(e,n),r=t.filter(i=>!i.group),o=Array.from(new Set(t.filter(i=>i.group).map(i=>i.group)));return[...r,...o.flatMap(i=>t.filter(l=>l.group===i))].map((i,l)=>({id:`option-${l}`,item:i}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(n=>n.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,n=[];for(const t of this.entries){const r=t.item.group??"";let o=n.find(s=>s.label===r);o||(o={key:`group-${n.length}`,label:r,hasLabel:!!r,options:[]},n.push(o)),o.options.push(this.decorate(t,e))}return n}decorate(e,n){const{item:t,id:r}=e,o=!!t.disabled,s=this.isSelected(t);return{id:r,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:o,ariaSelected:s?"true":"false",ariaDisabled:o?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",s?"option--selected":"",r===n?"option--active":"",o?"option--disabled":""].filter(Boolean).join(" "),part:D("option",{selected:s,active:r===n,disabled:o})}}activateSelected(){const e=this.enabledEntries.find(n=>this.isSelected(n.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const n=this.enabledEntries;if(!n.length)return;const r=(n.findIndex(o=>o.id===this.resolvedActiveId)+e+n.length)%n.length;this.activeId=n[r].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const n=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);n&&this.commit(n.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const n=e.currentTarget.dataset.optionId,t=this.entries.find(r=>r.id===n);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const n=e.currentTarget.dataset.optionId;if(n===this.resolvedActiveId)return;const t=this.entries.find(r=>r.id===n);t&&!t.item.disabled&&(this.activeId=t.id)}}b(ae,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const gt=f(ae,{tmpl:ht,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function vt(a){return!a||typeof a.getAnimations!="function"?Promise.resolve():Promise.allSettled(a.getAnimations({subtree:!0}).map(e=>e.finished))}const wt=[];class re extends gt{constructor(...e){super(...e);this.label="",this.placeholder="",this.items=[],this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=n=>{this.open&&n.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const n=this._open;this._open=e,e&&(this.isMounted=!0),!n&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):n&&!e&&(this.unlockBodyScroll(),this.previouslyFocused?.focus(),this.previouslyFocused=null)}get source(){return this.items??wt}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");vt(e).then(()=>{this.open||(this.isMounted=!1)})}}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}b(re,{publicProps:{label:{config:0},placeholder:{config:0},items:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const kt=f(re,{tmpl:ut,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),xt=k`<a class="logo${0}" href="/"${2}><span class="logo-mark${0}"${2}>F</span>Fandry UI</a>`,_t=k`<span class="shortcut${0}"${2}>${"t1"}</span>`,St=k`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,zt={classMap:{header:!0},key:0},Ct={classMap:{container:!0},key:1},Pt={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:4},$t={props:{href:"/getting-started"},key:5},Tt={props:{href:"/examples"},key:6},It={props:{href:"/components"},key:7},Et={props:{href:"/blocks"},key:8},At={classMap:{actions:!0},key:9},Mt={variant:"secondary",size:"sm"},Dt={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:13},Lt={props:{size:"sm",label:"GitHub"},key:14};function L(a,e,n,t){const{st:r,t:o,c:s,h:i,b:l,d:m,sp:d}=a,{_m0:g,_m1:j}=t;return[i("header",zt,[i("div",Ct,[r(xt,3),i("nav",Pt,[s("fandry-link",w,$t,[o("Get started")]),s("fandry-link",w,Tt,[o("Examples")]),s("fandry-link",w,It,[o("Components")]),s("fandry-link",w,Et,[o("Blocks")])]),i("div",At,[s("fandry-button",Xe,{props:Mt,key:10,on:g||(t._m0={click:l(e.handlePaletteOpen)})},[o("Search "),r(_t,12,[d(1,null,m(e.shortcutHint))])]),s("fandry-link",w,Dt,[s("fandry-icon",at,Lt,[r(St,16)])])])])]),s("fandry-command",kt,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:17,on:j||(t._m1={toggle:l(e.handlePaletteToggle),select:l(e.handlePaletteSelect)})})]}var Ot=h(L);L.stylesheets=[],L.stylesheetToken="lwc-2hoqs8gnsf6",L.legacyStylesheetToken="fandryui-siteHeader_siteHeader",U&&L.stylesheets.push.apply(L.stylesheets,U),y(L);const Nt=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],Rt=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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
}`}]}],jt=[{label:"Home",value:"/"},{label:"Getting started",value:"/getting-started"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce"},{label:"Components",value:"/components"},{label:"Blocks",value:"/blocks"},{label:"Blocks: Data table",value:"/blocks/data-table"},{label:"Blocks: Form",value:"/blocks/form"},{label:"Examples",value:"/examples"}],ne=/Mac|iPhone|iPad/.test(navigator.platform);class oe extends q{constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[...jt.map(n=>({...n,group:"Pages"})),...Nt.flatMap(n=>Rt.filter(t=>t.category===n).map(t=>({label:t.name,value:`/components/${t.slug}`,group:n,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=n=>{(ne?n.metaKey:n.ctrlKey)&&n.key?.toLowerCase()==="k"&&(n.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get shortcutHint(){return ne?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}b(oe,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const Ft=f(oe,{tmpl:Ot,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Bt(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var se=[Bt];const qt={key:1},Vt=[];function P(a,e,n,t){const{ncls:r,s:o,h:s}=a;return[s("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[o("",qt,Vt,n)])]}var Gt=h(P);P.slots=[""],P.stylesheets=[],P.stylesheetToken="lwc-4f041bjpr1h",P.legacyStylesheetToken="fandry-text_text",se&&P.stylesheets.push.apply(P.stylesheets,se),y(P);class ie extends v{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}get basePart(){return D("base",{[this.variant||"default"]:!0})}}b(ie,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const x=f(ie,{tmpl:Gt,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Kt(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.tab-stop"+t+" {display: block;border-radius: var(--_fd-radius-md);}.item"+t+" {display: block;padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-md);color: hsl(var(--_fd-text-muted));font-size: var(--_fd-font-size-sm);text-decoration: none;line-height: var(--_fd-line-height-tight);}.item:hover"+t+" {background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.item--active"+t+" {background: hsl(var(--_fd-primary) / 0.1);color: color-mix(in srgb, hsl(var(--_fd-primary)) 70%, hsl(var(--_fd-text)));font-weight: var(--_fd-font-weight-semibold);}.item--active:hover"+t+" {background: hsl(var(--_fd-primary) / 0.14);}"}var de=[Kt];const Wt={"tab-stop":!0},Ht={key:2},Ut=[];function $(a,e,n,t){const{ti:r,gid:o,b:s,ncls:i,fid:l,s:m,h:d}=a,{_m0:g}=t;return[d("span",{classMap:Wt,attrs:{part:"base",role:"link",tabindex:r(e.tabStopIndex),"aria-labelledby":o("anchor"),"aria-current":e.ariaCurrent},key:0,on:g||(t._m0={keydown:s(e.handleKeydown)})},[d("a",{className:i(e.classes),attrs:{id:o("anchor"),part:e.linkPart,href:l(e.href),"aria-current":e.ariaCurrent,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[m("",Ht,Ut,n)])])]}var Yt=h($);$.slots=[""],$.stylesheets=[],$.stylesheetToken="lwc-3rs0ldcssl0",$.legacyStylesheetToken="fandry-sidebarItem_sidebarItem",de&&$.stylesheets.push.apply($.stylesheets,de),y($);const Qt=["href","class","ariaCurrent"];class le extends v{constructor(...e){super(...e);this.href="",this.active=!1,this.elementProps={}}get classes(){return["item",this.active?"item--active":""].filter(Boolean).join(" ")}get ariaCurrent(){return this.active?"page":void 0}get tabStopIndex(){return this.resolveTabStopIndex(this.elementProps,!0)}handleKeydown(e){this.activateAnchorOnEnter(e)}get resolvedElementProps(){return this.withoutTabIndex(this.resolveElementProps(this.elementProps,Qt,"fandry-sidebar-item"))}get linkPart(){return D("link",{current:this.active})}}b(le,{publicProps:{href:{config:0},active:{config:0},elementProps:{config:0}}});const Xt=f(le,{tmpl:Yt,sel:"fandry-sidebar-item",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Jt(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;width: 16rem;flex-shrink: 0;}.sidebar"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);height: 100%;overflow-y: auto;--sidebar-ring-room: calc(var(--_fd-ring-offset) + var(--_fd-ring-width));padding: var(--sidebar-ring-room);padding-inline-end: calc(var(--sidebar-ring-room) + var(--_fd-space-3));}"}var ce=[Jt];const Zt={sidebar:!0},ea={key:1},ta=[];function T(a,e,n,t){const{s:r,h:o}=a;return[o("nav",{classMap:Zt,attrs:{part:"base","aria-label":e.ariaLabel},key:0},[r("",ea,ta,n)])]}var aa=h(T);T.slots=[""],T.stylesheets=[],T.stylesheetToken="lwc-457dnk7cfc4",T.legacyStylesheetToken="fandry-sidebar_sidebar",ce&&T.stylesheets.push.apply(T.stylesheets,ce),y(T);class pe extends v{constructor(...e){super(...e);this.ariaLabel="Sidebar"}}b(pe,{publicProps:{ariaLabel:{config:0}}});const ra=f(pe,{tmpl:aa,sel:"fandry-sidebar",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function na(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}.badge--success"+t+" {background: hsl(var(--_fd-success));color: hsl(var(--_fd-success-foreground));}.badge--warning"+t+" {background: hsl(var(--_fd-warning));color: hsl(var(--_fd-warning-foreground));}.badge--danger"+t+" {background: hsl(var(--_fd-danger));color: hsl(var(--_fd-danger-foreground));}"}var fe=[na];const oa={key:1},sa=[];function I(a,e,n,t){const{ncls:r,s:o,h:s}=a;return[s("span",{className:r(e.classes),attrs:{part:e.basePart},key:0},[o("",oa,sa,n)])]}var ia=h(I);I.slots=[""],I.stylesheets=[],I.stylesheetToken="lwc-7jnsj78lpql",I.legacyStylesheetToken="fandry-badge_badge",fe&&I.stylesheets.push.apply(I.stylesheets,fe),y(I);class me extends v{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}get basePart(){return D("base",{[this.variant||"default"]:!0})}}b(me,{publicProps:{variant:{config:0}}});const ue=f(me,{tmpl:ia,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function da(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var he=[da];const la={key:1},ca=[];function E(a,e,n,t){const{ncls:r,s:o,h:s}=a;return[s("div",{className:r(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[o("",la,ca,n)])]}var pa=h(E);E.slots=[""],E.stylesheets=[],E.stylesheetToken="lwc-4htp61u8vnv",E.legacyStylesheetToken="fandry-heading_heading",he&&E.stylesheets.push.apply(E.stylesheets,he),y(E);class ye extends v{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}b(ye,{publicProps:{level:{config:3}},fields:["_level"]});const K=f(ye,{tmpl:pa,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function fa(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var be=[fa];const ma={classMap:{card:!0},attrs:{part:"base"},key:0},ua={key:1},ha=[];function A(a,e,n,t){const{s:r,h:o}=a;return[o("div",ma,[r("",ua,ha,n)])]}var ya=h(A);A.slots=[""],A.stylesheets=[],A.stylesheetToken="lwc-66cpcf0iuus",A.legacyStylesheetToken="fandry-card_card",be&&A.stylesheets.push.apply(A.stylesheets,be),y(A);class ba extends v{}const ga=f(ba,{tmpl:ya,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function va(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;}.alert"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);padding: var(--_fd-space-3);border-radius: var(--_fd-radius-md);border-left: var(--_fd-border-width-lg) solid hsl(var(--_fd-accent));background: color-mix(in srgb, hsl(var(--_fd-accent)) var(--_fd-surface-tint), transparent);font-size: var(--_fd-font-size-sm);}.alert--success"+t+" {border-left-color: hsl(var(--_fd-success));background: color-mix(in srgb, hsl(var(--_fd-success)) var(--_fd-surface-tint), transparent);}.alert--warning"+t+" {border-left-color: hsl(var(--_fd-warning));background: color-mix(in srgb, hsl(var(--_fd-warning)) var(--_fd-surface-tint), transparent);}.alert--danger"+t+" {border-left-color: hsl(var(--_fd-danger));background: color-mix(in srgb, hsl(var(--_fd-danger)) var(--_fd-surface-tint), transparent);}.title"+t+" {margin: 0;font-weight: var(--_fd-font-weight-semibold);color: hsl(var(--_fd-text));}.body"+t+" {color: hsl(var(--_fd-text));}"}var ge=[va];const wa=k`<p class="title${0}" part="title"${2}>${"t1"}</p>`,ka={classMap:{body:!0},attrs:{part:"body"},key:3},xa={key:4},_a=[];function M(a,e,n,t){const{ncls:r,d:o,sp:s,st:i,s:l,h:m}=a;return[m("div",{className:r(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[e.hasTitle?i(wa,2,[s(1,null,o(e.title))]):null,m("div",ka,[l("",xa,_a,n)])])]}var Sa=h(M);M.slots=[""],M.stylesheets=[],M.stylesheetToken="lwc-1j963p9v2mf",M.legacyStylesheetToken="fandry-alert_alert",ge&&M.stylesheets.push.apply(M.stylesheets,ge),y(M);class ve extends v{constructor(...e){super(...e);this.variant="info",this.title=""}get classes(){return["alert",`alert--${this.variant}`].join(" ")}get hasTitle(){return!!this.title}get role(){return this.variant==="warning"||this.variant==="danger"?"alert":"status"}get basePart(){return D("base",{[this.variant||"info"]:!0})}}b(ve,{publicProps:{variant:{config:0},title:{config:0}}});const za=f(ve,{tmpl:Sa,sel:"fandry-alert",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ca(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;align-self: stretch;}.divider"+t+" {background: hsl(var(--_fd-border));border: none;}.divider--horizontal"+t+" {width: 100%;height: var(--_fd-border-width);}.divider--vertical"+t+" {width: var(--_fd-border-width);height: 100%;}"}var we=[Ca];const Pa=k`<div${"c0"} part="base" role="separator"${"a0:aria-orientation"}${2}></div>`;function O(a,e,n,t){const{ncls:r,sp:o,st:s}=a;return[s(Pa,1,[o(0,{className:r(e.classes),attrs:{"aria-orientation":e.orientation}},null)])]}var $a=h(O);O.stylesheets=[],O.stylesheetToken="lwc-4rg533bd481",O.legacyStylesheetToken="fandry-divider_divider",we&&O.stylesheets.push.apply(O.stylesheets,we),y(O);class ke extends v{constructor(...e){super(...e);this.orientation="horizontal"}get classes(){return["divider",`divider--${this.orientation}`].join(" ")}}b(ke,{publicProps:{orientation:{config:0}}});const Ta=f(ke,{tmpl:$a,sel:"fandry-divider",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Ia(a,e,n){var t=a?"["+a+"]":"",r=a?"["+a+"-host]":"";return(e?":host {":r+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}"}var xe=[Ia];const Ea={classMap:{footer:!0},key:0},Aa={classMap:{container:!0},key:1},Ma={props:{as:"span",size:"sm",variant:"muted"},key:2},Da={classMap:{links:!0},key:3},La={props:{href:"/getting-started",variant:"muted"},key:4},Oa={props:{href:"/examples",variant:"muted"},key:5},Na={props:{href:"/components",variant:"muted"},key:6},Ra={props:{href:"/blocks",variant:"muted"},key:7},ja={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:8};function N(a,e,n,t){const{d:r,t:o,c:s,h:i}=a;return[i("footer",Ea,[i("div",Aa,[s("fandry-text",x,Ma,[o("\xA9 "+r(e.year)+" Fandry UI \xB7 MIT License")]),i("div",Da,[s("fandry-link",w,La,[o("Get started")]),s("fandry-link",w,Oa,[o("Examples")]),s("fandry-link",w,Na,[o("Components")]),s("fandry-link",w,Ra,[o("Blocks")]),s("fandry-link",w,ja,[o("GitHub")])])])])]}var Fa=h(N);N.stylesheets=[],N.stylesheetToken="lwc-3atbjjo9jl4",N.legacyStylesheetToken="fandryui-siteFooter_siteFooter",xe&&N.stylesheets.push.apply(N.stylesheets,xe),y(N);class Ba extends q{get year(){return new Date().getFullYear()}}const qa=f(Ba,{tmpl:Fa,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Va=k`<pre class="code-block${0}" tabindex="0"${2}><code${3}>${"t2"}</code></pre>`,Ga=k`<pre class="code-block tree${0}" tabindex="0"${2}><code${3}>${"t2"}</code></pre>`,Ka={key:0},Wa={classMap:{layout:!0},key:1},Ha={classMap:{nav:!0},props:{ariaLabel:"Getting started"},key:2},Ua={classMap:{group:!0},key:3},Ya={classMap:{"group-label":!0},props:{as:"span",size:"xs",variant:"muted"},key:4},Qa={classMap:{content:!0},key:6},Xa={key:7},Ja={classMap:{title:!0},props:{level:"1"},key:8},Za={classMap:{lede:!0},props:{variant:"muted"},key:9},er={classMap:{grid:!0},key:10},tr={"card-link":!0},ar={classMap:{card:!0},key:12},rr={key:13},nr={props:{level:"2"},key:14},or={props:{variant:"muted",size:"sm"},key:15},sr={section:!0},ir={classMap:{"section-title":!0},props:{level:"2"},key:17},dr={block:!0},lr={key:19},cr={classMap:{list:!0},key:20},pr={key:22},fr={classMap:{figure:!0},key:23},mr={key:24},ur={classMap:{"code-label":!0},props:{as:"span",size:"xs",variant:"muted"},key:25},hr={classMap:{figure:!0},key:28},yr={key:29},br={classMap:{"code-label":!0},props:{as:"span",size:"xs",variant:"muted"},key:30},gr={classMap:{"end-divider":!0},key:34},vr={props:{variant:"muted",size:"sm"},key:35},wr={props:{href:"/components"},key:36},kr={key:37};function R(a,e,n,t){const{c:r,t:o,k:s,d:i,i:l,f:m,h:d,sp:g,st:j}=a;return[r("fandryui-site-header",Ft,Ka),d("div",Wa,[r("fandry-sidebar",ra,Ha,[d("div",Ua,m([r("fandry-text",x,Ya,[o("Getting started")]),l(e.sidebarItems,function(c){return r("fandry-sidebar-item",Xt,{props:{href:c.href,active:c.active},key:s(5,c.slug)},[o(i(c.name))])})]))]),d("main",Qa,m([r("fandry-badge",ue,Xa,[o(i(e.page.badge))]),r("fandry-heading",K,Ja,[o(i(e.page.title))]),r("fandry-text",x,Za,[o(i(e.page.description))]),e.isOverview?d("div",er,l(e.platformCards,function(c){return d("a",{classMap:tr,attrs:{href:c.href},key:s(11,c.slug)},[r("fandry-card",ga,ar,[r("fandry-badge",ue,rr,[o(i(c.badge))]),r("fandry-heading",K,nr,[o(i(c.name))]),r("fandry-text",x,or,[o(i(c.description))])])])})):null,l(e.sections,function(c){return d("section",{classMap:sr,key:s(16,c.id)},m([r("fandry-heading",K,ir,[o(i(c.title))]),l(c.blocks,function(p){return d("div",{classMap:dr,key:s(18,p.key)},[p.isText?r("fandry-text",x,lr,[o(i(p.text))]):null,p.isList?d("ul",cr,l(p.items,function(B){return d("li",{key:s(21,B)},[r("fandry-text",x,pr,[o(i(B))])])})):null,p.isCode?d("figure",fr,[d("figcaption",mr,[r("fandry-text",x,ur,[o(i(p.label))])]),j(Va,27,[g(2,null,i(p.code))])]):null,p.isTree?d("figure",hr,[d("figcaption",yr,[r("fandry-text",x,br,[o(i(p.label))])]),j(Ga,32,[g(2,null,i(p.code))])]):null,p.isNote?r("fandry-alert",za,{props:{variant:p.variant,title:p.title},key:33},[o(i(p.text))]):null])})]))}),r("fandry-divider",Ta,gr),r("fandry-text",x,vr,[o("Ready to build? Browse every component, its props and examples under "),r("fandry-link",w,wr,[o("Components")]),o(".")])]))]),r("fandryui-site-footer",qa,kr)]}var xr=h(R);R.stylesheets=[],R.stylesheetToken="lwc-41nfl9mejpa",R.legacyStylesheetToken="fandryui-gettingStarted_gettingStarted",H&&R.stylesheets.push.apply(R.stylesheets,H),y(R);const _r={slug:"lwr-oss",name:"LWR / LWC OSS",badge:"npm",title:"Getting started with LWR / LWC OSS",description:"Install one npm package, point your project at it, and use <fandry-*> components. Your bundler ships only the ones you use.",sections:[{id:"requirements",title:"Requirements",blocks:[{type:"list",items:["Node.js 18 or newer","An LWR or LWC OSS project using lwc 8.x (lwc is a peer dependency, so Fandry uses your copy)","npm, or pnpm / yarn if you prefer"]}]},{id:"install",title:"1. Install",blocks:[{type:"text",text:"One package brings every component and its single third-party dependency (@tanstack/table-core, used by fandry-table). There is nothing else to install."},{type:"code",label:"Terminal",code:"npm install fandryui"}]},{id:"init",title:"2. Initialize",blocks:[{type:"text",text:"The CLI detects your project from lwr.config.json or lwc.config.json and registers the package as a module source. You can also make this edit by hand."},{type:"code",label:"Terminal",code:"npx fandry init"},{type:"code",label:"lwr.config.json (after)",code:`{
  "lwc": {
    "modules": [
      { "dir": "$rootDir/src/modules" },
      { "npm": "fandryui" }
    ]
  },
  "routes": [ ... ]
}`},{type:"note",variant:"info",title:"lwc.config.json projects",text:'Plain LWC OSS projects keep the same record at the top level: "modules": [ { "npm": "fandryui" } ].'}]},{id:"use",title:"3. Use a component",blocks:[{type:"text",text:"The package brings its own fandry namespace, so fandry/button is <fandry-button>. No imports are needed in your template."},{type:"code",label:"src/modules/my/app/app.html",code:`<template>
  <fandry-button onclick={handleSave}>Save</fandry-button>

  <fandry-select
    label="Fruit"
    options={options}
    value={fruit}
    onchange={handleChange}
  ></fandry-select>
</template>`},{type:"code",label:"src/modules/my/app/app.js",code:`import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  fruit = 'apple';
  options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ];

  handleSave() {}
  handleChange(event) {
    this.fruit = event.detail;
  }
}`}]},{id:"structure",title:"What your project looks like",blocks:[{type:"tree",label:"Directory structure",code:`my-lwr-app/
\u251C\u2500\u2500 lwr.config.json            # { "npm": "fandryui" } added by \`fandry init\`
\u251C\u2500\u2500 fandry.json                # written by \`fandry init\`
\u251C\u2500\u2500 package.json               # "fandryui" in dependencies
\u251C\u2500\u2500 node_modules/
\u2502   \u2514\u2500\u2500 fandryui/
\u2502       \u251C\u2500\u2500 lwc.config.json    # the public modules ("expose")
\u2502       \u251C\u2500\u2500 registry.json
\u2502       \u2514\u2500\u2500 modules/fandry/    # readable source, one folder per component
\u2502           \u251C\u2500\u2500 base/
\u2502           \u251C\u2500\u2500 button/
\u2502           \u251C\u2500\u2500 select/
\u2502           \u2514\u2500\u2500 table/ ...
\u2514\u2500\u2500 src/
    \u2514\u2500\u2500 modules/
        \u2514\u2500\u2500 my/
            \u2514\u2500\u2500 app/           # your code
                \u251C\u2500\u2500 app.html
                \u2514\u2500\u2500 app.js`},{type:"text",text:"Everything under node_modules/fandryui is readable LWC source. Fandry is not a black box: open a component to see exactly what it does."}]},{id:"shipping",title:"Only what you use ships",blocks:[{type:"text",text:"There is no registry and nothing is registered globally. Your bundler follows the module graph from your templates, so a page that uses fandry-button does not include table, dialog or lookup. There is nothing to add with the CLI on this platform."}]},{id:"next",title:"Next steps",blocks:[{type:"list",items:[`Extend the shared base class: import Base from "fandry/base" gives your own component Fandry's stylesheet and design tokens.`,"Theme by setting any --fd-* token on :root (e.g. --fd-primary: 210 90% 40%; --fd-radius-md: 0), or on one section to theme just that part of the page.","Restyle one element inside a component with ::part(), e.g. fandry-link::part(link). Each component page lists its parts.","Browse every component, its props and examples under Components."]},{type:"note",variant:"warning",title:"Build fails with LWC1121 in @lwrjs/loader?",text:`Fresh installs of lwr 0.18.3 can pull @lwc/compiler 9.x, which rejects LWR's own loader. Pin your @lwc/* packages to the same 8.x version as lwc (npm "overrides"). The repository's examples/consumer/package.json shows a working set.`}]}]},Sr={slug:"salesforce",name:"Salesforce DX",badge:"sfdx",title:"Getting started on Salesforce",description:"The platform has no bundler and cannot import npm packages, so the CLI copies components into your project as source you own, with everything they depend on.",sections:[{id:"requirements",title:"Requirements",blocks:[{type:"list",items:["A Salesforce DX project (it has an sfdx-project.json)","The Salesforce CLI (sf) and an authorized org","Node.js 18 or newer, to run the fandry CLI"]}]},{id:"install",title:"1. Install the CLI",blocks:[{type:"text",text:"Install fandryui as a dev dependency. It is only used to run the fandry CLI and to copy source out of; nothing from node_modules is deployed."},{type:"code",label:"Terminal",code:"npm install --save-dev fandryui"},{type:"text",text:"Prefer not to install it? Every command below also works as npx fandryui <command>."}]},{id:"init",title:"2. Initialize",blocks:[{type:"text",text:"Fandry gets its own package directory next to your app code, so the copied source is easy to tell apart and can be deployed on its own."},{type:"code",label:"Terminal",code:"npx fandry init"},{type:"code",label:"sfdx-project.json (after)",code:`{
  "packageDirectories": [
    { "path": "force-app", "default": true },
    { "path": "fandryui" }
  ],
  "namespace": "",
  "sourceApiVersion": "67.0"
}`},{type:"text",text:"Use --dir <path> to install into a different package directory. Your existing indentation and default package directory are left untouched."}]},{id:"add",title:"3. Add components",blocks:[{type:"text",text:"Name the components you want. Their dependencies are followed for you: adding table also adds input, checkbox, pagination, skeleton, the shared base and more."},{type:"code",label:"Terminal",code:"npx fandry add button input table"},{type:"code",label:"Output",code:`Added 10 bundle(s) to fandryui/main/default/lwc (3 requested, 7 dependencies)
  + fandryBase
  + fandryButton
  + fandryLabel
  + fandryInput
  + fandryCheckbox
  + fandryPagination
  + fandrySkeleton
  + fandryTableCore
  + fandryTableState
  + fandryTable`},{type:"code",label:"Other commands",code:`npx fandry list                  # every component and what it depends on
npx fandry add --all             # everything
npx fandry add table --dry-run   # show what would be added
npx fandry add table --overwrite # replace table even if you edited it`},{type:"text",text:"Each bundle gets a .js-meta.xml using your project's sourceApiVersion, and it is never rewritten after that, so you can expose a component or add targets safely. Bundles you have edited are never overwritten unless you name them with --overwrite."}]},{id:"structure",title:"What your project looks like",blocks:[{type:"tree",label:"Directory structure",code:`my-sfdx-project/
\u251C\u2500\u2500 sfdx-project.json          # "fandryui" package directory added by \`fandry init\`
\u251C\u2500\u2500 fandry.json                # written by \`fandry init\`
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 force-app/                 # your app
\u2502   \u2514\u2500\u2500 main/default/lwc/
\u2502       \u2514\u2500\u2500 myComponent/
\u2514\u2500\u2500 fandryui/                  # Fandry: your source now, commit it
    \u2514\u2500\u2500 main/default/lwc/
        \u251C\u2500\u2500 fandryBase/        # shared class, base.css, tokens.css, motion.css
        \u251C\u2500\u2500 fandryButton/
        \u251C\u2500\u2500 fandryInput/
        \u251C\u2500\u2500 fandryLabel/
        \u251C\u2500\u2500 fandryCheckbox/
        \u251C\u2500\u2500 fandryPagination/
        \u251C\u2500\u2500 fandrySkeleton/
        \u251C\u2500\u2500 fandryTable/
        \u251C\u2500\u2500 fandryTableState/
        \u2514\u2500\u2500 fandryTableCore/   # @tanstack/table-core, bundled`},{type:"text",text:"The copied files are yours: commit them, edit them, deploy them. They are ordinary LWC source, not a managed package."}]},{id:"use",title:"4. Use a component",blocks:[{type:"text",text:"On the platform your code lives in the default c namespace, so fandryButton is <c-fandry-button>. No imports are needed in the template."},{type:"code",label:"force-app/main/default/lwc/myComponent/myComponent.html",code:`<template>
  <lightning-card title="Team">
    <c-fandry-button onclick={handleSave}>Save</c-fandry-button>

    <c-fandry-table
      columns={columns}
      data={rows}
      caption="Team members"
      enable-pagination
      page-size="3"
      enable-global-filter
    ></c-fandry-table>
  </lightning-card>
</template>`},{type:"code",label:"force-app/main/default/lwc/myComponent/myComponent.js",code:`import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
  columns = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'role', accessorKey: 'role', header: 'Role' }
  ];
  rows = [
    { name: 'Ada Lovelace', role: 'Engineer' },
    { name: 'Alan Turing', role: 'Researcher' }
  ];

  handleSave() {}
}`}]},{id:"deploy",title:"5. Deploy",blocks:[{type:"text",text:"Deploy Fandry first (or both directories in one command), then your app."},{type:"code",label:"Terminal",code:`sf project deploy start --source-dir fandryui --target-org my-org
sf project deploy start --source-dir force-app --target-org my-org

# or both at once
sf project deploy start --source-dir fandryui --source-dir force-app --target-org my-org`},{type:"note",variant:"success",title:"Tested on a real org",text:"button, input, table (with its bundled table-core), pagination and the table search were deployed to an org and run on a Lightning page."}]},{id:"limits",title:"Good to know",blocks:[{type:"note",variant:"warning",title:"select, combobox, command and lookup use dynamic components",text:"They use lwc:is, which Salesforce only accepts when the bundle's own .js-meta.xml declares the lightning__dynamicComponent capability (with API 55 or later and Lightning Web Security on); otherwise the deploy fails with LWC1188. fandry add writes the capability into the meta files it creates and tells you if an existing one lacks it. Nothing in jsconfig.json or your project settings does this."},{type:"list",items:["Fandry is not a managed package. Components are plain c-namespace source in your project.","The table depends on @tanstack/table-core. Because npm packages cannot be imported on the platform, fandry add table installs it as the fandryTableCore bundle.","Upgrading: update fandryui, then run fandry add <name> again. Bundles you have not edited are updated to the new version, edited ones are skipped, and --overwrite replaces only the components you name. Commit fandry.json: it records what was installed so an upgrade can be told apart from an edit."]}]}]},_e={slug:"",name:"Overview",badge:"start",title:"Getting started",description:"One source, one npm package, two platforms. Pick the one you build on; the components are the same.",sections:[{id:"platforms",title:"Choose your platform",blocks:[{type:"text",text:"Fandry UI is a single package, fandryui. What differs is how your platform resolves code, so what you run and what you write differs slightly."}]},{id:"compare",title:"At a glance",blocks:[{type:"code",label:"LWR / LWC OSS",code:`npm install fandryui
npx fandry init

<fandry-button>Save</fandry-button>`},{type:"code",label:"Salesforce DX",code:`npm install --save-dev fandryui
npx fandry init
npx fandry add button table

<c-fandry-button>Save</c-fandry-button>`},{type:"text",text:"LWR and LWC OSS let a package bring its own namespace and have a bundler that ships only what you use, so the whole package is installed and you write <fandry-*>. Salesforce code lives in the default c namespace and has no bundler or npm resolution, so the CLI copies the components you choose, with their dependencies, into your project and you write <c-fandry-*>. It is the same source either way."}]},{id:"principles",title:"What stays true on both",blocks:[{type:"list",items:["Real LWC components. Readable source you can open, not a black box.","You own the application: layout, state, data, routing. There is no Fandry shell, router or bootstrap.","Use one component or thirty. Nothing forces you to adopt the whole system.","No runtime registry, loader or network fetch for components or icons."]}]}]},W=[_e,_r,Sr];function zr(a){return W.find(e=>e.slug===a)??_e}class Se extends q{constructor(...e){super(...e);this.slug=""}connectedCallback(){const e=window.location.pathname.match(/\/getting-started(?:\/([a-z-]+))?\/?$/);this.slug=e&&e[1]?e[1]:""}get page(){return zr(this.slug)}get isOverview(){return this.page.slug===""}get sidebarItems(){return W.map(e=>({slug:e.slug||"overview",name:e.name,href:e.slug?`/getting-started/${e.slug}`:"/getting-started",active:e.slug===this.page.slug}))}get platformCards(){return W.filter(e=>e.slug).map(e=>({slug:e.slug,name:e.name,badge:e.badge,href:`/getting-started/${e.slug}`,description:e.description}))}get sections(){return this.page.sections.map(e=>({...e,blocks:e.blocks.map((n,t)=>({...n,key:`${e.id}-${t}`,isText:n.type==="text",isList:n.type==="list",isCode:n.type==="code",isTree:n.type==="tree",isNote:n.type==="note"}))}))}}b(Se,{fields:["slug"]});const Cr=f(Se,{tmpl:xr,sel:"fandryui-getting-started",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{Cr as default};
