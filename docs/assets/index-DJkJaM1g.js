(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class Ny{constructor(t="aids"){this.diseaseId=t}async load(){const[t,e]=await Promise.all([this.loadContentConfig(),this.loadCityEpisodeConfig()]);return this.normalize(t,e)}async loadContentConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content.json`);if(!e.ok)throw new Error(`Failed to load config: ${e.status}`);return e.json()}async loadCityEpisodeConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content-map.json`);if(!e.ok){if(e.status===404)return null;throw new Error(`Failed to load city episode config: ${e.status}`)}return e.json()}normalize(t,e){const n=this.expandSteps(t.steps||[],e);return{steps:this.appendFixedClosingStep(n).map((s,a)=>({id:s.id||`step${a}`,index:a,text:s.text||null,chart:s.chart||null,map:s.map||null,image:s.image||null,scrollHeight:s.scrollHeight||null,fixedClosing:!!s.fixedClosing})),settings:t.settings||{},raw:t}}expandSteps(t,e){const n=[];for(const r of t){if(r.id==="city-episodes-anchor"||r.cityEpisodes?.enabled){const a=this.buildCityEpisodeSteps(e);if(a.length>0){n.push(...a);continue}}n.push(r)}return n}buildCityEpisodeSteps(t){const e=Array.isArray(t?.cities)?t.cities:[];if(e.length===0)return[];const n=this.escapeHtml(t?.timeline?.title||"都市エピソード"),r=this.escapeHtml(t?.timeline?.description||""),s=[...e].sort((c,u)=>(c.order??0)-(u.order??0)),a=[{id:"episode-intro",text:{content:`<h2>${n}</h2><p>${r}</p>`,visible:!0,position:{horizontal:"left",vertical:"center",width:"34%"}},chart:{visible:!1},map:{visible:!0,mode:"world-overview",center:[0,15],zoom:1.15,highlightCountries:[],lightenAllCountries:!0,lightenNonVisited:!1,markers:[]},image:{visible:!1},scrollHeight:"100vh"}],o=new Set,l=[];return s.forEach((c,u)=>{const f=c.country||"",h=Number(c.longitude),d=Number(c.latitude);Number.isFinite(h)&&Number.isFinite(d)&&l.push(c),f&&o.add(f),a.push({id:`city-episodes-${c.id||u+1}`,text:{content:this.renderCityEpisodeCard(c,u+1,s.length),visible:!0,position:{horizontal:u%2===0?"right":"left",vertical:"center",width:"36%"}},chart:{visible:!1},map:{visible:!0,mode:"single-city",cityId:c.id||null,center:[Number.isFinite(h)?h:0,Number.isFinite(d)?d:15],zoom:this.resolveCityZoom(c),highlightCountries:[...o],lightenNonVisited:!0,markers:l.map(p=>({id:p.id||`${p.nameEn||p.name}`,name:p.name||p.nameEn||"",country:p.country||"",longitude:Number(p.longitude),latitude:Number(p.latitude),color:p.style?.color||null,size:p.style?.size||7,isCurrent:p.id===c.id}))},image:{visible:!1},scrollHeight:c.transitions?.scrollHeight||"120vh"})}),a}renderCityEpisodeCard(t,e,n){const r=this.escapeHtml(t?.data?.title||t?.name||""),s=this.escapeHtml(t?.data?.description||""),a=this.escapeHtml(t?.name||t?.nameEn||""),o=this.escapeHtml(t?.nameEn||""),l=this.escapeHtml(t?.data?.url||"#"),u=t?.data?.thumbnail?`/prj-jcie/config/${this.diseaseId}/thumb/${encodeURIComponent(t.data.thumbnail)}`:"",f=u?`<img class="city-episode-thumb" src="${u}" alt="${r}" loading="lazy" />`:"";return`
      <article class="city-episode-card">
        <p class="city-episode-meta">都市エピソード ${e}/${n}</p>
        ${f}
        <h3 class="city-episode-title">${r}</h3>
        <p class="city-episode-location">${a}${o&&o!==a?`（${o}）`:""}</p>
        <p class="city-episode-description">${s}</p>
        <a class="city-episode-link" href="${l}" target="_blank" rel="noopener noreferrer">外部コンテンツを見る</a>
      </article>
    `}resolveCityZoom(t){const e=t?.transitions?.routeType;return e==="same-location"?3.6:e==="start"?2.8:2.5}escapeHtml(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}appendFixedClosingStep(t){const e=t.filter(n=>n.id!=="closing"&&n.id!=="fixed-closing");return e.push({id:"fixed-closing",fixedClosing:!0,text:null,chart:{visible:!1},map:{visible:!1},image:{visible:!1},scrollHeight:"100vh"}),e}}var Iy="1.3.17";function l_(i,t,e){return Math.max(i,Math.min(t,e))}function Fy(i,t,e){return(1-e)*i+e*t}function Uy(i,t,e,n){return Fy(i,t,1-Math.exp(-e*n))}function Oy(i,t){return(i%t+t)%t}var By=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const e=l_(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Uy(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function ky(i,t){let e;return function(...n){let r=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(r,n)},t)}}var zy=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=i,this.content=t,e&&(this.debouncedResize=ky(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},c_=class{events={};emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},mm=100/6,zr={passive:!1},Vy=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zr),this.element.addEventListener("touchstart",this.onTouchStart,zr),this.element.addEventListener("touchmove",this.onTouchMove,zr),this.element.addEventListener("touchend",this.onTouchEnd,zr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new c_;on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,zr),this.element.removeEventListener("touchstart",this.onTouchStart,zr),this.element.removeEventListener("touchmove",this.onTouchMove,zr),this.element.removeEventListener("touchend",this.onTouchEnd,zr)}onTouchStart=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=n===1?mm:n===2?this.window.width:1,s=n===1?mm:n===2?this.window.height:1;t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},gm=i=>Math.min(1,1.001-Math.pow(2,-10*i)),Hy=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new By;emitter=new c_;dimensions;virtualScroll;constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:S=!0,autoRaf:x=!1,anchors:v=!1,autoToggle:M=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:A=T,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=Iy,(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=gm:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:S,autoRaf:x,anchors:v,autoToggle:M,allowNestedScroll:E,naiveDimensions:A,stopInertiaOnNavigate:y},this.dimensions=new zy(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Vy(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=e.find(r=>r.getAttribute("href")?.includes("#"));if(n){const r=n.getAttribute("href");if(r){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${r.split("#")[1]}`;this.scrollTo(a,s)}}}this.options.stopInertiaOnNavigate&&e.find(r=>r.host===window.location.host)&&this.reset()};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof i=="string"&&["top","left","start","#"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let h;if(typeof i=="string"?(h=document.querySelector(i),h||(i==="#top"?i=0:console.warn("Lenis: Target not found",i))):i instanceof HTMLElement&&i?.nodeType&&(h=i),h){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const d=h.getBoundingClientRect();i=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const h=i-this.animatedScroll;h>this.limit/2?i=i-this.limit:h<-this.limit/2&&(i=i+this.limit)}}else i=l_(0,i,this.limit);if(i===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=i),typeof a=="number"&&typeof o!="function"?o=gm:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,i,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),r&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now(),r=i._lenis??={};let s,a,o,l,c,u,f,h;const d=this.options.gestureOrientation;if(n-(r.time??0)>2e3){r.time=Date.now();const M=window.getComputedStyle(i);r.computedStyle=M;const E=M.overflowX,T=M.overflowY;if(s=["auto","overlay","scroll"].includes(E),a=["auto","overlay","scroll"].includes(T),r.hasOverflowX=s,r.hasOverflowY=a,!s&&!a||d==="vertical"&&!a||d==="horizontal"&&!s)return!1;c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,h=i.clientHeight,o=c>f,l=u>h,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=c,r.scrollHeight=u,r.clientWidth=f,r.clientHeight=h}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,h=r.clientHeight;if(!s&&!a||!o&&!l||d==="vertical"&&(!a||!l)||d==="horizontal"&&(!s||!o))return!1;let p;if(d==="horizontal")p="x";else if(d==="vertical")p="y";else{const M=t!==0,E=e!==0;M&&s&&o&&(p="x"),E&&a&&l&&(p="y")}if(!p)return!1;let _,g,m,S,x;if(p==="x")_=i.scrollLeft,g=c-f,m=t,S=s,x=o;else if(p==="y")_=i.scrollTop,g=u-h,m=e,S=a,x=l;else return!1;return(m>0?_<g:_>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Oy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function vr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function u_(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},za={duration:.5,overwrite:!1,delay:0},pp,dn,Ue,Ri=1e8,De=1/Ri,uh=Math.PI*2,Gy=uh/4,Wy=0,f_=Math.sqrt,Xy=Math.cos,$y=Math.sin,un=function(t){return typeof t=="string"},He=function(t){return typeof t=="function"},Dr=function(t){return typeof t=="number"},mp=function(t){return typeof t>"u"},cr=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},gp=function(){return typeof window<"u"},Al=function(t){return He(t)||un(t)},h_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,Yy=/random\([^)]+\)/g,qy=/,\s*/g,_m=/(?:-?\.?\d|\.)+/gi,d_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,p_=/[+-]=-?[.\d]+/,Zy=/[^,'"\[\]\s]+/gi,Ky=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Yi,fh,_p,gi={},Xc={},m_,g_=function(t){return(Xc=Va(t,gi))&&ti},xp=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},el=function(t,e){return!e&&console.warn(t)},__=function(t,e){return t&&(gi[t]=e)&&Xc&&(Xc[t]=e)||gi},nl=function(){return 0},jy={suppressEvents:!0,isStart:!0,kill:!1},Ec={suppressEvents:!0,kill:!1},Jy={suppressEvents:!0},vp={},ns=[],hh={},x_,li={},ef={},xm=30,bc=[],yp="",Sp=function(t){var e=t[0],n,r;if(cr(e)||He(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=bc.length;r--&&!bc[r].targetTest(e););n=bc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new H_(t[r],n)))||t.splice(r,1);return t},Os=function(t){return t._gsap||Sp(Pi(t))[0]._gsap},v_=function(t,e,n){return(n=t[e])&&He(n)?t[e]():mp(n)&&t.getAttribute&&t.getAttribute(e)||n},qn=function(t,e){return(t=t.split(",")).forEach(e)||t},We=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},Ra=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Qy=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},$c=function(){var t=ns.length,e=ns.slice(0),n,r;for(hh={},ns.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Mp=function(t){return!!(t._initted||t._startAt||t.add)},y_=function(t,e,n,r){ns.length&&!dn&&$c(),t.render(e,n,!!(dn&&e<0&&Mp(t))),ns.length&&!dn&&$c()},S_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Zy).length<2?e:un(t)?t.trim():t},M_=function(t){return t},_i=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},tS=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Va=function(t,e){for(var n in e)t[n]=e[n];return t},vm=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=cr(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Yc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Vo=function(t){var e=t.parent||Be,n=t.keyframes?tS(bn(t.keyframes)):_i;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},eS=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},E_=function(t,e,n,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},Uu=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},as=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Bs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},nS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dh=function(t,e,n,r){return t._startAt&&(dn?t._startAt.revert(Ec):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},iS=function i(t){return!t||t._ts&&i(t.parent)},ym=function(t){return t._repeat?Ha(t._tTime,t=t.duration()+t._rDelay)*t:0},Ha=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},qc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ou=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||De)||0))},Bu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ou(t),n._dirty||Bs(n,t)),t},b_=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=qc(t.rawTime(),e),(!e._dur||yl(0,e.totalDuration(),n)-e._tTime>De)&&e.render(n,!0)),Bs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-De}},ji=function(t,e,n,r){return e.parent&&as(e),e._start=Oe((Dr(n)?n:n||t!==Be?Mi(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),E_(t,e,"_first","_last",t._sort?"_start":0),ph(e)||(t._recent=e),r||b_(t,e),t._ts<0&&Bu(t,t._tTime),t},T_=function(t,e){return(gi.ScrollTrigger||xp("scrollTrigger",e))&&gi.ScrollTrigger.create(e,t)},w_=function(t,e,n,r,s){if(bp(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&x_!==ui.frame)return ns.push(t),t._lazy=[s,r],1},rS=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},ph=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},sS=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&rS(t)&&!(!t._initted&&ph(t))||(t._ts<0||t._dp._ts<0)&&!ph(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=yl(0,t._tDur,e),u=Ha(l,o),t._yoyo&&u&1&&(a=1-a),u!==Ha(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||dn||r||t._zTime===De||!e&&t._zTime){if(!t._initted&&w_(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?De:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&dh(t,e,n,!0),t._onUpdate&&!n&&hi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&hi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&as(t,1),!n&&!dn&&(hi(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},aS=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ga=function(t,e,n,r){var s=t._repeat,a=Oe(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Oe(a*(s+1)+t._rDelay*s):a,o>0&&!r&&Bu(t,t._tTime=t._tDur*o),t.parent&&Ou(t),n||Bs(t.parent,t),t},Sm=function(t){return t instanceof Un?Bs(t):Ga(t,t._dur)},oS={_start:0,endTime:nl,totalDuration:nl},Mi=function i(t,e,n){var r=t.labels,s=t._recent||oS,a=t.duration()>=Ri?s.endTime(!1):t._dur,o,l,c;return un(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ho=function(t,e,n){var r=Dr(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;a.immediateRender=Yn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new je(e[0],a,e[s+1])},ds=function(t,e){return t||t===0?e(t):e},yl=function(t,e,n){return n<t?t:n>e?e:n},yn=function(t,e){return!un(t)||!(e=Ky.exec(t))?"":e[1]},lS=function(t,e,n){return ds(n,function(r){return yl(t,e,r)})},mh=[].slice,A_=function(t,e){return t&&cr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&cr(t[0]))&&!t.nodeType&&t!==Yi},cS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return un(r)&&!e||A_(r,1)?(s=n).push.apply(s,Pi(r)):n.push(r)})||n},Pi=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):un(t)&&!n&&(fh||!Wa())?mh.call((e||_p).querySelectorAll(t),0):bn(t)?cS(t,n):A_(t)?mh.call(t,0):t?[t]:[]},gh=function(t){return t=Pi(t)[0]||el("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Pi(e,n.querySelectorAll?n:n===t?el("Invalid scope")||_p.createElement("div"):t)}},C_=function(t){return t.sort(function(){return .5-Math.random()})},R_=function(t){if(He(t))return t;var e=cr(t)?t:{each:t},n=ks(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,f=r;return un(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,p){var _=(p||e).length,g=a[_],m,S,x,v,M,E,T,A,y;if(!g){if(y=e.grid==="auto"?0:(e.grid||[1,Ri])[1],!y){for(T=-Ri;T<(T=p[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(g=a[_]=[],m=l?Math.min(y,_)*u-.5:r%y,S=y===Ri?0:l?_*f/y-.5:r/y|0,T=0,A=Ri,E=0;E<_;E++)x=E%y-m,v=S-(E/y|0),g[E]=M=c?Math.abs(c==="y"?v:x):f_(x*x+v*v),M>T&&(T=M),M<A&&(A=M);r==="random"&&C_(g),g.max=T-A,g.min=A,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=yn(e.amount||e.each)||0,n=n&&_<0?k_(n):n}return _=(g[h]-g.min)/g.max||0,Oe(g.b+(n?n(_):_)*g.v)+g.u}},_h=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Oe(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(Dr(n)?0:yn(n))}},P_=function(t,e){var n=bn(t),r,s;return!n&&cr(t)&&(r=n=t.radius||Ri,t.values?(t=Pi(t.values),(s=!Dr(t[0]))&&(r*=r)):t=_h(t.increment)),ds(e,n?He(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ri,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:a,s||u===a||Dr(a)?u:u+yn(a)}:_h(t))},D_=function(t,e,n,r){return ds(bn(t)?!e:n===!0?!!(n=0):!r,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},uS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},fS=function(t,e){return function(n){return t(parseFloat(n))+(e||yn(n))}},hS=function(t,e,n){return N_(t,e,0,1,n)},L_=function(t,e,n){return ds(n,function(r){return t[~~e(r)]})},dS=function i(t,e,n){var r=e-t;return bn(t)?L_(t,i(0,t.length),e):ds(n,function(s){return(r+(s-t)%r)%r+t})},pS=function i(t,e,n){var r=e-t,s=r*2;return bn(t)?L_(t,i(0,t.length-1),e):ds(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},il=function(t){return t.replace(Yy,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(qy);return D_(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},N_=function(t,e,n,r,s){var a=e-t,o=r-n;return ds(s,function(l){return n+((l-t)/a*o||0)})},mS=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=un(t),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,s=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=e}else r||(t=Va(bn(t)?[]:{},t));if(!u){for(l in e)Ep.call(o,t,l,"get",e[l]);s=function(p){return Ap(p,o)||(a?t.p:t)}}}return ds(n,s)},Mm=function(t,e,n){var r=t.labels,s=Ri,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},hi=function(t,e,n){var r=t.vars,s=r[e],a=Ue,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&ns.length&&$c(),o&&(Ue=o),u=l?s.apply(c,l):s.call(c),Ue=a,u},Mo=function(t){return as(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&hi(t,"onInterrupt"),t},Ea,I_=[],F_=function(t){if(t)if(t=!t.name&&t.default||t,gp()||t.headless){var e=t.name,n=He(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:nl,render:Ap,add:Ep,kill:DS,modifier:PS,rawVars:0},a={targetTest:0,get:0,getSetter:wp,aliases:{},register:0};if(Wa(),t!==r){if(li[e])return;_i(r,_i(Yc(t,s),a)),Va(r.prototype,Va(s,Yc(t,a))),li[r.prop=e]=r,t.targetTest&&(bc.push(r),vp[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}__(e,r),t.register&&t.register(ti,r,Zn)}else I_.push(t)},Pe=255,Eo={aqua:[0,Pe,Pe],lime:[0,Pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pe],navy:[0,0,128],white:[Pe,Pe,Pe],olive:[128,128,0],yellow:[Pe,Pe,0],orange:[Pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pe,0,0],pink:[Pe,192,203],cyan:[0,Pe,Pe],transparent:[Pe,Pe,Pe,0]},nf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Pe+.5|0},U_=function(t,e,n){var r=t?Dr(t)?[t>>16,t>>8&Pe,t&Pe]:0:Eo.black,s,a,o,l,c,u,f,h,d,p;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Eo[t])r=Eo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Pe,r&Pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Pe,t&Pe]}else if(t.substr(0,3)==="hsl"){if(r=p=t.match(_m),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=nf(l+1/3,s,a),r[1]=nf(l,s,a),r[2]=nf(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(d_),n&&r.length<4&&(r[3]=1),r}else r=t.match(_m)||Eo.transparent;r=r.map(Number)}return e&&!p&&(s=r[0]/Pe,a=r[1]/Pe,o=r[2]/Pe,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},O_=function(t){var e=[],n=[],r=-1;return t.split(is).forEach(function(s){var a=s.match(Ma)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},Em=function(t,e,n){var r="",s=(t+r).match(is),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=U_(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=O_(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(is,"1").split(Ma),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(is),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},is=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Eo)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),gS=/hsl[a]?\(/,B_=function(t){var e=t.join(" "),n;if(is.lastIndex=0,is.test(e))return n=gS.test(e),t[1]=Em(t[1],n),t[0]=Em(t[0],n,O_(t[1])),!0},rl,ui=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,p=function _(g){var m=i()-r,S=g===!0,x,v,M,E;if((m>t||m<0)&&(n+=m-e),r+=m,M=r-n,x=M-a,(x>0||S)&&(E=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,a+=x+(x>=s?4:s-x),v=1),S||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](M,h,E,g)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){m_&&(!fh&&gp()&&(Yi=fh=window,_p=Yi.document||{},gi.gsap=ti,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(ti.version),g_(Xc||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),I_.forEach(F_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(g){return setTimeout(g,a-f.time*1e3+1|0)},rl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),rl=0,c=nl},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,m,S){var x=m?function(v,M,E,T){g(v,M,E,T),f.remove(x)}:g;return f.remove(g),o[S?"unshift":"push"](x),Wa(),x},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f})(),Wa=function(){return!rl&&ui.wake()},ce={},_S=/^[\d.\-M][\d.\-,\s]/,xS=/["']/g,vS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(xS,"").trim():+c,r=l.substr(o+1).trim();return e},yS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},SS=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[vS(e[1])]:yS(t).split(",").map(S_)):ce._CE&&_S.test(t)?ce._CE("",t):n},k_=function(t){return function(e){return 1-t(1-e)}},z_=function i(t,e){for(var n=t._first,r;n;)n instanceof Un?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},ks=function(t,e){return t&&(He(t)?t:ce[t]||SS(t))||e},ta=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return qn(t,function(o){ce[o]=gi[o]=s,ce[a=o.toLowerCase()]=n;for(var l in s)ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[o+"."+l]=s[l]}),s},V_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},rf=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/uh*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*$y((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:V_(o);return s=uh/s,l.config=function(c,u){return i(t,c,u)},l},sf=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:V_(n);return r.config=function(s){return i(t,s)},r};qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;ta(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;ta("Elastic",rf("in"),rf("out"),rf());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};ta("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ta("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ta("Circ",function(i){return-(f_(1-i*i)-1)});ta("Sine",function(i){return i===1?1:-Xy(i*Gy)+1});ta("Back",sf("in"),sf("out"),sf());ce.SteppedEase=ce.steps=gi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-De;return function(o){return((r*yl(0,a,o)|0)+s)*n}}};za.ease=ce["quad.out"];qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return yp+=i+","+i+"Params,"});var H_=function(t,e){this.id=Wy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:v_,this.set=e?e.getSetter:wp},sl=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ga(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),rl||ui.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ga(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bu(this,n),!s._dp||s.parent||b_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===De||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),y_(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ym(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ym(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ha(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-De?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?qc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-De?0:this._rts,this.totalTime(yl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ou(this),nS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==De&&(this._tTime-=De)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ji(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qc(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Jy);var r=dn;return dn=n,Mp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Sm(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Mi(this,n),Yn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Yn(r)),this._dur||(this._zTime=-De),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-De:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-De,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-De)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=He(n)?n:M_,l=function(){var u=r.then;r.then=null,s&&s(),He(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){Mo(this)},i})();_i(sl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-De,_prom:0,_ps:!1,_rts:1});var Un=(function(i){u_(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Be&&ji(n.parent||Be,vr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&T_(vr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Ho(0,arguments,this),this},e.from=function(r,s,a){return Ho(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Ho(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Vo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new je(r,s,Mi(this,a),1),this},e.call=function(r,s,a){return ji(this,je.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new je(r,a,Mi(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Vo(a).immediateRender=Yn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Vo(o).immediateRender=Yn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Oe(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,p,_,g,m,S,x,v,M,E,T;if(this!==Be&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,v=this._start,x=this._ts,m=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(h=Oe(u%g),u===l?(_=this._repeat,h=c):(M=Oe(u/g),_=~~M,_&&_===M&&(h=c,_--),h>c&&(h=c)),M=Ha(this._tTime,g),!o&&this._tTime&&M!==_&&this._tTime-M*g-this._dur<=0&&(M=_),E&&_&1&&(h=c-h,T=1),_!==M&&!this._lock){var A=E&&M&1,y=A===(E&&_&1);if(_<M&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Oe(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;z_(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=aS(this,Oe(o),Oe(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!M&&(hi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){S=0,p&&(u+=this._zTime=-De);break}}d=p}else{d=this._last;for(var b=r<0?r:h;d;){if(p=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||dn&&Mp(d)),h!==this._time||!this._ts&&!m){S=0,p&&(u+=this._zTime=b?-De:De);break}}d=p}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-De)._zTime=h>=o?1:-1,this._ts))return this._start=v,Ou(this),this.render(r,s,a);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(hi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(Dr(s)||(s=Mi(this,s,r)),!(r instanceof sl)){if(bn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(un(r))return this.addLabel(r,s);if(He(r))r=je.delayedCall(0,r);else return this}return this!==r?ji(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ri);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof je?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return un(r)?this.removeLabel(r):He(r)?this.killTweensOf(r):(r.parent===this&&Uu(this,r),r===this._recent&&(this._recent=this._last),Bs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(ui.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Mi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=je.delayedCall(0,s||nl,a);return o.data="isPause",this._hasPause=1,ji(this,o,Mi(this,r))},e.removePause=function(r){var s=this._first;for(r=Mi(this,r);s;)s._start===r&&s.data==="isPause"&&as(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Kr!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=Pi(r),l=this._first,c=Dr(s),u;l;)l instanceof je?Qy(l._targets,o)&&(c?(!Kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=Mi(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=je.to(a,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||De,onStart:function(){if(a.pause(),!d){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==g&&Ga(p,g,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,_i({startAt:{time:Mi(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Mm(this,Mi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Mm(this,Mi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+De)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Oe(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Bs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Bs(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Ri,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ji(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Oe(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ga(a,a===Be&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(Be._ts&&(y_(Be,qc(r,Be)),x_=ui.frame),ui.frame>=xm){xm+=mi.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&mi.autoSleep&&ui._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ui.sleep()}}},t})(sl);_i(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var MS=function(t,e,n,r,s,a,o){var l=new Zn(this._pt,t,e,0,1,q_,null,s),c=0,u=0,f,h,d,p,_,g,m,S;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=il(r)),a&&(S=[n,r],a(S,t,e),n=S[0],r=S[1]),h=n.match(tf)||[];f=tf.exec(r);)p=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:p.charAt(1)==="="?Ra(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=tf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(p_.test(r)||m)&&(l.e=0),this._pt=l,l},Ep=function(t,e,n,r,s,a,o,l,c,u){He(r)&&(r=r(s||0,t,a));var f=t[e],h=n!=="get"?n:He(f)?c?t[e.indexOf("set")||!He(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=He(f)?c?AS:$_:Tp,p;if(un(r)&&(~r.indexOf("random(")&&(r=il(r)),r.charAt(1)==="="&&(p=Ra(h,r)+(yn(h)||0),(p||p===0)&&(r=p))),!u||h!==r||xh)return!isNaN(h*r)&&r!==""?(p=new Zn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?RS:Y_,0,d),c&&(p.fp=c),o&&p.modifier(o,this,t),this._pt=p):(!f&&!(e in t)&&xp(e,r),MS.call(this,t,e,h,r,d,l||mi.stringFilter,c))},ES=function(t,e,n,r,s){if(He(t)&&(t=Go(t,s,e,n,r)),!cr(t)||t.style&&t.nodeType||bn(t)||h_(t))return un(t)?Go(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=Go(t[o],s,e,n,r);return a},G_=function(t,e,n,r,s,a){var o,l,c,u;if(li[t]&&(o=new li[t]).init(s,o.rawVars?e[t]:ES(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Zn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ea))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Kr,xh,bp=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:g,x=t._overwrite==="auto"&&!pp,v=t.timeline,M,E,T,A,y,b,R,D,I,O,F,z,U;if(v&&(!h||!s)&&(s="none"),t._ease=ks(s,za.ease),t._yEase=f?k_(ks(f===!0?s:f,za.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(D=g[0]?Os(g[0]).harness:0,z=D&&r[D.prop],M=Yc(r,vp),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&p?Ec:jy),_._lazy=0),a){if(as(t._startAt=je.set(g,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!o&&!d)&&t._startAt.revert(Ec),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!_){if(e&&(o=!1),T=_i({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Yn(l),immediateRender:o,stagger:0,parent:m},M),z&&(T[D.prop]=z),as(t._startAt=je.set(g,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(Ec):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,De,De);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Yn(l)||l&&!p,E=0;E<g.length;E++){if(y=g[E],R=y._gsap||Sp(g)[E]._gsap,t._ptLookup[E]=O={},hh[R.id]&&ns.length&&$c(),F=S===g?E:S.indexOf(y),D&&(I=new D).init(y,z||M,t,F,S)!==!1&&(t._pt=A=new Zn(t._pt,y,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){O[H]=A}),I.priority&&(b=1)),!D||z)for(T in M)li[T]&&(I=G_(T,M,t,F,y,S))?I.priority&&(b=1):O[T]=A=Ep.call(t,y,T,"get",M[T],F,S,0,r.stringFilter);t._op&&t._op[E]&&t.kill(y,t._op[E]),x&&t._pt&&(Kr=t,Be.killTweensOf(y,O,t.globalTime(e)),U=!t.parent,Kr=0),t._pt&&l&&(hh[R.id]=1)}b&&Z_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!U,h&&e<=0&&v.render(Ri,!0,!0)},bS=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return xh=1,t.vars[e]="+=0",bp(t,o),xh=0,l?el(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=We(n)+yn(f.e)),f.b&&(f.b=u.s+yn(f.b))},TS=function(t,e){var n=t[0]?Os(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=Va({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},wS=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(bn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Go=function(t,e,n,r,s){return He(t)?t.call(e,n,r,s):un(t)&&~t.indexOf("random(")?il(t):t},W_=yp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",X_={};qn(W_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return X_[i]=1});var je=(function(i){u_(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Vo(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,S=r.parent||Be,x=(bn(n)||h_(n)?Dr(n[0]):"length"in r)?[n]:Pi(n),v,M,E,T,A,y,b,R;if(o._targets=x.length?Sp(x):el("GSAP target "+n+" not found. https://gsap.com",!mi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||h||Al(c)||Al(u)){if(r=o.vars,v=o.timeline=new Un({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),v.kill(),v.parent=v._dp=vr(o),v._start=0,h||Al(c)||Al(u)){if(T=x.length,b=h&&R_(h),cr(h))for(A in h)~W_.indexOf(A)&&(R||(R={}),R[A]=h[A]);for(M=0;M<T;M++)E=Yc(r,X_),E.stagger=0,m&&(E.yoyoEase=m),R&&Va(E,R),y=x[M],E.duration=+Go(c,vr(o),M,y,x),E.delay=(+Go(u,vr(o),M,y,x)||0)-o._delay,!h&&T===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),v.to(y,E,b?b(M,y,x):0),v._ease=ce.none;v.duration()?c=u=0:o.timeline=0}else if(p){Vo(_i(v.vars.defaults,{ease:"none"})),v._ease=ks(p.ease||r.ease||"none");var D=0,I,O,F;if(bn(p))p.forEach(function(z){return v.to(x,z,">")}),v.duration();else{E={};for(A in p)A==="ease"||A==="easeEach"||wS(A,p[A],E,p.easeEach);for(A in E)for(I=E[A].sort(function(z,U){return z.t-U.t}),D=0,M=0;M<I.length;M++)O=I[M],F={ease:O.e,duration:(O.t-(M?I[M-1].t:0))/100*c},F[A]=O.v,v.to(x,F,D),D+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!pp&&(Kr=vr(o),Be.killTweensOf(x),Kr=0),ji(S,vr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!p&&o._start===Oe(S._time)&&Yn(f)&&iS(vr(o))&&S.data!=="nested")&&(o._tTime=-De,o.render(Math.max(0,-u)||0)),g&&T_(vr(o),g),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-De&&!u?l:r<De?0:r,h,d,p,_,g,m,S,x,v;if(!c)sS(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Oe(f%_),f===l?(p=this._repeat,h=c):(g=Oe(f/_),p=~~g,p&&p===g?(h=c,p--):h>c&&(h=c)),m=this._yoyo&&p&1,m&&(v=this._yEase,h=c-h),g=Ha(this._tTime,_),h===o&&!a&&this._initted&&p===g)return this._tTime=f,this;p!==g&&(x&&this._yEase&&z_(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Oe(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(w_(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(h/c),this._from&&(this.ratio=S=1-S),!o&&f&&!s&&!g&&(hi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&dh(this,r,s,a),hi(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&dh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&as(this,1),!s&&!(u&&!o)&&(f||o||m)&&(hi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){rl||ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||bp(this,c),u=this._ease(c/this._dur),bS(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Bu(this,0),this.parent||E_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Mo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Kr&&Kr.vars.overwrite!==!0)._first||Mo(this),this.parent&&a!==this.timeline.totalDuration()&&Ga(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Pi(r):o,c=this._ptLookup,u=this._pt,f,h,d,p,_,g,m;if((!s||s==="all")&&eS(o,l))return s==="all"&&(this._pt=0),Mo(this);for(f=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},qn(s,function(S){return _[S]=1}),s=_),s=TS(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,p=h,d={}):(d=f[m]=f[m]||{},p=s);for(_ in p)g=h&&h[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Uu(this,g,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Mo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ho(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Ho(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return Be.killTweensOf(r,s,a)},t})(sl);_i(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qn("staggerTo,staggerFrom,staggerFromTo",function(i){je[i]=function(){var t=new Un,e=mh.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Tp=function(t,e,n){return t[e]=n},$_=function(t,e,n){return t[e](n)},AS=function(t,e,n,r){return t[e](r.fp,n)},CS=function(t,e,n){return t.setAttribute(e,n)},wp=function(t,e){return He(t[e])?$_:mp(t[e])&&t.setAttribute?CS:Tp},Y_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},RS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},q_=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Ap=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},PS=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},DS=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Uu(this,e,"_pt"):e.dep||(n=1),e=r;return!n},LS=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Z_=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},Zn=(function(){function i(e,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Y_,this.d=l||this,this.set=c||Tp,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=LS,this.m=n,this.mt=s,this.tween=r},i})();qn(yp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return vp[i]=1});gi.TweenMax=gi.TweenLite=je;gi.TimelineLite=gi.TimelineMax=Un;Be=new Un({sortChildren:!1,defaults:za,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=B_;var zs=[],Tc={},NS=[],bm=0,IS=0,af=function(t){return(Tc[t]||NS).map(function(e){return e()})},vh=function(){var t=Date.now(),e=[];t-bm>2&&(af("matchMediaInit"),zs.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Yi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),af("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),bm=t,af("matchMedia"))},K_=(function(){function i(e,n){this.selector=n&&gh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IS++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){He(n)&&(s=r,r=n,n=He);var a=this,o=function(){var c=Ue,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=gh(s)),Ue=a,f=r.apply(a,arguments),He(f)&&a._r.push(f),Ue=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===He?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=Ue;Ue=null,n(this),Ue=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof je&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=zs.length;a--;)zs[a].id===this.id&&zs.splice(a,1)},t.revert=function(n){this.kill(n||{})},i})(),FS=(function(){function i(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){cr(n)||(n={matches:n});var a=new K_(0,s||this.scope),o=a.conditions={},l,c,u;Ue&&!a.selector&&(a.selector=Ue.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Yi.matchMedia(n[c]),l&&(zs.indexOf(a)<0&&zs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(vh):l.addEventListener("change",vh)));return u&&r(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Zc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return F_(r)})},timeline:function(t){return new Un(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,r){un(t)&&(t=Pi(t)[0]);var s=Os(t||{}).get,a=n?M_:S_;return n==="native"&&(n=""),t&&(e?a((li[e]&&li[e].get||s)(t,e,n,r)):function(o,l,c){return a((li[o]&&li[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Pi(t),t.length>1){var r=t.map(function(u){return ti.quickSetter(u,e,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var a=li[e],o=Os(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;Ea._pt=0,f.init(t,n?u+n:u,Ea,0,[t]),f.render(1,f),Ea._pt&&Ap(1,Ea)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var r,s=ti.to(t,_i((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ks(t.ease,za.ease)),vm(za,t||{})},config:function(t){return vm(mi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!li[o]&&!gi[o]&&el(e+" effect requires "+o+" plugin.")}),ef[e]=function(o,l,c){return n(Pi(o),_i(l||{},s),c)},a&&(Un.prototype[e]=function(o,l,c){return this.add(ef[e](o,cr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=ks(e)},parseEase:function(t,e){return arguments.length?ks(t,e):ce},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Un(t),r,s;for(n.smoothChildTiming=Yn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,r=Be._first;r;)s=r._next,(e||!(!r._dur&&r instanceof je&&r.vars.onComplete===r._targets[0]))&&ji(n,r,r._start-r._delay),r=s;return ji(Be,n,0),n},context:function(t,e){return t?new K_(t,e):Ue},matchMedia:function(t){return new FS(t)},matchMediaRefresh:function(){return zs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||vh()},addEventListener:function(t,e){var n=Tc[t]||(Tc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Tc[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:dS,wrapYoyo:pS,distribute:R_,random:D_,snap:P_,normalize:hS,getUnit:yn,clamp:lS,splitColor:U_,toArray:Pi,selector:gh,mapRange:N_,pipe:uS,unitize:fS,interpolate:mS,shuffle:C_},install:g_,effects:ef,ticker:ui,updateRoot:Un.updateRoot,plugins:li,globalTimeline:Be,core:{PropTween:Zn,globals:__,Tween:je,Timeline:Un,Animation:sl,getCache:Os,_removeLinkedListItem:Uu,reverting:function(){return dn},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return pp=t}}};qn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Zc[i]=je[i]});ui.add(Un.updateRoot);Ea=Zc.to({},{duration:0});var US=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},OS=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=US(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},of=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},qn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}OS(o,s)}}}},ti=Zc.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},of("roundProps",_h),of("modifiers"),of("snap",P_))||Zc;je.version=Un.version=ti.version="3.14.2";m_=1;gp()&&Wa();ce.Power0;ce.Power1;ce.Power2;ce.Power3;ce.Power4;ce.Linear;ce.Quad;ce.Cubic;ce.Quart;ce.Quint;ce.Strong;ce.Elastic;ce.Back;ce.SteppedEase;ce.Bounce;ce.Sine;ce.Expo;ce.Circ;var Tm,jr,Pa,Cp,Ls,wm,Rp,BS=function(){return typeof window<"u"},Lr={},bs=180/Math.PI,Da=Math.PI/180,ia=Math.atan2,Am=1e8,Pp=/([A-Z])/g,kS=/(left|right|width|margin|padding|x)/i,zS=/[\s,\(]\S/,tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},VS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},HS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},GS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},WS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},j_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},J_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},XS=function(t,e,n){return t.style[e]=n},$S=function(t,e,n){return t.style.setProperty(e,n)},YS=function(t,e,n){return t._gsap[e]=n},qS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ZS=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},KS=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ke="transform",Kn=ke+"Origin",jS=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in Lr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=tr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=yr(r,o)}):this.tfm[t]=a.x?a[t]:yr(r,t),t===Kn&&(this.tfm.zOrigin=a.zOrigin);else return tr.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(ke)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=ke}(s||e)&&this.props.push(t,e,s[t])},Q_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},JS=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Pp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Rp(),(!s||!s.isStart)&&!n[ke]&&(Q_(n),r.zOrigin&&n[Kn]&&(n[Kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},tx=function(t,e){var n={target:t,props:[],revert:JS,save:jS};return t._gsap||ti.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},ex,Sh=function(t,e){var n=jr.createElementNS?jr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):jr.createElement(t);return n&&n.style?n:jr.createElement(t)},di=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Pp,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Xa(e)||e,1)||""},Cm="O,Moz,ms,Ms,Webkit".split(","),Xa=function(t,e,n){var r=e||Ls,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Cm[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Cm[a]:"")+t},Mh=function(){BS()&&window.document&&(Tm=window,jr=Tm.document,Pa=jr.documentElement,Ls=Sh("div")||{style:{}},Sh("div"),ke=Xa(ke),Kn=ke+"Origin",Ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ex=!!Xa("perspective"),Rp=ti.core.reverting,Cp=1)},Rm=function(t){var e=t.ownerSVGElement,n=Sh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Pa.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Pa.removeChild(n),s},Pm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},nx=function(t){var e,n;try{e=t.getBBox()}catch{e=Rm(t),n=1}return e&&(e.width||e.height)||n||(e=Rm(t)),e&&!e.width&&!e.x&&!e.y?{x:+Pm(t,["x","cx","x1"])||0,y:+Pm(t,["y","cy","y1"])||0,width:0,height:0}:e},ix=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&nx(t))},os=function(t,e){if(e){var n=t.style,r;e in Lr&&e!==Kn&&(e=ke),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Pp,"-$1").toLowerCase())):n.removeAttribute(e)}},Jr=function(t,e,n,r,s,a){var o=new Zn(t._pt,e,n,0,1,a?J_:j_);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},Dm={deg:1,rad:1,turn:1},QS={grid:1,flex:1},ls=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ls.style,l=kS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",p,_,g,m;if(r===a||!s||Dm[r]||Dm[a])return s;if(a!=="px"&&!h&&(s=i(t,e,n,"px")),m=t.getCTM&&ix(t),(d||a==="%")&&(Lr[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[u],We(d?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===jr||!_.appendChild)&&(_=jr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===ui.time&&!g.uncache)return We(s/g.width*f);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+r,p=t[u],S?t.style[e]=S:os(t,e)}else(d||a==="%")&&!QS[di(_,"display")]&&(o.position=di(t,"position")),_===t&&(o.position="static"),_.appendChild(Ls),p=Ls[u],_.removeChild(Ls),o.position="absolute";return l&&d&&(g=Os(_),g.time=ui.time,g.width=_[u]),We(h?p*s/f:p&&s?f/p*s:0)},yr=function(t,e,n,r){var s;return Cp||Mh(),e in tr&&e!=="transform"&&(e=tr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Lr[e]&&e!=="transform"?(s=ol(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:jc(di(t,Kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Kc[e]&&Kc[e](t,e,n)||di(t,e)||v_(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ls(t,e,s,n)+n:s},tM=function(t,e,n,r){if(!n||n==="none"){var s=Xa(e,t,1),a=s&&di(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=di(t,"borderTopColor"))}var o=new Zn(this._pt,t.style,e,0,1,q_),l=0,c=0,u,f,h,d,p,_,g,m,S,x,v,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=di(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=di(t,e)||r,_?t.style[e]=_:os(t,e)),u=[n,r],B_(u),n=u[0],r=u[1],h=n.match(Ma)||[],M=r.match(Ma)||[],M.length){for(;f=Ma.exec(r);)g=f[0],S=r.substring(l,f.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),g!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),g.charAt(1)==="="&&(g=Ra(d,g)+v),m=parseFloat(g),x=g.substr((m+"").length),l=Ma.lastIndex-x.length,x||(x=x||mi.units[e]||v,l===r.length&&(r+=x,o.e+=x)),v!==x&&(d=ls(t,e,_,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:p&&p<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?J_:j_;return p_.test(r)&&(o.e=0),this._pt=o,o},Lm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eM=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Lm[n]||n,e[1]=Lm[r]||r,e.join(" ")},nM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Lr[o]&&(l=1,o=o==="transformOrigin"?Kn:ke),os(n,o);l&&(os(n,ke),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ol(n,1),a.uncache=1,Q_(r)))}},Kc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new Zn(t._pt,e,n,0,0,nM);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},al=[1,0,0,1,0,0],rx={},sx=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Nm=function(t){var e=di(t,ke);return sx(e)?al:e.substr(7).match(d_).map(We)},Dp=function(t,e){var n=t._gsap||Os(t),r=t.style,s=Nm(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?al:s):(s===al&&!t.offsetParent&&t!==Pa&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Pa.appendChild(t)),s=Nm(t),l?r.display=l:os(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Pa.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Eh=function(t,e,n,r,s,a){var o=t._gsap,l=s||Dp(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],S=l[5],x=e.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,E,T,A,y;n?l!==al&&(T=d*g-p*_)&&(A=v*(g/T)+M*(-_/T)+(_*S-g*m)/T,y=v*(-p/T)+M*(d/T)-(d*S-p*m)/T,v=A,M=y):(E=nx(t),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),M=E.y+(~(x[1]||x[0]).indexOf("%")?M/100*E.height:M)),r||r!==!1&&o.smooth?(m=v-c,S=M-u,o.xOffset=f+(m*d+S*_)-m,o.yOffset=h+(m*p+S*g)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[Kn]="0px 0px",a&&(Jr(a,o,"xOrigin",c,v),Jr(a,o,"yOrigin",u,M),Jr(a,o,"xOffset",f,o.xOffset),Jr(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},ol=function(t,e){var n=t._gsap||new H_(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=di(t,Kn)||"0",u,f,h,d,p,_,g,m,S,x,v,M,E,T,A,y,b,R,D,I,O,F,z,U,H,K,L,j,Mt,bt,Lt,At;return u=f=h=_=g=m=S=x=v=0,d=p=1,n.svg=!!(t.getCTM&&ix(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ke]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ke]!=="none"?l[ke]:"")),r.scale=r.rotate=r.translate="none"),T=Dp(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),Eh(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,E=n.yOrigin||0,T!==al&&(R=T[0],D=T[1],I=T[2],O=T[3],u=F=T[4],f=z=T[5],T.length===6?(d=Math.sqrt(R*R+D*D),p=Math.sqrt(O*O+I*I),_=R||D?ia(D,R)*bs:0,S=I||O?ia(I,O)*bs+_:0,S&&(p*=Math.abs(Math.cos(S*Da))),n.svg&&(u-=M-(M*R+E*I),f-=E-(M*D+E*O))):(At=T[6],bt=T[7],L=T[8],j=T[9],Mt=T[10],Lt=T[11],u=T[12],f=T[13],h=T[14],A=ia(At,Mt),g=A*bs,A&&(y=Math.cos(-A),b=Math.sin(-A),U=F*y+L*b,H=z*y+j*b,K=At*y+Mt*b,L=F*-b+L*y,j=z*-b+j*y,Mt=At*-b+Mt*y,Lt=bt*-b+Lt*y,F=U,z=H,At=K),A=ia(-I,Mt),m=A*bs,A&&(y=Math.cos(-A),b=Math.sin(-A),U=R*y-L*b,H=D*y-j*b,K=I*y-Mt*b,Lt=O*b+Lt*y,R=U,D=H,I=K),A=ia(D,R),_=A*bs,A&&(y=Math.cos(A),b=Math.sin(A),U=R*y+D*b,H=F*y+z*b,D=D*y-R*b,z=z*y-F*b,R=U,F=H),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=We(Math.sqrt(R*R+D*D+I*I)),p=We(Math.sqrt(z*z+At*At)),A=ia(F,z),S=Math.abs(A)>2e-4?A*bs:0,v=Lt?1/(Lt<0?-Lt:Lt):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!sx(di(t,ke)),U&&t.setAttribute("transform",U))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=We(d),n.scaleY=We(p),n.rotation=We(_)+o,n.rotationX=We(g)+o,n.rotationY=We(m)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Kn]=jc(c)),n.xOffset=n.yOffset=0,n.force3D=mi.force3D,n.renderTransform=n.svg?rM:ex?ax:iM,n.uncache=0,n},jc=function(t){return(t=t.split(" "))[0]+" "+t[1]},lf=function(t,e,n){var r=yn(e);return We(parseFloat(e)+parseFloat(ls(t,"x",n+"px",r)))+r},iM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ax(t,e)},ms="0deg",co="0px",gs=") ",ax=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,S=n.target,x=n.zOrigin,v="",M=m==="auto"&&t&&t!==1||m===!0;if(x&&(f!==ms||u!==ms)){var E=parseFloat(u)*Da,T=Math.sin(E),A=Math.cos(E),y;E=parseFloat(f)*Da,y=Math.cos(E),a=lf(S,a,T*y*-x),o=lf(S,o,-Math.sin(E)*-x),l=lf(S,l,A*y*-x+x)}g!==co&&(v+="perspective("+g+gs),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(M||a!==co||o!==co||l!==co)&&(v+=l!==co||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+gs),c!==ms&&(v+="rotate("+c+gs),u!==ms&&(v+="rotateY("+u+gs),f!==ms&&(v+="rotateX("+f+gs),(h!==ms||d!==ms)&&(v+="skew("+h+", "+d+gs),(p!==1||_!==1)&&(v+="scale("+p+", "+_+gs),S.style[ke]=v||"translate(0, 0)"},rM=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,S=n.forceCSS,x=parseFloat(a),v=parseFloat(o),M,E,T,A,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Da,c*=Da,M=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-h,A=Math.cos(l-c)*h,c&&(u*=Da,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,A*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),M*=y,E*=y)),M=We(M),E=We(E),T=We(T),A=We(A)):(M=f,A=h,E=T=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=ls(d,"x",a,"px"),v=ls(d,"y",o,"px")),(p||_||g||m)&&(x=We(x+p-(p*M+_*T)+g),v=We(v+_-(p*E+_*A)+m)),(r||s)&&(y=d.getBBox(),x=We(x+r/100*y.width),v=We(v+s/100*y.height)),y="matrix("+M+","+E+","+T+","+A+","+x+","+v+")",d.setAttribute("transform",y),S&&(d.style[ke]=y)},sM=function(t,e,n,r,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?bs:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Am)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Am)%a-~~(c/a)*a)),t._pt=h=new Zn(t._pt,e,n,r,c,VS),h.e=u,h.u="deg",t._props.push(n),h},Im=function(t,e){for(var n in e)t[n]=e[n];return t},aM=function(t,e,n){var r=Im({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,p;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ke]=e,o=ol(n,1),os(n,ke),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ke],a[ke]=e,o=ol(n,1),a[ke]=c);for(l in Lr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=yn(c),p=yn(u),f=d!==p?ls(n,l,c,p):parseFloat(c),h=parseFloat(u),t._pt=new Zn(t._pt,o,l,f,h-f,yh),t._pt.u=p||0,t._props.push(l));Im(o,r)};qn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});Kc[t>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(p){return yr(o,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var ox={name:"css",register:Mh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,p,_,g,m,S,x,v,M,E,T,A,y;Cp||Mh(),this.styles=this.styles||tx(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(li[_]&&G_(_,e,n,r,t,s)))){if(d=typeof u,p=Kc[_],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=il(u)),p)p(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",is.lastIndex=0,is.test(c)||(g=yn(c),m=yn(u),m?g!==m&&(c=ls(t,_,c,m)+m):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),A.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],un(c)&&~c.indexOf("random(")&&(c=il(c)),yn(c+"")||c==="auto"||(c+=mi.units[_]||yn(yr(t,_))||""),(c+"").charAt(1)==="="&&(c=yr(t,_))):c=yr(t,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in tr&&(_==="autoAlpha"&&(h===1&&yr(t,"visibility")==="hidden"&&f&&(h=0),A.push("visibility",0,o.visibility),Jr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=tr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Lr,x){if(this.styles.save(_),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=di(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=di(t,"perspective"),b?t.style.perspective=b:os(t,"perspective")}f=parseFloat(u)}if(v||(M=t._gsap,M.renderTransform&&!e.parseTransform||ol(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new Zn(this._pt,o,ke,0,1,M.renderTransform,M,0,-1),v.dep=1),_==="scale")this._pt=new Zn(this._pt,M,"scaleY",M.scaleY,(S?Ra(M.scaleY,S+f):f)-M.scaleY||0,yh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(Kn,0,o[Kn]),u=eM(u),M.svg?Eh(t,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&Jr(this,M,"zOrigin",M.zOrigin,m),Jr(this,o,_,jc(c),jc(u)));continue}else if(_==="svgOrigin"){Eh(t,u,1,E,0,this);continue}else if(_ in rx){sM(this,M,_,h,S?Ra(h,S+u):u);continue}else if(_==="smoothOrigin"){Jr(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){aM(this,u,t);continue}}else _ in o||(_=Xa(_)||_);if(x||(f||f===0)&&(h||h===0)&&!zS.test(u)&&_ in o)g=(c+"").substr((h+"").length),f||(f=0),m=yn(u)||(_ in mi.units?mi.units[_]:g),g!==m&&(h=ls(t,_,c,m)),this._pt=new Zn(this._pt,x?M:o,_,h,(S?Ra(h,S+f):f)-h,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?WS:yh),this._pt.u=m||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=GS):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=HS);else if(_ in o)tM.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,r,s);else if(_!=="parseTransform"){xp(_,u);continue}x||(_ in o?A.push(_,0,o[_]):typeof t[_]=="function"?A.push(_,2,t[_]()):A.push(_,1,c||t[_])),a.push(_)}}T&&Z_(this)},render:function(t,e){if(e.tween._time||!Rp())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:yr,aliases:tr,getSetter:function(t,e,n){var r=tr[e];return r&&r.indexOf(",")<0&&(e=r),e in Lr&&e!==Kn&&(t._gsap.x||yr(t,"x"))?n&&wm===n?e==="scale"?qS:YS:(wm=n||{})&&(e==="scale"?ZS:KS):t.style&&!mp(t.style[e])?XS:~e.indexOf("-")?$S:wp(t,e)},core:{_removeProperty:os,_getMatrix:Dp}};ti.utils.checkPrefix=Xa;ti.core.getStyleSaver=tx;(function(i,t,e,n){var r=qn(i+","+t+","+e,function(s){Lr[s]=1});qn(t,function(s){mi.units[s]="deg",rx[s]=1}),tr[r[13]]=i+","+t,qn(n,function(s){var a=s.split(":");tr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){mi.units[i]="px"});ti.registerPlugin(ox);var Jc=ti.registerPlugin(ox)||ti;Jc.core.Tween;function oM(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function lM(i,t,e){return t&&oM(i.prototype,t),i}var fn,wc,fi,Qr,ts,La,lx,Ts,Wo,cx,Tr,Ui,ux,fx=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},hx=1,ba=[],se=[],rr=[],Xo=Date.now,bh=function(t,e){return e},cM=function(){var t=Wo.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,se),r.push.apply(r,rr),se=n,rr=r,bh=function(a,o){return e[a](o)}},rs=function(t,e){return~rr.indexOf(t)&&rr[rr.indexOf(t)+1][e]},$o=function(t){return!!~cx.indexOf(t)},An=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},wn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Cl="scrollLeft",Rl="scrollTop",Th=function(){return Tr&&Tr.isPressed||se.cache++},Qc=function(t,e){var n=function r(s){if(s||s===0){hx&&(fi.history.scrollRestoration="manual");var a=Tr&&Tr.isPressed;s=r.v=Math.round(s)||(Tr&&Tr.iOS?1:0),t(s),r.cacheID=se.cache,a&&bh("ss",s)}else(e||se.cache!==r.cacheID||bh("ref"))&&(r.cacheID=se.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},On={s:Cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Qc(function(i){return arguments.length?fi.scrollTo(i,en.sc()):fi.pageXOffset||Qr[Cl]||ts[Cl]||La[Cl]||0})},en={s:Rl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:Qc(function(i){return arguments.length?fi.scrollTo(On.sc(),i):fi.pageYOffset||Qr[Rl]||ts[Rl]||La[Rl]||0})},Xn=function(t,e){return(e&&e._ctx&&e._ctx.selector||fn.utils.toArray)(t)[0]||(typeof t=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},uM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},cs=function(t,e){var n=e.s,r=e.sc;$o(t)&&(t=Qr.scrollingElement||ts);var s=se.indexOf(t),a=r===en.sc?1:2;!~s&&(s=se.push(t)-1),se[s+a]||An(t,"scroll",Th);var o=se[s+a],l=o||(se[s+a]=Qc(rs(t,n),!0)||($o(t)?r:Qc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=fn.getProperty(t,"scrollBehavior")==="smooth"),l},wh=function(t,e,n){var r=t,s=t,a=Xo(),o=a,l=e||50,c=Math.max(500,l*3),u=function(p,_){var g=Xo();_||g-a>l?(s=r,r=p,o=a,a=g):n?r+=p:r=s+(p-s)/(g-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},h=function(p){var _=o,g=s,m=Xo();return(p||p===0)&&p!==r&&u(p),a===o||m-o>c?0:(r+(n?g:-g))/((n?m:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},uo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Fm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},dx=function(){Wo=fn.core.globals().ScrollTrigger,Wo&&Wo.core&&cM()},px=function(t){return fn=t||fx(),!wc&&fn&&typeof document<"u"&&document.body&&(fi=window,Qr=document,ts=Qr.documentElement,La=Qr.body,cx=[fi,Qr,ts,La],fn.utils.clamp,ux=fn.core.context||function(){},Ts="onpointerenter"in La?"pointer":"mouse",lx=$e.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=$e.eventTypes=("ontouchstart"in ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return hx=0},500),dx(),wc=1),wc};On.op=en;se.cache=0;var $e=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){wc||px(fn)||console.warn("Please gsap.registerPlugin(Observer)"),Wo||dx();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,S=n.onDrag,x=n.onPress,v=n.onRelease,M=n.onRight,E=n.onLeft,T=n.onUp,A=n.onDown,y=n.onChangeX,b=n.onChangeY,R=n.onChange,D=n.onToggleX,I=n.onToggleY,O=n.onHover,F=n.onHoverEnd,z=n.onMove,U=n.ignoreCheck,H=n.isNormalizer,K=n.onGestureStart,L=n.onGestureEnd,j=n.onWheel,Mt=n.onEnable,bt=n.onDisable,Lt=n.onClick,At=n.scrollSpeed,q=n.capture,tt=n.allowClicks,ut=n.lockAxis,Ct=n.onLockAxis;this.target=o=Xn(o)||ts,this.vars=n,d&&(d=fn.utils.toArray(d)),r=r||1e-9,s=s||0,p=p||1,At=At||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(La).lineHeight)||22);var pt,Ft,ae,xt,zt,Yt,Bt,W=this,N=0,Nt=0,Ut=n.passive||!u&&n.passive!==!1,Vt=cs(o,On),st=cs(o,en),P=Vt(),w=st(),k=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ui[0]==="pointerdown",J=$o(o),Q=o.ownerDocument||Qr,Z=[0,0,0],Et=[0,0,0],at=0,Rt=function(){return at=Xo()},wt=function(It,jt){return(W.event=It)&&d&&uM(It.target,d)||jt&&k&&It.pointerType!=="touch"||U&&U(It,jt)},rt=function(){W._vx.reset(),W._vy.reset(),Ft.pause(),f&&f(W)},ot=function(){var It=W.deltaX=Fm(Z),jt=W.deltaY=Fm(Et),gt=Math.abs(It)>=r,qt=Math.abs(jt)>=r;R&&(gt||qt)&&R(W,It,jt,Z,Et),gt&&(M&&W.deltaX>0&&M(W),E&&W.deltaX<0&&E(W),y&&y(W),D&&W.deltaX<0!=N<0&&D(W),N=W.deltaX,Z[0]=Z[1]=Z[2]=0),qt&&(A&&W.deltaY>0&&A(W),T&&W.deltaY<0&&T(W),b&&b(W),I&&W.deltaY<0!=Nt<0&&I(W),Nt=W.deltaY,Et[0]=Et[1]=Et[2]=0),(xt||ae)&&(z&&z(W),ae&&(g&&ae===1&&g(W),S&&S(W),ae=0),xt=!1),Yt&&!(Yt=!1)&&Ct&&Ct(W),zt&&(j(W),zt=!1),pt=0},Tt=function(It,jt,gt){Z[gt]+=It,Et[gt]+=jt,W._vx.update(It),W._vy.update(jt),c?pt||(pt=requestAnimationFrame(ot)):ot()},Pt=function(It,jt){ut&&!Bt&&(W.axis=Bt=Math.abs(It)>Math.abs(jt)?"x":"y",Yt=!0),Bt!=="y"&&(Z[2]+=It,W._vx.update(It,!0)),Bt!=="x"&&(Et[2]+=jt,W._vy.update(jt,!0)),c?pt||(pt=requestAnimationFrame(ot)):ot()},lt=function(It){if(!wt(It,1)){It=uo(It,u);var jt=It.clientX,gt=It.clientY,qt=jt-W.x,kt=gt-W.y,Zt=W.isDragging;W.x=jt,W.y=gt,(Zt||(qt||kt)&&(Math.abs(W.startX-jt)>=s||Math.abs(W.startY-gt)>=s))&&(ae||(ae=Zt?2:1),Zt||(W.isDragging=!0),Pt(qt,kt))}},$t=W.onPress=function(vt){wt(vt,1)||vt&&vt.button||(W.axis=Bt=null,Ft.pause(),W.isPressed=!0,vt=uo(vt),N=Nt=0,W.startX=W.x=vt.clientX,W.startY=W.y=vt.clientY,W._vx.reset(),W._vy.reset(),An(H?o:Q,Ui[1],lt,Ut,!0),W.deltaX=W.deltaY=0,x&&x(W))},B=W.onRelease=function(vt){if(!wt(vt,1)){wn(H?o:Q,Ui[1],lt,!0);var It=!isNaN(W.y-W.startY),jt=W.isDragging,gt=jt&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),qt=uo(vt);!gt&&It&&(W._vx.reset(),W._vy.reset(),u&&tt&&fn.delayedCall(.08,function(){if(Xo()-at>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(Q.createEvent){var kt=Q.createEvent("MouseEvents");kt.initMouseEvent("click",!0,!0,fi,1,qt.screenX,qt.screenY,qt.clientX,qt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(kt)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&jt&&!H&&Ft.restart(!0),ae&&ot(),m&&jt&&m(W),v&&v(W,gt)}},ht=function(It){return It.touches&&It.touches.length>1&&(W.isGesturing=!0)&&K(It,W.isDragging)},it=function(){return(W.isGesturing=!1)||L(W)},dt=function(It){if(!wt(It)){var jt=Vt(),gt=st();Tt((jt-P)*At,(gt-w)*At,1),P=jt,w=gt,f&&Ft.restart(!0)}},nt=function(It){if(!wt(It)){It=uo(It,u),j&&(zt=!0);var jt=(It.deltaMode===1?l:It.deltaMode===2?fi.innerHeight:1)*p;Tt(It.deltaX*jt,It.deltaY*jt,0),f&&!H&&Ft.restart(!0)}},et=function(It){if(!wt(It)){var jt=It.clientX,gt=It.clientY,qt=jt-W.x,kt=gt-W.y;W.x=jt,W.y=gt,xt=!0,f&&Ft.restart(!0),(qt||kt)&&Pt(qt,kt)}},ft=function(It){W.event=It,O(W)},Ht=function(It){W.event=It,F(W)},me=function(It){return wt(It)||uo(It,u)&&Lt(W)};Ft=W._dc=fn.delayedCall(h||.25,rt).pause(),W.deltaX=W.deltaY=0,W._vx=wh(0,50,!0),W._vy=wh(0,50,!0),W.scrollX=Vt,W.scrollY=st,W.isDragging=W.isGesturing=W.isPressed=!1,ux(this),W.enable=function(vt){return W.isEnabled||(An(J?Q:o,"scroll",Th),a.indexOf("scroll")>=0&&An(J?Q:o,"scroll",dt,Ut,q),a.indexOf("wheel")>=0&&An(o,"wheel",nt,Ut,q),(a.indexOf("touch")>=0&&lx||a.indexOf("pointer")>=0)&&(An(o,Ui[0],$t,Ut,q),An(Q,Ui[2],B),An(Q,Ui[3],B),tt&&An(o,"click",Rt,!0,!0),Lt&&An(o,"click",me),K&&An(Q,"gesturestart",ht),L&&An(Q,"gestureend",it),O&&An(o,Ts+"enter",ft),F&&An(o,Ts+"leave",Ht),z&&An(o,Ts+"move",et)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=xt=ae=!1,W._vx.reset(),W._vy.reset(),P=Vt(),w=st(),vt&&vt.type&&$t(vt),Mt&&Mt(W)),W},W.disable=function(){W.isEnabled&&(ba.filter(function(vt){return vt!==W&&$o(vt.target)}).length||wn(J?Q:o,"scroll",Th),W.isPressed&&(W._vx.reset(),W._vy.reset(),wn(H?o:Q,Ui[1],lt,!0)),wn(J?Q:o,"scroll",dt,q),wn(o,"wheel",nt,q),wn(o,Ui[0],$t,q),wn(Q,Ui[2],B),wn(Q,Ui[3],B),wn(o,"click",Rt,!0),wn(o,"click",me),wn(Q,"gesturestart",ht),wn(Q,"gestureend",it),wn(o,Ts+"enter",ft),wn(o,Ts+"leave",Ht),wn(o,Ts+"move",et),W.isEnabled=W.isPressed=W.isDragging=!1,bt&&bt(W))},W.kill=W.revert=function(){W.disable();var vt=ba.indexOf(W);vt>=0&&ba.splice(vt,1),Tr===W&&(Tr=0)},ba.push(W),H&&$o(o)&&(Tr=W),W.enable(_)},lM(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();$e.version="3.14.2";$e.create=function(i){return new $e(i)};$e.register=px;$e.getAll=function(){return ba.slice()};$e.getById=function(i){return ba.filter(function(t){return t.vars.id===i})[0]};fx()&&fn.registerPlugin($e);var Dt,ya,re,Ne,ci,ve,Lp,tu,ll,Yo,bo,Pl,xn,ku,Ah,Pn,Um,Om,Sa,mx,cf,gx,Rn,Ch,_x,xx,Yr,Rh,Np,Na,Ip,qo,Ph,uf,Dl=1,vn=Date.now,ff=vn(),Di=0,To=0,Bm=function(t,e,n){var r=oi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},km=function(t,e){return e&&(!oi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},fM=function i(){return To&&requestAnimationFrame(i)},zm=function(){return ku=1},Vm=function(){return ku=0},qi=function(t){return t},wo=function(t){return Math.round(t*1e5)/1e5||0},vx=function(){return typeof window<"u"},yx=function(){return Dt||vx()&&(Dt=window.gsap)&&Dt.registerPlugin&&Dt},$s=function(t){return!!~Lp.indexOf(t)},Sx=function(t){return(t==="Height"?Ip:re["inner"+t])||ci["client"+t]||ve["client"+t]},Mx=function(t){return rs(t,"getBoundingClientRect")||($s(t)?function(){return Dc.width=re.innerWidth,Dc.height=Ip,Dc}:function(){return Sr(t)})},hM=function(t,e,n){var r=n.d,s=n.d2,a=n.a;return(a=rs(t,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(e?Sx(s):t["client"+s])||0}},dM=function(t,e){return!e||~rr.indexOf(t)?Mx(t):function(){return Dc}},er=function(t,e){var n=e.s,r=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+r)&&(a=rs(t,n))?a()-Mx(t)()[s]:$s(t)?(ci[n]||ve[n])-Sx(r):t[n]-t["offset"+r])},Ll=function(t,e){for(var n=0;n<Sa.length;n+=3)(!e||~e.indexOf(Sa[n+1]))&&t(Sa[n],Sa[n+1],Sa[n+2])},oi=function(t){return typeof t=="string"},Sn=function(t){return typeof t=="function"},Ao=function(t){return typeof t=="number"},ws=function(t){return typeof t=="object"},fo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},hf=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ra=Math.abs,Ex="left",bx="top",Fp="right",Up="bottom",Vs="width",Hs="height",Zo="Right",Ko="Left",jo="Top",Jo="Bottom",Ke="padding",bi="margin",$a="Width",Op="Height",tn="px",Ti=function(t){return re.getComputedStyle(t)},pM=function(t){var e=Ti(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Hm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Sr=function(t,e){var n=e&&Ti(t)[Ah]!=="matrix(1, 0, 0, 1, 0, 0)"&&Dt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},eu=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Tx=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},mM=function(t){return function(e){return Dt.utils.snap(Tx(t),e)}},Bp=function(t){var e=Dt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return e(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=e(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:e(s<0?r-t:r+t)}},gM=function(t){return function(e,n){return Bp(Tx(t))(e,n.direction)}},Nl=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},cn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},ln=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Il=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Gm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fl={toggleActions:"play",anticipatePin:0},nu={top:0,left:0,center:.5,bottom:1,right:1},Ac=function(t,e){if(oi(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in nu?nu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ul=function(t,e,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Ne.createElement("div"),_=$s(n)||rs(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?ve:n,S=t.indexOf("start")!==-1,x=S?c:u,v="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(v+=(r===en?Fp:Up)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+r.op.d2],Cc(p,0,r,S),p},Cc=function(t,e,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+$a]=1,s["border"+o+$a]=0,s[n.p]=e+"px",Dt.set(t,s)},ee=[],Dh={},cl,Wm=function(){return vn()-Di>34&&(cl||(cl=requestAnimationFrame(Ar)))},sa=function(){(!Rn||!Rn.isPressed||Rn.startX>ve.clientWidth)&&(se.cache++,Rn?cl||(cl=requestAnimationFrame(Ar)):Ar(),Di||qs("scrollStart"),Di=vn())},df=function(){xx=re.innerWidth,_x=re.innerHeight},Co=function(t){se.cache++,(t===!0||!xn&&!gx&&!Ne.fullscreenElement&&!Ne.webkitFullscreenElement&&(!Ch||xx!==re.innerWidth||Math.abs(re.innerHeight-_x)>re.innerHeight*.25))&&tu.restart(!0)},Ys={},_M=[],wx=function i(){return ln(Qt,"scrollEnd",i)||Ns(!0)},qs=function(t){return Ys[t]&&Ys[t].map(function(e){return e()})||_M},ai=[],Ax=function(t){for(var e=0;e<ai.length;e+=5)(!t||ai[e+4]&&ai[e+4].query===t)&&(ai[e].style.cssText=ai[e+1],ai[e].getBBox&&ai[e].setAttribute("transform",ai[e+2]||""),ai[e+3].uncache=1)},Cx=function(){return se.forEach(function(t){return Sn(t)&&++t.cacheID&&(t.rec=t())})},kp=function(t,e){var n;for(Pn=0;Pn<ee.length;Pn++)n=ee[Pn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));qo=!0,e&&Ax(e),e||qs("revert")},Rx=function(t,e){se.cache++,(e||!Dn)&&se.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),oi(t)&&(re.history.scrollRestoration=Np=t)},Dn,Gs=0,Xm,xM=function(){if(Xm!==Gs){var t=Xm=Gs;requestAnimationFrame(function(){return t===Gs&&Ns(!0)})}},Px=function(){ve.appendChild(Na),Ip=!Rn&&Na.offsetHeight||re.innerHeight,ve.removeChild(Na)},$m=function(t){return ll(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ns=function(t,e){if(ci=Ne.documentElement,ve=Ne.body,Lp=[re,Ne,ci,ve],Di&&!t&&!qo){cn(Qt,"scrollEnd",wx);return}Px(),Dn=Qt.isRefreshing=!0,qo||Cx();var n=qs("refreshInit");mx&&Qt.sort(),e||kp(),se.forEach(function(r){Sn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ee.slice(0).forEach(function(r){return r.refresh()}),qo=!1,ee.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Ph=1,$m(!0),ee.forEach(function(r){var s=er(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),$m(!1),Ph=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),se.forEach(function(r){Sn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Rx(Np,1),tu.pause(),Gs++,Dn=2,Ar(2),ee.forEach(function(r){return Sn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Dn=Qt.isRefreshing=!1,qs("refresh")},Lh=0,Rc=1,Qo,Ar=function(t){if(t===2||!Dn&&!qo){Qt.isUpdating=!0,Qo&&Qo.update(0);var e=ee.length,n=vn(),r=n-ff>=50,s=e&&ee[0].scroll();if(Rc=Lh>s?-1:1,Dn||(Lh=s),r&&(Di&&!ku&&n-Di>200&&(Di=0,qs("scrollEnd")),bo=ff,ff=n),Rc<0){for(Pn=e;Pn-- >0;)ee[Pn]&&ee[Pn].update(0,r);Rc=1}else for(Pn=0;Pn<e;Pn++)ee[Pn]&&ee[Pn].update(0,r);Qt.isUpdating=!1}cl=0},Nh=[Ex,bx,Up,Fp,bi+Jo,bi+Zo,bi+jo,bi+Ko,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pc=Nh.concat([Vs,Hs,"boxSizing","max"+$a,"max"+Op,"position",bi,Ke,Ke+jo,Ke+Zo,Ke+Jo,Ke+Ko]),vM=function(t,e,n){Ia(n);var r=t._gsap;if(r.spacerIsNative)Ia(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},pf=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=Nh.length,a=e.style,o=t.style,l;s--;)l=Nh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Up]=o[Fp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Vs]=eu(t,On)+tn,a[Hs]=eu(t,en)+tn,a[Ke]=o[bi]=o[bx]=o[Ex]="0",Ia(r),o[Vs]=o["max"+$a]=n[Vs],o[Hs]=o["max"+Op]=n[Hs],o[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},yM=/([A-Z])/g,Ia=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,a;for((t.t._gsap||Dt.core.getCache(t.t)).uncache=1;r<n;r+=2)a=t[r+1],s=t[r],a?e[s]=a:e[s]&&e.removeProperty(s.replace(yM,"-$1").toLowerCase())}},Ol=function(t){for(var e=Pc.length,n=t.style,r=[],s=0;s<e;s++)r.push(Pc[s],n[Pc[s]]);return r.t=t,r},SM=function(t,e,n){for(var r=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],r.push(o,o in e?e[o]:t[a+1]);return r.t=t.t,r},Dc={left:0,top:0},Ym=function(t,e,n,r,s,a,o,l,c,u,f,h,d,p){Sn(t)&&(t=t(l)),oi(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Ac("0"+t.substr(3),n):0));var _=d?d.time():0,g,m,S;if(d&&d.seek(0),isNaN(t)||(t=+t),Ao(t))d&&(t=Dt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),o&&Cc(o,n,r,!0);else{Sn(e)&&(e=e(l));var x=(t||"0").split(" "),v,M,E,T;S=Xn(e,l)||ve,v=Sr(S)||{},(!v||!v.left&&!v.top)&&Ti(S).display==="none"&&(T=S.style.display,S.style.display="block",v=Sr(S),T?S.style.display=T:S.style.removeProperty("display")),M=Ac(x[0],v[r.d]),E=Ac(x[1]||"0",n),t=v[r.p]-c[r.p]-u+M+s-E,o&&Cc(o,E,r,n-E<20||o._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),a){var A=t+n,y=a._isStart;g="scroll"+r.d2,Cc(a,A,r,y&&A>20||!y&&(f?Math.max(ve[g],ci[g]):a.parentNode[g])<=A+1),f&&(c=Sr(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+tn))}return d&&S&&(g=Sr(S),d.seek(h),m=Sr(S),d._caScrollDist=g[r.p]-m[r.p],t=t/d._caScrollDist*h),d&&d.seek(_),d?t:Math.round(t)},MM=/(webkit|moz|length|cssText|inset)/i,qm=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,a,o;if(e===ve){t._stOrig=s.cssText,o=Ti(t);for(a in o)!+a&&!MM.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=t._stOrig;Dt.core.getCache(t).uncache=1,e.appendChild(t)}},Dx=function(t,e,n){var r=e,s=r;return function(a){var o=Math.round(t());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},Bl=function(t,e,n){var r={};r[e.p]="+="+n,Dt.set(t,r)},Zm=function(t,e){var n=cs(t,e),r="_scroll"+e.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,p={};c=c||n();var _=Dx(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=p,p[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){se.cache++,a.tween&&Ar()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Dt.to(t,l),h};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),Qt.isTouch&&cn(t,"touchmove",n.wheelHandler),s},Qt=(function(){function i(e,n){ya||i.register(Dt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rh(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!To){this.update=this.refresh=this.kill=qi;return}n=Hm(oi(n)||Ao(n)||n.nodeType?{trigger:n}:n,Fl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,x=s.once,v=s.snap,M=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,A=s.fastScrollEnd,y=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:en,R=!f&&f!==0,D=Xn(n.scroller||re),I=Dt.core.getCache(D),O=$s(D),F=("pinType"in n?n.pinType:rs(D,"pinType")||O&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=R&&n.toggleActions.split(" "),H="markers"in n?n.markers:Fl.markers,K=O?0:parseFloat(Ti(D)["border"+b.p2+$a])||0,L=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Mt=hM(D,O,b),bt=dM(D,O),Lt=0,At=0,q=0,tt=cs(D,b),ut,Ct,pt,Ft,ae,xt,zt,Yt,Bt,W,N,Nt,Ut,Vt,st,P,w,k,J,Q,Z,Et,at,Rt,wt,rt,ot,Tt,Pt,lt,$t,B,ht,it,dt,nt,et,ft,Ht;if(L._startClamp=L._endClamp=!1,L._dir=b,g*=45,L.scroller=D,L.scroll=T?T.time.bind(T):tt,Ft=tt(),L.vars=n,r=r||n.animation,"refreshPriority"in n&&(mx=1,n.refreshPriority===-9999&&(Qo=L)),I.tweenScroll=I.tweenScroll||{top:Zm(D,en),left:Zm(D,On)},L.tweenTo=ut=I.tweenScroll[b.p],L.scrubDuration=function(gt){ht=Ao(gt)&&gt,ht?B?B.duration(gt):B=Dt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return m&&m(L)}}):(B&&B.progress(1).kill(),B=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(f),lt=0,l||(l=r.vars.id)),v&&((!ws(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ve.style&&Dt.set(O?[ve,ci]:D,{scrollBehavior:"auto"}),se.forEach(function(gt){return Sn(gt)&&gt.target===(O?Ne.scrollingElement||ci:D)&&(gt.smooth=!1)}),pt=Sn(v.snapTo)?v.snapTo:v.snapTo==="labels"?mM(r):v.snapTo==="labelsDirectional"?gM(r):v.directional!==!1?function(gt,qt){return Bp(v.snapTo)(gt,vn()-At<500?0:qt.direction)}:Dt.utils.snap(v.snapTo),it=v.duration||{min:.1,max:2},it=ws(it)?Yo(it.min,it.max):Yo(it,it),dt=Dt.delayedCall(v.delay||ht/2||.1,function(){var gt=tt(),qt=vn()-At<500,kt=ut.tween;if((qt||Math.abs(L.getVelocity())<10)&&!kt&&!ku&&Lt!==gt){var Zt=(gt-xt)/Vt,Ge=r&&!R?r.totalProgress():Zt,ne=qt?0:(Ge-$t)/(vn()-bo)*1e3||0,Me=Dt.utils.clamp(-Zt,1-Zt,ra(ne/2)*ne/.185),qe=Zt+(v.inertia===!1?0:Me),Ie,Ce,ge=v,kn=ge.onStart,Te=ge.onInterrupt,pn=ge.onComplete;if(Ie=pt(qe,L),Ao(Ie)||(Ie=qe),Ce=Math.max(0,Math.round(xt+Ie*Vt)),gt<=zt&&gt>=xt&&Ce!==gt){if(kt&&!kt._initted&&kt.data<=ra(Ce-gt))return;v.inertia===!1&&(Me=Ie-Zt),ut(Ce,{duration:it(ra(Math.max(ra(qe-Ge),ra(Ie-Ge))*.185/ne/.05||0)),ease:v.ease||"power3",data:ra(Ce-gt),onInterrupt:function(){return dt.restart(!0)&&Te&&Te(L)},onComplete:function(){L.update(),Lt=tt(),r&&!R&&(B?B.resetTo("totalProgress",Ie,r._tTime/r._tDur):r.progress(Ie)),lt=$t=r&&!R?r.totalProgress():L.progress,S&&S(L),pn&&pn(L)}},gt,Me*Vt,Ce-gt-Me*Vt),kn&&kn(L,ut.tween)}}else L.isActive&&Lt!==gt&&dt.restart(!0)}).pause()),l&&(Dh[l]=L),h=L.trigger=Xn(h||d!==!0&&d),Ht=h&&h._gsap&&h._gsap.stRevert,Ht&&(Ht=Ht(L)),d=d===!0?h:Xn(d),oi(o)&&(o={targets:h,className:o}),d&&(p===!1||p===bi||(p=!p&&d.parentNode&&d.parentNode.style&&Ti(d.parentNode).display==="flex"?!1:Ke),L.pin=d,Ct=Dt.core.getCache(d),Ct.spacer?st=Ct.pinState:(E&&(E=Xn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ct.spacerIsNative=!!E,E&&(Ct.spacerState=Ol(E))),Ct.spacer=k=E||Ne.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),Ct.pinState=st=Ol(d)),n.force3D!==!1&&Dt.set(d,{force3D:!0}),L.spacer=k=Ct.spacer,Pt=Ti(d),Rt=Pt[p+b.os2],Q=Dt.getProperty(d),Z=Dt.quickSetter(d,b.a,tn),pf(d,k,Pt),w=Ol(d)),H){Nt=ws(H)?Hm(H,Gm):Gm,W=Ul("scroller-start",l,D,b,Nt,0),N=Ul("scroller-end",l,D,b,Nt,0,W),J=W["offset"+b.op.d2];var me=Xn(rs(D,"content")||D);Yt=this.markerStart=Ul("start",l,me,b,Nt,J,0,T),Bt=this.markerEnd=Ul("end",l,me,b,Nt,J,0,T),T&&(ft=Dt.quickSetter([Yt,Bt],b.a,tn)),!F&&!(rr.length&&rs(D,"fixedMarkers")===!0)&&(pM(O?ve:D),Dt.set([W,N],{force3D:!0}),rt=Dt.quickSetter(W,b.a,tn),Tt=Dt.quickSetter(N,b.a,tn))}if(T){var vt=T.vars.onUpdate,It=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),vt&&vt.apply(T,It||[])})}if(L.previous=function(){return ee[ee.indexOf(L)-1]},L.next=function(){return ee[ee.indexOf(L)+1]},L.revert=function(gt,qt){if(!qt)return L.kill(!0);var kt=gt!==!1||!L.enabled,Zt=xn;kt!==L.isReverted&&(kt&&(nt=Math.max(tt(),L.scroll.rec||0),q=L.progress,et=r&&r.progress()),Yt&&[Yt,Bt,W,N].forEach(function(Ge){return Ge.style.display=kt?"none":"block"}),kt&&(xn=L,L.update(kt)),d&&(!M||!L.isActive)&&(kt?vM(d,k,st):pf(d,k,Ti(d),wt)),kt||L.update(kt),xn=Zt,L.isReverted=kt)},L.refresh=function(gt,qt,kt,Zt){if(!((xn||!L.enabled)&&!qt)){if(d&&gt&&Di){cn(i,"scrollEnd",wx);return}!Dn&&j&&j(L),xn=L,ut.tween&&!kt&&(ut.tween.kill(),ut.tween=0),B&&B.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(St){return St.vars.immediateRender&&St.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ge=Mt(),ne=bt(),Me=T?T.duration():er(D,b),qe=Vt<=.01||!Vt,Ie=0,Ce=Zt||0,ge=ws(kt)?kt.end:n.end,kn=n.endTrigger||h,Te=ws(kt)?kt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),pn=L.pinnedContainer=n.pinnedContainer&&Xn(n.pinnedContainer,L),ei=h&&Math.max(0,ee.indexOf(L))||0,Je=ei,Qe,sn,hr,ea,an,C,V,Y,X,G,ct,yt,mt;for(H&&ws(kt)&&(yt=Dt.getProperty(W,b.p),mt=Dt.getProperty(N,b.p));Je-- >0;)C=ee[Je],C.end||C.refresh(0,1)||(xn=L),V=C.pin,V&&(V===h||V===d||V===pn)&&!C.isReverted&&(G||(G=[]),G.unshift(C),C.revert(!0,!0)),C!==ee[Je]&&(ei--,Je--);for(Sn(Te)&&(Te=Te(L)),Te=Bm(Te,"start",L),xt=Ym(Te,h,Ge,b,tt(),Yt,W,L,ne,K,F,Me,T,L._startClamp&&"_startClamp")||(d?-.001:0),Sn(ge)&&(ge=ge(L)),oi(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(oi(Te)?Te.split(" ")[0]:"")+ge:(Ie=Ac(ge.substr(2),Ge),ge=oi(Te)?Te:(T?Dt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,xt):xt)+Ie,kn=h)),ge=Bm(ge,"end",L),zt=Math.max(xt,Ym(ge||(kn?"100% 0":Me),kn,Ge,b,tt()+Ie,Bt,N,L,ne,K,F,Me,T,L._endClamp&&"_endClamp"))||-.001,Ie=0,Je=ei;Je--;)C=ee[Je]||{},V=C.pin,V&&C.start-C._pinPush<=xt&&!T&&C.end>0&&(Qe=C.end-(L._startClamp?Math.max(0,C.start):C.start),(V===h&&C.start-C._pinPush<xt||V===pn)&&isNaN(Te)&&(Ie+=Qe*(1-C.progress)),V===d&&(Ce+=Qe));if(xt+=Ie,zt+=Ie,L._startClamp&&(L._startClamp+=Ie),L._endClamp&&!Dn&&(L._endClamp=zt||-.001,zt=Math.min(zt,er(D,b))),Vt=zt-xt||(xt-=.01)&&.001,qe&&(q=Dt.utils.clamp(0,1,Dt.utils.normalize(xt,zt,nt))),L._pinPush=Ce,Yt&&Ie&&(Qe={},Qe[b.a]="+="+Ie,pn&&(Qe[b.p]="-="+tt()),Dt.set([Yt,Bt],Qe)),d&&!(Ph&&L.end>=er(D,b)))Qe=Ti(d),ea=b===en,hr=tt(),Et=parseFloat(Q(b.a))+Ce,!Me&&zt>1&&(ct=(O?Ne.scrollingElement||ci:D).style,ct={style:ct,value:ct["overflow"+b.a.toUpperCase()]},O&&Ti(ve)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+b.a.toUpperCase()]="scroll")),pf(d,k,Qe),w=Ol(d),sn=Sr(d,!0),Y=F&&cs(D,ea?On:en)(),p?(wt=[p+b.os2,Vt+Ce+tn],wt.t=k,Je=p===Ke?eu(d,b)+Vt+Ce:0,Je&&(wt.push(b.d,Je+tn),k.style.flexBasis!=="auto"&&(k.style.flexBasis=Je+tn)),Ia(wt),pn&&ee.forEach(function(St){St.pin===pn&&St.vars.pinSpacing!==!1&&(St._subPinOffset=!0)}),F&&tt(nt)):(Je=eu(d,b),Je&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=Je+tn)),F&&(an={top:sn.top+(ea?hr-xt:Y)+tn,left:sn.left+(ea?Y:hr-xt)+tn,boxSizing:"border-box",position:"fixed"},an[Vs]=an["max"+$a]=Math.ceil(sn.width)+tn,an[Hs]=an["max"+Op]=Math.ceil(sn.height)+tn,an[bi]=an[bi+jo]=an[bi+Zo]=an[bi+Jo]=an[bi+Ko]="0",an[Ke]=Qe[Ke],an[Ke+jo]=Qe[Ke+jo],an[Ke+Zo]=Qe[Ke+Zo],an[Ke+Jo]=Qe[Ke+Jo],an[Ke+Ko]=Qe[Ke+Ko],P=SM(st,an,M),Dn&&tt(0)),r?(X=r._initted,cf(1),r.render(r.duration(),!0,!0),at=Q(b.a)-Et+Vt+Ce,ot=Math.abs(Vt-at)>1,F&&ot&&P.splice(P.length-2,2),r.render(0,!0,!0),X||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),cf(0)):at=Vt,ct&&(ct.value?ct.style["overflow"+b.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+b.a));else if(h&&tt()&&!T)for(sn=h.parentNode;sn&&sn!==ve;)sn._pinOffset&&(xt-=sn._pinOffset,zt-=sn._pinOffset),sn=sn.parentNode;G&&G.forEach(function(St){return St.revert(!1,!0)}),L.start=xt,L.end=zt,Ft=ae=Dn?nt:tt(),!T&&!Dn&&(Ft<nt&&tt(nt),L.scroll.rec=0),L.revert(!1,!0),At=vn(),dt&&(Lt=-1,dt.restart(!0)),xn=0,r&&R&&(r._initted||et)&&r.progress()!==et&&r.progress(et||0,!0).render(r.time(),!0,!0),(qe||q!==L.progress||T||_||r&&!r._initted)&&(r&&!R&&(r._initted||q||r.vars.immediateRender!==!1)&&r.totalProgress(T&&xt<-.001&&!q?Dt.utils.normalize(xt,zt,0):q,!0),L.progress=qe||(Ft-xt)/Vt===q?0:q),d&&p&&(k._pinOffset=Math.round(L.progress*at)),B&&B.invalidate(),isNaN(yt)||(yt-=Dt.getProperty(W,b.p),mt-=Dt.getProperty(N,b.p),Bl(W,b,yt),Bl(Yt,b,yt-(Zt||0)),Bl(N,b,mt),Bl(Bt,b,mt-(Zt||0))),qe&&!Dn&&L.update(),u&&!Dn&&!Ut&&(Ut=!0,u(L),Ut=!1)}},L.getVelocity=function(){return(tt()-ae)/(vn()-bo)*1e3||0},L.endAnimation=function(){fo(L.callbackAnimation),r&&(B?B.progress(1):r.paused()?R||fo(r,L.direction<0,1):fo(r,r.reversed()))},L.labelToScroll=function(gt){return r&&r.labels&&(xt||L.refresh()||xt)+r.labels[gt]/r.duration()*Vt||0},L.getTrailing=function(gt){var qt=ee.indexOf(L),kt=L.direction>0?ee.slice(0,qt).reverse():ee.slice(qt+1);return(oi(gt)?kt.filter(function(Zt){return Zt.vars.preventOverlaps===gt}):kt).filter(function(Zt){return L.direction>0?Zt.end<=xt:Zt.start>=zt})},L.update=function(gt,qt,kt){if(!(T&&!kt&&!gt)){var Zt=Dn===!0?nt:L.scroll(),Ge=gt?0:(Zt-xt)/Vt,ne=Ge<0?0:Ge>1?1:Ge||0,Me=L.progress,qe,Ie,Ce,ge,kn,Te,pn,ei;if(qt&&(ae=Ft,Ft=T?tt():Zt,v&&($t=lt,lt=r&&!R?r.totalProgress():ne)),g&&d&&!xn&&!Dl&&Di&&(!ne&&xt<Zt+(Zt-ae)/(vn()-bo)*g?ne=1e-4:ne===1&&zt>Zt+(Zt-ae)/(vn()-bo)*g&&(ne=.9999)),ne!==Me&&L.enabled){if(qe=L.isActive=!!ne&&ne<1,Ie=!!Me&&Me<1,Te=qe!==Ie,kn=Te||!!ne!=!!Me,L.direction=ne>Me?1:-1,L.progress=ne,kn&&!xn&&(Ce=ne&&!Me?0:ne===1?1:Me===1?2:3,R&&(ge=!Te&&U[Ce+1]!=="none"&&U[Ce+1]||U[Ce],ei=r&&(ge==="complete"||ge==="reset"||ge in r))),y&&(Te||ei)&&(ei||f||!r)&&(Sn(y)?y(L):L.getTrailing(y).forEach(function(hr){return hr.endAnimation()})),R||(B&&!xn&&!Dl?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",ne,r._tTime/r._tDur):(B.vars.totalProgress=ne,B.invalidate().restart())):r&&r.totalProgress(ne,!!(xn&&(At||gt)))),d){if(gt&&p&&(k.style[p+b.os2]=Rt),!F)Z(wo(Et+at*ne));else if(kn){if(pn=!gt&&ne>Me&&zt+1>Zt&&Zt+1>=er(D,b),M)if(!gt&&(qe||pn)){var Je=Sr(d,!0),Qe=Zt-xt;qm(d,ve,Je.top+(b===en?Qe:0)+tn,Je.left+(b===en?0:Qe)+tn)}else qm(d,k);Ia(qe||pn?P:w),ot&&ne<1&&qe||Z(Et+(ne===1&&!pn?at:0))}}v&&!ut.tween&&!xn&&!Dl&&dt.restart(!0),o&&(Te||x&&ne&&(ne<1||!uf))&&ll(o.targets).forEach(function(hr){return hr.classList[qe||x?"add":"remove"](o.className)}),a&&!R&&!gt&&a(L),kn&&!xn?(R&&(ei&&(ge==="complete"?r.pause().totalProgress(1):ge==="reset"?r.restart(!0).pause():ge==="restart"?r.restart(!0):r[ge]()),a&&a(L)),(Te||!uf)&&(c&&Te&&hf(L,c),z[Ce]&&hf(L,z[Ce]),x&&(ne===1?L.kill(!1,1):z[Ce]=0),Te||(Ce=ne===1?1:3,z[Ce]&&hf(L,z[Ce]))),A&&!qe&&Math.abs(L.getVelocity())>(Ao(A)?A:2500)&&(fo(L.callbackAnimation),B?B.progress(1):fo(r,ge==="reverse"?1:!ne,1))):R&&a&&!xn&&a(L)}if(Tt){var sn=T?Zt/T.duration()*(T._caScrollDist||0):Zt;rt(sn+(W._isFlipped?1:0)),Tt(sn)}ft&&ft(-Zt/T.duration()*(T._caScrollDist||0))}},L.enable=function(gt,qt){L.enabled||(L.enabled=!0,cn(D,"resize",Co),O||cn(D,"scroll",sa),j&&cn(i,"refreshInit",j),gt!==!1&&(L.progress=q=0,Ft=ae=Lt=tt()),qt!==!1&&L.refresh())},L.getTween=function(gt){return gt&&ut?ut.tween:B},L.setPositions=function(gt,qt,kt,Zt){if(T){var Ge=T.scrollTrigger,ne=T.duration(),Me=Ge.end-Ge.start;gt=Ge.start+Me*gt/ne,qt=Ge.start+Me*qt/ne}L.refresh(!1,!1,{start:km(gt,kt&&!!L._startClamp),end:km(qt,kt&&!!L._endClamp)},Zt),L.update()},L.adjustPinSpacing=function(gt){if(wt&&gt){var qt=wt.indexOf(b.d)+1;wt[qt]=parseFloat(wt[qt])+gt+tn,wt[1]=parseFloat(wt[1])+gt+tn,Ia(wt)}},L.disable=function(gt,qt){if(gt!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,qt||B&&B.pause(),nt=0,Ct&&(Ct.uncache=1),j&&ln(i,"refreshInit",j),dt&&(dt.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!O)){for(var kt=ee.length;kt--;)if(ee[kt].scroller===D&&ee[kt]!==L)return;ln(D,"resize",Co),O||ln(D,"scroll",sa)}},L.kill=function(gt,qt){L.disable(gt,qt),B&&!qt&&B.kill(),l&&delete Dh[l];var kt=ee.indexOf(L);kt>=0&&ee.splice(kt,1),kt===Pn&&Rc>0&&Pn--,kt=0,ee.forEach(function(Zt){return Zt.scroller===L.scroller&&(kt=1)}),kt||Dn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,gt&&r.revert({kill:!1}),qt||r.kill()),Yt&&[Yt,Bt,W,N].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),Qo===L&&(Qo=0),d&&(Ct&&(Ct.uncache=1),kt=0,ee.forEach(function(Zt){return Zt.pin===d&&kt++}),kt||(Ct.spacer=0)),n.onKill&&n.onKill(L)},ee.push(L),L.enable(!1,!1),Ht&&Ht(L),r&&r.add&&!Vt){var jt=L.update;L.update=function(){L.update=jt,se.cache++,xt||zt||L.refresh()},Dt.delayedCall(.01,L.update),Vt=.01,xt=zt=0}else L.refresh();d&&xM()},i.register=function(n){return ya||(Dt=n||yx(),vx()&&window.document&&i.enable(),ya=To),ya},i.defaults=function(n){if(n)for(var r in n)Fl[r]=n[r];return Fl},i.disable=function(n,r){To=0,ee.forEach(function(a){return a[r?"kill":"disable"](n)}),ln(re,"wheel",sa),ln(Ne,"scroll",sa),clearInterval(Pl),ln(Ne,"touchcancel",qi),ln(ve,"touchstart",qi),Nl(ln,Ne,"pointerdown,touchstart,mousedown",zm),Nl(ln,Ne,"pointerup,touchend,mouseup",Vm),tu.kill(),Ll(ln);for(var s=0;s<se.length;s+=3)Il(ln,se[s],se[s+1]),Il(ln,se[s],se[s+2])},i.enable=function(){if(re=window,Ne=document,ci=Ne.documentElement,ve=Ne.body,Dt&&(ll=Dt.utils.toArray,Yo=Dt.utils.clamp,Rh=Dt.core.context||qi,cf=Dt.core.suppressOverwrites||qi,Np=re.history.scrollRestoration||"auto",Lh=re.pageYOffset||0,Dt.core.globals("ScrollTrigger",i),ve)){To=1,Na=document.createElement("div"),Na.style.height="100vh",Na.style.position="absolute",Px(),fM(),$e.register(Dt),i.isTouch=$e.isTouch,Yr=$e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ch=$e.isTouch===1,cn(re,"wheel",sa),Lp=[re,Ne,ci,ve],Dt.matchMedia?(i.matchMedia=function(c){var u=Dt.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Dt.addEventListener("matchMediaInit",function(){Cx(),kp()}),Dt.addEventListener("matchMediaRevert",function(){return Ax()}),Dt.addEventListener("matchMedia",function(){Ns(0,1),qs("matchMedia")}),Dt.matchMedia().add("(orientation: portrait)",function(){return df(),df})):console.warn("Requires GSAP 3.11.0 or later"),df(),cn(Ne,"scroll",sa);var n=ve.hasAttribute("style"),r=ve.style,s=r.borderTopStyle,a=Dt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Sr(ve),en.m=Math.round(o.top+en.sc())||0,On.m=Math.round(o.left+On.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),Pl=setInterval(Wm,250),Dt.delayedCall(.5,function(){return Dl=0}),cn(Ne,"touchcancel",qi),cn(ve,"touchstart",qi),Nl(cn,Ne,"pointerdown,touchstart,mousedown",zm),Nl(cn,Ne,"pointerup,touchend,mouseup",Vm),Ah=Dt.utils.checkPrefix("transform"),Pc.push(Ah),ya=vn(),tu=Dt.delayedCall(.2,Ns).pause(),Sa=[Ne,"visibilitychange",function(){var c=re.innerWidth,u=re.innerHeight;Ne.hidden?(Um=c,Om=u):(Um!==c||Om!==u)&&Co()},Ne,"DOMContentLoaded",Ns,re,"load",Ns,re,"resize",Co],Ll(cn),ee.forEach(function(c){return c.enable(0,1)}),l=0;l<se.length;l+=3)Il(ln,se[l],se[l+1]),Il(ln,se[l],se[l+2])}},i.config=function(n){"limitCallbacks"in n&&(uf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Pl)||(Pl=r)&&setInterval(Wm,r),"ignoreMobileResize"in n&&(Ch=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ll(ln)||Ll(cn,n.autoRefreshEvents||"none"),gx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Xn(n),a=se.indexOf(s),o=$s(s);~a&&se.splice(a,o?6:2),r&&(o?rr.unshift(re,r,ve,r,ci,r):rr.unshift(s,r))},i.clearMatchMedia=function(n){ee.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(oi(n)?Xn(n):n).getBoundingClientRect(),o=a[s?Vs:Hs]*r||0;return s?a.right-o>0&&a.left+o<re.innerWidth:a.bottom-o>0&&a.top+o<re.innerHeight},i.positionInViewport=function(n,r,s){oi(n)&&(n=Xn(n));var a=n.getBoundingClientRect(),o=a[s?Vs:Hs],l=r==null?o/2:r in nu?nu[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/re.innerWidth:(a.top+l)/re.innerHeight},i.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ys.killAll||[];Ys={},r.forEach(function(s){return s()})}},i})();Qt.version="3.14.2";Qt.saveStyles=function(i){return i?ll(i).forEach(function(t){if(t&&t.style){var e=ai.indexOf(t);e>=0&&ai.splice(e,5),ai.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Dt.core.getCache(t),Rh())}}):ai};Qt.revert=function(i,t){return kp(!i,t)};Qt.create=function(i,t){return new Qt(i,t)};Qt.refresh=function(i){return i?Co(!0):(ya||Qt.register())&&Ns(!0)};Qt.update=function(i){return++se.cache&&Ar(i===!0?2:0)};Qt.clearScrollMemory=Rx;Qt.maxScroll=function(i,t){return er(i,t?On:en)};Qt.getScrollFunc=function(i,t){return cs(Xn(i),t?On:en)};Qt.getById=function(i){return Dh[i]};Qt.getAll=function(){return ee.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!Di};Qt.snapDirectional=Bp;Qt.addEventListener=function(i,t){var e=Ys[i]||(Ys[i]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(i,t){var e=Ys[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Dt.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Sn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Sn(s)&&(s=s(),cn(Qt,"refresh",function(){return s=t.batchMax()})),ll(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Qt.create(c))}),e};var Km=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},mf=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+($e.isTouch?" pinch-zoom":""):"none",t===ci&&i(ve,e)},kl={auto:1,scroll:1},EM=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Dt.core.getCache(s),o=vn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ve&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(kl[(l=Ti(s)).overflowY]||kl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!$s(s)&&(kl[(l=Ti(s)).overflowY]||kl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Lx=function(t,e,n,r){return $e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&EM,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&cn(Ne,$e.eventTypes[0],Jm,!1,!0)},onDisable:function(){return ln(Ne,$e.eventTypes[0],Jm,!0)}})},bM=/(input|label|select|textarea)/i,jm,Jm=function(t){var e=bM.test(t.target.tagName);(e||jm)&&(t._gsapAllow=!0,jm=e)},TM=function(t){ws(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Xn(t.target)||ci,u=Dt.core.globals().ScrollSmoother,f=u&&u.get(),h=Yr&&(t.content&&Xn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=cs(c,en),p=cs(c,On),_=1,g=($e.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,m=0,S=Sn(r)?function(){return r(o)}:function(){return r||2.8},x,v,M=Lx(c,t.type,!0,s),E=function(){return v=!1},T=qi,A=qi,y=function(){l=er(c,en),A=Yo(Yr?1:0,l),n&&(T=Yo(0,er(c,On))),x=Gs},b=function(){h._gsap.y=wo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(v){requestAnimationFrame(E);var H=wo(o.deltaY/2),K=A(d.v-H);if(h&&K!==d.v+d.offset){d.offset=K-d.v;var L=wo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=se.cache,Ar()}return!0}d.offset&&b(),v=!0},D,I,O,F,z=function(){y(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Dt.set(h,{y:"+=0"}),t.ignoreCheck=function(U){return Yr&&U.type==="touchmove"&&R()||_>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){v=!1;var U=_;_=wo((re.visualViewport&&re.visualViewport.scale||1)/g),D.pause(),U!==_&&mf(c,_>1.01?!0:n?!1:"x"),I=p(),O=d(),y(),x=Gs},t.onRelease=t.onGestureStart=function(U,H){if(d.offset&&b(),!H)F.restart(!0);else{se.cache++;var K=S(),L,j;n&&(L=p(),j=L+K*.05*-U.velocityX/.227,K*=Km(p,L,j,er(c,On)),D.vars.scrollX=T(j)),L=d(),j=L+K*.05*-U.velocityY/.227,K*=Km(d,L,j,er(c,en)),D.vars.scrollY=A(j),D.invalidate().duration(K).play(.01),(Yr&&D.vars.scrollY>=l||L>=l-1)&&Dt.to({},{onUpdate:z,duration:K})}a&&a(U)},t.onWheel=function(){D._ts&&D.pause(),vn()-m>1e3&&(x=0,m=vn())},t.onChange=function(U,H,K,L,j){if(Gs!==x&&y(),H&&n&&p(T(L[2]===H?I+(U.startX-U.x):p()+H-L[1])),K){d.offset&&b();var Mt=j[2]===K,bt=Mt?O+U.startY-U.y:d()+K-j[1],Lt=A(bt);Mt&&bt!==Lt&&(O+=Lt-bt),d(Lt)}(K||H)&&Ar()},t.onEnable=function(){mf(c,n?!1:"x"),Qt.addEventListener("refresh",z),cn(re,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){mf(c,!0),ln(re,"resize",z),Qt.removeEventListener("refresh",z),M.kill()},t.lockAxis=t.lockAxis!==!1,o=new $e(t),o.iOS=Yr,Yr&&!d()&&d(1),Yr&&Dt.ticker.add(qi),F=o._dc,D=Dt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dx(d,d(),function(){return D.pause()})},onUpdate:Ar,onComplete:F.vars.onComplete}),o};Qt.sort=function(i){if(Sn(i))return ee.sort(i);var t=re.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ee.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(i){return new $e(i)};Qt.normalizeScroll=function(i){if(typeof i>"u")return Rn;if(i===!0&&Rn)return Rn.enable();if(i===!1){Rn&&Rn.kill(),Rn=i;return}var t=i instanceof $e?i:TM(i);return Rn&&Rn.target===t.target&&Rn.kill(),$s(t.target)&&(Rn=t),t};Qt.core={_getVelocityProp:wh,_inputObserver:Lx,_scrollers:se,_proxies:rr,bridge:{ss:function(){Di||qs("scrollStart"),Di=vn()},ref:function(){return xn}}};yx()&&Dt.registerPlugin(Qt);Jc.registerPlugin(Qt);class wM{constructor({onStepEnter:t,onStepLeave:e,onProgress:n}){this.onStepEnter=t,this.onStepLeave=e,this.onProgress=n,this.lenis=null,this.triggers=[],this.progressBar=null}init(){this.initLenis(),this.initProgressBar(),this.initStepTriggers()}initLenis(){this.lenis=new Hy({lerp:.1,smoothWheel:!0}),this.lenis.on("scroll",Qt.update),Jc.ticker.add(t=>this.lenis.raf(t*1e3)),Jc.ticker.lagSmoothing(0)}initProgressBar(){const t=document.createElement("div");t.className="scroll-progress";const e=document.createElement("div");e.className="scroll-progress-bar",t.appendChild(e),document.body.appendChild(t),this.progressBar=e}initStepTriggers(){document.querySelectorAll(".step").forEach((e,n)=>{const r=Qt.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>this.onStepEnter(n,"down"),onEnterBack:()=>this.onStepEnter(n,"up"),onLeave:()=>this.onStepLeave(n,"down"),onLeaveBack:()=>this.onStepLeave(n,"up")});this.triggers.push(r)}),Qt.create({trigger:"#scroll-content",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>{this.onProgress(e.progress),this.updateProgressBar(e.progress)}})}updateProgressBar(t){this.progressBar&&(this.progressBar.style.width=`${t*100}%`)}destroy(){this.triggers.forEach(t=>t.kill()),this.triggers=[],this.lenis?.destroy(),Qt.getAll().forEach(t=>t.kill()),this.progressBar&&(this.progressBar.parentElement?.remove(),this.progressBar=null)}}const zp="182",AM=0,Qm=1,CM=2,Lc=1,RM=2,Ro=3,us=0,jn=1,Mr=2,Cr=0,Fa=1,tg=2,eg=3,ng=4,PM=5,Rs=100,DM=101,LM=102,NM=103,IM=104,FM=200,UM=201,OM=202,BM=203,Ih=204,Fh=205,kM=206,zM=207,VM=208,HM=209,GM=210,WM=211,XM=212,$M=213,YM=214,Uh=0,Oh=1,Bh=2,Ya=3,kh=4,zh=5,Vh=6,Hh=7,Nx=0,qM=1,ZM=2,sr=0,Ix=1,Fx=2,Ux=3,Ox=4,Bx=5,kx=6,zx=7,Vx=300,Zs=301,qa=302,Gh=303,Wh=304,zu=306,Xh=1e3,wr=1001,$h=1002,hn=1003,KM=1004,zl=1005,Mn=1006,gf=1007,Is=1008,Ai=1009,Hx=1010,Gx=1011,ul=1012,Vp=1013,ur=1014,nr=1015,Nr=1016,Hp=1017,Gp=1018,fl=1020,Wx=35902,Xx=35899,$x=1021,Yx=1022,zi=1023,Ir=1026,Fs=1027,qx=1028,Wp=1029,Za=1030,Xp=1031,$p=1033,Nc=33776,Ic=33777,Fc=33778,Uc=33779,Yh=35840,qh=35841,Zh=35842,Kh=35843,jh=36196,Jh=37492,Qh=37496,td=37488,ed=37489,nd=37490,id=37491,rd=37808,sd=37809,ad=37810,od=37811,ld=37812,cd=37813,ud=37814,fd=37815,hd=37816,dd=37817,pd=37818,md=37819,gd=37820,_d=37821,xd=36492,vd=36494,yd=36495,Sd=36283,Md=36284,Ed=36285,bd=36286,jM=3200,JM=0,QM=1,Zr="",Ei="srgb",Ka="srgb-linear",iu="linear",be="srgb",aa=7680,ig=519,t1=512,e1=513,n1=514,Yp=515,i1=516,r1=517,qp=518,s1=519,rg=35044,sg="300 es",ir=2e3,ru=2001;function Zx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function su(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function a1(){const i=su("canvas");return i.style.display="block",i}const ag={};function og(...i){const t="THREE."+i.shift();console.log(t,...i)}function Kt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function xe(...i){const t="THREE."+i.shift();console.error(t,...i)}function hl(...i){const t=i.join(" ");t in ag||(ag[t]=!0,Kt(...i))}function o1(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=Math.PI/180,Td=180/Math.PI;function Sl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function l1(i,t){return(i%t+t)%t}function xf(i,t,e){return(1-e)*i+e*t}function ho(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,e=0){Ae.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o>=1){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*_;g<0&&(h=-h,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),x=Math.sin(S);m=Math.sin(m*S)/x,o=Math.sin(o*S)/x,l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+_*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+_*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return t[e]=o*p+u*f+l*d-c*h,t[e+1]=l*p+u*h+c*f-o*d,t[e+2]=c*p+u*d+o*h-l*f,t[e+3]=u*p-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lg.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vf.copy(this).projectOnVector(t),this.sub(vf)}reflect(t){return this.sub(vf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new $,lg=new Ml;class Jt{constructor(t,e,n,r,s,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=r[0],g=r[3],m=r[6],S=r[1],x=r[4],v=r[7],M=r[2],E=r[5],T=r[8];return s[0]=a*_+o*S+l*M,s[3]=a*g+o*x+l*E,s[6]=a*m+o*v+l*T,s[1]=c*_+u*S+f*M,s[4]=c*g+u*x+f*E,s[7]=c*m+u*v+f*T,s[2]=h*_+d*S+p*M,s[5]=h*g+d*x+p*E,s[8]=h*m+d*v+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,p=e*f+n*h+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=f*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yf.makeScale(t,e)),this}rotate(t){return this.premultiply(yf.makeRotation(-t)),this}translate(t,e){return this.premultiply(yf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yf=new Jt,cg=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c1(){const i={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===be&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===be&&(r.r=Ua(r.r),r.g=Ua(r.g),r.b=Ua(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zr?iu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ka]:{primaries:t,whitePoint:n,transfer:iu,toXYZ:cg,fromXYZ:ug,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:n,transfer:be,toXYZ:cg,fromXYZ:ug,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),i}const de=c1();function Rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oa;class u1{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{oa===void 0&&(oa=su("canvas")),oa.width=t.width,oa.height=t.height;const r=oa.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=oa}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=su("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rr(e[n]/255)*255):e[n]=Rr(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let f1=0;class Zp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sf(r[a].image)):s.push(Sf(r[a]))}else s=Sf(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Sf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?u1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}let h1=0;const Mf=new $;class Bn extends ro{constructor(t=Bn.DEFAULT_IMAGE,e=Bn.DEFAULT_MAPPING,n=wr,r=wr,s=Mn,a=Is,o=zi,l=Ai,c=Bn.DEFAULT_ANISOTROPY,u=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=Sl(),this.name="",this.source=new Zp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mf).x}get height(){return this.source.getSize(Mf).y}get depth(){return this.source.getSize(Mf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xh:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xh:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Vx;Bn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,n=0,r=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,M=(m+1)/2,E=(u+h)/4,T=(f+_)/4,A=(p+g)/4;return x>v&&x>M?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=T/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=A/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=T/s,r=A/s),this.set(n,r,s,e),this}let S=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d1 extends ro{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Bn(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Zp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends d1{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kx extends Bn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class p1 extends Bn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ni):Ni.fromBufferAttribute(s,a),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vl.copy(n.boundingBox)),Vl.applyMatrix4(t.matrixWorld),this.union(Vl)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),Hl.subVectors(this.max,po),la.subVectors(t.a,po),ca.subVectors(t.b,po),ua.subVectors(t.c,po),Vr.subVectors(ca,la),Hr.subVectors(ua,ca),_s.subVectors(la,ua);let e=[0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,0,-_s.z,_s.y,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,_s.z,0,-_s.x,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0,-_s.y,_s.x,0];return!Ef(e,la,ca,ua,Hl)||(e=[1,0,0,0,1,0,0,0,1],!Ef(e,la,ca,ua,Hl))?!1:(Gl.crossVectors(Vr,Hr),e=[Gl.x,Gl.y,Gl.z],Ef(e,la,ca,ua,Hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const dr=[new $,new $,new $,new $,new $,new $,new $,new $],Ni=new $,Vl=new El,la=new $,ca=new $,ua=new $,Vr=new $,Hr=new $,_s=new $,po=new $,Hl=new $,Gl=new $,xs=new $;function Ef(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xs.fromArray(i,s);const o=r.x*Math.abs(xs.x)+r.y*Math.abs(xs.y)+r.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),u=n.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const m1=new El,mo=new $,bf=new $;class Vu{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):m1.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);const e=mo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(mo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(bf)),this.expandByPoint(mo.copy(t.center).sub(bf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pr=new $,Tf=new $,Wl=new $,Gr=new $,wf=new $,Xl=new $,Af=new $;class jx{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pr.copy(this.origin).addScaledVector(this.direction,e),pr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Tf.copy(t).add(e).multiplyScalar(.5),Wl.copy(e).sub(t).normalize(),Gr.copy(this.origin).sub(Tf);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Wl),o=Gr.dot(this.direction),l=-Gr.dot(Wl),c=Gr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tf).addScaledVector(Wl,h),d}intersectSphere(t,e){pr.subVectors(t.center,this.origin);const n=pr.dot(this.direction),r=pr.dot(pr)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,pr)!==null}intersectTriangle(t,e,n,r,s){wf.subVectors(e,t),Xl.subVectors(n,t),Af.crossVectors(wf,Xl);let a=this.direction.dot(Af),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gr.subVectors(this.origin,t);const l=o*this.direction.dot(Xl.crossVectors(Gr,Xl));if(l<0)return null;const c=o*this.direction.dot(wf.cross(Gr));if(c<0||l+c>a)return null;const u=-o*Gr.dot(Af);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,g){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,g)}set(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/fa.setFromMatrixColumn(t,0).length(),s=1/fa.setFromMatrixColumn(t,1).length(),a=1/fa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,p=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h+_*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-p,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,p=o*u,_=o*f;e[0]=l*u,e[4]=p*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=p*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+p,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g1,t,_1)}lookAt(t,e,n){const r=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Wr.crossVectors(n,ri),Wr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Wr.crossVectors(n,ri)),Wr.normalize(),$l.crossVectors(ri,Wr),r[0]=Wr.x,r[4]=$l.x,r[8]=ri.x,r[1]=Wr.y,r[5]=$l.y,r[9]=ri.y,r[2]=Wr.z,r[6]=$l.z,r[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],S=n[3],x=n[7],v=n[11],M=n[15],E=r[0],T=r[4],A=r[8],y=r[12],b=r[1],R=r[5],D=r[9],I=r[13],O=r[2],F=r[6],z=r[10],U=r[14],H=r[3],K=r[7],L=r[11],j=r[15];return s[0]=a*E+o*b+l*O+c*H,s[4]=a*T+o*R+l*F+c*K,s[8]=a*A+o*D+l*z+c*L,s[12]=a*y+o*I+l*U+c*j,s[1]=u*E+f*b+h*O+d*H,s[5]=u*T+f*R+h*F+d*K,s[9]=u*A+f*D+h*z+d*L,s[13]=u*y+f*I+h*U+d*j,s[2]=p*E+_*b+g*O+m*H,s[6]=p*T+_*R+g*F+m*K,s[10]=p*A+_*D+g*z+m*L,s[14]=p*y+_*I+g*U+m*j,s[3]=S*E+x*b+v*O+M*H,s[7]=S*T+x*R+v*F+M*K,s[11]=S*A+x*D+v*z+M*L,s[15]=S*y+x*I+v*U+M*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],S=l*d-c*h,x=o*d-c*f,v=o*h-l*f,M=a*d-c*u,E=a*h-l*u,T=a*f-o*u;return e*(_*S-g*x+m*v)-n*(p*S-g*M+m*E)+r*(p*x-_*M+m*T)-s*(p*v-_*E+g*T)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],S=f*g*c-_*h*c+_*l*d-o*g*d-f*l*m+o*h*m,x=p*h*c-u*g*c-p*l*d+a*g*d+u*l*m-a*h*m,v=u*_*c-p*f*c+p*o*d-a*_*d-u*o*m+a*f*m,M=p*f*l-u*_*l-p*o*h+a*_*h+u*o*g-a*f*g,E=e*S+n*x+r*v+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=S*T,t[1]=(_*h*s-f*g*s-_*r*d+n*g*d+f*r*m-n*h*m)*T,t[2]=(o*g*s-_*l*s+_*r*c-n*g*c-o*r*m+n*l*m)*T,t[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*T,t[4]=x*T,t[5]=(u*g*s-p*h*s+p*r*d-e*g*d-u*r*m+e*h*m)*T,t[6]=(p*l*s-a*g*s-p*r*c+e*g*c+a*r*m-e*l*m)*T,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*d+e*l*d)*T,t[8]=v*T,t[9]=(p*f*s-u*_*s-p*n*d+e*_*d+u*n*m-e*f*m)*T,t[10]=(a*_*s-p*o*s+p*n*c-e*_*c-a*n*m+e*o*m)*T,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*d-e*o*d)*T,t[12]=M*T,t[13]=(u*_*r-p*f*r+p*n*h-e*_*h-u*n*g+e*f*g)*T,t[14]=(p*o*r-a*_*r-p*n*l+e*_*l+a*n*g-e*o*g)*T,t[15]=(a*f*r-u*o*r+u*n*l-e*f*l-a*n*h+e*o*h)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,p=s*f,_=a*u,g=a*f,m=o*f,S=l*c,x=l*u,v=l*f,M=n.x,E=n.y,T=n.z;return r[0]=(1-(_+m))*M,r[1]=(d+v)*M,r[2]=(p-x)*M,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(h+m))*E,r[6]=(g+S)*E,r[7]=0,r[8]=(p+x)*T,r[9]=(g-S)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=fa.set(r[0],r[1],r[2]).length();const a=fa.set(r[4],r[5],r[6]).length(),o=fa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Ii.copy(this);const c=1/s,u=1/a,f=1/o;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,e.setFromRotationMatrix(Ii),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=ir,l=!1){const c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===ir)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ru)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=ir,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===ir)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===ru)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fa=new $,Ii=new Ye,g1=new $(0,0,0),_1=new $(1,1,1),Wr=new $,$l=new $,ri=new $,fg=new Ye,hg=new Ml;class Fr{constructor(t=0,e=0,n=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hg.setFromEuler(this),this.setFromQuaternion(hg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class Jx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let x1=0;const dg=new $,ha=new Ml,mr=new Ye,Yl=new $,go=new $,v1=new $,y1=new Ml,pg=new $(1,0,0),mg=new $(0,1,0),gg=new $(0,0,1),_g={type:"added"},S1={type:"removed"},da={type:"childadded",child:null},Cf={type:"childremoved",child:null};class Jn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new $,e=new Fr,n=new Ml,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Jt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ha.setFromAxisAngle(t,e),this.quaternion.multiply(ha),this}rotateOnWorldAxis(t,e){return ha.setFromAxisAngle(t,e),this.quaternion.premultiply(ha),this}rotateX(t){return this.rotateOnAxis(pg,t)}rotateY(t){return this.rotateOnAxis(mg,t)}rotateZ(t){return this.rotateOnAxis(gg,t)}translateOnAxis(t,e){return dg.copy(t).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pg,t)}translateY(t){return this.translateOnAxis(mg,t)}translateZ(t){return this.translateOnAxis(gg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yl.copy(t):Yl.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(go,Yl,this.up):mr.lookAt(Yl,go,this.up),this.quaternion.setFromRotationMatrix(mr),r&&(mr.extractRotation(r.matrixWorld),ha.setFromRotationMatrix(mr),this.quaternion.premultiply(ha.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_g),da.child=t,this.dispatchEvent(da),da.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(S1),Cf.child=t,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_g),da.child=t,this.dispatchEvent(da),da.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,v1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,y1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Jn.DEFAULT_UP=new $(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new $,gr=new $,Rf=new $,_r=new $,pa=new $,ma=new $,xg=new $,Pf=new $,Df=new $,Lf=new $,Nf=new Xe,If=new Xe,Ff=new Xe;class Bi{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fi.subVectors(t,e),r.cross(Fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Fi.subVectors(r,e),gr.subVectors(n,e),Rf.subVectors(t,e);const a=Fi.dot(Fi),o=Fi.dot(gr),l=Fi.dot(Rf),c=gr.dot(gr),u=gr.dot(Rf),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(a,_r.y),l.addScaledVector(o,_r.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Nf.setScalar(0),If.setScalar(0),Ff.setScalar(0),Nf.fromBufferAttribute(t,e),If.fromBufferAttribute(t,n),Ff.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Nf,s.x),a.addScaledVector(If,s.y),a.addScaledVector(Ff,s.z),a}static isFrontFacing(t,e,n,r){return Fi.subVectors(n,e),gr.subVectors(t,e),Fi.cross(gr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Fi.cross(gr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Bi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;pa.subVectors(r,n),ma.subVectors(s,n),Pf.subVectors(t,n);const l=pa.dot(Pf),c=ma.dot(Pf);if(l<=0&&c<=0)return e.copy(n);Df.subVectors(t,r);const u=pa.dot(Df),f=ma.dot(Df);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(pa,a);Lf.subVectors(t,s);const d=pa.dot(Lf),p=ma.dot(Lf);if(p>=0&&d<=p)return e.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ma,o);const g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return xg.subVectors(s,r),o=(f-u)/(f-u+(d-p)),e.copy(r).addScaledVector(xg,o);const m=1/(g+_+h);return a=_*m,o=h*m,e.copy(n).addScaledVector(pa,a).addScaledVector(ma,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Uf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=l1(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Uf(a,s,t+1/3),this.g=Uf(a,s,t),this.b=Uf(a,s,t-1/3)}return de.colorSpaceToWorking(this,r),this}setStyle(t,e=Ei){function n(s){s!==void 0&&parseFloat(s)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ei){const n=Qx[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}copyLinearToSRGB(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return de.workingToColorSpace(gn.copy(this),t),Math.round(le(gn.r*255,0,255))*65536+Math.round(le(gn.g*255,0,255))*256+Math.round(le(gn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,s=gn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Ei){de.workingToColorSpace(gn.copy(this),t);const e=gn.r,n=gn.g,r=gn.b;return t!==Ei?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Xr),this.setHSL(Xr.h+t,Xr.s+e,Xr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xr),t.getHSL(ql);const n=xf(Xr.h,ql.h,e),r=xf(Xr.s,ql.s,e),s=xf(Xr.l,ql.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new Se;Se.NAMES=Qx;let M1=0;class bl extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=Fa,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Fh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(n.blending=this.blending),this.side!==us&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ih&&(n.blendSrc=this.blendSrc),this.blendDst!==Fh&&(n.blendDst=this.blendDst),this.blendEquation!==Rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==aa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==aa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==aa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tv extends bl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new $,Zl=new Ae;let E1=0;class Li{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rg,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zl.fromBufferAttribute(this,e),Zl.applyMatrix3(t),this.setXY(e,Zl.x,Zl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ho(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ho(e,this.array)),e}setX(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ho(e,this.array)),e}setY(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ho(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ho(e,this.array)),e}setW(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),r=Hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),r=Hn(r,this.array),s=Hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rg&&(t.usage=this.usage),t}}class ev extends Li{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nv extends Li{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pr extends Li{constructor(t,e,n){super(new Float32Array(t),e,n)}}let b1=0;const Si=new Ye,Of=new Jn,ga=new $,si=new El,_o=new El,on=new $;class Gi extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zx(t)?nv:ev)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,n){return Si.makeTranslation(t,e,n),this.applyMatrix4(Si),this}scale(t,e,n){return Si.makeScale(t,e,n),this.applyMatrix4(Si),this}lookAt(t){return Of.lookAt(t),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pr(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];_o.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(si.min,_o.min),si.expandByPoint(on),on.addVectors(si.max,_o.max),si.expandByPoint(on)):(si.expandByPoint(_o.min),si.expandByPoint(_o.max))}si.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)on.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(on));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(ga.fromBufferAttribute(t,c),on.add(ga)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new $,l[A]=new $;const c=new $,u=new $,f=new $,h=new Ae,d=new Ae,p=new Ae,_=new $,g=new $;function m(A,y,b){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,b),h.fromBufferAttribute(s,A),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,b),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(R),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(R),o[A].add(_),o[y].add(_),o[b].add(_),l[A].add(g),l[y].add(g),l[b].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let A=0,y=S.length;A<y;++A){const b=S[A],R=b.start,D=b.count;for(let I=R,O=R+D;I<O;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new $,v=new $,M=new $,E=new $;function T(A){M.fromBufferAttribute(r,A),E.copy(M);const y=o[A];x.copy(y),x.sub(M.multiplyScalar(M.dot(y))).normalize(),v.crossVectors(E,y);const R=v.dot(l[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,R)}for(let A=0,y=S.length;A<y;++A){const b=S[A],R=b.start,D=b.count;for(let I=R,O=R+D;I<O;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Li(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new Li(h,u,f)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gi,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vg=new Ye,vs=new jx,Kl=new Vu,yg=new $,jl=new $,Jl=new $,Ql=new $,Bf=new $,tc=new $,Sg=new $,ec=new $;class Ur extends Jn{constructor(t=new Gi,e=new tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Bf.fromBufferAttribute(f,t),a?tc.addScaledVector(Bf,u):tc.addScaledVector(Bf.sub(e),u))}e.add(tc)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),vs.copy(t.ray).recast(t.near),!(Kl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Kl,yg)===null||vs.origin.distanceToSquared(yg)>(t.far-t.near)**2))&&(vg.copy(s).invert(),vs.copy(t.ray).applyMatrix4(vg),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,M=x;v<M;v+=3){const E=o.getX(v),T=o.getX(v+1),A=o.getX(v+2);r=nc(this,m,t,n,c,u,f,E,T,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const S=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);r=nc(this,a,t,n,c,u,f,S,x,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,M=x;v<M;v+=3){const E=v,T=v+1,A=v+2;r=nc(this,m,t,n,c,u,f,E,T,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const S=g,x=g+1,v=g+2;r=nc(this,a,t,n,c,u,f,S,x,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function T1(i,t,e,n,r,s,a,o){let l;if(t.side===jn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===us,o),l===null)return null;ec.copy(o),ec.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ec);return c<e.near||c>e.far?null:{distance:c,point:ec.clone(),object:i}}function nc(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,jl),i.getVertexPosition(l,Jl),i.getVertexPosition(c,Ql);const u=T1(i,t,e,n,jl,Jl,Ql,Sg);if(u){const f=new $;Bi.getBarycoord(Sg,jl,Jl,Ql,f),r&&(u.uv=Bi.getInterpolatedAttribute(r,o,l,c,f,new Ae)),s&&(u.uv1=Bi.getInterpolatedAttribute(s,o,l,c,f,new Ae)),a&&(u.normal=Bi.getInterpolatedAttribute(a,o,l,c,f,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};Bi.getNormal(jl,Jl,Ql,h.normal),u.face=h,u.barycoord=f}return u}class Tl extends Gi{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,e,t,a,s,0),p("z","y","x",1,-1,n,e,-t,a,s,1),p("x","z","y",1,1,t,n,e,r,a,2),p("x","z","y",1,-1,t,n,-e,r,a,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pr(c,3)),this.setAttribute("normal",new Pr(u,3)),this.setAttribute("uv",new Pr(f,2));function p(_,g,m,S,x,v,M,E,T,A,y){const b=v/T,R=M/A,D=v/2,I=M/2,O=E/2,F=T+1,z=A+1;let U=0,H=0;const K=new $;for(let L=0;L<z;L++){const j=L*R-I;for(let Mt=0;Mt<F;Mt++){const bt=Mt*b-D;K[_]=bt*S,K[g]=j*x,K[m]=O,c.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[m]=E>0?1:-1,u.push(K.x,K.y,K.z),f.push(Mt/T),f.push(1-L/A),U+=1}}for(let L=0;L<A;L++)for(let j=0;j<T;j++){const Mt=h+j+F*L,bt=h+j+F*(L+1),Lt=h+(j+1)+F*(L+1),At=h+(j+1)+F*L;l.push(Mt,bt,At),l.push(bt,Lt,At),H+=6}o.addGroup(d,H,y),d+=H,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ja(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Cn(i){const t={};for(let e=0;e<i.length;e++){const n=ja(i[e]);for(const r in n)t[r]=n[r]}return t}function w1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function iv(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const A1={clone:ja,merge:Cn};var C1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends bl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C1,this.fragmentShader=R1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ja(t.uniforms),this.uniformsGroups=w1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rv extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ir,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $r=new $,Mg=new Ae,Eg=new Ae;class wi extends rv{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Td*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_f*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Td*2*Math.atan(Math.tan(_f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($r.x,$r.y).multiplyScalar(-t/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($r.x,$r.y).multiplyScalar(-t/$r.z)}getViewSize(t,e){return this.getViewBounds(t,Mg,Eg),e.subVectors(Eg,Mg)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_f*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _a=-90,xa=1;class P1 extends Jn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(_a,xa,t,e);r.layers=this.layers,this.add(r);const s=new wi(_a,xa,t,e);s.layers=this.layers,this.add(s);const a=new wi(_a,xa,t,e);a.layers=this.layers,this.add(a);const o=new wi(_a,xa,t,e);o.layers=this.layers,this.add(o);const l=new wi(_a,xa,t,e);l.layers=this.layers,this.add(l);const c=new wi(_a,xa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ir)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ru)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class sv extends Bn{constructor(t=[],e=Zs,n,r,s,a,o,l,c,u){super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class av extends ar{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new sv(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tl(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:ja(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Cr});s.uniforms.tEquirect.value=e;const a=new Ur(r,s),o=e.minFilter;return e.minFilter===Is&&(e.minFilter=Mn),new P1(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class ic extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D1={type:"move"};class kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ic;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class L1 extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class N1 extends Bn{constructor(t=null,e=1,n=1,r,s,a,o,l,c=hn,u=hn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zf=new $,I1=new $,F1=new Jt;class As{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=zf.subVectors(n,e).cross(I1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||F1.getNormalMatrix(t),r=this.coplanarPoint(zf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Vu,U1=new Ae(.5,.5),rc=new $;class ov{constructor(t=new As,e=new As,n=new As,r=new As,s=new As,a=new As){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ir,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],S=s[12],x=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-a,d-u,m-p,M-S).normalize(),r[1].setComponents(c+a,d+u,m+p,M+S).normalize(),r[2].setComponents(c+o,d+f,m+_,M+x).normalize(),r[3].setComponents(c-o,d-f,m-_,M-x).normalize(),n)r[4].setComponents(l,h,g,v).normalize(),r[5].setComponents(c-l,d-h,m-g,M-v).normalize();else if(r[4].setComponents(c-l,d-h,m-g,M-v).normalize(),e===ir)r[5].setComponents(c+l,d+h,m+g,M+v).normalize();else if(e===ru)r[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const e=U1.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(rc.x=r.normal.x>0?t.max.x:t.min.x,rc.y=r.normal.y>0?t.max.y:t.min.y,rc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(rc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O1 extends bl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bg=new Ye,wd=new jx,sc=new Vu,ac=new $;class B1 extends Jn{constructor(t=new Gi,e=new O1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(r),sc.radius+=s,t.ray.intersectsSphere(sc)===!1)return;bg.copy(r).invert(),wd.copy(t.ray).applyMatrix4(bg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,_=d;p<_;p++){const g=c.getX(p);ac.fromBufferAttribute(f,g),Tg(ac,g,l,r,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,_=d;p<_;p++)ac.fromBufferAttribute(f,p),Tg(ac,p,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Tg(i,t,e,n,r,s,a){const o=wd.distanceSqToPoint(i);if(o<e){const l=new $;wd.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class dl extends Bn{constructor(t,e,n=ur,r,s,a,o=hn,l=hn,c,u=Ir,f=1){if(u!==Ir&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class k1 extends dl{constructor(t,e=ur,n=Zs,r,s,a=hn,o=hn,l,c=Ir){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class lv extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hu extends Gi{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const S=m*h-a;for(let x=0;x<c;x++){const v=x*f-s;p.push(v,-S,0),_.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const x=S+c*m,v=S+c*(m+1),M=S+1+c*(m+1),E=S+1+c*m;d.push(x,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Pr(p,3)),this.setAttribute("normal",new Pr(_,3)),this.setAttribute("uv",new Pr(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.width,t.height,t.widthSegments,t.heightSegments)}}class z1 extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class V1 extends bl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H1 extends bl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cv extends rv{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class G1 extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function wg(i,t,e,n){const r=W1(n);switch(e){case $x:return i*t;case qx:return i*t/r.components*r.byteLength;case Wp:return i*t/r.components*r.byteLength;case Za:return i*t*2/r.components*r.byteLength;case Xp:return i*t*2/r.components*r.byteLength;case Yx:return i*t*3/r.components*r.byteLength;case zi:return i*t*4/r.components*r.byteLength;case $p:return i*t*4/r.components*r.byteLength;case Nc:case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qh:case Kh:return Math.max(i,16)*Math.max(t,8)/4;case Yh:case Zh:return Math.max(i,8)*Math.max(t,8)/2;case jh:case Jh:case td:case ed:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qh:case nd:case id:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case od:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ld:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cd:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ud:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fd:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hd:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dd:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pd:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case md:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gd:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xd:case vd:case yd:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sd:case Md:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ed:case bd:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W1(i){switch(i){case Ai:case Hx:return{byteLength:1,components:1};case ul:case Gx:case Nr:return{byteLength:2,components:1};case Hp:case Gp:return{byteLength:2,components:4};case ur:case Vp:case nr:return{byteLength:4,components:1};case Wx:case Xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);function uv(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function X1(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var $1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_E=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ET=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:$1,alphahash_pars_fragment:Y1,alphamap_fragment:q1,alphamap_pars_fragment:Z1,alphatest_fragment:K1,alphatest_pars_fragment:j1,aomap_fragment:J1,aomap_pars_fragment:Q1,batching_pars_vertex:tE,batching_vertex:eE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:rE,iridescence_fragment:sE,bumpmap_pars_fragment:aE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:uE,color_fragment:fE,color_pars_fragment:hE,color_pars_vertex:dE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:_E,displacementmap_pars_vertex:xE,displacementmap_vertex:vE,emissivemap_fragment:yE,emissivemap_pars_fragment:SE,colorspace_fragment:ME,colorspace_pars_fragment:EE,envmap_fragment:bE,envmap_common_pars_fragment:TE,envmap_pars_fragment:wE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:BE,envmap_vertex:CE,fog_vertex:RE,fog_pars_vertex:PE,fog_fragment:DE,fog_pars_fragment:LE,gradientmap_pars_fragment:NE,lightmap_pars_fragment:IE,lights_lambert_fragment:FE,lights_lambert_pars_fragment:UE,lights_pars_begin:OE,lights_toon_fragment:kE,lights_toon_pars_fragment:zE,lights_phong_fragment:VE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:WE,lights_fragment_begin:XE,lights_fragment_maps:$E,lights_fragment_end:YE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:jE,map_fragment:JE,map_pars_fragment:QE,map_particle_fragment:tb,map_particle_pars_fragment:eb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ab,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:fb,normal_pars_vertex:hb,normal_vertex:db,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:xb,opaque_fragment:vb,packing:yb,premultiplied_alpha_fragment:Sb,project_vertex:Mb,dithering_fragment:Eb,dithering_pars_fragment:bb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Cb,shadowmap_vertex:Rb,shadowmask_pars_fragment:Pb,skinbase_vertex:Db,skinning_pars_vertex:Lb,skinning_vertex:Nb,skinnormal_vertex:Ib,specularmap_fragment:Fb,specularmap_pars_fragment:Ub,tonemapping_fragment:Ob,tonemapping_pars_fragment:Bb,transmission_fragment:kb,transmission_pars_fragment:zb,uv_pars_fragment:Vb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Wb,background_vert:Xb,background_frag:$b,backgroundCube_vert:Yb,backgroundCube_frag:qb,cube_vert:Zb,cube_frag:Kb,depth_vert:jb,depth_frag:Jb,distance_vert:Qb,distance_frag:tT,equirect_vert:eT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:rT,meshbasic_vert:sT,meshbasic_frag:aT,meshlambert_vert:oT,meshlambert_frag:lT,meshmatcap_vert:cT,meshmatcap_frag:uT,meshnormal_vert:fT,meshnormal_frag:hT,meshphong_vert:dT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:_T,meshtoon_frag:xT,points_vert:vT,points_frag:yT,shadow_vert:ST,shadow_frag:MT,sprite_vert:ET,sprite_frag:bT},_t={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Zi={basic:{uniforms:Cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Se(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Cn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Cn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Se(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Cn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Cn([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Cn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Cn([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Cn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Cn([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Cn([_t.common,_t.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Cn([_t.lights,_t.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Zi.physical={uniforms:Cn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const oc={r:0,b:0,g:0},Ss=new Fr,TT=new Ye;function wT(i,t,e,n,r,s,a){const o=new Se(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const M=p(x);M===null?m(o,l):M&&M.isColor&&(m(M,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,v){const M=p(v);M&&(M.isCubeTexture||M.mapping===zu)?(u===void 0&&(u=new Ur(new Tl(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ja(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ss.copy(v.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(Ss)),u.material.toneMapped=de.getTransfer(M.colorSpace)!==be,(f!==M||h!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ur(new Hu(2,2),new Hi({name:"BackgroundMaterial",uniforms:ja(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=de.getTransfer(M.colorSpace)!==be,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(oc,iv(i)),n.buffers.color.setClear(oc.r,oc.g,oc.b,v,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:_,addToRenderList:g,dispose:S}}function AT(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(b,R,D,I,O){let F=!1;const z=f(I,D,R);s!==z&&(s=z,c(s.object)),F=d(b,I,D,O),F&&p(b,I,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(b,R,D,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,R,D){const I=D.wireframe===!0;let O=n[b.id];O===void 0&&(O={},n[b.id]=O);let F=O[R.id];F===void 0&&(F={},O[R.id]=F);let z=F[I];return z===void 0&&(z=h(l()),F[I]=z),z}function h(b){const R=[],D=[],I=[];for(let O=0;O<e;O++)R[O]=0,D[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:I,object:b,attributes:{},index:null}}function d(b,R,D,I){const O=s.attributes,F=R.attributes;let z=0;const U=D.getAttributes();for(const H in U)if(U[H].location>=0){const L=O[H];let j=F[H];if(j===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),L===void 0||L.attribute!==j||j&&L.data!==j.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function p(b,R,D,I){const O={},F=R.attributes;let z=0;const U=D.getAttributes();for(const H in U)if(U[H].location>=0){let L=F[H];L===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(L=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(L=b.instanceColor));const j={};j.attribute=L,L&&L.data&&(j.data=L.data),O[H]=j,z++}s.attributes=O,s.attributesNum=z,s.index=I}function _(){const b=s.newAttributes;for(let R=0,D=b.length;R<D;R++)b[R]=0}function g(b){m(b,0)}function m(b,R){const D=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;D[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),O[b]!==R&&(i.vertexAttribDivisor(b,R),O[b]=R)}function S(){const b=s.newAttributes,R=s.enabledAttributes;for(let D=0,I=R.length;D<I;D++)R[D]!==b[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function x(b,R,D,I,O,F,z){z===!0?i.vertexAttribIPointer(b,R,D,O,F):i.vertexAttribPointer(b,R,D,I,O,F)}function v(b,R,D,I){_();const O=I.attributes,F=D.getAttributes(),z=R.defaultAttributeValues;for(const U in F){const H=F[U];if(H.location>=0){let K=O[U];if(K===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const L=K.normalized,j=K.itemSize,Mt=t.get(K);if(Mt===void 0)continue;const bt=Mt.buffer,Lt=Mt.type,At=Mt.bytesPerElement,q=Lt===i.INT||Lt===i.UNSIGNED_INT||K.gpuType===Vp;if(K.isInterleavedBufferAttribute){const tt=K.data,ut=tt.stride,Ct=K.offset;if(tt.isInstancedInterleavedBuffer){for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt,tt.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<H.locationSize;pt++)g(H.location+pt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let pt=0;pt<H.locationSize;pt++)x(H.location+pt,j/H.locationSize,Lt,L,ut*At,(Ct+j/H.locationSize*pt)*At,q)}else{if(K.isInstancedBufferAttribute){for(let tt=0;tt<H.locationSize;tt++)m(H.location+tt,K.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let tt=0;tt<H.locationSize;tt++)g(H.location+tt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let tt=0;tt<H.locationSize;tt++)x(H.location+tt,j/H.locationSize,Lt,L,j*At,j/H.locationSize*tt*At,q)}}else if(z!==void 0){const L=z[U];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(H.location,L);break;case 3:i.vertexAttrib3fv(H.location,L);break;case 4:i.vertexAttrib4fv(H.location,L);break;default:i.vertexAttrib1fv(H.location,L)}}}}S()}function M(){A();for(const b in n){const R=n[b];for(const D in R){const I=R[D];for(const O in I)u(I[O].object),delete I[O];delete R[D]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const D in R){const I=R[D];for(const O in I)u(I[O].object),delete I[O];delete R[D]}delete n[b.id]}function T(b){for(const R in n){const D=n[R];if(D[b.id]===void 0)continue;const I=D[b.id];for(const O in I)u(I[O].object),delete I[O];delete D[b.id]}}function A(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:y,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function CT(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_]*h[_];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function RT(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==zi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==nr&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,maxSamples:M,samples:E}}function PT(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new As,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const S=s?0:n,x=S*4;let v=m.clippingState||null;l.value=v,v=u(p,h,x,d);for(let M=0;M!==x;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(f[x]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function DT(i){let t=new WeakMap;function e(a,o){return o===Gh?a.mapping=Zs:o===Wh&&(a.mapping=qa),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gh||o===Wh)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new av(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const es=4,Ag=[.125,.215,.35,.446,.526,.582],Ps=20,LT=256,xo=new cv,Cg=new Se;let Vf=null,Hf=0,Gf=0,Wf=!1;const NT=new $;class Rg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=NT}=s;Vf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vf,Hf,Gf),this._renderer.xr.enabled=Wf,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===qa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Nr,format:zi,colorSpace:Ka,depthBuffer:!1},r=Pg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IT(s)),this._blurMaterial=UT(s,t,e),this._ggxMaterial=FT(s,t,e)}return r}_compileMaterial(t){const e=new Ur(new Gi,t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,r,s){const l=new wi(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Cg),f.toneMapping=sr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ur(new Tl,new tv({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(Cg),m=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const M=this._cubeSize;va(r,v*M,x>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Zs||t.mapping===qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-es?n-p+es:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,va(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,va(t,g,m,3*_,2*_),r.setRenderTarget(t),r.render(o,xo)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&xe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ps-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):Ps;g>Ps&&Kt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);const m=[];let S=0;for(let T=0;T<Ps;++T){const A=T/_,y=Math.exp(-A*A/2);m.push(y),T===0?S+=y:T<g&&(S+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=p,h.mipInt.value=x-n;const v=this._sizeLods[r],M=3*v*(r>x-es?r-x+es:0),E=4*(this._cubeSize-v);va(e,M,E,3*v,2*v),l.setRenderTarget(e),l.render(f,xo)}}function IT(i){const t=[],e=[],n=[];let r=i;const s=i-es+1+Ag.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-es?l=Ag[a-i+es-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,g=2,m=1,S=new Float32Array(_*p*d),x=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,A=E>2?0:-1,y=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];S.set(y,_*p*E),x.set(h,g*p*E);const b=[E,E,E,E,E,E];v.set(b,m*p*E)}const M=new Gi;M.setAttribute("position",new Li(S,_)),M.setAttribute("uv",new Li(x,g)),M.setAttribute("faceIndex",new Li(v,m)),n.push(new Ur(M,null)),r>es&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Pg(i,t,e){const n=new ar(i,t,e);return n.texture.mapping=zu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function FT(i,t,e){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function UT(i,t,e){const n=new Float32Array(Ps),r=new $(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Dg(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Lg(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OT(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gh||l===Wh,u=l===Zs||l===qa;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Rg(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Rg(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function BT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&hl("WebGLRenderer: "+n+" extension not supported."),r}}}function kT(i,t,e,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const M=S[x+0],E=S[x+1],T=S[x+2];h.push(M,E,E,T,T,M)}}else if(p!==void 0){const S=p.array;_=p.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const M=x+0,E=x+1,T=x+2;h.push(M,E,E,T,T,M)}}else return;const g=new(Zx(h)?nv:ev)(h,1);g.version=_;const m=s.get(f);m&&t.remove(m),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zT(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),e.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,h*a,p),e.update(d,n,p))}function u(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function f(h,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,p);let m=0;for(let S=0;S<p;S++)m+=d[S]*_[S];e.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function VT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function HT(i,t,e){const n=new WeakMap,r=new Xe;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let M=o.attributes.position.count*v,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*E*4*f),A=new Kx(T,M,E,f);A.type=nr,A.needsUpdate=!0;const y=v*4;for(let R=0;R<f;R++){const D=m[R],I=S[R],O=x[R],F=M*E*4*R;for(let z=0;z<D.count;z++){const U=z*y;p===!0&&(r.fromBufferAttribute(D,z),T[F+U+0]=r.x,T[F+U+1]=r.y,T[F+U+2]=r.z,T[F+U+3]=0),_===!0&&(r.fromBufferAttribute(I,z),T[F+U+4]=r.x,T[F+U+5]=r.y,T[F+U+6]=r.z,T[F+U+7]=0),g===!0&&(r.fromBufferAttribute(O,z),T[F+U+8]=r.x,T[F+U+9]=r.y,T[F+U+10]=r.z,T[F+U+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Ae(M,E)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function GT(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const WT={[Ix]:"LINEAR_TONE_MAPPING",[Fx]:"REINHARD_TONE_MAPPING",[Ux]:"CINEON_TONE_MAPPING",[Ox]:"ACES_FILMIC_TONE_MAPPING",[kx]:"AGX_TONE_MAPPING",[zx]:"NEUTRAL_TONE_MAPPING",[Bx]:"CUSTOM_TONE_MAPPING"};function XT(i,t,e,n,r){const s=new ar(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new ar(t,e,{type:Nr,depthBuffer:!1,stencilBuffer:!1}),o=new Gi;o.setAttribute("position",new Pr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Pr([0,2,0,0,2,0],2));const l=new z1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ur(o,l),u=new cv(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,_=null,g=[],m=!1;this.setSize=function(S,x){s.setSize(S,x),a.setSize(S,x);for(let v=0;v<g.length;v++){const M=g[v];M.setSize&&M.setSize(S,x)}},this.setEffects=function(S){g=S,m=g.length>0&&g[0].isRenderPass===!0;const x=s.width,v=s.height;for(let M=0;M<g.length;M++){const E=g[M];E.setSize&&E.setSize(x,v)}},this.begin=function(S,x){if(d||S.toneMapping===sr&&g.length===0)return!1;if(_=x,x!==null){const v=x.width,M=x.height;(s.width!==v||s.height!==M)&&this.setSize(v,M)}return m===!1&&S.setRenderTarget(s),p=S.toneMapping,S.toneMapping=sr,!0},this.hasRenderPass=function(){return m},this.end=function(S,x){S.toneMapping=p,d=!0;let v=s,M=a;for(let E=0;E<g.length;E++){const T=g[E];if(T.enabled!==!1&&(T.render(S,M,v,x),T.needsSwap!==!1)){const A=v;v=M,M=A}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,l.defines={},de.getTransfer(f)===be&&(l.defines.SRGB_TRANSFER="");const E=WT[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(_),S.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const fv=new Bn,Ad=new dl(1,1),hv=new Kx,dv=new p1,pv=new sv,Ng=[],Ig=[],Fg=new Float32Array(16),Ug=new Float32Array(9),Og=new Float32Array(4);function so(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ng[r];if(s===void 0&&(s=new Float32Array(r),Ng[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wu(i,t){let e=Ig[t];e===void 0&&(e=new Int32Array(t),Ig[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $T(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function YT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function qT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function ZT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function KT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;Og.set(n),i.uniformMatrix2fv(this.addr,!1,Og),rn(e,n)}}function jT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;Ug.set(n),i.uniformMatrix3fv(this.addr,!1,Ug),rn(e,n)}}function JT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;Fg.set(n),i.uniformMatrix4fv(this.addr,!1,Fg),rn(e,n)}}function QT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function ew(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function nw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function iw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function sw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function aw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function ow(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ad.compareFunction=e.isReversedDepthBuffer()?qp:Yp,s=Ad):s=fv,e.setTexture2D(t||s,r)}function lw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||dv,r)}function cw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||pv,r)}function uw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||hv,r)}function fw(i){switch(i){case 5126:return $T;case 35664:return YT;case 35665:return qT;case 35666:return ZT;case 35674:return KT;case 35675:return jT;case 35676:return JT;case 5124:case 35670:return QT;case 35667:case 35671:return tw;case 35668:case 35672:return ew;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function hw(i,t){i.uniform1fv(this.addr,t)}function dw(i,t){const e=so(t,this.size,2);i.uniform2fv(this.addr,e)}function pw(i,t){const e=so(t,this.size,3);i.uniform3fv(this.addr,e)}function mw(i,t){const e=so(t,this.size,4);i.uniform4fv(this.addr,e)}function gw(i,t){const e=so(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _w(i,t){const e=so(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xw(i,t){const e=so(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vw(i,t){i.uniform1iv(this.addr,t)}function yw(i,t){i.uniform2iv(this.addr,t)}function Sw(i,t){i.uniform3iv(this.addr,t)}function Mw(i,t){i.uniform4iv(this.addr,t)}function Ew(i,t){i.uniform1uiv(this.addr,t)}function bw(i,t){i.uniform2uiv(this.addr,t)}function Tw(i,t){i.uniform3uiv(this.addr,t)}function ww(i,t){i.uniform4uiv(this.addr,t)}function Aw(i,t,e){const n=this.cache,r=t.length,s=Wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ad:a=fv;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Cw(i,t,e){const n=this.cache,r=t.length,s=Wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||dv,s[a])}function Rw(i,t,e){const n=this.cache,r=t.length,s=Wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||pv,s[a])}function Pw(i,t,e){const n=this.cache,r=t.length,s=Wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||hv,s[a])}function Dw(i){switch(i){case 5126:return hw;case 35664:return dw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return _w;case 35676:return xw;case 5124:case 35670:return vw;case 35667:case 35671:return yw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return bw;case 36295:return Tw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Lw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fw(e.type)}}class Nw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dw(e.type)}}class Iw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Xf=/(\w+)(\])?(\[|\.)?/g;function Bg(i,t){i.seq.push(t),i.map[t.id]=t}function Fw(i,t,e){const n=i.name,r=n.length;for(Xf.lastIndex=0;;){const s=Xf.exec(n),a=Xf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bg(e,c===void 0?new Lw(o,i,t):new Nw(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Iw(o),Bg(e,f)),e=f}}}class Oc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Fw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function kg(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Uw=37297;let Ow=0;function Bw(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const zg=new Jt;function kw(i){de._getMatrix(zg,de.workingColorSpace,i);const t=`mat3( ${zg.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case iu:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vg(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Bw(i.getShaderSource(t),o)}else return s}function zw(i,t){const e=kw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Vw={[Ix]:"Linear",[Fx]:"Reinhard",[Ux]:"Cineon",[Ox]:"ACESFilmic",[kx]:"AgX",[zx]:"Neutral",[Bx]:"Custom"};function Hw(i,t){const e=Vw[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lc=new $;function Gw(){de.getLuminanceCoefficients(lc);const i=lc.x.toFixed(4),t=lc.y.toFixed(4),e=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Xw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $w(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Po(i){return i!==""}function Hg(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(i){return i.replace(Yw,Zw)}const qw=new Map;function Zw(i,t){let e=te[t];if(e===void 0){const n=qw.get(t);if(n!==void 0)e=te[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cd(e)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(i){return i.replace(Kw,jw)}function jw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Jw={[Lc]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function Qw(i){return Jw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tA={[Zs]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE",[zu]:"ENVMAP_TYPE_CUBE_UV"};function eA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const nA={[qa]:"ENVMAP_MODE_REFRACTION"};function iA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rA={[Nx]:"ENVMAP_BLENDING_MULTIPLY",[qM]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function sA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rA[i.combine]||"ENVMAP_BLENDING_NONE"}function aA(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function oA(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qw(e),c=eA(e),u=iA(e),f=sA(e),h=aA(e),d=Ww(e),p=Xw(s),_=r.createProgram();let g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Po).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Po).join(`
`),m.length>0&&(m+=`
`)):(g=[Xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),m=[Xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sr?"#define TONE_MAPPING":"",e.toneMapping!==sr?te.tonemapping_pars_fragment:"",e.toneMapping!==sr?Hw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,zw("linearToOutputTexel",e.outputColorSpace),Gw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Po).join(`
`)),a=Cd(a),a=Hg(a,e),a=Gg(a,e),o=Cd(o),o=Hg(o,e),o=Gg(o,e),a=Wg(a),o=Wg(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+g+a,v=S+m+o,M=kg(r,r.VERTEX_SHADER,x),E=kg(r,r.FRAGMENT_SHADER,v);r.attachShader(_,M),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",I=r.getShaderInfoLog(M)||"",O=r.getShaderInfoLog(E)||"",F=D.trim(),z=I.trim(),U=O.trim();let H=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,E);else{const L=Vg(r,M,"vertex"),j=Vg(r,E,"fragment");xe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+L+`
`+j)}else F!==""?Kt("WebGLProgram: Program Info Log:",F):(z===""||U==="")&&(K=!1);K&&(R.diagnostics={runnable:H,programLog:F,vertexShader:{log:z,prefix:g},fragmentShader:{log:U,prefix:m}})}r.deleteShader(M),r.deleteShader(E),A=new Oc(r,_),y=$w(r,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,Uw)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ow++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uA(t),e.set(t,n)),n}}class uA{constructor(t){this.id=lA++,this.code=t,this.usedTimes=0}}function fA(i,t,e,n,r,s,a){const o=new Jx,l=new cA,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,b,R,D,I){const O=D.fog,F=I.geometry,z=y.isMeshStandardMaterial?D.environment:null,U=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),H=U&&U.mapping===zu?U.image.height:null,K=p[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&Kt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const L=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,j=L!==void 0?L.length:0;let Mt=0;F.morphAttributes.position!==void 0&&(Mt=1),F.morphAttributes.normal!==void 0&&(Mt=2),F.morphAttributes.color!==void 0&&(Mt=3);let bt,Lt,At,q;if(K){const vt=Zi[K];bt=vt.vertexShader,Lt=vt.fragmentShader}else bt=y.vertexShader,Lt=y.fragmentShader,l.update(y),At=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const tt=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Ct=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,Ft=!!y.map,ae=!!y.matcap,xt=!!U,zt=!!y.aoMap,Yt=!!y.lightMap,Bt=!!y.bumpMap,W=!!y.normalMap,N=!!y.displacementMap,Nt=!!y.emissiveMap,Ut=!!y.metalnessMap,Vt=!!y.roughnessMap,st=y.anisotropy>0,P=y.clearcoat>0,w=y.dispersion>0,k=y.iridescence>0,J=y.sheen>0,Q=y.transmission>0,Z=st&&!!y.anisotropyMap,Et=P&&!!y.clearcoatMap,at=P&&!!y.clearcoatNormalMap,Rt=P&&!!y.clearcoatRoughnessMap,wt=k&&!!y.iridescenceMap,rt=k&&!!y.iridescenceThicknessMap,ot=J&&!!y.sheenColorMap,Tt=J&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,lt=!!y.specularColorMap,$t=!!y.specularIntensityMap,B=Q&&!!y.transmissionMap,ht=Q&&!!y.thicknessMap,it=!!y.gradientMap,dt=!!y.alphaMap,nt=y.alphaTest>0,et=!!y.alphaHash,ft=!!y.extensions;let Ht=sr;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const me={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:bt,fragmentShader:Lt,defines:y.defines,customVertexShaderID:At,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:pt,batchingColor:pt&&I._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&I.instanceColor!==null,instancingMorph:Ct&&I.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ka,alphaToCoverage:!!y.alphaToCoverage,map:Ft,matcap:ae,envMap:xt,envMapMode:xt&&U.mapping,envMapCubeUVHeight:H,aoMap:zt,lightMap:Yt,bumpMap:Bt,normalMap:W,displacementMap:N,emissiveMap:Nt,normalMapObjectSpace:W&&y.normalMapType===QM,normalMapTangentSpace:W&&y.normalMapType===JM,metalnessMap:Ut,roughnessMap:Vt,anisotropy:st,anisotropyMap:Z,clearcoat:P,clearcoatMap:Et,clearcoatNormalMap:at,clearcoatRoughnessMap:Rt,dispersion:w,iridescence:k,iridescenceMap:wt,iridescenceThicknessMap:rt,sheen:J,sheenColorMap:ot,sheenRoughnessMap:Tt,specularMap:Pt,specularColorMap:lt,specularIntensityMap:$t,transmission:Q,transmissionMap:B,thicknessMap:ht,gradientMap:it,opaque:y.transparent===!1&&y.blending===Fa&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:nt,alphaHash:et,combine:y.combine,mapUv:Ft&&_(y.map.channel),aoMapUv:zt&&_(y.aoMap.channel),lightMapUv:Yt&&_(y.lightMap.channel),bumpMapUv:Bt&&_(y.bumpMap.channel),normalMapUv:W&&_(y.normalMap.channel),displacementMapUv:N&&_(y.displacementMap.channel),emissiveMapUv:Nt&&_(y.emissiveMap.channel),metalnessMapUv:Ut&&_(y.metalnessMap.channel),roughnessMapUv:Vt&&_(y.roughnessMap.channel),anisotropyMapUv:Z&&_(y.anisotropyMap.channel),clearcoatMapUv:Et&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(y.sheenRoughnessMap.channel),specularMapUv:Pt&&_(y.specularMap.channel),specularColorMapUv:lt&&_(y.specularColorMap.channel),specularIntensityMapUv:$t&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:ht&&_(y.thicknessMap.channel),alphaMapUv:dt&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(W||st),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ft||dt),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ut,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Mt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===be,decodeVideoTextureEmissive:Nt&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mr,flipSided:y.side===jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&y.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function S(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const b=p[y.type];let R;if(b){const D=Zi[b];R=A1.clone(D.uniforms)}else R=y.uniforms;return R}function M(y,b){let R=f.get(b);return R!==void 0?++R.usedTimes:(R=new oA(i,b,y,s),u.push(R),f.set(b,R)),R}function E(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function T(y){l.remove(y)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:A}}function hA(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function dA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yg(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,h,d,p,_,g){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=_,m.group=g),t++,m}function o(f,h,d,p,_,g){const m=a(f,h,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(f,h,d,p,_,g){const m=a(f,h,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||dA),n.length>1&&n.sort(h||$g),r.length>1&&r.sort(h||$g)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function pA(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Yg,i.set(n,[a])):r>=s.length?(a=new Yg,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mA(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Se};break;case"SpotLight":e={position:new $,direction:new $,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function gA(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _A=0;function xA(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vA(i){const t=new mA,e=gA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new Ye,a=new Ye;function o(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,S=0,x=0,v=0,M=0,E=0,T=0;c.sort(xA);for(let y=0,b=c.length;y<b;y++){const R=c[y],D=R.color,I=R.intensity,O=R.distance;let F=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Za?F=R.shadow.map.texture:F=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*I,f+=D.g*I,h+=D.b*I;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],I);T++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,H=e.get(R);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=R.shadow.matrix,S++}n.directional[d]=z,d++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(D).multiplyScalar(I),z.distance=O,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const U=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,U.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=U.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=F,v++}_++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(D).multiplyScalar(I),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=z,g++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const U=R.shadow,H=e.get(R);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,H.shadowCameraNear=U.camera.near,H.shadowCameraFar=U.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=R.shadow.matrix,x++}n.point[p]=z,p++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(I),z.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[m]=z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const A=n.hash;(A.directionalLength!==d||A.pointLength!==p||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==S||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==M||A.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,A.directionalLength=d,A.pointLength=p,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=S,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=M,A.numLightProbes=T,n.version=_A++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function qg(i){const t=new vA(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function yA(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new qg(i),t.set(r,[o])):s>=a.length?(o=new qg(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],bA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Zg=new Ye,vo=new $,$f=new $;function TA(i,t,e){let n=new ov;const r=new Ae,s=new Ae,a=new Xe,o=new V1,l=new H1,c={},u=e.maxTextureSize,f={[us]:jn,[jn]:us,[Mr]:Mr},h=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:SA,fragmentShader:MA}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Gi;p.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ur(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let m=this.type;this.render=function(E,T,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;E.type===RM&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Lc);const y=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Cr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=m!==this.type;I&&T.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(F=>F.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,F=E.length;O<F;O++){const z=E[O],U=z.shadow;if(U===void 0){Kt("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const H=U.getFrameExtents();if(r.multiply(H),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,U.mapSize.y=s.y)),U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ro){if(z.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ar(r.x,r.y,{format:Za,type:Nr,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new dl(r.x,r.y,nr),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=Ir,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn}else{z.isPointLight?(U.map=new av(r.x),U.map.depthTexture=new k1(r.x,ur)):(U.map=new ar(r.x,r.y),U.map.depthTexture=new dl(r.x,r.y,ur)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=Ir;const L=i.state.buffers.depth.getReversed();this.type===Lc?(U.map.depthTexture.compareFunction=L?qp:Yp,U.map.depthTexture.minFilter=Mn,U.map.depthTexture.magFilter=Mn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn)}U.camera.updateProjectionMatrix()}const K=U.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<K;L++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,L),i.clear();else{L===0&&(i.setRenderTarget(U.map),i.clear());const j=U.getViewport(L);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),D.viewport(a)}if(z.isPointLight){const j=U.camera,Mt=U.matrix,bt=z.distance||j.far;bt!==j.far&&(j.far=bt,j.updateProjectionMatrix()),vo.setFromMatrixPosition(z.matrixWorld),j.position.copy(vo),$f.copy(j.position),$f.add(EA[L]),j.up.copy(bA[L]),j.lookAt($f),j.updateMatrixWorld(),Mt.makeTranslation(-vo.x,-vo.y,-vo.z),Zg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Zg,j.coordinateSystem,j.reversedDepth)}else U.updateMatrices(z);n=U.getFrustum(),v(T,A,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===Ro&&S(U,A),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(y,b,R)};function S(E,T){const A=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ar(r.x,r.y,{format:Za,type:Nr})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,A,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,A,d,_,null)}function x(E,T,A,y){let b=null;const R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)b=R;else if(b=A.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=b.uuid,I=T.uuid;let O=c[D];O===void 0&&(O={},c[D]=O);let F=O[I];F===void 0&&(F=b.clone(),O[I]=F,T.addEventListener("dispose",M)),b=F}if(b.visible=T.visible,b.wireframe=T.wireframe,y===Ro?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=i.properties.get(b);D.light=A}return b}function v(E,T,A,y,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Ro)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const I=t.update(E),O=E.material;if(Array.isArray(O)){const F=I.groups;for(let z=0,U=F.length;z<U;z++){const H=F[z],K=O[H.materialIndex];if(K&&K.visible){const L=x(E,K,y,b);E.onBeforeShadow(i,E,T,A,I,L,H),i.renderBufferDirect(A,null,I,L,E,H),E.onAfterShadow(i,E,T,A,I,L,H)}}}else if(O.visible){const F=x(E,O,y,b);E.onBeforeShadow(i,E,T,A,I,F,null),i.renderBufferDirect(A,null,I,F,E,null),E.onAfterShadow(i,E,T,A,I,F,null)}}const D=E.children;for(let I=0,O=D.length;I<O;I++)v(D[I],T,A,y,b)}function M(E){E.target.removeEventListener("dispose",M);for(const A in c){const y=c[A],b=E.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const wA={[Uh]:Oh,[Bh]:Vh,[kh]:Hh,[Ya]:zh,[Oh]:Uh,[Vh]:Bh,[Hh]:kh,[zh]:Ya};function AA(i,t){function e(){let B=!1;const ht=new Xe;let it=null;const dt=new Xe(0,0,0,0);return{setMask:function(nt){it!==nt&&!B&&(i.colorMask(nt,nt,nt,nt),it=nt)},setLocked:function(nt){B=nt},setClear:function(nt,et,ft,Ht,me){me===!0&&(nt*=Ht,et*=Ht,ft*=Ht),ht.set(nt,et,ft,Ht),dt.equals(ht)===!1&&(i.clearColor(nt,et,ft,Ht),dt.copy(ht))},reset:function(){B=!1,it=null,dt.set(-1,0,0,0)}}}function n(){let B=!1,ht=!1,it=null,dt=null,nt=null;return{setReversed:function(et){if(ht!==et){const ft=t.get("EXT_clip_control");et?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),ht=et;const Ht=nt;nt=null,this.setClear(Ht)}},getReversed:function(){return ht},setTest:function(et){et?tt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(et){it!==et&&!B&&(i.depthMask(et),it=et)},setFunc:function(et){if(ht&&(et=wA[et]),dt!==et){switch(et){case Uh:i.depthFunc(i.NEVER);break;case Oh:i.depthFunc(i.ALWAYS);break;case Bh:i.depthFunc(i.LESS);break;case Ya:i.depthFunc(i.LEQUAL);break;case kh:i.depthFunc(i.EQUAL);break;case zh:i.depthFunc(i.GEQUAL);break;case Vh:i.depthFunc(i.GREATER);break;case Hh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=et}},setLocked:function(et){B=et},setClear:function(et){nt!==et&&(ht&&(et=1-et),i.clearDepth(et),nt=et)},reset:function(){B=!1,it=null,dt=null,nt=null,ht=!1}}}function r(){let B=!1,ht=null,it=null,dt=null,nt=null,et=null,ft=null,Ht=null,me=null;return{setTest:function(vt){B||(vt?tt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(vt){ht!==vt&&!B&&(i.stencilMask(vt),ht=vt)},setFunc:function(vt,It,jt){(it!==vt||dt!==It||nt!==jt)&&(i.stencilFunc(vt,It,jt),it=vt,dt=It,nt=jt)},setOp:function(vt,It,jt){(et!==vt||ft!==It||Ht!==jt)&&(i.stencilOp(vt,It,jt),et=vt,ft=It,Ht=jt)},setLocked:function(vt){B=vt},setClear:function(vt){me!==vt&&(i.clearStencil(vt),me=vt)},reset:function(){B=!1,ht=null,it=null,dt=null,nt=null,et=null,ft=null,Ht=null,me=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,S=null,x=null,v=null,M=null,E=null,T=new Se(0,0,0),A=0,y=!1,b=null,R=null,D=null,I=null,O=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,U=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=U>=1):H.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=U>=2);let K=null,L={};const j=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),bt=new Xe().fromArray(j),Lt=new Xe().fromArray(Mt);function At(B,ht,it,dt){const nt=new Uint8Array(4),et=i.createTexture();i.bindTexture(B,et),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<it;ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(ht+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return et}const q={};q[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Ya),Bt(!1),W(Qm),tt(i.CULL_FACE),zt(Cr);function tt(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function ut(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ct(B,ht){return f[B]!==ht?(i.bindFramebuffer(B,ht),f[B]=ht,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function pt(B,ht){let it=d,dt=!1;if(B){it=h.get(ht),it===void 0&&(it=[],h.set(ht,it));const nt=B.textures;if(it.length!==nt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let et=0,ft=nt.length;et<ft;et++)it[et]=i.COLOR_ATTACHMENT0+et;it.length=nt.length,dt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,dt=!0);dt&&i.drawBuffers(it)}function Ft(B){return p!==B?(i.useProgram(B),p=B,!0):!1}const ae={[Rs]:i.FUNC_ADD,[DM]:i.FUNC_SUBTRACT,[LM]:i.FUNC_REVERSE_SUBTRACT};ae[NM]=i.MIN,ae[IM]=i.MAX;const xt={[FM]:i.ZERO,[UM]:i.ONE,[OM]:i.SRC_COLOR,[Ih]:i.SRC_ALPHA,[GM]:i.SRC_ALPHA_SATURATE,[VM]:i.DST_COLOR,[kM]:i.DST_ALPHA,[BM]:i.ONE_MINUS_SRC_COLOR,[Fh]:i.ONE_MINUS_SRC_ALPHA,[HM]:i.ONE_MINUS_DST_COLOR,[zM]:i.ONE_MINUS_DST_ALPHA,[WM]:i.CONSTANT_COLOR,[XM]:i.ONE_MINUS_CONSTANT_COLOR,[$M]:i.CONSTANT_ALPHA,[YM]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(B,ht,it,dt,nt,et,ft,Ht,me,vt){if(B===Cr){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),B!==PM){if(B!==g||vt!==y){if((m!==Rs||v!==Rs)&&(i.blendEquation(i.FUNC_ADD),m=Rs,v=Rs),vt)switch(B){case Fa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tg:i.blendFunc(i.ONE,i.ONE);break;case eg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ng:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xe("WebGLState: Invalid blending: ",B);break}else switch(B){case Fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eg:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ng:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",B);break}S=null,x=null,M=null,E=null,T.set(0,0,0),A=0,g=B,y=vt}return}nt=nt||ht,et=et||it,ft=ft||dt,(ht!==m||nt!==v)&&(i.blendEquationSeparate(ae[ht],ae[nt]),m=ht,v=nt),(it!==S||dt!==x||et!==M||ft!==E)&&(i.blendFuncSeparate(xt[it],xt[dt],xt[et],xt[ft]),S=it,x=dt,M=et,E=ft),(Ht.equals(T)===!1||me!==A)&&(i.blendColor(Ht.r,Ht.g,Ht.b,me),T.copy(Ht),A=me),g=B,y=!1}function Yt(B,ht){B.side===Mr?ut(i.CULL_FACE):tt(i.CULL_FACE);let it=B.side===jn;ht&&(it=!it),Bt(it),B.blending===Fa&&B.transparent===!1?zt(Cr):zt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const dt=B.stencilWrite;o.setTest(dt),dt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function W(B){B!==AM?(tt(i.CULL_FACE),B!==R&&(B===Qm?i.cullFace(i.BACK):B===CM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),R=B}function N(B){B!==D&&(z&&i.lineWidth(B),D=B)}function Nt(B,ht,it){B?(tt(i.POLYGON_OFFSET_FILL),(I!==ht||O!==it)&&(i.polygonOffset(ht,it),I=ht,O=it)):ut(i.POLYGON_OFFSET_FILL)}function Ut(B){B?tt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Vt(B){B===void 0&&(B=i.TEXTURE0+F-1),K!==B&&(i.activeTexture(B),K=B)}function st(B,ht,it){it===void 0&&(K===null?it=i.TEXTURE0+F-1:it=K);let dt=L[it];dt===void 0&&(dt={type:void 0,texture:void 0},L[it]=dt),(dt.type!==B||dt.texture!==ht)&&(K!==it&&(i.activeTexture(it),K=it),i.bindTexture(B,ht||q[B]),dt.type=B,dt.texture=ht)}function P(){const B=L[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(B){xe("WebGLState:",B)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(B){xe("WebGLState:",B)}}function J(){try{i.texSubImage2D(...arguments)}catch(B){xe("WebGLState:",B)}}function Q(){try{i.texSubImage3D(...arguments)}catch(B){xe("WebGLState:",B)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(B){xe("WebGLState:",B)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(B){xe("WebGLState:",B)}}function at(){try{i.texStorage2D(...arguments)}catch(B){xe("WebGLState:",B)}}function Rt(){try{i.texStorage3D(...arguments)}catch(B){xe("WebGLState:",B)}}function wt(){try{i.texImage2D(...arguments)}catch(B){xe("WebGLState:",B)}}function rt(){try{i.texImage3D(...arguments)}catch(B){xe("WebGLState:",B)}}function ot(B){bt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),bt.copy(B))}function Tt(B){Lt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Lt.copy(B))}function Pt(B,ht){let it=c.get(ht);it===void 0&&(it=new WeakMap,c.set(ht,it));let dt=it.get(B);dt===void 0&&(dt=i.getUniformBlockIndex(ht,B.name),it.set(B,dt))}function lt(B,ht){const dt=c.get(ht).get(B);l.get(ht)!==dt&&(i.uniformBlockBinding(ht,dt,B.__bindingPointIndex),l.set(ht,dt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,L={},f={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,S=null,x=null,v=null,M=null,E=null,T=new Se(0,0,0),A=0,y=!1,b=null,R=null,D=null,I=null,O=null,bt.set(0,0,i.canvas.width,i.canvas.height),Lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:ut,bindFramebuffer:Ct,drawBuffers:pt,useProgram:Ft,setBlending:zt,setMaterial:Yt,setFlipSided:Bt,setCullFace:W,setLineWidth:N,setPolygonOffset:Nt,setScissorTest:Ut,activeTexture:Vt,bindTexture:st,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:k,texImage2D:wt,texImage3D:rt,updateUBOMapping:Pt,uniformBlockBinding:lt,texStorage2D:at,texStorage3D:Rt,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:Et,scissor:ot,viewport:Tt,reset:$t}}function CA(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return d?new OffscreenCanvas(P,w):su("canvas")}function _(P,w,k){let J=1;const Q=st(P);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(J*Q.width),Et=Math.floor(J*Q.height);f===void 0&&(f=p(Z,Et));const at=w?p(Z,Et):f;return at.width=Z,at.height=Et,at.getContext("2d").drawImage(P,0,0,Z,Et),Kt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Et+")."),at}else return"data"in P&&Kt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,w,k,J,Q=!1){if(P!==null){if(i[P]!==void 0)return i[P];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=w;if(w===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),w===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),w===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),w===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),w===i.RGBA){const Et=Q?iu:de.getTransfer(J);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=Et===be?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(P,w){let k;return P?w===null||w===ur||w===fl?k=i.DEPTH24_STENCIL8:w===nr?k=i.DEPTH32F_STENCIL8:w===ul&&(k=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ur||w===fl?k=i.DEPTH_COMPONENT24:w===nr?k=i.DEPTH_COMPONENT32F:w===ul&&(k=i.DEPTH_COMPONENT16),k}function M(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){const w=P.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&u.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),b(w)}function A(P){const w=n.get(P);if(w.__webglInit===void 0)return;const k=P.source,J=h.get(k);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(P),Object.keys(J).length===0&&h.delete(k)}n.remove(P)}function y(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const k=P.source,J=h.get(k);delete J[w.__cacheKey],a.memory.textures--}function b(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=P.textures;for(let J=0,Q=k.length;J<Q;J++){const Z=n.get(k[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(P)}let R=0;function D(){R=0}function I(){const P=R;return P>=r.maxTextures&&Kt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),R+=1,P}function O(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function F(P,w){const k=n.get(P);if(P.isVideoTexture&&Ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const J=P.image;if(J===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,P,w);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+w)}function z(P,w){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){q(k,P,w);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+w)}function U(P,w){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){q(k,P,w);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+w)}function H(P,w){const k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){tt(k,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+w)}const K={[Xh]:i.REPEAT,[wr]:i.CLAMP_TO_EDGE,[$h]:i.MIRRORED_REPEAT},L={[hn]:i.NEAREST,[KM]:i.NEAREST_MIPMAP_NEAREST,[zl]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[gf]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},j={[t1]:i.NEVER,[s1]:i.ALWAYS,[e1]:i.LESS,[Yp]:i.LEQUAL,[n1]:i.EQUAL,[qp]:i.GEQUAL,[i1]:i.GREATER,[r1]:i.NOTEQUAL};function Mt(P,w){if(w.type===nr&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===gf||w.magFilter===zl||w.magFilter===Is||w.minFilter===Mn||w.minFilter===gf||w.minFilter===zl||w.minFilter===Is)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,K[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,L[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hn||w.minFilter!==zl&&w.minFilter!==Is||w.type===nr&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function bt(P,w){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let Q=h.get(J);Q===void 0&&(Q={},h.set(J,Q));const Z=O(w);if(Z!==P.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[Z].usedTimes++;const Et=Q[P.__cacheKey];Et!==void 0&&(Q[P.__cacheKey].usedTimes--,Et.usedTimes===0&&y(w)),P.__cacheKey=Z,P.__webglTexture=Q[Z].texture}return k}function Lt(P,w,k){return Math.floor(Math.floor(P/k)/w)}function At(P,w,k,J){const Z=P.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,k,J,w.data);else{Z.sort((rt,ot)=>rt.start-ot.start);let Et=0;for(let rt=1;rt<Z.length;rt++){const ot=Z[Et],Tt=Z[rt],Pt=ot.start+ot.count,lt=Lt(Tt.start,w.width,4),$t=Lt(ot.start,w.width,4);Tt.start<=Pt+1&&lt===$t&&Lt(Tt.start+Tt.count-1,w.width,4)===lt?ot.count=Math.max(ot.count,Tt.start+Tt.count-ot.start):(++Et,Z[Et]=Tt)}Z.length=Et+1;const at=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),wt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let rt=0,ot=Z.length;rt<ot;rt++){const Tt=Z[rt],Pt=Math.floor(Tt.start/4),lt=Math.ceil(Tt.count/4),$t=Pt%w.width,B=Math.floor(Pt/w.width),ht=lt,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,$t,B,ht,it,k,J,w.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function q(P,w,k){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const Q=bt(P,w),Z=w.source;e.bindTexture(J,P.__webglTexture,i.TEXTURE0+k);const Et=n.get(Z);if(Z.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const at=de.getPrimaries(de.workingColorSpace),Rt=w.colorSpace===Zr?null:de.getPrimaries(w.colorSpace),wt=w.colorSpace===Zr||at===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let rt=_(w.image,!1,r.maxTextureSize);rt=Vt(w,rt);const ot=s.convert(w.format,w.colorSpace),Tt=s.convert(w.type);let Pt=x(w.internalFormat,ot,Tt,w.colorSpace,w.isVideoTexture);Mt(J,w);let lt;const $t=w.mipmaps,B=w.isVideoTexture!==!0,ht=Et.__version===void 0||Q===!0,it=Z.dataReady,dt=M(w,rt);if(w.isDepthTexture)Pt=v(w.format===Fs,w.type),ht&&(B?e.texStorage2D(i.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,rt.width,rt.height,0,ot,Tt,null));else if(w.isDataTexture)if($t.length>0){B&&ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,$t[0].width,$t[0].height);for(let nt=0,et=$t.length;nt<et;nt++)lt=$t[nt],B?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(i.TEXTURE_2D,nt,Pt,lt.width,lt.height,0,ot,Tt,lt.data);w.generateMipmaps=!1}else B?(ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,rt.width,rt.height),it&&At(w,rt,ot,Tt)):e.texImage2D(i.TEXTURE_2D,0,Pt,rt.width,rt.height,0,ot,Tt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Pt,$t[0].width,$t[0].height,rt.depth);for(let nt=0,et=$t.length;nt<et;nt++)if(lt=$t[nt],w.format!==zi)if(ot!==null)if(B){if(it)if(w.layerUpdates.size>0){const ft=wg(lt.width,lt.height,w.format,w.type);for(const Ht of w.layerUpdates){const me=lt.data.subarray(Ht*ft/lt.data.BYTES_PER_ELEMENT,(Ht+1)*ft/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ht,lt.width,lt.height,1,ot,me)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,rt.depth,ot,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Pt,lt.width,lt.height,rt.depth,0,lt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,rt.depth,ot,Tt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Pt,lt.width,lt.height,rt.depth,0,ot,Tt,lt.data)}else{B&&ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,$t[0].width,$t[0].height);for(let nt=0,et=$t.length;nt<et;nt++)lt=$t[nt],w.format!==zi?ot!==null?B?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Pt,lt.width,lt.height,0,lt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(i.TEXTURE_2D,nt,Pt,lt.width,lt.height,0,ot,Tt,lt.data)}else if(w.isDataArrayTexture)if(B){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Pt,rt.width,rt.height,rt.depth),it)if(w.layerUpdates.size>0){const nt=wg(rt.width,rt.height,w.format,w.type);for(const et of w.layerUpdates){const ft=rt.data.subarray(et*nt/rt.data.BYTES_PER_ELEMENT,(et+1)*nt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,ot,Tt,ft)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ot,Tt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,ot,Tt,rt.data);else if(w.isData3DTexture)B?(ht&&e.texStorage3D(i.TEXTURE_3D,dt,Pt,rt.width,rt.height,rt.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ot,Tt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,ot,Tt,rt.data);else if(w.isFramebufferTexture){if(ht)if(B)e.texStorage2D(i.TEXTURE_2D,dt,Pt,rt.width,rt.height);else{let nt=rt.width,et=rt.height;for(let ft=0;ft<dt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Pt,nt,et,0,ot,Tt,null),nt>>=1,et>>=1}}else if($t.length>0){if(B&&ht){const nt=st($t[0]);e.texStorage2D(i.TEXTURE_2D,dt,Pt,nt.width,nt.height)}for(let nt=0,et=$t.length;nt<et;nt++)lt=$t[nt],B?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ot,Tt,lt):e.texImage2D(i.TEXTURE_2D,nt,Pt,ot,Tt,lt);w.generateMipmaps=!1}else if(B){if(ht){const nt=st(rt);e.texStorage2D(i.TEXTURE_2D,dt,Pt,nt.width,nt.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Tt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,ot,Tt,rt);g(w)&&m(J),Et.__version=Z.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function tt(P,w,k){if(w.image.length!==6)return;const J=bt(P,w),Q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);const Z=n.get(Q);if(Q.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const Et=de.getPrimaries(de.workingColorSpace),at=w.colorSpace===Zr?null:de.getPrimaries(w.colorSpace),Rt=w.colorSpace===Zr||Et===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const wt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,ot=[];for(let et=0;et<6;et++)!wt&&!rt?ot[et]=_(w.image[et],!0,r.maxCubemapSize):ot[et]=rt?w.image[et].image:w.image[et],ot[et]=Vt(w,ot[et]);const Tt=ot[0],Pt=s.convert(w.format,w.colorSpace),lt=s.convert(w.type),$t=x(w.internalFormat,Pt,lt,w.colorSpace),B=w.isVideoTexture!==!0,ht=Z.__version===void 0||J===!0,it=Q.dataReady;let dt=M(w,Tt);Mt(i.TEXTURE_CUBE_MAP,w);let nt;if(wt){B&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,$t,Tt.width,Tt.height);for(let et=0;et<6;et++){nt=ot[et].mipmaps;for(let ft=0;ft<nt.length;ft++){const Ht=nt[ft];w.format!==zi?Pt!==null?B?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,0,0,Ht.width,Ht.height,Pt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,$t,Ht.width,Ht.height,0,Ht.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,0,0,Ht.width,Ht.height,Pt,lt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,$t,Ht.width,Ht.height,0,Pt,lt,Ht.data)}}}else{if(nt=w.mipmaps,B&&ht){nt.length>0&&dt++;const et=st(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,$t,et.width,et.height)}for(let et=0;et<6;et++)if(rt){B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ot[et].width,ot[et].height,Pt,lt,ot[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,ot[et].width,ot[et].height,0,Pt,lt,ot[et].data);for(let ft=0;ft<nt.length;ft++){const me=nt[ft].image[et].image;B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,0,0,me.width,me.height,Pt,lt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,$t,me.width,me.height,0,Pt,lt,me.data)}}else{B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Pt,lt,ot[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,Pt,lt,ot[et]);for(let ft=0;ft<nt.length;ft++){const Ht=nt[ft];B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,0,0,Pt,lt,Ht.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,$t,Pt,lt,Ht.image[et])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ut(P,w,k,J,Q,Z){const Et=s.convert(k.format,k.colorSpace),at=s.convert(k.type),Rt=x(k.internalFormat,Et,at,k.colorSpace),wt=n.get(w),rt=n.get(k);if(rt.__renderTarget=w,!wt.__hasExternalTextures){const ot=Math.max(1,w.width>>Z),Tt=Math.max(1,w.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,Rt,ot,Tt,w.depth,0,Et,at,null):e.texImage2D(Q,Z,Rt,ot,Tt,0,Et,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Nt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,rt.__webglTexture,0,N(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,rt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(P,w,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Z=v(w.stencilBuffer,Q),Et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Nt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(w),Z,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(w),Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,P)}else{const J=w.textures;for(let Q=0;Q<J.length;Q++){const Z=J[Q],Et=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),Rt=x(Z.internalFormat,Et,at,Z.colorSpace);Nt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(w),Rt,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(w),Rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(P,w,k){const J=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,w.depthTexture);const wt=s.convert(w.depthTexture.format),rt=s.convert(w.depthTexture.type);let ot;w.depthTexture.format===Ir?ot=i.DEPTH_COMPONENT24:w.depthTexture.format===Fs&&(ot=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ot,w.width,w.height,0,wt,rt,null)}}else F(w.depthTexture,0);const Z=Q.__webglTexture,Et=N(w),at=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Rt=w.depthTexture.format===Fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ir)Nt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,at,Z,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,at,Z,0);else if(w.depthTexture.format===Fs)Nt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,at,Z,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,at,Z,0);else throw new Error("Unknown depthTexture format")}function Ft(P){const w=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(k)for(let J=0;J<6;J++)pt(w.__webglFramebuffer[J],P,J);else{const J=P.texture.mipmaps;J&&J.length>0?pt(w.__webglFramebuffer[0],P,0):pt(w.__webglFramebuffer,P,0)}else if(k){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),Ct(w.__webglDepthbuffer[J],P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ct(w.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,w,k){const J=n.get(P);w!==void 0&&ut(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ft(P)}function xt(P){const w=P.texture,k=n.get(P),J=n.get(w);P.addEventListener("dispose",T);const Q=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)k.__webglFramebuffer[at][Rt]=i.createFramebuffer()}else k.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)k.__webglFramebuffer[at]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Et)for(let at=0,Rt=Q.length;at<Rt;at++){const wt=n.get(Q[at]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Nt(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const Rt=Q[at];k.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const wt=s.convert(Rt.format,Rt.colorSpace),rt=s.convert(Rt.type),ot=x(Rt.internalFormat,wt,rt,Rt.colorSpace,P.isXRRenderTarget===!0),Tt=N(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ot,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,k.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ut(k.__webglFramebuffer[at][Rt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt);else ut(k.__webglFramebuffer[at],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(w)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let at=0,Rt=Q.length;at<Rt;at++){const wt=Q[at],rt=n.get(wt);let ot=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ot=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,rt.__webglTexture),Mt(ot,wt),ut(k.__webglFramebuffer,P,wt,i.COLOR_ATTACHMENT0+at,ot,0),g(wt)&&m(ot)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),Mt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ut(k.__webglFramebuffer[Rt],P,w,i.COLOR_ATTACHMENT0,at,Rt);else ut(k.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,at,0);g(w)&&m(at),e.unbindTexture()}P.depthBuffer&&Ft(P)}function zt(P){const w=P.textures;for(let k=0,J=w.length;k<J;k++){const Q=w[k];if(g(Q)){const Z=S(P),Et=n.get(Q).__webglTexture;e.bindTexture(Z,Et),m(Z),e.unbindTexture()}}}const Yt=[],Bt=[];function W(P){if(P.samples>0){if(Nt(P)===!1){const w=P.textures,k=P.width,J=P.height;let Q=i.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(P),at=w.length>1;if(at)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Rt=P.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const rt=n.get(w[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,Q,i.NEAREST),l===!0&&(Yt.length=0,Bt.length=0,Yt.push(i.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Yt.push(Z),Bt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const rt=n.get(w[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function N(P){return Math.min(r.maxSamples,P.samples)}function Nt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(P){const w=a.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Vt(P,w){const k=P.colorSpace,J=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Ka&&k!==Zr&&(de.getTransfer(k)===be?(J!==zi||Q!==Ai)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",k)),w}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=ae,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function RA(i,t){function e(n,r=Zr){let s;const a=de.getTransfer(r);if(n===Ai)return i.UNSIGNED_BYTE;if(n===Hp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xx)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hx)return i.BYTE;if(n===Gx)return i.SHORT;if(n===ul)return i.UNSIGNED_SHORT;if(n===Vp)return i.INT;if(n===ur)return i.UNSIGNED_INT;if(n===nr)return i.FLOAT;if(n===Nr)return i.HALF_FLOAT;if(n===$x)return i.ALPHA;if(n===Yx)return i.RGB;if(n===zi)return i.RGBA;if(n===Ir)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===qx)return i.RED;if(n===Wp)return i.RED_INTEGER;if(n===Za)return i.RG;if(n===Xp)return i.RG_INTEGER;if(n===$p)return i.RGBA_INTEGER;if(n===Nc||n===Ic||n===Fc||n===Uc)if(a===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yh||n===qh||n===Zh||n===Kh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jh||n===Jh||n===Qh||n===td||n===ed||n===nd||n===id)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jh||n===Jh)return a===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qh)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===td)return s.COMPRESSED_R11_EAC;if(n===ed)return s.COMPRESSED_SIGNED_R11_EAC;if(n===nd)return s.COMPRESSED_RG11_EAC;if(n===id)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rd||n===sd||n===ad||n===od||n===ld||n===cd||n===ud||n===fd||n===hd||n===dd||n===pd||n===md||n===gd||n===_d)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ad)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===od)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ld)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ud)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===md)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gd)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_d)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xd||n===vd||n===yd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===xd)return a===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sd||n===Md||n===Ed||n===bd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new lv(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hi({vertexShader:PA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ur(new Hu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends ro{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new LA,m={},S=e.getContextAttributes();let x=null,v=null;const M=[],E=[],T=new Ae;let A=null;const y=new wi;y.viewport=new Xe;const b=new wi;b.viewport=new Xe;const R=[y,b],D=new G1;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=M[q];return tt===void 0&&(tt=new kf,M[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=M[q];return tt===void 0&&(tt=new kf,M[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=M[q];return tt===void 0&&(tt=new kf,M[q]=tt),tt.getHandSpace()};function F(q){const tt=E.indexOf(q.inputSource);if(tt===-1)return;const ut=M[tt];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||a),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",U);for(let q=0;q<M.length;q++){const tt=E[q];tt!==null&&(E[q]=null,M[q].disconnect(tt))}I=null,O=null,g.reset();for(const q in m)delete m[q];t.setRenderTarget(x),d=null,h=null,f=null,r=null,v=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",z),r.addEventListener("inputsourceschange",U),S.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ct=null,pt=null;S.depth&&(pt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=S.stencil?Fs:Ir,Ct=S.stencil?fl:ur);const Ft={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ft),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new ar(h.textureWidth,h.textureHeight,{format:zi,type:Ai,depthTexture:new dl(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ar(d.framebufferWidth,d.framebufferHeight,{format:zi,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),At.setContext(r),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(q){for(let tt=0;tt<q.removed.length;tt++){const ut=q.removed[tt],Ct=E.indexOf(ut);Ct>=0&&(E[Ct]=null,M[Ct].disconnect(ut))}for(let tt=0;tt<q.added.length;tt++){const ut=q.added[tt];let Ct=E.indexOf(ut);if(Ct===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=E.length){E.push(ut),Ct=Ft;break}else if(E[Ft]===null){E[Ft]=ut,Ct=Ft;break}if(Ct===-1)break}const pt=M[Ct];pt&&pt.connect(ut)}}const H=new $,K=new $;function L(q,tt,ut){H.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(ut.matrixWorld);const Ct=H.distanceTo(K),pt=tt.projectionMatrix.elements,Ft=ut.projectionMatrix.elements,ae=pt[14]/(pt[10]-1),xt=pt[14]/(pt[10]+1),zt=(pt[9]+1)/pt[5],Yt=(pt[9]-1)/pt[5],Bt=(pt[8]-1)/pt[0],W=(Ft[8]+1)/Ft[0],N=ae*Bt,Nt=ae*W,Ut=Ct/(-Bt+W),Vt=Ut*-Bt;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Vt),q.translateZ(Ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const st=ae+Ut,P=xt+Ut,w=N-Vt,k=Nt+(Ct-Vt),J=zt*xt/P*st,Q=Yt*xt/P*st;q.projectionMatrix.makePerspective(w,k,J,Q,st,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,ut=q.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),D.near=b.near=y.near=tt,D.far=b.far=y.far=ut,(I!==D.near||O!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,O=D.far),D.layers.mask=q.layers.mask|6,y.layers.mask=D.layers.mask&3,b.layers.mask=D.layers.mask&5;const Ct=q.parent,pt=D.cameras;j(D,Ct);for(let Ft=0;Ft<pt.length;Ft++)j(pt[Ft],Ct);pt.length===2?L(D,y,b):D.projectionMatrix.copy(y.projectionMatrix),Mt(q,D,Ct)};function Mt(q,tt,ut){ut===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Td*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(q){return m[q]};let bt=null;function Lt(q,tt){if(u=tt.getViewerPose(c||a),p=tt,u!==null){const ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;ut.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let xt=0;xt<ut.length;xt++){const zt=ut[xt];let Yt=null;if(d!==null)Yt=d.getViewport(zt);else{const W=f.getViewSubImage(h,zt);Yt=W.viewport,xt===0&&(t.setRenderTargetTextures(v,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(v))}let Bt=R[xt];Bt===void 0&&(Bt=new wi,Bt.layers.enable(xt),Bt.viewport=new Xe,R[xt]=Bt),Bt.matrix.fromArray(zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),xt===0&&(D.matrix.copy(Bt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(Bt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const xt=f.getDepthInformation(ut[0]);xt&&xt.isValid&&xt.texture&&g.init(xt,r.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let xt=0;xt<ut.length;xt++){const zt=ut[xt].camera;if(zt){let Yt=m[zt];Yt||(Yt=new lv,m[zt]=Yt);const Bt=f.getCameraImage(zt);Yt.sourceTexture=Bt}}}}for(let ut=0;ut<M.length;ut++){const Ct=E[ut],pt=M[ut];Ct!==null&&pt!==void 0&&pt.update(Ct,tt,c||a)}bt&&bt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const At=new uv;At.setAnimationLoop(Lt),this.setAnimationLoop=function(q){bt=q},this.dispose=function(){}}}const Ms=new Fr,IA=new Ye;function FA(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,iv(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,S,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===jn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===jn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,v=S.envMapRotation;x&&(g.envMap.value=x,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(Ms)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function UA(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=r[S.id];v===void 0&&(p(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",g));const M=x.program;n.updateUBOMapping(S,M);const E=t.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function u(S){const x=f();S.__bindingPointIndex=x;const v=i.createBuffer(),M=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=r[S.id],v=S.uniforms,M=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=v.length;E<T;E++){const A=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,b=A.length;y<b;y++){const R=A[y];if(d(R,E,y,M)===!0){const D=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let F=0;F<I.length;F++){const z=I[F],U=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+O,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,O),O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,x,v,M){const E=S.value,T=x+"_"+v;if(M[T]===void 0)return typeof E=="number"||typeof E=="boolean"?M[T]=E:M[T]=E.clone(),!0;{const A=M[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return M[T]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function p(S){const x=S.uniforms;let v=0;const M=16;for(let T=0,A=x.length;T<A;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,R=y.length;b<R;b++){const D=y[b],I=Array.isArray(D.value)?D.value:[D.value];for(let O=0,F=I.length;O<F;O++){const z=I[O],U=_(z),H=v%M,K=H%U.boundary,L=H+K;v+=K,L!==0&&M-L<U.storage&&(v+=M-L),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=U.storage}}}const E=v%M;return E>0&&(v+=M-E),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Kt("WebGLRenderer: Unsupported uniform value type.",S),x}function g(S){const x=S.target;x.removeEventListener("dispose",g);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const OA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function BA(){return Xi===null&&(Xi=new N1(OA,16,16,Za,Nr),Xi.name="DFG_LUT",Xi.minFilter=Mn,Xi.magFilter=Mn,Xi.wrapS=wr,Xi.wrapT=wr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class kA{constructor(t={}){const{canvas:e=a1(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ai}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,g=new Set([$p,Xp,Wp]),m=new Set([Ai,ur,ul,fl,Hp,Gp]),S=new Uint32Array(4),x=new Int32Array(4);let v=null,M=null;const E=[],T=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=Ei;let R=0,D=0,I=null,O=-1,F=null;const z=new Xe,U=new Xe;let H=null;const K=new Se(0);let L=0,j=e.width,Mt=e.height,bt=1,Lt=null,At=null;const q=new Xe(0,0,j,Mt),tt=new Xe(0,0,j,Mt);let ut=!1;const Ct=new ov;let pt=!1,Ft=!1;const ae=new Ye,xt=new $,zt=new Xe,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function W(){return I===null?bt:1}let N=n;function Nt(C,V){return e.getContext(C,V)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zp}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",vt,!1),N===null){const V="webgl2";if(N=Nt(V,C),N===null)throw Nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw xe("WebGLRenderer: "+C.message),C}let Ut,Vt,st,P,w,k,J,Q,Z,Et,at,Rt,wt,rt,ot,Tt,Pt,lt,$t,B,ht,it,dt,nt;function et(){Ut=new BT(N),Ut.init(),it=new RA(N,Ut),Vt=new RT(N,Ut,t,it),st=new AA(N,Ut),Vt.reversedDepthBuffer&&h&&st.buffers.depth.setReversed(!0),P=new VT(N),w=new hA,k=new CA(N,Ut,st,w,Vt,it,P),J=new DT(y),Q=new OT(y),Z=new X1(N),dt=new AT(N,Z),Et=new kT(N,Z,P,dt),at=new GT(N,Et,Z,P),$t=new HT(N,Vt,k),Tt=new PT(w),Rt=new fA(y,J,Q,Ut,Vt,dt,Tt),wt=new FA(y,w),rt=new pA,ot=new yA(Ut),lt=new wT(y,J,Q,st,at,p,l),Pt=new TA(y,at,Vt),nt=new UA(N,P,Vt,st),B=new CT(N,Ut,P),ht=new zT(N,Ut,P),P.programs=Rt.programs,y.capabilities=Vt,y.extensions=Ut,y.properties=w,y.renderLists=rt,y.shadowMap=Pt,y.state=st,y.info=P}et(),_!==Ai&&(A=new XT(_,e.width,e.height,r,s));const ft=new NA(y,N);this.xr=ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(C){C!==void 0&&(bt=C,this.setSize(j,Mt,!1))},this.getSize=function(C){return C.set(j,Mt)},this.setSize=function(C,V,Y=!0){if(ft.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,Mt=V,e.width=Math.floor(C*bt),e.height=Math.floor(V*bt),Y===!0&&(e.style.width=C+"px",e.style.height=V+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(j*bt,Mt*bt).floor()},this.setDrawingBufferSize=function(C,V,Y){j=C,Mt=V,bt=Y,e.width=Math.floor(C*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(_===Ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,V,Y,X){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,V,Y,X),st.viewport(z.copy(q).multiplyScalar(bt).round())},this.getScissor=function(C){return C.copy(tt)},this.setScissor=function(C,V,Y,X){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,V,Y,X),st.scissor(U.copy(tt).multiplyScalar(bt).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){st.setScissorTest(ut=C)},this.setOpaqueSort=function(C){Lt=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,Y=!0){let X=0;if(C){let G=!1;if(I!==null){const ct=I.texture.format;G=g.has(ct)}if(G){const ct=I.texture.type,yt=m.has(ct),mt=lt.getClearColor(),St=lt.getClearAlpha(),Ot=mt.r,Xt=mt.g,Gt=mt.b;yt?(S[0]=Ot,S[1]=Xt,S[2]=Gt,S[3]=St,N.clearBufferuiv(N.COLOR,0,S)):(x[0]=Ot,x[1]=Xt,x[2]=Gt,x[3]=St,N.clearBufferiv(N.COLOR,0,x))}else X|=N.COLOR_BUFFER_BIT}V&&(X|=N.DEPTH_BUFFER_BIT),Y&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),lt.dispose(),rt.dispose(),ot.dispose(),w.dispose(),J.dispose(),Q.dispose(),at.dispose(),dt.dispose(),nt.dispose(),Rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ge),ft.removeEventListener("sessionend",ne),Me.stop()};function Ht(C){C.preventDefault(),og("WebGLRenderer: Context Lost."),b=!0}function me(){og("WebGLRenderer: Context Restored."),b=!1;const C=P.autoReset,V=Pt.enabled,Y=Pt.autoUpdate,X=Pt.needsUpdate,G=Pt.type;et(),P.autoReset=C,Pt.enabled=V,Pt.autoUpdate=Y,Pt.needsUpdate=X,Pt.type=G}function vt(C){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function It(C){const V=C.target;V.removeEventListener("dispose",It),jt(V)}function jt(C){gt(C),w.remove(C)}function gt(C){const V=w.get(C).programs;V!==void 0&&(V.forEach(function(Y){Rt.releaseProgram(Y)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Y,X,G,ct){V===null&&(V=Yt);const yt=G.isMesh&&G.matrixWorld.determinant()<0,mt=Je(C,V,Y,X,G);st.setMaterial(X,yt);let St=Y.index,Ot=1;if(X.wireframe===!0){if(St=Et.getWireframeAttribute(Y),St===void 0)return;Ot=2}const Xt=Y.drawRange,Gt=Y.attributes.position;let ie=Xt.start*Ot,we=(Xt.start+Xt.count)*Ot;ct!==null&&(ie=Math.max(ie,ct.start*Ot),we=Math.min(we,(ct.start+ct.count)*Ot)),St!==null?(ie=Math.max(ie,0),we=Math.min(we,St.count)):Gt!=null&&(ie=Math.max(ie,0),we=Math.min(we,Gt.count));const ze=we-ie;if(ze<0||ze===1/0)return;dt.setup(G,X,mt,Y,St);let Ve,Re=B;if(St!==null&&(Ve=Z.get(St),Re=ht,Re.setIndex(Ve)),G.isMesh)X.wireframe===!0?(st.setLineWidth(X.wireframeLinewidth*W()),Re.setMode(N.LINES)):Re.setMode(N.TRIANGLES);else if(G.isLine){let Wt=X.linewidth;Wt===void 0&&(Wt=1),st.setLineWidth(Wt*W()),G.isLineSegments?Re.setMode(N.LINES):G.isLineLoop?Re.setMode(N.LINE_LOOP):Re.setMode(N.LINE_STRIP)}else G.isPoints?Re.setMode(N.POINTS):G.isSprite&&Re.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Wt=G._multiDrawStarts,Ee=G._multiDrawCounts,_e=G._multiDrawCount,ni=St?Z.get(St).bytesPerElement:1,na=w.get(X).currentProgram.getUniforms();for(let ii=0;ii<_e;ii++)na.setValue(N,"_gl_DrawID",ii),Re.render(Wt[ii]/ni,Ee[ii])}else if(G.isInstancedMesh)Re.renderInstances(ie,ze,G.count);else if(Y.isInstancedBufferGeometry){const Wt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,Wt);Re.renderInstances(ie,ze,Ee)}else Re.render(ie,ze)};function qt(C,V,Y){C.transparent===!0&&C.side===Mr&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Te(C,V,Y),C.side=us,C.needsUpdate=!0,Te(C,V,Y),C.side=Mr):Te(C,V,Y)}this.compile=function(C,V,Y=null){Y===null&&(Y=C),M=ot.get(Y),M.init(V),T.push(M),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),C!==Y&&C.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();const X=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ct=G.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){const mt=ct[yt];qt(mt,Y,G),X.add(mt)}else qt(ct,Y,G),X.add(ct)}),M=T.pop(),X},this.compileAsync=function(C,V,Y=null){const X=this.compile(C,V,Y);return new Promise(G=>{function ct(){if(X.forEach(function(yt){w.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){G(C);return}setTimeout(ct,10)}Ut.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let kt=null;function Zt(C){kt&&kt(C)}function Ge(){Me.stop()}function ne(){Me.start()}const Me=new uv;Me.setAnimationLoop(Zt),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(C){kt=C,ft.setAnimationLoop(C),C===null?Me.stop():Me.start()},ft.addEventListener("sessionstart",Ge),ft.addEventListener("sessionend",ne),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Y=ft.enabled===!0&&ft.isPresenting===!0,X=A!==null&&(I===null||Y)&&A.begin(y,I);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(V),V=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,V,I),M=ot.get(C,T.length),M.init(V),T.push(M),ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ct.setFromProjectionMatrix(ae,ir,V.reversedDepth),Ft=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,Ft),v=rt.get(C,E.length),v.init(),E.push(v),ft.enabled===!0&&ft.isPresenting===!0){const yt=y.xr.getDepthSensingMesh();yt!==null&&qe(yt,V,-1/0,y.sortObjects)}qe(C,V,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Lt,At),Bt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Bt&&lt.addToRenderList(v,C),this.info.render.frame++,pt===!0&&Tt.beginShadows();const G=M.state.shadowsArray;if(Pt.render(G,C,V),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&A.hasRenderPass())===!1){const yt=v.opaque,mt=v.transmissive;if(M.setupLights(),V.isArrayCamera){const St=V.cameras;if(mt.length>0)for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const Gt=St[Ot];Ce(yt,mt,C,Gt)}Bt&&lt.render(C);for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const Gt=St[Ot];Ie(v,C,Gt,Gt.viewport)}}else mt.length>0&&Ce(yt,mt,C,V),Bt&&lt.render(C),Ie(v,C,V)}I!==null&&D===0&&(k.updateMultisampleRenderTarget(I),k.updateRenderTargetMipmap(I)),X&&A.end(y),C.isScene===!0&&C.onAfterRender(y,C,V),dt.resetDefaultState(),O=-1,F=null,T.pop(),T.length>0?(M=T[T.length-1],pt===!0&&Tt.setGlobalState(y.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function qe(C,V,Y,X){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ct.intersectsSprite(C)){X&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ae);const yt=at.update(C),mt=C.material;mt.visible&&v.push(C,yt,mt,Y,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ct.intersectsObject(C))){const yt=at.update(C),mt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),zt.copy(yt.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(ae)),Array.isArray(mt)){const St=yt.groups;for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const Gt=St[Ot],ie=mt[Gt.materialIndex];ie&&ie.visible&&v.push(C,yt,ie,Y,zt.z,Gt)}}else mt.visible&&v.push(C,yt,mt,Y,zt.z,null)}}const ct=C.children;for(let yt=0,mt=ct.length;yt<mt;yt++)qe(ct[yt],V,Y,X)}function Ie(C,V,Y,X){const{opaque:G,transmissive:ct,transparent:yt}=C;M.setupLightsView(Y),pt===!0&&Tt.setGlobalState(y.clippingPlanes,Y),X&&st.viewport(z.copy(X)),G.length>0&&ge(G,V,Y),ct.length>0&&ge(ct,V,Y),yt.length>0&&ge(yt,V,Y),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ce(C,V,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){const ie=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new ar(1,1,{generateMipmaps:!0,type:ie?Nr:Ai,minFilter:Is,samples:Vt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace})}const ct=M.state.transmissionRenderTarget[X.id],yt=X.viewport||z;ct.setSize(yt.z*y.transmissionResolutionScale,yt.w*y.transmissionResolutionScale);const mt=y.getRenderTarget(),St=y.getActiveCubeFace(),Ot=y.getActiveMipmapLevel();y.setRenderTarget(ct),y.getClearColor(K),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear(),Bt&&lt.render(Y);const Xt=y.toneMapping;y.toneMapping=sr;const Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),pt===!0&&Tt.setGlobalState(y.clippingPlanes,X),ge(C,Y,X),k.updateMultisampleRenderTarget(ct),k.updateRenderTargetMipmap(ct),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let we=0,ze=V.length;we<ze;we++){const Ve=V[we],{object:Re,geometry:Wt,material:Ee,group:_e}=Ve;if(Ee.side===Mr&&Re.layers.test(X.layers)){const ni=Ee.side;Ee.side=jn,Ee.needsUpdate=!0,kn(Re,Y,X,Wt,Ee,_e),Ee.side=ni,Ee.needsUpdate=!0,ie=!0}}ie===!0&&(k.updateMultisampleRenderTarget(ct),k.updateRenderTargetMipmap(ct))}y.setRenderTarget(mt,St,Ot),y.setClearColor(K,L),Gt!==void 0&&(X.viewport=Gt),y.toneMapping=Xt}function ge(C,V,Y){const X=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ct=C.length;G<ct;G++){const yt=C[G],{object:mt,geometry:St,group:Ot}=yt;let Xt=yt.material;Xt.allowOverride===!0&&X!==null&&(Xt=X),mt.layers.test(Y.layers)&&kn(mt,V,Y,St,Xt,Ot)}}function kn(C,V,Y,X,G,ct){C.onBeforeRender(y,V,Y,X,G,ct),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(y,V,Y,X,C,ct),G.transparent===!0&&G.side===Mr&&G.forceSinglePass===!1?(G.side=jn,G.needsUpdate=!0,y.renderBufferDirect(Y,V,X,G,C,ct),G.side=us,G.needsUpdate=!0,y.renderBufferDirect(Y,V,X,G,C,ct),G.side=Mr):y.renderBufferDirect(Y,V,X,G,C,ct),C.onAfterRender(y,V,Y,X,G,ct)}function Te(C,V,Y){V.isScene!==!0&&(V=Yt);const X=w.get(C),G=M.state.lights,ct=M.state.shadowsArray,yt=G.state.version,mt=Rt.getParameters(C,G.state,ct,V,Y),St=Rt.getProgramCacheKey(mt);let Ot=X.programs;X.environment=C.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(C.isMeshStandardMaterial?Q:J).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ot===void 0&&(C.addEventListener("dispose",It),Ot=new Map,X.programs=Ot);let Xt=Ot.get(St);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===yt)return ei(C,mt),Xt}else mt.uniforms=Rt.getUniforms(C),C.onBeforeCompile(mt,y),Xt=Rt.acquireProgram(mt,St),Ot.set(St,Xt),X.uniforms=mt.uniforms;const Gt=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=Tt.uniform),ei(C,mt),X.needsLights=sn(C),X.lightsStateVersion=yt,X.needsLights&&(Gt.ambientLightColor.value=G.state.ambient,Gt.lightProbe.value=G.state.probe,Gt.directionalLights.value=G.state.directional,Gt.directionalLightShadows.value=G.state.directionalShadow,Gt.spotLights.value=G.state.spot,Gt.spotLightShadows.value=G.state.spotShadow,Gt.rectAreaLights.value=G.state.rectArea,Gt.ltc_1.value=G.state.rectAreaLTC1,Gt.ltc_2.value=G.state.rectAreaLTC2,Gt.pointLights.value=G.state.point,Gt.pointLightShadows.value=G.state.pointShadow,Gt.hemisphereLights.value=G.state.hemi,Gt.directionalShadowMap.value=G.state.directionalShadowMap,Gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Gt.spotShadowMap.value=G.state.spotShadowMap,Gt.spotLightMatrix.value=G.state.spotLightMatrix,Gt.spotLightMap.value=G.state.spotLightMap,Gt.pointShadowMap.value=G.state.pointShadowMap,Gt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function pn(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Oc.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function ei(C,V){const Y=w.get(C);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Je(C,V,Y,X,G){V.isScene!==!0&&(V=Yt),k.resetTextureUnits();const ct=V.fog,yt=X.isMeshStandardMaterial?V.environment:null,mt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ka,St=(X.isMeshStandardMaterial?Q:J).get(X.envMap||yt),Ot=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xt=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Gt=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,we=!!Y.morphAttributes.color;let ze=sr;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ze=y.toneMapping);const Ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Re=Ve!==void 0?Ve.length:0,Wt=w.get(X),Ee=M.state.lights;if(pt===!0&&(Ft===!0||C!==F)){const Tn=C===F&&X.id===O;Tt.setState(X,C,Tn)}let _e=!1;X.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ee.state.version||Wt.outputColorSpace!==mt||G.isBatchedMesh&&Wt.batching===!1||!G.isBatchedMesh&&Wt.batching===!0||G.isBatchedMesh&&Wt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Wt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Wt.instancing===!1||!G.isInstancedMesh&&Wt.instancing===!0||G.isSkinnedMesh&&Wt.skinning===!1||!G.isSkinnedMesh&&Wt.skinning===!0||G.isInstancedMesh&&Wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Wt.instancingMorph===!1&&G.morphTexture!==null||Wt.envMap!==St||X.fog===!0&&Wt.fog!==ct||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==Ot||Wt.vertexTangents!==Xt||Wt.morphTargets!==Gt||Wt.morphNormals!==ie||Wt.morphColors!==we||Wt.toneMapping!==ze||Wt.morphTargetsCount!==Re)&&(_e=!0):(_e=!0,Wt.__version=X.version);let ni=Wt.currentProgram;_e===!0&&(ni=Te(X,V,G));let na=!1,ii=!1,lo=!1;const Le=ni.getUniforms(),zn=Wt.uniforms;if(st.useProgram(ni.program)&&(na=!0,ii=!0,lo=!0),X.id!==O&&(O=X.id,ii=!0),na||F!==C){st.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Le.setValue(N,"projectionMatrix",C.projectionMatrix),Le.setValue(N,"viewMatrix",C.matrixWorldInverse);const Vn=Le.map.cameraPosition;Vn!==void 0&&Vn.setValue(N,xt.setFromMatrixPosition(C.matrixWorld)),Vt.logarithmicDepthBuffer&&Le.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Le.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,ii=!0,lo=!0)}if(Wt.needsLights&&(Ee.state.directionalShadowMap.length>0&&Le.setValue(N,"directionalShadowMap",Ee.state.directionalShadowMap,k),Ee.state.spotShadowMap.length>0&&Le.setValue(N,"spotShadowMap",Ee.state.spotShadowMap,k),Ee.state.pointShadowMap.length>0&&Le.setValue(N,"pointShadowMap",Ee.state.pointShadowMap,k)),G.isSkinnedMesh){Le.setOptional(N,G,"bindMatrix"),Le.setOptional(N,G,"bindMatrixInverse");const Tn=G.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Le.setValue(N,"boneTexture",Tn.boneTexture,k))}G.isBatchedMesh&&(Le.setOptional(N,G,"batchingTexture"),Le.setValue(N,"batchingTexture",G._matricesTexture,k),Le.setOptional(N,G,"batchingIdTexture"),Le.setValue(N,"batchingIdTexture",G._indirectTexture,k),Le.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Le.setValue(N,"batchingColorTexture",G._colorsTexture,k));const yi=Y.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&$t.update(G,Y,ni),(ii||Wt.receiveShadow!==G.receiveShadow)&&(Wt.receiveShadow=G.receiveShadow,Le.setValue(N,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zn.envMap.value=St,zn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(zn.envMapIntensity.value=V.environmentIntensity),zn.dfgLUT!==void 0&&(zn.dfgLUT.value=BA()),ii&&(Le.setValue(N,"toneMappingExposure",y.toneMappingExposure),Wt.needsLights&&Qe(zn,lo),ct&&X.fog===!0&&wt.refreshFogUniforms(zn,ct),wt.refreshMaterialUniforms(zn,X,bt,Mt,M.state.transmissionRenderTarget[C.id]),Oc.upload(N,pn(Wt),zn,k)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Oc.upload(N,pn(Wt),zn,k),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Le.setValue(N,"center",G.center),Le.setValue(N,"modelViewMatrix",G.modelViewMatrix),Le.setValue(N,"normalMatrix",G.normalMatrix),Le.setValue(N,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Tn=X.uniformsGroups;for(let Vn=0,Qu=Tn.length;Vn<Qu;Vn++){const ps=Tn[Vn];nt.update(ps,ni),nt.bind(ps,ni)}}return ni}function Qe(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function sn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,V,Y){const X=w.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),w.get(C.texture).__webglTexture=V,w.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const Y=w.get(C);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const hr=N.createFramebuffer();this.setRenderTarget=function(C,V=0,Y=0){I=C,R=V,D=Y;let X=null,G=!1,ct=!1;if(C){const mt=w.get(C);if(mt.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(N.FRAMEBUFFER,mt.__webglFramebuffer),z.copy(C.viewport),U.copy(C.scissor),H=C.scissorTest,st.viewport(z),st.scissor(U),st.setScissorTest(H),O=-1;return}else if(mt.__webglFramebuffer===void 0)k.setupRenderTarget(C);else if(mt.__hasExternalTextures)k.rebindTextures(C,w.get(C.texture).__webglTexture,w.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xt=C.depthTexture;if(mt.__boundDepthTexture!==Xt){if(Xt!==null&&w.has(Xt)&&(C.width!==Xt.image.width||C.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(C)}}const St=C.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ct=!0);const Ot=w.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ot[V])?X=Ot[V][Y]:X=Ot[V],G=!0):C.samples>0&&k.useMultisampledRTT(C)===!1?X=w.get(C).__webglMultisampledFramebuffer:Array.isArray(Ot)?X=Ot[Y]:X=Ot,z.copy(C.viewport),U.copy(C.scissor),H=C.scissorTest}else z.copy(q).multiplyScalar(bt).floor(),U.copy(tt).multiplyScalar(bt).floor(),H=ut;if(Y!==0&&(X=hr),st.bindFramebuffer(N.FRAMEBUFFER,X)&&st.drawBuffers(C,X),st.viewport(z),st.scissor(U),st.setScissorTest(H),G){const mt=w.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,mt.__webglTexture,Y)}else if(ct){const mt=V;for(let St=0;St<C.textures.length;St++){const Ot=w.get(C.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,Ot.__webglTexture,Y,mt)}}else if(C!==null&&Y!==0){const mt=w.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,Y)}O=-1},this.readRenderTargetPixels=function(C,V,Y,X,G,ct,yt,mt=0){if(!(C&&C.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){st.bindFramebuffer(N.FRAMEBUFFER,St);try{const Ot=C.textures[mt],Xt=Ot.format,Gt=Ot.type;if(!Vt.textureFormatReadable(Xt)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Gt)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-X&&Y>=0&&Y<=C.height-G&&(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt),N.readPixels(V,Y,X,G,it.convert(Xt),it.convert(Gt),ct))}finally{const Ot=I!==null?w.get(I).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,V,Y,X,G,ct,yt,mt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St)if(V>=0&&V<=C.width-X&&Y>=0&&Y<=C.height-G){st.bindFramebuffer(N.FRAMEBUFFER,St);const Ot=C.textures[mt],Xt=Ot.format,Gt=Ot.type;if(!Vt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,ct.byteLength,N.STREAM_READ),C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt),N.readPixels(V,Y,X,G,it.convert(Xt),it.convert(Gt),0);const we=I!==null?w.get(I).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,we);const ze=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await o1(N,ze,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ct),N.deleteBuffer(ie),N.deleteSync(ze),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,Y=0){const X=Math.pow(2,-Y),G=Math.floor(C.image.width*X),ct=Math.floor(C.image.height*X),yt=V!==null?V.x:0,mt=V!==null?V.y:0;k.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,yt,mt,G,ct),st.unbindTexture()};const ea=N.createFramebuffer(),an=N.createFramebuffer();this.copyTextureToTexture=function(C,V,Y=null,X=null,G=0,ct=null){ct===null&&(G!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=G,G=0):ct=0);let yt,mt,St,Ot,Xt,Gt,ie,we,ze;const Ve=C.isCompressedTexture?C.mipmaps[ct]:C.image;if(Y!==null)yt=Y.max.x-Y.min.x,mt=Y.max.y-Y.min.y,St=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,Xt=Y.min.y,Gt=Y.isBox3?Y.min.z:0;else{const yi=Math.pow(2,-G);yt=Math.floor(Ve.width*yi),mt=Math.floor(Ve.height*yi),C.isDataArrayTexture?St=Ve.depth:C.isData3DTexture?St=Math.floor(Ve.depth*yi):St=1,Ot=0,Xt=0,Gt=0}X!==null?(ie=X.x,we=X.y,ze=X.z):(ie=0,we=0,ze=0);const Re=it.convert(V.format),Wt=it.convert(V.type);let Ee;V.isData3DTexture?(k.setTexture3D(V,0),Ee=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),Ee=N.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const _e=N.getParameter(N.UNPACK_ROW_LENGTH),ni=N.getParameter(N.UNPACK_IMAGE_HEIGHT),na=N.getParameter(N.UNPACK_SKIP_PIXELS),ii=N.getParameter(N.UNPACK_SKIP_ROWS),lo=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ve.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ve.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const Le=C.isDataArrayTexture||C.isData3DTexture,zn=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const yi=w.get(C),Tn=w.get(V),Vn=w.get(yi.__renderTarget),Qu=w.get(Tn.__renderTarget);st.bindFramebuffer(N.READ_FRAMEBUFFER,Vn.__webglFramebuffer),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qu.__webglFramebuffer);for(let ps=0;ps<St;ps++)Le&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(C).__webglTexture,G,Gt+ps),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(V).__webglTexture,ct,ze+ps)),N.blitFramebuffer(Ot,Xt,yt,mt,ie,we,yt,mt,N.DEPTH_BUFFER_BIT,N.NEAREST);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||w.has(C)){const yi=w.get(C),Tn=w.get(V);st.bindFramebuffer(N.READ_FRAMEBUFFER,ea),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,an);for(let Vn=0;Vn<St;Vn++)Le?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yi.__webglTexture,G,Gt+Vn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yi.__webglTexture,G),zn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tn.__webglTexture,ct,ze+Vn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tn.__webglTexture,ct),G!==0?N.blitFramebuffer(Ot,Xt,yt,mt,ie,we,yt,mt,N.COLOR_BUFFER_BIT,N.NEAREST):zn?N.copyTexSubImage3D(Ee,ct,ie,we,ze+Vn,Ot,Xt,yt,mt):N.copyTexSubImage2D(Ee,ct,ie,we,Ot,Xt,yt,mt);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Ee,ct,ie,we,ze,yt,mt,St,Re,Wt,Ve.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,ct,ie,we,ze,yt,mt,St,Re,Ve.data):N.texSubImage3D(Ee,ct,ie,we,ze,yt,mt,St,Re,Wt,Ve):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ct,ie,we,yt,mt,Re,Wt,Ve.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ct,ie,we,Ve.width,Ve.height,Re,Ve.data):N.texSubImage2D(N.TEXTURE_2D,ct,ie,we,yt,mt,Re,Wt,Ve);N.pixelStorei(N.UNPACK_ROW_LENGTH,_e),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ni),N.pixelStorei(N.UNPACK_SKIP_PIXELS,na),N.pixelStorei(N.UNPACK_SKIP_ROWS,ii),N.pixelStorei(N.UNPACK_SKIP_IMAGES,lo),ct===0&&V.generateMipmaps&&N.generateMipmap(Ee),st.unbindTexture()},this.initRenderTarget=function(C){w.get(C).__webglFramebuffer===void 0&&k.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?k.setTextureCube(C,0):C.isData3DTexture?k.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?k.setTexture2DArray(C,0):k.setTexture2D(C,0),st.unbindTexture()},this.resetState=function(){R=0,D=0,I=null,st.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class zA{constructor(t){this.canvas=t,this.renderer=null,this.scene=null,this.camera=null,this.particles=null,this.uniforms={},this.animationId=null,this.progress=0,this.themeColor=new Se("#ff6b6b")}init(){this.renderer=new kA({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new L1,this.camera=new wi(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.createParticles(),this.animate(),window.addEventListener("resize",()=>this.onResize())}createParticles(){const e=new Gi,n=new Float32Array(2e3*3),r=new Float32Array(2e3);for(let a=0;a<2e3;a++)n[a*3]=(Math.random()-.5)*20,n[a*3+1]=(Math.random()-.5)*20,n[a*3+2]=(Math.random()-.5)*10,r[a]=Math.random();e.setAttribute("position",new Li(n,3)),e.setAttribute("aRandom",new Li(r,1));const s=new Hi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uProgress:{value:0},uColor:{value:this.themeColor},uSize:{value:3},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
        attribute float aRandom;
        uniform float uTime;
        uniform float uProgress;
        uniform float uSize;
        uniform float uPixelRatio;
        varying float vAlpha;

        void main() {
          vec3 pos = position;
          pos.x += sin(uTime * 0.3 + aRandom * 6.28) * 0.5;
          pos.y += cos(uTime * 0.2 + aRandom * 6.28) * 0.5;
          pos.z += sin(uTime * 0.1 + aRandom * 3.14) * 0.3;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = uSize * uPixelRatio * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;

          vAlpha = 0.3 + aRandom * 0.5;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = vAlpha * (1.0 - dist * 2.0);
          gl_FragColor = vec4(uColor, alpha * 0.6);
        }
      `});this.particles=new B1(e,s),this.scene.add(this.particles),this.uniforms=s.uniforms}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.uniforms.uTime.value+=.01,this.uniforms.uProgress.value=this.progress,this.renderer.render(this.scene,this.camera)}setProgress(t){this.progress=t}setThemeColor(t){this.themeColor.set(t),this.uniforms.uColor&&(this.uniforms.uColor.value=this.themeColor)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.uniforms.uPixelRatio&&(this.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2))}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles?.geometry.dispose(),this.particles?.material.dispose(),this.renderer?.dispose()}}class VA{constructor(t){this.container=t,this.currentImage=null,this.parallaxEnabled=!1,this.handleScroll=this.updateParallax.bind(this)}show(t){if(!t?.src)return;this.clear();const e=document.createElement("div");e.style.cssText=`
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    `;const n=document.createElement("img"),s=t.src.startsWith("/")?`/prj-jcie/${t.src.slice(1)}`:t.src;n.src=s,n.alt=t.alt||"",n.style.cssText=`
      width: 100%;
      height: 120%;
      object-fit: cover;
      opacity: ${t.opacity??1};
      transform: translateY(-10%);
      will-change: transform;
      transition: transform 0.05s linear;
    `;const a=document.createElement("div");a.style.cssText=`
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        transparent 40%,
        transparent 60%,
        rgba(0, 0, 0, 0.4) 100%
      );
      pointer-events: none;
      z-index: 1;
    `,e.appendChild(n),e.appendChild(a),this.container.appendChild(e),this.currentImage=e,this.parallaxImg=n,this.parallaxEnabled=!0,window.addEventListener("scroll",this.handleScroll,{passive:!0})}updateParallax(){if(!this.parallaxEnabled||!this.parallaxImg)return;const t=window.scrollY||window.pageYOffset,e=window.innerHeight,n=-10+t/e*3,r=Math.max(-10,Math.min(0,n));this.parallaxImg.style.transform=`translateY(${r}%)`}hide(){this.clear()}clear(){this.parallaxEnabled=!1,window.removeEventListener("scroll",this.handleScroll),this.currentImage&&(this.currentImage.remove(),this.currentImage=null,this.parallaxImg=null)}}const HA="modulepreload",GA=function(i){return"/prj-jcie/"+i},Kg={},jg=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(e.map(u=>{if(u=GA(u),u in Kg)return;Kg[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":HA,f||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Bc(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function WA(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Kp(i){let t,e,n;i.length!==2?(t=Bc,e=(o,l)=>Bc(i(o),l),n=(o,l)=>i(o)-l):(t=i===Bc||i===WA?i:XA,e=i,n=i);function r(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const f=c+u>>>1;e(o[f],l)<0?c=f+1:u=f}while(c<u)}return c}function s(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const f=c+u>>>1;e(o[f],l)<=0?c=f+1:u=f}while(c<u)}return c}function a(o,l,c=0,u=o.length){const f=r(o,l,c,u-1);return f>c&&n(o[f-1],l)>-n(o[f],l)?f-1:f}return{left:r,center:a,right:s}}function XA(){return 0}function $A(i){return i===null?NaN:+i}const YA=Kp(Bc),qA=YA.right;Kp($A).center;function ZA(i,t){let e,n;if(t===void 0)for(const r of i)r!=null&&(e===void 0?r>=r&&(e=n=r):(e>r&&(e=r),n<r&&(n=r)));else{let r=-1;for(let s of i)(s=t(s,++r,i))!=null&&(e===void 0?s>=s&&(e=n=s):(e>s&&(e=s),n<s&&(n=s)))}return[e,n]}class or{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const s=e[r],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[n++]=o),t=a}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e=this._n,n,r,s,a=0;if(e>0){for(a=t[--e];e>0&&(n=a,r=t[--e],a=n+r,s=r-(a-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=a+r,r==n-a&&(a=n))}return a}}class Rd extends Map{constructor(t,e=JA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(Jg(this,t))}has(t){return super.has(Jg(this,t))}set(t,e){return super.set(KA(this,t),e)}delete(t){return super.delete(jA(this,t))}}function Jg({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):e}function KA({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):(i.set(n,e),e)}function jA({_intern:i,_key:t},e){const n=t(e);return i.has(n)&&(e=i.get(n),i.delete(n)),e}function JA(i){return i!==null&&typeof i=="object"?i.valueOf():i}function QA(i){return i}function tC(i,...t){return eC(i,Array.from,QA,t)}function eC(i,t,e,n){return(function r(s,a){if(a>=n.length)return e(s);const o=new Rd,l=n[a++];let c=-1;for(const u of s){const f=l(u,++c,s),h=o.get(f);h?h.push(u):o.set(f,[u])}for(const[u,f]of o)o.set(u,r(f,a));return t(o)})(i,0)}const nC=Math.sqrt(50),iC=Math.sqrt(10),rC=Math.sqrt(2);function au(i,t,e){const n=(t-i)/Math.max(0,e),r=Math.floor(Math.log10(n)),s=n/Math.pow(10,r),a=s>=nC?10:s>=iC?5:s>=rC?2:1;let o,l,c;return r<0?(c=Math.pow(10,-r)/a,o=Math.round(i*c),l=Math.round(t*c),o/c<i&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*a,o=Math.round(i/c),l=Math.round(t/c),o*c<i&&++o,l*c>t&&--l),l<o&&.5<=e&&e<2?au(i,t,e*2):[o,l,c]}function sC(i,t,e){if(t=+t,i=+i,e=+e,!(e>0))return[];if(i===t)return[i];const n=t<i,[r,s,a]=n?au(t,i,e):au(i,t,e);if(!(s>=r))return[];const o=s-r+1,l=new Array(o);if(n)if(a<0)for(let c=0;c<o;++c)l[c]=(s-c)/-a;else for(let c=0;c<o;++c)l[c]=(s-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(r+c)/-a;else for(let c=0;c<o;++c)l[c]=(r+c)*a;return l}function Pd(i,t,e){return t=+t,i=+i,e=+e,au(i,t,e)[2]}function aC(i,t,e){t=+t,i=+i,e=+e;const n=t<i,r=n?Pd(t,i,e):Pd(i,t,e);return(n?-1:1)*(r<0?1/-r:r)}function Yf(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e<n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function*oC(i){for(const t of i)yield*t}function mv(i){return Array.from(oC(i))}function Ta(i,t,e){i=+i,t=+t,e=(r=arguments.length)<2?(t=i,i=0,1):r<3?1:+e;for(var n=-1,r=Math.max(0,Math.ceil((t-i)/e))|0,s=new Array(r);++n<r;)s[n]=i+n*e;return s}function Qg(i,t){let e=0;if(t===void 0)for(let n of i)(n=+n)&&(e+=n);else{let n=-1;for(let r of i)(r=+t(r,++n,i))&&(e+=r)}return e}function lC(i){return i}var qf=1,Zf=2,Dd=3,Do=4,t0=1e-6;function cC(i){return"translate("+i+",0)"}function uC(i){return"translate(0,"+i+")"}function fC(i){return t=>+i(t)}function hC(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),e=>+i(e)+t}function dC(){return!this.__axis}function gv(i,t){var e=[],n=null,r=null,s=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=i===qf||i===Do?-1:1,u=i===Do||i===Zf?"x":"y",f=i===qf||i===Dd?cC:uC;function h(d){var p=n??(t.ticks?t.ticks.apply(t,e):t.domain()),_=r??(t.tickFormat?t.tickFormat.apply(t,e):lC),g=Math.max(s,0)+o,m=t.range(),S=+m[0]+l,x=+m[m.length-1]+l,v=(t.bandwidth?hC:fC)(t.copy(),l),M=d.selection?d.selection():d,E=M.selectAll(".domain").data([null]),T=M.selectAll(".tick").data(p,t).order(),A=T.exit(),y=T.enter().append("g").attr("class","tick"),b=T.select("line"),R=T.select("text");E=E.merge(E.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(y),b=b.merge(y.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),R=R.merge(y.append("text").attr("fill","currentColor").attr(u,c*g).attr("dy",i===qf?"0em":i===Dd?"0.71em":"0.32em")),d!==M&&(E=E.transition(d),T=T.transition(d),b=b.transition(d),R=R.transition(d),A=A.transition(d).attr("opacity",t0).attr("transform",function(D){return isFinite(D=v(D))?f(D+l):this.getAttribute("transform")}),y.attr("opacity",t0).attr("transform",function(D){var I=this.parentNode.__axis;return f((I&&isFinite(I=I(D))?I:v(D))+l)})),A.remove(),E.attr("d",i===Do||i===Zf?a?"M"+c*a+","+S+"H"+l+"V"+x+"H"+c*a:"M"+l+","+S+"V"+x:a?"M"+S+","+c*a+"V"+l+"H"+x+"V"+c*a:"M"+S+","+l+"H"+x),T.attr("opacity",1).attr("transform",function(D){return f(v(D)+l)}),b.attr(u+"2",c*s),R.attr(u,c*g).text(_),M.filter(dC).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Zf?"start":i===Do?"end":"middle"),M.each(function(){this.__axis=v})}return h.scale=function(d){return arguments.length?(t=d,h):t},h.ticks=function(){return e=Array.from(arguments),h},h.tickArguments=function(d){return arguments.length?(e=d==null?[]:Array.from(d),h):e.slice()},h.tickValues=function(d){return arguments.length?(n=d==null?null:Array.from(d),h):n&&n.slice()},h.tickFormat=function(d){return arguments.length?(r=d,h):r},h.tickSize=function(d){return arguments.length?(s=a=+d,h):s},h.tickSizeInner=function(d){return arguments.length?(s=+d,h):s},h.tickSizeOuter=function(d){return arguments.length?(a=+d,h):a},h.tickPadding=function(d){return arguments.length?(o=+d,h):o},h.offset=function(d){return arguments.length?(l=+d,h):l},h}function pC(i){return gv(Dd,i)}function mC(i){return gv(Do,i)}var gC={value:()=>{}};function _v(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new kc(e)}function kc(i){this._=i}function _C(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}kc.prototype=_v.prototype={constructor:kc,on:function(i,t){var e=this._,n=_C(i+"",e),r,s=-1,a=n.length;if(arguments.length<2){for(;++s<a;)if((r=(i=n[s]).type)&&(r=xC(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(r=(i=n[s]).type)e[r]=e0(e[r],i.name,t);else if(t==null)for(r in e)e[r]=e0(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new kc(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function xC(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function e0(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=gC,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var Ld="http://www.w3.org/1999/xhtml";const n0={svg:"http://www.w3.org/2000/svg",xhtml:Ld,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Xu(i){var t=i+="",e=t.indexOf(":");return e>=0&&(t=i.slice(0,e))!=="xmlns"&&(i=i.slice(e+1)),n0.hasOwnProperty(t)?{space:n0[t],local:i}:i}function vC(i){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Ld&&t.documentElement.namespaceURI===Ld?t.createElement(i):t.createElementNS(e,i)}}function yC(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function xv(i){var t=Xu(i);return(t.local?yC:vC)(t)}function SC(){}function jp(i){return i==null?SC:function(){return this.querySelector(i)}}function MC(i){typeof i!="function"&&(i=jp(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=new Array(a),l,c,u=0;u<a;++u)(l=s[u])&&(c=i.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),o[u]=c);return new xi(n,this._parents)}function EC(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function bC(){return[]}function vv(i){return i==null?bC:function(){return this.querySelectorAll(i)}}function TC(i){return function(){return EC(i.apply(this,arguments))}}function wC(i){typeof i=="function"?i=TC(i):i=vv(i);for(var t=this._groups,e=t.length,n=[],r=[],s=0;s<e;++s)for(var a=t[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(n.push(i.call(l,l.__data__,c,a)),r.push(l));return new xi(n,r)}function yv(i){return function(){return this.matches(i)}}function Sv(i){return function(t){return t.matches(i)}}var AC=Array.prototype.find;function CC(i){return function(){return AC.call(this.children,i)}}function RC(){return this.firstElementChild}function PC(i){return this.select(i==null?RC:CC(typeof i=="function"?i:Sv(i)))}var DC=Array.prototype.filter;function LC(){return Array.from(this.children)}function NC(i){return function(){return DC.call(this.children,i)}}function IC(i){return this.selectAll(i==null?LC:NC(typeof i=="function"?i:Sv(i)))}function FC(i){typeof i!="function"&&(i=yv(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new xi(n,this._parents)}function Mv(i){return new Array(i.length)}function UC(){return new xi(this._enter||this._groups.map(Mv),this._parents)}function ou(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}ou.prototype={constructor:ou,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function OC(i){return function(){return i}}function BC(i,t,e,n,r,s){for(var a=0,o,l=t.length,c=s.length;a<c;++a)(o=t[a])?(o.__data__=s[a],n[a]=o):e[a]=new ou(i,s[a]);for(;a<l;++a)(o=t[a])&&(r[a]=o)}function kC(i,t,e,n,r,s,a){var o,l,c=new Map,u=t.length,f=s.length,h=new Array(u),d;for(o=0;o<u;++o)(l=t[o])&&(h[o]=d=a.call(l,l.__data__,o,t)+"",c.has(d)?r[o]=l:c.set(d,l));for(o=0;o<f;++o)d=a.call(i,s[o],o,s)+"",(l=c.get(d))?(n[o]=l,l.__data__=s[o],c.delete(d)):e[o]=new ou(i,s[o]);for(o=0;o<u;++o)(l=t[o])&&c.get(h[o])===l&&(r[o]=l)}function zC(i){return i.__data__}function VC(i,t){if(!arguments.length)return Array.from(this,zC);var e=t?kC:BC,n=this._parents,r=this._groups;typeof i!="function"&&(i=OC(i));for(var s=r.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],f=r[c],h=f.length,d=HC(i.call(u,u&&u.__data__,c,n)),p=d.length,_=o[c]=new Array(p),g=a[c]=new Array(p),m=l[c]=new Array(h);e(u,f,_,g,m,d,t);for(var S=0,x=0,v,M;S<p;++S)if(v=_[S]){for(S>=x&&(x=S+1);!(M=g[x])&&++x<p;);v._next=M||null}}return a=new xi(a,n),a._enter=o,a._exit=l,a}function HC(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function GC(){return new xi(this._exit||this._groups.map(Mv),this._parents)}function WC(i,t,e){var n=this.enter(),r=this,s=this.exit();return typeof i=="function"?(n=i(n),n&&(n=n.selection())):n=n.append(i+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),n&&r?n.merge(r).order():r}function XC(i){for(var t=i.selection?i.selection():i,e=this._groups,n=t._groups,r=e.length,s=n.length,a=Math.min(r,s),o=new Array(r),l=0;l<a;++l)for(var c=e[l],u=n[l],f=c.length,h=o[l]=new Array(f),d,p=0;p<f;++p)(d=c[p]||u[p])&&(h[p]=d);for(;l<r;++l)o[l]=e[l];return new xi(o,this._parents)}function $C(){for(var i=this._groups,t=-1,e=i.length;++t<e;)for(var n=i[t],r=n.length-1,s=n[r],a;--r>=0;)(a=n[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function YC(i){i||(i=qC);function t(f,h){return f&&h?i(f.__data__,h.__data__):!f-!h}for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s){for(var a=e[s],o=a.length,l=r[s]=new Array(o),c,u=0;u<o;++u)(c=a[u])&&(l[u]=c);l.sort(t)}return new xi(r,this._parents).order()}function qC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function ZC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function KC(){return Array.from(this)}function jC(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length;r<s;++r){var a=n[r];if(a)return a}return null}function JC(){let i=0;for(const t of this)++i;return i}function QC(){return!this.node()}function tR(i){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,a=r.length,o;s<a;++s)(o=r[s])&&i.call(o,o.__data__,s,r);return this}function eR(i){return function(){this.removeAttribute(i)}}function nR(i){return function(){this.removeAttributeNS(i.space,i.local)}}function iR(i,t){return function(){this.setAttribute(i,t)}}function rR(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function sR(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(i):this.setAttribute(i,e)}}function aR(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,e)}}function oR(i,t){var e=Xu(i);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?nR:eR:typeof t=="function"?e.local?aR:sR:e.local?rR:iR)(e,t))}function Ev(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function lR(i){return function(){this.style.removeProperty(i)}}function cR(i,t,e){return function(){this.style.setProperty(i,t,e)}}function uR(i,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,e)}}function fR(i,t,e){return arguments.length>1?this.each((t==null?lR:typeof t=="function"?uR:cR)(i,t,e??"")):Ja(this.node(),i)}function Ja(i,t){return i.style.getPropertyValue(t)||Ev(i).getComputedStyle(i,null).getPropertyValue(t)}function hR(i){return function(){delete this[i]}}function dR(i,t){return function(){this[i]=t}}function pR(i,t){return function(){var e=t.apply(this,arguments);e==null?delete this[i]:this[i]=e}}function mR(i,t){return arguments.length>1?this.each((t==null?hR:typeof t=="function"?pR:dR)(i,t)):this.node()[i]}function bv(i){return i.trim().split(/^|\s+/)}function Jp(i){return i.classList||new Tv(i)}function Tv(i){this._node=i,this._names=bv(i.getAttribute("class")||"")}Tv.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function wv(i,t){for(var e=Jp(i),n=-1,r=t.length;++n<r;)e.add(t[n])}function Av(i,t){for(var e=Jp(i),n=-1,r=t.length;++n<r;)e.remove(t[n])}function gR(i){return function(){wv(this,i)}}function _R(i){return function(){Av(this,i)}}function xR(i,t){return function(){(t.apply(this,arguments)?wv:Av)(this,i)}}function vR(i,t){var e=bv(i+"");if(arguments.length<2){for(var n=Jp(this.node()),r=-1,s=e.length;++r<s;)if(!n.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?xR:t?gR:_R)(e,t))}function yR(){this.textContent=""}function SR(i){return function(){this.textContent=i}}function MR(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function ER(i){return arguments.length?this.each(i==null?yR:(typeof i=="function"?MR:SR)(i)):this.node().textContent}function bR(){this.innerHTML=""}function TR(i){return function(){this.innerHTML=i}}function wR(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function AR(i){return arguments.length?this.each(i==null?bR:(typeof i=="function"?wR:TR)(i)):this.node().innerHTML}function CR(){this.nextSibling&&this.parentNode.appendChild(this)}function RR(){return this.each(CR)}function PR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function DR(){return this.each(PR)}function LR(i){var t=typeof i=="function"?i:xv(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function NR(){return null}function IR(i,t){var e=typeof i=="function"?i:xv(i),n=t==null?NR:typeof t=="function"?t:jp(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function FR(){var i=this.parentNode;i&&i.removeChild(this)}function UR(){return this.each(FR)}function OR(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function BR(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function kR(i){return this.select(i?BR:OR)}function zR(i){return arguments.length?this.property("__data__",i):this.node().__data__}function VR(i){return function(t){i.call(this,t,this.__data__)}}function HR(i){return i.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function GR(i){return function(){var t=this.__on;if(t){for(var e=0,n=-1,r=t.length,s;e<r;++e)s=t[e],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.options):t[++n]=s;++n?t.length=n:delete this.__on}}}function WR(i,t,e){return function(){var n=this.__on,r,s=VR(t);if(n){for(var a=0,o=n.length;a<o;++a)if((r=n[a]).type===i.type&&r.name===i.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(i.type,s,e),r={type:i.type,name:i.name,value:t,listener:s,options:e},n?n.push(r):this.__on=[r]}}function XR(i,t,e){var n=HR(i+""),r,s=n.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,u;l<c;++l)for(r=0,u=o[l];r<s;++r)if((a=n[r]).type===u.type&&a.name===u.name)return u.value}return}for(o=t?WR:GR,r=0;r<s;++r)this.each(o(n[r],t,e));return this}function Cv(i,t,e){var n=Ev(i),r=n.CustomEvent;typeof r=="function"?r=new r(t,e):(r=n.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),i.dispatchEvent(r)}function $R(i,t){return function(){return Cv(this,i,t)}}function YR(i,t){return function(){return Cv(this,i,t.apply(this,arguments))}}function qR(i,t){return this.each((typeof t=="function"?YR:$R)(i,t))}function*ZR(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length,a;r<s;++r)(a=n[r])&&(yield a)}var Rv=[null];function xi(i,t){this._groups=i,this._parents=t}function ao(){return new xi([[document.documentElement]],Rv)}function KR(){return this}xi.prototype=ao.prototype={constructor:xi,select:MC,selectAll:wC,selectChild:PC,selectChildren:IC,filter:FC,data:VC,enter:UC,exit:GC,join:WC,merge:XC,selection:KR,order:$C,sort:YC,call:ZC,nodes:KC,node:jC,size:JC,empty:QC,each:tR,attr:oR,style:fR,property:mR,classed:vR,text:ER,html:AR,raise:RR,lower:DR,append:LR,insert:IR,remove:UR,clone:kR,datum:zR,on:XR,dispatch:qR,[Symbol.iterator]:ZR};function tl(i){return typeof i=="string"?new xi([[document.querySelector(i)]],[document.documentElement]):new xi([[i]],Rv)}function jR(i){let t;for(;t=i.sourceEvent;)i=t;return i}function JR(i,t){if(i=jR(i),t===void 0&&(t=i.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var n=e.createSVGPoint();return n.x=i.clientX,n.y=i.clientY,n=n.matrixTransform(t.getScreenCTM().inverse()),[n.x,n.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[i.clientX-r.left-t.clientLeft,i.clientY-r.top-t.clientTop]}}return[i.pageX,i.pageY]}function $u(i,t,e){i.prototype=t.prototype=e,e.constructor=i}function Qp(i,t){var e=Object.create(i.prototype);for(var n in t)e[n]=t[n];return e}function oo(){}var Ks=.7,Qa=1/Ks,Oa="\\s*([+-]?\\d+)\\s*",pl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",lr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",QR=/^#([0-9a-f]{3,8})$/,tP=new RegExp(`^rgb\\(${Oa},${Oa},${Oa}\\)$`),eP=new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`),nP=new RegExp(`^rgba\\(${Oa},${Oa},${Oa},${pl}\\)$`),iP=new RegExp(`^rgba\\(${lr},${lr},${lr},${pl}\\)$`),rP=new RegExp(`^hsl\\(${pl},${lr},${lr}\\)$`),sP=new RegExp(`^hsla\\(${pl},${lr},${lr},${pl}\\)$`),i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$u(oo,js,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:r0,formatHex:r0,formatHex8:aP,formatHsl:oP,formatRgb:s0,toString:s0});function r0(){return this.rgb().formatHex()}function aP(){return this.rgb().formatHex8()}function oP(){return Dv(this).formatHsl()}function s0(){return this.rgb().formatRgb()}function js(i){var t,e;return i=(i+"").trim().toLowerCase(),(t=QR.exec(i))?(e=t[1].length,t=parseInt(t[1],16),e===6?a0(t):e===3?new En(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?cc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?cc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=tP.exec(i))?new En(t[1],t[2],t[3],1):(t=eP.exec(i))?new En(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=nP.exec(i))?cc(t[1],t[2],t[3],t[4]):(t=iP.exec(i))?cc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=rP.exec(i))?c0(t[1],t[2]/100,t[3]/100,1):(t=sP.exec(i))?c0(t[1],t[2]/100,t[3]/100,t[4]):i0.hasOwnProperty(i)?a0(i0[i]):i==="transparent"?new En(NaN,NaN,NaN,0):null}function a0(i){return new En(i>>16&255,i>>8&255,i&255,1)}function cc(i,t,e,n){return n<=0&&(i=t=e=NaN),new En(i,t,e,n)}function Pv(i){return i instanceof oo||(i=js(i)),i?(i=i.rgb(),new En(i.r,i.g,i.b,i.opacity)):new En}function Nd(i,t,e,n){return arguments.length===1?Pv(i):new En(i,t,e,n??1)}function En(i,t,e,n){this.r=+i,this.g=+t,this.b=+e,this.opacity=+n}$u(En,Nd,Qp(oo,{brighter(i){return i=i==null?Qa:Math.pow(Qa,i),new En(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Ks:Math.pow(Ks,i),new En(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new En(Ws(this.r),Ws(this.g),Ws(this.b),lu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:o0,formatHex:o0,formatHex8:lP,formatRgb:l0,toString:l0}));function o0(){return`#${Us(this.r)}${Us(this.g)}${Us(this.b)}`}function lP(){return`#${Us(this.r)}${Us(this.g)}${Us(this.b)}${Us((isNaN(this.opacity)?1:this.opacity)*255)}`}function l0(){const i=lu(this.opacity);return`${i===1?"rgb(":"rgba("}${Ws(this.r)}, ${Ws(this.g)}, ${Ws(this.b)}${i===1?")":`, ${i})`}`}function lu(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Ws(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Us(i){return i=Ws(i),(i<16?"0":"")+i.toString(16)}function c0(i,t,e,n){return n<=0?i=t=e=NaN:e<=0||e>=1?i=t=NaN:t<=0&&(i=NaN),new ki(i,t,e,n)}function Dv(i){if(i instanceof ki)return new ki(i.h,i.s,i.l,i.opacity);if(i instanceof oo||(i=js(i)),!i)return new ki;if(i instanceof ki)return i;i=i.rgb();var t=i.r/255,e=i.g/255,n=i.b/255,r=Math.min(t,e,n),s=Math.max(t,e,n),a=NaN,o=s-r,l=(s+r)/2;return o?(t===s?a=(e-n)/o+(e<n)*6:e===s?a=(n-t)/o+2:a=(t-e)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new ki(a,o,l,i.opacity)}function cP(i,t,e,n){return arguments.length===1?Dv(i):new ki(i,t,e,n??1)}function ki(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}$u(ki,cP,Qp(oo,{brighter(i){return i=i==null?Qa:Math.pow(Qa,i),new ki(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Ks:Math.pow(Ks,i),new ki(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,e=this.l,n=e+(e<.5?e:1-e)*t,r=2*e-n;return new En(Kf(i>=240?i-240:i+120,r,n),Kf(i,r,n),Kf(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new ki(u0(this.h),uc(this.s),uc(this.l),lu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=lu(this.opacity);return`${i===1?"hsl(":"hsla("}${u0(this.h)}, ${uc(this.s)*100}%, ${uc(this.l)*100}%${i===1?")":`, ${i})`}`}}));function u0(i){return i=(i||0)%360,i<0?i+360:i}function uc(i){return Math.max(0,Math.min(1,i||0))}function Kf(i,t,e){return(i<60?t+(e-t)*i/60:i<180?e:i<240?t+(e-t)*(240-i)/60:t)*255}const uP=Math.PI/180,fP=180/Math.PI;var Lv=-.14861,tm=1.78277,em=-.29227,Yu=-.90649,ml=1.97294,f0=ml*Yu,h0=ml*tm,d0=tm*em-Yu*Lv;function hP(i){if(i instanceof Xs)return new Xs(i.h,i.s,i.l,i.opacity);i instanceof En||(i=Pv(i));var t=i.r/255,e=i.g/255,n=i.b/255,r=(d0*n+f0*t-h0*e)/(d0+f0-h0),s=n-r,a=(ml*(e-r)-em*s)/Yu,o=Math.sqrt(a*a+s*s)/(ml*r*(1-r)),l=o?Math.atan2(a,s)*fP-120:NaN;return new Xs(l<0?l+360:l,o,r,i.opacity)}function fs(i,t,e,n){return arguments.length===1?hP(i):new Xs(i,t,e,n??1)}function Xs(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}$u(Xs,fs,Qp(oo,{brighter(i){return i=i==null?Qa:Math.pow(Qa,i),new Xs(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Ks:Math.pow(Ks,i),new Xs(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=isNaN(this.h)?0:(this.h+120)*uP,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),n=Math.cos(i),r=Math.sin(i);return new En(255*(t+e*(Lv*n+tm*r)),255*(t+e*(em*n+Yu*r)),255*(t+e*(ml*n)),this.opacity)}}));const qu=i=>()=>i;function Nv(i,t){return function(e){return i+e*t}}function dP(i,t,e){return i=Math.pow(i,e),t=Math.pow(t,e)-i,e=1/e,function(n){return Math.pow(i+n*t,e)}}function pP(i,t){var e=t-i;return e?Nv(i,e>180||e<-180?e-360*Math.round(e/360):e):qu(isNaN(i)?t:i)}function mP(i){return(i=+i)==1?Ba:function(t,e){return e-t?dP(t,e,i):qu(isNaN(t)?e:t)}}function Ba(i,t){var e=t-i;return e?Nv(i,e):qu(isNaN(i)?t:i)}const cu=(function i(t){var e=mP(t);function n(r,s){var a=e((r=Nd(r)).r,(s=Nd(s)).r),o=e(r.g,s.g),l=e(r.b,s.b),c=Ba(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=l(u),r.opacity=c(u),r+""}}return n.gamma=i,n})(1);function gP(i,t){t||(t=[]);var e=i?Math.min(t.length,i.length):0,n=t.slice(),r;return function(s){for(r=0;r<e;++r)n[r]=i[r]*(1-s)+t[r]*s;return n}}function _P(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xP(i,t){var e=t?t.length:0,n=i?Math.min(e,i.length):0,r=new Array(n),s=new Array(e),a;for(a=0;a<n;++a)r[a]=ss(i[a],t[a]);for(;a<e;++a)s[a]=t[a];return function(o){for(a=0;a<n;++a)s[a]=r[a](o);return s}}function vP(i,t){var e=new Date;return i=+i,t=+t,function(n){return e.setTime(i*(1-n)+t*n),e}}function Oi(i,t){return i=+i,t=+t,function(e){return i*(1-e)+t*e}}function yP(i,t){var e={},n={},r;(i===null||typeof i!="object")&&(i={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in i?e[r]=ss(i[r],t[r]):n[r]=t[r];return function(s){for(r in e)n[r]=e[r](s);return n}}var Id=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,jf=new RegExp(Id.source,"g");function SP(i){return function(){return i}}function MP(i){return function(t){return i(t)+""}}function Iv(i,t){var e=Id.lastIndex=jf.lastIndex=0,n,r,s,a=-1,o=[],l=[];for(i=i+"",t=t+"";(n=Id.exec(i))&&(r=jf.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),o[a]?o[a]+=s:o[++a]=s),(n=n[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:Oi(n,r)})),e=jf.lastIndex;return e<t.length&&(s=t.slice(e),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?MP(l[0].x):SP(t):(t=l.length,function(c){for(var u=0,f;u<t;++u)o[(f=l[u]).i]=f.x(c);return o.join("")})}function ss(i,t){var e=typeof t,n;return t==null||e==="boolean"?qu(t):(e==="number"?Oi:e==="string"?(n=js(t))?(t=n,cu):Iv:t instanceof js?cu:t instanceof Date?vP:_P(t)?gP:Array.isArray(t)?xP:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?yP:Oi)(i,t)}function EP(i,t){return i=+i,t=+t,function(e){return Math.round(i*(1-e)+t*e)}}var p0=180/Math.PI,Fd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Fv(i,t,e,n,r,s){var a,o,l;return(a=Math.sqrt(i*i+t*t))&&(i/=a,t/=a),(l=i*e+t*n)&&(e-=i*l,n-=t*l),(o=Math.sqrt(e*e+n*n))&&(e/=o,n/=o,l/=o),i*n<t*e&&(i=-i,t=-t,l=-l,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(t,i)*p0,skewX:Math.atan(l)*p0,scaleX:a,scaleY:o}}var fc;function bP(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?Fd:Fv(t.a,t.b,t.c,t.d,t.e,t.f)}function TP(i){return i==null||(fc||(fc=document.createElementNS("http://www.w3.org/2000/svg","g")),fc.setAttribute("transform",i),!(i=fc.transform.baseVal.consolidate()))?Fd:(i=i.matrix,Fv(i.a,i.b,i.c,i.d,i.e,i.f))}function Uv(i,t,e,n){function r(c){return c.length?c.pop()+" ":""}function s(c,u,f,h,d,p){if(c!==f||u!==h){var _=d.push("translate(",null,t,null,e);p.push({i:_-4,x:Oi(c,f)},{i:_-2,x:Oi(u,h)})}else(f||h)&&d.push("translate("+f+t+h+e)}function a(c,u,f,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:f.push(r(f)+"rotate(",null,n)-2,x:Oi(c,u)})):u&&f.push(r(f)+"rotate("+u+n)}function o(c,u,f,h){c!==u?h.push({i:f.push(r(f)+"skewX(",null,n)-2,x:Oi(c,u)}):u&&f.push(r(f)+"skewX("+u+n)}function l(c,u,f,h,d,p){if(c!==f||u!==h){var _=d.push(r(d)+"scale(",null,",",null,")");p.push({i:_-4,x:Oi(c,f)},{i:_-2,x:Oi(u,h)})}else(f!==1||h!==1)&&d.push(r(d)+"scale("+f+","+h+")")}return function(c,u){var f=[],h=[];return c=i(c),u=i(u),s(c.translateX,c.translateY,u.translateX,u.translateY,f,h),a(c.rotate,u.rotate,f,h),o(c.skewX,u.skewX,f,h),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,h),c=u=null,function(d){for(var p=-1,_=h.length,g;++p<_;)f[(g=h[p]).i]=g.x(d);return f.join("")}}}var wP=Uv(bP,"px, ","px)","deg)"),AP=Uv(TP,", ",")",")");function Ov(i){return(function t(e){e=+e;function n(r,s){var a=i((r=fs(r)).h,(s=fs(s)).h),o=Ba(r.s,s.s),l=Ba(r.l,s.l),c=Ba(r.opacity,s.opacity);return function(u){return r.h=a(u),r.s=o(u),r.l=l(Math.pow(u,e)),r.opacity=c(u),r+""}}return n.gamma=t,n})(1)}Ov(pP);var Bv=Ov(Ba),to=0,Lo=0,yo=0,kv=1e3,uu,No,fu=0,Js=0,Zu=0,gl=typeof performance=="object"&&performance.now?performance:Date,zv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function nm(){return Js||(zv(CP),Js=gl.now()+Zu)}function CP(){Js=0}function hu(){this._call=this._time=this._next=null}hu.prototype=im.prototype={constructor:hu,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?nm():+e)+(t==null?0:+t),!this._next&&No!==this&&(No?No._next=this:uu=this,No=this),this._call=i,this._time=e,Ud()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ud())}};function im(i,t,e){var n=new hu;return n.restart(i,t,e),n}function RP(){nm(),++to;for(var i=uu,t;i;)(t=Js-i._time)>=0&&i._call.call(void 0,t),i=i._next;--to}function m0(){Js=(fu=gl.now())+Zu,to=Lo=0;try{RP()}finally{to=0,DP(),Js=0}}function PP(){var i=gl.now(),t=i-fu;t>kv&&(Zu-=t,fu=i)}function DP(){for(var i,t=uu,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:uu=e);No=i,Ud(n)}function Ud(i){if(!to){Lo&&(Lo=clearTimeout(Lo));var t=i-Js;t>24?(i<1/0&&(Lo=setTimeout(m0,i-gl.now()-Zu)),yo&&(yo=clearInterval(yo))):(yo||(fu=gl.now(),yo=setInterval(PP,kv)),to=1,zv(m0))}}function g0(i,t,e){var n=new hu;return t=t==null?0:+t,n.restart(r=>{n.stop(),i(r+t)},t,e),n}var LP=_v("start","end","cancel","interrupt"),NP=[],Vv=0,_0=1,Od=2,zc=3,x0=4,Bd=5,Vc=6;function Ku(i,t,e,n,r,s){var a=i.__transition;if(!a)i.__transition={};else if(e in a)return;IP(i,e,{name:t,index:n,group:r,on:LP,tween:NP,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Vv})}function rm(i,t){var e=Wi(i,t);if(e.state>Vv)throw new Error("too late; already scheduled");return e}function fr(i,t){var e=Wi(i,t);if(e.state>zc)throw new Error("too late; already running");return e}function Wi(i,t){var e=i.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function IP(i,t,e){var n=i.__transition,r;n[t]=e,e.timer=im(s,0,e.time);function s(c){e.state=_0,e.timer.restart(a,e.delay,e.time),e.delay<=c&&a(c-e.delay)}function a(c){var u,f,h,d;if(e.state!==_0)return l();for(u in n)if(d=n[u],d.name===e.name){if(d.state===zc)return g0(a);d.state===x0?(d.state=Vc,d.timer.stop(),d.on.call("interrupt",i,i.__data__,d.index,d.group),delete n[u]):+u<t&&(d.state=Vc,d.timer.stop(),d.on.call("cancel",i,i.__data__,d.index,d.group),delete n[u])}if(g0(function(){e.state===zc&&(e.state=x0,e.timer.restart(o,e.delay,e.time),o(c))}),e.state=Od,e.on.call("start",i,i.__data__,e.index,e.group),e.state===Od){for(e.state=zc,r=new Array(h=e.tween.length),u=0,f=-1;u<h;++u)(d=e.tween[u].value.call(i,i.__data__,e.index,e.group))&&(r[++f]=d);r.length=f+1}}function o(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=Bd,1),f=-1,h=r.length;++f<h;)r[f].call(i,u);e.state===Bd&&(e.on.call("end",i,i.__data__,e.index,e.group),l())}function l(){e.state=Vc,e.timer.stop(),delete n[t];for(var c in n)return;delete i.__transition}}function FP(i,t){var e=i.__transition,n,r,s=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((n=e[a]).name!==t){s=!1;continue}r=n.state>Od&&n.state<Bd,n.state=Vc,n.timer.stop(),n.on.call(r?"interrupt":"cancel",i,i.__data__,n.index,n.group),delete e[a]}s&&delete i.__transition}}function UP(i){return this.each(function(){FP(this,i)})}function OP(i,t){var e,n;return function(){var r=fr(this,i),s=r.tween;if(s!==e){n=e=s;for(var a=0,o=n.length;a<o;++a)if(n[a].name===t){n=n.slice(),n.splice(a,1);break}}r.tween=n}}function BP(i,t,e){var n,r;if(typeof e!="function")throw new Error;return function(){var s=fr(this,i),a=s.tween;if(a!==n){r=(n=a).slice();for(var o={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=o;break}l===c&&r.push(o)}s.tween=r}}function kP(i,t){var e=this._id;if(i+="",arguments.length<2){for(var n=Wi(this.node(),e).tween,r=0,s=n.length,a;r<s;++r)if((a=n[r]).name===i)return a.value;return null}return this.each((t==null?OP:BP)(e,i,t))}function sm(i,t,e){var n=i._id;return i.each(function(){var r=fr(this,n);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return Wi(r,n).value[t]}}function Hv(i,t){var e;return(typeof t=="number"?Oi:t instanceof js?cu:(e=js(t))?(t=e,cu):Iv)(i,t)}function zP(i){return function(){this.removeAttribute(i)}}function VP(i){return function(){this.removeAttributeNS(i.space,i.local)}}function HP(i,t,e){var n,r=e+"",s;return function(){var a=this.getAttribute(i);return a===r?null:a===n?s:s=t(n=a,e)}}function GP(i,t,e){var n,r=e+"",s;return function(){var a=this.getAttributeNS(i.space,i.local);return a===r?null:a===n?s:s=t(n=a,e)}}function WP(i,t,e){var n,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttribute(i):(a=this.getAttribute(i),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o)))}}function XP(i,t,e){var n,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttributeNS(i.space,i.local):(a=this.getAttributeNS(i.space,i.local),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o)))}}function $P(i,t){var e=Xu(i),n=e==="transform"?AP:Hv;return this.attrTween(i,typeof t=="function"?(e.local?XP:WP)(e,n,sm(this,"attr."+i,t)):t==null?(e.local?VP:zP)(e):(e.local?GP:HP)(e,n,t))}function YP(i,t){return function(e){this.setAttribute(i,t.call(this,e))}}function qP(i,t){return function(e){this.setAttributeNS(i.space,i.local,t.call(this,e))}}function ZP(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&qP(i,s)),e}return r._value=t,r}function KP(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&YP(i,s)),e}return r._value=t,r}function jP(i,t){var e="attr."+i;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var n=Xu(i);return this.tween(e,(n.local?ZP:KP)(n,t))}function JP(i,t){return function(){rm(this,i).delay=+t.apply(this,arguments)}}function QP(i,t){return t=+t,function(){rm(this,i).delay=t}}function t2(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?JP:QP)(t,i)):Wi(this.node(),t).delay}function e2(i,t){return function(){fr(this,i).duration=+t.apply(this,arguments)}}function n2(i,t){return t=+t,function(){fr(this,i).duration=t}}function i2(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?e2:n2)(t,i)):Wi(this.node(),t).duration}function r2(i,t){if(typeof t!="function")throw new Error;return function(){fr(this,i).ease=t}}function s2(i){var t=this._id;return arguments.length?this.each(r2(t,i)):Wi(this.node(),t).ease}function a2(i,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;fr(this,i).ease=e}}function o2(i){if(typeof i!="function")throw new Error;return this.each(a2(this._id,i))}function l2(i){typeof i!="function"&&(i=yv(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new Or(n,this._parents,this._name,this._id)}function c2(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,e=i._groups,n=t.length,r=e.length,s=Math.min(n,r),a=new Array(n),o=0;o<s;++o)for(var l=t[o],c=e[o],u=l.length,f=a[o]=new Array(u),h,d=0;d<u;++d)(h=l[d]||c[d])&&(f[d]=h);for(;o<n;++o)a[o]=t[o];return new Or(a,this._parents,this._name,this._id)}function u2(i){return(i+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function f2(i,t,e){var n,r,s=u2(t)?rm:fr;return function(){var a=s(this,i),o=a.on;o!==n&&(r=(n=o).copy()).on(t,e),a.on=r}}function h2(i,t){var e=this._id;return arguments.length<2?Wi(this.node(),e).on.on(i):this.each(f2(e,i,t))}function d2(i){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==i)return;t&&t.removeChild(this)}}function p2(){return this.on("end.remove",d2(this._id))}function m2(i){var t=this._name,e=this._id;typeof i!="function"&&(i=jp(i));for(var n=this._groups,r=n.length,s=new Array(r),a=0;a<r;++a)for(var o=n[a],l=o.length,c=s[a]=new Array(l),u,f,h=0;h<l;++h)(u=o[h])&&(f=i.call(u,u.__data__,h,o))&&("__data__"in u&&(f.__data__=u.__data__),c[h]=f,Ku(c[h],t,e,h,c,Wi(u,e)));return new Or(s,this._parents,t,e)}function g2(i){var t=this._name,e=this._id;typeof i!="function"&&(i=vv(i));for(var n=this._groups,r=n.length,s=[],a=[],o=0;o<r;++o)for(var l=n[o],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var h=i.call(u,u.__data__,f,l),d,p=Wi(u,e),_=0,g=h.length;_<g;++_)(d=h[_])&&Ku(d,t,e,_,h,p);s.push(h),a.push(u)}return new Or(s,a,t,e)}var _2=ao.prototype.constructor;function x2(){return new _2(this._groups,this._parents)}function v2(i,t){var e,n,r;return function(){var s=Ja(this,i),a=(this.style.removeProperty(i),Ja(this,i));return s===a?null:s===e&&a===n?r:r=t(e=s,n=a)}}function Gv(i){return function(){this.style.removeProperty(i)}}function y2(i,t,e){var n,r=e+"",s;return function(){var a=Ja(this,i);return a===r?null:a===n?s:s=t(n=a,e)}}function S2(i,t,e){var n,r,s;return function(){var a=Ja(this,i),o=e(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(i),Ja(this,i))),a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o))}}function M2(i,t){var e,n,r,s="style."+t,a="end."+s,o;return function(){var l=fr(this,i),c=l.on,u=l.value[s]==null?o||(o=Gv(t)):void 0;(c!==e||r!==u)&&(n=(e=c).copy()).on(a,r=u),l.on=n}}function E2(i,t,e){var n=(i+="")=="transform"?wP:Hv;return t==null?this.styleTween(i,v2(i,n)).on("end.style."+i,Gv(i)):typeof t=="function"?this.styleTween(i,S2(i,n,sm(this,"style."+i,t))).each(M2(this._id,i)):this.styleTween(i,y2(i,n,t),e).on("end.style."+i,null)}function b2(i,t,e){return function(n){this.style.setProperty(i,t.call(this,n),e)}}function T2(i,t,e){var n,r;function s(){var a=t.apply(this,arguments);return a!==r&&(n=(r=a)&&b2(i,a,e)),n}return s._value=t,s}function w2(i,t,e){var n="style."+(i+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,T2(i,t,e??""))}function A2(i){return function(){this.textContent=i}}function C2(i){return function(){var t=i(this);this.textContent=t??""}}function R2(i){return this.tween("text",typeof i=="function"?C2(sm(this,"text",i)):A2(i==null?"":i+""))}function P2(i){return function(t){this.textContent=i.call(this,t)}}function D2(i){var t,e;function n(){var r=i.apply(this,arguments);return r!==e&&(t=(e=r)&&P2(r)),t}return n._value=i,n}function L2(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,D2(i))}function N2(){for(var i=this._name,t=this._id,e=Wv(),n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var u=Wi(l,t);Ku(l,i,e,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Or(n,this._parents,i,e)}function I2(){var i,t,e=this,n=e._id,r=e.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--r===0&&s()}};e.each(function(){var c=fr(this,n),u=c.on;u!==i&&(t=(i=u).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),r===0&&s()})}var F2=0;function Or(i,t,e,n){this._groups=i,this._parents=t,this._name=e,this._id=n}function du(i){return ao().transition(i)}function Wv(){return++F2}var xr=ao.prototype;Or.prototype=du.prototype={constructor:Or,select:m2,selectAll:g2,selectChild:xr.selectChild,selectChildren:xr.selectChildren,filter:l2,merge:c2,selection:x2,transition:N2,call:xr.call,nodes:xr.nodes,node:xr.node,size:xr.size,empty:xr.empty,each:xr.each,on:h2,attr:$P,attrTween:jP,style:E2,styleTween:w2,text:R2,textTween:L2,remove:p2,tween:kP,delay:t2,duration:i2,ease:s2,easeVarying:o2,end:I2,[Symbol.iterator]:xr[Symbol.iterator]};function Ki(i){return--i*i*i+1}function pu(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var U2={time:null,delay:0,duration:250,ease:pu};function O2(i,t){for(var e;!(e=i.__transition)||!(e=e[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return e}function B2(i){var t,e;i instanceof Or?(t=i._id,i=i._name):(t=Wv(),(e=U2).time=nm(),i=i==null?null:i+"");for(var n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Ku(l,i,t,c,a,e||O2(l,t));return new Or(n,this._parents,i,t)}ao.prototype.interrupt=UP;ao.prototype.transition=B2;const kd=Math.PI,zd=2*kd,Cs=1e-6,k2=zd-Cs;function Xv(i){this._+=i[0];for(let t=1,e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function z2(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return Xv;const e=10**t;return function(n){this._+=n[0];for(let r=1,s=n.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+n[r]}}class V2{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Xv:z2(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,r){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(t,e,n,r,s,a){this._append`C${+t},${+e},${+n},${+r},${this._x1=+s},${this._y1=+a}`}arcTo(t,e,n,r,s){if(t=+t,e=+e,n=+n,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let a=this._x1,o=this._y1,l=n-t,c=r-e,u=a-t,f=o-e,h=u*u+f*f;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(h>Cs)if(!(Math.abs(f*l-c*u)>Cs)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let d=n-a,p=r-o,_=l*l+c*c,g=d*d+p*p,m=Math.sqrt(_),S=Math.sqrt(h),x=s*Math.tan((kd-Math.acos((_+h-g)/(2*m*S)))/2),v=x/S,M=x/m;Math.abs(v-1)>Cs&&this._append`L${t+v*u},${e+v*f}`,this._append`A${s},${s},0,0,${+(f*d>u*p)},${this._x1=t+M*l},${this._y1=e+M*c}`}}arc(t,e,n,r,s,a){if(t=+t,e=+e,n=+n,a=!!a,n<0)throw new Error(`negative radius: ${n}`);let o=n*Math.cos(r),l=n*Math.sin(r),c=t+o,u=e+l,f=1^a,h=a?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>Cs||Math.abs(this._y1-u)>Cs)&&this._append`L${c},${u}`,n&&(h<0&&(h=h%zd+zd),h>k2?this._append`A${n},${n},0,1,${f},${t-o},${e-l}A${n},${n},0,1,${f},${this._x1=c},${this._y1=u}`:h>Cs&&this._append`A${n},${n},0,${+(h>=kd)},${f},${this._x1=t+n*Math.cos(s)},${this._y1=e+n*Math.sin(s)}`)}rect(t,e,n,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}}var v0={},Jf={},Qf=34,So=10,th=13;function $v(i){return new Function("d","return {"+i.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function H2(i,t){var e=$v(i);return function(n,r){return t(e(n),r,i)}}function y0(i){var t=Object.create(null),e=[];return i.forEach(function(n){for(var r in n)r in t||e.push(t[r]=r)}),e}function Wn(i,t){var e=i+"",n=e.length;return n<t?new Array(t-n+1).join(0)+e:e}function G2(i){return i<0?"-"+Wn(-i,6):i>9999?"+"+Wn(i,6):Wn(i,4)}function W2(i){var t=i.getUTCHours(),e=i.getUTCMinutes(),n=i.getUTCSeconds(),r=i.getUTCMilliseconds();return isNaN(i)?"Invalid Date":G2(i.getUTCFullYear())+"-"+Wn(i.getUTCMonth()+1,2)+"-"+Wn(i.getUTCDate(),2)+(r?"T"+Wn(t,2)+":"+Wn(e,2)+":"+Wn(n,2)+"."+Wn(r,3)+"Z":n?"T"+Wn(t,2)+":"+Wn(e,2)+":"+Wn(n,2)+"Z":e||t?"T"+Wn(t,2)+":"+Wn(e,2)+"Z":"")}function X2(i){var t=new RegExp('["'+i+`
\r]`),e=i.charCodeAt(0);function n(f,h){var d,p,_=r(f,function(g,m){if(d)return d(g,m-1);p=g,d=h?H2(g,h):$v(g)});return _.columns=p||[],_}function r(f,h){var d=[],p=f.length,_=0,g=0,m,S=p<=0,x=!1;f.charCodeAt(p-1)===So&&--p,f.charCodeAt(p-1)===th&&--p;function v(){if(S)return Jf;if(x)return x=!1,v0;var E,T=_,A;if(f.charCodeAt(T)===Qf){for(;_++<p&&f.charCodeAt(_)!==Qf||f.charCodeAt(++_)===Qf;);return(E=_)>=p?S=!0:(A=f.charCodeAt(_++))===So?x=!0:A===th&&(x=!0,f.charCodeAt(_)===So&&++_),f.slice(T+1,E-1).replace(/""/g,'"')}for(;_<p;){if((A=f.charCodeAt(E=_++))===So)x=!0;else if(A===th)x=!0,f.charCodeAt(_)===So&&++_;else if(A!==e)continue;return f.slice(T,E)}return S=!0,f.slice(T,p)}for(;(m=v())!==Jf;){for(var M=[];m!==v0&&m!==Jf;)M.push(m),m=v();h&&(M=h(M,g++))==null||d.push(M)}return d}function s(f,h){return f.map(function(d){return h.map(function(p){return u(d[p])}).join(i)})}function a(f,h){return h==null&&(h=y0(f)),[h.map(u).join(i)].concat(s(f,h)).join(`
`)}function o(f,h){return h==null&&(h=y0(f)),s(f,h).join(`
`)}function l(f){return f.map(c).join(`
`)}function c(f){return f.map(u).join(i)}function u(f){return f==null?"":f instanceof Date?W2(f):t.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:n,parseRows:r,format:a,formatBody:o,formatRows:l,formatRow:c,formatValue:u}}var $2=X2(","),Y2=$2.parse;function q2(i){for(var t in i){var e=i[t].trim(),n,r;if(!e)e=null;else if(e==="true")e=!0;else if(e==="false")e=!1;else if(e==="NaN")e=NaN;else if(!isNaN(n=+e))e=n;else if(r=e.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))Z2&&r[4]&&!r[7]&&(e=e.replace(/-/g,"/").replace(/T/," ")),e=new Date(e);else continue;i[t]=e}return i}const Z2=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function K2(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);return i.text()}function j2(i,t){return fetch(i,t).then(K2)}function J2(i){return function(t,e,n){return arguments.length===2&&typeof e=="function"&&(n=e,e=void 0),j2(t,e).then(function(r){return i(r,n)})}}var Q2=J2(Y2);function t3(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);if(!(i.status===204||i.status===205))return i.json()}function am(i,t){return fetch(i,t).then(t3)}function e3(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function mu(i,t){if(!isFinite(i)||i===0)return null;var e=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"),n=i.slice(0,e);return[n.length>1?n[0]+n.slice(2):n,+i.slice(e+1)]}function eo(i){return i=mu(Math.abs(i)),i?i[1]:NaN}function n3(i,t){return function(e,n){for(var r=e.length,s=[],a=0,o=i[0],l=0;r>0&&o>0&&(l+o+1>n&&(o=Math.max(1,n-l)),s.push(e.substring(r-=o,r+o)),!((l+=o+1)>n));)o=i[a=(a+1)%i.length];return s.reverse().join(t)}}function i3(i){return function(t){return t.replace(/[0-9]/g,function(e){return i[+e]})}}var r3=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function gu(i){if(!(t=r3.exec(i)))throw new Error("invalid format: "+i);var t;return new om({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}gu.prototype=om.prototype;function om(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}om.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function s3(i){t:for(var t=i.length,e=1,n=-1,r;e<t;++e)switch(i[e]){case".":n=r=e;break;case"0":n===0&&(n=e),r=e;break;default:if(!+i[e])break t;n>0&&(n=0);break}return n>0?i.slice(0,n)+i.slice(r+1):i}var _u;function a3(i,t){var e=mu(i,t);if(!e)return _u=void 0,i.toPrecision(t);var n=e[0],r=e[1],s=r-(_u=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=n.length;return s===a?n:s>a?n+new Array(s-a+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+mu(i,Math.max(0,t+s-1))[0]}function S0(i,t){var e=mu(i,t);if(!e)return i+"";var n=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+n:n.length>r+1?n.slice(0,r+1)+"."+n.slice(r+1):n+new Array(r-n.length+2).join("0")}const M0={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:e3,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>S0(i*100,t),r:S0,s:a3,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function E0(i){return i}var b0=Array.prototype.map,T0=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function o3(i){var t=i.grouping===void 0||i.thousands===void 0?E0:n3(b0.call(i.grouping,Number),i.thousands+""),e=i.currency===void 0?"":i.currency[0]+"",n=i.currency===void 0?"":i.currency[1]+"",r=i.decimal===void 0?".":i.decimal+"",s=i.numerals===void 0?E0:i3(b0.call(i.numerals,String)),a=i.percent===void 0?"%":i.percent+"",o=i.minus===void 0?"−":i.minus+"",l=i.nan===void 0?"NaN":i.nan+"";function c(f,h){f=gu(f);var d=f.fill,p=f.align,_=f.sign,g=f.symbol,m=f.zero,S=f.width,x=f.comma,v=f.precision,M=f.trim,E=f.type;E==="n"?(x=!0,E="g"):M0[E]||(v===void 0&&(v=12),M=!0,E="g"),(m||d==="0"&&p==="=")&&(m=!0,d="0",p="=");var T=(h&&h.prefix!==void 0?h.prefix:"")+(g==="$"?e:g==="#"&&/[boxX]/.test(E)?"0"+E.toLowerCase():""),A=(g==="$"?n:/[%p]/.test(E)?a:"")+(h&&h.suffix!==void 0?h.suffix:""),y=M0[E],b=/[defgprs%]/.test(E);v=v===void 0?6:/[gprs]/.test(E)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function R(D){var I=T,O=A,F,z,U;if(E==="c")O=y(D)+O,D="";else{D=+D;var H=D<0||1/D<0;if(D=isNaN(D)?l:y(Math.abs(D),v),M&&(D=s3(D)),H&&+D==0&&_!=="+"&&(H=!1),I=(H?_==="("?_:o:_==="-"||_==="("?"":_)+I,O=(E==="s"&&!isNaN(D)&&_u!==void 0?T0[8+_u/3]:"")+O+(H&&_==="("?")":""),b){for(F=-1,z=D.length;++F<z;)if(U=D.charCodeAt(F),48>U||U>57){O=(U===46?r+D.slice(F+1):D.slice(F))+O,D=D.slice(0,F);break}}}x&&!m&&(D=t(D,1/0));var K=I.length+D.length+O.length,L=K<S?new Array(S-K+1).join(d):"";switch(x&&m&&(D=t(L+D,L.length?S-O.length:1/0),L=""),p){case"<":D=I+D+O+L;break;case"=":D=I+L+D+O;break;case"^":D=L.slice(0,K=L.length>>1)+I+D+O+L.slice(K);break;default:D=L+I+D+O;break}return s(D)}return R.toString=function(){return f+""},R}function u(f,h){var d=Math.max(-8,Math.min(8,Math.floor(eo(h)/3)))*3,p=Math.pow(10,-d),_=c((f=gu(f),f.type="f",f),{suffix:T0[8+d/3]});return function(g){return _(p*g)}}return{format:c,formatPrefix:u}}var hc,qr,Yv;l3({thousands:",",grouping:[3],currency:["$",""]});function l3(i){return hc=o3(i),qr=hc.format,Yv=hc.formatPrefix,hc}function c3(i){return Math.max(0,-eo(Math.abs(i)))}function u3(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(eo(t)/3)))*3-eo(Math.abs(i)))}function f3(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,eo(t)-eo(i))+1}var oe=1e-6,Vd=1e-12,ue=Math.PI,$n=ue/2,w0=ue/4,vi=ue*2,Ln=180/ue,ye=ue/180,Fe=Math.abs,qv=Math.atan,hs=Math.atan2,pe=Math.cos,dc=Math.ceil,h3=Math.exp,Hd=Math.hypot,d3=Math.log,fe=Math.sin,p3=Math.sign||function(i){return i>0?1:i<0?-1:0},kr=Math.sqrt,m3=Math.tan;function g3(i){return i>1?0:i<-1?ue:Math.acos(i)}function Br(i){return i>1?$n:i<-1?-$n:Math.asin(i)}function pi(){}function xu(i,t){i&&C0.hasOwnProperty(i.type)&&C0[i.type](i,t)}var A0={Feature:function(i,t){xu(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)xu(e[n].geometry,t)}},C0={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){Gd(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Gd(e[n],t,0)},Polygon:function(i,t){R0(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)R0(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)xu(e[n],t)}};function Gd(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function R0(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)Gd(i[e],t,1);t.polygonEnd()}function Ds(i,t){i&&A0.hasOwnProperty(i.type)?A0[i.type](i,t):xu(i,t)}function Wd(i){return[hs(i[1],i[0]),Br(i[2])]}function no(i){var t=i[0],e=i[1],n=pe(e);return[n*pe(t),n*fe(t),fe(e)]}function pc(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function vu(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function eh(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function mc(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Xd(i){var t=kr(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}var Io,yu,Su,Mu,Eu,bu,Tu,wu,$d,Yd,qd,Zv,Kv,Nn,In,Fn,Vi={sphere:pi,point:lm,lineStart:P0,lineEnd:D0,polygonStart:function(){Vi.lineStart=v3,Vi.lineEnd=y3},polygonEnd:function(){Vi.lineStart=P0,Vi.lineEnd=D0}};function lm(i,t){i*=ye,t*=ye;var e=pe(t);wl(e*pe(i),e*fe(i),fe(t))}function wl(i,t,e){++Io,Su+=(i-Su)/Io,Mu+=(t-Mu)/Io,Eu+=(e-Eu)/Io}function P0(){Vi.point=_3}function _3(i,t){i*=ye,t*=ye;var e=pe(t);Nn=e*pe(i),In=e*fe(i),Fn=fe(t),Vi.point=x3,wl(Nn,In,Fn)}function x3(i,t){i*=ye,t*=ye;var e=pe(t),n=e*pe(i),r=e*fe(i),s=fe(t),a=hs(kr((a=In*s-Fn*r)*a+(a=Fn*n-Nn*s)*a+(a=Nn*r-In*n)*a),Nn*n+In*r+Fn*s);yu+=a,bu+=a*(Nn+(Nn=n)),Tu+=a*(In+(In=r)),wu+=a*(Fn+(Fn=s)),wl(Nn,In,Fn)}function D0(){Vi.point=lm}function v3(){Vi.point=S3}function y3(){jv(Zv,Kv),Vi.point=lm}function S3(i,t){Zv=i,Kv=t,i*=ye,t*=ye,Vi.point=jv;var e=pe(t);Nn=e*pe(i),In=e*fe(i),Fn=fe(t),wl(Nn,In,Fn)}function jv(i,t){i*=ye,t*=ye;var e=pe(t),n=e*pe(i),r=e*fe(i),s=fe(t),a=In*s-Fn*r,o=Fn*n-Nn*s,l=Nn*r-In*n,c=Hd(a,o,l),u=Br(c),f=c&&-u/c;$d.add(f*a),Yd.add(f*o),qd.add(f*l),yu+=u,bu+=u*(Nn+(Nn=n)),Tu+=u*(In+(In=r)),wu+=u*(Fn+(Fn=s)),wl(Nn,In,Fn)}function M3(i){Io=yu=Su=Mu=Eu=bu=Tu=wu=0,$d=new or,Yd=new or,qd=new or,Ds(i,Vi);var t=+$d,e=+Yd,n=+qd,r=Hd(t,e,n);return r<Vd&&(t=bu,e=Tu,n=wu,yu<oe&&(t=Su,e=Mu,n=Eu),r=Hd(t,e,n),r<Vd)?[NaN,NaN]:[hs(e,t)*Ln,Br(n/r)*Ln]}function Zd(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function Kd(i,t){return Fe(i)>ue&&(i-=Math.round(i/vi)*vi),[i,t]}Kd.invert=Kd;function Jv(i,t,e){return(i%=vi)?t||e?Zd(N0(i),I0(t,e)):N0(i):t||e?I0(t,e):Kd}function L0(i){return function(t,e){return t+=i,Fe(t)>ue&&(t-=Math.round(t/vi)*vi),[t,e]}}function N0(i){var t=L0(i);return t.invert=L0(-i),t}function I0(i,t){var e=pe(i),n=fe(i),r=pe(t),s=fe(t);function a(o,l){var c=pe(l),u=pe(o)*c,f=fe(o)*c,h=fe(l),d=h*e+u*n;return[hs(f*r-d*s,u*e-h*n),Br(d*r+f*s)]}return a.invert=function(o,l){var c=pe(l),u=pe(o)*c,f=fe(o)*c,h=fe(l),d=h*r-f*s;return[hs(f*r+h*s,u*e+d*n),Br(d*e-u*n)]},a}function E3(i){i=Jv(i[0]*ye,i[1]*ye,i.length>2?i[2]*ye:0);function t(e){return e=i(e[0]*ye,e[1]*ye),e[0]*=Ln,e[1]*=Ln,e}return t.invert=function(e){return e=i.invert(e[0]*ye,e[1]*ye),e[0]*=Ln,e[1]*=Ln,e},t}function b3(i,t,e,n,r,s){if(e){var a=pe(t),o=fe(t),l=n*e;r==null?(r=t+n*vi,s=t-l/2):(r=F0(a,r),s=F0(a,s),(n>0?r<s:r>s)&&(r+=n*vi));for(var c,u=r;n>0?u>s:u<s;u-=l)c=Wd([a,-o*pe(u),-o*fe(u)]),i.point(c[0],c[1])}}function F0(i,t){t=no(t),t[0]-=i,Xd(t);var e=g3(-t[1]);return((-t[2]<0?-e:e)+vi-oe)%vi}function Qv(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:pi,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Hc(i,t){return Fe(i[0]-t[0])<oe&&Fe(i[1]-t[1])<oe}function gc(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function ty(i,t,e,n,r){var s=[],a=[],o,l;if(i.forEach(function(p){if(!((_=p.length-1)<=0)){var _,g=p[0],m=p[_],S;if(Hc(g,m)){if(!g[2]&&!m[2]){for(r.lineStart(),o=0;o<_;++o)r.point((g=p[o])[0],g[1]);r.lineEnd();return}m[0]+=2*oe}s.push(S=new gc(g,p,null,!0)),a.push(S.o=new gc(g,null,S,!1)),s.push(S=new gc(m,p,null,!1)),a.push(S.o=new gc(m,null,S,!0))}}),!!s.length){for(a.sort(t),U0(s),U0(a),o=0,l=a.length;o<l;++o)a[o].e=e=!e;for(var c=s[0],u,f;;){for(var h=c,d=!0;h.v;)if((h=h.n)===c)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,l=u.length;o<l;++o)r.point((f=u[o])[0],f[1]);else n(h.x,h.n.x,1,r);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)r.point((f=u[o])[0],f[1]);else n(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);r.lineEnd()}}}function U0(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function nh(i){return Fe(i[0])<=ue?i[0]:p3(i[0])*((Fe(i[0])+ue)%vi-ue)}function T3(i,t){var e=nh(t),n=t[1],r=fe(n),s=[fe(e),-pe(e),0],a=0,o=0,l=new or;r===1?n=$n+oe:r===-1&&(n=-$n-oe);for(var c=0,u=i.length;c<u;++c)if(h=(f=i[c]).length)for(var f,h,d=f[h-1],p=nh(d),_=d[1]/2+w0,g=fe(_),m=pe(_),S=0;S<h;++S,p=v,g=E,m=T,d=x){var x=f[S],v=nh(x),M=x[1]/2+w0,E=fe(M),T=pe(M),A=v-p,y=A>=0?1:-1,b=y*A,R=b>ue,D=g*E;if(l.add(hs(D*y*fe(b),m*T+D*pe(b))),a+=R?A+y*vi:A,R^p>=e^v>=e){var I=vu(no(d),no(x));Xd(I);var O=vu(s,I);Xd(O);var F=(R^A>=0?-1:1)*Br(O[2]);(n>F||n===F&&(I[0]||I[1]))&&(o+=R^A>=0?1:-1)}}return(a<-oe||a<oe&&l<-Vd)^o&1}function ey(i,t,e,n){return function(r){var s=t(r),a=Qv(),o=t(a),l=!1,c,u,f,h={point:d,lineStart:_,lineEnd:g,polygonStart:function(){h.point=m,h.lineStart=S,h.lineEnd=x,u=[],c=[]},polygonEnd:function(){h.point=d,h.lineStart=_,h.lineEnd=g,u=mv(u);var v=T3(c,n);u.length?(l||(r.polygonStart(),l=!0),ty(u,A3,v,e,r)):v&&(l||(r.polygonStart(),l=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(v,M){i(v,M)&&r.point(v,M)}function p(v,M){s.point(v,M)}function _(){h.point=p,s.lineStart()}function g(){h.point=d,s.lineEnd()}function m(v,M){f.push([v,M]),o.point(v,M)}function S(){o.lineStart(),f=[]}function x(){m(f[0][0],f[0][1]),o.lineEnd();var v=o.clean(),M=a.result(),E,T=M.length,A,y,b;if(f.pop(),c.push(f),f=null,!!T){if(v&1){if(y=M[0],(A=y.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),E=0;E<A;++E)r.point((b=y[E])[0],b[1]);r.lineEnd()}return}T>1&&v&2&&M.push(M.pop().concat(M.shift())),u.push(M.filter(w3))}}return h}}function w3(i){return i.length>1}function A3(i,t){return((i=i.x)[0]<0?i[1]-$n-oe:$n-i[1])-((t=t.x)[0]<0?t[1]-$n-oe:$n-t[1])}const O0=ey(function(){return!0},C3,P3,[-ue,-$n]);function C3(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,a){var o=s>0?ue:-ue,l=Fe(s-t);Fe(l-ue)<oe?(i.point(t,e=(e+a)/2>0?$n:-$n),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),i.point(s,e),r=0):n!==o&&l>=ue&&(Fe(t-n)<oe&&(t-=n*oe),Fe(s-o)<oe&&(s-=o*oe),e=R3(t,e,s,a),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),r=0),i.point(t=s,e=a),n=o},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function R3(i,t,e,n){var r,s,a=fe(i-e);return Fe(a)>oe?qv((fe(t)*(s=pe(n))*fe(e)-fe(n)*(r=pe(t))*fe(i))/(r*s*a)):(t+n)/2}function P3(i,t,e,n){var r;if(i==null)r=e*$n,n.point(-ue,r),n.point(0,r),n.point(ue,r),n.point(ue,0),n.point(ue,-r),n.point(0,-r),n.point(-ue,-r),n.point(-ue,0),n.point(-ue,r);else if(Fe(i[0]-t[0])>oe){var s=i[0]<t[0]?ue:-ue;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function D3(i){var t=pe(i),e=2*ye,n=t>0,r=Fe(t)>oe;function s(u,f,h,d){b3(d,i,e,h,u,f)}function a(u,f){return pe(u)*pe(f)>t}function o(u){var f,h,d,p,_;return{lineStart:function(){p=d=!1,_=1},point:function(g,m){var S=[g,m],x,v=a(g,m),M=n?v?0:c(g,m):v?c(g+(g<0?ue:-ue),m):0;if(!f&&(p=d=v)&&u.lineStart(),v!==d&&(x=l(f,S),(!x||Hc(f,x)||Hc(S,x))&&(S[2]=1)),v!==d)_=0,v?(u.lineStart(),x=l(S,f),u.point(x[0],x[1])):(x=l(f,S),u.point(x[0],x[1],2),u.lineEnd()),f=x;else if(r&&f&&n^v){var E;!(M&h)&&(E=l(S,f,!0))&&(_=0,n?(u.lineStart(),u.point(E[0][0],E[0][1]),u.point(E[1][0],E[1][1]),u.lineEnd()):(u.point(E[1][0],E[1][1]),u.lineEnd(),u.lineStart(),u.point(E[0][0],E[0][1],3)))}v&&(!f||!Hc(f,S))&&u.point(S[0],S[1]),f=S,d=v,h=M},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return _|(p&&d)<<1}}}function l(u,f,h){var d=no(u),p=no(f),_=[1,0,0],g=vu(d,p),m=pc(g,g),S=g[0],x=m-S*S;if(!x)return!h&&u;var v=t*m/x,M=-t*S/x,E=vu(_,g),T=mc(_,v),A=mc(g,M);eh(T,A);var y=E,b=pc(T,y),R=pc(y,y),D=b*b-R*(pc(T,T)-1);if(!(D<0)){var I=kr(D),O=mc(y,(-b-I)/R);if(eh(O,T),O=Wd(O),!h)return O;var F=u[0],z=f[0],U=u[1],H=f[1],K;z<F&&(K=F,F=z,z=K);var L=z-F,j=Fe(L-ue)<oe,Mt=j||L<oe;if(!j&&H<U&&(K=U,U=H,H=K),Mt?j?U+H>0^O[1]<(Fe(O[0]-F)<oe?U:H):U<=O[1]&&O[1]<=H:L>ue^(F<=O[0]&&O[0]<=z)){var bt=mc(y,(-b+I)/R);return eh(bt,T),[O,Wd(bt)]}}}function c(u,f){var h=n?i:ue-i,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return ey(a,o,s,n?[0,-i]:[-ue,i-ue])}function L3(i,t,e,n,r,s){var a=i[0],o=i[1],l=t[0],c=t[1],u=0,f=1,h=l-a,d=c-o,p;if(p=e-a,!(!h&&p>0)){if(p/=h,h<0){if(p<u)return;p<f&&(f=p)}else if(h>0){if(p>f)return;p>u&&(u=p)}if(p=r-a,!(!h&&p<0)){if(p/=h,h<0){if(p>f)return;p>u&&(u=p)}else if(h>0){if(p<u)return;p<f&&(f=p)}if(p=n-o,!(!d&&p>0)){if(p/=d,d<0){if(p<u)return;p<f&&(f=p)}else if(d>0){if(p>f)return;p>u&&(u=p)}if(p=s-o,!(!d&&p<0)){if(p/=d,d<0){if(p>f)return;p>u&&(u=p)}else if(d>0){if(p<u)return;p<f&&(f=p)}return u>0&&(i[0]=a+u*h,i[1]=o+u*d),f<1&&(t[0]=a+f*h,t[1]=o+f*d),!0}}}}}var Fo=1e9,_c=-Fo;function N3(i,t,e,n){function r(c,u){return i<=c&&c<=e&&t<=u&&u<=n}function s(c,u,f,h){var d=0,p=0;if(c==null||(d=a(c,f))!==(p=a(u,f))||l(c,u)<0^f>0)do h.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+f+4)%4)!==p);else h.point(u[0],u[1])}function a(c,u){return Fe(c[0]-i)<oe?u>0?0:3:Fe(c[0]-e)<oe?u>0?2:1:Fe(c[1]-t)<oe?u>0?1:0:u>0?3:2}function o(c,u){return l(c.x,u.x)}function l(c,u){var f=a(c,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=Qv(),h,d,p,_,g,m,S,x,v,M,E,T={point:A,lineStart:D,lineEnd:I,polygonStart:b,polygonEnd:R};function A(F,z){r(F,z)&&u.point(F,z)}function y(){for(var F=0,z=0,U=d.length;z<U;++z)for(var H=d[z],K=1,L=H.length,j=H[0],Mt,bt,Lt=j[0],At=j[1];K<L;++K)Mt=Lt,bt=At,j=H[K],Lt=j[0],At=j[1],bt<=n?At>n&&(Lt-Mt)*(n-bt)>(At-bt)*(i-Mt)&&++F:At<=n&&(Lt-Mt)*(n-bt)<(At-bt)*(i-Mt)&&--F;return F}function b(){u=f,h=[],d=[],E=!0}function R(){var F=y(),z=E&&F,U=(h=mv(h)).length;(z||U)&&(c.polygonStart(),z&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),U&&ty(h,o,F,s,c),c.polygonEnd()),u=c,h=d=p=null}function D(){T.point=O,d&&d.push(p=[]),M=!0,v=!1,S=x=NaN}function I(){h&&(O(_,g),m&&v&&f.rejoin(),h.push(f.result())),T.point=A,v&&u.lineEnd()}function O(F,z){var U=r(F,z);if(d&&p.push([F,z]),M)_=F,g=z,m=U,M=!1,U&&(u.lineStart(),u.point(F,z));else if(U&&v)u.point(F,z);else{var H=[S=Math.max(_c,Math.min(Fo,S)),x=Math.max(_c,Math.min(Fo,x))],K=[F=Math.max(_c,Math.min(Fo,F)),z=Math.max(_c,Math.min(Fo,z))];L3(H,K,i,t,e,n)?(v||(u.lineStart(),u.point(H[0],H[1])),u.point(K[0],K[1]),U||u.lineEnd(),E=!1):U&&(u.lineStart(),u.point(F,z),E=!1)}S=F,x=z,v=U}return T}}function B0(i,t,e){var n=Ta(i,t-oe,e).concat(t);return function(r){return n.map(function(s){return[r,s]})}}function k0(i,t,e){var n=Ta(i,t-oe,e).concat(t);return function(r){return n.map(function(s){return[s,r]})}}function I3(){var i,t,e,n,r,s,a,o,l=10,c=l,u=90,f=360,h,d,p,_,g=2.5;function m(){return{type:"MultiLineString",coordinates:S()}}function S(){return Ta(dc(n/u)*u,e,u).map(p).concat(Ta(dc(o/f)*f,a,f).map(_)).concat(Ta(dc(t/l)*l,i,l).filter(function(x){return Fe(x%u)>oe}).map(h)).concat(Ta(dc(s/c)*c,r,c).filter(function(x){return Fe(x%f)>oe}).map(d))}return m.lines=function(){return S().map(function(x){return{type:"LineString",coordinates:x}})},m.outline=function(){return{type:"Polygon",coordinates:[p(n).concat(_(a).slice(1),p(e).reverse().slice(1),_(o).reverse().slice(1))]}},m.extent=function(x){return arguments.length?m.extentMajor(x).extentMinor(x):m.extentMinor()},m.extentMajor=function(x){return arguments.length?(n=+x[0][0],e=+x[1][0],o=+x[0][1],a=+x[1][1],n>e&&(x=n,n=e,e=x),o>a&&(x=o,o=a,a=x),m.precision(g)):[[n,o],[e,a]]},m.extentMinor=function(x){return arguments.length?(t=+x[0][0],i=+x[1][0],s=+x[0][1],r=+x[1][1],t>i&&(x=t,t=i,i=x),s>r&&(x=s,s=r,r=x),m.precision(g)):[[t,s],[i,r]]},m.step=function(x){return arguments.length?m.stepMajor(x).stepMinor(x):m.stepMinor()},m.stepMajor=function(x){return arguments.length?(u=+x[0],f=+x[1],m):[u,f]},m.stepMinor=function(x){return arguments.length?(l=+x[0],c=+x[1],m):[l,c]},m.precision=function(x){return arguments.length?(g=+x,h=B0(s,r,90),d=k0(t,i,g),p=B0(o,a,90),_=k0(n,e,g),m):g},m.extentMajor([[-180,-90+oe],[180,90-oe]]).extentMinor([[-180,-80-oe],[180,80+oe]])}const jd=i=>i;var ih=new or,Jd=new or,ny,iy,Qd,tp,Er={point:pi,lineStart:pi,lineEnd:pi,polygonStart:function(){Er.lineStart=F3,Er.lineEnd=O3},polygonEnd:function(){Er.lineStart=Er.lineEnd=Er.point=pi,ih.add(Fe(Jd)),Jd=new or},result:function(){var i=ih/2;return ih=new or,i}};function F3(){Er.point=U3}function U3(i,t){Er.point=ry,ny=Qd=i,iy=tp=t}function ry(i,t){Jd.add(tp*i-Qd*t),Qd=i,tp=t}function O3(){ry(ny,iy)}var io=1/0,Au=io,_l=-io,Cu=_l,Ru={point:B3,lineStart:pi,lineEnd:pi,polygonStart:pi,polygonEnd:pi,result:function(){var i=[[io,Au],[_l,Cu]];return _l=Cu=-(Au=io=1/0),i}};function B3(i,t){i<io&&(io=i),i>_l&&(_l=i),t<Au&&(Au=t),t>Cu&&(Cu=t)}var ep=0,np=0,Uo=0,Pu=0,Du=0,wa=0,ip=0,rp=0,Oo=0,sy,ay,Ji,Qi,Ci={point:Qs,lineStart:z0,lineEnd:V0,polygonStart:function(){Ci.lineStart=V3,Ci.lineEnd=H3},polygonEnd:function(){Ci.point=Qs,Ci.lineStart=z0,Ci.lineEnd=V0},result:function(){var i=Oo?[ip/Oo,rp/Oo]:wa?[Pu/wa,Du/wa]:Uo?[ep/Uo,np/Uo]:[NaN,NaN];return ep=np=Uo=Pu=Du=wa=ip=rp=Oo=0,i}};function Qs(i,t){ep+=i,np+=t,++Uo}function z0(){Ci.point=k3}function k3(i,t){Ci.point=z3,Qs(Ji=i,Qi=t)}function z3(i,t){var e=i-Ji,n=t-Qi,r=kr(e*e+n*n);Pu+=r*(Ji+i)/2,Du+=r*(Qi+t)/2,wa+=r,Qs(Ji=i,Qi=t)}function V0(){Ci.point=Qs}function V3(){Ci.point=G3}function H3(){oy(sy,ay)}function G3(i,t){Ci.point=oy,Qs(sy=Ji=i,ay=Qi=t)}function oy(i,t){var e=i-Ji,n=t-Qi,r=kr(e*e+n*n);Pu+=r*(Ji+i)/2,Du+=r*(Qi+t)/2,wa+=r,r=Qi*i-Ji*t,ip+=r*(Ji+i),rp+=r*(Qi+t),Oo+=r*3,Qs(Ji=i,Qi=t)}function ly(i){this._context=i}ly.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,vi);break}}},result:pi};var sp=new or,rh,cy,uy,Bo,ko,xl={point:pi,lineStart:function(){xl.point=W3},lineEnd:function(){rh&&fy(cy,uy),xl.point=pi},polygonStart:function(){rh=!0},polygonEnd:function(){rh=null},result:function(){var i=+sp;return sp=new or,i}};function W3(i,t){xl.point=fy,cy=Bo=i,uy=ko=t}function fy(i,t){Bo-=i,ko-=t,sp.add(kr(Bo*Bo+ko*ko)),Bo=i,ko=t}let H0,Lu,G0,W0;class X0{constructor(t){this._append=t==null?hy:X3(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==G0||this._append!==Lu){const n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,G0=n,Lu=this._append,W0=this._,this._=r}this._+=W0;break}}}result(){const t=this._;return this._="",t.length?t:null}}function hy(i){let t=1;this._+=i[0];for(const e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function X3(i){const t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return hy;if(t!==H0){const e=10**t;H0=t,Lu=function(r){let s=1;this._+=r[0];for(const a=r.length;s<a;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return Lu}function dy(i,t){let e=3,n=4.5,r,s;function a(o){return o&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),Ds(o,r(s))),s.result()}return a.area=function(o){return Ds(o,r(Er)),Er.result()},a.measure=function(o){return Ds(o,r(xl)),xl.result()},a.bounds=function(o){return Ds(o,r(Ru)),Ru.result()},a.centroid=function(o){return Ds(o,r(Ci)),Ci.result()},a.projection=function(o){return arguments.length?(r=o==null?(i=null,jd):(i=o).stream,a):i},a.context=function(o){return arguments.length?(s=o==null?(t=null,new X0(e)):new ly(t=o),typeof n!="function"&&s.pointRadius(n),a):t},a.pointRadius=function(o){return arguments.length?(n=typeof o=="function"?o:(s.pointRadius(+o),+o),a):n},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{const l=Math.floor(o);if(!(l>=0))throw new RangeError(`invalid digits: ${o}`);e=l}return t===null&&(s=new X0(e)),a},a.projection(i).digits(e).context(t)}function cm(i){return function(t){var e=new ap;for(var n in i)e[n]=i[n];return e.stream=t,e}}function ap(){}ap.prototype={constructor:ap,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function um(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),Ds(e,i.stream(Ru)),t(Ru.result()),n!=null&&i.clipExtent(n),i}function py(i,t,e){return um(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,l=+t[0][1]+(s-a*(n[1][1]+n[0][1]))/2;i.scale(150*a).translate([o,l])},e)}function $3(i,t,e){return py(i,[[0,0],t],e)}function Y3(i,t,e){return um(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),a=(r-s*(n[1][0]+n[0][0]))/2,o=-s*n[0][1];i.scale(150*s).translate([a,o])},e)}function q3(i,t,e){return um(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),a=-s*n[0][0],o=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([a,o])},e)}var $0=16,Z3=pe(30*ye);function Y0(i,t){return+t?j3(i,t):K3(i)}function K3(i){return cm({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function j3(i,t){function e(n,r,s,a,o,l,c,u,f,h,d,p,_,g){var m=c-n,S=u-r,x=m*m+S*S;if(x>4*t&&_--){var v=a+h,M=o+d,E=l+p,T=kr(v*v+M*M+E*E),A=Br(E/=T),y=Fe(Fe(E)-1)<oe||Fe(s-f)<oe?(s+f)/2:hs(M,v),b=i(y,A),R=b[0],D=b[1],I=R-n,O=D-r,F=S*I-m*O;(F*F/x>t||Fe((m*I+S*O)/x-.5)>.3||a*h+o*d+l*p<Z3)&&(e(n,r,s,a,o,l,R,D,y,v/=T,M/=T,E,_,g),g.point(R,D),e(R,D,y,v,M,E,c,u,f,h,d,p,_,g))}}return function(n){var r,s,a,o,l,c,u,f,h,d,p,_,g={point:m,lineStart:S,lineEnd:v,polygonStart:function(){n.polygonStart(),g.lineStart=M},polygonEnd:function(){n.polygonEnd(),g.lineStart=S}};function m(A,y){A=i(A,y),n.point(A[0],A[1])}function S(){f=NaN,g.point=x,n.lineStart()}function x(A,y){var b=no([A,y]),R=i(A,y);e(f,h,u,d,p,_,f=R[0],h=R[1],u=A,d=b[0],p=b[1],_=b[2],$0,n),n.point(f,h)}function v(){g.point=m,n.lineEnd()}function M(){S(),g.point=E,g.lineEnd=T}function E(A,y){x(r=A,y),s=f,a=h,o=d,l=p,c=_,g.point=x}function T(){e(f,h,u,d,p,_,s,a,r,o,l,c,$0,n),g.lineEnd=v,v()}return g}}var J3=cm({point:function(i,t){this.stream.point(i*ye,t*ye)}});function Q3(i){return cm({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function tD(i,t,e,n,r){function s(a,o){return a*=n,o*=r,[t+i*a,e-i*o]}return s.invert=function(a,o){return[(a-t)/i*n,(e-o)/i*r]},s}function q0(i,t,e,n,r,s){if(!s)return tD(i,t,e,n,r);var a=pe(s),o=fe(s),l=a*i,c=o*i,u=a/i,f=o/i,h=(o*e-a*t)/i,d=(o*t+a*e)/i;function p(_,g){return _*=n,g*=r,[l*_-c*g+t,e-c*_-l*g]}return p.invert=function(_,g){return[n*(u*_-f*g+h),r*(d-f*_-u*g)]},p}function my(i){return eD(function(){return i})()}function eD(i){var t,e=150,n=480,r=250,s=0,a=0,o=0,l=0,c=0,u,f=0,h=1,d=1,p=null,_=O0,g=null,m,S,x,v=jd,M=.5,E,T,A,y,b;function R(F){return A(F[0]*ye,F[1]*ye)}function D(F){return F=A.invert(F[0],F[1]),F&&[F[0]*Ln,F[1]*Ln]}R.stream=function(F){return y&&b===F?y:y=J3(Q3(u)(_(E(v(b=F)))))},R.preclip=function(F){return arguments.length?(_=F,p=void 0,O()):_},R.postclip=function(F){return arguments.length?(v=F,g=m=S=x=null,O()):v},R.clipAngle=function(F){return arguments.length?(_=+F?D3(p=F*ye):(p=null,O0),O()):p*Ln},R.clipExtent=function(F){return arguments.length?(v=F==null?(g=m=S=x=null,jd):N3(g=+F[0][0],m=+F[0][1],S=+F[1][0],x=+F[1][1]),O()):g==null?null:[[g,m],[S,x]]},R.scale=function(F){return arguments.length?(e=+F,I()):e},R.translate=function(F){return arguments.length?(n=+F[0],r=+F[1],I()):[n,r]},R.center=function(F){return arguments.length?(s=F[0]%360*ye,a=F[1]%360*ye,I()):[s*Ln,a*Ln]},R.rotate=function(F){return arguments.length?(o=F[0]%360*ye,l=F[1]%360*ye,c=F.length>2?F[2]%360*ye:0,I()):[o*Ln,l*Ln,c*Ln]},R.angle=function(F){return arguments.length?(f=F%360*ye,I()):f*Ln},R.reflectX=function(F){return arguments.length?(h=F?-1:1,I()):h<0},R.reflectY=function(F){return arguments.length?(d=F?-1:1,I()):d<0},R.precision=function(F){return arguments.length?(E=Y0(T,M=F*F),O()):kr(M)},R.fitExtent=function(F,z){return py(R,F,z)},R.fitSize=function(F,z){return $3(R,F,z)},R.fitWidth=function(F,z){return Y3(R,F,z)},R.fitHeight=function(F,z){return q3(R,F,z)};function I(){var F=q0(e,0,0,h,d,f).apply(null,t(s,a)),z=q0(e,n-F[0],r-F[1],h,d,f);return u=Jv(o,l,c),T=Zd(t,z),A=Zd(u,T),E=Y0(T,M),O()}function O(){return y=b=null,R}return function(){return t=i.apply(this,arguments),R.invert=t.invert&&D,I()}}function nD(i){return function(t,e){var n=kr(t*t+e*e),r=i(n),s=fe(r),a=pe(r);return[hs(t*s,n*a),Br(n&&e*s/n)]}}function fm(i,t){return[i,d3(m3(($n+t)/2))]}fm.invert=function(i,t){return[i,2*qv(h3(t))-$n]};function iD(){return rD(fm).scale(961/vi)}function rD(i){var t=my(i),e=t.center,n=t.scale,r=t.translate,s=t.clipExtent,a=null,o,l,c;t.scale=function(f){return arguments.length?(n(f),u()):n()},t.translate=function(f){return arguments.length?(r(f),u()):r()},t.center=function(f){return arguments.length?(e(f),u()):e()},t.clipExtent=function(f){return arguments.length?(f==null?a=o=l=c=null:(a=+f[0][0],o=+f[0][1],l=+f[1][0],c=+f[1][1]),u()):a==null?null:[[a,o],[l,c]]};function u(){var f=ue*n(),h=t(E3(t.rotate()).invert([0,0]));return s(a==null?[[h[0]-f,h[1]-f],[h[0]+f,h[1]+f]]:i===fm?[[Math.max(h[0]-f,a),o],[Math.min(h[0]+f,l),c]]:[[a,Math.max(h[1]-f,o)],[l,Math.min(h[1]+f,c)]])}return u()}function gy(i,t){return[pe(t)*fe(i),fe(t)]}gy.invert=nD(Br);function sD(){return my(gy).scale(249.5).clipAngle(90+oe)}function _y(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}const Z0=Symbol("implicit");function xy(){var i=new Rd,t=[],e=[],n=Z0;function r(s){let a=i.get(s);if(a===void 0){if(n!==Z0)return n;i.set(s,a=t.push(s)-1)}return e[a%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],i=new Rd;for(const a of s)i.has(a)||i.set(a,t.push(a)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(n=s,r):n},r.copy=function(){return xy(t,e).unknown(n)},_y.apply(r,arguments),r}function aD(i){return function(){return i}}function oD(i){return+i}var K0=[0,1];function Aa(i){return i}function op(i,t){return(t-=i=+i)?function(e){return(e-i)/t}:aD(isNaN(t)?NaN:.5)}function lD(i,t){var e;return i>t&&(e=i,i=t,t=e),function(n){return Math.max(i,Math.min(t,n))}}function cD(i,t,e){var n=i[0],r=i[1],s=t[0],a=t[1];return r<n?(n=op(r,n),s=e(a,s)):(n=op(n,r),s=e(s,a)),function(o){return s(n(o))}}function uD(i,t,e){var n=Math.min(i.length,t.length)-1,r=new Array(n),s=new Array(n),a=-1;for(i[n]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++a<n;)r[a]=op(i[a],i[a+1]),s[a]=e(t[a],t[a+1]);return function(o){var l=qA(i,o,1,n)-1;return s[l](r[l](o))}}function fD(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function hD(){var i=K0,t=K0,e=ss,n,r,s,a=Aa,o,l,c;function u(){var h=Math.min(i.length,t.length);return a!==Aa&&(a=lD(i[0],i[h-1])),o=h>2?uD:cD,l=c=null,f}function f(h){return h==null||isNaN(h=+h)?s:(l||(l=o(i.map(n),t,e)))(n(a(h)))}return f.invert=function(h){return a(r((c||(c=o(t,i.map(n),Oi)))(h)))},f.domain=function(h){return arguments.length?(i=Array.from(h,oD),u()):i.slice()},f.range=function(h){return arguments.length?(t=Array.from(h),u()):t.slice()},f.rangeRound=function(h){return t=Array.from(h),e=EP,u()},f.clamp=function(h){return arguments.length?(a=h?!0:Aa,u()):a!==Aa},f.interpolate=function(h){return arguments.length?(e=h,u()):e},f.unknown=function(h){return arguments.length?(s=h,f):s},function(h,d){return n=h,r=d,u()}}function dD(){return hD()(Aa,Aa)}function pD(i,t,e,n){var r=aC(i,t,e),s;switch(n=gu(n??",f"),n.type){case"s":{var a=Math.max(Math.abs(i),Math.abs(t));return n.precision==null&&!isNaN(s=u3(r,a))&&(n.precision=s),Yv(n,a)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(s=f3(r,Math.max(Math.abs(i),Math.abs(t))))&&(n.precision=s-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(s=c3(r))&&(n.precision=s-(n.type==="%")*2);break}}return qr(n)}function mD(i){var t=i.domain;return i.ticks=function(e){var n=t();return sC(n[0],n[n.length-1],e??10)},i.tickFormat=function(e,n){var r=t();return pD(r[0],r[r.length-1],e??10,n)},i.nice=function(e){e==null&&(e=10);var n=t(),r=0,s=n.length-1,a=n[r],o=n[s],l,c,u=10;for(o<a&&(c=a,a=o,o=c,c=r,r=s,s=c);u-- >0;){if(c=Pd(a,o,e),c===l)return n[r]=a,n[s]=o,t(n);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return i},i}function Gc(){var i=dD();return i.copy=function(){return fD(i,Gc())},_y.apply(i,arguments),mD(i)}Bv(fs(-100,.75,.35),fs(80,1.5,.8));Bv(fs(260,.75,.35),fs(80,1.5,.8));var xc=fs();function gD(i){(i<0||i>1)&&(i-=Math.floor(i));var t=Math.abs(i-.5);return xc.h=360*i-100,xc.s=1.5-1.5*t,xc.l=.8-.9*t,xc+""}function he(i){return function(){return i}}const j0=Math.abs,_n=Math.atan2,Es=Math.cos,_D=Math.max,sh=Math.min,$i=Math.sin,Ca=Math.sqrt,Gn=1e-12,vl=Math.PI,Nu=vl/2,Wc=2*vl;function xD(i){return i>1?0:i<-1?vl:Math.acos(i)}function J0(i){return i>=1?Nu:i<=-1?-Nu:Math.asin(i)}function hm(i){let t=3;return i.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);t=n}return i},()=>new V2(t)}function vD(i){return i.innerRadius}function yD(i){return i.outerRadius}function SD(i){return i.startAngle}function MD(i){return i.endAngle}function ED(i){return i&&i.padAngle}function bD(i,t,e,n,r,s,a,o){var l=e-i,c=n-t,u=a-r,f=o-s,h=f*l-u*c;if(!(h*h<Gn))return h=(u*(t-s)-f*(i-r))/h,[i+h*l,t+h*c]}function vc(i,t,e,n,r,s,a){var o=i-e,l=t-n,c=(a?s:-s)/Ca(o*o+l*l),u=c*l,f=-c*o,h=i+u,d=t+f,p=e+u,_=n+f,g=(h+p)/2,m=(d+_)/2,S=p-h,x=_-d,v=S*S+x*x,M=r-s,E=h*_-p*d,T=(x<0?-1:1)*Ca(_D(0,M*M*v-E*E)),A=(E*x-S*T)/v,y=(-E*S-x*T)/v,b=(E*x+S*T)/v,R=(-E*S+x*T)/v,D=A-g,I=y-m,O=b-g,F=R-m;return D*D+I*I>O*O+F*F&&(A=b,y=R),{cx:A,cy:y,x01:-u,y01:-f,x11:A*(r/M-1),y11:y*(r/M-1)}}function TD(){var i=vD,t=yD,e=he(0),n=null,r=SD,s=MD,a=ED,o=null,l=hm(c);function c(){var u,f,h=+i.apply(this,arguments),d=+t.apply(this,arguments),p=r.apply(this,arguments)-Nu,_=s.apply(this,arguments)-Nu,g=j0(_-p),m=_>p;if(o||(o=u=l()),d<h&&(f=d,d=h,h=f),!(d>Gn))o.moveTo(0,0);else if(g>Wc-Gn)o.moveTo(d*Es(p),d*$i(p)),o.arc(0,0,d,p,_,!m),h>Gn&&(o.moveTo(h*Es(_),h*$i(_)),o.arc(0,0,h,_,p,m));else{var S=p,x=_,v=p,M=_,E=g,T=g,A=a.apply(this,arguments)/2,y=A>Gn&&(n?+n.apply(this,arguments):Ca(h*h+d*d)),b=sh(j0(d-h)/2,+e.apply(this,arguments)),R=b,D=b,I,O;if(y>Gn){var F=J0(y/h*$i(A)),z=J0(y/d*$i(A));(E-=F*2)>Gn?(F*=m?1:-1,v+=F,M-=F):(E=0,v=M=(p+_)/2),(T-=z*2)>Gn?(z*=m?1:-1,S+=z,x-=z):(T=0,S=x=(p+_)/2)}var U=d*Es(S),H=d*$i(S),K=h*Es(M),L=h*$i(M);if(b>Gn){var j=d*Es(x),Mt=d*$i(x),bt=h*Es(v),Lt=h*$i(v),At;if(g<vl)if(At=bD(U,H,bt,Lt,j,Mt,K,L)){var q=U-At[0],tt=H-At[1],ut=j-At[0],Ct=Mt-At[1],pt=1/$i(xD((q*ut+tt*Ct)/(Ca(q*q+tt*tt)*Ca(ut*ut+Ct*Ct)))/2),Ft=Ca(At[0]*At[0]+At[1]*At[1]);R=sh(b,(h-Ft)/(pt-1)),D=sh(b,(d-Ft)/(pt+1))}else R=D=0}T>Gn?D>Gn?(I=vc(bt,Lt,U,H,d,D,m),O=vc(j,Mt,K,L,d,D,m),o.moveTo(I.cx+I.x01,I.cy+I.y01),D<b?o.arc(I.cx,I.cy,D,_n(I.y01,I.x01),_n(O.y01,O.x01),!m):(o.arc(I.cx,I.cy,D,_n(I.y01,I.x01),_n(I.y11,I.x11),!m),o.arc(0,0,d,_n(I.cy+I.y11,I.cx+I.x11),_n(O.cy+O.y11,O.cx+O.x11),!m),o.arc(O.cx,O.cy,D,_n(O.y11,O.x11),_n(O.y01,O.x01),!m))):(o.moveTo(U,H),o.arc(0,0,d,S,x,!m)):o.moveTo(U,H),!(h>Gn)||!(E>Gn)?o.lineTo(K,L):R>Gn?(I=vc(K,L,j,Mt,h,-R,m),O=vc(U,H,bt,Lt,h,-R,m),o.lineTo(I.cx+I.x01,I.cy+I.y01),R<b?o.arc(I.cx,I.cy,R,_n(I.y01,I.x01),_n(O.y01,O.x01),!m):(o.arc(I.cx,I.cy,R,_n(I.y01,I.x01),_n(I.y11,I.x11),!m),o.arc(0,0,h,_n(I.cy+I.y11,I.cx+I.x11),_n(O.cy+O.y11,O.cx+O.x11),m),o.arc(O.cx,O.cy,R,_n(O.y11,O.x11),_n(O.y01,O.x01),!m))):o.arc(0,0,h,M,v,m)}if(o.closePath(),u)return o=null,u+""||null}return c.centroid=function(){var u=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,f=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-vl/2;return[Es(f)*u,$i(f)*u]},c.innerRadius=function(u){return arguments.length?(i=typeof u=="function"?u:he(+u),c):i},c.outerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:he(+u),c):t},c.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:he(+u),c):e},c.padRadius=function(u){return arguments.length?(n=u==null?null:typeof u=="function"?u:he(+u),c):n},c.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:he(+u),c):r},c.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:he(+u),c):s},c.padAngle=function(u){return arguments.length?(a=typeof u=="function"?u:he(+u),c):a},c.context=function(u){return arguments.length?(o=u??null,c):o},c}function dm(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function vy(i){this._context=i}vy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function yy(i){return new vy(i)}function Sy(i){return i[0]}function My(i){return i[1]}function Ey(i,t){var e=he(!0),n=null,r=yy,s=null,a=hm(o);i=typeof i=="function"?i:i===void 0?Sy:he(i),t=typeof t=="function"?t:t===void 0?My:he(t);function o(l){var c,u=(l=dm(l)).length,f,h=!1,d;for(n==null&&(s=r(d=a())),c=0;c<=u;++c)!(c<u&&e(f=l[c],c,l))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+i(f,c,l),+t(f,c,l));if(d)return s=null,d+""||null}return o.x=function(l){return arguments.length?(i=typeof l=="function"?l:he(+l),o):i},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:he(+l),o):t},o.defined=function(l){return arguments.length?(e=typeof l=="function"?l:he(!!l),o):e},o.curve=function(l){return arguments.length?(r=l,n!=null&&(s=r(n)),o):r},o.context=function(l){return arguments.length?(l==null?n=s=null:s=r(n=l),o):n},o}function wD(i,t,e){var n=null,r=he(!0),s=null,a=yy,o=null,l=hm(c);i=typeof i=="function"?i:i===void 0?Sy:he(+i),t=typeof t=="function"?t:he(t===void 0?0:+t),e=typeof e=="function"?e:e===void 0?My:he(+e);function c(f){var h,d,p,_=(f=dm(f)).length,g,m=!1,S,x=new Array(_),v=new Array(_);for(s==null&&(o=a(S=l())),h=0;h<=_;++h){if(!(h<_&&r(g=f[h],h,f))===m)if(m=!m)d=h,o.areaStart(),o.lineStart();else{for(o.lineEnd(),o.lineStart(),p=h-1;p>=d;--p)o.point(x[p],v[p]);o.lineEnd(),o.areaEnd()}m&&(x[h]=+i(g,h,f),v[h]=+t(g,h,f),o.point(n?+n(g,h,f):x[h],e?+e(g,h,f):v[h]))}if(S)return o=null,S+""||null}function u(){return Ey().defined(r).curve(a).context(s)}return c.x=function(f){return arguments.length?(i=typeof f=="function"?f:he(+f),n=null,c):i},c.x0=function(f){return arguments.length?(i=typeof f=="function"?f:he(+f),c):i},c.x1=function(f){return arguments.length?(n=f==null?null:typeof f=="function"?f:he(+f),c):n},c.y=function(f){return arguments.length?(t=typeof f=="function"?f:he(+f),e=null,c):t},c.y0=function(f){return arguments.length?(t=typeof f=="function"?f:he(+f),c):t},c.y1=function(f){return arguments.length?(e=f==null?null:typeof f=="function"?f:he(+f),c):e},c.lineX0=c.lineY0=function(){return u().x(i).y(t)},c.lineY1=function(){return u().x(i).y(e)},c.lineX1=function(){return u().x(n).y(t)},c.defined=function(f){return arguments.length?(r=typeof f=="function"?f:he(!!f),c):r},c.curve=function(f){return arguments.length?(a=f,s!=null&&(o=a(s)),c):a},c.context=function(f){return arguments.length?(f==null?s=o=null:o=a(s=f),c):s},c}function AD(i,t){return t<i?-1:t>i?1:t>=i?0:NaN}function CD(i){return i}function RD(){var i=CD,t=AD,e=null,n=he(0),r=he(Wc),s=he(0);function a(o){var l,c=(o=dm(o)).length,u,f,h=0,d=new Array(c),p=new Array(c),_=+n.apply(this,arguments),g=Math.min(Wc,Math.max(-Wc,r.apply(this,arguments)-_)),m,S=Math.min(Math.abs(g)/c,s.apply(this,arguments)),x=S*(g<0?-1:1),v;for(l=0;l<c;++l)(v=p[d[l]=l]=+i(o[l],l,o))>0&&(h+=v);for(t!=null?d.sort(function(M,E){return t(p[M],p[E])}):e!=null&&d.sort(function(M,E){return e(o[M],o[E])}),l=0,f=h?(g-c*x)/h:0;l<c;++l,_=m)u=d[l],v=p[u],m=_+(v>0?v*f:0)+x,p[u]={data:o[u],index:l,value:v,startAngle:_,endAngle:m,padAngle:S};return p}return a.value=function(o){return arguments.length?(i=typeof o=="function"?o:he(+o),a):i},a.sortValues=function(o){return arguments.length?(t=o,e=null,a):t},a.sort=function(o){return arguments.length?(e=o,t=null,a):e},a.startAngle=function(o){return arguments.length?(n=typeof o=="function"?o:he(+o),a):n},a.endAngle=function(o){return arguments.length?(r=typeof o=="function"?o:he(+o),a):r},a.padAngle=function(o){return arguments.length?(s=typeof o=="function"?o:he(+o),a):s},a}function Q0(i){return i<0?-1:1}function t_(i,t,e){var n=i._x1-i._x0,r=t-i._x1,s=(i._y1-i._y0)/(n||r<0&&-0),a=(e-i._y1)/(r||n<0&&-0),o=(s*r+a*n)/(n+r);return(Q0(s)+Q0(a))*Math.min(Math.abs(s),Math.abs(a),.5*Math.abs(o))||0}function e_(i,t){var e=i._x1-i._x0;return e?(3*(i._y1-i._y0)/e-t)/2:t}function ah(i,t,e){var n=i._x0,r=i._y0,s=i._x1,a=i._y1,o=(s-n)/3;i._context.bezierCurveTo(n+o,r+o*t,s-o,a-o*e,s,a)}function Iu(i){this._context=i}Iu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ah(this,this._t0,e_(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var e=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,ah(this,e_(this,e=t_(this,i,t)),e);break;default:ah(this,this._t0,e=t_(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=e}}};Object.create(Iu.prototype).point=function(i,t){Iu.prototype.point.call(this,t,i)};function n_(i){return new Iu(i)}function zo(i,t,e){this.k=i,this.x=t,this.y=e}zo.prototype={constructor:zo,scale:function(i){return i===1?this:new zo(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new zo(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};zo.prototype;function PD(i){return i}function DD(i){if(i==null)return PD;var t,e,n=i.scale[0],r=i.scale[1],s=i.translate[0],a=i.translate[1];return function(o,l){l||(t=e=0);var c=2,u=o.length,f=new Array(u);for(f[0]=(t+=o[0])*n+s,f[1]=(e+=o[1])*r+a;c<u;)f[c]=o[c],++c;return f}}function LD(i,t){for(var e,n=i.length,r=n-t;r<--n;)e=i[r],i[r++]=i[n],i[n]=e}function by(i,t){return typeof t=="string"&&(t=i.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return i_(i,e)})}:i_(i,t)}function i_(i,t){var e=t.id,n=t.bbox,r=t.properties==null?{}:t.properties,s=ND(i,t);return e==null&&n==null?{type:"Feature",properties:r,geometry:s}:n==null?{type:"Feature",id:e,properties:r,geometry:s}:{type:"Feature",id:e,bbox:n,properties:r,geometry:s}}function ND(i,t){var e=DD(i.transform),n=i.arcs;function r(u,f){f.length&&f.pop();for(var h=n[u<0?~u:u],d=0,p=h.length;d<p;++d)f.push(e(h[d],d));u<0&&LD(f,p)}function s(u){return e(u)}function a(u){for(var f=[],h=0,d=u.length;h<d;++h)r(u[h],f);return f.length<2&&f.push(f[0]),f}function o(u){for(var f=a(u);f.length<4;)f.push(f[0]);return f}function l(u){return u.map(o)}function c(u){var f=u.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(c)};case"Point":h=s(u.coordinates);break;case"MultiPoint":h=u.coordinates.map(s);break;case"LineString":h=a(u.arcs);break;case"MultiLineString":h=u.arcs.map(a);break;case"Polygon":h=l(u.arcs);break;case"MultiPolygon":h=u.arcs.map(l);break;default:return null}return{type:f,coordinates:h}}return c(t)}const yc=1440,Sc=900,r_=230,ID={europe:["Albania","Austria","Belarus","Belgium","Bosnia and Herz.","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Lithuania","Luxembourg","Macedonia","Moldova","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Ukraine","United Kingdom","N. Cyprus"],asia:["Afghanistan","Armenia","Azerbaijan","Bangladesh","Bhutan","Brunei","Cambodia","China","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Saudi Arabia","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"],africa:["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Central African Rep.","Chad","Congo","Côte d'Ivoire","Dem. Rep. Congo","Djibouti","Egypt","Eq. Guinea","Eritrea","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","S. Sudan","Senegal","Sierra Leone","Somalia","Somaliland","South Africa","Sudan","Tanzania","Togo","Tunisia","Uganda","W. Sahara","Zambia","Zimbabwe","eSwatini"]};function FD(i){const t=new Set(i.highlightCountries||[]);if(i.highlightRegions)for(const e of i.highlightRegions){const n=ID[e.toLowerCase()];if(n)for(const r of n)t.add(r)}return t}const UD="/prj-jcie/data/countries-110m.json";class OD{constructor(t){this.container=t,this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null,this.glMap=null,this.tileContainer=null,this.currentCenter=[0,15],this.currentZoom=1.2}render(t){if(t?.visible){if(this.tileContainer&&(this.tileContainer.style.display="",this.glMap))try{this.glMap.resize()}catch{}this.pendingConfig=t,this.ensureReady().then(()=>{this.pendingConfig&&this.applyConfig(this.pendingConfig)}).catch(e=>{console.error("MapLayer render failed:",e)})}}ensureReady(){if(this.readyPromise)return this.readyPromise;const t=am(UD),e=this.initTileBackground().catch(()=>null);return this.readyPromise=Promise.all([t,e]).then(([n])=>{const r=n?.objects?.countries;if(!r)throw new Error("countries object not found in TopoJSON");this.countryFeatures=by(n,r).features,this.createSvg(),this.drawBaseMap()}),this.readyPromise}async initTileBackground(){if(!(this.glMap||!this.container))try{const[t,{Protocol:e}]=await Promise.all([jg(()=>import("./maplibre-gl-CAsIRMuf.js").then(s=>s.m),[]),jg(()=>import("./index-CQ-HbO1j.js"),[])]),n=t.default||t,r=new e;n.addProtocol("pmtiles",r.tile),this.tileContainer=document.createElement("div"),this.tileContainer.className="map-tile-container",this.container.appendChild(this.tileContainer),this.glMap=new n.Map({container:this.tileContainer,style:{version:8,sources:{terrain:{type:"raster-dem",url:"https://tiles.mapterhorn.com/tilejson.json",tileSize:512,encoding:"terrarium"}},layers:[{id:"background",type:"background",paint:{"background-color":"#2a5080"}},{id:"hillshade",type:"hillshade",source:"terrain",paint:{"hillshade-shadow-color":"#4a4a4a","hillshade-highlight-color":"#f0f0f0","hillshade-accent-color":"#c0c0c0","hillshade-exaggeration":.5,"hillshade-illumination-direction":315}}]},center:[0,15],zoom:1.5,interactive:!1,attributionControl:!1,fadeDuration:0,preserveDrawingBuffer:!1}),await new Promise(s=>{this.glMap.on("load",s)})}catch(t){console.warn("MapLibre tile background init failed (falling back to flat map):",t),this.glMap=null}}createSvg(){!this.container||this.svg||(this.svg=tl(this.container).append("svg").attr("class","map-svg-overlay").attr("viewBox",`0 0 ${yc} ${Sc}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","world map"),this.svg.append("rect").attr("x",0).attr("y",0).attr("width",yc).attr("height",Sc).attr("fill","#06111e").attr("fill-opacity",this.glMap?.05:.7))}drawBaseMap(){this.svg&&(this.countryPaths=this.svg.append("g").attr("class","countries").selectAll("path").data(this.countryFeatures,t=>t.properties?.name).join("path").attr("vector-effect","non-scaling-stroke").attr("stroke-linejoin","round"),this.markerCircles=this.svg.append("g").attr("class","map-markers"),this.markerLabels=this.svg.append("g").attr("class","map-marker-labels"))}applyConfig(t){if(!this.countryPaths)return;const e=this.resolveCenter(t.center),n=Number.isFinite(t.zoom)?t.zoom:1.2,r=FD(t),s=!!(t.lightenNonVisited||t.lightenAllCountries),a=iD().center(e).scale(r_*n).translate([yc/2,Sc/2]),o=dy(a),l=!!this.glMap,c=_=>{const g=_.properties?.name;return r.has(g)?"#000000":l?"#e8e8e8":"#3f4f63"},u=_=>{const g=_.properties?.name;return l?r.has(g)?.3:r.size===0?t.lightenAllCountries?.15:.25:s?.1:.2:r.size===0?t.lightenAllCountries?.35:.68:r.has(g)?.3:s?.22:.5},f=_=>r.has(_.properties?.name)?"#000000":l?"#ffffff":"#a5b4c7",h=_=>r.has(_.properties?.name)?.6:l?.2:.35,d=_=>r.has(_.properties?.name)?1.2:.6;if(!this.countryPaths.node()?.getAttribute("d")){if(this.countryPaths.attr("d",o).attr("fill",c).attr("fill-opacity",u).attr("stroke",f).attr("stroke-opacity",h).attr("stroke-width",d),this.glMap){this._cameraTimer&&this._cameraTimer.stop(),this._cameraTimer=null;try{this.jumpTileCamera(e,n)}catch{}}}else if(this.countryPaths.transition().duration(650).ease(Ki).attr("d",o).attr("fill",c).attr("fill-opacity",u).attr("stroke",f).attr("stroke-opacity",h).attr("stroke-width",d),this.glMap){const _=[...this.currentCenter],g=this.currentZoom,m=ss(_[0],e[0]),S=ss(_[1],e[1]),x=ss(g,n),v=Ki,M=650,E=performance.now();this._cameraTimer&&this._cameraTimer.stop(),this._cameraTimer=im(()=>{const T=Math.min(1,(performance.now()-E)/M),A=v(T);try{this.jumpTileCamera([m(A),S(A)],x(A))}catch{}T>=1&&(this._cameraTimer.stop(),this._cameraTimer=null)})}this.updateMarkers(t.markers||[],a),this.currentCenter=e,this.currentZoom=n}jumpTileCamera(t,e){if(!this.glMap||!this.container)return;const n=r_*e,r=this.container.clientWidth,s=this.container.clientHeight,a=Math.min(r/yc,s/Sc),o=n*a,l=Math.log2(o*2*Math.PI/512);this.glMap.jumpTo({center:[t[0],t[1]],zoom:Math.max(0,l)})}resolveCenter(t){if(!Array.isArray(t)||t.length!==2)return[0,15];const[e,n]=t;return!Number.isFinite(e)||!Number.isFinite(n)?[0,15]:[e,n]}updateMarkers(t,e){if(!this.markerCircles||!this.markerLabels)return;const n=t.map(o=>{const l=Number(o.longitude),c=Number(o.latitude);if(!Number.isFinite(l)||!Number.isFinite(c))return null;const u=e([l,c]);return u?{id:o.id||`${o.name||o.country}-${l}-${c}`,x:u[0],y:u[1],name:o.name||"",country:o.country||"",isCurrent:!!o.isCurrent,color:o.color||"#ff6b6b",size:Number(o.size)||7}:null}).filter(Boolean),r=this.markerCircles.selectAll("circle").data(n,o=>o.id);r.exit().transition().duration(200).attr("r",0).remove(),r.enter().append("circle").attr("cx",o=>o.x).attr("cy",o=>o.y).attr("r",0).attr("fill-opacity",.1).merge(r).transition().duration(650).ease(Ki).attr("cx",o=>o.x).attr("cy",o=>o.y).attr("r",o=>o.isCurrent?o.size+3:o.size).attr("fill",o=>o.color).attr("fill-opacity",o=>o.isCurrent?.95:.72).attr("stroke","#ffffff").attr("stroke-width",o=>o.isCurrent?2:1).attr("stroke-opacity",.95);const s=n.filter(o=>o.isCurrent),a=this.markerLabels.selectAll("text").data(s,o=>o.id);a.exit().transition().duration(150).attr("opacity",0).remove(),a.enter().append("text").attr("x",o=>o.x+10).attr("y",o=>o.y-12).attr("fill","#ffffff").attr("font-size",14).attr("font-weight",600).attr("paint-order","stroke").attr("stroke","rgba(6,17,30,0.9)").attr("stroke-width",3).attr("stroke-linejoin","round").attr("opacity",0).text(o=>o.name).merge(a).transition().duration(650).ease(Ki).attr("x",o=>o.x+10).attr("y",o=>o.y-12).attr("opacity",1).text(o=>o.name)}clear(){if(this._cameraTimer&&(this._cameraTimer.stop(),this._cameraTimer=null),this.tileContainer&&(this.tileContainer.style.display="none"),this.container){const t=this.container.querySelector(".map-svg-overlay");t&&t.remove()}this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null}destroy(){this.clear(),this.glMap&&(this.glMap.remove(),this.glMap=null),this.tileContainer&&(this.tileContainer.remove(),this.tileContainer=null)}}const Ty=1e-10;function ju(i,t){const e=kD(i),n=e.filter(o=>BD(o,i));let r=0,s=0;const a=[];if(n.length>1){const o=Ay(n);for(let c=0;c<n.length;++c){const u=n[c];u.angle=Math.atan2(u.x-o.x,u.y-o.y)}n.sort((c,u)=>u.angle-c.angle);let l=n[n.length-1];for(let c=0;c<n.length;++c){const u=n[c];s+=(l.x+u.x)*(u.y-l.y);const f={x:(u.x+l.x)/2,y:(u.y+l.y)/2};let h=null;for(let d=0;d<u.parentIndex.length;++d)if(l.parentIndex.includes(u.parentIndex[d])){const p=i[u.parentIndex[d]],_=Math.atan2(u.x-p.x,u.y-p.y),g=Math.atan2(l.x-p.x,l.y-p.y);let m=g-_;m<0&&(m+=2*Math.PI);const S=g-m/2;let x=Qn(f,{x:p.x+p.radius*Math.sin(S),y:p.y+p.radius*Math.cos(S)});x>p.radius*2&&(x=p.radius*2),(h==null||h.width>x)&&(h={circle:p,width:x,p1:u,p2:l,large:x>p.radius,sweep:!0})}h!=null&&(a.push(h),r+=lp(h.circle.radius,h.width),l=u)}}else{let o=i[0];for(let c=1;c<i.length;++c)i[c].radius<o.radius&&(o=i[c]);let l=!1;for(let c=0;c<i.length;++c)if(Qn(i[c],o)>Math.abs(o.radius-i[c].radius)){l=!0;break}l?r=s=0:(r=o.radius*o.radius*Math.PI,a.push({circle:o,p1:{x:o.x,y:o.y+o.radius},p2:{x:o.x-Ty,y:o.y+o.radius},width:o.radius*2,large:!0,sweep:!0}))}return s/=2,t&&(t.area=r+s,t.arcArea=r,t.polygonArea=s,t.arcs=a,t.innerPoints=n,t.intersectionPoints=e),r+s}function BD(i,t){return t.every(e=>Qn(i,e)<e.radius+Ty)}function kD(i){const t=[];for(let e=0;e<i.length;++e)for(let n=e+1;n<i.length;++n){const r=wy(i[e],i[n]);for(const s of r)s.parentIndex=[e,n],t.push(s)}return t}function lp(i,t){return i*i*Math.acos(1-t/i)-(i-t)*Math.sqrt(t*(2*i-t))}function Qn(i,t){return Math.sqrt((i.x-t.x)*(i.x-t.x)+(i.y-t.y)*(i.y-t.y))}function pm(i,t,e){if(e>=i+t)return 0;if(e<=Math.abs(i-t))return Math.PI*Math.min(i,t)*Math.min(i,t);const n=i-(e*e-t*t+i*i)/(2*e),r=t-(e*e-i*i+t*t)/(2*e);return lp(i,n)+lp(t,r)}function wy(i,t){const e=Qn(i,t),n=i.radius,r=t.radius;if(e>=n+r||e<=Math.abs(n-r))return[];const s=(n*n-r*r+e*e)/(2*e),a=Math.sqrt(n*n-s*s),o=i.x+s*(t.x-i.x)/e,l=i.y+s*(t.y-i.y)/e,c=-(t.y-i.y)*(a/e),u=-(t.x-i.x)*(a/e);return[{x:o+c,y:l-u},{x:o-c,y:l+u}]}function Ay(i){const t={x:0,y:0};for(const e of i)t.x+=e.x,t.y+=e.y;return t.x/=i.length,t.y/=i.length,t}function zD(i,t,e,n){n=n||{};const r=n.maxIterations||100,s=n.tolerance||1e-10,a=i(t),o=i(e);let l=e-t;if(a*o>0)throw"Initial bisect points must have opposite signs";if(a===0)return t;if(o===0)return e;for(let c=0;c<r;++c){l/=2;const u=t+l,f=i(u);if(f*a>=0&&(t=u),Math.abs(l)<s||f===0)return u}return t+l}function cp(i){const t=new Array(i);for(let e=0;e<i;++e)t[e]=0;return t}function s_(i,t){return cp(i).map(()=>cp(t))}function ka(i,t){let e=0;for(let n=0;n<i.length;++n)e+=i[n]*t[n];return e}function up(i){return Math.sqrt(ka(i,i))}function fp(i,t,e){for(let n=0;n<t.length;++n)i[n]=t[n]*e}function br(i,t,e,n,r){for(let s=0;s<i.length;++s)i[s]=t*e[s]+n*r[s]}function Cy(i,t,e){e=e||{};const n=e.maxIterations||t.length*200,r=e.nonZeroDelta||1.05,s=e.zeroDelta||.001,a=e.minErrorDelta||1e-6,o=e.minErrorDelta||1e-5,l=e.rho!==void 0?e.rho:1,c=e.chi!==void 0?e.chi:2,u=e.psi!==void 0?e.psi:-.5,f=e.sigma!==void 0?e.sigma:.5;let h;const d=t.length,p=new Array(d+1);p[0]=t,p[0].fx=i(t),p[0].id=0;for(let M=0;M<d;++M){const E=t.slice();E[M]=E[M]?E[M]*r:s,p[M+1]=E,p[M+1].fx=i(E),p[M+1].id=M+1}function _(M){for(let E=0;E<M.length;E++)p[d][E]=M[E];p[d].fx=M.fx}const g=(M,E)=>M.fx-E.fx,m=t.slice(),S=t.slice(),x=t.slice(),v=t.slice();for(let M=0;M<n;++M){if(p.sort(g),e.history){const T=p.map(A=>{const y=A.slice();return y.fx=A.fx,y.id=A.id,y});T.sort((A,y)=>A.id-y.id),e.history.push({x:p[0].slice(),fx:p[0].fx,simplex:T})}h=0;for(let T=0;T<d;++T)h=Math.max(h,Math.abs(p[0][T]-p[1][T]));if(Math.abs(p[0].fx-p[d].fx)<a&&h<o)break;for(let T=0;T<d;++T){m[T]=0;for(let A=0;A<d;++A)m[T]+=p[A][T];m[T]/=d}const E=p[d];if(br(S,1+l,m,-l,E),S.fx=i(S),S.fx<p[0].fx)br(v,1+c,m,-c,E),v.fx=i(v),v.fx<S.fx?_(v):_(S);else if(S.fx>=p[d-1].fx){let T=!1;if(S.fx>E.fx?(br(x,1+u,m,-u,E),x.fx=i(x),x.fx<E.fx?_(x):T=!0):(br(x,1-u*l,m,u*l,E),x.fx=i(x),x.fx<S.fx?_(x):T=!0),T){if(f>=1)break;for(let A=1;A<p.length;++A)br(p[A],1-f,p[0],f,p[A]),p[A].fx=i(p[A])}}else _(S)}return p.sort(g),{fx:p[0].fx,x:p[0]}}function VD(i,t,e,n,r,s,a){const o=e.fx,l=ka(e.fxprime,t);let c=o,u=o,f=l,h=0;r=r||1,s=s||1e-6,a=a||.1;function d(p,_,g){for(let m=0;m<16;++m)if(r=(p+_)/2,br(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),f=ka(n.fxprime,t),c>o+s*r*l||c>=g)_=r;else{if(Math.abs(f)<=-a*l)return r;f*(_-p)>=0&&(_=p),p=r,g=c}return 0}for(let p=0;p<10;++p){if(br(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),f=ka(n.fxprime,t),c>o+s*r*l||p&&c>=u)return d(h,r,u);if(Math.abs(f)<=-a*l)return r;if(f>=0)return d(r,h,c);u=c,h=r,r*=2}return r}function HD(i,t,e){let n={x:t.slice(),fx:0,fxprime:t.slice()},r={x:t.slice(),fx:0,fxprime:t.slice()};const s=t.slice();let a,o,l=1,c;e=e||{},c=e.maxIterations||t.length*20,n.fx=i(n.x,n.fxprime),a=n.fxprime.slice(),fp(a,n.fxprime,-1);for(let u=0;u<c;++u){if(l=VD(i,a,n,r,l),e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),!l)fp(a,n.fxprime,-1);else{br(s,1,r.fxprime,-1,n.fxprime);const f=ka(n.fxprime,n.fxprime),h=Math.max(0,ka(s,r.fxprime)/f);br(a,h,a,-1,r.fxprime),o=n,n=r,r=o}if(up(n.fxprime)<=1e-5)break}return e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),n}function GD(i,t={}){t.maxIterations=t.maxIterations||500;const e=t.initialLayout||YD,n=t.lossFunction||Ju,r=WD(i,t),s=e(r,t),a=Object.keys(s),o=[];for(const u of a)o.push(s[u].x),o.push(s[u].y);const c=Cy(u=>{const f={};for(let h=0;h<a.length;++h){const d=a[h];f[d]={x:u[2*h],y:u[2*h+1],radius:s[d].radius}}return n(f,r)},o,t).x;for(let u=0;u<a.length;++u){const f=a[u];s[f].x=c[2*u],s[f].y=c[2*u+1]}return s}const Ry=1e-10;function hp(i,t,e){return Math.min(i,t)*Math.min(i,t)*Math.PI<=e+Ry?Math.abs(i-t):zD(n=>pm(i,t,n)-e,0,i+t)}function WD(i,t={}){const e=t.distinct,n=i.map(o=>Object.assign({},o));function r(o){return o.join(";")}if(e){const o=new Map;for(const l of n)for(let c=0;c<l.sets.length;c++){const u=String(l.sets[c]);o.set(u,l.size+(o.get(u)||0));for(let f=c+1;f<l.sets.length;f++){const h=String(l.sets[f]),d=`${u};${h}`,p=`${h};${u}`;o.set(d,l.size+(o.get(d)||0)),o.set(p,l.size+(o.get(p)||0))}}for(const l of n)l.sets.length<3&&(l.size=o.get(r(l.sets)))}const s=[],a=new Set;for(const o of n)if(o.sets.length===1)s.push(o.sets[0]);else if(o.sets.length===2){const l=o.sets[0],c=o.sets[1];a.add(r(o.sets)),a.add(r([c,l]))}s.sort((o,l)=>o===l?0:o<l?-1:1);for(let o=0;o<s.length;++o){const l=s[o];for(let c=o+1;c<s.length;++c){const u=s[c];a.has(r([l,u]))||n.push({sets:[l,u],size:0})}}return n}function XD(i,t,e){const n=s_(t.length,t.length),r=s_(t.length,t.length);return i.filter(s=>s.sets.length===2).forEach(s=>{const a=e[s.sets[0]],o=e[s.sets[1]],l=Math.sqrt(t[a].size/Math.PI),c=Math.sqrt(t[o].size/Math.PI),u=hp(l,c,s.size);n[a][o]=n[o][a]=u;let f=0;s.size+1e-10>=Math.min(t[a].size,t[o].size)?f=1:s.size<=1e-10&&(f=-1),r[a][o]=r[o][a]=f}),{distances:n,constraints:r}}function $D(i,t,e,n){for(let s=0;s<t.length;++s)t[s]=0;let r=0;for(let s=0;s<e.length;++s){const a=i[2*s],o=i[2*s+1];for(let l=s+1;l<e.length;++l){const c=i[2*l],u=i[2*l+1],f=e[s][l],h=n[s][l],d=(c-a)*(c-a)+(u-o)*(u-o),p=Math.sqrt(d),_=d-f*f;h>0&&p<=f||h<0&&p>=f||(r+=2*_*_,t[2*s]+=4*_*(a-c),t[2*s+1]+=4*_*(o-u),t[2*l]+=4*_*(c-a),t[2*l+1]+=4*_*(u-o))}}return r}function YD(i,t={}){let e=ZD(i,t);const n=t.lossFunction||Ju;if(i.length>=8){const r=qD(i,t),s=n(r,i),a=n(e,i);s+1e-8<a&&(e=r)}return e}function qD(i,t={}){const e=t.restarts||10,n=[],r={};for(const h of i)h.sets.length===1&&(r[h.sets[0]]=n.length,n.push(h));let{distances:s,constraints:a}=XD(i,n,r);const o=up(s.map(up))/s.length;s=s.map(h=>h.map(d=>d/o));const l=(h,d)=>$D(h,d,s,a);let c=null;for(let h=0;h<e;++h){const d=cp(s.length*2).map(Math.random),p=HD(l,d,t);(!c||p.fx<c.fx)&&(c=p)}const u=c.x,f={};for(let h=0;h<n.length;++h){const d=n[h];f[d.sets[0]]={x:u[2*h]*o,y:u[2*h+1]*o,radius:Math.sqrt(d.size/Math.PI)}}if(t.history)for(const h of t.history)fp(h.x,o);return f}function ZD(i,t){const e=t&&t.lossFunction?t.lossFunction:Ju,n={},r={};for(const f of i)if(f.sets.length===1){const h=f.sets[0];n[h]={x:1e10,y:1e10,rowid:n.length,size:f.size,radius:Math.sqrt(f.size/Math.PI)},r[h]=[]}i=i.filter(f=>f.sets.length===2);for(const f of i){let h=f.weight!=null?f.weight:1;const d=f.sets[0],p=f.sets[1];f.size+Ry>=Math.min(n[d].size,n[p].size)&&(h=0),r[d].push({set:p,size:f.size,weight:h}),r[p].push({set:d,size:f.size,weight:h})}const s=[];Object.keys(r).forEach(f=>{let h=0;for(let d=0;d<r[f].length;++d)h+=r[f][d].size*r[f][d].weight;s.push({set:f,size:h})});function a(f,h){return h.size-f.size}s.sort(a);const o={};function l(f){return f.set in o}function c(f,h){n[h].x=f.x,n[h].y=f.y,o[h]=!0}c({x:0,y:0},s[0].set);for(let f=1;f<s.length;++f){const h=s[f].set,d=r[h].filter(l),p=n[h];if(d.sort(a),d.length===0)throw"ERROR: missing pairwise overlap information";const _=[];for(var u=0;u<d.length;++u){const S=n[d[u].set],x=hp(p.radius,S.radius,d[u].size);_.push({x:S.x+x,y:S.y}),_.push({x:S.x-x,y:S.y}),_.push({y:S.y+x,x:S.x}),_.push({y:S.y-x,x:S.x});for(let v=u+1;v<d.length;++v){const M=n[d[v].set],E=hp(p.radius,M.radius,d[v].size),T=wy({x:S.x,y:S.y,radius:x},{x:M.x,y:M.y,radius:E});_.push(...T)}}let g=1e50,m=_[0];for(const S of _){n[h].x=S.x,n[h].y=S.y;const x=e(n,i);x<g&&(g=x,m=S)}c(m,h)}return n}function Ju(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const a=i[n.sets[0]],o=i[n.sets[1]];r=pm(a.radius,o.radius,Qn(a,o))}else r=ju(n.sets.map(a=>i[a]));const s=n.weight!=null?n.weight:1;e+=s*(r-n.size)*(r-n.size)}return e}function KD(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const o=i[n.sets[0]],l=i[n.sets[1]];r=pm(o.radius,l.radius,Qn(o,l))}else r=ju(n.sets.map(o=>i[o]));const s=n.weight!=null?n.weight:1,a=Math.log((r+1)/(n.size+1));e+=s*a*a}return e}function jD(i,t,e){if(e==null?i.sort((r,s)=>s.radius-r.radius):i.sort(e),i.length>0){const r=i[0].x,s=i[0].y;for(const a of i)a.x-=r,a.y-=s}if(i.length===2&&Qn(i[0],i[1])<Math.abs(i[1].radius-i[0].radius)&&(i[1].x=i[0].x+i[0].radius-i[1].radius-1e-10,i[1].y=i[0].y),i.length>1){const r=Math.atan2(i[1].x,i[1].y)-t,s=Math.cos(r),a=Math.sin(r);for(const o of i){const l=o.x,c=o.y;o.x=s*l-a*c,o.y=a*l+s*c}}if(i.length>2){let r=Math.atan2(i[2].x,i[2].y)-t;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;if(r>Math.PI){const s=i[1].y/(1e-10+i[1].x);for(const a of i){var n=(a.x+s*a.y)/(1+s*s);a.x=2*n-a.x,a.y=2*n*s-a.y}}}}function JD(i){i.forEach(r=>{r.parent=r});function t(r){return r.parent!==r&&(r.parent=t(r.parent)),r.parent}function e(r,s){const a=t(r),o=t(s);a.parent=o}for(let r=0;r<i.length;++r)for(let s=r+1;s<i.length;++s){const a=i[r].radius+i[s].radius;Qn(i[r],i[s])+1e-10<a&&e(i[s],i[r])}const n=new Map;for(let r=0;r<i.length;++r){const s=t(i[r]).parent.setid;n.has(s)||n.set(s,[]),n.get(s).push(i[r])}return i.forEach(r=>{delete r.parent}),Array.from(n.values())}function dp(i){const t=e=>{const n=i.reduce((s,a)=>Math.max(s,a[e]+a.radius),Number.NEGATIVE_INFINITY),r=i.reduce((s,a)=>Math.min(s,a[e]-a.radius),Number.POSITIVE_INFINITY);return{max:n,min:r}};return{xRange:t("x"),yRange:t("y")}}function QD(i,t,e){t==null&&(t=Math.PI/2);let n=Dy(i).map(c=>Object.assign({},c));const r=JD(n);for(const c of r){jD(c,t,e);const u=dp(c);c.size=(u.xRange.max-u.xRange.min)*(u.yRange.max-u.yRange.min),c.bounds=u}r.sort((c,u)=>u.size-c.size),n=r[0];let s=n.bounds;const a=(s.xRange.max-s.xRange.min)/50;function o(c,u,f){if(!c)return;const h=c.bounds;let d,p;if(u)d=s.xRange.max-h.xRange.min+a;else{d=s.xRange.max-h.xRange.max;const _=(h.xRange.max-h.xRange.min)/2-(s.xRange.max-s.xRange.min)/2;_<0&&(d+=_)}if(f)p=s.yRange.max-h.yRange.min+a;else{p=s.yRange.max-h.yRange.max;const _=(h.yRange.max-h.yRange.min)/2-(s.yRange.max-s.yRange.min)/2;_<0&&(p+=_)}for(const _ of c)_.x+=d,_.y+=p,n.push(_)}let l=1;for(;l<r.length;)o(r[l],!0,!1),o(r[l+1],!1,!0),o(r[l+2],!0,!0),l+=3,s=dp(n);return Py(n)}function tL(i,t,e,n,r){const s=Dy(i);t-=2*n,e-=2*n;const{xRange:a,yRange:o}=dp(s);if(a.max===a.min||o.max===o.min)return console.log("not scaling solution: zero size detected"),i;let l,c;if(r){const d=Math.sqrt(r/Math.PI)*2;l=t/d,c=e/d}else l=t/(a.max-a.min),c=e/(o.max-o.min);const u=Math.min(c,l),f=(t-(a.max-a.min)*u)/2,h=(e-(o.max-o.min)*u)/2;return Py(s.map(d=>({radius:u*d.radius,x:n+f+(d.x-a.min)*u,y:n+h+(d.y-o.min)*u,setid:d.setid})))}function Py(i){const t={};for(const e of i)t[e.setid]=e;return t}function Dy(i){return Object.keys(i).map(e=>Object.assign(i[e],{setid:e}))}function oh(i,t,e){let n=t[0].radius-Qn(t[0],i);for(let r=1;r<t.length;++r){const s=t[r].radius-Qn(t[r],i);s<=n&&(n=s)}for(let r=0;r<e.length;++r){const s=Qn(e[r],i)-e[r].radius;s<=n&&(n=s)}return n}function Ly(i,t,e){const n=[];for(const u of i)n.push({x:u.x,y:u.y}),n.push({x:u.x+u.radius/2,y:u.y}),n.push({x:u.x-u.radius/2,y:u.y}),n.push({x:u.x,y:u.y+u.radius/2}),n.push({x:u.x,y:u.y-u.radius/2});let r=n[0],s=oh(n[0],i,t);for(let u=1;u<n.length;++u){const f=oh(n[u],i,t);f>=s&&(r=n[u],s=f)}const a=Cy(u=>-1*oh({x:u[0],y:u[1]},i,t),[r.x,r.y],{maxIterations:500,minErrorDelta:1e-10}).x,o={x:e?0:a[0],y:a[1]};let l=!0;for(const u of i)if(Qn(o,u)>u.radius){l=!1;break}for(const u of t)if(Qn(o,u)<u.radius){l=!1;break}if(l)return o;if(i.length==1)return{x:i[0].x,y:i[0].y};const c={};return ju(i,c),c.arcs.length===0?{x:0,y:-1e3,disjoint:!0}:c.arcs.length==1?{x:c.arcs[0].circle.x,y:c.arcs[0].circle.y}:t.length?Ly(i,[]):Ay(c.arcs.map(u=>u.p1))}function eL(i){const t={},e=Object.keys(i);for(const n of e)t[n]=[];for(let n=0;n<e.length;n++){const r=e[n],s=i[r];for(let a=n+1;a<e.length;++a){const o=e[a],l=i[o],c=Qn(s,l);c+l.radius<=s.radius+1e-10?t[o].push(r):c+s.radius<=l.radius+1e-10&&t[r].push(o)}}return t}function nL(i,t,e){const n={},r=eL(i);for(let s=0;s<t.length;++s){const a=t[s].sets,o={},l={};for(let h=0;h<a.length;++h){o[a[h]]=!0;const d=r[a[h]];for(let p=0;p<d.length;++p)l[d[p]]=!0}const c=[],u=[];for(let h in i)h in o?c.push(i[h]):h in l||u.push(i[h]);const f=Ly(c,u,e);n[a]=f,f.disjoint&&t[s].size>0&&console.log("WARNING: area "+a+" not represented on screen")}return n}function iL(i,t,e){const n=[];return n.push(`
M`,i,t),n.push(`
m`,-e,0),n.push(`
a`,e,e,0,1,0,e*2,0),n.push(`
a`,e,e,0,1,0,-e*2,0),n.join(" ")}function rL(i){if(i.length===0)return[];const t={};return ju(i,t),t.arcs}function sL(i,t){if(i.length===0)return"M 0 0";const e=Math.pow(10,t||0),n=t!=null?s=>Math.round(s*e)/e:s=>s;if(i.length==1){const s=i[0].circle;return iL(n(s.x),n(s.y),n(s.radius))}const r=[`
M`,n(i[0].p2.x),n(i[0].p2.y)];for(const s of i){const a=n(s.circle.radius);r.push(`
A`,a,a,0,s.large?1:0,s.sweep?1:0,n(s.p1.x),n(s.p1.y))}return r.join(" ")}function aL(i,t={}){const{lossFunction:e,layoutFunction:n=GD,normalize:r=!0,orientation:s=Math.PI/2,orientationOrder:a,width:o=600,height:l=350,padding:c=15,scaleToFit:u=!1,symmetricalTextCentre:f=!1,distinct:h,round:d=2}=t;let p=n(i,{lossFunction:e==="default"||!e?Ju:e==="logRatio"?KD:e,distinct:h});r&&(p=QD(p,s,a));const _=tL(p,o,l,c,u),g=nL(_,i,f),m=new Map(Object.keys(_).map(v=>[v,{set:v,x:_[v].x,y:_[v].y,radius:_[v].radius}])),S=i.map(v=>{const M=v.sets.map(A=>m.get(A)),E=rL(M),T=sL(E,d);return{circles:M,arcs:E,path:T,area:v,has:new Set(v.sets)}});function x(v){let M="";for(const E of S)E.has.size>v.length&&v.every(T=>E.has.has(T))&&(M+=" "+E.path);return M}return S.map(({circles:v,arcs:M,path:E,area:T})=>({data:T,text:g[T.sets],circles:v,arcs:M,path:E,distinctPath:E+x(T.sets)}))}const lh=1440,ch=900,Mc=24,oL=768,a_=56,lL=130;class cL{constructor(t){this.container=t,this.svg=null,this.root=null,this.dataCache=new Map,this.lineSpanState=new Map,this.onResize=()=>{},window.addEventListener("resize",this.onResize)}async render(t,e={}){if(!t?.visible)return;const n=this.normalizeChartConfig(t,e);if(this.ensureSvg(),!this.root)return;this.root.selectAll("*").remove(),this.drawBackdrop();const r=window.innerWidth<oL,s=this.buildPanelSpecs(n,r);if(s.length===0)return;const a=s.filter(o=>o.chart).map(async o=>{const l=await this.loadDataset(o.chart);this.renderChart(o,l)});await Promise.all(a)}normalizeChartConfig(t,e={}){const n=t.layout||(Array.isArray(t.charts)&&t.charts.length===2?"dual":"single"),r=t.span||(e.spanId?{id:e.spanId}:null),s=!!e.transitionFromPrevious,a=Array.isArray(t.charts)&&t.charts.length>0?t.charts.map(o=>({...o,span:r,transitionFromPrevious:s})):[{id:t.id||"chart-1",type:t.type||"line",dataFile:t.dataFile,dataFormat:t.dataFormat||"auto",config:t.config||{},span:r,transitionFromPrevious:s}];return{visible:t.visible,layout:n,responsive:t.responsive||{mobileStack:!0},grid:t.grid||null,charts:a,position:t.position||null}}buildPanelSpecs(t,e){const n=t.charts||[];if(n.length===0)return[];const r=this.getPlotBounds(),s=t.responsive?.mobileStack!==!1,a=e&&s&&(t.layout==="dual"||t.layout==="grid");if(t.layout==="single"||a)return this.buildStackedPanels(n,r);if(t.layout==="dual"){const o=t.dualTitle||null,l=o?32:0;o&&this.root&&this.root.append("text").attr("x",r.left+(r.right-r.left)/2).attr("y",r.top+20).attr("text-anchor","middle").attr("fill","#eceff4").attr("font-size",16).attr("font-weight",700).text(o);const c=l?{...r,top:r.top+l}:r;return this.buildDualPanels(n,c)}return t.layout==="grid"?this.buildGridPanels(n,t.grid||{},r):this.buildStackedPanels(n,r)}getPlotBounds(){const e=document.getElementById("header-nav")?.offsetHeight??a_,n=Math.min(Math.max(e,a_),lL);return{left:Mc,right:lh-Mc,top:Mc+n,bottom:ch-Mc}}buildStackedPanels(t,e){const n=t.length,r=20,a=(e.bottom-e.top-r*(n-1))/n;return t.map((o,l)=>({chart:o,x:e.left,y:e.top+l*(a+r),width:e.right-e.left,height:a}))}buildDualPanels(t,e){const s=Math.ceil(t.length/2),a=(e.right-e.left-20)/2,o=(e.bottom-e.top-20*(s-1))/s;return t.map((l,c)=>{const u=c%2,f=Math.floor(c/2);return{chart:l,x:e.left+u*(a+20),y:e.top+f*(o+20),width:a,height:o}})}buildGridPanels(t,e,n){const r=e.allowEmptyCells!==!1,s=Array.isArray(e.rowPattern)&&e.rowPattern.length>0?e.rowPattern:this.makeDefaultRowPattern(e,t.length),a=Array.isArray(e.rowTitles)?e.rowTitles:[],o=e.title?32:0;e.title&&this.root&&this.root.append("text").attr("x",n.left+(n.right-n.left)/2).attr("y",n.top+20).attr("text-anchor","middle").attr("fill","#eceff4").attr("font-size",16).attr("font-weight",700).text(e.title);const l=Math.max(...s),c=18,u=18,f=s.length,h=n.right-n.left,d=n.bottom-n.top-o,p=a.length>0?22:0,_=(d-p*f-c*(f-1))/f,g=(h-u*(l-1))/l,m=[];let S=0;return s.forEach((x,v)=>{const M=n.top+o+v*(_+p+c);a[v]&&this.root&&this.root.append("text").attr("x",n.left+h/2).attr("y",M+15).attr("text-anchor","middle").attr("fill","#d8dee9").attr("font-size",14).attr("font-weight",600).text(a[v]);const E=M+p,T=x*g+(x-1)*u,A=n.left+(h-T)/2;for(let y=0;y<x;y+=1){const b=t[S]||null;if(!b&&!r)break;m.push({chart:b,x:A+y*(g+u),y:E,width:g,height:_,_gridIndex:m.length}),b&&(S+=1)}}),m}makeDefaultRowPattern(t,e){const n=Number.isFinite(t.columns)?Math.max(1,t.columns):e,r=Number.isFinite(t.rows)?Math.max(1,t.rows):Math.ceil(e/n),s=[];for(let a=0;a<r;a+=1){const o=e-a*n;o<=0?s.push(n):s.push(Math.min(n,o))}return s}async loadDataset(t){const e=t.dataFile;if(!e)return null;const n="/prj-jcie/",r=e.startsWith("/")?e.slice(1):e,s=`${n}${r}`,a=(t.dataFormat||"auto").toLowerCase(),o=a==="auto"?this.detectFormatFromPath(s):a,l=`${o}:${s}`;if(this.dataCache.has(l))return this.dataCache.get(l);let c;if(o==="json")c=await am(s);else if(o==="csv")c=await Q2(s,q2);else throw new Error(`Unsupported data format: ${o}`);return this.dataCache.set(l,c),c}detectFormatFromPath(t){if(t.endsWith(".json"))return"json";if(t.endsWith(".csv"))return"csv";throw new Error(`Cannot detect data format from path: ${t}`)}renderChart(t,e){if(!t.chart){this.drawEmptyPanel(t);return}const n=t.chart.type||"line";try{n==="line"?this.renderLine(t,e,t.chart.config||{},t.chart):n==="pie"?this.renderPie(t,e,t.chart.config||{}):n==="sankey"?this.renderSankey(t,e,t.chart.config||{}):n==="venn"?this.renderVenn(t,e,t.chart.config||{}):this.renderUnsupported(t,`未対応チャート: ${n}`)}catch(r){this.renderUnsupported(t,`描画エラー: ${n}`),console.error(r)}}renderLine(t,e,n,r={}){if(!Array.isArray(e)){this.renderUnsupported(t,"lineデータ形式が不正です");return}const s=n.xField||"year",a=n.yField||"value",o=n.seriesField||"series",l=e.filter(N=>Number.isFinite(Number(N[s]))&&Number.isFinite(Number(N[a])));if(l.length===0){this.renderUnsupported(t,"lineデータが空です");return}const c=ZA(l,N=>Number(N[s])),u=Array.isArray(n.xDomain)&&n.xDomain.length===2?[Number(n.xDomain[0]),Number(n.xDomain[1])]:null,f=u&&u.every(Number.isFinite)?[Math.min(u[0],u[1]),Math.max(u[0],u[1])]:[Number(c[0]),Number(c[1])];if(!f.every(Number.isFinite)||f[0]===f[1]){this.renderUnsupported(t,"lineのx軸設定が不正です");return}const h=l.filter(N=>{const Nt=Number(N[s]);return Nt>=f[0]&&Nt<=f[1]});if(h.length===0){this.renderUnsupported(t,"lineデータが空です");return}const d=Yf(h,N=>Number(N[a]))||0,p=Array.isArray(n.yDomain)&&n.yDomain.length===2?n.yDomain.map(Number):null,_=Gc().domain(p||[0,d*1.1]).nice(),g=p||_.domain(),m=r?.span?.id,S=m==null?null:String(m).trim(),x=!!(r?.transitionFromPrevious&&S),v=x?this.lineSpanState.get(S):null,M=v?.xDomain||f,E=v?.yDomain||g,T=n.title||"折れ線グラフ",A=this.createPanelInner(t,T),y=A.width,b=A.height,R=tC(h,N=>N[o]==null?"__single__":String(N[o])),D=R.length>1&&R.some(([N])=>N!=="__single__"),I=D?this.resolveLineLabelGutter(y):0,O=this.resolveYAxisLabelGutter(h,a),F=6,z=24,U=Math.max(80,y-O-I),H=Math.max(80,b-F-z),K=A.group.append("g").attr("transform",`translate(${O}, ${F})`),L=Gc().domain(M).range([0,U]),j=Gc().domain(E).range([H,0]),Mt=pC(L).ticks(5).tickFormat(qr("d")),bt=mC(j).ticks(5),Lt=N=>N.selectAll("text").attr("fill","#d8dee9").attr("font-size",11),At=N=>N.selectAll("line,path").attr("stroke","#8ca0b3").attr("opacity",.5);let q=null;if(n.gridLines!==!1){q=K.append("g").attr("class","grid-lines");const N=j.ticks(5);q.selectAll("line").data(N).enter().append("line").attr("x1",0).attr("y1",Nt=>j(Nt)).attr("x2",U).attr("y2",Nt=>j(Nt)).attr("stroke","#8ca0b3").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}const tt=K.append("g").attr("transform",`translate(0, ${H})`).call(Mt).call(Lt).call(At),ut=K.append("g").call(bt).call(Lt).call(At),Ct=Ey().x(N=>L(Number(N[s]))).y(N=>j(Number(N[a]))).curve(n_),pt=n.areaFill!==!1?wD().x(N=>L(Number(N[s]))).y0(H).y1(N=>j(Number(N[a]))).curve(n_):null;if(!D){const N=this.getThemePrimary();let Nt=null;if(pt){const st=`area-grad-single-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",st).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:N,opacity:.25},{offset:"100%",color:N,opacity:0}]).enter().append("stop").attr("offset",P=>P.offset).attr("stop-color",P=>P.color).attr("stop-opacity",P=>P.opacity),Nt=K.append("path").datum(h).attr("fill",`url(#${st})`).attr("opacity",0).attr("d",pt)}const Ut=K.append("path").datum(h).attr("fill","none").attr("stroke",N).attr("stroke-width",2.5).attr("d",Ct),Vt=K.selectAll(".point").data(h).enter().append("circle").attr("cx",st=>L(Number(st[s]))).attr("cy",st=>j(Number(st[a]))).attr("r",2.7).attr("fill","#ffffff");if(x&&v){L.domain(f),j.domain(g);const st=du().duration(850).ease(pu);if(q){q.selectAll("line").remove();const P=j.ticks(5);q.selectAll("line").data(P).enter().append("line").attr("x1",0).attr("y1",w=>j(w)).attr("x2",U).attr("y2",w=>j(w)).attr("stroke","#8ca0b3").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}tt.transition(st).call(Mt).call(Lt).call(At),ut.transition(st).call(bt).call(Lt).call(At),Ut.transition(st).attr("d",Ct).on("end",()=>{this.renderLineAnnotations(K,L,j,U,H,n.annotations)}),Nt&&Nt.transition(st).attr("d",pt).attr("opacity",1),Vt.transition(st).attr("cx",P=>L(Number(P[s]))).attr("cy",P=>j(Number(P[a])))}else{this.renderLineAnnotations(K,L,j,U,H,n.annotations);const st=Ut.node()?.getTotalLength()||0;Ut.attr("stroke-dasharray",`${st} ${st}`).attr("stroke-dashoffset",st).transition().duration(700).ease(Ki).attr("stroke-dashoffset",0),Nt&&Nt.transition().duration(700).ease(Ki).attr("opacity",1)}this.attachLineTooltip(K,[{name:"__single__",values:h}],L,j,U,H,s,a,()=>N),S&&this.lineSpanState.set(S,{xDomain:[...f],yDomain:[...g]});return}const Ft=R.map(([N,Nt])=>({name:N,values:[...Nt].sort((Ut,Vt)=>Number(Ut[s])-Number(Vt[s]))})).filter(N=>N.values.length>0),ae=this.buildPalette(Ft.length),xt=xy().domain(Ft.map(N=>N.name)).range(ae),zt=K.append("g").attr("class","line-series"),Yt=[],Bt=[],W=[];if(Ft.forEach((N,Nt)=>{let Ut=null;if(pt){const P=`area-grad-${Nt}-${t.x}-${t.y}`,w=xt(N.name);this.defs.append("linearGradient").attr("id",P).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:w,opacity:.18},{offset:"100%",color:w,opacity:0}]).enter().append("stop").attr("offset",k=>k.offset).attr("stop-color",k=>k.color).attr("stop-opacity",k=>k.opacity),Ut=zt.append("path").datum(N.values).attr("fill",`url(#${P})`).attr("opacity",0).attr("d",pt)}W.push(Ut);const Vt=zt.append("path").datum(N.values).attr("fill","none").attr("stroke",xt(N.name)).attr("stroke-width",2.2).attr("d",Ct);Yt.push(Vt);const st=zt.selectAll(`.point-${this.toSafeCssToken(N.name)}`).data(N.values).enter().append("circle").attr("cx",P=>L(Number(P[s]))).attr("cy",P=>j(Number(P[a]))).attr("r",2.2).attr("fill",xt(N.name));Bt.push(st)}),x&&v){L.domain(f),j.domain(g);const N=du().duration(850).ease(pu);if(q){q.selectAll("line").remove();const Nt=j.ticks(5);q.selectAll("line").data(Nt).enter().append("line").attr("x1",0).attr("y1",Ut=>j(Ut)).attr("x2",U).attr("y2",Ut=>j(Ut)).attr("stroke","#8ca0b3").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}tt.transition(N).call(Mt).call(Lt).call(At),ut.transition(N).call(bt).call(Lt).call(At),Yt.forEach((Nt,Ut)=>{Nt.transition(N).attr("d",Ct).on("end",()=>{Ut===0&&(this.renderLineAnnotations(K,L,j,U,H,n.annotations),this.drawLineEndLabels(K,Ft,xt,L,j,U,H,s,a))})}),W.forEach(Nt=>{Nt&&Nt.transition(N).attr("d",pt).attr("opacity",1)}),Bt.forEach(Nt=>{Nt.transition(N).attr("cx",Ut=>L(Number(Ut[s]))).attr("cy",Ut=>j(Number(Ut[a])))})}else this.renderLineAnnotations(K,L,j,U,H,n.annotations),Yt.forEach(N=>{const Nt=N.node()?.getTotalLength()||0;N.attr("stroke-dasharray",`${Nt} ${Nt}`).attr("stroke-dashoffset",Nt).transition().duration(700).ease(Ki).attr("stroke-dashoffset",0)}),W.forEach(N=>{N&&N.transition().duration(700).ease(Ki).attr("opacity",1)}),this.drawLineEndLabels(K,Ft,xt,L,j,U,H,s,a);this.attachLineTooltip(K,Ft,L,j,U,H,s,a,N=>xt(N)),S&&this.lineSpanState.set(S,{xDomain:[...f],yDomain:[...g]})}attachLineTooltip(t,e,n,r,s,a,o,l,c){const u=t.append("rect").attr("width",s).attr("height",a).attr("fill","none").style("pointer-events","all").style("cursor","crosshair"),f=t.append("line").attr("y1",0).attr("y2",a).attr("stroke","#ffffff").attr("stroke-opacity",0).attr("stroke-width",.8).attr("stroke-dasharray","3 3"),h=t.append("g").attr("class","line-tooltip").attr("opacity",0),d=[...new Set(e.flatMap(_=>_.values.map(g=>Number(g[o]))))].sort((_,g)=>_-g),p=Kp(_=>_).left;u.on("mousemove",_=>{const[g]=JR(_),m=n.invert(g),S=p(d,m),x=d[S-1],v=d[S],M=x==null?v:v==null||m-x<v-m?x:v;if(M==null)return;const E=n(M);f.attr("x1",E).attr("x2",E).attr("stroke-opacity",.3),h.selectAll("*").remove(),h.attr("opacity",1);let T=0;e.forEach(A=>{const y=A.values.find(O=>Number(O[o])===M);if(!y)return;const b=r(Number(y[l])),R=c(A.name);h.append("circle").attr("cx",E).attr("cy",b).attr("r",4).attr("fill",R).attr("stroke","#fff").attr("stroke-width",1.5);const D=E+8,I=12+T*16;h.append("rect").attr("x",D-2).attr("y",I-10).attr("width",70).attr("height",14).attr("rx",3).attr("fill","rgba(9,21,35,0.85)"),h.append("text").attr("x",D).attr("y",I).attr("fill",R).attr("font-size",10).attr("font-weight",500).text(qr(",")(Number(y[l]))),T+=1}),h.append("text").attr("x",E).attr("y",a+16).attr("text-anchor","middle").attr("fill","#d8dee9").attr("font-size",10).text(qr("d")(M))}),u.on("mouseleave",()=>{f.attr("stroke-opacity",0),h.attr("opacity",0)})}drawLineEndLabels(t,e,n,r,s,a,o,l,c){if(!Array.isArray(e)||e.length===0)return;const u=a+10,f=12,h=8,d=Math.max(h,o-8),p=e.map(g=>{const m=g.values[g.values.length-1];if(!m)return null;const S=Number(m[l]),x=Number(m[c]);return!Number.isFinite(S)||!Number.isFinite(x)?null:{name:g.name,xEnd:r(S),yTarget:s(x),y:s(x)}}).filter(Boolean).sort((g,m)=>g.yTarget-m.yTarget);if(p.length===0)return;p.forEach((g,m)=>{m===0?g.y=Math.max(h,g.yTarget):g.y=Math.max(g.yTarget,p[m-1].y+f)}),p[p.length-1].y=Math.min(p[p.length-1].y,d);for(let g=p.length-2;g>=0;g-=1)p[g].y=Math.min(p[g].y,p[g+1].y-f);if(p[0].y<h)if(p.length===1)p[0].y=(h+d)/2;else{const g=(d-h)/(p.length-1);p.forEach((m,S)=>{m.y=h+g*S})}const _=t.append("g").attr("class","line-end-labels");_.selectAll("line").data(p).enter().append("line").attr("x1",g=>g.xEnd+2).attr("y1",g=>g.yTarget).attr("x2",u-4).attr("y2",g=>g.y).attr("stroke",g=>n(g.name)).attr("stroke-opacity",.8).attr("stroke-width",1),_.selectAll("text").data(p).enter().append("text").attr("x",u).attr("y",g=>g.y).attr("dominant-baseline","middle").attr("fill",g=>n(g.name)).attr("font-size",10).attr("font-weight",600).text(g=>g.name)}renderLineAnnotations(t,e,n,r,s,a){if(!Array.isArray(a)||a.length===0)return;const o=t.append("g").attr("class","chart-annotations"),l=e.domain(),c=n.domain();a.forEach(u=>{const f=u?.type,h=String(u?.label||"");if(f==="verticalLine"){const d=u.year??u.x??u.value,p=Number(d);if(!Number.isFinite(p)||p<Math.min(...l)||p>Math.max(...l))return;const _=e(p);o.append("line").attr("x1",_).attr("y1",0).attr("x2",_).attr("y2",s).attr("stroke","#e5edf7").attr("stroke-width",1).attr("stroke-opacity",.8).attr("stroke-dasharray","4 4"),h&&o.append("text").attr("x",_+6).attr("y",12).attr("fill","#e7eef8").attr("font-size",10).attr("font-weight",500).text(h);return}if(f==="horizontalLine"){const d=u.y??u.value,p=Number(d);if(!Number.isFinite(p)||p<Math.min(...c)||p>Math.max(...c))return;const _=n(p);if(o.append("line").attr("x1",0).attr("y1",_).attr("x2",r).attr("y2",_).attr("stroke","#e5edf7").attr("stroke-width",1).attr("stroke-opacity",.8).attr("stroke-dasharray","4 4"),h){const g=Math.max(12,_-6);o.append("text").attr("x",6).attr("y",g).attr("fill","#e7eef8").attr("font-size",10).attr("font-weight",500).text(h)}}})}renderPie(t,e,n){const r=this.resolvePieDataset(e,n);if(!Array.isArray(r)||r.length===0){this.renderUnsupported(t,"pieデータが空です");return}const s=n.labelField||"label",a=n.valueField||"value",o=r.map(m=>({...m,__pieValue:this.parsePieNumericValue(m[a])})).filter(m=>m[s]!=null&&Number.isFinite(m.__pieValue));if(o.length===0){this.renderUnsupported(t,"pieデータが不正です");return}const l=n.title||n.groupTitle||"円グラフ",c=this.createPanelInner(t,l,{compact:!0}),u=Math.max(24,Math.min(c.width,c.height)*.33),f=RD().value(m=>m.__pieValue).sort(null),h=TD().innerRadius(0).outerRadius(u),d=this.buildPalette(o.length);n.remainderColor&&o.length===2&&(d[1]=n.remainderColor);const p=c.group.append("g").attr("transform",`translate(${c.width/2}, ${c.height/2-8})`),_=t._gridIndex!=null?t._gridIndex*80:0;p.selectAll("path").data(f(o)).enter().append("path").attr("fill",(m,S)=>d[S]).attr("stroke","#0b1726").attr("stroke-width",1).attr("opacity",.95).attr("d",m=>h({...m,endAngle:m.startAngle})).transition().duration(600).delay(_).ease(Ki).attrTween("d",m=>{const S=ss({startAngle:m.startAngle,endAngle:m.startAngle},m);return x=>h(S(x))});const g=c.group.append("g").attr("transform",`translate(0, ${c.height-Math.min(o.length*15,c.height*.38)})`);o.slice(0,6).forEach((m,S)=>{const x=S*15;g.append("rect").attr("x",0).attr("y",x-9).attr("width",9).attr("height",9).attr("fill",d[S]),g.append("text").attr("x",14).attr("y",x).attr("fill","#d8dee9").attr("font-size",10).text(`${m[s]}: ${m[a]}`)})}resolvePieDataset(t,e){if(Array.isArray(t)){const n=e.rowField,r=e.rowValue;if(n&&r!=null){const s=t.find(l=>String(l?.[n]??"").trim()===String(r).trim());if(!s)return[];const o=(Array.isArray(e.categoryColumns)&&e.categoryColumns.length>0?e.categoryColumns:Object.keys(s).filter(l=>l!==n)).map(l=>({label:l,value:this.parsePieNumericValue(s[l])})).filter(l=>Number.isFinite(l.value));if(o.length===0)return[];if(o.length===1&&e.primaryLabel&&(o[0].label=String(e.primaryLabel)),o.length===1&&Number.isFinite(Number(e.normalizeTo))){const l=Number(e.normalizeTo),c=Math.max(0,l-o[0].value);o.push({label:e.remainderLabel||"未治療",value:c})}return o}return t}if(Array.isArray(t?.groups)){const n=e.groupId,r=n?t.groups.find(s=>s.id===n):t.groups[e.groupIndex??0];return r?r.values||[]:[]}return[]}parsePieNumericValue(t){if(Number.isFinite(t))return Number(t);if(typeof t=="string"){const e=t.replace(/,/g,"").replace(/%/g,"").trim(),n=Number(e);if(Number.isFinite(n))return n}return NaN}renderSankey(t,e,n){const r=this.normalizeSankeyData(e);if(!r||r.nodes.length===0||r.links.length===0){this.renderUnsupported(t,"sankeyデータが不正です");return}const s=n.title||"サンキー・ダイアグラム",a=this.createPanelInner(t,s),o=a.width,l=a.height,c=new Map(r.nodes.map(A=>[A.id,{...A,in:[],out:[],level:0}])),u=r.links.map(A=>({source:c.get(A.source),target:c.get(A.target),value:Number(A.value)})).filter(A=>A.source&&A.target&&Number.isFinite(A.value)&&A.value>0);u.forEach(A=>{A.source.out.push(A),A.target.in.push(A)}),this.assignNodeLevels(c);const f=new Map;[...c.values()].forEach(A=>{f.has(A.level)||f.set(A.level,[]),f.get(A.level).push(A)});const h=[...f.keys()].sort((A,y)=>A-y),d=Math.max(...h,1),p=12,_=Math.max(8,Math.min(18,o*.03)),g=Math.max(...h.map(A=>f.get(A).reduce((y,b)=>y+this.nodeValue(b),0)),1),m=(l-p*6)/g;h.forEach(A=>{const y=f.get(A),R=y.reduce((I,O)=>I+this.nodeValue(O),0)*m+(y.length-1)*p;let D=(l-R)/2;y.forEach(I=>{I.h=Math.max(8,this.nodeValue(I)*m),I.w=_,I.x=A/d*(o-_),I.y=D,I.inOffset=0,I.outOffset=0,D+=I.h+p})});const S=this.buildPalette(Math.max(h.length,2)),x=[...c.values()];x.forEach(A=>{A.color=S[Math.min(A.level,S.length-1)]});const v=a.group.append("g").attr("fill","none"),M=[];u.forEach((A,y)=>{const b=Math.max(1.5,A.value*m),R=A.source.x+A.source.w,D=A.source.y+A.source.outOffset+b/2,I=A.target.x,O=A.target.y+A.target.inOffset+b/2;A.source.outOffset+=b,A.target.inOffset+=b;const F=R+(I-R)*.45,z=R+(I-R)*.55,U=`M${R},${D} C${F},${D} ${z},${O} ${I},${O}`,H=`sankey-link-grad-${y}-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",H).attr("gradientUnits","userSpaceOnUse").attr("x1",R).attr("y1",D).attr("x2",I).attr("y2",O).selectAll("stop").data([{offset:"0%",color:A.source.color},{offset:"100%",color:A.target.color}]).enter().append("stop").attr("offset",L=>L.offset).attr("stop-color",L=>L.color);const K=v.append("path").attr("d",U).attr("stroke",`url(#${H})`).attr("stroke-width",b).attr("stroke-opacity",.35);M.push({el:K,link:A})});const E=a.group.append("g");E.selectAll("rect").data(x).enter().append("rect").attr("x",A=>A.x).attr("y",A=>A.y).attr("width",A=>A.w).attr("height",A=>A.h).attr("fill",A=>A.color).attr("fill-opacity",.88).attr("stroke","#ffffff").attr("stroke-width",.6).style("pointer-events","all").style("cursor","pointer").on("mouseenter",(A,y)=>{M.forEach(({el:b,link:R})=>{const D=R.source.id===y.id||R.target.id===y.id;b.transition().duration(200).attr("stroke-opacity",D?.7:.08)})}).on("mouseleave",()=>{M.forEach(({el:A})=>{A.transition().duration(200).attr("stroke-opacity",.35)})}),E.selectAll("text").data(x).enter().append("text").attr("x",A=>A.level===0?A.x+A.w+6:A.x-6).attr("y",A=>A.y+A.h/2+3).attr("text-anchor",A=>A.level===0?"start":"end").attr("fill","#e6edf5").attr("font-size",11).text(A=>A.label)}normalizeSankeyData(t){if(t?.nodes&&t?.links){const e=t.nodes.map((s,a)=>({id:s.id??s.name??String(a),label:s.name??s.id??String(a)})),n=e.map(s=>s.id),r=t.links.map(s=>({source:typeof s.source=="number"?n[s.source]:s.source,target:typeof s.target=="number"?n[s.target]:s.target,value:Number(s.value)}));return{nodes:e,links:r}}if(Array.isArray(t)){const e=new Set,n=t.map(s=>{const a=String(s.source??s.from??""),o=String(s.target??s.to??"");return e.add(a),e.add(o),{source:a,target:o,value:Number(s.value??s.count??0)}});return{nodes:[...e].filter(Boolean).map(s=>({id:s,label:s})),links:n}}return null}assignNodeLevels(t){const e=[...t.values()],n=new Map(e.map(s=>[s.id,s.in.length])),r=e.filter(s=>s.in.length===0);if(r.length===0){e.forEach(s=>{s.level=0});return}for(;r.length>0;){const s=r.shift();s.out.forEach(a=>{const o=a.target;o.level=Math.max(o.level,s.level+1),n.set(o.id,n.get(o.id)-1),n.get(o.id)===0&&r.push(o)})}}nodeValue(t){const e=Qg(t.in,r=>r.value),n=Qg(t.out,r=>r.value);return Math.max(e,n,1)}renderVenn(t,e,n){const r=this.resolveVennDataset(e,n);if(!r||!Array.isArray(r.sets)||r.sets.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const s=n.title||r.title||"ベン図",a=this.createPanelInner(t,s,{compact:!0}),o=r.sets.filter(x=>Array.isArray(x?.sets)&&x.sets.length>=1&&Number.isFinite(Number(x.size))).map(x=>({sets:x.sets.map(v=>String(v)),size:Math.max(0,Number(x.size))})),l=[...new Set(o.filter(x=>x.sets.length===1).map(x=>x.sets[0]))];if(l.length<2||l.length>3){this.renderUnsupported(t,"ベン図は2〜3集合を想定しています");return}if(o.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const c=this.buildPalette(l.length),u=new Map(l.map((x,v)=>[x,c[v]])),f=x=>x.slice().sort().join("&"),h=new Map(o.map(x=>[f(x.sets),x]));let d;try{d=aL(o,{width:a.width,height:a.height,padding:6,round:2})}catch(x){console.warn("venn layout failed",x),this.renderUnsupported(t,"vennレイアウトの計算に失敗しました");return}if(!Array.isArray(d)||d.length===0){this.renderUnsupported(t,"vennレイアウト結果が空です");return}const p=a.group.append("g"),_=[...d].sort((x,v)=>x.data.sets.length-v.data.sets.length),g=a.width/2,m=a.height/2;if(p.selectAll("path.venn-area").data(_).enter().append("path").attr("class",x=>`venn-area venn-${x.data.sets.length===1?"circle":"intersection"}`).attr("d",x=>x.path).attr("fill-rule",x=>x.data.sets.length>1?"evenodd":null).attr("fill",x=>x.data.sets.length===1?u.get(x.data.sets[0])||"#5fb3ff":"#dbe6f2").attr("fill-opacity",0).attr("stroke",x=>x.data.sets.length===1?u.get(x.data.sets[0])||"#5fb3ff":"#dbe6f2").attr("stroke-opacity",0).attr("stroke-width",x=>x.data.sets.length===1?1.2:.9).attr("transform",x=>x.data.sets.length===1?`translate(${g},${m}) scale(0.3) translate(${-g},${-m})`:null).transition().duration(500).delay(x=>x.data.sets.length===1?0:300).ease(Ki).attr("fill-opacity",x=>x.data.sets.length===1?.3:.16).attr("stroke-opacity",x=>x.data.sets.length===1?.95:.45).attr("transform",null),d.filter(x=>x.data.sets.length===1).forEach(x=>{const v=x.data.sets[0],M=x.circles.find(E=>E.set===v)||x.circles[0];M&&p.append("text").attr("x",M.x).attr("y",Math.max(10,M.y-M.radius-8)).attr("text-anchor","middle").attr("fill","#e6edf5").attr("font-size",10).attr("opacity",0).transition().duration(400).delay(200).attr("opacity",1).text(v)}),l.length===2){const x=l[0],v=l[1],M=h.get(f([x,v]))?.size??0,E=h.get(f([x]))?.size??0,T=h.get(f([v]))?.size??0,A=new Map([[f([x]),Math.max(0,E-M)],[f([v]),Math.max(0,T-M)],[f([x,v]),Math.max(0,M)]]);d.filter(y=>A.has(f(y.data.sets))).forEach(y=>{const b=A.get(f(y.data.sets));Number.isFinite(b)&&p.append("text").attr("x",y.text.x).attr("y",y.text.y+3).attr("text-anchor","middle").attr("fill","#ffffff").attr("font-size",10).attr("opacity",0).text(qr(",")(b)).transition().duration(400).delay(350).attr("opacity",1)})}l.length===3&&d.filter(x=>x.data.sets.length>=2).forEach(x=>{const v=h.get(f(x.data.sets));v&&p.append("text").attr("x",x.text.x).attr("y",x.text.y+3).attr("text-anchor","middle").attr("fill","#ffffff").attr("font-size",10).attr("opacity",0).text(qr(",")(v.size)).transition().duration(400).delay(350).attr("opacity",1)})}resolveVennDataset(t,e){return t?.sets?t:Array.isArray(t?.groups)&&(e.groupId?t.groups.find(r=>r.id===e.groupId):t.groups[e.groupIndex??0])||null}renderUnsupported(t,e){const n=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);n.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#0f1b2a").attr("fill-opacity",.7).attr("stroke","#42536a").attr("stroke-opacity",.5),n.append("text").attr("x",t.width/2).attr("y",t.height/2).attr("text-anchor","middle").attr("fill","#e7edf6").attr("font-size",12).text(e)}drawEmptyPanel(t){this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`).append("rect").attr("width",t.width).attr("height",t.height).attr("rx",8).attr("fill","#0e1a28").attr("fill-opacity",.2).attr("stroke","#42536a").attr("stroke-dasharray","4 4").attr("stroke-opacity",.35)}createPanelInner(t,e="",n={}){const r=n.compact===!0,s=e?r?20:28:0,a=r?10:14,o=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);o.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","none").attr("stroke",this.getThemePrimary()).attr("stroke-width",1.5).attr("stroke-opacity",.15).attr("filter","url(#panel-glow)"),o.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#091523").attr("fill-opacity",.63).attr("stroke","#5f738a").attr("stroke-opacity",.35),e&&o.append("text").attr("x",a).attr("y",a+3).attr("dominant-baseline","hanging").attr("fill","#ffffff").attr("font-size",r?12:14).attr("font-weight",600).text(e);const l=o.append("g").attr("transform",`translate(${a}, ${a+s})`),c=t.width-a*2,u=t.height-a*2-s;return{group:l,width:c,height:u}}drawBackdrop(){this.root.append("rect").attr("x",0).attr("y",0).attr("width",lh).attr("height",ch).attr("fill","#06111e").attr("fill-opacity",.64)}ensureSvg(){if(!this.container||this.svg&&this.svg.node()?.isConnected)return;this.clear(),this.svg=tl(this.container).append("svg").attr("viewBox",`0 0 ${lh} ${ch}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","chart layer"),this.root=this.svg.append("g"),this.defs=this.svg.append("defs");const t=this.defs.append("filter").attr("id","panel-glow").attr("x","-20%").attr("y","-20%").attr("width","140%").attr("height","140%");t.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",3).attr("result","blur"),t.append("feMerge").selectAll("feMergeNode").data(["blur","SourceGraphic"]).enter().append("feMergeNode").attr("in",e=>e)}getThemePrimary(){return getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#ff6b6b"}buildPalette(t){const e=["#5fb3ff","#f59e0b","#34d399","#f87171","#a78bfa","#2dd4bf","#f472b6","#60a5fa","#fbbf24","#4ade80"];return t<=e.length?e.slice(0,t):Array.from({length:t},(n,r)=>gD(r/t))}toSafeCssToken(t){return String(t).replaceAll(/[^a-zA-Z0-9_-]/g,"-")}resolveLineLabelGutter(t){return t<280?70:t<420?96:130}resolveYAxisLabelGutter(t,e){const n=t.map(l=>Number(l[e])).filter(l=>Number.isFinite(l));if(n.length===0)return 56;const r=Yf(n.map(l=>Math.abs(l)))||0,s=[0,r*.25,r*.5,r*.75,r],o=14+(Yf(s.map(l=>qr(",")(Math.round(l)).length))||4)*7;return Math.max(56,Math.min(110,o))}clear(){this.container&&(this.container.innerHTML=""),this.svg=null,this.root=null,this.defs=null}destroy(){window.removeEventListener("resize",this.onResize),this.clear()}}class uL{constructor(t){this.config=t,this.elements={},this.svgHosts=null,this.webglLayer=null,this.imageLayer=null,this.mapLayer=null,this.chartLayer=null,this.activeLayer=null,this.activeChartSpanId=null}async init(){this.elements={image:document.getElementById("image-layer"),webgl:document.getElementById("webgl-layer"),svg:document.getElementById("svg-layer")};const t=this.elements.webgl;t&&(this.webglLayer=new zA(t),this.webglLayer.init(),t.classList.add("active"),this.activeLayer="webgl"),this.elements.image&&(this.imageLayer=new VA(this.elements.image)),this.elements.svg&&(this.svgHosts=this.createSvgHosts(this.elements.svg),this.mapLayer=new OD(this.svgHosts.map),this.chartLayer=new cL(this.svgHosts.chart))}createSvgHosts(t){t.innerHTML="";const e=document.createElement("div");e.className="svg-sub-layer",e.dataset.layer="map";const n=document.createElement("div");return n.className="svg-sub-layer",n.dataset.layer="chart",t.appendChild(e),t.appendChild(n),{map:e,chart:n}}transition(t,e){const n=this.resolveActiveLayer(t);if(this.activeLayer&&this.activeLayer!==n){const r=this.elements[this.activeLayer];r&&(r.classList.remove("active"),r.classList.remove("clip-enter")),this.activeLayer==="image"&&this.imageLayer?.hide(),this.activeLayer==="svg"&&(this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null)}if(n&&this.elements[n]){const r=this.elements[n];r.classList.add("active"),this.activeLayer&&this.activeLayer!==n&&(r.classList.remove("clip-enter"),r.offsetWidth,r.classList.add("clip-enter"))}if(n==="image"&&t.image&&this.imageLayer?.show(t.image),n==="svg")if(t.map?.visible)this.chartLayer?.clear(),this.activeChartSpanId=null,this.mapLayer?.render(t.map);else if(t.chart?.visible){this.mapLayer?.clear();const r=this.resolveChartSpanId(t.chart),a=this.shouldContinueChartFromPrevious(t.chart)&&r&&this.activeChartSpanId===r;this.chartLayer?.render(t.chart,{transitionFromPrevious:!!a,spanId:r}).catch(o=>{console.error("Chart render failed:",o)}),this.activeChartSpanId=r}else this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null;this.activeLayer=n}resolveActiveLayer(t){return t.chart?.visible||t.map?.visible?"svg":t.image?.visible?"image":"webgl"}resolveChartSpanId(t){const e=t?.span?.id;if(e==null)return null;const n=String(e).trim();return n.length>0?n:null}shouldContinueChartFromPrevious(t){return!!t?.span?.continueFromPrevious}updateProgress(t){this.webglLayer?.setProgress(t)}setThemeColor(t){this.webglLayer?.setThemeColor(t)}destroy(){this.chartLayer?.destroy(),this.mapLayer?.destroy(),this.webglLayer?.destroy()}}class fL{constructor(t){this.config=t,this.container=document.getElementById("scroll-content"),this.stepElements=[]}render(){this.config.steps.forEach((t,e)=>{const n=this.createStepElement(t,e);this.container.appendChild(n),this.stepElements.push(n)})}createStepElement(t,e){const n=document.createElement("section");if(n.className="step",n.dataset.step=e,n.id=t.id,t.scrollHeight&&(n.style.minHeight=t.scrollHeight),t.id&&t.id.endsWith("-hero")&&n.classList.add("hero-step"),t.fixedClosing)return n.classList.add("fixed-closing-step"),n.appendChild(this.createFixedClosingElement()),n;if(t.text?.content){const s=document.createElement("div");s.className="text-card",s.innerHTML=t.text.content,this.applySplitText(s),this.applyPosition(s,t.text.position),n.appendChild(s)}return n}applySplitText(t){t.querySelectorAll("h2").forEach(n=>{const r=n.textContent;if(!r.trim())return;const s=n.getAttribute("style")||"",a=r.length>12?this.splitIntoLines(r):[r];n.innerHTML="",s&&n.setAttribute("style",s),a.forEach((o,l)=>{const c=document.createElement("span");c.className="split-line";const u=document.createElement("span");u.className="split-line-inner",u.textContent=o,u.style.transitionDelay=`${l*.08}s`,c.appendChild(u),n.appendChild(c)})})}splitIntoLines(t){const e=t.split(new RegExp("(?<=[。、！？〜～ ―])"));if(e.length>=2)return e.filter(r=>r.trim().length>0);const n=Math.ceil(t.length/2);return[t.slice(0,n),t.slice(n)]}applyPosition(t,e){e&&(e.width&&(t.style.maxWidth=e.width),t.dataset.hAlign=e.horizontal||"center",t.dataset.vAlign=e.vertical||"center")}activateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");if(n){n.classList.add("visible");const r=n.dataset.hAlign||"center",s=n.dataset.vAlign||"center",a={left:"flex-start",center:"center",right:"flex-end"},o={top:"flex-start",center:"center",bottom:"flex-end"};e.style.justifyContent=a[r]||"center",e.style.alignItems=o[s]||"center"}}deactivateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");n&&n.classList.remove("visible")}createFixedClosingElement(){const t=document.createElement("div");return t.className="fixed-closing-inner",t.innerHTML=`
      <div class="fixed-closing-main">
        <div class="fixed-closing-logo">
          <img
            class="fixed-closing-logo-image"
            src="/prj-jcie/images/fgfj-logo-horizontal-white.svg"
            alt="FGFJ Friends of the Global Fund, Japan"
          />
        </div>
        <div class="fixed-closing-contact">
          <p>〒107-0052 東京都港区赤坂1-1-12 明産溜池ビル7F (公財)日本国際交流センター 内</p>
          <p>Email: fgfj&lt;at&gt;jcie.or.jp (&lt;at&gt;を@に変更してお送りください)</p>
          <p>TEL: 03-6277-7811(代) FAX: 03-6277-6712</p>
        </div>
      </div>
      <hr class="fixed-closing-divider" />
      <p class="fixed-closing-copy">© Japan Center for International Exchange. All rights reserved.</p>
    `,t}}const Fu={aids:{id:"aids",name:"エイズとの闘い",primary:"#ff6b6b",secondary:"#ff8e8e",accent:"#e85555"},tuberculosis:{id:"tuberculosis",name:"結核との闘い",primary:"#4ecdc4",secondary:"#6dd5d0",accent:"#3bb8b0"},malariae:{id:"malariae",name:"マラリアとの闘い",primary:"#f4a620",secondary:"#f6b84a",accent:"#e89813"}};class hL{constructor(t,e="aids"){this.container=t,this.currentDiseaseId=e}render(){const t=Fu[this.currentDiseaseId];this.container.innerHTML=`
      <div class="nav-inner">
        <div class="nav-logo">
          <a href="/prj-jcie/" class="nav-logo-text">データで見る感染症との闘い</a>
        </div>
        <ul class="nav-links">
          ${Object.values(Fu).map(e=>{const n=e.id===this.currentDiseaseId;return`
              <li>
                <a href="/prj-jcie/${e.id}/"
                   class="nav-link${n?" active":""}"
                   style="--link-color: ${e.primary}"
                   data-disease="${e.id}">
                  ${e.name}
                </a>
              </li>`}).join("")}
        </ul>
      </div>
    `,document.documentElement.style.setProperty("--theme-primary",t.primary),document.documentElement.style.setProperty("--theme-secondary",t.secondary),document.documentElement.style.setProperty("--theme-accent",t.accent)}}const dL="/prj-jcie/data/countries-110m.json",o_=["Vietnam","El Salvador","Nigeria","Indonesia","Niger","Malawi","Kenya","Zimbabwe","Cameroon","India","Belize","South Africa","Myanmar","United States of America","Philippines","Pakistan","Afghanistan"],pL="rgb(118, 80, 127)",mL=4e3;class gL{constructor(t){this.container=t,this.svg=null,this.projection=null,this.path=null,this.countryPaths=null,this.countryFeatures=[],this.currentIndex=0,this.timer=null,this.isPlaying=!1,this.countryNameEl=null}async init(){const t=await am(dL),e=t?.objects?.countries;if(!e)throw new Error("countries object not found");this.countryFeatures=by(t,e).features,this.createGlobe(),this.start()}createGlobe(){const t=this.container.clientWidth||800,e=this.container.clientHeight||800,r=Math.min(t,e)*.42;this.projection=sD().scale(r).translate([t/2,e/2]).clipAngle(90).rotate([0,-20,0]),this.path=dy(this.projection),this.svg=tl(this.container).append("svg").attr("class","globe-svg").attr("width",t).attr("height",e),this.svg.append("circle").attr("cx",t/2).attr("cy",e/2).attr("r",r).attr("fill","#0a1628").attr("stroke","#1a3050").attr("stroke-width",1.5);const s=I3();this.svg.append("path").datum(s()).attr("class","globe-graticule").attr("d",this.path).attr("fill","none").attr("stroke","#1a2a40").attr("stroke-width",.4),this.countryPaths=this.svg.append("g").attr("class","globe-countries").selectAll("path").data(this.countryFeatures,l=>l.properties?.name).join("path").attr("d",this.path).attr("fill","#2a3a50").attr("fill-opacity",.6).attr("stroke","#4a5a70").attr("stroke-width",.5).attr("stroke-opacity",.5);const o=this.svg.append("defs").append("radialGradient").attr("id","globe-sheen").attr("cx","40%").attr("cy","30%").attr("r","60%");o.append("stop").attr("offset","0%").attr("stop-color","#ffffff").attr("stop-opacity",.06),o.append("stop").attr("offset","100%").attr("stop-color","#000000").attr("stop-opacity",0),this.svg.append("circle").attr("cx",t/2).attr("cy",e/2).attr("r",r).attr("fill","url(#globe-sheen)").attr("pointer-events","none")}start(){this.isPlaying||(this.isPlaying=!0,this.animateLoop())}stop(){this.isPlaying=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)}animateLoop(){if(!this.isPlaying)return;const t=o_[this.currentIndex];this.focusCountry(t),this.currentIndex=(this.currentIndex+1)%o_.length,this.timer=setTimeout(()=>this.animateLoop(),mL)}focusCountry(t){const e=this.countryFeatures.find(l=>{const c=l.properties?.name;return c===t||c===this.getAlternativeName(t)});if(!e)return;const n=M3(e),r=[-n[0],-n[1]],s=this.projection.rotate(),a=ss([s[0],s[1]],r),o=this;du().duration(1200).ease(pu).tween("rotate",()=>l=>{const c=a(l);o.projection.rotate([c[0],c[1],0]),o.redraw(t)}),this.showCountryName(t)}redraw(t){this.countryPaths&&(this.countryPaths.attr("d",this.path).attr("fill",e=>e.properties?.name===t?pL:"#2a3a50").attr("fill-opacity",e=>e.properties?.name===t?.85:.5),this.svg.select(".globe-graticule").attr("d",this.path))}showCountryName(t){this.countryNameEl&&tl(this.countryNameEl).transition().duration(300).style("opacity",0).on("end",()=>{this.countryNameEl&&(this.countryNameEl.textContent=t,tl(this.countryNameEl).transition().duration(500).style("opacity",1))})}setCountryNameElement(t){this.countryNameEl=t}getAlternativeName(t){return{"United States of America":"United States",Russia:"Russian Federation"}[t]||t}destroy(){this.stop(),this.svg&&(this.svg.remove(),this.svg=null),this.countryPaths=null,this.countryFeatures=[],this.countryNameEl=null}}class _L{constructor(t){this.container=t,this.globe=null}render(){const t=Object.values(Fu);this.container.innerHTML=`
      <div id="globe-container"></div>
      <div class="top-page">
        <p class="top-lead">JCIEスペシャルコンテンツ</p>
        <h1 class="top-title">「感染症との闘い」</h1>
        <p class="top-subtitle">エイズ、結核、マラリア。人類を脅かす感染症の現状と課題をデータで紐解く。</p>
        <span id="globe-country-name"></span>
        <div class="top-disease-grid">
          ${t.map(e=>`
            <a href="/prj-jcie/${e.id}/" class="top-disease-card" style="--card-color: ${e.primary}">
              <span class="top-disease-name">${e.name}</span>
            </a>`).join("")}
        </div>
      </div>
    `,this.initGlobe()}async initGlobe(){const t=document.getElementById("globe-container"),e=document.getElementById("globe-country-name");if(t){this.globe=new gL(t),this.globe.setCountryNameElement(e);try{await this.globe.init()}catch(n){console.warn("Globe animation failed to init:",n)}}}destroy(){this.globe&&(this.globe.destroy(),this.globe=null)}}const xL=Object.keys(Fu);function vL(){const i="/prj-jcie/".replace(/\/$/,""),t=window.location.pathname,r=(t.startsWith(i)?t.slice(i.length):t).split("/").filter(Boolean)[0];return r&&xL.includes(r)?r:null}class yL{constructor(){this.config=null,this.scrollController=null,this.layerOrchestrator=null,this.contentRenderer=null}async init(){try{const t=vL();if(!t){new _L(document.getElementById("scroll-content")).render();return}new hL(document.getElementById("header-nav"),t).render();const n=new Ny(t);this.config=await n.load(),this.contentRenderer=new fL(this.config),this.contentRenderer.render(),this.layerOrchestrator=new uL(this.config),await this.layerOrchestrator.init(),this.scrollController=new wM({onStepEnter:(r,s)=>this.handleStepEnter(r,s),onStepLeave:(r,s)=>this.handleStepLeave(r,s),onProgress:r=>this.handleProgress(r)}),this.scrollController.init(),console.log(`App initialized with ${this.config.steps.length} steps`)}catch(t){console.error("App initialization failed:",t)}}handleStepEnter(t,e){const n=this.config.steps[t];n&&(this.contentRenderer.activateStep(t),this.layerOrchestrator.transition(n,e),document.body.classList.toggle("is-fixed-closing",!!n.fixedClosing))}handleStepLeave(t,e){this.config.steps[t]?.fixedClosing&&document.body.classList.remove("is-fixed-closing"),this.contentRenderer.deactivateStep(t)}handleProgress(t){this.layerOrchestrator.updateProgress(t)}}const SL=new yL;SL.init();
