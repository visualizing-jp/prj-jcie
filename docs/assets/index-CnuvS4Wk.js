(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class ty{constructor(t="aids"){this.diseaseId=t}async load(){const[t,e]=await Promise.all([this.loadContentConfig(),this.loadCityEpisodeConfig()]);return this.normalize(t,e)}async loadContentConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content.json`);if(!e.ok)throw new Error(`Failed to load config: ${e.status}`);return e.json()}async loadCityEpisodeConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content-map.json`);if(!e.ok){if(e.status===404)return null;throw new Error(`Failed to load city episode config: ${e.status}`)}return e.json()}normalize(t,e){const n=this.expandSteps(t.steps||[],e);return{steps:this.appendFixedClosingStep(n).map((s,a)=>({id:s.id||`step${a}`,index:a,text:s.text||null,chart:s.chart||null,map:s.map||null,image:s.image||null,scrollHeight:s.scrollHeight||null,fixedClosing:!!s.fixedClosing})),settings:t.settings||{},raw:t}}expandSteps(t,e){const n=[];for(const r of t){if(r.id==="city-episodes-anchor"||r.cityEpisodes?.enabled){const a=this.buildCityEpisodeSteps(e);if(a.length>0){n.push(...a);continue}}n.push(r)}return n}buildCityEpisodeSteps(t){const e=Array.isArray(t?.cities)?t.cities:[];if(e.length===0)return[];const n=this.escapeHtml(t?.timeline?.title||"都市エピソード"),r=this.escapeHtml(t?.timeline?.description||""),s=[...e].sort((c,u)=>(c.order??0)-(u.order??0)),a=[{id:"episode-intro",text:{content:`<h2>${n}</h2><p>${r}</p>`,visible:!0,position:{horizontal:"left",vertical:"center",width:"34%"}},chart:{visible:!1},map:{visible:!0,mode:"world-overview",center:[0,15],zoom:1.15,highlightCountries:[],lightenAllCountries:!0,lightenNonVisited:!1,markers:[]},image:{visible:!1},scrollHeight:"100vh"}],o=new Set,l=[];return s.forEach((c,u)=>{const f=c.country||"",h=Number(c.longitude),d=Number(c.latitude);Number.isFinite(h)&&Number.isFinite(d)&&l.push(c),f&&o.add(f),a.push({id:`city-episodes-${c.id||u+1}`,text:{content:this.renderCityEpisodeCard(c,u+1,s.length),visible:!0,position:{horizontal:u%2===0?"right":"left",vertical:"center",width:"36%"}},chart:{visible:!1},map:{visible:!0,mode:"single-city",cityId:c.id||null,center:[Number.isFinite(h)?h:0,Number.isFinite(d)?d:15],zoom:this.resolveCityZoom(c),highlightCountries:[...o],lightenNonVisited:!0,markers:l.map(p=>({id:p.id||`${p.nameEn||p.name}`,name:p.name||p.nameEn||"",country:p.country||"",longitude:Number(p.longitude),latitude:Number(p.latitude),color:p.style?.color||null,size:p.style?.size||7,isCurrent:p.id===c.id}))},image:{visible:!1},scrollHeight:c.transitions?.scrollHeight||"120vh"})}),a}renderCityEpisodeCard(t,e,n){const r=this.escapeHtml(t?.data?.title||t?.name||""),s=this.escapeHtml(t?.data?.description||""),a=this.escapeHtml(t?.name||t?.nameEn||""),o=this.escapeHtml(t?.nameEn||""),l=this.escapeHtml(t?.data?.url||"#"),u=t?.data?.thumbnail?`/prj-jcie/config/${this.diseaseId}/thumb/${encodeURIComponent(t.data.thumbnail)}`:"",f=u?`<img class="city-episode-thumb" src="${u}" alt="${r}" loading="lazy" />`:"";return`
      <article class="city-episode-card">
        <p class="city-episode-meta">都市エピソード ${e}/${n}</p>
        ${f}
        <h3 class="city-episode-title">${r}</h3>
        <p class="city-episode-location">${a}${o&&o!==a?`（${o}）`:""}</p>
        <p class="city-episode-description">${s}</p>
        <a class="city-episode-link" href="${l}" target="_blank" rel="noopener noreferrer">外部コンテンツを見る</a>
      </article>
    `}resolveCityZoom(t){const e=t?.transitions?.routeType;return e==="same-location"?3.6:e==="start"?2.8:2.5}escapeHtml(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}appendFixedClosingStep(t){const e=t.filter(n=>n.id!=="closing"&&n.id!=="fixed-closing");return e.push({id:"fixed-closing",fixedClosing:!0,text:null,chart:{visible:!1},map:{visible:!1},image:{visible:!1},scrollHeight:"100vh"}),e}}var ey="1.3.17";function I0(i,t,e){return Math.max(i,Math.min(t,e))}function ny(i,t,e){return(1-e)*i+e*t}function iy(i,t,e,n){return ny(i,t,1-Math.exp(-e*n))}function ry(i,t){return(i%t+t)%t}var sy=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const e=I0(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=iy(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function ay(i,t){let e;return function(...n){let r=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(r,n)},t)}}var oy=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=i,this.content=t,e&&(this.debouncedResize=ay(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},F0=class{events={};emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},$p=100/6,Nr={passive:!1},ly=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Nr),this.element.addEventListener("touchstart",this.onTouchStart,Nr),this.element.addEventListener("touchmove",this.onTouchMove,Nr),this.element.addEventListener("touchend",this.onTouchEnd,Nr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new F0;on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Nr),this.element.removeEventListener("touchstart",this.onTouchStart,Nr),this.element.removeEventListener("touchmove",this.onTouchMove,Nr),this.element.removeEventListener("touchend",this.onTouchEnd,Nr)}onTouchStart=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=n===1?$p:n===2?this.window.width:1,s=n===1?$p:n===2?this.window.height:1;t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Yp=i=>Math.min(1,1.001-Math.pow(2,-10*i)),cy=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new sy;emitter=new F0;dimensions;virtualScroll;constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:S=!0,autoRaf:x=!1,anchors:v=!1,autoToggle:M=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:A=T,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=ey,(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=Yp:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:S,autoRaf:x,anchors:v,autoToggle:M,allowNestedScroll:E,naiveDimensions:A,stopInertiaOnNavigate:y},this.dimensions=new oy(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new ly(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=e.find(r=>r.getAttribute("href")?.includes("#"));if(n){const r=n.getAttribute("href");if(r){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${r.split("#")[1]}`;this.scrollTo(a,s)}}}this.options.stopInertiaOnNavigate&&e.find(r=>r.host===window.location.host)&&this.reset()};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||r&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof i=="string"&&["top","left","start","#"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let h;if(typeof i=="string"?(h=document.querySelector(i),h||(i==="#top"?i=0:console.warn("Lenis: Target not found",i))):i instanceof HTMLElement&&i?.nodeType&&(h=i),h){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const d=h.getBoundingClientRect();i=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const h=i-this.animatedScroll;h>this.limit/2?i=i-this.limit:h<-this.limit/2&&(i=i+this.limit)}}else i=I0(0,i,this.limit);if(i===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=i),typeof a=="number"&&typeof o!="function"?o=Yp:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,i,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),r&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now(),r=i._lenis??={};let s,a,o,l,c,u,f,h;const d=this.options.gestureOrientation;if(n-(r.time??0)>2e3){r.time=Date.now();const M=window.getComputedStyle(i);r.computedStyle=M;const E=M.overflowX,T=M.overflowY;if(s=["auto","overlay","scroll"].includes(E),a=["auto","overlay","scroll"].includes(T),r.hasOverflowX=s,r.hasOverflowY=a,!s&&!a||d==="vertical"&&!a||d==="horizontal"&&!s)return!1;c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,h=i.clientHeight,o=c>f,l=u>h,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=c,r.scrollHeight=u,r.clientWidth=f,r.clientHeight=h}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,h=r.clientHeight;if(!s&&!a||!o&&!l||d==="vertical"&&(!a||!l)||d==="horizontal"&&(!s||!o))return!1;let p;if(d==="horizontal")p="x";else if(d==="vertical")p="y";else{const M=t!==0,E=e!==0;M&&s&&o&&(p="x"),E&&a&&l&&(p="y")}if(!p)return!1;let _,m,g,S,x;if(p==="x")_=i.scrollLeft,m=c-f,g=t,S=s,x=o;else if(p==="y")_=i.scrollTop,m=u-h,g=e,S=a,x=l;else return!1;return(g>0?_<m:_>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?ry(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function pr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function U0(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},Yd,dn,Le,Ti=1e8,Ae=1/Ti,$f=Math.PI*2,uy=$f/4,fy=0,O0=Math.sqrt,hy=Math.cos,dy=Math.sin,un=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},wr=function(t){return typeof t=="number"},qd=function(t){return typeof t>"u"},rr=function(t){return typeof t=="object"},Gn=function(t){return t!==!1},Kd=function(){return typeof window<"u"},vl=function(t){return ke(t)||un(t)},B0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,py=/random\([^)]+\)/g,my=/,\s*/g,qp=/(?:-?\.?\d|\.)+/gi,k0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ga=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,z0=/[+-]=-?[.\d]+/,gy=/[^,'"\[\]\s]+/gi,_y=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,Gi,Yf,Zd,hi={},Uc={},V0,H0=function(t){return(Uc=Ia(t,hi))&&Zn},jd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$o=function(t,e){return!e&&console.warn(t)},G0=function(t,e){return t&&(hi[t]=e)&&Uc&&(Uc[t]=e)||hi},Yo=function(){return 0},xy={suppressEvents:!0,isStart:!0,kill:!1},pc={suppressEvents:!0,kill:!1},vy={suppressEvents:!0},Jd={},Kr=[],qf={},W0,si={},Ou={},Kp=30,mc=[],Qd="",tp=function(t){var e=t[0],n,r;if(rr(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=mc.length;r--&&!mc[r].targetTest(e););n=mc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new p_(t[r],n)))||t.splice(r,1);return t},As=function(t){return t._gsap||tp(wi(t))[0]._gsap},X0=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():qd(n)&&t.getAttribute&&t.getAttribute(e)||n},Wn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},Ma=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},yy=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Oc=function(){var t=Kr.length,e=Kr.slice(0),n,r;for(qf={},Kr.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ep=function(t){return!!(t._initted||t._startAt||t.add)},$0=function(t,e,n,r){Kr.length&&!dn&&Oc(),t.render(e,n,!!(dn&&e<0&&ep(t))),Kr.length&&!dn&&Oc()},Y0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gy).length<2?e:un(t)?t.trim():t},q0=function(t){return t},di=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Sy=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Ia=function(t,e){for(var n in e)t[n]=e[n];return t},Zp=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=rr(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Bc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},No=function(t){var e=t.parent||Ie,n=t.keyframes?Sy(bn(t.keyframes)):di;if(Gn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},My=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},K0=function(t,e,n,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},xu=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Jr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Cs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ey=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Kf=function(t,e,n,r){return t._startAt&&(dn?t._startAt.revert(pc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},by=function i(t){return!t||t._ts&&i(t.parent)},jp=function(t){return t._repeat?Fa(t._tTime,t=t.duration()+t._rDelay)*t:0},Fa=function(t,e){var n=Math.floor(t=Ne(t/e));return t&&n===t?n-1:n},kc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vu=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ae)||0))},yu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ne(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vu(t),n._dirty||Cs(n,t)),t},Z0=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=kc(t.rawTime(),e),(!e._dur||dl(0,e.totalDuration(),n)-e._tTime>Ae)&&e.render(n,!0)),Cs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ae}},Yi=function(t,e,n,r){return e.parent&&Jr(e),e._start=Ne((wr(n)?n:n||t!==Ie?xi(t,n,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),K0(t,e,"_first","_last",t._sort?"_start":0),Zf(e)||(t._recent=e),r||Z0(t,e),t._ts<0&&yu(t,t._tTime),t},j0=function(t,e){return(hi.ScrollTrigger||jd("scrollTrigger",e))&&hi.ScrollTrigger.create(e,t)},J0=function(t,e,n,r,s){if(ip(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&W0!==oi.frame)return Kr.push(t),t._lazy=[s,r],1},Ty=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Zf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},wy=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&Ty(t)&&!(!t._initted&&Zf(t))||(t._ts<0||t._dp._ts<0)&&!Zf(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=dl(0,t._tDur,e),u=Fa(l,o),t._yoyo&&u&1&&(a=1-a),u!==Fa(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||dn||r||t._zTime===Ae||!e&&t._zTime){if(!t._initted&&J0(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ae:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Kf(t,e,n,!0),t._onUpdate&&!n&&ci(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ci(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Jr(t,1),!n&&!dn&&(ci(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ay=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ua=function(t,e,n,r){var s=t._repeat,a=Ne(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ne(a*(s+1)+t._rDelay*s):a,o>0&&!r&&yu(t,t._tTime=t._tDur*o),t.parent&&vu(t),n||Cs(t.parent,t),t},Jp=function(t){return t instanceof Ln?Cs(t):Ua(t,t._dur)},Cy={_start:0,endTime:Yo,totalDuration:Yo},xi=function i(t,e,n){var r=t.labels,s=t._recent||Cy,a=t.duration()>=Ti?s.endTime(!1):t._dur,o,l,c;return un(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Io=function(t,e,n){var r=wr(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Gn(l.vars.inherit)&&l.parent;a.immediateRender=Gn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new je(e[0],a,e[s+1])},rs=function(t,e){return t||t===0?e(t):e},dl=function(t,e,n){return n<t?t:n>e?e:n},yn=function(t,e){return!un(t)||!(e=_y.exec(t))?"":e[1]},Ry=function(t,e,n){return rs(n,function(r){return dl(t,e,r)})},jf=[].slice,Q0=function(t,e){return t&&rr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&rr(t[0]))&&!t.nodeType&&t!==Gi},Py=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return un(r)&&!e||Q0(r,1)?(s=n).push.apply(s,wi(r)):n.push(r)})||n},wi=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):un(t)&&!n&&(Yf||!Oa())?jf.call((e||Zd).querySelectorAll(t),0):bn(t)?Py(t,n):Q0(t)?jf.call(t,0):t?[t]:[]},Jf=function(t){return t=wi(t)[0]||$o("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return wi(e,n.querySelectorAll?n:n===t?$o("Invalid scope")||Zd.createElement("div"):t)}},t_=function(t){return t.sort(function(){return .5-Math.random()})},e_=function(t){if(ke(t))return t;var e=rr(t)?t:{each:t},n=Rs(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,f=r;return un(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,p){var _=(p||e).length,m=a[_],g,S,x,v,M,E,T,A,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Ti])[1],!y){for(T=-Ti;T<(T=p[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=a[_]=[],g=l?Math.min(y,_)*u-.5:r%y,S=y===Ti?0:l?_*f/y-.5:r/y|0,T=0,A=Ti,E=0;E<_;E++)x=E%y-g,v=S-(E/y|0),m[E]=M=c?Math.abs(c==="y"?v:x):O0(x*x+v*v),M>T&&(T=M),M<A&&(A=M);r==="random"&&t_(m),m.max=T-A,m.min=A,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=yn(e.amount||e.each)||0,n=n&&_<0?f_(n):n}return _=(m[h]-m.min)/m.max||0,Ne(m.b+(n?n(_):_)*m.v)+m.u}},Qf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Ne(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(wr(n)?0:yn(n))}},n_=function(t,e){var n=bn(t),r,s;return!n&&rr(t)&&(r=n=t.radius||Ti,t.values?(t=wi(t.values),(s=!wr(t[0]))&&(r*=r)):t=Qf(t.increment)),rs(e,n?ke(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:a,s||u===a||wr(a)?u:u+yn(a)}:Qf(t))},i_=function(t,e,n,r){return rs(bn(t)?!e:n===!0?!!(n=0):!r,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},Dy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},Ly=function(t,e){return function(n){return t(parseFloat(n))+(e||yn(n))}},Ny=function(t,e,n){return s_(t,e,0,1,n)},r_=function(t,e,n){return rs(n,function(r){return t[~~e(r)]})},Iy=function i(t,e,n){var r=e-t;return bn(t)?r_(t,i(0,t.length),e):rs(n,function(s){return(r+(s-t)%r)%r+t})},Fy=function i(t,e,n){var r=e-t,s=r*2;return bn(t)?r_(t,i(0,t.length-1),e):rs(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},qo=function(t){return t.replace(py,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(my);return i_(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},s_=function(t,e,n,r,s){var a=e-t,o=r-n;return rs(s,function(l){return n+((l-t)/a*o||0)})},Uy=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=un(t),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,s=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=e}else r||(t=Ia(bn(t)?[]:{},t));if(!u){for(l in e)np.call(o,t,l,"get",e[l]);s=function(p){return ap(p,o)||(a?t.p:t)}}}return rs(n,s)},Qp=function(t,e,n){var r=t.labels,s=Ti,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ci=function(t,e,n){var r=t.vars,s=r[e],a=Le,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Kr.length&&Oc(),o&&(Le=o),u=l?s.apply(c,l):s.call(c),Le=a,u},mo=function(t){return Jr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&ci(t,"onInterrupt"),t},_a,a_=[],o_=function(t){if(t)if(t=!t.name&&t.default||t,Kd()||t.headless){var e=t.name,n=ke(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Yo,render:ap,add:np,kill:Jy,modifier:jy,rawVars:0},a={targetTest:0,get:0,getSetter:sp,aliases:{},register:0};if(Oa(),t!==r){if(si[e])return;di(r,di(Bc(t,s),a)),Ia(r.prototype,Ia(s,Bc(t,a))),si[r.prop=e]=r,t.targetTest&&(mc.push(r),Jd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}G0(e,r),t.register&&t.register(Zn,r,Xn)}else a_.push(t)},we=255,go={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},Bu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},l_=function(t,e,n){var r=t?wr(t)?[t>>16,t>>8&we,t&we]:0:go.black,s,a,o,l,c,u,f,h,d,p;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),go[t])r=go[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&we,r&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(r=p=t.match(qp),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Bu(l+1/3,s,a),r[1]=Bu(l,s,a),r[2]=Bu(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(k0),n&&r.length<4&&(r[3]=1),r}else r=t.match(qp)||go.transparent;r=r.map(Number)}return e&&!p&&(s=r[0]/we,a=r[1]/we,o=r[2]/we,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},c_=function(t){var e=[],n=[],r=-1;return t.split(Zr).forEach(function(s){var a=s.match(ga)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},tm=function(t,e,n){var r="",s=(t+r).match(Zr),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=l_(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=c_(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Zr,"1").split(ga),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Zr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Zr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in go)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),Oy=/hsl[a]?\(/,u_=function(t){var e=t.join(" "),n;if(Zr.lastIndex=0,Zr.test(e))return n=Oy.test(e),t[1]=tm(t[1],n),t[0]=tm(t[0],n,c_(t[1])),!0},Ko,oi=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,p=function _(m){var g=i()-r,S=m===!0,x,v,M,E;if((g>t||g<0)&&(n+=g-e),r+=g,M=r-n,x=M-a,(x>0||S)&&(E=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,a+=x+(x>=s?4:s-x),v=1),S||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](M,h,E,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){V0&&(!Yf&&Kd()&&(Gi=Yf=window,Zd=Gi.document||{},hi.gsap=Zn,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(Zn.version),H0(Uc||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),a_.forEach(o_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Ko=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ko=0,c=Yo},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,g,S){var x=g?function(v,M,E,T){m(v,M,E,T),f.remove(x)}:m;return f.remove(m),o[S?"unshift":"push"](x),Oa(),x},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},f})(),Oa=function(){return!Ko&&oi.wake()},le={},By=/^[\d.\-M][\d.\-,\s]/,ky=/["']/g,zy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(ky,"").trim():+c,r=l.substr(o+1).trim();return e},Vy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},Hy=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[zy(e[1])]:Vy(t).split(",").map(Y0)):le._CE&&By.test(t)?le._CE("",t):n},f_=function(t){return function(e){return 1-t(1-e)}},h_=function i(t,e){for(var n=t._first,r;n;)n instanceof Ln?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Rs=function(t,e){return t&&(ke(t)?t:le[t]||Hy(t))||e},$s=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return Wn(t,function(o){le[o]=hi[o]=s,le[a=o.toLowerCase()]=n;for(var l in s)le[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[o+"."+l]=s[l]}),s},d_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ku=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/$f*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*dy((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:d_(o);return s=$f/s,l.config=function(c,u){return i(t,c,u)},l},zu=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:d_(n);return r.config=function(s){return i(t,s)},r};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;$s(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;$s("Elastic",ku("in"),ku("out"),ku());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};$s("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);$s("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});$s("Circ",function(i){return-(O0(1-i*i)-1)});$s("Sine",function(i){return i===1?1:-hy(i*uy)+1});$s("Back",zu("in"),zu("out"),zu());le.SteppedEase=le.steps=hi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-Ae;return function(o){return((r*dl(0,a,o)|0)+s)*n}}};Na.ease=le["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Qd+=i+","+i+"Params,"});var p_=function(t,e){this.id=fy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:X0,this.set=e?e.getSetter:sp},Zo=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ua(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),Ko||oi.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ua(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Oa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yu(this,n),!s._dp||s.parent||Z0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ae||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$0(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Fa(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ae?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?kc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ae?0:this._rts,this.totalTime(dl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),vu(this),Ey(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Oa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ae&&(this._tTime-=Ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ne(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kc(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vy);var r=dn;return dn=n,ep(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Jp(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(xi(this,n),Gn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Gn(r)),this._dur||(this._zTime=-Ae),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ae,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ae)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=ke(n)?n:q0,l=function(){var u=r.then;r.then=null,s&&s(),ke(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){mo(this)},i})();di(Zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ae,_prom:0,_ps:!1,_rts:1});var Ln=(function(i){U0(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gn(n.sortChildren),Ie&&Yi(n.parent||Ie,pr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&j0(pr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Io(0,arguments,this),this},e.from=function(r,s,a){return Io(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Io(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,No(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new je(r,s,xi(this,a),1),this},e.call=function(r,s,a){return Yi(this,je.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new je(r,a,xi(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,No(a).immediateRender=Gn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,No(o).immediateRender=Gn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ne(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,p,_,m,g,S,x,v,M,E,T;if(this!==Ie&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,v=this._start,x=this._ts,g=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=Ne(u%m),u===l?(_=this._repeat,h=c):(M=Ne(u/m),_=~~M,_&&_===M&&(h=c,_--),h>c&&(h=c)),M=Fa(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),E&&_&1&&(h=c-h,T=1),_!==M&&!this._lock){var A=E&&M&1,y=A===(E&&_&1);if(_<M&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Ne(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;h_(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Ay(this,Ne(o),Ne(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!M&&(ci(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!g){S=0,p&&(u+=this._zTime=-Ae);break}}d=p}else{d=this._last;for(var b=r<0?r:h;d;){if(p=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||dn&&ep(d)),h!==this._time||!this._ts&&!g){S=0,p&&(u+=this._zTime=b?-Ae:Ae);break}}d=p}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-Ae)._zTime=h>=o?1:-1,this._ts))return this._start=v,vu(this),this.render(r,s,a);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Jr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ci(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(wr(s)||(s=xi(this,s,r)),!(r instanceof Zo)){if(bn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(un(r))return this.addLabel(r,s);if(ke(r))r=je.delayedCall(0,r);else return this}return this!==r?Yi(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof je?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return un(r)?this.removeLabel(r):ke(r)?this.killTweensOf(r):(r.parent===this&&xu(this,r),r===this._recent&&(this._recent=this._last),Cs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(oi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=xi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=je.delayedCall(0,s||Yo,a);return o.data="isPause",this._hasPause=1,Yi(this,o,xi(this,r))},e.removePause=function(r){var s=this._first;for(r=xi(this,r);s;)s._start===r&&s.data==="isPause"&&Jr(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Gr!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=wi(r),l=this._first,c=wr(s),u;l;)l instanceof je?yy(l._targets,o)&&(c?(!Gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=xi(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=je.to(a,di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ae,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&Ua(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,di({startAt:{time:xi(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Qp(this,xi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Qp(this,xi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ae)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Ne(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Cs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cs(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Ti,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Yi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ne(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ua(a,a===Ie&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(Ie._ts&&($0(Ie,kc(r,Ie)),W0=oi.frame),oi.frame>=Kp){Kp+=fi.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&fi.autoSleep&&oi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||oi.sleep()}}},t})(Zo);di(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gy=function(t,e,n,r,s,a,o){var l=new Xn(this._pt,t,e,0,1,y_,null,s),c=0,u=0,f,h,d,p,_,m,g,S;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=qo(r)),a&&(S=[n,r],a(S,t,e),n=S[0],r=S[1]),h=n.match(Uu)||[];f=Uu.exec(r);)p=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Ma(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Uu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(z0.test(r)||g)&&(l.e=0),this._pt=l,l},np=function(t,e,n,r,s,a,o,l,c,u){ke(r)&&(r=r(s||0,t,a));var f=t[e],h=n!=="get"?n:ke(f)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=ke(f)?c?qy:x_:rp,p;if(un(r)&&(~r.indexOf("random(")&&(r=qo(r)),r.charAt(1)==="="&&(p=Ma(h,r)+(yn(h)||0),(p||p===0)&&(r=p))),!u||h!==r||th)return!isNaN(h*r)&&r!==""?(p=new Xn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Zy:v_,0,d),c&&(p.fp=c),o&&p.modifier(o,this,t),this._pt=p):(!f&&!(e in t)&&jd(e,r),Gy.call(this,t,e,h,r,d,l||fi.stringFilter,c))},Wy=function(t,e,n,r,s){if(ke(t)&&(t=Fo(t,s,e,n,r)),!rr(t)||t.style&&t.nodeType||bn(t)||B0(t))return un(t)?Fo(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=Fo(t[o],s,e,n,r);return a},m_=function(t,e,n,r,s,a){var o,l,c,u;if(si[t]&&(o=new si[t]).init(s,o.rawVars?e[t]:Wy(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Xn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==_a))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Gr,th,ip=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,S=g&&g.data==="nested"?g.vars.targets:m,x=t._overwrite==="auto"&&!Yd,v=t.timeline,M,E,T,A,y,b,R,D,I,O,F,z,U;if(v&&(!h||!s)&&(s="none"),t._ease=Rs(s,Na.ease),t._yEase=f?f_(Rs(f===!0?s:f,Na.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(D=m[0]?As(m[0]).harness:0,z=D&&r[D.prop],M=Bc(r,Jd),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&p?pc:xy),_._lazy=0),a){if(Jr(t._startAt=je.set(m,di({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Gn(l),startAt:null,delay:0,onUpdate:c&&function(){return ci(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!o&&!d)&&t._startAt.revert(pc),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!_){if(e&&(o=!1),T=di({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Gn(l),immediateRender:o,stagger:0,parent:g},M),z&&(T[D.prop]=z),Jr(t._startAt=je.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(pc):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,Ae,Ae);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Gn(l)||l&&!p,E=0;E<m.length;E++){if(y=m[E],R=y._gsap||tp(m)[E]._gsap,t._ptLookup[E]=O={},qf[R.id]&&Kr.length&&Oc(),F=S===m?E:S.indexOf(y),D&&(I=new D).init(y,z||M,t,F,S)!==!1&&(t._pt=A=new Xn(t._pt,y,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){O[H]=A}),I.priority&&(b=1)),!D||z)for(T in M)si[T]&&(I=m_(T,M,t,F,y,S))?I.priority&&(b=1):O[T]=A=np.call(t,y,T,"get",M[T],F,S,0,r.stringFilter);t._op&&t._op[E]&&t.kill(y,t._op[E]),x&&t._pt&&(Gr=t,Ie.killTweensOf(y,O,t.globalTime(e)),U=!t.parent,Gr=0),t._pt&&l&&(qf[R.id]=1)}b&&S_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!U,h&&e<=0&&v.render(Ti,!0,!0)},Xy=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return th=1,t.vars[e]="+=0",ip(t,o),th=0,l?$o(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ve(n)+yn(f.e)),f.b&&(f.b=u.s+yn(f.b))},$y=function(t,e){var n=t[0]?As(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=Ia({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Yy=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(bn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Fo=function(t,e,n,r,s){return ke(t)?t.call(e,n,r,s):un(t)&&~t.indexOf("random(")?qo(t):t},g_=Qd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",__={};Wn(g_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return __[i]=1});var je=(function(i){U0(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:No(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,S=r.parent||Ie,x=(bn(n)||B0(n)?wr(n[0]):"length"in r)?[n]:wi(n),v,M,E,T,A,y,b,R;if(o._targets=x.length?tp(x):$o("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||h||vl(c)||vl(u)){if(r=o.vars,v=o.timeline=new Ln({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),v.kill(),v.parent=v._dp=pr(o),v._start=0,h||vl(c)||vl(u)){if(T=x.length,b=h&&e_(h),rr(h))for(A in h)~g_.indexOf(A)&&(R||(R={}),R[A]=h[A]);for(M=0;M<T;M++)E=Bc(r,__),E.stagger=0,g&&(E.yoyoEase=g),R&&Ia(E,R),y=x[M],E.duration=+Fo(c,pr(o),M,y,x),E.delay=(+Fo(u,pr(o),M,y,x)||0)-o._delay,!h&&T===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),v.to(y,E,b?b(M,y,x):0),v._ease=le.none;v.duration()?c=u=0:o.timeline=0}else if(p){No(di(v.vars.defaults,{ease:"none"})),v._ease=Rs(p.ease||r.ease||"none");var D=0,I,O,F;if(bn(p))p.forEach(function(z){return v.to(x,z,">")}),v.duration();else{E={};for(A in p)A==="ease"||A==="easeEach"||Yy(A,p[A],E,p.easeEach);for(A in E)for(I=E[A].sort(function(z,U){return z.t-U.t}),D=0,M=0;M<I.length;M++)O=I[M],F={ease:O.e,duration:(O.t-(M?I[M-1].t:0))/100*c},F[A]=O.v,v.to(x,F,D),D+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Yd&&(Gr=pr(o),Ie.killTweensOf(x),Gr=0),Yi(S,pr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!p&&o._start===Ne(S._time)&&Gn(f)&&by(pr(o))&&S.data!=="nested")&&(o._tTime=-Ae,o.render(Math.max(0,-u)||0)),m&&j0(pr(o),m),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ae&&!u?l:r<Ae?0:r,h,d,p,_,m,g,S,x,v;if(!c)wy(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Ne(f%_),f===l?(p=this._repeat,h=c):(m=Ne(f/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(v=this._yEase,h=c-h),m=Fa(this._tTime,_),h===o&&!a&&this._initted&&p===m)return this._tTime=f,this;p!==m&&(x&&this._yEase&&h_(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ne(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(J0(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(h/c),this._from&&(this.ratio=S=1-S),!o&&f&&!s&&!m&&(ci(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Kf(this,r,s,a),ci(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Kf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Jr(this,1),!s&&!(u&&!o)&&(f||o||g)&&(ci(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){Ko||oi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ip(this,c),u=this._ease(c/this._dur),Xy(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(yu(this,0),this.parent||K0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?mo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Gr&&Gr.vars.overwrite!==!0)._first||mo(this),this.parent&&a!==this.timeline.totalDuration()&&Ua(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?wi(r):o,c=this._ptLookup,u=this._pt,f,h,d,p,_,m,g;if((!s||s==="all")&&My(o,l))return s==="all"&&(this._pt=0),mo(this);for(f=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},Wn(s,function(S){return _[S]=1}),s=_),s=$y(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(f[g]=s,p=h,d={}):(d=f[g]=f[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&xu(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&mo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Io(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Io(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return Ie.killTweensOf(r,s,a)},t})(Zo);di(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(i){je[i]=function(){var t=new Ln,e=jf.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var rp=function(t,e,n){return t[e]=n},x_=function(t,e,n){return t[e](n)},qy=function(t,e,n,r){return t[e](r.fp,n)},Ky=function(t,e,n){return t.setAttribute(e,n)},sp=function(t,e){return ke(t[e])?x_:qd(t[e])&&t.setAttribute?Ky:rp},v_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Zy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},y_=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},ap=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},jy=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},Jy=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?xu(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Qy=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},S_=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},Xn=(function(){function i(e,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||v_,this.d=l||this,this.set=c||rp,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Qy,this.m=n,this.mt=s,this.tween=r},i})();Wn(Qd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Jd[i]=1});hi.TweenMax=hi.TweenLite=je;hi.TimelineLite=hi.TimelineMax=Ln;Ie=new Ln({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=u_;var Ps=[],gc={},tS=[],em=0,eS=0,Vu=function(t){return(gc[t]||tS).map(function(e){return e()})},eh=function(){var t=Date.now(),e=[];t-em>2&&(Vu("matchMediaInit"),Ps.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Gi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Vu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),em=t,Vu("matchMedia"))},M_=(function(){function i(e,n){this.selector=n&&Jf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=eS++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ke(n)&&(s=r,r=n,n=ke);var a=this,o=function(){var c=Le,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Jf(s)),Le=a,f=r.apply(a,arguments),ke(f)&&a._r.push(f),Le=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===ke?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=Le;Le=null,n(this),Le=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof je&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ps.length;a--;)Ps[a].id===this.id&&Ps.splice(a,1)},t.revert=function(n){this.kill(n||{})},i})(),nS=(function(){function i(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){rr(n)||(n={matches:n});var a=new M_(0,s||this.scope),o=a.conditions={},l,c,u;Le&&!a.selector&&(a.selector=Le.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Gi.matchMedia(n[c]),l&&(Ps.indexOf(a)<0&&Ps.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(eh):l.addEventListener("change",eh)));return u&&r(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),zc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return o_(r)})},timeline:function(t){return new Ln(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,r){un(t)&&(t=wi(t)[0]);var s=As(t||{}).get,a=n?q0:Y0;return n==="native"&&(n=""),t&&(e?a((si[e]&&si[e].get||s)(t,e,n,r)):function(o,l,c){return a((si[o]&&si[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=wi(t),t.length>1){var r=t.map(function(u){return Zn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var a=si[e],o=As(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;_a._pt=0,f.init(t,n?u+n:u,_a,0,[t]),f.render(1,f),_a._pt&&ap(1,_a)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var r,s=Zn.to(t,di((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Rs(t.ease,Na.ease)),Zp(Na,t||{})},config:function(t){return Zp(fi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!si[o]&&!hi[o]&&$o(e+" effect requires "+o+" plugin.")}),Ou[e]=function(o,l,c){return n(wi(o),di(l||{},s),c)},a&&(Ln.prototype[e]=function(o,l,c){return this.add(Ou[e](o,rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=Rs(e)},parseEase:function(t,e){return arguments.length?Rs(t,e):le},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ln(t),r,s;for(n.smoothChildTiming=Gn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,r=Ie._first;r;)s=r._next,(e||!(!r._dur&&r instanceof je&&r.vars.onComplete===r._targets[0]))&&Yi(n,r,r._start-r._delay),r=s;return Yi(Ie,n,0),n},context:function(t,e){return t?new M_(t,e):Le},matchMedia:function(t){return new nS(t)},matchMediaRefresh:function(){return Ps.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||eh()},addEventListener:function(t,e){var n=gc[t]||(gc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=gc[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:Iy,wrapYoyo:Fy,distribute:e_,random:i_,snap:n_,normalize:Ny,getUnit:yn,clamp:Ry,splitColor:l_,toArray:wi,selector:Jf,mapRange:s_,pipe:Dy,unitize:Ly,interpolate:Uy,shuffle:t_},install:H0,effects:Ou,ticker:oi,updateRoot:Ln.updateRoot,plugins:si,globalTimeline:Ie,core:{PropTween:Xn,globals:G0,Tween:je,Timeline:Ln,Animation:Zo,getCache:As,_removeLinkedListItem:xu,reverting:function(){return dn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Yd=t}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return zc[i]=je[i]});oi.add(Ln.updateRoot);_a=zc.to({},{duration:0});var iS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},rS=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=iS(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},Hu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},Wn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}rS(o,s)}}}},Zn=zc.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Hu("roundProps",Qf),Hu("modifiers"),Hu("snap",n_))||zc;je.version=Ln.version=Zn.version="3.14.2";V0=1;Kd()&&Oa();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;var nm,Wr,Ea,op,Ms,im,lp,sS=function(){return typeof window<"u"},Ar={},ms=180/Math.PI,ba=Math.PI/180,Zs=Math.atan2,rm=1e8,cp=/([A-Z])/g,aS=/(left|right|width|margin|padding|x)/i,oS=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},lS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},uS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},E_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},b_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},hS=function(t,e,n){return t.style[e]=n},dS=function(t,e,n){return t.style.setProperty(e,n)},pS=function(t,e,n){return t._gsap[e]=n},mS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},gS=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_S=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Fe="transform",$n=Fe+"Origin",xS=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in Ar&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=mr(r,o)}):this.tfm[t]=a.x?a[t]:mr(r,t),t===$n&&(this.tfm.zOrigin=a.zOrigin);else return Zi.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(Fe)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=Fe}(s||e)&&this.props.push(t,e,s[t])},T_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},vS=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(cp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=lp(),(!s||!s.isStart)&&!n[Fe]&&(T_(n),r.zOrigin&&n[$n]&&(n[$n]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},w_=function(t,e){var n={target:t,props:[],revert:vS,save:xS};return t._gsap||Zn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},A_,ih=function(t,e){var n=Wr.createElementNS?Wr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Wr.createElement(t);return n&&n.style?n:Wr.createElement(t)},ui=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(cp,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Ba(e)||e,1)||""},sm="O,Moz,ms,Ms,Webkit".split(","),Ba=function(t,e,n){var r=e||Ms,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(sm[a]+t in s););return a<0?null:(a===3?"ms":a>=0?sm[a]:"")+t},rh=function(){sS()&&window.document&&(nm=window,Wr=nm.document,Ea=Wr.documentElement,Ms=ih("div")||{style:{}},ih("div"),Fe=Ba(Fe),$n=Fe+"Origin",Ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",A_=!!Ba("perspective"),lp=Zn.core.reverting,op=1)},am=function(t){var e=t.ownerSVGElement,n=ih("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Ea.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Ea.removeChild(n),s},om=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},C_=function(t){var e,n;try{e=t.getBBox()}catch{e=am(t),n=1}return e&&(e.width||e.height)||n||(e=am(t)),e&&!e.width&&!e.x&&!e.y?{x:+om(t,["x","cx","x1"])||0,y:+om(t,["y","cy","y1"])||0,width:0,height:0}:e},R_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&C_(t))},Qr=function(t,e){if(e){var n=t.style,r;e in Ar&&e!==$n&&(e=Fe),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(cp,"-$1").toLowerCase())):n.removeAttribute(e)}},Xr=function(t,e,n,r,s,a){var o=new Xn(t._pt,e,n,0,1,a?b_:E_);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},lm={deg:1,rad:1,turn:1},yS={grid:1,flex:1},ts=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ms.style,l=aS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",p,_,m,g;if(r===a||!s||lm[r]||lm[a])return s;if(a!=="px"&&!h&&(s=i(t,e,n,"px")),g=t.getCTM&&R_(t),(d||a==="%")&&(Ar[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[u],Ve(d?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Wr||!_.appendChild)&&(_=Wr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===oi.time&&!m.uncache)return Ve(s/m.width*f);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+r,p=t[u],S?t.style[e]=S:Qr(t,e)}else(d||a==="%")&&!yS[ui(_,"display")]&&(o.position=ui(t,"position")),_===t&&(o.position="static"),_.appendChild(Ms),p=Ms[u],_.removeChild(Ms),o.position="absolute";return l&&d&&(m=As(_),m.time=oi.time,m.width=_[u]),Ve(h?p*s/f:p&&s?f/p*s:0)},mr=function(t,e,n,r){var s;return op||rh(),e in Zi&&e!=="transform"&&(e=Zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ar[e]&&e!=="transform"?(s=Jo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Hc(ui(t,$n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Vc[e]&&Vc[e](t,e,n)||ui(t,e)||X0(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ts(t,e,s,n)+n:s},SS=function(t,e,n,r){if(!n||n==="none"){var s=Ba(e,t,1),a=s&&ui(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=ui(t,"borderTopColor"))}var o=new Xn(this._pt,t.style,e,0,1,y_),l=0,c=0,u,f,h,d,p,_,m,g,S,x,v,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ui(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=ui(t,e)||r,_?t.style[e]=_:Qr(t,e)),u=[n,r],u_(u),n=u[0],r=u[1],h=n.match(ga)||[],M=r.match(ga)||[],M.length){for(;f=ga.exec(r);)m=f[0],S=r.substring(l,f.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ma(d,m)+v),g=parseFloat(m),x=m.substr((g+"").length),l=ga.lastIndex-x.length,x||(x=x||fi.units[e]||v,l===r.length&&(r+=x,o.e+=x)),v!==x&&(d=ts(t,e,_,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:g-d,m:p&&p<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?b_:E_;return z0.test(r)&&(o.e=0),this._pt=o,o},cm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},MS=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=cm[n]||n,e[1]=cm[r]||r,e.join(" ")},ES=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ar[o]&&(l=1,o=o==="transformOrigin"?$n:Fe),Qr(n,o);l&&(Qr(n,Fe),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Jo(n,1),a.uncache=1,T_(r)))}},Vc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new Xn(t._pt,e,n,0,0,ES);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},jo=[1,0,0,1,0,0],P_={},D_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},um=function(t){var e=ui(t,Fe);return D_(e)?jo:e.substr(7).match(k0).map(Ve)},up=function(t,e){var n=t._gsap||As(t),r=t.style,s=um(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jo:s):(s===jo&&!t.offsetParent&&t!==Ea&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ea.appendChild(t)),s=um(t),l?r.display=l:Qr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ea.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sh=function(t,e,n,r,s,a){var o=t._gsap,l=s||up(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],S=l[5],x=e.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,E,T,A,y;n?l!==jo&&(T=d*m-p*_)&&(A=v*(m/T)+M*(-_/T)+(_*S-m*g)/T,y=v*(-p/T)+M*(d/T)-(d*S-p*g)/T,v=A,M=y):(E=C_(t),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),M=E.y+(~(x[1]||x[0]).indexOf("%")?M/100*E.height:M)),r||r!==!1&&o.smooth?(g=v-c,S=M-u,o.xOffset=f+(g*d+S*_)-g,o.yOffset=h+(g*p+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[$n]="0px 0px",a&&(Xr(a,o,"xOrigin",c,v),Xr(a,o,"yOrigin",u,M),Xr(a,o,"xOffset",f,o.xOffset),Xr(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},Jo=function(t,e){var n=t._gsap||new p_(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=ui(t,$n)||"0",u,f,h,d,p,_,m,g,S,x,v,M,E,T,A,y,b,R,D,I,O,F,z,U,H,Z,L,j,Mt,bt,Lt,At;return u=f=h=_=m=g=S=x=v=0,d=p=1,n.svg=!!(t.getCTM&&R_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),r.scale=r.rotate=r.translate="none"),T=up(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),sh(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,E=n.yOrigin||0,T!==jo&&(R=T[0],D=T[1],I=T[2],O=T[3],u=F=T[4],f=z=T[5],T.length===6?(d=Math.sqrt(R*R+D*D),p=Math.sqrt(O*O+I*I),_=R||D?Zs(D,R)*ms:0,S=I||O?Zs(I,O)*ms+_:0,S&&(p*=Math.abs(Math.cos(S*ba))),n.svg&&(u-=M-(M*R+E*I),f-=E-(M*D+E*O))):(At=T[6],bt=T[7],L=T[8],j=T[9],Mt=T[10],Lt=T[11],u=T[12],f=T[13],h=T[14],A=Zs(At,Mt),m=A*ms,A&&(y=Math.cos(-A),b=Math.sin(-A),U=F*y+L*b,H=z*y+j*b,Z=At*y+Mt*b,L=F*-b+L*y,j=z*-b+j*y,Mt=At*-b+Mt*y,Lt=bt*-b+Lt*y,F=U,z=H,At=Z),A=Zs(-I,Mt),g=A*ms,A&&(y=Math.cos(-A),b=Math.sin(-A),U=R*y-L*b,H=D*y-j*b,Z=I*y-Mt*b,Lt=O*b+Lt*y,R=U,D=H,I=Z),A=Zs(D,R),_=A*ms,A&&(y=Math.cos(A),b=Math.sin(A),U=R*y+D*b,H=F*y+z*b,D=D*y-R*b,z=z*y-F*b,R=U,F=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Ve(Math.sqrt(R*R+D*D+I*I)),p=Ve(Math.sqrt(z*z+At*At)),A=Zs(F,z),S=Math.abs(A)>2e-4?A*ms:0,v=Lt?1/(Lt<0?-Lt:Lt):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!D_(ui(t,Fe)),U&&t.setAttribute("transform",U))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ve(d),n.scaleY=Ve(p),n.rotation=Ve(_)+o,n.rotationX=Ve(m)+o,n.rotationY=Ve(g)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[$n]=Hc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?TS:A_?L_:bS,n.uncache=0,n},Hc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Gu=function(t,e,n){var r=yn(e);return Ve(parseFloat(e)+parseFloat(ts(t,"x",n+"px",r)))+r},bS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,L_(t,e)},as="0deg",no="0px",os=") ",L_=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,S=n.target,x=n.zOrigin,v="",M=g==="auto"&&t&&t!==1||g===!0;if(x&&(f!==as||u!==as)){var E=parseFloat(u)*ba,T=Math.sin(E),A=Math.cos(E),y;E=parseFloat(f)*ba,y=Math.cos(E),a=Gu(S,a,T*y*-x),o=Gu(S,o,-Math.sin(E)*-x),l=Gu(S,l,A*y*-x+x)}m!==no&&(v+="perspective("+m+os),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(M||a!==no||o!==no||l!==no)&&(v+=l!==no||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+os),c!==as&&(v+="rotate("+c+os),u!==as&&(v+="rotateY("+u+os),f!==as&&(v+="rotateX("+f+os),(h!==as||d!==as)&&(v+="skew("+h+", "+d+os),(p!==1||_!==1)&&(v+="scale("+p+", "+_+os),S.style[Fe]=v||"translate(0, 0)"},TS=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,S=n.forceCSS,x=parseFloat(a),v=parseFloat(o),M,E,T,A,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ba,c*=ba,M=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-h,A=Math.cos(l-c)*h,c&&(u*=ba,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,A*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),M*=y,E*=y)),M=Ve(M),E=Ve(E),T=Ve(T),A=Ve(A)):(M=f,A=h,E=T=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=ts(d,"x",a,"px"),v=ts(d,"y",o,"px")),(p||_||m||g)&&(x=Ve(x+p-(p*M+_*T)+m),v=Ve(v+_-(p*E+_*A)+g)),(r||s)&&(y=d.getBBox(),x=Ve(x+r/100*y.width),v=Ve(v+s/100*y.height)),y="matrix("+M+","+E+","+T+","+A+","+x+","+v+")",d.setAttribute("transform",y),S&&(d.style[Fe]=y)},wS=function(t,e,n,r,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ms:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*rm)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*rm)%a-~~(c/a)*a)),t._pt=h=new Xn(t._pt,e,n,r,c,lS),h.e=u,h.u="deg",t._props.push(n),h},fm=function(t,e){for(var n in e)t[n]=e[n];return t},AS=function(t,e,n){var r=fm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,p;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Fe]=e,o=Jo(n,1),Qr(n,Fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fe],a[Fe]=e,o=Jo(n,1),a[Fe]=c);for(l in Ar)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=yn(c),p=yn(u),f=d!==p?ts(n,l,c,p):parseFloat(c),h=parseFloat(u),t._pt=new Xn(t._pt,o,l,f,h-f,nh),t._pt.u=p||0,t._props.push(l));fm(o,r)};Wn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});Vc[t>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(p){return mr(o,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var N_={name:"css",register:rh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,p,_,m,g,S,x,v,M,E,T,A,y;op||rh(),this.styles=this.styles||w_(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(si[_]&&m_(_,e,n,r,t,s)))){if(d=typeof u,p=Vc[_],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=qo(u)),p)p(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Zr.lastIndex=0,Zr.test(c)||(m=yn(c),g=yn(u),g?m!==g&&(c=ts(t,_,c,g)+g):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),A.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],un(c)&&~c.indexOf("random(")&&(c=qo(c)),yn(c+"")||c==="auto"||(c+=fi.units[_]||yn(mr(t,_))||""),(c+"").charAt(1)==="="&&(c=mr(t,_))):c=mr(t,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in Zi&&(_==="autoAlpha"&&(h===1&&mr(t,"visibility")==="hidden"&&f&&(h=0),A.push("visibility",0,o.visibility),Xr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ar,x){if(this.styles.save(_),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ui(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=ui(t,"perspective"),b?t.style.perspective=b:Qr(t,"perspective")}f=parseFloat(u)}if(v||(M=t._gsap,M.renderTransform&&!e.parseTransform||Jo(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new Xn(this._pt,o,Fe,0,1,M.renderTransform,M,0,-1),v.dep=1),_==="scale")this._pt=new Xn(this._pt,M,"scaleY",M.scaleY,(S?Ma(M.scaleY,S+f):f)-M.scaleY||0,nh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push($n,0,o[$n]),u=MS(u),M.svg?sh(t,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&Xr(this,M,"zOrigin",M.zOrigin,g),Xr(this,o,_,Hc(c),Hc(u)));continue}else if(_==="svgOrigin"){sh(t,u,1,E,0,this);continue}else if(_ in P_){wS(this,M,_,h,S?Ma(h,S+u):u);continue}else if(_==="smoothOrigin"){Xr(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){AS(this,u,t);continue}}else _ in o||(_=Ba(_)||_);if(x||(f||f===0)&&(h||h===0)&&!oS.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),g=yn(u)||(_ in fi.units?fi.units[_]:m),m!==g&&(h=ts(t,_,c,g)),this._pt=new Xn(this._pt,x?M:o,_,h,(S?Ma(h,S+f):f)-h,!x&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?fS:nh),this._pt.u=g||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=uS):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=cS);else if(_ in o)SS.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,r,s);else if(_!=="parseTransform"){jd(_,u);continue}x||(_ in o?A.push(_,0,o[_]):typeof t[_]=="function"?A.push(_,2,t[_]()):A.push(_,1,c||t[_])),a.push(_)}}T&&S_(this)},render:function(t,e){if(e.tween._time||!lp())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:mr,aliases:Zi,getSetter:function(t,e,n){var r=Zi[e];return r&&r.indexOf(",")<0&&(e=r),e in Ar&&e!==$n&&(t._gsap.x||mr(t,"x"))?n&&im===n?e==="scale"?mS:pS:(im=n||{})&&(e==="scale"?gS:_S):t.style&&!qd(t.style[e])?hS:~e.indexOf("-")?dS:sp(t,e)},core:{_removeProperty:Qr,_getMatrix:up}};Zn.utils.checkPrefix=Ba;Zn.core.getStyleSaver=w_;(function(i,t,e,n){var r=Wn(i+","+t+","+e,function(s){Ar[s]=1});Wn(t,function(s){fi.units[s]="deg",P_[s]=1}),Zi[r[13]]=i+","+t,Wn(n,function(s){var a=s.split(":");Zi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){fi.units[i]="px"});Zn.registerPlugin(N_);var Gc=Zn.registerPlugin(N_)||Zn;Gc.core.Tween;function CS(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function RS(i,t,e){return t&&CS(i.prototype,t),i}var fn,_c,li,$r,Yr,Ta,I_,gs,Uo,F_,yr,Ni,U_,O_=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},B_=1,xa=[],se=[],tr=[],Oo=Date.now,ah=function(t,e){return e},PS=function(){var t=Uo.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,se),r.push.apply(r,tr),se=n,tr=r,ah=function(a,o){return e[a](o)}},jr=function(t,e){return~tr.indexOf(t)&&tr[tr.indexOf(t)+1][e]},Bo=function(t){return!!~F_.indexOf(t)},An=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},wn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},yl="scrollLeft",Sl="scrollTop",oh=function(){return yr&&yr.isPressed||se.cache++},Wc=function(t,e){var n=function r(s){if(s||s===0){B_&&(li.history.scrollRestoration="manual");var a=yr&&yr.isPressed;s=r.v=Math.round(s)||(yr&&yr.iOS?1:0),t(s),r.cacheID=se.cache,a&&ah("ss",s)}else(e||se.cache!==r.cacheID||ah("ref"))&&(r.cacheID=se.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Nn={s:yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wc(function(i){return arguments.length?li.scrollTo(i,en.sc()):li.pageXOffset||$r[yl]||Yr[yl]||Ta[yl]||0})},en={s:Sl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:Wc(function(i){return arguments.length?li.scrollTo(Nn.sc(),i):li.pageYOffset||$r[Sl]||Yr[Sl]||Ta[Sl]||0})},Vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||fn.utils.toArray)(t)[0]||(typeof t=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},DS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},es=function(t,e){var n=e.s,r=e.sc;Bo(t)&&(t=$r.scrollingElement||Yr);var s=se.indexOf(t),a=r===en.sc?1:2;!~s&&(s=se.push(t)-1),se[s+a]||An(t,"scroll",oh);var o=se[s+a],l=o||(se[s+a]=Wc(jr(t,n),!0)||(Bo(t)?r:Wc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=fn.getProperty(t,"scrollBehavior")==="smooth"),l},lh=function(t,e,n){var r=t,s=t,a=Oo(),o=a,l=e||50,c=Math.max(500,l*3),u=function(p,_){var m=Oo();_||m-a>l?(s=r,r=p,o=a,a=m):n?r+=p:r=s+(p-s)/(m-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},h=function(p){var _=o,m=s,g=Oo();return(p||p===0)&&p!==r&&u(p),a===o||g-o>c?0:(r+(n?m:-m))/((n?g:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},io=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},hm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},k_=function(){Uo=fn.core.globals().ScrollTrigger,Uo&&Uo.core&&PS()},z_=function(t){return fn=t||O_(),!_c&&fn&&typeof document<"u"&&document.body&&(li=window,$r=document,Yr=$r.documentElement,Ta=$r.body,F_=[li,$r,Yr,Ta],fn.utils.clamp,U_=fn.core.context||function(){},gs="onpointerenter"in Ta?"pointer":"mouse",I_=Xe.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=Xe.eventTypes=("ontouchstart"in Yr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return B_=0},500),k_(),_c=1),_c};Nn.op=en;se.cache=0;var Xe=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){_c||z_(fn)||console.warn("Please gsap.registerPlugin(Observer)"),Uo||k_();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,S=n.onDrag,x=n.onPress,v=n.onRelease,M=n.onRight,E=n.onLeft,T=n.onUp,A=n.onDown,y=n.onChangeX,b=n.onChangeY,R=n.onChange,D=n.onToggleX,I=n.onToggleY,O=n.onHover,F=n.onHoverEnd,z=n.onMove,U=n.ignoreCheck,H=n.isNormalizer,Z=n.onGestureStart,L=n.onGestureEnd,j=n.onWheel,Mt=n.onEnable,bt=n.onDisable,Lt=n.onClick,At=n.scrollSpeed,q=n.capture,tt=n.allowClicks,ut=n.lockAxis,Ct=n.onLockAxis;this.target=o=Vn(o)||Yr,this.vars=n,d&&(d=fn.utils.toArray(d)),r=r||1e-9,s=s||0,p=p||1,At=At||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Ta).lineHeight)||22);var pt,Ft,ae,xt,zt,Yt,Bt,W=this,N=0,Nt=0,Ut=n.passive||!u&&n.passive!==!1,Vt=es(o,Nn),st=es(o,en),P=Vt(),w=st(),k=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ni[0]==="pointerdown",J=Bo(o),Q=o.ownerDocument||$r,K=[0,0,0],Et=[0,0,0],at=0,Rt=function(){return at=Oo()},wt=function(It,jt){return(W.event=It)&&d&&DS(It.target,d)||jt&&k&&It.pointerType!=="touch"||U&&U(It,jt)},rt=function(){W._vx.reset(),W._vy.reset(),Ft.pause(),f&&f(W)},ot=function(){var It=W.deltaX=hm(K),jt=W.deltaY=hm(Et),gt=Math.abs(It)>=r,qt=Math.abs(jt)>=r;R&&(gt||qt)&&R(W,It,jt,K,Et),gt&&(M&&W.deltaX>0&&M(W),E&&W.deltaX<0&&E(W),y&&y(W),D&&W.deltaX<0!=N<0&&D(W),N=W.deltaX,K[0]=K[1]=K[2]=0),qt&&(A&&W.deltaY>0&&A(W),T&&W.deltaY<0&&T(W),b&&b(W),I&&W.deltaY<0!=Nt<0&&I(W),Nt=W.deltaY,Et[0]=Et[1]=Et[2]=0),(xt||ae)&&(z&&z(W),ae&&(m&&ae===1&&m(W),S&&S(W),ae=0),xt=!1),Yt&&!(Yt=!1)&&Ct&&Ct(W),zt&&(j(W),zt=!1),pt=0},Tt=function(It,jt,gt){K[gt]+=It,Et[gt]+=jt,W._vx.update(It),W._vy.update(jt),c?pt||(pt=requestAnimationFrame(ot)):ot()},Pt=function(It,jt){ut&&!Bt&&(W.axis=Bt=Math.abs(It)>Math.abs(jt)?"x":"y",Yt=!0),Bt!=="y"&&(K[2]+=It,W._vx.update(It,!0)),Bt!=="x"&&(Et[2]+=jt,W._vy.update(jt,!0)),c?pt||(pt=requestAnimationFrame(ot)):ot()},lt=function(It){if(!wt(It,1)){It=io(It,u);var jt=It.clientX,gt=It.clientY,qt=jt-W.x,kt=gt-W.y,Kt=W.isDragging;W.x=jt,W.y=gt,(Kt||(qt||kt)&&(Math.abs(W.startX-jt)>=s||Math.abs(W.startY-gt)>=s))&&(ae||(ae=Kt?2:1),Kt||(W.isDragging=!0),Pt(qt,kt))}},$t=W.onPress=function(vt){wt(vt,1)||vt&&vt.button||(W.axis=Bt=null,Ft.pause(),W.isPressed=!0,vt=io(vt),N=Nt=0,W.startX=W.x=vt.clientX,W.startY=W.y=vt.clientY,W._vx.reset(),W._vy.reset(),An(H?o:Q,Ni[1],lt,Ut,!0),W.deltaX=W.deltaY=0,x&&x(W))},B=W.onRelease=function(vt){if(!wt(vt,1)){wn(H?o:Q,Ni[1],lt,!0);var It=!isNaN(W.y-W.startY),jt=W.isDragging,gt=jt&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),qt=io(vt);!gt&&It&&(W._vx.reset(),W._vy.reset(),u&&tt&&fn.delayedCall(.08,function(){if(Oo()-at>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(Q.createEvent){var kt=Q.createEvent("MouseEvents");kt.initMouseEvent("click",!0,!0,li,1,qt.screenX,qt.screenY,qt.clientX,qt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(kt)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&jt&&!H&&Ft.restart(!0),ae&&ot(),g&&jt&&g(W),v&&v(W,gt)}},ht=function(It){return It.touches&&It.touches.length>1&&(W.isGesturing=!0)&&Z(It,W.isDragging)},it=function(){return(W.isGesturing=!1)||L(W)},dt=function(It){if(!wt(It)){var jt=Vt(),gt=st();Tt((jt-P)*At,(gt-w)*At,1),P=jt,w=gt,f&&Ft.restart(!0)}},nt=function(It){if(!wt(It)){It=io(It,u),j&&(zt=!0);var jt=(It.deltaMode===1?l:It.deltaMode===2?li.innerHeight:1)*p;Tt(It.deltaX*jt,It.deltaY*jt,0),f&&!H&&Ft.restart(!0)}},et=function(It){if(!wt(It)){var jt=It.clientX,gt=It.clientY,qt=jt-W.x,kt=gt-W.y;W.x=jt,W.y=gt,xt=!0,f&&Ft.restart(!0),(qt||kt)&&Pt(qt,kt)}},ft=function(It){W.event=It,O(W)},Ht=function(It){W.event=It,F(W)},he=function(It){return wt(It)||io(It,u)&&Lt(W)};Ft=W._dc=fn.delayedCall(h||.25,rt).pause(),W.deltaX=W.deltaY=0,W._vx=lh(0,50,!0),W._vy=lh(0,50,!0),W.scrollX=Vt,W.scrollY=st,W.isDragging=W.isGesturing=W.isPressed=!1,U_(this),W.enable=function(vt){return W.isEnabled||(An(J?Q:o,"scroll",oh),a.indexOf("scroll")>=0&&An(J?Q:o,"scroll",dt,Ut,q),a.indexOf("wheel")>=0&&An(o,"wheel",nt,Ut,q),(a.indexOf("touch")>=0&&I_||a.indexOf("pointer")>=0)&&(An(o,Ni[0],$t,Ut,q),An(Q,Ni[2],B),An(Q,Ni[3],B),tt&&An(o,"click",Rt,!0,!0),Lt&&An(o,"click",he),Z&&An(Q,"gesturestart",ht),L&&An(Q,"gestureend",it),O&&An(o,gs+"enter",ft),F&&An(o,gs+"leave",Ht),z&&An(o,gs+"move",et)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=xt=ae=!1,W._vx.reset(),W._vy.reset(),P=Vt(),w=st(),vt&&vt.type&&$t(vt),Mt&&Mt(W)),W},W.disable=function(){W.isEnabled&&(xa.filter(function(vt){return vt!==W&&Bo(vt.target)}).length||wn(J?Q:o,"scroll",oh),W.isPressed&&(W._vx.reset(),W._vy.reset(),wn(H?o:Q,Ni[1],lt,!0)),wn(J?Q:o,"scroll",dt,q),wn(o,"wheel",nt,q),wn(o,Ni[0],$t,q),wn(Q,Ni[2],B),wn(Q,Ni[3],B),wn(o,"click",Rt,!0),wn(o,"click",he),wn(Q,"gesturestart",ht),wn(Q,"gestureend",it),wn(o,gs+"enter",ft),wn(o,gs+"leave",Ht),wn(o,gs+"move",et),W.isEnabled=W.isPressed=W.isDragging=!1,bt&&bt(W))},W.kill=W.revert=function(){W.disable();var vt=xa.indexOf(W);vt>=0&&xa.splice(vt,1),yr===W&&(yr=0)},xa.push(W),H&&Bo(o)&&(yr=W),W.enable(_)},RS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Xe.version="3.14.2";Xe.create=function(i){return new Xe(i)};Xe.register=z_;Xe.getAll=function(){return xa.slice()};Xe.getById=function(i){return xa.filter(function(t){return t.vars.id===i})[0]};O_()&&fn.registerPlugin(Xe);var Dt,da,re,Re,ai,ge,fp,Xc,Qo,ko,_o,Ml,xn,Su,ch,Pn,dm,pm,pa,V_,Wu,H_,Rn,uh,G_,W_,zr,fh,hp,wa,dp,zo,hh,Xu,El=1,vn=Date.now,$u=vn(),Ci=0,xo=0,mm=function(t,e,n){var r=ri(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},gm=function(t,e){return e&&(!ri(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},LS=function i(){return xo&&requestAnimationFrame(i)},_m=function(){return Su=1},xm=function(){return Su=0},Wi=function(t){return t},vo=function(t){return Math.round(t*1e5)/1e5||0},X_=function(){return typeof window<"u"},$_=function(){return Dt||X_()&&(Dt=window.gsap)&&Dt.registerPlugin&&Dt},Os=function(t){return!!~fp.indexOf(t)},Y_=function(t){return(t==="Height"?dp:re["inner"+t])||ai["client"+t]||ge["client"+t]},q_=function(t){return jr(t,"getBoundingClientRect")||(Os(t)?function(){return Mc.width=re.innerWidth,Mc.height=dp,Mc}:function(){return gr(t)})},NS=function(t,e,n){var r=n.d,s=n.d2,a=n.a;return(a=jr(t,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(e?Y_(s):t["client"+s])||0}},IS=function(t,e){return!e||~tr.indexOf(t)?q_(t):function(){return Mc}},ji=function(t,e){var n=e.s,r=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+r)&&(a=jr(t,n))?a()-q_(t)()[s]:Os(t)?(ai[n]||ge[n])-Y_(r):t[n]-t["offset"+r])},bl=function(t,e){for(var n=0;n<pa.length;n+=3)(!e||~e.indexOf(pa[n+1]))&&t(pa[n],pa[n+1],pa[n+2])},ri=function(t){return typeof t=="string"},Sn=function(t){return typeof t=="function"},yo=function(t){return typeof t=="number"},_s=function(t){return typeof t=="object"},ro=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Yu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},js=Math.abs,K_="left",Z_="top",pp="right",mp="bottom",Ds="width",Ls="height",Vo="Right",Ho="Left",Go="Top",Wo="Bottom",Ke="padding",yi="margin",ka="Width",gp="Height",tn="px",Si=function(t){return re.getComputedStyle(t)},FS=function(t){var e=Si(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},vm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},gr=function(t,e){var n=e&&Si(t)[ch]!=="matrix(1, 0, 0, 1, 0, 0)"&&Dt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},$c=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},j_=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},US=function(t){return function(e){return Dt.utils.snap(j_(t),e)}},_p=function(t){var e=Dt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return e(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=e(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:e(s<0?r-t:r+t)}},OS=function(t){return function(e,n){return _p(j_(t))(e,n.direction)}},Tl=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},cn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},ln=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},wl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ym={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Al={toggleActions:"play",anticipatePin:0},Yc={top:0,left:0,center:.5,bottom:1,right:1},xc=function(t,e){if(ri(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in Yc?Yc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Cl=function(t,e,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Re.createElement("div"),_=Os(n)||jr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?ge:n,S=t.indexOf("start")!==-1,x=S?c:u,v="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===en?pp:mp)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+r.op.d2],vc(p,0,r,S),p},vc=function(t,e,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+ka]=1,s["border"+o+ka]=0,s[n.p]=e+"px",Dt.set(t,s)},ee=[],dh={},tl,Sm=function(){return vn()-Ci>34&&(tl||(tl=requestAnimationFrame(Mr)))},Js=function(){(!Rn||!Rn.isPressed||Rn.startX>ge.clientWidth)&&(se.cache++,Rn?tl||(tl=requestAnimationFrame(Mr)):Mr(),Ci||ks("scrollStart"),Ci=vn())},qu=function(){W_=re.innerWidth,G_=re.innerHeight},So=function(t){se.cache++,(t===!0||!xn&&!H_&&!Re.fullscreenElement&&!Re.webkitFullscreenElement&&(!uh||W_!==re.innerWidth||Math.abs(re.innerHeight-G_)>re.innerHeight*.25))&&Xc.restart(!0)},Bs={},BS=[],J_=function i(){return ln(Qt,"scrollEnd",i)||Es(!0)},ks=function(t){return Bs[t]&&Bs[t].map(function(e){return e()})||BS},ni=[],Q_=function(t){for(var e=0;e<ni.length;e+=5)(!t||ni[e+4]&&ni[e+4].query===t)&&(ni[e].style.cssText=ni[e+1],ni[e].getBBox&&ni[e].setAttribute("transform",ni[e+2]||""),ni[e+3].uncache=1)},tx=function(){return se.forEach(function(t){return Sn(t)&&++t.cacheID&&(t.rec=t())})},xp=function(t,e){var n;for(Pn=0;Pn<ee.length;Pn++)n=ee[Pn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));zo=!0,e&&Q_(e),e||ks("revert")},ex=function(t,e){se.cache++,(e||!Dn)&&se.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),ri(t)&&(re.history.scrollRestoration=hp=t)},Dn,Ns=0,Mm,kS=function(){if(Mm!==Ns){var t=Mm=Ns;requestAnimationFrame(function(){return t===Ns&&Es(!0)})}},nx=function(){ge.appendChild(wa),dp=!Rn&&wa.offsetHeight||re.innerHeight,ge.removeChild(wa)},Em=function(t){return Qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Es=function(t,e){if(ai=Re.documentElement,ge=Re.body,fp=[re,Re,ai,ge],Ci&&!t&&!zo){cn(Qt,"scrollEnd",J_);return}nx(),Dn=Qt.isRefreshing=!0,zo||tx();var n=ks("refreshInit");V_&&Qt.sort(),e||xp(),se.forEach(function(r){Sn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ee.slice(0).forEach(function(r){return r.refresh()}),zo=!1,ee.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),hh=1,Em(!0),ee.forEach(function(r){var s=ji(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Em(!1),hh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),se.forEach(function(r){Sn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ex(hp,1),Xc.pause(),Ns++,Dn=2,Mr(2),ee.forEach(function(r){return Sn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Dn=Qt.isRefreshing=!1,ks("refresh")},ph=0,yc=1,Xo,Mr=function(t){if(t===2||!Dn&&!zo){Qt.isUpdating=!0,Xo&&Xo.update(0);var e=ee.length,n=vn(),r=n-$u>=50,s=e&&ee[0].scroll();if(yc=ph>s?-1:1,Dn||(ph=s),r&&(Ci&&!Su&&n-Ci>200&&(Ci=0,ks("scrollEnd")),_o=$u,$u=n),yc<0){for(Pn=e;Pn-- >0;)ee[Pn]&&ee[Pn].update(0,r);yc=1}else for(Pn=0;Pn<e;Pn++)ee[Pn]&&ee[Pn].update(0,r);Qt.isUpdating=!1}tl=0},mh=[K_,Z_,mp,pp,yi+Wo,yi+Vo,yi+Go,yi+Ho,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sc=mh.concat([Ds,Ls,"boxSizing","max"+ka,"max"+gp,"position",yi,Ke,Ke+Go,Ke+Vo,Ke+Wo,Ke+Ho]),zS=function(t,e,n){Aa(n);var r=t._gsap;if(r.spacerIsNative)Aa(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ku=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=mh.length,a=e.style,o=t.style,l;s--;)l=mh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[mp]=o[pp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ds]=$c(t,Nn)+tn,a[Ls]=$c(t,en)+tn,a[Ke]=o[yi]=o[Z_]=o[K_]="0",Aa(r),o[Ds]=o["max"+ka]=n[Ds],o[Ls]=o["max"+gp]=n[Ls],o[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},VS=/([A-Z])/g,Aa=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,a;for((t.t._gsap||Dt.core.getCache(t.t)).uncache=1;r<n;r+=2)a=t[r+1],s=t[r],a?e[s]=a:e[s]&&e.removeProperty(s.replace(VS,"-$1").toLowerCase())}},Rl=function(t){for(var e=Sc.length,n=t.style,r=[],s=0;s<e;s++)r.push(Sc[s],n[Sc[s]]);return r.t=t,r},HS=function(t,e,n){for(var r=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],r.push(o,o in e?e[o]:t[a+1]);return r.t=t.t,r},Mc={left:0,top:0},bm=function(t,e,n,r,s,a,o,l,c,u,f,h,d,p){Sn(t)&&(t=t(l)),ri(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?xc("0"+t.substr(3),n):0));var _=d?d.time():0,m,g,S;if(d&&d.seek(0),isNaN(t)||(t=+t),yo(t))d&&(t=Dt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),o&&vc(o,n,r,!0);else{Sn(e)&&(e=e(l));var x=(t||"0").split(" "),v,M,E,T;S=Vn(e,l)||ge,v=gr(S)||{},(!v||!v.left&&!v.top)&&Si(S).display==="none"&&(T=S.style.display,S.style.display="block",v=gr(S),T?S.style.display=T:S.style.removeProperty("display")),M=xc(x[0],v[r.d]),E=xc(x[1]||"0",n),t=v[r.p]-c[r.p]-u+M+s-E,o&&vc(o,E,r,n-E<20||o._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),a){var A=t+n,y=a._isStart;m="scroll"+r.d2,vc(a,A,r,y&&A>20||!y&&(f?Math.max(ge[m],ai[m]):a.parentNode[m])<=A+1),f&&(c=gr(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+tn))}return d&&S&&(m=gr(S),d.seek(h),g=gr(S),d._caScrollDist=m[r.p]-g[r.p],t=t/d._caScrollDist*h),d&&d.seek(_),d?t:Math.round(t)},GS=/(webkit|moz|length|cssText|inset)/i,Tm=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,a,o;if(e===ge){t._stOrig=s.cssText,o=Si(t);for(a in o)!+a&&!GS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=t._stOrig;Dt.core.getCache(t).uncache=1,e.appendChild(t)}},ix=function(t,e,n){var r=e,s=r;return function(a){var o=Math.round(t());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},Pl=function(t,e,n){var r={};r[e.p]="+="+n,Dt.set(t,r)},wm=function(t,e){var n=es(t,e),r="_scroll"+e.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,p={};c=c||n();var _=ix(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=p,p[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){se.cache++,a.tween&&Mr()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Dt.to(t,l),h};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),Qt.isTouch&&cn(t,"touchmove",n.wheelHandler),s},Qt=(function(){function i(e,n){da||i.register(Dt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),fh(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xo){this.update=this.refresh=this.kill=Wi;return}n=vm(ri(n)||yo(n)||n.nodeType?{trigger:n}:n,Al);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,S=s.onSnapComplete,x=s.once,v=s.snap,M=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,A=s.fastScrollEnd,y=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:en,R=!f&&f!==0,D=Vn(n.scroller||re),I=Dt.core.getCache(D),O=Os(D),F=("pinType"in n?n.pinType:jr(D,"pinType")||O&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=R&&n.toggleActions.split(" "),H="markers"in n?n.markers:Al.markers,Z=O?0:parseFloat(Si(D)["border"+b.p2+ka])||0,L=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Mt=NS(D,O,b),bt=IS(D,O),Lt=0,At=0,q=0,tt=es(D,b),ut,Ct,pt,Ft,ae,xt,zt,Yt,Bt,W,N,Nt,Ut,Vt,st,P,w,k,J,Q,K,Et,at,Rt,wt,rt,ot,Tt,Pt,lt,$t,B,ht,it,dt,nt,et,ft,Ht;if(L._startClamp=L._endClamp=!1,L._dir=b,m*=45,L.scroller=D,L.scroll=T?T.time.bind(T):tt,Ft=tt(),L.vars=n,r=r||n.animation,"refreshPriority"in n&&(V_=1,n.refreshPriority===-9999&&(Xo=L)),I.tweenScroll=I.tweenScroll||{top:wm(D,en),left:wm(D,Nn)},L.tweenTo=ut=I.tweenScroll[b.p],L.scrubDuration=function(gt){ht=yo(gt)&&gt,ht?B?B.duration(gt):B=Dt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return g&&g(L)}}):(B&&B.progress(1).kill(),B=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(f),lt=0,l||(l=r.vars.id)),v&&((!_s(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ge.style&&Dt.set(O?[ge,ai]:D,{scrollBehavior:"auto"}),se.forEach(function(gt){return Sn(gt)&&gt.target===(O?Re.scrollingElement||ai:D)&&(gt.smooth=!1)}),pt=Sn(v.snapTo)?v.snapTo:v.snapTo==="labels"?US(r):v.snapTo==="labelsDirectional"?OS(r):v.directional!==!1?function(gt,qt){return _p(v.snapTo)(gt,vn()-At<500?0:qt.direction)}:Dt.utils.snap(v.snapTo),it=v.duration||{min:.1,max:2},it=_s(it)?ko(it.min,it.max):ko(it,it),dt=Dt.delayedCall(v.delay||ht/2||.1,function(){var gt=tt(),qt=vn()-At<500,kt=ut.tween;if((qt||Math.abs(L.getVelocity())<10)&&!kt&&!Su&&Lt!==gt){var Kt=(gt-xt)/Vt,ze=r&&!R?r.totalProgress():Kt,ne=qt?0:(ze-$t)/(vn()-_o)*1e3||0,xe=Dt.utils.clamp(-Kt,1-Kt,js(ne/2)*ne/.185),Ye=Kt+(v.inertia===!1?0:xe),De,be,de=v,Fn=de.onStart,Se=de.onInterrupt,pn=de.onComplete;if(De=pt(Ye,L),yo(De)||(De=Ye),be=Math.max(0,Math.round(xt+De*Vt)),gt<=zt&&gt>=xt&&be!==gt){if(kt&&!kt._initted&&kt.data<=js(be-gt))return;v.inertia===!1&&(xe=De-Kt),ut(be,{duration:it(js(Math.max(js(Ye-ze),js(De-ze))*.185/ne/.05||0)),ease:v.ease||"power3",data:js(be-gt),onInterrupt:function(){return dt.restart(!0)&&Se&&Se(L)},onComplete:function(){L.update(),Lt=tt(),r&&!R&&(B?B.resetTo("totalProgress",De,r._tTime/r._tDur):r.progress(De)),lt=$t=r&&!R?r.totalProgress():L.progress,S&&S(L),pn&&pn(L)}},gt,xe*Vt,be-gt-xe*Vt),Fn&&Fn(L,ut.tween)}}else L.isActive&&Lt!==gt&&dt.restart(!0)}).pause()),l&&(dh[l]=L),h=L.trigger=Vn(h||d!==!0&&d),Ht=h&&h._gsap&&h._gsap.stRevert,Ht&&(Ht=Ht(L)),d=d===!0?h:Vn(d),ri(o)&&(o={targets:h,className:o}),d&&(p===!1||p===yi||(p=!p&&d.parentNode&&d.parentNode.style&&Si(d.parentNode).display==="flex"?!1:Ke),L.pin=d,Ct=Dt.core.getCache(d),Ct.spacer?st=Ct.pinState:(E&&(E=Vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ct.spacerIsNative=!!E,E&&(Ct.spacerState=Rl(E))),Ct.spacer=k=E||Re.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),Ct.pinState=st=Rl(d)),n.force3D!==!1&&Dt.set(d,{force3D:!0}),L.spacer=k=Ct.spacer,Pt=Si(d),Rt=Pt[p+b.os2],Q=Dt.getProperty(d),K=Dt.quickSetter(d,b.a,tn),Ku(d,k,Pt),w=Rl(d)),H){Nt=_s(H)?vm(H,ym):ym,W=Cl("scroller-start",l,D,b,Nt,0),N=Cl("scroller-end",l,D,b,Nt,0,W),J=W["offset"+b.op.d2];var he=Vn(jr(D,"content")||D);Yt=this.markerStart=Cl("start",l,he,b,Nt,J,0,T),Bt=this.markerEnd=Cl("end",l,he,b,Nt,J,0,T),T&&(ft=Dt.quickSetter([Yt,Bt],b.a,tn)),!F&&!(tr.length&&jr(D,"fixedMarkers")===!0)&&(FS(O?ge:D),Dt.set([W,N],{force3D:!0}),rt=Dt.quickSetter(W,b.a,tn),Tt=Dt.quickSetter(N,b.a,tn))}if(T){var vt=T.vars.onUpdate,It=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),vt&&vt.apply(T,It||[])})}if(L.previous=function(){return ee[ee.indexOf(L)-1]},L.next=function(){return ee[ee.indexOf(L)+1]},L.revert=function(gt,qt){if(!qt)return L.kill(!0);var kt=gt!==!1||!L.enabled,Kt=xn;kt!==L.isReverted&&(kt&&(nt=Math.max(tt(),L.scroll.rec||0),q=L.progress,et=r&&r.progress()),Yt&&[Yt,Bt,W,N].forEach(function(ze){return ze.style.display=kt?"none":"block"}),kt&&(xn=L,L.update(kt)),d&&(!M||!L.isActive)&&(kt?zS(d,k,st):Ku(d,k,Si(d),wt)),kt||L.update(kt),xn=Kt,L.isReverted=kt)},L.refresh=function(gt,qt,kt,Kt){if(!((xn||!L.enabled)&&!qt)){if(d&&gt&&Ci){cn(i,"scrollEnd",J_);return}!Dn&&j&&j(L),xn=L,ut.tween&&!kt&&(ut.tween.kill(),ut.tween=0),B&&B.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(St){return St.vars.immediateRender&&St.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var ze=Mt(),ne=bt(),xe=T?T.duration():ji(D,b),Ye=Vt<=.01||!Vt,De=0,be=Kt||0,de=_s(kt)?kt.end:n.end,Fn=n.endTrigger||h,Se=_s(kt)?kt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),pn=L.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,L),jn=h&&Math.max(0,ee.indexOf(L))||0,Je=jn,Qe,sn,or,qs,an,C,V,Y,X,G,ct,yt,mt;for(H&&_s(kt)&&(yt=Dt.getProperty(W,b.p),mt=Dt.getProperty(N,b.p));Je-- >0;)C=ee[Je],C.end||C.refresh(0,1)||(xn=L),V=C.pin,V&&(V===h||V===d||V===pn)&&!C.isReverted&&(G||(G=[]),G.unshift(C),C.revert(!0,!0)),C!==ee[Je]&&(jn--,Je--);for(Sn(Se)&&(Se=Se(L)),Se=mm(Se,"start",L),xt=bm(Se,h,ze,b,tt(),Yt,W,L,ne,Z,F,xe,T,L._startClamp&&"_startClamp")||(d?-.001:0),Sn(de)&&(de=de(L)),ri(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(ri(Se)?Se.split(" ")[0]:"")+de:(De=xc(de.substr(2),ze),de=ri(Se)?Se:(T?Dt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,xt):xt)+De,Fn=h)),de=mm(de,"end",L),zt=Math.max(xt,bm(de||(Fn?"100% 0":xe),Fn,ze,b,tt()+De,Bt,N,L,ne,Z,F,xe,T,L._endClamp&&"_endClamp"))||-.001,De=0,Je=jn;Je--;)C=ee[Je]||{},V=C.pin,V&&C.start-C._pinPush<=xt&&!T&&C.end>0&&(Qe=C.end-(L._startClamp?Math.max(0,C.start):C.start),(V===h&&C.start-C._pinPush<xt||V===pn)&&isNaN(Se)&&(De+=Qe*(1-C.progress)),V===d&&(be+=Qe));if(xt+=De,zt+=De,L._startClamp&&(L._startClamp+=De),L._endClamp&&!Dn&&(L._endClamp=zt||-.001,zt=Math.min(zt,ji(D,b))),Vt=zt-xt||(xt-=.01)&&.001,Ye&&(q=Dt.utils.clamp(0,1,Dt.utils.normalize(xt,zt,nt))),L._pinPush=be,Yt&&De&&(Qe={},Qe[b.a]="+="+De,pn&&(Qe[b.p]="-="+tt()),Dt.set([Yt,Bt],Qe)),d&&!(hh&&L.end>=ji(D,b)))Qe=Si(d),qs=b===en,or=tt(),Et=parseFloat(Q(b.a))+be,!xe&&zt>1&&(ct=(O?Re.scrollingElement||ai:D).style,ct={style:ct,value:ct["overflow"+b.a.toUpperCase()]},O&&Si(ge)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+b.a.toUpperCase()]="scroll")),Ku(d,k,Qe),w=Rl(d),sn=gr(d,!0),Y=F&&es(D,qs?Nn:en)(),p?(wt=[p+b.os2,Vt+be+tn],wt.t=k,Je=p===Ke?$c(d,b)+Vt+be:0,Je&&(wt.push(b.d,Je+tn),k.style.flexBasis!=="auto"&&(k.style.flexBasis=Je+tn)),Aa(wt),pn&&ee.forEach(function(St){St.pin===pn&&St.vars.pinSpacing!==!1&&(St._subPinOffset=!0)}),F&&tt(nt)):(Je=$c(d,b),Je&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=Je+tn)),F&&(an={top:sn.top+(qs?or-xt:Y)+tn,left:sn.left+(qs?Y:or-xt)+tn,boxSizing:"border-box",position:"fixed"},an[Ds]=an["max"+ka]=Math.ceil(sn.width)+tn,an[Ls]=an["max"+gp]=Math.ceil(sn.height)+tn,an[yi]=an[yi+Go]=an[yi+Vo]=an[yi+Wo]=an[yi+Ho]="0",an[Ke]=Qe[Ke],an[Ke+Go]=Qe[Ke+Go],an[Ke+Vo]=Qe[Ke+Vo],an[Ke+Wo]=Qe[Ke+Wo],an[Ke+Ho]=Qe[Ke+Ho],P=HS(st,an,M),Dn&&tt(0)),r?(X=r._initted,Wu(1),r.render(r.duration(),!0,!0),at=Q(b.a)-Et+Vt+be,ot=Math.abs(Vt-at)>1,F&&ot&&P.splice(P.length-2,2),r.render(0,!0,!0),X||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Wu(0)):at=Vt,ct&&(ct.value?ct.style["overflow"+b.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+b.a));else if(h&&tt()&&!T)for(sn=h.parentNode;sn&&sn!==ge;)sn._pinOffset&&(xt-=sn._pinOffset,zt-=sn._pinOffset),sn=sn.parentNode;G&&G.forEach(function(St){return St.revert(!1,!0)}),L.start=xt,L.end=zt,Ft=ae=Dn?nt:tt(),!T&&!Dn&&(Ft<nt&&tt(nt),L.scroll.rec=0),L.revert(!1,!0),At=vn(),dt&&(Lt=-1,dt.restart(!0)),xn=0,r&&R&&(r._initted||et)&&r.progress()!==et&&r.progress(et||0,!0).render(r.time(),!0,!0),(Ye||q!==L.progress||T||_||r&&!r._initted)&&(r&&!R&&(r._initted||q||r.vars.immediateRender!==!1)&&r.totalProgress(T&&xt<-.001&&!q?Dt.utils.normalize(xt,zt,0):q,!0),L.progress=Ye||(Ft-xt)/Vt===q?0:q),d&&p&&(k._pinOffset=Math.round(L.progress*at)),B&&B.invalidate(),isNaN(yt)||(yt-=Dt.getProperty(W,b.p),mt-=Dt.getProperty(N,b.p),Pl(W,b,yt),Pl(Yt,b,yt-(Kt||0)),Pl(N,b,mt),Pl(Bt,b,mt-(Kt||0))),Ye&&!Dn&&L.update(),u&&!Dn&&!Ut&&(Ut=!0,u(L),Ut=!1)}},L.getVelocity=function(){return(tt()-ae)/(vn()-_o)*1e3||0},L.endAnimation=function(){ro(L.callbackAnimation),r&&(B?B.progress(1):r.paused()?R||ro(r,L.direction<0,1):ro(r,r.reversed()))},L.labelToScroll=function(gt){return r&&r.labels&&(xt||L.refresh()||xt)+r.labels[gt]/r.duration()*Vt||0},L.getTrailing=function(gt){var qt=ee.indexOf(L),kt=L.direction>0?ee.slice(0,qt).reverse():ee.slice(qt+1);return(ri(gt)?kt.filter(function(Kt){return Kt.vars.preventOverlaps===gt}):kt).filter(function(Kt){return L.direction>0?Kt.end<=xt:Kt.start>=zt})},L.update=function(gt,qt,kt){if(!(T&&!kt&&!gt)){var Kt=Dn===!0?nt:L.scroll(),ze=gt?0:(Kt-xt)/Vt,ne=ze<0?0:ze>1?1:ze||0,xe=L.progress,Ye,De,be,de,Fn,Se,pn,jn;if(qt&&(ae=Ft,Ft=T?tt():Kt,v&&($t=lt,lt=r&&!R?r.totalProgress():ne)),m&&d&&!xn&&!El&&Ci&&(!ne&&xt<Kt+(Kt-ae)/(vn()-_o)*m?ne=1e-4:ne===1&&zt>Kt+(Kt-ae)/(vn()-_o)*m&&(ne=.9999)),ne!==xe&&L.enabled){if(Ye=L.isActive=!!ne&&ne<1,De=!!xe&&xe<1,Se=Ye!==De,Fn=Se||!!ne!=!!xe,L.direction=ne>xe?1:-1,L.progress=ne,Fn&&!xn&&(be=ne&&!xe?0:ne===1?1:xe===1?2:3,R&&(de=!Se&&U[be+1]!=="none"&&U[be+1]||U[be],jn=r&&(de==="complete"||de==="reset"||de in r))),y&&(Se||jn)&&(jn||f||!r)&&(Sn(y)?y(L):L.getTrailing(y).forEach(function(or){return or.endAnimation()})),R||(B&&!xn&&!El?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",ne,r._tTime/r._tDur):(B.vars.totalProgress=ne,B.invalidate().restart())):r&&r.totalProgress(ne,!!(xn&&(At||gt)))),d){if(gt&&p&&(k.style[p+b.os2]=Rt),!F)K(vo(Et+at*ne));else if(Fn){if(pn=!gt&&ne>xe&&zt+1>Kt&&Kt+1>=ji(D,b),M)if(!gt&&(Ye||pn)){var Je=gr(d,!0),Qe=Kt-xt;Tm(d,ge,Je.top+(b===en?Qe:0)+tn,Je.left+(b===en?0:Qe)+tn)}else Tm(d,k);Aa(Ye||pn?P:w),ot&&ne<1&&Ye||K(Et+(ne===1&&!pn?at:0))}}v&&!ut.tween&&!xn&&!El&&dt.restart(!0),o&&(Se||x&&ne&&(ne<1||!Xu))&&Qo(o.targets).forEach(function(or){return or.classList[Ye||x?"add":"remove"](o.className)}),a&&!R&&!gt&&a(L),Fn&&!xn?(R&&(jn&&(de==="complete"?r.pause().totalProgress(1):de==="reset"?r.restart(!0).pause():de==="restart"?r.restart(!0):r[de]()),a&&a(L)),(Se||!Xu)&&(c&&Se&&Yu(L,c),z[be]&&Yu(L,z[be]),x&&(ne===1?L.kill(!1,1):z[be]=0),Se||(be=ne===1?1:3,z[be]&&Yu(L,z[be]))),A&&!Ye&&Math.abs(L.getVelocity())>(yo(A)?A:2500)&&(ro(L.callbackAnimation),B?B.progress(1):ro(r,de==="reverse"?1:!ne,1))):R&&a&&!xn&&a(L)}if(Tt){var sn=T?Kt/T.duration()*(T._caScrollDist||0):Kt;rt(sn+(W._isFlipped?1:0)),Tt(sn)}ft&&ft(-Kt/T.duration()*(T._caScrollDist||0))}},L.enable=function(gt,qt){L.enabled||(L.enabled=!0,cn(D,"resize",So),O||cn(D,"scroll",Js),j&&cn(i,"refreshInit",j),gt!==!1&&(L.progress=q=0,Ft=ae=Lt=tt()),qt!==!1&&L.refresh())},L.getTween=function(gt){return gt&&ut?ut.tween:B},L.setPositions=function(gt,qt,kt,Kt){if(T){var ze=T.scrollTrigger,ne=T.duration(),xe=ze.end-ze.start;gt=ze.start+xe*gt/ne,qt=ze.start+xe*qt/ne}L.refresh(!1,!1,{start:gm(gt,kt&&!!L._startClamp),end:gm(qt,kt&&!!L._endClamp)},Kt),L.update()},L.adjustPinSpacing=function(gt){if(wt&&gt){var qt=wt.indexOf(b.d)+1;wt[qt]=parseFloat(wt[qt])+gt+tn,wt[1]=parseFloat(wt[1])+gt+tn,Aa(wt)}},L.disable=function(gt,qt){if(gt!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,qt||B&&B.pause(),nt=0,Ct&&(Ct.uncache=1),j&&ln(i,"refreshInit",j),dt&&(dt.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!O)){for(var kt=ee.length;kt--;)if(ee[kt].scroller===D&&ee[kt]!==L)return;ln(D,"resize",So),O||ln(D,"scroll",Js)}},L.kill=function(gt,qt){L.disable(gt,qt),B&&!qt&&B.kill(),l&&delete dh[l];var kt=ee.indexOf(L);kt>=0&&ee.splice(kt,1),kt===Pn&&yc>0&&Pn--,kt=0,ee.forEach(function(Kt){return Kt.scroller===L.scroller&&(kt=1)}),kt||Dn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,gt&&r.revert({kill:!1}),qt||r.kill()),Yt&&[Yt,Bt,W,N].forEach(function(Kt){return Kt.parentNode&&Kt.parentNode.removeChild(Kt)}),Xo===L&&(Xo=0),d&&(Ct&&(Ct.uncache=1),kt=0,ee.forEach(function(Kt){return Kt.pin===d&&kt++}),kt||(Ct.spacer=0)),n.onKill&&n.onKill(L)},ee.push(L),L.enable(!1,!1),Ht&&Ht(L),r&&r.add&&!Vt){var jt=L.update;L.update=function(){L.update=jt,se.cache++,xt||zt||L.refresh()},Dt.delayedCall(.01,L.update),Vt=.01,xt=zt=0}else L.refresh();d&&kS()},i.register=function(n){return da||(Dt=n||$_(),X_()&&window.document&&i.enable(),da=xo),da},i.defaults=function(n){if(n)for(var r in n)Al[r]=n[r];return Al},i.disable=function(n,r){xo=0,ee.forEach(function(a){return a[r?"kill":"disable"](n)}),ln(re,"wheel",Js),ln(Re,"scroll",Js),clearInterval(Ml),ln(Re,"touchcancel",Wi),ln(ge,"touchstart",Wi),Tl(ln,Re,"pointerdown,touchstart,mousedown",_m),Tl(ln,Re,"pointerup,touchend,mouseup",xm),Xc.kill(),bl(ln);for(var s=0;s<se.length;s+=3)wl(ln,se[s],se[s+1]),wl(ln,se[s],se[s+2])},i.enable=function(){if(re=window,Re=document,ai=Re.documentElement,ge=Re.body,Dt&&(Qo=Dt.utils.toArray,ko=Dt.utils.clamp,fh=Dt.core.context||Wi,Wu=Dt.core.suppressOverwrites||Wi,hp=re.history.scrollRestoration||"auto",ph=re.pageYOffset||0,Dt.core.globals("ScrollTrigger",i),ge)){xo=1,wa=document.createElement("div"),wa.style.height="100vh",wa.style.position="absolute",nx(),LS(),Xe.register(Dt),i.isTouch=Xe.isTouch,zr=Xe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),uh=Xe.isTouch===1,cn(re,"wheel",Js),fp=[re,Re,ai,ge],Dt.matchMedia?(i.matchMedia=function(c){var u=Dt.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Dt.addEventListener("matchMediaInit",function(){tx(),xp()}),Dt.addEventListener("matchMediaRevert",function(){return Q_()}),Dt.addEventListener("matchMedia",function(){Es(0,1),ks("matchMedia")}),Dt.matchMedia().add("(orientation: portrait)",function(){return qu(),qu})):console.warn("Requires GSAP 3.11.0 or later"),qu(),cn(Re,"scroll",Js);var n=ge.hasAttribute("style"),r=ge.style,s=r.borderTopStyle,a=Dt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=gr(ge),en.m=Math.round(o.top+en.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Ml=setInterval(Sm,250),Dt.delayedCall(.5,function(){return El=0}),cn(Re,"touchcancel",Wi),cn(ge,"touchstart",Wi),Tl(cn,Re,"pointerdown,touchstart,mousedown",_m),Tl(cn,Re,"pointerup,touchend,mouseup",xm),ch=Dt.utils.checkPrefix("transform"),Sc.push(ch),da=vn(),Xc=Dt.delayedCall(.2,Es).pause(),pa=[Re,"visibilitychange",function(){var c=re.innerWidth,u=re.innerHeight;Re.hidden?(dm=c,pm=u):(dm!==c||pm!==u)&&So()},Re,"DOMContentLoaded",Es,re,"load",Es,re,"resize",So],bl(cn),ee.forEach(function(c){return c.enable(0,1)}),l=0;l<se.length;l+=3)wl(ln,se[l],se[l+1]),wl(ln,se[l],se[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Xu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ml)||(Ml=r)&&setInterval(Sm,r),"ignoreMobileResize"in n&&(uh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(bl(ln)||bl(cn,n.autoRefreshEvents||"none"),H_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Vn(n),a=se.indexOf(s),o=Os(s);~a&&se.splice(a,o?6:2),r&&(o?tr.unshift(re,r,ge,r,ai,r):tr.unshift(s,r))},i.clearMatchMedia=function(n){ee.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ri(n)?Vn(n):n).getBoundingClientRect(),o=a[s?Ds:Ls]*r||0;return s?a.right-o>0&&a.left+o<re.innerWidth:a.bottom-o>0&&a.top+o<re.innerHeight},i.positionInViewport=function(n,r,s){ri(n)&&(n=Vn(n));var a=n.getBoundingClientRect(),o=a[s?Ds:Ls],l=r==null?o/2:r in Yc?Yc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/re.innerWidth:(a.top+l)/re.innerHeight},i.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Bs.killAll||[];Bs={},r.forEach(function(s){return s()})}},i})();Qt.version="3.14.2";Qt.saveStyles=function(i){return i?Qo(i).forEach(function(t){if(t&&t.style){var e=ni.indexOf(t);e>=0&&ni.splice(e,5),ni.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Dt.core.getCache(t),fh())}}):ni};Qt.revert=function(i,t){return xp(!i,t)};Qt.create=function(i,t){return new Qt(i,t)};Qt.refresh=function(i){return i?So(!0):(da||Qt.register())&&Es(!0)};Qt.update=function(i){return++se.cache&&Mr(i===!0?2:0)};Qt.clearScrollMemory=ex;Qt.maxScroll=function(i,t){return ji(i,t?Nn:en)};Qt.getScrollFunc=function(i,t){return es(Vn(i),t?Nn:en)};Qt.getById=function(i){return dh[i]};Qt.getAll=function(){return ee.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!Ci};Qt.snapDirectional=_p;Qt.addEventListener=function(i,t){var e=Bs[i]||(Bs[i]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(i,t){var e=Bs[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Dt.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Sn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Sn(s)&&(s=s(),cn(Qt,"refresh",function(){return s=t.batchMax()})),Qo(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Qt.create(c))}),e};var Am=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},Zu=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Xe.isTouch?" pinch-zoom":""):"none",t===ai&&i(ge,e)},Dl={auto:1,scroll:1},WS=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Dt.core.getCache(s),o=vn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Dl[(l=Si(s)).overflowY]||Dl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Os(s)&&(Dl[(l=Si(s)).overflowY]||Dl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},rx=function(t,e,n,r){return Xe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&WS,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&cn(Re,Xe.eventTypes[0],Rm,!1,!0)},onDisable:function(){return ln(Re,Xe.eventTypes[0],Rm,!0)}})},XS=/(input|label|select|textarea)/i,Cm,Rm=function(t){var e=XS.test(t.target.tagName);(e||Cm)&&(t._gsapAllow=!0,Cm=e)},$S=function(t){_s(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Vn(t.target)||ai,u=Dt.core.globals().ScrollSmoother,f=u&&u.get(),h=zr&&(t.content&&Vn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=es(c,en),p=es(c,Nn),_=1,m=(Xe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,g=0,S=Sn(r)?function(){return r(o)}:function(){return r||2.8},x,v,M=rx(c,t.type,!0,s),E=function(){return v=!1},T=Wi,A=Wi,y=function(){l=ji(c,en),A=ko(zr?1:0,l),n&&(T=ko(0,ji(c,Nn))),x=Ns},b=function(){h._gsap.y=vo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(v){requestAnimationFrame(E);var H=vo(o.deltaY/2),Z=A(d.v-H);if(h&&Z!==d.v+d.offset){d.offset=Z-d.v;var L=vo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=se.cache,Mr()}return!0}d.offset&&b(),v=!0},D,I,O,F,z=function(){y(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Dt.set(h,{y:"+=0"}),t.ignoreCheck=function(U){return zr&&U.type==="touchmove"&&R()||_>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){v=!1;var U=_;_=vo((re.visualViewport&&re.visualViewport.scale||1)/m),D.pause(),U!==_&&Zu(c,_>1.01?!0:n?!1:"x"),I=p(),O=d(),y(),x=Ns},t.onRelease=t.onGestureStart=function(U,H){if(d.offset&&b(),!H)F.restart(!0);else{se.cache++;var Z=S(),L,j;n&&(L=p(),j=L+Z*.05*-U.velocityX/.227,Z*=Am(p,L,j,ji(c,Nn)),D.vars.scrollX=T(j)),L=d(),j=L+Z*.05*-U.velocityY/.227,Z*=Am(d,L,j,ji(c,en)),D.vars.scrollY=A(j),D.invalidate().duration(Z).play(.01),(zr&&D.vars.scrollY>=l||L>=l-1)&&Dt.to({},{onUpdate:z,duration:Z})}a&&a(U)},t.onWheel=function(){D._ts&&D.pause(),vn()-g>1e3&&(x=0,g=vn())},t.onChange=function(U,H,Z,L,j){if(Ns!==x&&y(),H&&n&&p(T(L[2]===H?I+(U.startX-U.x):p()+H-L[1])),Z){d.offset&&b();var Mt=j[2]===Z,bt=Mt?O+U.startY-U.y:d()+Z-j[1],Lt=A(bt);Mt&&bt!==Lt&&(O+=Lt-bt),d(Lt)}(Z||H)&&Mr()},t.onEnable=function(){Zu(c,n?!1:"x"),Qt.addEventListener("refresh",z),cn(re,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){Zu(c,!0),ln(re,"resize",z),Qt.removeEventListener("refresh",z),M.kill()},t.lockAxis=t.lockAxis!==!1,o=new Xe(t),o.iOS=zr,zr&&!d()&&d(1),zr&&Dt.ticker.add(Wi),F=o._dc,D=Dt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ix(d,d(),function(){return D.pause()})},onUpdate:Mr,onComplete:F.vars.onComplete}),o};Qt.sort=function(i){if(Sn(i))return ee.sort(i);var t=re.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ee.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(i){return new Xe(i)};Qt.normalizeScroll=function(i){if(typeof i>"u")return Rn;if(i===!0&&Rn)return Rn.enable();if(i===!1){Rn&&Rn.kill(),Rn=i;return}var t=i instanceof Xe?i:$S(i);return Rn&&Rn.target===t.target&&Rn.kill(),Os(t.target)&&(Rn=t),t};Qt.core={_getVelocityProp:lh,_inputObserver:rx,_scrollers:se,_proxies:tr,bridge:{ss:function(){Ci||ks("scrollStart"),Ci=vn()},ref:function(){return xn}}};$_()&&Dt.registerPlugin(Qt);Gc.registerPlugin(Qt);class YS{constructor({onStepEnter:t,onStepLeave:e,onProgress:n}){this.onStepEnter=t,this.onStepLeave=e,this.onProgress=n,this.lenis=null,this.triggers=[],this.progressBar=null}init(){this.initLenis(),this.initProgressBar(),this.initStepTriggers()}initLenis(){this.lenis=new cy({lerp:.1,smoothWheel:!0}),this.lenis.on("scroll",Qt.update),Gc.ticker.add(t=>this.lenis.raf(t*1e3)),Gc.ticker.lagSmoothing(0)}initProgressBar(){const t=document.createElement("div");t.className="scroll-progress";const e=document.createElement("div");e.className="scroll-progress-bar",t.appendChild(e),document.body.appendChild(t),this.progressBar=e}initStepTriggers(){document.querySelectorAll(".step").forEach((e,n)=>{const r=Qt.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>this.onStepEnter(n,"down"),onEnterBack:()=>this.onStepEnter(n,"up"),onLeave:()=>this.onStepLeave(n,"down"),onLeaveBack:()=>this.onStepLeave(n,"up")});this.triggers.push(r)}),Qt.create({trigger:"#scroll-content",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>{this.onProgress(e.progress),this.updateProgressBar(e.progress)}})}updateProgressBar(t){this.progressBar&&(this.progressBar.style.width=`${t*100}%`)}destroy(){this.triggers.forEach(t=>t.kill()),this.triggers=[],this.lenis?.destroy(),Qt.getAll().forEach(t=>t.kill()),this.progressBar&&(this.progressBar.parentElement?.remove(),this.progressBar=null)}}const vp="182",qS=0,Pm=1,KS=2,Ec=1,ZS=2,Mo=3,ns=0,Yn=1,_r=2,Er=0,Ca=1,Dm=2,Lm=3,Nm=4,jS=5,ys=100,JS=101,QS=102,tM=103,eM=104,nM=200,iM=201,rM=202,sM=203,gh=204,_h=205,aM=206,oM=207,lM=208,cM=209,uM=210,fM=211,hM=212,dM=213,pM=214,xh=0,vh=1,yh=2,za=3,Sh=4,Mh=5,Eh=6,bh=7,sx=0,mM=1,gM=2,er=0,ax=1,ox=2,lx=3,cx=4,ux=5,fx=6,hx=7,dx=300,zs=301,Va=302,Th=303,wh=304,Mu=306,Ah=1e3,Sr=1001,Ch=1002,hn=1003,_M=1004,Ll=1005,Mn=1006,ju=1007,bs=1008,Ei=1009,px=1010,mx=1011,el=1012,yp=1013,sr=1014,Ji=1015,Cr=1016,Sp=1017,Mp=1018,nl=1020,gx=35902,_x=35899,xx=1021,vx=1022,Oi=1023,Rr=1026,Ts=1027,yx=1028,Ep=1029,Ha=1030,bp=1031,Tp=1033,bc=33776,Tc=33777,wc=33778,Ac=33779,Rh=35840,Ph=35841,Dh=35842,Lh=35843,Nh=36196,Ih=37492,Fh=37496,Uh=37488,Oh=37489,Bh=37490,kh=37491,zh=37808,Vh=37809,Hh=37810,Gh=37811,Wh=37812,Xh=37813,$h=37814,Yh=37815,qh=37816,Kh=37817,Zh=37818,jh=37819,Jh=37820,Qh=37821,td=36492,ed=36494,nd=36495,id=36283,rd=36284,sd=36285,ad=36286,xM=3200,vM=0,yM=1,Hr="",vi="srgb",Ga="srgb-linear",qc="linear",ye="srgb",Qs=7680,Im=519,SM=512,MM=513,EM=514,wp=515,bM=516,TM=517,Ap=518,wM=519,Fm=35044,Um="300 es",Qi=2e3,Kc=2001;function Sx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function AM(){const i=Zc("canvas");return i.style.display="block",i}const Om={};function Bm(...i){const t="THREE."+i.shift();console.log(t,...i)}function Zt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function me(...i){const t="THREE."+i.shift();console.error(t,...i)}function il(...i){const t=i.join(" ");t in Om||(Om[t]=!0,Zt(...i))}function CM(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class ja{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,od=180/Math.PI;function pl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function RM(i,t){return(i%t+t)%t}function Qu(i,t,e){return(1-e)*i+e*t}function so(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,e=0){Ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ml{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o>=1){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),x=Math.sin(S);g=Math.sin(g*S)/x,o=Math.sin(o*S)/x,l=l*g+h*o,c=c*g+d*o,u=u*g+p*o,f=f*g+_*o}else{l=l*g+h*o,c=c*g+d*o,u=u*g+p*o,f=f*g+_*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return t[e]=o*p+u*f+l*d-c*h,t[e+1]=l*p+u*h+c*f-o*d,t[e+2]=c*p+u*d+o*h-l*f,t[e+3]=u*p-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(km.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(km.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tf.copy(this).projectOnVector(t),this.sub(tf)}reflect(t){return this.sub(tf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new $,km=new ml;class Jt{constructor(t,e,n,r,s,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=r[0],m=r[3],g=r[6],S=r[1],x=r[4],v=r[7],M=r[2],E=r[5],T=r[8];return s[0]=a*_+o*S+l*M,s[3]=a*m+o*x+l*E,s[6]=a*g+o*v+l*T,s[1]=c*_+u*S+f*M,s[4]=c*m+u*x+f*E,s[7]=c*g+u*v+f*T,s[2]=h*_+d*S+p*M,s[5]=h*m+d*x+p*E,s[8]=h*g+d*v+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,p=e*f+n*h+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=f*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ef.makeScale(t,e)),this}rotate(t){return this.premultiply(ef.makeRotation(-t)),this}translate(t,e){return this.premultiply(ef.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new Jt,zm=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PM(){const i={enabled:!0,workingColorSpace:Ga,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ye&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(r.r=Ra(r.r),r.g=Ra(r.g),r.b=Ra(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hr?qc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ga]:{primaries:t,whitePoint:n,transfer:qc,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),i}const fe=PM();function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ta;class DM{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ta===void 0&&(ta=Zc("canvas")),ta.width=t.width,ta.height=t.height;const r=ta.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ta}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=br(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(br(e[n]/255)*255):e[n]=br(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LM=0;class Cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=pl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nf(r[a].image)):s.push(nf(r[a]))}else s=nf(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function nf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?DM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let NM=0;const rf=new $;class In extends ja{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,n=Sr,r=Sr,s=Mn,a=bs,o=Oi,l=Ei,c=In.DEFAULT_ANISOTROPY,u=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=pl(),this.name="",this.source=new Cp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rf).x}get height(){return this.source.getSize(rf).y}get depth(){return this.source.getSize(rf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ah:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case Ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ah:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case Ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=dx;In.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,e=0,n=0,r=1){We.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,M=(g+1)/2,E=(u+h)/4,T=(f+_)/4,A=(p+m)/4;return x>v&&x>M?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=T/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=A/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=T/s,r=A/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IM extends ja{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new In(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Cp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends IM{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mx extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nl.copy(n.boundingBox)),Nl.applyMatrix4(t.matrixWorld),this.union(Nl)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ao),Il.subVectors(this.max,ao),ea.subVectors(t.a,ao),na.subVectors(t.b,ao),ia.subVectors(t.c,ao),Ir.subVectors(na,ea),Fr.subVectors(ia,na),ls.subVectors(ea,ia);let e=[0,-Ir.z,Ir.y,0,-Fr.z,Fr.y,0,-ls.z,ls.y,Ir.z,0,-Ir.x,Fr.z,0,-Fr.x,ls.z,0,-ls.x,-Ir.y,Ir.x,0,-Fr.y,Fr.x,0,-ls.y,ls.x,0];return!sf(e,ea,na,ia,Il)||(e=[1,0,0,0,1,0,0,0,1],!sf(e,ea,na,ia,Il))?!1:(Fl.crossVectors(Ir,Fr),e=[Fl.x,Fl.y,Fl.z],sf(e,ea,na,ia,Il))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(lr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const lr=[new $,new $,new $,new $,new $,new $,new $,new $],Pi=new $,Nl=new gl,ea=new $,na=new $,ia=new $,Ir=new $,Fr=new $,ls=new $,ao=new $,Il=new $,Fl=new $,cs=new $;function sf(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){cs.fromArray(i,s);const o=r.x*Math.abs(cs.x)+r.y*Math.abs(cs.y)+r.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const UM=new gl,oo=new $,af=new $;class Eu{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):UM.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oo.subVectors(t,this.center);const e=oo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(oo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(af.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oo.copy(t.center).add(af)),this.expandByPoint(oo.copy(t.center).sub(af))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const cr=new $,of=new $,Ul=new $,Ur=new $,lf=new $,Ol=new $,cf=new $;class Ex{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cr.copy(this.origin).addScaledVector(this.direction,e),cr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){of.copy(t).add(e).multiplyScalar(.5),Ul.copy(e).sub(t).normalize(),Ur.copy(this.origin).sub(of);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ul),o=Ur.dot(this.direction),l=-Ur.dot(Ul),c=Ur.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(of).addScaledVector(Ul,h),d}intersectSphere(t,e){cr.subVectors(t.center,this.origin);const n=cr.dot(this.direction),r=cr.dot(cr)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,cr)!==null}intersectTriangle(t,e,n,r,s){lf.subVectors(e,t),Ol.subVectors(n,t),cf.crossVectors(lf,Ol);let a=this.direction.dot(cf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ur.subVectors(this.origin,t);const l=o*this.direction.dot(Ol.crossVectors(Ur,Ol));if(l<0)return null;const c=o*this.direction.dot(lf.cross(Ur));if(c<0||l+c>a)return null;const u=-o*Ur.dot(cf);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,m)}set(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/ra.setFromMatrixColumn(t,0).length(),s=1/ra.setFromMatrixColumn(t,1).length(),a=1/ra.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,p=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h+_*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-p,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,p=o*u,_=o*f;e[0]=l*u,e[4]=p*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=p*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+p,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OM,t,BM)}lookAt(t,e,n){const r=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Or.crossVectors(n,ti),Or.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Or.crossVectors(n,ti)),Or.normalize(),Bl.crossVectors(ti,Or),r[0]=Or.x,r[4]=Bl.x,r[8]=ti.x,r[1]=Or.y,r[5]=Bl.y,r[9]=ti.y,r[2]=Or.z,r[6]=Bl.z,r[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],x=n[7],v=n[11],M=n[15],E=r[0],T=r[4],A=r[8],y=r[12],b=r[1],R=r[5],D=r[9],I=r[13],O=r[2],F=r[6],z=r[10],U=r[14],H=r[3],Z=r[7],L=r[11],j=r[15];return s[0]=a*E+o*b+l*O+c*H,s[4]=a*T+o*R+l*F+c*Z,s[8]=a*A+o*D+l*z+c*L,s[12]=a*y+o*I+l*U+c*j,s[1]=u*E+f*b+h*O+d*H,s[5]=u*T+f*R+h*F+d*Z,s[9]=u*A+f*D+h*z+d*L,s[13]=u*y+f*I+h*U+d*j,s[2]=p*E+_*b+m*O+g*H,s[6]=p*T+_*R+m*F+g*Z,s[10]=p*A+_*D+m*z+g*L,s[14]=p*y+_*I+m*U+g*j,s[3]=S*E+x*b+v*O+M*H,s[7]=S*T+x*R+v*F+M*Z,s[11]=S*A+x*D+v*z+M*L,s[15]=S*y+x*I+v*U+M*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15],S=l*d-c*h,x=o*d-c*f,v=o*h-l*f,M=a*d-c*u,E=a*h-l*u,T=a*f-o*u;return e*(_*S-m*x+g*v)-n*(p*S-m*M+g*E)+r*(p*x-_*M+g*T)-s*(p*v-_*E+m*T)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],S=f*m*c-_*h*c+_*l*d-o*m*d-f*l*g+o*h*g,x=p*h*c-u*m*c-p*l*d+a*m*d+u*l*g-a*h*g,v=u*_*c-p*f*c+p*o*d-a*_*d-u*o*g+a*f*g,M=p*f*l-u*_*l-p*o*h+a*_*h+u*o*m-a*f*m,E=e*S+n*x+r*v+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=S*T,t[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*g-n*h*g)*T,t[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*g+n*l*g)*T,t[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*T,t[4]=x*T,t[5]=(u*m*s-p*h*s+p*r*d-e*m*d-u*r*g+e*h*g)*T,t[6]=(p*l*s-a*m*s-p*r*c+e*m*c+a*r*g-e*l*g)*T,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*d+e*l*d)*T,t[8]=v*T,t[9]=(p*f*s-u*_*s-p*n*d+e*_*d+u*n*g-e*f*g)*T,t[10]=(a*_*s-p*o*s+p*n*c-e*_*c-a*n*g+e*o*g)*T,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*d-e*o*d)*T,t[12]=M*T,t[13]=(u*_*r-p*f*r+p*n*h-e*_*h-u*n*m+e*f*m)*T,t[14]=(p*o*r-a*_*r-p*n*l+e*_*l+a*n*m-e*o*m)*T,t[15]=(a*f*r-u*o*r+u*n*l-e*f*l-a*n*h+e*o*h)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,p=s*f,_=a*u,m=a*f,g=o*f,S=l*c,x=l*u,v=l*f,M=n.x,E=n.y,T=n.z;return r[0]=(1-(_+g))*M,r[1]=(d+v)*M,r[2]=(p-x)*M,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(h+g))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(p+x)*T,r[9]=(m-S)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=ra.set(r[0],r[1],r[2]).length();const a=ra.set(r[4],r[5],r[6]).length(),o=ra.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Di.copy(this);const c=1/s,u=1/a,f=1/o;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=f,Di.elements[9]*=f,Di.elements[10]*=f,e.setFromRotationMatrix(Di),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Qi,l=!1){const c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Qi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Kc)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Qi,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Qi)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Kc)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ra=new $,Di=new $e,OM=new $(0,0,0),BM=new $(1,1,1),Or=new $,Bl=new $,ti=new $,Hm=new $e,Gm=new ml;class Pr{constructor(t=0,e=0,n=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kM=0;const Wm=new $,sa=new ml,ur=new $e,kl=new $,lo=new $,zM=new $,VM=new ml,Xm=new $(1,0,0),$m=new $(0,1,0),Ym=new $(0,0,1),qm={type:"added"},HM={type:"removed"},aa={type:"childadded",child:null},uf={type:"childremoved",child:null};class qn extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new $,e=new Pr,n=new ml,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Jt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sa.setFromAxisAngle(t,e),this.quaternion.multiply(sa),this}rotateOnWorldAxis(t,e){return sa.setFromAxisAngle(t,e),this.quaternion.premultiply(sa),this}rotateX(t){return this.rotateOnAxis(Xm,t)}rotateY(t){return this.rotateOnAxis($m,t)}rotateZ(t){return this.rotateOnAxis(Ym,t)}translateOnAxis(t,e){return Wm.copy(t).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xm,t)}translateY(t){return this.translateOnAxis($m,t)}translateZ(t){return this.translateOnAxis(Ym,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kl.copy(t):kl.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(lo,kl,this.up):ur.lookAt(kl,lo,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),sa.setFromRotationMatrix(ur),this.quaternion.premultiply(sa.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qm),aa.child=t,this.dispatchEvent(aa),aa.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(HM),uf.child=t,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ur.multiply(t.parent.matrixWorld)),t.applyMatrix4(ur),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qm),aa.child=t,this.dispatchEvent(aa),aa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,zM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,VM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}qn.DEFAULT_UP=new $(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new $,fr=new $,ff=new $,hr=new $,oa=new $,la=new $,Km=new $,hf=new $,df=new $,pf=new $,mf=new We,gf=new We,_f=new We;class Fi{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Li.subVectors(t,e),r.cross(Li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Li.subVectors(r,e),fr.subVectors(n,e),ff.subVectors(t,e);const a=Li.dot(Li),o=Li.dot(fr),l=Li.dot(ff),c=fr.dot(fr),u=fr.dot(ff),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hr.x),l.addScaledVector(a,hr.y),l.addScaledVector(o,hr.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return mf.setScalar(0),gf.setScalar(0),_f.setScalar(0),mf.fromBufferAttribute(t,e),gf.fromBufferAttribute(t,n),_f.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(mf,s.x),a.addScaledVector(gf,s.y),a.addScaledVector(_f,s.z),a}static isFrontFacing(t,e,n,r){return Li.subVectors(n,e),fr.subVectors(t,e),Li.cross(fr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Li.cross(fr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Fi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;oa.subVectors(r,n),la.subVectors(s,n),hf.subVectors(t,n);const l=oa.dot(hf),c=la.dot(hf);if(l<=0&&c<=0)return e.copy(n);df.subVectors(t,r);const u=oa.dot(df),f=la.dot(df);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(oa,a);pf.subVectors(t,s);const d=oa.dot(pf),p=la.dot(pf);if(p>=0&&d<=p)return e.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(la,o);const m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Km.subVectors(s,r),o=(f-u)/(f-u+(d-p)),e.copy(r).addScaledVector(Km,o);const g=1/(m+_+h);return a=_*g,o=h*g,e.copy(n).addScaledVector(oa,a).addScaledVector(la,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},zl={h:0,s:0,l:0};function xf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let _e=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=RM(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=xf(a,s,t+1/3),this.g=xf(a,s,t),this.b=xf(a,s,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=vi){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vi){const n=Tx[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}copyLinearToSRGB(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return fe.workingToColorSpace(gn.copy(this),t),Math.round(oe(gn.r*255,0,255))*65536+Math.round(oe(gn.g*255,0,255))*256+Math.round(oe(gn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,s=gn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=vi){fe.workingToColorSpace(gn.copy(this),t);const e=gn.r,n=gn.g,r=gn.b;return t!==vi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Br),this.setHSL(Br.h+t,Br.s+e,Br.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Br),t.getHSL(zl);const n=Qu(Br.h,zl.h,e),r=Qu(Br.s,zl.s,e),s=Qu(Br.l,zl.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new _e;_e.NAMES=Tx;let GM=0;class _l extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=Ca,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ca&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gh&&(n.blendSrc=this.blendSrc),this.blendDst!==_h&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Im&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wx extends _l{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new $,Vl=new Ee;let WM=0;class Ri{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fm,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vl.fromBufferAttribute(this,e),Vl.applyMatrix3(t),this.setXY(e,Vl.x,Vl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=so(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=so(e,this.array)),e}setX(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=so(e,this.array)),e}setY(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=so(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=so(e,this.array)),e}setW(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array),r=Bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array),r=Bn(r,this.array),s=Bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fm&&(t.usage=this.usage),t}}class Ax extends Ri{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cx extends Ri{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tr extends Ri{constructor(t,e,n){super(new Float32Array(t),e,n)}}let XM=0;const _i=new $e,vf=new qn,ca=new $,ei=new gl,co=new gl,on=new $;class ki extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sx(t)?Cx:Ax)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return vf.lookAt(t),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tr(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];co.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(ei.min,co.min),ei.expandByPoint(on),on.addVectors(ei.max,co.max),ei.expandByPoint(on)):(ei.expandByPoint(co.min),ei.expandByPoint(co.max))}ei.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)on.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(on));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(ca.fromBufferAttribute(t,c),on.add(ca)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new $,l[A]=new $;const c=new $,u=new $,f=new $,h=new Ee,d=new Ee,p=new Ee,_=new $,m=new $;function g(A,y,b){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,b),h.fromBufferAttribute(s,A),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,b),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(R),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(R),o[A].add(_),o[y].add(_),o[b].add(_),l[A].add(m),l[y].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let A=0,y=S.length;A<y;++A){const b=S[A],R=b.start,D=b.count;for(let I=R,O=R+D;I<O;I+=3)g(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new $,v=new $,M=new $,E=new $;function T(A){M.fromBufferAttribute(r,A),E.copy(M);const y=o[A];x.copy(y),x.sub(M.multiplyScalar(M.dot(y))).normalize(),v.crossVectors(E,y);const R=v.dot(l[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,R)}for(let A=0,y=S.length;A<y;++A){const b=S[A],R=b.start,D=b.count;for(let I=R,O=R+D;I<O;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ri(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new Ri(h,u,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ki,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zm=new $e,us=new Ex,Hl=new Eu,jm=new $,Gl=new $,Wl=new $,Xl=new $,yf=new $,$l=new $,Jm=new $,Yl=new $;class Dr extends qn{constructor(t=new ki,e=new wx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(yf.fromBufferAttribute(f,t),a?$l.addScaledVector(yf,u):$l.addScaledVector(yf.sub(e),u))}e.add($l)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hl.copy(n.boundingSphere),Hl.applyMatrix4(s),us.copy(t.ray).recast(t.near),!(Hl.containsPoint(us.origin)===!1&&(us.intersectSphere(Hl,jm)===null||us.origin.distanceToSquared(jm)>(t.far-t.near)**2))&&(Zm.copy(s).invert(),us.copy(t.ray).applyMatrix4(Zm),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,M=x;v<M;v+=3){const E=o.getX(v),T=o.getX(v+1),A=o.getX(v+2);r=ql(this,g,t,n,c,u,f,E,T,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const S=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=ql(this,a,t,n,c,u,f,S,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,M=x;v<M;v+=3){const E=v,T=v+1,A=v+2;r=ql(this,g,t,n,c,u,f,E,T,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const S=m,x=m+1,v=m+2;r=ql(this,a,t,n,c,u,f,S,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function $M(i,t,e,n,r,s,a,o){let l;if(t.side===Yn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ns,o),l===null)return null;Yl.copy(o),Yl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Yl);return c<e.near||c>e.far?null:{distance:c,point:Yl.clone(),object:i}}function ql(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Gl),i.getVertexPosition(l,Wl),i.getVertexPosition(c,Xl);const u=$M(i,t,e,n,Gl,Wl,Xl,Jm);if(u){const f=new $;Fi.getBarycoord(Jm,Gl,Wl,Xl,f),r&&(u.uv=Fi.getInterpolatedAttribute(r,o,l,c,f,new Ee)),s&&(u.uv1=Fi.getInterpolatedAttribute(s,o,l,c,f,new Ee)),a&&(u.normal=Fi.getInterpolatedAttribute(a,o,l,c,f,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};Fi.getNormal(Gl,Wl,Xl,h.normal),u.face=h,u.barycoord=f}return u}class xl extends ki{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,e,t,a,s,0),p("z","y","x",1,-1,n,e,-t,a,s,1),p("x","z","y",1,1,t,n,e,r,a,2),p("x","z","y",1,-1,t,n,-e,r,a,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Tr(c,3)),this.setAttribute("normal",new Tr(u,3)),this.setAttribute("uv",new Tr(f,2));function p(_,m,g,S,x,v,M,E,T,A,y){const b=v/T,R=M/A,D=v/2,I=M/2,O=E/2,F=T+1,z=A+1;let U=0,H=0;const Z=new $;for(let L=0;L<z;L++){const j=L*R-I;for(let Mt=0;Mt<F;Mt++){const bt=Mt*b-D;Z[_]=bt*S,Z[m]=j*x,Z[g]=O,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[g]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Mt/T),f.push(1-L/A),U+=1}}for(let L=0;L<A;L++)for(let j=0;j<T;j++){const Mt=h+j+F*L,bt=h+j+F*(L+1),Lt=h+(j+1)+F*(L+1),At=h+(j+1)+F*L;l.push(Mt,bt,At),l.push(bt,Lt,At),H+=6}o.addGroup(d,H,y),d+=H,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wa(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Cn(i){const t={};for(let e=0;e<i.length;e++){const n=Wa(i[e]);for(const r in n)t[r]=n[r]}return t}function YM(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rx(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const qM={clone:Wa,merge:Cn};var KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends _l{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wa(t.uniforms),this.uniformsGroups=YM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Px extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new $,Qm=new Ee,tg=new Ee;class Mi extends Px{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=od*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return od*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kr.x,kr.y).multiplyScalar(-t/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-t/kr.z)}getViewSize(t,e){return this.getViewBounds(t,Qm,tg),e.subVectors(tg,Qm)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ju*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ua=-90,fa=1;class jM extends qn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(ua,fa,t,e);r.layers=this.layers,this.add(r);const s=new Mi(ua,fa,t,e);s.layers=this.layers,this.add(s);const a=new Mi(ua,fa,t,e);a.layers=this.layers,this.add(a);const o=new Mi(ua,fa,t,e);o.layers=this.layers,this.add(o);const l=new Mi(ua,fa,t,e);l.layers=this.layers,this.add(l);const c=new Mi(ua,fa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Dx extends In{constructor(t=[],e=zs,n,r,s,a,o,l,c,u){super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lx extends nr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Dx(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xl(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:Er});s.uniforms.tEquirect.value=e;const a=new Dr(r,s),o=e.minFilter;return e.minFilter===bs&&(e.minFilter=Mn),new jM(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Kl extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kl;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class QM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class t1 extends In{constructor(t=null,e=1,n=1,r,s,a,o,l,c=hn,u=hn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mf=new $,e1=new $,n1=new Jt;class xs{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Mf.subVectors(n,e).cross(e1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||n1.getNormalMatrix(t),r=this.coplanarPoint(Mf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Eu,i1=new Ee(.5,.5),Zl=new $;class Nx{constructor(t=new xs,e=new xs,n=new xs,r=new xs,s=new xs,a=new xs){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qi,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],S=s[12],x=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-a,d-u,g-p,M-S).normalize(),r[1].setComponents(c+a,d+u,g+p,M+S).normalize(),r[2].setComponents(c+o,d+f,g+_,M+x).normalize(),r[3].setComponents(c-o,d-f,g-_,M-x).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,d-h,g-m,M-v).normalize();else if(r[4].setComponents(c-l,d-h,g-m,M-v).normalize(),e===Qi)r[5].setComponents(c+l,d+h,g+m,M+v).normalize();else if(e===Kc)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);const e=i1.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zl.x=r.normal.x>0?t.max.x:t.min.x,Zl.y=r.normal.y>0?t.max.y:t.min.y,Zl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class r1 extends _l{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const eg=new $e,ld=new Ex,jl=new Eu,Jl=new $;class s1 extends qn{constructor(t=new ki,e=new r1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(r),jl.radius+=s,t.ray.intersectsSphere(jl)===!1)return;eg.copy(r).invert(),ld.copy(t.ray).applyMatrix4(eg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,_=d;p<_;p++){const m=c.getX(p);Jl.fromBufferAttribute(f,m),ng(Jl,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,_=d;p<_;p++)Jl.fromBufferAttribute(f,p),ng(Jl,p,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ng(i,t,e,n,r,s,a){const o=ld.distanceSqToPoint(i);if(o<e){const l=new $;ld.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class rl extends In{constructor(t,e,n=sr,r,s,a,o=hn,l=hn,c,u=Rr,f=1){if(u!==Rr&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class a1 extends rl{constructor(t,e=sr,n=zs,r,s,a=hn,o=hn,l,c=Rr){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ix extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bu extends ki{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const S=g*h-a;for(let x=0;x<c;x++){const v=x*f-s;p.push(v,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const x=S+c*g,v=S+c*(g+1),M=S+1+c*(g+1),E=S+1+c*g;d.push(x,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(_,3)),this.setAttribute("uv",new Tr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bu(t.width,t.height,t.widthSegments,t.heightSegments)}}class o1 extends Bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class l1 extends _l{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c1 extends _l{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fx extends Px{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class u1 extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ig(i,t,e,n){const r=f1(n);switch(e){case xx:return i*t;case yx:return i*t/r.components*r.byteLength;case Ep:return i*t/r.components*r.byteLength;case Ha:return i*t*2/r.components*r.byteLength;case bp:return i*t*2/r.components*r.byteLength;case vx:return i*t*3/r.components*r.byteLength;case Oi:return i*t*4/r.components*r.byteLength;case Tp:return i*t*4/r.components*r.byteLength;case bc:case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wc:case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ph:case Lh:return Math.max(i,16)*Math.max(t,8)/4;case Rh:case Dh:return Math.max(i,8)*Math.max(t,8)/2;case Nh:case Ih:case Uh:case Oh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fh:case Bh:case kh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case td:case ed:case nd:return Math.ceil(i/4)*Math.ceil(t/4)*16;case id:case rd:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sd:case ad:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f1(i){switch(i){case Ei:case px:return{byteLength:1,components:1};case el:case mx:case Cr:return{byteLength:2,components:1};case Sp:case Mp:return{byteLength:2,components:4};case sr:case yp:case Ji:return{byteLength:4,components:1};case gx:case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);function Ux(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function h1(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var d1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
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
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v1=`#ifdef USE_AOMAP
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
#endif`,y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
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
#endif`,M1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w1=`#ifdef USE_IRIDESCENCE
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
#endif`,A1=`#ifdef USE_BUMPMAP
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
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U1=`#define PI 3.141592653589793
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
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B1=`vec3 transformedNormal = objectNormal;
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
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",W1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
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
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
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
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
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
#endif`,fE=`uniform sampler2D dfgLUT;
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
}`,hE=`
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
#endif`,dE=`#if defined( RE_IndirectDiffuse )
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ME=`#if defined( USE_POINTS_UV )
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
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
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
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
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
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
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
}`,vb=`#if DEPTH_PACKING == 3200
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
}`,yb=`#define DISTANCE
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
}`,Sb=`#define DISTANCE
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Ab=`uniform vec3 diffuse;
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
}`,Cb=`#define LAMBERT
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
}`,Rb=`#define LAMBERT
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
}`,Pb=`#define MATCAP
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
}`,Db=`#define MATCAP
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
}`,Lb=`#define NORMAL
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
}`,Nb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Fb=`#define PHONG
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
}`,Ub=`#define STANDARD
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
}`,Ob=`#define STANDARD
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
}`,Bb=`#define TOON
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
}`,kb=`#define TOON
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
}`,zb=`uniform float size;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 color;
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
}`,Wb=`uniform float rotation;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:d1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:_1,alphatest_pars_fragment:x1,aomap_fragment:v1,aomap_pars_fragment:y1,batching_pars_vertex:S1,batching_vertex:M1,begin_vertex:E1,beginnormal_vertex:b1,bsdfs:T1,iridescence_fragment:w1,bumpmap_pars_fragment:A1,clipping_planes_fragment:C1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:P1,clipping_planes_vertex:D1,color_fragment:L1,color_pars_fragment:N1,color_pars_vertex:I1,color_vertex:F1,common:U1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:B1,displacementmap_pars_vertex:k1,displacementmap_vertex:z1,emissivemap_fragment:V1,emissivemap_pars_fragment:H1,colorspace_fragment:G1,colorspace_pars_fragment:W1,envmap_fragment:X1,envmap_common_pars_fragment:$1,envmap_pars_fragment:Y1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:sE,envmap_vertex:K1,fog_vertex:Z1,fog_pars_vertex:j1,fog_fragment:J1,fog_pars_fragment:Q1,gradientmap_pars_fragment:tE,lightmap_pars_fragment:eE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:rE,lights_toon_fragment:aE,lights_toon_pars_fragment:oE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:uE,lights_physical_pars_fragment:fE,lights_fragment_begin:hE,lights_fragment_maps:dE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:xE,map_fragment:vE,map_pars_fragment:yE,map_particle_fragment:SE,map_particle_pars_fragment:ME,metalnessmap_fragment:EE,metalnessmap_pars_fragment:bE,morphinstance_vertex:TE,morphcolor_vertex:wE,morphnormal_vertex:AE,morphtarget_pars_vertex:CE,morphtarget_vertex:RE,normal_fragment_begin:PE,normal_fragment_maps:DE,normal_pars_fragment:LE,normal_pars_vertex:NE,normal_vertex:IE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:kE,opaque_fragment:zE,packing:VE,premultiplied_alpha_fragment:HE,project_vertex:GE,dithering_fragment:WE,dithering_pars_fragment:XE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:KE,shadowmap_vertex:ZE,shadowmask_pars_fragment:jE,skinbase_vertex:JE,skinning_pars_vertex:QE,skinning_vertex:tb,skinnormal_vertex:eb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:rb,tonemapping_pars_fragment:sb,transmission_fragment:ab,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:fb,background_vert:hb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:xb,depth_frag:vb,distance_vert:yb,distance_frag:Sb,equirect_vert:Mb,equirect_frag:Eb,linedashed_vert:bb,linedashed_frag:Tb,meshbasic_vert:wb,meshbasic_frag:Ab,meshlambert_vert:Cb,meshlambert_frag:Rb,meshmatcap_vert:Pb,meshmatcap_frag:Db,meshnormal_vert:Lb,meshnormal_frag:Nb,meshphong_vert:Ib,meshphong_frag:Fb,meshphysical_vert:Ub,meshphysical_frag:Ob,meshtoon_vert:Bb,meshtoon_frag:kb,points_vert:zb,points_frag:Vb,shadow_vert:Hb,shadow_frag:Gb,sprite_vert:Wb,sprite_frag:Xb},_t={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Xi={basic:{uniforms:Cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new _e(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Cn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Cn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new _e(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Cn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Cn([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Cn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Cn([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Cn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Cn([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Cn([_t.common,_t.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Cn([_t.lights,_t.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Xi.physical={uniforms:Cn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ql={r:0,b:0,g:0},hs=new Pr,$b=new $e;function Yb(i,t,e,n,r,s,a){const o=new _e(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const M=p(x);M===null?g(o,l):M&&M.isColor&&(g(M,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const M=p(v);M&&(M.isCubeTexture||M.mapping===Mu)?(u===void 0&&(u=new Dr(new xl(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Wa(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hs.copy(v.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($b.makeRotationFromEuler(hs)),u.material.toneMapped=fe.getTransfer(M.colorSpace)!==ye,(f!==M||h!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Dr(new bu(2,2),new Bi({name:"BackgroundMaterial",uniforms:Wa(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=fe.getTransfer(M.colorSpace)!==ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(Ql,Rx(i)),n.buffers.color.setClear(Ql.r,Ql.g,Ql.b,v,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:_,addToRenderList:m,dispose:S}}function qb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(b,R,D,I,O){let F=!1;const z=f(I,D,R);s!==z&&(s=z,c(s.object)),F=d(b,I,D,O),F&&p(b,I,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(b,R,D,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,R,D){const I=D.wireframe===!0;let O=n[b.id];O===void 0&&(O={},n[b.id]=O);let F=O[R.id];F===void 0&&(F={},O[R.id]=F);let z=F[I];return z===void 0&&(z=h(l()),F[I]=z),z}function h(b){const R=[],D=[],I=[];for(let O=0;O<e;O++)R[O]=0,D[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:I,object:b,attributes:{},index:null}}function d(b,R,D,I){const O=s.attributes,F=R.attributes;let z=0;const U=D.getAttributes();for(const H in U)if(U[H].location>=0){const L=O[H];let j=F[H];if(j===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),L===void 0||L.attribute!==j||j&&L.data!==j.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function p(b,R,D,I){const O={},F=R.attributes;let z=0;const U=D.getAttributes();for(const H in U)if(U[H].location>=0){let L=F[H];L===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(L=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(L=b.instanceColor));const j={};j.attribute=L,L&&L.data&&(j.data=L.data),O[H]=j,z++}s.attributes=O,s.attributesNum=z,s.index=I}function _(){const b=s.newAttributes;for(let R=0,D=b.length;R<D;R++)b[R]=0}function m(b){g(b,0)}function g(b,R){const D=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;D[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),O[b]!==R&&(i.vertexAttribDivisor(b,R),O[b]=R)}function S(){const b=s.newAttributes,R=s.enabledAttributes;for(let D=0,I=R.length;D<I;D++)R[D]!==b[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function x(b,R,D,I,O,F,z){z===!0?i.vertexAttribIPointer(b,R,D,O,F):i.vertexAttribPointer(b,R,D,I,O,F)}function v(b,R,D,I){_();const O=I.attributes,F=D.getAttributes(),z=R.defaultAttributeValues;for(const U in F){const H=F[U];if(H.location>=0){let Z=O[U];if(Z===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const L=Z.normalized,j=Z.itemSize,Mt=t.get(Z);if(Mt===void 0)continue;const bt=Mt.buffer,Lt=Mt.type,At=Mt.bytesPerElement,q=Lt===i.INT||Lt===i.UNSIGNED_INT||Z.gpuType===yp;if(Z.isInterleavedBufferAttribute){const tt=Z.data,ut=tt.stride,Ct=Z.offset;if(tt.isInstancedInterleavedBuffer){for(let pt=0;pt<H.locationSize;pt++)g(H.location+pt,tt.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let pt=0;pt<H.locationSize;pt++)x(H.location+pt,j/H.locationSize,Lt,L,ut*At,(Ct+j/H.locationSize*pt)*At,q)}else{if(Z.isInstancedBufferAttribute){for(let tt=0;tt<H.locationSize;tt++)g(H.location+tt,Z.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let tt=0;tt<H.locationSize;tt++)m(H.location+tt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let tt=0;tt<H.locationSize;tt++)x(H.location+tt,j/H.locationSize,Lt,L,j*At,j/H.locationSize*tt*At,q)}}else if(z!==void 0){const L=z[U];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(H.location,L);break;case 3:i.vertexAttrib3fv(H.location,L);break;case 4:i.vertexAttrib4fv(H.location,L);break;default:i.vertexAttrib1fv(H.location,L)}}}}S()}function M(){A();for(const b in n){const R=n[b];for(const D in R){const I=R[D];for(const O in I)u(I[O].object),delete I[O];delete R[D]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const D in R){const I=R[D];for(const O in I)u(I[O].object),delete I[O];delete R[D]}delete n[b.id]}function T(b){for(const R in n){const D=n[R];if(D[b.id]===void 0)continue;const I=D[b.id];for(const O in I)u(I[O].object),delete I[O];delete D[b.id]}}function A(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:y,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Kb(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_]*h[_];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zb(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Oi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ji&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,maxSamples:M,samples:E}}function jb(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new xs,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let v=g.clippingState||null;l.value=v,v=u(p,h,x,d);for(let M=0;M!==x;++M)v[M]=e[M];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(f[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jb(i){let t=new WeakMap;function e(a,o){return o===Th?a.mapping=zs:o===wh&&(a.mapping=Va),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Th||o===wh)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lx(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const qr=4,rg=[.125,.215,.35,.446,.526,.582],Ss=20,Qb=256,uo=new Fx,sg=new _e;let Ef=null,bf=0,Tf=0,wf=!1;const tT=new $;class ag{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=tT}=s;Ef=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ef,bf,Tf),this._renderer.xr.enabled=wf,t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Va?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ef=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Cr,format:Oi,colorSpace:Ga,depthBuffer:!1},r=og(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eT(s)),this._blurMaterial=iT(s,t,e),this._ggxMaterial=nT(s,t,e)}return r}_compileMaterial(t){const e=new Dr(new ki,t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,r,s){const l=new Mi(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(sg),f.toneMapping=er,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dr(new xl,new wx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,g=!0):(m.color.copy(sg),g=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const M=this._cubeSize;ha(r,v*M,x>2?M:0,M,M),f.setRenderTarget(r),g&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===zs||t.mapping===Va;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-qr?n-p+qr:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,ha(s,m,g,3*_,2*_),r.setRenderTarget(s),r.render(o,uo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ha(t,m,g,3*_,2*_),r.setRenderTarget(t),r.render(o,uo)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&me("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ss-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Ss;m>Ss&&Zt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const g=[];let S=0;for(let T=0;T<Ss;++T){const A=T/_,y=Math.exp(-A*A/2);g.push(y),T===0?S+=y:T<m&&(S+=2*y)}for(let T=0;T<g.length;T++)g[T]=g[T]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=p,h.mipInt.value=x-n;const v=this._sizeLods[r],M=3*v*(r>x-qr?r-x+qr:0),E=4*(this._cubeSize-v);ha(e,M,E,3*v,2*v),l.setRenderTarget(e),l.render(f,uo)}}function eT(i){const t=[],e=[],n=[];let r=i;const s=i-qr+1+rg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-qr?l=rg[a-i+qr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,m=2,g=1,S=new Float32Array(_*p*d),x=new Float32Array(m*p*d),v=new Float32Array(g*p*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,A=E>2?0:-1,y=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];S.set(y,_*p*E),x.set(h,m*p*E);const b=[E,E,E,E,E,E];v.set(b,g*p*E)}const M=new ki;M.setAttribute("position",new Ri(S,_)),M.setAttribute("uv",new Ri(x,m)),M.setAttribute("faceIndex",new Ri(v,g)),n.push(new Dr(M,null)),r>qr&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function og(i,t,e){const n=new nr(i,t,e);return n.texture.mapping=Mu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function nT(i,t,e){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function iT(i,t,e){const n=new Float32Array(Ss),r=new $(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function lg(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function cg(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}function rT(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Th||l===wh,u=l===zs||l===Va;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new ag(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new ag(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&il("WebGLRenderer: "+n+" extension not supported."),r}}}function aT(i,t,e,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const M=S[x+0],E=S[x+1],T=S[x+2];h.push(M,E,E,T,T,M)}}else if(p!==void 0){const S=p.array;_=p.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const M=x+0,E=x+1,T=x+2;h.push(M,E,E,T,T,M)}}else return;const m=new(Sx(h)?Cx:Ax)(h,1);m.version=_;const g=s.get(f);g&&t.remove(g),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function oT(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),e.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,h*a,p),e.update(d,n,p))}function u(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];e.update(m,n,1)}function f(h,d,p,_){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/a,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,p);let g=0;for(let S=0;S<p;S++)g+=d[S]*_[S];e.update(g,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:me("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function cT(i,t,e){const n=new WeakMap,r=new We;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let M=o.attributes.position.count*v,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*E*4*f),A=new Mx(T,M,E,f);A.type=Ji,A.needsUpdate=!0;const y=v*4;for(let R=0;R<f;R++){const D=g[R],I=S[R],O=x[R],F=M*E*4*R;for(let z=0;z<D.count;z++){const U=z*y;p===!0&&(r.fromBufferAttribute(D,z),T[F+U+0]=r.x,T[F+U+1]=r.y,T[F+U+2]=r.z,T[F+U+3]=0),_===!0&&(r.fromBufferAttribute(I,z),T[F+U+4]=r.x,T[F+U+5]=r.y,T[F+U+6]=r.z,T[F+U+7]=0),m===!0&&(r.fromBufferAttribute(O,z),T[F+U+8]=r.x,T[F+U+9]=r.y,T[F+U+10]=r.z,T[F+U+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Ee(M,E)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function uT(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const fT={[ax]:"LINEAR_TONE_MAPPING",[ox]:"REINHARD_TONE_MAPPING",[lx]:"CINEON_TONE_MAPPING",[cx]:"ACES_FILMIC_TONE_MAPPING",[fx]:"AGX_TONE_MAPPING",[hx]:"NEUTRAL_TONE_MAPPING",[ux]:"CUSTOM_TONE_MAPPING"};function hT(i,t,e,n,r){const s=new nr(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new nr(t,e,{type:Cr,depthBuffer:!1,stencilBuffer:!1}),o=new ki;o.setAttribute("position",new Tr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Tr([0,2,0,0,2,0],2));const l=new o1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Dr(o,l),u=new Fx(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,_=null,m=[],g=!1;this.setSize=function(S,x){s.setSize(S,x),a.setSize(S,x);for(let v=0;v<m.length;v++){const M=m[v];M.setSize&&M.setSize(S,x)}},this.setEffects=function(S){m=S,g=m.length>0&&m[0].isRenderPass===!0;const x=s.width,v=s.height;for(let M=0;M<m.length;M++){const E=m[M];E.setSize&&E.setSize(x,v)}},this.begin=function(S,x){if(d||S.toneMapping===er&&m.length===0)return!1;if(_=x,x!==null){const v=x.width,M=x.height;(s.width!==v||s.height!==M)&&this.setSize(v,M)}return g===!1&&S.setRenderTarget(s),p=S.toneMapping,S.toneMapping=er,!0},this.hasRenderPass=function(){return g},this.end=function(S,x){S.toneMapping=p,d=!0;let v=s,M=a;for(let E=0;E<m.length;E++){const T=m[E];if(T.enabled!==!1&&(T.render(S,M,v,x),T.needsSwap!==!1)){const A=v;v=M,M=A}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,l.defines={},fe.getTransfer(f)===ye&&(l.defines.SRGB_TRANSFER="");const E=fT[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(_),S.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ox=new In,cd=new rl(1,1),Bx=new Mx,kx=new FM,zx=new Dx,ug=[],fg=[],hg=new Float32Array(16),dg=new Float32Array(9),pg=new Float32Array(4);function Ja(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ug[r];if(s===void 0&&(s=new Float32Array(r),ug[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wu(i,t){let e=fg[t];e===void 0&&(e=new Int32Array(t),fg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function mT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function gT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function _T(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;pg.set(n),i.uniformMatrix2fv(this.addr,!1,pg),rn(e,n)}}function xT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;dg.set(n),i.uniformMatrix3fv(this.addr,!1,dg),rn(e,n)}}function vT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;hg.set(n),i.uniformMatrix4fv(this.addr,!1,hg),rn(e,n)}}function yT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ST(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function MT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function ET(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function bT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function TT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function wT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function AT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function CT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cd.compareFunction=e.isReversedDepthBuffer()?Ap:wp,s=cd):s=Ox,e.setTexture2D(t||s,r)}function RT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||kx,r)}function PT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||zx,r)}function DT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Bx,r)}function LT(i){switch(i){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return xT;case 35676:return vT;case 5124:case 35670:return yT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return wT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return DT}}function NT(i,t){i.uniform1fv(this.addr,t)}function IT(i,t){const e=Ja(t,this.size,2);i.uniform2fv(this.addr,e)}function FT(i,t){const e=Ja(t,this.size,3);i.uniform3fv(this.addr,e)}function UT(i,t){const e=Ja(t,this.size,4);i.uniform4fv(this.addr,e)}function OT(i,t){const e=Ja(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function BT(i,t){const e=Ja(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kT(i,t){const e=Ja(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zT(i,t){i.uniform1iv(this.addr,t)}function VT(i,t){i.uniform2iv(this.addr,t)}function HT(i,t){i.uniform3iv(this.addr,t)}function GT(i,t){i.uniform4iv(this.addr,t)}function WT(i,t){i.uniform1uiv(this.addr,t)}function XT(i,t){i.uniform2uiv(this.addr,t)}function $T(i,t){i.uniform3uiv(this.addr,t)}function YT(i,t){i.uniform4uiv(this.addr,t)}function qT(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=cd:a=Ox;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function KT(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||kx,s[a])}function ZT(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||zx,s[a])}function jT(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Bx,s[a])}function JT(i){switch(i){case 5126:return NT;case 35664:return IT;case 35665:return FT;case 35666:return UT;case 35674:return OT;case 35675:return BT;case 35676:return kT;case 5124:case 35670:return zT;case 35667:case 35671:return VT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return WT;case 36294:return XT;case 36295:return $T;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return jT}}class QT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=LT(e.type)}}class tw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=JT(e.type)}}class ew{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function mg(i,t){i.seq.push(t),i.map[t.id]=t}function nw(i,t,e){const n=i.name,r=n.length;for(Af.lastIndex=0;;){const s=Af.exec(n),a=Af.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mg(e,c===void 0?new QT(o,i,t):new tw(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ew(o),mg(e,f)),e=f}}}class Cc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);nw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function gg(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const iw=37297;let rw=0;function sw(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const _g=new Jt;function aw(i){fe._getMatrix(_g,fe.workingColorSpace,i);const t=`mat3( ${_g.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case qc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xg(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+sw(i.getShaderSource(t),o)}else return s}function ow(i,t){const e=aw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const lw={[ax]:"Linear",[ox]:"Reinhard",[lx]:"Cineon",[cx]:"ACESFilmic",[fx]:"AgX",[hx]:"Neutral",[ux]:"Custom"};function cw(i,t){const e=lw[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tc=new $;function uw(){fe.getLuminanceCoefficients(tc);const i=tc.x.toFixed(4),t=tc.y.toFixed(4),e=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function hw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Eo(i){return i!==""}function vg(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(i){return i.replace(pw,gw)}const mw=new Map;function gw(i,t){let e=te[t];if(e===void 0){const n=mw.get(t);if(n!==void 0)e=te[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ud(e)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(i){return i.replace(_w,xw)}function xw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const vw={[Ec]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function yw(i){return vw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sw={[zs]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function Mw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ew={[Va]:"ENVMAP_MODE_REFRACTION"};function bw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Tw={[sx]:"ENVMAP_BLENDING_MULTIPLY",[mM]:"ENVMAP_BLENDING_MIX",[gM]:"ENVMAP_BLENDING_ADD"};function ww(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Tw[i.combine]||"ENVMAP_BLENDING_NONE"}function Aw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cw(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=yw(e),c=Mw(e),u=bw(e),f=ww(e),h=Aw(e),d=fw(e),p=hw(s),_=r.createProgram();let m,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Eo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Eo).join(`
`),g.length>0&&(g+=`
`)):(m=[Mg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),g=[Mg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==er?"#define TONE_MAPPING":"",e.toneMapping!==er?te.tonemapping_pars_fragment:"",e.toneMapping!==er?cw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,ow("linearToOutputTexel",e.outputColorSpace),uw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),a=ud(a),a=vg(a,e),a=yg(a,e),o=ud(o),o=vg(o,e),o=yg(o,e),a=Sg(a),o=Sg(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Um?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=S+m+a,v=S+g+o,M=gg(r,r.VERTEX_SHADER,x),E=gg(r,r.FRAGMENT_SHADER,v);r.attachShader(_,M),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",I=r.getShaderInfoLog(M)||"",O=r.getShaderInfoLog(E)||"",F=D.trim(),z=I.trim(),U=O.trim();let H=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,E);else{const L=xg(r,M,"vertex"),j=xg(r,E,"fragment");me("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+L+`
`+j)}else F!==""?Zt("WebGLProgram: Program Info Log:",F):(z===""||U==="")&&(Z=!1);Z&&(R.diagnostics={runnable:H,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:U,prefix:g}})}r.deleteShader(M),r.deleteShader(E),A=new Cc(r,_),y=dw(r,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,iw)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rw++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let Rw=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dw(t),e.set(t,n)),n}}class Dw{constructor(t){this.id=Rw++,this.code=t,this.usedTimes=0}}function Lw(i,t,e,n,r,s,a){const o=new bx,l=new Pw,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,R,D,I){const O=D.fog,F=I.geometry,z=y.isMeshStandardMaterial?D.environment:null,U=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),H=U&&U.mapping===Mu?U.image.height:null,Z=p[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&Zt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const L=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,j=L!==void 0?L.length:0;let Mt=0;F.morphAttributes.position!==void 0&&(Mt=1),F.morphAttributes.normal!==void 0&&(Mt=2),F.morphAttributes.color!==void 0&&(Mt=3);let bt,Lt,At,q;if(Z){const vt=Xi[Z];bt=vt.vertexShader,Lt=vt.fragmentShader}else bt=y.vertexShader,Lt=y.fragmentShader,l.update(y),At=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const tt=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Ct=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,Ft=!!y.map,ae=!!y.matcap,xt=!!U,zt=!!y.aoMap,Yt=!!y.lightMap,Bt=!!y.bumpMap,W=!!y.normalMap,N=!!y.displacementMap,Nt=!!y.emissiveMap,Ut=!!y.metalnessMap,Vt=!!y.roughnessMap,st=y.anisotropy>0,P=y.clearcoat>0,w=y.dispersion>0,k=y.iridescence>0,J=y.sheen>0,Q=y.transmission>0,K=st&&!!y.anisotropyMap,Et=P&&!!y.clearcoatMap,at=P&&!!y.clearcoatNormalMap,Rt=P&&!!y.clearcoatRoughnessMap,wt=k&&!!y.iridescenceMap,rt=k&&!!y.iridescenceThicknessMap,ot=J&&!!y.sheenColorMap,Tt=J&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,lt=!!y.specularColorMap,$t=!!y.specularIntensityMap,B=Q&&!!y.transmissionMap,ht=Q&&!!y.thicknessMap,it=!!y.gradientMap,dt=!!y.alphaMap,nt=y.alphaTest>0,et=!!y.alphaHash,ft=!!y.extensions;let Ht=er;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const he={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:bt,fragmentShader:Lt,defines:y.defines,customVertexShaderID:At,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:pt,batchingColor:pt&&I._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&I.instanceColor!==null,instancingMorph:Ct&&I.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ga,alphaToCoverage:!!y.alphaToCoverage,map:Ft,matcap:ae,envMap:xt,envMapMode:xt&&U.mapping,envMapCubeUVHeight:H,aoMap:zt,lightMap:Yt,bumpMap:Bt,normalMap:W,displacementMap:N,emissiveMap:Nt,normalMapObjectSpace:W&&y.normalMapType===yM,normalMapTangentSpace:W&&y.normalMapType===vM,metalnessMap:Ut,roughnessMap:Vt,anisotropy:st,anisotropyMap:K,clearcoat:P,clearcoatMap:Et,clearcoatNormalMap:at,clearcoatRoughnessMap:Rt,dispersion:w,iridescence:k,iridescenceMap:wt,iridescenceThicknessMap:rt,sheen:J,sheenColorMap:ot,sheenRoughnessMap:Tt,specularMap:Pt,specularColorMap:lt,specularIntensityMap:$t,transmission:Q,transmissionMap:B,thicknessMap:ht,gradientMap:it,opaque:y.transparent===!1&&y.blending===Ca&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:nt,alphaHash:et,combine:y.combine,mapUv:Ft&&_(y.map.channel),aoMapUv:zt&&_(y.aoMap.channel),lightMapUv:Yt&&_(y.lightMap.channel),bumpMapUv:Bt&&_(y.bumpMap.channel),normalMapUv:W&&_(y.normalMap.channel),displacementMapUv:N&&_(y.displacementMap.channel),emissiveMapUv:Nt&&_(y.emissiveMap.channel),metalnessMapUv:Ut&&_(y.metalnessMap.channel),roughnessMapUv:Vt&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:Et&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(y.sheenRoughnessMap.channel),specularMapUv:Pt&&_(y.specularMap.channel),specularColorMapUv:lt&&_(y.specularColorMap.channel),specularIntensityMapUv:$t&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:ht&&_(y.thicknessMap.channel),alphaMapUv:dt&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(W||st),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ft||dt),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ut,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Mt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:Nt&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_r,flipSided:y.side===Yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&y.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function g(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function S(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const b=p[y.type];let R;if(b){const D=Xi[b];R=qM.clone(D.uniforms)}else R=y.uniforms;return R}function M(y,b){let R=f.get(b);return R!==void 0?++R.usedTimes:(R=new Cw(i,b,y,s),u.push(R),f.set(b,R)),R}function E(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function T(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:A}}function Nw(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Iw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Eg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bg(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,h,d,p,_,m){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:p,renderOrder:f.renderOrder,z:_,group:m},i[t]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=p,g.renderOrder=f.renderOrder,g.z=_,g.group=m),t++,g}function o(f,h,d,p,_,m){const g=a(f,h,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?r.push(g):e.push(g)}function l(f,h,d,p,_,m){const g=a(f,h,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?r.unshift(g):e.unshift(g)}function c(f,h){e.length>1&&e.sort(f||Iw),n.length>1&&n.sort(h||Eg),r.length>1&&r.sort(h||Eg)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Fw(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new bg,i.set(n,[a])):r>=s.length?(a=new bg,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new _e};break;case"SpotLight":e={position:new $,direction:new $,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function Ow(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Bw=0;function kw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zw(i){const t=new Uw,e=Ow(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new $e,a=new $e;function o(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,S=0,x=0,v=0,M=0,E=0,T=0;c.sort(kw);for(let y=0,b=c.length;y<b;y++){const R=c[y],D=R.color,I=R.intensity,O=R.distance;let F=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ha?F=R.shadow.map.texture:F=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*I,f+=D.g*I,h+=D.b*I;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],I);T++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,H=e.get(R);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=R.shadow.matrix,S++}n.directional[d]=z,d++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(D).multiplyScalar(I),z.distance=O,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const U=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,U.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=U.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=F,v++}_++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(D).multiplyScalar(I),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const U=R.shadow,H=e.get(R);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,H.shadowCameraNear=U.camera.near,H.shadowCameraFar=U.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=R.shadow.matrix,x++}n.point[p]=z,p++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(I),z.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[g]=z,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const A=n.hash;(A.directionalLength!==d||A.pointLength!==p||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==g||A.numDirectionalShadows!==S||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==M||A.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,A.directionalLength=d,A.pointLength=p,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=g,A.numDirectionalShadows=S,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=M,A.numLightProbes=T,n.version=Bw++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const x=c[g];if(x.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Tg(i){const t=new zw(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Vw(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Tg(i),t.set(r,[o])):s>=a.length?(o=new Tg(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`,Ww=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Xw=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],wg=new $e,fo=new $,Cf=new $;function $w(i,t,e){let n=new Nx;const r=new Ee,s=new Ee,a=new We,o=new l1,l=new c1,c={},u=e.maxTextureSize,f={[ns]:Yn,[Yn]:ns,[_r]:_r},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Hw,fragmentShader:Gw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new ki;p.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dr(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let g=this.type;this.render=function(E,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===ZS&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Ec);const y=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Er),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=g!==this.type;I&&T.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(F=>F.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,F=E.length;O<F;O++){const z=E[O],U=z.shadow;if(U===void 0){Zt("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const H=U.getFrameExtents();if(r.multiply(H),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,U.mapSize.y=s.y)),U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Mo){if(z.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new nr(r.x,r.y,{format:Ha,type:Cr,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new rl(r.x,r.y,Ji),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=Rr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn}else{z.isPointLight?(U.map=new Lx(r.x),U.map.depthTexture=new a1(r.x,sr)):(U.map=new nr(r.x,r.y),U.map.depthTexture=new rl(r.x,r.y,sr)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=Rr;const L=i.state.buffers.depth.getReversed();this.type===Ec?(U.map.depthTexture.compareFunction=L?Ap:wp,U.map.depthTexture.minFilter=Mn,U.map.depthTexture.magFilter=Mn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn)}U.camera.updateProjectionMatrix()}const Z=U.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Z;L++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,L),i.clear();else{L===0&&(i.setRenderTarget(U.map),i.clear());const j=U.getViewport(L);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),D.viewport(a)}if(z.isPointLight){const j=U.camera,Mt=U.matrix,bt=z.distance||j.far;bt!==j.far&&(j.far=bt,j.updateProjectionMatrix()),fo.setFromMatrixPosition(z.matrixWorld),j.position.copy(fo),Cf.copy(j.position),Cf.add(Ww[L]),j.up.copy(Xw[L]),j.lookAt(Cf),j.updateMatrixWorld(),Mt.makeTranslation(-fo.x,-fo.y,-fo.z),wg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),U._frustum.setFromProjectionMatrix(wg,j.coordinateSystem,j.reversedDepth)}else U.updateMatrices(z);n=U.getFrustum(),v(T,A,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===Mo&&S(U,A),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(y,b,R)};function S(E,T){const A=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new nr(r.x,r.y,{format:Ha,type:Cr})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,A,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,A,d,_,null)}function x(E,T,A,y){let b=null;const R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)b=R;else if(b=A.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=b.uuid,I=T.uuid;let O=c[D];O===void 0&&(O={},c[D]=O);let F=O[I];F===void 0&&(F=b.clone(),O[I]=F,T.addEventListener("dispose",M)),b=F}if(b.visible=T.visible,b.wireframe=T.wireframe,y===Mo?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=i.properties.get(b);D.light=A}return b}function v(E,T,A,y,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Mo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const I=t.update(E),O=E.material;if(Array.isArray(O)){const F=I.groups;for(let z=0,U=F.length;z<U;z++){const H=F[z],Z=O[H.materialIndex];if(Z&&Z.visible){const L=x(E,Z,y,b);E.onBeforeShadow(i,E,T,A,I,L,H),i.renderBufferDirect(A,null,I,L,E,H),E.onAfterShadow(i,E,T,A,I,L,H)}}}else if(O.visible){const F=x(E,O,y,b);E.onBeforeShadow(i,E,T,A,I,F,null),i.renderBufferDirect(A,null,I,F,E,null),E.onAfterShadow(i,E,T,A,I,F,null)}}const D=E.children;for(let I=0,O=D.length;I<O;I++)v(D[I],T,A,y,b)}function M(E){E.target.removeEventListener("dispose",M);for(const A in c){const y=c[A],b=E.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const Yw={[xh]:vh,[yh]:Eh,[Sh]:bh,[za]:Mh,[vh]:xh,[Eh]:yh,[bh]:Sh,[Mh]:za};function qw(i,t){function e(){let B=!1;const ht=new We;let it=null;const dt=new We(0,0,0,0);return{setMask:function(nt){it!==nt&&!B&&(i.colorMask(nt,nt,nt,nt),it=nt)},setLocked:function(nt){B=nt},setClear:function(nt,et,ft,Ht,he){he===!0&&(nt*=Ht,et*=Ht,ft*=Ht),ht.set(nt,et,ft,Ht),dt.equals(ht)===!1&&(i.clearColor(nt,et,ft,Ht),dt.copy(ht))},reset:function(){B=!1,it=null,dt.set(-1,0,0,0)}}}function n(){let B=!1,ht=!1,it=null,dt=null,nt=null;return{setReversed:function(et){if(ht!==et){const ft=t.get("EXT_clip_control");et?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),ht=et;const Ht=nt;nt=null,this.setClear(Ht)}},getReversed:function(){return ht},setTest:function(et){et?tt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(et){it!==et&&!B&&(i.depthMask(et),it=et)},setFunc:function(et){if(ht&&(et=Yw[et]),dt!==et){switch(et){case xh:i.depthFunc(i.NEVER);break;case vh:i.depthFunc(i.ALWAYS);break;case yh:i.depthFunc(i.LESS);break;case za:i.depthFunc(i.LEQUAL);break;case Sh:i.depthFunc(i.EQUAL);break;case Mh:i.depthFunc(i.GEQUAL);break;case Eh:i.depthFunc(i.GREATER);break;case bh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=et}},setLocked:function(et){B=et},setClear:function(et){nt!==et&&(ht&&(et=1-et),i.clearDepth(et),nt=et)},reset:function(){B=!1,it=null,dt=null,nt=null,ht=!1}}}function r(){let B=!1,ht=null,it=null,dt=null,nt=null,et=null,ft=null,Ht=null,he=null;return{setTest:function(vt){B||(vt?tt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(vt){ht!==vt&&!B&&(i.stencilMask(vt),ht=vt)},setFunc:function(vt,It,jt){(it!==vt||dt!==It||nt!==jt)&&(i.stencilFunc(vt,It,jt),it=vt,dt=It,nt=jt)},setOp:function(vt,It,jt){(et!==vt||ft!==It||Ht!==jt)&&(i.stencilOp(vt,It,jt),et=vt,ft=It,Ht=jt)},setLocked:function(vt){B=vt},setClear:function(vt){he!==vt&&(i.clearStencil(vt),he=vt)},reset:function(){B=!1,ht=null,it=null,dt=null,nt=null,et=null,ft=null,Ht=null,he=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,S=null,x=null,v=null,M=null,E=null,T=new _e(0,0,0),A=0,y=!1,b=null,R=null,D=null,I=null,O=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,U=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=U>=1):H.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=U>=2);let Z=null,L={};const j=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),bt=new We().fromArray(j),Lt=new We().fromArray(Mt);function At(B,ht,it,dt){const nt=new Uint8Array(4),et=i.createTexture();i.bindTexture(B,et),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<it;ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(ht+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return et}const q={};q[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(za),Bt(!1),W(Pm),tt(i.CULL_FACE),zt(Er);function tt(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function ut(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ct(B,ht){return f[B]!==ht?(i.bindFramebuffer(B,ht),f[B]=ht,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function pt(B,ht){let it=d,dt=!1;if(B){it=h.get(ht),it===void 0&&(it=[],h.set(ht,it));const nt=B.textures;if(it.length!==nt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let et=0,ft=nt.length;et<ft;et++)it[et]=i.COLOR_ATTACHMENT0+et;it.length=nt.length,dt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,dt=!0);dt&&i.drawBuffers(it)}function Ft(B){return p!==B?(i.useProgram(B),p=B,!0):!1}const ae={[ys]:i.FUNC_ADD,[JS]:i.FUNC_SUBTRACT,[QS]:i.FUNC_REVERSE_SUBTRACT};ae[tM]=i.MIN,ae[eM]=i.MAX;const xt={[nM]:i.ZERO,[iM]:i.ONE,[rM]:i.SRC_COLOR,[gh]:i.SRC_ALPHA,[uM]:i.SRC_ALPHA_SATURATE,[lM]:i.DST_COLOR,[aM]:i.DST_ALPHA,[sM]:i.ONE_MINUS_SRC_COLOR,[_h]:i.ONE_MINUS_SRC_ALPHA,[cM]:i.ONE_MINUS_DST_COLOR,[oM]:i.ONE_MINUS_DST_ALPHA,[fM]:i.CONSTANT_COLOR,[hM]:i.ONE_MINUS_CONSTANT_COLOR,[dM]:i.CONSTANT_ALPHA,[pM]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(B,ht,it,dt,nt,et,ft,Ht,he,vt){if(B===Er){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),B!==jS){if(B!==m||vt!==y){if((g!==ys||v!==ys)&&(i.blendEquation(i.FUNC_ADD),g=ys,v=ys),vt)switch(B){case Ca:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dm:i.blendFunc(i.ONE,i.ONE);break;case Lm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",B);break}else switch(B){case Ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lm:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nm:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",B);break}S=null,x=null,M=null,E=null,T.set(0,0,0),A=0,m=B,y=vt}return}nt=nt||ht,et=et||it,ft=ft||dt,(ht!==g||nt!==v)&&(i.blendEquationSeparate(ae[ht],ae[nt]),g=ht,v=nt),(it!==S||dt!==x||et!==M||ft!==E)&&(i.blendFuncSeparate(xt[it],xt[dt],xt[et],xt[ft]),S=it,x=dt,M=et,E=ft),(Ht.equals(T)===!1||he!==A)&&(i.blendColor(Ht.r,Ht.g,Ht.b,he),T.copy(Ht),A=he),m=B,y=!1}function Yt(B,ht){B.side===_r?ut(i.CULL_FACE):tt(i.CULL_FACE);let it=B.side===Yn;ht&&(it=!it),Bt(it),B.blending===Ca&&B.transparent===!1?zt(Er):zt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const dt=B.stencilWrite;o.setTest(dt),dt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function W(B){B!==qS?(tt(i.CULL_FACE),B!==R&&(B===Pm?i.cullFace(i.BACK):B===KS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),R=B}function N(B){B!==D&&(z&&i.lineWidth(B),D=B)}function Nt(B,ht,it){B?(tt(i.POLYGON_OFFSET_FILL),(I!==ht||O!==it)&&(i.polygonOffset(ht,it),I=ht,O=it)):ut(i.POLYGON_OFFSET_FILL)}function Ut(B){B?tt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Vt(B){B===void 0&&(B=i.TEXTURE0+F-1),Z!==B&&(i.activeTexture(B),Z=B)}function st(B,ht,it){it===void 0&&(Z===null?it=i.TEXTURE0+F-1:it=Z);let dt=L[it];dt===void 0&&(dt={type:void 0,texture:void 0},L[it]=dt),(dt.type!==B||dt.texture!==ht)&&(Z!==it&&(i.activeTexture(it),Z=it),i.bindTexture(B,ht||q[B]),dt.type=B,dt.texture=ht)}function P(){const B=L[Z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function J(){try{i.texSubImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function Q(){try{i.texSubImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function at(){try{i.texStorage2D(...arguments)}catch(B){me("WebGLState:",B)}}function Rt(){try{i.texStorage3D(...arguments)}catch(B){me("WebGLState:",B)}}function wt(){try{i.texImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function rt(){try{i.texImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function ot(B){bt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),bt.copy(B))}function Tt(B){Lt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Lt.copy(B))}function Pt(B,ht){let it=c.get(ht);it===void 0&&(it=new WeakMap,c.set(ht,it));let dt=it.get(B);dt===void 0&&(dt=i.getUniformBlockIndex(ht,B.name),it.set(B,dt))}function lt(B,ht){const dt=c.get(ht).get(B);l.get(ht)!==dt&&(i.uniformBlockBinding(ht,dt,B.__bindingPointIndex),l.set(ht,dt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,L={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,S=null,x=null,v=null,M=null,E=null,T=new _e(0,0,0),A=0,y=!1,b=null,R=null,D=null,I=null,O=null,bt.set(0,0,i.canvas.width,i.canvas.height),Lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:ut,bindFramebuffer:Ct,drawBuffers:pt,useProgram:Ft,setBlending:zt,setMaterial:Yt,setFlipSided:Bt,setCullFace:W,setLineWidth:N,setPolygonOffset:Nt,setScissorTest:Ut,activeTexture:Vt,bindTexture:st,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:k,texImage2D:wt,texImage3D:rt,updateUBOMapping:Pt,uniformBlockBinding:lt,texStorage2D:at,texStorage3D:Rt,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:Et,scissor:ot,viewport:Tt,reset:$t}}function Kw(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return d?new OffscreenCanvas(P,w):Zc("canvas")}function _(P,w,k){let J=1;const Q=st(P);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(J*Q.width),Et=Math.floor(J*Q.height);f===void 0&&(f=p(K,Et));const at=w?p(K,Et):f;return at.width=K,at.height=Et,at.getContext("2d").drawImage(P,0,0,K,Et),Zt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Et+")."),at}else return"data"in P&&Zt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,w,k,J,Q=!1){if(P!==null){if(i[P]!==void 0)return i[P];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=w;if(w===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8)),w===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),w===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8)),w===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),w===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),w===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),w===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),w===i.RGBA){const Et=Q?qc:fe.getTransfer(J);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Et===ye?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(P,w){let k;return P?w===null||w===sr||w===nl?k=i.DEPTH24_STENCIL8:w===Ji?k=i.DEPTH32F_STENCIL8:w===el&&(k=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===sr||w===nl?k=i.DEPTH_COMPONENT24:w===Ji?k=i.DEPTH_COMPONENT32F:w===el&&(k=i.DEPTH_COMPONENT16),k}function M(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){const w=P.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&u.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),b(w)}function A(P){const w=n.get(P);if(w.__webglInit===void 0)return;const k=P.source,J=h.get(k);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(P),Object.keys(J).length===0&&h.delete(k)}n.remove(P)}function y(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const k=P.source,J=h.get(k);delete J[w.__cacheKey],a.memory.textures--}function b(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=P.textures;for(let J=0,Q=k.length;J<Q;J++){const K=n.get(k[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(P)}let R=0;function D(){R=0}function I(){const P=R;return P>=r.maxTextures&&Zt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),R+=1,P}function O(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function F(P,w){const k=n.get(P);if(P.isVideoTexture&&Ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const J=P.image;if(J===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,P,w);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+w)}function z(P,w){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){q(k,P,w);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+w)}function U(P,w){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){q(k,P,w);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+w)}function H(P,w){const k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){tt(k,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+w)}const Z={[Ah]:i.REPEAT,[Sr]:i.CLAMP_TO_EDGE,[Ch]:i.MIRRORED_REPEAT},L={[hn]:i.NEAREST,[_M]:i.NEAREST_MIPMAP_NEAREST,[Ll]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ju]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},j={[SM]:i.NEVER,[wM]:i.ALWAYS,[MM]:i.LESS,[wp]:i.LEQUAL,[EM]:i.EQUAL,[Ap]:i.GEQUAL,[bM]:i.GREATER,[TM]:i.NOTEQUAL};function Mt(P,w){if(w.type===Ji&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===ju||w.magFilter===Ll||w.magFilter===bs||w.minFilter===Mn||w.minFilter===ju||w.minFilter===Ll||w.minFilter===bs)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Z[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Z[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Z[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,L[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hn||w.minFilter!==Ll&&w.minFilter!==bs||w.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function bt(P,w){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let Q=h.get(J);Q===void 0&&(Q={},h.set(J,Q));const K=O(w);if(K!==P.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[K].usedTimes++;const Et=Q[P.__cacheKey];Et!==void 0&&(Q[P.__cacheKey].usedTimes--,Et.usedTimes===0&&y(w)),P.__cacheKey=K,P.__webglTexture=Q[K].texture}return k}function Lt(P,w,k){return Math.floor(Math.floor(P/k)/w)}function At(P,w,k,J){const K=P.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,k,J,w.data);else{K.sort((rt,ot)=>rt.start-ot.start);let Et=0;for(let rt=1;rt<K.length;rt++){const ot=K[Et],Tt=K[rt],Pt=ot.start+ot.count,lt=Lt(Tt.start,w.width,4),$t=Lt(ot.start,w.width,4);Tt.start<=Pt+1&&lt===$t&&Lt(Tt.start+Tt.count-1,w.width,4)===lt?ot.count=Math.max(ot.count,Tt.start+Tt.count-ot.start):(++Et,K[Et]=Tt)}K.length=Et+1;const at=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),wt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let rt=0,ot=K.length;rt<ot;rt++){const Tt=K[rt],Pt=Math.floor(Tt.start/4),lt=Math.ceil(Tt.count/4),$t=Pt%w.width,B=Math.floor(Pt/w.width),ht=lt,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,$t,B,ht,it,k,J,w.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function q(P,w,k){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const Q=bt(P,w),K=w.source;e.bindTexture(J,P.__webglTexture,i.TEXTURE0+k);const Et=n.get(K);if(K.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const at=fe.getPrimaries(fe.workingColorSpace),Rt=w.colorSpace===Hr?null:fe.getPrimaries(w.colorSpace),wt=w.colorSpace===Hr||at===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let rt=_(w.image,!1,r.maxTextureSize);rt=Vt(w,rt);const ot=s.convert(w.format,w.colorSpace),Tt=s.convert(w.type);let Pt=x(w.internalFormat,ot,Tt,w.colorSpace,w.isVideoTexture);Mt(J,w);let lt;const $t=w.mipmaps,B=w.isVideoTexture!==!0,ht=Et.__version===void 0||Q===!0,it=K.dataReady,dt=M(w,rt);if(w.isDepthTexture)Pt=v(w.format===Ts,w.type),ht&&(B?e.texStorage2D(i.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,rt.width,rt.height,0,ot,Tt,null));else if(w.isDataTexture)if($t.length>0){B&&ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,$t[0].width,$t[0].height);for(let nt=0,et=$t.length;nt<et;nt++)lt=$t[nt],B?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(i.TEXTURE_2D,nt,Pt,lt.width,lt.height,0,ot,Tt,lt.data);w.generateMipmaps=!1}else B?(ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,rt.width,rt.height),it&&At(w,rt,ot,Tt)):e.texImage2D(i.TEXTURE_2D,0,Pt,rt.width,rt.height,0,ot,Tt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Pt,$t[0].width,$t[0].height,rt.depth);for(let nt=0,et=$t.length;nt<et;nt++)if(lt=$t[nt],w.format!==Oi)if(ot!==null)if(B){if(it)if(w.layerUpdates.size>0){const ft=ig(lt.width,lt.height,w.format,w.type);for(const Ht of w.layerUpdates){const he=lt.data.subarray(Ht*ft/lt.data.BYTES_PER_ELEMENT,(Ht+1)*ft/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ht,lt.width,lt.height,1,ot,he)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,rt.depth,ot,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Pt,lt.width,lt.height,rt.depth,0,lt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,rt.depth,ot,Tt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Pt,lt.width,lt.height,rt.depth,0,ot,Tt,lt.data)}else{B&&ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,$t[0].width,$t[0].height);for(let nt=0,et=$t.length;nt<et;nt++)lt=$t[nt],w.format!==Oi?ot!==null?B?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Pt,lt.width,lt.height,0,lt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(i.TEXTURE_2D,nt,Pt,lt.width,lt.height,0,ot,Tt,lt.data)}else if(w.isDataArrayTexture)if(B){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Pt,rt.width,rt.height,rt.depth),it)if(w.layerUpdates.size>0){const nt=ig(rt.width,rt.height,w.format,w.type);for(const et of w.layerUpdates){const ft=rt.data.subarray(et*nt/rt.data.BYTES_PER_ELEMENT,(et+1)*nt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,ot,Tt,ft)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ot,Tt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,ot,Tt,rt.data);else if(w.isData3DTexture)B?(ht&&e.texStorage3D(i.TEXTURE_3D,dt,Pt,rt.width,rt.height,rt.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ot,Tt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,ot,Tt,rt.data);else if(w.isFramebufferTexture){if(ht)if(B)e.texStorage2D(i.TEXTURE_2D,dt,Pt,rt.width,rt.height);else{let nt=rt.width,et=rt.height;for(let ft=0;ft<dt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Pt,nt,et,0,ot,Tt,null),nt>>=1,et>>=1}}else if($t.length>0){if(B&&ht){const nt=st($t[0]);e.texStorage2D(i.TEXTURE_2D,dt,Pt,nt.width,nt.height)}for(let nt=0,et=$t.length;nt<et;nt++)lt=$t[nt],B?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ot,Tt,lt):e.texImage2D(i.TEXTURE_2D,nt,Pt,ot,Tt,lt);w.generateMipmaps=!1}else if(B){if(ht){const nt=st(rt);e.texStorage2D(i.TEXTURE_2D,dt,Pt,nt.width,nt.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Tt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,ot,Tt,rt);m(w)&&g(J),Et.__version=K.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function tt(P,w,k){if(w.image.length!==6)return;const J=bt(P,w),Q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);const K=n.get(Q);if(Q.version!==K.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const Et=fe.getPrimaries(fe.workingColorSpace),at=w.colorSpace===Hr?null:fe.getPrimaries(w.colorSpace),Rt=w.colorSpace===Hr||Et===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const wt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,ot=[];for(let et=0;et<6;et++)!wt&&!rt?ot[et]=_(w.image[et],!0,r.maxCubemapSize):ot[et]=rt?w.image[et].image:w.image[et],ot[et]=Vt(w,ot[et]);const Tt=ot[0],Pt=s.convert(w.format,w.colorSpace),lt=s.convert(w.type),$t=x(w.internalFormat,Pt,lt,w.colorSpace),B=w.isVideoTexture!==!0,ht=K.__version===void 0||J===!0,it=Q.dataReady;let dt=M(w,Tt);Mt(i.TEXTURE_CUBE_MAP,w);let nt;if(wt){B&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,$t,Tt.width,Tt.height);for(let et=0;et<6;et++){nt=ot[et].mipmaps;for(let ft=0;ft<nt.length;ft++){const Ht=nt[ft];w.format!==Oi?Pt!==null?B?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,0,0,Ht.width,Ht.height,Pt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,$t,Ht.width,Ht.height,0,Ht.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,0,0,Ht.width,Ht.height,Pt,lt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,$t,Ht.width,Ht.height,0,Pt,lt,Ht.data)}}}else{if(nt=w.mipmaps,B&&ht){nt.length>0&&dt++;const et=st(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,$t,et.width,et.height)}for(let et=0;et<6;et++)if(rt){B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ot[et].width,ot[et].height,Pt,lt,ot[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,ot[et].width,ot[et].height,0,Pt,lt,ot[et].data);for(let ft=0;ft<nt.length;ft++){const he=nt[ft].image[et].image;B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,0,0,he.width,he.height,Pt,lt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,$t,he.width,he.height,0,Pt,lt,he.data)}}else{B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Pt,lt,ot[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,Pt,lt,ot[et]);for(let ft=0;ft<nt.length;ft++){const Ht=nt[ft];B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,0,0,Pt,lt,Ht.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,$t,Pt,lt,Ht.image[et])}}}m(w)&&g(i.TEXTURE_CUBE_MAP),K.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ut(P,w,k,J,Q,K){const Et=s.convert(k.format,k.colorSpace),at=s.convert(k.type),Rt=x(k.internalFormat,Et,at,k.colorSpace),wt=n.get(w),rt=n.get(k);if(rt.__renderTarget=w,!wt.__hasExternalTextures){const ot=Math.max(1,w.width>>K),Tt=Math.max(1,w.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,Rt,ot,Tt,w.depth,0,Et,at,null):e.texImage2D(Q,K,Rt,ot,Tt,0,Et,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Nt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,rt.__webglTexture,0,N(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,rt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(P,w,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,Q=J&&J.isDepthTexture?J.type:null,K=v(w.stencilBuffer,Q),Et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Nt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(w),K,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(w),K,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,P)}else{const J=w.textures;for(let Q=0;Q<J.length;Q++){const K=J[Q],Et=s.convert(K.format,K.colorSpace),at=s.convert(K.type),Rt=x(K.internalFormat,Et,at,K.colorSpace);Nt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(w),Rt,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(w),Rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(P,w,k){const J=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,w.depthTexture);const wt=s.convert(w.depthTexture.format),rt=s.convert(w.depthTexture.type);let ot;w.depthTexture.format===Rr?ot=i.DEPTH_COMPONENT24:w.depthTexture.format===Ts&&(ot=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ot,w.width,w.height,0,wt,rt,null)}}else F(w.depthTexture,0);const K=Q.__webglTexture,Et=N(w),at=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Rt=w.depthTexture.format===Ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Rr)Nt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,at,K,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,at,K,0);else if(w.depthTexture.format===Ts)Nt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,at,K,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,at,K,0);else throw new Error("Unknown depthTexture format")}function Ft(P){const w=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(k)for(let J=0;J<6;J++)pt(w.__webglFramebuffer[J],P,J);else{const J=P.texture.mipmaps;J&&J.length>0?pt(w.__webglFramebuffer[0],P,0):pt(w.__webglFramebuffer,P,0)}else if(k){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),Ct(w.__webglDepthbuffer[J],P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ct(w.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,w,k){const J=n.get(P);w!==void 0&&ut(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ft(P)}function xt(P){const w=P.texture,k=n.get(P),J=n.get(w);P.addEventListener("dispose",T);const Q=P.textures,K=P.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)k.__webglFramebuffer[at][Rt]=i.createFramebuffer()}else k.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)k.__webglFramebuffer[at]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Et)for(let at=0,Rt=Q.length;at<Rt;at++){const wt=n.get(Q[at]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Nt(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const Rt=Q[at];k.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const wt=s.convert(Rt.format,Rt.colorSpace),rt=s.convert(Rt.type),ot=x(Rt.internalFormat,wt,rt,Rt.colorSpace,P.isXRRenderTarget===!0),Tt=N(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ot,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,k.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ut(k.__webglFramebuffer[at][Rt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt);else ut(k.__webglFramebuffer[at],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(w)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let at=0,Rt=Q.length;at<Rt;at++){const wt=Q[at],rt=n.get(wt);let ot=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ot=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,rt.__webglTexture),Mt(ot,wt),ut(k.__webglFramebuffer,P,wt,i.COLOR_ATTACHMENT0+at,ot,0),m(wt)&&g(ot)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),Mt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ut(k.__webglFramebuffer[Rt],P,w,i.COLOR_ATTACHMENT0,at,Rt);else ut(k.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,at,0);m(w)&&g(at),e.unbindTexture()}P.depthBuffer&&Ft(P)}function zt(P){const w=P.textures;for(let k=0,J=w.length;k<J;k++){const Q=w[k];if(m(Q)){const K=S(P),Et=n.get(Q).__webglTexture;e.bindTexture(K,Et),g(K),e.unbindTexture()}}}const Yt=[],Bt=[];function W(P){if(P.samples>0){if(Nt(P)===!1){const w=P.textures,k=P.width,J=P.height;let Q=i.COLOR_BUFFER_BIT;const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(P),at=w.length>1;if(at)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Rt=P.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const rt=n.get(w[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,Q,i.NEAREST),l===!0&&(Yt.length=0,Bt.length=0,Yt.push(i.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Yt.push(K),Bt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const rt=n.get(w[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function N(P){return Math.min(r.maxSamples,P.samples)}function Nt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(P){const w=a.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Vt(P,w){const k=P.colorSpace,J=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Ga&&k!==Hr&&(fe.getTransfer(k)===ye?(J!==Oi||Q!==Ei)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",k)),w}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=ae,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Zw(i,t){function e(n,r=Hr){let s;const a=fe.getTransfer(r);if(n===Ei)return i.UNSIGNED_BYTE;if(n===Sp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_x)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===px)return i.BYTE;if(n===mx)return i.SHORT;if(n===el)return i.UNSIGNED_SHORT;if(n===yp)return i.INT;if(n===sr)return i.UNSIGNED_INT;if(n===Ji)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===xx)return i.ALPHA;if(n===vx)return i.RGB;if(n===Oi)return i.RGBA;if(n===Rr)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===yx)return i.RED;if(n===Ep)return i.RED_INTEGER;if(n===Ha)return i.RG;if(n===bp)return i.RG_INTEGER;if(n===Tp)return i.RGBA_INTEGER;if(n===bc||n===Tc||n===wc||n===Ac)if(a===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rh||n===Ph||n===Dh||n===Lh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nh||n===Ih||n===Fh||n===Uh||n===Oh||n===Bh||n===kh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nh||n===Ih)return a===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uh)return s.COMPRESSED_R11_EAC;if(n===Oh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bh)return s.COMPRESSED_RG11_EAC;if(n===kh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===$h||n===Yh||n===qh||n===Kh||n===Zh||n===jh||n===Jh||n===Qh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===td||n===ed||n===nd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===td)return a===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===id||n===rd||n===sd||n===ad)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===id)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ad)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jw=`
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

}`;class Qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ix(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bi({vertexShader:jw,fragmentShader:Jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dr(new bu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tA extends ja{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Qw,g={},S=e.getContextAttributes();let x=null,v=null;const M=[],E=[],T=new Ee;let A=null;const y=new Mi;y.viewport=new We;const b=new Mi;b.viewport=new We;const R=[y,b],D=new u1;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=M[q];return tt===void 0&&(tt=new Sf,M[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=M[q];return tt===void 0&&(tt=new Sf,M[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=M[q];return tt===void 0&&(tt=new Sf,M[q]=tt),tt.getHandSpace()};function F(q){const tt=E.indexOf(q.inputSource);if(tt===-1)return;const ut=M[tt];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||a),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",U);for(let q=0;q<M.length;q++){const tt=E[q];tt!==null&&(E[q]=null,M[q].disconnect(tt))}I=null,O=null,m.reset();for(const q in g)delete g[q];t.setRenderTarget(x),d=null,h=null,f=null,r=null,v=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",z),r.addEventListener("inputsourceschange",U),S.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ct=null,pt=null;S.depth&&(pt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=S.stencil?Ts:Rr,Ct=S.stencil?nl:sr);const Ft={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ft),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new nr(h.textureWidth,h.textureHeight,{format:Oi,type:Ei,depthTexture:new rl(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new nr(d.framebufferWidth,d.framebufferHeight,{format:Oi,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),At.setContext(r),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(q){for(let tt=0;tt<q.removed.length;tt++){const ut=q.removed[tt],Ct=E.indexOf(ut);Ct>=0&&(E[Ct]=null,M[Ct].disconnect(ut))}for(let tt=0;tt<q.added.length;tt++){const ut=q.added[tt];let Ct=E.indexOf(ut);if(Ct===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=E.length){E.push(ut),Ct=Ft;break}else if(E[Ft]===null){E[Ft]=ut,Ct=Ft;break}if(Ct===-1)break}const pt=M[Ct];pt&&pt.connect(ut)}}const H=new $,Z=new $;function L(q,tt,ut){H.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(ut.matrixWorld);const Ct=H.distanceTo(Z),pt=tt.projectionMatrix.elements,Ft=ut.projectionMatrix.elements,ae=pt[14]/(pt[10]-1),xt=pt[14]/(pt[10]+1),zt=(pt[9]+1)/pt[5],Yt=(pt[9]-1)/pt[5],Bt=(pt[8]-1)/pt[0],W=(Ft[8]+1)/Ft[0],N=ae*Bt,Nt=ae*W,Ut=Ct/(-Bt+W),Vt=Ut*-Bt;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Vt),q.translateZ(Ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const st=ae+Ut,P=xt+Ut,w=N-Vt,k=Nt+(Ct-Vt),J=zt*xt/P*st,Q=Yt*xt/P*st;q.projectionMatrix.makePerspective(w,k,J,Q,st,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,ut=q.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),D.near=b.near=y.near=tt,D.far=b.far=y.far=ut,(I!==D.near||O!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,O=D.far),D.layers.mask=q.layers.mask|6,y.layers.mask=D.layers.mask&3,b.layers.mask=D.layers.mask&5;const Ct=q.parent,pt=D.cameras;j(D,Ct);for(let Ft=0;Ft<pt.length;Ft++)j(pt[Ft],Ct);pt.length===2?L(D,y,b):D.projectionMatrix.copy(y.projectionMatrix),Mt(q,D,Ct)};function Mt(q,tt,ut){ut===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=od*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return g[q]};let bt=null;function Lt(q,tt){if(u=tt.getViewerPose(c||a),p=tt,u!==null){const ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;ut.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let xt=0;xt<ut.length;xt++){const zt=ut[xt];let Yt=null;if(d!==null)Yt=d.getViewport(zt);else{const W=f.getViewSubImage(h,zt);Yt=W.viewport,xt===0&&(t.setRenderTargetTextures(v,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(v))}let Bt=R[xt];Bt===void 0&&(Bt=new Mi,Bt.layers.enable(xt),Bt.viewport=new We,R[xt]=Bt),Bt.matrix.fromArray(zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),xt===0&&(D.matrix.copy(Bt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(Bt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const xt=f.getDepthInformation(ut[0]);xt&&xt.isValid&&xt.texture&&m.init(xt,r.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let xt=0;xt<ut.length;xt++){const zt=ut[xt].camera;if(zt){let Yt=g[zt];Yt||(Yt=new Ix,g[zt]=Yt);const Bt=f.getCameraImage(zt);Yt.sourceTexture=Bt}}}}for(let ut=0;ut<M.length;ut++){const Ct=E[ut],pt=M[ut];Ct!==null&&pt!==void 0&&pt.update(Ct,tt,c||a)}bt&&bt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const At=new Ux;At.setAnimationLoop(Lt),this.setAnimationLoop=function(q){bt=q},this.dispose=function(){}}}const ds=new Pr,eA=new $e;function nA(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Rx(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,S,x,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Yn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Yn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,ds.copy(v),ds.x*=-1,ds.y*=-1,ds.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(ds)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=x*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iA(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=r[S.id];v===void 0&&(p(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(S,M);const E=t.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function u(S){const x=f();S.__bindingPointIndex=x;const v=i.createBuffer(),M=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=r[S.id],v=S.uniforms,M=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=v.length;E<T;E++){const A=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,b=A.length;y<b;y++){const R=A[y];if(d(R,E,y,M)===!0){const D=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let F=0;F<I.length;F++){const z=I[F],U=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+O,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,O),O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,x,v,M){const E=S.value,T=x+"_"+v;if(M[T]===void 0)return typeof E=="number"||typeof E=="boolean"?M[T]=E:M[T]=E.clone(),!0;{const A=M[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return M[T]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function p(S){const x=S.uniforms;let v=0;const M=16;for(let T=0,A=x.length;T<A;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,R=y.length;b<R;b++){const D=y[b],I=Array.isArray(D.value)?D.value:[D.value];for(let O=0,F=I.length;O<F;O++){const z=I[O],U=_(z),H=v%M,Z=H%U.boundary,L=H+Z;v+=Z,L!==0&&M-L<U.storage&&(v+=M-L),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=U.storage}}}const E=v%M;return E>0&&(v+=M-E),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Zt("WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}const rA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function sA(){return Vi===null&&(Vi=new t1(rA,16,16,Ha,Cr),Vi.name="DFG_LUT",Vi.minFilter=Mn,Vi.magFilter=Mn,Vi.wrapS=Sr,Vi.wrapT=Sr,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class aA{constructor(t={}){const{canvas:e=AM(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ei}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,m=new Set([Tp,bp,Ep]),g=new Set([Ei,sr,el,nl,Sp,Mp]),S=new Uint32Array(4),x=new Int32Array(4);let v=null,M=null;const E=[],T=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=vi;let R=0,D=0,I=null,O=-1,F=null;const z=new We,U=new We;let H=null;const Z=new _e(0);let L=0,j=e.width,Mt=e.height,bt=1,Lt=null,At=null;const q=new We(0,0,j,Mt),tt=new We(0,0,j,Mt);let ut=!1;const Ct=new Nx;let pt=!1,Ft=!1;const ae=new $e,xt=new $,zt=new We,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function W(){return I===null?bt:1}let N=n;function Nt(C,V){return e.getContext(C,V)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vp}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",vt,!1),N===null){const V="webgl2";if(N=Nt(V,C),N===null)throw Nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw me("WebGLRenderer: "+C.message),C}let Ut,Vt,st,P,w,k,J,Q,K,Et,at,Rt,wt,rt,ot,Tt,Pt,lt,$t,B,ht,it,dt,nt;function et(){Ut=new sT(N),Ut.init(),it=new Zw(N,Ut),Vt=new Zb(N,Ut,t,it),st=new qw(N,Ut),Vt.reversedDepthBuffer&&h&&st.buffers.depth.setReversed(!0),P=new lT(N),w=new Nw,k=new Kw(N,Ut,st,w,Vt,it,P),J=new Jb(y),Q=new rT(y),K=new h1(N),dt=new qb(N,K),Et=new aT(N,K,P,dt),at=new uT(N,Et,K,P),$t=new cT(N,Vt,k),Tt=new jb(w),Rt=new Lw(y,J,Q,Ut,Vt,dt,Tt),wt=new nA(y,w),rt=new Fw,ot=new Vw(Ut),lt=new Yb(y,J,Q,st,at,p,l),Pt=new $w(y,at,Vt),nt=new iA(N,P,Vt,st),B=new Kb(N,Ut,P),ht=new oT(N,Ut,P),P.programs=Rt.programs,y.capabilities=Vt,y.extensions=Ut,y.properties=w,y.renderLists=rt,y.shadowMap=Pt,y.state=st,y.info=P}et(),_!==Ei&&(A=new hT(_,e.width,e.height,r,s));const ft=new tA(y,N);this.xr=ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(C){C!==void 0&&(bt=C,this.setSize(j,Mt,!1))},this.getSize=function(C){return C.set(j,Mt)},this.setSize=function(C,V,Y=!0){if(ft.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,Mt=V,e.width=Math.floor(C*bt),e.height=Math.floor(V*bt),Y===!0&&(e.style.width=C+"px",e.style.height=V+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(j*bt,Mt*bt).floor()},this.setDrawingBufferSize=function(C,V,Y){j=C,Mt=V,bt=Y,e.width=Math.floor(C*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(_===Ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,V,Y,X){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,V,Y,X),st.viewport(z.copy(q).multiplyScalar(bt).round())},this.getScissor=function(C){return C.copy(tt)},this.setScissor=function(C,V,Y,X){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,V,Y,X),st.scissor(U.copy(tt).multiplyScalar(bt).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){st.setScissorTest(ut=C)},this.setOpaqueSort=function(C){Lt=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,Y=!0){let X=0;if(C){let G=!1;if(I!==null){const ct=I.texture.format;G=m.has(ct)}if(G){const ct=I.texture.type,yt=g.has(ct),mt=lt.getClearColor(),St=lt.getClearAlpha(),Ot=mt.r,Xt=mt.g,Gt=mt.b;yt?(S[0]=Ot,S[1]=Xt,S[2]=Gt,S[3]=St,N.clearBufferuiv(N.COLOR,0,S)):(x[0]=Ot,x[1]=Xt,x[2]=Gt,x[3]=St,N.clearBufferiv(N.COLOR,0,x))}else X|=N.COLOR_BUFFER_BIT}V&&(X|=N.DEPTH_BUFFER_BIT),Y&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),lt.dispose(),rt.dispose(),ot.dispose(),w.dispose(),J.dispose(),Q.dispose(),at.dispose(),dt.dispose(),nt.dispose(),Rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ze),ft.removeEventListener("sessionend",ne),xe.stop()};function Ht(C){C.preventDefault(),Bm("WebGLRenderer: Context Lost."),b=!0}function he(){Bm("WebGLRenderer: Context Restored."),b=!1;const C=P.autoReset,V=Pt.enabled,Y=Pt.autoUpdate,X=Pt.needsUpdate,G=Pt.type;et(),P.autoReset=C,Pt.enabled=V,Pt.autoUpdate=Y,Pt.needsUpdate=X,Pt.type=G}function vt(C){me("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function It(C){const V=C.target;V.removeEventListener("dispose",It),jt(V)}function jt(C){gt(C),w.remove(C)}function gt(C){const V=w.get(C).programs;V!==void 0&&(V.forEach(function(Y){Rt.releaseProgram(Y)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Y,X,G,ct){V===null&&(V=Yt);const yt=G.isMesh&&G.matrixWorld.determinant()<0,mt=Je(C,V,Y,X,G);st.setMaterial(X,yt);let St=Y.index,Ot=1;if(X.wireframe===!0){if(St=Et.getWireframeAttribute(Y),St===void 0)return;Ot=2}const Xt=Y.drawRange,Gt=Y.attributes.position;let ie=Xt.start*Ot,Me=(Xt.start+Xt.count)*Ot;ct!==null&&(ie=Math.max(ie,ct.start*Ot),Me=Math.min(Me,(ct.start+ct.count)*Ot)),St!==null?(ie=Math.max(ie,0),Me=Math.min(Me,St.count)):Gt!=null&&(ie=Math.max(ie,0),Me=Math.min(Me,Gt.count));const Oe=Me-ie;if(Oe<0||Oe===1/0)return;dt.setup(G,X,mt,Y,St);let Be,Te=B;if(St!==null&&(Be=K.get(St),Te=ht,Te.setIndex(Be)),G.isMesh)X.wireframe===!0?(st.setLineWidth(X.wireframeLinewidth*W()),Te.setMode(N.LINES)):Te.setMode(N.TRIANGLES);else if(G.isLine){let Wt=X.linewidth;Wt===void 0&&(Wt=1),st.setLineWidth(Wt*W()),G.isLineSegments?Te.setMode(N.LINES):G.isLineLoop?Te.setMode(N.LINE_LOOP):Te.setMode(N.LINE_STRIP)}else G.isPoints?Te.setMode(N.POINTS):G.isSprite&&Te.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Wt=G._multiDrawStarts,ve=G._multiDrawCounts,pe=G._multiDrawCount,Jn=St?K.get(St).bytesPerElement:1,Ks=w.get(X).currentProgram.getUniforms();for(let Qn=0;Qn<pe;Qn++)Ks.setValue(N,"_gl_DrawID",Qn),Te.render(Wt[Qn]/Jn,ve[Qn])}else if(G.isInstancedMesh)Te.renderInstances(ie,Oe,G.count);else if(Y.isInstancedBufferGeometry){const Wt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ve=Math.min(Y.instanceCount,Wt);Te.renderInstances(ie,Oe,ve)}else Te.render(ie,Oe)};function qt(C,V,Y){C.transparent===!0&&C.side===_r&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,Se(C,V,Y),C.side=ns,C.needsUpdate=!0,Se(C,V,Y),C.side=_r):Se(C,V,Y)}this.compile=function(C,V,Y=null){Y===null&&(Y=C),M=ot.get(Y),M.init(V),T.push(M),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),C!==Y&&C.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();const X=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ct=G.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){const mt=ct[yt];qt(mt,Y,G),X.add(mt)}else qt(ct,Y,G),X.add(ct)}),M=T.pop(),X},this.compileAsync=function(C,V,Y=null){const X=this.compile(C,V,Y);return new Promise(G=>{function ct(){if(X.forEach(function(yt){w.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){G(C);return}setTimeout(ct,10)}Ut.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let kt=null;function Kt(C){kt&&kt(C)}function ze(){xe.stop()}function ne(){xe.start()}const xe=new Ux;xe.setAnimationLoop(Kt),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(C){kt=C,ft.setAnimationLoop(C),C===null?xe.stop():xe.start()},ft.addEventListener("sessionstart",ze),ft.addEventListener("sessionend",ne),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Y=ft.enabled===!0&&ft.isPresenting===!0,X=A!==null&&(I===null||Y)&&A.begin(y,I);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(V),V=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,V,I),M=ot.get(C,T.length),M.init(V),T.push(M),ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ct.setFromProjectionMatrix(ae,Qi,V.reversedDepth),Ft=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,Ft),v=rt.get(C,E.length),v.init(),E.push(v),ft.enabled===!0&&ft.isPresenting===!0){const yt=y.xr.getDepthSensingMesh();yt!==null&&Ye(yt,V,-1/0,y.sortObjects)}Ye(C,V,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Lt,At),Bt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Bt&&lt.addToRenderList(v,C),this.info.render.frame++,pt===!0&&Tt.beginShadows();const G=M.state.shadowsArray;if(Pt.render(G,C,V),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&A.hasRenderPass())===!1){const yt=v.opaque,mt=v.transmissive;if(M.setupLights(),V.isArrayCamera){const St=V.cameras;if(mt.length>0)for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const Gt=St[Ot];be(yt,mt,C,Gt)}Bt&&lt.render(C);for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const Gt=St[Ot];De(v,C,Gt,Gt.viewport)}}else mt.length>0&&be(yt,mt,C,V),Bt&&lt.render(C),De(v,C,V)}I!==null&&D===0&&(k.updateMultisampleRenderTarget(I),k.updateRenderTargetMipmap(I)),X&&A.end(y),C.isScene===!0&&C.onAfterRender(y,C,V),dt.resetDefaultState(),O=-1,F=null,T.pop(),T.length>0?(M=T[T.length-1],pt===!0&&Tt.setGlobalState(y.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Ye(C,V,Y,X){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ct.intersectsSprite(C)){X&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ae);const yt=at.update(C),mt=C.material;mt.visible&&v.push(C,yt,mt,Y,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ct.intersectsObject(C))){const yt=at.update(C),mt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),zt.copy(yt.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(ae)),Array.isArray(mt)){const St=yt.groups;for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const Gt=St[Ot],ie=mt[Gt.materialIndex];ie&&ie.visible&&v.push(C,yt,ie,Y,zt.z,Gt)}}else mt.visible&&v.push(C,yt,mt,Y,zt.z,null)}}const ct=C.children;for(let yt=0,mt=ct.length;yt<mt;yt++)Ye(ct[yt],V,Y,X)}function De(C,V,Y,X){const{opaque:G,transmissive:ct,transparent:yt}=C;M.setupLightsView(Y),pt===!0&&Tt.setGlobalState(y.clippingPlanes,Y),X&&st.viewport(z.copy(X)),G.length>0&&de(G,V,Y),ct.length>0&&de(ct,V,Y),yt.length>0&&de(yt,V,Y),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function be(C,V,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){const ie=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new nr(1,1,{generateMipmaps:!0,type:ie?Cr:Ei,minFilter:bs,samples:Vt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace})}const ct=M.state.transmissionRenderTarget[X.id],yt=X.viewport||z;ct.setSize(yt.z*y.transmissionResolutionScale,yt.w*y.transmissionResolutionScale);const mt=y.getRenderTarget(),St=y.getActiveCubeFace(),Ot=y.getActiveMipmapLevel();y.setRenderTarget(ct),y.getClearColor(Z),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear(),Bt&&lt.render(Y);const Xt=y.toneMapping;y.toneMapping=er;const Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),pt===!0&&Tt.setGlobalState(y.clippingPlanes,X),de(C,Y,X),k.updateMultisampleRenderTarget(ct),k.updateRenderTargetMipmap(ct),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Me=0,Oe=V.length;Me<Oe;Me++){const Be=V[Me],{object:Te,geometry:Wt,material:ve,group:pe}=Be;if(ve.side===_r&&Te.layers.test(X.layers)){const Jn=ve.side;ve.side=Yn,ve.needsUpdate=!0,Fn(Te,Y,X,Wt,ve,pe),ve.side=Jn,ve.needsUpdate=!0,ie=!0}}ie===!0&&(k.updateMultisampleRenderTarget(ct),k.updateRenderTargetMipmap(ct))}y.setRenderTarget(mt,St,Ot),y.setClearColor(Z,L),Gt!==void 0&&(X.viewport=Gt),y.toneMapping=Xt}function de(C,V,Y){const X=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ct=C.length;G<ct;G++){const yt=C[G],{object:mt,geometry:St,group:Ot}=yt;let Xt=yt.material;Xt.allowOverride===!0&&X!==null&&(Xt=X),mt.layers.test(Y.layers)&&Fn(mt,V,Y,St,Xt,Ot)}}function Fn(C,V,Y,X,G,ct){C.onBeforeRender(y,V,Y,X,G,ct),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(y,V,Y,X,C,ct),G.transparent===!0&&G.side===_r&&G.forceSinglePass===!1?(G.side=Yn,G.needsUpdate=!0,y.renderBufferDirect(Y,V,X,G,C,ct),G.side=ns,G.needsUpdate=!0,y.renderBufferDirect(Y,V,X,G,C,ct),G.side=_r):y.renderBufferDirect(Y,V,X,G,C,ct),C.onAfterRender(y,V,Y,X,G,ct)}function Se(C,V,Y){V.isScene!==!0&&(V=Yt);const X=w.get(C),G=M.state.lights,ct=M.state.shadowsArray,yt=G.state.version,mt=Rt.getParameters(C,G.state,ct,V,Y),St=Rt.getProgramCacheKey(mt);let Ot=X.programs;X.environment=C.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(C.isMeshStandardMaterial?Q:J).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ot===void 0&&(C.addEventListener("dispose",It),Ot=new Map,X.programs=Ot);let Xt=Ot.get(St);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===yt)return jn(C,mt),Xt}else mt.uniforms=Rt.getUniforms(C),C.onBeforeCompile(mt,y),Xt=Rt.acquireProgram(mt,St),Ot.set(St,Xt),X.uniforms=mt.uniforms;const Gt=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=Tt.uniform),jn(C,mt),X.needsLights=sn(C),X.lightsStateVersion=yt,X.needsLights&&(Gt.ambientLightColor.value=G.state.ambient,Gt.lightProbe.value=G.state.probe,Gt.directionalLights.value=G.state.directional,Gt.directionalLightShadows.value=G.state.directionalShadow,Gt.spotLights.value=G.state.spot,Gt.spotLightShadows.value=G.state.spotShadow,Gt.rectAreaLights.value=G.state.rectArea,Gt.ltc_1.value=G.state.rectAreaLTC1,Gt.ltc_2.value=G.state.rectAreaLTC2,Gt.pointLights.value=G.state.point,Gt.pointLightShadows.value=G.state.pointShadow,Gt.hemisphereLights.value=G.state.hemi,Gt.directionalShadowMap.value=G.state.directionalShadowMap,Gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Gt.spotShadowMap.value=G.state.spotShadowMap,Gt.spotLightMatrix.value=G.state.spotLightMatrix,Gt.spotLightMap.value=G.state.spotLightMap,Gt.pointShadowMap.value=G.state.pointShadowMap,Gt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function pn(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Cc.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function jn(C,V){const Y=w.get(C);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Je(C,V,Y,X,G){V.isScene!==!0&&(V=Yt),k.resetTextureUnits();const ct=V.fog,yt=X.isMeshStandardMaterial?V.environment:null,mt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ga,St=(X.isMeshStandardMaterial?Q:J).get(X.envMap||yt),Ot=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xt=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Gt=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,Me=!!Y.morphAttributes.color;let Oe=er;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Oe=y.toneMapping);const Be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Te=Be!==void 0?Be.length:0,Wt=w.get(X),ve=M.state.lights;if(pt===!0&&(Ft===!0||C!==F)){const Tn=C===F&&X.id===O;Tt.setState(X,C,Tn)}let pe=!1;X.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ve.state.version||Wt.outputColorSpace!==mt||G.isBatchedMesh&&Wt.batching===!1||!G.isBatchedMesh&&Wt.batching===!0||G.isBatchedMesh&&Wt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Wt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Wt.instancing===!1||!G.isInstancedMesh&&Wt.instancing===!0||G.isSkinnedMesh&&Wt.skinning===!1||!G.isSkinnedMesh&&Wt.skinning===!0||G.isInstancedMesh&&Wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Wt.instancingMorph===!1&&G.morphTexture!==null||Wt.envMap!==St||X.fog===!0&&Wt.fog!==ct||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==Ot||Wt.vertexTangents!==Xt||Wt.morphTargets!==Gt||Wt.morphNormals!==ie||Wt.morphColors!==Me||Wt.toneMapping!==Oe||Wt.morphTargetsCount!==Te)&&(pe=!0):(pe=!0,Wt.__version=X.version);let Jn=Wt.currentProgram;pe===!0&&(Jn=Se(X,V,G));let Ks=!1,Qn=!1,eo=!1;const Ce=Jn.getUniforms(),Un=Wt.uniforms;if(st.useProgram(Jn.program)&&(Ks=!0,Qn=!0,eo=!0),X.id!==O&&(O=X.id,Qn=!0),Ks||F!==C){st.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ce.setValue(N,"projectionMatrix",C.projectionMatrix),Ce.setValue(N,"viewMatrix",C.matrixWorldInverse);const On=Ce.map.cameraPosition;On!==void 0&&On.setValue(N,xt.setFromMatrixPosition(C.matrixWorld)),Vt.logarithmicDepthBuffer&&Ce.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,Qn=!0,eo=!0)}if(Wt.needsLights&&(ve.state.directionalShadowMap.length>0&&Ce.setValue(N,"directionalShadowMap",ve.state.directionalShadowMap,k),ve.state.spotShadowMap.length>0&&Ce.setValue(N,"spotShadowMap",ve.state.spotShadowMap,k),ve.state.pointShadowMap.length>0&&Ce.setValue(N,"pointShadowMap",ve.state.pointShadowMap,k)),G.isSkinnedMesh){Ce.setOptional(N,G,"bindMatrix"),Ce.setOptional(N,G,"bindMatrixInverse");const Tn=G.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ce.setValue(N,"boneTexture",Tn.boneTexture,k))}G.isBatchedMesh&&(Ce.setOptional(N,G,"batchingTexture"),Ce.setValue(N,"batchingTexture",G._matricesTexture,k),Ce.setOptional(N,G,"batchingIdTexture"),Ce.setValue(N,"batchingIdTexture",G._indirectTexture,k),Ce.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Ce.setValue(N,"batchingColorTexture",G._colorsTexture,k));const gi=Y.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&$t.update(G,Y,Jn),(Qn||Wt.receiveShadow!==G.receiveShadow)&&(Wt.receiveShadow=G.receiveShadow,Ce.setValue(N,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Un.envMap.value=St,Un.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(Un.envMapIntensity.value=V.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=sA()),Qn&&(Ce.setValue(N,"toneMappingExposure",y.toneMappingExposure),Wt.needsLights&&Qe(Un,eo),ct&&X.fog===!0&&wt.refreshFogUniforms(Un,ct),wt.refreshMaterialUniforms(Un,X,bt,Mt,M.state.transmissionRenderTarget[C.id]),Cc.upload(N,pn(Wt),Un,k)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Cc.upload(N,pn(Wt),Un,k),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(N,"center",G.center),Ce.setValue(N,"modelViewMatrix",G.modelViewMatrix),Ce.setValue(N,"normalMatrix",G.normalMatrix),Ce.setValue(N,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Tn=X.uniformsGroups;for(let On=0,Fu=Tn.length;On<Fu;On++){const ss=Tn[On];nt.update(ss,Jn),nt.bind(ss,Jn)}}return Jn}function Qe(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function sn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,V,Y){const X=w.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),w.get(C.texture).__webglTexture=V,w.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const Y=w.get(C);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const or=N.createFramebuffer();this.setRenderTarget=function(C,V=0,Y=0){I=C,R=V,D=Y;let X=null,G=!1,ct=!1;if(C){const mt=w.get(C);if(mt.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(N.FRAMEBUFFER,mt.__webglFramebuffer),z.copy(C.viewport),U.copy(C.scissor),H=C.scissorTest,st.viewport(z),st.scissor(U),st.setScissorTest(H),O=-1;return}else if(mt.__webglFramebuffer===void 0)k.setupRenderTarget(C);else if(mt.__hasExternalTextures)k.rebindTextures(C,w.get(C.texture).__webglTexture,w.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xt=C.depthTexture;if(mt.__boundDepthTexture!==Xt){if(Xt!==null&&w.has(Xt)&&(C.width!==Xt.image.width||C.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(C)}}const St=C.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ct=!0);const Ot=w.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ot[V])?X=Ot[V][Y]:X=Ot[V],G=!0):C.samples>0&&k.useMultisampledRTT(C)===!1?X=w.get(C).__webglMultisampledFramebuffer:Array.isArray(Ot)?X=Ot[Y]:X=Ot,z.copy(C.viewport),U.copy(C.scissor),H=C.scissorTest}else z.copy(q).multiplyScalar(bt).floor(),U.copy(tt).multiplyScalar(bt).floor(),H=ut;if(Y!==0&&(X=or),st.bindFramebuffer(N.FRAMEBUFFER,X)&&st.drawBuffers(C,X),st.viewport(z),st.scissor(U),st.setScissorTest(H),G){const mt=w.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,mt.__webglTexture,Y)}else if(ct){const mt=V;for(let St=0;St<C.textures.length;St++){const Ot=w.get(C.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,Ot.__webglTexture,Y,mt)}}else if(C!==null&&Y!==0){const mt=w.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,Y)}O=-1},this.readRenderTargetPixels=function(C,V,Y,X,G,ct,yt,mt=0){if(!(C&&C.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){st.bindFramebuffer(N.FRAMEBUFFER,St);try{const Ot=C.textures[mt],Xt=Ot.format,Gt=Ot.type;if(!Vt.textureFormatReadable(Xt)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Gt)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-X&&Y>=0&&Y<=C.height-G&&(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt),N.readPixels(V,Y,X,G,it.convert(Xt),it.convert(Gt),ct))}finally{const Ot=I!==null?w.get(I).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,V,Y,X,G,ct,yt,mt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St)if(V>=0&&V<=C.width-X&&Y>=0&&Y<=C.height-G){st.bindFramebuffer(N.FRAMEBUFFER,St);const Ot=C.textures[mt],Xt=Ot.format,Gt=Ot.type;if(!Vt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,ct.byteLength,N.STREAM_READ),C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt),N.readPixels(V,Y,X,G,it.convert(Xt),it.convert(Gt),0);const Me=I!==null?w.get(I).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,Me);const Oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await CM(N,Oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ct),N.deleteBuffer(ie),N.deleteSync(Oe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,Y=0){const X=Math.pow(2,-Y),G=Math.floor(C.image.width*X),ct=Math.floor(C.image.height*X),yt=V!==null?V.x:0,mt=V!==null?V.y:0;k.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,yt,mt,G,ct),st.unbindTexture()};const qs=N.createFramebuffer(),an=N.createFramebuffer();this.copyTextureToTexture=function(C,V,Y=null,X=null,G=0,ct=null){ct===null&&(G!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=G,G=0):ct=0);let yt,mt,St,Ot,Xt,Gt,ie,Me,Oe;const Be=C.isCompressedTexture?C.mipmaps[ct]:C.image;if(Y!==null)yt=Y.max.x-Y.min.x,mt=Y.max.y-Y.min.y,St=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,Xt=Y.min.y,Gt=Y.isBox3?Y.min.z:0;else{const gi=Math.pow(2,-G);yt=Math.floor(Be.width*gi),mt=Math.floor(Be.height*gi),C.isDataArrayTexture?St=Be.depth:C.isData3DTexture?St=Math.floor(Be.depth*gi):St=1,Ot=0,Xt=0,Gt=0}X!==null?(ie=X.x,Me=X.y,Oe=X.z):(ie=0,Me=0,Oe=0);const Te=it.convert(V.format),Wt=it.convert(V.type);let ve;V.isData3DTexture?(k.setTexture3D(V,0),ve=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),ve=N.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),ve=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const pe=N.getParameter(N.UNPACK_ROW_LENGTH),Jn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ks=N.getParameter(N.UNPACK_SKIP_PIXELS),Qn=N.getParameter(N.UNPACK_SKIP_ROWS),eo=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Be.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Be.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const Ce=C.isDataArrayTexture||C.isData3DTexture,Un=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const gi=w.get(C),Tn=w.get(V),On=w.get(gi.__renderTarget),Fu=w.get(Tn.__renderTarget);st.bindFramebuffer(N.READ_FRAMEBUFFER,On.__webglFramebuffer),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fu.__webglFramebuffer);for(let ss=0;ss<St;ss++)Ce&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(C).__webglTexture,G,Gt+ss),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(V).__webglTexture,ct,Oe+ss)),N.blitFramebuffer(Ot,Xt,yt,mt,ie,Me,yt,mt,N.DEPTH_BUFFER_BIT,N.NEAREST);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||w.has(C)){const gi=w.get(C),Tn=w.get(V);st.bindFramebuffer(N.READ_FRAMEBUFFER,qs),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,an);for(let On=0;On<St;On++)Ce?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gi.__webglTexture,G,Gt+On):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gi.__webglTexture,G),Un?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tn.__webglTexture,ct,Oe+On):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tn.__webglTexture,ct),G!==0?N.blitFramebuffer(Ot,Xt,yt,mt,ie,Me,yt,mt,N.COLOR_BUFFER_BIT,N.NEAREST):Un?N.copyTexSubImage3D(ve,ct,ie,Me,Oe+On,Ot,Xt,yt,mt):N.copyTexSubImage2D(ve,ct,ie,Me,Ot,Xt,yt,mt);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Un?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(ve,ct,ie,Me,Oe,yt,mt,St,Te,Wt,Be.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(ve,ct,ie,Me,Oe,yt,mt,St,Te,Be.data):N.texSubImage3D(ve,ct,ie,Me,Oe,yt,mt,St,Te,Wt,Be):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ct,ie,Me,yt,mt,Te,Wt,Be.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ct,ie,Me,Be.width,Be.height,Te,Be.data):N.texSubImage2D(N.TEXTURE_2D,ct,ie,Me,yt,mt,Te,Wt,Be);N.pixelStorei(N.UNPACK_ROW_LENGTH,pe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ks),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,eo),ct===0&&V.generateMipmaps&&N.generateMipmap(ve),st.unbindTexture()},this.initRenderTarget=function(C){w.get(C).__webglFramebuffer===void 0&&k.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?k.setTextureCube(C,0):C.isData3DTexture?k.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?k.setTexture2DArray(C,0):k.setTexture2D(C,0),st.unbindTexture()},this.resetState=function(){R=0,D=0,I=null,st.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}class oA{constructor(t){this.canvas=t,this.renderer=null,this.scene=null,this.camera=null,this.particles=null,this.uniforms={},this.animationId=null,this.progress=0,this.themeColor=new _e("#ff6b6b")}init(){this.renderer=new aA({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new QM,this.camera=new Mi(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.createParticles(),this.animate(),window.addEventListener("resize",()=>this.onResize())}createParticles(){const e=new ki,n=new Float32Array(2e3*3),r=new Float32Array(2e3);for(let a=0;a<2e3;a++)n[a*3]=(Math.random()-.5)*20,n[a*3+1]=(Math.random()-.5)*20,n[a*3+2]=(Math.random()-.5)*10,r[a]=Math.random();e.setAttribute("position",new Ri(n,3)),e.setAttribute("aRandom",new Ri(r,1));const s=new Bi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uProgress:{value:0},uColor:{value:this.themeColor},uSize:{value:3},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
      `});this.particles=new s1(e,s),this.scene.add(this.particles),this.uniforms=s.uniforms}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.uniforms.uTime.value+=.01,this.uniforms.uProgress.value=this.progress,this.renderer.render(this.scene,this.camera)}setProgress(t){this.progress=t}setThemeColor(t){this.themeColor.set(t),this.uniforms.uColor&&(this.uniforms.uColor.value=this.themeColor)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.uniforms.uPixelRatio&&(this.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2))}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles?.geometry.dispose(),this.particles?.material.dispose(),this.renderer?.dispose()}}class lA{constructor(t){this.container=t,this.currentImage=null,this.parallaxEnabled=!1,this.handleScroll=this.updateParallax.bind(this)}show(t){if(!t?.src)return;this.clear();const e=document.createElement("div");e.style.cssText=`
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
    `,e.appendChild(n),e.appendChild(a),this.container.appendChild(e),this.currentImage=e,this.parallaxImg=n,this.parallaxEnabled=!0,window.addEventListener("scroll",this.handleScroll,{passive:!0})}updateParallax(){if(!this.parallaxEnabled||!this.parallaxImg)return;const t=window.scrollY||window.pageYOffset,e=window.innerHeight,n=-10+t/e*3,r=Math.max(-10,Math.min(0,n));this.parallaxImg.style.transform=`translateY(${r}%)`}hide(){this.clear()}clear(){this.parallaxEnabled=!1,window.removeEventListener("scroll",this.handleScroll),this.currentImage&&(this.currentImage.remove(),this.currentImage=null,this.parallaxImg=null)}}const cA="modulepreload",uA=function(i){return"/prj-jcie/"+i},Ag={},Cg=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(e.map(u=>{if(u=uA(u),u in Ag)return;Ag[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":cA,f||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Rc(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function fA(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Rp(i){let t,e,n;i.length!==2?(t=Rc,e=(o,l)=>Rc(i(o),l),n=(o,l)=>i(o)-l):(t=i===Rc||i===fA?i:hA,e=i,n=i);function r(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const f=c+u>>>1;e(o[f],l)<0?c=f+1:u=f}while(c<u)}return c}function s(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const f=c+u>>>1;e(o[f],l)<=0?c=f+1:u=f}while(c<u)}return c}function a(o,l,c=0,u=o.length){const f=r(o,l,c,u-1);return f>c&&n(o[f-1],l)>-n(o[f],l)?f-1:f}return{left:r,center:a,right:s}}function hA(){return 0}function dA(i){return i===null?NaN:+i}const pA=Rp(Rc),mA=pA.right;Rp(dA).center;function gA(i,t){let e,n;if(t===void 0)for(const r of i)r!=null&&(e===void 0?r>=r&&(e=n=r):(e>r&&(e=r),n<r&&(n=r)));else{let r=-1;for(let s of i)(s=t(s,++r,i))!=null&&(e===void 0?s>=s&&(e=n=s):(e>s&&(e=s),n<s&&(n=s)))}return[e,n]}class Vs{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const s=e[r],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[n++]=o),t=a}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e=this._n,n,r,s,a=0;if(e>0){for(a=t[--e];e>0&&(n=a,r=t[--e],a=n+r,s=r-(a-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=a+r,r==n-a&&(a=n))}return a}}class fd extends Map{constructor(t,e=vA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(Rg(this,t))}has(t){return super.has(Rg(this,t))}set(t,e){return super.set(_A(this,t),e)}delete(t){return super.delete(xA(this,t))}}function Rg({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):e}function _A({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):(i.set(n,e),e)}function xA({_intern:i,_key:t},e){const n=t(e);return i.has(n)&&(e=i.get(n),i.delete(n)),e}function vA(i){return i!==null&&typeof i=="object"?i.valueOf():i}function yA(i){return i}function SA(i,...t){return MA(i,Array.from,yA,t)}function MA(i,t,e,n){return(function r(s,a){if(a>=n.length)return e(s);const o=new fd,l=n[a++];let c=-1;for(const u of s){const f=l(u,++c,s),h=o.get(f);h?h.push(u):o.set(f,[u])}for(const[u,f]of o)o.set(u,r(f,a));return t(o)})(i,0)}const EA=Math.sqrt(50),bA=Math.sqrt(10),TA=Math.sqrt(2);function jc(i,t,e){const n=(t-i)/Math.max(0,e),r=Math.floor(Math.log10(n)),s=n/Math.pow(10,r),a=s>=EA?10:s>=bA?5:s>=TA?2:1;let o,l,c;return r<0?(c=Math.pow(10,-r)/a,o=Math.round(i*c),l=Math.round(t*c),o/c<i&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*a,o=Math.round(i/c),l=Math.round(t/c),o*c<i&&++o,l*c>t&&--l),l<o&&.5<=e&&e<2?jc(i,t,e*2):[o,l,c]}function wA(i,t,e){if(t=+t,i=+i,e=+e,!(e>0))return[];if(i===t)return[i];const n=t<i,[r,s,a]=n?jc(t,i,e):jc(i,t,e);if(!(s>=r))return[];const o=s-r+1,l=new Array(o);if(n)if(a<0)for(let c=0;c<o;++c)l[c]=(s-c)/-a;else for(let c=0;c<o;++c)l[c]=(s-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(r+c)/-a;else for(let c=0;c<o;++c)l[c]=(r+c)*a;return l}function hd(i,t,e){return t=+t,i=+i,e=+e,jc(i,t,e)[2]}function AA(i,t,e){t=+t,i=+i,e=+e;const n=t<i,r=n?hd(t,i,e):hd(i,t,e);return(n?-1:1)*(r<0?1/-r:r)}function Rf(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e<n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function*CA(i){for(const t of i)yield*t}function Vx(i){return Array.from(CA(i))}function Pg(i,t){let e=0;if(t===void 0)for(let n of i)(n=+n)&&(e+=n);else{let n=-1;for(let r of i)(r=+t(r,++n,i))&&(e+=r)}return e}function RA(i){return i}var Pf=1,Df=2,dd=3,bo=4,Dg=1e-6;function PA(i){return"translate("+i+",0)"}function DA(i){return"translate(0,"+i+")"}function LA(i){return t=>+i(t)}function NA(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),e=>+i(e)+t}function IA(){return!this.__axis}function Hx(i,t){var e=[],n=null,r=null,s=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=i===Pf||i===bo?-1:1,u=i===bo||i===Df?"x":"y",f=i===Pf||i===dd?PA:DA;function h(d){var p=n??(t.ticks?t.ticks.apply(t,e):t.domain()),_=r??(t.tickFormat?t.tickFormat.apply(t,e):RA),m=Math.max(s,0)+o,g=t.range(),S=+g[0]+l,x=+g[g.length-1]+l,v=(t.bandwidth?NA:LA)(t.copy(),l),M=d.selection?d.selection():d,E=M.selectAll(".domain").data([null]),T=M.selectAll(".tick").data(p,t).order(),A=T.exit(),y=T.enter().append("g").attr("class","tick"),b=T.select("line"),R=T.select("text");E=E.merge(E.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(y),b=b.merge(y.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),R=R.merge(y.append("text").attr("fill","currentColor").attr(u,c*m).attr("dy",i===Pf?"0em":i===dd?"0.71em":"0.32em")),d!==M&&(E=E.transition(d),T=T.transition(d),b=b.transition(d),R=R.transition(d),A=A.transition(d).attr("opacity",Dg).attr("transform",function(D){return isFinite(D=v(D))?f(D+l):this.getAttribute("transform")}),y.attr("opacity",Dg).attr("transform",function(D){var I=this.parentNode.__axis;return f((I&&isFinite(I=I(D))?I:v(D))+l)})),A.remove(),E.attr("d",i===bo||i===Df?a?"M"+c*a+","+S+"H"+l+"V"+x+"H"+c*a:"M"+l+","+S+"V"+x:a?"M"+S+","+c*a+"V"+l+"H"+x+"V"+c*a:"M"+S+","+l+"H"+x),T.attr("opacity",1).attr("transform",function(D){return f(v(D)+l)}),b.attr(u+"2",c*s),R.attr(u,c*m).text(_),M.filter(IA).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Df?"start":i===bo?"end":"middle"),M.each(function(){this.__axis=v})}return h.scale=function(d){return arguments.length?(t=d,h):t},h.ticks=function(){return e=Array.from(arguments),h},h.tickArguments=function(d){return arguments.length?(e=d==null?[]:Array.from(d),h):e.slice()},h.tickValues=function(d){return arguments.length?(n=d==null?null:Array.from(d),h):n&&n.slice()},h.tickFormat=function(d){return arguments.length?(r=d,h):r},h.tickSize=function(d){return arguments.length?(s=a=+d,h):s},h.tickSizeInner=function(d){return arguments.length?(s=+d,h):s},h.tickSizeOuter=function(d){return arguments.length?(a=+d,h):a},h.tickPadding=function(d){return arguments.length?(o=+d,h):o},h.offset=function(d){return arguments.length?(l=+d,h):l},h}function FA(i){return Hx(dd,i)}function UA(i){return Hx(bo,i)}var OA={value:()=>{}};function Gx(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new Pc(e)}function Pc(i){this._=i}function BA(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}Pc.prototype=Gx.prototype={constructor:Pc,on:function(i,t){var e=this._,n=BA(i+"",e),r,s=-1,a=n.length;if(arguments.length<2){for(;++s<a;)if((r=(i=n[s]).type)&&(r=kA(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(r=(i=n[s]).type)e[r]=Lg(e[r],i.name,t);else if(t==null)for(r in e)e[r]=Lg(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new Pc(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function kA(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function Lg(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=OA,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var pd="http://www.w3.org/1999/xhtml";const Ng={svg:"http://www.w3.org/2000/svg",xhtml:pd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Au(i){var t=i+="",e=t.indexOf(":");return e>=0&&(t=i.slice(0,e))!=="xmlns"&&(i=i.slice(e+1)),Ng.hasOwnProperty(t)?{space:Ng[t],local:i}:i}function zA(i){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===pd&&t.documentElement.namespaceURI===pd?t.createElement(i):t.createElementNS(e,i)}}function VA(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function Wx(i){var t=Au(i);return(t.local?VA:zA)(t)}function HA(){}function Pp(i){return i==null?HA:function(){return this.querySelector(i)}}function GA(i){typeof i!="function"&&(i=Pp(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=new Array(a),l,c,u=0;u<a;++u)(l=s[u])&&(c=i.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),o[u]=c);return new pi(n,this._parents)}function WA(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function XA(){return[]}function Xx(i){return i==null?XA:function(){return this.querySelectorAll(i)}}function $A(i){return function(){return WA(i.apply(this,arguments))}}function YA(i){typeof i=="function"?i=$A(i):i=Xx(i);for(var t=this._groups,e=t.length,n=[],r=[],s=0;s<e;++s)for(var a=t[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(n.push(i.call(l,l.__data__,c,a)),r.push(l));return new pi(n,r)}function $x(i){return function(){return this.matches(i)}}function Yx(i){return function(t){return t.matches(i)}}var qA=Array.prototype.find;function KA(i){return function(){return qA.call(this.children,i)}}function ZA(){return this.firstElementChild}function jA(i){return this.select(i==null?ZA:KA(typeof i=="function"?i:Yx(i)))}var JA=Array.prototype.filter;function QA(){return Array.from(this.children)}function tC(i){return function(){return JA.call(this.children,i)}}function eC(i){return this.selectAll(i==null?QA:tC(typeof i=="function"?i:Yx(i)))}function nC(i){typeof i!="function"&&(i=$x(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new pi(n,this._parents)}function qx(i){return new Array(i.length)}function iC(){return new pi(this._enter||this._groups.map(qx),this._parents)}function Jc(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}Jc.prototype={constructor:Jc,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function rC(i){return function(){return i}}function sC(i,t,e,n,r,s){for(var a=0,o,l=t.length,c=s.length;a<c;++a)(o=t[a])?(o.__data__=s[a],n[a]=o):e[a]=new Jc(i,s[a]);for(;a<l;++a)(o=t[a])&&(r[a]=o)}function aC(i,t,e,n,r,s,a){var o,l,c=new Map,u=t.length,f=s.length,h=new Array(u),d;for(o=0;o<u;++o)(l=t[o])&&(h[o]=d=a.call(l,l.__data__,o,t)+"",c.has(d)?r[o]=l:c.set(d,l));for(o=0;o<f;++o)d=a.call(i,s[o],o,s)+"",(l=c.get(d))?(n[o]=l,l.__data__=s[o],c.delete(d)):e[o]=new Jc(i,s[o]);for(o=0;o<u;++o)(l=t[o])&&c.get(h[o])===l&&(r[o]=l)}function oC(i){return i.__data__}function lC(i,t){if(!arguments.length)return Array.from(this,oC);var e=t?aC:sC,n=this._parents,r=this._groups;typeof i!="function"&&(i=rC(i));for(var s=r.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],f=r[c],h=f.length,d=cC(i.call(u,u&&u.__data__,c,n)),p=d.length,_=o[c]=new Array(p),m=a[c]=new Array(p),g=l[c]=new Array(h);e(u,f,_,m,g,d,t);for(var S=0,x=0,v,M;S<p;++S)if(v=_[S]){for(S>=x&&(x=S+1);!(M=m[x])&&++x<p;);v._next=M||null}}return a=new pi(a,n),a._enter=o,a._exit=l,a}function cC(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function uC(){return new pi(this._exit||this._groups.map(qx),this._parents)}function fC(i,t,e){var n=this.enter(),r=this,s=this.exit();return typeof i=="function"?(n=i(n),n&&(n=n.selection())):n=n.append(i+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),n&&r?n.merge(r).order():r}function hC(i){for(var t=i.selection?i.selection():i,e=this._groups,n=t._groups,r=e.length,s=n.length,a=Math.min(r,s),o=new Array(r),l=0;l<a;++l)for(var c=e[l],u=n[l],f=c.length,h=o[l]=new Array(f),d,p=0;p<f;++p)(d=c[p]||u[p])&&(h[p]=d);for(;l<r;++l)o[l]=e[l];return new pi(o,this._parents)}function dC(){for(var i=this._groups,t=-1,e=i.length;++t<e;)for(var n=i[t],r=n.length-1,s=n[r],a;--r>=0;)(a=n[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function pC(i){i||(i=mC);function t(f,h){return f&&h?i(f.__data__,h.__data__):!f-!h}for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s){for(var a=e[s],o=a.length,l=r[s]=new Array(o),c,u=0;u<o;++u)(c=a[u])&&(l[u]=c);l.sort(t)}return new pi(r,this._parents).order()}function mC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function gC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function _C(){return Array.from(this)}function xC(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length;r<s;++r){var a=n[r];if(a)return a}return null}function vC(){let i=0;for(const t of this)++i;return i}function yC(){return!this.node()}function SC(i){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,a=r.length,o;s<a;++s)(o=r[s])&&i.call(o,o.__data__,s,r);return this}function MC(i){return function(){this.removeAttribute(i)}}function EC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function bC(i,t){return function(){this.setAttribute(i,t)}}function TC(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function wC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(i):this.setAttribute(i,e)}}function AC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,e)}}function CC(i,t){var e=Au(i);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?EC:MC:typeof t=="function"?e.local?AC:wC:e.local?TC:bC)(e,t))}function Kx(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function RC(i){return function(){this.style.removeProperty(i)}}function PC(i,t,e){return function(){this.style.setProperty(i,t,e)}}function DC(i,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,e)}}function LC(i,t,e){return arguments.length>1?this.each((t==null?RC:typeof t=="function"?DC:PC)(i,t,e??"")):Xa(this.node(),i)}function Xa(i,t){return i.style.getPropertyValue(t)||Kx(i).getComputedStyle(i,null).getPropertyValue(t)}function NC(i){return function(){delete this[i]}}function IC(i,t){return function(){this[i]=t}}function FC(i,t){return function(){var e=t.apply(this,arguments);e==null?delete this[i]:this[i]=e}}function UC(i,t){return arguments.length>1?this.each((t==null?NC:typeof t=="function"?FC:IC)(i,t)):this.node()[i]}function Zx(i){return i.trim().split(/^|\s+/)}function Dp(i){return i.classList||new jx(i)}function jx(i){this._node=i,this._names=Zx(i.getAttribute("class")||"")}jx.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function Jx(i,t){for(var e=Dp(i),n=-1,r=t.length;++n<r;)e.add(t[n])}function Qx(i,t){for(var e=Dp(i),n=-1,r=t.length;++n<r;)e.remove(t[n])}function OC(i){return function(){Jx(this,i)}}function BC(i){return function(){Qx(this,i)}}function kC(i,t){return function(){(t.apply(this,arguments)?Jx:Qx)(this,i)}}function zC(i,t){var e=Zx(i+"");if(arguments.length<2){for(var n=Dp(this.node()),r=-1,s=e.length;++r<s;)if(!n.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?kC:t?OC:BC)(e,t))}function VC(){this.textContent=""}function HC(i){return function(){this.textContent=i}}function GC(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function WC(i){return arguments.length?this.each(i==null?VC:(typeof i=="function"?GC:HC)(i)):this.node().textContent}function XC(){this.innerHTML=""}function $C(i){return function(){this.innerHTML=i}}function YC(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function qC(i){return arguments.length?this.each(i==null?XC:(typeof i=="function"?YC:$C)(i)):this.node().innerHTML}function KC(){this.nextSibling&&this.parentNode.appendChild(this)}function ZC(){return this.each(KC)}function jC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function JC(){return this.each(jC)}function QC(i){var t=typeof i=="function"?i:Wx(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function tR(){return null}function eR(i,t){var e=typeof i=="function"?i:Wx(i),n=t==null?tR:typeof t=="function"?t:Pp(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function nR(){var i=this.parentNode;i&&i.removeChild(this)}function iR(){return this.each(nR)}function rR(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function sR(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function aR(i){return this.select(i?sR:rR)}function oR(i){return arguments.length?this.property("__data__",i):this.node().__data__}function lR(i){return function(t){i.call(this,t,this.__data__)}}function cR(i){return i.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function uR(i){return function(){var t=this.__on;if(t){for(var e=0,n=-1,r=t.length,s;e<r;++e)s=t[e],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.options):t[++n]=s;++n?t.length=n:delete this.__on}}}function fR(i,t,e){return function(){var n=this.__on,r,s=lR(t);if(n){for(var a=0,o=n.length;a<o;++a)if((r=n[a]).type===i.type&&r.name===i.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(i.type,s,e),r={type:i.type,name:i.name,value:t,listener:s,options:e},n?n.push(r):this.__on=[r]}}function hR(i,t,e){var n=cR(i+""),r,s=n.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,u;l<c;++l)for(r=0,u=o[l];r<s;++r)if((a=n[r]).type===u.type&&a.name===u.name)return u.value}return}for(o=t?fR:uR,r=0;r<s;++r)this.each(o(n[r],t,e));return this}function tv(i,t,e){var n=Kx(i),r=n.CustomEvent;typeof r=="function"?r=new r(t,e):(r=n.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),i.dispatchEvent(r)}function dR(i,t){return function(){return tv(this,i,t)}}function pR(i,t){return function(){return tv(this,i,t.apply(this,arguments))}}function mR(i,t){return this.each((typeof t=="function"?pR:dR)(i,t))}function*gR(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length,a;r<s;++r)(a=n[r])&&(yield a)}var ev=[null];function pi(i,t){this._groups=i,this._parents=t}function Qa(){return new pi([[document.documentElement]],ev)}function _R(){return this}pi.prototype=Qa.prototype={constructor:pi,select:GA,selectAll:YA,selectChild:jA,selectChildren:eC,filter:nC,data:lC,enter:iC,exit:uC,join:fC,merge:hC,selection:_R,order:dC,sort:pC,call:gC,nodes:_C,node:xC,size:vC,empty:yC,each:SC,attr:CC,style:LC,property:UC,classed:zC,text:WC,html:qC,raise:ZC,lower:JC,append:QC,insert:eR,remove:iR,clone:aR,datum:oR,on:hR,dispatch:mR,[Symbol.iterator]:gR};function nv(i){return typeof i=="string"?new pi([[document.querySelector(i)]],[document.documentElement]):new pi([[i]],ev)}function xR(i){let t;for(;t=i.sourceEvent;)i=t;return i}function vR(i,t){if(i=xR(i),t===void 0&&(t=i.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var n=e.createSVGPoint();return n.x=i.clientX,n.y=i.clientY,n=n.matrixTransform(t.getScreenCTM().inverse()),[n.x,n.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[i.clientX-r.left-t.clientLeft,i.clientY-r.top-t.clientTop]}}return[i.pageX,i.pageY]}function Cu(i,t,e){i.prototype=t.prototype=e,e.constructor=i}function Lp(i,t){var e=Object.create(i.prototype);for(var n in t)e[n]=t[n];return e}function to(){}var Hs=.7,$a=1/Hs,Pa="\\s*([+-]?\\d+)\\s*",sl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ir="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",yR=/^#([0-9a-f]{3,8})$/,SR=new RegExp(`^rgb\\(${Pa},${Pa},${Pa}\\)$`),MR=new RegExp(`^rgb\\(${ir},${ir},${ir}\\)$`),ER=new RegExp(`^rgba\\(${Pa},${Pa},${Pa},${sl}\\)$`),bR=new RegExp(`^rgba\\(${ir},${ir},${ir},${sl}\\)$`),TR=new RegExp(`^hsl\\(${sl},${ir},${ir}\\)$`),wR=new RegExp(`^hsla\\(${sl},${ir},${ir},${sl}\\)$`),Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Cu(to,Gs,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:Fg,formatHex:Fg,formatHex8:AR,formatHsl:CR,formatRgb:Ug,toString:Ug});function Fg(){return this.rgb().formatHex()}function AR(){return this.rgb().formatHex8()}function CR(){return rv(this).formatHsl()}function Ug(){return this.rgb().formatRgb()}function Gs(i){var t,e;return i=(i+"").trim().toLowerCase(),(t=yR.exec(i))?(e=t[1].length,t=parseInt(t[1],16),e===6?Og(t):e===3?new En(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?ec(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?ec(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=SR.exec(i))?new En(t[1],t[2],t[3],1):(t=MR.exec(i))?new En(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ER.exec(i))?ec(t[1],t[2],t[3],t[4]):(t=bR.exec(i))?ec(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=TR.exec(i))?zg(t[1],t[2]/100,t[3]/100,1):(t=wR.exec(i))?zg(t[1],t[2]/100,t[3]/100,t[4]):Ig.hasOwnProperty(i)?Og(Ig[i]):i==="transparent"?new En(NaN,NaN,NaN,0):null}function Og(i){return new En(i>>16&255,i>>8&255,i&255,1)}function ec(i,t,e,n){return n<=0&&(i=t=e=NaN),new En(i,t,e,n)}function iv(i){return i instanceof to||(i=Gs(i)),i?(i=i.rgb(),new En(i.r,i.g,i.b,i.opacity)):new En}function md(i,t,e,n){return arguments.length===1?iv(i):new En(i,t,e,n??1)}function En(i,t,e,n){this.r=+i,this.g=+t,this.b=+e,this.opacity=+n}Cu(En,md,Lp(to,{brighter(i){return i=i==null?$a:Math.pow($a,i),new En(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Hs:Math.pow(Hs,i),new En(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new En(Is(this.r),Is(this.g),Is(this.b),Qc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Bg,formatHex:Bg,formatHex8:RR,formatRgb:kg,toString:kg}));function Bg(){return`#${ws(this.r)}${ws(this.g)}${ws(this.b)}`}function RR(){return`#${ws(this.r)}${ws(this.g)}${ws(this.b)}${ws((isNaN(this.opacity)?1:this.opacity)*255)}`}function kg(){const i=Qc(this.opacity);return`${i===1?"rgb(":"rgba("}${Is(this.r)}, ${Is(this.g)}, ${Is(this.b)}${i===1?")":`, ${i})`}`}function Qc(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Is(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function ws(i){return i=Is(i),(i<16?"0":"")+i.toString(16)}function zg(i,t,e,n){return n<=0?i=t=e=NaN:e<=0||e>=1?i=t=NaN:t<=0&&(i=NaN),new Ui(i,t,e,n)}function rv(i){if(i instanceof Ui)return new Ui(i.h,i.s,i.l,i.opacity);if(i instanceof to||(i=Gs(i)),!i)return new Ui;if(i instanceof Ui)return i;i=i.rgb();var t=i.r/255,e=i.g/255,n=i.b/255,r=Math.min(t,e,n),s=Math.max(t,e,n),a=NaN,o=s-r,l=(s+r)/2;return o?(t===s?a=(e-n)/o+(e<n)*6:e===s?a=(n-t)/o+2:a=(t-e)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new Ui(a,o,l,i.opacity)}function PR(i,t,e,n){return arguments.length===1?rv(i):new Ui(i,t,e,n??1)}function Ui(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}Cu(Ui,PR,Lp(to,{brighter(i){return i=i==null?$a:Math.pow($a,i),new Ui(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Hs:Math.pow(Hs,i),new Ui(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,e=this.l,n=e+(e<.5?e:1-e)*t,r=2*e-n;return new En(Lf(i>=240?i-240:i+120,r,n),Lf(i,r,n),Lf(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new Ui(Vg(this.h),nc(this.s),nc(this.l),Qc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Qc(this.opacity);return`${i===1?"hsl(":"hsla("}${Vg(this.h)}, ${nc(this.s)*100}%, ${nc(this.l)*100}%${i===1?")":`, ${i})`}`}}));function Vg(i){return i=(i||0)%360,i<0?i+360:i}function nc(i){return Math.max(0,Math.min(1,i||0))}function Lf(i,t,e){return(i<60?t+(e-t)*i/60:i<180?e:i<240?t+(e-t)*(240-i)/60:t)*255}const DR=Math.PI/180,LR=180/Math.PI;var sv=-.14861,Np=1.78277,Ip=-.29227,Ru=-.90649,al=1.97294,Hg=al*Ru,Gg=al*Np,Wg=Np*Ip-Ru*sv;function NR(i){if(i instanceof Fs)return new Fs(i.h,i.s,i.l,i.opacity);i instanceof En||(i=iv(i));var t=i.r/255,e=i.g/255,n=i.b/255,r=(Wg*n+Hg*t-Gg*e)/(Wg+Hg-Gg),s=n-r,a=(al*(e-r)-Ip*s)/Ru,o=Math.sqrt(a*a+s*s)/(al*r*(1-r)),l=o?Math.atan2(a,s)*LR-120:NaN;return new Fs(l<0?l+360:l,o,r,i.opacity)}function is(i,t,e,n){return arguments.length===1?NR(i):new Fs(i,t,e,n??1)}function Fs(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}Cu(Fs,is,Lp(to,{brighter(i){return i=i==null?$a:Math.pow($a,i),new Fs(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Hs:Math.pow(Hs,i),new Fs(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=isNaN(this.h)?0:(this.h+120)*DR,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),n=Math.cos(i),r=Math.sin(i);return new En(255*(t+e*(sv*n+Np*r)),255*(t+e*(Ip*n+Ru*r)),255*(t+e*(al*n)),this.opacity)}}));const Pu=i=>()=>i;function av(i,t){return function(e){return i+e*t}}function IR(i,t,e){return i=Math.pow(i,e),t=Math.pow(t,e)-i,e=1/e,function(n){return Math.pow(i+n*t,e)}}function FR(i,t){var e=t-i;return e?av(i,e>180||e<-180?e-360*Math.round(e/360):e):Pu(isNaN(i)?t:i)}function UR(i){return(i=+i)==1?Da:function(t,e){return e-t?IR(t,e,i):Pu(isNaN(t)?e:t)}}function Da(i,t){var e=t-i;return e?av(i,e):Pu(isNaN(i)?t:i)}const tu=(function i(t){var e=UR(t);function n(r,s){var a=e((r=md(r)).r,(s=md(s)).r),o=e(r.g,s.g),l=e(r.b,s.b),c=Da(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=l(u),r.opacity=c(u),r+""}}return n.gamma=i,n})(1);function OR(i,t){t||(t=[]);var e=i?Math.min(t.length,i.length):0,n=t.slice(),r;return function(s){for(r=0;r<e;++r)n[r]=i[r]*(1-s)+t[r]*s;return n}}function BR(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kR(i,t){var e=t?t.length:0,n=i?Math.min(e,i.length):0,r=new Array(n),s=new Array(e),a;for(a=0;a<n;++a)r[a]=Us(i[a],t[a]);for(;a<e;++a)s[a]=t[a];return function(o){for(a=0;a<n;++a)s[a]=r[a](o);return s}}function zR(i,t){var e=new Date;return i=+i,t=+t,function(n){return e.setTime(i*(1-n)+t*n),e}}function Ii(i,t){return i=+i,t=+t,function(e){return i*(1-e)+t*e}}function VR(i,t){var e={},n={},r;(i===null||typeof i!="object")&&(i={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in i?e[r]=Us(i[r],t[r]):n[r]=t[r];return function(s){for(r in e)n[r]=e[r](s);return n}}var gd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Nf=new RegExp(gd.source,"g");function HR(i){return function(){return i}}function GR(i){return function(t){return i(t)+""}}function ov(i,t){var e=gd.lastIndex=Nf.lastIndex=0,n,r,s,a=-1,o=[],l=[];for(i=i+"",t=t+"";(n=gd.exec(i))&&(r=Nf.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),o[a]?o[a]+=s:o[++a]=s),(n=n[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:Ii(n,r)})),e=Nf.lastIndex;return e<t.length&&(s=t.slice(e),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?GR(l[0].x):HR(t):(t=l.length,function(c){for(var u=0,f;u<t;++u)o[(f=l[u]).i]=f.x(c);return o.join("")})}function Us(i,t){var e=typeof t,n;return t==null||e==="boolean"?Pu(t):(e==="number"?Ii:e==="string"?(n=Gs(t))?(t=n,tu):ov:t instanceof Gs?tu:t instanceof Date?zR:BR(t)?OR:Array.isArray(t)?kR:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?VR:Ii)(i,t)}function WR(i,t){return i=+i,t=+t,function(e){return Math.round(i*(1-e)+t*e)}}var Xg=180/Math.PI,_d={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function lv(i,t,e,n,r,s){var a,o,l;return(a=Math.sqrt(i*i+t*t))&&(i/=a,t/=a),(l=i*e+t*n)&&(e-=i*l,n-=t*l),(o=Math.sqrt(e*e+n*n))&&(e/=o,n/=o,l/=o),i*n<t*e&&(i=-i,t=-t,l=-l,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(t,i)*Xg,skewX:Math.atan(l)*Xg,scaleX:a,scaleY:o}}var ic;function XR(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?_d:lv(t.a,t.b,t.c,t.d,t.e,t.f)}function $R(i){return i==null||(ic||(ic=document.createElementNS("http://www.w3.org/2000/svg","g")),ic.setAttribute("transform",i),!(i=ic.transform.baseVal.consolidate()))?_d:(i=i.matrix,lv(i.a,i.b,i.c,i.d,i.e,i.f))}function cv(i,t,e,n){function r(c){return c.length?c.pop()+" ":""}function s(c,u,f,h,d,p){if(c!==f||u!==h){var _=d.push("translate(",null,t,null,e);p.push({i:_-4,x:Ii(c,f)},{i:_-2,x:Ii(u,h)})}else(f||h)&&d.push("translate("+f+t+h+e)}function a(c,u,f,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:f.push(r(f)+"rotate(",null,n)-2,x:Ii(c,u)})):u&&f.push(r(f)+"rotate("+u+n)}function o(c,u,f,h){c!==u?h.push({i:f.push(r(f)+"skewX(",null,n)-2,x:Ii(c,u)}):u&&f.push(r(f)+"skewX("+u+n)}function l(c,u,f,h,d,p){if(c!==f||u!==h){var _=d.push(r(d)+"scale(",null,",",null,")");p.push({i:_-4,x:Ii(c,f)},{i:_-2,x:Ii(u,h)})}else(f!==1||h!==1)&&d.push(r(d)+"scale("+f+","+h+")")}return function(c,u){var f=[],h=[];return c=i(c),u=i(u),s(c.translateX,c.translateY,u.translateX,u.translateY,f,h),a(c.rotate,u.rotate,f,h),o(c.skewX,u.skewX,f,h),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,h),c=u=null,function(d){for(var p=-1,_=h.length,m;++p<_;)f[(m=h[p]).i]=m.x(d);return f.join("")}}}var YR=cv(XR,"px, ","px)","deg)"),qR=cv($R,", ",")",")");function uv(i){return(function t(e){e=+e;function n(r,s){var a=i((r=is(r)).h,(s=is(s)).h),o=Da(r.s,s.s),l=Da(r.l,s.l),c=Da(r.opacity,s.opacity);return function(u){return r.h=a(u),r.s=o(u),r.l=l(Math.pow(u,e)),r.opacity=c(u),r+""}}return n.gamma=t,n})(1)}uv(FR);var fv=uv(Da),Ya=0,To=0,ho=0,hv=1e3,eu,wo,nu=0,Ws=0,Du=0,ol=typeof performance=="object"&&performance.now?performance:Date,dv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Fp(){return Ws||(dv(KR),Ws=ol.now()+Du)}function KR(){Ws=0}function iu(){this._call=this._time=this._next=null}iu.prototype=Up.prototype={constructor:iu,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?Fp():+e)+(t==null?0:+t),!this._next&&wo!==this&&(wo?wo._next=this:eu=this,wo=this),this._call=i,this._time=e,xd()},stop:function(){this._call&&(this._call=null,this._time=1/0,xd())}};function Up(i,t,e){var n=new iu;return n.restart(i,t,e),n}function ZR(){Fp(),++Ya;for(var i=eu,t;i;)(t=Ws-i._time)>=0&&i._call.call(void 0,t),i=i._next;--Ya}function $g(){Ws=(nu=ol.now())+Du,Ya=To=0;try{ZR()}finally{Ya=0,JR(),Ws=0}}function jR(){var i=ol.now(),t=i-nu;t>hv&&(Du-=t,nu=i)}function JR(){for(var i,t=eu,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:eu=e);wo=i,xd(n)}function xd(i){if(!Ya){To&&(To=clearTimeout(To));var t=i-Ws;t>24?(i<1/0&&(To=setTimeout($g,i-ol.now()-Du)),ho&&(ho=clearInterval(ho))):(ho||(nu=ol.now(),ho=setInterval(jR,hv)),Ya=1,dv($g))}}function Yg(i,t,e){var n=new iu;return t=t==null?0:+t,n.restart(r=>{n.stop(),i(r+t)},t,e),n}var QR=Gx("start","end","cancel","interrupt"),tP=[],pv=0,qg=1,vd=2,Dc=3,Kg=4,yd=5,Lc=6;function Lu(i,t,e,n,r,s){var a=i.__transition;if(!a)i.__transition={};else if(e in a)return;eP(i,e,{name:t,index:n,group:r,on:QR,tween:tP,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:pv})}function Op(i,t){var e=zi(i,t);if(e.state>pv)throw new Error("too late; already scheduled");return e}function ar(i,t){var e=zi(i,t);if(e.state>Dc)throw new Error("too late; already running");return e}function zi(i,t){var e=i.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function eP(i,t,e){var n=i.__transition,r;n[t]=e,e.timer=Up(s,0,e.time);function s(c){e.state=qg,e.timer.restart(a,e.delay,e.time),e.delay<=c&&a(c-e.delay)}function a(c){var u,f,h,d;if(e.state!==qg)return l();for(u in n)if(d=n[u],d.name===e.name){if(d.state===Dc)return Yg(a);d.state===Kg?(d.state=Lc,d.timer.stop(),d.on.call("interrupt",i,i.__data__,d.index,d.group),delete n[u]):+u<t&&(d.state=Lc,d.timer.stop(),d.on.call("cancel",i,i.__data__,d.index,d.group),delete n[u])}if(Yg(function(){e.state===Dc&&(e.state=Kg,e.timer.restart(o,e.delay,e.time),o(c))}),e.state=vd,e.on.call("start",i,i.__data__,e.index,e.group),e.state===vd){for(e.state=Dc,r=new Array(h=e.tween.length),u=0,f=-1;u<h;++u)(d=e.tween[u].value.call(i,i.__data__,e.index,e.group))&&(r[++f]=d);r.length=f+1}}function o(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=yd,1),f=-1,h=r.length;++f<h;)r[f].call(i,u);e.state===yd&&(e.on.call("end",i,i.__data__,e.index,e.group),l())}function l(){e.state=Lc,e.timer.stop(),delete n[t];for(var c in n)return;delete i.__transition}}function nP(i,t){var e=i.__transition,n,r,s=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((n=e[a]).name!==t){s=!1;continue}r=n.state>vd&&n.state<yd,n.state=Lc,n.timer.stop(),n.on.call(r?"interrupt":"cancel",i,i.__data__,n.index,n.group),delete e[a]}s&&delete i.__transition}}function iP(i){return this.each(function(){nP(this,i)})}function rP(i,t){var e,n;return function(){var r=ar(this,i),s=r.tween;if(s!==e){n=e=s;for(var a=0,o=n.length;a<o;++a)if(n[a].name===t){n=n.slice(),n.splice(a,1);break}}r.tween=n}}function sP(i,t,e){var n,r;if(typeof e!="function")throw new Error;return function(){var s=ar(this,i),a=s.tween;if(a!==n){r=(n=a).slice();for(var o={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=o;break}l===c&&r.push(o)}s.tween=r}}function aP(i,t){var e=this._id;if(i+="",arguments.length<2){for(var n=zi(this.node(),e).tween,r=0,s=n.length,a;r<s;++r)if((a=n[r]).name===i)return a.value;return null}return this.each((t==null?rP:sP)(e,i,t))}function Bp(i,t,e){var n=i._id;return i.each(function(){var r=ar(this,n);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return zi(r,n).value[t]}}function mv(i,t){var e;return(typeof t=="number"?Ii:t instanceof Gs?tu:(e=Gs(t))?(t=e,tu):ov)(i,t)}function oP(i){return function(){this.removeAttribute(i)}}function lP(i){return function(){this.removeAttributeNS(i.space,i.local)}}function cP(i,t,e){var n,r=e+"",s;return function(){var a=this.getAttribute(i);return a===r?null:a===n?s:s=t(n=a,e)}}function uP(i,t,e){var n,r=e+"",s;return function(){var a=this.getAttributeNS(i.space,i.local);return a===r?null:a===n?s:s=t(n=a,e)}}function fP(i,t,e){var n,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttribute(i):(a=this.getAttribute(i),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o)))}}function hP(i,t,e){var n,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttributeNS(i.space,i.local):(a=this.getAttributeNS(i.space,i.local),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o)))}}function dP(i,t){var e=Au(i),n=e==="transform"?qR:mv;return this.attrTween(i,typeof t=="function"?(e.local?hP:fP)(e,n,Bp(this,"attr."+i,t)):t==null?(e.local?lP:oP)(e):(e.local?uP:cP)(e,n,t))}function pP(i,t){return function(e){this.setAttribute(i,t.call(this,e))}}function mP(i,t){return function(e){this.setAttributeNS(i.space,i.local,t.call(this,e))}}function gP(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&mP(i,s)),e}return r._value=t,r}function _P(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&pP(i,s)),e}return r._value=t,r}function xP(i,t){var e="attr."+i;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var n=Au(i);return this.tween(e,(n.local?gP:_P)(n,t))}function vP(i,t){return function(){Op(this,i).delay=+t.apply(this,arguments)}}function yP(i,t){return t=+t,function(){Op(this,i).delay=t}}function SP(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?vP:yP)(t,i)):zi(this.node(),t).delay}function MP(i,t){return function(){ar(this,i).duration=+t.apply(this,arguments)}}function EP(i,t){return t=+t,function(){ar(this,i).duration=t}}function bP(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?MP:EP)(t,i)):zi(this.node(),t).duration}function TP(i,t){if(typeof t!="function")throw new Error;return function(){ar(this,i).ease=t}}function wP(i){var t=this._id;return arguments.length?this.each(TP(t,i)):zi(this.node(),t).ease}function AP(i,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;ar(this,i).ease=e}}function CP(i){if(typeof i!="function")throw new Error;return this.each(AP(this._id,i))}function RP(i){typeof i!="function"&&(i=$x(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new Lr(n,this._parents,this._name,this._id)}function PP(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,e=i._groups,n=t.length,r=e.length,s=Math.min(n,r),a=new Array(n),o=0;o<s;++o)for(var l=t[o],c=e[o],u=l.length,f=a[o]=new Array(u),h,d=0;d<u;++d)(h=l[d]||c[d])&&(f[d]=h);for(;o<n;++o)a[o]=t[o];return new Lr(a,this._parents,this._name,this._id)}function DP(i){return(i+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function LP(i,t,e){var n,r,s=DP(t)?Op:ar;return function(){var a=s(this,i),o=a.on;o!==n&&(r=(n=o).copy()).on(t,e),a.on=r}}function NP(i,t){var e=this._id;return arguments.length<2?zi(this.node(),e).on.on(i):this.each(LP(e,i,t))}function IP(i){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==i)return;t&&t.removeChild(this)}}function FP(){return this.on("end.remove",IP(this._id))}function UP(i){var t=this._name,e=this._id;typeof i!="function"&&(i=Pp(i));for(var n=this._groups,r=n.length,s=new Array(r),a=0;a<r;++a)for(var o=n[a],l=o.length,c=s[a]=new Array(l),u,f,h=0;h<l;++h)(u=o[h])&&(f=i.call(u,u.__data__,h,o))&&("__data__"in u&&(f.__data__=u.__data__),c[h]=f,Lu(c[h],t,e,h,c,zi(u,e)));return new Lr(s,this._parents,t,e)}function OP(i){var t=this._name,e=this._id;typeof i!="function"&&(i=Xx(i));for(var n=this._groups,r=n.length,s=[],a=[],o=0;o<r;++o)for(var l=n[o],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var h=i.call(u,u.__data__,f,l),d,p=zi(u,e),_=0,m=h.length;_<m;++_)(d=h[_])&&Lu(d,t,e,_,h,p);s.push(h),a.push(u)}return new Lr(s,a,t,e)}var BP=Qa.prototype.constructor;function kP(){return new BP(this._groups,this._parents)}function zP(i,t){var e,n,r;return function(){var s=Xa(this,i),a=(this.style.removeProperty(i),Xa(this,i));return s===a?null:s===e&&a===n?r:r=t(e=s,n=a)}}function gv(i){return function(){this.style.removeProperty(i)}}function VP(i,t,e){var n,r=e+"",s;return function(){var a=Xa(this,i);return a===r?null:a===n?s:s=t(n=a,e)}}function HP(i,t,e){var n,r,s;return function(){var a=Xa(this,i),o=e(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(i),Xa(this,i))),a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o))}}function GP(i,t){var e,n,r,s="style."+t,a="end."+s,o;return function(){var l=ar(this,i),c=l.on,u=l.value[s]==null?o||(o=gv(t)):void 0;(c!==e||r!==u)&&(n=(e=c).copy()).on(a,r=u),l.on=n}}function WP(i,t,e){var n=(i+="")=="transform"?YR:mv;return t==null?this.styleTween(i,zP(i,n)).on("end.style."+i,gv(i)):typeof t=="function"?this.styleTween(i,HP(i,n,Bp(this,"style."+i,t))).each(GP(this._id,i)):this.styleTween(i,VP(i,n,t),e).on("end.style."+i,null)}function XP(i,t,e){return function(n){this.style.setProperty(i,t.call(this,n),e)}}function $P(i,t,e){var n,r;function s(){var a=t.apply(this,arguments);return a!==r&&(n=(r=a)&&XP(i,a,e)),n}return s._value=t,s}function YP(i,t,e){var n="style."+(i+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,$P(i,t,e??""))}function qP(i){return function(){this.textContent=i}}function KP(i){return function(){var t=i(this);this.textContent=t??""}}function ZP(i){return this.tween("text",typeof i=="function"?KP(Bp(this,"text",i)):qP(i==null?"":i+""))}function jP(i){return function(t){this.textContent=i.call(this,t)}}function JP(i){var t,e;function n(){var r=i.apply(this,arguments);return r!==e&&(t=(e=r)&&jP(r)),t}return n._value=i,n}function QP(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,JP(i))}function t2(){for(var i=this._name,t=this._id,e=_v(),n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var u=zi(l,t);Lu(l,i,e,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Lr(n,this._parents,i,e)}function e2(){var i,t,e=this,n=e._id,r=e.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--r===0&&s()}};e.each(function(){var c=ar(this,n),u=c.on;u!==i&&(t=(i=u).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),r===0&&s()})}var n2=0;function Lr(i,t,e,n){this._groups=i,this._parents=t,this._name=e,this._id=n}function Sd(i){return Qa().transition(i)}function _v(){return++n2}var dr=Qa.prototype;Lr.prototype=Sd.prototype={constructor:Lr,select:UP,selectAll:OP,selectChild:dr.selectChild,selectChildren:dr.selectChildren,filter:RP,merge:PP,selection:kP,transition:t2,call:dr.call,nodes:dr.nodes,node:dr.node,size:dr.size,empty:dr.empty,each:dr.each,on:NP,attr:dP,attrTween:xP,style:WP,styleTween:YP,text:ZP,textTween:QP,remove:FP,tween:aP,delay:SP,duration:bP,ease:wP,easeVarying:CP,end:e2,[Symbol.iterator]:dr[Symbol.iterator]};function $i(i){return--i*i*i+1}function Md(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var i2={time:null,delay:0,duration:250,ease:Md};function r2(i,t){for(var e;!(e=i.__transition)||!(e=e[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return e}function s2(i){var t,e;i instanceof Lr?(t=i._id,i=i._name):(t=_v(),(e=i2).time=Fp(),i=i==null?null:i+"");for(var n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Lu(l,i,t,c,a,e||r2(l,t));return new Lr(n,this._parents,i,t)}Qa.prototype.interrupt=iP;Qa.prototype.transition=s2;const Ed=Math.PI,bd=2*Ed,vs=1e-6,a2=bd-vs;function xv(i){this._+=i[0];for(let t=1,e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function o2(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return xv;const e=10**t;return function(n){this._+=n[0];for(let r=1,s=n.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+n[r]}}class l2{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?xv:o2(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,r){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(t,e,n,r,s,a){this._append`C${+t},${+e},${+n},${+r},${this._x1=+s},${this._y1=+a}`}arcTo(t,e,n,r,s){if(t=+t,e=+e,n=+n,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let a=this._x1,o=this._y1,l=n-t,c=r-e,u=a-t,f=o-e,h=u*u+f*f;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(h>vs)if(!(Math.abs(f*l-c*u)>vs)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let d=n-a,p=r-o,_=l*l+c*c,m=d*d+p*p,g=Math.sqrt(_),S=Math.sqrt(h),x=s*Math.tan((Ed-Math.acos((_+h-m)/(2*g*S)))/2),v=x/S,M=x/g;Math.abs(v-1)>vs&&this._append`L${t+v*u},${e+v*f}`,this._append`A${s},${s},0,0,${+(f*d>u*p)},${this._x1=t+M*l},${this._y1=e+M*c}`}}arc(t,e,n,r,s,a){if(t=+t,e=+e,n=+n,a=!!a,n<0)throw new Error(`negative radius: ${n}`);let o=n*Math.cos(r),l=n*Math.sin(r),c=t+o,u=e+l,f=1^a,h=a?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>vs||Math.abs(this._y1-u)>vs)&&this._append`L${c},${u}`,n&&(h<0&&(h=h%bd+bd),h>a2?this._append`A${n},${n},0,1,${f},${t-o},${e-l}A${n},${n},0,1,${f},${this._x1=c},${this._y1=u}`:h>vs&&this._append`A${n},${n},0,${+(h>=Ed)},${f},${this._x1=t+n*Math.cos(s)},${this._y1=e+n*Math.sin(s)}`)}rect(t,e,n,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}}var Zg={},If={},Ff=34,po=10,Uf=13;function vv(i){return new Function("d","return {"+i.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function c2(i,t){var e=vv(i);return function(n,r){return t(e(n),r,i)}}function jg(i){var t=Object.create(null),e=[];return i.forEach(function(n){for(var r in n)r in t||e.push(t[r]=r)}),e}function zn(i,t){var e=i+"",n=e.length;return n<t?new Array(t-n+1).join(0)+e:e}function u2(i){return i<0?"-"+zn(-i,6):i>9999?"+"+zn(i,6):zn(i,4)}function f2(i){var t=i.getUTCHours(),e=i.getUTCMinutes(),n=i.getUTCSeconds(),r=i.getUTCMilliseconds();return isNaN(i)?"Invalid Date":u2(i.getUTCFullYear())+"-"+zn(i.getUTCMonth()+1,2)+"-"+zn(i.getUTCDate(),2)+(r?"T"+zn(t,2)+":"+zn(e,2)+":"+zn(n,2)+"."+zn(r,3)+"Z":n?"T"+zn(t,2)+":"+zn(e,2)+":"+zn(n,2)+"Z":e||t?"T"+zn(t,2)+":"+zn(e,2)+"Z":"")}function h2(i){var t=new RegExp('["'+i+`
\r]`),e=i.charCodeAt(0);function n(f,h){var d,p,_=r(f,function(m,g){if(d)return d(m,g-1);p=m,d=h?c2(m,h):vv(m)});return _.columns=p||[],_}function r(f,h){var d=[],p=f.length,_=0,m=0,g,S=p<=0,x=!1;f.charCodeAt(p-1)===po&&--p,f.charCodeAt(p-1)===Uf&&--p;function v(){if(S)return If;if(x)return x=!1,Zg;var E,T=_,A;if(f.charCodeAt(T)===Ff){for(;_++<p&&f.charCodeAt(_)!==Ff||f.charCodeAt(++_)===Ff;);return(E=_)>=p?S=!0:(A=f.charCodeAt(_++))===po?x=!0:A===Uf&&(x=!0,f.charCodeAt(_)===po&&++_),f.slice(T+1,E-1).replace(/""/g,'"')}for(;_<p;){if((A=f.charCodeAt(E=_++))===po)x=!0;else if(A===Uf)x=!0,f.charCodeAt(_)===po&&++_;else if(A!==e)continue;return f.slice(T,E)}return S=!0,f.slice(T,p)}for(;(g=v())!==If;){for(var M=[];g!==Zg&&g!==If;)M.push(g),g=v();h&&(M=h(M,m++))==null||d.push(M)}return d}function s(f,h){return f.map(function(d){return h.map(function(p){return u(d[p])}).join(i)})}function a(f,h){return h==null&&(h=jg(f)),[h.map(u).join(i)].concat(s(f,h)).join(`
`)}function o(f,h){return h==null&&(h=jg(f)),s(f,h).join(`
`)}function l(f){return f.map(c).join(`
`)}function c(f){return f.map(u).join(i)}function u(f){return f==null?"":f instanceof Date?f2(f):t.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:n,parseRows:r,format:a,formatBody:o,formatRows:l,formatRow:c,formatValue:u}}var d2=h2(","),p2=d2.parse;function m2(i){for(var t in i){var e=i[t].trim(),n,r;if(!e)e=null;else if(e==="true")e=!0;else if(e==="false")e=!1;else if(e==="NaN")e=NaN;else if(!isNaN(n=+e))e=n;else if(r=e.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))g2&&r[4]&&!r[7]&&(e=e.replace(/-/g,"/").replace(/T/," ")),e=new Date(e);else continue;i[t]=e}return i}const g2=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function _2(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);return i.text()}function x2(i,t){return fetch(i,t).then(_2)}function v2(i){return function(t,e,n){return arguments.length===2&&typeof e=="function"&&(n=e,e=void 0),x2(t,e).then(function(r){return i(r,n)})}}var y2=v2(p2);function S2(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);if(!(i.status===204||i.status===205))return i.json()}function yv(i,t){return fetch(i,t).then(S2)}function M2(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function ru(i,t){if(!isFinite(i)||i===0)return null;var e=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"),n=i.slice(0,e);return[n.length>1?n[0]+n.slice(2):n,+i.slice(e+1)]}function qa(i){return i=ru(Math.abs(i)),i?i[1]:NaN}function E2(i,t){return function(e,n){for(var r=e.length,s=[],a=0,o=i[0],l=0;r>0&&o>0&&(l+o+1>n&&(o=Math.max(1,n-l)),s.push(e.substring(r-=o,r+o)),!((l+=o+1)>n));)o=i[a=(a+1)%i.length];return s.reverse().join(t)}}function b2(i){return function(t){return t.replace(/[0-9]/g,function(e){return i[+e]})}}var T2=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function su(i){if(!(t=T2.exec(i)))throw new Error("invalid format: "+i);var t;return new kp({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}su.prototype=kp.prototype;function kp(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}kp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function w2(i){t:for(var t=i.length,e=1,n=-1,r;e<t;++e)switch(i[e]){case".":n=r=e;break;case"0":n===0&&(n=e),r=e;break;default:if(!+i[e])break t;n>0&&(n=0);break}return n>0?i.slice(0,n)+i.slice(r+1):i}var au;function A2(i,t){var e=ru(i,t);if(!e)return au=void 0,i.toPrecision(t);var n=e[0],r=e[1],s=r-(au=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=n.length;return s===a?n:s>a?n+new Array(s-a+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+ru(i,Math.max(0,t+s-1))[0]}function Jg(i,t){var e=ru(i,t);if(!e)return i+"";var n=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+n:n.length>r+1?n.slice(0,r+1)+"."+n.slice(r+1):n+new Array(r-n.length+2).join("0")}const Qg={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:M2,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>Jg(i*100,t),r:Jg,s:A2,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function t0(i){return i}var e0=Array.prototype.map,n0=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function C2(i){var t=i.grouping===void 0||i.thousands===void 0?t0:E2(e0.call(i.grouping,Number),i.thousands+""),e=i.currency===void 0?"":i.currency[0]+"",n=i.currency===void 0?"":i.currency[1]+"",r=i.decimal===void 0?".":i.decimal+"",s=i.numerals===void 0?t0:b2(e0.call(i.numerals,String)),a=i.percent===void 0?"%":i.percent+"",o=i.minus===void 0?"−":i.minus+"",l=i.nan===void 0?"NaN":i.nan+"";function c(f,h){f=su(f);var d=f.fill,p=f.align,_=f.sign,m=f.symbol,g=f.zero,S=f.width,x=f.comma,v=f.precision,M=f.trim,E=f.type;E==="n"?(x=!0,E="g"):Qg[E]||(v===void 0&&(v=12),M=!0,E="g"),(g||d==="0"&&p==="=")&&(g=!0,d="0",p="=");var T=(h&&h.prefix!==void 0?h.prefix:"")+(m==="$"?e:m==="#"&&/[boxX]/.test(E)?"0"+E.toLowerCase():""),A=(m==="$"?n:/[%p]/.test(E)?a:"")+(h&&h.suffix!==void 0?h.suffix:""),y=Qg[E],b=/[defgprs%]/.test(E);v=v===void 0?6:/[gprs]/.test(E)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function R(D){var I=T,O=A,F,z,U;if(E==="c")O=y(D)+O,D="";else{D=+D;var H=D<0||1/D<0;if(D=isNaN(D)?l:y(Math.abs(D),v),M&&(D=w2(D)),H&&+D==0&&_!=="+"&&(H=!1),I=(H?_==="("?_:o:_==="-"||_==="("?"":_)+I,O=(E==="s"&&!isNaN(D)&&au!==void 0?n0[8+au/3]:"")+O+(H&&_==="("?")":""),b){for(F=-1,z=D.length;++F<z;)if(U=D.charCodeAt(F),48>U||U>57){O=(U===46?r+D.slice(F+1):D.slice(F))+O,D=D.slice(0,F);break}}}x&&!g&&(D=t(D,1/0));var Z=I.length+D.length+O.length,L=Z<S?new Array(S-Z+1).join(d):"";switch(x&&g&&(D=t(L+D,L.length?S-O.length:1/0),L=""),p){case"<":D=I+D+O+L;break;case"=":D=I+L+D+O;break;case"^":D=L.slice(0,Z=L.length>>1)+I+D+O+L.slice(Z);break;default:D=L+I+D+O;break}return s(D)}return R.toString=function(){return f+""},R}function u(f,h){var d=Math.max(-8,Math.min(8,Math.floor(qa(h)/3)))*3,p=Math.pow(10,-d),_=c((f=su(f),f.type="f",f),{suffix:n0[8+d/3]});return function(m){return _(p*m)}}return{format:c,formatPrefix:u}}var rc,Vr,Sv;R2({thousands:",",grouping:[3],currency:["$",""]});function R2(i){return rc=C2(i),Vr=rc.format,Sv=rc.formatPrefix,rc}function P2(i){return Math.max(0,-qa(Math.abs(i)))}function D2(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(qa(t)/3)))*3-qa(Math.abs(i)))}function L2(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,qa(t)-qa(i))+1}var Pe=1e-6,ce=Math.PI,Hn=ce/2,i0=ce/4,mi=ce*2,ii=180/ce,Ze=ce/180,Ue=Math.abs,Mv=Math.atan,ll=Math.atan2,He=Math.cos,N2=Math.exp,I2=Math.log,Ge=Math.sin,F2=Math.sign||function(i){return i>0?1:i<0?-1:0},Ys=Math.sqrt,U2=Math.tan;function O2(i){return i>1?0:i<-1?ce:Math.acos(i)}function cl(i){return i>1?Hn:i<-1?-Hn:Math.asin(i)}function Ai(){}function ou(i,t){i&&s0.hasOwnProperty(i.type)&&s0[i.type](i,t)}var r0={Feature:function(i,t){ou(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)ou(e[n].geometry,t)}},s0={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){Td(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Td(e[n],t,0)},Polygon:function(i,t){a0(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)a0(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)ou(e[n],t)}};function Td(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function a0(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)Td(i[e],t,1);t.polygonEnd()}function ma(i,t){i&&r0.hasOwnProperty(i.type)?r0[i.type](i,t):ou(i,t)}function wd(i){return[ll(i[1],i[0]),cl(i[2])]}function Ka(i){var t=i[0],e=i[1],n=He(e);return[n*He(t),n*Ge(t),Ge(e)]}function sc(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function lu(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Of(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function ac(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Ad(i){var t=Ys(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function Cd(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function Rd(i,t){return Ue(i)>ce&&(i-=Math.round(i/mi)*mi),[i,t]}Rd.invert=Rd;function Ev(i,t,e){return(i%=mi)?t||e?Cd(l0(i),c0(t,e)):l0(i):t||e?c0(t,e):Rd}function o0(i){return function(t,e){return t+=i,Ue(t)>ce&&(t-=Math.round(t/mi)*mi),[t,e]}}function l0(i){var t=o0(i);return t.invert=o0(-i),t}function c0(i,t){var e=He(i),n=Ge(i),r=He(t),s=Ge(t);function a(o,l){var c=He(l),u=He(o)*c,f=Ge(o)*c,h=Ge(l),d=h*e+u*n;return[ll(f*r-d*s,u*e-h*n),cl(d*r+f*s)]}return a.invert=function(o,l){var c=He(l),u=He(o)*c,f=Ge(o)*c,h=Ge(l),d=h*r-f*s;return[ll(f*r+h*s,u*e+d*n),cl(d*e-u*n)]},a}function B2(i){i=Ev(i[0]*Ze,i[1]*Ze,i.length>2?i[2]*Ze:0);function t(e){return e=i(e[0]*Ze,e[1]*Ze),e[0]*=ii,e[1]*=ii,e}return t.invert=function(e){return e=i.invert(e[0]*Ze,e[1]*Ze),e[0]*=ii,e[1]*=ii,e},t}function k2(i,t,e,n,r,s){if(e){var a=He(t),o=Ge(t),l=n*e;r==null?(r=t+n*mi,s=t-l/2):(r=u0(a,r),s=u0(a,s),(n>0?r<s:r>s)&&(r+=n*mi));for(var c,u=r;n>0?u>s:u<s;u-=l)c=wd([a,-o*He(u),-o*Ge(u)]),i.point(c[0],c[1])}}function u0(i,t){t=Ka(t),t[0]-=i,Ad(t);var e=O2(-t[1]);return((-t[2]<0?-e:e)+mi-Pe)%mi}function bv(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:Ai,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Nc(i,t){return Ue(i[0]-t[0])<Pe&&Ue(i[1]-t[1])<Pe}function oc(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function Tv(i,t,e,n,r){var s=[],a=[],o,l;if(i.forEach(function(p){if(!((_=p.length-1)<=0)){var _,m=p[0],g=p[_],S;if(Nc(m,g)){if(!m[2]&&!g[2]){for(r.lineStart(),o=0;o<_;++o)r.point((m=p[o])[0],m[1]);r.lineEnd();return}g[0]+=2*Pe}s.push(S=new oc(m,p,null,!0)),a.push(S.o=new oc(m,null,S,!1)),s.push(S=new oc(g,p,null,!1)),a.push(S.o=new oc(g,null,S,!0))}}),!!s.length){for(a.sort(t),f0(s),f0(a),o=0,l=a.length;o<l;++o)a[o].e=e=!e;for(var c=s[0],u,f;;){for(var h=c,d=!0;h.v;)if((h=h.n)===c)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,l=u.length;o<l;++o)r.point((f=u[o])[0],f[1]);else n(h.x,h.n.x,1,r);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)r.point((f=u[o])[0],f[1]);else n(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);r.lineEnd()}}}function f0(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function Bf(i){return Ue(i[0])<=ce?i[0]:F2(i[0])*((Ue(i[0])+ce)%mi-ce)}function z2(i,t){var e=Bf(t),n=t[1],r=Ge(n),s=[Ge(e),-He(e),0],a=0,o=0,l=new Vs;r===1?n=Hn+Pe:r===-1&&(n=-Hn-Pe);for(var c=0,u=i.length;c<u;++c)if(h=(f=i[c]).length)for(var f,h,d=f[h-1],p=Bf(d),_=d[1]/2+i0,m=Ge(_),g=He(_),S=0;S<h;++S,p=v,m=E,g=T,d=x){var x=f[S],v=Bf(x),M=x[1]/2+i0,E=Ge(M),T=He(M),A=v-p,y=A>=0?1:-1,b=y*A,R=b>ce,D=m*E;if(l.add(ll(D*y*Ge(b),g*T+D*He(b))),a+=R?A+y*mi:A,R^p>=e^v>=e){var I=lu(Ka(d),Ka(x));Ad(I);var O=lu(s,I);Ad(O);var F=(R^A>=0?-1:1)*cl(O[2]);(n>F||n===F&&(I[0]||I[1]))&&(o+=R^A>=0?1:-1)}}return(a<-Pe||a<Pe&&l<-1e-12)^o&1}function wv(i,t,e,n){return function(r){var s=t(r),a=bv(),o=t(a),l=!1,c,u,f,h={point:d,lineStart:_,lineEnd:m,polygonStart:function(){h.point=g,h.lineStart=S,h.lineEnd=x,u=[],c=[]},polygonEnd:function(){h.point=d,h.lineStart=_,h.lineEnd=m,u=Vx(u);var v=z2(c,n);u.length?(l||(r.polygonStart(),l=!0),Tv(u,H2,v,e,r)):v&&(l||(r.polygonStart(),l=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(v,M){i(v,M)&&r.point(v,M)}function p(v,M){s.point(v,M)}function _(){h.point=p,s.lineStart()}function m(){h.point=d,s.lineEnd()}function g(v,M){f.push([v,M]),o.point(v,M)}function S(){o.lineStart(),f=[]}function x(){g(f[0][0],f[0][1]),o.lineEnd();var v=o.clean(),M=a.result(),E,T=M.length,A,y,b;if(f.pop(),c.push(f),f=null,!!T){if(v&1){if(y=M[0],(A=y.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),E=0;E<A;++E)r.point((b=y[E])[0],b[1]);r.lineEnd()}return}T>1&&v&2&&M.push(M.pop().concat(M.shift())),u.push(M.filter(V2))}}return h}}function V2(i){return i.length>1}function H2(i,t){return((i=i.x)[0]<0?i[1]-Hn-Pe:Hn-i[1])-((t=t.x)[0]<0?t[1]-Hn-Pe:Hn-t[1])}const h0=wv(function(){return!0},G2,X2,[-ce,-Hn]);function G2(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,a){var o=s>0?ce:-ce,l=Ue(s-t);Ue(l-ce)<Pe?(i.point(t,e=(e+a)/2>0?Hn:-Hn),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),i.point(s,e),r=0):n!==o&&l>=ce&&(Ue(t-n)<Pe&&(t-=n*Pe),Ue(s-o)<Pe&&(s-=o*Pe),e=W2(t,e,s,a),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),r=0),i.point(t=s,e=a),n=o},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function W2(i,t,e,n){var r,s,a=Ge(i-e);return Ue(a)>Pe?Mv((Ge(t)*(s=He(n))*Ge(e)-Ge(n)*(r=He(t))*Ge(i))/(r*s*a)):(t+n)/2}function X2(i,t,e,n){var r;if(i==null)r=e*Hn,n.point(-ce,r),n.point(0,r),n.point(ce,r),n.point(ce,0),n.point(ce,-r),n.point(0,-r),n.point(-ce,-r),n.point(-ce,0),n.point(-ce,r);else if(Ue(i[0]-t[0])>Pe){var s=i[0]<t[0]?ce:-ce;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function $2(i){var t=He(i),e=2*Ze,n=t>0,r=Ue(t)>Pe;function s(u,f,h,d){k2(d,i,e,h,u,f)}function a(u,f){return He(u)*He(f)>t}function o(u){var f,h,d,p,_;return{lineStart:function(){p=d=!1,_=1},point:function(m,g){var S=[m,g],x,v=a(m,g),M=n?v?0:c(m,g):v?c(m+(m<0?ce:-ce),g):0;if(!f&&(p=d=v)&&u.lineStart(),v!==d&&(x=l(f,S),(!x||Nc(f,x)||Nc(S,x))&&(S[2]=1)),v!==d)_=0,v?(u.lineStart(),x=l(S,f),u.point(x[0],x[1])):(x=l(f,S),u.point(x[0],x[1],2),u.lineEnd()),f=x;else if(r&&f&&n^v){var E;!(M&h)&&(E=l(S,f,!0))&&(_=0,n?(u.lineStart(),u.point(E[0][0],E[0][1]),u.point(E[1][0],E[1][1]),u.lineEnd()):(u.point(E[1][0],E[1][1]),u.lineEnd(),u.lineStart(),u.point(E[0][0],E[0][1],3)))}v&&(!f||!Nc(f,S))&&u.point(S[0],S[1]),f=S,d=v,h=M},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return _|(p&&d)<<1}}}function l(u,f,h){var d=Ka(u),p=Ka(f),_=[1,0,0],m=lu(d,p),g=sc(m,m),S=m[0],x=g-S*S;if(!x)return!h&&u;var v=t*g/x,M=-t*S/x,E=lu(_,m),T=ac(_,v),A=ac(m,M);Of(T,A);var y=E,b=sc(T,y),R=sc(y,y),D=b*b-R*(sc(T,T)-1);if(!(D<0)){var I=Ys(D),O=ac(y,(-b-I)/R);if(Of(O,T),O=wd(O),!h)return O;var F=u[0],z=f[0],U=u[1],H=f[1],Z;z<F&&(Z=F,F=z,z=Z);var L=z-F,j=Ue(L-ce)<Pe,Mt=j||L<Pe;if(!j&&H<U&&(Z=U,U=H,H=Z),Mt?j?U+H>0^O[1]<(Ue(O[0]-F)<Pe?U:H):U<=O[1]&&O[1]<=H:L>ce^(F<=O[0]&&O[0]<=z)){var bt=ac(y,(-b+I)/R);return Of(bt,T),[O,wd(bt)]}}}function c(u,f){var h=n?i:ce-i,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return wv(a,o,s,n?[0,-i]:[-ce,i-ce])}function Y2(i,t,e,n,r,s){var a=i[0],o=i[1],l=t[0],c=t[1],u=0,f=1,h=l-a,d=c-o,p;if(p=e-a,!(!h&&p>0)){if(p/=h,h<0){if(p<u)return;p<f&&(f=p)}else if(h>0){if(p>f)return;p>u&&(u=p)}if(p=r-a,!(!h&&p<0)){if(p/=h,h<0){if(p>f)return;p>u&&(u=p)}else if(h>0){if(p<u)return;p<f&&(f=p)}if(p=n-o,!(!d&&p>0)){if(p/=d,d<0){if(p<u)return;p<f&&(f=p)}else if(d>0){if(p>f)return;p>u&&(u=p)}if(p=s-o,!(!d&&p<0)){if(p/=d,d<0){if(p>f)return;p>u&&(u=p)}else if(d>0){if(p<u)return;p<f&&(f=p)}return u>0&&(i[0]=a+u*h,i[1]=o+u*d),f<1&&(t[0]=a+f*h,t[1]=o+f*d),!0}}}}}var Ao=1e9,lc=-Ao;function q2(i,t,e,n){function r(c,u){return i<=c&&c<=e&&t<=u&&u<=n}function s(c,u,f,h){var d=0,p=0;if(c==null||(d=a(c,f))!==(p=a(u,f))||l(c,u)<0^f>0)do h.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+f+4)%4)!==p);else h.point(u[0],u[1])}function a(c,u){return Ue(c[0]-i)<Pe?u>0?0:3:Ue(c[0]-e)<Pe?u>0?2:1:Ue(c[1]-t)<Pe?u>0?1:0:u>0?3:2}function o(c,u){return l(c.x,u.x)}function l(c,u){var f=a(c,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=bv(),h,d,p,_,m,g,S,x,v,M,E,T={point:A,lineStart:D,lineEnd:I,polygonStart:b,polygonEnd:R};function A(F,z){r(F,z)&&u.point(F,z)}function y(){for(var F=0,z=0,U=d.length;z<U;++z)for(var H=d[z],Z=1,L=H.length,j=H[0],Mt,bt,Lt=j[0],At=j[1];Z<L;++Z)Mt=Lt,bt=At,j=H[Z],Lt=j[0],At=j[1],bt<=n?At>n&&(Lt-Mt)*(n-bt)>(At-bt)*(i-Mt)&&++F:At<=n&&(Lt-Mt)*(n-bt)<(At-bt)*(i-Mt)&&--F;return F}function b(){u=f,h=[],d=[],E=!0}function R(){var F=y(),z=E&&F,U=(h=Vx(h)).length;(z||U)&&(c.polygonStart(),z&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),U&&Tv(h,o,F,s,c),c.polygonEnd()),u=c,h=d=p=null}function D(){T.point=O,d&&d.push(p=[]),M=!0,v=!1,S=x=NaN}function I(){h&&(O(_,m),g&&v&&f.rejoin(),h.push(f.result())),T.point=A,v&&u.lineEnd()}function O(F,z){var U=r(F,z);if(d&&p.push([F,z]),M)_=F,m=z,g=U,M=!1,U&&(u.lineStart(),u.point(F,z));else if(U&&v)u.point(F,z);else{var H=[S=Math.max(lc,Math.min(Ao,S)),x=Math.max(lc,Math.min(Ao,x))],Z=[F=Math.max(lc,Math.min(Ao,F)),z=Math.max(lc,Math.min(Ao,z))];Y2(H,Z,i,t,e,n)?(v||(u.lineStart(),u.point(H[0],H[1])),u.point(Z[0],Z[1]),U||u.lineEnd(),E=!1):U&&(u.lineStart(),u.point(F,z),E=!1)}S=F,x=z,v=U}return T}}const Pd=i=>i;var kf=new Vs,Dd=new Vs,Av,Cv,Ld,Nd,xr={point:Ai,lineStart:Ai,lineEnd:Ai,polygonStart:function(){xr.lineStart=K2,xr.lineEnd=j2},polygonEnd:function(){xr.lineStart=xr.lineEnd=xr.point=Ai,kf.add(Ue(Dd)),Dd=new Vs},result:function(){var i=kf/2;return kf=new Vs,i}};function K2(){xr.point=Z2}function Z2(i,t){xr.point=Rv,Av=Ld=i,Cv=Nd=t}function Rv(i,t){Dd.add(Nd*i-Ld*t),Ld=i,Nd=t}function j2(){Rv(Av,Cv)}var Za=1/0,cu=Za,ul=-Za,uu=ul,fu={point:J2,lineStart:Ai,lineEnd:Ai,polygonStart:Ai,polygonEnd:Ai,result:function(){var i=[[Za,cu],[ul,uu]];return ul=uu=-(cu=Za=1/0),i}};function J2(i,t){i<Za&&(Za=i),i>ul&&(ul=i),t<cu&&(cu=t),t>uu&&(uu=t)}var Id=0,Fd=0,Co=0,hu=0,du=0,va=0,Ud=0,Od=0,Ro=0,Pv,Dv,qi,Ki,bi={point:Xs,lineStart:d0,lineEnd:p0,polygonStart:function(){bi.lineStart=e3,bi.lineEnd=n3},polygonEnd:function(){bi.point=Xs,bi.lineStart=d0,bi.lineEnd=p0},result:function(){var i=Ro?[Ud/Ro,Od/Ro]:va?[hu/va,du/va]:Co?[Id/Co,Fd/Co]:[NaN,NaN];return Id=Fd=Co=hu=du=va=Ud=Od=Ro=0,i}};function Xs(i,t){Id+=i,Fd+=t,++Co}function d0(){bi.point=Q2}function Q2(i,t){bi.point=t3,Xs(qi=i,Ki=t)}function t3(i,t){var e=i-qi,n=t-Ki,r=Ys(e*e+n*n);hu+=r*(qi+i)/2,du+=r*(Ki+t)/2,va+=r,Xs(qi=i,Ki=t)}function p0(){bi.point=Xs}function e3(){bi.point=i3}function n3(){Lv(Pv,Dv)}function i3(i,t){bi.point=Lv,Xs(Pv=qi=i,Dv=Ki=t)}function Lv(i,t){var e=i-qi,n=t-Ki,r=Ys(e*e+n*n);hu+=r*(qi+i)/2,du+=r*(Ki+t)/2,va+=r,r=Ki*i-qi*t,Ud+=r*(qi+i),Od+=r*(Ki+t),Ro+=r*3,Xs(qi=i,Ki=t)}function Nv(i){this._context=i}Nv.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,mi);break}}},result:Ai};var Bd=new Vs,zf,Iv,Fv,Po,Do,fl={point:Ai,lineStart:function(){fl.point=r3},lineEnd:function(){zf&&Uv(Iv,Fv),fl.point=Ai},polygonStart:function(){zf=!0},polygonEnd:function(){zf=null},result:function(){var i=+Bd;return Bd=new Vs,i}};function r3(i,t){fl.point=Uv,Iv=Po=i,Fv=Do=t}function Uv(i,t){Po-=i,Do-=t,Bd.add(Ys(Po*Po+Do*Do)),Po=i,Do=t}let m0,pu,g0,_0;class x0{constructor(t){this._append=t==null?Ov:s3(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==g0||this._append!==pu){const n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,g0=n,pu=this._append,_0=this._,this._=r}this._+=_0;break}}}result(){const t=this._;return this._="",t.length?t:null}}function Ov(i){let t=1;this._+=i[0];for(const e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function s3(i){const t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return Ov;if(t!==m0){const e=10**t;m0=t,pu=function(r){let s=1;this._+=r[0];for(const a=r.length;s<a;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return pu}function a3(i,t){let e=3,n=4.5,r,s;function a(o){return o&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),ma(o,r(s))),s.result()}return a.area=function(o){return ma(o,r(xr)),xr.result()},a.measure=function(o){return ma(o,r(fl)),fl.result()},a.bounds=function(o){return ma(o,r(fu)),fu.result()},a.centroid=function(o){return ma(o,r(bi)),bi.result()},a.projection=function(o){return arguments.length?(r=o==null?(i=null,Pd):(i=o).stream,a):i},a.context=function(o){return arguments.length?(s=o==null?(t=null,new x0(e)):new Nv(t=o),typeof n!="function"&&s.pointRadius(n),a):t},a.pointRadius=function(o){return arguments.length?(n=typeof o=="function"?o:(s.pointRadius(+o),+o),a):n},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{const l=Math.floor(o);if(!(l>=0))throw new RangeError(`invalid digits: ${o}`);e=l}return t===null&&(s=new x0(e)),a},a.projection(i).digits(e).context(t)}function zp(i){return function(t){var e=new kd;for(var n in i)e[n]=i[n];return e.stream=t,e}}function kd(){}kd.prototype={constructor:kd,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Vp(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),ma(e,i.stream(fu)),t(fu.result()),n!=null&&i.clipExtent(n),i}function Bv(i,t,e){return Vp(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,l=+t[0][1]+(s-a*(n[1][1]+n[0][1]))/2;i.scale(150*a).translate([o,l])},e)}function o3(i,t,e){return Bv(i,[[0,0],t],e)}function l3(i,t,e){return Vp(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),a=(r-s*(n[1][0]+n[0][0]))/2,o=-s*n[0][1];i.scale(150*s).translate([a,o])},e)}function c3(i,t,e){return Vp(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),a=-s*n[0][0],o=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([a,o])},e)}var v0=16,u3=He(30*Ze);function y0(i,t){return+t?h3(i,t):f3(i)}function f3(i){return zp({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function h3(i,t){function e(n,r,s,a,o,l,c,u,f,h,d,p,_,m){var g=c-n,S=u-r,x=g*g+S*S;if(x>4*t&&_--){var v=a+h,M=o+d,E=l+p,T=Ys(v*v+M*M+E*E),A=cl(E/=T),y=Ue(Ue(E)-1)<Pe||Ue(s-f)<Pe?(s+f)/2:ll(M,v),b=i(y,A),R=b[0],D=b[1],I=R-n,O=D-r,F=S*I-g*O;(F*F/x>t||Ue((g*I+S*O)/x-.5)>.3||a*h+o*d+l*p<u3)&&(e(n,r,s,a,o,l,R,D,y,v/=T,M/=T,E,_,m),m.point(R,D),e(R,D,y,v,M,E,c,u,f,h,d,p,_,m))}}return function(n){var r,s,a,o,l,c,u,f,h,d,p,_,m={point:g,lineStart:S,lineEnd:v,polygonStart:function(){n.polygonStart(),m.lineStart=M},polygonEnd:function(){n.polygonEnd(),m.lineStart=S}};function g(A,y){A=i(A,y),n.point(A[0],A[1])}function S(){f=NaN,m.point=x,n.lineStart()}function x(A,y){var b=Ka([A,y]),R=i(A,y);e(f,h,u,d,p,_,f=R[0],h=R[1],u=A,d=b[0],p=b[1],_=b[2],v0,n),n.point(f,h)}function v(){m.point=g,n.lineEnd()}function M(){S(),m.point=E,m.lineEnd=T}function E(A,y){x(r=A,y),s=f,a=h,o=d,l=p,c=_,m.point=x}function T(){e(f,h,u,d,p,_,s,a,r,o,l,c,v0,n),m.lineEnd=v,v()}return m}}var d3=zp({point:function(i,t){this.stream.point(i*Ze,t*Ze)}});function p3(i){return zp({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function m3(i,t,e,n,r){function s(a,o){return a*=n,o*=r,[t+i*a,e-i*o]}return s.invert=function(a,o){return[(a-t)/i*n,(e-o)/i*r]},s}function S0(i,t,e,n,r,s){if(!s)return m3(i,t,e,n,r);var a=He(s),o=Ge(s),l=a*i,c=o*i,u=a/i,f=o/i,h=(o*e-a*t)/i,d=(o*t+a*e)/i;function p(_,m){return _*=n,m*=r,[l*_-c*m+t,e-c*_-l*m]}return p.invert=function(_,m){return[n*(u*_-f*m+h),r*(d-f*_-u*m)]},p}function g3(i){return _3(function(){return i})()}function _3(i){var t,e=150,n=480,r=250,s=0,a=0,o=0,l=0,c=0,u,f=0,h=1,d=1,p=null,_=h0,m=null,g,S,x,v=Pd,M=.5,E,T,A,y,b;function R(F){return A(F[0]*Ze,F[1]*Ze)}function D(F){return F=A.invert(F[0],F[1]),F&&[F[0]*ii,F[1]*ii]}R.stream=function(F){return y&&b===F?y:y=d3(p3(u)(_(E(v(b=F)))))},R.preclip=function(F){return arguments.length?(_=F,p=void 0,O()):_},R.postclip=function(F){return arguments.length?(v=F,m=g=S=x=null,O()):v},R.clipAngle=function(F){return arguments.length?(_=+F?$2(p=F*Ze):(p=null,h0),O()):p*ii},R.clipExtent=function(F){return arguments.length?(v=F==null?(m=g=S=x=null,Pd):q2(m=+F[0][0],g=+F[0][1],S=+F[1][0],x=+F[1][1]),O()):m==null?null:[[m,g],[S,x]]},R.scale=function(F){return arguments.length?(e=+F,I()):e},R.translate=function(F){return arguments.length?(n=+F[0],r=+F[1],I()):[n,r]},R.center=function(F){return arguments.length?(s=F[0]%360*Ze,a=F[1]%360*Ze,I()):[s*ii,a*ii]},R.rotate=function(F){return arguments.length?(o=F[0]%360*Ze,l=F[1]%360*Ze,c=F.length>2?F[2]%360*Ze:0,I()):[o*ii,l*ii,c*ii]},R.angle=function(F){return arguments.length?(f=F%360*Ze,I()):f*ii},R.reflectX=function(F){return arguments.length?(h=F?-1:1,I()):h<0},R.reflectY=function(F){return arguments.length?(d=F?-1:1,I()):d<0},R.precision=function(F){return arguments.length?(E=y0(T,M=F*F),O()):Ys(M)},R.fitExtent=function(F,z){return Bv(R,F,z)},R.fitSize=function(F,z){return o3(R,F,z)},R.fitWidth=function(F,z){return l3(R,F,z)},R.fitHeight=function(F,z){return c3(R,F,z)};function I(){var F=S0(e,0,0,h,d,f).apply(null,t(s,a)),z=S0(e,n-F[0],r-F[1],h,d,f);return u=Ev(o,l,c),T=Cd(t,z),A=Cd(u,T),E=y0(T,M),O()}function O(){return y=b=null,R}return function(){return t=i.apply(this,arguments),R.invert=t.invert&&D,I()}}function Hp(i,t){return[i,I2(U2((Hn+t)/2))]}Hp.invert=function(i,t){return[i,2*Mv(N2(t))-Hn]};function x3(){return v3(Hp).scale(961/mi)}function v3(i){var t=g3(i),e=t.center,n=t.scale,r=t.translate,s=t.clipExtent,a=null,o,l,c;t.scale=function(f){return arguments.length?(n(f),u()):n()},t.translate=function(f){return arguments.length?(r(f),u()):r()},t.center=function(f){return arguments.length?(e(f),u()):e()},t.clipExtent=function(f){return arguments.length?(f==null?a=o=l=c=null:(a=+f[0][0],o=+f[0][1],l=+f[1][0],c=+f[1][1]),u()):a==null?null:[[a,o],[l,c]]};function u(){var f=ce*n(),h=t(B2(t.rotate()).invert([0,0]));return s(a==null?[[h[0]-f,h[1]-f],[h[0]+f,h[1]+f]]:i===Hp?[[Math.max(h[0]-f,a),o],[Math.min(h[0]+f,l),c]]:[[a,Math.max(h[1]-f,o)],[l,Math.min(h[1]+f,c)]])}return u()}function kv(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}const M0=Symbol("implicit");function zv(){var i=new fd,t=[],e=[],n=M0;function r(s){let a=i.get(s);if(a===void 0){if(n!==M0)return n;i.set(s,a=t.push(s)-1)}return e[a%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],i=new fd;for(const a of s)i.has(a)||i.set(a,t.push(a)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(n=s,r):n},r.copy=function(){return zv(t,e).unknown(n)},kv.apply(r,arguments),r}function y3(i){return function(){return i}}function S3(i){return+i}var E0=[0,1];function ya(i){return i}function zd(i,t){return(t-=i=+i)?function(e){return(e-i)/t}:y3(isNaN(t)?NaN:.5)}function M3(i,t){var e;return i>t&&(e=i,i=t,t=e),function(n){return Math.max(i,Math.min(t,n))}}function E3(i,t,e){var n=i[0],r=i[1],s=t[0],a=t[1];return r<n?(n=zd(r,n),s=e(a,s)):(n=zd(n,r),s=e(s,a)),function(o){return s(n(o))}}function b3(i,t,e){var n=Math.min(i.length,t.length)-1,r=new Array(n),s=new Array(n),a=-1;for(i[n]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++a<n;)r[a]=zd(i[a],i[a+1]),s[a]=e(t[a],t[a+1]);return function(o){var l=mA(i,o,1,n)-1;return s[l](r[l](o))}}function T3(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function w3(){var i=E0,t=E0,e=Us,n,r,s,a=ya,o,l,c;function u(){var h=Math.min(i.length,t.length);return a!==ya&&(a=M3(i[0],i[h-1])),o=h>2?b3:E3,l=c=null,f}function f(h){return h==null||isNaN(h=+h)?s:(l||(l=o(i.map(n),t,e)))(n(a(h)))}return f.invert=function(h){return a(r((c||(c=o(t,i.map(n),Ii)))(h)))},f.domain=function(h){return arguments.length?(i=Array.from(h,S3),u()):i.slice()},f.range=function(h){return arguments.length?(t=Array.from(h),u()):t.slice()},f.rangeRound=function(h){return t=Array.from(h),e=WR,u()},f.clamp=function(h){return arguments.length?(a=h?!0:ya,u()):a!==ya},f.interpolate=function(h){return arguments.length?(e=h,u()):e},f.unknown=function(h){return arguments.length?(s=h,f):s},function(h,d){return n=h,r=d,u()}}function A3(){return w3()(ya,ya)}function C3(i,t,e,n){var r=AA(i,t,e),s;switch(n=su(n??",f"),n.type){case"s":{var a=Math.max(Math.abs(i),Math.abs(t));return n.precision==null&&!isNaN(s=D2(r,a))&&(n.precision=s),Sv(n,a)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(s=L2(r,Math.max(Math.abs(i),Math.abs(t))))&&(n.precision=s-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(s=P2(r))&&(n.precision=s-(n.type==="%")*2);break}}return Vr(n)}function R3(i){var t=i.domain;return i.ticks=function(e){var n=t();return wA(n[0],n[n.length-1],e??10)},i.tickFormat=function(e,n){var r=t();return C3(r[0],r[r.length-1],e??10,n)},i.nice=function(e){e==null&&(e=10);var n=t(),r=0,s=n.length-1,a=n[r],o=n[s],l,c,u=10;for(o<a&&(c=a,a=o,o=c,c=r,r=s,s=c);u-- >0;){if(c=hd(a,o,e),c===l)return n[r]=a,n[s]=o,t(n);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return i},i}function Ic(){var i=A3();return i.copy=function(){return T3(i,Ic())},kv.apply(i,arguments),R3(i)}fv(is(-100,.75,.35),is(80,1.5,.8));fv(is(260,.75,.35),is(80,1.5,.8));var cc=is();function P3(i){(i<0||i>1)&&(i-=Math.floor(i));var t=Math.abs(i-.5);return cc.h=360*i-100,cc.s=1.5-1.5*t,cc.l=.8-.9*t,cc+""}function ue(i){return function(){return i}}const b0=Math.abs,_n=Math.atan2,ps=Math.cos,D3=Math.max,Vf=Math.min,Hi=Math.sin,Sa=Math.sqrt,kn=1e-12,hl=Math.PI,mu=hl/2,Fc=2*hl;function L3(i){return i>1?0:i<-1?hl:Math.acos(i)}function T0(i){return i>=1?mu:i<=-1?-mu:Math.asin(i)}function Gp(i){let t=3;return i.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);t=n}return i},()=>new l2(t)}function N3(i){return i.innerRadius}function I3(i){return i.outerRadius}function F3(i){return i.startAngle}function U3(i){return i.endAngle}function O3(i){return i&&i.padAngle}function B3(i,t,e,n,r,s,a,o){var l=e-i,c=n-t,u=a-r,f=o-s,h=f*l-u*c;if(!(h*h<kn))return h=(u*(t-s)-f*(i-r))/h,[i+h*l,t+h*c]}function uc(i,t,e,n,r,s,a){var o=i-e,l=t-n,c=(a?s:-s)/Sa(o*o+l*l),u=c*l,f=-c*o,h=i+u,d=t+f,p=e+u,_=n+f,m=(h+p)/2,g=(d+_)/2,S=p-h,x=_-d,v=S*S+x*x,M=r-s,E=h*_-p*d,T=(x<0?-1:1)*Sa(D3(0,M*M*v-E*E)),A=(E*x-S*T)/v,y=(-E*S-x*T)/v,b=(E*x+S*T)/v,R=(-E*S+x*T)/v,D=A-m,I=y-g,O=b-m,F=R-g;return D*D+I*I>O*O+F*F&&(A=b,y=R),{cx:A,cy:y,x01:-u,y01:-f,x11:A*(r/M-1),y11:y*(r/M-1)}}function k3(){var i=N3,t=I3,e=ue(0),n=null,r=F3,s=U3,a=O3,o=null,l=Gp(c);function c(){var u,f,h=+i.apply(this,arguments),d=+t.apply(this,arguments),p=r.apply(this,arguments)-mu,_=s.apply(this,arguments)-mu,m=b0(_-p),g=_>p;if(o||(o=u=l()),d<h&&(f=d,d=h,h=f),!(d>kn))o.moveTo(0,0);else if(m>Fc-kn)o.moveTo(d*ps(p),d*Hi(p)),o.arc(0,0,d,p,_,!g),h>kn&&(o.moveTo(h*ps(_),h*Hi(_)),o.arc(0,0,h,_,p,g));else{var S=p,x=_,v=p,M=_,E=m,T=m,A=a.apply(this,arguments)/2,y=A>kn&&(n?+n.apply(this,arguments):Sa(h*h+d*d)),b=Vf(b0(d-h)/2,+e.apply(this,arguments)),R=b,D=b,I,O;if(y>kn){var F=T0(y/h*Hi(A)),z=T0(y/d*Hi(A));(E-=F*2)>kn?(F*=g?1:-1,v+=F,M-=F):(E=0,v=M=(p+_)/2),(T-=z*2)>kn?(z*=g?1:-1,S+=z,x-=z):(T=0,S=x=(p+_)/2)}var U=d*ps(S),H=d*Hi(S),Z=h*ps(M),L=h*Hi(M);if(b>kn){var j=d*ps(x),Mt=d*Hi(x),bt=h*ps(v),Lt=h*Hi(v),At;if(m<hl)if(At=B3(U,H,bt,Lt,j,Mt,Z,L)){var q=U-At[0],tt=H-At[1],ut=j-At[0],Ct=Mt-At[1],pt=1/Hi(L3((q*ut+tt*Ct)/(Sa(q*q+tt*tt)*Sa(ut*ut+Ct*Ct)))/2),Ft=Sa(At[0]*At[0]+At[1]*At[1]);R=Vf(b,(h-Ft)/(pt-1)),D=Vf(b,(d-Ft)/(pt+1))}else R=D=0}T>kn?D>kn?(I=uc(bt,Lt,U,H,d,D,g),O=uc(j,Mt,Z,L,d,D,g),o.moveTo(I.cx+I.x01,I.cy+I.y01),D<b?o.arc(I.cx,I.cy,D,_n(I.y01,I.x01),_n(O.y01,O.x01),!g):(o.arc(I.cx,I.cy,D,_n(I.y01,I.x01),_n(I.y11,I.x11),!g),o.arc(0,0,d,_n(I.cy+I.y11,I.cx+I.x11),_n(O.cy+O.y11,O.cx+O.x11),!g),o.arc(O.cx,O.cy,D,_n(O.y11,O.x11),_n(O.y01,O.x01),!g))):(o.moveTo(U,H),o.arc(0,0,d,S,x,!g)):o.moveTo(U,H),!(h>kn)||!(E>kn)?o.lineTo(Z,L):R>kn?(I=uc(Z,L,j,Mt,h,-R,g),O=uc(U,H,bt,Lt,h,-R,g),o.lineTo(I.cx+I.x01,I.cy+I.y01),R<b?o.arc(I.cx,I.cy,R,_n(I.y01,I.x01),_n(O.y01,O.x01),!g):(o.arc(I.cx,I.cy,R,_n(I.y01,I.x01),_n(I.y11,I.x11),!g),o.arc(0,0,h,_n(I.cy+I.y11,I.cx+I.x11),_n(O.cy+O.y11,O.cx+O.x11),g),o.arc(O.cx,O.cy,R,_n(O.y11,O.x11),_n(O.y01,O.x01),!g))):o.arc(0,0,h,M,v,g)}if(o.closePath(),u)return o=null,u+""||null}return c.centroid=function(){var u=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,f=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-hl/2;return[ps(f)*u,Hi(f)*u]},c.innerRadius=function(u){return arguments.length?(i=typeof u=="function"?u:ue(+u),c):i},c.outerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:ue(+u),c):t},c.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:ue(+u),c):e},c.padRadius=function(u){return arguments.length?(n=u==null?null:typeof u=="function"?u:ue(+u),c):n},c.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:ue(+u),c):r},c.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:ue(+u),c):s},c.padAngle=function(u){return arguments.length?(a=typeof u=="function"?u:ue(+u),c):a},c.context=function(u){return arguments.length?(o=u??null,c):o},c}function Wp(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function Vv(i){this._context=i}Vv.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function Hv(i){return new Vv(i)}function Gv(i){return i[0]}function Wv(i){return i[1]}function Xv(i,t){var e=ue(!0),n=null,r=Hv,s=null,a=Gp(o);i=typeof i=="function"?i:i===void 0?Gv:ue(i),t=typeof t=="function"?t:t===void 0?Wv:ue(t);function o(l){var c,u=(l=Wp(l)).length,f,h=!1,d;for(n==null&&(s=r(d=a())),c=0;c<=u;++c)!(c<u&&e(f=l[c],c,l))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+i(f,c,l),+t(f,c,l));if(d)return s=null,d+""||null}return o.x=function(l){return arguments.length?(i=typeof l=="function"?l:ue(+l),o):i},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:ue(+l),o):t},o.defined=function(l){return arguments.length?(e=typeof l=="function"?l:ue(!!l),o):e},o.curve=function(l){return arguments.length?(r=l,n!=null&&(s=r(n)),o):r},o.context=function(l){return arguments.length?(l==null?n=s=null:s=r(n=l),o):n},o}function z3(i,t,e){var n=null,r=ue(!0),s=null,a=Hv,o=null,l=Gp(c);i=typeof i=="function"?i:i===void 0?Gv:ue(+i),t=typeof t=="function"?t:ue(t===void 0?0:+t),e=typeof e=="function"?e:e===void 0?Wv:ue(+e);function c(f){var h,d,p,_=(f=Wp(f)).length,m,g=!1,S,x=new Array(_),v=new Array(_);for(s==null&&(o=a(S=l())),h=0;h<=_;++h){if(!(h<_&&r(m=f[h],h,f))===g)if(g=!g)d=h,o.areaStart(),o.lineStart();else{for(o.lineEnd(),o.lineStart(),p=h-1;p>=d;--p)o.point(x[p],v[p]);o.lineEnd(),o.areaEnd()}g&&(x[h]=+i(m,h,f),v[h]=+t(m,h,f),o.point(n?+n(m,h,f):x[h],e?+e(m,h,f):v[h]))}if(S)return o=null,S+""||null}function u(){return Xv().defined(r).curve(a).context(s)}return c.x=function(f){return arguments.length?(i=typeof f=="function"?f:ue(+f),n=null,c):i},c.x0=function(f){return arguments.length?(i=typeof f=="function"?f:ue(+f),c):i},c.x1=function(f){return arguments.length?(n=f==null?null:typeof f=="function"?f:ue(+f),c):n},c.y=function(f){return arguments.length?(t=typeof f=="function"?f:ue(+f),e=null,c):t},c.y0=function(f){return arguments.length?(t=typeof f=="function"?f:ue(+f),c):t},c.y1=function(f){return arguments.length?(e=f==null?null:typeof f=="function"?f:ue(+f),c):e},c.lineX0=c.lineY0=function(){return u().x(i).y(t)},c.lineY1=function(){return u().x(i).y(e)},c.lineX1=function(){return u().x(n).y(t)},c.defined=function(f){return arguments.length?(r=typeof f=="function"?f:ue(!!f),c):r},c.curve=function(f){return arguments.length?(a=f,s!=null&&(o=a(s)),c):a},c.context=function(f){return arguments.length?(f==null?s=o=null:o=a(s=f),c):s},c}function V3(i,t){return t<i?-1:t>i?1:t>=i?0:NaN}function H3(i){return i}function G3(){var i=H3,t=V3,e=null,n=ue(0),r=ue(Fc),s=ue(0);function a(o){var l,c=(o=Wp(o)).length,u,f,h=0,d=new Array(c),p=new Array(c),_=+n.apply(this,arguments),m=Math.min(Fc,Math.max(-Fc,r.apply(this,arguments)-_)),g,S=Math.min(Math.abs(m)/c,s.apply(this,arguments)),x=S*(m<0?-1:1),v;for(l=0;l<c;++l)(v=p[d[l]=l]=+i(o[l],l,o))>0&&(h+=v);for(t!=null?d.sort(function(M,E){return t(p[M],p[E])}):e!=null&&d.sort(function(M,E){return e(o[M],o[E])}),l=0,f=h?(m-c*x)/h:0;l<c;++l,_=g)u=d[l],v=p[u],g=_+(v>0?v*f:0)+x,p[u]={data:o[u],index:l,value:v,startAngle:_,endAngle:g,padAngle:S};return p}return a.value=function(o){return arguments.length?(i=typeof o=="function"?o:ue(+o),a):i},a.sortValues=function(o){return arguments.length?(t=o,e=null,a):t},a.sort=function(o){return arguments.length?(e=o,t=null,a):e},a.startAngle=function(o){return arguments.length?(n=typeof o=="function"?o:ue(+o),a):n},a.endAngle=function(o){return arguments.length?(r=typeof o=="function"?o:ue(+o),a):r},a.padAngle=function(o){return arguments.length?(s=typeof o=="function"?o:ue(+o),a):s},a}function w0(i){return i<0?-1:1}function A0(i,t,e){var n=i._x1-i._x0,r=t-i._x1,s=(i._y1-i._y0)/(n||r<0&&-0),a=(e-i._y1)/(r||n<0&&-0),o=(s*r+a*n)/(n+r);return(w0(s)+w0(a))*Math.min(Math.abs(s),Math.abs(a),.5*Math.abs(o))||0}function C0(i,t){var e=i._x1-i._x0;return e?(3*(i._y1-i._y0)/e-t)/2:t}function Hf(i,t,e){var n=i._x0,r=i._y0,s=i._x1,a=i._y1,o=(s-n)/3;i._context.bezierCurveTo(n+o,r+o*t,s-o,a-o*e,s,a)}function gu(i){this._context=i}gu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Hf(this,this._t0,C0(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var e=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,Hf(this,C0(this,e=A0(this,i,t)),e);break;default:Hf(this,this._t0,e=A0(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=e}}};Object.create(gu.prototype).point=function(i,t){gu.prototype.point.call(this,t,i)};function R0(i){return new gu(i)}function Lo(i,t,e){this.k=i,this.x=t,this.y=e}Lo.prototype={constructor:Lo,scale:function(i){return i===1?this:new Lo(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new Lo(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Lo.prototype;function W3(i){return i}function X3(i){if(i==null)return W3;var t,e,n=i.scale[0],r=i.scale[1],s=i.translate[0],a=i.translate[1];return function(o,l){l||(t=e=0);var c=2,u=o.length,f=new Array(u);for(f[0]=(t+=o[0])*n+s,f[1]=(e+=o[1])*r+a;c<u;)f[c]=o[c],++c;return f}}function $3(i,t){for(var e,n=i.length,r=n-t;r<--n;)e=i[r],i[r++]=i[n],i[n]=e}function Y3(i,t){return typeof t=="string"&&(t=i.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return P0(i,e)})}:P0(i,t)}function P0(i,t){var e=t.id,n=t.bbox,r=t.properties==null?{}:t.properties,s=q3(i,t);return e==null&&n==null?{type:"Feature",properties:r,geometry:s}:n==null?{type:"Feature",id:e,properties:r,geometry:s}:{type:"Feature",id:e,bbox:n,properties:r,geometry:s}}function q3(i,t){var e=X3(i.transform),n=i.arcs;function r(u,f){f.length&&f.pop();for(var h=n[u<0?~u:u],d=0,p=h.length;d<p;++d)f.push(e(h[d],d));u<0&&$3(f,p)}function s(u){return e(u)}function a(u){for(var f=[],h=0,d=u.length;h<d;++h)r(u[h],f);return f.length<2&&f.push(f[0]),f}function o(u){for(var f=a(u);f.length<4;)f.push(f[0]);return f}function l(u){return u.map(o)}function c(u){var f=u.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(c)};case"Point":h=s(u.coordinates);break;case"MultiPoint":h=u.coordinates.map(s);break;case"LineString":h=a(u.arcs);break;case"MultiLineString":h=u.arcs.map(a);break;case"Polygon":h=l(u.arcs);break;case"MultiPolygon":h=u.arcs.map(l);break;default:return null}return{type:f,coordinates:h}}return c(t)}const fc=1440,hc=900,D0=230,K3={europe:["Albania","Austria","Belarus","Belgium","Bosnia and Herz.","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Lithuania","Luxembourg","Macedonia","Moldova","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Ukraine","United Kingdom","N. Cyprus"],asia:["Afghanistan","Armenia","Azerbaijan","Bangladesh","Bhutan","Brunei","Cambodia","China","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Saudi Arabia","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"],africa:["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Central African Rep.","Chad","Congo","Côte d'Ivoire","Dem. Rep. Congo","Djibouti","Egypt","Eq. Guinea","Eritrea","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","S. Sudan","Senegal","Sierra Leone","Somalia","Somaliland","South Africa","Sudan","Tanzania","Togo","Tunisia","Uganda","W. Sahara","Zambia","Zimbabwe","eSwatini"]};function Z3(i){const t=new Set(i.highlightCountries||[]);if(i.highlightRegions)for(const e of i.highlightRegions){const n=K3[e.toLowerCase()];if(n)for(const r of n)t.add(r)}return t}const j3="/prj-jcie/data/countries-110m.json";class J3{constructor(t){this.container=t,this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null,this.glMap=null,this.tileContainer=null,this.currentCenter=[0,15],this.currentZoom=1.2}render(t){if(t?.visible){if(this.tileContainer&&(this.tileContainer.style.display="",this.glMap))try{this.glMap.resize()}catch{}this.pendingConfig=t,this.ensureReady().then(()=>{this.pendingConfig&&this.applyConfig(this.pendingConfig)}).catch(e=>{console.error("MapLayer render failed:",e)})}}ensureReady(){if(this.readyPromise)return this.readyPromise;const t=yv(j3),e=this.initTileBackground().catch(()=>null);return this.readyPromise=Promise.all([t,e]).then(([n])=>{const r=n?.objects?.countries;if(!r)throw new Error("countries object not found in TopoJSON");this.countryFeatures=Y3(n,r).features,this.createSvg(),this.drawBaseMap()}),this.readyPromise}async initTileBackground(){if(!(this.glMap||!this.container))try{const[t,{Protocol:e}]=await Promise.all([Cg(()=>import("./maplibre-gl-CAsIRMuf.js").then(s=>s.m),[]),Cg(()=>import("./index-CQ-HbO1j.js"),[])]),n=t.default||t,r=new e;n.addProtocol("pmtiles",r.tile),this.tileContainer=document.createElement("div"),this.tileContainer.className="map-tile-container",this.container.appendChild(this.tileContainer),this.glMap=new n.Map({container:this.tileContainer,style:{version:8,sources:{terrain:{type:"raster-dem",url:"https://tiles.mapterhorn.com/tilejson.json",tileSize:512,encoding:"terrarium"}},layers:[{id:"background",type:"background",paint:{"background-color":"#2a5080"}},{id:"hillshade",type:"hillshade",source:"terrain",paint:{"hillshade-shadow-color":"#4a4a4a","hillshade-highlight-color":"#f0f0f0","hillshade-accent-color":"#c0c0c0","hillshade-exaggeration":.5,"hillshade-illumination-direction":315}}]},center:[0,15],zoom:1.5,interactive:!1,attributionControl:!1,fadeDuration:0,preserveDrawingBuffer:!1}),await new Promise(s=>{this.glMap.on("load",s)})}catch(t){console.warn("MapLibre tile background init failed (falling back to flat map):",t),this.glMap=null}}createSvg(){!this.container||this.svg||(this.svg=nv(this.container).append("svg").attr("class","map-svg-overlay").attr("viewBox",`0 0 ${fc} ${hc}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","world map"),this.svg.append("rect").attr("x",0).attr("y",0).attr("width",fc).attr("height",hc).attr("fill","#06111e").attr("fill-opacity",this.glMap?.05:.7))}drawBaseMap(){this.svg&&(this.countryPaths=this.svg.append("g").attr("class","countries").selectAll("path").data(this.countryFeatures,t=>t.properties?.name).join("path").attr("vector-effect","non-scaling-stroke").attr("stroke-linejoin","round"),this.markerCircles=this.svg.append("g").attr("class","map-markers"),this.markerLabels=this.svg.append("g").attr("class","map-marker-labels"))}applyConfig(t){if(!this.countryPaths)return;const e=this.resolveCenter(t.center),n=Number.isFinite(t.zoom)?t.zoom:1.2,r=Z3(t),s=!!(t.lightenNonVisited||t.lightenAllCountries),a=x3().center(e).scale(D0*n).translate([fc/2,hc/2]),o=a3(a),l=!!this.glMap,c=_=>{const m=_.properties?.name;return r.has(m)?"#000000":l?"#e8e8e8":"#3f4f63"},u=_=>{const m=_.properties?.name;return l?r.has(m)?.3:r.size===0?t.lightenAllCountries?.15:.25:s?.1:.2:r.size===0?t.lightenAllCountries?.35:.68:r.has(m)?.3:s?.22:.5},f=_=>r.has(_.properties?.name)||l?"#ffffff":"#a5b4c7",h=_=>r.has(_.properties?.name)?.9:l?.2:.35,d=_=>r.has(_.properties?.name)?1.2:.6;if(!this.countryPaths.node()?.getAttribute("d")){if(this.countryPaths.attr("d",o).attr("fill",c).attr("fill-opacity",u).attr("stroke",f).attr("stroke-opacity",h).attr("stroke-width",d),this.glMap){this._cameraTimer&&this._cameraTimer.stop(),this._cameraTimer=null;try{this.jumpTileCamera(e,n)}catch{}}}else if(this.countryPaths.transition().duration(650).ease($i).attr("d",o).attr("fill",c).attr("fill-opacity",u).attr("stroke",f).attr("stroke-opacity",h).attr("stroke-width",d),this.glMap){const _=[...this.currentCenter],m=this.currentZoom,g=Us(_[0],e[0]),S=Us(_[1],e[1]),x=Us(m,n),v=$i,M=650,E=performance.now();this._cameraTimer&&this._cameraTimer.stop(),this._cameraTimer=Up(()=>{const T=Math.min(1,(performance.now()-E)/M),A=v(T);try{this.jumpTileCamera([g(A),S(A)],x(A))}catch{}T>=1&&(this._cameraTimer.stop(),this._cameraTimer=null)})}this.updateMarkers(t.markers||[],a),this.currentCenter=e,this.currentZoom=n}jumpTileCamera(t,e){if(!this.glMap||!this.container)return;const n=D0*e,r=this.container.clientWidth,s=this.container.clientHeight,a=Math.min(r/fc,s/hc),o=n*a,l=Math.log2(o*2*Math.PI/512);this.glMap.jumpTo({center:[t[0],t[1]],zoom:Math.max(0,l)})}resolveCenter(t){if(!Array.isArray(t)||t.length!==2)return[0,15];const[e,n]=t;return!Number.isFinite(e)||!Number.isFinite(n)?[0,15]:[e,n]}updateMarkers(t,e){if(!this.markerCircles||!this.markerLabels)return;const n=t.map(o=>{const l=Number(o.longitude),c=Number(o.latitude);if(!Number.isFinite(l)||!Number.isFinite(c))return null;const u=e([l,c]);return u?{id:o.id||`${o.name||o.country}-${l}-${c}`,x:u[0],y:u[1],name:o.name||"",country:o.country||"",isCurrent:!!o.isCurrent,color:o.color||"#ff6b6b",size:Number(o.size)||7}:null}).filter(Boolean),r=this.markerCircles.selectAll("circle").data(n,o=>o.id);r.exit().transition().duration(200).attr("r",0).remove(),r.enter().append("circle").attr("cx",o=>o.x).attr("cy",o=>o.y).attr("r",0).attr("fill-opacity",.1).merge(r).transition().duration(650).ease($i).attr("cx",o=>o.x).attr("cy",o=>o.y).attr("r",o=>o.isCurrent?o.size+3:o.size).attr("fill",o=>o.color).attr("fill-opacity",o=>o.isCurrent?.95:.72).attr("stroke","#ffffff").attr("stroke-width",o=>o.isCurrent?2:1).attr("stroke-opacity",.95);const s=n.filter(o=>o.isCurrent),a=this.markerLabels.selectAll("text").data(s,o=>o.id);a.exit().transition().duration(150).attr("opacity",0).remove(),a.enter().append("text").attr("x",o=>o.x+10).attr("y",o=>o.y-12).attr("fill","#ffffff").attr("font-size",14).attr("font-weight",600).attr("paint-order","stroke").attr("stroke","rgba(6,17,30,0.9)").attr("stroke-width",3).attr("stroke-linejoin","round").attr("opacity",0).text(o=>o.name).merge(a).transition().duration(650).ease($i).attr("x",o=>o.x+10).attr("y",o=>o.y-12).attr("opacity",1).text(o=>o.name)}clear(){if(this._cameraTimer&&(this._cameraTimer.stop(),this._cameraTimer=null),this.tileContainer&&(this.tileContainer.style.display="none"),this.container){const t=this.container.querySelector(".map-svg-overlay");t&&t.remove()}this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null}destroy(){this.clear(),this.glMap&&(this.glMap.remove(),this.glMap=null),this.tileContainer&&(this.tileContainer.remove(),this.tileContainer=null)}}const $v=1e-10;function Nu(i,t){const e=tD(i),n=e.filter(o=>Q3(o,i));let r=0,s=0;const a=[];if(n.length>1){const o=qv(n);for(let c=0;c<n.length;++c){const u=n[c];u.angle=Math.atan2(u.x-o.x,u.y-o.y)}n.sort((c,u)=>u.angle-c.angle);let l=n[n.length-1];for(let c=0;c<n.length;++c){const u=n[c];s+=(l.x+u.x)*(u.y-l.y);const f={x:(u.x+l.x)/2,y:(u.y+l.y)/2};let h=null;for(let d=0;d<u.parentIndex.length;++d)if(l.parentIndex.includes(u.parentIndex[d])){const p=i[u.parentIndex[d]],_=Math.atan2(u.x-p.x,u.y-p.y),m=Math.atan2(l.x-p.x,l.y-p.y);let g=m-_;g<0&&(g+=2*Math.PI);const S=m-g/2;let x=Kn(f,{x:p.x+p.radius*Math.sin(S),y:p.y+p.radius*Math.cos(S)});x>p.radius*2&&(x=p.radius*2),(h==null||h.width>x)&&(h={circle:p,width:x,p1:u,p2:l,large:x>p.radius,sweep:!0})}h!=null&&(a.push(h),r+=Vd(h.circle.radius,h.width),l=u)}}else{let o=i[0];for(let c=1;c<i.length;++c)i[c].radius<o.radius&&(o=i[c]);let l=!1;for(let c=0;c<i.length;++c)if(Kn(i[c],o)>Math.abs(o.radius-i[c].radius)){l=!0;break}l?r=s=0:(r=o.radius*o.radius*Math.PI,a.push({circle:o,p1:{x:o.x,y:o.y+o.radius},p2:{x:o.x-$v,y:o.y+o.radius},width:o.radius*2,large:!0,sweep:!0}))}return s/=2,t&&(t.area=r+s,t.arcArea=r,t.polygonArea=s,t.arcs=a,t.innerPoints=n,t.intersectionPoints=e),r+s}function Q3(i,t){return t.every(e=>Kn(i,e)<e.radius+$v)}function tD(i){const t=[];for(let e=0;e<i.length;++e)for(let n=e+1;n<i.length;++n){const r=Yv(i[e],i[n]);for(const s of r)s.parentIndex=[e,n],t.push(s)}return t}function Vd(i,t){return i*i*Math.acos(1-t/i)-(i-t)*Math.sqrt(t*(2*i-t))}function Kn(i,t){return Math.sqrt((i.x-t.x)*(i.x-t.x)+(i.y-t.y)*(i.y-t.y))}function Xp(i,t,e){if(e>=i+t)return 0;if(e<=Math.abs(i-t))return Math.PI*Math.min(i,t)*Math.min(i,t);const n=i-(e*e-t*t+i*i)/(2*e),r=t-(e*e-i*i+t*t)/(2*e);return Vd(i,n)+Vd(t,r)}function Yv(i,t){const e=Kn(i,t),n=i.radius,r=t.radius;if(e>=n+r||e<=Math.abs(n-r))return[];const s=(n*n-r*r+e*e)/(2*e),a=Math.sqrt(n*n-s*s),o=i.x+s*(t.x-i.x)/e,l=i.y+s*(t.y-i.y)/e,c=-(t.y-i.y)*(a/e),u=-(t.x-i.x)*(a/e);return[{x:o+c,y:l-u},{x:o-c,y:l+u}]}function qv(i){const t={x:0,y:0};for(const e of i)t.x+=e.x,t.y+=e.y;return t.x/=i.length,t.y/=i.length,t}function eD(i,t,e,n){n=n||{};const r=n.maxIterations||100,s=n.tolerance||1e-10,a=i(t),o=i(e);let l=e-t;if(a*o>0)throw"Initial bisect points must have opposite signs";if(a===0)return t;if(o===0)return e;for(let c=0;c<r;++c){l/=2;const u=t+l,f=i(u);if(f*a>=0&&(t=u),Math.abs(l)<s||f===0)return u}return t+l}function Hd(i){const t=new Array(i);for(let e=0;e<i;++e)t[e]=0;return t}function L0(i,t){return Hd(i).map(()=>Hd(t))}function La(i,t){let e=0;for(let n=0;n<i.length;++n)e+=i[n]*t[n];return e}function Gd(i){return Math.sqrt(La(i,i))}function Wd(i,t,e){for(let n=0;n<t.length;++n)i[n]=t[n]*e}function vr(i,t,e,n,r){for(let s=0;s<i.length;++s)i[s]=t*e[s]+n*r[s]}function Kv(i,t,e){e=e||{};const n=e.maxIterations||t.length*200,r=e.nonZeroDelta||1.05,s=e.zeroDelta||.001,a=e.minErrorDelta||1e-6,o=e.minErrorDelta||1e-5,l=e.rho!==void 0?e.rho:1,c=e.chi!==void 0?e.chi:2,u=e.psi!==void 0?e.psi:-.5,f=e.sigma!==void 0?e.sigma:.5;let h;const d=t.length,p=new Array(d+1);p[0]=t,p[0].fx=i(t),p[0].id=0;for(let M=0;M<d;++M){const E=t.slice();E[M]=E[M]?E[M]*r:s,p[M+1]=E,p[M+1].fx=i(E),p[M+1].id=M+1}function _(M){for(let E=0;E<M.length;E++)p[d][E]=M[E];p[d].fx=M.fx}const m=(M,E)=>M.fx-E.fx,g=t.slice(),S=t.slice(),x=t.slice(),v=t.slice();for(let M=0;M<n;++M){if(p.sort(m),e.history){const T=p.map(A=>{const y=A.slice();return y.fx=A.fx,y.id=A.id,y});T.sort((A,y)=>A.id-y.id),e.history.push({x:p[0].slice(),fx:p[0].fx,simplex:T})}h=0;for(let T=0;T<d;++T)h=Math.max(h,Math.abs(p[0][T]-p[1][T]));if(Math.abs(p[0].fx-p[d].fx)<a&&h<o)break;for(let T=0;T<d;++T){g[T]=0;for(let A=0;A<d;++A)g[T]+=p[A][T];g[T]/=d}const E=p[d];if(vr(S,1+l,g,-l,E),S.fx=i(S),S.fx<p[0].fx)vr(v,1+c,g,-c,E),v.fx=i(v),v.fx<S.fx?_(v):_(S);else if(S.fx>=p[d-1].fx){let T=!1;if(S.fx>E.fx?(vr(x,1+u,g,-u,E),x.fx=i(x),x.fx<E.fx?_(x):T=!0):(vr(x,1-u*l,g,u*l,E),x.fx=i(x),x.fx<S.fx?_(x):T=!0),T){if(f>=1)break;for(let A=1;A<p.length;++A)vr(p[A],1-f,p[0],f,p[A]),p[A].fx=i(p[A])}}else _(S)}return p.sort(m),{fx:p[0].fx,x:p[0]}}function nD(i,t,e,n,r,s,a){const o=e.fx,l=La(e.fxprime,t);let c=o,u=o,f=l,h=0;r=r||1,s=s||1e-6,a=a||.1;function d(p,_,m){for(let g=0;g<16;++g)if(r=(p+_)/2,vr(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),f=La(n.fxprime,t),c>o+s*r*l||c>=m)_=r;else{if(Math.abs(f)<=-a*l)return r;f*(_-p)>=0&&(_=p),p=r,m=c}return 0}for(let p=0;p<10;++p){if(vr(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),f=La(n.fxprime,t),c>o+s*r*l||p&&c>=u)return d(h,r,u);if(Math.abs(f)<=-a*l)return r;if(f>=0)return d(r,h,c);u=c,h=r,r*=2}return r}function iD(i,t,e){let n={x:t.slice(),fx:0,fxprime:t.slice()},r={x:t.slice(),fx:0,fxprime:t.slice()};const s=t.slice();let a,o,l=1,c;e=e||{},c=e.maxIterations||t.length*20,n.fx=i(n.x,n.fxprime),a=n.fxprime.slice(),Wd(a,n.fxprime,-1);for(let u=0;u<c;++u){if(l=nD(i,a,n,r,l),e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),!l)Wd(a,n.fxprime,-1);else{vr(s,1,r.fxprime,-1,n.fxprime);const f=La(n.fxprime,n.fxprime),h=Math.max(0,La(s,r.fxprime)/f);vr(a,h,a,-1,r.fxprime),o=n,n=r,r=o}if(Gd(n.fxprime)<=1e-5)break}return e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),n}function rD(i,t={}){t.maxIterations=t.maxIterations||500;const e=t.initialLayout||lD,n=t.lossFunction||Iu,r=sD(i,t),s=e(r,t),a=Object.keys(s),o=[];for(const u of a)o.push(s[u].x),o.push(s[u].y);const c=Kv(u=>{const f={};for(let h=0;h<a.length;++h){const d=a[h];f[d]={x:u[2*h],y:u[2*h+1],radius:s[d].radius}}return n(f,r)},o,t).x;for(let u=0;u<a.length;++u){const f=a[u];s[f].x=c[2*u],s[f].y=c[2*u+1]}return s}const Zv=1e-10;function Xd(i,t,e){return Math.min(i,t)*Math.min(i,t)*Math.PI<=e+Zv?Math.abs(i-t):eD(n=>Xp(i,t,n)-e,0,i+t)}function sD(i,t={}){const e=t.distinct,n=i.map(o=>Object.assign({},o));function r(o){return o.join(";")}if(e){const o=new Map;for(const l of n)for(let c=0;c<l.sets.length;c++){const u=String(l.sets[c]);o.set(u,l.size+(o.get(u)||0));for(let f=c+1;f<l.sets.length;f++){const h=String(l.sets[f]),d=`${u};${h}`,p=`${h};${u}`;o.set(d,l.size+(o.get(d)||0)),o.set(p,l.size+(o.get(p)||0))}}for(const l of n)l.sets.length<3&&(l.size=o.get(r(l.sets)))}const s=[],a=new Set;for(const o of n)if(o.sets.length===1)s.push(o.sets[0]);else if(o.sets.length===2){const l=o.sets[0],c=o.sets[1];a.add(r(o.sets)),a.add(r([c,l]))}s.sort((o,l)=>o===l?0:o<l?-1:1);for(let o=0;o<s.length;++o){const l=s[o];for(let c=o+1;c<s.length;++c){const u=s[c];a.has(r([l,u]))||n.push({sets:[l,u],size:0})}}return n}function aD(i,t,e){const n=L0(t.length,t.length),r=L0(t.length,t.length);return i.filter(s=>s.sets.length===2).forEach(s=>{const a=e[s.sets[0]],o=e[s.sets[1]],l=Math.sqrt(t[a].size/Math.PI),c=Math.sqrt(t[o].size/Math.PI),u=Xd(l,c,s.size);n[a][o]=n[o][a]=u;let f=0;s.size+1e-10>=Math.min(t[a].size,t[o].size)?f=1:s.size<=1e-10&&(f=-1),r[a][o]=r[o][a]=f}),{distances:n,constraints:r}}function oD(i,t,e,n){for(let s=0;s<t.length;++s)t[s]=0;let r=0;for(let s=0;s<e.length;++s){const a=i[2*s],o=i[2*s+1];for(let l=s+1;l<e.length;++l){const c=i[2*l],u=i[2*l+1],f=e[s][l],h=n[s][l],d=(c-a)*(c-a)+(u-o)*(u-o),p=Math.sqrt(d),_=d-f*f;h>0&&p<=f||h<0&&p>=f||(r+=2*_*_,t[2*s]+=4*_*(a-c),t[2*s+1]+=4*_*(o-u),t[2*l]+=4*_*(c-a),t[2*l+1]+=4*_*(u-o))}}return r}function lD(i,t={}){let e=uD(i,t);const n=t.lossFunction||Iu;if(i.length>=8){const r=cD(i,t),s=n(r,i),a=n(e,i);s+1e-8<a&&(e=r)}return e}function cD(i,t={}){const e=t.restarts||10,n=[],r={};for(const h of i)h.sets.length===1&&(r[h.sets[0]]=n.length,n.push(h));let{distances:s,constraints:a}=aD(i,n,r);const o=Gd(s.map(Gd))/s.length;s=s.map(h=>h.map(d=>d/o));const l=(h,d)=>oD(h,d,s,a);let c=null;for(let h=0;h<e;++h){const d=Hd(s.length*2).map(Math.random),p=iD(l,d,t);(!c||p.fx<c.fx)&&(c=p)}const u=c.x,f={};for(let h=0;h<n.length;++h){const d=n[h];f[d.sets[0]]={x:u[2*h]*o,y:u[2*h+1]*o,radius:Math.sqrt(d.size/Math.PI)}}if(t.history)for(const h of t.history)Wd(h.x,o);return f}function uD(i,t){const e=t&&t.lossFunction?t.lossFunction:Iu,n={},r={};for(const f of i)if(f.sets.length===1){const h=f.sets[0];n[h]={x:1e10,y:1e10,rowid:n.length,size:f.size,radius:Math.sqrt(f.size/Math.PI)},r[h]=[]}i=i.filter(f=>f.sets.length===2);for(const f of i){let h=f.weight!=null?f.weight:1;const d=f.sets[0],p=f.sets[1];f.size+Zv>=Math.min(n[d].size,n[p].size)&&(h=0),r[d].push({set:p,size:f.size,weight:h}),r[p].push({set:d,size:f.size,weight:h})}const s=[];Object.keys(r).forEach(f=>{let h=0;for(let d=0;d<r[f].length;++d)h+=r[f][d].size*r[f][d].weight;s.push({set:f,size:h})});function a(f,h){return h.size-f.size}s.sort(a);const o={};function l(f){return f.set in o}function c(f,h){n[h].x=f.x,n[h].y=f.y,o[h]=!0}c({x:0,y:0},s[0].set);for(let f=1;f<s.length;++f){const h=s[f].set,d=r[h].filter(l),p=n[h];if(d.sort(a),d.length===0)throw"ERROR: missing pairwise overlap information";const _=[];for(var u=0;u<d.length;++u){const S=n[d[u].set],x=Xd(p.radius,S.radius,d[u].size);_.push({x:S.x+x,y:S.y}),_.push({x:S.x-x,y:S.y}),_.push({y:S.y+x,x:S.x}),_.push({y:S.y-x,x:S.x});for(let v=u+1;v<d.length;++v){const M=n[d[v].set],E=Xd(p.radius,M.radius,d[v].size),T=Yv({x:S.x,y:S.y,radius:x},{x:M.x,y:M.y,radius:E});_.push(...T)}}let m=1e50,g=_[0];for(const S of _){n[h].x=S.x,n[h].y=S.y;const x=e(n,i);x<m&&(m=x,g=S)}c(g,h)}return n}function Iu(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const a=i[n.sets[0]],o=i[n.sets[1]];r=Xp(a.radius,o.radius,Kn(a,o))}else r=Nu(n.sets.map(a=>i[a]));const s=n.weight!=null?n.weight:1;e+=s*(r-n.size)*(r-n.size)}return e}function fD(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const o=i[n.sets[0]],l=i[n.sets[1]];r=Xp(o.radius,l.radius,Kn(o,l))}else r=Nu(n.sets.map(o=>i[o]));const s=n.weight!=null?n.weight:1,a=Math.log((r+1)/(n.size+1));e+=s*a*a}return e}function hD(i,t,e){if(e==null?i.sort((r,s)=>s.radius-r.radius):i.sort(e),i.length>0){const r=i[0].x,s=i[0].y;for(const a of i)a.x-=r,a.y-=s}if(i.length===2&&Kn(i[0],i[1])<Math.abs(i[1].radius-i[0].radius)&&(i[1].x=i[0].x+i[0].radius-i[1].radius-1e-10,i[1].y=i[0].y),i.length>1){const r=Math.atan2(i[1].x,i[1].y)-t,s=Math.cos(r),a=Math.sin(r);for(const o of i){const l=o.x,c=o.y;o.x=s*l-a*c,o.y=a*l+s*c}}if(i.length>2){let r=Math.atan2(i[2].x,i[2].y)-t;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;if(r>Math.PI){const s=i[1].y/(1e-10+i[1].x);for(const a of i){var n=(a.x+s*a.y)/(1+s*s);a.x=2*n-a.x,a.y=2*n*s-a.y}}}}function dD(i){i.forEach(r=>{r.parent=r});function t(r){return r.parent!==r&&(r.parent=t(r.parent)),r.parent}function e(r,s){const a=t(r),o=t(s);a.parent=o}for(let r=0;r<i.length;++r)for(let s=r+1;s<i.length;++s){const a=i[r].radius+i[s].radius;Kn(i[r],i[s])+1e-10<a&&e(i[s],i[r])}const n=new Map;for(let r=0;r<i.length;++r){const s=t(i[r]).parent.setid;n.has(s)||n.set(s,[]),n.get(s).push(i[r])}return i.forEach(r=>{delete r.parent}),Array.from(n.values())}function $d(i){const t=e=>{const n=i.reduce((s,a)=>Math.max(s,a[e]+a.radius),Number.NEGATIVE_INFINITY),r=i.reduce((s,a)=>Math.min(s,a[e]-a.radius),Number.POSITIVE_INFINITY);return{max:n,min:r}};return{xRange:t("x"),yRange:t("y")}}function pD(i,t,e){t==null&&(t=Math.PI/2);let n=Jv(i).map(c=>Object.assign({},c));const r=dD(n);for(const c of r){hD(c,t,e);const u=$d(c);c.size=(u.xRange.max-u.xRange.min)*(u.yRange.max-u.yRange.min),c.bounds=u}r.sort((c,u)=>u.size-c.size),n=r[0];let s=n.bounds;const a=(s.xRange.max-s.xRange.min)/50;function o(c,u,f){if(!c)return;const h=c.bounds;let d,p;if(u)d=s.xRange.max-h.xRange.min+a;else{d=s.xRange.max-h.xRange.max;const _=(h.xRange.max-h.xRange.min)/2-(s.xRange.max-s.xRange.min)/2;_<0&&(d+=_)}if(f)p=s.yRange.max-h.yRange.min+a;else{p=s.yRange.max-h.yRange.max;const _=(h.yRange.max-h.yRange.min)/2-(s.yRange.max-s.yRange.min)/2;_<0&&(p+=_)}for(const _ of c)_.x+=d,_.y+=p,n.push(_)}let l=1;for(;l<r.length;)o(r[l],!0,!1),o(r[l+1],!1,!0),o(r[l+2],!0,!0),l+=3,s=$d(n);return jv(n)}function mD(i,t,e,n,r){const s=Jv(i);t-=2*n,e-=2*n;const{xRange:a,yRange:o}=$d(s);if(a.max===a.min||o.max===o.min)return console.log("not scaling solution: zero size detected"),i;let l,c;if(r){const d=Math.sqrt(r/Math.PI)*2;l=t/d,c=e/d}else l=t/(a.max-a.min),c=e/(o.max-o.min);const u=Math.min(c,l),f=(t-(a.max-a.min)*u)/2,h=(e-(o.max-o.min)*u)/2;return jv(s.map(d=>({radius:u*d.radius,x:n+f+(d.x-a.min)*u,y:n+h+(d.y-o.min)*u,setid:d.setid})))}function jv(i){const t={};for(const e of i)t[e.setid]=e;return t}function Jv(i){return Object.keys(i).map(e=>Object.assign(i[e],{setid:e}))}function Gf(i,t,e){let n=t[0].radius-Kn(t[0],i);for(let r=1;r<t.length;++r){const s=t[r].radius-Kn(t[r],i);s<=n&&(n=s)}for(let r=0;r<e.length;++r){const s=Kn(e[r],i)-e[r].radius;s<=n&&(n=s)}return n}function Qv(i,t,e){const n=[];for(const u of i)n.push({x:u.x,y:u.y}),n.push({x:u.x+u.radius/2,y:u.y}),n.push({x:u.x-u.radius/2,y:u.y}),n.push({x:u.x,y:u.y+u.radius/2}),n.push({x:u.x,y:u.y-u.radius/2});let r=n[0],s=Gf(n[0],i,t);for(let u=1;u<n.length;++u){const f=Gf(n[u],i,t);f>=s&&(r=n[u],s=f)}const a=Kv(u=>-1*Gf({x:u[0],y:u[1]},i,t),[r.x,r.y],{maxIterations:500,minErrorDelta:1e-10}).x,o={x:e?0:a[0],y:a[1]};let l=!0;for(const u of i)if(Kn(o,u)>u.radius){l=!1;break}for(const u of t)if(Kn(o,u)<u.radius){l=!1;break}if(l)return o;if(i.length==1)return{x:i[0].x,y:i[0].y};const c={};return Nu(i,c),c.arcs.length===0?{x:0,y:-1e3,disjoint:!0}:c.arcs.length==1?{x:c.arcs[0].circle.x,y:c.arcs[0].circle.y}:t.length?Qv(i,[]):qv(c.arcs.map(u=>u.p1))}function gD(i){const t={},e=Object.keys(i);for(const n of e)t[n]=[];for(let n=0;n<e.length;n++){const r=e[n],s=i[r];for(let a=n+1;a<e.length;++a){const o=e[a],l=i[o],c=Kn(s,l);c+l.radius<=s.radius+1e-10?t[o].push(r):c+s.radius<=l.radius+1e-10&&t[r].push(o)}}return t}function _D(i,t,e){const n={},r=gD(i);for(let s=0;s<t.length;++s){const a=t[s].sets,o={},l={};for(let h=0;h<a.length;++h){o[a[h]]=!0;const d=r[a[h]];for(let p=0;p<d.length;++p)l[d[p]]=!0}const c=[],u=[];for(let h in i)h in o?c.push(i[h]):h in l||u.push(i[h]);const f=Qv(c,u,e);n[a]=f,f.disjoint&&t[s].size>0&&console.log("WARNING: area "+a+" not represented on screen")}return n}function xD(i,t,e){const n=[];return n.push(`
M`,i,t),n.push(`
m`,-e,0),n.push(`
a`,e,e,0,1,0,e*2,0),n.push(`
a`,e,e,0,1,0,-e*2,0),n.join(" ")}function vD(i){if(i.length===0)return[];const t={};return Nu(i,t),t.arcs}function yD(i,t){if(i.length===0)return"M 0 0";const e=Math.pow(10,t||0),n=t!=null?s=>Math.round(s*e)/e:s=>s;if(i.length==1){const s=i[0].circle;return xD(n(s.x),n(s.y),n(s.radius))}const r=[`
M`,n(i[0].p2.x),n(i[0].p2.y)];for(const s of i){const a=n(s.circle.radius);r.push(`
A`,a,a,0,s.large?1:0,s.sweep?1:0,n(s.p1.x),n(s.p1.y))}return r.join(" ")}function SD(i,t={}){const{lossFunction:e,layoutFunction:n=rD,normalize:r=!0,orientation:s=Math.PI/2,orientationOrder:a,width:o=600,height:l=350,padding:c=15,scaleToFit:u=!1,symmetricalTextCentre:f=!1,distinct:h,round:d=2}=t;let p=n(i,{lossFunction:e==="default"||!e?Iu:e==="logRatio"?fD:e,distinct:h});r&&(p=pD(p,s,a));const _=mD(p,o,l,c,u),m=_D(_,i,f),g=new Map(Object.keys(_).map(v=>[v,{set:v,x:_[v].x,y:_[v].y,radius:_[v].radius}])),S=i.map(v=>{const M=v.sets.map(A=>g.get(A)),E=vD(M),T=yD(E,d);return{circles:M,arcs:E,path:T,area:v,has:new Set(v.sets)}});function x(v){let M="";for(const E of S)E.has.size>v.length&&v.every(T=>E.has.has(T))&&(M+=" "+E.path);return M}return S.map(({circles:v,arcs:M,path:E,area:T})=>({data:T,text:m[T.sets],circles:v,arcs:M,path:E,distinctPath:E+x(T.sets)}))}const Wf=1440,Xf=900,dc=24,MD=768,N0=56,ED=130;class bD{constructor(t){this.container=t,this.svg=null,this.root=null,this.dataCache=new Map,this.lineSpanState=new Map,this.onResize=()=>{},window.addEventListener("resize",this.onResize)}async render(t,e={}){if(!t?.visible)return;const n=this.normalizeChartConfig(t,e);if(this.ensureSvg(),!this.root)return;this.root.selectAll("*").remove(),this.drawBackdrop();const r=window.innerWidth<MD,s=this.buildPanelSpecs(n,r);if(s.length===0)return;const a=s.filter(o=>o.chart).map(async o=>{const l=await this.loadDataset(o.chart);this.renderChart(o,l)});await Promise.all(a)}normalizeChartConfig(t,e={}){const n=t.layout||(Array.isArray(t.charts)&&t.charts.length===2?"dual":"single"),r=t.span||(e.spanId?{id:e.spanId}:null),s=!!e.transitionFromPrevious,a=Array.isArray(t.charts)&&t.charts.length>0?t.charts.map(o=>({...o,span:r,transitionFromPrevious:s})):[{id:t.id||"chart-1",type:t.type||"line",dataFile:t.dataFile,dataFormat:t.dataFormat||"auto",config:t.config||{},span:r,transitionFromPrevious:s}];return{visible:t.visible,layout:n,responsive:t.responsive||{mobileStack:!0},grid:t.grid||null,charts:a,position:t.position||null}}buildPanelSpecs(t,e){const n=t.charts||[];if(n.length===0)return[];const r=this.getPlotBounds(),s=t.responsive?.mobileStack!==!1,a=e&&s&&(t.layout==="dual"||t.layout==="grid");if(t.layout==="single"||a)return this.buildStackedPanels(n,r);if(t.layout==="dual"){const o=t.dualTitle||null,l=o?32:0;o&&this.root&&this.root.append("text").attr("x",r.left+(r.right-r.left)/2).attr("y",r.top+20).attr("text-anchor","middle").attr("fill","#eceff4").attr("font-size",16).attr("font-weight",700).text(o);const c=l?{...r,top:r.top+l}:r;return this.buildDualPanels(n,c)}return t.layout==="grid"?this.buildGridPanels(n,t.grid||{},r):this.buildStackedPanels(n,r)}getPlotBounds(){const e=document.getElementById("header-nav")?.offsetHeight??N0,n=Math.min(Math.max(e,N0),ED);return{left:dc,right:Wf-dc,top:dc+n,bottom:Xf-dc}}buildStackedPanels(t,e){const n=t.length,r=20,a=(e.bottom-e.top-r*(n-1))/n;return t.map((o,l)=>({chart:o,x:e.left,y:e.top+l*(a+r),width:e.right-e.left,height:a}))}buildDualPanels(t,e){const s=Math.ceil(t.length/2),a=(e.right-e.left-20)/2,o=(e.bottom-e.top-20*(s-1))/s;return t.map((l,c)=>{const u=c%2,f=Math.floor(c/2);return{chart:l,x:e.left+u*(a+20),y:e.top+f*(o+20),width:a,height:o}})}buildGridPanels(t,e,n){const r=e.allowEmptyCells!==!1,s=Array.isArray(e.rowPattern)&&e.rowPattern.length>0?e.rowPattern:this.makeDefaultRowPattern(e,t.length),a=Array.isArray(e.rowTitles)?e.rowTitles:[],o=e.title?32:0;e.title&&this.root&&this.root.append("text").attr("x",n.left+(n.right-n.left)/2).attr("y",n.top+20).attr("text-anchor","middle").attr("fill","#eceff4").attr("font-size",16).attr("font-weight",700).text(e.title);const l=Math.max(...s),c=18,u=18,f=s.length,h=n.right-n.left,d=n.bottom-n.top-o,p=a.length>0?22:0,_=(d-p*f-c*(f-1))/f,m=(h-u*(l-1))/l,g=[];let S=0;return s.forEach((x,v)=>{const M=n.top+o+v*(_+p+c);a[v]&&this.root&&this.root.append("text").attr("x",n.left+h/2).attr("y",M+15).attr("text-anchor","middle").attr("fill","#d8dee9").attr("font-size",14).attr("font-weight",600).text(a[v]);const E=M+p,T=x*m+(x-1)*u,A=n.left+(h-T)/2;for(let y=0;y<x;y+=1){const b=t[S]||null;if(!b&&!r)break;g.push({chart:b,x:A+y*(m+u),y:E,width:m,height:_,_gridIndex:g.length}),b&&(S+=1)}}),g}makeDefaultRowPattern(t,e){const n=Number.isFinite(t.columns)?Math.max(1,t.columns):e,r=Number.isFinite(t.rows)?Math.max(1,t.rows):Math.ceil(e/n),s=[];for(let a=0;a<r;a+=1){const o=e-a*n;o<=0?s.push(n):s.push(Math.min(n,o))}return s}async loadDataset(t){const e=t.dataFile;if(!e)return null;const n="/prj-jcie/",r=e.startsWith("/")?e.slice(1):e,s=`${n}${r}`,a=(t.dataFormat||"auto").toLowerCase(),o=a==="auto"?this.detectFormatFromPath(s):a,l=`${o}:${s}`;if(this.dataCache.has(l))return this.dataCache.get(l);let c;if(o==="json")c=await yv(s);else if(o==="csv")c=await y2(s,m2);else throw new Error(`Unsupported data format: ${o}`);return this.dataCache.set(l,c),c}detectFormatFromPath(t){if(t.endsWith(".json"))return"json";if(t.endsWith(".csv"))return"csv";throw new Error(`Cannot detect data format from path: ${t}`)}renderChart(t,e){if(!t.chart){this.drawEmptyPanel(t);return}const n=t.chart.type||"line";try{n==="line"?this.renderLine(t,e,t.chart.config||{},t.chart):n==="pie"?this.renderPie(t,e,t.chart.config||{}):n==="sankey"?this.renderSankey(t,e,t.chart.config||{}):n==="venn"?this.renderVenn(t,e,t.chart.config||{}):this.renderUnsupported(t,`未対応チャート: ${n}`)}catch(r){this.renderUnsupported(t,`描画エラー: ${n}`),console.error(r)}}renderLine(t,e,n,r={}){if(!Array.isArray(e)){this.renderUnsupported(t,"lineデータ形式が不正です");return}const s=n.xField||"year",a=n.yField||"value",o=n.seriesField||"series",l=e.filter(N=>Number.isFinite(Number(N[s]))&&Number.isFinite(Number(N[a])));if(l.length===0){this.renderUnsupported(t,"lineデータが空です");return}const c=gA(l,N=>Number(N[s])),u=Array.isArray(n.xDomain)&&n.xDomain.length===2?[Number(n.xDomain[0]),Number(n.xDomain[1])]:null,f=u&&u.every(Number.isFinite)?[Math.min(u[0],u[1]),Math.max(u[0],u[1])]:[Number(c[0]),Number(c[1])];if(!f.every(Number.isFinite)||f[0]===f[1]){this.renderUnsupported(t,"lineのx軸設定が不正です");return}const h=l.filter(N=>{const Nt=Number(N[s]);return Nt>=f[0]&&Nt<=f[1]});if(h.length===0){this.renderUnsupported(t,"lineデータが空です");return}const d=Rf(h,N=>Number(N[a]))||0,p=Array.isArray(n.yDomain)&&n.yDomain.length===2?n.yDomain.map(Number):null,_=Ic().domain(p||[0,d*1.1]).nice(),m=p||_.domain(),g=r?.span?.id,S=g==null?null:String(g).trim(),x=!!(r?.transitionFromPrevious&&S),v=x?this.lineSpanState.get(S):null,M=v?.xDomain||f,E=v?.yDomain||m,T=n.title||"折れ線グラフ",A=this.createPanelInner(t,T),y=A.width,b=A.height,R=SA(h,N=>N[o]==null?"__single__":String(N[o])),D=R.length>1&&R.some(([N])=>N!=="__single__"),I=D?this.resolveLineLabelGutter(y):0,O=this.resolveYAxisLabelGutter(h,a),F=6,z=24,U=Math.max(80,y-O-I),H=Math.max(80,b-F-z),Z=A.group.append("g").attr("transform",`translate(${O}, ${F})`),L=Ic().domain(M).range([0,U]),j=Ic().domain(E).range([H,0]),Mt=FA(L).ticks(5).tickFormat(Vr("d")),bt=UA(j).ticks(5),Lt=N=>N.selectAll("text").attr("fill","#d8dee9").attr("font-size",11),At=N=>N.selectAll("line,path").attr("stroke","#8ca0b3").attr("opacity",.5);let q=null;if(n.gridLines!==!1){q=Z.append("g").attr("class","grid-lines");const N=j.ticks(5);q.selectAll("line").data(N).enter().append("line").attr("x1",0).attr("y1",Nt=>j(Nt)).attr("x2",U).attr("y2",Nt=>j(Nt)).attr("stroke","#8ca0b3").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}const tt=Z.append("g").attr("transform",`translate(0, ${H})`).call(Mt).call(Lt).call(At),ut=Z.append("g").call(bt).call(Lt).call(At),Ct=Xv().x(N=>L(Number(N[s]))).y(N=>j(Number(N[a]))).curve(R0),pt=n.areaFill!==!1?z3().x(N=>L(Number(N[s]))).y0(H).y1(N=>j(Number(N[a]))).curve(R0):null;if(!D){const N=this.getThemePrimary();let Nt=null;if(pt){const st=`area-grad-single-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",st).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:N,opacity:.25},{offset:"100%",color:N,opacity:0}]).enter().append("stop").attr("offset",P=>P.offset).attr("stop-color",P=>P.color).attr("stop-opacity",P=>P.opacity),Nt=Z.append("path").datum(h).attr("fill",`url(#${st})`).attr("opacity",0).attr("d",pt)}const Ut=Z.append("path").datum(h).attr("fill","none").attr("stroke",N).attr("stroke-width",2.5).attr("d",Ct),Vt=Z.selectAll(".point").data(h).enter().append("circle").attr("cx",st=>L(Number(st[s]))).attr("cy",st=>j(Number(st[a]))).attr("r",2.7).attr("fill","#ffffff");if(x&&v){L.domain(f),j.domain(m);const st=Sd().duration(850).ease(Md);if(q){q.selectAll("line").remove();const P=j.ticks(5);q.selectAll("line").data(P).enter().append("line").attr("x1",0).attr("y1",w=>j(w)).attr("x2",U).attr("y2",w=>j(w)).attr("stroke","#8ca0b3").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}tt.transition(st).call(Mt).call(Lt).call(At),ut.transition(st).call(bt).call(Lt).call(At),Ut.transition(st).attr("d",Ct).on("end",()=>{this.renderLineAnnotations(Z,L,j,U,H,n.annotations)}),Nt&&Nt.transition(st).attr("d",pt).attr("opacity",1),Vt.transition(st).attr("cx",P=>L(Number(P[s]))).attr("cy",P=>j(Number(P[a])))}else{this.renderLineAnnotations(Z,L,j,U,H,n.annotations);const st=Ut.node()?.getTotalLength()||0;Ut.attr("stroke-dasharray",`${st} ${st}`).attr("stroke-dashoffset",st).transition().duration(700).ease($i).attr("stroke-dashoffset",0),Nt&&Nt.transition().duration(700).ease($i).attr("opacity",1)}this.attachLineTooltip(Z,[{name:"__single__",values:h}],L,j,U,H,s,a,()=>N),S&&this.lineSpanState.set(S,{xDomain:[...f],yDomain:[...m]});return}const Ft=R.map(([N,Nt])=>({name:N,values:[...Nt].sort((Ut,Vt)=>Number(Ut[s])-Number(Vt[s]))})).filter(N=>N.values.length>0),ae=this.buildPalette(Ft.length),xt=zv().domain(Ft.map(N=>N.name)).range(ae),zt=Z.append("g").attr("class","line-series"),Yt=[],Bt=[],W=[];if(Ft.forEach((N,Nt)=>{let Ut=null;if(pt){const P=`area-grad-${Nt}-${t.x}-${t.y}`,w=xt(N.name);this.defs.append("linearGradient").attr("id",P).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:w,opacity:.18},{offset:"100%",color:w,opacity:0}]).enter().append("stop").attr("offset",k=>k.offset).attr("stop-color",k=>k.color).attr("stop-opacity",k=>k.opacity),Ut=zt.append("path").datum(N.values).attr("fill",`url(#${P})`).attr("opacity",0).attr("d",pt)}W.push(Ut);const Vt=zt.append("path").datum(N.values).attr("fill","none").attr("stroke",xt(N.name)).attr("stroke-width",2.2).attr("d",Ct);Yt.push(Vt);const st=zt.selectAll(`.point-${this.toSafeCssToken(N.name)}`).data(N.values).enter().append("circle").attr("cx",P=>L(Number(P[s]))).attr("cy",P=>j(Number(P[a]))).attr("r",2.2).attr("fill",xt(N.name));Bt.push(st)}),x&&v){L.domain(f),j.domain(m);const N=Sd().duration(850).ease(Md);if(q){q.selectAll("line").remove();const Nt=j.ticks(5);q.selectAll("line").data(Nt).enter().append("line").attr("x1",0).attr("y1",Ut=>j(Ut)).attr("x2",U).attr("y2",Ut=>j(Ut)).attr("stroke","#8ca0b3").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}tt.transition(N).call(Mt).call(Lt).call(At),ut.transition(N).call(bt).call(Lt).call(At),Yt.forEach((Nt,Ut)=>{Nt.transition(N).attr("d",Ct).on("end",()=>{Ut===0&&(this.renderLineAnnotations(Z,L,j,U,H,n.annotations),this.drawLineEndLabels(Z,Ft,xt,L,j,U,H,s,a))})}),W.forEach(Nt=>{Nt&&Nt.transition(N).attr("d",pt).attr("opacity",1)}),Bt.forEach(Nt=>{Nt.transition(N).attr("cx",Ut=>L(Number(Ut[s]))).attr("cy",Ut=>j(Number(Ut[a])))})}else this.renderLineAnnotations(Z,L,j,U,H,n.annotations),Yt.forEach(N=>{const Nt=N.node()?.getTotalLength()||0;N.attr("stroke-dasharray",`${Nt} ${Nt}`).attr("stroke-dashoffset",Nt).transition().duration(700).ease($i).attr("stroke-dashoffset",0)}),W.forEach(N=>{N&&N.transition().duration(700).ease($i).attr("opacity",1)}),this.drawLineEndLabels(Z,Ft,xt,L,j,U,H,s,a);this.attachLineTooltip(Z,Ft,L,j,U,H,s,a,N=>xt(N)),S&&this.lineSpanState.set(S,{xDomain:[...f],yDomain:[...m]})}attachLineTooltip(t,e,n,r,s,a,o,l,c){const u=t.append("rect").attr("width",s).attr("height",a).attr("fill","none").style("pointer-events","all").style("cursor","crosshair"),f=t.append("line").attr("y1",0).attr("y2",a).attr("stroke","#ffffff").attr("stroke-opacity",0).attr("stroke-width",.8).attr("stroke-dasharray","3 3"),h=t.append("g").attr("class","line-tooltip").attr("opacity",0),d=[...new Set(e.flatMap(_=>_.values.map(m=>Number(m[o]))))].sort((_,m)=>_-m),p=Rp(_=>_).left;u.on("mousemove",_=>{const[m]=vR(_),g=n.invert(m),S=p(d,g),x=d[S-1],v=d[S],M=x==null?v:v==null||g-x<v-g?x:v;if(M==null)return;const E=n(M);f.attr("x1",E).attr("x2",E).attr("stroke-opacity",.3),h.selectAll("*").remove(),h.attr("opacity",1);let T=0;e.forEach(A=>{const y=A.values.find(O=>Number(O[o])===M);if(!y)return;const b=r(Number(y[l])),R=c(A.name);h.append("circle").attr("cx",E).attr("cy",b).attr("r",4).attr("fill",R).attr("stroke","#fff").attr("stroke-width",1.5);const D=E+8,I=12+T*16;h.append("rect").attr("x",D-2).attr("y",I-10).attr("width",70).attr("height",14).attr("rx",3).attr("fill","rgba(9,21,35,0.85)"),h.append("text").attr("x",D).attr("y",I).attr("fill",R).attr("font-size",10).attr("font-weight",500).text(Vr(",")(Number(y[l]))),T+=1}),h.append("text").attr("x",E).attr("y",a+16).attr("text-anchor","middle").attr("fill","#d8dee9").attr("font-size",10).text(Vr("d")(M))}),u.on("mouseleave",()=>{f.attr("stroke-opacity",0),h.attr("opacity",0)})}drawLineEndLabels(t,e,n,r,s,a,o,l,c){if(!Array.isArray(e)||e.length===0)return;const u=a+10,f=12,h=8,d=Math.max(h,o-8),p=e.map(m=>{const g=m.values[m.values.length-1];if(!g)return null;const S=Number(g[l]),x=Number(g[c]);return!Number.isFinite(S)||!Number.isFinite(x)?null:{name:m.name,xEnd:r(S),yTarget:s(x),y:s(x)}}).filter(Boolean).sort((m,g)=>m.yTarget-g.yTarget);if(p.length===0)return;p.forEach((m,g)=>{g===0?m.y=Math.max(h,m.yTarget):m.y=Math.max(m.yTarget,p[g-1].y+f)}),p[p.length-1].y=Math.min(p[p.length-1].y,d);for(let m=p.length-2;m>=0;m-=1)p[m].y=Math.min(p[m].y,p[m+1].y-f);if(p[0].y<h)if(p.length===1)p[0].y=(h+d)/2;else{const m=(d-h)/(p.length-1);p.forEach((g,S)=>{g.y=h+m*S})}const _=t.append("g").attr("class","line-end-labels");_.selectAll("line").data(p).enter().append("line").attr("x1",m=>m.xEnd+2).attr("y1",m=>m.yTarget).attr("x2",u-4).attr("y2",m=>m.y).attr("stroke",m=>n(m.name)).attr("stroke-opacity",.8).attr("stroke-width",1),_.selectAll("text").data(p).enter().append("text").attr("x",u).attr("y",m=>m.y).attr("dominant-baseline","middle").attr("fill",m=>n(m.name)).attr("font-size",10).attr("font-weight",600).text(m=>m.name)}renderLineAnnotations(t,e,n,r,s,a){if(!Array.isArray(a)||a.length===0)return;const o=t.append("g").attr("class","chart-annotations"),l=e.domain(),c=n.domain();a.forEach(u=>{const f=u?.type,h=String(u?.label||"");if(f==="verticalLine"){const d=u.year??u.x??u.value,p=Number(d);if(!Number.isFinite(p)||p<Math.min(...l)||p>Math.max(...l))return;const _=e(p);o.append("line").attr("x1",_).attr("y1",0).attr("x2",_).attr("y2",s).attr("stroke","#e5edf7").attr("stroke-width",1).attr("stroke-opacity",.8).attr("stroke-dasharray","4 4"),h&&o.append("text").attr("x",_+6).attr("y",12).attr("fill","#e7eef8").attr("font-size",10).attr("font-weight",500).text(h);return}if(f==="horizontalLine"){const d=u.y??u.value,p=Number(d);if(!Number.isFinite(p)||p<Math.min(...c)||p>Math.max(...c))return;const _=n(p);if(o.append("line").attr("x1",0).attr("y1",_).attr("x2",r).attr("y2",_).attr("stroke","#e5edf7").attr("stroke-width",1).attr("stroke-opacity",.8).attr("stroke-dasharray","4 4"),h){const m=Math.max(12,_-6);o.append("text").attr("x",6).attr("y",m).attr("fill","#e7eef8").attr("font-size",10).attr("font-weight",500).text(h)}}})}renderPie(t,e,n){const r=this.resolvePieDataset(e,n);if(!Array.isArray(r)||r.length===0){this.renderUnsupported(t,"pieデータが空です");return}const s=n.labelField||"label",a=n.valueField||"value",o=r.map(g=>({...g,__pieValue:this.parsePieNumericValue(g[a])})).filter(g=>g[s]!=null&&Number.isFinite(g.__pieValue));if(o.length===0){this.renderUnsupported(t,"pieデータが不正です");return}const l=n.title||n.groupTitle||"円グラフ",c=this.createPanelInner(t,l,{compact:!0}),u=Math.max(24,Math.min(c.width,c.height)*.33),f=G3().value(g=>g.__pieValue).sort(null),h=k3().innerRadius(0).outerRadius(u),d=this.buildPalette(o.length);n.remainderColor&&o.length===2&&(d[1]=n.remainderColor);const p=c.group.append("g").attr("transform",`translate(${c.width/2}, ${c.height/2-8})`),_=t._gridIndex!=null?t._gridIndex*80:0;p.selectAll("path").data(f(o)).enter().append("path").attr("fill",(g,S)=>d[S]).attr("stroke","#0b1726").attr("stroke-width",1).attr("opacity",.95).attr("d",g=>h({...g,endAngle:g.startAngle})).transition().duration(600).delay(_).ease($i).attrTween("d",g=>{const S=Us({startAngle:g.startAngle,endAngle:g.startAngle},g);return x=>h(S(x))});const m=c.group.append("g").attr("transform",`translate(0, ${c.height-Math.min(o.length*15,c.height*.38)})`);o.slice(0,6).forEach((g,S)=>{const x=S*15;m.append("rect").attr("x",0).attr("y",x-9).attr("width",9).attr("height",9).attr("fill",d[S]),m.append("text").attr("x",14).attr("y",x).attr("fill","#d8dee9").attr("font-size",10).text(`${g[s]}: ${g[a]}`)})}resolvePieDataset(t,e){if(Array.isArray(t)){const n=e.rowField,r=e.rowValue;if(n&&r!=null){const s=t.find(l=>String(l?.[n]??"").trim()===String(r).trim());if(!s)return[];const o=(Array.isArray(e.categoryColumns)&&e.categoryColumns.length>0?e.categoryColumns:Object.keys(s).filter(l=>l!==n)).map(l=>({label:l,value:this.parsePieNumericValue(s[l])})).filter(l=>Number.isFinite(l.value));if(o.length===0)return[];if(o.length===1&&e.primaryLabel&&(o[0].label=String(e.primaryLabel)),o.length===1&&Number.isFinite(Number(e.normalizeTo))){const l=Number(e.normalizeTo),c=Math.max(0,l-o[0].value);o.push({label:e.remainderLabel||"未治療",value:c})}return o}return t}if(Array.isArray(t?.groups)){const n=e.groupId,r=n?t.groups.find(s=>s.id===n):t.groups[e.groupIndex??0];return r?r.values||[]:[]}return[]}parsePieNumericValue(t){if(Number.isFinite(t))return Number(t);if(typeof t=="string"){const e=t.replace(/,/g,"").replace(/%/g,"").trim(),n=Number(e);if(Number.isFinite(n))return n}return NaN}renderSankey(t,e,n){const r=this.normalizeSankeyData(e);if(!r||r.nodes.length===0||r.links.length===0){this.renderUnsupported(t,"sankeyデータが不正です");return}const s=n.title||"サンキー・ダイアグラム",a=this.createPanelInner(t,s),o=a.width,l=a.height,c=new Map(r.nodes.map(A=>[A.id,{...A,in:[],out:[],level:0}])),u=r.links.map(A=>({source:c.get(A.source),target:c.get(A.target),value:Number(A.value)})).filter(A=>A.source&&A.target&&Number.isFinite(A.value)&&A.value>0);u.forEach(A=>{A.source.out.push(A),A.target.in.push(A)}),this.assignNodeLevels(c);const f=new Map;[...c.values()].forEach(A=>{f.has(A.level)||f.set(A.level,[]),f.get(A.level).push(A)});const h=[...f.keys()].sort((A,y)=>A-y),d=Math.max(...h,1),p=12,_=Math.max(8,Math.min(18,o*.03)),m=Math.max(...h.map(A=>f.get(A).reduce((y,b)=>y+this.nodeValue(b),0)),1),g=(l-p*6)/m;h.forEach(A=>{const y=f.get(A),R=y.reduce((I,O)=>I+this.nodeValue(O),0)*g+(y.length-1)*p;let D=(l-R)/2;y.forEach(I=>{I.h=Math.max(8,this.nodeValue(I)*g),I.w=_,I.x=A/d*(o-_),I.y=D,I.inOffset=0,I.outOffset=0,D+=I.h+p})});const S=this.buildPalette(Math.max(h.length,2)),x=[...c.values()];x.forEach(A=>{A.color=S[Math.min(A.level,S.length-1)]});const v=a.group.append("g").attr("fill","none"),M=[];u.forEach((A,y)=>{const b=Math.max(1.5,A.value*g),R=A.source.x+A.source.w,D=A.source.y+A.source.outOffset+b/2,I=A.target.x,O=A.target.y+A.target.inOffset+b/2;A.source.outOffset+=b,A.target.inOffset+=b;const F=R+(I-R)*.45,z=R+(I-R)*.55,U=`M${R},${D} C${F},${D} ${z},${O} ${I},${O}`,H=`sankey-link-grad-${y}-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",H).attr("gradientUnits","userSpaceOnUse").attr("x1",R).attr("y1",D).attr("x2",I).attr("y2",O).selectAll("stop").data([{offset:"0%",color:A.source.color},{offset:"100%",color:A.target.color}]).enter().append("stop").attr("offset",L=>L.offset).attr("stop-color",L=>L.color);const Z=v.append("path").attr("d",U).attr("stroke",`url(#${H})`).attr("stroke-width",b).attr("stroke-opacity",.35);M.push({el:Z,link:A})});const E=a.group.append("g");E.selectAll("rect").data(x).enter().append("rect").attr("x",A=>A.x).attr("y",A=>A.y).attr("width",A=>A.w).attr("height",A=>A.h).attr("fill",A=>A.color).attr("fill-opacity",.88).attr("stroke","#ffffff").attr("stroke-width",.6).style("pointer-events","all").style("cursor","pointer").on("mouseenter",(A,y)=>{M.forEach(({el:b,link:R})=>{const D=R.source.id===y.id||R.target.id===y.id;b.transition().duration(200).attr("stroke-opacity",D?.7:.08)})}).on("mouseleave",()=>{M.forEach(({el:A})=>{A.transition().duration(200).attr("stroke-opacity",.35)})}),E.selectAll("text").data(x).enter().append("text").attr("x",A=>A.level===0?A.x+A.w+6:A.x-6).attr("y",A=>A.y+A.h/2+3).attr("text-anchor",A=>A.level===0?"start":"end").attr("fill","#e6edf5").attr("font-size",11).text(A=>A.label)}normalizeSankeyData(t){if(t?.nodes&&t?.links){const e=t.nodes.map((s,a)=>({id:s.id??s.name??String(a),label:s.name??s.id??String(a)})),n=e.map(s=>s.id),r=t.links.map(s=>({source:typeof s.source=="number"?n[s.source]:s.source,target:typeof s.target=="number"?n[s.target]:s.target,value:Number(s.value)}));return{nodes:e,links:r}}if(Array.isArray(t)){const e=new Set,n=t.map(s=>{const a=String(s.source??s.from??""),o=String(s.target??s.to??"");return e.add(a),e.add(o),{source:a,target:o,value:Number(s.value??s.count??0)}});return{nodes:[...e].filter(Boolean).map(s=>({id:s,label:s})),links:n}}return null}assignNodeLevels(t){const e=[...t.values()],n=new Map(e.map(s=>[s.id,s.in.length])),r=e.filter(s=>s.in.length===0);if(r.length===0){e.forEach(s=>{s.level=0});return}for(;r.length>0;){const s=r.shift();s.out.forEach(a=>{const o=a.target;o.level=Math.max(o.level,s.level+1),n.set(o.id,n.get(o.id)-1),n.get(o.id)===0&&r.push(o)})}}nodeValue(t){const e=Pg(t.in,r=>r.value),n=Pg(t.out,r=>r.value);return Math.max(e,n,1)}renderVenn(t,e,n){const r=this.resolveVennDataset(e,n);if(!r||!Array.isArray(r.sets)||r.sets.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const s=n.title||r.title||"ベン図",a=this.createPanelInner(t,s,{compact:!0}),o=r.sets.filter(x=>Array.isArray(x?.sets)&&x.sets.length>=1&&Number.isFinite(Number(x.size))).map(x=>({sets:x.sets.map(v=>String(v)),size:Math.max(0,Number(x.size))})),l=[...new Set(o.filter(x=>x.sets.length===1).map(x=>x.sets[0]))];if(l.length<2||l.length>3){this.renderUnsupported(t,"ベン図は2〜3集合を想定しています");return}if(o.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const c=this.buildPalette(l.length),u=new Map(l.map((x,v)=>[x,c[v]])),f=x=>x.slice().sort().join("&"),h=new Map(o.map(x=>[f(x.sets),x]));let d;try{d=SD(o,{width:a.width,height:a.height,padding:6,round:2})}catch(x){console.warn("venn layout failed",x),this.renderUnsupported(t,"vennレイアウトの計算に失敗しました");return}if(!Array.isArray(d)||d.length===0){this.renderUnsupported(t,"vennレイアウト結果が空です");return}const p=a.group.append("g"),_=[...d].sort((x,v)=>x.data.sets.length-v.data.sets.length),m=a.width/2,g=a.height/2;if(p.selectAll("path.venn-area").data(_).enter().append("path").attr("class",x=>`venn-area venn-${x.data.sets.length===1?"circle":"intersection"}`).attr("d",x=>x.path).attr("fill-rule",x=>x.data.sets.length>1?"evenodd":null).attr("fill",x=>x.data.sets.length===1?u.get(x.data.sets[0])||"#5fb3ff":"#dbe6f2").attr("fill-opacity",0).attr("stroke",x=>x.data.sets.length===1?u.get(x.data.sets[0])||"#5fb3ff":"#dbe6f2").attr("stroke-opacity",0).attr("stroke-width",x=>x.data.sets.length===1?1.2:.9).attr("transform",x=>x.data.sets.length===1?`translate(${m},${g}) scale(0.3) translate(${-m},${-g})`:null).transition().duration(500).delay(x=>x.data.sets.length===1?0:300).ease($i).attr("fill-opacity",x=>x.data.sets.length===1?.3:.16).attr("stroke-opacity",x=>x.data.sets.length===1?.95:.45).attr("transform",null),d.filter(x=>x.data.sets.length===1).forEach(x=>{const v=x.data.sets[0],M=x.circles.find(E=>E.set===v)||x.circles[0];M&&p.append("text").attr("x",M.x).attr("y",Math.max(10,M.y-M.radius-8)).attr("text-anchor","middle").attr("fill","#e6edf5").attr("font-size",10).attr("opacity",0).transition().duration(400).delay(200).attr("opacity",1).text(v)}),l.length===2){const x=l[0],v=l[1],M=h.get(f([x,v]))?.size??0,E=h.get(f([x]))?.size??0,T=h.get(f([v]))?.size??0,A=new Map([[f([x]),Math.max(0,E-M)],[f([v]),Math.max(0,T-M)],[f([x,v]),Math.max(0,M)]]);d.filter(y=>A.has(f(y.data.sets))).forEach(y=>{const b=A.get(f(y.data.sets));Number.isFinite(b)&&p.append("text").attr("x",y.text.x).attr("y",y.text.y+3).attr("text-anchor","middle").attr("fill","#ffffff").attr("font-size",10).attr("opacity",0).text(Vr(",")(b)).transition().duration(400).delay(350).attr("opacity",1)})}l.length===3&&d.filter(x=>x.data.sets.length>=2).forEach(x=>{const v=h.get(f(x.data.sets));v&&p.append("text").attr("x",x.text.x).attr("y",x.text.y+3).attr("text-anchor","middle").attr("fill","#ffffff").attr("font-size",10).attr("opacity",0).text(Vr(",")(v.size)).transition().duration(400).delay(350).attr("opacity",1)})}resolveVennDataset(t,e){return t?.sets?t:Array.isArray(t?.groups)&&(e.groupId?t.groups.find(r=>r.id===e.groupId):t.groups[e.groupIndex??0])||null}renderUnsupported(t,e){const n=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);n.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#0f1b2a").attr("fill-opacity",.7).attr("stroke","#42536a").attr("stroke-opacity",.5),n.append("text").attr("x",t.width/2).attr("y",t.height/2).attr("text-anchor","middle").attr("fill","#e7edf6").attr("font-size",12).text(e)}drawEmptyPanel(t){this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`).append("rect").attr("width",t.width).attr("height",t.height).attr("rx",8).attr("fill","#0e1a28").attr("fill-opacity",.2).attr("stroke","#42536a").attr("stroke-dasharray","4 4").attr("stroke-opacity",.35)}createPanelInner(t,e="",n={}){const r=n.compact===!0,s=e?r?20:28:0,a=r?10:14,o=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);o.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","none").attr("stroke",this.getThemePrimary()).attr("stroke-width",1.5).attr("stroke-opacity",.15).attr("filter","url(#panel-glow)"),o.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#091523").attr("fill-opacity",.63).attr("stroke","#5f738a").attr("stroke-opacity",.35),e&&o.append("text").attr("x",a).attr("y",a+3).attr("dominant-baseline","hanging").attr("fill","#ffffff").attr("font-size",r?12:14).attr("font-weight",600).text(e);const l=o.append("g").attr("transform",`translate(${a}, ${a+s})`),c=t.width-a*2,u=t.height-a*2-s;return{group:l,width:c,height:u}}drawBackdrop(){this.root.append("rect").attr("x",0).attr("y",0).attr("width",Wf).attr("height",Xf).attr("fill","#06111e").attr("fill-opacity",.64)}ensureSvg(){if(!this.container||this.svg&&this.svg.node()?.isConnected)return;this.clear(),this.svg=nv(this.container).append("svg").attr("viewBox",`0 0 ${Wf} ${Xf}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","chart layer"),this.root=this.svg.append("g"),this.defs=this.svg.append("defs");const t=this.defs.append("filter").attr("id","panel-glow").attr("x","-20%").attr("y","-20%").attr("width","140%").attr("height","140%");t.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",3).attr("result","blur"),t.append("feMerge").selectAll("feMergeNode").data(["blur","SourceGraphic"]).enter().append("feMergeNode").attr("in",e=>e)}getThemePrimary(){return getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#ff6b6b"}buildPalette(t){const e=["#5fb3ff","#f59e0b","#34d399","#f87171","#a78bfa","#2dd4bf","#f472b6","#60a5fa","#fbbf24","#4ade80"];return t<=e.length?e.slice(0,t):Array.from({length:t},(n,r)=>P3(r/t))}toSafeCssToken(t){return String(t).replaceAll(/[^a-zA-Z0-9_-]/g,"-")}resolveLineLabelGutter(t){return t<280?70:t<420?96:130}resolveYAxisLabelGutter(t,e){const n=t.map(l=>Number(l[e])).filter(l=>Number.isFinite(l));if(n.length===0)return 56;const r=Rf(n.map(l=>Math.abs(l)))||0,s=[0,r*.25,r*.5,r*.75,r],o=14+(Rf(s.map(l=>Vr(",")(Math.round(l)).length))||4)*7;return Math.max(56,Math.min(110,o))}clear(){this.container&&(this.container.innerHTML=""),this.svg=null,this.root=null,this.defs=null}destroy(){window.removeEventListener("resize",this.onResize),this.clear()}}class TD{constructor(t){this.config=t,this.elements={},this.svgHosts=null,this.webglLayer=null,this.imageLayer=null,this.mapLayer=null,this.chartLayer=null,this.activeLayer=null,this.activeChartSpanId=null}async init(){this.elements={image:document.getElementById("image-layer"),webgl:document.getElementById("webgl-layer"),svg:document.getElementById("svg-layer")};const t=this.elements.webgl;t&&(this.webglLayer=new oA(t),this.webglLayer.init(),t.classList.add("active"),this.activeLayer="webgl"),this.elements.image&&(this.imageLayer=new lA(this.elements.image)),this.elements.svg&&(this.svgHosts=this.createSvgHosts(this.elements.svg),this.mapLayer=new J3(this.svgHosts.map),this.chartLayer=new bD(this.svgHosts.chart))}createSvgHosts(t){t.innerHTML="";const e=document.createElement("div");e.className="svg-sub-layer",e.dataset.layer="map";const n=document.createElement("div");return n.className="svg-sub-layer",n.dataset.layer="chart",t.appendChild(e),t.appendChild(n),{map:e,chart:n}}transition(t,e){const n=this.resolveActiveLayer(t);if(this.activeLayer&&this.activeLayer!==n){const r=this.elements[this.activeLayer];r&&(r.classList.remove("active"),r.classList.remove("clip-enter")),this.activeLayer==="image"&&this.imageLayer?.hide(),this.activeLayer==="svg"&&(this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null)}if(n&&this.elements[n]){const r=this.elements[n];r.classList.add("active"),this.activeLayer&&this.activeLayer!==n&&(r.classList.remove("clip-enter"),r.offsetWidth,r.classList.add("clip-enter"))}if(n==="image"&&t.image&&this.imageLayer?.show(t.image),n==="svg")if(t.map?.visible)this.chartLayer?.clear(),this.activeChartSpanId=null,this.mapLayer?.render(t.map);else if(t.chart?.visible){this.mapLayer?.clear();const r=this.resolveChartSpanId(t.chart),a=this.shouldContinueChartFromPrevious(t.chart)&&r&&this.activeChartSpanId===r;this.chartLayer?.render(t.chart,{transitionFromPrevious:!!a,spanId:r}).catch(o=>{console.error("Chart render failed:",o)}),this.activeChartSpanId=r}else this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null;this.activeLayer=n}resolveActiveLayer(t){return t.chart?.visible||t.map?.visible?"svg":t.image?.visible?"image":"webgl"}resolveChartSpanId(t){const e=t?.span?.id;if(e==null)return null;const n=String(e).trim();return n.length>0?n:null}shouldContinueChartFromPrevious(t){return!!t?.span?.continueFromPrevious}updateProgress(t){this.webglLayer?.setProgress(t)}setThemeColor(t){this.webglLayer?.setThemeColor(t)}destroy(){this.chartLayer?.destroy(),this.mapLayer?.destroy(),this.webglLayer?.destroy()}}class wD{constructor(t){this.config=t,this.container=document.getElementById("scroll-content"),this.stepElements=[]}render(){this.config.steps.forEach((t,e)=>{const n=this.createStepElement(t,e);this.container.appendChild(n),this.stepElements.push(n)})}createStepElement(t,e){const n=document.createElement("section");if(n.className="step",n.dataset.step=e,n.id=t.id,t.scrollHeight&&(n.style.minHeight=t.scrollHeight),t.id&&t.id.endsWith("-hero")&&n.classList.add("hero-step"),t.fixedClosing)return n.classList.add("fixed-closing-step"),n.appendChild(this.createFixedClosingElement()),n;if(t.text?.content){const s=document.createElement("div");s.className="text-card",s.innerHTML=t.text.content,this.applySplitText(s),this.applyPosition(s,t.text.position),n.appendChild(s)}return n}applySplitText(t){t.querySelectorAll("h2").forEach(n=>{const r=n.textContent;if(!r.trim())return;const s=n.getAttribute("style")||"",a=r.length>12?this.splitIntoLines(r):[r];n.innerHTML="",s&&n.setAttribute("style",s),a.forEach((o,l)=>{const c=document.createElement("span");c.className="split-line";const u=document.createElement("span");u.className="split-line-inner",u.textContent=o,u.style.transitionDelay=`${l*.08}s`,c.appendChild(u),n.appendChild(c)})})}splitIntoLines(t){const e=t.split(new RegExp("(?<=[。、！？〜～ ―])"));if(e.length>=2)return e.filter(r=>r.trim().length>0);const n=Math.ceil(t.length/2);return[t.slice(0,n),t.slice(n)]}applyPosition(t,e){e&&(e.width&&(t.style.maxWidth=e.width),t.dataset.hAlign=e.horizontal||"center",t.dataset.vAlign=e.vertical||"center")}activateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");if(n){n.classList.add("visible");const r=n.dataset.hAlign||"center",s=n.dataset.vAlign||"center",a={left:"flex-start",center:"center",right:"flex-end"},o={top:"flex-start",center:"center",bottom:"flex-end"};e.style.justifyContent=a[r]||"center",e.style.alignItems=o[s]||"center"}}deactivateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");n&&n.classList.remove("visible")}createFixedClosingElement(){const t=document.createElement("div");return t.className="fixed-closing-inner",t.innerHTML=`
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
    `,t}}const _u={aids:{id:"aids",name:"エイズとの闘い",primary:"#ff6b6b",secondary:"#ff8e8e",accent:"#e85555"},tuberculosis:{id:"tuberculosis",name:"結核との闘い",primary:"#4ecdc4",secondary:"#6dd5d0",accent:"#3bb8b0"},malariae:{id:"malariae",name:"マラリアとの闘い",primary:"#f4a620",secondary:"#f6b84a",accent:"#e89813"}};class AD{constructor(t,e="aids"){this.container=t,this.currentDiseaseId=e}render(){const t=_u[this.currentDiseaseId];this.container.innerHTML=`
      <div class="nav-inner">
        <div class="nav-logo">
          <a href="/prj-jcie/" class="nav-logo-text">データで見る感染症との闘い</a>
        </div>
        <ul class="nav-links">
          ${Object.values(_u).map(e=>{const n=e.id===this.currentDiseaseId;return`
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
    `,document.documentElement.style.setProperty("--theme-primary",t.primary),document.documentElement.style.setProperty("--theme-secondary",t.secondary),document.documentElement.style.setProperty("--theme-accent",t.accent)}}class CD{constructor(t){this.container=t}render(){const t=Object.values(_u);this.container.innerHTML=`
      <div class="top-page">
        <p class="top-lead">JCIEスペシャルコンテンツ</p>
        <h1 class="top-title">「感染症との闘い」</h1>
        <p class="top-subtitle">エイズ、結核、マラリア。人類を脅かす感染症の現状と課題をデータで紐解く。</p>
        <div class="top-disease-grid">
          ${t.map(e=>`
            <a href="/prj-jcie/${e.id}/" class="top-disease-card" style="--card-color: ${e.primary}">
              <span class="top-disease-name">${e.name}</span>
            </a>`).join("")}
        </div>
      </div>
    `}}const RD=Object.keys(_u);function PD(){const i="/prj-jcie/".replace(/\/$/,""),t=window.location.pathname,r=(t.startsWith(i)?t.slice(i.length):t).split("/").filter(Boolean)[0];return r&&RD.includes(r)?r:null}class DD{constructor(){this.config=null,this.scrollController=null,this.layerOrchestrator=null,this.contentRenderer=null}async init(){try{const t=PD();if(!t){new CD(document.getElementById("scroll-content")).render();return}new AD(document.getElementById("header-nav"),t).render();const n=new ty(t);this.config=await n.load(),this.contentRenderer=new wD(this.config),this.contentRenderer.render(),this.layerOrchestrator=new TD(this.config),await this.layerOrchestrator.init(),this.scrollController=new YS({onStepEnter:(r,s)=>this.handleStepEnter(r,s),onStepLeave:(r,s)=>this.handleStepLeave(r,s),onProgress:r=>this.handleProgress(r)}),this.scrollController.init(),console.log(`App initialized with ${this.config.steps.length} steps`)}catch(t){console.error("App initialization failed:",t)}}handleStepEnter(t,e){const n=this.config.steps[t];n&&(this.contentRenderer.activateStep(t),this.layerOrchestrator.transition(n,e),document.body.classList.toggle("is-fixed-closing",!!n.fixedClosing))}handleStepLeave(t,e){this.config.steps[t]?.fixedClosing&&document.body.classList.remove("is-fixed-closing"),this.contentRenderer.deactivateStep(t)}handleProgress(t){this.layerOrchestrator.updateProgress(t)}}const LD=new DD;LD.init();
