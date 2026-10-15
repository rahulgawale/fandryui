import{registerTemplate as y,freezeTemplate as g,registerComponent as m,LightningElement as S,registerDecorators as v,parseFragment as h}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F9_4_3/s/sha256-EL643D_kgu-DxtuHjBiYhZdySKDFEWjBscF0aGwGo5I/bundle_lwc.js";function He(a,e,r){var t=a?"["+a+"]":"";return".lede"+t+" {display: block;margin-top: var(--fd-space-3);max-width: 38rem;}.lede"+t+"::part(base) {font-size: var(--fd-font-size-lg);}:not(pre)"+t+" > code"+t+' {font-family: var(--font-code, "Geist Mono", monospace);font-size: 0.875em;padding: 0.1em 0.35em;border-radius: var(--fd-radius-sm);background: color-mix(in srgb, var(--fd-color-text) 6%, transparent);border: 1px solid color-mix(in srgb, var(--fd-color-text) 10%, transparent);overflow-wrap: anywhere;}.list'+t+" {margin: 0;padding-left: var(--fd-space-5);}.list"+t+" li"+t+" + li"+t+" {margin-top: var(--fd-space-2);}.props-table-wrap"+t+" {overflow-x: auto;border: 1px solid var(--fd-color-border);border-radius: var(--fd-radius-md);}.props-table"+t+" {width: 100%;border-collapse: collapse;font-size: var(--fd-font-size-sm);}.props-table"+t+" th"+t+",.props-table"+t+" td"+t+" {text-align: left;padding: var(--fd-space-2) var(--fd-space-3);border-bottom: 1px solid var(--fd-color-border);vertical-align: top;}.props-table"+t+" thead"+t+" th"+t+" {color: var(--fd-color-muted);font-weight: var(--fd-font-weight-semibold);font-size: var(--fd-font-size-xs);text-transform: uppercase;letter-spacing: 0.04em;}.props-table"+t+" tbody"+t+" tr:last-child"+t+" td"+t+" {border-bottom: none;}.props-table"+t+" td"+t+" > code"+t+" {padding: 0;border: 0;background: none;font-size: 0.85em;overflow-wrap: normal;}.toc"+t+" {display: none;}@media (min-width: 72rem) {.toc"+t+" {display: block;flex: none;width: 11rem;position: sticky;top: 4rem;padding: var(--fd-space-6) 0;}}"}var Ge=[He];function Ve(a,e,r){var t=a?"["+a+"]":"";return".info-card"+t+",.info-card"+t+"::part(base) {height: 100%;min-width: 0;}.info-card"+t+"::part(base) {display: flex;flex-direction: column;align-items: flex-start;gap: var(--fd-space-3);padding: var(--fd-space-6);}.info-card"+t+" fandry-text"+t+" {display: block;}"}var Ke=[Ve];function Ue(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;}.article"+t+" {max-width: 46rem;margin: 0 auto;padding: 0 var(--fd-space-6) var(--fd-space-6);}.section"+t+" {margin-top: calc(var(--fd-space-6) * 2);}.section-title"+t+" {display: block;margin-bottom: var(--fd-space-3);}.para"+t+" {display: block;margin-bottom: var(--fd-space-4);}.article"+t+" fandryui-code-block"+t+" {margin-bottom: var(--fd-space-4);}.list"+t+" {margin: 0;}.list"+t+" li"+t+" + li"+t+" {margin-top: var(--fd-space-1);}.ladder"+t+" {list-style: none;margin: 0;padding: 0;display: flex;flex-direction: column;gap: var(--fd-space-3);}.rung"+t+" {display: flex;gap: var(--fd-space-3);align-items: flex-start;}.step"+t+" {flex: none;display: inline-flex;align-items: center;justify-content: center;width: 2rem;height: 2rem;border-radius: 50%;font-weight: 600;background: hsl(var(--site-primary) / 0.12);color: hsl(var(--site-primary-dark));}.rung-title"+t+" {display: block;margin-bottom: var(--fd-space-1);}.rung-title"+t+"::part(base) {font-size: var(--fd-font-size-md);}.compare"+t+" {display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: var(--fd-space-4);}@media (max-width: 40rem) {.compare"+t+" {grid-template-columns: 1fr;}}.tradeoffs"+t+" {margin: 0;display: flex;flex-direction: column;gap: var(--fd-space-4);}.tradeoff"+t+" dd"+t+" {margin: var(--fd-space-1) 0 0;}.tradeoff-title"+t+" {font-weight: 600;}.demo"+t+" {margin-top: calc(var(--fd-space-6) * 1.5);padding: calc(var(--fd-space-6) * 1.5) 0 calc(var(--fd-space-6) * 2);border-top: 1px solid var(--fd-color-border);}.demo-inner"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.themes"+t+" {display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: var(--fd-space-5);margin-top: var(--fd-space-4);}@media (max-width: 56rem) {.themes"+t+" {grid-template-columns: 1fr;}}.theme"+t+" {display: flex;flex-direction: column;gap: var(--fd-space-2);padding: var(--fd-space-4);border-radius: var(--fd-radius-lg);border: 1px solid var(--fd-color-border);}.theme-name"+t+" {display: block;font-weight: 600;text-transform: uppercase;letter-spacing: 0.08em;}.theme-card"+t+"::part(base) {display: flex;flex-direction: column;gap: var(--fd-space-3);align-items: flex-start;}.theme-card"+t+" fandry-input"+t+" {align-self: stretch;}.start"+t+" {padding: calc(var(--fd-space-6) * 1.5) 0 calc(var(--fd-space-6) * 2);border-top: 1px solid var(--fd-color-border);background: radial-gradient(circle at 50% 0%, hsl(var(--site-primary) / 0.06), transparent 60%);}.start-inner"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);}.start-grid"+t+" {display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: var(--fd-space-5);margin-top: var(--fd-space-4);align-items: stretch;}@media (max-width: 48rem) {.start-grid"+t+" {grid-template-columns: 1fr;}}.start-card"+t+"::part(base) {position: relative;transition: transform 160ms ease, box-shadow 160ms ease;}@media (hover: hover) {.start-card:hover"+t+"::part(base) {transform: translateY(-4px);box-shadow: 0 12px 24px -12px color-mix(in srgb, var(--fd-color-text) 25%, transparent);}}.start-code"+t+" {position: relative;z-index: 1;align-self: stretch;margin-top: auto;}.start-cta"+t+"::part(link) {font-weight: var(--fd-font-weight-semibold);text-decoration: none;}.start-cta"+t+"::part(link)::after {content: '';position: absolute;inset: 0;}.start-cta::part(link):hover"+t+" {filter: none;}.next"+t+" {display: block;margin-top: var(--fd-space-5);}.compare-card"+t+" fandry-heading"+t+"::part(base) {font-size: var(--fd-font-size-lg);}"}var Z=[Ge,Ke,Ue];function Ye(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;position: sticky;top: 0;z-index: 40;}"+(e?":host(.palette-open) {":n+".palette-open {")+"z-index: calc(var(--fd-z-overlay, 50) + 1);}.header"+t+" {background: color-mix(in srgb, var(--fd-color-background) 85%, transparent);backdrop-filter: blur(8px);border-bottom: 1px solid var(--fd-color-border);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: 0 var(--fd-space-6);height: 4rem;display: flex;align-items: center;gap: var(--fd-space-6);}.logo"+t+" {display: flex;align-items: center;gap: var(--fd-space-2);font-weight: var(--fd-font-weight-bold);font-size: var(--fd-font-size-lg, 1.125rem);color: var(--fd-color-text);text-decoration: none;white-space: nowrap;}.logo-mark"+t+" {display: block;width: 2rem;height: 2rem;}.nav"+t+" {flex: 1;display: flex;align-items: center;gap: var(--fd-space-5);}.nav-link"+t+"::part(link) {color: hsl(var(--site-text-quiet));text-decoration: none;font-weight: var(--fd-font-weight-medium);}.nav-link::part(link):hover"+t+",.nav-link"+t+"::part(link current) {color: hsl(var(--site-primary));}.nav-link"+t+"::part(link current) {font-weight: var(--fd-font-weight-semibold);}.actions"+t+" {display: flex;align-items: center;gap: var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {height: auto;flex-wrap: wrap;row-gap: var(--fd-space-3);padding: var(--fd-space-3) var(--fd-space-4);}.nav"+t+" {order: 3;flex-basis: 100%;flex-wrap: wrap;justify-content: center;gap: var(--fd-space-2) var(--fd-space-4);}}.shortcut"+t+" {margin-left: var(--fd-space-2);opacity: 0.7;font-size: var(--fd-font-size-xs);}"}var ee=[Ye];function Qe(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: inline;}.link"+t+` {color: hsl(var(--_fd-primary));font-family: inherit;font-size: inherit;text-decoration: underline;text-underline-offset: var(--_fd-link-underline-offset);cursor: pointer;transition: color var(--_fd-duration-fast) ease,
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.link:hover`+t+" {filter: brightness(var(--_fd-hover-brightness));}.link:visited"+t+" {color: hsl(var(--_fd-link-visited));}.link--muted"+t+" {color: hsl(var(--_fd-text-muted));}.link--muted:hover"+t+" {color: hsl(var(--_fd-text));filter: none;}.tab-stop:focus-visible"+t+" {outline: none;}.tab-stop:focus-visible"+t+" .link"+t+",.link:focus-visible"+t+" {outline: none;border-radius: var(--_fd-radius-sm);box-shadow: var(--_fd-ring-control);}.link--disabled"+t+" {color: hsl(var(--_fd-text-muted));opacity: var(--_fd-disabled-opacity);cursor: not-allowed;text-decoration: none;pointer-events: none;}"}var te=[Qe];const Xe={"tab-stop":!0},Je={key:2},Ze=[];function C(a,e,r,t){const{ti:n,gid:o,b:i,ncls:s,fid:d,s:f,h:l}=a,{_m0:u}=t;return[l("span",{classMap:Xe,attrs:{part:"base",role:"link",tabindex:n(e.tabStopIndex),"aria-labelledby":o("anchor"),"aria-disabled":e.ariaDisabled,"aria-current":e.ariaCurrent},key:0,on:u||(t._m0={keydown:i(e.handleKeydown),click:i(e.handleClick)})},[l("a",{className:s(e.classes),attrs:{id:o("anchor"),part:e.linkPart,href:d(e.computedHref),target:e.target,rel:e.computedRel,"aria-disabled":e.ariaDisabled,"aria-hidden":"true",tabindex:"-1"},props:{...e.resolvedElementProps},key:1},[f("",Je,Ze,r)])])]}var et=y(C);C.slots=[""],C.stylesheets=[],C.stylesheetToken="lwc-38j32sll441",C.legacyStylesheetToken="fandry-link_link",te&&C.stylesheets.push.apply(C.stylesheets,te),g(C);var tt=void 0;function at(a,e,r){var t=a?"["+a+"-host]":"";return(e?":host {":t+" {")+`--_fd-primary: var(--fd-primary, var(--brand-primary, 226 90% 50%));--_fd-primary-foreground: var(--fd-primary-foreground, 0 0% 100%);--_fd-accent: var(--fd-accent, var(--brand-accent, 162 72% 42%));--_fd-accent-foreground: var(--fd-accent-foreground, 160 40% 12%);--_fd-info: var(--fd-info, var(--fd-accent, var(--brand-accent, 199 89% 36%)));--_fd-success: var(--fd-success, 142 71% 30%);--_fd-success-foreground: var(--fd-success-foreground, 0 0% 100%);--_fd-warning: var(--fd-warning, 38 92% 32%);--_fd-warning-foreground: var(--fd-warning-foreground, 0 0% 100%);--_fd-danger: var(--fd-danger, 0 72% 51%);--_fd-danger-foreground: var(--fd-danger-foreground, 0 0% 100%);--_fd-link-visited: var(--fd-link-visited, 252 56% 44%);--_fd-bg: var(--fd-bg, 0 0% 100%);--_fd-bg-muted: var(--fd-bg-muted, 220 14% 96%);--_fd-text: var(--fd-text, 222 47% 11%);--_fd-text-muted: var(--fd-text-muted, 220 9% 46%);--_fd-border: var(--fd-border, 220 13% 91%);--_fd-border-focus: var(--fd-border-focus, 222 89% 56%);--_fd-border-width: var(--fd-border-width, 1px);--_fd-border-width-md: var(--fd-border-width-md, 1.5px);--_fd-border-width-lg: var(--fd-border-width-lg, 3px);--_fd-surface-tint: var(--fd-surface-tint, 12%);--_fd-pulse-opacity: var(--fd-pulse-opacity, 0.5);--_fd-disabled-opacity: var(--fd-disabled-opacity, 0.5);--_fd-shadow-sm: var(--fd-shadow-sm, 0 2px 8px);--_fd-shadow-color-floating: var(--fd-shadow-color-floating, 0 0% 0% / 0.15);--_fd-shadow-color-modal: var(--fd-shadow-color-modal, 0 0% 0% / 0.25);--_fd-shadow-color-subtle: var(--fd-shadow-color-subtle, 0 0% 0% / 0.1);--_fd-hover-brightness: var(--fd-hover-brightness, 1.1);--_fd-z-overlay: var(--fd-z-overlay, 50);--_fd-z-overlay-contained: var(--fd-z-overlay-contained, 1);--_fd-backdrop: var(--fd-backdrop, 222 47% 11%);--_fd-backdrop-opacity: var(--fd-backdrop-opacity, 0.6);--_fd-control-height-sm: var(--fd-control-height-sm, 32px);--_fd-control-height-md: var(--fd-control-height-md, 36px);--_fd-control-height-lg: var(--fd-control-height-lg, 40px);--_fd-control-max-width-sm: var(--fd-control-max-width-sm, 16rem);--_fd-control-min-width-sm: var(--fd-control-min-width-sm, 8rem);--_fd-listbox-max-height: var(--fd-listbox-max-height, 16rem);--_fd-overlay-min-width-sm: var(--fd-overlay-min-width-sm, 10rem);--_fd-overlay-max-width-sm: var(--fd-overlay-max-width-sm, 16rem);--_fd-overlay-max-width-md: var(--fd-overlay-max-width-md, 32rem);--_fd-overlay-offset-top: var(--fd-overlay-offset-top, 15vh);--_fd-ring-color: var(--fd-ring-color, 222 89% 56%);--_fd-ring-width: var(--fd-ring-width, 2px);--_fd-ring-offset: var(--fd-ring-offset, 0px);--_fd-ring-halo-width: var(--fd-ring-halo-width, 3px);--_fd-ring-halo-blur: var(--fd-ring-halo-blur, 4px);--_fd-ring-halo-opacity: var(--fd-ring-halo-opacity, 0.3);--_fd-ring-field: var(--fd-ring-field, inset 0 0 0 var(--_fd-border-width) hsl(var(--_fd-ring-color)),\r
 0 0 var(--_fd-ring-halo-blur) var(--_fd-ring-halo-width)\r
 hsl(var(--_fd-ring-color) / var(--_fd-ring-halo-opacity))\r
 );--_fd-ring-control: var(--fd-ring-control, 0 0 0 var(--_fd-ring-width) hsl(var(--_fd-ring-color)),\r
 0 0 var(--_fd-ring-halo-blur) calc(var(--_fd-ring-width) + var(--_fd-ring-halo-width))\r
 hsl(var(--_fd-ring-color) / var(--_fd-ring-halo-opacity))\r
 );--_fd-radius-sm: var(--fd-radius-sm, 0.25rem);--_fd-radius-md: var(--fd-radius-md, 0.375rem);--_fd-radius-lg: var(--fd-radius-lg, 0.5rem);--_fd-radius-full: var(--fd-radius-full, 999px);--_fd-space-1: var(--fd-space-1, 0.25rem);--_fd-space-2: var(--fd-space-2, 0.5rem);--_fd-space-3: var(--fd-space-3, 0.75rem);--_fd-space-4: var(--fd-space-4, 1rem);--_fd-space-5: var(--fd-space-5, 1.25rem);--_fd-size-xs: var(--fd-size-xs, 0.75rem);--_fd-size-sm: var(--fd-size-sm, 1rem);--_fd-size-md: var(--fd-size-md, 1.5rem);--_fd-size-lg: var(--fd-size-lg, 2rem);--_fd-chevron-size: var(--fd-chevron-size, 0.4em);--_fd-switch-padding: var(--fd-switch-padding, 0.125rem);--_fd-switch-width: var(--fd-switch-width, calc(var(--_fd-size-sm) * 2 + 2 * var(--_fd-switch-padding)));--_fd-tooltip-arrow-size: var(--fd-tooltip-arrow-size, 0.625rem);--_fd-spinner-thickness: var(--fd-spinner-thickness, 0.125em);--_fd-sidebar-width: var(--fd-sidebar-width, 16rem);--_fd-toast-width: var(--fd-toast-width, 20rem);--_fd-form-column-min-width: var(--fd-form-column-min-width, 16rem);--_fd-link-underline-offset: var(--fd-link-underline-offset, 0.125em);--_fd-avatar-size-sm: var(--fd-avatar-size-sm, 1.5rem);--_fd-avatar-size-md: var(--fd-avatar-size-md, 2.25rem);--_fd-avatar-size-lg: var(--fd-avatar-size-lg, 3rem);--_fd-duration-fast: var(--fd-duration-fast, 120ms);--_fd-duration-normal: var(--fd-duration-normal, 200ms);--_fd-duration-slow: var(--fd-duration-slow, 320ms);--_fd-duration-spin: var(--fd-duration-spin, 0.6s);--_fd-duration-slowest: var(--fd-duration-slowest, 1.5s);--_fd-loading-overlay-delay: var(--fd-loading-overlay-delay, 150ms);--_fd-ease-standard: var(--fd-ease-standard, cubic-bezier(0.2, 0, 0, 1));--_fd-ease-emphasized: var(--fd-ease-emphasized, cubic-bezier(0.05, 0.7, 0.1, 1));--_fd-ease-in-out: var(--fd-ease-in-out, var(--_fd-ease-standard));--_fd-font-sans: var(--fd-font-sans, var(--font-body, "Inter"), ui-sans-serif, system-ui,\r
 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\r
 Arial, sans-serif);--_fd-font-mono: var(--fd-font-mono, var(--font-code, "Geist Mono"), ui-monospace,\r
 SFMono-Regular, Menlo, monospace);--_fd-font-size-xs: var(--fd-font-size-xs, 0.75rem);--_fd-font-size-sm: var(--fd-font-size-sm, 0.875rem);--_fd-font-size-md: var(--fd-font-size-md, 1rem);--_fd-font-size-lg: var(--fd-font-size-lg, 1.125rem);--_fd-font-size-xl: var(--fd-font-size-xl, 1.5rem);--_fd-font-size-2xl: var(--fd-font-size-2xl, 1.875rem);--_fd-font-size-3xl: var(--fd-font-size-3xl, 2.25rem);--_fd-line-height-normal: var(--fd-line-height-normal, 1.5);--_fd-line-height-tight: var(--fd-line-height-tight, 1.25);--_fd-font-weight-medium: var(--fd-font-weight-medium, 500);--_fd-font-weight-semibold: var(--fd-font-weight-semibold, 600);--_fd-font-weight-bold: var(--fd-font-weight-bold, 700);--_fd-font-heading: var(--fd-font-heading, var(--font-heading, "Sora"), var(--_fd-font-sans));--_fd-heading-weight: var(--fd-heading-weight, 600);--_fd-heading-letter-spacing: var(--fd-heading-letter-spacing, -0.01em);}@media (prefers-reduced-motion: reduce) {`+(e?":host {":t+" {")+"--_fd-duration-fast: 0ms;--_fd-duration-normal: 0ms;--_fd-duration-slow: 0ms;}}"}var nt=[at];function rt(a,e,r){var t=a?"-"+a:"";return"@keyframes fd-fade-in"+t+" {from {opacity: 0;}}@keyframes fd-fade-out"+t+" {to {opacity: 0;}}@keyframes fd-fade-up-in"+t+" {from {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-up-out"+t+" {to {opacity: 0;translate: 0 var(--_fd-space-2);}}@keyframes fd-fade-scale-in"+t+" {from {opacity: 0;scale: 0.96;}}@keyframes fd-fade-scale-out"+t+" {to {opacity: 0;scale: 0.96;}}@keyframes fd-slide-in"+t+" {from {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}@keyframes fd-slide-out"+t+" {to {opacity: 0;translate: var(--_fd-slide-x, 0) var(--_fd-slide-y, 0);}}"}var ot=[rt];function st(a,e,r){var t=a?"["+a+"]":"";return"*"+t+",\r*"+t+"::before,\r*"+t+"::after {box-sizing: border-box;}body"+t+" {font-family: var(--_fd-font-sans);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-normal);}p"+t+" {margin: 0 0 1em;}:focus-visible"+t+" {outline: var(--_fd-ring-width) solid hsl(var(--_fd-ring-color));outline-offset: var(--_fd-ring-offset);}[hidden]"+t+" {display: none !important;}button:disabled"+t+",\rinput:disabled"+t+",\rtextarea:disabled"+t+",\rselect:disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}h1"+t+",\rh2"+t+",\rh3"+t+",\rh4"+t+",\rh5"+t+",\rh6"+t+" {font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);}"}var it=[nt,ot,st];const ae=new WeakMap;function K(a,e,r,t,n="elementProps"){const o={},i=[];for(const[s,d]of Object.entries(e))r.includes(s)?i.push(s):o[s]=d;return i.length&&ae.get(a)!==e&&(ae.set(a,e),console.warn(`${t}: ${n} included ${i.map(s=>`"${s}"`).join(", ")}, which ${t} already controls via its own @api props -- ignored to avoid desyncing its state.`)),o}function ne(a,e){a.key!=="Enter"||a.target!==a.currentTarget||e.querySelector("a")?.dispatchEvent(re(a))}function dt(a,e){const r=e.querySelector("a");!r||a.target!==a.currentTarget||(a.stopPropagation(),r.dispatchEvent(re(a)))}function re(a){return new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,altKey:a.altKey,metaKey:a.metaKey})}function oe(a,e){if(!!e)return Number(a.tabIndex)===-1?"-1":"0"}function se(a){const{tabIndex:e,...r}=a;return r}class Q extends S{activateAnchorOnEnter(e){ne(e,this.template)}resolveTabStopIndex(e,r){return oe(e,r)}withoutTabIndex(e){return se(e)}resolveElementProps(e,r,t,n="elementProps"){return K(this,e,r,t,n)}}Q.stylesheets=[it],Q.shadowSupportMode="native";const k=m(Q,{tmpl:tt,sel:"fandry-base",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function q(a,e={}){return[a,...Object.keys(e).filter(r=>e[r])].join(" ")}const lt=["href","target","rel","class","ariaDisabled"];class ie extends k{constructor(...e){super(...e);this.href="",this.target="_self",this.rel="",this.variant="default",this.disabled=!1,this.elementProps={}}get classes(){return["link",`link--${this.variant}`,this.disabled?"link--disabled":""].filter(Boolean).join(" ")}get computedHref(){return this.disabled?void 0:this.href}get computedRel(){return this.rel?this.rel:this.target==="_blank"?"noopener noreferrer":void 0}get ariaDisabled(){return this.disabled?"true":void 0}get tabStopIndex(){return oe(this.elementProps,!this.disabled)}handleKeydown(e){ne(e,this.template)}handleClick(e){dt(e,this.template)}get resolvedElementProps(){return se(K(this,this.elementProps,lt,"fandry-link"))}get ariaCurrent(){const e=this.elementProps?.ariaCurrent;return e&&e!=="false"?String(e):void 0}get linkPart(){return q("link",{[this.variant||"default"]:!0,disabled:this.disabled,current:!!this.ariaCurrent})}}v(ie,{publicProps:{href:{config:0},target:{config:0},rel:{config:0},variant:{config:0},disabled:{config:0},elementProps:{config:0}}});const w=m(ie,{tmpl:et,sel:"fandry-link",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ct(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: inline-block;}.button"+t+` {display: inline-flex;align-items: center;justify-content: center;gap: var(--_fd-space-2);font-family: inherit;font-weight: var(--_fd-font-weight-medium);line-height: 1;border-radius: var(--fd-button-radius, var(--_fd-radius-md));border: var(--fd-button-border-width, var(--_fd-border-width)) solid transparent;cursor: pointer;-webkit-user-select: none;user-select: none;transition: background-color var(--_fd-duration-fast) ease,\r
 border-color var(--_fd-duration-fast) ease,\r
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard), color var(--_fd-duration-fast) ease;background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));--_fd-button-lift: 0 0 transparent;box-shadow: var(--_fd-button-lift);}.button--sm`+t+" {height: var(--_fd-control-height-sm);padding: 0 var(--fd-button-padding-x, var(--_fd-space-3));font-size: var(--_fd-font-size-sm);}.button--md"+t+" {height: var(--_fd-control-height-md);padding: 0 var(--fd-button-padding-x, var(--_fd-space-4));font-size: var(--_fd-font-size-sm);}.button--lg"+t+" {height: var(--_fd-control-height-lg);padding: 0 var(--_fd-space-5);font-size: var(--_fd-font-size-md);}.button--default"+t+" {background: hsl(var(--_fd-primary));color: hsl(var(--_fd-primary-foreground));}@media (hover: hover) {.button--default:hover:not(:disabled):not([aria-disabled='true'])"+t+" {filter: brightness(var(--_fd-hover-brightness));--_fd-button-lift: var(--_fd-shadow-sm) hsla(var(--_fd-primary) / 0.3);}}.button--secondary"+t+" {background: hsl(var(--_fd-bg));color: hsl(var(--_fd-text));border-color: hsl(var(--_fd-border));}@media (hover: hover) {.button--secondary:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));--_fd-button-lift: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-floating));}}.button--ghost"+t+" {background: transparent;color: hsl(var(--_fd-text));border-color: transparent;}@media (hover: hover) {.button--ghost:hover:not(:disabled):not([aria-disabled='true'])"+t+" {background: hsl(var(--_fd-bg-muted));--_fd-button-lift: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-subtle));}}.button:focus-visible"+t+" {outline: var(--_fd-ring-width) solid transparent;box-shadow: var(--_fd-ring-control), var(--_fd-button-lift);}.button--default:focus-visible"+t+` {box-shadow: inset 0 0 0 var(--_fd-ring-width)\r
 color-mix(in srgb, hsl(var(--_fd-primary-foreground)) 75%, hsl(var(--_fd-primary))),\r
 var(--_fd-ring-control), var(--_fd-button-lift);}.button:disabled`+t+",\r.button[aria-disabled='true']"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.button:active:not(:disabled):not([aria-disabled='true'])"+t+" {transform: translateY(1px);--_fd-button-lift: 0 0 transparent;}"}var de=[ct];const pt={key:1},ft=[];function z(a,e,r,t){const{ncls:n,b:o,s:i,h:s}=a,{_m0:d}=t;return[s("button",{className:n(e.classes),attrs:{part:e.basePart,type:e.type,disabled:e.disabled?"":null},props:{...e.resolvedElementProps},key:0,on:d||(t._m0={click:o(e.handleClick)})},[i("",pt,ft,r)])]}var ht=y(z);z.slots=[""],z.stylesheets=[],z.stylesheetToken="lwc-4ejlbgtq1p9",z.legacyStylesheetToken="fandry-button_button",de&&z.stylesheets.push.apply(z.stylesheets,de),g(z);const ut=["type","class","disabled"];class le extends k{constructor(...e){super(...e);this.variant="default",this.size="md",this.disabled=!1,this.type="button",this.elementProps={tabIndex:0}}get classes(){return["button",`button--${this.variant}`,`button--${this.size}`].join(" ")}get resolvedElementProps(){return K(this,this.elementProps,ut,"fandry-button")}focus(){this.template.querySelector(".button")?.focus()}get basePart(){return q("base",{[this.variant||"default"]:!0,disabled:this.disabled||this.isAriaDisabled})}get isAriaDisabled(){return String(this.elementProps?.ariaDisabled)==="true"}handleClick(e){this.isAriaDisabled&&(e.preventDefault(),e.stopImmediatePropagation())}}v(le,{publicProps:{variant:{config:0},size:{config:0},disabled:{config:0},type:{config:0},elementProps:{config:0}},publicMethods:["focus"]});const ce=m(le,{tmpl:ht,sel:"fandry-button",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function mt(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: inline-flex;}.icon"+t+" {display: inline-flex;align-items: center;justify-content: center;flex-shrink: 0;color: inherit;}.icon--sm"+t+" {width: var(--fd-icon-size, var(--_fd-size-sm));height: var(--fd-icon-size, var(--_fd-size-sm));}.icon--md"+t+" {width: var(--fd-icon-size, var(--_fd-size-md));height: var(--fd-icon-size, var(--_fd-size-md));}.icon--lg"+t+" {width: var(--fd-icon-size, var(--_fd-size-lg));height: var(--fd-icon-size, var(--_fd-size-lg));}"+t+"::slotted(svg),"+t+"::slotted(img) {width: 100%;height: 100%;}"+t+"::slotted(svg) {fill: currentColor;}"}var pe=[mt];const yt={key:1},gt=[];function T(a,e,r,t){const{ncls:n,s:o,h:i}=a;return[i("span",{className:n(e.classes),attrs:{part:"base",role:e.role,"aria-hidden":e.ariaHidden,"aria-label":e.accessibleLabel},key:0},[o("",yt,gt,r)])]}var bt=y(T);T.slots=[""],T.stylesheets=[],T.stylesheetToken="lwc-17qhee1uo3s",T.legacyStylesheetToken="fandry-icon_icon",pe&&T.stylesheets.push.apply(T.stylesheets,pe),g(T);class fe extends k{constructor(...e){super(...e);this.size="md",this.label="",this.ariaLabel=""}get classes(){return["icon",`icon--${this.size}`].join(" ")}get isDecorative(){return!this.ariaLabel&&!this.label}get role(){return this.isDecorative?void 0:"img"}get ariaHidden(){return this.isDecorative?"true":void 0}get accessibleLabel(){return this.isDecorative?void 0:this.ariaLabel||this.label}}v(fe,{publicProps:{size:{config:0},label:{config:0},ariaLabel:{config:0}}});const vt=m(fe,{tmpl:bt,sel:"fandry-icon",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function wt(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: contents;}.backdrop"+t+" {position: fixed;inset: 0;z-index: var(--_fd-z-overlay);box-sizing: border-box;width: 100%;max-width: none;height: 100%;max-height: none;margin: 0;border: 0;color: inherit;}.backdrop"+t+"::backdrop {background: transparent;}.backdrop[open]"+t+",.backdrop--closing"+t+" {display: flex;align-items: flex-start;justify-content: center;padding: var(--_fd-overlay-offset-top) var(--_fd-space-4) var(--_fd-space-4);background: hsl(var(--_fd-backdrop) / var(--_fd-backdrop-opacity));animation: fd-fade-in var(--_fd-duration-normal) var(--_fd-ease-standard);}.backdrop--closing"+t+" {animation: fd-fade-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.panel"+t+" {display: flex;flex-direction: column;width: 100%;max-width: var(--_fd-overlay-max-width-md);max-height: calc(100vh - var(--_fd-overlay-offset-top) - var(--_fd-space-4));overflow: hidden;background: hsl(var(--_fd-bg));border-radius: var(--_fd-radius-lg);box-shadow: var(--_fd-shadow-sm) hsl(var(--_fd-shadow-color-modal));animation: fd-fade-scale-in var(--_fd-duration-normal) var(--_fd-ease-emphasized);}.backdrop--closing"+t+" .panel"+t+" {animation: fd-fade-scale-out var(--_fd-duration-fast) var(--_fd-ease-standard) forwards;}.search"+t+" {flex-shrink: 0;border-bottom: var(--_fd-border-width) solid hsl(var(--_fd-border));}.input"+t+" {display: block;width: 100%;box-sizing: border-box;padding: var(--_fd-space-3) var(--_fd-space-4);font: inherit;font-size: var(--_fd-font-size-md);color: hsl(var(--_fd-text));background: transparent;border: none;}.input"+t+"::placeholder {color: hsl(var(--_fd-text-muted));}.input:focus"+t+" {outline: none;}.listbox"+t+" {flex: 1;min-height: 0;overflow-y: auto;padding: var(--_fd-space-2);}.option"+t+" {display: flex;align-items: baseline;gap: var(--_fd-space-3);padding: var(--_fd-space-2) var(--_fd-space-3);border-radius: var(--_fd-radius-sm);cursor: pointer;}.option--active"+t+" {background: hsl(var(--_fd-bg-muted));}.option--disabled"+t+" {opacity: var(--_fd-disabled-opacity);cursor: not-allowed;}.option-description"+t+" {margin-left: auto;font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.group-label"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3) var(--_fd-space-1);font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.status"+t+" {flex-shrink: 0;}.count"+t+" {position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;border: 0;clip: rect(0 0 0 0);clip-path: inset(50%);overflow: hidden;white-space: nowrap;}.empty"+t+" {padding: var(--_fd-space-4);text-align: center;font-size: var(--_fd-font-size-sm);color: hsl(var(--_fd-text-muted));}"}var he=[wt];const kt=h`<div class="group-label${0}" part="group-label" aria-hidden="true"${2}>${"t1"}</div>`,xt=h`<span class="option-label${0}" part="option-label"${2}>${"t1"}</span>`,_t=h`<span class="option-description${0}" part="option-description"${2}>${"t1"}</span>`,St=h`<span class="count${0}"${2}>${"t1"}</span>`,Ct={panel:!0},zt={part:"panel"},Tt={classMap:{search:!0},attrs:{part:"search"},key:2},Pt={input:!0},Mt={listbox:!0},Et={group:!0},$t={classMap:{status:!0},attrs:{role:"status"},key:14},It={classMap:{empty:!0},attrs:{part:"empty"},key:17},Lt={attrs:{name:"empty"},key:18};function P(a,e,r,t){const{ncls:n,b:o,gid:i,h:s,k:d,d:f,sp:l,st:u,dc:c,i:B,f:H,t:_,s:Re}=a,{_m0:Ne,_m1:je,_m2:Be,_m3:qe,_m4:We}=t;return[e.isMounted?s("dialog",{className:n(e.backdropClasses),attrs:{part:"backdrop","aria-label":e.accessibleLabel,inert:e.backdropInert},key:0,on:Ne||(t._m0={click:o(e.handleBackdropClick),cancel:o(e.handleCancel)})},[s("div",{classMap:Ct,attrs:zt,key:1,on:je||(t._m1={mousedown:o(e.handlePanelMouseDown)})},[s("div",Tt,[s("input",{classMap:Pt,attrs:{id:i("input"),part:"input",type:"text",autocomplete:"off",placeholder:e.placeholder,role:"combobox","aria-label":e.accessibleLabel,"aria-autocomplete":"list","aria-expanded":"true","aria-controls":i("listbox"),"aria-activedescendant":i(e.activeDescendant)},props:{value:e.query},key:3,on:Be||(t._m2={input:o(e.handleInput),keydown:o(e.handleInputKeydown)})})]),s("div",{classMap:Mt,attrs:{id:i("listbox"),part:"listbox",role:"listbox","aria-label":e.accessibleLabel},key:4,on:qe||(t._m3={mousedown:o(e.handleListboxMouseDown)})},B(e.renderGroups,function(G){return s("div",{classMap:Et,attrs:{part:"group",role:"group","aria-label":G.label},key:d(5,G.key)},H([G.hasLabel?u(kt,7,[l(1,null,f(G.label))]):null,B(G.options,function(b){return s("div",{className:n(b.classes),attrs:{id:i(b.id),part:b.part,role:"option","data-option-id":b.id,"aria-selected":b.ariaSelected,"aria-disabled":b.ariaDisabled},key:d(8,b.id),on:We||(t._m4={click:o(e.handleOptionClick),mousemove:o(e.handleOptionMouseMove)})},[b.component?c(b.component,{props:{...b.resolvedComponentProps},key:9}):null,b.component?null:u(xt,11,[l(1,null,f(b.label))]),b.component?null:b.hasDescription?u(_t,13,[l(1,null,f(b.description))]):null])})]))})),s("div",$t,[e.hasResults?u(St,16,[l(1,null,f(e.resultsText))]):null,e.hasResults?null:s("div",It,[Re("empty",Lt,[_("No results found")],r)])])])]):null]}var At=y(P);P.slots=["empty"],P.stylesheets=[],P.stylesheetToken="lwc-4bgejodik1n",P.legacyStylesheetToken="fandry-command_command",he&&P.stylesheets.push.apply(P.stylesheets,he),g(P);var Dt=void 0;const Ot=/[\s\-_/.]/;function U(a,e,r){const t=a.toLowerCase().indexOf(e);return t===-1?0:t===0?r*3:Ot.test(a[t-1])?r*2:r}function Ft(a,e){let r=0;for(const t of e){const n=Math.max(U(a.label,t,10),...(a.keywords??[]).map(o=>U(o,t,6)),U(a.description??"",t,3),U(a.group??"",t,2));if(n===0)return-1;r+=n}return r}class ue extends k{constructor(...e){super(...e);this.query="",this.activeId=null,this.scrollActivePending=!1,this.entriesCache={source:null,query:"",entries:[]}}get source(){return[]}isSelected(e){return!1}isAriaSelected(e,r){return e}get resultCount(){return this.entries.length}commit(e){}filterItems(e,r){const t=r.toLowerCase().split(/\s+/).filter(Boolean);return t.length?e.map((n,o)=>({item:n,index:o,score:Ft(n,t)})).filter(n=>n.score>=0).sort((n,o)=>o.score-n.score||n.index-o.index).map(n=>n.item):e}setQuery(e){this.query=e,this.activeId=null}get entries(){const e=this.source,r=this.query,t=this.entriesCache;if(t.source===e&&t.query===r)return t.entries;const n=this.buildEntries(e,r);return t.source=e,t.query=r,t.entries=n,n}buildEntries(e,r){const t=this.filterItems(e,r),n=t.filter(s=>!s.group),o=Array.from(new Set(t.filter(s=>s.group).map(s=>s.group)));return[...n,...o.flatMap(s=>t.filter(d=>d.group===s))].map((s,d)=>({id:`option-${d}`,item:s}))}get enabledEntries(){return this.entries.filter(e=>!e.item.disabled)}get resolvedActiveId(){const e=this.enabledEntries;return this.activeId&&e.some(r=>r.id===this.activeId)?this.activeId:e.length?e[0].id:null}get activeDescendant(){return this.resolvedActiveId}get hasResults(){return this.entries.length>0}get renderGroups(){const e=this.resolvedActiveId,r=[];for(const t of this.entries){const n=t.item.group??"";let o=r.find(i=>i.label===n);o||(o={key:`group-${r.length}`,label:n,hasLabel:!!n,options:[]},r.push(o)),o.options.push(this.decorate(t,e))}return r}decorate(e,r){const{item:t,id:n}=e,o=!!t.disabled,i=this.isSelected(t);return{id:n,value:t.value,label:t.label,description:t.description??"",hasDescription:!!t.description,disabled:o,ariaSelected:this.isAriaSelected(i,n===r)?"true":"false",ariaDisabled:o?"true":"false",component:t.component,resolvedComponentProps:t.componentProps??{},classes:["option",i?"option--selected":"",n===r?"option--active":"",o?"option--disabled":""].filter(Boolean).join(" "),part:q("option",{selected:i,active:n===r,disabled:o})}}activateSelected(){const e=this.enabledEntries.find(r=>this.isSelected(r.item));this.activeId=e?e.id:null,this.scrollActivePending=!!e}moveActive(e){const r=this.enabledEntries;if(!r.length)return;const n=(r.findIndex(o=>o.id===this.resolvedActiveId)+e+r.length)%r.length;this.activeId=r[n].id,this.scrollActivePending=!0}renderedCallback(){if(!this.scrollActivePending)return;this.scrollActivePending=!1;const e=this.template.querySelector(".option--active");typeof e?.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}handleInput(e){e.stopPropagation(),this.setQuery(e.target.value)}handleInputKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.moveActive(1);break;case"ArrowUp":e.preventDefault(),this.moveActive(-1);break;case"Enter":{if(e.isComposing)break;e.preventDefault();const r=this.enabledEntries.find(t=>t.id===this.resolvedActiveId);r&&this.commit(r.item);break}}}handleListboxMouseDown(e){e.preventDefault()}handleOptionClick(e){const r=e.currentTarget.dataset.optionId,t=this.entries.find(n=>n.id===r);t&&!t.item.disabled&&this.commit(t.item)}handleOptionMouseMove(e){if(!e.movementX&&!e.movementY)return;const r=e.currentTarget.dataset.optionId;if(r===this.resolvedActiveId)return;const t=this.entries.find(n=>n.id===r);t&&!t.item.disabled&&(this.activeId=t.id)}}v(ue,{track:{query:1,activeId:1},fields:["scrollActivePending","entriesCache"]});const Rt=m(ue,{tmpl:Dt,sel:"fandry-search-state",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Nt(a){return!a||typeof a.getAnimations!="function"?Promise.resolve():Promise.allSettled(a.getAnimations({subtree:!0}).map(e=>e.finished))}const jt={results:a=>a===1?"1 result":`${a} results`},Bt=[];class me extends Rt{constructor(...e){super(...e);this.label="",this.ariaLabel="",this.placeholder="",this.items=[],this.messages={},this._open=!1,this.isMounted=!1,this.previouslyFocused=null,this.previousBodyOverflow=null,this.focusPending=!1,this.handleDocumentKeydown=r=>{this.open&&r.key==="Escape"&&this.close()}}get open(){return this._open}set open(e){const r=this._open;this._open=e,e&&(this.isMounted=!0),typeof document!="undefined"&&(!r&&e?(this.setQuery(""),this.previouslyFocused=this.findActiveElement(),this.lockBodyScroll(),this.focusPending=!0):r&&!e&&(this.unlockBodyScroll(),this.dialog?.close?.(),this.previouslyFocused?.focus(),this.previouslyFocused=null))}get source(){return this.items??Bt}isAriaSelected(e,r){return r}get resultsText(){return{...jt,...this.messages}.results(this.resultCount)}commit(e){this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value},bubbles:!0})),this.close()}connectedCallback(){typeof document!="undefined"&&document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown),this.open&&this.unlockBodyScroll()}get accessibleLabel(){return this.ariaLabel||this.label}get backdropClasses(){return this.open?"backdrop":"backdrop backdrop--closing"}get backdropInert(){return this.open?void 0:""}renderedCallback(){if(super.renderedCallback(),this.focusPending&&this.open&&(this.focusPending=!1,this.showModal(),this.template.querySelector(".input")?.focus()),!this.open&&this.isMounted){const e=this.template.querySelector(".backdrop");Nt(e).then(()=>{this.open||(this.isMounted=!1)})}}get dialog(){return this.template.querySelector("dialog")}showModal(){const e=this.dialog;e&&!e.open&&typeof e.showModal=="function"&&e.showModal()}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(e){e.target===e.currentTarget&&this.close()}handlePanelMouseDown(e){e.target.tagName!=="INPUT"&&e.preventDefault()}handleInputKeydown(e){if(e.key==="Tab"){e.preventDefault();return}super.handleInputKeydown(e)}close(){!this.open||(this.open=!1,this.dispatchEvent(new CustomEvent("toggle",{detail:!1,bubbles:!0})))}lockBodyScroll(){this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"}unlockBodyScroll(){document.body.style.overflow=this.previousBodyOverflow??"",this.previousBodyOverflow=null}findActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}}v(me,{publicProps:{label:{config:0},ariaLabel:{config:0},placeholder:{config:0},items:{config:0},messages:{config:0},open:{config:3}},publicMethods:["close"],track:{isMounted:1},fields:["_open","previouslyFocused","previousBodyOverflow","focusPending","handleDocumentKeydown"]});const qt=m(me,{tmpl:At,sel:"fandry-command",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Wt=h`<a class="logo${0}" href="/"${2}><img class="logo-mark${0}" src="/assets/logo.png" alt width="32" height="32"${2}>Fandry UI</a>`,Ht=h`<span class="shortcut${0}"${2}>${"t1"}</span>`,Gt=h`<svg viewBox="0 0 24 24" fill="currentColor"${3}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"${3}/></svg>`,Vt={classMap:{header:!0},key:0},Kt={classMap:{container:!0},key:1},Ut={classMap:{nav:!0},attrs:{"aria-label":"Primary"},key:4},Yt={"nav-link":!0},Qt={classMap:{actions:!0},key:6},Xt={variant:"secondary",size:"sm"},Jt={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",ariaLabel:"View source on GitHub"},key:10},Zt={props:{size:"sm",label:"GitHub"},key:11};function A(a,e,r,t){const{st:n,k:o,d:i,t:s,c:d,i:f,h:l,b:u,sp:c}=a,{_m0:B,_m1:H}=t;return[l("header",Vt,[l("div",Kt,[n(Wt,3),l("nav",Ut,f(e.navItems,function(_){return d("fandry-link",w,{classMap:Yt,props:{href:_.href,elementProps:_.elementProps},key:o(5,_.href)},[s(i(_.label))])})),l("div",Qt,[d("fandry-button",ce,{props:Xt,key:7,on:B||(t._m0={click:u(e.handlePaletteOpen)})},[s("Search "),n(Ht,9,[c(1,null,i(e.shortcutHint))])]),d("fandry-link",w,Jt,[d("fandry-icon",vt,Zt,[n(Gt,13)])])])])]),d("fandry-command",qt,{props:{label:"Search components and pages",placeholder:"Search components and pages\u2026",items:e.paletteItems,open:e.paletteOpen},key:14,on:H||(t._m1={toggle:u(e.handlePaletteToggle),select:u(e.handlePaletteSelect)})})]}var ea=y(A);A.stylesheets=[],A.stylesheetToken="lwc-2hoqs8gnsf6",A.legacyStylesheetToken="fandryui-siteHeader_siteHeader",ee&&A.stylesheets.push.apply(A.stylesheets,ee),g(A);const ta=["Layout","Typography","Forms","Feedback","Overlays & Data","Salesforce"],aa=[{slug:"breadcrumb",name:"Breadcrumb",tag:"fandry-breadcrumb",parts:["base","list"],customize:{title:"Custom colors and parts",demo:"breadcrumb-theme",code:`<!-- template -->
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
}`}]}],na=[{label:"Home",value:"/"},{label:"Why Fandry UI",value:"/why-fandry/"},{label:"Getting started",value:"/getting-started/"},{label:"Getting started: LWR / LWC OSS",value:"/getting-started/lwr-oss/"},{label:"Getting started: Salesforce DX",value:"/getting-started/salesforce/"},{label:"Theming",value:"/getting-started/theming/"},{label:"Components",value:"/components/"},{label:"Blocks",value:"/blocks/"},{label:"Blocks: Data table",value:"/blocks/data-table/"},{label:"Blocks: Form",value:"/blocks/form/"},{label:"Examples",value:"/examples/"}],ra=[{label:"Why Fandry",href:"/why-fandry/"},{label:"Get started",href:"/getting-started/"},{label:"Examples",href:"/examples/"},{label:"Components",href:"/components/"},{label:"Blocks",href:"/blocks/"}],ye=/Mac|iPhone|iPad/.test(navigator.platform);class ge extends S{constructor(...e){super(...e);this.paletteOpen=!1,this.paletteItems=[...na.map(r=>({...r,group:"Pages"})),...ta.flatMap(r=>aa.filter(t=>t.category===r).map(t=>({label:t.name,value:`/components/${t.slug}/`,group:r,description:t.tag,keywords:[t.slug]})))],this.handleDocumentKeydown=r=>{(ye?r.metaKey:r.ctrlKey)&&r.key?.toLowerCase()==="k"&&(r.preventDefault(),this.setPaletteOpen(!this.paletteOpen))}}get navItems(){const e=window.location.pathname.replace(/\/?$/,"/");return ra.map(r=>({...r,elementProps:e.startsWith(r.href)?{ariaCurrent:"page"}:{}}))}get shortcutHint(){return ye?"\u2318K":"Ctrl K"}connectedCallback(){document.addEventListener("keydown",this.handleDocumentKeydown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeydown)}setPaletteOpen(e){this.paletteOpen=e,this.classList.toggle("palette-open",e)}handlePaletteOpen(){this.setPaletteOpen(!0)}handlePaletteToggle(e){this.setPaletteOpen(e.detail)}handlePaletteSelect(e){window.location.assign(e.detail.value)}}v(ge,{fields:["paletteOpen","paletteItems","handleDocumentKeydown"]});const oa=m(ge,{tmpl:ea,sel:"fandryui-site-header",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function sa(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;}.intro"+t+" {padding: calc(var(--fd-space-6) * 1.5) 0 var(--fd-space-6);text-align: center;}.container"+t+" {max-width: 40rem;margin: 0 auto;padding: 0 var(--fd-space-6);display: flex;flex-direction: column;align-items: center;gap: var(--fd-space-3);}.subhead"+t+" {max-width: 32rem;}"}var be=[sa];function ia(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;}.heading"+t+" {margin: 0;font-family: var(--_fd-font-heading);font-weight: var(--_fd-heading-weight);letter-spacing: var(--_fd-heading-letter-spacing);color: hsl(var(--_fd-text));line-height: var(--_fd-line-height-tight);}.heading--1"+t+" {font-size: var(--_fd-font-size-3xl);}.heading--2"+t+" {font-size: var(--_fd-font-size-2xl);}.heading--3"+t+" {font-size: var(--_fd-font-size-xl);}.heading--4"+t+" {font-size: var(--_fd-font-size-lg);}.heading--5"+t+" {font-size: var(--_fd-font-size-md);}.heading--6"+t+" {font-size: var(--_fd-font-size-sm);}"}var ve=[ia];const da={key:1},la=[];function M(a,e,r,t){const{ncls:n,s:o,h:i}=a;return[i("div",{className:n(e.classes),attrs:{part:"base",role:"heading","aria-level":e.level},key:0},[o("",da,la,r)])]}var ca=y(M);M.slots=[""],M.stylesheets=[],M.stylesheetToken="lwc-4htp61u8vnv",M.legacyStylesheetToken="fandry-heading_heading",ve&&M.stylesheets.push.apply(M.stylesheets,ve),g(M);class we extends k{constructor(...e){super(...e);this._level=2}get level(){return this._level}set level(e){this._level=Number(e)}get classes(){return["heading",`heading--${this.level}`].join(" ")}}v(we,{publicProps:{level:{config:3}},fields:["_level"]});const D=m(we,{tmpl:ca,sel:"fandry-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function pa(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: contents;}.text"+t+" {font-family: var(--_fd-font-sans);line-height: var(--_fd-line-height-normal);}.text--p"+t+" {display: block;margin: 0 0 1em;}.text--div"+t+" {display: block;margin: 0;}.text--span"+t+" {display: inline;}.text--xs"+t+" {font-size: var(--_fd-font-size-xs);}.text--sm"+t+" {font-size: var(--_fd-font-size-sm);}.text--md"+t+" {font-size: var(--_fd-font-size-md);}.text--default"+t+" {color: hsl(var(--_fd-text));}.text--muted"+t+" {color: hsl(var(--_fd-text-muted));}"}var ke=[pa];const fa={key:1},ha=[];function E(a,e,r,t){const{ncls:n,s:o,h:i}=a;return[i("div",{className:n(e.classes),attrs:{part:e.basePart,role:e.role},key:0},[o("",fa,ha,r)])]}var ua=y(E);E.slots=[""],E.stylesheets=[],E.stylesheetToken="lwc-4f041bjpr1h",E.legacyStylesheetToken="fandry-text_text",ke&&E.stylesheets.push.apply(E.stylesheets,ke),g(E);class xe extends k{constructor(...e){super(...e);this.as="p",this.size="md",this.variant="default"}get classes(){return["text",`text--${this.as}`,`text--${this.size}`,`text--${this.variant}`].join(" ")}get role(){return this.as==="p"?"paragraph":void 0}get basePart(){return q("base",{[this.variant||"default"]:!0})}}v(xe,{publicProps:{as:{config:0},size:{config:0},variant:{config:0}}});const p=m(xe,{tmpl:ua,sel:"fandry-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),ma={classMap:{intro:!0},key:0},ya={classMap:{container:!0},key:1},ga={props:{level:"1"},key:2},ba={classMap:{subhead:!0},props:{variant:"muted"},key:3};function O(a,e,r,t){const{d:n,t:o,c:i,h:s}=a;return[s("section",ma,[s("div",ya,[i("fandry-heading",D,ga,[o(n(e.pageTitle))]),i("fandry-text",p,ba,[o(n(e.subtitle))])])])]}var va=y(O);O.stylesheets=[],O.stylesheetToken="lwc-k2m23m8iid",O.legacyStylesheetToken="fandryui-pageIntro_pageIntro",be&&O.stylesheets.push.apply(O.stylesheets,be),g(O);class _e extends S{constructor(...e){super(...e);this.pageTitle="",this.subtitle=""}}v(_e,{publicProps:{pageTitle:{config:0},subtitle:{config:0}}});const wa=m(_e,{tmpl:va,sel:"fandryui-page-intro",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ka(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;}.row"+t+" {scroll-margin-top: 5rem;display: flex;align-items: baseline;gap: var(--fd-space-2);}.heading--2"+t+"::part(base) {font-size: var(--fd-font-size-xl);}.heading--3"+t+"::part(base) {font-size: var(--fd-font-size-lg);}.permalink"+t+" {opacity: 0;transition: opacity 120ms ease;}.permalink"+t+"::part(link) {text-decoration: none;font-weight: var(--fd-font-weight-semibold);}"+(e?":host(:hover) .permalink":n+":hover .permalink")+t+",.permalink:focus-within"+t+" {opacity: 1;}@media (hover: none) {.permalink"+t+" {opacity: 0.6;}}.hash"+t+'::before {content: "#";content: "#" / "";}.sr-only'+t+" {position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;}"}var Se=[ka];const xa=h`<span class="hash${0}"${2}></span>`,_a=h`<span class="sr-only${0}"${2}>${"t1"}</span>`,Sa={classMap:{row:!0},key:0},Ca={permalink:!0};function F(a,e,r,t){const{ncls:n,d:o,t:i,c:s,st:d,sp:f,h:l}=a;return[l("div",Sa,[s("fandry-heading",D,{className:n(e.headingClass),props:{level:e.level},key:1},[i(o(e.text))]),s("fandry-link",w,{classMap:Ca,props:{href:e.href,variant:"muted"},key:2},[d(xa,4),d(_a,6,[f(1,null,"Link to section "+o(e.text))])])])]}var za=y(F);F.stylesheets=[],F.stylesheetToken="lwc-4rrpab8rauq",F.legacyStylesheetToken="fandryui-docHeading_docHeading",Se&&F.stylesheets.push.apply(F.stylesheets,Se),g(F);function Ta(a=""){return a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}class Ce extends S{constructor(...e){super(...e);this.level=2,this.text="",this.anchor="",this.scrolledOnLoad=!1,this.syncToHash=()=>{decodeURIComponent(window.location.hash.slice(1))===this.resolvedAnchor&&this.template.querySelector(".row")?.scrollIntoView({block:"start"})}}get resolvedAnchor(){return this.anchor||Ta(this.text)}get href(){return`#${this.resolvedAnchor}`}get headingClass(){return`heading heading--${this.level}`}connectedCallback(){window.addEventListener("hashchange",this.syncToHash)}disconnectedCallback(){window.removeEventListener("hashchange",this.syncToHash)}renderedCallback(){this.scrolledOnLoad||(this.scrolledOnLoad=!0,requestAnimationFrame(this.syncToHash))}}v(Ce,{publicProps:{level:{config:0},text:{config:0},anchor:{config:0}},fields:["scrolledOnLoad","syncToHash"]});const x=m(Ce,{tmpl:za,sel:"fandryui-doc-heading",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Pa(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;}.figure"+t+" {margin: 0;}.label"+t+' {display: block;margin-bottom: var(--fd-space-1);font-family: var(--font-code, "Geist Mono", monospace);font-weight: var(--fd-font-weight-medium);}.code-block'+t+` {margin: 0;padding: var(--fd-space-4);background: linear-gradient(
 135deg,
 hsl(var(--site-primary-dark)),
 hsl(var(--site-accent-dark))
 );color: hsl(220 14% 96%);border-radius: var(--fd-radius-md);overflow-x: auto;font-size: var(--fd-font-size-sm);line-height: var(--fd-line-height-normal, 1.5);}.code-block`+t+" code"+t+' {font-family: var(--font-code, "Geist Mono", monospace);font-size: inherit;white-space: pre;}.code-block:focus-visible'+t+" {outline: 2px solid hsl(var(--site-primary));outline-offset: 2px;}.code-block.tree"+t+" {background: var(--fd-color-surface, transparent);color: var(--fd-color-text);border: 1px solid var(--fd-color-border);}.selection-stop"+t+" {height: 0;overflow: hidden;}"}var ze=[Pa];const Ma=h`<pre${"c0"} tabindex="0"${2}><code${3}>${"t2"}</code></pre>`,Ea=h`<div class="selection-stop${0}" aria-hidden="true"${2}>​</div>`,$a={classMap:{figure:!0},key:0},Ia={key:2},La={classMap:{label:!0},props:{as:"span",size:"xs",variant:"muted"},key:3};function R(a,e,r,t){const{d:n,t:o,c:i,h:s,fr:d,ncls:f,sp:l,st:u}=a;return[s("figure",$a,[e.hasLabel?d(1,[s("figcaption",Ia,[i("fandry-text",p,La,[o(n(e.label))])])],0):null,u(Ma,5,[l(0,{className:f(e.preClass)},null),l(2,null,n(e.code))]),u(Ea,7)])]}var Aa=y(R);R.stylesheets=[],R.stylesheetToken="lwc-3fffmevd3ta",R.legacyStylesheetToken="fandryui-codeBlock_codeBlock",ze&&R.stylesheets.push.apply(R.stylesheets,ze),g(R);function Da(a,e){if(!!a.getComposedRanges)try{return a.getComposedRanges({shadowRoots:[e]})[0]}catch{return a.getComposedRanges(e)[0]}}class Te extends S{constructor(...e){super(...e);this.code="",this.label="",this.variant="default",this.trimSelection=()=>{const r=document.getSelection(),t=this.template.querySelector(".selection-stop"),n=this.template.querySelector("code"),o=r&&Da(r,this.template);if(!r||!o||!n?.lastChild||o.endContainer!==t||!n.contains(o.startContainer))return;const i=n.lastChild;r.setBaseAndExtent(o.startContainer,o.startOffset,i,i.textContent?.length??0)}}get preClass(){return this.variant==="tree"?"code-block tree":"code-block"}get hasLabel(){return!!this.label}connectedCallback(){document.addEventListener("selectionchange",this.trimSelection)}disconnectedCallback(){document.removeEventListener("selectionchange",this.trimSelection)}}v(Te,{publicProps:{code:{config:0},label:{config:0},variant:{config:0}},fields:["trimSelection"]});const V=m(Te,{tmpl:Aa,sel:"fandryui-code-block",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),Oa=h`<code${3}>${"t1"}</code>`,Fa=h`<span${3}>${"t1"}</span>`;function W(a,e,r,t){const{k:n,d:o,sp:i,st:s,fr:d,i:f}=a;return f(e.segments,function(l){return l.code?d(0,[s(Oa,n(2,l.key),[i(1,null,o(l.text))])],0):d(0,[s(Fa,n(4,l.key),[i(1,null,o(l.text))])],0)})}var Ra=y(W);W.renderMode="light",W.stylesheets=[],W.stylesheetToken="lwc-dbe5maib8n",W.legacyStylesheetToken="fandryui-docText_docText",g(W);function Na(a=""){const e=a.split("`");return e.length%2==0&&e.splice(-2,2,`${e[e.length-2]}\`${e[e.length-1]}`),e.map((r,t)=>({key:String(t),text:r,code:t%2==1})).filter(r=>r.text)}class X extends S{constructor(...e){super(...e);this.text=""}get segments(){return Na(this.text)}}X.renderMode="light",v(X,{publicProps:{text:{config:0}}});const J=m(X,{tmpl:Ra,sel:"fandryui-doc-text",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function ja(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;height: var(--fd-card-height, auto);}.card"+t+" {border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);padding: var(--_fd-space-3);background: var(--fd-card-bg, hsl(var(--_fd-bg)));box-sizing: border-box;height: var(--fd-card-height, auto);}"}var Pe=[ja];const Ba={classMap:{card:!0},attrs:{part:"base"},key:0},qa={key:1},Wa=[];function $(a,e,r,t){const{s:n,h:o}=a;return[o("div",Ba,[n("",qa,Wa,r)])]}var Ha=y($);$.slots=[""],$.stylesheets=[],$.stylesheetToken="lwc-66cpcf0iuus",$.legacyStylesheetToken="fandry-card_card",Pe&&$.stylesheets.push.apply($.stylesheets,Pe),g($);class Ga extends k{}const Y=m(Ga,{tmpl:Ha,sel:"fandry-card",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Va(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: inline-block;}.badge"+t+" {display: inline-flex;align-items: center;gap: var(--_fd-space-1);font-family: inherit;font-size: var(--_fd-font-size-xs);font-weight: var(--_fd-font-weight-medium);line-height: 1;padding: var(--_fd-space-1) var(--_fd-space-2);border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-lg);background: hsl(var(--_fd-bg-muted));color: hsl(var(--_fd-text));}.badge--primary"+t+" {--_fd-badge-color: var(--_fd-primary);}.badge--success"+t+" {--_fd-badge-color: var(--_fd-success);}.badge--warning"+t+" {--_fd-badge-color: var(--_fd-warning);}.badge--danger"+t+" {--_fd-badge-color: var(--_fd-danger);}.badge--primary"+t+",.badge--success"+t+",.badge--warning"+t+",.badge--danger"+t+" {background: color-mix(in srgb, hsl(var(--_fd-badge-color)) var(--_fd-surface-tint), hsl(var(--_fd-bg)));border-color: color-mix(in srgb, hsl(var(--_fd-badge-color)) min(var(--_fd-surface-tint) * 3, 100%), hsl(var(--_fd-bg)));color: color-mix(in srgb, hsl(var(--_fd-badge-color)) max(100% - var(--_fd-surface-tint) * 3.5, 0%), hsl(var(--_fd-text)));}"}var Me=[Va];const Ka={key:1},Ua=[];function I(a,e,r,t){const{ncls:n,s:o,h:i}=a;return[i("span",{className:n(e.classes),attrs:{part:e.basePart},key:0},[o("",Ka,Ua,r)])]}var Ya=y(I);I.slots=[""],I.stylesheets=[],I.stylesheetToken="lwc-7jnsj78lpql",I.legacyStylesheetToken="fandry-badge_badge",Me&&I.stylesheets.push.apply(I.stylesheets,Me),g(I);class Ee extends k{constructor(...e){super(...e);this.variant="default"}get classes(){return["badge",`badge--${this.variant}`].join(" ")}get basePart(){return q("base",{[this.variant||"default"]:!0})}}v(Ee,{publicProps:{variant:{config:0}}});const $e=m(Ee,{tmpl:Ya,sel:"fandry-badge",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function Qa(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;}.form-control"+t+" {display: flex;flex-direction: column;gap: var(--_fd-space-1);}.label"+t+" {display: inline-flex;align-items: center;align-self: flex-start;gap: var(--_fd-space-1);font-size: var(--_fd-font-size-sm);font-weight: var(--_fd-font-weight-medium);color: hsl(var(--_fd-text));}.required"+t+" {color: hsl(var(--_fd-danger));}"+t+"::slotted(fandry-label) {font: inherit;color: inherit;--_fd-label-asterisk: none;}.input"+t+" {flex: 1;min-width: 0;border: none;outline: none;font: inherit;background: transparent;}.help-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-text-muted));}.control"+t+` {display: flex;align-items: center;border: var(--_fd-border-width) solid hsl(var(--_fd-border));border-radius: var(--_fd-radius-md);padding: var(--_fd-space-1) var(--_fd-space-2);background: hsl(var(--_fd-bg));transition: border-color var(--_fd-duration-fast) var(--_fd-ease-standard),\r
 box-shadow var(--_fd-duration-fast) var(--_fd-ease-standard);}.control:focus-within`+t+" {outline: var(--_fd-ring-width) solid transparent;border-color: hsl(var(--_fd-border-focus));box-shadow: var(--_fd-ring-field);}.input:focus"+t+" {outline: none;}.control--sm"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-xs);}.control--md"+t+" {padding: var(--_fd-space-1) var(--_fd-space-2);font-size: var(--_fd-font-size-md);}.control--lg"+t+" {padding: var(--_fd-space-2) var(--_fd-space-3);font-size: var(--_fd-font-size-md);}.error-text"+t+" {font-size: var(--_fd-font-size-xs);color: hsl(var(--_fd-danger));}.error-text--empty"+t+" {position: absolute;}.control[part~='invalid']"+t+" {border-color: hsl(var(--_fd-danger));}"}var Ie=[Qa];const Xa=h`<span class="required${0}" part="required" aria-hidden="true"${2}>*</span>`,Ja={classMap:{"form-control":!0},attrs:{part:"base"},key:0},Za={label:!0},en={name:"label"},tn={classMap:{prefix:!0},attrs:{part:"prefix"},key:6},an={attrs:{name:"prefix"},key:7},Le=[],nn={input:!0},rn={classMap:{suffix:!0},attrs:{part:"suffix"},key:9},on={attrs:{name:"suffix"},key:10},sn={name:"error-text"},dn={"help-text":!0},ln={name:"help-text"};function L(a,e,r,t){const{gid:n,b:o,d:i,t:s,s:d,st:f,h:l,ncls:u}=a,{_m0:c,_m1:B,_m2:H,_m3:_}=t;return[l("div",Ja,[l("label",{classMap:Za,attrs:{part:"label",for:n("input"),hidden:e.labelHidden?"":null},key:1},[d("label",{attrs:en,key:2,on:c||(t._m0={slotchange:o(e.handleTextSlotChange)})},[s(i(e.label))],r),e.required?f(Xa,4):null]),l("div",{className:u(e.controlClasses),attrs:{part:e.controlPart},key:5},[l("span",tn,[d("prefix",an,Le,r)]),l("input",{classMap:nn,attrs:{part:"input",id:n("input"),type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.disabled?"":null,readonly:e.readonly?"":null,required:e.required?"":null,"aria-describedby":n(e.describedBy),"aria-invalid":e.ariaInvalid},props:{value:e.inputValue,...e.resolvedElementProps},key:8,on:B||(t._m1={input:o(e.handleInput),change:o(e.handleChange),focus:o(e.handleFocus),blur:o(e.handleBlur)})}),l("span",rn,[d("suffix",on,Le,r)])]),l("div",{className:u(e.errorTextClasses),attrs:{id:n("error-text"),part:"error-text","aria-live":"polite"},key:11},[d("error-text",{attrs:sn,key:12,on:H||(t._m2={slotchange:o(e.handleTextSlotChange)})},[s(i(e.errorText))],r)]),l("div",{classMap:dn,attrs:{id:n("help-text"),part:"help-text",hidden:e.helpTextHidden?"":null},key:13},[d("help-text",{attrs:ln,key:14,on:_||(t._m3={slotchange:o(e.handleTextSlotChange)})},[s(i(e.helpText))],r)])])]}var cn=y(L);L.slots=["error-text","help-text","label","prefix","suffix"],L.stylesheets=[],L.stylesheetToken="lwc-24cs3ca29bn",L.legacyStylesheetToken="fandry-input_input",Ie&&L.stylesheets.push.apply(L.stylesheets,Ie),g(L);function pn(a){return a.assignedNodes().some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim())}function fn(a,e){return a||String(e?.ariaInvalid)==="true"}function hn(a,e){return[a?"error-text":"",e?"help-text":""].filter(Boolean).join(" ")||null}function un(a){const{ariaInvalid:e,...r}=a;return r}const mn=["id","type","name","value","disabled","readonly","required","class","ariaDescribedBy","ariaDescribedByElements","oninput","onchange","onfocus","onblur"];class Ae extends k{constructor(...e){super(...e);this.label="",this.helpText="",this.errorText="",this.value="",this.type="text",this.name="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.size="md",this.elementProps={},this.hasFocus=!1,this.textSlots={}}get resolvedElementProps(){return un(K(this,this.elementProps,mn,"fandry-input"))}get hasLabel(){return!!this.label||!!this.textSlots.label}get hasHelpText(){return!!this.helpText||!!this.textSlots["help-text"]}get hasErrorText(){return!!this.errorText||!!this.textSlots["error-text"]}get errorTextClasses(){return this.hasErrorText?"error-text":"error-text error-text--empty"}get invalid(){return fn(this.hasErrorText,this.elementProps)}get ariaInvalid(){return this.invalid?"true":null}get inputValue(){return this.value??""}get describedBy(){return hn(this.hasErrorText,this.hasHelpText)}get controlClasses(){return["control",`control--${this.size}`].join(" ")}focus(){this.template.querySelector("input")?.focus()}handleInput(e){e.stopPropagation();const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0}))}handleChange(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0}))}handleFocus(){this.hasFocus=!0}handleBlur(){this.hasFocus=!1}get controlPart(){return q("control",{disabled:this.disabled,invalid:this.invalid})}handleTextSlotChange(e){const r=e.target;this.textSlots={...this.textSlots,[r.name||"default"]:pn(r)}}get labelHidden(){return!this.hasLabel}get helpTextHidden(){return!this.hasHelpText}}v(Ae,{publicProps:{label:{config:0},helpText:{config:0},errorText:{config:0},value:{config:0},type:{config:0},name:{config:0},placeholder:{config:0},disabled:{config:0},readonly:{config:0},required:{config:0},size:{config:0},elementProps:{config:0}},publicMethods:["focus"],track:{hasFocus:1},fields:["textSlots"]});const yn=m(Ae,{tmpl:cn,sel:"fandry-input",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});function gn(a,e,r){var t=a?"["+a+"]":"",n=a?"["+a+"-host]":"";return(e?":host {":n+" {")+"display: block;border-top: 1px solid var(--fd-color-border);margin-top: var(--fd-space-6);}.container"+t+" {max-width: 72rem;margin: 0 auto;padding: var(--fd-space-5) var(--fd-space-6);display: flex;align-items: center;justify-content: space-between;gap: var(--fd-space-4);flex-wrap: wrap;}.links"+t+" {display: flex;align-items: center;flex-wrap: wrap;gap: var(--fd-space-2) var(--fd-space-4);}@media (max-width: 40rem) {.container"+t+" {padding: var(--fd-space-4);}}"}var De=[gn];const bn={classMap:{footer:!0},key:0},vn={classMap:{container:!0},key:1},wn={props:{as:"span",size:"sm",variant:"muted"},key:2},kn={classMap:{links:!0},key:3},xn={props:{href:"/why-fandry/",variant:"muted"},key:4},_n={props:{href:"/getting-started/",variant:"muted"},key:5},Sn={props:{href:"/examples/",variant:"muted"},key:6},Cn={props:{href:"/components/",variant:"muted"},key:7},zn={props:{href:"/blocks/",variant:"muted"},key:8},Tn={props:{href:"https://github.com/rahulgawale/fandryui",target:"_blank",variant:"muted"},key:9};function N(a,e,r,t){const{d:n,t:o,c:i,h:s}=a;return[s("footer",bn,[s("div",vn,[i("fandry-text",p,wn,[o("\xA9 "+n(e.year)+" Fandry UI \xB7 MIT License")]),s("div",kn,[i("fandry-link",w,xn,[o("Why Fandry")]),i("fandry-link",w,_n,[o("Get started")]),i("fandry-link",w,Sn,[o("Examples")]),i("fandry-link",w,Cn,[o("Components")]),i("fandry-link",w,zn,[o("Blocks")]),i("fandry-link",w,Tn,[o("GitHub")])])])])]}var Pn=y(N);N.stylesheets=[],N.stylesheetToken="lwc-3atbjjo9jl4",N.legacyStylesheetToken="fandryui-siteFooter_siteFooter",De&&N.stylesheets.push.apply(N.stylesheets,De),g(N);class Mn extends S{get year(){return new Date().getFullYear()}}const En=m(Mn,{tmpl:Pn,sel:"fandryui-site-footer",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0}),$n=h`<code${3}>--fd-*</code>`,In=h`<code${3}>:root</code>`,Ln=h`<code${3}>disabled</code>`,An=h`<span class="step${0}" aria-hidden="true"${2}>${"t1"}</span>`,Dn=h`<code${3}>lightning-*</code>`,On=h`<code${3}>@api</code>`,Fn=h`<code${3}>input</code>`,Rn=h`<code${3}>change</code>`,Nn=h`<code${3}>focus</code>`,jn=h`<code${3}>blur</code>`,Bn=h`<code${3}>lightning-*</code>`,qn=h`<code${3}>--fd-*</code>`,Wn={key:0},Hn={key:1},Gn={props:{pageTitle:"Why Fandry UI exists",subtitle:"The flexibility of modern UI development, with the simplicity of LWC. What Fandry is for, what it trades away, and where to check each claim."},key:2},Vn={classMap:{article:!0},key:3},Kn={classMap:{section:!0},key:4},Un={classMap:{"section-title":!0},props:{level:"2",text:"Your UI, your identity"},key:5},Yn={classMap:{para:!0},key:6},Qn={classMap:{para:!0},key:7},Xn={classMap:{section:!0},key:13},Jn={classMap:{"section-title":!0},props:{level:"2",text:"Composition over configuration"},key:14},Zn={classMap:{para:!0},key:15},er={classMap:{para:!0},key:19},tr={classMap:{ladder:!0},key:20},ar={rung:!0},nr={key:24},rr={classMap:{"rung-title":!0},props:{level:"3"},key:25},or={props:{variant:"muted",size:"sm"},key:26},sr={classMap:{section:!0},key:28},ir={classMap:{"section-title":!0},props:{level:"2",text:"A UI you control"},key:29},dr={classMap:{para:!0},key:30},lr={classMap:{para:!0},key:32},cr={classMap:{para:!0},key:34},pr={classMap:{section:!0},key:35},fr={classMap:{"section-title":!0},props:{level:"2",text:"Less dependence on Salesforce's UI"},key:36},hr={classMap:{para:!0},key:37},ur={classMap:{para:!0},key:40},mr={classMap:{section:!0},key:41},yr={classMap:{"section-title":!0},props:{level:"2",text:"The simplicity of LWC"},key:42},gr={classMap:{para:!0},key:43},br={classMap:{section:!0},key:56},vr={classMap:{"section-title":!0},props:{level:"2",text:"Lightning Base Components and Fandry UI"},key:57},wr={classMap:{para:!0},key:58},kr={classMap:{compare:!0},key:59},xr={classMap:{"compare-card":!0,"info-card":!0},key:60},_r={props:{level:"3"},key:61},Sr={props:{variant:"muted",size:"sm"},key:62},Cr={classMap:{list:!0},key:63},zr={props:{size:"sm"},key:65},Tr={classMap:{"compare-card":!0,"info-card":!0},key:66},Pr={props:{level:"3"},key:67},Mr={props:{variant:"muted",size:"sm"},key:68},Er={classMap:{list:!0},key:69},$r={props:{size:"sm"},key:71},Ir={classMap:{section:!0},key:72},Lr={classMap:{"section-title":!0},props:{level:"2",text:"The trade-offs"},key:73},Ar={classMap:{tradeoffs:!0},key:74},Dr={tradeoff:!0},Or={key:76},Fr={classMap:{"tradeoff-title":!0},props:{as:"span"},key:77},Rr={key:78},Nr={props:{variant:"muted",size:"sm"},key:79},jr={classMap:{demo:!0},key:81},Br={classMap:{"demo-inner":!0},key:82},qr={classMap:{"section-title":!0},props:{level:"2",text:"One component, three identities"},key:83},Wr={classMap:{para:!0},props:{variant:"muted"},key:84},Hr={classMap:{themes:!0},key:87},Gr={theme:!0},Vr={classMap:{"theme-name":!0},props:{as:"span",size:"xs"},key:89},Kr={classMap:{"theme-card":!0},key:90},Ur={props:{variant:"primary"},key:91},Yr={props:{level:"3"},key:92},Qr={props:{variant:"muted",size:"sm"},key:93},Xr={props:{label:"Email",placeholder:"you@example.com"},key:94},Jr={key:95},Zr={classMap:{"theme-note":!0},props:{as:"span",size:"xs",variant:"muted"},key:96},eo={classMap:{start:!0},key:97},to={classMap:{"start-inner":!0},key:98},ao={classMap:{"section-title":!0},props:{level:"2",text:"Get started"},key:99},no={classMap:{para:!0},props:{variant:"muted"},key:100},ro={classMap:{"start-grid":!0},key:101},oo={"start-card":!0,"info-card":!0},so={key:103},io={props:{level:"3"},key:104},lo={props:{variant:"muted",size:"sm"},key:105},co={"start-code":!0},po={"start-cta":!0},fo={classMap:{next:!0},props:{variant:"muted",size:"sm"},key:109},ho={props:{href:"/getting-started/theming/"},key:110},uo={props:{href:"/examples/"},key:111},mo={key:112};function j(a,e,r,t){const{c:n,t:o,st:i,h:s,k:d,d:f,sp:l,i:u}=a;return[n("fandryui-site-header",oa,Wn),s("main",Hn,[n("fandryui-page-intro",wa,Gn),s("article",Vn,[s("section",Kn,[n("fandryui-doc-heading",x,Un),n("fandry-text",p,Yn,[o("Salesforce ISVs and teams building Experience Cloud and LWR sites ship products with their own brand. Their users should see that product, not the standard Salesforce interface.")]),n("fandry-text",p,Qn,[o("Every Fandry component reads its colors, type, spacing, radius and motion from one token scale. Set the public "),i($n,9),o(" tokens on "),i(In,11),o(" to theme everything, or on one section or element to theme just that part of the page.")]),n("fandryui-code-block",V,{props:{label:"your-site.css",code:e.themeCode},key:12})]),s("section",Xn,[n("fandryui-doc-heading",x,Jn),n("fandry-text",p,Zn,[o("Each component ships a sensible default. When you need something different, you compose: replace a slot, restyle a part, extend the class that holds the behavior. A component gets a new prop only for a genuinely binary behavior like "),i(Ln,17),o(", not for every variation someone might want.")]),n("fandryui-code-block",V,{props:{label:"Markup in a slot, not a prop",code:e.composeCode},key:18}),n("fandry-text",p,er,[o("Every component keeps the same five steps open, from the quickest change to a full rewrite, so you go only as far as you need:")]),s("ol",tr,u(e.ladder,function(c){return s("li",{classMap:ar,key:d(21,c.key)},[i(An,23,[l(1,null,f(c.step))]),s("div",nr,[n("fandry-heading",D,rr,[o(f(c.title))]),n("fandry-text",p,or,[n("fandryui-doc-text",J,{props:{text:c.text},key:27})])])])}))]),s("section",sr,[n("fandryui-doc-heading",x,ir),n("fandry-text",p,dr,[o("Every component renders in native shadow DOM, on LWR and in a Salesforce org, even one that loads the synthetic-shadow polyfill. Encapsulation keeps your global CSS from breaking a component by accident, and CSS parts give you a deliberate way in.")]),n("fandryui-code-block",V,{props:{label:"Parts and states",code:e.partsCode},key:31}),n("fandry-text",p,lr,[o("Fandry ships as plain LWC source, not a compiled runtime. Components with real state, like the table, keep it in a template-less class you can extend with your own markup:")]),n("fandryui-code-block",V,{props:{label:"orderGrid.ts",code:e.extendCode},key:33}),n("fandry-text",p,cr,[o("Tokens and parts are public API: renaming or removing one is a breaking change, so your design system evolves when you decide, not as a side effect of an upgrade.")])]),s("section",pr,[n("fandryui-doc-heading",x,fr),n("fandry-text",p,hr,[o("Fandry has its own component implementations and its own design system. It doesn't render\xA0"),i(Dn,39),o(" components or depend on SLDS, so a change to Lightning Base Components or their styling doesn't change how your product looks.")]),n("fandry-text",p,ur,[o("Your UI should evolve when your product evolves, not when Salesforce changes its components. That is a claim about base components only: Fandry still runs on LWC, LWR and Lightning Web Security, and follows the platform like any other code.")])]),s("section",mr,[n("fandryui-doc-heading",x,yr),n("fandry-text",p,gr,[o("A Fandry component is a Lightning Web Component. You set "),i(On,45),o(" properties, fill slots and listen for standard "),i(Fn,47),o(", "),i(Rn,49),o(", "),i(Nn,51),o(" and "),i(jn,53),o(" events, the same way you already work. There is no second framework, virtual DOM or build pipeline to add, and your own components and "),i(Bn,55),o(" components sit alongside Fandry's.")])]),s("section",br,[n("fandryui-doc-heading",x,vr),n("fandry-text",p,wr,[o("They solve different problems. Neither is better in general; pick the one whose goals match yours.")]),s("div",kr,[n("fandry-card",Y,xr,[n("fandry-heading",D,_r,[o("Lightning Base Components")]),n("fandry-text",p,Sr,[o("Optimized for:")]),s("ul",Cr,u(e.lbcGoals,function(c){return s("li",{key:d(64,c)},[n("fandry-text",p,zr,[o(f(c))])])}))]),n("fandry-card",Y,Tr,[n("fandry-heading",D,Pr,[o("Fandry UI")]),n("fandry-text",p,Mr,[o("Optimized for:")]),s("ul",Er,u(e.fandryGoals,function(c){return s("li",{key:d(70,c)},[n("fandry-text",p,$r,[o(f(c))])])}))])])]),s("section",Ir,[n("fandryui-doc-heading",x,Lr),s("dl",Ar,u(e.tradeOffs,function(c){return s("div",{classMap:Dr,key:d(75,c.key)},[s("dt",Or,[n("fandry-text",p,Fr,[o(f(c.title))])]),s("dd",Rr,[n("fandry-text",p,Nr,[n("fandryui-doc-text",J,{props:{text:c.text},key:80})])])])}))])]),s("section",jr,[s("div",Br,[n("fandryui-doc-heading",x,qr),n("fandry-text",p,Wr,[o("The same markup three times. Only the "),i(qn,86),o(" tokens on each wrapper differ.")]),s("div",Hr,u(e.themes,function(c){return s("div",{classMap:Gr,style:c.style,key:d(88,c.key)},[n("fandry-text",p,Vr,[o(f(c.name))]),n("fandry-card",Y,Kr,[n("fandry-badge",$e,Ur,[o("New")]),n("fandry-heading",D,Yr,[o("Spring collection")]),n("fandry-text",p,Qr,[o("Get early access and member pricing.")]),n("fandry-input",yn,Xr),n("fandry-button",ce,Jr,[o("Join the list")])]),n("fandry-text",p,Zr,[o(f(c.note))])])}))])]),s("section",eo,[s("div",to,[n("fandryui-doc-heading",x,ao),n("fandry-text",p,no,[o("One npm package and the same components on both platforms. Pick the one you build on.")]),s("div",ro,u(e.platforms,function(c){return n("fandry-card",Y,{classMap:oo,key:d(102,c.slug)},[n("fandry-badge",$e,so,[o(f(c.badge))]),n("fandry-heading",D,io,[o(f(c.name))]),n("fandry-text",p,lo,[n("fandryui-doc-text",J,{props:{text:c.description},key:106})]),n("fandryui-code-block",V,{classMap:co,props:{code:c.code},key:107}),n("fandry-link",w,{classMap:po,props:{href:c.href},key:108},[o(f(c.cta)+" \u2192")])])})),n("fandry-text",p,fo,[o("Then make it your own with the "),n("fandry-link",w,ho,[o("theming guide")]),o(", or see more in "),n("fandry-link",w,uo,[o("Examples")]),o(".")])])])]),n("fandryui-site-footer",En,mo)]}var yo=y(j);j.stylesheets=[],j.stylesheetToken="lwc-7e9tuua9tbj",j.legacyStylesheetToken="fandryui-whyFandry_whyFandry",Z&&j.stylesheets.push.apply(j.stylesheets,Z),g(j);const go={slug:"lwr-oss",name:"LWR / LWC OSS",badge:"npm",title:"Getting started with LWR / LWC OSS",description:"Install one npm package, point your project at it, and use `<fandry-*>` components. Your bundler ships only the ones you use.",sections:[{id:"requirements",title:"Requirements",blocks:[{type:"list",items:["Node.js 18 or newer","An LWR or LWC OSS project using `lwc` 8.x (`lwc` is a peer dependency, so Fandry uses your copy)","npm, or pnpm / yarn if you prefer"]}]},{id:"install",title:"1. Install",blocks:[{type:"text",text:"One package brings every component and its single third-party dependency (`@tanstack/table-core`, used by `fandry-table`). There is nothing else to install."},{type:"code",label:"Terminal",code:"npm install fandryui"}]},{id:"init",title:"2. Initialize",blocks:[{type:"text",text:"The CLI detects your project from `lwr.config.json` or `lwc.config.json` and registers the package as a module source. You can also make this edit by hand."},{type:"code",label:"Terminal",code:"npx fandry init"},{type:"code",label:"lwr.config.json (after)",code:`{
  "lwc": {
    "modules": [
      { "dir": "$rootDir/src/modules" },
      { "npm": "fandryui" }
    ]
  },
  "routes": [ ... ]
}`},{type:"note",variant:"info",title:"lwc.config.json projects",text:'Plain LWC OSS projects keep the same record at the top level: `"modules": [ { "npm": "fandryui" } ]`.'}]},{id:"use",title:"3. Use a component",blocks:[{type:"text",text:"The package brings its own `fandry` namespace, so `fandry/button` is `<fandry-button>`. No imports are needed in your template."},{type:"code",label:"src/modules/my/app/app.html",code:`<template>
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
                \u2514\u2500\u2500 app.js`},{type:"text",text:"Everything under `node_modules/fandryui` is readable LWC source. Fandry is not a black box: open a component to see exactly what it does."}]},{id:"shipping",title:"Only what you use ships",blocks:[{type:"text",text:"There is no registry and nothing is registered globally. Your bundler follows the module graph from your templates, so a page that uses `fandry-button` does not include table, dialog or lookup. There is nothing to add with the CLI on this platform."}]},{id:"next",title:"Next steps",blocks:[{type:"list",items:['Extend the shared base class: `import Base from "fandry/base"` gives your own component Fandry\'s stylesheet and design tokens.',"Theme by setting any `--fd-*` token on `:root` (e.g. `--fd-primary: 210 90% 40%; --fd-radius-md: 0`), or on one section to theme just that part of the page.","Restyle one element inside a component with `::part()`, e.g. `fandry-link::part(link)`. Each component page lists its parts.","Need a change inside a component that neither CSS nor slots can reach? Copy it into your own namespace and make it yours. Its source is short, plain LWC; keep `extends Base` and it still follows your tokens.","Browse every component, its props and examples under Components."]},{type:"note",variant:"warning",title:"Build fails with LWC1121 in @lwrjs/loader?",text:"Fresh installs of `lwr` 0.18.3 can pull `@lwc/compiler` 9.x, which rejects LWR's own loader. Pin your `@lwc/*` packages to the same 8.x version as `lwc` (npm `\"overrides\"`). The repository's `examples/consumer/package.json` shows a working set."}]}]},bo={slug:"salesforce",name:"Salesforce DX",badge:"sfdx",title:"Getting started on Salesforce",description:"The platform has no bundler and cannot import npm packages, so the CLI copies components into your project as source you own, with everything they depend on.",sections:[{id:"requirements",title:"Requirements",blocks:[{type:"list",items:["A Salesforce DX project (it has an `sfdx-project.json`)","The Salesforce CLI (`sf`) and an authorized org","Node.js 18 or newer, to run the `fandry` CLI"]},{type:"note",variant:"info",title:"Native shadow DOM, whatever your org uses",text:"Fandry components render in native shadow DOM (they set `static shadowSupportMode = 'native'`), even in orgs that run other components on the synthetic-shadow polyfill. That is what lets you restyle their internals with `::part()` and keeps their behavior identical to LWR. Your own components don't need to change: they can stay synthetic and still use and style fandry components, and Lightning components you slot into fandry (a lightning-button in a card or dialog) keep working. The one place not to use Lightning base components is inside an option's component (select, combobox, command, lookup): fandry renders that component, so it runs in native shadow, where base components lose their SLDS styling. SLDS and other global CSS don't reach inside them; theme them with `--fd-*` tokens and parts."}]},{id:"install",title:"1. Install the CLI",blocks:[{type:"text",text:"Install `fandryui` as a dev dependency. It is only used to run the `fandry` CLI and to copy source out of; nothing from `node_modules` is deployed."},{type:"code",label:"Terminal",code:"npm install --save-dev fandryui"},{type:"text",text:"Prefer not to install it? Every command below also works as `npx fandryui <command>`."}]},{id:"init",title:"2. Initialize",blocks:[{type:"text",text:"Fandry gets its own package directory next to your app code, so the copied source is easy to tell apart and can be deployed on its own."},{type:"code",label:"Terminal",code:"npx fandry init"},{type:"code",label:"sfdx-project.json (after)",code:`{
  "packageDirectories": [
    { "path": "force-app", "default": true },
    { "path": "fandryui" }
  ],
  "namespace": "",
  "sourceApiVersion": "67.0"
}`},{type:"text",text:"Use `--dir <path>` to install into a different package directory. Your existing indentation and default package directory are left untouched."}]},{id:"add",title:"3. Add components",blocks:[{type:"text",text:"Name the components you want. Their dependencies are followed for you: adding table also adds input, checkbox, pagination, skeleton, the shared base and more."},{type:"code",label:"Terminal",code:"npx fandry add button input table"},{type:"code",label:"Output",code:`Added 10 bundle(s) to fandryui/main/default/lwc (3 requested, 7 dependencies)
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
npx fandry add table --overwrite # replace table even if you edited it`},{type:"text",text:"Each bundle gets a `.js-meta.xml` using your project's `sourceApiVersion`, and it is never rewritten after that, so you can expose a component or add targets safely. Bundles you have edited are never overwritten unless you name them with `--overwrite`."}]},{id:"structure",title:"What your project looks like",blocks:[{type:"tree",label:"Directory structure",code:`my-sfdx-project/
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
        \u2514\u2500\u2500 fandryTableCore/   # @tanstack/table-core, bundled`},{type:"text",text:"The copied files are yours: commit them, edit them, deploy them. They are ordinary LWC source, not a managed package."},{type:"note",variant:"info",title:"Make it yours: CSS, then slots, then your own copy",text:"Style most things from your own CSS with `--fd-*` tokens and `::part()`, down to a rainbow border. Add to a component through its slots: a loading spinner is just slotted content. For a change inside a component that neither CSS nor slots reach, like a different native element or different internal behavior, copy `fandryButton` to `myButton`, rename it, and change anything: it still extends fandryBase, so it keeps your tokens and native shadow DOM. fandry add does not overwrite files you changed unless you pass --overwrite. With lightning-* components the only equivalent is rebuilding from SLDS blueprints."}]},{id:"use",title:"4. Use a component",blocks:[{type:"text",text:"On the platform your code lives in the default `c` namespace, so `fandryButton` is `<c-fandry-button>`. No imports are needed in the template."},{type:"code",label:"force-app/main/default/lwc/myComponent/myComponent.html",code:`<template>
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
sf project deploy start --source-dir fandryui --source-dir force-app --target-org my-org`},{type:"note",variant:"success",title:"Tested on a real org",text:"button, input, table (with its bundled table-core), pagination and the table search were deployed to an org and run on a Lightning page."}]},{id:"limits",title:"Good to know",blocks:[{type:"note",variant:"warning",title:"select, combobox, command and lookup use dynamic components",text:"They use `lwc:is`, which Salesforce only accepts when the bundle's own `.js-meta.xml` declares the `lightning__dynamicComponent` capability (with API 55 or later and Lightning Web Security on); otherwise the deploy fails with LWC1188. `fandry add` writes the capability into the meta files it creates and tells you if an existing one lacks it. Nothing in `jsconfig.json` or your project settings does this."},{type:"list",items:["Fandry is not a managed package. Components are plain `c`-namespace source in your project.","The table depends on `@tanstack/table-core`. Because npm packages cannot be imported on the platform, `fandry add table` installs it as the `fandryTableCore` bundle.","Upgrading: update `fandryui`, then run `fandry add <name>` again. Bundles you have not edited are updated to the new version, edited ones are skipped, and `--overwrite` replaces only the components you name. Commit `fandry.json`: it records what was installed so an upgrade can be told apart from an edit."]}]}]},vo=[go,bo],wo=[{key:"default",name:"Default",note:"No tokens set.",tokens:{},surface:{}},{key:"editorial",name:"Editorial",note:"Serif headings, square corners, warm palette.",tokens:{"--fd-primary":"24 70% 38%","--fd-primary-foreground":"40 33% 98%","--fd-bg":"40 33% 97%","--fd-bg-muted":"36 30% 92%","--fd-text":"24 20% 15%","--fd-text-muted":"24 10% 36%","--fd-border":"30 20% 78%","--fd-radius-sm":"0","--fd-radius-md":"0","--fd-radius-lg":"0","--fd-font-heading":"Georgia, serif"},surface:{background:"hsl(36 30% 92%)",color:"hsl(24 20% 15%)"}},{key:"midnight",name:"Midnight",note:"Dark surfaces, rounder corners, bright accent.",tokens:{"--fd-primary":"160 84% 45%","--fd-primary-foreground":"222 47% 11%","--fd-bg":"222 47% 14%","--fd-bg-muted":"222 40% 20%","--fd-text":"210 40% 96%","--fd-text-muted":"215 20% 72%","--fd-border":"217 30% 30%","--fd-border-focus":"160 84% 45%","--fd-ring-color":"160 84% 45%","--fd-radius-sm":"0.75rem","--fd-radius-md":"1rem","--fd-radius-lg":"1.5rem","--fd-font-heading":'"Sora", sans-serif'},surface:{background:"hsl(222 47% 9%)",color:"hsl(210 40% 96%)","border-color":"hsl(217 30% 30%)"}}];function Oe(a){return Object.entries(a).map(([e,r])=>`${e}: ${r};`)}function ko(a){return[...Oe(a.tokens),...Oe(a.surface)].join(" ")}const xo=`/* The whole site */
:root {
  --fd-primary: 24 70% 38%;
  --fd-font-heading: Georgia, serif;
  --fd-radius-md: 0;
}

/* One section of it */
.promo {
  --fd-primary: 160 84% 30%;
}`,_o=`<fandry-input label="Email">
  <span slot="help-text">
    We only use it for <a href="/privacy">order updates</a>.
  </span>
</fandry-input>`,So=`/* One element inside a component, in one state */
.checkout fandry-switch::part(control checked) {
  background: hsl(160 84% 30%);
}`,Co=`// Same sorting, paging and selection, your own template
import FdTableState from 'fandry/tableState';

export default class OrderGrid extends FdTableState {}`,zo={"lwr-oss":{cta:"Start with LWR",code:`npm install fandryui
npx fandry init`},salesforce:{cta:"Start with Salesforce DX",code:`npm install --save-dev fandryui
npx fandry init
npx fandry add button`}};class Fe extends S{constructor(...e){super(...e);this.platforms=vo.map(r=>({slug:r.slug,name:r.name,badge:r.badge,description:r.description,href:`/getting-started/${r.slug}/`,...zo[r.slug]})),this.themeCode=xo,this.composeCode=_o,this.partsCode=So,this.extendCode=Co,this.ladder=[{key:"tokens",step:"1",title:"Tokens",text:"Set `--fd-*` on `:root`, a section or one element to change colors, type, spacing, radius and motion."},{key:"parts",step:"2",title:"Parts and states",text:"Restyle one element inside a component with `::part()`, including states like `checked` or `disabled`."},{key:"slots",step:"3",title:"Slots and messages",text:"Replace or add content and text. Every visible string is a slot or a `messages` entry, so sites can translate it."},{key:"extend",step:"4",title:"Extend the state class",text:"Components with real state ship it as a template-less class. Keep the behavior, write your own markup."},{key:"copy",step:"5",title:"Copy the component",text:"The source is short, plain LWC. Copy it into your namespace and change anything, keeping the tokens."}],this.lbcGoals=["Standard Salesforce UI patterns","Consistency with Lightning Experience","Enterprise stability, maintained by Salesforce","Styling hooks and some slots within the SLDS look"],this.fandryGoals=["Custom interfaces with your own product identity","Composition: slots, parts and extendable state","Theming from one token scale","Source you can read, copy and evolve on your schedule"],this.tradeOffs=[{key:"fewer",title:"Fewer components",text:"Fandry is a small set of primitives and a few blocks, not the full Lightning Base Components catalog. Some screens will still call for a `lightning-*` component, and slotting one into a fandry component works."},{key:"not-slds",title:"It does not look like Salesforce",text:"That is the point, and also the cost. If your app should feel like part of Lightning Experience, base components are the better fit."},{key:"opinionated",title:"Opinionated, on purpose",text:"Customization goes through tokens, parts, slots and state classes, not a growing list of props. Some changes mean composing or copying rather than flipping a flag."},{key:"yours",title:"Updates are yours to take",text:"On Salesforce, `fandry add` copies source into your project. Running it again updates the components you have not edited and leaves your changes alone, so you decide when anything changes."},{key:"platform",title:"Still a Salesforce platform citizen",text:"Fandry depends on LWC, LWR and Lightning Web Security like any other component. Independence from base components is not independence from the platform."},{key:"not-react",title:"Not a React replacement",text:"Fandry is a component library. It has no router, state store or rendering model of its own; your application stays plain LWC."}],this.themes=wo.map(r=>({...r,style:ko(r)}))}}v(Fe,{fields:["platforms","themeCode","composeCode","partsCode","extendCode","ladder","lbcGoals","fandryGoals","tradeOffs","themes"]});const To=m(Fe,{tmpl:yo,sel:"fandryui-why-fandry",apiVersion:66,enableSyntheticElementInternals:!0,enablePrivateMethods:!0});export{To as default};
