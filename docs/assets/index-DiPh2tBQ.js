(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class $v{constructor(t="aids"){this.diseaseId=t}async load(){const[t,e]=await Promise.all([this.loadContentConfig(),this.loadCityEpisodeConfig()]);return this.normalize(t,e)}async loadContentConfig(){const t=await fetch(`/config/${this.diseaseId}/content.json`);if(!t.ok)throw new Error(`Failed to load config: ${t.status}`);return t.json()}async loadCityEpisodeConfig(){const t=await fetch(`/config/${this.diseaseId}/content-map.json`);if(!t.ok){if(t.status===404)return null;throw new Error(`Failed to load city episode config: ${t.status}`)}return t.json()}normalize(t,e){const n=this.expandSteps(t.steps||[],e);return{steps:this.appendFixedClosingStep(n).map((s,a)=>({id:s.id||`step${a}`,index:a,text:s.text||null,chart:s.chart||null,map:s.map||null,image:s.image||null,scrollHeight:s.scrollHeight||null,fixedClosing:!!s.fixedClosing})),settings:t.settings||{},raw:t}}expandSteps(t,e){const n=[];for(const r of t){if(r.id==="city-episodes-anchor"||r.cityEpisodes?.enabled){const a=this.buildCityEpisodeSteps(e);if(a.length>0){n.push(...a);continue}}n.push(r)}return n}buildCityEpisodeSteps(t){const e=Array.isArray(t?.cities)?t.cities:[];if(e.length===0)return[];const n=this.escapeHtml(t?.timeline?.title||"都市エピソード"),r=this.escapeHtml(t?.timeline?.description||""),s=[...e].sort((c,u)=>(c.order??0)-(u.order??0)),a=[{id:"episode-intro",text:{content:`<h2>${n}</h2><p>${r}</p>`,visible:!0,position:{horizontal:"left",vertical:"center",width:"34%"}},chart:{visible:!1},map:{visible:!0,mode:"world-overview",center:[0,15],zoom:1.15,highlightCountries:[],lightenAllCountries:!0,lightenNonVisited:!1,markers:[]},image:{visible:!1},scrollHeight:"100vh"}],o=new Set,l=[];return s.forEach((c,u)=>{const f=c.country||"",h=Number(c.longitude),d=Number(c.latitude);Number.isFinite(h)&&Number.isFinite(d)&&l.push(c),f&&o.add(f),a.push({id:`city-episodes-${c.id||u+1}`,text:{content:this.renderCityEpisodeCard(c,u+1,s.length),visible:!0,position:{horizontal:u%2===0?"right":"left",vertical:"center",width:"36%"}},chart:{visible:!1},map:{visible:!0,mode:"single-city",cityId:c.id||null,center:[Number.isFinite(h)?h:0,Number.isFinite(d)?d:15],zoom:this.resolveCityZoom(c),highlightCountries:[...o],lightenNonVisited:!0,markers:l.map(p=>({id:p.id||`${p.nameEn||p.name}`,name:p.name||p.nameEn||"",country:p.country||"",longitude:Number(p.longitude),latitude:Number(p.latitude),color:p.style?.color||null,size:p.style?.size||7,isCurrent:p.id===c.id}))},image:{visible:!1},scrollHeight:c.transitions?.scrollHeight||"120vh"})}),a}renderCityEpisodeCard(t,e,n){const r=this.escapeHtml(t?.data?.title||t?.name||""),s=this.escapeHtml(t?.data?.description||""),a=this.escapeHtml(t?.name||t?.nameEn||""),o=this.escapeHtml(t?.nameEn||""),l=this.escapeHtml(t?.data?.url||"#"),c=t?.data?.thumbnail?`/config/${this.diseaseId}/thumb/${encodeURIComponent(t.data.thumbnail)}`:"",u=c?`<img class="city-episode-thumb" src="${c}" alt="${r}" loading="lazy" />`:"";return`
      <article class="city-episode-card">
        <p class="city-episode-meta">都市エピソード ${e}/${n}</p>
        ${u}
        <h3 class="city-episode-title">${r}</h3>
        <p class="city-episode-location">${a}${o?` / ${o}`:""}</p>
        <p class="city-episode-description">${s}</p>
        <a class="city-episode-link" href="${l}" target="_blank" rel="noopener noreferrer">外部コンテンツを見る</a>
      </article>
    `}resolveCityZoom(t){const e=t?.transitions?.routeType;return e==="same-location"?3.6:e==="start"?2.8:2.5}escapeHtml(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}appendFixedClosingStep(t){const e=t.filter(n=>n.id!=="closing"&&n.id!=="fixed-closing");return e.push({id:"fixed-closing",fixedClosing:!0,text:null,chart:{visible:!1},map:{visible:!1},image:{visible:!1},scrollHeight:"100vh"}),e}}var Yv="1.3.17";function w_(i,t,e){return Math.max(i,Math.min(t,e))}function qv(i,t,e){return(1-e)*i+e*t}function Kv(i,t,e,n){return qv(i,t,1-Math.exp(-e*n))}function Zv(i,t){return(i%t+t)%t}var jv=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const e=w_(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Kv(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function Jv(i,t){let e;return function(...n){let r=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(r,n)},t)}}var Qv=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=i,this.content=t,e&&(this.debouncedResize=Jv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},A_=class{events={};emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},Hp=100/6,Lr={passive:!1},ty=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Lr),this.element.addEventListener("touchstart",this.onTouchStart,Lr),this.element.addEventListener("touchmove",this.onTouchMove,Lr),this.element.addEventListener("touchend",this.onTouchEnd,Lr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new A_;on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Lr),this.element.removeEventListener("touchstart",this.onTouchStart,Lr),this.element.removeEventListener("touchmove",this.onTouchMove,Lr),this.element.removeEventListener("touchend",this.onTouchEnd,Lr)}onTouchStart=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=n===1?Hp:n===2?this.window.width:1,s=n===1?Hp:n===2?this.window.height:1;t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Gp=i=>Math.min(1,1.001-Math.pow(2,-10*i)),ey=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new jv;emitter=new A_;dimensions;virtualScroll;constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:v=!0,autoRaf:M=!1,anchors:y=!1,autoToggle:x=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:R=T,stopInertiaOnNavigate:S=!1}={}){window.lenisVersion=Yv,(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=Gp:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:v,autoRaf:M,anchors:y,autoToggle:x,allowNestedScroll:E,naiveDimensions:R,stopInertiaOnNavigate:S},this.dimensions=new Qv(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new ty(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=e.find(r=>r.getAttribute("href")?.includes("#"));if(n){const r=n.getAttribute("href");if(r){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${r.split("#")[1]}`;this.scrollTo(a,s)}}}this.options.stopInertiaOnNavigate&&e.find(r=>r.host===window.location.host)&&this.reset()};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof i=="string"&&["top","left","start","#"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let h;if(typeof i=="string"?(h=document.querySelector(i),h||(i==="#top"?i=0:console.warn("Lenis: Target not found",i))):i instanceof HTMLElement&&i?.nodeType&&(h=i),h){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const d=h.getBoundingClientRect();i=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const h=i-this.animatedScroll;h>this.limit/2?i=i-this.limit:h<-this.limit/2&&(i=i+this.limit)}}else i=w_(0,i,this.limit);if(i===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=i),typeof a=="number"&&typeof o!="function"?o=Gp:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,i,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),r&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now(),r=i._lenis??={};let s,a,o,l,c,u,f,h;const d=this.options.gestureOrientation;if(n-(r.time??0)>2e3){r.time=Date.now();const x=window.getComputedStyle(i);r.computedStyle=x;const E=x.overflowX,T=x.overflowY;if(s=["auto","overlay","scroll"].includes(E),a=["auto","overlay","scroll"].includes(T),r.hasOverflowX=s,r.hasOverflowY=a,!s&&!a||d==="vertical"&&!a||d==="horizontal"&&!s)return!1;c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,h=i.clientHeight,o=c>f,l=u>h,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=c,r.scrollHeight=u,r.clientWidth=f,r.clientHeight=h}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,h=r.clientHeight;if(!s&&!a||!o&&!l||d==="vertical"&&(!a||!l)||d==="horizontal"&&(!s||!o))return!1;let p;if(d==="horizontal")p="x";else if(d==="vertical")p="y";else{const x=t!==0,E=e!==0;x&&s&&o&&(p="x"),E&&a&&l&&(p="y")}if(!p)return!1;let _,g,m,v,M;if(p==="x")_=i.scrollLeft,g=c-f,m=t,v=s,M=o;else if(p==="y")_=i.scrollTop,g=u-h,m=e,v=a,M=l;else return!1;return(m>0?_<g:_>0)&&v&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Zv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function dr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function R_(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Da={duration:.5,overwrite:!1,delay:0},$d,dn,De,Ti=1e8,we=1/Ti,Wf=Math.PI*2,ny=Wf/4,iy=0,C_=Math.sqrt,ry=Math.cos,sy=Math.sin,un=function(t){return typeof t=="string"},Be=function(t){return typeof t=="function"},Tr=function(t){return typeof t=="number"},Yd=function(t){return typeof t>"u"},ir=function(t){return typeof t=="object"},Gn=function(t){return t!==!1},qd=function(){return typeof window<"u"},xl=function(t){return Be(t)||un(t)},P_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,ay=/random\([^)]+\)/g,oy=/,\s*/g,Wp=/(?:-?\.?\d|\.)+/gi,D_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,L_=/[+-]=-?[.\d]+/,ly=/[^,'"\[\]\s]+/gi,cy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,Gi,Xf,Kd,hi={},Nc={},N_,I_=function(t){return(Nc=La(t,hi))&&Zn},Zd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xo=function(t,e){return!e&&console.warn(t)},F_=function(t,e){return t&&(hi[t]=e)&&Nc&&(Nc[t]=e)||hi},$o=function(){return 0},uy={suppressEvents:!0,isStart:!0,kill:!1},fc={suppressEvents:!0,kill:!1},fy={suppressEvents:!0},jd={},Yr=[],$f={},U_,si={},Nu={},Xp=30,hc=[],Jd="",Qd=function(t){var e=t[0],n,r;if(ir(e)||Be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=hc.length;r--&&!hc[r].targetTest(e););n=hc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new a0(t[r],n)))||t.splice(r,1);return t},Ts=function(t){return t._gsap||Qd(wi(t))[0]._gsap},O_=function(t,e,n){return(n=t[e])&&Be(n)?t[e]():Yd(n)&&t.getAttribute&&t.getAttribute(e)||n},Wn=function(t,e){return(t=t.split(",")).forEach(e)||t},ze=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},ya=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},hy=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ic=function(){var t=Yr.length,e=Yr.slice(0),n,r;for($f={},Yr.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tp=function(t){return!!(t._initted||t._startAt||t.add)},B_=function(t,e,n,r){Yr.length&&!dn&&Ic(),t.render(e,n,!!(dn&&e<0&&tp(t))),Yr.length&&!dn&&Ic()},k_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ly).length<2?e:un(t)?t.trim():t},z_=function(t){return t},di=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},dy=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},La=function(t,e){for(var n in e)t[n]=e[n];return t},$p=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ir(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Fc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Do=function(t){var e=t.parent||Ne,n=t.keyframes?dy(bn(t.keyframes)):di;if(Gn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},py=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},V_=function(t,e,n,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},pu=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Zr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ws=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},my=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Yf=function(t,e,n,r){return t._startAt&&(dn?t._startAt.revert(fc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},gy=function i(t){return!t||t._ts&&i(t.parent)},Yp=function(t){return t._repeat?Na(t._tTime,t=t.duration()+t._rDelay)*t:0},Na=function(t,e){var n=Math.floor(t=Le(t/e));return t&&n===t?n-1:n},Uc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},mu=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},gu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),mu(t),n._dirty||ws(n,t)),t},H_=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Uc(t.rawTime(),e),(!e._dur||hl(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),ws(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},$i=function(t,e,n,r){return e.parent&&Zr(e),e._start=Le((Tr(n)?n:n||t!==Ne?xi(t,n,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),V_(t,e,"_first","_last",t._sort?"_start":0),qf(e)||(t._recent=e),r||H_(t,e),t._ts<0&&gu(t,t._tTime),t},G_=function(t,e){return(hi.ScrollTrigger||Zd("scrollTrigger",e))&&hi.ScrollTrigger.create(e,t)},W_=function(t,e,n,r,s){if(np(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&U_!==oi.frame)return Yr.push(t),t._lazy=[s,r],1},_y=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},qf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},xy=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&_y(t)&&!(!t._initted&&qf(t))||(t._ts<0||t._dp._ts<0)&&!qf(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=hl(0,t._tDur,e),u=Na(l,o),t._yoyo&&u&1&&(a=1-a),u!==Na(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||dn||r||t._zTime===we||!e&&t._zTime){if(!t._initted&&W_(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Yf(t,e,n,!0),t._onUpdate&&!n&&ci(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ci(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Zr(t,1),!n&&!dn&&(ci(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},vy=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ia=function(t,e,n,r){var s=t._repeat,a=Le(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Le(a*(s+1)+t._rDelay*s):a,o>0&&!r&&gu(t,t._tTime=t._tDur*o),t.parent&&mu(t),n||ws(t.parent,t),t},qp=function(t){return t instanceof Ln?ws(t):Ia(t,t._dur)},yy={_start:0,endTime:$o,totalDuration:$o},xi=function i(t,e,n){var r=t.labels,s=t._recent||yy,a=t.duration()>=Ti?s.endTime(!1):t._dur,o,l,c;return un(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Lo=function(t,e,n){var r=Tr(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Gn(l.vars.inherit)&&l.parent;a.immediateRender=Gn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new je(e[0],a,e[s+1])},ns=function(t,e){return t||t===0?e(t):e},hl=function(t,e,n){return n<t?t:n>e?e:n},yn=function(t,e){return!un(t)||!(e=cy.exec(t))?"":e[1]},Sy=function(t,e,n){return ns(n,function(r){return hl(t,e,r)})},Kf=[].slice,X_=function(t,e){return t&&ir(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ir(t[0]))&&!t.nodeType&&t!==Gi},My=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return un(r)&&!e||X_(r,1)?(s=n).push.apply(s,wi(r)):n.push(r)})||n},wi=function(t,e,n){return De&&!e&&De.selector?De.selector(t):un(t)&&!n&&(Xf||!Fa())?Kf.call((e||Kd).querySelectorAll(t),0):bn(t)?My(t,n):X_(t)?Kf.call(t,0):t?[t]:[]},Zf=function(t){return t=wi(t)[0]||Xo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return wi(e,n.querySelectorAll?n:n===t?Xo("Invalid scope")||Kd.createElement("div"):t)}},$_=function(t){return t.sort(function(){return .5-Math.random()})},Y_=function(t){if(Be(t))return t;var e=ir(t)?t:{each:t},n=As(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,f=r;return un(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,p){var _=(p||e).length,g=a[_],m,v,M,y,x,E,T,R,S;if(!g){if(S=e.grid==="auto"?0:(e.grid||[1,Ti])[1],!S){for(T=-Ti;T<(T=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=a[_]=[],m=l?Math.min(S,_)*u-.5:r%S,v=S===Ti?0:l?_*f/S-.5:r/S|0,T=0,R=Ti,E=0;E<_;E++)M=E%S-m,y=v-(E/S|0),g[E]=x=c?Math.abs(c==="y"?y:M):C_(M*M+y*y),x>T&&(T=x),x<R&&(R=x);r==="random"&&$_(g),g.max=T-R,g.min=R,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=yn(e.amount||e.each)||0,n=n&&_<0?i0(n):n}return _=(g[h]-g.min)/g.max||0,Le(g.b+(n?n(_):_)*g.v)+g.u}},jf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Le(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(Tr(n)?0:yn(n))}},q_=function(t,e){var n=bn(t),r,s;return!n&&ir(t)&&(r=n=t.radius||Ti,t.values?(t=wi(t.values),(s=!Tr(t[0]))&&(r*=r)):t=jf(t.increment)),ns(e,n?Be(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:a,s||u===a||Tr(a)?u:u+yn(a)}:jf(t))},K_=function(t,e,n,r){return ns(bn(t)?!e:n===!0?!!(n=0):!r,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},Ey=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},by=function(t,e){return function(n){return t(parseFloat(n))+(e||yn(n))}},Ty=function(t,e,n){return j_(t,e,0,1,n)},Z_=function(t,e,n){return ns(n,function(r){return t[~~e(r)]})},wy=function i(t,e,n){var r=e-t;return bn(t)?Z_(t,i(0,t.length),e):ns(n,function(s){return(r+(s-t)%r)%r+t})},Ay=function i(t,e,n){var r=e-t,s=r*2;return bn(t)?Z_(t,i(0,t.length-1),e):ns(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},Yo=function(t){return t.replace(ay,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(oy);return K_(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},j_=function(t,e,n,r,s){var a=e-t,o=r-n;return ns(s,function(l){return n+((l-t)/a*o||0)})},Ry=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=un(t),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,s=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=e}else r||(t=La(bn(t)?[]:{},t));if(!u){for(l in e)ep.call(o,t,l,"get",e[l]);s=function(p){return sp(p,o)||(a?t.p:t)}}}return ns(n,s)},Kp=function(t,e,n){var r=t.labels,s=Ti,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ci=function(t,e,n){var r=t.vars,s=r[e],a=De,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Yr.length&&Ic(),o&&(De=o),u=l?s.apply(c,l):s.call(c),De=a,u},ho=function(t){return Zr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&ci(t,"onInterrupt"),t},pa,J_=[],Q_=function(t){if(t)if(t=!t.name&&t.default||t,qd()||t.headless){var e=t.name,n=Be(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:$o,render:sp,add:ep,kill:Wy,modifier:Gy,rawVars:0},a={targetTest:0,get:0,getSetter:rp,aliases:{},register:0};if(Fa(),t!==r){if(si[e])return;di(r,di(Fc(t,s),a)),La(r.prototype,La(s,Fc(t,a))),si[r.prop=e]=r,t.targetTest&&(hc.push(r),jd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}F_(e,r),t.register&&t.register(Zn,r,Xn)}else J_.push(t)},Te=255,po={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},Iu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},t0=function(t,e,n){var r=t?Tr(t)?[t>>16,t>>8&Te,t&Te]:0:po.black,s,a,o,l,c,u,f,h,d,p;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),po[t])r=po[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Te,r&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(r=p=t.match(Wp),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Iu(l+1/3,s,a),r[1]=Iu(l,s,a),r[2]=Iu(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(D_),n&&r.length<4&&(r[3]=1),r}else r=t.match(Wp)||po.transparent;r=r.map(Number)}return e&&!p&&(s=r[0]/Te,a=r[1]/Te,o=r[2]/Te,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},e0=function(t){var e=[],n=[],r=-1;return t.split(qr).forEach(function(s){var a=s.match(da)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},Zp=function(t,e,n){var r="",s=(t+r).match(qr),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=t0(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=e0(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(qr,"1").split(da),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(qr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},qr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in po)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),Cy=/hsl[a]?\(/,n0=function(t){var e=t.join(" "),n;if(qr.lastIndex=0,qr.test(e))return n=Cy.test(e),t[1]=Zp(t[1],n),t[0]=Zp(t[0],n,e0(t[1])),!0},qo,oi=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,p=function _(g){var m=i()-r,v=g===!0,M,y,x,E;if((m>t||m<0)&&(n+=m-e),r+=m,x=r-n,M=x-a,(M>0||v)&&(E=++f.frame,h=x-f.time*1e3,f.time=x=x/1e3,a+=M+(M>=s?4:s-M),y=1),v||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](x,h,E,g)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){N_&&(!Xf&&qd()&&(Gi=Xf=window,Kd=Gi.document||{},hi.gsap=Zn,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(Zn.version),I_(Nc||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),J_.forEach(Q_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(g){return setTimeout(g,a-f.time*1e3+1|0)},qo=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),qo=0,c=$o},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,m,v){var M=m?function(y,x,E,T){g(y,x,E,T),f.remove(M)}:g;return f.remove(g),o[v?"unshift":"push"](M),Fa(),M},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f})(),Fa=function(){return!qo&&oi.wake()},oe={},Py=/^[\d.\-M][\d.\-,\s]/,Dy=/["']/g,Ly=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(Dy,"").trim():+c,r=l.substr(o+1).trim();return e},Ny=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},Iy=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ly(e[1])]:Ny(t).split(",").map(k_)):oe._CE&&Py.test(t)?oe._CE("",t):n},i0=function(t){return function(e){return 1-t(1-e)}},r0=function i(t,e){for(var n=t._first,r;n;)n instanceof Ln?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},As=function(t,e){return t&&(Be(t)?t:oe[t]||Iy(t))||e},Gs=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return Wn(t,function(o){oe[o]=hi[o]=s,oe[a=o.toLowerCase()]=n;for(var l in s)oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[o+"."+l]=s[l]}),s},s0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Fu=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Wf*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*sy((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:s0(o);return s=Wf/s,l.config=function(c,u){return i(t,c,u)},l},Uu=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:s0(n);return r.config=function(s){return i(t,s)},r};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Gs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Gs("Elastic",Fu("in"),Fu("out"),Fu());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};Gs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Gs("Circ",function(i){return-(C_(1-i*i)-1)});Gs("Sine",function(i){return i===1?1:-ry(i*ny)+1});Gs("Back",Uu("in"),Uu("out"),Uu());oe.SteppedEase=oe.steps=hi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-we;return function(o){return((r*hl(0,a,o)|0)+s)*n}}};Da.ease=oe["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Jd+=i+","+i+"Params,"});var a0=function(t,e){this.id=iy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:O_,this.set=e?e.getSetter:rp},Ko=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ia(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),qo||oi.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gu(this,n),!s._dp||s.parent||H_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),B_(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Na(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Uc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),mu(this),my(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Le(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$i(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uc(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=fy);var r=dn;return dn=n,tp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,qp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,qp(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(xi(this,n),Gn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Gn(r)),this._dur||(this._zTime=-we),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-we)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=Be(n)?n:z_,l=function(){var u=r.then;r.then=null,s&&s(),Be(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){ho(this)},i})();di(Ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var Ln=(function(i){R_(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gn(n.sortChildren),Ne&&$i(n.parent||Ne,dr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&G_(dr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Lo(0,arguments,this),this},e.from=function(r,s,a){return Lo(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Lo(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new je(r,s,xi(this,a),1),this},e.call=function(r,s,a){return $i(this,je.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new je(r,a,xi(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Do(a).immediateRender=Gn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Do(o).immediateRender=Gn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Le(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,p,_,g,m,v,M,y,x,E,T;if(this!==Ne&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,y=this._start,M=this._ts,m=!M,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(h=Le(u%g),u===l?(_=this._repeat,h=c):(x=Le(u/g),_=~~x,_&&_===x&&(h=c,_--),h>c&&(h=c)),x=Na(this._tTime,g),!o&&this._tTime&&x!==_&&this._tTime-x*g-this._dur<=0&&(x=_),E&&_&1&&(h=c-h,T=1),_!==x&&!this._lock){var R=E&&x&1,S=R===(E&&_&1);if(_<x&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Le(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,x=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;r0(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=vy(this,Le(o),Le(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!x&&(ci(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=-we);break}}d=p}else{d=this._last;for(var b=r<0?r:h;d;){if(p=d._prev,(d._act||b<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||dn&&tp(d)),h!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=b?-we:we);break}}d=p}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-we)._zTime=h>=o?1:-1,this._ts))return this._start=y,mu(this),this.render(r,s,a);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ci(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(Tr(s)||(s=xi(this,s,r)),!(r instanceof Ko)){if(bn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(un(r))return this.addLabel(r,s);if(Be(r))r=je.delayedCall(0,r);else return this}return this!==r?$i(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof je?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return un(r)?this.removeLabel(r):Be(r)?this.killTweensOf(r):(r.parent===this&&pu(this,r),r===this._recent&&(this._recent=this._last),ws(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(oi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=xi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=je.delayedCall(0,s||$o,a);return o.data="isPause",this._hasPause=1,$i(this,o,xi(this,r))},e.removePause=function(r){var s=this._first;for(r=xi(this,r);s;)s._start===r&&s.data==="isPause"&&Zr(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Vr!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=wi(r),l=this._first,c=Tr(s),u;l;)l instanceof je?hy(l._targets,o)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=xi(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=je.to(a,di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||we,onStart:function(){if(a.pause(),!d){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==g&&Ia(p,g,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,di({startAt:{time:xi(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Kp(this,xi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Kp(this,xi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Le(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ws(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ws(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Ti,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$i(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Le(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ia(a,a===Ne&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(Ne._ts&&(B_(Ne,Uc(r,Ne)),U_=oi.frame),oi.frame>=Xp){Xp+=fi.autoSleep||120;var s=Ne._first;if((!s||!s._ts)&&fi.autoSleep&&oi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||oi.sleep()}}},t})(Ko);di(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fy=function(t,e,n,r,s,a,o){var l=new Xn(this._pt,t,e,0,1,h0,null,s),c=0,u=0,f,h,d,p,_,g,m,v;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Yo(r)),a&&(v=[n,r],a(v,t,e),n=v[0],r=v[1]),h=n.match(Lu)||[];f=Lu.exec(r);)p=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:p.charAt(1)==="="?ya(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=Lu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(L_.test(r)||m)&&(l.e=0),this._pt=l,l},ep=function(t,e,n,r,s,a,o,l,c,u){Be(r)&&(r=r(s||0,t,a));var f=t[e],h=n!=="get"?n:Be(f)?c?t[e.indexOf("set")||!Be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Be(f)?c?zy:u0:ip,p;if(un(r)&&(~r.indexOf("random(")&&(r=Yo(r)),r.charAt(1)==="="&&(p=ya(h,r)+(yn(h)||0),(p||p===0)&&(r=p))),!u||h!==r||Jf)return!isNaN(h*r)&&r!==""?(p=new Xn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Hy:f0,0,d),c&&(p.fp=c),o&&p.modifier(o,this,t),this._pt=p):(!f&&!(e in t)&&Zd(e,r),Fy.call(this,t,e,h,r,d,l||fi.stringFilter,c))},Uy=function(t,e,n,r,s){if(Be(t)&&(t=No(t,s,e,n,r)),!ir(t)||t.style&&t.nodeType||bn(t)||P_(t))return un(t)?No(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=No(t[o],s,e,n,r);return a},o0=function(t,e,n,r,s,a){var o,l,c,u;if(si[t]&&(o=new si[t]).init(s,o.rawVars?e[t]:Uy(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Xn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==pa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Vr,Jf,np=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:g,M=t._overwrite==="auto"&&!$d,y=t.timeline,x,E,T,R,S,b,C,P,I,O,N,k,U;if(y&&(!h||!s)&&(s="none"),t._ease=As(s,Da.ease),t._yEase=f?i0(As(f===!0?s:f,Da.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(P=g[0]?Ts(g[0]).harness:0,k=P&&r[P.prop],x=Fc(r,jd),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&p?fc:uy),_._lazy=0),a){if(Zr(t._startAt=je.set(g,di({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Gn(l),startAt:null,delay:0,onUpdate:c&&function(){return ci(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!o&&!d)&&t._startAt.revert(fc),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!_){if(e&&(o=!1),T=di({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Gn(l),immediateRender:o,stagger:0,parent:m},x),k&&(T[P.prop]=k),Zr(t._startAt=je.set(g,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(fc):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Gn(l)||l&&!p,E=0;E<g.length;E++){if(S=g[E],C=S._gsap||Qd(g)[E]._gsap,t._ptLookup[E]=O={},$f[C.id]&&Yr.length&&Ic(),N=v===g?E:v.indexOf(S),P&&(I=new P).init(S,k||x,t,N,v)!==!1&&(t._pt=R=new Xn(t._pt,S,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){O[H]=R}),I.priority&&(b=1)),!P||k)for(T in x)si[T]&&(I=o0(T,x,t,N,S,v))?I.priority&&(b=1):O[T]=R=ep.call(t,S,T,"get",x[T],N,v,0,r.stringFilter);t._op&&t._op[E]&&t.kill(S,t._op[E]),M&&t._pt&&(Vr=t,Ne.killTweensOf(S,O,t.globalTime(e)),U=!t.parent,Vr=0),t._pt&&l&&($f[C.id]=1)}b&&d0(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!U,h&&e<=0&&y.render(Ti,!0,!0)},Oy=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Jf=1,t.vars[e]="+=0",np(t,o),Jf=0,l?Xo(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=ze(n)+yn(f.e)),f.b&&(f.b=u.s+yn(f.b))},By=function(t,e){var n=t[0]?Ts(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=La({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ky=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(bn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},No=function(t,e,n,r,s){return Be(t)?t.call(e,n,r,s):un(t)&&~t.indexOf("random(")?Yo(t):t},l0=Jd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",c0={};Wn(l0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return c0[i]=1});var je=(function(i){R_(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Do(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,v=r.parent||Ne,M=(bn(n)||P_(n)?Tr(n[0]):"length"in r)?[n]:wi(n),y,x,E,T,R,S,b,C;if(o._targets=M.length?Qd(M):Xo("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||h||xl(c)||xl(u)){if(r=o.vars,y=o.timeline=new Ln({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:M}),y.kill(),y.parent=y._dp=dr(o),y._start=0,h||xl(c)||xl(u)){if(T=M.length,b=h&&Y_(h),ir(h))for(R in h)~l0.indexOf(R)&&(C||(C={}),C[R]=h[R]);for(x=0;x<T;x++)E=Fc(r,c0),E.stagger=0,m&&(E.yoyoEase=m),C&&La(E,C),S=M[x],E.duration=+No(c,dr(o),x,S,M),E.delay=(+No(u,dr(o),x,S,M)||0)-o._delay,!h&&T===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),y.to(S,E,b?b(x,S,M):0),y._ease=oe.none;y.duration()?c=u=0:o.timeline=0}else if(p){Do(di(y.vars.defaults,{ease:"none"})),y._ease=As(p.ease||r.ease||"none");var P=0,I,O,N;if(bn(p))p.forEach(function(k){return y.to(M,k,">")}),y.duration();else{E={};for(R in p)R==="ease"||R==="easeEach"||ky(R,p[R],E,p.easeEach);for(R in E)for(I=E[R].sort(function(k,U){return k.t-U.t}),P=0,x=0;x<I.length;x++)O=I[x],N={ease:O.e,duration:(O.t-(x?I[x-1].t:0))/100*c},N[R]=O.v,y.to(M,N,P),P+=N.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!$d&&(Vr=dr(o),Ne.killTweensOf(M),Vr=0),$i(v,dr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!p&&o._start===Le(v._time)&&Gn(f)&&gy(dr(o))&&v.data!=="nested")&&(o._tTime=-we,o.render(Math.max(0,-u)||0)),g&&G_(dr(o),g),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-we&&!u?l:r<we?0:r,h,d,p,_,g,m,v,M,y;if(!c)xy(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Le(f%_),f===l?(p=this._repeat,h=c):(g=Le(f/_),p=~~g,p&&p===g?(h=c,p--):h>c&&(h=c)),m=this._yoyo&&p&1,m&&(y=this._yEase,h=c-h),g=Na(this._tTime,_),h===o&&!a&&this._initted&&p===g)return this._tTime=f,this;p!==g&&(M&&this._yEase&&r0(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Le(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(W_(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!o&&f&&!s&&!g&&(ci(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;M&&M.render(r<0?r:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Yf(this,r,s,a),ci(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Yf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Zr(this,1),!s&&!(u&&!o)&&(f||o||m)&&(ci(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){qo||oi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||np(this,c),u=this._ease(c/this._dur),Oy(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(gu(this,0),this.parent||V_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Vr&&Vr.vars.overwrite!==!0)._first||ho(this),this.parent&&a!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?wi(r):o,c=this._ptLookup,u=this._pt,f,h,d,p,_,g,m;if((!s||s==="all")&&py(o,l))return s==="all"&&(this._pt=0),ho(this);for(f=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},Wn(s,function(v){return _[v]=1}),s=_),s=By(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,p=h,d={}):(d=f[m]=f[m]||{},p=s);for(_ in p)g=h&&h[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&pu(this,g,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ho(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Lo(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Lo(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return Ne.killTweensOf(r,s,a)},t})(Ko);di(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(i){je[i]=function(){var t=new Ln,e=Kf.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var ip=function(t,e,n){return t[e]=n},u0=function(t,e,n){return t[e](n)},zy=function(t,e,n,r){return t[e](r.fp,n)},Vy=function(t,e,n){return t.setAttribute(e,n)},rp=function(t,e){return Be(t[e])?u0:Yd(t[e])&&t.setAttribute?Vy:ip},f0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Hy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},h0=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},sp=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Gy=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},Wy=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?pu(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Xy=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},d0=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},Xn=(function(){function i(e,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||f0,this.d=l||this,this.set=c||ip,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Xy,this.m=n,this.mt=s,this.tween=r},i})();Wn(Jd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return jd[i]=1});hi.TweenMax=hi.TweenLite=je;hi.TimelineLite=hi.TimelineMax=Ln;Ne=new Ln({sortChildren:!1,defaults:Da,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=n0;var Rs=[],dc={},$y=[],jp=0,Yy=0,Ou=function(t){return(dc[t]||$y).map(function(e){return e()})},Qf=function(){var t=Date.now(),e=[];t-jp>2&&(Ou("matchMediaInit"),Rs.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Gi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ou("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),jp=t,Ou("matchMedia"))},p0=(function(){function i(e,n){this.selector=n&&Zf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Yy++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){Be(n)&&(s=r,r=n,n=Be);var a=this,o=function(){var c=De,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Zf(s)),De=a,f=r.apply(a,arguments),Be(f)&&a._r.push(f),De=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Be?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=De;De=null,n(this),De=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof je&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Rs.length;a--;)Rs[a].id===this.id&&Rs.splice(a,1)},t.revert=function(n){this.kill(n||{})},i})(),qy=(function(){function i(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){ir(n)||(n={matches:n});var a=new p0(0,s||this.scope),o=a.conditions={},l,c,u;De&&!a.selector&&(a.selector=De.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Gi.matchMedia(n[c]),l&&(Rs.indexOf(a)<0&&Rs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Qf):l.addEventListener("change",Qf)));return u&&r(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Oc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Q_(r)})},timeline:function(t){return new Ln(t)},getTweensOf:function(t,e){return Ne.getTweensOf(t,e)},getProperty:function(t,e,n,r){un(t)&&(t=wi(t)[0]);var s=Ts(t||{}).get,a=n?z_:k_;return n==="native"&&(n=""),t&&(e?a((si[e]&&si[e].get||s)(t,e,n,r)):function(o,l,c){return a((si[o]&&si[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=wi(t),t.length>1){var r=t.map(function(u){return Zn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var a=si[e],o=Ts(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;pa._pt=0,f.init(t,n?u+n:u,pa,0,[t]),f.render(1,f),pa._pt&&sp(1,pa)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var r,s=Zn.to(t,di((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=As(t.ease,Da.ease)),$p(Da,t||{})},config:function(t){return $p(fi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!si[o]&&!hi[o]&&Xo(e+" effect requires "+o+" plugin.")}),Nu[e]=function(o,l,c){return n(wi(o),di(l||{},s),c)},a&&(Ln.prototype[e]=function(o,l,c){return this.add(Nu[e](o,ir(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=As(e)},parseEase:function(t,e){return arguments.length?As(t,e):oe},getById:function(t){return Ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ln(t),r,s;for(n.smoothChildTiming=Gn(t.smoothChildTiming),Ne.remove(n),n._dp=0,n._time=n._tTime=Ne._time,r=Ne._first;r;)s=r._next,(e||!(!r._dur&&r instanceof je&&r.vars.onComplete===r._targets[0]))&&$i(n,r,r._start-r._delay),r=s;return $i(Ne,n,0),n},context:function(t,e){return t?new p0(t,e):De},matchMedia:function(t){return new qy(t)},matchMediaRefresh:function(){return Rs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Qf()},addEventListener:function(t,e){var n=dc[t]||(dc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=dc[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:wy,wrapYoyo:Ay,distribute:Y_,random:K_,snap:q_,normalize:Ty,getUnit:yn,clamp:Sy,splitColor:t0,toArray:wi,selector:Zf,mapRange:j_,pipe:Ey,unitize:by,interpolate:Ry,shuffle:$_},install:I_,effects:Nu,ticker:oi,updateRoot:Ln.updateRoot,plugins:si,globalTimeline:Ne,core:{PropTween:Xn,globals:F_,Tween:je,Timeline:Ln,Animation:Ko,getCache:Ts,_removeLinkedListItem:pu,reverting:function(){return dn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return $d=t}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Oc[i]=je[i]});oi.add(Ln.updateRoot);pa=Oc.to({},{duration:0});var Ky=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Zy=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Ky(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},Bu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},Wn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Zy(o,s)}}}},Zn=Oc.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Bu("roundProps",jf),Bu("modifiers"),Bu("snap",q_))||Oc;je.version=Ln.version=Zn.version="3.14.2";N_=1;qd()&&Fa();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;var Jp,Hr,Sa,ap,ys,Qp,op,jy=function(){return typeof window<"u"},wr={},ds=180/Math.PI,Ma=Math.PI/180,Ys=Math.atan2,tm=1e8,lp=/([A-Z])/g,Jy=/(left|right|width|margin|padding|x)/i,Qy=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},th=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},tS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},eS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},nS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},iS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},m0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},g0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},rS=function(t,e,n){return t.style[e]=n},sS=function(t,e,n){return t.style.setProperty(e,n)},aS=function(t,e,n){return t._gsap[e]=n},oS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},lS=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},cS=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ie="transform",$n=Ie+"Origin",uS=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in wr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=pr(r,o)}):this.tfm[t]=a.x?a[t]:pr(r,t),t===$n&&(this.tfm.zOrigin=a.zOrigin);else return Ki.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(Ie)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},_0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},fS=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=op(),(!s||!s.isStart)&&!n[Ie]&&(_0(n),r.zOrigin&&n[$n]&&(n[$n]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},x0=function(t,e){var n={target:t,props:[],revert:fS,save:uS};return t._gsap||Zn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},v0,eh=function(t,e){var n=Hr.createElementNS?Hr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hr.createElement(t);return n&&n.style?n:Hr.createElement(t)},ui=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(lp,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Ua(e)||e,1)||""},em="O,Moz,ms,Ms,Webkit".split(","),Ua=function(t,e,n){var r=e||ys,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(em[a]+t in s););return a<0?null:(a===3?"ms":a>=0?em[a]:"")+t},nh=function(){jy()&&window.document&&(Jp=window,Hr=Jp.document,Sa=Hr.documentElement,ys=eh("div")||{style:{}},eh("div"),Ie=Ua(Ie),$n=Ie+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",v0=!!Ua("perspective"),op=Zn.core.reverting,ap=1)},nm=function(t){var e=t.ownerSVGElement,n=eh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Sa.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Sa.removeChild(n),s},im=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},y0=function(t){var e,n;try{e=t.getBBox()}catch{e=nm(t),n=1}return e&&(e.width||e.height)||n||(e=nm(t)),e&&!e.width&&!e.x&&!e.y?{x:+im(t,["x","cx","x1"])||0,y:+im(t,["y","cy","y1"])||0,width:0,height:0}:e},S0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&y0(t))},jr=function(t,e){if(e){var n=t.style,r;e in wr&&e!==$n&&(e=Ie),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(lp,"-$1").toLowerCase())):n.removeAttribute(e)}},Gr=function(t,e,n,r,s,a){var o=new Xn(t._pt,e,n,0,1,a?g0:m0);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},rm={deg:1,rad:1,turn:1},hS={grid:1,flex:1},Jr=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ys.style,l=Jy.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",p,_,g,m;if(r===a||!s||rm[r]||rm[a])return s;if(a!=="px"&&!h&&(s=i(t,e,n,"px")),m=t.getCTM&&S0(t),(d||a==="%")&&(wr[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[u],ze(d?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Hr||!_.appendChild)&&(_=Hr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===oi.time&&!g.uncache)return ze(s/g.width*f);if(d&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=f+r,p=t[u],v?t.style[e]=v:jr(t,e)}else(d||a==="%")&&!hS[ui(_,"display")]&&(o.position=ui(t,"position")),_===t&&(o.position="static"),_.appendChild(ys),p=ys[u],_.removeChild(ys),o.position="absolute";return l&&d&&(g=Ts(_),g.time=oi.time,g.width=_[u]),ze(h?p*s/f:p&&s?f/p*s:0)},pr=function(t,e,n,r){var s;return ap||nh(),e in Ki&&e!=="transform"&&(e=Ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),wr[e]&&e!=="transform"?(s=jo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:kc(ui(t,$n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Bc[e]&&Bc[e](t,e,n)||ui(t,e)||O_(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Jr(t,e,s,n)+n:s},dS=function(t,e,n,r){if(!n||n==="none"){var s=Ua(e,t,1),a=s&&ui(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=ui(t,"borderTopColor"))}var o=new Xn(this._pt,t.style,e,0,1,h0),l=0,c=0,u,f,h,d,p,_,g,m,v,M,y,x;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ui(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=ui(t,e)||r,_?t.style[e]=_:jr(t,e)),u=[n,r],n0(u),n=u[0],r=u[1],h=n.match(da)||[],x=r.match(da)||[],x.length){for(;f=da.exec(r);)g=f[0],v=r.substring(l,f.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),g!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),g.charAt(1)==="="&&(g=ya(d,g)+y),m=parseFloat(g),M=g.substr((m+"").length),l=da.lastIndex-M.length,M||(M=M||fi.units[e]||y,l===r.length&&(r+=M,o.e+=M)),y!==M&&(d=Jr(t,e,_,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:m-d,m:p&&p<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?g0:m0;return L_.test(r)&&(o.e=0),this._pt=o,o},sm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pS=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=sm[n]||n,e[1]=sm[r]||r,e.join(" ")},mS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wr[o]&&(l=1,o=o==="transformOrigin"?$n:Ie),jr(n,o);l&&(jr(n,Ie),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",jo(n,1),a.uncache=1,_0(r)))}},Bc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new Xn(t._pt,e,n,0,0,mS);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},Zo=[1,0,0,1,0,0],M0={},E0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},am=function(t){var e=ui(t,Ie);return E0(e)?Zo:e.substr(7).match(D_).map(ze)},cp=function(t,e){var n=t._gsap||Ts(t),r=t.style,s=am(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zo:s):(s===Zo&&!t.offsetParent&&t!==Sa&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Sa.appendChild(t)),s=am(t),l?r.display=l:jr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Sa.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ih=function(t,e,n,r,s,a){var o=t._gsap,l=s||cp(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],v=l[5],M=e.split(" "),y=parseFloat(M[0])||0,x=parseFloat(M[1])||0,E,T,R,S;n?l!==Zo&&(T=d*g-p*_)&&(R=y*(g/T)+x*(-_/T)+(_*v-g*m)/T,S=y*(-p/T)+x*(d/T)-(d*v-p*m)/T,y=R,x=S):(E=y0(t),y=E.x+(~M[0].indexOf("%")?y/100*E.width:y),x=E.y+(~(M[1]||M[0]).indexOf("%")?x/100*E.height:x)),r||r!==!1&&o.smooth?(m=y-c,v=x-u,o.xOffset=f+(m*d+v*_)-m,o.yOffset=h+(m*p+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=x,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[$n]="0px 0px",a&&(Gr(a,o,"xOrigin",c,y),Gr(a,o,"yOrigin",u,x),Gr(a,o,"xOffset",f,o.xOffset),Gr(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+x)},jo=function(t,e){var n=t._gsap||new a0(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=ui(t,$n)||"0",u,f,h,d,p,_,g,m,v,M,y,x,E,T,R,S,b,C,P,I,O,N,k,U,H,Z,D,et,Et,vt,It,Nt;return u=f=h=_=g=m=v=M=y=0,d=p=1,n.svg=!!(t.getCTM&&S0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),r.scale=r.rotate=r.translate="none"),T=cp(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),ih(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,T)),x=n.xOrigin||0,E=n.yOrigin||0,T!==Zo&&(C=T[0],P=T[1],I=T[2],O=T[3],u=N=T[4],f=k=T[5],T.length===6?(d=Math.sqrt(C*C+P*P),p=Math.sqrt(O*O+I*I),_=C||P?Ys(P,C)*ds:0,v=I||O?Ys(I,O)*ds+_:0,v&&(p*=Math.abs(Math.cos(v*Ma))),n.svg&&(u-=x-(x*C+E*I),f-=E-(x*P+E*O))):(Nt=T[6],vt=T[7],D=T[8],et=T[9],Et=T[10],It=T[11],u=T[12],f=T[13],h=T[14],R=Ys(Nt,Et),g=R*ds,R&&(S=Math.cos(-R),b=Math.sin(-R),U=N*S+D*b,H=k*S+et*b,Z=Nt*S+Et*b,D=N*-b+D*S,et=k*-b+et*S,Et=Nt*-b+Et*S,It=vt*-b+It*S,N=U,k=H,Nt=Z),R=Ys(-I,Et),m=R*ds,R&&(S=Math.cos(-R),b=Math.sin(-R),U=C*S-D*b,H=P*S-et*b,Z=I*S-Et*b,It=O*b+It*S,C=U,P=H,I=Z),R=Ys(P,C),_=R*ds,R&&(S=Math.cos(R),b=Math.sin(R),U=C*S+P*b,H=N*S+k*b,P=P*S-C*b,k=k*S-N*b,C=U,N=H),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=ze(Math.sqrt(C*C+P*P+I*I)),p=ze(Math.sqrt(k*k+Nt*Nt)),R=Ys(N,k),v=Math.abs(R)>2e-4?R*ds:0,y=It?1/(It<0?-It:It):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!E0(ui(t,Ie)),U&&t.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=ze(d),n.scaleY=ze(p),n.rotation=ze(_)+o,n.rotationX=ze(g)+o,n.rotationY=ze(m)+o,n.skewX=v+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[$n]=kc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?_S:v0?b0:gS,n.uncache=0,n},kc=function(t){return(t=t.split(" "))[0]+" "+t[1]},ku=function(t,e,n){var r=yn(e);return ze(parseFloat(e)+parseFloat(Jr(t,"x",n+"px",r)))+r},gS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,b0(t,e)},rs="0deg",to="0px",ss=") ",b0=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,v=n.target,M=n.zOrigin,y="",x=m==="auto"&&t&&t!==1||m===!0;if(M&&(f!==rs||u!==rs)){var E=parseFloat(u)*Ma,T=Math.sin(E),R=Math.cos(E),S;E=parseFloat(f)*Ma,S=Math.cos(E),a=ku(v,a,T*S*-M),o=ku(v,o,-Math.sin(E)*-M),l=ku(v,l,R*S*-M+M)}g!==to&&(y+="perspective("+g+ss),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(x||a!==to||o!==to||l!==to)&&(y+=l!==to||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ss),c!==rs&&(y+="rotate("+c+ss),u!==rs&&(y+="rotateY("+u+ss),f!==rs&&(y+="rotateX("+f+ss),(h!==rs||d!==rs)&&(y+="skew("+h+", "+d+ss),(p!==1||_!==1)&&(y+="scale("+p+", "+_+ss),v.style[Ie]=y||"translate(0, 0)"},_S=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,v=n.forceCSS,M=parseFloat(a),y=parseFloat(o),x,E,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ma,c*=Ma,x=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=Ma,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),x*=S,E*=S)),x=ze(x),E=ze(E),T=ze(T),R=ze(R)):(x=f,R=h,E=T=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=Jr(d,"x",a,"px"),y=Jr(d,"y",o,"px")),(p||_||g||m)&&(M=ze(M+p-(p*x+_*T)+g),y=ze(y+_-(p*E+_*R)+m)),(r||s)&&(S=d.getBBox(),M=ze(M+r/100*S.width),y=ze(y+s/100*S.height)),S="matrix("+x+","+E+","+T+","+R+","+M+","+y+")",d.setAttribute("transform",S),v&&(d.style[Ie]=S)},xS=function(t,e,n,r,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ds:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*tm)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*tm)%a-~~(c/a)*a)),t._pt=h=new Xn(t._pt,e,n,r,c,tS),h.e=u,h.u="deg",t._props.push(n),h},om=function(t,e){for(var n in e)t[n]=e[n];return t},vS=function(t,e,n){var r=om({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,p;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ie]=e,o=jo(n,1),jr(n,Ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ie],a[Ie]=e,o=jo(n,1),a[Ie]=c);for(l in wr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=yn(c),p=yn(u),f=d!==p?Jr(n,l,c,p):parseFloat(c),h=parseFloat(u),t._pt=new Xn(t._pt,o,l,f,h-f,th),t._pt.u=p||0,t._props.push(l));om(o,r)};Wn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});Bc[t>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(p){return pr(o,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var T0={name:"css",register:nh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,p,_,g,m,v,M,y,x,E,T,R,S;ap||nh(),this.styles=this.styles||x0(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(si[_]&&o0(_,e,n,r,t,s)))){if(d=typeof u,p=Bc[_],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Yo(u)),p)p(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",qr.lastIndex=0,qr.test(c)||(g=yn(c),m=yn(u),m?g!==m&&(c=Jr(t,_,c,m)+m):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],un(c)&&~c.indexOf("random(")&&(c=Yo(c)),yn(c+"")||c==="auto"||(c+=fi.units[_]||yn(pr(t,_))||""),(c+"").charAt(1)==="="&&(c=pr(t,_))):c=pr(t,_),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),_ in Ki&&(_==="autoAlpha"&&(h===1&&pr(t,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,o.visibility),Gr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in wr,M){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ui(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=ui(t,"perspective"),b?t.style.perspective=b:jr(t,"perspective")}f=parseFloat(u)}if(y||(x=t._gsap,x.renderTransform&&!e.parseTransform||jo(t,e.parseTransform),E=e.smoothOrigin!==!1&&x.smooth,y=this._pt=new Xn(this._pt,o,Ie,0,1,x.renderTransform,x,0,-1),y.dep=1),_==="scale")this._pt=new Xn(this._pt,x,"scaleY",x.scaleY,(v?ya(x.scaleY,v+f):f)-x.scaleY||0,th),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push($n,0,o[$n]),u=pS(u),x.svg?ih(t,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==x.zOrigin&&Gr(this,x,"zOrigin",x.zOrigin,m),Gr(this,o,_,kc(c),kc(u)));continue}else if(_==="svgOrigin"){ih(t,u,1,E,0,this);continue}else if(_ in M0){xS(this,x,_,h,v?ya(h,v+u):u);continue}else if(_==="smoothOrigin"){Gr(this,x,"smooth",x.smooth,u);continue}else if(_==="force3D"){x[_]=u;continue}else if(_==="transform"){vS(this,u,t);continue}}else _ in o||(_=Ua(_)||_);if(M||(f||f===0)&&(h||h===0)&&!Qy.test(u)&&_ in o)g=(c+"").substr((h+"").length),f||(f=0),m=yn(u)||(_ in fi.units?fi.units[_]:g),g!==m&&(h=Jr(t,_,c,m)),this._pt=new Xn(this._pt,M?x:o,_,h,(v?ya(h,v+f):f)-h,!M&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?iS:th),this._pt.u=m||0,M&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=nS):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=eS);else if(_ in o)dS.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,r,s);else if(_!=="parseTransform"){Zd(_,u);continue}M||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),a.push(_)}}T&&d0(this)},render:function(t,e){if(e.tween._time||!op())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:pr,aliases:Ki,getSetter:function(t,e,n){var r=Ki[e];return r&&r.indexOf(",")<0&&(e=r),e in wr&&e!==$n&&(t._gsap.x||pr(t,"x"))?n&&Qp===n?e==="scale"?oS:aS:(Qp=n||{})&&(e==="scale"?lS:cS):t.style&&!Yd(t.style[e])?rS:~e.indexOf("-")?sS:rp(t,e)},core:{_removeProperty:jr,_getMatrix:cp}};Zn.utils.checkPrefix=Ua;Zn.core.getStyleSaver=x0;(function(i,t,e,n){var r=Wn(i+","+t+","+e,function(s){wr[s]=1});Wn(t,function(s){fi.units[s]="deg",M0[s]=1}),Ki[r[13]]=i+","+t,Wn(n,function(s){var a=s.split(":");Ki[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){fi.units[i]="px"});Zn.registerPlugin(T0);var zc=Zn.registerPlugin(T0)||Zn;zc.core.Tween;function yS(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function SS(i,t,e){return t&&yS(i.prototype,t),i}var fn,pc,li,Wr,Xr,Ea,w0,ps,Io,A0,vr,Ni,R0,C0=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},P0=1,ma=[],se=[],Qi=[],Fo=Date.now,rh=function(t,e){return e},MS=function(){var t=Io.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,se),r.push.apply(r,Qi),se=n,Qi=r,rh=function(a,o){return e[a](o)}},Kr=function(t,e){return~Qi.indexOf(t)&&Qi[Qi.indexOf(t)+1][e]},Uo=function(t){return!!~A0.indexOf(t)},An=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},wn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},vl="scrollLeft",yl="scrollTop",sh=function(){return vr&&vr.isPressed||se.cache++},Vc=function(t,e){var n=function r(s){if(s||s===0){P0&&(li.history.scrollRestoration="manual");var a=vr&&vr.isPressed;s=r.v=Math.round(s)||(vr&&vr.iOS?1:0),t(s),r.cacheID=se.cache,a&&rh("ss",s)}else(e||se.cache!==r.cacheID||rh("ref"))&&(r.cacheID=se.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Nn={s:vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vc(function(i){return arguments.length?li.scrollTo(i,en.sc()):li.pageXOffset||Wr[vl]||Xr[vl]||Ea[vl]||0})},en={s:yl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:Vc(function(i){return arguments.length?li.scrollTo(Nn.sc(),i):li.pageYOffset||Wr[yl]||Xr[yl]||Ea[yl]||0})},Vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||fn.utils.toArray)(t)[0]||(typeof t=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ES=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Qr=function(t,e){var n=e.s,r=e.sc;Uo(t)&&(t=Wr.scrollingElement||Xr);var s=se.indexOf(t),a=r===en.sc?1:2;!~s&&(s=se.push(t)-1),se[s+a]||An(t,"scroll",sh);var o=se[s+a],l=o||(se[s+a]=Vc(Kr(t,n),!0)||(Uo(t)?r:Vc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=fn.getProperty(t,"scrollBehavior")==="smooth"),l},ah=function(t,e,n){var r=t,s=t,a=Fo(),o=a,l=e||50,c=Math.max(500,l*3),u=function(p,_){var g=Fo();_||g-a>l?(s=r,r=p,o=a,a=g):n?r+=p:r=s+(p-s)/(g-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},h=function(p){var _=o,g=s,m=Fo();return(p||p===0)&&p!==r&&u(p),a===o||m-o>c?0:(r+(n?g:-g))/((n?m:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},eo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},lm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},D0=function(){Io=fn.core.globals().ScrollTrigger,Io&&Io.core&&MS()},L0=function(t){return fn=t||C0(),!pc&&fn&&typeof document<"u"&&document.body&&(li=window,Wr=document,Xr=Wr.documentElement,Ea=Wr.body,A0=[li,Wr,Xr,Ea],fn.utils.clamp,R0=fn.core.context||function(){},ps="onpointerenter"in Ea?"pointer":"mouse",w0=Xe.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=Xe.eventTypes=("ontouchstart"in Xr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return P0=0},500),D0(),pc=1),pc};Nn.op=en;se.cache=0;var Xe=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){pc||L0(fn)||console.warn("Please gsap.registerPlugin(Observer)"),Io||D0();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,x=n.onRight,E=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,b=n.onChangeY,C=n.onChange,P=n.onToggleX,I=n.onToggleY,O=n.onHover,N=n.onHoverEnd,k=n.onMove,U=n.ignoreCheck,H=n.isNormalizer,Z=n.onGestureStart,D=n.onGestureEnd,et=n.onWheel,Et=n.onEnable,vt=n.onDisable,It=n.onClick,Nt=n.scrollSpeed,K=n.capture,j=n.allowClicks,at=n.lockAxis,Lt=n.onLockAxis;this.target=o=Vn(o)||Xr,this.vars=n,d&&(d=fn.utils.toArray(d)),r=r||1e-9,s=s||0,p=p||1,Nt=Nt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Ea).lineHeight)||22);var mt,kt,ee,Tt,rt,Ut,gt,W=this,B=0,pe=0,Qt=n.passive||!u&&n.passive!==!1,Gt=Qr(o,Nn),wt=Qr(o,en),L=Gt(),w=wt(),z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ni[0]==="pointerdown",J=Uo(o),Q=o.ownerDocument||Wr,q=[0,0,0],bt=[0,0,0],ot=0,Ct=function(){return ot=Fo()},Rt=function(Ft,Kt){return(W.event=Ft)&&d&&ES(Ft.target,d)||Kt&&z&&Ft.pointerType!=="touch"||U&&U(Ft,Kt)},st=function(){W._vx.reset(),W._vy.reset(),kt.pause(),f&&f(W)},lt=function(){var Ft=W.deltaX=lm(q),Kt=W.deltaY=lm(bt),_t=Math.abs(Ft)>=r,$t=Math.abs(Kt)>=r;C&&(_t||$t)&&C(W,Ft,Kt,q,bt),_t&&(x&&W.deltaX>0&&x(W),E&&W.deltaX<0&&E(W),S&&S(W),P&&W.deltaX<0!=B<0&&P(W),B=W.deltaX,q[0]=q[1]=q[2]=0),$t&&(R&&W.deltaY>0&&R(W),T&&W.deltaY<0&&T(W),b&&b(W),I&&W.deltaY<0!=pe<0&&I(W),pe=W.deltaY,bt[0]=bt[1]=bt[2]=0),(Tt||ee)&&(k&&k(W),ee&&(g&&ee===1&&g(W),v&&v(W),ee=0),Tt=!1),Ut&&!(Ut=!1)&&Lt&&Lt(W),rt&&(et(W),rt=!1),mt=0},At=function(Ft,Kt,_t){q[_t]+=Ft,bt[_t]+=Kt,W._vx.update(Ft),W._vy.update(Kt),c?mt||(mt=requestAnimationFrame(lt)):lt()},Pt=function(Ft,Kt){at&&!gt&&(W.axis=gt=Math.abs(Ft)>Math.abs(Kt)?"x":"y",Ut=!0),gt!=="y"&&(q[2]+=Ft,W._vx.update(Ft,!0)),gt!=="x"&&(bt[2]+=Kt,W._vy.update(Kt,!0)),c?mt||(mt=requestAnimationFrame(lt)):lt()},ct=function(Ft){if(!Rt(Ft,1)){Ft=eo(Ft,u);var Kt=Ft.clientX,_t=Ft.clientY,$t=Kt-W.x,Bt=_t-W.y,Yt=W.isDragging;W.x=Kt,W.y=_t,(Yt||($t||Bt)&&(Math.abs(W.startX-Kt)>=s||Math.abs(W.startY-_t)>=s))&&(ee||(ee=Yt?2:1),Yt||(W.isDragging=!0),Pt($t,Bt))}},Xt=W.onPress=function(yt){Rt(yt,1)||yt&&yt.button||(W.axis=gt=null,kt.pause(),W.isPressed=!0,yt=eo(yt),B=pe=0,W.startX=W.x=yt.clientX,W.startY=W.y=yt.clientY,W._vx.reset(),W._vy.reset(),An(H?o:Q,Ni[1],ct,Qt,!0),W.deltaX=W.deltaY=0,M&&M(W))},F=W.onRelease=function(yt){if(!Rt(yt,1)){wn(H?o:Q,Ni[1],ct,!0);var Ft=!isNaN(W.y-W.startY),Kt=W.isDragging,_t=Kt&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),$t=eo(yt);!_t&&Ft&&(W._vx.reset(),W._vy.reset(),u&&j&&fn.delayedCall(.08,function(){if(Fo()-ot>300&&!yt.defaultPrevented){if(yt.target.click)yt.target.click();else if(Q.createEvent){var Bt=Q.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,li,1,$t.screenX,$t.screenY,$t.clientX,$t.clientY,!1,!1,!1,!1,0,null),yt.target.dispatchEvent(Bt)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&Kt&&!H&&kt.restart(!0),ee&&lt(),m&&Kt&&m(W),y&&y(W,_t)}},ht=function(Ft){return Ft.touches&&Ft.touches.length>1&&(W.isGesturing=!0)&&Z(Ft,W.isDragging)},it=function(){return(W.isGesturing=!1)||D(W)},dt=function(Ft){if(!Rt(Ft)){var Kt=Gt(),_t=wt();At((Kt-L)*Nt,(_t-w)*Nt,1),L=Kt,w=_t,f&&kt.restart(!0)}},nt=function(Ft){if(!Rt(Ft)){Ft=eo(Ft,u),et&&(rt=!0);var Kt=(Ft.deltaMode===1?l:Ft.deltaMode===2?li.innerHeight:1)*p;At(Ft.deltaX*Kt,Ft.deltaY*Kt,0),f&&!H&&kt.restart(!0)}},tt=function(Ft){if(!Rt(Ft)){var Kt=Ft.clientX,_t=Ft.clientY,$t=Kt-W.x,Bt=_t-W.y;W.x=Kt,W.y=_t,Tt=!0,f&&kt.restart(!0),($t||Bt)&&Pt($t,Bt)}},ft=function(Ft){W.event=Ft,O(W)},zt=function(Ft){W.event=Ft,N(W)},ue=function(Ft){return Rt(Ft)||eo(Ft,u)&&It(W)};kt=W._dc=fn.delayedCall(h||.25,st).pause(),W.deltaX=W.deltaY=0,W._vx=ah(0,50,!0),W._vy=ah(0,50,!0),W.scrollX=Gt,W.scrollY=wt,W.isDragging=W.isGesturing=W.isPressed=!1,R0(this),W.enable=function(yt){return W.isEnabled||(An(J?Q:o,"scroll",sh),a.indexOf("scroll")>=0&&An(J?Q:o,"scroll",dt,Qt,K),a.indexOf("wheel")>=0&&An(o,"wheel",nt,Qt,K),(a.indexOf("touch")>=0&&w0||a.indexOf("pointer")>=0)&&(An(o,Ni[0],Xt,Qt,K),An(Q,Ni[2],F),An(Q,Ni[3],F),j&&An(o,"click",Ct,!0,!0),It&&An(o,"click",ue),Z&&An(Q,"gesturestart",ht),D&&An(Q,"gestureend",it),O&&An(o,ps+"enter",ft),N&&An(o,ps+"leave",zt),k&&An(o,ps+"move",tt)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Tt=ee=!1,W._vx.reset(),W._vy.reset(),L=Gt(),w=wt(),yt&&yt.type&&Xt(yt),Et&&Et(W)),W},W.disable=function(){W.isEnabled&&(ma.filter(function(yt){return yt!==W&&Uo(yt.target)}).length||wn(J?Q:o,"scroll",sh),W.isPressed&&(W._vx.reset(),W._vy.reset(),wn(H?o:Q,Ni[1],ct,!0)),wn(J?Q:o,"scroll",dt,K),wn(o,"wheel",nt,K),wn(o,Ni[0],Xt,K),wn(Q,Ni[2],F),wn(Q,Ni[3],F),wn(o,"click",Ct,!0),wn(o,"click",ue),wn(Q,"gesturestart",ht),wn(Q,"gestureend",it),wn(o,ps+"enter",ft),wn(o,ps+"leave",zt),wn(o,ps+"move",tt),W.isEnabled=W.isPressed=W.isDragging=!1,vt&&vt(W))},W.kill=W.revert=function(){W.disable();var yt=ma.indexOf(W);yt>=0&&ma.splice(yt,1),vr===W&&(vr=0)},ma.push(W),H&&Uo(o)&&(vr=W),W.enable(_)},SS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Xe.version="3.14.2";Xe.create=function(i){return new Xe(i)};Xe.register=L0;Xe.getAll=function(){return ma.slice()};Xe.getById=function(i){return ma.filter(function(t){return t.vars.id===i})[0]};C0()&&fn.registerPlugin(Xe);var Dt,ua,re,Re,ai,me,up,Hc,Jo,Oo,mo,Sl,xn,_u,oh,Pn,cm,um,fa,N0,zu,I0,Cn,lh,F0,U0,kr,ch,fp,ba,hp,Bo,uh,Vu,Ml=1,vn=Date.now,Hu=vn(),Ri=0,go=0,fm=function(t,e,n){var r=ri(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},hm=function(t,e){return e&&(!ri(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},bS=function i(){return go&&requestAnimationFrame(i)},dm=function(){return _u=1},pm=function(){return _u=0},Wi=function(t){return t},_o=function(t){return Math.round(t*1e5)/1e5||0},O0=function(){return typeof window<"u"},B0=function(){return Dt||O0()&&(Dt=window.gsap)&&Dt.registerPlugin&&Dt},Is=function(t){return!!~up.indexOf(t)},k0=function(t){return(t==="Height"?hp:re["inner"+t])||ai["client"+t]||me["client"+t]},z0=function(t){return Kr(t,"getBoundingClientRect")||(Is(t)?function(){return vc.width=re.innerWidth,vc.height=hp,vc}:function(){return mr(t)})},TS=function(t,e,n){var r=n.d,s=n.d2,a=n.a;return(a=Kr(t,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(e?k0(s):t["client"+s])||0}},wS=function(t,e){return!e||~Qi.indexOf(t)?z0(t):function(){return vc}},Zi=function(t,e){var n=e.s,r=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+r)&&(a=Kr(t,n))?a()-z0(t)()[s]:Is(t)?(ai[n]||me[n])-k0(r):t[n]-t["offset"+r])},El=function(t,e){for(var n=0;n<fa.length;n+=3)(!e||~e.indexOf(fa[n+1]))&&t(fa[n],fa[n+1],fa[n+2])},ri=function(t){return typeof t=="string"},Sn=function(t){return typeof t=="function"},xo=function(t){return typeof t=="number"},ms=function(t){return typeof t=="object"},no=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Gu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},qs=Math.abs,V0="left",H0="top",dp="right",pp="bottom",Cs="width",Ps="height",ko="Right",zo="Left",Vo="Top",Ho="Bottom",Ke="padding",yi="margin",Oa="Width",mp="Height",tn="px",Si=function(t){return re.getComputedStyle(t)},AS=function(t){var e=Si(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},mm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},mr=function(t,e){var n=e&&Si(t)[oh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Dt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},Gc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},G0=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},RS=function(t){return function(e){return Dt.utils.snap(G0(t),e)}},gp=function(t){var e=Dt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return e(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=e(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:e(s<0?r-t:r+t)}},CS=function(t){return function(e,n){return gp(G0(t))(e,n.direction)}},bl=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},cn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},ln=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Tl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},gm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wl={toggleActions:"play",anticipatePin:0},Wc={top:0,left:0,center:.5,bottom:1,right:1},mc=function(t,e){if(ri(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in Wc?Wc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Al=function(t,e,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Re.createElement("div"),_=Is(n)||Kr(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?me:n,v=t.indexOf("start")!==-1,M=v?c:u,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(y+=(r===en?dp:pp)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+r.op.d2],gc(p,0,r,v),p},gc=function(t,e,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Oa]=1,s["border"+o+Oa]=0,s[n.p]=e+"px",Dt.set(t,s)},te=[],fh={},Qo,_m=function(){return vn()-Ri>34&&(Qo||(Qo=requestAnimationFrame(Sr)))},Ks=function(){(!Cn||!Cn.isPressed||Cn.startX>me.clientWidth)&&(se.cache++,Cn?Qo||(Qo=requestAnimationFrame(Sr)):Sr(),Ri||Us("scrollStart"),Ri=vn())},Wu=function(){U0=re.innerWidth,F0=re.innerHeight},vo=function(t){se.cache++,(t===!0||!xn&&!I0&&!Re.fullscreenElement&&!Re.webkitFullscreenElement&&(!lh||U0!==re.innerWidth||Math.abs(re.innerHeight-F0)>re.innerHeight*.25))&&Hc.restart(!0)},Fs={},PS=[],W0=function i(){return ln(jt,"scrollEnd",i)||Ss(!0)},Us=function(t){return Fs[t]&&Fs[t].map(function(e){return e()})||PS},ni=[],X0=function(t){for(var e=0;e<ni.length;e+=5)(!t||ni[e+4]&&ni[e+4].query===t)&&(ni[e].style.cssText=ni[e+1],ni[e].getBBox&&ni[e].setAttribute("transform",ni[e+2]||""),ni[e+3].uncache=1)},$0=function(){return se.forEach(function(t){return Sn(t)&&++t.cacheID&&(t.rec=t())})},_p=function(t,e){var n;for(Pn=0;Pn<te.length;Pn++)n=te[Pn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Bo=!0,e&&X0(e),e||Us("revert")},Y0=function(t,e){se.cache++,(e||!Dn)&&se.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),ri(t)&&(re.history.scrollRestoration=fp=t)},Dn,Ds=0,xm,DS=function(){if(xm!==Ds){var t=xm=Ds;requestAnimationFrame(function(){return t===Ds&&Ss(!0)})}},q0=function(){me.appendChild(ba),hp=!Cn&&ba.offsetHeight||re.innerHeight,me.removeChild(ba)},vm=function(t){return Jo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ss=function(t,e){if(ai=Re.documentElement,me=Re.body,up=[re,Re,ai,me],Ri&&!t&&!Bo){cn(jt,"scrollEnd",W0);return}q0(),Dn=jt.isRefreshing=!0,Bo||$0();var n=Us("refreshInit");N0&&jt.sort(),e||_p(),se.forEach(function(r){Sn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),te.slice(0).forEach(function(r){return r.refresh()}),Bo=!1,te.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),uh=1,vm(!0),te.forEach(function(r){var s=Zi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),vm(!1),uh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),se.forEach(function(r){Sn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Y0(fp,1),Hc.pause(),Ds++,Dn=2,Sr(2),te.forEach(function(r){return Sn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Dn=jt.isRefreshing=!1,Us("refresh")},hh=0,_c=1,Go,Sr=function(t){if(t===2||!Dn&&!Bo){jt.isUpdating=!0,Go&&Go.update(0);var e=te.length,n=vn(),r=n-Hu>=50,s=e&&te[0].scroll();if(_c=hh>s?-1:1,Dn||(hh=s),r&&(Ri&&!_u&&n-Ri>200&&(Ri=0,Us("scrollEnd")),mo=Hu,Hu=n),_c<0){for(Pn=e;Pn-- >0;)te[Pn]&&te[Pn].update(0,r);_c=1}else for(Pn=0;Pn<e;Pn++)te[Pn]&&te[Pn].update(0,r);jt.isUpdating=!1}Qo=0},dh=[V0,H0,pp,dp,yi+Ho,yi+ko,yi+Vo,yi+zo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xc=dh.concat([Cs,Ps,"boxSizing","max"+Oa,"max"+mp,"position",yi,Ke,Ke+Vo,Ke+ko,Ke+Ho,Ke+zo]),LS=function(t,e,n){Ta(n);var r=t._gsap;if(r.spacerIsNative)Ta(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Xu=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=dh.length,a=e.style,o=t.style,l;s--;)l=dh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[pp]=o[dp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Cs]=Gc(t,Nn)+tn,a[Ps]=Gc(t,en)+tn,a[Ke]=o[yi]=o[H0]=o[V0]="0",Ta(r),o[Cs]=o["max"+Oa]=n[Cs],o[Ps]=o["max"+mp]=n[Ps],o[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},NS=/([A-Z])/g,Ta=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,a;for((t.t._gsap||Dt.core.getCache(t.t)).uncache=1;r<n;r+=2)a=t[r+1],s=t[r],a?e[s]=a:e[s]&&e.removeProperty(s.replace(NS,"-$1").toLowerCase())}},Rl=function(t){for(var e=xc.length,n=t.style,r=[],s=0;s<e;s++)r.push(xc[s],n[xc[s]]);return r.t=t,r},IS=function(t,e,n){for(var r=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],r.push(o,o in e?e[o]:t[a+1]);return r.t=t.t,r},vc={left:0,top:0},ym=function(t,e,n,r,s,a,o,l,c,u,f,h,d,p){Sn(t)&&(t=t(l)),ri(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?mc("0"+t.substr(3),n):0));var _=d?d.time():0,g,m,v;if(d&&d.seek(0),isNaN(t)||(t=+t),xo(t))d&&(t=Dt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),o&&gc(o,n,r,!0);else{Sn(e)&&(e=e(l));var M=(t||"0").split(" "),y,x,E,T;v=Vn(e,l)||me,y=mr(v)||{},(!y||!y.left&&!y.top)&&Si(v).display==="none"&&(T=v.style.display,v.style.display="block",y=mr(v),T?v.style.display=T:v.style.removeProperty("display")),x=mc(M[0],y[r.d]),E=mc(M[1]||"0",n),t=y[r.p]-c[r.p]-u+x+s-E,o&&gc(o,E,r,n-E<20||o._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),a){var R=t+n,S=a._isStart;g="scroll"+r.d2,gc(a,R,r,S&&R>20||!S&&(f?Math.max(me[g],ai[g]):a.parentNode[g])<=R+1),f&&(c=mr(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+tn))}return d&&v&&(g=mr(v),d.seek(h),m=mr(v),d._caScrollDist=g[r.p]-m[r.p],t=t/d._caScrollDist*h),d&&d.seek(_),d?t:Math.round(t)},FS=/(webkit|moz|length|cssText|inset)/i,Sm=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,a,o;if(e===me){t._stOrig=s.cssText,o=Si(t);for(a in o)!+a&&!FS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=t._stOrig;Dt.core.getCache(t).uncache=1,e.appendChild(t)}},K0=function(t,e,n){var r=e,s=r;return function(a){var o=Math.round(t());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},Cl=function(t,e,n){var r={};r[e.p]="+="+n,Dt.set(t,r)},Mm=function(t,e){var n=Qr(t,e),r="_scroll"+e.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,p={};c=c||n();var _=K0(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=p,p[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){se.cache++,a.tween&&Sr()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Dt.to(t,l),h};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),jt.isTouch&&cn(t,"touchmove",n.wheelHandler),s},jt=(function(){function i(e,n){ua||i.register(Dt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ch(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!go){this.update=this.refresh=this.kill=Wi;return}n=mm(ri(n)||xo(n)||n.nodeType?{trigger:n}:n,wl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,M=s.once,y=s.snap,x=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:en,C=!f&&f!==0,P=Vn(n.scroller||re),I=Dt.core.getCache(P),O=Is(P),N=("pinType"in n?n.pinType:Kr(P,"pinType")||O&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=C&&n.toggleActions.split(" "),H="markers"in n?n.markers:wl.markers,Z=O?0:parseFloat(Si(P)["border"+b.p2+Oa])||0,D=this,et=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Et=TS(P,O,b),vt=wS(P,O),It=0,Nt=0,K=0,j=Qr(P,b),at,Lt,mt,kt,ee,Tt,rt,Ut,gt,W,B,pe,Qt,Gt,wt,L,w,z,J,Q,q,bt,ot,Ct,Rt,st,lt,At,Pt,ct,Xt,F,ht,it,dt,nt,tt,ft,zt;if(D._startClamp=D._endClamp=!1,D._dir=b,g*=45,D.scroller=P,D.scroll=T?T.time.bind(T):j,kt=j(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(N0=1,n.refreshPriority===-9999&&(Go=D)),I.tweenScroll=I.tweenScroll||{top:Mm(P,en),left:Mm(P,Nn)},D.tweenTo=at=I.tweenScroll[b.p],D.scrubDuration=function(_t){ht=xo(_t)&&_t,ht?F?F.duration(_t):F=Dt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return m&&m(D)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(f),ct=0,l||(l=r.vars.id)),y&&((!ms(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in me.style&&Dt.set(O?[me,ai]:P,{scrollBehavior:"auto"}),se.forEach(function(_t){return Sn(_t)&&_t.target===(O?Re.scrollingElement||ai:P)&&(_t.smooth=!1)}),mt=Sn(y.snapTo)?y.snapTo:y.snapTo==="labels"?RS(r):y.snapTo==="labelsDirectional"?CS(r):y.directional!==!1?function(_t,$t){return gp(y.snapTo)(_t,vn()-Nt<500?0:$t.direction)}:Dt.utils.snap(y.snapTo),it=y.duration||{min:.1,max:2},it=ms(it)?Oo(it.min,it.max):Oo(it,it),dt=Dt.delayedCall(y.delay||ht/2||.1,function(){var _t=j(),$t=vn()-Nt<500,Bt=at.tween;if(($t||Math.abs(D.getVelocity())<10)&&!Bt&&!_u&&It!==_t){var Yt=(_t-Tt)/Gt,ke=r&&!C?r.totalProgress():Yt,ne=$t?0:(ke-Xt)/(vn()-mo)*1e3||0,_e=Dt.utils.clamp(-Yt,1-Yt,qs(ne/2)*ne/.185),Ye=Yt+(y.inertia===!1?0:_e),Pe,Ee,fe=y,Fn=fe.onStart,ye=fe.onInterrupt,pn=fe.onComplete;if(Pe=mt(Ye,D),xo(Pe)||(Pe=Ye),Ee=Math.max(0,Math.round(Tt+Pe*Gt)),_t<=rt&&_t>=Tt&&Ee!==_t){if(Bt&&!Bt._initted&&Bt.data<=qs(Ee-_t))return;y.inertia===!1&&(_e=Pe-Yt),at(Ee,{duration:it(qs(Math.max(qs(Ye-ke),qs(Pe-ke))*.185/ne/.05||0)),ease:y.ease||"power3",data:qs(Ee-_t),onInterrupt:function(){return dt.restart(!0)&&ye&&ye(D)},onComplete:function(){D.update(),It=j(),r&&!C&&(F?F.resetTo("totalProgress",Pe,r._tTime/r._tDur):r.progress(Pe)),ct=Xt=r&&!C?r.totalProgress():D.progress,v&&v(D),pn&&pn(D)}},_t,_e*Gt,Ee-_t-_e*Gt),Fn&&Fn(D,at.tween)}}else D.isActive&&It!==_t&&dt.restart(!0)}).pause()),l&&(fh[l]=D),h=D.trigger=Vn(h||d!==!0&&d),zt=h&&h._gsap&&h._gsap.stRevert,zt&&(zt=zt(D)),d=d===!0?h:Vn(d),ri(o)&&(o={targets:h,className:o}),d&&(p===!1||p===yi||(p=!p&&d.parentNode&&d.parentNode.style&&Si(d.parentNode).display==="flex"?!1:Ke),D.pin=d,Lt=Dt.core.getCache(d),Lt.spacer?wt=Lt.pinState:(E&&(E=Vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Lt.spacerIsNative=!!E,E&&(Lt.spacerState=Rl(E))),Lt.spacer=z=E||Re.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),Lt.pinState=wt=Rl(d)),n.force3D!==!1&&Dt.set(d,{force3D:!0}),D.spacer=z=Lt.spacer,Pt=Si(d),Ct=Pt[p+b.os2],Q=Dt.getProperty(d),q=Dt.quickSetter(d,b.a,tn),Xu(d,z,Pt),w=Rl(d)),H){pe=ms(H)?mm(H,gm):gm,W=Al("scroller-start",l,P,b,pe,0),B=Al("scroller-end",l,P,b,pe,0,W),J=W["offset"+b.op.d2];var ue=Vn(Kr(P,"content")||P);Ut=this.markerStart=Al("start",l,ue,b,pe,J,0,T),gt=this.markerEnd=Al("end",l,ue,b,pe,J,0,T),T&&(ft=Dt.quickSetter([Ut,gt],b.a,tn)),!N&&!(Qi.length&&Kr(P,"fixedMarkers")===!0)&&(AS(O?me:P),Dt.set([W,B],{force3D:!0}),st=Dt.quickSetter(W,b.a,tn),At=Dt.quickSetter(B,b.a,tn))}if(T){var yt=T.vars.onUpdate,Ft=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){D.update(0,0,1),yt&&yt.apply(T,Ft||[])})}if(D.previous=function(){return te[te.indexOf(D)-1]},D.next=function(){return te[te.indexOf(D)+1]},D.revert=function(_t,$t){if(!$t)return D.kill(!0);var Bt=_t!==!1||!D.enabled,Yt=xn;Bt!==D.isReverted&&(Bt&&(nt=Math.max(j(),D.scroll.rec||0),K=D.progress,tt=r&&r.progress()),Ut&&[Ut,gt,W,B].forEach(function(ke){return ke.style.display=Bt?"none":"block"}),Bt&&(xn=D,D.update(Bt)),d&&(!x||!D.isActive)&&(Bt?LS(d,z,wt):Xu(d,z,Si(d),Rt)),Bt||D.update(Bt),xn=Yt,D.isReverted=Bt)},D.refresh=function(_t,$t,Bt,Yt){if(!((xn||!D.enabled)&&!$t)){if(d&&_t&&Ri){cn(i,"scrollEnd",W0);return}!Dn&&et&&et(D),xn=D,at.tween&&!Bt&&(at.tween.kill(),at.tween=0),F&&F.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Mt){return Mt.vars.immediateRender&&Mt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var ke=Et(),ne=vt(),_e=T?T.duration():Zi(P,b),Ye=Gt<=.01||!Gt,Pe=0,Ee=Yt||0,fe=ms(Bt)?Bt.end:n.end,Fn=n.endTrigger||h,ye=ms(Bt)?Bt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),pn=D.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,D),jn=h&&Math.max(0,te.indexOf(D))||0,Je=jn,Qe,sn,ar,Xs,an,A,V,Y,X,G,ut,St,pt;for(H&&ms(Bt)&&(St=Dt.getProperty(W,b.p),pt=Dt.getProperty(B,b.p));Je-- >0;)A=te[Je],A.end||A.refresh(0,1)||(xn=D),V=A.pin,V&&(V===h||V===d||V===pn)&&!A.isReverted&&(G||(G=[]),G.unshift(A),A.revert(!0,!0)),A!==te[Je]&&(jn--,Je--);for(Sn(ye)&&(ye=ye(D)),ye=fm(ye,"start",D),Tt=ym(ye,h,ke,b,j(),Ut,W,D,ne,Z,N,_e,T,D._startClamp&&"_startClamp")||(d?-.001:0),Sn(fe)&&(fe=fe(D)),ri(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(ri(ye)?ye.split(" ")[0]:"")+fe:(Pe=mc(fe.substr(2),ke),fe=ri(ye)?ye:(T?Dt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Tt):Tt)+Pe,Fn=h)),fe=fm(fe,"end",D),rt=Math.max(Tt,ym(fe||(Fn?"100% 0":_e),Fn,ke,b,j()+Pe,gt,B,D,ne,Z,N,_e,T,D._endClamp&&"_endClamp"))||-.001,Pe=0,Je=jn;Je--;)A=te[Je]||{},V=A.pin,V&&A.start-A._pinPush<=Tt&&!T&&A.end>0&&(Qe=A.end-(D._startClamp?Math.max(0,A.start):A.start),(V===h&&A.start-A._pinPush<Tt||V===pn)&&isNaN(ye)&&(Pe+=Qe*(1-A.progress)),V===d&&(Ee+=Qe));if(Tt+=Pe,rt+=Pe,D._startClamp&&(D._startClamp+=Pe),D._endClamp&&!Dn&&(D._endClamp=rt||-.001,rt=Math.min(rt,Zi(P,b))),Gt=rt-Tt||(Tt-=.01)&&.001,Ye&&(K=Dt.utils.clamp(0,1,Dt.utils.normalize(Tt,rt,nt))),D._pinPush=Ee,Ut&&Pe&&(Qe={},Qe[b.a]="+="+Pe,pn&&(Qe[b.p]="-="+j()),Dt.set([Ut,gt],Qe)),d&&!(uh&&D.end>=Zi(P,b)))Qe=Si(d),Xs=b===en,ar=j(),bt=parseFloat(Q(b.a))+Ee,!_e&&rt>1&&(ut=(O?Re.scrollingElement||ai:P).style,ut={style:ut,value:ut["overflow"+b.a.toUpperCase()]},O&&Si(me)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+b.a.toUpperCase()]="scroll")),Xu(d,z,Qe),w=Rl(d),sn=mr(d,!0),Y=N&&Qr(P,Xs?Nn:en)(),p?(Rt=[p+b.os2,Gt+Ee+tn],Rt.t=z,Je=p===Ke?Gc(d,b)+Gt+Ee:0,Je&&(Rt.push(b.d,Je+tn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=Je+tn)),Ta(Rt),pn&&te.forEach(function(Mt){Mt.pin===pn&&Mt.vars.pinSpacing!==!1&&(Mt._subPinOffset=!0)}),N&&j(nt)):(Je=Gc(d,b),Je&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=Je+tn)),N&&(an={top:sn.top+(Xs?ar-Tt:Y)+tn,left:sn.left+(Xs?Y:ar-Tt)+tn,boxSizing:"border-box",position:"fixed"},an[Cs]=an["max"+Oa]=Math.ceil(sn.width)+tn,an[Ps]=an["max"+mp]=Math.ceil(sn.height)+tn,an[yi]=an[yi+Vo]=an[yi+ko]=an[yi+Ho]=an[yi+zo]="0",an[Ke]=Qe[Ke],an[Ke+Vo]=Qe[Ke+Vo],an[Ke+ko]=Qe[Ke+ko],an[Ke+Ho]=Qe[Ke+Ho],an[Ke+zo]=Qe[Ke+zo],L=IS(wt,an,x),Dn&&j(0)),r?(X=r._initted,zu(1),r.render(r.duration(),!0,!0),ot=Q(b.a)-bt+Gt+Ee,lt=Math.abs(Gt-ot)>1,N&&lt&&L.splice(L.length-2,2),r.render(0,!0,!0),X||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),zu(0)):ot=Gt,ut&&(ut.value?ut.style["overflow"+b.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+b.a));else if(h&&j()&&!T)for(sn=h.parentNode;sn&&sn!==me;)sn._pinOffset&&(Tt-=sn._pinOffset,rt-=sn._pinOffset),sn=sn.parentNode;G&&G.forEach(function(Mt){return Mt.revert(!1,!0)}),D.start=Tt,D.end=rt,kt=ee=Dn?nt:j(),!T&&!Dn&&(kt<nt&&j(nt),D.scroll.rec=0),D.revert(!1,!0),Nt=vn(),dt&&(It=-1,dt.restart(!0)),xn=0,r&&C&&(r._initted||tt)&&r.progress()!==tt&&r.progress(tt||0,!0).render(r.time(),!0,!0),(Ye||K!==D.progress||T||_||r&&!r._initted)&&(r&&!C&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(T&&Tt<-.001&&!K?Dt.utils.normalize(Tt,rt,0):K,!0),D.progress=Ye||(kt-Tt)/Gt===K?0:K),d&&p&&(z._pinOffset=Math.round(D.progress*ot)),F&&F.invalidate(),isNaN(St)||(St-=Dt.getProperty(W,b.p),pt-=Dt.getProperty(B,b.p),Cl(W,b,St),Cl(Ut,b,St-(Yt||0)),Cl(B,b,pt),Cl(gt,b,pt-(Yt||0))),Ye&&!Dn&&D.update(),u&&!Dn&&!Qt&&(Qt=!0,u(D),Qt=!1)}},D.getVelocity=function(){return(j()-ee)/(vn()-mo)*1e3||0},D.endAnimation=function(){no(D.callbackAnimation),r&&(F?F.progress(1):r.paused()?C||no(r,D.direction<0,1):no(r,r.reversed()))},D.labelToScroll=function(_t){return r&&r.labels&&(Tt||D.refresh()||Tt)+r.labels[_t]/r.duration()*Gt||0},D.getTrailing=function(_t){var $t=te.indexOf(D),Bt=D.direction>0?te.slice(0,$t).reverse():te.slice($t+1);return(ri(_t)?Bt.filter(function(Yt){return Yt.vars.preventOverlaps===_t}):Bt).filter(function(Yt){return D.direction>0?Yt.end<=Tt:Yt.start>=rt})},D.update=function(_t,$t,Bt){if(!(T&&!Bt&&!_t)){var Yt=Dn===!0?nt:D.scroll(),ke=_t?0:(Yt-Tt)/Gt,ne=ke<0?0:ke>1?1:ke||0,_e=D.progress,Ye,Pe,Ee,fe,Fn,ye,pn,jn;if($t&&(ee=kt,kt=T?j():Yt,y&&(Xt=ct,ct=r&&!C?r.totalProgress():ne)),g&&d&&!xn&&!Ml&&Ri&&(!ne&&Tt<Yt+(Yt-ee)/(vn()-mo)*g?ne=1e-4:ne===1&&rt>Yt+(Yt-ee)/(vn()-mo)*g&&(ne=.9999)),ne!==_e&&D.enabled){if(Ye=D.isActive=!!ne&&ne<1,Pe=!!_e&&_e<1,ye=Ye!==Pe,Fn=ye||!!ne!=!!_e,D.direction=ne>_e?1:-1,D.progress=ne,Fn&&!xn&&(Ee=ne&&!_e?0:ne===1?1:_e===1?2:3,C&&(fe=!ye&&U[Ee+1]!=="none"&&U[Ee+1]||U[Ee],jn=r&&(fe==="complete"||fe==="reset"||fe in r))),S&&(ye||jn)&&(jn||f||!r)&&(Sn(S)?S(D):D.getTrailing(S).forEach(function(ar){return ar.endAnimation()})),C||(F&&!xn&&!Ml?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",ne,r._tTime/r._tDur):(F.vars.totalProgress=ne,F.invalidate().restart())):r&&r.totalProgress(ne,!!(xn&&(Nt||_t)))),d){if(_t&&p&&(z.style[p+b.os2]=Ct),!N)q(_o(bt+ot*ne));else if(Fn){if(pn=!_t&&ne>_e&&rt+1>Yt&&Yt+1>=Zi(P,b),x)if(!_t&&(Ye||pn)){var Je=mr(d,!0),Qe=Yt-Tt;Sm(d,me,Je.top+(b===en?Qe:0)+tn,Je.left+(b===en?0:Qe)+tn)}else Sm(d,z);Ta(Ye||pn?L:w),lt&&ne<1&&Ye||q(bt+(ne===1&&!pn?ot:0))}}y&&!at.tween&&!xn&&!Ml&&dt.restart(!0),o&&(ye||M&&ne&&(ne<1||!Vu))&&Jo(o.targets).forEach(function(ar){return ar.classList[Ye||M?"add":"remove"](o.className)}),a&&!C&&!_t&&a(D),Fn&&!xn?(C&&(jn&&(fe==="complete"?r.pause().totalProgress(1):fe==="reset"?r.restart(!0).pause():fe==="restart"?r.restart(!0):r[fe]()),a&&a(D)),(ye||!Vu)&&(c&&ye&&Gu(D,c),k[Ee]&&Gu(D,k[Ee]),M&&(ne===1?D.kill(!1,1):k[Ee]=0),ye||(Ee=ne===1?1:3,k[Ee]&&Gu(D,k[Ee]))),R&&!Ye&&Math.abs(D.getVelocity())>(xo(R)?R:2500)&&(no(D.callbackAnimation),F?F.progress(1):no(r,fe==="reverse"?1:!ne,1))):C&&a&&!xn&&a(D)}if(At){var sn=T?Yt/T.duration()*(T._caScrollDist||0):Yt;st(sn+(W._isFlipped?1:0)),At(sn)}ft&&ft(-Yt/T.duration()*(T._caScrollDist||0))}},D.enable=function(_t,$t){D.enabled||(D.enabled=!0,cn(P,"resize",vo),O||cn(P,"scroll",Ks),et&&cn(i,"refreshInit",et),_t!==!1&&(D.progress=K=0,kt=ee=It=j()),$t!==!1&&D.refresh())},D.getTween=function(_t){return _t&&at?at.tween:F},D.setPositions=function(_t,$t,Bt,Yt){if(T){var ke=T.scrollTrigger,ne=T.duration(),_e=ke.end-ke.start;_t=ke.start+_e*_t/ne,$t=ke.start+_e*$t/ne}D.refresh(!1,!1,{start:hm(_t,Bt&&!!D._startClamp),end:hm($t,Bt&&!!D._endClamp)},Yt),D.update()},D.adjustPinSpacing=function(_t){if(Rt&&_t){var $t=Rt.indexOf(b.d)+1;Rt[$t]=parseFloat(Rt[$t])+_t+tn,Rt[1]=parseFloat(Rt[1])+_t+tn,Ta(Rt)}},D.disable=function(_t,$t){if(_t!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,$t||F&&F.pause(),nt=0,Lt&&(Lt.uncache=1),et&&ln(i,"refreshInit",et),dt&&(dt.pause(),at.tween&&at.tween.kill()&&(at.tween=0)),!O)){for(var Bt=te.length;Bt--;)if(te[Bt].scroller===P&&te[Bt]!==D)return;ln(P,"resize",vo),O||ln(P,"scroll",Ks)}},D.kill=function(_t,$t){D.disable(_t,$t),F&&!$t&&F.kill(),l&&delete fh[l];var Bt=te.indexOf(D);Bt>=0&&te.splice(Bt,1),Bt===Pn&&_c>0&&Pn--,Bt=0,te.forEach(function(Yt){return Yt.scroller===D.scroller&&(Bt=1)}),Bt||Dn||(D.scroll.rec=0),r&&(r.scrollTrigger=null,_t&&r.revert({kill:!1}),$t||r.kill()),Ut&&[Ut,gt,W,B].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),Go===D&&(Go=0),d&&(Lt&&(Lt.uncache=1),Bt=0,te.forEach(function(Yt){return Yt.pin===d&&Bt++}),Bt||(Lt.spacer=0)),n.onKill&&n.onKill(D)},te.push(D),D.enable(!1,!1),zt&&zt(D),r&&r.add&&!Gt){var Kt=D.update;D.update=function(){D.update=Kt,se.cache++,Tt||rt||D.refresh()},Dt.delayedCall(.01,D.update),Gt=.01,Tt=rt=0}else D.refresh();d&&DS()},i.register=function(n){return ua||(Dt=n||B0(),O0()&&window.document&&i.enable(),ua=go),ua},i.defaults=function(n){if(n)for(var r in n)wl[r]=n[r];return wl},i.disable=function(n,r){go=0,te.forEach(function(a){return a[r?"kill":"disable"](n)}),ln(re,"wheel",Ks),ln(Re,"scroll",Ks),clearInterval(Sl),ln(Re,"touchcancel",Wi),ln(me,"touchstart",Wi),bl(ln,Re,"pointerdown,touchstart,mousedown",dm),bl(ln,Re,"pointerup,touchend,mouseup",pm),Hc.kill(),El(ln);for(var s=0;s<se.length;s+=3)Tl(ln,se[s],se[s+1]),Tl(ln,se[s],se[s+2])},i.enable=function(){if(re=window,Re=document,ai=Re.documentElement,me=Re.body,Dt&&(Jo=Dt.utils.toArray,Oo=Dt.utils.clamp,ch=Dt.core.context||Wi,zu=Dt.core.suppressOverwrites||Wi,fp=re.history.scrollRestoration||"auto",hh=re.pageYOffset||0,Dt.core.globals("ScrollTrigger",i),me)){go=1,ba=document.createElement("div"),ba.style.height="100vh",ba.style.position="absolute",q0(),bS(),Xe.register(Dt),i.isTouch=Xe.isTouch,kr=Xe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lh=Xe.isTouch===1,cn(re,"wheel",Ks),up=[re,Re,ai,me],Dt.matchMedia?(i.matchMedia=function(c){var u=Dt.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Dt.addEventListener("matchMediaInit",function(){$0(),_p()}),Dt.addEventListener("matchMediaRevert",function(){return X0()}),Dt.addEventListener("matchMedia",function(){Ss(0,1),Us("matchMedia")}),Dt.matchMedia().add("(orientation: portrait)",function(){return Wu(),Wu})):console.warn("Requires GSAP 3.11.0 or later"),Wu(),cn(Re,"scroll",Ks);var n=me.hasAttribute("style"),r=me.style,s=r.borderTopStyle,a=Dt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=mr(me),en.m=Math.round(o.top+en.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),Sl=setInterval(_m,250),Dt.delayedCall(.5,function(){return Ml=0}),cn(Re,"touchcancel",Wi),cn(me,"touchstart",Wi),bl(cn,Re,"pointerdown,touchstart,mousedown",dm),bl(cn,Re,"pointerup,touchend,mouseup",pm),oh=Dt.utils.checkPrefix("transform"),xc.push(oh),ua=vn(),Hc=Dt.delayedCall(.2,Ss).pause(),fa=[Re,"visibilitychange",function(){var c=re.innerWidth,u=re.innerHeight;Re.hidden?(cm=c,um=u):(cm!==c||um!==u)&&vo()},Re,"DOMContentLoaded",Ss,re,"load",Ss,re,"resize",vo],El(cn),te.forEach(function(c){return c.enable(0,1)}),l=0;l<se.length;l+=3)Tl(ln,se[l],se[l+1]),Tl(ln,se[l],se[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Vu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Sl)||(Sl=r)&&setInterval(_m,r),"ignoreMobileResize"in n&&(lh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(El(ln)||El(cn,n.autoRefreshEvents||"none"),I0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Vn(n),a=se.indexOf(s),o=Is(s);~a&&se.splice(a,o?6:2),r&&(o?Qi.unshift(re,r,me,r,ai,r):Qi.unshift(s,r))},i.clearMatchMedia=function(n){te.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ri(n)?Vn(n):n).getBoundingClientRect(),o=a[s?Cs:Ps]*r||0;return s?a.right-o>0&&a.left+o<re.innerWidth:a.bottom-o>0&&a.top+o<re.innerHeight},i.positionInViewport=function(n,r,s){ri(n)&&(n=Vn(n));var a=n.getBoundingClientRect(),o=a[s?Cs:Ps],l=r==null?o/2:r in Wc?Wc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/re.innerWidth:(a.top+l)/re.innerHeight},i.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Fs.killAll||[];Fs={},r.forEach(function(s){return s()})}},i})();jt.version="3.14.2";jt.saveStyles=function(i){return i?Jo(i).forEach(function(t){if(t&&t.style){var e=ni.indexOf(t);e>=0&&ni.splice(e,5),ni.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Dt.core.getCache(t),ch())}}):ni};jt.revert=function(i,t){return _p(!i,t)};jt.create=function(i,t){return new jt(i,t)};jt.refresh=function(i){return i?vo(!0):(ua||jt.register())&&Ss(!0)};jt.update=function(i){return++se.cache&&Sr(i===!0?2:0)};jt.clearScrollMemory=Y0;jt.maxScroll=function(i,t){return Zi(i,t?Nn:en)};jt.getScrollFunc=function(i,t){return Qr(Vn(i),t?Nn:en)};jt.getById=function(i){return fh[i]};jt.getAll=function(){return te.filter(function(i){return i.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!Ri};jt.snapDirectional=gp;jt.addEventListener=function(i,t){var e=Fs[i]||(Fs[i]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(i,t){var e=Fs[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Dt.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Sn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Sn(s)&&(s=s(),cn(jt,"refresh",function(){return s=t.batchMax()})),Jo(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(jt.create(c))}),e};var Em=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},$u=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Xe.isTouch?" pinch-zoom":""):"none",t===ai&&i(me,e)},Pl={auto:1,scroll:1},US=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Dt.core.getCache(s),o=vn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Pl[(l=Si(s)).overflowY]||Pl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Is(s)&&(Pl[(l=Si(s)).overflowY]||Pl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Z0=function(t,e,n,r){return Xe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&US,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&cn(Re,Xe.eventTypes[0],Tm,!1,!0)},onDisable:function(){return ln(Re,Xe.eventTypes[0],Tm,!0)}})},OS=/(input|label|select|textarea)/i,bm,Tm=function(t){var e=OS.test(t.target.tagName);(e||bm)&&(t._gsapAllow=!0,bm=e)},BS=function(t){ms(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Vn(t.target)||ai,u=Dt.core.globals().ScrollSmoother,f=u&&u.get(),h=kr&&(t.content&&Vn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=Qr(c,en),p=Qr(c,Nn),_=1,g=(Xe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,m=0,v=Sn(r)?function(){return r(o)}:function(){return r||2.8},M,y,x=Z0(c,t.type,!0,s),E=function(){return y=!1},T=Wi,R=Wi,S=function(){l=Zi(c,en),R=Oo(kr?1:0,l),n&&(T=Oo(0,Zi(c,Nn))),M=Ds},b=function(){h._gsap.y=_o(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(y){requestAnimationFrame(E);var H=_o(o.deltaY/2),Z=R(d.v-H);if(h&&Z!==d.v+d.offset){d.offset=Z-d.v;var D=_o((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=se.cache,Sr()}return!0}d.offset&&b(),y=!0},P,I,O,N,k=function(){S(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return h&&Dt.set(h,{y:"+=0"}),t.ignoreCheck=function(U){return kr&&U.type==="touchmove"&&C()||_>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){y=!1;var U=_;_=_o((re.visualViewport&&re.visualViewport.scale||1)/g),P.pause(),U!==_&&$u(c,_>1.01?!0:n?!1:"x"),I=p(),O=d(),S(),M=Ds},t.onRelease=t.onGestureStart=function(U,H){if(d.offset&&b(),!H)N.restart(!0);else{se.cache++;var Z=v(),D,et;n&&(D=p(),et=D+Z*.05*-U.velocityX/.227,Z*=Em(p,D,et,Zi(c,Nn)),P.vars.scrollX=T(et)),D=d(),et=D+Z*.05*-U.velocityY/.227,Z*=Em(d,D,et,Zi(c,en)),P.vars.scrollY=R(et),P.invalidate().duration(Z).play(.01),(kr&&P.vars.scrollY>=l||D>=l-1)&&Dt.to({},{onUpdate:k,duration:Z})}a&&a(U)},t.onWheel=function(){P._ts&&P.pause(),vn()-m>1e3&&(M=0,m=vn())},t.onChange=function(U,H,Z,D,et){if(Ds!==M&&S(),H&&n&&p(T(D[2]===H?I+(U.startX-U.x):p()+H-D[1])),Z){d.offset&&b();var Et=et[2]===Z,vt=Et?O+U.startY-U.y:d()+Z-et[1],It=R(vt);Et&&vt!==It&&(O+=It-vt),d(It)}(Z||H)&&Sr()},t.onEnable=function(){$u(c,n?!1:"x"),jt.addEventListener("refresh",k),cn(re,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),x.enable()},t.onDisable=function(){$u(c,!0),ln(re,"resize",k),jt.removeEventListener("refresh",k),x.kill()},t.lockAxis=t.lockAxis!==!1,o=new Xe(t),o.iOS=kr,kr&&!d()&&d(1),kr&&Dt.ticker.add(Wi),N=o._dc,P=Dt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:K0(d,d(),function(){return P.pause()})},onUpdate:Sr,onComplete:N.vars.onComplete}),o};jt.sort=function(i){if(Sn(i))return te.sort(i);var t=re.pageYOffset||0;return jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),te.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};jt.observe=function(i){return new Xe(i)};jt.normalizeScroll=function(i){if(typeof i>"u")return Cn;if(i===!0&&Cn)return Cn.enable();if(i===!1){Cn&&Cn.kill(),Cn=i;return}var t=i instanceof Xe?i:BS(i);return Cn&&Cn.target===t.target&&Cn.kill(),Is(t.target)&&(Cn=t),t};jt.core={_getVelocityProp:ah,_inputObserver:Z0,_scrollers:se,_proxies:Qi,bridge:{ss:function(){Ri||Us("scrollStart"),Ri=vn()},ref:function(){return xn}}};B0()&&Dt.registerPlugin(jt);zc.registerPlugin(jt);class kS{constructor({onStepEnter:t,onStepLeave:e,onProgress:n}){this.onStepEnter=t,this.onStepLeave=e,this.onProgress=n,this.lenis=null,this.triggers=[]}init(){this.initLenis(),this.initStepTriggers()}initLenis(){this.lenis=new ey({lerp:.1,smoothWheel:!0}),this.lenis.on("scroll",jt.update),zc.ticker.add(t=>this.lenis.raf(t*1e3)),zc.ticker.lagSmoothing(0)}initStepTriggers(){document.querySelectorAll(".step").forEach((e,n)=>{const r=jt.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>this.onStepEnter(n,"down"),onEnterBack:()=>this.onStepEnter(n,"up"),onLeave:()=>this.onStepLeave(n,"down"),onLeaveBack:()=>this.onStepLeave(n,"up")});this.triggers.push(r)}),jt.create({trigger:"#scroll-content",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>this.onProgress(e.progress)})}destroy(){this.triggers.forEach(t=>t.kill()),this.triggers=[],this.lenis?.destroy(),jt.getAll().forEach(t=>t.kill())}}const xp="182",zS=0,wm=1,VS=2,yc=1,HS=2,yo=3,ts=0,Yn=1,gr=2,Mr=0,wa=1,Am=2,Rm=3,Cm=4,GS=5,xs=100,WS=101,XS=102,$S=103,YS=104,qS=200,KS=201,ZS=202,jS=203,ph=204,mh=205,JS=206,QS=207,tM=208,eM=209,nM=210,iM=211,rM=212,sM=213,aM=214,gh=0,_h=1,xh=2,Ba=3,vh=4,yh=5,Sh=6,Mh=7,j0=0,oM=1,lM=2,tr=0,J0=1,Q0=2,tx=3,ex=4,nx=5,ix=6,rx=7,sx=300,Os=301,ka=302,Eh=303,bh=304,xu=306,Th=1e3,yr=1001,wh=1002,hn=1003,cM=1004,Dl=1005,Mn=1006,Yu=1007,Ms=1008,Ei=1009,ax=1010,ox=1011,tl=1012,vp=1013,rr=1014,ji=1015,Ar=1016,yp=1017,Sp=1018,el=1020,lx=35902,cx=35899,ux=1021,fx=1022,Oi=1023,Rr=1026,Es=1027,hx=1028,Mp=1029,za=1030,Ep=1031,bp=1033,Sc=33776,Mc=33777,Ec=33778,bc=33779,Ah=35840,Rh=35841,Ch=35842,Ph=35843,Dh=36196,Lh=37492,Nh=37496,Ih=37488,Fh=37489,Uh=37490,Oh=37491,Bh=37808,kh=37809,zh=37810,Vh=37811,Hh=37812,Gh=37813,Wh=37814,Xh=37815,$h=37816,Yh=37817,qh=37818,Kh=37819,Zh=37820,jh=37821,Jh=36492,Qh=36494,td=36495,ed=36283,nd=36284,id=36285,rd=36286,uM=3200,fM=0,hM=1,zr="",vi="srgb",Va="srgb-linear",Xc="linear",ve="srgb",Zs=7680,Pm=519,dM=512,pM=513,mM=514,Tp=515,gM=516,_M=517,wp=518,xM=519,Dm=35044,Lm="300 es",Ji=2e3,$c=2001;function dx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vM(){const i=Yc("canvas");return i.style.display="block",i}const Nm={};function Im(...i){const t="THREE."+i.shift();console.log(t,...i)}function qt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function de(...i){const t="THREE."+i.shift();console.error(t,...i)}function nl(...i){const t=i.join(" ");t in Nm||(Nm[t]=!0,qt(...i))}function yM(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Ka{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=Math.PI/180,sd=180/Math.PI;function dl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function SM(i,t){return(i%t+t)%t}function Ku(i,t,e){return(1-e)*i+e*t}function io(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,e=0){Me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o>=1){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*_;g<0&&(h=-h,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,o=Math.sin(o*v)/M,l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+_*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return t[e]=o*p+u*f+l*d-c*h,t[e+1]=l*p+u*h+c*f-o*d,t[e+2]=c*p+u*d+o*h-l*f,t[e+3]=u*p-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fm.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zu.copy(this).projectOnVector(t),this.sub(Zu)}reflect(t){return this.sub(Zu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new $,Fm=new pl;class Zt{constructor(t,e,n,r,s,a,o,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=r[0],g=r[3],m=r[6],v=r[1],M=r[4],y=r[7],x=r[2],E=r[5],T=r[8];return s[0]=a*_+o*v+l*x,s[3]=a*g+o*M+l*E,s[6]=a*m+o*y+l*T,s[1]=c*_+u*v+f*x,s[4]=c*g+u*M+f*E,s[7]=c*m+u*y+f*T,s[2]=h*_+d*v+p*x,s[5]=h*g+d*M+p*E,s[8]=h*m+d*y+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,p=e*f+n*h+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=f*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ju.makeScale(t,e)),this}rotate(t){return this.premultiply(ju.makeRotation(-t)),this}translate(t,e){return this.premultiply(ju.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new Zt,Um=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MM(){const i={enabled:!0,workingColorSpace:Va,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ve&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(r.r=Aa(r.r),r.g=Aa(r.g),r.b=Aa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zr?Xc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Va]:{primaries:t,whitePoint:n,transfer:Xc,toXYZ:Um,fromXYZ:Om,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Um,fromXYZ:Om,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),i}const ce=MM();function Er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let js;class EM{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{js===void 0&&(js=Yc("canvas")),js.width=t.width,js.height=t.height;const r=js.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Er(e[n]/255)*255):e[n]=Er(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bM=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=dl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ju(r[a].image)):s.push(Ju(r[a]))}else s=Ju(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ju(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?EM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let TM=0;const Qu=new $;class In extends Ka{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,n=yr,r=yr,s=Mn,a=Ms,o=Oi,l=Ei,c=In.DEFAULT_ANISOTROPY,u=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=dl(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qu).x}get height(){return this.source.getSize(Qu).y}get depth(){return this.source.getSize(Qu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Th:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Th:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=sx;In.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,e=0,n=0,r=1){We.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(d+1)/2,x=(m+1)/2,E=(u+h)/4,T=(f+_)/4,R=(p+g)/4;return M>y&&M>x?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=T/n):y>x?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=E/r,s=R/r):x<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),n=T/s,r=R/s),this.set(n,r,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wM extends Ka{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new In(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ap(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends wM{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class px extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AM extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox)),Ll.applyMatrix4(t.matrixWorld),this.union(Ll)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),Nl.subVectors(this.max,ro),Js.subVectors(t.a,ro),Qs.subVectors(t.b,ro),ta.subVectors(t.c,ro),Nr.subVectors(Qs,Js),Ir.subVectors(ta,Qs),as.subVectors(Js,ta);let e=[0,-Nr.z,Nr.y,0,-Ir.z,Ir.y,0,-as.z,as.y,Nr.z,0,-Nr.x,Ir.z,0,-Ir.x,as.z,0,-as.x,-Nr.y,Nr.x,0,-Ir.y,Ir.x,0,-as.y,as.x,0];return!tf(e,Js,Qs,ta,Nl)||(e=[1,0,0,0,1,0,0,0,1],!tf(e,Js,Qs,ta,Nl))?!1:(Il.crossVectors(Nr,Ir),e=[Il.x,Il.y,Il.z],tf(e,Js,Qs,ta,Nl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(or),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const or=[new $,new $,new $,new $,new $,new $,new $,new $],Pi=new $,Ll=new ml,Js=new $,Qs=new $,ta=new $,Nr=new $,Ir=new $,as=new $,ro=new $,Nl=new $,Il=new $,os=new $;function tf(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){os.fromArray(i,s);const o=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),u=n.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const RM=new ml,so=new $,ef=new $;class vu{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):RM.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);const e=so.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(so,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ef.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(ef)),this.expandByPoint(so.copy(t.center).sub(ef))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const lr=new $,nf=new $,Fl=new $,Fr=new $,rf=new $,Ul=new $,sf=new $;class mx{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,lr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=lr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(lr.copy(this.origin).addScaledVector(this.direction,e),lr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){nf.copy(t).add(e).multiplyScalar(.5),Fl.copy(e).sub(t).normalize(),Fr.copy(this.origin).sub(nf);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Fl),o=Fr.dot(this.direction),l=-Fr.dot(Fl),c=Fr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nf).addScaledVector(Fl,h),d}intersectSphere(t,e){lr.subVectors(t.center,this.origin);const n=lr.dot(this.direction),r=lr.dot(lr)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,lr)!==null}intersectTriangle(t,e,n,r,s){rf.subVectors(e,t),Ul.subVectors(n,t),sf.crossVectors(rf,Ul);let a=this.direction.dot(sf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fr.subVectors(this.origin,t);const l=o*this.direction.dot(Ul.crossVectors(Fr,Ul));if(l<0)return null;const c=o*this.direction.dot(rf.cross(Fr));if(c<0||l+c>a)return null;const u=-o*Fr.dot(sf);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,g){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,g)}set(t,e,n,r,s,a,o,l,c,u,f,h,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/ea.setFromMatrixColumn(t,0).length(),s=1/ea.setFromMatrixColumn(t,1).length(),a=1/ea.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,p=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h+_*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-p,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,p=o*u,_=o*f;e[0]=l*u,e[4]=p*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=p*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+p,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CM,t,PM)}lookAt(t,e,n){const r=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ur.crossVectors(n,ti),Ur.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ur.crossVectors(n,ti)),Ur.normalize(),Ol.crossVectors(ti,Ur),r[0]=Ur.x,r[4]=Ol.x,r[8]=ti.x,r[1]=Ur.y,r[5]=Ol.y,r[9]=ti.y,r[2]=Ur.z,r[6]=Ol.z,r[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],M=n[7],y=n[11],x=n[15],E=r[0],T=r[4],R=r[8],S=r[12],b=r[1],C=r[5],P=r[9],I=r[13],O=r[2],N=r[6],k=r[10],U=r[14],H=r[3],Z=r[7],D=r[11],et=r[15];return s[0]=a*E+o*b+l*O+c*H,s[4]=a*T+o*C+l*N+c*Z,s[8]=a*R+o*P+l*k+c*D,s[12]=a*S+o*I+l*U+c*et,s[1]=u*E+f*b+h*O+d*H,s[5]=u*T+f*C+h*N+d*Z,s[9]=u*R+f*P+h*k+d*D,s[13]=u*S+f*I+h*U+d*et,s[2]=p*E+_*b+g*O+m*H,s[6]=p*T+_*C+g*N+m*Z,s[10]=p*R+_*P+g*k+m*D,s[14]=p*S+_*I+g*U+m*et,s[3]=v*E+M*b+y*O+x*H,s[7]=v*T+M*C+y*N+x*Z,s[11]=v*R+M*P+y*k+x*D,s[15]=v*S+M*I+y*U+x*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=l*d-c*h,M=o*d-c*f,y=o*h-l*f,x=a*d-c*u,E=a*h-l*u,T=a*f-o*u;return e*(_*v-g*M+m*y)-n*(p*v-g*x+m*E)+r*(p*M-_*x+m*T)-s*(p*y-_*E+g*T)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=f*g*c-_*h*c+_*l*d-o*g*d-f*l*m+o*h*m,M=p*h*c-u*g*c-p*l*d+a*g*d+u*l*m-a*h*m,y=u*_*c-p*f*c+p*o*d-a*_*d-u*o*m+a*f*m,x=p*f*l-u*_*l-p*o*h+a*_*h+u*o*g-a*f*g,E=e*v+n*M+r*y+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(_*h*s-f*g*s-_*r*d+n*g*d+f*r*m-n*h*m)*T,t[2]=(o*g*s-_*l*s+_*r*c-n*g*c-o*r*m+n*l*m)*T,t[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*T,t[4]=M*T,t[5]=(u*g*s-p*h*s+p*r*d-e*g*d-u*r*m+e*h*m)*T,t[6]=(p*l*s-a*g*s-p*r*c+e*g*c+a*r*m-e*l*m)*T,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*d+e*l*d)*T,t[8]=y*T,t[9]=(p*f*s-u*_*s-p*n*d+e*_*d+u*n*m-e*f*m)*T,t[10]=(a*_*s-p*o*s+p*n*c-e*_*c-a*n*m+e*o*m)*T,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*d-e*o*d)*T,t[12]=x*T,t[13]=(u*_*r-p*f*r+p*n*h-e*_*h-u*n*g+e*f*g)*T,t[14]=(p*o*r-a*_*r-p*n*l+e*_*l+a*n*g-e*o*g)*T,t[15]=(a*f*r-u*o*r+u*n*l-e*f*l-a*n*h+e*o*h)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,p=s*f,_=a*u,g=a*f,m=o*f,v=l*c,M=l*u,y=l*f,x=n.x,E=n.y,T=n.z;return r[0]=(1-(_+m))*x,r[1]=(d+y)*x,r[2]=(p-M)*x,r[3]=0,r[4]=(d-y)*E,r[5]=(1-(h+m))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(p+M)*T,r[9]=(g-v)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=ea.set(r[0],r[1],r[2]).length();const a=ea.set(r[4],r[5],r[6]).length(),o=ea.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Di.copy(this);const c=1/s,u=1/a,f=1/o;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=f,Di.elements[9]*=f,Di.elements[10]*=f,e.setFromRotationMatrix(Di),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Ji,l=!1){const c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Ji)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$c)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Ji,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Ji)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===$c)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ea=new $,Di=new $e,CM=new $(0,0,0),PM=new $(1,1,1),Ur=new $,Ol=new $,ti=new $,Bm=new $e,km=new pl;class Cr{constructor(t=0,e=0,n=0,r=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return km.setFromEuler(this),this.setFromQuaternion(km,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DM=0;const zm=new $,na=new pl,cr=new $e,Bl=new $,ao=new $,LM=new $,NM=new pl,Vm=new $(1,0,0),Hm=new $(0,1,0),Gm=new $(0,0,1),Wm={type:"added"},IM={type:"removed"},ia={type:"childadded",child:null},af={type:"childremoved",child:null};class qn extends Ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new $,e=new Cr,n=new pl,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Zt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return na.setFromAxisAngle(t,e),this.quaternion.multiply(na),this}rotateOnWorldAxis(t,e){return na.setFromAxisAngle(t,e),this.quaternion.premultiply(na),this}rotateX(t){return this.rotateOnAxis(Vm,t)}rotateY(t){return this.rotateOnAxis(Hm,t)}rotateZ(t){return this.rotateOnAxis(Gm,t)}translateOnAxis(t,e){return zm.copy(t).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vm,t)}translateY(t){return this.translateOnAxis(Hm,t)}translateZ(t){return this.translateOnAxis(Gm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bl.copy(t):Bl.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ao,Bl,this.up):cr.lookAt(Bl,ao,this.up),this.quaternion.setFromRotationMatrix(cr),r&&(cr.extractRotation(r.matrixWorld),na.setFromRotationMatrix(cr),this.quaternion.premultiply(na.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wm),ia.child=t,this.dispatchEvent(ia),ia.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(IM),af.child=t,this.dispatchEvent(af),af.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wm),ia.child=t,this.dispatchEvent(ia),ia.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,t,LM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,NM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}qn.DEFAULT_UP=new $(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new $,ur=new $,of=new $,fr=new $,ra=new $,sa=new $,Xm=new $,lf=new $,cf=new $,uf=new $,ff=new We,hf=new We,df=new We;class Fi{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Li.subVectors(t,e),r.cross(Li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Li.subVectors(r,e),ur.subVectors(n,e),of.subVectors(t,e);const a=Li.dot(Li),o=Li.dot(ur),l=Li.dot(of),c=ur.dot(ur),u=ur.dot(of),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(a,fr.y),l.addScaledVector(o,fr.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ff.setScalar(0),hf.setScalar(0),df.setScalar(0),ff.fromBufferAttribute(t,e),hf.fromBufferAttribute(t,n),df.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ff,s.x),a.addScaledVector(hf,s.y),a.addScaledVector(df,s.z),a}static isFrontFacing(t,e,n,r){return Li.subVectors(n,e),ur.subVectors(t,e),Li.cross(ur).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Li.cross(ur).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Fi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;ra.subVectors(r,n),sa.subVectors(s,n),lf.subVectors(t,n);const l=ra.dot(lf),c=sa.dot(lf);if(l<=0&&c<=0)return e.copy(n);cf.subVectors(t,r);const u=ra.dot(cf),f=sa.dot(cf);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ra,a);uf.subVectors(t,s);const d=ra.dot(uf),p=sa.dot(uf);if(p>=0&&d<=p)return e.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(sa,o);const g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return Xm.subVectors(s,r),o=(f-u)/(f-u+(d-p)),e.copy(r).addScaledVector(Xm,o);const m=1/(g+_+h);return a=_*m,o=h*m,e.copy(n).addScaledVector(ra,a).addScaledVector(sa,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},kl={h:0,s:0,l:0};function pf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=SM(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=pf(a,s,t+1/3),this.g=pf(a,s,t),this.b=pf(a,s,t-1/3)}return ce.colorSpaceToWorking(this,r),this}setStyle(t,e=vi){function n(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vi){const n=_x[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return ce.workingToColorSpace(gn.copy(this),t),Math.round(ae(gn.r*255,0,255))*65536+Math.round(ae(gn.g*255,0,255))*256+Math.round(ae(gn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,s=gn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=vi){ce.workingToColorSpace(gn.copy(this),t);const e=gn.r,n=gn.g,r=gn.b;return t!==vi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Or),this.setHSL(Or.h+t,Or.s+e,Or.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Or),t.getHSL(kl);const n=Ku(Or.h,kl.h,e),r=Ku(Or.s,kl.s,e),s=Ku(Or.l,kl.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new ge;ge.NAMES=_x;let FM=0;class gl extends Ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=wa,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wa&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==mh&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xx extends gl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new $,zl=new Me;let UM=0;class Ci{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zl.fromBufferAttribute(this,e),zl.applyMatrix3(t),this.setXY(e,zl.x,zl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=io(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=io(e,this.array)),e}setX(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=io(e,this.array)),e}setY(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=io(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=io(e,this.array)),e}setW(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array),r=Bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array),r=Bn(r,this.array),s=Bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dm&&(t.usage=this.usage),t}}class vx extends Ci{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yx extends Ci{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class br extends Ci{constructor(t,e,n){super(new Float32Array(t),e,n)}}let OM=0;const _i=new $e,mf=new qn,aa=new $,ei=new ml,oo=new ml,on=new $;class ki extends Ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dx(t)?yx:vx)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return mf.lookAt(t),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new br(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];oo.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(ei.min,oo.min),ei.expandByPoint(on),on.addVectors(ei.max,oo.max),ei.expandByPoint(on)):(ei.expandByPoint(oo.min),ei.expandByPoint(oo.max))}ei.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)on.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(on));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(aa.fromBufferAttribute(t,c),on.add(aa)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new $,l[R]=new $;const c=new $,u=new $,f=new $,h=new Me,d=new Me,p=new Me,_=new $,g=new $;function m(R,S,b){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),h.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,b),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(C),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(C),o[R].add(_),o[S].add(_),o[b].add(_),l[R].add(g),l[S].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,S=v.length;R<S;++R){const b=v[R],C=b.start,P=b.count;for(let I=C,O=C+P;I<O;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new $,y=new $,x=new $,E=new $;function T(R){x.fromBufferAttribute(r,R),E.copy(x);const S=o[R];M.copy(S),M.sub(x.multiplyScalar(x.dot(S))).normalize(),y.crossVectors(E,S);const C=y.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,S=v.length;R<S;++R){const b=v[R],C=b.start,P=b.count;for(let I=C,O=C+P;I<O;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ci(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new Ci(h,u,f)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ki,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $m=new $e,ls=new mx,Vl=new vu,Ym=new $,Hl=new $,Gl=new $,Wl=new $,gf=new $,Xl=new $,qm=new $,$l=new $;class Pr extends qn{constructor(t=new ki,e=new xx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(gf.fromBufferAttribute(f,t),a?Xl.addScaledVector(gf,u):Xl.addScaledVector(gf.sub(e),u))}e.add(Xl)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vl.copy(n.boundingSphere),Vl.applyMatrix4(s),ls.copy(t.ray).recast(t.near),!(Vl.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Vl,Ym)===null||ls.origin.distanceToSquared(Ym)>(t.far-t.near)**2))&&($m.copy(s).invert(),ls.copy(t.ray).applyMatrix4($m),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,x=M;y<x;y+=3){const E=o.getX(y),T=o.getX(y+1),R=o.getX(y+2);r=Yl(this,m,t,n,c,u,f,E,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);r=Yl(this,a,t,n,c,u,f,v,M,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,x=M;y<x;y+=3){const E=y,T=y+1,R=y+2;r=Yl(this,m,t,n,c,u,f,E,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=g,M=g+1,y=g+2;r=Yl(this,a,t,n,c,u,f,v,M,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function BM(i,t,e,n,r,s,a,o){let l;if(t.side===Yn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ts,o),l===null)return null;$l.copy(o),$l.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($l);return c<e.near||c>e.far?null:{distance:c,point:$l.clone(),object:i}}function Yl(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Hl),i.getVertexPosition(l,Gl),i.getVertexPosition(c,Wl);const u=BM(i,t,e,n,Hl,Gl,Wl,qm);if(u){const f=new $;Fi.getBarycoord(qm,Hl,Gl,Wl,f),r&&(u.uv=Fi.getInterpolatedAttribute(r,o,l,c,f,new Me)),s&&(u.uv1=Fi.getInterpolatedAttribute(s,o,l,c,f,new Me)),a&&(u.normal=Fi.getInterpolatedAttribute(a,o,l,c,f,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};Fi.getNormal(Hl,Gl,Wl,h.normal),u.face=h,u.barycoord=f}return u}class _l extends ki{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,e,t,a,s,0),p("z","y","x",1,-1,n,e,-t,a,s,1),p("x","z","y",1,1,t,n,e,r,a,2),p("x","z","y",1,-1,t,n,-e,r,a,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new br(c,3)),this.setAttribute("normal",new br(u,3)),this.setAttribute("uv",new br(f,2));function p(_,g,m,v,M,y,x,E,T,R,S){const b=y/T,C=x/R,P=y/2,I=x/2,O=E/2,N=T+1,k=R+1;let U=0,H=0;const Z=new $;for(let D=0;D<k;D++){const et=D*C-I;for(let Et=0;Et<N;Et++){const vt=Et*b-P;Z[_]=vt*v,Z[g]=et*M,Z[m]=O,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[m]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Et/T),f.push(1-D/R),U+=1}}for(let D=0;D<R;D++)for(let et=0;et<T;et++){const Et=h+et+N*D,vt=h+et+N*(D+1),It=h+(et+1)+N*(D+1),Nt=h+(et+1)+N*D;l.push(Et,vt,Nt),l.push(vt,It,Nt),H+=6}o.addGroup(d,H,S),d+=H,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ha(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Rn(i){const t={};for(let e=0;e<i.length;e++){const n=Ha(i[e]);for(const r in n)t[r]=n[r]}return t}function kM(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sx(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const zM={clone:Ha,merge:Rn};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends gl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ha(t.uniforms),this.uniformsGroups=kM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new $,Km=new Me,Zm=new Me;class Mi extends Mx{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sd*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Br.x,Br.y).multiplyScalar(-t/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-t/Br.z)}getViewSize(t,e){return this.getViewBounds(t,Km,Zm),e.subVectors(Zm,Km)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oa=-90,la=1;class GM extends qn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(oa,la,t,e);r.layers=this.layers,this.add(r);const s=new Mi(oa,la,t,e);s.layers=this.layers,this.add(s);const a=new Mi(oa,la,t,e);a.layers=this.layers,this.add(a);const o=new Mi(oa,la,t,e);o.layers=this.layers,this.add(o);const l=new Mi(oa,la,t,e);l.layers=this.layers,this.add(l);const c=new Mi(oa,la,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$c)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ex extends In{constructor(t=[],e=Os,n,r,s,a,o,l,c,u){super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bx extends er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ex(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _l(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Ha(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:Mr});s.uniforms.tEquirect.value=e;const a=new Pr(r,s),o=e.minFilter;return e.minFilter===Ms&&(e.minFilter=Mn),new GM(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class ql extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ql;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class XM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $M extends In{constructor(t=null,e=1,n=1,r,s,a,o,l,c=hn,u=hn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xf=new $,YM=new $,qM=new Zt;class gs{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=xf.subVectors(n,e).cross(YM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qM.getNormalMatrix(t),r=this.coplanarPoint(xf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new vu,KM=new Me(.5,.5),Kl=new $;class Tx{constructor(t=new gs,e=new gs,n=new gs,r=new gs,s=new gs,a=new gs){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ji,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],v=s[12],M=s[13],y=s[14],x=s[15];if(r[0].setComponents(c-a,d-u,m-p,x-v).normalize(),r[1].setComponents(c+a,d+u,m+p,x+v).normalize(),r[2].setComponents(c+o,d+f,m+_,x+M).normalize(),r[3].setComponents(c-o,d-f,m-_,x-M).normalize(),n)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,d-h,m-g,x-y).normalize();else if(r[4].setComponents(c-l,d-h,m-g,x-y).normalize(),e===Ji)r[5].setComponents(c+l,d+h,m+g,x+y).normalize();else if(e===$c)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);const e=KM.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Kl.x=r.normal.x>0?t.max.x:t.min.x,Kl.y=r.normal.y>0?t.max.y:t.min.y,Kl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ZM extends gl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jm=new $e,ad=new mx,Zl=new vu,jl=new $;class jM extends qn{constructor(t=new ki,e=new ZM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(r),Zl.radius+=s,t.ray.intersectsSphere(Zl)===!1)return;jm.copy(r).invert(),ad.copy(t.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,_=d;p<_;p++){const g=c.getX(p);jl.fromBufferAttribute(f,g),Jm(jl,g,l,r,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,_=d;p<_;p++)jl.fromBufferAttribute(f,p),Jm(jl,p,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jm(i,t,e,n,r,s,a){const o=ad.distanceSqToPoint(i);if(o<e){const l=new $;ad.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class il extends In{constructor(t,e,n=rr,r,s,a,o=hn,l=hn,c,u=Rr,f=1){if(u!==Rr&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class JM extends il{constructor(t,e=rr,n=Os,r,s,a=hn,o=hn,l,c=Rr){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wx extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yu extends ki{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*h-a;for(let M=0;M<c;M++){const y=M*f-s;p.push(y,-v,0),_.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const M=v+c*m,y=v+c*(m+1),x=v+1+c*(m+1),E=v+1+c*m;d.push(M,y,E),d.push(y,x,E)}this.setIndex(d),this.setAttribute("position",new br(p,3)),this.setAttribute("normal",new br(_,3)),this.setAttribute("uv",new br(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class QM extends Bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class t1 extends gl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e1 extends gl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ax extends Mx{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class n1 extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Qm(i,t,e,n){const r=i1(n);switch(e){case ux:return i*t;case hx:return i*t/r.components*r.byteLength;case Mp:return i*t/r.components*r.byteLength;case za:return i*t*2/r.components*r.byteLength;case Ep:return i*t*2/r.components*r.byteLength;case fx:return i*t*3/r.components*r.byteLength;case Oi:return i*t*4/r.components*r.byteLength;case bp:return i*t*4/r.components*r.byteLength;case Sc:case Mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ec:case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rh:case Ph:return Math.max(i,16)*Math.max(t,8)/4;case Ah:case Ch:return Math.max(i,8)*Math.max(t,8)/2;case Dh:case Lh:case Ih:case Fh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nh:case Uh:case Oh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $h:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jh:case Qh:case td:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ed:case nd:return Math.ceil(i/4)*Math.ceil(t/4)*8;case id:case rd:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i1(i){switch(i){case Ei:case ax:return{byteLength:1,components:1};case tl:case ox:case Ar:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case rr:case vp:case ji:return{byteLength:4,components:1};case lx:case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);function Rx(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function r1(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a1=`#ifdef USE_ALPHAHASH
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
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,h1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d1=`#ifdef USE_BATCHING
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
#endif`,p1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x1=`#ifdef USE_IRIDESCENCE
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
#endif`,v1=`#ifdef USE_BUMPMAP
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
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,R1=`#define PI 3.141592653589793
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
} // validated`,C1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P1=`vec3 transformedNormal = objectNormal;
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
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F1="gl_FragColor = linearToOutputTexel( gl_FragColor );",U1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,Y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z1=`uniform bool receiveShadow;
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
#endif`,j1=`#ifdef USE_ENVMAP
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
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
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
#endif`,iE=`uniform sampler2D dfgLUT;
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
}`,rE=`
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pE=`#if defined( USE_POINTS_UV )
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
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
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
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GE=`float getShadowMask() {
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
}`,WE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,$E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sb=`uniform sampler2D t2D;
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
}`,fb=`#if DEPTH_PACKING == 3200
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
}`,hb=`#define DISTANCE
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
}`,db=`#define DISTANCE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
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
}`,_b=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,vb=`uniform vec3 diffuse;
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
}`,yb=`#define LAMBERT
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
}`,Sb=`#define LAMBERT
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
}`,Mb=`#define MATCAP
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
}`,Eb=`#define MATCAP
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
}`,bb=`#define NORMAL
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
}`,Tb=`#define NORMAL
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
}`,wb=`#define PHONG
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
}`,Ab=`#define PHONG
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
}`,Rb=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
}`,Pb=`#define TOON
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
}`,Db=`#define TOON
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
}`,Lb=`uniform float size;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Fb=`uniform vec3 color;
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
}`,Ub=`uniform float rotation;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:s1,alphahash_pars_fragment:a1,alphamap_fragment:o1,alphamap_pars_fragment:l1,alphatest_fragment:c1,alphatest_pars_fragment:u1,aomap_fragment:f1,aomap_pars_fragment:h1,batching_pars_vertex:d1,batching_vertex:p1,begin_vertex:m1,beginnormal_vertex:g1,bsdfs:_1,iridescence_fragment:x1,bumpmap_pars_fragment:v1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:M1,clipping_planes_vertex:E1,color_fragment:b1,color_pars_fragment:T1,color_pars_vertex:w1,color_vertex:A1,common:R1,cube_uv_reflection_fragment:C1,defaultnormal_vertex:P1,displacementmap_pars_vertex:D1,displacementmap_vertex:L1,emissivemap_fragment:N1,emissivemap_pars_fragment:I1,colorspace_fragment:F1,colorspace_pars_fragment:U1,envmap_fragment:O1,envmap_common_pars_fragment:B1,envmap_pars_fragment:k1,envmap_pars_vertex:z1,envmap_physical_pars_fragment:j1,envmap_vertex:V1,fog_vertex:H1,fog_pars_vertex:G1,fog_fragment:W1,fog_pars_fragment:X1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:Y1,lights_lambert_fragment:q1,lights_lambert_pars_fragment:K1,lights_pars_begin:Z1,lights_toon_fragment:J1,lights_toon_pars_fragment:Q1,lights_phong_fragment:tE,lights_phong_pars_fragment:eE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:aE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:fE,map_pars_fragment:hE,map_particle_fragment:dE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:xE,morphnormal_vertex:vE,morphtarget_pars_vertex:yE,morphtarget_vertex:SE,normal_fragment_begin:ME,normal_fragment_maps:EE,normal_pars_fragment:bE,normal_pars_vertex:TE,normal_vertex:wE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:DE,opaque_fragment:LE,packing:NE,premultiplied_alpha_fragment:IE,project_vertex:FE,dithering_fragment:UE,dithering_pars_fragment:OE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:VE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:WE,skinning_pars_vertex:XE,skinning_vertex:$E,skinnormal_vertex:YE,specularmap_fragment:qE,specularmap_pars_fragment:KE,tonemapping_fragment:ZE,tonemapping_pars_fragment:jE,transmission_fragment:JE,transmission_pars_fragment:QE,uv_pars_fragment:tb,uv_pars_vertex:eb,uv_vertex:nb,worldpos_vertex:ib,background_vert:rb,background_frag:sb,backgroundCube_vert:ab,backgroundCube_frag:ob,cube_vert:lb,cube_frag:cb,depth_vert:ub,depth_frag:fb,distance_vert:hb,distance_frag:db,equirect_vert:pb,equirect_frag:mb,linedashed_vert:gb,linedashed_frag:_b,meshbasic_vert:xb,meshbasic_frag:vb,meshlambert_vert:yb,meshlambert_frag:Sb,meshmatcap_vert:Mb,meshmatcap_frag:Eb,meshnormal_vert:bb,meshnormal_frag:Tb,meshphong_vert:wb,meshphong_frag:Ab,meshphysical_vert:Rb,meshphysical_frag:Cb,meshtoon_vert:Pb,meshtoon_frag:Db,points_vert:Lb,points_frag:Nb,shadow_vert:Ib,shadow_frag:Fb,sprite_vert:Ub,sprite_frag:Ob},xt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Xi={basic:{uniforms:Rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Rn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Rn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Rn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Rn([xt.points,xt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Rn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Rn([xt.common,xt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Rn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Rn([xt.sprite,xt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Rn([xt.common,xt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Rn([xt.lights,xt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Xi.physical={uniforms:Rn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Jl={r:0,b:0,g:0},us=new Cr,Bb=new $e;function kb(i,t,e,n,r,s,a){const o=new ge(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function p(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const x=p(M);x===null?m(o,l):x&&x.isColor&&(m(x,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===xu)?(u===void 0&&(u=new Pr(new _l(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Ha(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),us.copy(y.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(us)),u.material.toneMapped=ce.getTransfer(x.colorSpace)!==ve,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Pr(new yu(2,2),new Bi({name:"BackgroundMaterial",uniforms:Ha(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ce.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(Jl,Sx(i)),n.buffers.color.setClear(Jl.r,Jl.g,Jl.b,y,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:_,addToRenderList:g,dispose:v}}function zb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(b,C,P,I,O){let N=!1;const k=f(I,P,C);s!==k&&(s=k,c(s.object)),N=d(b,I,P,O),N&&p(b,I,P,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,y(b,C,P,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,C,P){const I=P.wireframe===!0;let O=n[b.id];O===void 0&&(O={},n[b.id]=O);let N=O[C.id];N===void 0&&(N={},O[C.id]=N);let k=N[I];return k===void 0&&(k=h(l()),N[I]=k),k}function h(b){const C=[],P=[],I=[];for(let O=0;O<e;O++)C[O]=0,P[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:I,object:b,attributes:{},index:null}}function d(b,C,P,I){const O=s.attributes,N=C.attributes;let k=0;const U=P.getAttributes();for(const H in U)if(U[H].location>=0){const D=O[H];let et=N[H];if(et===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),D===void 0||D.attribute!==et||et&&D.data!==et.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function p(b,C,P,I){const O={},N=C.attributes;let k=0;const U=P.getAttributes();for(const H in U)if(U[H].location>=0){let D=N[H];D===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(D=b.instanceColor));const et={};et.attribute=D,D&&D.data&&(et.data=D.data),O[H]=et,k++}s.attributes=O,s.attributesNum=k,s.index=I}function _(){const b=s.newAttributes;for(let C=0,P=b.length;C<P;C++)b[C]=0}function g(b){m(b,0)}function m(b,C){const P=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;P[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),O[b]!==C&&(i.vertexAttribDivisor(b,C),O[b]=C)}function v(){const b=s.newAttributes,C=s.enabledAttributes;for(let P=0,I=C.length;P<I;P++)C[P]!==b[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function M(b,C,P,I,O,N,k){k===!0?i.vertexAttribIPointer(b,C,P,O,N):i.vertexAttribPointer(b,C,P,I,O,N)}function y(b,C,P,I){_();const O=I.attributes,N=P.getAttributes(),k=C.defaultAttributeValues;for(const U in N){const H=N[U];if(H.location>=0){let Z=O[U];if(Z===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const D=Z.normalized,et=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;const vt=Et.buffer,It=Et.type,Nt=Et.bytesPerElement,K=It===i.INT||It===i.UNSIGNED_INT||Z.gpuType===vp;if(Z.isInterleavedBufferAttribute){const j=Z.data,at=j.stride,Lt=Z.offset;if(j.isInstancedInterleavedBuffer){for(let mt=0;mt<H.locationSize;mt++)m(H.location+mt,j.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let mt=0;mt<H.locationSize;mt++)g(H.location+mt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let mt=0;mt<H.locationSize;mt++)M(H.location+mt,et/H.locationSize,It,D,at*Nt,(Lt+et/H.locationSize*mt)*Nt,K)}else{if(Z.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)m(H.location+j,Z.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let j=0;j<H.locationSize;j++)g(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let j=0;j<H.locationSize;j++)M(H.location+j,et/H.locationSize,It,D,et*Nt,et/H.locationSize*j*Nt,K)}}else if(k!==void 0){const D=k[U];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(H.location,D);break;case 3:i.vertexAttrib3fv(H.location,D);break;case 4:i.vertexAttrib4fv(H.location,D);break;default:i.vertexAttrib1fv(H.location,D)}}}}v()}function x(){R();for(const b in n){const C=n[b];for(const P in C){const I=C[P];for(const O in I)u(I[O].object),delete I[O];delete C[P]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const P in C){const I=C[P];for(const O in I)u(I[O].object),delete I[O];delete C[P]}delete n[b.id]}function T(b){for(const C in n){const P=n[C];if(P[b.id]===void 0)continue;const I=P[b.id];for(const O in I)u(I[O].object),delete I[O];delete P[b.id]}}function R(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Vb(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_]*h[_];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hb(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Oi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ji&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(qt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:x,samples:E}}function Gb(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new gs,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const v=s?0:n,M=v*4;let y=m.clippingState||null;l.value=y,y=u(p,h,M,d);for(let x=0;x!==M;++x)y[x]=e[x];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=d;M!==_;++M,y+=4)a.copy(f[M]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Wb(i){let t=new WeakMap;function e(a,o){return o===Eh?a.mapping=Os:o===bh&&(a.mapping=ka),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eh||o===bh)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bx(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const $r=4,tg=[.125,.215,.35,.446,.526,.582],vs=20,Xb=256,lo=new Ax,eg=new ge;let vf=null,yf=0,Sf=0,Mf=!1;const $b=new $;class ng{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=$b}=s;vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vf,yf,Sf),this._renderer.xr.enabled=Mf,t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ar,format:Oi,colorSpace:Va,depthBuffer:!1},r=ig(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yb(s)),this._blurMaterial=Kb(s,t,e),this._ggxMaterial=qb(s,t,e)}return r}_compileMaterial(t){const e=new Pr(new ki,t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,r,s){const l=new Mi(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(eg),f.toneMapping=tr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pr(new _l,new xx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(eg),m=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const x=this._cubeSize;ca(r,y*x,M>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Os||t.mapping===ka;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-$r?n-p+$r:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,ca(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,lo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ca(t,g,m,3*_,2*_),r.setRenderTarget(t),r.render(o,lo)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&de("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vs-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):vs;g>vs&&qt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vs}`);const m=[];let v=0;for(let T=0;T<vs;++T){const R=T/_,S=Math.exp(-R*R/2);m.push(S),T===0?v+=S:T<g&&(v+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-n;const y=this._sizeLods[r],x=3*y*(r>M-$r?r-M+$r:0),E=4*(this._cubeSize-y);ca(e,x,E,3*y,2*y),l.setRenderTarget(e),l.render(f,lo)}}function Yb(i){const t=[],e=[],n=[];let r=i;const s=i-$r+1+tg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-$r?l=tg[a-i+$r-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*d),M=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,R=E>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(S,_*p*E),M.set(h,g*p*E);const b=[E,E,E,E,E,E];y.set(b,m*p*E)}const x=new ki;x.setAttribute("position",new Ci(v,_)),x.setAttribute("uv",new Ci(M,g)),x.setAttribute("faceIndex",new Ci(y,m)),n.push(new Pr(x,null)),r>$r&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function ig(i,t,e){const n=new er(i,t,e);return n.texture.mapping=xu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function qb(i,t,e){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Kb(i,t,e){const n=new Float32Array(vs),r=new $(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function rg(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function sg(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function Zb(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eh||l===bh,u=l===Os||l===ka;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new ng(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new ng(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jb(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&nl("WebGLRenderer: "+n+" extension not supported."),r}}}function Jb(i,t,e,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let M=0,y=v.length;M<y;M+=3){const x=v[M+0],E=v[M+1],T=v[M+2];h.push(x,E,E,T,T,x)}}else if(p!==void 0){const v=p.array;_=p.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const x=M+0,E=M+1,T=M+2;h.push(x,E,E,T,T,x)}}else return;const g=new(dx(h)?yx:vx)(h,1);g.version=_;const m=s.get(f);m&&t.remove(m),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Qb(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),e.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,h*a,p),e.update(d,n,p))}function u(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function f(h,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v]*_[v];e.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function tT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:de("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function eT(i,t,e){const n=new WeakMap,r=new We;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let x=o.attributes.position.count*y,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*E*4*f),R=new px(T,x,E,f);R.type=ji,R.needsUpdate=!0;const S=y*4;for(let C=0;C<f;C++){const P=m[C],I=v[C],O=M[C],N=x*E*4*C;for(let k=0;k<P.count;k++){const U=k*S;p===!0&&(r.fromBufferAttribute(P,k),T[N+U+0]=r.x,T[N+U+1]=r.y,T[N+U+2]=r.z,T[N+U+3]=0),_===!0&&(r.fromBufferAttribute(I,k),T[N+U+4]=r.x,T[N+U+5]=r.y,T[N+U+6]=r.z,T[N+U+7]=0),g===!0&&(r.fromBufferAttribute(O,k),T[N+U+8]=r.x,T[N+U+9]=r.y,T[N+U+10]=r.z,T[N+U+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Me(x,E)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function nT(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const iT={[J0]:"LINEAR_TONE_MAPPING",[Q0]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[ex]:"ACES_FILMIC_TONE_MAPPING",[ix]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[nx]:"CUSTOM_TONE_MAPPING"};function rT(i,t,e,n,r){const s=new er(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new er(t,e,{type:Ar,depthBuffer:!1,stencilBuffer:!1}),o=new ki;o.setAttribute("position",new br([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new br([0,2,0,0,2,0],2));const l=new QM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pr(o,l),u=new Ax(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,_=null,g=[],m=!1;this.setSize=function(v,M){s.setSize(v,M),a.setSize(v,M);for(let y=0;y<g.length;y++){const x=g[y];x.setSize&&x.setSize(v,M)}},this.setEffects=function(v){g=v,m=g.length>0&&g[0].isRenderPass===!0;const M=s.width,y=s.height;for(let x=0;x<g.length;x++){const E=g[x];E.setSize&&E.setSize(M,y)}},this.begin=function(v,M){if(d||v.toneMapping===tr&&g.length===0)return!1;if(_=M,M!==null){const y=M.width,x=M.height;(s.width!==y||s.height!==x)&&this.setSize(y,x)}return m===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=tr,!0},this.hasRenderPass=function(){return m},this.end=function(v,M){v.toneMapping=p,d=!0;let y=s,x=a;for(let E=0;E<g.length;E++){const T=g[E];if(T.enabled!==!1&&(T.render(v,x,y,M),T.needsSwap!==!1)){const R=y;y=x,x=R}}if(f!==v.outputColorSpace||h!==v.toneMapping){f=v.outputColorSpace,h=v.toneMapping,l.defines={},ce.getTransfer(f)===ve&&(l.defines.SRGB_TRANSFER="");const E=iT[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Cx=new In,od=new il(1,1),Px=new px,Dx=new AM,Lx=new Ex,ag=[],og=[],lg=new Float32Array(16),cg=new Float32Array(9),ug=new Float32Array(4);function Za(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ag[r];if(s===void 0&&(s=new Float32Array(r),ag[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mu(i,t){let e=og[t];e===void 0&&(e=new Int32Array(t),og[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function aT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function oT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function lT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function cT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;ug.set(n),i.uniformMatrix2fv(this.addr,!1,ug),rn(e,n)}}function uT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;cg.set(n),i.uniformMatrix3fv(this.addr,!1,cg),rn(e,n)}}function fT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;lg.set(n),i.uniformMatrix4fv(this.addr,!1,lg),rn(e,n)}}function hT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function pT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function mT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function gT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _T(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function xT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function vT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function yT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(od.compareFunction=e.isReversedDepthBuffer()?wp:Tp,s=od):s=Cx,e.setTexture2D(t||s,r)}function ST(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Dx,r)}function MT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Lx,r)}function ET(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Px,r)}function bT(i){switch(i){case 5126:return sT;case 35664:return aT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return xT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function TT(i,t){i.uniform1fv(this.addr,t)}function wT(i,t){const e=Za(t,this.size,2);i.uniform2fv(this.addr,e)}function AT(i,t){const e=Za(t,this.size,3);i.uniform3fv(this.addr,e)}function RT(i,t){const e=Za(t,this.size,4);i.uniform4fv(this.addr,e)}function CT(i,t){const e=Za(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function PT(i,t){const e=Za(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function DT(i,t){const e=Za(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function LT(i,t){i.uniform1iv(this.addr,t)}function NT(i,t){i.uniform2iv(this.addr,t)}function IT(i,t){i.uniform3iv(this.addr,t)}function FT(i,t){i.uniform4iv(this.addr,t)}function UT(i,t){i.uniform1uiv(this.addr,t)}function OT(i,t){i.uniform2uiv(this.addr,t)}function BT(i,t){i.uniform3uiv(this.addr,t)}function kT(i,t){i.uniform4uiv(this.addr,t)}function zT(i,t,e){const n=this.cache,r=t.length,s=Mu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=od:a=Cx;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function VT(i,t,e){const n=this.cache,r=t.length,s=Mu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Dx,s[a])}function HT(i,t,e){const n=this.cache,r=t.length,s=Mu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Lx,s[a])}function GT(i,t,e){const n=this.cache,r=t.length,s=Mu(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Px,s[a])}function WT(i){switch(i){case 5126:return TT;case 35664:return wT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return PT;case 35676:return DT;case 5124:case 35670:return LT;case 35667:case 35671:return NT;case 35668:case 35672:return IT;case 35669:case 35673:return FT;case 5125:return UT;case 36294:return OT;case 36295:return BT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class XT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bT(e.type)}}class $T{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WT(e.type)}}class YT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function fg(i,t){i.seq.push(t),i.map[t.id]=t}function qT(i,t,e){const n=i.name,r=n.length;for(Ef.lastIndex=0;;){const s=Ef.exec(n),a=Ef.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fg(e,c===void 0?new XT(o,i,t):new $T(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new YT(o),fg(e,f)),e=f}}}class Tc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);qT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function hg(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const KT=37297;let ZT=0;function jT(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const dg=new Zt;function JT(i){ce._getMatrix(dg,ce.workingColorSpace,i);const t=`mat3( ${dg.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Xc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pg(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+jT(i.getShaderSource(t),o)}else return s}function QT(i,t){const e=JT(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const tw={[J0]:"Linear",[Q0]:"Reinhard",[tx]:"Cineon",[ex]:"ACESFilmic",[ix]:"AgX",[rx]:"Neutral",[nx]:"Custom"};function ew(i,t){const e=tw[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ql=new $;function nw(){ce.getLuminanceCoefficients(Ql);const i=Ql.x.toFixed(4),t=Ql.y.toFixed(4),e=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function rw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function So(i){return i!==""}function mg(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(i){return i.replace(aw,lw)}const ow=new Map;function lw(i,t){let e=Jt[t];if(e===void 0){const n=ow.get(t);if(n!==void 0)e=Jt[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ld(e)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _g(i){return i.replace(cw,uw)}function uw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const fw={[yc]:"SHADOWMAP_TYPE_PCF",[yo]:"SHADOWMAP_TYPE_VSM"};function hw(i){return fw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dw={[Os]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function pw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const mw={[ka]:"ENVMAP_MODE_REFRACTION"};function gw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _w={[j0]:"ENVMAP_BLENDING_MULTIPLY",[oM]:"ENVMAP_BLENDING_MIX",[lM]:"ENVMAP_BLENDING_ADD"};function xw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_w[i.combine]||"ENVMAP_BLENDING_NONE"}function vw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yw(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=hw(e),c=pw(e),u=gw(e),f=xw(e),h=vw(e),d=iw(e),p=rw(s),_=r.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(So).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(So).join(`
`),m.length>0&&(m+=`
`)):(g=[xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),m=[xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tr?"#define TONE_MAPPING":"",e.toneMapping!==tr?Jt.tonemapping_pars_fragment:"",e.toneMapping!==tr?ew("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,QT("linearToOutputTexel",e.outputColorSpace),nw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(So).join(`
`)),a=ld(a),a=mg(a,e),a=gg(a,e),o=ld(o),o=mg(o,e),o=gg(o,e),a=_g(a),o=_g(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+g+a,y=v+m+o,x=hg(r,r.VERTEX_SHADER,M),E=hg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,x),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(_)||"",I=r.getShaderInfoLog(x)||"",O=r.getShaderInfoLog(E)||"",N=P.trim(),k=I.trim(),U=O.trim();let H=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,x,E);else{const D=pg(r,x,"vertex"),et=pg(r,E,"fragment");de("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+D+`
`+et)}else N!==""?qt("WebGLProgram: Program Info Log:",N):(k===""||U==="")&&(Z=!1);Z&&(C.diagnostics={runnable:H,programLog:N,vertexShader:{log:k,prefix:g},fragmentShader:{log:U,prefix:m}})}r.deleteShader(x),r.deleteShader(E),R=new Tc(r,_),S=sw(r,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,KT)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ZT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=E,this}let Sw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ew(t),e.set(t,n)),n}}class Ew{constructor(t){this.id=Sw++,this.code=t,this.usedTimes=0}}function bw(i,t,e,n,r,s,a){const o=new gx,l=new Mw,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,C,P,I){const O=P.fog,N=I.geometry,k=S.isMeshStandardMaterial?P.environment:null,U=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),H=U&&U.mapping===xu?U.image.height:null,Z=p[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&qt("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const D=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=D!==void 0?D.length:0;let Et=0;N.morphAttributes.position!==void 0&&(Et=1),N.morphAttributes.normal!==void 0&&(Et=2),N.morphAttributes.color!==void 0&&(Et=3);let vt,It,Nt,K;if(Z){const yt=Xi[Z];vt=yt.vertexShader,It=yt.fragmentShader}else vt=S.vertexShader,It=S.fragmentShader,l.update(S),Nt=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);const j=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),Lt=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,kt=!!S.map,ee=!!S.matcap,Tt=!!U,rt=!!S.aoMap,Ut=!!S.lightMap,gt=!!S.bumpMap,W=!!S.normalMap,B=!!S.displacementMap,pe=!!S.emissiveMap,Qt=!!S.metalnessMap,Gt=!!S.roughnessMap,wt=S.anisotropy>0,L=S.clearcoat>0,w=S.dispersion>0,z=S.iridescence>0,J=S.sheen>0,Q=S.transmission>0,q=wt&&!!S.anisotropyMap,bt=L&&!!S.clearcoatMap,ot=L&&!!S.clearcoatNormalMap,Ct=L&&!!S.clearcoatRoughnessMap,Rt=z&&!!S.iridescenceMap,st=z&&!!S.iridescenceThicknessMap,lt=J&&!!S.sheenColorMap,At=J&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,ct=!!S.specularColorMap,Xt=!!S.specularIntensityMap,F=Q&&!!S.transmissionMap,ht=Q&&!!S.thicknessMap,it=!!S.gradientMap,dt=!!S.alphaMap,nt=S.alphaTest>0,tt=!!S.alphaHash,ft=!!S.extensions;let zt=tr;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(zt=i.toneMapping);const ue={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:vt,fragmentShader:It,defines:S.defines,customVertexShaderID:Nt,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&I.instanceColor!==null,instancingMorph:Lt&&I.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Va,alphaToCoverage:!!S.alphaToCoverage,map:kt,matcap:ee,envMap:Tt,envMapMode:Tt&&U.mapping,envMapCubeUVHeight:H,aoMap:rt,lightMap:Ut,bumpMap:gt,normalMap:W,displacementMap:B,emissiveMap:pe,normalMapObjectSpace:W&&S.normalMapType===hM,normalMapTangentSpace:W&&S.normalMapType===fM,metalnessMap:Qt,roughnessMap:Gt,anisotropy:wt,anisotropyMap:q,clearcoat:L,clearcoatMap:bt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Ct,dispersion:w,iridescence:z,iridescenceMap:Rt,iridescenceThicknessMap:st,sheen:J,sheenColorMap:lt,sheenRoughnessMap:At,specularMap:Pt,specularColorMap:ct,specularIntensityMap:Xt,transmission:Q,transmissionMap:F,thicknessMap:ht,gradientMap:it,opaque:S.transparent===!1&&S.blending===wa&&S.alphaToCoverage===!1,alphaMap:dt,alphaTest:nt,alphaHash:tt,combine:S.combine,mapUv:kt&&_(S.map.channel),aoMapUv:rt&&_(S.aoMap.channel),lightMapUv:Ut&&_(S.lightMap.channel),bumpMapUv:gt&&_(S.bumpMap.channel),normalMapUv:W&&_(S.normalMap.channel),displacementMapUv:B&&_(S.displacementMap.channel),emissiveMapUv:pe&&_(S.emissiveMap.channel),metalnessMapUv:Qt&&_(S.metalnessMap.channel),roughnessMapUv:Gt&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:bt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(S.sheenRoughnessMap.channel),specularMapUv:Pt&&_(S.specularMap.channel),specularColorMapUv:ct&&_(S.specularColorMap.channel),specularIntensityMapUv:Xt&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:ht&&_(S.thicknessMap.channel),alphaMapUv:dt&&_(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(W||wt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(kt||dt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:at,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&ce.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:pe&&S.emissiveMap.isVideoTexture===!0&&ce.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gr,flipSided:S.side===Yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&S.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function m(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)b.push(C),b.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(b,S),M(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const b=p[S.type];let C;if(b){const P=Xi[b];C=zM.clone(P.uniforms)}else C=S.uniforms;return C}function x(S,b){let C=f.get(b);return C!==void 0?++C.usedTimes:(C=new yw(i,b,S,s),u.push(C),f.set(b,C)),C}function E(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:x,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:R}}function Tw(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ww(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yg(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,h,d,p,_,g){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=_,m.group=g),t++,m}function o(f,h,d,p,_,g){const m=a(f,h,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(f,h,d,p,_,g){const m=a(f,h,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||ww),n.length>1&&n.sort(h||vg),r.length>1&&r.sort(h||vg)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Aw(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new yg,i.set(n,[a])):r>=s.length?(a=new yg,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ge};break;case"SpotLight":e={position:new $,direction:new $,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function Cw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Pw=0;function Dw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lw(i){const t=new Rw,e=Cw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new $e,a=new $e;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,M=0,y=0,x=0,E=0,T=0;c.sort(Dw);for(let S=0,b=c.length;S<b;S++){const C=c[S],P=C.color,I=C.intensity,O=C.distance;let N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===za?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=P.r*I,f+=P.g*I,h+=P.b*I;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],I);T++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,H=e.get(C);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=k,d++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(P).multiplyScalar(I),k.distance=O,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[_]=k;const U=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,U.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=U.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=N,y++}_++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(P).multiplyScalar(I),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=k,g++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const U=C.shadow,H=e.get(C);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,H.shadowCameraNear=U.camera.near,H.shadowCameraFar=U.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=C.shadow.matrix,M++}n.point[p]=k,p++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(I),k.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==y||R.numSpotMaps!==x||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=y,R.numSpotMaps=x,R.numLightProbes=T,n.version=Pw++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const M=c[m];if(M.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Sg(i){const t=new Lw(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Nw(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Sg(i),t.set(r,[o])):s>=a.length?(o=new Sg(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
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
}`,Uw=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Ow=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Mg=new $e,co=new $,bf=new $;function Bw(i,t,e){let n=new Tx;const r=new Me,s=new Me,a=new We,o=new t1,l=new e1,c={},u=e.maxTextureSize,f={[ts]:Yn,[Yn]:ts,[gr]:gr},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Iw,fragmentShader:Fw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new ki;p.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pr(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let m=this.type;this.render=function(E,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;E.type===HS&&(qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=yc);const S=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Mr),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=m!==this.type;I&&T.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(N=>N.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,N=E.length;O<N;O++){const k=E[O],U=k.shadow;if(U===void 0){qt("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const H=U.getFrameExtents();if(r.multiply(H),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,U.mapSize.y=s.y)),U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===yo){if(k.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new er(r.x,r.y,{format:za,type:Ar,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new il(r.x,r.y,ji),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=Rr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn}else{k.isPointLight?(U.map=new bx(r.x),U.map.depthTexture=new JM(r.x,rr)):(U.map=new er(r.x,r.y),U.map.depthTexture=new il(r.x,r.y,rr)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=Rr;const D=i.state.buffers.depth.getReversed();this.type===yc?(U.map.depthTexture.compareFunction=D?wp:Tp,U.map.depthTexture.minFilter=Mn,U.map.depthTexture.magFilter=Mn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn)}U.camera.updateProjectionMatrix()}const Z=U.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Z;D++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,D),i.clear();else{D===0&&(i.setRenderTarget(U.map),i.clear());const et=U.getViewport(D);a.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),P.viewport(a)}if(k.isPointLight){const et=U.camera,Et=U.matrix,vt=k.distance||et.far;vt!==et.far&&(et.far=vt,et.updateProjectionMatrix()),co.setFromMatrixPosition(k.matrixWorld),et.position.copy(co),bf.copy(et.position),bf.add(Uw[D]),et.up.copy(Ow[D]),et.lookAt(bf),et.updateMatrixWorld(),Et.makeTranslation(-co.x,-co.y,-co.z),Mg.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Mg,et.coordinateSystem,et.reversedDepth)}else U.updateMatrices(k);n=U.getFrustum(),y(T,R,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===yo&&v(U,R),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,C)};function v(E,T){const R=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new er(r.x,r.y,{format:za,type:Ar})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,d,_,null)}function M(E,T,R,S){let b=null;const C=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)b=C;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=b.uuid,I=T.uuid;let O=c[P];O===void 0&&(O={},c[P]=O);let N=O[I];N===void 0&&(N=b.clone(),O[I]=N,T.addEventListener("dispose",x)),b=N}if(b.visible=T.visible,b.wireframe=T.wireframe,S===yo?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const P=i.properties.get(b);P.light=R}return b}function y(E,T,R,S,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===yo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const I=t.update(E),O=E.material;if(Array.isArray(O)){const N=I.groups;for(let k=0,U=N.length;k<U;k++){const H=N[k],Z=O[H.materialIndex];if(Z&&Z.visible){const D=M(E,Z,S,b);E.onBeforeShadow(i,E,T,R,I,D,H),i.renderBufferDirect(R,null,I,D,E,H),E.onAfterShadow(i,E,T,R,I,D,H)}}}else if(O.visible){const N=M(E,O,S,b);E.onBeforeShadow(i,E,T,R,I,N,null),i.renderBufferDirect(R,null,I,N,E,null),E.onAfterShadow(i,E,T,R,I,N,null)}}const P=E.children;for(let I=0,O=P.length;I<O;I++)y(P[I],T,R,S,b)}function x(E){E.target.removeEventListener("dispose",x);for(const R in c){const S=c[R],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const kw={[gh]:_h,[xh]:Sh,[vh]:Mh,[Ba]:yh,[_h]:gh,[Sh]:xh,[Mh]:vh,[yh]:Ba};function zw(i,t){function e(){let F=!1;const ht=new We;let it=null;const dt=new We(0,0,0,0);return{setMask:function(nt){it!==nt&&!F&&(i.colorMask(nt,nt,nt,nt),it=nt)},setLocked:function(nt){F=nt},setClear:function(nt,tt,ft,zt,ue){ue===!0&&(nt*=zt,tt*=zt,ft*=zt),ht.set(nt,tt,ft,zt),dt.equals(ht)===!1&&(i.clearColor(nt,tt,ft,zt),dt.copy(ht))},reset:function(){F=!1,it=null,dt.set(-1,0,0,0)}}}function n(){let F=!1,ht=!1,it=null,dt=null,nt=null;return{setReversed:function(tt){if(ht!==tt){const ft=t.get("EXT_clip_control");tt?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),ht=tt;const zt=nt;nt=null,this.setClear(zt)}},getReversed:function(){return ht},setTest:function(tt){tt?j(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(tt){it!==tt&&!F&&(i.depthMask(tt),it=tt)},setFunc:function(tt){if(ht&&(tt=kw[tt]),dt!==tt){switch(tt){case gh:i.depthFunc(i.NEVER);break;case _h:i.depthFunc(i.ALWAYS);break;case xh:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case vh:i.depthFunc(i.EQUAL);break;case yh:i.depthFunc(i.GEQUAL);break;case Sh:i.depthFunc(i.GREATER);break;case Mh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=tt}},setLocked:function(tt){F=tt},setClear:function(tt){nt!==tt&&(ht&&(tt=1-tt),i.clearDepth(tt),nt=tt)},reset:function(){F=!1,it=null,dt=null,nt=null,ht=!1}}}function r(){let F=!1,ht=null,it=null,dt=null,nt=null,tt=null,ft=null,zt=null,ue=null;return{setTest:function(yt){F||(yt?j(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(yt){ht!==yt&&!F&&(i.stencilMask(yt),ht=yt)},setFunc:function(yt,Ft,Kt){(it!==yt||dt!==Ft||nt!==Kt)&&(i.stencilFunc(yt,Ft,Kt),it=yt,dt=Ft,nt=Kt)},setOp:function(yt,Ft,Kt){(tt!==yt||ft!==Ft||zt!==Kt)&&(i.stencilOp(yt,Ft,Kt),tt=yt,ft=Ft,zt=Kt)},setLocked:function(yt){F=yt},setClear:function(yt){ue!==yt&&(i.clearStencil(yt),ue=yt)},reset:function(){F=!1,ht=null,it=null,dt=null,nt=null,tt=null,ft=null,zt=null,ue=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,v=null,M=null,y=null,x=null,E=null,T=new ge(0,0,0),R=0,S=!1,b=null,C=null,P=null,I=null,O=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=U>=1):H.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=U>=2);let Z=null,D={};const et=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),vt=new We().fromArray(et),It=new We().fromArray(Et);function Nt(F,ht,it,dt){const nt=new Uint8Array(4),tt=i.createTexture();i.bindTexture(F,tt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<it;ft++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(ht+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return tt}const K={};K[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ba),gt(!1),W(wm),j(i.CULL_FACE),rt(Mr);function j(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function at(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Lt(F,ht){return f[F]!==ht?(i.bindFramebuffer(F,ht),f[F]=ht,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function mt(F,ht){let it=d,dt=!1;if(F){it=h.get(ht),it===void 0&&(it=[],h.set(ht,it));const nt=F.textures;if(it.length!==nt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,ft=nt.length;tt<ft;tt++)it[tt]=i.COLOR_ATTACHMENT0+tt;it.length=nt.length,dt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,dt=!0);dt&&i.drawBuffers(it)}function kt(F){return p!==F?(i.useProgram(F),p=F,!0):!1}const ee={[xs]:i.FUNC_ADD,[WS]:i.FUNC_SUBTRACT,[XS]:i.FUNC_REVERSE_SUBTRACT};ee[$S]=i.MIN,ee[YS]=i.MAX;const Tt={[qS]:i.ZERO,[KS]:i.ONE,[ZS]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[nM]:i.SRC_ALPHA_SATURATE,[tM]:i.DST_COLOR,[JS]:i.DST_ALPHA,[jS]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[eM]:i.ONE_MINUS_DST_COLOR,[QS]:i.ONE_MINUS_DST_ALPHA,[iM]:i.CONSTANT_COLOR,[rM]:i.ONE_MINUS_CONSTANT_COLOR,[sM]:i.CONSTANT_ALPHA,[aM]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(F,ht,it,dt,nt,tt,ft,zt,ue,yt){if(F===Mr){_===!0&&(at(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),F!==GS){if(F!==g||yt!==S){if((m!==xs||y!==xs)&&(i.blendEquation(i.FUNC_ADD),m=xs,y=xs),yt)switch(F){case wa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Am:i.blendFunc(i.ONE,i.ONE);break;case Rm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:de("WebGLState: Invalid blending: ",F);break}else switch(F){case wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Am:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rm:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cm:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",F);break}v=null,M=null,x=null,E=null,T.set(0,0,0),R=0,g=F,S=yt}return}nt=nt||ht,tt=tt||it,ft=ft||dt,(ht!==m||nt!==y)&&(i.blendEquationSeparate(ee[ht],ee[nt]),m=ht,y=nt),(it!==v||dt!==M||tt!==x||ft!==E)&&(i.blendFuncSeparate(Tt[it],Tt[dt],Tt[tt],Tt[ft]),v=it,M=dt,x=tt,E=ft),(zt.equals(T)===!1||ue!==R)&&(i.blendColor(zt.r,zt.g,zt.b,ue),T.copy(zt),R=ue),g=F,S=!1}function Ut(F,ht){F.side===gr?at(i.CULL_FACE):j(i.CULL_FACE);let it=F.side===Yn;ht&&(it=!it),gt(it),F.blending===wa&&F.transparent===!1?rt(Mr):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const dt=F.stencilWrite;o.setTest(dt),dt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function W(F){F!==zS?(j(i.CULL_FACE),F!==C&&(F===wm?i.cullFace(i.BACK):F===VS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),C=F}function B(F){F!==P&&(k&&i.lineWidth(F),P=F)}function pe(F,ht,it){F?(j(i.POLYGON_OFFSET_FILL),(I!==ht||O!==it)&&(i.polygonOffset(ht,it),I=ht,O=it)):at(i.POLYGON_OFFSET_FILL)}function Qt(F){F?j(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Gt(F){F===void 0&&(F=i.TEXTURE0+N-1),Z!==F&&(i.activeTexture(F),Z=F)}function wt(F,ht,it){it===void 0&&(Z===null?it=i.TEXTURE0+N-1:it=Z);let dt=D[it];dt===void 0&&(dt={type:void 0,texture:void 0},D[it]=dt),(dt.type!==F||dt.texture!==ht)&&(Z!==it&&(i.activeTexture(it),Z=it),i.bindTexture(F,ht||K[F]),dt.type=F,dt.texture=ht)}function L(){const F=D[Z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function J(){try{i.texSubImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function Q(){try{i.texSubImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function ot(){try{i.texStorage2D(...arguments)}catch(F){de("WebGLState:",F)}}function Ct(){try{i.texStorage3D(...arguments)}catch(F){de("WebGLState:",F)}}function Rt(){try{i.texImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function st(){try{i.texImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function lt(F){vt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),vt.copy(F))}function At(F){It.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),It.copy(F))}function Pt(F,ht){let it=c.get(ht);it===void 0&&(it=new WeakMap,c.set(ht,it));let dt=it.get(F);dt===void 0&&(dt=i.getUniformBlockIndex(ht,F.name),it.set(F,dt))}function ct(F,ht){const dt=c.get(ht).get(F);l.get(ht)!==dt&&(i.uniformBlockBinding(ht,dt,F.__bindingPointIndex),l.set(ht,dt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,D={},f={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,v=null,M=null,y=null,x=null,E=null,T=new ge(0,0,0),R=0,S=!1,b=null,C=null,P=null,I=null,O=null,vt.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:at,bindFramebuffer:Lt,drawBuffers:mt,useProgram:kt,setBlending:rt,setMaterial:Ut,setFlipSided:gt,setCullFace:W,setLineWidth:B,setPolygonOffset:pe,setScissorTest:Qt,activeTexture:Gt,bindTexture:wt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:z,texImage2D:Rt,texImage3D:st,updateUBOMapping:Pt,uniformBlockBinding:ct,texStorage2D:ot,texStorage3D:Ct,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:bt,scissor:lt,viewport:At,reset:Xt}}function Vw(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,w){return d?new OffscreenCanvas(L,w):Yc("canvas")}function _(L,w,z){let J=1;const Q=wt(L);if((Q.width>z||Q.height>z)&&(J=z/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const q=Math.floor(J*Q.width),bt=Math.floor(J*Q.height);f===void 0&&(f=p(q,bt));const ot=w?p(q,bt):f;return ot.width=q,ot.height=bt,ot.getContext("2d").drawImage(L,0,0,q,bt),qt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+bt+")."),ot}else return"data"in L&&qt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,w,z,J,Q=!1){if(L!==null){if(i[L]!==void 0)return i[L];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let q=w;if(w===i.RED&&(z===i.FLOAT&&(q=i.R32F),z===i.HALF_FLOAT&&(q=i.R16F),z===i.UNSIGNED_BYTE&&(q=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.R8UI),z===i.UNSIGNED_SHORT&&(q=i.R16UI),z===i.UNSIGNED_INT&&(q=i.R32UI),z===i.BYTE&&(q=i.R8I),z===i.SHORT&&(q=i.R16I),z===i.INT&&(q=i.R32I)),w===i.RG&&(z===i.FLOAT&&(q=i.RG32F),z===i.HALF_FLOAT&&(q=i.RG16F),z===i.UNSIGNED_BYTE&&(q=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RG8UI),z===i.UNSIGNED_SHORT&&(q=i.RG16UI),z===i.UNSIGNED_INT&&(q=i.RG32UI),z===i.BYTE&&(q=i.RG8I),z===i.SHORT&&(q=i.RG16I),z===i.INT&&(q=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(q=i.RGB16UI),z===i.UNSIGNED_INT&&(q=i.RGB32UI),z===i.BYTE&&(q=i.RGB8I),z===i.SHORT&&(q=i.RGB16I),z===i.INT&&(q=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),z===i.UNSIGNED_INT&&(q=i.RGBA32UI),z===i.BYTE&&(q=i.RGBA8I),z===i.SHORT&&(q=i.RGBA16I),z===i.INT&&(q=i.RGBA32I)),w===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),w===i.RGBA){const bt=Q?Xc:ce.getTransfer(J);z===i.FLOAT&&(q=i.RGBA32F),z===i.HALF_FLOAT&&(q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(q=bt===ve?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(L,w){let z;return L?w===null||w===rr||w===el?z=i.DEPTH24_STENCIL8:w===ji?z=i.DEPTH32F_STENCIL8:w===tl&&(z=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rr||w===el?z=i.DEPTH_COMPONENT24:w===ji?z=i.DEPTH_COMPONENT32F:w===tl&&(z=i.DEPTH_COMPONENT16),z}function x(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==hn&&L.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function E(L){const w=L.target;w.removeEventListener("dispose",E),R(w),w.isVideoTexture&&u.delete(w)}function T(L){const w=L.target;w.removeEventListener("dispose",T),b(w)}function R(L){const w=n.get(L);if(w.__webglInit===void 0)return;const z=L.source,J=h.get(z);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(L),Object.keys(J).length===0&&h.delete(z)}n.remove(L)}function S(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const z=L.source,J=h.get(z);delete J[w.__cacheKey],a.memory.textures--}function b(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=L.textures;for(let J=0,Q=z.length;J<Q;J++){const q=n.get(z[J]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(L)}let C=0;function P(){C=0}function I(){const L=C;return L>=r.maxTextures&&qt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),C+=1,L}function O(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function N(L,w){const z=n.get(L);if(L.isVideoTexture&&Qt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){const J=L.image;if(J===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,L,w);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function k(L,w){const z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){K(z,L,w);return}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function U(L,w){const z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){K(z,L,w);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function H(L,w){const z=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&z.__version!==L.version){j(z,L,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const Z={[Th]:i.REPEAT,[yr]:i.CLAMP_TO_EDGE,[wh]:i.MIRRORED_REPEAT},D={[hn]:i.NEAREST,[cM]:i.NEAREST_MIPMAP_NEAREST,[Dl]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Yu]:i.LINEAR_MIPMAP_NEAREST,[Ms]:i.LINEAR_MIPMAP_LINEAR},et={[dM]:i.NEVER,[xM]:i.ALWAYS,[pM]:i.LESS,[Tp]:i.LEQUAL,[mM]:i.EQUAL,[wp]:i.GEQUAL,[gM]:i.GREATER,[_M]:i.NOTEQUAL};function Et(L,w){if(w.type===ji&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===Yu||w.magFilter===Dl||w.magFilter===Ms||w.minFilter===Mn||w.minFilter===Yu||w.minFilter===Dl||w.minFilter===Ms)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Z[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Z[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Z[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,D[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,D[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hn||w.minFilter!==Dl&&w.minFilter!==Ms||w.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function vt(L,w){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let Q=h.get(J);Q===void 0&&(Q={},h.set(J,Q));const q=O(w);if(q!==L.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[q].usedTimes++;const bt=Q[L.__cacheKey];bt!==void 0&&(Q[L.__cacheKey].usedTimes--,bt.usedTimes===0&&S(w)),L.__cacheKey=q,L.__webglTexture=Q[q].texture}return z}function It(L,w,z){return Math.floor(Math.floor(L/z)/w)}function Nt(L,w,z,J){const q=L.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,z,J,w.data);else{q.sort((st,lt)=>st.start-lt.start);let bt=0;for(let st=1;st<q.length;st++){const lt=q[bt],At=q[st],Pt=lt.start+lt.count,ct=It(At.start,w.width,4),Xt=It(lt.start,w.width,4);At.start<=Pt+1&&ct===Xt&&It(At.start+At.count-1,w.width,4)===ct?lt.count=Math.max(lt.count,At.start+At.count-lt.start):(++bt,q[bt]=At)}q.length=bt+1;const ot=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let st=0,lt=q.length;st<lt;st++){const At=q[st],Pt=Math.floor(At.start/4),ct=Math.ceil(At.count/4),Xt=Pt%w.width,F=Math.floor(Pt/w.width),ht=ct,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Xt,F,ht,it,z,J,w.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function K(L,w,z){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const Q=vt(L,w),q=w.source;e.bindTexture(J,L.__webglTexture,i.TEXTURE0+z);const bt=n.get(q);if(q.version!==bt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const ot=ce.getPrimaries(ce.workingColorSpace),Ct=w.colorSpace===zr?null:ce.getPrimaries(w.colorSpace),Rt=w.colorSpace===zr||ot===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let st=_(w.image,!1,r.maxTextureSize);st=Gt(w,st);const lt=s.convert(w.format,w.colorSpace),At=s.convert(w.type);let Pt=M(w.internalFormat,lt,At,w.colorSpace,w.isVideoTexture);Et(J,w);let ct;const Xt=w.mipmaps,F=w.isVideoTexture!==!0,ht=bt.__version===void 0||Q===!0,it=q.dataReady,dt=x(w,st);if(w.isDepthTexture)Pt=y(w.format===Es,w.type),ht&&(F?e.texStorage2D(i.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Pt,st.width,st.height,0,lt,At,null));else if(w.isDataTexture)if(Xt.length>0){F&&ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,Xt[0].width,Xt[0].height);for(let nt=0,tt=Xt.length;nt<tt;nt++)ct=Xt[nt],F?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ct.width,ct.height,lt,At,ct.data):e.texImage2D(i.TEXTURE_2D,nt,Pt,ct.width,ct.height,0,lt,At,ct.data);w.generateMipmaps=!1}else F?(ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,st.width,st.height),it&&Nt(w,st,lt,At)):e.texImage2D(i.TEXTURE_2D,0,Pt,st.width,st.height,0,lt,At,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Pt,Xt[0].width,Xt[0].height,st.depth);for(let nt=0,tt=Xt.length;nt<tt;nt++)if(ct=Xt[nt],w.format!==Oi)if(lt!==null)if(F){if(it)if(w.layerUpdates.size>0){const ft=Qm(ct.width,ct.height,w.format,w.type);for(const zt of w.layerUpdates){const ue=ct.data.subarray(zt*ft/ct.data.BYTES_PER_ELEMENT,(zt+1)*ft/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,zt,ct.width,ct.height,1,lt,ue)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,st.depth,lt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Pt,ct.width,ct.height,st.depth,0,ct.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,st.depth,lt,At,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Pt,ct.width,ct.height,st.depth,0,lt,At,ct.data)}else{F&&ht&&e.texStorage2D(i.TEXTURE_2D,dt,Pt,Xt[0].width,Xt[0].height);for(let nt=0,tt=Xt.length;nt<tt;nt++)ct=Xt[nt],w.format!==Oi?lt!==null?F?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Pt,ct.width,ct.height,0,ct.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ct.width,ct.height,lt,At,ct.data):e.texImage2D(i.TEXTURE_2D,nt,Pt,ct.width,ct.height,0,lt,At,ct.data)}else if(w.isDataArrayTexture)if(F){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Pt,st.width,st.height,st.depth),it)if(w.layerUpdates.size>0){const nt=Qm(st.width,st.height,w.format,w.type);for(const tt of w.layerUpdates){const ft=st.data.subarray(tt*nt/st.data.BYTES_PER_ELEMENT,(tt+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,lt,At,ft)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,lt,At,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,lt,At,st.data);else if(w.isData3DTexture)F?(ht&&e.texStorage3D(i.TEXTURE_3D,dt,Pt,st.width,st.height,st.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,lt,At,st.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,lt,At,st.data);else if(w.isFramebufferTexture){if(ht)if(F)e.texStorage2D(i.TEXTURE_2D,dt,Pt,st.width,st.height);else{let nt=st.width,tt=st.height;for(let ft=0;ft<dt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Pt,nt,tt,0,lt,At,null),nt>>=1,tt>>=1}}else if(Xt.length>0){if(F&&ht){const nt=wt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Pt,nt.width,nt.height)}for(let nt=0,tt=Xt.length;nt<tt;nt++)ct=Xt[nt],F?it&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt,At,ct):e.texImage2D(i.TEXTURE_2D,nt,Pt,lt,At,ct);w.generateMipmaps=!1}else if(F){if(ht){const nt=wt(st);e.texStorage2D(i.TEXTURE_2D,dt,Pt,nt.width,nt.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,At,st)}else e.texImage2D(i.TEXTURE_2D,0,Pt,lt,At,st);g(w)&&m(J),bt.__version=q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function j(L,w,z){if(w.image.length!==6)return;const J=vt(L,w),Q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+z);const q=n.get(Q);if(Q.version!==q.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const bt=ce.getPrimaries(ce.workingColorSpace),ot=w.colorSpace===zr?null:ce.getPrimaries(w.colorSpace),Ct=w.colorSpace===zr||bt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Rt=w.isCompressedTexture||w.image[0].isCompressedTexture,st=w.image[0]&&w.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!Rt&&!st?lt[tt]=_(w.image[tt],!0,r.maxCubemapSize):lt[tt]=st?w.image[tt].image:w.image[tt],lt[tt]=Gt(w,lt[tt]);const At=lt[0],Pt=s.convert(w.format,w.colorSpace),ct=s.convert(w.type),Xt=M(w.internalFormat,Pt,ct,w.colorSpace),F=w.isVideoTexture!==!0,ht=q.__version===void 0||J===!0,it=Q.dataReady;let dt=x(w,At);Et(i.TEXTURE_CUBE_MAP,w);let nt;if(Rt){F&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Xt,At.width,At.height);for(let tt=0;tt<6;tt++){nt=lt[tt].mipmaps;for(let ft=0;ft<nt.length;ft++){const zt=nt[ft];w.format!==Oi?Pt!==null?F?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,zt.width,zt.height,Pt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Xt,zt.width,zt.height,0,zt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,zt.width,zt.height,Pt,ct,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Xt,zt.width,zt.height,0,Pt,ct,zt.data)}}}else{if(nt=w.mipmaps,F&&ht){nt.length>0&&dt++;const tt=wt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Xt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,Pt,ct,lt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,lt[tt].width,lt[tt].height,0,Pt,ct,lt[tt].data);for(let ft=0;ft<nt.length;ft++){const ue=nt[ft].image[tt].image;F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,ue.width,ue.height,Pt,ct,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Xt,ue.width,ue.height,0,Pt,ct,ue.data)}}else{F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Pt,ct,lt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,Pt,ct,lt[tt]);for(let ft=0;ft<nt.length;ft++){const zt=nt[ft];F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Pt,ct,zt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Xt,Pt,ct,zt.image[tt])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),q.__version=Q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function at(L,w,z,J,Q,q){const bt=s.convert(z.format,z.colorSpace),ot=s.convert(z.type),Ct=M(z.internalFormat,bt,ot,z.colorSpace),Rt=n.get(w),st=n.get(z);if(st.__renderTarget=w,!Rt.__hasExternalTextures){const lt=Math.max(1,w.width>>q),At=Math.max(1,w.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,Ct,lt,At,w.depth,0,bt,ot,null):e.texImage2D(Q,q,Ct,lt,At,0,bt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),pe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,st.__webglTexture,0,B(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,st.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(L,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const J=w.depthTexture,Q=J&&J.isDepthTexture?J.type:null,q=y(w.stencilBuffer,Q),bt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(w),q,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(w),q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,L)}else{const J=w.textures;for(let Q=0;Q<J.length;Q++){const q=J[Q],bt=s.convert(q.format,q.colorSpace),ot=s.convert(q.type),Ct=M(q.internalFormat,bt,ot,q.colorSpace);pe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(w),Ct,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(w),Ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(L,w,z){const J=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Et(i.TEXTURE_CUBE_MAP,w.depthTexture);const Rt=s.convert(w.depthTexture.format),st=s.convert(w.depthTexture.type);let lt;w.depthTexture.format===Rr?lt=i.DEPTH_COMPONENT24:w.depthTexture.format===Es&&(lt=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,lt,w.width,w.height,0,Rt,st,null)}}else N(w.depthTexture,0);const q=Q.__webglTexture,bt=B(w),ot=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Ct=w.depthTexture.format===Es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Rr)pe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,ot,q,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,ot,q,0);else if(w.depthTexture.format===Es)pe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,ot,q,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,ot,q,0);else throw new Error("Unknown depthTexture format")}function kt(L){const w=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=J}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)mt(w.__webglFramebuffer[J],L,J);else{const J=L.texture.mipmaps;J&&J.length>0?mt(w.__webglFramebuffer[0],L,0):mt(w.__webglFramebuffer,L,0)}else if(z){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),Lt(w.__webglDepthbuffer[J],L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Lt(w.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(L,w,z){const J=n.get(L);w!==void 0&&at(J.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&kt(L)}function Tt(L){const w=L.texture,z=n.get(L),J=n.get(w);L.addEventListener("dispose",T);const Q=L.textures,q=L.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let Ct=0;Ct<w.mipmaps.length;Ct++)z.__webglFramebuffer[ot][Ct]=i.createFramebuffer()}else z.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<w.mipmaps.length;ot++)z.__webglFramebuffer[ot]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ot=0,Ct=Q.length;ot<Ct;ot++){const Rt=n.get(Q[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&pe(L)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const Ct=Q[ot];z.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const Rt=s.convert(Ct.format,Ct.colorSpace),st=s.convert(Ct.type),lt=M(Ct.internalFormat,Rt,st,Ct.colorSpace,L.isXRRenderTarget===!0),At=B(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,lt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Et(i.TEXTURE_CUBE_MAP,w);for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)at(z.__webglFramebuffer[ot][Ct],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct);else at(z.__webglFramebuffer[ot],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(w)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,Ct=Q.length;ot<Ct;ot++){const Rt=Q[ot],st=n.get(Rt);let lt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(lt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,st.__webglTexture),Et(lt,Rt),at(z.__webglFramebuffer,L,Rt,i.COLOR_ATTACHMENT0+ot,lt,0),g(Rt)&&m(lt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ot=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),Et(ot,w),w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)at(z.__webglFramebuffer[Ct],L,w,i.COLOR_ATTACHMENT0,ot,Ct);else at(z.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,ot,0);g(w)&&m(ot),e.unbindTexture()}L.depthBuffer&&kt(L)}function rt(L){const w=L.textures;for(let z=0,J=w.length;z<J;z++){const Q=w[z];if(g(Q)){const q=v(L),bt=n.get(Q).__webglTexture;e.bindTexture(q,bt),m(q),e.unbindTexture()}}}const Ut=[],gt=[];function W(L){if(L.samples>0){if(pe(L)===!1){const w=L.textures,z=L.width,J=L.height;let Q=i.COLOR_BUFFER_BIT;const q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(L),ot=w.length>1;if(ot)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Ct=L.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const st=n.get(w[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,Q,i.NEAREST),l===!0&&(Ut.length=0,gt.length=0,Ut.push(i.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ut.push(q),gt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const st=n.get(w[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function B(L){return Math.min(r.maxSamples,L.samples)}function pe(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qt(L){const w=a.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Gt(L,w){const z=L.colorSpace,J=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Va&&z!==zr&&(ce.getTransfer(z)===ve?(J!==Oi||Q!==Ei)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",z)),w}function wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=ee,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hw(i,t){function e(n,r=zr){let s;const a=ce.getTransfer(r);if(n===Ei)return i.UNSIGNED_BYTE;if(n===yp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cx)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ax)return i.BYTE;if(n===ox)return i.SHORT;if(n===tl)return i.UNSIGNED_SHORT;if(n===vp)return i.INT;if(n===rr)return i.UNSIGNED_INT;if(n===ji)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===ux)return i.ALPHA;if(n===fx)return i.RGB;if(n===Oi)return i.RGBA;if(n===Rr)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===hx)return i.RED;if(n===Mp)return i.RED_INTEGER;if(n===za)return i.RG;if(n===Ep)return i.RG_INTEGER;if(n===bp)return i.RGBA_INTEGER;if(n===Sc||n===Mc||n===Ec||n===bc)if(a===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ah||n===Rh||n===Ch||n===Ph)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ah)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ph)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dh||n===Lh||n===Nh||n===Ih||n===Fh||n===Uh||n===Oh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dh||n===Lh)return a===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ih)return s.COMPRESSED_R11_EAC;if(n===Fh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Uh)return s.COMPRESSED_RG11_EAC;if(n===Oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bh||n===kh||n===zh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===$h||n===Yh||n===qh||n===Kh||n===Zh||n===jh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jh)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jh||n===Qh||n===td)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Jh)return a===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ed||n===nd||n===id||n===rd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ed)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===el?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ww=`
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

}`;class Xw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wx(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bi({vertexShader:Gw,fragmentShader:Ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pr(new yu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends Ka{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new Xw,m={},v=e.getContextAttributes();let M=null,y=null;const x=[],E=[],T=new Me;let R=null;const S=new Mi;S.viewport=new We;const b=new Mi;b.viewport=new We;const C=[S,b],P=new n1;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=x[K];return j===void 0&&(j=new _f,x[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=x[K];return j===void 0&&(j=new _f,x[K]=j),j.getGripSpace()},this.getHand=function(K){let j=x[K];return j===void 0&&(j=new _f,x[K]=j),j.getHandSpace()};function N(K){const j=E.indexOf(K.inputSource);if(j===-1)return;const at=x[j];at!==void 0&&(at.update(K.inputSource,K.frame,c||a),at.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",U);for(let K=0;K<x.length;K++){const j=E[K];j!==null&&(E[K]=null,x[K].disconnect(j))}I=null,O=null,g.reset();for(const K in m)delete m[K];t.setRenderTarget(M),d=null,h=null,f=null,r=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Lt=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=v.stencil?Es:Rr,Lt=v.stencil?el:rr);const kt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(kt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new er(h.textureWidth,h.textureHeight,{format:Oi,type:Ei,depthTexture:new il(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const at={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new er(d.framebufferWidth,d.framebufferHeight,{format:Oi,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Nt.setContext(r),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(K){for(let j=0;j<K.removed.length;j++){const at=K.removed[j],Lt=E.indexOf(at);Lt>=0&&(E[Lt]=null,x[Lt].disconnect(at))}for(let j=0;j<K.added.length;j++){const at=K.added[j];let Lt=E.indexOf(at);if(Lt===-1){for(let kt=0;kt<x.length;kt++)if(kt>=E.length){E.push(at),Lt=kt;break}else if(E[kt]===null){E[kt]=at,Lt=kt;break}if(Lt===-1)break}const mt=x[Lt];mt&&mt.connect(at)}}const H=new $,Z=new $;function D(K,j,at){H.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(at.matrixWorld);const Lt=H.distanceTo(Z),mt=j.projectionMatrix.elements,kt=at.projectionMatrix.elements,ee=mt[14]/(mt[10]-1),Tt=mt[14]/(mt[10]+1),rt=(mt[9]+1)/mt[5],Ut=(mt[9]-1)/mt[5],gt=(mt[8]-1)/mt[0],W=(kt[8]+1)/kt[0],B=ee*gt,pe=ee*W,Qt=Lt/(-gt+W),Gt=Qt*-gt;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Gt),K.translateZ(Qt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),mt[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const wt=ee+Qt,L=Tt+Qt,w=B-Gt,z=pe+(Lt-Gt),J=rt*Tt/L*wt,Q=Ut*Tt/L*wt;K.projectionMatrix.makePerspective(w,z,J,Q,wt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function et(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let j=K.near,at=K.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(at=g.depthFar)),P.near=b.near=S.near=j,P.far=b.far=S.far=at,(I!==P.near||O!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,O=P.far),P.layers.mask=K.layers.mask|6,S.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;const Lt=K.parent,mt=P.cameras;et(P,Lt);for(let kt=0;kt<mt.length;kt++)et(mt[kt],Lt);mt.length===2?D(P,S,b):P.projectionMatrix.copy(S.projectionMatrix),Et(K,P,Lt)};function Et(K,j,at){at===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(at.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=sd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(K){return m[K]};let vt=null;function It(K,j){if(u=j.getViewerPose(c||a),p=j,u!==null){const at=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Lt=!1;at.length!==P.cameras.length&&(P.cameras.length=0,Lt=!0);for(let Tt=0;Tt<at.length;Tt++){const rt=at[Tt];let Ut=null;if(d!==null)Ut=d.getViewport(rt);else{const W=f.getViewSubImage(h,rt);Ut=W.viewport,Tt===0&&(t.setRenderTargetTextures(y,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(y))}let gt=C[Tt];gt===void 0&&(gt=new Mi,gt.layers.enable(Tt),gt.viewport=new We,C[Tt]=gt),gt.matrix.fromArray(rt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(rt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Tt===0&&(P.matrix.copy(gt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Lt===!0&&P.cameras.push(gt)}const mt=r.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Tt=f.getDepthInformation(at[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(Tt,r.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Tt=0;Tt<at.length;Tt++){const rt=at[Tt].camera;if(rt){let Ut=m[rt];Ut||(Ut=new wx,m[rt]=Ut);const gt=f.getCameraImage(rt);Ut.sourceTexture=gt}}}}for(let at=0;at<x.length;at++){const Lt=E[at],mt=x[at];Lt!==null&&mt!==void 0&&mt.update(Lt,j,c||a)}vt&&vt(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}const Nt=new Rx;Nt.setAnimationLoop(It),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}}const fs=new Cr,Yw=new $e;function qw(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Sx(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,fs.copy(y),fs.x*=-1,fs.y*=-1,fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(fs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Kw(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function c(v,M){let y=r[v.id];y===void 0&&(p(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));const x=M.program;n.updateUBOMapping(v,x);const E=t.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const M=f();v.__bindingPointIndex=M;const y=i.createBuffer(),x=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,x,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const M=r[v.id],y=v.uniforms,x=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=y.length;E<T;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,b=R.length;S<b;S++){const C=R[S];if(d(C,E,S,x)===!0){const P=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let N=0;N<I.length;N++){const k=I[N],U=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,P+O,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,O),O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,y,x){const E=v.value,T=M+"_"+y;if(x[T]===void 0)return typeof E=="number"||typeof E=="boolean"?x[T]=E:x[T]=E.clone(),!0;{const R=x[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return x[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function p(v){const M=v.uniforms;let y=0;const x=16;for(let T=0,R=M.length;T<R;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,C=S.length;b<C;b++){const P=S[b],I=Array.isArray(P.value)?P.value:[P.value];for(let O=0,N=I.length;O<N;O++){const k=I[O],U=_(k),H=y%x,Z=H%U.boundary,D=H+Z;y+=Z,D!==0&&x-D<U.storage&&(y+=x-D),P.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=U.storage}}}const E=y%x;return E>0&&(y+=x-E),v.__size=y,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qt("WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const Zw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function jw(){return Vi===null&&(Vi=new $M(Zw,16,16,za,Ar),Vi.name="DFG_LUT",Vi.minFilter=Mn,Vi.magFilter=Mn,Vi.wrapS=yr,Vi.wrapT=yr,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class Jw{constructor(t={}){const{canvas:e=vM(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ei}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,g=new Set([bp,Ep,Mp]),m=new Set([Ei,rr,tl,el,yp,Sp]),v=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const E=[],T=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=vi;let C=0,P=0,I=null,O=-1,N=null;const k=new We,U=new We;let H=null;const Z=new ge(0);let D=0,et=e.width,Et=e.height,vt=1,It=null,Nt=null;const K=new We(0,0,et,Et),j=new We(0,0,et,Et);let at=!1;const Lt=new Tx;let mt=!1,kt=!1;const ee=new $e,Tt=new $,rt=new We,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function W(){return I===null?vt:1}let B=n;function pe(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xp}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",yt,!1),B===null){const V="webgl2";if(B=pe(V,A),B===null)throw pe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw de("WebGLRenderer: "+A.message),A}let Qt,Gt,wt,L,w,z,J,Q,q,bt,ot,Ct,Rt,st,lt,At,Pt,ct,Xt,F,ht,it,dt,nt;function tt(){Qt=new jb(B),Qt.init(),it=new Hw(B,Qt),Gt=new Hb(B,Qt,t,it),wt=new zw(B,Qt),Gt.reversedDepthBuffer&&h&&wt.buffers.depth.setReversed(!0),L=new tT(B),w=new Tw,z=new Vw(B,Qt,wt,w,Gt,it,L),J=new Wb(S),Q=new Zb(S),q=new r1(B),dt=new zb(B,q),bt=new Jb(B,q,L,dt),ot=new nT(B,bt,q,L),Xt=new eT(B,Gt,z),At=new Gb(w),Ct=new bw(S,J,Q,Qt,Gt,dt,At),Rt=new qw(S,w),st=new Aw,lt=new Nw(Qt),ct=new kb(S,J,Q,wt,ot,p,l),Pt=new Bw(S,ot,Gt),nt=new Kw(B,L,Gt,wt),F=new Vb(B,Qt,L),ht=new Qb(B,Qt,L),L.programs=Ct.programs,S.capabilities=Gt,S.extensions=Qt,S.properties=w,S.renderLists=st,S.shadowMap=Pt,S.state=wt,S.info=L}tt(),_!==Ei&&(R=new rT(_,e.width,e.height,r,s));const ft=new $w(S,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(A){A!==void 0&&(vt=A,this.setSize(et,Et,!1))},this.getSize=function(A){return A.set(et,Et)},this.setSize=function(A,V,Y=!0){if(ft.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=A,Et=V,e.width=Math.floor(A*vt),e.height=Math.floor(V*vt),Y===!0&&(e.style.width=A+"px",e.style.height=V+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(et*vt,Et*vt).floor()},this.setDrawingBufferSize=function(A,V,Y){et=A,Et=V,vt=Y,e.width=Math.floor(A*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(_===Ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,V,Y,X){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,V,Y,X),wt.viewport(k.copy(K).multiplyScalar(vt).round())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,V,Y,X){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,V,Y,X),wt.scissor(U.copy(j).multiplyScalar(vt).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){wt.setScissorTest(at=A)},this.setOpaqueSort=function(A){It=A},this.setTransparentSort=function(A){Nt=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,Y=!0){let X=0;if(A){let G=!1;if(I!==null){const ut=I.texture.format;G=g.has(ut)}if(G){const ut=I.texture.type,St=m.has(ut),pt=ct.getClearColor(),Mt=ct.getClearAlpha(),Ot=pt.r,Wt=pt.g,Vt=pt.b;St?(v[0]=Ot,v[1]=Wt,v[2]=Vt,v[3]=Mt,B.clearBufferuiv(B.COLOR,0,v)):(M[0]=Ot,M[1]=Wt,M[2]=Vt,M[3]=Mt,B.clearBufferiv(B.COLOR,0,M))}else X|=B.COLOR_BUFFER_BIT}V&&(X|=B.DEPTH_BUFFER_BIT),Y&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ct.dispose(),st.dispose(),lt.dispose(),w.dispose(),J.dispose(),Q.dispose(),ot.dispose(),dt.dispose(),nt.dispose(),Ct.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ke),ft.removeEventListener("sessionend",ne),_e.stop()};function zt(A){A.preventDefault(),Im("WebGLRenderer: Context Lost."),b=!0}function ue(){Im("WebGLRenderer: Context Restored."),b=!1;const A=L.autoReset,V=Pt.enabled,Y=Pt.autoUpdate,X=Pt.needsUpdate,G=Pt.type;tt(),L.autoReset=A,Pt.enabled=V,Pt.autoUpdate=Y,Pt.needsUpdate=X,Pt.type=G}function yt(A){de("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const V=A.target;V.removeEventListener("dispose",Ft),Kt(V)}function Kt(A){_t(A),w.remove(A)}function _t(A){const V=w.get(A).programs;V!==void 0&&(V.forEach(function(Y){Ct.releaseProgram(Y)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Y,X,G,ut){V===null&&(V=Ut);const St=G.isMesh&&G.matrixWorld.determinant()<0,pt=Je(A,V,Y,X,G);wt.setMaterial(X,St);let Mt=Y.index,Ot=1;if(X.wireframe===!0){if(Mt=bt.getWireframeAttribute(Y),Mt===void 0)return;Ot=2}const Wt=Y.drawRange,Vt=Y.attributes.position;let ie=Wt.start*Ot,Se=(Wt.start+Wt.count)*Ot;ut!==null&&(ie=Math.max(ie,ut.start*Ot),Se=Math.min(Se,(ut.start+ut.count)*Ot)),Mt!==null?(ie=Math.max(ie,0),Se=Math.min(Se,Mt.count)):Vt!=null&&(ie=Math.max(ie,0),Se=Math.min(Se,Vt.count));const Ue=Se-ie;if(Ue<0||Ue===1/0)return;dt.setup(G,X,pt,Y,Mt);let Oe,be=F;if(Mt!==null&&(Oe=q.get(Mt),be=ht,be.setIndex(Oe)),G.isMesh)X.wireframe===!0?(wt.setLineWidth(X.wireframeLinewidth*W()),be.setMode(B.LINES)):be.setMode(B.TRIANGLES);else if(G.isLine){let Ht=X.linewidth;Ht===void 0&&(Ht=1),wt.setLineWidth(Ht*W()),G.isLineSegments?be.setMode(B.LINES):G.isLineLoop?be.setMode(B.LINE_LOOP):be.setMode(B.LINE_STRIP)}else G.isPoints?be.setMode(B.POINTS):G.isSprite&&be.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))be.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ht=G._multiDrawStarts,xe=G._multiDrawCounts,he=G._multiDrawCount,Jn=Mt?q.get(Mt).bytesPerElement:1,$s=w.get(X).currentProgram.getUniforms();for(let Qn=0;Qn<he;Qn++)$s.setValue(B,"_gl_DrawID",Qn),be.render(Ht[Qn]/Jn,xe[Qn])}else if(G.isInstancedMesh)be.renderInstances(ie,Ue,G.count);else if(Y.isInstancedBufferGeometry){const Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xe=Math.min(Y.instanceCount,Ht);be.renderInstances(ie,Ue,xe)}else be.render(ie,Ue)};function $t(A,V,Y){A.transparent===!0&&A.side===gr&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,ye(A,V,Y),A.side=ts,A.needsUpdate=!0,ye(A,V,Y),A.side=gr):ye(A,V,Y)}this.compile=function(A,V,Y=null){Y===null&&(Y=A),x=lt.get(Y),x.init(V),T.push(x),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),A!==Y&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const X=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ut=G.material;if(ut)if(Array.isArray(ut))for(let St=0;St<ut.length;St++){const pt=ut[St];$t(pt,Y,G),X.add(pt)}else $t(ut,Y,G),X.add(ut)}),x=T.pop(),X},this.compileAsync=function(A,V,Y=null){const X=this.compile(A,V,Y);return new Promise(G=>{function ut(){if(X.forEach(function(St){w.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){G(A);return}setTimeout(ut,10)}Qt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Bt=null;function Yt(A){Bt&&Bt(A)}function ke(){_e.stop()}function ne(){_e.start()}const _e=new Rx;_e.setAnimationLoop(Yt),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(A){Bt=A,ft.setAnimationLoop(A),A===null?_e.stop():_e.start()},ft.addEventListener("sessionstart",ke),ft.addEventListener("sessionend",ne),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Y=ft.enabled===!0&&ft.isPresenting===!0,X=R!==null&&(I===null||Y)&&R.begin(S,I);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(V),V=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,V,I),x=lt.get(A,T.length),x.init(V),T.push(x),ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Lt.setFromProjectionMatrix(ee,Ji,V.reversedDepth),kt=this.localClippingEnabled,mt=At.init(this.clippingPlanes,kt),y=st.get(A,E.length),y.init(),E.push(y),ft.enabled===!0&&ft.isPresenting===!0){const St=S.xr.getDepthSensingMesh();St!==null&&Ye(St,V,-1/0,S.sortObjects)}Ye(A,V,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(It,Nt),gt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,gt&&ct.addToRenderList(y,A),this.info.render.frame++,mt===!0&&At.beginShadows();const G=x.state.shadowsArray;if(Pt.render(G,A,V),mt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&R.hasRenderPass())===!1){const St=y.opaque,pt=y.transmissive;if(x.setupLights(),V.isArrayCamera){const Mt=V.cameras;if(pt.length>0)for(let Ot=0,Wt=Mt.length;Ot<Wt;Ot++){const Vt=Mt[Ot];Ee(St,pt,A,Vt)}gt&&ct.render(A);for(let Ot=0,Wt=Mt.length;Ot<Wt;Ot++){const Vt=Mt[Ot];Pe(y,A,Vt,Vt.viewport)}}else pt.length>0&&Ee(St,pt,A,V),gt&&ct.render(A),Pe(y,A,V)}I!==null&&P===0&&(z.updateMultisampleRenderTarget(I),z.updateRenderTargetMipmap(I)),X&&R.end(S),A.isScene===!0&&A.onAfterRender(S,A,V),dt.resetDefaultState(),O=-1,N=null,T.pop(),T.length>0?(x=T[T.length-1],mt===!0&&At.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Ye(A,V,Y,X){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Lt.intersectsSprite(A)){X&&rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const St=ot.update(A),pt=A.material;pt.visible&&y.push(A,St,pt,Y,rt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Lt.intersectsObject(A))){const St=ot.update(A),pt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),rt.copy(St.boundingSphere.center)),rt.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(pt)){const Mt=St.groups;for(let Ot=0,Wt=Mt.length;Ot<Wt;Ot++){const Vt=Mt[Ot],ie=pt[Vt.materialIndex];ie&&ie.visible&&y.push(A,St,ie,Y,rt.z,Vt)}}else pt.visible&&y.push(A,St,pt,Y,rt.z,null)}}const ut=A.children;for(let St=0,pt=ut.length;St<pt;St++)Ye(ut[St],V,Y,X)}function Pe(A,V,Y,X){const{opaque:G,transmissive:ut,transparent:St}=A;x.setupLightsView(Y),mt===!0&&At.setGlobalState(S.clippingPlanes,Y),X&&wt.viewport(k.copy(X)),G.length>0&&fe(G,V,Y),ut.length>0&&fe(ut,V,Y),St.length>0&&fe(St,V,Y),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ee(A,V,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[X.id]===void 0){const ie=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[X.id]=new er(1,1,{generateMipmaps:!0,type:ie?Ar:Ei,minFilter:Ms,samples:Gt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const ut=x.state.transmissionRenderTarget[X.id],St=X.viewport||k;ut.setSize(St.z*S.transmissionResolutionScale,St.w*S.transmissionResolutionScale);const pt=S.getRenderTarget(),Mt=S.getActiveCubeFace(),Ot=S.getActiveMipmapLevel();S.setRenderTarget(ut),S.getClearColor(Z),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear(),gt&&ct.render(Y);const Wt=S.toneMapping;S.toneMapping=tr;const Vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),x.setupLightsView(X),mt===!0&&At.setGlobalState(S.clippingPlanes,X),fe(A,Y,X),z.updateMultisampleRenderTarget(ut),z.updateRenderTargetMipmap(ut),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Se=0,Ue=V.length;Se<Ue;Se++){const Oe=V[Se],{object:be,geometry:Ht,material:xe,group:he}=Oe;if(xe.side===gr&&be.layers.test(X.layers)){const Jn=xe.side;xe.side=Yn,xe.needsUpdate=!0,Fn(be,Y,X,Ht,xe,he),xe.side=Jn,xe.needsUpdate=!0,ie=!0}}ie===!0&&(z.updateMultisampleRenderTarget(ut),z.updateRenderTargetMipmap(ut))}S.setRenderTarget(pt,Mt,Ot),S.setClearColor(Z,D),Vt!==void 0&&(X.viewport=Vt),S.toneMapping=Wt}function fe(A,V,Y){const X=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ut=A.length;G<ut;G++){const St=A[G],{object:pt,geometry:Mt,group:Ot}=St;let Wt=St.material;Wt.allowOverride===!0&&X!==null&&(Wt=X),pt.layers.test(Y.layers)&&Fn(pt,V,Y,Mt,Wt,Ot)}}function Fn(A,V,Y,X,G,ut){A.onBeforeRender(S,V,Y,X,G,ut),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(S,V,Y,X,A,ut),G.transparent===!0&&G.side===gr&&G.forceSinglePass===!1?(G.side=Yn,G.needsUpdate=!0,S.renderBufferDirect(Y,V,X,G,A,ut),G.side=ts,G.needsUpdate=!0,S.renderBufferDirect(Y,V,X,G,A,ut),G.side=gr):S.renderBufferDirect(Y,V,X,G,A,ut),A.onAfterRender(S,V,Y,X,G,ut)}function ye(A,V,Y){V.isScene!==!0&&(V=Ut);const X=w.get(A),G=x.state.lights,ut=x.state.shadowsArray,St=G.state.version,pt=Ct.getParameters(A,G.state,ut,V,Y),Mt=Ct.getProgramCacheKey(pt);let Ot=X.programs;X.environment=A.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(A.isMeshStandardMaterial?Q:J).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ot===void 0&&(A.addEventListener("dispose",Ft),Ot=new Map,X.programs=Ot);let Wt=Ot.get(Mt);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===St)return jn(A,pt),Wt}else pt.uniforms=Ct.getUniforms(A),A.onBeforeCompile(pt,S),Wt=Ct.acquireProgram(pt,Mt),Ot.set(Mt,Wt),X.uniforms=pt.uniforms;const Vt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=At.uniform),jn(A,pt),X.needsLights=sn(A),X.lightsStateVersion=St,X.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.directionalShadowMap.value=G.state.directionalShadowMap,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotShadowMap.value=G.state.spotShadowMap,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMap.value=G.state.pointShadowMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Wt,X.uniformsList=null,Wt}function pn(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Tc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function jn(A,V){const Y=w.get(A);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Je(A,V,Y,X,G){V.isScene!==!0&&(V=Ut),z.resetTextureUnits();const ut=V.fog,St=X.isMeshStandardMaterial?V.environment:null,pt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Va,Mt=(X.isMeshStandardMaterial?Q:J).get(X.envMap||St),Ot=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Vt=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,Se=!!Y.morphAttributes.color;let Ue=tr;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ue=S.toneMapping);const Oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,be=Oe!==void 0?Oe.length:0,Ht=w.get(X),xe=x.state.lights;if(mt===!0&&(kt===!0||A!==N)){const Tn=A===N&&X.id===O;At.setState(X,A,Tn)}let he=!1;X.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==xe.state.version||Ht.outputColorSpace!==pt||G.isBatchedMesh&&Ht.batching===!1||!G.isBatchedMesh&&Ht.batching===!0||G.isBatchedMesh&&Ht.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ht.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ht.instancing===!1||!G.isInstancedMesh&&Ht.instancing===!0||G.isSkinnedMesh&&Ht.skinning===!1||!G.isSkinnedMesh&&Ht.skinning===!0||G.isInstancedMesh&&Ht.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ht.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ht.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ht.instancingMorph===!1&&G.morphTexture!==null||Ht.envMap!==Mt||X.fog===!0&&Ht.fog!==ut||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==At.numPlanes||Ht.numIntersection!==At.numIntersection)||Ht.vertexAlphas!==Ot||Ht.vertexTangents!==Wt||Ht.morphTargets!==Vt||Ht.morphNormals!==ie||Ht.morphColors!==Se||Ht.toneMapping!==Ue||Ht.morphTargetsCount!==be)&&(he=!0):(he=!0,Ht.__version=X.version);let Jn=Ht.currentProgram;he===!0&&(Jn=ye(X,V,G));let $s=!1,Qn=!1,Qa=!1;const Ae=Jn.getUniforms(),Un=Ht.uniforms;if(wt.useProgram(Jn.program)&&($s=!0,Qn=!0,Qa=!0),X.id!==O&&(O=X.id,Qn=!0),$s||N!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ae.setValue(B,"projectionMatrix",A.projectionMatrix),Ae.setValue(B,"viewMatrix",A.matrixWorldInverse);const On=Ae.map.cameraPosition;On!==void 0&&On.setValue(B,Tt.setFromMatrixPosition(A.matrixWorld)),Gt.logarithmicDepthBuffer&&Ae.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ae.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,Qn=!0,Qa=!0)}if(Ht.needsLights&&(xe.state.directionalShadowMap.length>0&&Ae.setValue(B,"directionalShadowMap",xe.state.directionalShadowMap,z),xe.state.spotShadowMap.length>0&&Ae.setValue(B,"spotShadowMap",xe.state.spotShadowMap,z),xe.state.pointShadowMap.length>0&&Ae.setValue(B,"pointShadowMap",xe.state.pointShadowMap,z)),G.isSkinnedMesh){Ae.setOptional(B,G,"bindMatrix"),Ae.setOptional(B,G,"bindMatrixInverse");const Tn=G.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ae.setValue(B,"boneTexture",Tn.boneTexture,z))}G.isBatchedMesh&&(Ae.setOptional(B,G,"batchingTexture"),Ae.setValue(B,"batchingTexture",G._matricesTexture,z),Ae.setOptional(B,G,"batchingIdTexture"),Ae.setValue(B,"batchingIdTexture",G._indirectTexture,z),Ae.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Ae.setValue(B,"batchingColorTexture",G._colorsTexture,z));const gi=Y.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Xt.update(G,Y,Jn),(Qn||Ht.receiveShadow!==G.receiveShadow)&&(Ht.receiveShadow=G.receiveShadow,Ae.setValue(B,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Un.envMap.value=Mt,Un.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(Un.envMapIntensity.value=V.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=jw()),Qn&&(Ae.setValue(B,"toneMappingExposure",S.toneMappingExposure),Ht.needsLights&&Qe(Un,Qa),ut&&X.fog===!0&&Rt.refreshFogUniforms(Un,ut),Rt.refreshMaterialUniforms(Un,X,vt,Et,x.state.transmissionRenderTarget[A.id]),Tc.upload(B,pn(Ht),Un,z)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Tc.upload(B,pn(Ht),Un,z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ae.setValue(B,"center",G.center),Ae.setValue(B,"modelViewMatrix",G.modelViewMatrix),Ae.setValue(B,"normalMatrix",G.normalMatrix),Ae.setValue(B,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Tn=X.uniformsGroups;for(let On=0,Du=Tn.length;On<Du;On++){const is=Tn[On];nt.update(is,Jn),nt.bind(is,Jn)}}return Jn}function Qe(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function sn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,Y){const X=w.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=V,w.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const Y=w.get(A);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const ar=B.createFramebuffer();this.setRenderTarget=function(A,V=0,Y=0){I=A,C=V,P=Y;let X=null,G=!1,ut=!1;if(A){const pt=w.get(A);if(pt.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(B.FRAMEBUFFER,pt.__webglFramebuffer),k.copy(A.viewport),U.copy(A.scissor),H=A.scissorTest,wt.viewport(k),wt.scissor(U),wt.setScissorTest(H),O=-1;return}else if(pt.__webglFramebuffer===void 0)z.setupRenderTarget(A);else if(pt.__hasExternalTextures)z.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(pt.__boundDepthTexture!==Wt){if(Wt!==null&&w.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(A)}}const Mt=A.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ut=!0);const Ot=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[V])?X=Ot[V][Y]:X=Ot[V],G=!0):A.samples>0&&z.useMultisampledRTT(A)===!1?X=w.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?X=Ot[Y]:X=Ot,k.copy(A.viewport),U.copy(A.scissor),H=A.scissorTest}else k.copy(K).multiplyScalar(vt).floor(),U.copy(j).multiplyScalar(vt).floor(),H=at;if(Y!==0&&(X=ar),wt.bindFramebuffer(B.FRAMEBUFFER,X)&&wt.drawBuffers(A,X),wt.viewport(k),wt.scissor(U),wt.setScissorTest(H),G){const pt=w.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,pt.__webglTexture,Y)}else if(ut){const pt=V;for(let Mt=0;Mt<A.textures.length;Mt++){const Ot=w.get(A.textures[Mt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Mt,Ot.__webglTexture,Y,pt)}}else if(A!==null&&Y!==0){const pt=w.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pt.__webglTexture,Y)}O=-1},this.readRenderTargetPixels=function(A,V,Y,X,G,ut,St,pt=0){if(!(A&&A.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt){wt.bindFramebuffer(B.FRAMEBUFFER,Mt);try{const Ot=A.textures[pt],Wt=Ot.format,Vt=Ot.type;if(!Gt.textureFormatReadable(Wt)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Vt)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-X&&Y>=0&&Y<=A.height-G&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pt),B.readPixels(V,Y,X,G,it.convert(Wt),it.convert(Vt),ut))}finally{const Ot=I!==null?w.get(I).__webglFramebuffer:null;wt.bindFramebuffer(B.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,V,Y,X,G,ut,St,pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt)if(V>=0&&V<=A.width-X&&Y>=0&&Y<=A.height-G){wt.bindFramebuffer(B.FRAMEBUFFER,Mt);const Ot=A.textures[pt],Wt=Ot.format,Vt=Ot.type;if(!Gt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ie),B.bufferData(B.PIXEL_PACK_BUFFER,ut.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pt),B.readPixels(V,Y,X,G,it.convert(Wt),it.convert(Vt),0);const Se=I!==null?w.get(I).__webglFramebuffer:null;wt.bindFramebuffer(B.FRAMEBUFFER,Se);const Ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await yM(B,Ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ie),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ut),B.deleteBuffer(ie),B.deleteSync(Ue),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,Y=0){const X=Math.pow(2,-Y),G=Math.floor(A.image.width*X),ut=Math.floor(A.image.height*X),St=V!==null?V.x:0,pt=V!==null?V.y:0;z.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,St,pt,G,ut),wt.unbindTexture()};const Xs=B.createFramebuffer(),an=B.createFramebuffer();this.copyTextureToTexture=function(A,V,Y=null,X=null,G=0,ut=null){ut===null&&(G!==0?(nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=G,G=0):ut=0);let St,pt,Mt,Ot,Wt,Vt,ie,Se,Ue;const Oe=A.isCompressedTexture?A.mipmaps[ut]:A.image;if(Y!==null)St=Y.max.x-Y.min.x,pt=Y.max.y-Y.min.y,Mt=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,Wt=Y.min.y,Vt=Y.isBox3?Y.min.z:0;else{const gi=Math.pow(2,-G);St=Math.floor(Oe.width*gi),pt=Math.floor(Oe.height*gi),A.isDataArrayTexture?Mt=Oe.depth:A.isData3DTexture?Mt=Math.floor(Oe.depth*gi):Mt=1,Ot=0,Wt=0,Vt=0}X!==null?(ie=X.x,Se=X.y,Ue=X.z):(ie=0,Se=0,Ue=0);const be=it.convert(V.format),Ht=it.convert(V.type);let xe;V.isData3DTexture?(z.setTexture3D(V,0),xe=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(z.setTexture2DArray(V,0),xe=B.TEXTURE_2D_ARRAY):(z.setTexture2D(V,0),xe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const he=B.getParameter(B.UNPACK_ROW_LENGTH),Jn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$s=B.getParameter(B.UNPACK_SKIP_PIXELS),Qn=B.getParameter(B.UNPACK_SKIP_ROWS),Qa=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,Wt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Vt);const Ae=A.isDataArrayTexture||A.isData3DTexture,Un=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const gi=w.get(A),Tn=w.get(V),On=w.get(gi.__renderTarget),Du=w.get(Tn.__renderTarget);wt.bindFramebuffer(B.READ_FRAMEBUFFER,On.__webglFramebuffer),wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Du.__webglFramebuffer);for(let is=0;is<Mt;is++)Ae&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,w.get(A).__webglTexture,G,Vt+is),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,w.get(V).__webglTexture,ut,Ue+is)),B.blitFramebuffer(Ot,Wt,St,pt,ie,Se,St,pt,B.DEPTH_BUFFER_BIT,B.NEAREST);wt.bindFramebuffer(B.READ_FRAMEBUFFER,null),wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||w.has(A)){const gi=w.get(A),Tn=w.get(V);wt.bindFramebuffer(B.READ_FRAMEBUFFER,Xs),wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,an);for(let On=0;On<Mt;On++)Ae?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gi.__webglTexture,G,Vt+On):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gi.__webglTexture,G),Un?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tn.__webglTexture,ut,Ue+On):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tn.__webglTexture,ut),G!==0?B.blitFramebuffer(Ot,Wt,St,pt,ie,Se,St,pt,B.COLOR_BUFFER_BIT,B.NEAREST):Un?B.copyTexSubImage3D(xe,ut,ie,Se,Ue+On,Ot,Wt,St,pt):B.copyTexSubImage2D(xe,ut,ie,Se,Ot,Wt,St,pt);wt.bindFramebuffer(B.READ_FRAMEBUFFER,null),wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(xe,ut,ie,Se,Ue,St,pt,Mt,be,Ht,Oe.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(xe,ut,ie,Se,Ue,St,pt,Mt,be,Oe.data):B.texSubImage3D(xe,ut,ie,Se,Ue,St,pt,Mt,be,Ht,Oe):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ut,ie,Se,St,pt,be,Ht,Oe.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ut,ie,Se,Oe.width,Oe.height,be,Oe.data):B.texSubImage2D(B.TEXTURE_2D,ut,ie,Se,St,pt,be,Ht,Oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,he),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Jn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$s),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qa),ut===0&&V.generateMipmaps&&B.generateMipmap(xe),wt.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?z.setTextureCube(A,0):A.isData3DTexture?z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?z.setTexture2DArray(A,0):z.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,wt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class Qw{constructor(t){this.canvas=t,this.renderer=null,this.scene=null,this.camera=null,this.particles=null,this.uniforms={},this.animationId=null,this.progress=0,this.themeColor=new ge("#ff6b6b")}init(){this.renderer=new Jw({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new XM,this.camera=new Mi(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.createParticles(),this.animate(),window.addEventListener("resize",()=>this.onResize())}createParticles(){const e=new ki,n=new Float32Array(2e3*3),r=new Float32Array(2e3);for(let a=0;a<2e3;a++)n[a*3]=(Math.random()-.5)*20,n[a*3+1]=(Math.random()-.5)*20,n[a*3+2]=(Math.random()-.5)*10,r[a]=Math.random();e.setAttribute("position",new Ci(n,3)),e.setAttribute("aRandom",new Ci(r,1));const s=new Bi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uProgress:{value:0},uColor:{value:this.themeColor},uSize:{value:3},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
      `});this.particles=new jM(e,s),this.scene.add(this.particles),this.uniforms=s.uniforms}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.uniforms.uTime.value+=.01,this.uniforms.uProgress.value=this.progress,this.renderer.render(this.scene,this.camera)}setProgress(t){this.progress=t}setThemeColor(t){this.themeColor.set(t),this.uniforms.uColor&&(this.uniforms.uColor.value=this.themeColor)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.uniforms.uPixelRatio&&(this.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2))}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles?.geometry.dispose(),this.particles?.material.dispose(),this.renderer?.dispose()}}class tA{constructor(t){this.container=t,this.currentImage=null}show(t){if(!t?.src)return;this.clear();const e=document.createElement("img");e.src=t.src,e.alt=t.alt||"",e.style.cssText=`
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: ${t.opacity??1};
    `,this.container.appendChild(e),this.currentImage=e}hide(){this.clear()}clear(){this.currentImage&&(this.currentImage.remove(),this.currentImage=null)}}function wc(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function eA(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Nx(i){let t,e,n;i.length!==2?(t=wc,e=(o,l)=>wc(i(o),l),n=(o,l)=>i(o)-l):(t=i===wc||i===eA?i:nA,e=i,n=i);function r(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const f=c+u>>>1;e(o[f],l)<0?c=f+1:u=f}while(c<u)}return c}function s(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const f=c+u>>>1;e(o[f],l)<=0?c=f+1:u=f}while(c<u)}return c}function a(o,l,c=0,u=o.length){const f=r(o,l,c,u-1);return f>c&&n(o[f-1],l)>-n(o[f],l)?f-1:f}return{left:r,center:a,right:s}}function nA(){return 0}function iA(i){return i===null?NaN:+i}const rA=Nx(wc),sA=rA.right;Nx(iA).center;function aA(i,t){let e,n;if(t===void 0)for(const r of i)r!=null&&(e===void 0?r>=r&&(e=n=r):(e>r&&(e=r),n<r&&(n=r)));else{let r=-1;for(let s of i)(s=t(s,++r,i))!=null&&(e===void 0?s>=s&&(e=n=s):(e>s&&(e=s),n<s&&(n=s)))}return[e,n]}class Bs{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const s=e[r],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[n++]=o),t=a}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e=this._n,n,r,s,a=0;if(e>0){for(a=t[--e];e>0&&(n=a,r=t[--e],a=n+r,s=r-(a-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=a+r,r==n-a&&(a=n))}return a}}class cd extends Map{constructor(t,e=cA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(Eg(this,t))}has(t){return super.has(Eg(this,t))}set(t,e){return super.set(oA(this,t),e)}delete(t){return super.delete(lA(this,t))}}function Eg({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):e}function oA({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):(i.set(n,e),e)}function lA({_intern:i,_key:t},e){const n=t(e);return i.has(n)&&(e=i.get(n),i.delete(n)),e}function cA(i){return i!==null&&typeof i=="object"?i.valueOf():i}function uA(i){return i}function fA(i,...t){return hA(i,Array.from,uA,t)}function hA(i,t,e,n){return(function r(s,a){if(a>=n.length)return e(s);const o=new cd,l=n[a++];let c=-1;for(const u of s){const f=l(u,++c,s),h=o.get(f);h?h.push(u):o.set(f,[u])}for(const[u,f]of o)o.set(u,r(f,a));return t(o)})(i,0)}const dA=Math.sqrt(50),pA=Math.sqrt(10),mA=Math.sqrt(2);function qc(i,t,e){const n=(t-i)/Math.max(0,e),r=Math.floor(Math.log10(n)),s=n/Math.pow(10,r),a=s>=dA?10:s>=pA?5:s>=mA?2:1;let o,l,c;return r<0?(c=Math.pow(10,-r)/a,o=Math.round(i*c),l=Math.round(t*c),o/c<i&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*a,o=Math.round(i/c),l=Math.round(t/c),o*c<i&&++o,l*c>t&&--l),l<o&&.5<=e&&e<2?qc(i,t,e*2):[o,l,c]}function gA(i,t,e){if(t=+t,i=+i,e=+e,!(e>0))return[];if(i===t)return[i];const n=t<i,[r,s,a]=n?qc(t,i,e):qc(i,t,e);if(!(s>=r))return[];const o=s-r+1,l=new Array(o);if(n)if(a<0)for(let c=0;c<o;++c)l[c]=(s-c)/-a;else for(let c=0;c<o;++c)l[c]=(s-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(r+c)/-a;else for(let c=0;c<o;++c)l[c]=(r+c)*a;return l}function ud(i,t,e){return t=+t,i=+i,e=+e,qc(i,t,e)[2]}function _A(i,t,e){t=+t,i=+i,e=+e;const n=t<i,r=n?ud(t,i,e):ud(i,t,e);return(n?-1:1)*(r<0?1/-r:r)}function Tf(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e<n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function*xA(i){for(const t of i)yield*t}function Ix(i){return Array.from(xA(i))}function bg(i,t){let e=0;if(t===void 0)for(let n of i)(n=+n)&&(e+=n);else{let n=-1;for(let r of i)(r=+t(r,++n,i))&&(e+=r)}return e}function vA(i){return i}var wf=1,Af=2,fd=3,Mo=4,Tg=1e-6;function yA(i){return"translate("+i+",0)"}function SA(i){return"translate(0,"+i+")"}function MA(i){return t=>+i(t)}function EA(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),e=>+i(e)+t}function bA(){return!this.__axis}function Fx(i,t){var e=[],n=null,r=null,s=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=i===wf||i===Mo?-1:1,u=i===Mo||i===Af?"x":"y",f=i===wf||i===fd?yA:SA;function h(d){var p=n??(t.ticks?t.ticks.apply(t,e):t.domain()),_=r??(t.tickFormat?t.tickFormat.apply(t,e):vA),g=Math.max(s,0)+o,m=t.range(),v=+m[0]+l,M=+m[m.length-1]+l,y=(t.bandwidth?EA:MA)(t.copy(),l),x=d.selection?d.selection():d,E=x.selectAll(".domain").data([null]),T=x.selectAll(".tick").data(p,t).order(),R=T.exit(),S=T.enter().append("g").attr("class","tick"),b=T.select("line"),C=T.select("text");E=E.merge(E.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(S),b=b.merge(S.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),C=C.merge(S.append("text").attr("fill","currentColor").attr(u,c*g).attr("dy",i===wf?"0em":i===fd?"0.71em":"0.32em")),d!==x&&(E=E.transition(d),T=T.transition(d),b=b.transition(d),C=C.transition(d),R=R.transition(d).attr("opacity",Tg).attr("transform",function(P){return isFinite(P=y(P))?f(P+l):this.getAttribute("transform")}),S.attr("opacity",Tg).attr("transform",function(P){var I=this.parentNode.__axis;return f((I&&isFinite(I=I(P))?I:y(P))+l)})),R.remove(),E.attr("d",i===Mo||i===Af?a?"M"+c*a+","+v+"H"+l+"V"+M+"H"+c*a:"M"+l+","+v+"V"+M:a?"M"+v+","+c*a+"V"+l+"H"+M+"V"+c*a:"M"+v+","+l+"H"+M),T.attr("opacity",1).attr("transform",function(P){return f(y(P)+l)}),b.attr(u+"2",c*s),C.attr(u,c*g).text(_),x.filter(bA).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Af?"start":i===Mo?"end":"middle"),x.each(function(){this.__axis=y})}return h.scale=function(d){return arguments.length?(t=d,h):t},h.ticks=function(){return e=Array.from(arguments),h},h.tickArguments=function(d){return arguments.length?(e=d==null?[]:Array.from(d),h):e.slice()},h.tickValues=function(d){return arguments.length?(n=d==null?null:Array.from(d),h):n&&n.slice()},h.tickFormat=function(d){return arguments.length?(r=d,h):r},h.tickSize=function(d){return arguments.length?(s=a=+d,h):s},h.tickSizeInner=function(d){return arguments.length?(s=+d,h):s},h.tickSizeOuter=function(d){return arguments.length?(a=+d,h):a},h.tickPadding=function(d){return arguments.length?(o=+d,h):o},h.offset=function(d){return arguments.length?(l=+d,h):l},h}function TA(i){return Fx(fd,i)}function wA(i){return Fx(Mo,i)}var AA={value:()=>{}};function Ux(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new Ac(e)}function Ac(i){this._=i}function RA(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}Ac.prototype=Ux.prototype={constructor:Ac,on:function(i,t){var e=this._,n=RA(i+"",e),r,s=-1,a=n.length;if(arguments.length<2){for(;++s<a;)if((r=(i=n[s]).type)&&(r=CA(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(r=(i=n[s]).type)e[r]=wg(e[r],i.name,t);else if(t==null)for(r in e)e[r]=wg(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new Ac(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function CA(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function wg(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=AA,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var hd="http://www.w3.org/1999/xhtml";const Ag={svg:"http://www.w3.org/2000/svg",xhtml:hd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Eu(i){var t=i+="",e=t.indexOf(":");return e>=0&&(t=i.slice(0,e))!=="xmlns"&&(i=i.slice(e+1)),Ag.hasOwnProperty(t)?{space:Ag[t],local:i}:i}function PA(i){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===hd&&t.documentElement.namespaceURI===hd?t.createElement(i):t.createElementNS(e,i)}}function DA(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function Ox(i){var t=Eu(i);return(t.local?DA:PA)(t)}function LA(){}function Rp(i){return i==null?LA:function(){return this.querySelector(i)}}function NA(i){typeof i!="function"&&(i=Rp(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=new Array(a),l,c,u=0;u<a;++u)(l=s[u])&&(c=i.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),o[u]=c);return new pi(n,this._parents)}function IA(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function FA(){return[]}function Bx(i){return i==null?FA:function(){return this.querySelectorAll(i)}}function UA(i){return function(){return IA(i.apply(this,arguments))}}function OA(i){typeof i=="function"?i=UA(i):i=Bx(i);for(var t=this._groups,e=t.length,n=[],r=[],s=0;s<e;++s)for(var a=t[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(n.push(i.call(l,l.__data__,c,a)),r.push(l));return new pi(n,r)}function kx(i){return function(){return this.matches(i)}}function zx(i){return function(t){return t.matches(i)}}var BA=Array.prototype.find;function kA(i){return function(){return BA.call(this.children,i)}}function zA(){return this.firstElementChild}function VA(i){return this.select(i==null?zA:kA(typeof i=="function"?i:zx(i)))}var HA=Array.prototype.filter;function GA(){return Array.from(this.children)}function WA(i){return function(){return HA.call(this.children,i)}}function XA(i){return this.selectAll(i==null?GA:WA(typeof i=="function"?i:zx(i)))}function $A(i){typeof i!="function"&&(i=kx(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new pi(n,this._parents)}function Vx(i){return new Array(i.length)}function YA(){return new pi(this._enter||this._groups.map(Vx),this._parents)}function Kc(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}Kc.prototype={constructor:Kc,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function qA(i){return function(){return i}}function KA(i,t,e,n,r,s){for(var a=0,o,l=t.length,c=s.length;a<c;++a)(o=t[a])?(o.__data__=s[a],n[a]=o):e[a]=new Kc(i,s[a]);for(;a<l;++a)(o=t[a])&&(r[a]=o)}function ZA(i,t,e,n,r,s,a){var o,l,c=new Map,u=t.length,f=s.length,h=new Array(u),d;for(o=0;o<u;++o)(l=t[o])&&(h[o]=d=a.call(l,l.__data__,o,t)+"",c.has(d)?r[o]=l:c.set(d,l));for(o=0;o<f;++o)d=a.call(i,s[o],o,s)+"",(l=c.get(d))?(n[o]=l,l.__data__=s[o],c.delete(d)):e[o]=new Kc(i,s[o]);for(o=0;o<u;++o)(l=t[o])&&c.get(h[o])===l&&(r[o]=l)}function jA(i){return i.__data__}function JA(i,t){if(!arguments.length)return Array.from(this,jA);var e=t?ZA:KA,n=this._parents,r=this._groups;typeof i!="function"&&(i=qA(i));for(var s=r.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],f=r[c],h=f.length,d=QA(i.call(u,u&&u.__data__,c,n)),p=d.length,_=o[c]=new Array(p),g=a[c]=new Array(p),m=l[c]=new Array(h);e(u,f,_,g,m,d,t);for(var v=0,M=0,y,x;v<p;++v)if(y=_[v]){for(v>=M&&(M=v+1);!(x=g[M])&&++M<p;);y._next=x||null}}return a=new pi(a,n),a._enter=o,a._exit=l,a}function QA(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function tR(){return new pi(this._exit||this._groups.map(Vx),this._parents)}function eR(i,t,e){var n=this.enter(),r=this,s=this.exit();return typeof i=="function"?(n=i(n),n&&(n=n.selection())):n=n.append(i+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),n&&r?n.merge(r).order():r}function nR(i){for(var t=i.selection?i.selection():i,e=this._groups,n=t._groups,r=e.length,s=n.length,a=Math.min(r,s),o=new Array(r),l=0;l<a;++l)for(var c=e[l],u=n[l],f=c.length,h=o[l]=new Array(f),d,p=0;p<f;++p)(d=c[p]||u[p])&&(h[p]=d);for(;l<r;++l)o[l]=e[l];return new pi(o,this._parents)}function iR(){for(var i=this._groups,t=-1,e=i.length;++t<e;)for(var n=i[t],r=n.length-1,s=n[r],a;--r>=0;)(a=n[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function rR(i){i||(i=sR);function t(f,h){return f&&h?i(f.__data__,h.__data__):!f-!h}for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s){for(var a=e[s],o=a.length,l=r[s]=new Array(o),c,u=0;u<o;++u)(c=a[u])&&(l[u]=c);l.sort(t)}return new pi(r,this._parents).order()}function sR(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function aR(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function oR(){return Array.from(this)}function lR(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length;r<s;++r){var a=n[r];if(a)return a}return null}function cR(){let i=0;for(const t of this)++i;return i}function uR(){return!this.node()}function fR(i){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,a=r.length,o;s<a;++s)(o=r[s])&&i.call(o,o.__data__,s,r);return this}function hR(i){return function(){this.removeAttribute(i)}}function dR(i){return function(){this.removeAttributeNS(i.space,i.local)}}function pR(i,t){return function(){this.setAttribute(i,t)}}function mR(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function gR(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(i):this.setAttribute(i,e)}}function _R(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,e)}}function xR(i,t){var e=Eu(i);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?dR:hR:typeof t=="function"?e.local?_R:gR:e.local?mR:pR)(e,t))}function Hx(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function vR(i){return function(){this.style.removeProperty(i)}}function yR(i,t,e){return function(){this.style.setProperty(i,t,e)}}function SR(i,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,e)}}function MR(i,t,e){return arguments.length>1?this.each((t==null?vR:typeof t=="function"?SR:yR)(i,t,e??"")):Ga(this.node(),i)}function Ga(i,t){return i.style.getPropertyValue(t)||Hx(i).getComputedStyle(i,null).getPropertyValue(t)}function ER(i){return function(){delete this[i]}}function bR(i,t){return function(){this[i]=t}}function TR(i,t){return function(){var e=t.apply(this,arguments);e==null?delete this[i]:this[i]=e}}function wR(i,t){return arguments.length>1?this.each((t==null?ER:typeof t=="function"?TR:bR)(i,t)):this.node()[i]}function Gx(i){return i.trim().split(/^|\s+/)}function Cp(i){return i.classList||new Wx(i)}function Wx(i){this._node=i,this._names=Gx(i.getAttribute("class")||"")}Wx.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function Xx(i,t){for(var e=Cp(i),n=-1,r=t.length;++n<r;)e.add(t[n])}function $x(i,t){for(var e=Cp(i),n=-1,r=t.length;++n<r;)e.remove(t[n])}function AR(i){return function(){Xx(this,i)}}function RR(i){return function(){$x(this,i)}}function CR(i,t){return function(){(t.apply(this,arguments)?Xx:$x)(this,i)}}function PR(i,t){var e=Gx(i+"");if(arguments.length<2){for(var n=Cp(this.node()),r=-1,s=e.length;++r<s;)if(!n.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?CR:t?AR:RR)(e,t))}function DR(){this.textContent=""}function LR(i){return function(){this.textContent=i}}function NR(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function IR(i){return arguments.length?this.each(i==null?DR:(typeof i=="function"?NR:LR)(i)):this.node().textContent}function FR(){this.innerHTML=""}function UR(i){return function(){this.innerHTML=i}}function OR(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function BR(i){return arguments.length?this.each(i==null?FR:(typeof i=="function"?OR:UR)(i)):this.node().innerHTML}function kR(){this.nextSibling&&this.parentNode.appendChild(this)}function zR(){return this.each(kR)}function VR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function HR(){return this.each(VR)}function GR(i){var t=typeof i=="function"?i:Ox(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function WR(){return null}function XR(i,t){var e=typeof i=="function"?i:Ox(i),n=t==null?WR:typeof t=="function"?t:Rp(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function $R(){var i=this.parentNode;i&&i.removeChild(this)}function YR(){return this.each($R)}function qR(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function KR(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function ZR(i){return this.select(i?KR:qR)}function jR(i){return arguments.length?this.property("__data__",i):this.node().__data__}function JR(i){return function(t){i.call(this,t,this.__data__)}}function QR(i){return i.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function tC(i){return function(){var t=this.__on;if(t){for(var e=0,n=-1,r=t.length,s;e<r;++e)s=t[e],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.options):t[++n]=s;++n?t.length=n:delete this.__on}}}function eC(i,t,e){return function(){var n=this.__on,r,s=JR(t);if(n){for(var a=0,o=n.length;a<o;++a)if((r=n[a]).type===i.type&&r.name===i.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(i.type,s,e),r={type:i.type,name:i.name,value:t,listener:s,options:e},n?n.push(r):this.__on=[r]}}function nC(i,t,e){var n=QR(i+""),r,s=n.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,u;l<c;++l)for(r=0,u=o[l];r<s;++r)if((a=n[r]).type===u.type&&a.name===u.name)return u.value}return}for(o=t?eC:tC,r=0;r<s;++r)this.each(o(n[r],t,e));return this}function Yx(i,t,e){var n=Hx(i),r=n.CustomEvent;typeof r=="function"?r=new r(t,e):(r=n.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),i.dispatchEvent(r)}function iC(i,t){return function(){return Yx(this,i,t)}}function rC(i,t){return function(){return Yx(this,i,t.apply(this,arguments))}}function sC(i,t){return this.each((typeof t=="function"?rC:iC)(i,t))}function*aC(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length,a;r<s;++r)(a=n[r])&&(yield a)}var qx=[null];function pi(i,t){this._groups=i,this._parents=t}function ja(){return new pi([[document.documentElement]],qx)}function oC(){return this}pi.prototype=ja.prototype={constructor:pi,select:NA,selectAll:OA,selectChild:VA,selectChildren:XA,filter:$A,data:JA,enter:YA,exit:tR,join:eR,merge:nR,selection:oC,order:iR,sort:rR,call:aR,nodes:oR,node:lR,size:cR,empty:uR,each:fR,attr:xR,style:MR,property:wR,classed:PR,text:IR,html:BR,raise:zR,lower:HR,append:GR,insert:XR,remove:YR,clone:ZR,datum:jR,on:nC,dispatch:sC,[Symbol.iterator]:aC};function Kx(i){return typeof i=="string"?new pi([[document.querySelector(i)]],[document.documentElement]):new pi([[i]],qx)}function bu(i,t,e){i.prototype=t.prototype=e,e.constructor=i}function Pp(i,t){var e=Object.create(i.prototype);for(var n in t)e[n]=t[n];return e}function Ja(){}var ks=.7,Wa=1/ks,Ra="\\s*([+-]?\\d+)\\s*",rl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",nr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",lC=/^#([0-9a-f]{3,8})$/,cC=new RegExp(`^rgb\\(${Ra},${Ra},${Ra}\\)$`),uC=new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`),fC=new RegExp(`^rgba\\(${Ra},${Ra},${Ra},${rl}\\)$`),hC=new RegExp(`^rgba\\(${nr},${nr},${nr},${rl}\\)$`),dC=new RegExp(`^hsl\\(${rl},${nr},${nr}\\)$`),pC=new RegExp(`^hsla\\(${rl},${nr},${nr},${rl}\\)$`),Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};bu(Ja,zs,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:Cg,formatHex:Cg,formatHex8:mC,formatHsl:gC,formatRgb:Pg,toString:Pg});function Cg(){return this.rgb().formatHex()}function mC(){return this.rgb().formatHex8()}function gC(){return jx(this).formatHsl()}function Pg(){return this.rgb().formatRgb()}function zs(i){var t,e;return i=(i+"").trim().toLowerCase(),(t=lC.exec(i))?(e=t[1].length,t=parseInt(t[1],16),e===6?Dg(t):e===3?new En(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?tc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?tc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=cC.exec(i))?new En(t[1],t[2],t[3],1):(t=uC.exec(i))?new En(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=fC.exec(i))?tc(t[1],t[2],t[3],t[4]):(t=hC.exec(i))?tc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=dC.exec(i))?Ig(t[1],t[2]/100,t[3]/100,1):(t=pC.exec(i))?Ig(t[1],t[2]/100,t[3]/100,t[4]):Rg.hasOwnProperty(i)?Dg(Rg[i]):i==="transparent"?new En(NaN,NaN,NaN,0):null}function Dg(i){return new En(i>>16&255,i>>8&255,i&255,1)}function tc(i,t,e,n){return n<=0&&(i=t=e=NaN),new En(i,t,e,n)}function Zx(i){return i instanceof Ja||(i=zs(i)),i?(i=i.rgb(),new En(i.r,i.g,i.b,i.opacity)):new En}function dd(i,t,e,n){return arguments.length===1?Zx(i):new En(i,t,e,n??1)}function En(i,t,e,n){this.r=+i,this.g=+t,this.b=+e,this.opacity=+n}bu(En,dd,Pp(Ja,{brighter(i){return i=i==null?Wa:Math.pow(Wa,i),new En(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?ks:Math.pow(ks,i),new En(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new En(Ls(this.r),Ls(this.g),Ls(this.b),Zc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Lg,formatHex:Lg,formatHex8:_C,formatRgb:Ng,toString:Ng}));function Lg(){return`#${bs(this.r)}${bs(this.g)}${bs(this.b)}`}function _C(){return`#${bs(this.r)}${bs(this.g)}${bs(this.b)}${bs((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ng(){const i=Zc(this.opacity);return`${i===1?"rgb(":"rgba("}${Ls(this.r)}, ${Ls(this.g)}, ${Ls(this.b)}${i===1?")":`, ${i})`}`}function Zc(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Ls(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function bs(i){return i=Ls(i),(i<16?"0":"")+i.toString(16)}function Ig(i,t,e,n){return n<=0?i=t=e=NaN:e<=0||e>=1?i=t=NaN:t<=0&&(i=NaN),new Ui(i,t,e,n)}function jx(i){if(i instanceof Ui)return new Ui(i.h,i.s,i.l,i.opacity);if(i instanceof Ja||(i=zs(i)),!i)return new Ui;if(i instanceof Ui)return i;i=i.rgb();var t=i.r/255,e=i.g/255,n=i.b/255,r=Math.min(t,e,n),s=Math.max(t,e,n),a=NaN,o=s-r,l=(s+r)/2;return o?(t===s?a=(e-n)/o+(e<n)*6:e===s?a=(n-t)/o+2:a=(t-e)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new Ui(a,o,l,i.opacity)}function xC(i,t,e,n){return arguments.length===1?jx(i):new Ui(i,t,e,n??1)}function Ui(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}bu(Ui,xC,Pp(Ja,{brighter(i){return i=i==null?Wa:Math.pow(Wa,i),new Ui(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?ks:Math.pow(ks,i),new Ui(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,e=this.l,n=e+(e<.5?e:1-e)*t,r=2*e-n;return new En(Rf(i>=240?i-240:i+120,r,n),Rf(i,r,n),Rf(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new Ui(Fg(this.h),ec(this.s),ec(this.l),Zc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Zc(this.opacity);return`${i===1?"hsl(":"hsla("}${Fg(this.h)}, ${ec(this.s)*100}%, ${ec(this.l)*100}%${i===1?")":`, ${i})`}`}}));function Fg(i){return i=(i||0)%360,i<0?i+360:i}function ec(i){return Math.max(0,Math.min(1,i||0))}function Rf(i,t,e){return(i<60?t+(e-t)*i/60:i<180?e:i<240?t+(e-t)*(240-i)/60:t)*255}const vC=Math.PI/180,yC=180/Math.PI;var Jx=-.14861,Dp=1.78277,Lp=-.29227,Tu=-.90649,sl=1.97294,Ug=sl*Tu,Og=sl*Dp,Bg=Dp*Lp-Tu*Jx;function SC(i){if(i instanceof Ns)return new Ns(i.h,i.s,i.l,i.opacity);i instanceof En||(i=Zx(i));var t=i.r/255,e=i.g/255,n=i.b/255,r=(Bg*n+Ug*t-Og*e)/(Bg+Ug-Og),s=n-r,a=(sl*(e-r)-Lp*s)/Tu,o=Math.sqrt(a*a+s*s)/(sl*r*(1-r)),l=o?Math.atan2(a,s)*yC-120:NaN;return new Ns(l<0?l+360:l,o,r,i.opacity)}function es(i,t,e,n){return arguments.length===1?SC(i):new Ns(i,t,e,n??1)}function Ns(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}bu(Ns,es,Pp(Ja,{brighter(i){return i=i==null?Wa:Math.pow(Wa,i),new Ns(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?ks:Math.pow(ks,i),new Ns(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=isNaN(this.h)?0:(this.h+120)*vC,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),n=Math.cos(i),r=Math.sin(i);return new En(255*(t+e*(Jx*n+Dp*r)),255*(t+e*(Lp*n+Tu*r)),255*(t+e*(sl*n)),this.opacity)}}));const wu=i=>()=>i;function Qx(i,t){return function(e){return i+e*t}}function MC(i,t,e){return i=Math.pow(i,e),t=Math.pow(t,e)-i,e=1/e,function(n){return Math.pow(i+n*t,e)}}function EC(i,t){var e=t-i;return e?Qx(i,e>180||e<-180?e-360*Math.round(e/360):e):wu(isNaN(i)?t:i)}function bC(i){return(i=+i)==1?Ca:function(t,e){return e-t?MC(t,e,i):wu(isNaN(t)?e:t)}}function Ca(i,t){var e=t-i;return e?Qx(i,e):wu(isNaN(i)?t:i)}const jc=(function i(t){var e=bC(t);function n(r,s){var a=e((r=dd(r)).r,(s=dd(s)).r),o=e(r.g,s.g),l=e(r.b,s.b),c=Ca(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=l(u),r.opacity=c(u),r+""}}return n.gamma=i,n})(1);function TC(i,t){t||(t=[]);var e=i?Math.min(t.length,i.length):0,n=t.slice(),r;return function(s){for(r=0;r<e;++r)n[r]=i[r]*(1-s)+t[r]*s;return n}}function wC(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function AC(i,t){var e=t?t.length:0,n=i?Math.min(e,i.length):0,r=new Array(n),s=new Array(e),a;for(a=0;a<n;++a)r[a]=Np(i[a],t[a]);for(;a<e;++a)s[a]=t[a];return function(o){for(a=0;a<n;++a)s[a]=r[a](o);return s}}function RC(i,t){var e=new Date;return i=+i,t=+t,function(n){return e.setTime(i*(1-n)+t*n),e}}function Ii(i,t){return i=+i,t=+t,function(e){return i*(1-e)+t*e}}function CC(i,t){var e={},n={},r;(i===null||typeof i!="object")&&(i={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in i?e[r]=Np(i[r],t[r]):n[r]=t[r];return function(s){for(r in e)n[r]=e[r](s);return n}}var pd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cf=new RegExp(pd.source,"g");function PC(i){return function(){return i}}function DC(i){return function(t){return i(t)+""}}function tv(i,t){var e=pd.lastIndex=Cf.lastIndex=0,n,r,s,a=-1,o=[],l=[];for(i=i+"",t=t+"";(n=pd.exec(i))&&(r=Cf.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),o[a]?o[a]+=s:o[++a]=s),(n=n[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:Ii(n,r)})),e=Cf.lastIndex;return e<t.length&&(s=t.slice(e),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?DC(l[0].x):PC(t):(t=l.length,function(c){for(var u=0,f;u<t;++u)o[(f=l[u]).i]=f.x(c);return o.join("")})}function Np(i,t){var e=typeof t,n;return t==null||e==="boolean"?wu(t):(e==="number"?Ii:e==="string"?(n=zs(t))?(t=n,jc):tv:t instanceof zs?jc:t instanceof Date?RC:wC(t)?TC:Array.isArray(t)?AC:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?CC:Ii)(i,t)}function LC(i,t){return i=+i,t=+t,function(e){return Math.round(i*(1-e)+t*e)}}var kg=180/Math.PI,md={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ev(i,t,e,n,r,s){var a,o,l;return(a=Math.sqrt(i*i+t*t))&&(i/=a,t/=a),(l=i*e+t*n)&&(e-=i*l,n-=t*l),(o=Math.sqrt(e*e+n*n))&&(e/=o,n/=o,l/=o),i*n<t*e&&(i=-i,t=-t,l=-l,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(t,i)*kg,skewX:Math.atan(l)*kg,scaleX:a,scaleY:o}}var nc;function NC(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?md:ev(t.a,t.b,t.c,t.d,t.e,t.f)}function IC(i){return i==null||(nc||(nc=document.createElementNS("http://www.w3.org/2000/svg","g")),nc.setAttribute("transform",i),!(i=nc.transform.baseVal.consolidate()))?md:(i=i.matrix,ev(i.a,i.b,i.c,i.d,i.e,i.f))}function nv(i,t,e,n){function r(c){return c.length?c.pop()+" ":""}function s(c,u,f,h,d,p){if(c!==f||u!==h){var _=d.push("translate(",null,t,null,e);p.push({i:_-4,x:Ii(c,f)},{i:_-2,x:Ii(u,h)})}else(f||h)&&d.push("translate("+f+t+h+e)}function a(c,u,f,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:f.push(r(f)+"rotate(",null,n)-2,x:Ii(c,u)})):u&&f.push(r(f)+"rotate("+u+n)}function o(c,u,f,h){c!==u?h.push({i:f.push(r(f)+"skewX(",null,n)-2,x:Ii(c,u)}):u&&f.push(r(f)+"skewX("+u+n)}function l(c,u,f,h,d,p){if(c!==f||u!==h){var _=d.push(r(d)+"scale(",null,",",null,")");p.push({i:_-4,x:Ii(c,f)},{i:_-2,x:Ii(u,h)})}else(f!==1||h!==1)&&d.push(r(d)+"scale("+f+","+h+")")}return function(c,u){var f=[],h=[];return c=i(c),u=i(u),s(c.translateX,c.translateY,u.translateX,u.translateY,f,h),a(c.rotate,u.rotate,f,h),o(c.skewX,u.skewX,f,h),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,h),c=u=null,function(d){for(var p=-1,_=h.length,g;++p<_;)f[(g=h[p]).i]=g.x(d);return f.join("")}}}var FC=nv(NC,"px, ","px)","deg)"),UC=nv(IC,", ",")",")");function iv(i){return(function t(e){e=+e;function n(r,s){var a=i((r=es(r)).h,(s=es(s)).h),o=Ca(r.s,s.s),l=Ca(r.l,s.l),c=Ca(r.opacity,s.opacity);return function(u){return r.h=a(u),r.s=o(u),r.l=l(Math.pow(u,e)),r.opacity=c(u),r+""}}return n.gamma=t,n})(1)}iv(EC);var rv=iv(Ca),Xa=0,Eo=0,uo=0,sv=1e3,Jc,bo,Qc=0,Vs=0,Au=0,al=typeof performance=="object"&&performance.now?performance:Date,av=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Ip(){return Vs||(av(OC),Vs=al.now()+Au)}function OC(){Vs=0}function tu(){this._call=this._time=this._next=null}tu.prototype=ov.prototype={constructor:tu,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?Ip():+e)+(t==null?0:+t),!this._next&&bo!==this&&(bo?bo._next=this:Jc=this,bo=this),this._call=i,this._time=e,gd()},stop:function(){this._call&&(this._call=null,this._time=1/0,gd())}};function ov(i,t,e){var n=new tu;return n.restart(i,t,e),n}function BC(){Ip(),++Xa;for(var i=Jc,t;i;)(t=Vs-i._time)>=0&&i._call.call(void 0,t),i=i._next;--Xa}function zg(){Vs=(Qc=al.now())+Au,Xa=Eo=0;try{BC()}finally{Xa=0,zC(),Vs=0}}function kC(){var i=al.now(),t=i-Qc;t>sv&&(Au-=t,Qc=i)}function zC(){for(var i,t=Jc,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:Jc=e);bo=i,gd(n)}function gd(i){if(!Xa){Eo&&(Eo=clearTimeout(Eo));var t=i-Vs;t>24?(i<1/0&&(Eo=setTimeout(zg,i-al.now()-Au)),uo&&(uo=clearInterval(uo))):(uo||(Qc=al.now(),uo=setInterval(kC,sv)),Xa=1,av(zg))}}function Vg(i,t,e){var n=new tu;return t=t==null?0:+t,n.restart(r=>{n.stop(),i(r+t)},t,e),n}var VC=Ux("start","end","cancel","interrupt"),HC=[],lv=0,Hg=1,_d=2,Rc=3,Gg=4,xd=5,Cc=6;function Ru(i,t,e,n,r,s){var a=i.__transition;if(!a)i.__transition={};else if(e in a)return;GC(i,e,{name:t,index:n,group:r,on:VC,tween:HC,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:lv})}function Fp(i,t){var e=zi(i,t);if(e.state>lv)throw new Error("too late; already scheduled");return e}function sr(i,t){var e=zi(i,t);if(e.state>Rc)throw new Error("too late; already running");return e}function zi(i,t){var e=i.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function GC(i,t,e){var n=i.__transition,r;n[t]=e,e.timer=ov(s,0,e.time);function s(c){e.state=Hg,e.timer.restart(a,e.delay,e.time),e.delay<=c&&a(c-e.delay)}function a(c){var u,f,h,d;if(e.state!==Hg)return l();for(u in n)if(d=n[u],d.name===e.name){if(d.state===Rc)return Vg(a);d.state===Gg?(d.state=Cc,d.timer.stop(),d.on.call("interrupt",i,i.__data__,d.index,d.group),delete n[u]):+u<t&&(d.state=Cc,d.timer.stop(),d.on.call("cancel",i,i.__data__,d.index,d.group),delete n[u])}if(Vg(function(){e.state===Rc&&(e.state=Gg,e.timer.restart(o,e.delay,e.time),o(c))}),e.state=_d,e.on.call("start",i,i.__data__,e.index,e.group),e.state===_d){for(e.state=Rc,r=new Array(h=e.tween.length),u=0,f=-1;u<h;++u)(d=e.tween[u].value.call(i,i.__data__,e.index,e.group))&&(r[++f]=d);r.length=f+1}}function o(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=xd,1),f=-1,h=r.length;++f<h;)r[f].call(i,u);e.state===xd&&(e.on.call("end",i,i.__data__,e.index,e.group),l())}function l(){e.state=Cc,e.timer.stop(),delete n[t];for(var c in n)return;delete i.__transition}}function WC(i,t){var e=i.__transition,n,r,s=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((n=e[a]).name!==t){s=!1;continue}r=n.state>_d&&n.state<xd,n.state=Cc,n.timer.stop(),n.on.call(r?"interrupt":"cancel",i,i.__data__,n.index,n.group),delete e[a]}s&&delete i.__transition}}function XC(i){return this.each(function(){WC(this,i)})}function $C(i,t){var e,n;return function(){var r=sr(this,i),s=r.tween;if(s!==e){n=e=s;for(var a=0,o=n.length;a<o;++a)if(n[a].name===t){n=n.slice(),n.splice(a,1);break}}r.tween=n}}function YC(i,t,e){var n,r;if(typeof e!="function")throw new Error;return function(){var s=sr(this,i),a=s.tween;if(a!==n){r=(n=a).slice();for(var o={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=o;break}l===c&&r.push(o)}s.tween=r}}function qC(i,t){var e=this._id;if(i+="",arguments.length<2){for(var n=zi(this.node(),e).tween,r=0,s=n.length,a;r<s;++r)if((a=n[r]).name===i)return a.value;return null}return this.each((t==null?$C:YC)(e,i,t))}function Up(i,t,e){var n=i._id;return i.each(function(){var r=sr(this,n);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return zi(r,n).value[t]}}function cv(i,t){var e;return(typeof t=="number"?Ii:t instanceof zs?jc:(e=zs(t))?(t=e,jc):tv)(i,t)}function KC(i){return function(){this.removeAttribute(i)}}function ZC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function jC(i,t,e){var n,r=e+"",s;return function(){var a=this.getAttribute(i);return a===r?null:a===n?s:s=t(n=a,e)}}function JC(i,t,e){var n,r=e+"",s;return function(){var a=this.getAttributeNS(i.space,i.local);return a===r?null:a===n?s:s=t(n=a,e)}}function QC(i,t,e){var n,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttribute(i):(a=this.getAttribute(i),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o)))}}function tP(i,t,e){var n,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttributeNS(i.space,i.local):(a=this.getAttributeNS(i.space,i.local),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o)))}}function eP(i,t){var e=Eu(i),n=e==="transform"?UC:cv;return this.attrTween(i,typeof t=="function"?(e.local?tP:QC)(e,n,Up(this,"attr."+i,t)):t==null?(e.local?ZC:KC)(e):(e.local?JC:jC)(e,n,t))}function nP(i,t){return function(e){this.setAttribute(i,t.call(this,e))}}function iP(i,t){return function(e){this.setAttributeNS(i.space,i.local,t.call(this,e))}}function rP(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&iP(i,s)),e}return r._value=t,r}function sP(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&nP(i,s)),e}return r._value=t,r}function aP(i,t){var e="attr."+i;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var n=Eu(i);return this.tween(e,(n.local?rP:sP)(n,t))}function oP(i,t){return function(){Fp(this,i).delay=+t.apply(this,arguments)}}function lP(i,t){return t=+t,function(){Fp(this,i).delay=t}}function cP(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?oP:lP)(t,i)):zi(this.node(),t).delay}function uP(i,t){return function(){sr(this,i).duration=+t.apply(this,arguments)}}function fP(i,t){return t=+t,function(){sr(this,i).duration=t}}function hP(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?uP:fP)(t,i)):zi(this.node(),t).duration}function dP(i,t){if(typeof t!="function")throw new Error;return function(){sr(this,i).ease=t}}function pP(i){var t=this._id;return arguments.length?this.each(dP(t,i)):zi(this.node(),t).ease}function mP(i,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;sr(this,i).ease=e}}function gP(i){if(typeof i!="function")throw new Error;return this.each(mP(this._id,i))}function _P(i){typeof i!="function"&&(i=kx(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new Dr(n,this._parents,this._name,this._id)}function xP(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,e=i._groups,n=t.length,r=e.length,s=Math.min(n,r),a=new Array(n),o=0;o<s;++o)for(var l=t[o],c=e[o],u=l.length,f=a[o]=new Array(u),h,d=0;d<u;++d)(h=l[d]||c[d])&&(f[d]=h);for(;o<n;++o)a[o]=t[o];return new Dr(a,this._parents,this._name,this._id)}function vP(i){return(i+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function yP(i,t,e){var n,r,s=vP(t)?Fp:sr;return function(){var a=s(this,i),o=a.on;o!==n&&(r=(n=o).copy()).on(t,e),a.on=r}}function SP(i,t){var e=this._id;return arguments.length<2?zi(this.node(),e).on.on(i):this.each(yP(e,i,t))}function MP(i){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==i)return;t&&t.removeChild(this)}}function EP(){return this.on("end.remove",MP(this._id))}function bP(i){var t=this._name,e=this._id;typeof i!="function"&&(i=Rp(i));for(var n=this._groups,r=n.length,s=new Array(r),a=0;a<r;++a)for(var o=n[a],l=o.length,c=s[a]=new Array(l),u,f,h=0;h<l;++h)(u=o[h])&&(f=i.call(u,u.__data__,h,o))&&("__data__"in u&&(f.__data__=u.__data__),c[h]=f,Ru(c[h],t,e,h,c,zi(u,e)));return new Dr(s,this._parents,t,e)}function TP(i){var t=this._name,e=this._id;typeof i!="function"&&(i=Bx(i));for(var n=this._groups,r=n.length,s=[],a=[],o=0;o<r;++o)for(var l=n[o],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var h=i.call(u,u.__data__,f,l),d,p=zi(u,e),_=0,g=h.length;_<g;++_)(d=h[_])&&Ru(d,t,e,_,h,p);s.push(h),a.push(u)}return new Dr(s,a,t,e)}var wP=ja.prototype.constructor;function AP(){return new wP(this._groups,this._parents)}function RP(i,t){var e,n,r;return function(){var s=Ga(this,i),a=(this.style.removeProperty(i),Ga(this,i));return s===a?null:s===e&&a===n?r:r=t(e=s,n=a)}}function uv(i){return function(){this.style.removeProperty(i)}}function CP(i,t,e){var n,r=e+"",s;return function(){var a=Ga(this,i);return a===r?null:a===n?s:s=t(n=a,e)}}function PP(i,t,e){var n,r,s;return function(){var a=Ga(this,i),o=e(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(i),Ga(this,i))),a===l?null:a===n&&l===r?s:(r=l,s=t(n=a,o))}}function DP(i,t){var e,n,r,s="style."+t,a="end."+s,o;return function(){var l=sr(this,i),c=l.on,u=l.value[s]==null?o||(o=uv(t)):void 0;(c!==e||r!==u)&&(n=(e=c).copy()).on(a,r=u),l.on=n}}function LP(i,t,e){var n=(i+="")=="transform"?FC:cv;return t==null?this.styleTween(i,RP(i,n)).on("end.style."+i,uv(i)):typeof t=="function"?this.styleTween(i,PP(i,n,Up(this,"style."+i,t))).each(DP(this._id,i)):this.styleTween(i,CP(i,n,t),e).on("end.style."+i,null)}function NP(i,t,e){return function(n){this.style.setProperty(i,t.call(this,n),e)}}function IP(i,t,e){var n,r;function s(){var a=t.apply(this,arguments);return a!==r&&(n=(r=a)&&NP(i,a,e)),n}return s._value=t,s}function FP(i,t,e){var n="style."+(i+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,IP(i,t,e??""))}function UP(i){return function(){this.textContent=i}}function OP(i){return function(){var t=i(this);this.textContent=t??""}}function BP(i){return this.tween("text",typeof i=="function"?OP(Up(this,"text",i)):UP(i==null?"":i+""))}function kP(i){return function(t){this.textContent=i.call(this,t)}}function zP(i){var t,e;function n(){var r=i.apply(this,arguments);return r!==e&&(t=(e=r)&&kP(r)),t}return n._value=i,n}function VP(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,zP(i))}function HP(){for(var i=this._name,t=this._id,e=fv(),n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var u=zi(l,t);Ru(l,i,e,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Dr(n,this._parents,i,e)}function GP(){var i,t,e=this,n=e._id,r=e.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--r===0&&s()}};e.each(function(){var c=sr(this,n),u=c.on;u!==i&&(t=(i=u).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),r===0&&s()})}var WP=0;function Dr(i,t,e,n){this._groups=i,this._parents=t,this._name=e,this._id=n}function vd(i){return ja().transition(i)}function fv(){return++WP}var hr=ja.prototype;Dr.prototype=vd.prototype={constructor:Dr,select:bP,selectAll:TP,selectChild:hr.selectChild,selectChildren:hr.selectChildren,filter:_P,merge:xP,selection:AP,transition:HP,call:hr.call,nodes:hr.nodes,node:hr.node,size:hr.size,empty:hr.empty,each:hr.each,on:SP,attr:eP,attrTween:aP,style:LP,styleTween:FP,text:BP,textTween:VP,remove:EP,tween:qC,delay:cP,duration:hP,ease:pP,easeVarying:gP,end:GP,[Symbol.iterator]:hr[Symbol.iterator]};function Wo(i){return--i*i*i+1}function yd(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var XP={time:null,delay:0,duration:250,ease:yd};function $P(i,t){for(var e;!(e=i.__transition)||!(e=e[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return e}function YP(i){var t,e;i instanceof Dr?(t=i._id,i=i._name):(t=fv(),(e=XP).time=Ip(),i=i==null?null:i+"");for(var n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Ru(l,i,t,c,a,e||$P(l,t));return new Dr(n,this._parents,i,t)}ja.prototype.interrupt=XC;ja.prototype.transition=YP;const Sd=Math.PI,Md=2*Sd,_s=1e-6,qP=Md-_s;function hv(i){this._+=i[0];for(let t=1,e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function KP(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return hv;const e=10**t;return function(n){this._+=n[0];for(let r=1,s=n.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+n[r]}}class ZP{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?hv:KP(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,r){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(t,e,n,r,s,a){this._append`C${+t},${+e},${+n},${+r},${this._x1=+s},${this._y1=+a}`}arcTo(t,e,n,r,s){if(t=+t,e=+e,n=+n,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let a=this._x1,o=this._y1,l=n-t,c=r-e,u=a-t,f=o-e,h=u*u+f*f;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(h>_s)if(!(Math.abs(f*l-c*u)>_s)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let d=n-a,p=r-o,_=l*l+c*c,g=d*d+p*p,m=Math.sqrt(_),v=Math.sqrt(h),M=s*Math.tan((Sd-Math.acos((_+h-g)/(2*m*v)))/2),y=M/v,x=M/m;Math.abs(y-1)>_s&&this._append`L${t+y*u},${e+y*f}`,this._append`A${s},${s},0,0,${+(f*d>u*p)},${this._x1=t+x*l},${this._y1=e+x*c}`}}arc(t,e,n,r,s,a){if(t=+t,e=+e,n=+n,a=!!a,n<0)throw new Error(`negative radius: ${n}`);let o=n*Math.cos(r),l=n*Math.sin(r),c=t+o,u=e+l,f=1^a,h=a?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>_s||Math.abs(this._y1-u)>_s)&&this._append`L${c},${u}`,n&&(h<0&&(h=h%Md+Md),h>qP?this._append`A${n},${n},0,1,${f},${t-o},${e-l}A${n},${n},0,1,${f},${this._x1=c},${this._y1=u}`:h>_s&&this._append`A${n},${n},0,${+(h>=Sd)},${f},${this._x1=t+n*Math.cos(s)},${this._y1=e+n*Math.sin(s)}`)}rect(t,e,n,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}}var Wg={},Pf={},Df=34,fo=10,Lf=13;function dv(i){return new Function("d","return {"+i.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function jP(i,t){var e=dv(i);return function(n,r){return t(e(n),r,i)}}function Xg(i){var t=Object.create(null),e=[];return i.forEach(function(n){for(var r in n)r in t||e.push(t[r]=r)}),e}function zn(i,t){var e=i+"",n=e.length;return n<t?new Array(t-n+1).join(0)+e:e}function JP(i){return i<0?"-"+zn(-i,6):i>9999?"+"+zn(i,6):zn(i,4)}function QP(i){var t=i.getUTCHours(),e=i.getUTCMinutes(),n=i.getUTCSeconds(),r=i.getUTCMilliseconds();return isNaN(i)?"Invalid Date":JP(i.getUTCFullYear())+"-"+zn(i.getUTCMonth()+1,2)+"-"+zn(i.getUTCDate(),2)+(r?"T"+zn(t,2)+":"+zn(e,2)+":"+zn(n,2)+"."+zn(r,3)+"Z":n?"T"+zn(t,2)+":"+zn(e,2)+":"+zn(n,2)+"Z":e||t?"T"+zn(t,2)+":"+zn(e,2)+"Z":"")}function t2(i){var t=new RegExp('["'+i+`
\r]`),e=i.charCodeAt(0);function n(f,h){var d,p,_=r(f,function(g,m){if(d)return d(g,m-1);p=g,d=h?jP(g,h):dv(g)});return _.columns=p||[],_}function r(f,h){var d=[],p=f.length,_=0,g=0,m,v=p<=0,M=!1;f.charCodeAt(p-1)===fo&&--p,f.charCodeAt(p-1)===Lf&&--p;function y(){if(v)return Pf;if(M)return M=!1,Wg;var E,T=_,R;if(f.charCodeAt(T)===Df){for(;_++<p&&f.charCodeAt(_)!==Df||f.charCodeAt(++_)===Df;);return(E=_)>=p?v=!0:(R=f.charCodeAt(_++))===fo?M=!0:R===Lf&&(M=!0,f.charCodeAt(_)===fo&&++_),f.slice(T+1,E-1).replace(/""/g,'"')}for(;_<p;){if((R=f.charCodeAt(E=_++))===fo)M=!0;else if(R===Lf)M=!0,f.charCodeAt(_)===fo&&++_;else if(R!==e)continue;return f.slice(T,E)}return v=!0,f.slice(T,p)}for(;(m=y())!==Pf;){for(var x=[];m!==Wg&&m!==Pf;)x.push(m),m=y();h&&(x=h(x,g++))==null||d.push(x)}return d}function s(f,h){return f.map(function(d){return h.map(function(p){return u(d[p])}).join(i)})}function a(f,h){return h==null&&(h=Xg(f)),[h.map(u).join(i)].concat(s(f,h)).join(`
`)}function o(f,h){return h==null&&(h=Xg(f)),s(f,h).join(`
`)}function l(f){return f.map(c).join(`
`)}function c(f){return f.map(u).join(i)}function u(f){return f==null?"":f instanceof Date?QP(f):t.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:n,parseRows:r,format:a,formatBody:o,formatRows:l,formatRow:c,formatValue:u}}var e2=t2(","),n2=e2.parse;function i2(i){for(var t in i){var e=i[t].trim(),n,r;if(!e)e=null;else if(e==="true")e=!0;else if(e==="false")e=!1;else if(e==="NaN")e=NaN;else if(!isNaN(n=+e))e=n;else if(r=e.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))r2&&r[4]&&!r[7]&&(e=e.replace(/-/g,"/").replace(/T/," ")),e=new Date(e);else continue;i[t]=e}return i}const r2=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function s2(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);return i.text()}function a2(i,t){return fetch(i,t).then(s2)}function o2(i){return function(t,e,n){return arguments.length===2&&typeof e=="function"&&(n=e,e=void 0),a2(t,e).then(function(r){return i(r,n)})}}var l2=o2(n2);function c2(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);if(!(i.status===204||i.status===205))return i.json()}function pv(i,t){return fetch(i,t).then(c2)}function u2(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function eu(i,t){if(!isFinite(i)||i===0)return null;var e=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"),n=i.slice(0,e);return[n.length>1?n[0]+n.slice(2):n,+i.slice(e+1)]}function $a(i){return i=eu(Math.abs(i)),i?i[1]:NaN}function f2(i,t){return function(e,n){for(var r=e.length,s=[],a=0,o=i[0],l=0;r>0&&o>0&&(l+o+1>n&&(o=Math.max(1,n-l)),s.push(e.substring(r-=o,r+o)),!((l+=o+1)>n));)o=i[a=(a+1)%i.length];return s.reverse().join(t)}}function h2(i){return function(t){return t.replace(/[0-9]/g,function(e){return i[+e]})}}var d2=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function nu(i){if(!(t=d2.exec(i)))throw new Error("invalid format: "+i);var t;return new Op({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}nu.prototype=Op.prototype;function Op(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Op.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function p2(i){t:for(var t=i.length,e=1,n=-1,r;e<t;++e)switch(i[e]){case".":n=r=e;break;case"0":n===0&&(n=e),r=e;break;default:if(!+i[e])break t;n>0&&(n=0);break}return n>0?i.slice(0,n)+i.slice(r+1):i}var iu;function m2(i,t){var e=eu(i,t);if(!e)return iu=void 0,i.toPrecision(t);var n=e[0],r=e[1],s=r-(iu=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=n.length;return s===a?n:s>a?n+new Array(s-a+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+eu(i,Math.max(0,t+s-1))[0]}function $g(i,t){var e=eu(i,t);if(!e)return i+"";var n=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+n:n.length>r+1?n.slice(0,r+1)+"."+n.slice(r+1):n+new Array(r-n.length+2).join("0")}const Yg={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:u2,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>$g(i*100,t),r:$g,s:m2,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function qg(i){return i}var Kg=Array.prototype.map,Zg=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function g2(i){var t=i.grouping===void 0||i.thousands===void 0?qg:f2(Kg.call(i.grouping,Number),i.thousands+""),e=i.currency===void 0?"":i.currency[0]+"",n=i.currency===void 0?"":i.currency[1]+"",r=i.decimal===void 0?".":i.decimal+"",s=i.numerals===void 0?qg:h2(Kg.call(i.numerals,String)),a=i.percent===void 0?"%":i.percent+"",o=i.minus===void 0?"−":i.minus+"",l=i.nan===void 0?"NaN":i.nan+"";function c(f,h){f=nu(f);var d=f.fill,p=f.align,_=f.sign,g=f.symbol,m=f.zero,v=f.width,M=f.comma,y=f.precision,x=f.trim,E=f.type;E==="n"?(M=!0,E="g"):Yg[E]||(y===void 0&&(y=12),x=!0,E="g"),(m||d==="0"&&p==="=")&&(m=!0,d="0",p="=");var T=(h&&h.prefix!==void 0?h.prefix:"")+(g==="$"?e:g==="#"&&/[boxX]/.test(E)?"0"+E.toLowerCase():""),R=(g==="$"?n:/[%p]/.test(E)?a:"")+(h&&h.suffix!==void 0?h.suffix:""),S=Yg[E],b=/[defgprs%]/.test(E);y=y===void 0?6:/[gprs]/.test(E)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function C(P){var I=T,O=R,N,k,U;if(E==="c")O=S(P)+O,P="";else{P=+P;var H=P<0||1/P<0;if(P=isNaN(P)?l:S(Math.abs(P),y),x&&(P=p2(P)),H&&+P==0&&_!=="+"&&(H=!1),I=(H?_==="("?_:o:_==="-"||_==="("?"":_)+I,O=(E==="s"&&!isNaN(P)&&iu!==void 0?Zg[8+iu/3]:"")+O+(H&&_==="("?")":""),b){for(N=-1,k=P.length;++N<k;)if(U=P.charCodeAt(N),48>U||U>57){O=(U===46?r+P.slice(N+1):P.slice(N))+O,P=P.slice(0,N);break}}}M&&!m&&(P=t(P,1/0));var Z=I.length+P.length+O.length,D=Z<v?new Array(v-Z+1).join(d):"";switch(M&&m&&(P=t(D+P,D.length?v-O.length:1/0),D=""),p){case"<":P=I+P+O+D;break;case"=":P=I+D+P+O;break;case"^":P=D.slice(0,Z=D.length>>1)+I+P+O+D.slice(Z);break;default:P=D+I+P+O;break}return s(P)}return C.toString=function(){return f+""},C}function u(f,h){var d=Math.max(-8,Math.min(8,Math.floor($a(h)/3)))*3,p=Math.pow(10,-d),_=c((f=nu(f),f.type="f",f),{suffix:Zg[8+d/3]});return function(g){return _(p*g)}}return{format:c,formatPrefix:u}}var ic,ga,mv;_2({thousands:",",grouping:[3],currency:["$",""]});function _2(i){return ic=g2(i),ga=ic.format,mv=ic.formatPrefix,ic}function x2(i){return Math.max(0,-$a(Math.abs(i)))}function v2(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor($a(t)/3)))*3-$a(Math.abs(i)))}function y2(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,$a(t)-$a(i))+1}var Ce=1e-6,le=Math.PI,Hn=le/2,jg=le/4,mi=le*2,ii=180/le,Ze=le/180,Fe=Math.abs,gv=Math.atan,ol=Math.atan2,He=Math.cos,S2=Math.exp,M2=Math.log,Ge=Math.sin,E2=Math.sign||function(i){return i>0?1:i<0?-1:0},Ws=Math.sqrt,b2=Math.tan;function T2(i){return i>1?0:i<-1?le:Math.acos(i)}function ll(i){return i>1?Hn:i<-1?-Hn:Math.asin(i)}function Ai(){}function ru(i,t){i&&Qg.hasOwnProperty(i.type)&&Qg[i.type](i,t)}var Jg={Feature:function(i,t){ru(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)ru(e[n].geometry,t)}},Qg={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){Ed(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Ed(e[n],t,0)},Polygon:function(i,t){t_(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)t_(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)ru(e[n],t)}};function Ed(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function t_(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)Ed(i[e],t,1);t.polygonEnd()}function ha(i,t){i&&Jg.hasOwnProperty(i.type)?Jg[i.type](i,t):ru(i,t)}function bd(i){return[ol(i[1],i[0]),ll(i[2])]}function Ya(i){var t=i[0],e=i[1],n=He(e);return[n*He(t),n*Ge(t),Ge(e)]}function rc(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function su(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Nf(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function sc(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Td(i){var t=Ws(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function wd(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function Ad(i,t){return Fe(i)>le&&(i-=Math.round(i/mi)*mi),[i,t]}Ad.invert=Ad;function _v(i,t,e){return(i%=mi)?t||e?wd(n_(i),i_(t,e)):n_(i):t||e?i_(t,e):Ad}function e_(i){return function(t,e){return t+=i,Fe(t)>le&&(t-=Math.round(t/mi)*mi),[t,e]}}function n_(i){var t=e_(i);return t.invert=e_(-i),t}function i_(i,t){var e=He(i),n=Ge(i),r=He(t),s=Ge(t);function a(o,l){var c=He(l),u=He(o)*c,f=Ge(o)*c,h=Ge(l),d=h*e+u*n;return[ol(f*r-d*s,u*e-h*n),ll(d*r+f*s)]}return a.invert=function(o,l){var c=He(l),u=He(o)*c,f=Ge(o)*c,h=Ge(l),d=h*r-f*s;return[ol(f*r+h*s,u*e+d*n),ll(d*e-u*n)]},a}function w2(i){i=_v(i[0]*Ze,i[1]*Ze,i.length>2?i[2]*Ze:0);function t(e){return e=i(e[0]*Ze,e[1]*Ze),e[0]*=ii,e[1]*=ii,e}return t.invert=function(e){return e=i.invert(e[0]*Ze,e[1]*Ze),e[0]*=ii,e[1]*=ii,e},t}function A2(i,t,e,n,r,s){if(e){var a=He(t),o=Ge(t),l=n*e;r==null?(r=t+n*mi,s=t-l/2):(r=r_(a,r),s=r_(a,s),(n>0?r<s:r>s)&&(r+=n*mi));for(var c,u=r;n>0?u>s:u<s;u-=l)c=bd([a,-o*He(u),-o*Ge(u)]),i.point(c[0],c[1])}}function r_(i,t){t=Ya(t),t[0]-=i,Td(t);var e=T2(-t[1]);return((-t[2]<0?-e:e)+mi-Ce)%mi}function xv(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:Ai,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Pc(i,t){return Fe(i[0]-t[0])<Ce&&Fe(i[1]-t[1])<Ce}function ac(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function vv(i,t,e,n,r){var s=[],a=[],o,l;if(i.forEach(function(p){if(!((_=p.length-1)<=0)){var _,g=p[0],m=p[_],v;if(Pc(g,m)){if(!g[2]&&!m[2]){for(r.lineStart(),o=0;o<_;++o)r.point((g=p[o])[0],g[1]);r.lineEnd();return}m[0]+=2*Ce}s.push(v=new ac(g,p,null,!0)),a.push(v.o=new ac(g,null,v,!1)),s.push(v=new ac(m,p,null,!1)),a.push(v.o=new ac(m,null,v,!0))}}),!!s.length){for(a.sort(t),s_(s),s_(a),o=0,l=a.length;o<l;++o)a[o].e=e=!e;for(var c=s[0],u,f;;){for(var h=c,d=!0;h.v;)if((h=h.n)===c)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,l=u.length;o<l;++o)r.point((f=u[o])[0],f[1]);else n(h.x,h.n.x,1,r);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)r.point((f=u[o])[0],f[1]);else n(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);r.lineEnd()}}}function s_(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function If(i){return Fe(i[0])<=le?i[0]:E2(i[0])*((Fe(i[0])+le)%mi-le)}function R2(i,t){var e=If(t),n=t[1],r=Ge(n),s=[Ge(e),-He(e),0],a=0,o=0,l=new Bs;r===1?n=Hn+Ce:r===-1&&(n=-Hn-Ce);for(var c=0,u=i.length;c<u;++c)if(h=(f=i[c]).length)for(var f,h,d=f[h-1],p=If(d),_=d[1]/2+jg,g=Ge(_),m=He(_),v=0;v<h;++v,p=y,g=E,m=T,d=M){var M=f[v],y=If(M),x=M[1]/2+jg,E=Ge(x),T=He(x),R=y-p,S=R>=0?1:-1,b=S*R,C=b>le,P=g*E;if(l.add(ol(P*S*Ge(b),m*T+P*He(b))),a+=C?R+S*mi:R,C^p>=e^y>=e){var I=su(Ya(d),Ya(M));Td(I);var O=su(s,I);Td(O);var N=(C^R>=0?-1:1)*ll(O[2]);(n>N||n===N&&(I[0]||I[1]))&&(o+=C^R>=0?1:-1)}}return(a<-Ce||a<Ce&&l<-1e-12)^o&1}function yv(i,t,e,n){return function(r){var s=t(r),a=xv(),o=t(a),l=!1,c,u,f,h={point:d,lineStart:_,lineEnd:g,polygonStart:function(){h.point=m,h.lineStart=v,h.lineEnd=M,u=[],c=[]},polygonEnd:function(){h.point=d,h.lineStart=_,h.lineEnd=g,u=Ix(u);var y=R2(c,n);u.length?(l||(r.polygonStart(),l=!0),vv(u,P2,y,e,r)):y&&(l||(r.polygonStart(),l=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(y,x){i(y,x)&&r.point(y,x)}function p(y,x){s.point(y,x)}function _(){h.point=p,s.lineStart()}function g(){h.point=d,s.lineEnd()}function m(y,x){f.push([y,x]),o.point(y,x)}function v(){o.lineStart(),f=[]}function M(){m(f[0][0],f[0][1]),o.lineEnd();var y=o.clean(),x=a.result(),E,T=x.length,R,S,b;if(f.pop(),c.push(f),f=null,!!T){if(y&1){if(S=x[0],(R=S.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),E=0;E<R;++E)r.point((b=S[E])[0],b[1]);r.lineEnd()}return}T>1&&y&2&&x.push(x.pop().concat(x.shift())),u.push(x.filter(C2))}}return h}}function C2(i){return i.length>1}function P2(i,t){return((i=i.x)[0]<0?i[1]-Hn-Ce:Hn-i[1])-((t=t.x)[0]<0?t[1]-Hn-Ce:Hn-t[1])}const a_=yv(function(){return!0},D2,N2,[-le,-Hn]);function D2(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,a){var o=s>0?le:-le,l=Fe(s-t);Fe(l-le)<Ce?(i.point(t,e=(e+a)/2>0?Hn:-Hn),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),i.point(s,e),r=0):n!==o&&l>=le&&(Fe(t-n)<Ce&&(t-=n*Ce),Fe(s-o)<Ce&&(s-=o*Ce),e=L2(t,e,s,a),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),r=0),i.point(t=s,e=a),n=o},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function L2(i,t,e,n){var r,s,a=Ge(i-e);return Fe(a)>Ce?gv((Ge(t)*(s=He(n))*Ge(e)-Ge(n)*(r=He(t))*Ge(i))/(r*s*a)):(t+n)/2}function N2(i,t,e,n){var r;if(i==null)r=e*Hn,n.point(-le,r),n.point(0,r),n.point(le,r),n.point(le,0),n.point(le,-r),n.point(0,-r),n.point(-le,-r),n.point(-le,0),n.point(-le,r);else if(Fe(i[0]-t[0])>Ce){var s=i[0]<t[0]?le:-le;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function I2(i){var t=He(i),e=2*Ze,n=t>0,r=Fe(t)>Ce;function s(u,f,h,d){A2(d,i,e,h,u,f)}function a(u,f){return He(u)*He(f)>t}function o(u){var f,h,d,p,_;return{lineStart:function(){p=d=!1,_=1},point:function(g,m){var v=[g,m],M,y=a(g,m),x=n?y?0:c(g,m):y?c(g+(g<0?le:-le),m):0;if(!f&&(p=d=y)&&u.lineStart(),y!==d&&(M=l(f,v),(!M||Pc(f,M)||Pc(v,M))&&(v[2]=1)),y!==d)_=0,y?(u.lineStart(),M=l(v,f),u.point(M[0],M[1])):(M=l(f,v),u.point(M[0],M[1],2),u.lineEnd()),f=M;else if(r&&f&&n^y){var E;!(x&h)&&(E=l(v,f,!0))&&(_=0,n?(u.lineStart(),u.point(E[0][0],E[0][1]),u.point(E[1][0],E[1][1]),u.lineEnd()):(u.point(E[1][0],E[1][1]),u.lineEnd(),u.lineStart(),u.point(E[0][0],E[0][1],3)))}y&&(!f||!Pc(f,v))&&u.point(v[0],v[1]),f=v,d=y,h=x},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return _|(p&&d)<<1}}}function l(u,f,h){var d=Ya(u),p=Ya(f),_=[1,0,0],g=su(d,p),m=rc(g,g),v=g[0],M=m-v*v;if(!M)return!h&&u;var y=t*m/M,x=-t*v/M,E=su(_,g),T=sc(_,y),R=sc(g,x);Nf(T,R);var S=E,b=rc(T,S),C=rc(S,S),P=b*b-C*(rc(T,T)-1);if(!(P<0)){var I=Ws(P),O=sc(S,(-b-I)/C);if(Nf(O,T),O=bd(O),!h)return O;var N=u[0],k=f[0],U=u[1],H=f[1],Z;k<N&&(Z=N,N=k,k=Z);var D=k-N,et=Fe(D-le)<Ce,Et=et||D<Ce;if(!et&&H<U&&(Z=U,U=H,H=Z),Et?et?U+H>0^O[1]<(Fe(O[0]-N)<Ce?U:H):U<=O[1]&&O[1]<=H:D>le^(N<=O[0]&&O[0]<=k)){var vt=sc(S,(-b+I)/C);return Nf(vt,T),[O,bd(vt)]}}}function c(u,f){var h=n?i:le-i,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return yv(a,o,s,n?[0,-i]:[-le,i-le])}function F2(i,t,e,n,r,s){var a=i[0],o=i[1],l=t[0],c=t[1],u=0,f=1,h=l-a,d=c-o,p;if(p=e-a,!(!h&&p>0)){if(p/=h,h<0){if(p<u)return;p<f&&(f=p)}else if(h>0){if(p>f)return;p>u&&(u=p)}if(p=r-a,!(!h&&p<0)){if(p/=h,h<0){if(p>f)return;p>u&&(u=p)}else if(h>0){if(p<u)return;p<f&&(f=p)}if(p=n-o,!(!d&&p>0)){if(p/=d,d<0){if(p<u)return;p<f&&(f=p)}else if(d>0){if(p>f)return;p>u&&(u=p)}if(p=s-o,!(!d&&p<0)){if(p/=d,d<0){if(p>f)return;p>u&&(u=p)}else if(d>0){if(p<u)return;p<f&&(f=p)}return u>0&&(i[0]=a+u*h,i[1]=o+u*d),f<1&&(t[0]=a+f*h,t[1]=o+f*d),!0}}}}}var To=1e9,oc=-To;function U2(i,t,e,n){function r(c,u){return i<=c&&c<=e&&t<=u&&u<=n}function s(c,u,f,h){var d=0,p=0;if(c==null||(d=a(c,f))!==(p=a(u,f))||l(c,u)<0^f>0)do h.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+f+4)%4)!==p);else h.point(u[0],u[1])}function a(c,u){return Fe(c[0]-i)<Ce?u>0?0:3:Fe(c[0]-e)<Ce?u>0?2:1:Fe(c[1]-t)<Ce?u>0?1:0:u>0?3:2}function o(c,u){return l(c.x,u.x)}function l(c,u){var f=a(c,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=xv(),h,d,p,_,g,m,v,M,y,x,E,T={point:R,lineStart:P,lineEnd:I,polygonStart:b,polygonEnd:C};function R(N,k){r(N,k)&&u.point(N,k)}function S(){for(var N=0,k=0,U=d.length;k<U;++k)for(var H=d[k],Z=1,D=H.length,et=H[0],Et,vt,It=et[0],Nt=et[1];Z<D;++Z)Et=It,vt=Nt,et=H[Z],It=et[0],Nt=et[1],vt<=n?Nt>n&&(It-Et)*(n-vt)>(Nt-vt)*(i-Et)&&++N:Nt<=n&&(It-Et)*(n-vt)<(Nt-vt)*(i-Et)&&--N;return N}function b(){u=f,h=[],d=[],E=!0}function C(){var N=S(),k=E&&N,U=(h=Ix(h)).length;(k||U)&&(c.polygonStart(),k&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),U&&vv(h,o,N,s,c),c.polygonEnd()),u=c,h=d=p=null}function P(){T.point=O,d&&d.push(p=[]),x=!0,y=!1,v=M=NaN}function I(){h&&(O(_,g),m&&y&&f.rejoin(),h.push(f.result())),T.point=R,y&&u.lineEnd()}function O(N,k){var U=r(N,k);if(d&&p.push([N,k]),x)_=N,g=k,m=U,x=!1,U&&(u.lineStart(),u.point(N,k));else if(U&&y)u.point(N,k);else{var H=[v=Math.max(oc,Math.min(To,v)),M=Math.max(oc,Math.min(To,M))],Z=[N=Math.max(oc,Math.min(To,N)),k=Math.max(oc,Math.min(To,k))];F2(H,Z,i,t,e,n)?(y||(u.lineStart(),u.point(H[0],H[1])),u.point(Z[0],Z[1]),U||u.lineEnd(),E=!1):U&&(u.lineStart(),u.point(N,k),E=!1)}v=N,M=k,y=U}return T}}const Rd=i=>i;var Ff=new Bs,Cd=new Bs,Sv,Mv,Pd,Dd,_r={point:Ai,lineStart:Ai,lineEnd:Ai,polygonStart:function(){_r.lineStart=O2,_r.lineEnd=k2},polygonEnd:function(){_r.lineStart=_r.lineEnd=_r.point=Ai,Ff.add(Fe(Cd)),Cd=new Bs},result:function(){var i=Ff/2;return Ff=new Bs,i}};function O2(){_r.point=B2}function B2(i,t){_r.point=Ev,Sv=Pd=i,Mv=Dd=t}function Ev(i,t){Cd.add(Dd*i-Pd*t),Pd=i,Dd=t}function k2(){Ev(Sv,Mv)}var qa=1/0,au=qa,cl=-qa,ou=cl,lu={point:z2,lineStart:Ai,lineEnd:Ai,polygonStart:Ai,polygonEnd:Ai,result:function(){var i=[[qa,au],[cl,ou]];return cl=ou=-(au=qa=1/0),i}};function z2(i,t){i<qa&&(qa=i),i>cl&&(cl=i),t<au&&(au=t),t>ou&&(ou=t)}var Ld=0,Nd=0,wo=0,cu=0,uu=0,_a=0,Id=0,Fd=0,Ao=0,bv,Tv,Yi,qi,bi={point:Hs,lineStart:o_,lineEnd:l_,polygonStart:function(){bi.lineStart=G2,bi.lineEnd=W2},polygonEnd:function(){bi.point=Hs,bi.lineStart=o_,bi.lineEnd=l_},result:function(){var i=Ao?[Id/Ao,Fd/Ao]:_a?[cu/_a,uu/_a]:wo?[Ld/wo,Nd/wo]:[NaN,NaN];return Ld=Nd=wo=cu=uu=_a=Id=Fd=Ao=0,i}};function Hs(i,t){Ld+=i,Nd+=t,++wo}function o_(){bi.point=V2}function V2(i,t){bi.point=H2,Hs(Yi=i,qi=t)}function H2(i,t){var e=i-Yi,n=t-qi,r=Ws(e*e+n*n);cu+=r*(Yi+i)/2,uu+=r*(qi+t)/2,_a+=r,Hs(Yi=i,qi=t)}function l_(){bi.point=Hs}function G2(){bi.point=X2}function W2(){wv(bv,Tv)}function X2(i,t){bi.point=wv,Hs(bv=Yi=i,Tv=qi=t)}function wv(i,t){var e=i-Yi,n=t-qi,r=Ws(e*e+n*n);cu+=r*(Yi+i)/2,uu+=r*(qi+t)/2,_a+=r,r=qi*i-Yi*t,Id+=r*(Yi+i),Fd+=r*(qi+t),Ao+=r*3,Hs(Yi=i,qi=t)}function Av(i){this._context=i}Av.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,mi);break}}},result:Ai};var Ud=new Bs,Uf,Rv,Cv,Ro,Co,ul={point:Ai,lineStart:function(){ul.point=$2},lineEnd:function(){Uf&&Pv(Rv,Cv),ul.point=Ai},polygonStart:function(){Uf=!0},polygonEnd:function(){Uf=null},result:function(){var i=+Ud;return Ud=new Bs,i}};function $2(i,t){ul.point=Pv,Rv=Ro=i,Cv=Co=t}function Pv(i,t){Ro-=i,Co-=t,Ud.add(Ws(Ro*Ro+Co*Co)),Ro=i,Co=t}let c_,fu,u_,f_;class h_{constructor(t){this._append=t==null?Dv:Y2(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==u_||this._append!==fu){const n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,u_=n,fu=this._append,f_=this._,this._=r}this._+=f_;break}}}result(){const t=this._;return this._="",t.length?t:null}}function Dv(i){let t=1;this._+=i[0];for(const e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function Y2(i){const t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return Dv;if(t!==c_){const e=10**t;c_=t,fu=function(r){let s=1;this._+=r[0];for(const a=r.length;s<a;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return fu}function q2(i,t){let e=3,n=4.5,r,s;function a(o){return o&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),ha(o,r(s))),s.result()}return a.area=function(o){return ha(o,r(_r)),_r.result()},a.measure=function(o){return ha(o,r(ul)),ul.result()},a.bounds=function(o){return ha(o,r(lu)),lu.result()},a.centroid=function(o){return ha(o,r(bi)),bi.result()},a.projection=function(o){return arguments.length?(r=o==null?(i=null,Rd):(i=o).stream,a):i},a.context=function(o){return arguments.length?(s=o==null?(t=null,new h_(e)):new Av(t=o),typeof n!="function"&&s.pointRadius(n),a):t},a.pointRadius=function(o){return arguments.length?(n=typeof o=="function"?o:(s.pointRadius(+o),+o),a):n},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{const l=Math.floor(o);if(!(l>=0))throw new RangeError(`invalid digits: ${o}`);e=l}return t===null&&(s=new h_(e)),a},a.projection(i).digits(e).context(t)}function Bp(i){return function(t){var e=new Od;for(var n in i)e[n]=i[n];return e.stream=t,e}}function Od(){}Od.prototype={constructor:Od,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function kp(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),ha(e,i.stream(lu)),t(lu.result()),n!=null&&i.clipExtent(n),i}function Lv(i,t,e){return kp(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,l=+t[0][1]+(s-a*(n[1][1]+n[0][1]))/2;i.scale(150*a).translate([o,l])},e)}function K2(i,t,e){return Lv(i,[[0,0],t],e)}function Z2(i,t,e){return kp(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),a=(r-s*(n[1][0]+n[0][0]))/2,o=-s*n[0][1];i.scale(150*s).translate([a,o])},e)}function j2(i,t,e){return kp(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),a=-s*n[0][0],o=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([a,o])},e)}var d_=16,J2=He(30*Ze);function p_(i,t){return+t?t3(i,t):Q2(i)}function Q2(i){return Bp({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function t3(i,t){function e(n,r,s,a,o,l,c,u,f,h,d,p,_,g){var m=c-n,v=u-r,M=m*m+v*v;if(M>4*t&&_--){var y=a+h,x=o+d,E=l+p,T=Ws(y*y+x*x+E*E),R=ll(E/=T),S=Fe(Fe(E)-1)<Ce||Fe(s-f)<Ce?(s+f)/2:ol(x,y),b=i(S,R),C=b[0],P=b[1],I=C-n,O=P-r,N=v*I-m*O;(N*N/M>t||Fe((m*I+v*O)/M-.5)>.3||a*h+o*d+l*p<J2)&&(e(n,r,s,a,o,l,C,P,S,y/=T,x/=T,E,_,g),g.point(C,P),e(C,P,S,y,x,E,c,u,f,h,d,p,_,g))}}return function(n){var r,s,a,o,l,c,u,f,h,d,p,_,g={point:m,lineStart:v,lineEnd:y,polygonStart:function(){n.polygonStart(),g.lineStart=x},polygonEnd:function(){n.polygonEnd(),g.lineStart=v}};function m(R,S){R=i(R,S),n.point(R[0],R[1])}function v(){f=NaN,g.point=M,n.lineStart()}function M(R,S){var b=Ya([R,S]),C=i(R,S);e(f,h,u,d,p,_,f=C[0],h=C[1],u=R,d=b[0],p=b[1],_=b[2],d_,n),n.point(f,h)}function y(){g.point=m,n.lineEnd()}function x(){v(),g.point=E,g.lineEnd=T}function E(R,S){M(r=R,S),s=f,a=h,o=d,l=p,c=_,g.point=M}function T(){e(f,h,u,d,p,_,s,a,r,o,l,c,d_,n),g.lineEnd=y,y()}return g}}var e3=Bp({point:function(i,t){this.stream.point(i*Ze,t*Ze)}});function n3(i){return Bp({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function i3(i,t,e,n,r){function s(a,o){return a*=n,o*=r,[t+i*a,e-i*o]}return s.invert=function(a,o){return[(a-t)/i*n,(e-o)/i*r]},s}function m_(i,t,e,n,r,s){if(!s)return i3(i,t,e,n,r);var a=He(s),o=Ge(s),l=a*i,c=o*i,u=a/i,f=o/i,h=(o*e-a*t)/i,d=(o*t+a*e)/i;function p(_,g){return _*=n,g*=r,[l*_-c*g+t,e-c*_-l*g]}return p.invert=function(_,g){return[n*(u*_-f*g+h),r*(d-f*_-u*g)]},p}function r3(i){return s3(function(){return i})()}function s3(i){var t,e=150,n=480,r=250,s=0,a=0,o=0,l=0,c=0,u,f=0,h=1,d=1,p=null,_=a_,g=null,m,v,M,y=Rd,x=.5,E,T,R,S,b;function C(N){return R(N[0]*Ze,N[1]*Ze)}function P(N){return N=R.invert(N[0],N[1]),N&&[N[0]*ii,N[1]*ii]}C.stream=function(N){return S&&b===N?S:S=e3(n3(u)(_(E(y(b=N)))))},C.preclip=function(N){return arguments.length?(_=N,p=void 0,O()):_},C.postclip=function(N){return arguments.length?(y=N,g=m=v=M=null,O()):y},C.clipAngle=function(N){return arguments.length?(_=+N?I2(p=N*Ze):(p=null,a_),O()):p*ii},C.clipExtent=function(N){return arguments.length?(y=N==null?(g=m=v=M=null,Rd):U2(g=+N[0][0],m=+N[0][1],v=+N[1][0],M=+N[1][1]),O()):g==null?null:[[g,m],[v,M]]},C.scale=function(N){return arguments.length?(e=+N,I()):e},C.translate=function(N){return arguments.length?(n=+N[0],r=+N[1],I()):[n,r]},C.center=function(N){return arguments.length?(s=N[0]%360*Ze,a=N[1]%360*Ze,I()):[s*ii,a*ii]},C.rotate=function(N){return arguments.length?(o=N[0]%360*Ze,l=N[1]%360*Ze,c=N.length>2?N[2]%360*Ze:0,I()):[o*ii,l*ii,c*ii]},C.angle=function(N){return arguments.length?(f=N%360*Ze,I()):f*ii},C.reflectX=function(N){return arguments.length?(h=N?-1:1,I()):h<0},C.reflectY=function(N){return arguments.length?(d=N?-1:1,I()):d<0},C.precision=function(N){return arguments.length?(E=p_(T,x=N*N),O()):Ws(x)},C.fitExtent=function(N,k){return Lv(C,N,k)},C.fitSize=function(N,k){return K2(C,N,k)},C.fitWidth=function(N,k){return Z2(C,N,k)},C.fitHeight=function(N,k){return j2(C,N,k)};function I(){var N=m_(e,0,0,h,d,f).apply(null,t(s,a)),k=m_(e,n-N[0],r-N[1],h,d,f);return u=_v(o,l,c),T=wd(t,k),R=wd(u,T),E=p_(T,x),O()}function O(){return S=b=null,C}return function(){return t=i.apply(this,arguments),C.invert=t.invert&&P,I()}}function zp(i,t){return[i,M2(b2((Hn+t)/2))]}zp.invert=function(i,t){return[i,2*gv(S2(t))-Hn]};function a3(){return o3(zp).scale(961/mi)}function o3(i){var t=r3(i),e=t.center,n=t.scale,r=t.translate,s=t.clipExtent,a=null,o,l,c;t.scale=function(f){return arguments.length?(n(f),u()):n()},t.translate=function(f){return arguments.length?(r(f),u()):r()},t.center=function(f){return arguments.length?(e(f),u()):e()},t.clipExtent=function(f){return arguments.length?(f==null?a=o=l=c=null:(a=+f[0][0],o=+f[0][1],l=+f[1][0],c=+f[1][1]),u()):a==null?null:[[a,o],[l,c]]};function u(){var f=le*n(),h=t(w2(t.rotate()).invert([0,0]));return s(a==null?[[h[0]-f,h[1]-f],[h[0]+f,h[1]+f]]:i===zp?[[Math.max(h[0]-f,a),o],[Math.min(h[0]+f,l),c]]:[[a,Math.max(h[1]-f,o)],[l,Math.min(h[1]+f,c)]])}return u()}function Nv(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}const g_=Symbol("implicit");function Iv(){var i=new cd,t=[],e=[],n=g_;function r(s){let a=i.get(s);if(a===void 0){if(n!==g_)return n;i.set(s,a=t.push(s)-1)}return e[a%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],i=new cd;for(const a of s)i.has(a)||i.set(a,t.push(a)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(n=s,r):n},r.copy=function(){return Iv(t,e).unknown(n)},Nv.apply(r,arguments),r}function l3(i){return function(){return i}}function c3(i){return+i}var __=[0,1];function xa(i){return i}function Bd(i,t){return(t-=i=+i)?function(e){return(e-i)/t}:l3(isNaN(t)?NaN:.5)}function u3(i,t){var e;return i>t&&(e=i,i=t,t=e),function(n){return Math.max(i,Math.min(t,n))}}function f3(i,t,e){var n=i[0],r=i[1],s=t[0],a=t[1];return r<n?(n=Bd(r,n),s=e(a,s)):(n=Bd(n,r),s=e(s,a)),function(o){return s(n(o))}}function h3(i,t,e){var n=Math.min(i.length,t.length)-1,r=new Array(n),s=new Array(n),a=-1;for(i[n]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++a<n;)r[a]=Bd(i[a],i[a+1]),s[a]=e(t[a],t[a+1]);return function(o){var l=sA(i,o,1,n)-1;return s[l](r[l](o))}}function d3(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function p3(){var i=__,t=__,e=Np,n,r,s,a=xa,o,l,c;function u(){var h=Math.min(i.length,t.length);return a!==xa&&(a=u3(i[0],i[h-1])),o=h>2?h3:f3,l=c=null,f}function f(h){return h==null||isNaN(h=+h)?s:(l||(l=o(i.map(n),t,e)))(n(a(h)))}return f.invert=function(h){return a(r((c||(c=o(t,i.map(n),Ii)))(h)))},f.domain=function(h){return arguments.length?(i=Array.from(h,c3),u()):i.slice()},f.range=function(h){return arguments.length?(t=Array.from(h),u()):t.slice()},f.rangeRound=function(h){return t=Array.from(h),e=LC,u()},f.clamp=function(h){return arguments.length?(a=h?!0:xa,u()):a!==xa},f.interpolate=function(h){return arguments.length?(e=h,u()):e},f.unknown=function(h){return arguments.length?(s=h,f):s},function(h,d){return n=h,r=d,u()}}function m3(){return p3()(xa,xa)}function g3(i,t,e,n){var r=_A(i,t,e),s;switch(n=nu(n??",f"),n.type){case"s":{var a=Math.max(Math.abs(i),Math.abs(t));return n.precision==null&&!isNaN(s=v2(r,a))&&(n.precision=s),mv(n,a)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(s=y2(r,Math.max(Math.abs(i),Math.abs(t))))&&(n.precision=s-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(s=x2(r))&&(n.precision=s-(n.type==="%")*2);break}}return ga(n)}function _3(i){var t=i.domain;return i.ticks=function(e){var n=t();return gA(n[0],n[n.length-1],e??10)},i.tickFormat=function(e,n){var r=t();return g3(r[0],r[r.length-1],e??10,n)},i.nice=function(e){e==null&&(e=10);var n=t(),r=0,s=n.length-1,a=n[r],o=n[s],l,c,u=10;for(o<a&&(c=a,a=o,o=c,c=r,r=s,s=c);u-- >0;){if(c=ud(a,o,e),c===l)return n[r]=a,n[s]=o,t(n);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return i},i}function Dc(){var i=m3();return i.copy=function(){return d3(i,Dc())},Nv.apply(i,arguments),_3(i)}rv(es(-100,.75,.35),es(80,1.5,.8));rv(es(260,.75,.35),es(80,1.5,.8));var lc=es();function x3(i){(i<0||i>1)&&(i-=Math.floor(i));var t=Math.abs(i-.5);return lc.h=360*i-100,lc.s=1.5-1.5*t,lc.l=.8-.9*t,lc+""}function Ve(i){return function(){return i}}const x_=Math.abs,_n=Math.atan2,hs=Math.cos,v3=Math.max,Of=Math.min,Hi=Math.sin,va=Math.sqrt,kn=1e-12,fl=Math.PI,hu=fl/2,Lc=2*fl;function y3(i){return i>1?0:i<-1?fl:Math.acos(i)}function v_(i){return i>=1?hu:i<=-1?-hu:Math.asin(i)}function Fv(i){let t=3;return i.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);t=n}return i},()=>new ZP(t)}function S3(i){return i.innerRadius}function M3(i){return i.outerRadius}function E3(i){return i.startAngle}function b3(i){return i.endAngle}function T3(i){return i&&i.padAngle}function w3(i,t,e,n,r,s,a,o){var l=e-i,c=n-t,u=a-r,f=o-s,h=f*l-u*c;if(!(h*h<kn))return h=(u*(t-s)-f*(i-r))/h,[i+h*l,t+h*c]}function cc(i,t,e,n,r,s,a){var o=i-e,l=t-n,c=(a?s:-s)/va(o*o+l*l),u=c*l,f=-c*o,h=i+u,d=t+f,p=e+u,_=n+f,g=(h+p)/2,m=(d+_)/2,v=p-h,M=_-d,y=v*v+M*M,x=r-s,E=h*_-p*d,T=(M<0?-1:1)*va(v3(0,x*x*y-E*E)),R=(E*M-v*T)/y,S=(-E*v-M*T)/y,b=(E*M+v*T)/y,C=(-E*v+M*T)/y,P=R-g,I=S-m,O=b-g,N=C-m;return P*P+I*I>O*O+N*N&&(R=b,S=C),{cx:R,cy:S,x01:-u,y01:-f,x11:R*(r/x-1),y11:S*(r/x-1)}}function A3(){var i=S3,t=M3,e=Ve(0),n=null,r=E3,s=b3,a=T3,o=null,l=Fv(c);function c(){var u,f,h=+i.apply(this,arguments),d=+t.apply(this,arguments),p=r.apply(this,arguments)-hu,_=s.apply(this,arguments)-hu,g=x_(_-p),m=_>p;if(o||(o=u=l()),d<h&&(f=d,d=h,h=f),!(d>kn))o.moveTo(0,0);else if(g>Lc-kn)o.moveTo(d*hs(p),d*Hi(p)),o.arc(0,0,d,p,_,!m),h>kn&&(o.moveTo(h*hs(_),h*Hi(_)),o.arc(0,0,h,_,p,m));else{var v=p,M=_,y=p,x=_,E=g,T=g,R=a.apply(this,arguments)/2,S=R>kn&&(n?+n.apply(this,arguments):va(h*h+d*d)),b=Of(x_(d-h)/2,+e.apply(this,arguments)),C=b,P=b,I,O;if(S>kn){var N=v_(S/h*Hi(R)),k=v_(S/d*Hi(R));(E-=N*2)>kn?(N*=m?1:-1,y+=N,x-=N):(E=0,y=x=(p+_)/2),(T-=k*2)>kn?(k*=m?1:-1,v+=k,M-=k):(T=0,v=M=(p+_)/2)}var U=d*hs(v),H=d*Hi(v),Z=h*hs(x),D=h*Hi(x);if(b>kn){var et=d*hs(M),Et=d*Hi(M),vt=h*hs(y),It=h*Hi(y),Nt;if(g<fl)if(Nt=w3(U,H,vt,It,et,Et,Z,D)){var K=U-Nt[0],j=H-Nt[1],at=et-Nt[0],Lt=Et-Nt[1],mt=1/Hi(y3((K*at+j*Lt)/(va(K*K+j*j)*va(at*at+Lt*Lt)))/2),kt=va(Nt[0]*Nt[0]+Nt[1]*Nt[1]);C=Of(b,(h-kt)/(mt-1)),P=Of(b,(d-kt)/(mt+1))}else C=P=0}T>kn?P>kn?(I=cc(vt,It,U,H,d,P,m),O=cc(et,Et,Z,D,d,P,m),o.moveTo(I.cx+I.x01,I.cy+I.y01),P<b?o.arc(I.cx,I.cy,P,_n(I.y01,I.x01),_n(O.y01,O.x01),!m):(o.arc(I.cx,I.cy,P,_n(I.y01,I.x01),_n(I.y11,I.x11),!m),o.arc(0,0,d,_n(I.cy+I.y11,I.cx+I.x11),_n(O.cy+O.y11,O.cx+O.x11),!m),o.arc(O.cx,O.cy,P,_n(O.y11,O.x11),_n(O.y01,O.x01),!m))):(o.moveTo(U,H),o.arc(0,0,d,v,M,!m)):o.moveTo(U,H),!(h>kn)||!(E>kn)?o.lineTo(Z,D):C>kn?(I=cc(Z,D,et,Et,h,-C,m),O=cc(U,H,vt,It,h,-C,m),o.lineTo(I.cx+I.x01,I.cy+I.y01),C<b?o.arc(I.cx,I.cy,C,_n(I.y01,I.x01),_n(O.y01,O.x01),!m):(o.arc(I.cx,I.cy,C,_n(I.y01,I.x01),_n(I.y11,I.x11),!m),o.arc(0,0,h,_n(I.cy+I.y11,I.cx+I.x11),_n(O.cy+O.y11,O.cx+O.x11),m),o.arc(O.cx,O.cy,C,_n(O.y11,O.x11),_n(O.y01,O.x01),!m))):o.arc(0,0,h,x,y,m)}if(o.closePath(),u)return o=null,u+""||null}return c.centroid=function(){var u=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,f=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-fl/2;return[hs(f)*u,Hi(f)*u]},c.innerRadius=function(u){return arguments.length?(i=typeof u=="function"?u:Ve(+u),c):i},c.outerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:Ve(+u),c):t},c.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:Ve(+u),c):e},c.padRadius=function(u){return arguments.length?(n=u==null?null:typeof u=="function"?u:Ve(+u),c):n},c.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:Ve(+u),c):r},c.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:Ve(+u),c):s},c.padAngle=function(u){return arguments.length?(a=typeof u=="function"?u:Ve(+u),c):a},c.context=function(u){return arguments.length?(o=u??null,c):o},c}function Uv(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function Ov(i){this._context=i}Ov.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function R3(i){return new Ov(i)}function C3(i){return i[0]}function P3(i){return i[1]}function D3(i,t){var e=Ve(!0),n=null,r=R3,s=null,a=Fv(o);i=typeof i=="function"?i:i===void 0?C3:Ve(i),t=typeof t=="function"?t:t===void 0?P3:Ve(t);function o(l){var c,u=(l=Uv(l)).length,f,h=!1,d;for(n==null&&(s=r(d=a())),c=0;c<=u;++c)!(c<u&&e(f=l[c],c,l))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+i(f,c,l),+t(f,c,l));if(d)return s=null,d+""||null}return o.x=function(l){return arguments.length?(i=typeof l=="function"?l:Ve(+l),o):i},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:Ve(+l),o):t},o.defined=function(l){return arguments.length?(e=typeof l=="function"?l:Ve(!!l),o):e},o.curve=function(l){return arguments.length?(r=l,n!=null&&(s=r(n)),o):r},o.context=function(l){return arguments.length?(l==null?n=s=null:s=r(n=l),o):n},o}function L3(i,t){return t<i?-1:t>i?1:t>=i?0:NaN}function N3(i){return i}function I3(){var i=N3,t=L3,e=null,n=Ve(0),r=Ve(Lc),s=Ve(0);function a(o){var l,c=(o=Uv(o)).length,u,f,h=0,d=new Array(c),p=new Array(c),_=+n.apply(this,arguments),g=Math.min(Lc,Math.max(-Lc,r.apply(this,arguments)-_)),m,v=Math.min(Math.abs(g)/c,s.apply(this,arguments)),M=v*(g<0?-1:1),y;for(l=0;l<c;++l)(y=p[d[l]=l]=+i(o[l],l,o))>0&&(h+=y);for(t!=null?d.sort(function(x,E){return t(p[x],p[E])}):e!=null&&d.sort(function(x,E){return e(o[x],o[E])}),l=0,f=h?(g-c*M)/h:0;l<c;++l,_=m)u=d[l],y=p[u],m=_+(y>0?y*f:0)+M,p[u]={data:o[u],index:l,value:y,startAngle:_,endAngle:m,padAngle:v};return p}return a.value=function(o){return arguments.length?(i=typeof o=="function"?o:Ve(+o),a):i},a.sortValues=function(o){return arguments.length?(t=o,e=null,a):t},a.sort=function(o){return arguments.length?(e=o,t=null,a):e},a.startAngle=function(o){return arguments.length?(n=typeof o=="function"?o:Ve(+o),a):n},a.endAngle=function(o){return arguments.length?(r=typeof o=="function"?o:Ve(+o),a):r},a.padAngle=function(o){return arguments.length?(s=typeof o=="function"?o:Ve(+o),a):s},a}function y_(i){return i<0?-1:1}function S_(i,t,e){var n=i._x1-i._x0,r=t-i._x1,s=(i._y1-i._y0)/(n||r<0&&-0),a=(e-i._y1)/(r||n<0&&-0),o=(s*r+a*n)/(n+r);return(y_(s)+y_(a))*Math.min(Math.abs(s),Math.abs(a),.5*Math.abs(o))||0}function M_(i,t){var e=i._x1-i._x0;return e?(3*(i._y1-i._y0)/e-t)/2:t}function Bf(i,t,e){var n=i._x0,r=i._y0,s=i._x1,a=i._y1,o=(s-n)/3;i._context.bezierCurveTo(n+o,r+o*t,s-o,a-o*e,s,a)}function du(i){this._context=i}du.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Bf(this,this._t0,M_(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var e=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,Bf(this,M_(this,e=S_(this,i,t)),e);break;default:Bf(this,this._t0,e=S_(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=e}}};Object.create(du.prototype).point=function(i,t){du.prototype.point.call(this,t,i)};function F3(i){return new du(i)}function Po(i,t,e){this.k=i,this.x=t,this.y=e}Po.prototype={constructor:Po,scale:function(i){return i===1?this:new Po(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new Po(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Po.prototype;function U3(i){return i}function O3(i){if(i==null)return U3;var t,e,n=i.scale[0],r=i.scale[1],s=i.translate[0],a=i.translate[1];return function(o,l){l||(t=e=0);var c=2,u=o.length,f=new Array(u);for(f[0]=(t+=o[0])*n+s,f[1]=(e+=o[1])*r+a;c<u;)f[c]=o[c],++c;return f}}function B3(i,t){for(var e,n=i.length,r=n-t;r<--n;)e=i[r],i[r++]=i[n],i[n]=e}function k3(i,t){return typeof t=="string"&&(t=i.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return E_(i,e)})}:E_(i,t)}function E_(i,t){var e=t.id,n=t.bbox,r=t.properties==null?{}:t.properties,s=z3(i,t);return e==null&&n==null?{type:"Feature",properties:r,geometry:s}:n==null?{type:"Feature",id:e,properties:r,geometry:s}:{type:"Feature",id:e,bbox:n,properties:r,geometry:s}}function z3(i,t){var e=O3(i.transform),n=i.arcs;function r(u,f){f.length&&f.pop();for(var h=n[u<0?~u:u],d=0,p=h.length;d<p;++d)f.push(e(h[d],d));u<0&&B3(f,p)}function s(u){return e(u)}function a(u){for(var f=[],h=0,d=u.length;h<d;++h)r(u[h],f);return f.length<2&&f.push(f[0]),f}function o(u){for(var f=a(u);f.length<4;)f.push(f[0]);return f}function l(u){return u.map(o)}function c(u){var f=u.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(c)};case"Point":h=s(u.coordinates);break;case"MultiPoint":h=u.coordinates.map(s);break;case"LineString":h=a(u.arcs);break;case"MultiLineString":h=u.arcs.map(a);break;case"Polygon":h=l(u.arcs);break;case"MultiPolygon":h=u.arcs.map(l);break;default:return null}return{type:f,coordinates:h}}return c(t)}const kf=1440,zf=900,V3=230,H3="/data/countries-110m.json";class G3{constructor(t){this.container=t,this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null}render(t){t?.visible&&(this.pendingConfig=t,this.ensureReady().then(()=>{this.pendingConfig&&this.applyConfig(this.pendingConfig)}).catch(e=>{console.error("MapLayer render failed:",e)}))}ensureReady(){return this.readyPromise?this.readyPromise:(this.readyPromise=pv(H3).then(t=>{const e=t?.objects?.countries;if(!e)throw new Error("countries object not found in TopoJSON");this.countryFeatures=k3(t,e).features,this.createSvg(),this.drawBaseMap()}),this.readyPromise)}createSvg(){!this.container||this.svg||(this.container.innerHTML="",this.svg=Kx(this.container).append("svg").attr("viewBox",`0 0 ${kf} ${zf}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","world map"),this.svg.append("rect").attr("x",0).attr("y",0).attr("width",kf).attr("height",zf).attr("fill","#06111e").attr("fill-opacity",.7))}drawBaseMap(){this.svg&&(this.countryPaths=this.svg.append("g").attr("class","countries").selectAll("path").data(this.countryFeatures,t=>t.properties?.name).join("path").attr("vector-effect","non-scaling-stroke").attr("stroke-linejoin","round"),this.markerCircles=this.svg.append("g").attr("class","map-markers"),this.markerLabels=this.svg.append("g").attr("class","map-marker-labels"))}applyConfig(t){if(!this.countryPaths)return;const e=this.resolveCenter(t.center),n=Number.isFinite(t.zoom)?t.zoom:1.2,r=new Set(t.highlightCountries||[]),s=!!(t.lightenNonVisited||t.lightenAllCountries),a=getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#ff6b6b",o=a3().center(e).scale(V3*n).translate([kf/2,zf/2]),l=q2(o);this.countryPaths.transition().duration(650).ease(Wo).attr("d",l).attr("fill",c=>{const u=c.properties?.name;return r.has(u)?a:"#3f4f63"}).attr("fill-opacity",c=>{const u=c.properties?.name;return r.size===0?t.lightenAllCountries?.35:.68:r.has(u)?.96:s?.22:.5}).attr("stroke",c=>r.has(c.properties?.name)?"#ffffff":"#a5b4c7").attr("stroke-opacity",c=>r.has(c.properties?.name)?.9:.35).attr("stroke-width",c=>r.has(c.properties?.name)?1.2:.6),this.updateMarkers(t.markers||[],o,a)}resolveCenter(t){if(!Array.isArray(t)||t.length!==2)return[0,15];const[e,n]=t;return!Number.isFinite(e)||!Number.isFinite(n)?[0,15]:[e,n]}updateMarkers(t,e,n){if(!this.markerCircles||!this.markerLabels)return;const r=t.map(l=>{const c=Number(l.longitude),u=Number(l.latitude);if(!Number.isFinite(c)||!Number.isFinite(u))return null;const f=e([c,u]);return f?{id:l.id||`${l.name||l.country}-${c}-${u}`,x:f[0],y:f[1],name:l.name||"",country:l.country||"",isCurrent:!!l.isCurrent,color:l.color||n,size:Number(l.size)||7}:null}).filter(Boolean),s=this.markerCircles.selectAll("circle").data(r,l=>l.id);s.exit().transition().duration(200).attr("r",0).remove(),s.enter().append("circle").attr("cx",l=>l.x).attr("cy",l=>l.y).attr("r",0).attr("fill-opacity",.1).merge(s).transition().duration(650).ease(Wo).attr("cx",l=>l.x).attr("cy",l=>l.y).attr("r",l=>l.isCurrent?l.size+3:l.size).attr("fill",l=>l.color).attr("fill-opacity",l=>l.isCurrent?.95:.72).attr("stroke","#ffffff").attr("stroke-width",l=>l.isCurrent?2:1).attr("stroke-opacity",.95);const a=r.filter(l=>l.isCurrent),o=this.markerLabels.selectAll("text").data(a,l=>l.id);o.exit().transition().duration(150).attr("opacity",0).remove(),o.enter().append("text").attr("x",l=>l.x+10).attr("y",l=>l.y-12).attr("fill","#ffffff").attr("font-size",14).attr("font-weight",600).attr("paint-order","stroke").attr("stroke","rgba(6,17,30,0.9)").attr("stroke-width",3).attr("stroke-linejoin","round").attr("opacity",0).text(l=>l.name).merge(o).transition().duration(650).ease(Wo).attr("x",l=>l.x+10).attr("y",l=>l.y-12).attr("opacity",1).text(l=>l.name)}clear(){this.container&&(this.container.innerHTML=""),this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null}}const Bv=1e-10;function Cu(i,t){const e=X3(i),n=e.filter(o=>W3(o,i));let r=0,s=0;const a=[];if(n.length>1){const o=zv(n);for(let c=0;c<n.length;++c){const u=n[c];u.angle=Math.atan2(u.x-o.x,u.y-o.y)}n.sort((c,u)=>u.angle-c.angle);let l=n[n.length-1];for(let c=0;c<n.length;++c){const u=n[c];s+=(l.x+u.x)*(u.y-l.y);const f={x:(u.x+l.x)/2,y:(u.y+l.y)/2};let h=null;for(let d=0;d<u.parentIndex.length;++d)if(l.parentIndex.includes(u.parentIndex[d])){const p=i[u.parentIndex[d]],_=Math.atan2(u.x-p.x,u.y-p.y),g=Math.atan2(l.x-p.x,l.y-p.y);let m=g-_;m<0&&(m+=2*Math.PI);const v=g-m/2;let M=Kn(f,{x:p.x+p.radius*Math.sin(v),y:p.y+p.radius*Math.cos(v)});M>p.radius*2&&(M=p.radius*2),(h==null||h.width>M)&&(h={circle:p,width:M,p1:u,p2:l,large:M>p.radius,sweep:!0})}h!=null&&(a.push(h),r+=kd(h.circle.radius,h.width),l=u)}}else{let o=i[0];for(let c=1;c<i.length;++c)i[c].radius<o.radius&&(o=i[c]);let l=!1;for(let c=0;c<i.length;++c)if(Kn(i[c],o)>Math.abs(o.radius-i[c].radius)){l=!0;break}l?r=s=0:(r=o.radius*o.radius*Math.PI,a.push({circle:o,p1:{x:o.x,y:o.y+o.radius},p2:{x:o.x-Bv,y:o.y+o.radius},width:o.radius*2,large:!0,sweep:!0}))}return s/=2,t&&(t.area=r+s,t.arcArea=r,t.polygonArea=s,t.arcs=a,t.innerPoints=n,t.intersectionPoints=e),r+s}function W3(i,t){return t.every(e=>Kn(i,e)<e.radius+Bv)}function X3(i){const t=[];for(let e=0;e<i.length;++e)for(let n=e+1;n<i.length;++n){const r=kv(i[e],i[n]);for(const s of r)s.parentIndex=[e,n],t.push(s)}return t}function kd(i,t){return i*i*Math.acos(1-t/i)-(i-t)*Math.sqrt(t*(2*i-t))}function Kn(i,t){return Math.sqrt((i.x-t.x)*(i.x-t.x)+(i.y-t.y)*(i.y-t.y))}function Vp(i,t,e){if(e>=i+t)return 0;if(e<=Math.abs(i-t))return Math.PI*Math.min(i,t)*Math.min(i,t);const n=i-(e*e-t*t+i*i)/(2*e),r=t-(e*e-i*i+t*t)/(2*e);return kd(i,n)+kd(t,r)}function kv(i,t){const e=Kn(i,t),n=i.radius,r=t.radius;if(e>=n+r||e<=Math.abs(n-r))return[];const s=(n*n-r*r+e*e)/(2*e),a=Math.sqrt(n*n-s*s),o=i.x+s*(t.x-i.x)/e,l=i.y+s*(t.y-i.y)/e,c=-(t.y-i.y)*(a/e),u=-(t.x-i.x)*(a/e);return[{x:o+c,y:l-u},{x:o-c,y:l+u}]}function zv(i){const t={x:0,y:0};for(const e of i)t.x+=e.x,t.y+=e.y;return t.x/=i.length,t.y/=i.length,t}function $3(i,t,e,n){n=n||{};const r=n.maxIterations||100,s=n.tolerance||1e-10,a=i(t),o=i(e);let l=e-t;if(a*o>0)throw"Initial bisect points must have opposite signs";if(a===0)return t;if(o===0)return e;for(let c=0;c<r;++c){l/=2;const u=t+l,f=i(u);if(f*a>=0&&(t=u),Math.abs(l)<s||f===0)return u}return t+l}function zd(i){const t=new Array(i);for(let e=0;e<i;++e)t[e]=0;return t}function b_(i,t){return zd(i).map(()=>zd(t))}function Pa(i,t){let e=0;for(let n=0;n<i.length;++n)e+=i[n]*t[n];return e}function Vd(i){return Math.sqrt(Pa(i,i))}function Hd(i,t,e){for(let n=0;n<t.length;++n)i[n]=t[n]*e}function xr(i,t,e,n,r){for(let s=0;s<i.length;++s)i[s]=t*e[s]+n*r[s]}function Vv(i,t,e){e=e||{};const n=e.maxIterations||t.length*200,r=e.nonZeroDelta||1.05,s=e.zeroDelta||.001,a=e.minErrorDelta||1e-6,o=e.minErrorDelta||1e-5,l=e.rho!==void 0?e.rho:1,c=e.chi!==void 0?e.chi:2,u=e.psi!==void 0?e.psi:-.5,f=e.sigma!==void 0?e.sigma:.5;let h;const d=t.length,p=new Array(d+1);p[0]=t,p[0].fx=i(t),p[0].id=0;for(let x=0;x<d;++x){const E=t.slice();E[x]=E[x]?E[x]*r:s,p[x+1]=E,p[x+1].fx=i(E),p[x+1].id=x+1}function _(x){for(let E=0;E<x.length;E++)p[d][E]=x[E];p[d].fx=x.fx}const g=(x,E)=>x.fx-E.fx,m=t.slice(),v=t.slice(),M=t.slice(),y=t.slice();for(let x=0;x<n;++x){if(p.sort(g),e.history){const T=p.map(R=>{const S=R.slice();return S.fx=R.fx,S.id=R.id,S});T.sort((R,S)=>R.id-S.id),e.history.push({x:p[0].slice(),fx:p[0].fx,simplex:T})}h=0;for(let T=0;T<d;++T)h=Math.max(h,Math.abs(p[0][T]-p[1][T]));if(Math.abs(p[0].fx-p[d].fx)<a&&h<o)break;for(let T=0;T<d;++T){m[T]=0;for(let R=0;R<d;++R)m[T]+=p[R][T];m[T]/=d}const E=p[d];if(xr(v,1+l,m,-l,E),v.fx=i(v),v.fx<p[0].fx)xr(y,1+c,m,-c,E),y.fx=i(y),y.fx<v.fx?_(y):_(v);else if(v.fx>=p[d-1].fx){let T=!1;if(v.fx>E.fx?(xr(M,1+u,m,-u,E),M.fx=i(M),M.fx<E.fx?_(M):T=!0):(xr(M,1-u*l,m,u*l,E),M.fx=i(M),M.fx<v.fx?_(M):T=!0),T){if(f>=1)break;for(let R=1;R<p.length;++R)xr(p[R],1-f,p[0],f,p[R]),p[R].fx=i(p[R])}}else _(v)}return p.sort(g),{fx:p[0].fx,x:p[0]}}function Y3(i,t,e,n,r,s,a){const o=e.fx,l=Pa(e.fxprime,t);let c=o,u=o,f=l,h=0;r=r||1,s=s||1e-6,a=a||.1;function d(p,_,g){for(let m=0;m<16;++m)if(r=(p+_)/2,xr(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),f=Pa(n.fxprime,t),c>o+s*r*l||c>=g)_=r;else{if(Math.abs(f)<=-a*l)return r;f*(_-p)>=0&&(_=p),p=r,g=c}return 0}for(let p=0;p<10;++p){if(xr(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),f=Pa(n.fxprime,t),c>o+s*r*l||p&&c>=u)return d(h,r,u);if(Math.abs(f)<=-a*l)return r;if(f>=0)return d(r,h,c);u=c,h=r,r*=2}return r}function q3(i,t,e){let n={x:t.slice(),fx:0,fxprime:t.slice()},r={x:t.slice(),fx:0,fxprime:t.slice()};const s=t.slice();let a,o,l=1,c;e=e||{},c=e.maxIterations||t.length*20,n.fx=i(n.x,n.fxprime),a=n.fxprime.slice(),Hd(a,n.fxprime,-1);for(let u=0;u<c;++u){if(l=Y3(i,a,n,r,l),e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),!l)Hd(a,n.fxprime,-1);else{xr(s,1,r.fxprime,-1,n.fxprime);const f=Pa(n.fxprime,n.fxprime),h=Math.max(0,Pa(s,r.fxprime)/f);xr(a,h,a,-1,r.fxprime),o=n,n=r,r=o}if(Vd(n.fxprime)<=1e-5)break}return e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),n}function K3(i,t={}){t.maxIterations=t.maxIterations||500;const e=t.initialLayout||Q3,n=t.lossFunction||Pu,r=Z3(i,t),s=e(r,t),a=Object.keys(s),o=[];for(const u of a)o.push(s[u].x),o.push(s[u].y);const c=Vv(u=>{const f={};for(let h=0;h<a.length;++h){const d=a[h];f[d]={x:u[2*h],y:u[2*h+1],radius:s[d].radius}}return n(f,r)},o,t).x;for(let u=0;u<a.length;++u){const f=a[u];s[f].x=c[2*u],s[f].y=c[2*u+1]}return s}const Hv=1e-10;function Gd(i,t,e){return Math.min(i,t)*Math.min(i,t)*Math.PI<=e+Hv?Math.abs(i-t):$3(n=>Vp(i,t,n)-e,0,i+t)}function Z3(i,t={}){const e=t.distinct,n=i.map(o=>Object.assign({},o));function r(o){return o.join(";")}if(e){const o=new Map;for(const l of n)for(let c=0;c<l.sets.length;c++){const u=String(l.sets[c]);o.set(u,l.size+(o.get(u)||0));for(let f=c+1;f<l.sets.length;f++){const h=String(l.sets[f]),d=`${u};${h}`,p=`${h};${u}`;o.set(d,l.size+(o.get(d)||0)),o.set(p,l.size+(o.get(p)||0))}}for(const l of n)l.sets.length<3&&(l.size=o.get(r(l.sets)))}const s=[],a=new Set;for(const o of n)if(o.sets.length===1)s.push(o.sets[0]);else if(o.sets.length===2){const l=o.sets[0],c=o.sets[1];a.add(r(o.sets)),a.add(r([c,l]))}s.sort((o,l)=>o===l?0:o<l?-1:1);for(let o=0;o<s.length;++o){const l=s[o];for(let c=o+1;c<s.length;++c){const u=s[c];a.has(r([l,u]))||n.push({sets:[l,u],size:0})}}return n}function j3(i,t,e){const n=b_(t.length,t.length),r=b_(t.length,t.length);return i.filter(s=>s.sets.length===2).forEach(s=>{const a=e[s.sets[0]],o=e[s.sets[1]],l=Math.sqrt(t[a].size/Math.PI),c=Math.sqrt(t[o].size/Math.PI),u=Gd(l,c,s.size);n[a][o]=n[o][a]=u;let f=0;s.size+1e-10>=Math.min(t[a].size,t[o].size)?f=1:s.size<=1e-10&&(f=-1),r[a][o]=r[o][a]=f}),{distances:n,constraints:r}}function J3(i,t,e,n){for(let s=0;s<t.length;++s)t[s]=0;let r=0;for(let s=0;s<e.length;++s){const a=i[2*s],o=i[2*s+1];for(let l=s+1;l<e.length;++l){const c=i[2*l],u=i[2*l+1],f=e[s][l],h=n[s][l],d=(c-a)*(c-a)+(u-o)*(u-o),p=Math.sqrt(d),_=d-f*f;h>0&&p<=f||h<0&&p>=f||(r+=2*_*_,t[2*s]+=4*_*(a-c),t[2*s+1]+=4*_*(o-u),t[2*l]+=4*_*(c-a),t[2*l+1]+=4*_*(u-o))}}return r}function Q3(i,t={}){let e=eD(i,t);const n=t.lossFunction||Pu;if(i.length>=8){const r=tD(i,t),s=n(r,i),a=n(e,i);s+1e-8<a&&(e=r)}return e}function tD(i,t={}){const e=t.restarts||10,n=[],r={};for(const h of i)h.sets.length===1&&(r[h.sets[0]]=n.length,n.push(h));let{distances:s,constraints:a}=j3(i,n,r);const o=Vd(s.map(Vd))/s.length;s=s.map(h=>h.map(d=>d/o));const l=(h,d)=>J3(h,d,s,a);let c=null;for(let h=0;h<e;++h){const d=zd(s.length*2).map(Math.random),p=q3(l,d,t);(!c||p.fx<c.fx)&&(c=p)}const u=c.x,f={};for(let h=0;h<n.length;++h){const d=n[h];f[d.sets[0]]={x:u[2*h]*o,y:u[2*h+1]*o,radius:Math.sqrt(d.size/Math.PI)}}if(t.history)for(const h of t.history)Hd(h.x,o);return f}function eD(i,t){const e=t&&t.lossFunction?t.lossFunction:Pu,n={},r={};for(const f of i)if(f.sets.length===1){const h=f.sets[0];n[h]={x:1e10,y:1e10,rowid:n.length,size:f.size,radius:Math.sqrt(f.size/Math.PI)},r[h]=[]}i=i.filter(f=>f.sets.length===2);for(const f of i){let h=f.weight!=null?f.weight:1;const d=f.sets[0],p=f.sets[1];f.size+Hv>=Math.min(n[d].size,n[p].size)&&(h=0),r[d].push({set:p,size:f.size,weight:h}),r[p].push({set:d,size:f.size,weight:h})}const s=[];Object.keys(r).forEach(f=>{let h=0;for(let d=0;d<r[f].length;++d)h+=r[f][d].size*r[f][d].weight;s.push({set:f,size:h})});function a(f,h){return h.size-f.size}s.sort(a);const o={};function l(f){return f.set in o}function c(f,h){n[h].x=f.x,n[h].y=f.y,o[h]=!0}c({x:0,y:0},s[0].set);for(let f=1;f<s.length;++f){const h=s[f].set,d=r[h].filter(l),p=n[h];if(d.sort(a),d.length===0)throw"ERROR: missing pairwise overlap information";const _=[];for(var u=0;u<d.length;++u){const v=n[d[u].set],M=Gd(p.radius,v.radius,d[u].size);_.push({x:v.x+M,y:v.y}),_.push({x:v.x-M,y:v.y}),_.push({y:v.y+M,x:v.x}),_.push({y:v.y-M,x:v.x});for(let y=u+1;y<d.length;++y){const x=n[d[y].set],E=Gd(p.radius,x.radius,d[y].size),T=kv({x:v.x,y:v.y,radius:M},{x:x.x,y:x.y,radius:E});_.push(...T)}}let g=1e50,m=_[0];for(const v of _){n[h].x=v.x,n[h].y=v.y;const M=e(n,i);M<g&&(g=M,m=v)}c(m,h)}return n}function Pu(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const a=i[n.sets[0]],o=i[n.sets[1]];r=Vp(a.radius,o.radius,Kn(a,o))}else r=Cu(n.sets.map(a=>i[a]));const s=n.weight!=null?n.weight:1;e+=s*(r-n.size)*(r-n.size)}return e}function nD(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const o=i[n.sets[0]],l=i[n.sets[1]];r=Vp(o.radius,l.radius,Kn(o,l))}else r=Cu(n.sets.map(o=>i[o]));const s=n.weight!=null?n.weight:1,a=Math.log((r+1)/(n.size+1));e+=s*a*a}return e}function iD(i,t,e){if(e==null?i.sort((r,s)=>s.radius-r.radius):i.sort(e),i.length>0){const r=i[0].x,s=i[0].y;for(const a of i)a.x-=r,a.y-=s}if(i.length===2&&Kn(i[0],i[1])<Math.abs(i[1].radius-i[0].radius)&&(i[1].x=i[0].x+i[0].radius-i[1].radius-1e-10,i[1].y=i[0].y),i.length>1){const r=Math.atan2(i[1].x,i[1].y)-t,s=Math.cos(r),a=Math.sin(r);for(const o of i){const l=o.x,c=o.y;o.x=s*l-a*c,o.y=a*l+s*c}}if(i.length>2){let r=Math.atan2(i[2].x,i[2].y)-t;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;if(r>Math.PI){const s=i[1].y/(1e-10+i[1].x);for(const a of i){var n=(a.x+s*a.y)/(1+s*s);a.x=2*n-a.x,a.y=2*n*s-a.y}}}}function rD(i){i.forEach(r=>{r.parent=r});function t(r){return r.parent!==r&&(r.parent=t(r.parent)),r.parent}function e(r,s){const a=t(r),o=t(s);a.parent=o}for(let r=0;r<i.length;++r)for(let s=r+1;s<i.length;++s){const a=i[r].radius+i[s].radius;Kn(i[r],i[s])+1e-10<a&&e(i[s],i[r])}const n=new Map;for(let r=0;r<i.length;++r){const s=t(i[r]).parent.setid;n.has(s)||n.set(s,[]),n.get(s).push(i[r])}return i.forEach(r=>{delete r.parent}),Array.from(n.values())}function Wd(i){const t=e=>{const n=i.reduce((s,a)=>Math.max(s,a[e]+a.radius),Number.NEGATIVE_INFINITY),r=i.reduce((s,a)=>Math.min(s,a[e]-a.radius),Number.POSITIVE_INFINITY);return{max:n,min:r}};return{xRange:t("x"),yRange:t("y")}}function sD(i,t,e){t==null&&(t=Math.PI/2);let n=Wv(i).map(c=>Object.assign({},c));const r=rD(n);for(const c of r){iD(c,t,e);const u=Wd(c);c.size=(u.xRange.max-u.xRange.min)*(u.yRange.max-u.yRange.min),c.bounds=u}r.sort((c,u)=>u.size-c.size),n=r[0];let s=n.bounds;const a=(s.xRange.max-s.xRange.min)/50;function o(c,u,f){if(!c)return;const h=c.bounds;let d,p;if(u)d=s.xRange.max-h.xRange.min+a;else{d=s.xRange.max-h.xRange.max;const _=(h.xRange.max-h.xRange.min)/2-(s.xRange.max-s.xRange.min)/2;_<0&&(d+=_)}if(f)p=s.yRange.max-h.yRange.min+a;else{p=s.yRange.max-h.yRange.max;const _=(h.yRange.max-h.yRange.min)/2-(s.yRange.max-s.yRange.min)/2;_<0&&(p+=_)}for(const _ of c)_.x+=d,_.y+=p,n.push(_)}let l=1;for(;l<r.length;)o(r[l],!0,!1),o(r[l+1],!1,!0),o(r[l+2],!0,!0),l+=3,s=Wd(n);return Gv(n)}function aD(i,t,e,n,r){const s=Wv(i);t-=2*n,e-=2*n;const{xRange:a,yRange:o}=Wd(s);if(a.max===a.min||o.max===o.min)return console.log("not scaling solution: zero size detected"),i;let l,c;if(r){const d=Math.sqrt(r/Math.PI)*2;l=t/d,c=e/d}else l=t/(a.max-a.min),c=e/(o.max-o.min);const u=Math.min(c,l),f=(t-(a.max-a.min)*u)/2,h=(e-(o.max-o.min)*u)/2;return Gv(s.map(d=>({radius:u*d.radius,x:n+f+(d.x-a.min)*u,y:n+h+(d.y-o.min)*u,setid:d.setid})))}function Gv(i){const t={};for(const e of i)t[e.setid]=e;return t}function Wv(i){return Object.keys(i).map(e=>Object.assign(i[e],{setid:e}))}function Vf(i,t,e){let n=t[0].radius-Kn(t[0],i);for(let r=1;r<t.length;++r){const s=t[r].radius-Kn(t[r],i);s<=n&&(n=s)}for(let r=0;r<e.length;++r){const s=Kn(e[r],i)-e[r].radius;s<=n&&(n=s)}return n}function Xv(i,t,e){const n=[];for(const u of i)n.push({x:u.x,y:u.y}),n.push({x:u.x+u.radius/2,y:u.y}),n.push({x:u.x-u.radius/2,y:u.y}),n.push({x:u.x,y:u.y+u.radius/2}),n.push({x:u.x,y:u.y-u.radius/2});let r=n[0],s=Vf(n[0],i,t);for(let u=1;u<n.length;++u){const f=Vf(n[u],i,t);f>=s&&(r=n[u],s=f)}const a=Vv(u=>-1*Vf({x:u[0],y:u[1]},i,t),[r.x,r.y],{maxIterations:500,minErrorDelta:1e-10}).x,o={x:e?0:a[0],y:a[1]};let l=!0;for(const u of i)if(Kn(o,u)>u.radius){l=!1;break}for(const u of t)if(Kn(o,u)<u.radius){l=!1;break}if(l)return o;if(i.length==1)return{x:i[0].x,y:i[0].y};const c={};return Cu(i,c),c.arcs.length===0?{x:0,y:-1e3,disjoint:!0}:c.arcs.length==1?{x:c.arcs[0].circle.x,y:c.arcs[0].circle.y}:t.length?Xv(i,[]):zv(c.arcs.map(u=>u.p1))}function oD(i){const t={},e=Object.keys(i);for(const n of e)t[n]=[];for(let n=0;n<e.length;n++){const r=e[n],s=i[r];for(let a=n+1;a<e.length;++a){const o=e[a],l=i[o],c=Kn(s,l);c+l.radius<=s.radius+1e-10?t[o].push(r):c+s.radius<=l.radius+1e-10&&t[r].push(o)}}return t}function lD(i,t,e){const n={},r=oD(i);for(let s=0;s<t.length;++s){const a=t[s].sets,o={},l={};for(let h=0;h<a.length;++h){o[a[h]]=!0;const d=r[a[h]];for(let p=0;p<d.length;++p)l[d[p]]=!0}const c=[],u=[];for(let h in i)h in o?c.push(i[h]):h in l||u.push(i[h]);const f=Xv(c,u,e);n[a]=f,f.disjoint&&t[s].size>0&&console.log("WARNING: area "+a+" not represented on screen")}return n}function cD(i,t,e){const n=[];return n.push(`
M`,i,t),n.push(`
m`,-e,0),n.push(`
a`,e,e,0,1,0,e*2,0),n.push(`
a`,e,e,0,1,0,-e*2,0),n.join(" ")}function uD(i){if(i.length===0)return[];const t={};return Cu(i,t),t.arcs}function fD(i,t){if(i.length===0)return"M 0 0";const e=Math.pow(10,t||0),n=t!=null?s=>Math.round(s*e)/e:s=>s;if(i.length==1){const s=i[0].circle;return cD(n(s.x),n(s.y),n(s.radius))}const r=[`
M`,n(i[0].p2.x),n(i[0].p2.y)];for(const s of i){const a=n(s.circle.radius);r.push(`
A`,a,a,0,s.large?1:0,s.sweep?1:0,n(s.p1.x),n(s.p1.y))}return r.join(" ")}function hD(i,t={}){const{lossFunction:e,layoutFunction:n=K3,normalize:r=!0,orientation:s=Math.PI/2,orientationOrder:a,width:o=600,height:l=350,padding:c=15,scaleToFit:u=!1,symmetricalTextCentre:f=!1,distinct:h,round:d=2}=t;let p=n(i,{lossFunction:e==="default"||!e?Pu:e==="logRatio"?nD:e,distinct:h});r&&(p=sD(p,s,a));const _=aD(p,o,l,c,u),g=lD(_,i,f),m=new Map(Object.keys(_).map(y=>[y,{set:y,x:_[y].x,y:_[y].y,radius:_[y].radius}])),v=i.map(y=>{const x=y.sets.map(R=>m.get(R)),E=uD(x),T=fD(E,d);return{circles:x,arcs:E,path:T,area:y,has:new Set(y.sets)}});function M(y){let x="";for(const E of v)E.has.size>y.length&&y.every(T=>E.has.has(T))&&(x+=" "+E.path);return x}return v.map(({circles:y,arcs:x,path:E,area:T})=>({data:T,text:g[T.sets],circles:y,arcs:x,path:E,distinctPath:E+M(T.sets)}))}const Hf=1440,Gf=900,uc=24,dD=768,T_=56,pD=130;class mD{constructor(t){this.container=t,this.svg=null,this.root=null,this.dataCache=new Map,this.lineSpanState=new Map,this.onResize=()=>{},window.addEventListener("resize",this.onResize)}async render(t,e={}){if(!t?.visible)return;const n=this.normalizeChartConfig(t,e);if(this.ensureSvg(),!this.root)return;this.root.selectAll("*").remove(),this.drawBackdrop();const r=window.innerWidth<dD,s=this.buildPanelSpecs(n,r);if(s.length===0)return;const a=s.filter(o=>o.chart).map(async o=>{const l=await this.loadDataset(o.chart);this.renderChart(o,l)});await Promise.all(a)}normalizeChartConfig(t,e={}){const n=t.layout||(Array.isArray(t.charts)&&t.charts.length===2?"dual":"single"),r=t.span||(e.spanId?{id:e.spanId}:null),s=!!e.transitionFromPrevious,a=Array.isArray(t.charts)&&t.charts.length>0?t.charts.map(o=>({...o,span:r,transitionFromPrevious:s})):[{id:t.id||"chart-1",type:t.type||"line",dataFile:t.dataFile,dataFormat:t.dataFormat||"auto",config:t.config||{},span:r,transitionFromPrevious:s}];return{visible:t.visible,layout:n,responsive:t.responsive||{mobileStack:!0},grid:t.grid||null,charts:a,position:t.position||null}}buildPanelSpecs(t,e){const n=t.charts||[];if(n.length===0)return[];const r=this.getPlotBounds(),s=t.responsive?.mobileStack!==!1,a=e&&s&&(t.layout==="dual"||t.layout==="grid");return t.layout==="single"||a?this.buildStackedPanels(n,r):t.layout==="dual"?this.buildDualPanels(n,r):t.layout==="grid"?this.buildGridPanels(n,t.grid||{},r):this.buildStackedPanels(n,r)}getPlotBounds(){const e=document.getElementById("header-nav")?.offsetHeight??T_,n=Math.min(Math.max(e,T_),pD);return{left:uc,right:Hf-uc,top:uc+n,bottom:Gf-uc}}buildStackedPanels(t,e){const n=t.length,r=20,a=(e.bottom-e.top-r*(n-1))/n;return t.map((o,l)=>({chart:o,x:e.left,y:e.top+l*(a+r),width:e.right-e.left,height:a}))}buildDualPanels(t,e){const s=Math.ceil(t.length/2),a=(e.right-e.left-20)/2,o=(e.bottom-e.top-20*(s-1))/s;return t.map((l,c)=>{const u=c%2,f=Math.floor(c/2);return{chart:l,x:e.left+u*(a+20),y:e.top+f*(o+20),width:a,height:o}})}buildGridPanels(t,e,n){const r=e.allowEmptyCells!==!1,s=Array.isArray(e.rowPattern)&&e.rowPattern.length>0?e.rowPattern:this.makeDefaultRowPattern(e,t.length),a=Array.isArray(e.rowTitles)?e.rowTitles:[],o=Math.max(...s),l=18,c=18,u=s.length,f=n.right-n.left,h=n.bottom-n.top,d=a.length>0?22:0,p=(h-d*u-l*(u-1))/u,_=(f-c*(o-1))/o,g=[];let m=0;return s.forEach((v,M)=>{const y=n.top+M*(p+d+l);a[M]&&this.root&&this.root.append("text").attr("x",n.left+f/2).attr("y",y+15).attr("text-anchor","middle").attr("fill","#d8dee9").attr("font-size",14).attr("font-weight",600).text(a[M]);const x=y+d,E=v*_+(v-1)*c,T=n.left+(f-E)/2;for(let R=0;R<v;R+=1){const S=t[m]||null;if(!S&&!r)break;g.push({chart:S,x:T+R*(_+c),y:x,width:_,height:p}),S&&(m+=1)}}),g}makeDefaultRowPattern(t,e){const n=Number.isFinite(t.columns)?Math.max(1,t.columns):e,r=Number.isFinite(t.rows)?Math.max(1,t.rows):Math.ceil(e/n),s=[];for(let a=0;a<r;a+=1){const o=e-a*n;o<=0?s.push(n):s.push(Math.min(n,o))}return s}async loadDataset(t){const e=t.dataFile;if(!e)return null;const n=e.startsWith("/")?e:`/${e}`,r=(t.dataFormat||"auto").toLowerCase(),s=r==="auto"?this.detectFormatFromPath(n):r,a=`${s}:${n}`;if(this.dataCache.has(a))return this.dataCache.get(a);let o;if(s==="json")o=await pv(n);else if(s==="csv")o=await l2(n,i2);else throw new Error(`Unsupported data format: ${s}`);return this.dataCache.set(a,o),o}detectFormatFromPath(t){if(t.endsWith(".json"))return"json";if(t.endsWith(".csv"))return"csv";throw new Error(`Cannot detect data format from path: ${t}`)}renderChart(t,e){if(!t.chart){this.drawEmptyPanel(t);return}const n=t.chart.type||"line";try{n==="line"?this.renderLine(t,e,t.chart.config||{},t.chart):n==="pie"?this.renderPie(t,e,t.chart.config||{}):n==="sankey"?this.renderSankey(t,e,t.chart.config||{}):n==="venn"?this.renderVenn(t,e,t.chart.config||{}):this.renderUnsupported(t,`未対応チャート: ${n}`)}catch(r){this.renderUnsupported(t,`描画エラー: ${n}`),console.error(r)}}renderLine(t,e,n,r={}){if(!Array.isArray(e)){this.renderUnsupported(t,"lineデータ形式が不正です");return}const s=n.xField||"year",a=n.yField||"value",o=n.seriesField||"series",l=e.filter(rt=>Number.isFinite(Number(rt[s]))&&Number.isFinite(Number(rt[a])));if(l.length===0){this.renderUnsupported(t,"lineデータが空です");return}const c=aA(l,rt=>Number(rt[s])),u=Array.isArray(n.xDomain)&&n.xDomain.length===2?[Number(n.xDomain[0]),Number(n.xDomain[1])]:null,f=u&&u.every(Number.isFinite)?[Math.min(u[0],u[1]),Math.max(u[0],u[1])]:[Number(c[0]),Number(c[1])];if(!f.every(Number.isFinite)||f[0]===f[1]){this.renderUnsupported(t,"lineのx軸設定が不正です");return}const h=l.filter(rt=>{const Ut=Number(rt[s]);return Ut>=f[0]&&Ut<=f[1]});if(h.length===0){this.renderUnsupported(t,"lineデータが空です");return}const d=Tf(h,rt=>Number(rt[a]))||0,_=Dc().domain([0,d*1.1]).nice().domain(),g=r?.span?.id,m=g==null?null:String(g).trim(),v=!!(r?.transitionFromPrevious&&m),M=v?this.lineSpanState.get(m):null,y=M?.xDomain||f,x=M?.yDomain||_,E=n.title||"折れ線グラフ",T=this.createPanelInner(t,E),R=T.width,S=T.height,b=fA(h,rt=>rt[o]==null?"__single__":String(rt[o])),C=b.length>1&&b.some(([rt])=>rt!=="__single__"),P=C?this.resolveLineLabelGutter(R):0,I=this.resolveYAxisLabelGutter(h,a),O=6,N=24,k=Math.max(80,R-I-P),U=Math.max(80,S-O-N),H=T.group.append("g").attr("transform",`translate(${I}, ${O})`),Z=Dc().domain(y).range([0,k]),D=Dc().domain(x).range([U,0]),et=TA(Z).ticks(5).tickFormat(ga("d")),Et=wA(D).ticks(5),vt=rt=>rt.selectAll("text").attr("fill","#d8dee9").attr("font-size",11),It=rt=>rt.selectAll("line,path").attr("stroke","#8ca0b3").attr("opacity",.5),Nt=H.append("g").attr("transform",`translate(0, ${U})`).call(et).call(vt).call(It),K=H.append("g").call(Et).call(vt).call(It),j=D3().x(rt=>Z(Number(rt[s]))).y(rt=>D(Number(rt[a]))).curve(F3);if(!C){const rt=H.append("path").datum(h).attr("fill","none").attr("stroke",this.getThemePrimary()).attr("stroke-width",2.5).attr("d",j),Ut=H.selectAll(".point").data(h).enter().append("circle").attr("cx",gt=>Z(Number(gt[s]))).attr("cy",gt=>D(Number(gt[a]))).attr("r",2.7).attr("fill","#ffffff");if(v&&M){Z.domain(f),D.domain(_);const gt=vd().duration(850).ease(yd);Nt.transition(gt).call(et).call(vt).call(It),K.transition(gt).call(Et).call(vt).call(It),rt.transition(gt).attr("d",j).on("end",()=>{this.renderLineAnnotations(H,Z,D,k,U,n.annotations)}),Ut.transition(gt).attr("cx",W=>Z(Number(W[s]))).attr("cy",W=>D(Number(W[a])))}else{this.renderLineAnnotations(H,Z,D,k,U,n.annotations);const gt=rt.node()?.getTotalLength()||0;rt.attr("stroke-dasharray",`${gt} ${gt}`).attr("stroke-dashoffset",gt).transition().duration(700).ease(Wo).attr("stroke-dashoffset",0)}m&&this.lineSpanState.set(m,{xDomain:[...f],yDomain:[..._]});return}const at=b.map(([rt,Ut])=>({name:rt,values:[...Ut].sort((gt,W)=>Number(gt[s])-Number(W[s]))})).filter(rt=>rt.values.length>0),Lt=this.buildPalette(at.length),mt=Iv().domain(at.map(rt=>rt.name)).range(Lt),kt=H.append("g").attr("class","line-series"),ee=[],Tt=[];if(at.forEach(rt=>{const Ut=kt.append("path").datum(rt.values).attr("fill","none").attr("stroke",mt(rt.name)).attr("stroke-width",2.2).attr("d",j);ee.push(Ut);const gt=kt.selectAll(`.point-${this.toSafeCssToken(rt.name)}`).data(rt.values).enter().append("circle").attr("cx",W=>Z(Number(W[s]))).attr("cy",W=>D(Number(W[a]))).attr("r",2.2).attr("fill",mt(rt.name));Tt.push(gt)}),v&&M){Z.domain(f),D.domain(_);const rt=vd().duration(850).ease(yd);Nt.transition(rt).call(et).call(vt).call(It),K.transition(rt).call(Et).call(vt).call(It),ee.forEach((Ut,gt)=>{Ut.transition(rt).attr("d",j).on("end",()=>{gt===0&&(this.renderLineAnnotations(H,Z,D,k,U,n.annotations),this.drawLineEndLabels(H,at,mt,Z,D,k,U,s,a))})}),Tt.forEach(Ut=>{Ut.transition(rt).attr("cx",gt=>Z(Number(gt[s]))).attr("cy",gt=>D(Number(gt[a])))})}else this.renderLineAnnotations(H,Z,D,k,U,n.annotations),ee.forEach(rt=>{const Ut=rt.node()?.getTotalLength()||0;rt.attr("stroke-dasharray",`${Ut} ${Ut}`).attr("stroke-dashoffset",Ut).transition().duration(700).ease(Wo).attr("stroke-dashoffset",0)}),this.drawLineEndLabels(H,at,mt,Z,D,k,U,s,a);m&&this.lineSpanState.set(m,{xDomain:[...f],yDomain:[..._]})}drawLineEndLabels(t,e,n,r,s,a,o,l,c){if(!Array.isArray(e)||e.length===0)return;const u=a+10,f=12,h=8,d=Math.max(h,o-8),p=e.map(g=>{const m=g.values[g.values.length-1];if(!m)return null;const v=Number(m[l]),M=Number(m[c]);return!Number.isFinite(v)||!Number.isFinite(M)?null:{name:g.name,xEnd:r(v),yTarget:s(M),y:s(M)}}).filter(Boolean).sort((g,m)=>g.yTarget-m.yTarget);if(p.length===0)return;p.forEach((g,m)=>{m===0?g.y=Math.max(h,g.yTarget):g.y=Math.max(g.yTarget,p[m-1].y+f)}),p[p.length-1].y=Math.min(p[p.length-1].y,d);for(let g=p.length-2;g>=0;g-=1)p[g].y=Math.min(p[g].y,p[g+1].y-f);if(p[0].y<h)if(p.length===1)p[0].y=(h+d)/2;else{const g=(d-h)/(p.length-1);p.forEach((m,v)=>{m.y=h+g*v})}const _=t.append("g").attr("class","line-end-labels");_.selectAll("line").data(p).enter().append("line").attr("x1",g=>g.xEnd+2).attr("y1",g=>g.yTarget).attr("x2",u-4).attr("y2",g=>g.y).attr("stroke",g=>n(g.name)).attr("stroke-opacity",.8).attr("stroke-width",1),_.selectAll("text").data(p).enter().append("text").attr("x",u).attr("y",g=>g.y).attr("dominant-baseline","middle").attr("fill",g=>n(g.name)).attr("font-size",10).attr("font-weight",600).text(g=>g.name)}renderLineAnnotations(t,e,n,r,s,a){if(!Array.isArray(a)||a.length===0)return;const o=t.append("g").attr("class","chart-annotations"),l=e.domain(),c=n.domain();a.forEach(u=>{const f=u?.type,h=String(u?.label||"");if(f==="verticalLine"){const d=u.year??u.x??u.value,p=Number(d);if(!Number.isFinite(p)||p<Math.min(...l)||p>Math.max(...l))return;const _=e(p);o.append("line").attr("x1",_).attr("y1",0).attr("x2",_).attr("y2",s).attr("stroke","#e5edf7").attr("stroke-width",1).attr("stroke-opacity",.8).attr("stroke-dasharray","4 4"),h&&o.append("text").attr("x",_+6).attr("y",12).attr("fill","#e7eef8").attr("font-size",10).attr("font-weight",500).text(h);return}if(f==="horizontalLine"){const d=u.y??u.value,p=Number(d);if(!Number.isFinite(p)||p<Math.min(...c)||p>Math.max(...c))return;const _=n(p);if(o.append("line").attr("x1",0).attr("y1",_).attr("x2",r).attr("y2",_).attr("stroke","#e5edf7").attr("stroke-width",1).attr("stroke-opacity",.8).attr("stroke-dasharray","4 4"),h){const g=Math.max(12,_-6);o.append("text").attr("x",6).attr("y",g).attr("fill","#e7eef8").attr("font-size",10).attr("font-weight",500).text(h)}}})}renderPie(t,e,n){const r=this.resolvePieDataset(e,n);if(!Array.isArray(r)||r.length===0){this.renderUnsupported(t,"pieデータが空です");return}const s=n.labelField||"label",a=n.valueField||"value",o=r.map(g=>({...g,__pieValue:this.parsePieNumericValue(g[a])})).filter(g=>g[s]!=null&&Number.isFinite(g.__pieValue));if(o.length===0){this.renderUnsupported(t,"pieデータが不正です");return}const l=n.title||n.groupTitle||"円グラフ",c=this.createPanelInner(t,l,{compact:!0}),u=Math.max(24,Math.min(c.width,c.height)*.33),f=I3().value(g=>g.__pieValue).sort(null),h=A3().innerRadius(0).outerRadius(u),d=this.buildPalette(o.length);c.group.append("g").attr("transform",`translate(${c.width/2}, ${c.height/2-8})`).selectAll("path").data(f(o)).enter().append("path").attr("d",h).attr("fill",(g,m)=>d[m]).attr("stroke","#0b1726").attr("stroke-width",1).attr("opacity",0).transition().duration(500).attr("opacity",.95);const _=c.group.append("g").attr("transform",`translate(0, ${c.height-Math.min(o.length*15,c.height*.38)})`);o.slice(0,6).forEach((g,m)=>{const v=m*15;_.append("rect").attr("x",0).attr("y",v-9).attr("width",9).attr("height",9).attr("fill",d[m]),_.append("text").attr("x",14).attr("y",v).attr("fill","#d8dee9").attr("font-size",10).text(`${g[s]}: ${g[a]}`)})}resolvePieDataset(t,e){if(Array.isArray(t)){const n=e.rowField,r=e.rowValue;if(n&&r!=null){const s=t.find(l=>String(l?.[n]??"").trim()===String(r).trim());if(!s)return[];const o=(Array.isArray(e.categoryColumns)&&e.categoryColumns.length>0?e.categoryColumns:Object.keys(s).filter(l=>l!==n)).map(l=>({label:l,value:this.parsePieNumericValue(s[l])})).filter(l=>Number.isFinite(l.value));if(o.length===0)return[];if(o.length===1&&e.primaryLabel&&(o[0].label=String(e.primaryLabel)),o.length===1&&Number.isFinite(Number(e.normalizeTo))){const l=Number(e.normalizeTo),c=Math.max(0,l-o[0].value);o.push({label:e.remainderLabel||"未治療",value:c})}return o}return t}if(Array.isArray(t?.groups)){const n=e.groupId,r=n?t.groups.find(s=>s.id===n):t.groups[e.groupIndex??0];return r?r.values||[]:[]}return[]}parsePieNumericValue(t){if(Number.isFinite(t))return Number(t);if(typeof t=="string"){const e=t.replace(/,/g,"").replace(/%/g,"").trim(),n=Number(e);if(Number.isFinite(n))return n}return NaN}renderSankey(t,e,n){const r=this.normalizeSankeyData(e);if(!r||r.nodes.length===0||r.links.length===0){this.renderUnsupported(t,"sankeyデータが不正です");return}const s=n.title||"サンキー・ダイアグラム",a=this.createPanelInner(t,s),o=a.width,l=a.height,c=new Map(r.nodes.map(x=>[x.id,{...x,in:[],out:[],level:0}])),u=r.links.map(x=>({source:c.get(x.source),target:c.get(x.target),value:Number(x.value)})).filter(x=>x.source&&x.target&&Number.isFinite(x.value)&&x.value>0);u.forEach(x=>{x.source.out.push(x),x.target.in.push(x)}),this.assignNodeLevels(c);const f=new Map;[...c.values()].forEach(x=>{f.has(x.level)||f.set(x.level,[]),f.get(x.level).push(x)});const h=[...f.keys()].sort((x,E)=>x-E),d=Math.max(...h,1),p=12,_=Math.max(8,Math.min(18,o*.03)),g=Math.max(...h.map(x=>f.get(x).reduce((E,T)=>E+this.nodeValue(T),0)),1),m=(l-p*6)/g;h.forEach(x=>{const E=f.get(x),R=E.reduce((b,C)=>b+this.nodeValue(C),0)*m+(E.length-1)*p;let S=(l-R)/2;E.forEach(b=>{b.h=Math.max(8,this.nodeValue(b)*m),b.w=_,b.x=x/d*(o-_),b.y=S,b.inOffset=0,b.outOffset=0,S+=b.h+p})});const v=a.group.append("g").attr("fill","none");u.forEach(x=>{const E=Math.max(1.5,x.value*m),T=x.source.x+x.source.w,R=x.source.y+x.source.outOffset+E/2,S=x.target.x,b=x.target.y+x.target.inOffset+E/2;x.source.outOffset+=E,x.target.inOffset+=E;const C=T+(S-T)*.45,P=T+(S-T)*.55,I=`M${T},${R} C${C},${R} ${P},${b} ${S},${b}`;v.append("path").attr("d",I).attr("stroke",this.getThemePrimary()).attr("stroke-width",E).attr("stroke-opacity",.28)});const M=a.group.append("g"),y=[...c.values()];M.selectAll("rect").data(y).enter().append("rect").attr("x",x=>x.x).attr("y",x=>x.y).attr("width",x=>x.w).attr("height",x=>x.h).attr("fill","#dbe7f3").attr("fill-opacity",.88).attr("stroke","#ffffff").attr("stroke-width",.6),M.selectAll("text").data(y).enter().append("text").attr("x",x=>x.level===0?x.x+x.w+6:x.x-6).attr("y",x=>x.y+x.h/2+3).attr("text-anchor",x=>x.level===0?"start":"end").attr("fill","#e6edf5").attr("font-size",10).text(x=>x.label)}normalizeSankeyData(t){if(t?.nodes&&t?.links){const e=t.nodes.map((s,a)=>({id:s.id??s.name??String(a),label:s.name??s.id??String(a)})),n=e.map(s=>s.id),r=t.links.map(s=>({source:typeof s.source=="number"?n[s.source]:s.source,target:typeof s.target=="number"?n[s.target]:s.target,value:Number(s.value)}));return{nodes:e,links:r}}if(Array.isArray(t)){const e=new Set,n=t.map(s=>{const a=String(s.source??s.from??""),o=String(s.target??s.to??"");return e.add(a),e.add(o),{source:a,target:o,value:Number(s.value??s.count??0)}});return{nodes:[...e].filter(Boolean).map(s=>({id:s,label:s})),links:n}}return null}assignNodeLevels(t){const e=[...t.values()],n=new Map(e.map(s=>[s.id,s.in.length])),r=e.filter(s=>s.in.length===0);if(r.length===0){e.forEach(s=>{s.level=0});return}for(;r.length>0;){const s=r.shift();s.out.forEach(a=>{const o=a.target;o.level=Math.max(o.level,s.level+1),n.set(o.id,n.get(o.id)-1),n.get(o.id)===0&&r.push(o)})}}nodeValue(t){const e=bg(t.in,r=>r.value),n=bg(t.out,r=>r.value);return Math.max(e,n,1)}renderVenn(t,e,n){const r=this.resolveVennDataset(e,n);if(!r||!Array.isArray(r.sets)||r.sets.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const s=n.title||r.title||"ベン図",a=this.createPanelInner(t,s,{compact:!0}),o=r.sets.filter(m=>Array.isArray(m?.sets)&&m.sets.length>=1&&Number.isFinite(Number(m.size))).map(m=>({sets:m.sets.map(v=>String(v)),size:Math.max(0,Number(m.size))})),l=[...new Set(o.filter(m=>m.sets.length===1).map(m=>m.sets[0]))];if(l.length<2||l.length>3){this.renderUnsupported(t,"ベン図は2〜3集合を想定しています");return}if(o.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const c=this.buildPalette(l.length),u=new Map(l.map((m,v)=>[m,c[v]])),f=m=>m.slice().sort().join("&"),h=new Map(o.map(m=>[f(m.sets),m]));let d;try{d=hD(o,{width:a.width,height:a.height,padding:6,round:2})}catch(m){console.warn("venn layout failed",m),this.renderUnsupported(t,"vennレイアウトの計算に失敗しました");return}if(!Array.isArray(d)||d.length===0){this.renderUnsupported(t,"vennレイアウト結果が空です");return}const p=a.group.append("g"),_=[...d].sort((m,v)=>m.data.sets.length-v.data.sets.length);if(p.selectAll("path.venn-area").data(_).enter().append("path").attr("class",m=>`venn-area venn-${m.data.sets.length===1?"circle":"intersection"}`).attr("d",m=>m.path).attr("fill-rule",m=>m.data.sets.length>1?"evenodd":null).attr("fill",m=>m.data.sets.length===1?u.get(m.data.sets[0])||"#5fb3ff":"#dbe6f2").attr("fill-opacity",m=>m.data.sets.length===1?.3:.16).attr("stroke",m=>m.data.sets.length===1?u.get(m.data.sets[0])||"#5fb3ff":"#dbe6f2").attr("stroke-opacity",m=>m.data.sets.length===1?.95:.45).attr("stroke-width",m=>m.data.sets.length===1?1.2:.9),d.filter(m=>m.data.sets.length===1).forEach(m=>{const v=m.data.sets[0],M=m.circles.find(y=>y.set===v)||m.circles[0];M&&p.append("text").attr("x",M.x).attr("y",Math.max(10,M.y-M.radius-8)).attr("text-anchor","middle").attr("fill","#e6edf5").attr("font-size",10).text(v)}),l.length===2){const m=l[0],v=l[1],M=h.get(f([m,v]))?.size??0,y=h.get(f([m]))?.size??0,x=h.get(f([v]))?.size??0,E=new Map([[f([m]),Math.max(0,y-M)],[f([v]),Math.max(0,x-M)],[f([m,v]),Math.max(0,M)]]);d.filter(T=>E.has(f(T.data.sets))).forEach(T=>{const R=E.get(f(T.data.sets));Number.isFinite(R)&&p.append("text").attr("x",T.text.x).attr("y",T.text.y+3).attr("text-anchor","middle").attr("fill","#ffffff").attr("font-size",10).text(ga(",")(R))})}l.length===3&&d.filter(m=>m.data.sets.length>=2).forEach(m=>{const v=h.get(f(m.data.sets));v&&p.append("text").attr("x",m.text.x).attr("y",m.text.y+3).attr("text-anchor","middle").attr("fill","#ffffff").attr("font-size",10).text(ga(",")(v.size))})}resolveVennDataset(t,e){return t?.sets?t:Array.isArray(t?.groups)&&(e.groupId?t.groups.find(r=>r.id===e.groupId):t.groups[e.groupIndex??0])||null}renderUnsupported(t,e){const n=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);n.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#0f1b2a").attr("fill-opacity",.7).attr("stroke","#42536a").attr("stroke-opacity",.5),n.append("text").attr("x",t.width/2).attr("y",t.height/2).attr("text-anchor","middle").attr("fill","#e7edf6").attr("font-size",12).text(e)}drawEmptyPanel(t){this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`).append("rect").attr("width",t.width).attr("height",t.height).attr("rx",8).attr("fill","#0e1a28").attr("fill-opacity",.2).attr("stroke","#42536a").attr("stroke-dasharray","4 4").attr("stroke-opacity",.35)}createPanelInner(t,e="",n={}){const r=n.compact===!0,s=e?r?20:28:0,a=r?10:14,o=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);o.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#091523").attr("fill-opacity",.63).attr("stroke","#5f738a").attr("stroke-opacity",.35),e&&o.append("text").attr("x",a).attr("y",a+3).attr("dominant-baseline","hanging").attr("fill","#ffffff").attr("font-size",r?12:14).attr("font-weight",600).text(e);const l=o.append("g").attr("transform",`translate(${a}, ${a+s})`),c=t.width-a*2,u=t.height-a*2-s;return{group:l,width:c,height:u}}drawBackdrop(){this.root.append("rect").attr("x",0).attr("y",0).attr("width",Hf).attr("height",Gf).attr("fill","#06111e").attr("fill-opacity",.64)}ensureSvg(){this.container&&(this.svg&&this.svg.node()?.isConnected||(this.clear(),this.svg=Kx(this.container).append("svg").attr("viewBox",`0 0 ${Hf} ${Gf}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","chart layer"),this.root=this.svg.append("g")))}getThemePrimary(){return getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#ff6b6b"}buildPalette(t){const e=["#5fb3ff","#f59e0b","#34d399","#f87171","#a78bfa","#2dd4bf","#f472b6","#60a5fa","#fbbf24","#4ade80"];return t<=e.length?e.slice(0,t):Array.from({length:t},(n,r)=>x3(r/t))}toSafeCssToken(t){return String(t).replaceAll(/[^a-zA-Z0-9_-]/g,"-")}resolveLineLabelGutter(t){return t<280?70:t<420?96:130}resolveYAxisLabelGutter(t,e){const n=t.map(l=>Number(l[e])).filter(l=>Number.isFinite(l));if(n.length===0)return 56;const r=Tf(n.map(l=>Math.abs(l)))||0,s=[0,r*.25,r*.5,r*.75,r],o=14+(Tf(s.map(l=>ga(",")(Math.round(l)).length))||4)*7;return Math.max(56,Math.min(110,o))}clear(){this.container&&(this.container.innerHTML=""),this.svg=null,this.root=null}destroy(){window.removeEventListener("resize",this.onResize),this.clear()}}class gD{constructor(t){this.config=t,this.elements={},this.svgHosts=null,this.webglLayer=null,this.imageLayer=null,this.mapLayer=null,this.chartLayer=null,this.activeLayer=null,this.activeChartSpanId=null}async init(){this.elements={image:document.getElementById("image-layer"),webgl:document.getElementById("webgl-layer"),svg:document.getElementById("svg-layer")};const t=this.elements.webgl;t&&(this.webglLayer=new Qw(t),this.webglLayer.init(),t.classList.add("active"),this.activeLayer="webgl"),this.elements.image&&(this.imageLayer=new tA(this.elements.image)),this.elements.svg&&(this.svgHosts=this.createSvgHosts(this.elements.svg),this.mapLayer=new G3(this.svgHosts.map),this.chartLayer=new mD(this.svgHosts.chart))}createSvgHosts(t){t.innerHTML="";const e=document.createElement("div");e.className="svg-sub-layer",e.dataset.layer="map";const n=document.createElement("div");return n.className="svg-sub-layer",n.dataset.layer="chart",t.appendChild(e),t.appendChild(n),{map:e,chart:n}}transition(t,e){const n=this.resolveActiveLayer(t);if(this.activeLayer&&this.activeLayer!==n&&(this.elements[this.activeLayer]?.classList.remove("active"),this.activeLayer==="image"&&this.imageLayer?.hide(),this.activeLayer==="svg"&&(this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null)),n&&this.elements[n]&&this.elements[n].classList.add("active"),n==="image"&&t.image&&this.imageLayer?.show(t.image),n==="svg")if(t.map?.visible)this.chartLayer?.clear(),this.activeChartSpanId=null,this.mapLayer?.render(t.map);else if(t.chart?.visible){this.mapLayer?.clear();const r=this.resolveChartSpanId(t.chart),a=this.shouldContinueChartFromPrevious(t.chart)&&r&&this.activeChartSpanId===r;this.chartLayer?.render(t.chart,{transitionFromPrevious:!!a,spanId:r}).catch(o=>{console.error("Chart render failed:",o)}),this.activeChartSpanId=r}else this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null;this.activeLayer=n}resolveActiveLayer(t){return t.chart?.visible||t.map?.visible?"svg":t.image?.visible?"image":"webgl"}resolveChartSpanId(t){const e=t?.span?.id;if(e==null)return null;const n=String(e).trim();return n.length>0?n:null}shouldContinueChartFromPrevious(t){return!!t?.span?.continueFromPrevious}updateProgress(t){this.webglLayer?.setProgress(t)}setThemeColor(t){this.webglLayer?.setThemeColor(t)}destroy(){this.chartLayer?.destroy(),this.webglLayer?.destroy()}}class _D{constructor(t){this.config=t,this.container=document.getElementById("scroll-content"),this.stepElements=[]}render(){this.config.steps.forEach((t,e)=>{const n=this.createStepElement(t,e);this.container.appendChild(n),this.stepElements.push(n)})}createStepElement(t,e){const n=document.createElement("section");if(n.className="step",n.dataset.step=e,n.id=t.id,t.scrollHeight&&(n.style.minHeight=t.scrollHeight),t.fixedClosing)return n.classList.add("fixed-closing-step"),n.appendChild(this.createFixedClosingElement()),n;if(t.text?.content){const r=document.createElement("div");r.className="text-card",r.innerHTML=t.text.content,this.applyPosition(r,t.text.position),n.appendChild(r)}return n}applyPosition(t,e){e&&(t.parentElement||t.closest(".step"),e.width&&(t.style.maxWidth=e.width),t.dataset.hAlign=e.horizontal||"center",t.dataset.vAlign=e.vertical||"center")}activateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");if(n){n.classList.add("visible");const r=n.dataset.hAlign||"center",s=n.dataset.vAlign||"center",a={left:"flex-start",center:"center",right:"flex-end"},o={top:"flex-start",center:"center",bottom:"flex-end"};e.style.justifyContent=a[r]||"center",e.style.alignItems=o[s]||"center"}}deactivateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");n&&n.classList.remove("visible")}createFixedClosingElement(){const t=document.createElement("div");return t.className="fixed-closing-inner",t.innerHTML=`
      <div class="fixed-closing-main">
        <div class="fixed-closing-logo">
          <img
            class="fixed-closing-logo-image"
            src="/images/fgfj-logo-horizontal-white.svg"
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
    `,t}}const Xd={aids:{id:"aids",name:"HIV/エイズとの闘い",primary:"#ff6b6b",secondary:"#ff8e8e",accent:"#e85555"},tuberculosis:{id:"tuberculosis",name:"結核との闘い",primary:"#4ecdc4",secondary:"#6dd5d0",accent:"#3bb8b0"},malariae:{id:"malariae",name:"マラリアとの闘い",primary:"#f4a620",secondary:"#f6b84a",accent:"#e89813"}};class xD{constructor(t,e="aids"){this.container=t,this.currentDiseaseId=e}render(){const t=Xd[this.currentDiseaseId];this.container.innerHTML=`
      <div class="nav-inner">
        <div class="nav-logo">
          <span class="nav-logo-text">データで見る感染症との闘い</span>
        </div>
        <ul class="nav-links">
          ${Object.values(Xd).map(e=>{const n=e.id===this.currentDiseaseId;return`
              <li>
                <a href="/${e.id}/"
                   class="nav-link${n?" active":""}"
                   style="--link-color: ${e.primary}"
                   data-disease="${e.id}">
                  ${e.name}
                </a>
              </li>`}).join("")}
        </ul>
      </div>
    `,document.documentElement.style.setProperty("--theme-primary",t.primary),document.documentElement.style.setProperty("--theme-secondary",t.secondary),document.documentElement.style.setProperty("--theme-accent",t.accent)}}const vD=Object.keys(Xd),yD="aids";function SD(){const e=window.location.pathname.split("/").filter(Boolean)[0];return e&&vD.includes(e)?e:yD}class MD{constructor(){this.config=null,this.scrollController=null,this.layerOrchestrator=null,this.contentRenderer=null}async init(){try{const t=SD();new xD(document.getElementById("header-nav"),t).render();const n=new $v(t);this.config=await n.load(),this.contentRenderer=new _D(this.config),this.contentRenderer.render(),this.layerOrchestrator=new gD(this.config),await this.layerOrchestrator.init(),this.scrollController=new kS({onStepEnter:(r,s)=>this.handleStepEnter(r,s),onStepLeave:(r,s)=>this.handleStepLeave(r,s),onProgress:r=>this.handleProgress(r)}),this.scrollController.init(),console.log(`App initialized with ${this.config.steps.length} steps`)}catch(t){console.error("App initialization failed:",t)}}handleStepEnter(t,e){const n=this.config.steps[t];n&&(this.contentRenderer.activateStep(t),this.layerOrchestrator.transition(n,e),document.body.classList.toggle("is-fixed-closing",!!n.fixedClosing))}handleStepLeave(t,e){this.config.steps[t]?.fixedClosing&&document.body.classList.remove("is-fixed-closing"),this.contentRenderer.deactivateStep(t)}handleProgress(t){this.layerOrchestrator.updateProgress(t)}}const ED=new MD;ED.init();
