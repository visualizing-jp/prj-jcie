import{R as rg,x as lx,y as cx,z as ux,B as Ad,C as Cd,E as hx,F as bl,G as fx,H as dx,p as px,I as mx,J as gx,K as _x,L as xx,M as sg,N as vx,O as yx,j as ag,P as Mx,u as El,m as Bu,o as Sx,t as og,q as bx,Q as Fn,S as Ex,v as Rd,w as Pd,D as Dd}from"./feature-CX06nGeL.js";function Tl(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function Tx(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Af(i){let t,e,n;i.length!==2?(t=Tl,e=(a,l)=>Tl(i(a),l),n=(a,l)=>i(a)-l):(t=i===Tl||i===Tx?i:wx,e=i,n=i);function r(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<0?c=h+1:u=h}while(c<u)}return c}function s(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function o(a,l,c=0,u=a.length){const h=r(a,l,c,u-1);return h>c&&n(a[h-1],l)>-n(a[h],l)?h-1:h}return{left:r,center:o,right:s}}function wx(){return 0}function Ax(i){return i===null?NaN:+i}const Cx=Af(Tl),Rx=Cx.right;Af(Ax).center;function Ld(i,t){let e,n;if(t===void 0)for(const r of i)r!=null&&(e===void 0?r>=r&&(e=n=r):(e>r&&(e=r),n<r&&(n=r)));else{let r=-1;for(let s of i)(s=t(s,++r,i))!=null&&(e===void 0?s>=s&&(e=n=s):(e>s&&(e=s),n<s&&(n=s)))}return[e,n]}class zu extends Map{constructor(t,e=Lx){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(Nd(this,t))}has(t){return super.has(Nd(this,t))}set(t,e){return super.set(Px(this,t),e)}delete(t){return super.delete(Dx(this,t))}}function Nd({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):e}function Px({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):(i.set(n,e),e)}function Dx({_intern:i,_key:t},e){const n=t(e);return i.has(n)&&(e=i.get(n),i.delete(n)),e}function Lx(i){return i!==null&&typeof i=="object"?i.valueOf():i}function Nx(i){return i}function Ix(i,...t){return Ux(i,Array.from,Nx,t)}function Ux(i,t,e,n){return(function r(s,o){if(o>=n.length)return e(s);const a=new zu,l=n[o++];let c=-1;for(const u of s){const h=l(u,++c,s),f=a.get(h);f?f.push(u):a.set(h,[u])}for(const[u,h]of a)a.set(u,r(h,o));return t(a)})(i,0)}const Fx=Math.sqrt(50),Ox=Math.sqrt(10),kx=Math.sqrt(2);function Gl(i,t,e){const n=(t-i)/Math.max(0,e),r=Math.floor(Math.log10(n)),s=n/Math.pow(10,r),o=s>=Fx?10:s>=Ox?5:s>=kx?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/o,a=Math.round(i*c),l=Math.round(t*c),a/c<i&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*o,a=Math.round(i/c),l=Math.round(t/c),a*c<i&&++a,l*c>t&&--l),l<a&&.5<=e&&e<2?Gl(i,t,e*2):[a,l,c]}function Bx(i,t,e){if(t=+t,i=+i,e=+e,!(e>0))return[];if(i===t)return[i];const n=t<i,[r,s,o]=n?Gl(t,i,e):Gl(i,t,e);if(!(s>=r))return[];const a=s-r+1,l=new Array(a);if(n)if(o<0)for(let c=0;c<a;++c)l[c]=(s-c)/-o;else for(let c=0;c<a;++c)l[c]=(s-c)*o;else if(o<0)for(let c=0;c<a;++c)l[c]=(r+c)/-o;else for(let c=0;c<a;++c)l[c]=(r+c)*o;return l}function Vu(i,t,e){return t=+t,i=+i,e=+e,Gl(i,t,e)[2]}function zx(i,t,e){t=+t,i=+i,e=+e;const n=t<i,r=n?Vu(t,i,e):Vu(i,t,e);return(n?-1:1)*(r<0?1/-r:r)}function Ra(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e<n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function Id(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e>n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e>r||e===void 0&&r>=r)&&(e=r)}return e}function Ud(i,t){let e=0;if(t===void 0)for(let n of i)(n=+n)&&(e+=n);else{let n=-1;for(let r of i)(r=+t(r,++n,i))&&(e+=r)}return e}function Vx(i){return i}var Lc=1,Nc=2,Hu=3,Va=4,Fd=1e-6;function Hx(i){return"translate("+i+",0)"}function Gx(i){return"translate(0,"+i+")"}function Wx(i){return t=>+i(t)}function Xx(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),e=>+i(e)+t}function $x(){return!this.__axis}function lg(i,t){var e=[],n=null,r=null,s=6,o=6,a=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=i===Lc||i===Va?-1:1,u=i===Va||i===Nc?"x":"y",h=i===Lc||i===Hu?Hx:Gx;function f(d){var p=n??(t.ticks?t.ticks.apply(t,e):t.domain()),m=r??(t.tickFormat?t.tickFormat.apply(t,e):Vx),g=Math.max(s,0)+a,_=t.range(),y=+_[0]+l,M=+_[_.length-1]+l,x=(t.bandwidth?Xx:Wx)(t.copy(),l),S=d.selection?d.selection():d,b=S.selectAll(".domain").data([null]),w=S.selectAll(".tick").data(p,t).order(),R=w.exit(),v=w.enter().append("g").attr("class","tick"),E=w.select("line"),D=w.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(v),E=E.merge(v.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),D=D.merge(v.append("text").attr("fill","currentColor").attr(u,c*g).attr("dy",i===Lc?"0em":i===Hu?"0.71em":"0.32em")),d!==S&&(b=b.transition(d),w=w.transition(d),E=E.transition(d),D=D.transition(d),R=R.transition(d).attr("opacity",Fd).attr("transform",function(C){return isFinite(C=x(C))?h(C+l):this.getAttribute("transform")}),v.attr("opacity",Fd).attr("transform",function(C){var L=this.parentNode.__axis;return h((L&&isFinite(L=L(C))?L:x(C))+l)})),R.remove(),b.attr("d",i===Va||i===Nc?o?"M"+c*o+","+y+"H"+l+"V"+M+"H"+c*o:"M"+l+","+y+"V"+M:o?"M"+y+","+c*o+"V"+l+"H"+M+"V"+c*o:"M"+y+","+l+"H"+M),w.attr("opacity",1).attr("transform",function(C){return h(x(C)+l)}),E.attr(u+"2",c*s),D.attr(u,c*g).text(m),S.filter($x).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Nc?"start":i===Va?"end":"middle"),S.each(function(){this.__axis=x})}return f.scale=function(d){return arguments.length?(t=d,f):t},f.ticks=function(){return e=Array.from(arguments),f},f.tickArguments=function(d){return arguments.length?(e=d==null?[]:Array.from(d),f):e.slice()},f.tickValues=function(d){return arguments.length?(n=d==null?null:Array.from(d),f):n&&n.slice()},f.tickFormat=function(d){return arguments.length?(r=d,f):r},f.tickSize=function(d){return arguments.length?(s=o=+d,f):s},f.tickSizeInner=function(d){return arguments.length?(s=+d,f):s},f.tickSizeOuter=function(d){return arguments.length?(o=+d,f):o},f.tickPadding=function(d){return arguments.length?(a=+d,f):a},f.offset=function(d){return arguments.length?(l=+d,f):l},f}function Ic(i){return lg(Hu,i)}function Od(i){return lg(Va,i)}function Yx(i){let t;for(;t=i.sourceEvent;)i=t;return i}function Uc(i,t){if(i=Yx(i),t===void 0&&(t=i.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var n=e.createSVGPoint();return n.x=i.clientX,n.y=i.clientY,n=n.matrixTransform(t.getScreenCTM().inverse()),[n.x,n.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[i.clientX-r.left-t.clientLeft,i.clientY-r.top-t.clientTop]}}return[i.pageX,i.pageY]}const qx=Math.PI/180,jx=180/Math.PI;var cg=-.14861,Cf=1.78277,Rf=-.29227,gc=-.90649,ho=1.97294,kd=ho*gc,Bd=ho*Cf,zd=Cf*Rf-gc*cg;function Kx(i){if(i instanceof gs)return new gs(i.h,i.s,i.l,i.opacity);i instanceof rg||(i=lx(i));var t=i.r/255,e=i.g/255,n=i.b/255,r=(zd*n+kd*t-Bd*e)/(zd+kd-Bd),s=n-r,o=(ho*(e-r)-Rf*s)/gc,a=Math.sqrt(o*o+s*s)/(ho*r*(1-r)),l=a?Math.atan2(o,s)*jx-120:NaN;return new gs(l<0?l+360:l,a,r,i.opacity)}function kr(i,t,e,n){return arguments.length===1?Kx(i):new gs(i,t,e,n??1)}function gs(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}cx(gs,kr,ux(hx,{brighter(i){return i=i==null?Cd:Math.pow(Cd,i),new gs(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Ad:Math.pow(Ad,i),new gs(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=isNaN(this.h)?0:(this.h+120)*qx,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),n=Math.cos(i),r=Math.sin(i);return new rg(255*(t+e*(cg*n+Cf*r)),255*(t+e*(Rf*n+gc*r)),255*(t+e*(ho*n)),this.opacity)}}));function Zx(i,t){return i=+i,t=+t,function(e){return Math.round(i*(1-e)+t*e)}}function ug(i){return(function t(e){e=+e;function n(r,s){var o=i((r=kr(r)).h,(s=kr(s)).h),a=bl(r.s,s.s),l=bl(r.l,s.l),c=bl(r.opacity,s.opacity);return function(u){return r.h=o(u),r.s=a(u),r.l=l(Math.pow(u,e)),r.opacity=c(u),r+""}}return n.gamma=t,n})(1)}ug(fx);var hg=ug(bl);const Gu=Math.PI,Wu=2*Gu,is=1e-6,Jx=Wu-is;function fg(i){this._+=i[0];for(let t=1,e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function Qx(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return fg;const e=10**t;return function(n){this._+=n[0];for(let r=1,s=n.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+n[r]}}let tv=class{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?fg:Qx(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,r){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(t,e,n,r,s,o){this._append`C${+t},${+e},${+n},${+r},${this._x1=+s},${this._y1=+o}`}arcTo(t,e,n,r,s){if(t=+t,e=+e,n=+n,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,l=n-t,c=r-e,u=o-t,h=a-e,f=u*u+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(f>is)if(!(Math.abs(h*l-c*u)>is)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let d=n-o,p=r-a,m=l*l+c*c,g=d*d+p*p,_=Math.sqrt(m),y=Math.sqrt(f),M=s*Math.tan((Gu-Math.acos((m+f-g)/(2*_*y)))/2),x=M/y,S=M/_;Math.abs(x-1)>is&&this._append`L${t+x*u},${e+x*h}`,this._append`A${s},${s},0,0,${+(h*d>u*p)},${this._x1=t+S*l},${this._y1=e+S*c}`}}arc(t,e,n,r,s,o){if(t=+t,e=+e,n=+n,o=!!o,n<0)throw new Error(`negative radius: ${n}`);let a=n*Math.cos(r),l=n*Math.sin(r),c=t+a,u=e+l,h=1^o,f=o?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>is||Math.abs(this._y1-u)>is)&&this._append`L${c},${u}`,n&&(f<0&&(f=f%Wu+Wu),f>Jx?this._append`A${n},${n},0,1,${h},${t-a},${e-l}A${n},${n},0,1,${h},${this._x1=c},${this._y1=u}`:f>is&&this._append`A${n},${n},0,${+(f>=Gu)},${h},${this._x1=t+n*Math.cos(s)},${this._y1=e+n*Math.sin(s)}`)}rect(t,e,n,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};var Vd={},Fc={},Oc=34,Pa=10,kc=13;function dg(i){return new Function("d","return {"+i.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function ev(i,t){var e=dg(i);return function(n,r){return t(e(n),r,i)}}function Hd(i){var t=Object.create(null),e=[];return i.forEach(function(n){for(var r in n)r in t||e.push(t[r]=r)}),e}function Un(i,t){var e=i+"",n=e.length;return n<t?new Array(t-n+1).join(0)+e:e}function nv(i){return i<0?"-"+Un(-i,6):i>9999?"+"+Un(i,6):Un(i,4)}function iv(i){var t=i.getUTCHours(),e=i.getUTCMinutes(),n=i.getUTCSeconds(),r=i.getUTCMilliseconds();return isNaN(i)?"Invalid Date":nv(i.getUTCFullYear())+"-"+Un(i.getUTCMonth()+1,2)+"-"+Un(i.getUTCDate(),2)+(r?"T"+Un(t,2)+":"+Un(e,2)+":"+Un(n,2)+"."+Un(r,3)+"Z":n?"T"+Un(t,2)+":"+Un(e,2)+":"+Un(n,2)+"Z":e||t?"T"+Un(t,2)+":"+Un(e,2)+"Z":"")}function rv(i){var t=new RegExp('["'+i+`
\r]`),e=i.charCodeAt(0);function n(h,f){var d,p,m=r(h,function(g,_){if(d)return d(g,_-1);p=g,d=f?ev(g,f):dg(g)});return m.columns=p||[],m}function r(h,f){var d=[],p=h.length,m=0,g=0,_,y=p<=0,M=!1;h.charCodeAt(p-1)===Pa&&--p,h.charCodeAt(p-1)===kc&&--p;function x(){if(y)return Fc;if(M)return M=!1,Vd;var b,w=m,R;if(h.charCodeAt(w)===Oc){for(;m++<p&&h.charCodeAt(m)!==Oc||h.charCodeAt(++m)===Oc;);return(b=m)>=p?y=!0:(R=h.charCodeAt(m++))===Pa?M=!0:R===kc&&(M=!0,h.charCodeAt(m)===Pa&&++m),h.slice(w+1,b-1).replace(/""/g,'"')}for(;m<p;){if((R=h.charCodeAt(b=m++))===Pa)M=!0;else if(R===kc)M=!0,h.charCodeAt(m)===Pa&&++m;else if(R!==e)continue;return h.slice(w,b)}return y=!0,h.slice(w,p)}for(;(_=x())!==Fc;){for(var S=[];_!==Vd&&_!==Fc;)S.push(_),_=x();f&&(S=f(S,g++))==null||d.push(S)}return d}function s(h,f){return h.map(function(d){return f.map(function(p){return u(d[p])}).join(i)})}function o(h,f){return f==null&&(f=Hd(h)),[f.map(u).join(i)].concat(s(h,f)).join(`
`)}function a(h,f){return f==null&&(f=Hd(h)),s(h,f).join(`
`)}function l(h){return h.map(c).join(`
`)}function c(h){return h.map(u).join(i)}function u(h){return h==null?"":h instanceof Date?iv(h):t.test(h+="")?'"'+h.replace(/"/g,'""')+'"':h}return{parse:n,parseRows:r,format:o,formatBody:a,formatRows:l,formatRow:c,formatValue:u}}var sv=rv(","),av=sv.parse;function ov(i){for(var t in i){var e=i[t].trim(),n,r;if(!e)e=null;else if(e==="true")e=!0;else if(e==="false")e=!1;else if(e==="NaN")e=NaN;else if(!isNaN(n=+e))e=n;else if(r=e.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))lv&&r[4]&&!r[7]&&(e=e.replace(/-/g,"/").replace(/T/," ")),e=new Date(e);else continue;i[t]=e}return i}const lv=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function cv(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);return i.text()}function uv(i,t){return fetch(i,t).then(cv)}function hv(i){return function(t,e,n){return arguments.length===2&&typeof e=="function"&&(n=e,e=void 0),uv(t,e).then(function(r){return i(r,n)})}}var fv=hv(av);function dv(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function Wl(i,t){if(!isFinite(i)||i===0)return null;var e=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"),n=i.slice(0,e);return[n.length>1?n[0]+n.slice(2):n,+i.slice(e+1)]}function ha(i){return i=Wl(Math.abs(i)),i?i[1]:NaN}function pv(i,t){return function(e,n){for(var r=e.length,s=[],o=0,a=i[0],l=0;r>0&&a>0&&(l+a+1>n&&(a=Math.max(1,n-l)),s.push(e.substring(r-=a,r+a)),!((l+=a+1)>n));)a=i[o=(o+1)%i.length];return s.reverse().join(t)}}function mv(i){return function(t){return t.replace(/[0-9]/g,function(e){return i[+e]})}}var gv=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Xl(i){if(!(t=gv.exec(i)))throw new Error("invalid format: "+i);var t;return new Pf({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Xl.prototype=Pf.prototype;function Pf(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Pf.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function _v(i){t:for(var t=i.length,e=1,n=-1,r;e<t;++e)switch(i[e]){case".":n=r=e;break;case"0":n===0&&(n=e),r=e;break;default:if(!+i[e])break t;n>0&&(n=0);break}return n>0?i.slice(0,n)+i.slice(r+1):i}var $l;function xv(i,t){var e=Wl(i,t);if(!e)return $l=void 0,i.toPrecision(t);var n=e[0],r=e[1],s=r-($l=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=n.length;return s===o?n:s>o?n+new Array(s-o+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+Wl(i,Math.max(0,t+s-1))[0]}function Gd(i,t){var e=Wl(i,t);if(!e)return i+"";var n=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+n:n.length>r+1?n.slice(0,r+1)+"."+n.slice(r+1):n+new Array(r-n.length+2).join("0")}const Wd={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:dv,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>Gd(i*100,t),r:Gd,s:xv,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function Xd(i){return i}var $d=Array.prototype.map,Yd=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function vv(i){var t=i.grouping===void 0||i.thousands===void 0?Xd:pv($d.call(i.grouping,Number),i.thousands+""),e=i.currency===void 0?"":i.currency[0]+"",n=i.currency===void 0?"":i.currency[1]+"",r=i.decimal===void 0?".":i.decimal+"",s=i.numerals===void 0?Xd:mv($d.call(i.numerals,String)),o=i.percent===void 0?"%":i.percent+"",a=i.minus===void 0?"−":i.minus+"",l=i.nan===void 0?"NaN":i.nan+"";function c(h,f){h=Xl(h);var d=h.fill,p=h.align,m=h.sign,g=h.symbol,_=h.zero,y=h.width,M=h.comma,x=h.precision,S=h.trim,b=h.type;b==="n"?(M=!0,b="g"):Wd[b]||(x===void 0&&(x=12),S=!0,b="g"),(_||d==="0"&&p==="=")&&(_=!0,d="0",p="=");var w=(f&&f.prefix!==void 0?f.prefix:"")+(g==="$"?e:g==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():""),R=(g==="$"?n:/[%p]/.test(b)?o:"")+(f&&f.suffix!==void 0?f.suffix:""),v=Wd[b],E=/[defgprs%]/.test(b);x=x===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,x)):Math.max(0,Math.min(20,x));function D(C){var L=w,U=R,V,z,I;if(b==="c")U=v(C)+U,C="";else{C=+C;var k=C<0||1/C<0;if(C=isNaN(C)?l:v(Math.abs(C),x),S&&(C=_v(C)),k&&+C==0&&m!=="+"&&(k=!1),L=(k?m==="("?m:a:m==="-"||m==="("?"":m)+L,U=(b==="s"&&!isNaN(C)&&$l!==void 0?Yd[8+$l/3]:"")+U+(k&&m==="("?")":""),E){for(V=-1,z=C.length;++V<z;)if(I=C.charCodeAt(V),48>I||I>57){U=(I===46?r+C.slice(V+1):C.slice(V))+U,C=C.slice(0,V);break}}}M&&!_&&(C=t(C,1/0));var X=L.length+C.length+U.length,P=X<y?new Array(y-X+1).join(d):"";switch(M&&_&&(C=t(P+C,P.length?y-U.length:1/0),P=""),p){case"<":C=L+C+U+P;break;case"=":C=L+P+C+U;break;case"^":C=P.slice(0,X=P.length>>1)+L+C+U+P.slice(X);break;default:C=P+L+C+U;break}return s(C)}return D.toString=function(){return h+""},D}function u(h,f){var d=Math.max(-8,Math.min(8,Math.floor(ha(f)/3)))*3,p=Math.pow(10,-d),m=c((h=Xl(h),h.type="f",h),{suffix:Yd[8+d/3]});return function(g){return m(p*g)}}return{format:c,formatPrefix:u}}var No,hi,pg;yv({thousands:",",grouping:[3],currency:["$",""]});function yv(i){return No=vv(i),hi=No.format,pg=No.formatPrefix,No}function Mv(i){return Math.max(0,-ha(Math.abs(i)))}function Sv(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ha(t)/3)))*3-ha(Math.abs(i)))}function bv(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,ha(t)-ha(i))+1}function Df(i,t){return[i,_x(xx((sg+t)/2))]}Df.invert=function(i,t){return[i,2*vx(yx(t))-sg]};function Ev(){return Tv(Df).scale(961/dx)}function Tv(i){var t=px(i),e=t.center,n=t.scale,r=t.translate,s=t.clipExtent,o=null,a,l,c;t.scale=function(h){return arguments.length?(n(h),u()):n()},t.translate=function(h){return arguments.length?(r(h),u()):r()},t.center=function(h){return arguments.length?(e(h),u()):e()},t.clipExtent=function(h){return arguments.length?(h==null?o=a=l=c=null:(o=+h[0][0],a=+h[0][1],l=+h[1][0],c=+h[1][1]),u()):o==null?null:[[o,a],[l,c]]};function u(){var h=mx*n(),f=t(gx(t.rotate()).invert([0,0]));return s(o==null?[[f[0]-h,f[1]-h],[f[0]+h,f[1]+h]]:i===Df?[[Math.max(f[0]-h,o),a],[Math.min(f[0]+h,l),c]]:[[o,Math.max(f[1]-h,a)],[l,Math.min(f[1]+h,c)]])}return u()}function Lf(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}const qd=Symbol("implicit");function Za(){var i=new zu,t=[],e=[],n=qd;function r(s){let o=i.get(s);if(o===void 0){if(n!==qd)return n;i.set(s,o=t.push(s)-1)}return e[o%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],i=new zu;for(const o of s)i.has(o)||i.set(o,t.push(o)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(n=s,r):n},r.copy=function(){return Za(t,e).unknown(n)},Lf.apply(r,arguments),r}function mg(){var i=Za().unknown(void 0),t=i.domain,e=i.range,n=0,r=1,s,o,a=!1,l=0,c=0,u=.5;delete i.unknown;function h(){var f=t().length,d=r<n,p=d?r:n,m=d?n:r;s=(m-p)/Math.max(1,f-l+c*2),a&&(s=Math.floor(s)),p+=(m-p-s*(f-l))*u,o=s*(1-l),a&&(p=Math.round(p),o=Math.round(o));var g=ag(f).map(function(_){return p+s*_});return e(d?g.reverse():g)}return i.domain=function(f){return arguments.length?(t(f),h()):t()},i.range=function(f){return arguments.length?([n,r]=f,n=+n,r=+r,h()):[n,r]},i.rangeRound=function(f){return[n,r]=f,n=+n,r=+r,a=!0,h()},i.bandwidth=function(){return o},i.step=function(){return s},i.round=function(f){return arguments.length?(a=!!f,h()):a},i.padding=function(f){return arguments.length?(l=Math.min(1,c=+f),h()):l},i.paddingInner=function(f){return arguments.length?(l=Math.min(1,f),h()):l},i.paddingOuter=function(f){return arguments.length?(c=+f,h()):c},i.align=function(f){return arguments.length?(u=Math.max(0,Math.min(1,f)),h()):u},i.copy=function(){return mg(t(),[n,r]).round(a).paddingInner(l).paddingOuter(c).align(u)},Lf.apply(h(),arguments)}function gg(i){var t=i.copy;return i.padding=i.paddingOuter,delete i.paddingInner,delete i.paddingOuter,i.copy=function(){return gg(t())},i}function wv(){return gg(mg.apply(null,arguments).paddingInner(1))}function Av(i){return function(){return i}}function Cv(i){return+i}var jd=[0,1];function Ks(i){return i}function Xu(i,t){return(t-=i=+i)?function(e){return(e-i)/t}:Av(isNaN(t)?NaN:.5)}function Rv(i,t){var e;return i>t&&(e=i,i=t,t=e),function(n){return Math.max(i,Math.min(t,n))}}function Pv(i,t,e){var n=i[0],r=i[1],s=t[0],o=t[1];return r<n?(n=Xu(r,n),s=e(o,s)):(n=Xu(n,r),s=e(s,o)),function(a){return s(n(a))}}function Dv(i,t,e){var n=Math.min(i.length,t.length)-1,r=new Array(n),s=new Array(n),o=-1;for(i[n]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++o<n;)r[o]=Xu(i[o],i[o+1]),s[o]=e(t[o],t[o+1]);return function(a){var l=Rx(i,a,1,n)-1;return s[l](r[l](a))}}function Lv(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function Nv(){var i=jd,t=jd,e=El,n,r,s,o=Ks,a,l,c;function u(){var f=Math.min(i.length,t.length);return o!==Ks&&(o=Rv(i[0],i[f-1])),a=f>2?Dv:Pv,l=c=null,h}function h(f){return f==null||isNaN(f=+f)?s:(l||(l=a(i.map(n),t,e)))(n(o(f)))}return h.invert=function(f){return o(r((c||(c=a(t,i.map(n),Mx)))(f)))},h.domain=function(f){return arguments.length?(i=Array.from(f,Cv),u()):i.slice()},h.range=function(f){return arguments.length?(t=Array.from(f),u()):t.slice()},h.rangeRound=function(f){return t=Array.from(f),e=Zx,u()},h.clamp=function(f){return arguments.length?(o=f?!0:Ks,u()):o!==Ks},h.interpolate=function(f){return arguments.length?(e=f,u()):e},h.unknown=function(f){return arguments.length?(s=f,h):s},function(f,d){return n=f,r=d,u()}}function Iv(){return Nv()(Ks,Ks)}function Uv(i,t,e,n){var r=zx(i,t,e),s;switch(n=Xl(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(i),Math.abs(t));return n.precision==null&&!isNaN(s=Sv(r,o))&&(n.precision=s),pg(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(s=bv(r,Math.max(Math.abs(i),Math.abs(t))))&&(n.precision=s-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(s=Mv(r))&&(n.precision=s-(n.type==="%")*2);break}}return hi(n)}function Fv(i){var t=i.domain;return i.ticks=function(e){var n=t();return Bx(n[0],n[n.length-1],e??10)},i.tickFormat=function(e,n){var r=t();return Uv(r[0],r[r.length-1],e??10,n)},i.nice=function(e){e==null&&(e=10);var n=t(),r=0,s=n.length-1,o=n[r],a=n[s],l,c,u=10;for(a<o&&(c=o,o=a,a=c,c=r,r=s,s=c);u-- >0;){if(c=Vu(o,a,e),c===l)return n[r]=o,n[s]=a,t(n);if(c>0)o=Math.floor(o/c)*c,a=Math.ceil(a/c)*c;else if(c<0)o=Math.ceil(o*c)/c,a=Math.floor(a*c)/c;else break;l=c}return i},i}function rs(){var i=Iv();return i.copy=function(){return Lv(i,rs())},Lf.apply(i,arguments),Fv(i)}hg(kr(-100,.75,.35),kr(80,1.5,.8));hg(kr(260,.75,.35),kr(80,1.5,.8));var Io=kr();function Ov(i){(i<0||i>1)&&(i-=Math.floor(i));var t=Math.abs(i-.5);return Io.h=360*i-100,Io.s=1.5-1.5*t,Io.l=.8-.9*t,Io+""}function le(i){return function(){return i}}const Kd=Math.abs,un=Math.atan2,qr=Math.cos,kv=Math.max,Bc=Math.min,Li=Math.sin,Zs=Math.sqrt,In=1e-12,fo=Math.PI,Yl=fo/2,wl=2*fo;function Bv(i){return i>1?0:i<-1?fo:Math.acos(i)}function Zd(i){return i>=1?Yl:i<=-1?-Yl:Math.asin(i)}function Nf(i){let t=3;return i.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);t=n}return i},()=>new tv(t)}function zv(i){return i.innerRadius}function Vv(i){return i.outerRadius}function Hv(i){return i.startAngle}function Gv(i){return i.endAngle}function Wv(i){return i&&i.padAngle}function Xv(i,t,e,n,r,s,o,a){var l=e-i,c=n-t,u=o-r,h=a-s,f=h*l-u*c;if(!(f*f<In))return f=(u*(t-s)-h*(i-r))/f,[i+f*l,t+f*c]}function Uo(i,t,e,n,r,s,o){var a=i-e,l=t-n,c=(o?s:-s)/Zs(a*a+l*l),u=c*l,h=-c*a,f=i+u,d=t+h,p=e+u,m=n+h,g=(f+p)/2,_=(d+m)/2,y=p-f,M=m-d,x=y*y+M*M,S=r-s,b=f*m-p*d,w=(M<0?-1:1)*Zs(kv(0,S*S*x-b*b)),R=(b*M-y*w)/x,v=(-b*y-M*w)/x,E=(b*M+y*w)/x,D=(-b*y+M*w)/x,C=R-g,L=v-_,U=E-g,V=D-_;return C*C+L*L>U*U+V*V&&(R=E,v=D),{cx:R,cy:v,x01:-u,y01:-h,x11:R*(r/S-1),y11:v*(r/S-1)}}function $v(){var i=zv,t=Vv,e=le(0),n=null,r=Hv,s=Gv,o=Wv,a=null,l=Nf(c);function c(){var u,h,f=+i.apply(this,arguments),d=+t.apply(this,arguments),p=r.apply(this,arguments)-Yl,m=s.apply(this,arguments)-Yl,g=Kd(m-p),_=m>p;if(a||(a=u=l()),d<f&&(h=d,d=f,f=h),!(d>In))a.moveTo(0,0);else if(g>wl-In)a.moveTo(d*qr(p),d*Li(p)),a.arc(0,0,d,p,m,!_),f>In&&(a.moveTo(f*qr(m),f*Li(m)),a.arc(0,0,f,m,p,_));else{var y=p,M=m,x=p,S=m,b=g,w=g,R=o.apply(this,arguments)/2,v=R>In&&(n?+n.apply(this,arguments):Zs(f*f+d*d)),E=Bc(Kd(d-f)/2,+e.apply(this,arguments)),D=E,C=E,L,U;if(v>In){var V=Zd(v/f*Li(R)),z=Zd(v/d*Li(R));(b-=V*2)>In?(V*=_?1:-1,x+=V,S-=V):(b=0,x=S=(p+m)/2),(w-=z*2)>In?(z*=_?1:-1,y+=z,M-=z):(w=0,y=M=(p+m)/2)}var I=d*qr(y),k=d*Li(y),X=f*qr(S),P=f*Li(S);if(E>In){var Y=d*qr(M),pt=d*Li(M),yt=f*qr(x),nt=f*Li(x),et;if(g<fo)if(et=Xv(I,k,yt,nt,Y,pt,X,P)){var G=I-et[0],j=k-et[1],rt=Y-et[0],gt=pt-et[1],mt=1/Li(Bv((G*rt+j*gt)/(Zs(G*G+j*j)*Zs(rt*rt+gt*gt)))/2),Ut=Zs(et[0]*et[0]+et[1]*et[1]);D=Bc(E,(f-Ut)/(mt-1)),C=Bc(E,(d-Ut)/(mt+1))}else D=C=0}w>In?C>In?(L=Uo(yt,nt,I,k,d,C,_),U=Uo(Y,pt,X,P,d,C,_),a.moveTo(L.cx+L.x01,L.cy+L.y01),C<E?a.arc(L.cx,L.cy,C,un(L.y01,L.x01),un(U.y01,U.x01),!_):(a.arc(L.cx,L.cy,C,un(L.y01,L.x01),un(L.y11,L.x11),!_),a.arc(0,0,d,un(L.cy+L.y11,L.cx+L.x11),un(U.cy+U.y11,U.cx+U.x11),!_),a.arc(U.cx,U.cy,C,un(U.y11,U.x11),un(U.y01,U.x01),!_))):(a.moveTo(I,k),a.arc(0,0,d,y,M,!_)):a.moveTo(I,k),!(f>In)||!(b>In)?a.lineTo(X,P):D>In?(L=Uo(X,P,Y,pt,f,-D,_),U=Uo(I,k,yt,nt,f,-D,_),a.lineTo(L.cx+L.x01,L.cy+L.y01),D<E?a.arc(L.cx,L.cy,D,un(L.y01,L.x01),un(U.y01,U.x01),!_):(a.arc(L.cx,L.cy,D,un(L.y01,L.x01),un(L.y11,L.x11),!_),a.arc(0,0,f,un(L.cy+L.y11,L.cx+L.x11),un(U.cy+U.y11,U.cx+U.x11),_),a.arc(U.cx,U.cy,D,un(U.y11,U.x11),un(U.y01,U.x01),!_))):a.arc(0,0,f,S,x,_)}if(a.closePath(),u)return a=null,u+""||null}return c.centroid=function(){var u=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,h=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-fo/2;return[qr(h)*u,Li(h)*u]},c.innerRadius=function(u){return arguments.length?(i=typeof u=="function"?u:le(+u),c):i},c.outerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:le(+u),c):t},c.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:le(+u),c):e},c.padRadius=function(u){return arguments.length?(n=u==null?null:typeof u=="function"?u:le(+u),c):n},c.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:le(+u),c):r},c.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:le(+u),c):s},c.padAngle=function(u){return arguments.length?(o=typeof u=="function"?u:le(+u),c):o},c.context=function(u){return arguments.length?(a=u??null,c):a},c}function _c(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function _g(i){this._context=i}_g.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function xg(i){return new _g(i)}function vg(i){return i[0]}function yg(i){return i[1]}function $u(i,t){var e=le(!0),n=null,r=xg,s=null,o=Nf(a);i=typeof i=="function"?i:i===void 0?vg:le(i),t=typeof t=="function"?t:t===void 0?yg:le(t);function a(l){var c,u=(l=_c(l)).length,h,f=!1,d;for(n==null&&(s=r(d=o())),c=0;c<=u;++c)!(c<u&&e(h=l[c],c,l))===f&&((f=!f)?s.lineStart():s.lineEnd()),f&&s.point(+i(h,c,l),+t(h,c,l));if(d)return s=null,d+""||null}return a.x=function(l){return arguments.length?(i=typeof l=="function"?l:le(+l),a):i},a.y=function(l){return arguments.length?(t=typeof l=="function"?l:le(+l),a):t},a.defined=function(l){return arguments.length?(e=typeof l=="function"?l:le(!!l),a):e},a.curve=function(l){return arguments.length?(r=l,n!=null&&(s=r(n)),a):r},a.context=function(l){return arguments.length?(l==null?n=s=null:s=r(n=l),a):n},a}function Jd(i,t,e){var n=null,r=le(!0),s=null,o=xg,a=null,l=Nf(c);i=typeof i=="function"?i:i===void 0?vg:le(+i),t=typeof t=="function"?t:le(t===void 0?0:+t),e=typeof e=="function"?e:e===void 0?yg:le(+e);function c(h){var f,d,p,m=(h=_c(h)).length,g,_=!1,y,M=new Array(m),x=new Array(m);for(s==null&&(a=o(y=l())),f=0;f<=m;++f){if(!(f<m&&r(g=h[f],f,h))===_)if(_=!_)d=f,a.areaStart(),a.lineStart();else{for(a.lineEnd(),a.lineStart(),p=f-1;p>=d;--p)a.point(M[p],x[p]);a.lineEnd(),a.areaEnd()}_&&(M[f]=+i(g,f,h),x[f]=+t(g,f,h),a.point(n?+n(g,f,h):M[f],e?+e(g,f,h):x[f]))}if(y)return a=null,y+""||null}function u(){return $u().defined(r).curve(o).context(s)}return c.x=function(h){return arguments.length?(i=typeof h=="function"?h:le(+h),n=null,c):i},c.x0=function(h){return arguments.length?(i=typeof h=="function"?h:le(+h),c):i},c.x1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:le(+h),c):n},c.y=function(h){return arguments.length?(t=typeof h=="function"?h:le(+h),e=null,c):t},c.y0=function(h){return arguments.length?(t=typeof h=="function"?h:le(+h),c):t},c.y1=function(h){return arguments.length?(e=h==null?null:typeof h=="function"?h:le(+h),c):e},c.lineX0=c.lineY0=function(){return u().x(i).y(t)},c.lineY1=function(){return u().x(i).y(e)},c.lineX1=function(){return u().x(n).y(t)},c.defined=function(h){return arguments.length?(r=typeof h=="function"?h:le(!!h),c):r},c.curve=function(h){return arguments.length?(o=h,s!=null&&(a=o(s)),c):o},c.context=function(h){return arguments.length?(h==null?s=a=null:a=o(s=h),c):s},c}function Yv(i,t){return t<i?-1:t>i?1:t>=i?0:NaN}function qv(i){return i}function jv(){var i=qv,t=Yv,e=null,n=le(0),r=le(wl),s=le(0);function o(a){var l,c=(a=_c(a)).length,u,h,f=0,d=new Array(c),p=new Array(c),m=+n.apply(this,arguments),g=Math.min(wl,Math.max(-wl,r.apply(this,arguments)-m)),_,y=Math.min(Math.abs(g)/c,s.apply(this,arguments)),M=y*(g<0?-1:1),x;for(l=0;l<c;++l)(x=p[d[l]=l]=+i(a[l],l,a))>0&&(f+=x);for(t!=null?d.sort(function(S,b){return t(p[S],p[b])}):e!=null&&d.sort(function(S,b){return e(a[S],a[b])}),l=0,h=f?(g-c*M)/f:0;l<c;++l,m=_)u=d[l],x=p[u],_=m+(x>0?x*h:0)+M,p[u]={data:a[u],index:l,value:x,startAngle:m,endAngle:_,padAngle:y};return p}return o.value=function(a){return arguments.length?(i=typeof a=="function"?a:le(+a),o):i},o.sortValues=function(a){return arguments.length?(t=a,e=null,o):t},o.sort=function(a){return arguments.length?(e=a,t=null,o):e},o.startAngle=function(a){return arguments.length?(n=typeof a=="function"?a:le(+a),o):n},o.endAngle=function(a){return arguments.length?(r=typeof a=="function"?a:le(+a),o):r},o.padAngle=function(a){return arguments.length?(s=typeof a=="function"?a:le(+a),o):s},o}class Kv{constructor(t,e){this._context=t,this._x=e}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,e){switch(t=+t,e=+e,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,e,t,e):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+e)/2,t,this._y0,t,e);break}}this._x0=t,this._y0=e}}function Zv(i){return new Kv(i,!0)}function Qd(i,t,e){i._context.bezierCurveTo((2*i._x0+i._x1)/3,(2*i._y0+i._y1)/3,(i._x0+2*i._x1)/3,(i._y0+2*i._y1)/3,(i._x0+4*i._x1+t)/6,(i._y0+4*i._y1+e)/6)}function Mg(i){this._context=i}Mg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Qd(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Qd(this,i,t);break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t}};function Jv(i){return new Mg(i)}function tp(i){return i<0?-1:1}function ep(i,t,e){var n=i._x1-i._x0,r=t-i._x1,s=(i._y1-i._y0)/(n||r<0&&-0),o=(e-i._y1)/(r||n<0&&-0),a=(s*r+o*n)/(n+r);return(tp(s)+tp(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(a))||0}function np(i,t){var e=i._x1-i._x0;return e?(3*(i._y1-i._y0)/e-t)/2:t}function zc(i,t,e){var n=i._x0,r=i._y0,s=i._x1,o=i._y1,a=(s-n)/3;i._context.bezierCurveTo(n+a,r+a*t,s-a,o-a*e,s,o)}function ql(i){this._context=i}ql.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:zc(this,this._t0,np(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var e=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,zc(this,np(this,e=ep(this,i,t)),e);break;default:zc(this,this._t0,e=ep(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=e}}};Object.create(ql.prototype).point=function(i,t){ql.prototype.point.call(this,t,i)};function ip(i){return new ql(i)}function Yu(i,t){if((o=i.length)>1)for(var e=1,n,r,s=i[t[0]],o,a=s.length;e<o;++e)for(r=s,s=i[t[e]],n=0;n<a;++n)s[n][1]+=s[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]}function qu(i){for(var t=i.length,e=new Array(t);--t>=0;)e[t]=t;return e}function Qv(i,t){return i[t]}function ty(i){const t=[];return t.key=i,t}function ey(){var i=le([]),t=qu,e=Yu,n=Qv;function r(s){var o=Array.from(i.apply(this,arguments),ty),a,l=o.length,c=-1,u;for(const h of s)for(a=0,++c;a<l;++a)(o[a][c]=[0,+n(h,o[a].key,c,s)]).data=h;for(a=0,u=_c(t(o));a<l;++a)o[u[a]].index=a;return e(o,u),o}return r.keys=function(s){return arguments.length?(i=typeof s=="function"?s:le(Array.from(s)),r):i},r.value=function(s){return arguments.length?(n=typeof s=="function"?s:le(+s),r):n},r.order=function(s){return arguments.length?(t=s==null?qu:typeof s=="function"?s:le(Array.from(s)),r):t},r.offset=function(s){return arguments.length?(e=s??Yu,r):e},r}function ny(i,t){if(!(!((o=i.length)>0)||!((s=(r=i[t[0]]).length)>0))){for(var e=0,n=1,r,s,o;n<s;++n){for(var a=0,l=0,c=0;a<o;++a){for(var u=i[t[a]],h=u[n][1]||0,f=u[n-1][1]||0,d=(h-f)/2,p=0;p<a;++p){var m=i[t[p]],g=m[n][1]||0,_=m[n-1][1]||0;d+=g-_}l+=h,c+=d*h}r[n-1][1]+=r[n-1][0]=e,l&&(e-=c/l)}r[n-1][1]+=r[n-1][0]=e,Yu(i,t)}}function iy(i){var t=i.map(ry);return qu(i).sort(function(e,n){return t[e]-t[n]})}function ry(i){for(var t=-1,e=0,n=i.length,r,s=-1/0;++t<n;)(r=+i[t][1])>s&&(s=r,e=t);return e}function sy(i){for(var t=0,e=-1,n=i.length,r;++e<n;)(r=+i[e][1])&&(t+=r);return t}function ay(i){var t=i.length,e,n,r=i.map(sy),s=iy(i),o=0,a=0,l=[],c=[];for(e=0;e<t;++e)n=s[e],o<a?(o+=r[n],l.push(n)):(a+=r[n],c.push(n));return c.reverse().concat(l)}class oy{constructor(t="aids"){this.diseaseId=t}async load(){const[t,e]=await Promise.all([this.loadContentConfig(),this.loadCityEpisodeConfig()]);return this.normalize(t,e)}async loadContentConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content.json`);if(!e.ok)throw new Error(`Failed to load config: ${e.status}`);return e.json()}async loadCityEpisodeConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content-map.json`);if(!e.ok){if(e.status===404)return null;throw new Error(`Failed to load city episode config: ${e.status}`)}return e.json()}normalize(t,e){const n=this.expandSteps(t.steps||[],e);return{steps:this.appendFixedClosingStep(n).map((s,o)=>({id:s.id||`step${o}`,index:o,text:s.text||null,chart:s.chart||null,map:s.map||null,image:s.image||null,source:s.source||null,scrollHeight:s.scrollHeight||null,fixedClosing:!!s.fixedClosing})),settings:t.settings||{},raw:t}}expandSteps(t,e){const n=[];for(const r of t){if(r.id==="city-episodes-anchor"||r.cityEpisodes?.enabled){const o=this.buildCityEpisodeSteps(e);if(o.length>0){n.push(...o);continue}}n.push(r)}return n}buildCityEpisodeSteps(t){const e=Array.isArray(t?.cities)?t.cities:[];if(e.length===0)return[];const n=this.escapeHtml(t?.timeline?.title||"都市エピソード"),r=this.escapeHtml(t?.timeline?.description||""),s=[...e].sort((c,u)=>(c.order??0)-(u.order??0)),o=[{id:"episode-intro",text:{content:`<h2>${n}</h2><p>${r}</p>`,visible:!0,position:{horizontal:"left",vertical:"center",width:"34%"}},chart:{visible:!1},map:{visible:!0,mode:"world-overview",center:[0,15],zoom:1.15,highlightCountries:[],lightenAllCountries:!0,lightenNonVisited:!1,markers:[]},image:{visible:!1},scrollHeight:"100vh"}],a=new Set,l=[];return s.forEach((c,u)=>{const h=c.country||"",f=Number(c.longitude),d=Number(c.latitude);Number.isFinite(f)&&Number.isFinite(d)&&l.push(c),h&&a.add(h),o.push({id:`city-episodes-${c.id||u+1}`,text:{content:this.renderCityEpisodeCard(c,u+1,s.length),visible:!0,position:{horizontal:u%2===0?"right":"left",vertical:"center",width:"36%"}},chart:{visible:!1},map:{visible:!0,mode:"single-city",cityId:c.id||null,center:[Number.isFinite(f)?f:0,Number.isFinite(d)?d:15],zoom:this.resolveCityZoom(c),highlightCountries:[...a],lightenNonVisited:!0,markers:l.map(p=>({id:p.id||`${p.nameEn||p.name}`,name:p.name||p.nameEn||"",country:p.country||"",longitude:Number(p.longitude),latitude:Number(p.latitude),color:p.style?.color||null,size:p.style?.size||7,isCurrent:p.id===c.id}))},image:{visible:!1},scrollHeight:c.transitions?.scrollHeight||"120vh"})}),o}renderCityEpisodeCard(t,e,n){const r=this.escapeHtml(t?.data?.title||t?.name||""),s=this.escapeHtml(t?.data?.description||""),o=this.escapeHtml(t?.name||t?.nameEn||""),a=this.escapeHtml(t?.nameEn||""),l=this.escapeHtml(t?.data?.url||"#"),u=t?.data?.thumbnail?`/prj-jcie/config/${this.diseaseId}/thumb/${encodeURIComponent(t.data.thumbnail)}`:"",h=u?`<img class="city-episode-thumb" src="${u}" alt="${r}" loading="lazy" />`:"";return`
      <article class="city-episode-card">
        <p class="city-episode-meta">都市エピソード ${e}/${n}</p>
        ${h}
        <h3 class="city-episode-title">${r}</h3>
        <p class="city-episode-location">${o}${a&&a!==o?`（${a}）`:""}</p>
        <p class="city-episode-description">${s}</p>
        <a class="city-episode-link" href="${l}" target="_blank" rel="noopener noreferrer">外部コンテンツを見る</a>
      </article>
    `}resolveCityZoom(t){const e=t?.transitions?.routeType;return e==="same-location"?3.6:e==="start"?2.8:2.5}escapeHtml(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}appendFixedClosingStep(t){const e=t.filter(n=>n.id!=="closing"&&n.id!=="fixed-closing");return e.push({id:"fixed-closing",fixedClosing:!0,text:null,chart:{visible:!1},map:{visible:!1},image:{visible:!1},scrollHeight:"100vh"}),e}}var ly="1.3.17";function Sg(i,t,e){return Math.max(i,Math.min(t,e))}function cy(i,t,e){return(1-e)*i+e*t}function uy(i,t,e,n){return cy(i,t,1-Math.exp(-e*n))}function hy(i,t){return(i%t+t)%t}var fy=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const e=Sg(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=uy(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function dy(i,t){let e;return function(...n){let r=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(r,n)},t)}}var py=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=i,this.content=t,e&&(this.debouncedResize=dy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},bg=class{events={};emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},rp=100/6,yr={passive:!1},my=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,yr),this.element.addEventListener("touchstart",this.onTouchStart,yr),this.element.addEventListener("touchmove",this.onTouchMove,yr),this.element.addEventListener("touchend",this.onTouchEnd,yr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new bg;on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,yr),this.element.removeEventListener("touchstart",this.onTouchStart,yr),this.element.removeEventListener("touchmove",this.onTouchMove,yr),this.element.removeEventListener("touchend",this.onTouchEnd,yr)}onTouchStart=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=n===1?rp:n===2?this.window.width:1,s=n===1?rp:n===2?this.window.height:1;t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},sp=i=>Math.min(1,1.001-Math.pow(2,-10*i)),gy=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new fy;emitter=new bg;dimensions;virtualScroll;constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:m=!0,prevent:g,virtualScroll:_,overscroll:y=!0,autoRaf:M=!1,anchors:x=!1,autoToggle:S=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:R=w,stopInertiaOnNavigate:v=!1}={}){window.lenisVersion=ly,(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=sp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:p,autoResize:m,prevent:g,virtualScroll:_,overscroll:y,autoRaf:M,anchors:x,autoToggle:S,allowNestedScroll:b,naiveDimensions:R,stopInertiaOnNavigate:v},this.dimensions=new py(i,t,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new my(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=e.find(r=>r.getAttribute("href")?.includes("#"));if(n){const r=n.getAttribute("href");if(r){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${r.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&e.find(r=>r.host===window.location.host)&&this.reset()};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof i=="string"&&["top","left","start","#"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let f;if(typeof i=="string"?(f=document.querySelector(i),f||(i==="#top"?i=0:console.warn("Lenis: Target not found",i))):i instanceof HTMLElement&&i?.nodeType&&(f=i),f){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const d=f.getBoundingClientRect();i=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const f=i-this.animatedScroll;f>this.limit/2?i=i-this.limit:f<-this.limit/2&&(i=i+this.limit)}}else i=Sg(0,i,this.limit);if(i===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=i),typeof o=="number"&&typeof a!="function"?a=sp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,i,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),r&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now(),r=i._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(r.time??0)>2e3){r.time=Date.now();const S=window.getComputedStyle(i);r.computedStyle=S;const b=S.overflowX,w=S.overflowY;if(s=["auto","overlay","scroll"].includes(b),o=["auto","overlay","scroll"].includes(w),r.hasOverflowX=s,r.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight,a=c>h,l=u>f,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=c,r.scrollHeight=u,r.clientWidth=h,r.clientHeight=f}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let p;if(d==="horizontal")p="x";else if(d==="vertical")p="y";else{const S=t!==0,b=e!==0;S&&s&&a&&(p="x"),b&&o&&l&&(p="y")}if(!p)return!1;let m,g,_,y,M;if(p==="x")m=i.scrollLeft,g=c-h,_=t,y=s,M=a;else if(p==="y")m=i.scrollTop,g=u-f,_=e,y=o,M=l;else return!1;return(_>0?m<g:m>0)&&y&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?hy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function nr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Eg(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fa={duration:.5,overwrite:!1,delay:0},If,ln,De,vi=1e8,Ae=1/vi,ju=Math.PI*2,_y=ju/4,xy=0,Tg=Math.sqrt,vy=Math.cos,yy=Math.sin,sn=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},pr=function(t){return typeof t=="number"},Uf=function(t){return typeof t>"u"},Yi=function(t){return typeof t=="object"},Bn=function(t){return t!==!1},Ff=function(){return typeof window<"u"},Fo=function(t){return Oe(t)||sn(t)},wg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,My=/random\([^)]+\)/g,Sy=/,\s*/g,ap=/(?:-?\.?\d|\.)+/gi,Ag=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cg=/[+-]=-?[.\d]+/,by=/[^,'"\[\]\s]+/gi,Ey=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,Ui,Ku,Of,oi={},jl={},Rg,Pg=function(t){return(jl=da(t,oi))&&$n},kf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},po=function(t,e){return!e&&console.warn(t)},Dg=function(t,e){return t&&(oi[t]=e)&&jl&&(jl[t]=e)||oi},mo=function(){return 0},Ty={suppressEvents:!0,isStart:!0,kill:!1},Al={suppressEvents:!0,kill:!1},wy={suppressEvents:!0},Bf={},Ur=[],Zu={},Lg,ti={},Hc={},op=30,Cl=[],zf="",Vf=function(t){var e=t[0],n,r;if(Yi(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Cl.length;r--&&!Cl[r].targetTest(e););n=Cl[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new n_(t[r],n)))||t.splice(r,1);return t},_s=function(t){return t._gsap||Vf(yi(t))[0]._gsap},Ng=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Uf(n)&&t.getAttribute&&t.getAttribute(e)||n},zn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},ea=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Ay=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Kl=function(){var t=Ur.length,e=Ur.slice(0),n,r;for(Zu={},Ur.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Hf=function(t){return!!(t._initted||t._startAt||t.add)},Ig=function(t,e,n,r){Ur.length&&!ln&&Kl(),t.render(e,n,!!(ln&&e<0&&Hf(t))),Ur.length&&!ln&&Kl()},Ug=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(by).length<2?e:sn(t)?t.trim():t},Fg=function(t){return t},li=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Cy=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},da=function(t,e){for(var n in e)t[n]=e[n];return t},lp=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Zl=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Ja=function(t){var e=t.parent||Ne,n=t.keyframes?Cy(vn(t.keyframes)):li;if(Bn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ry=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Og=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},xc=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Br=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Py=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ju=function(t,e,n,r){return t._startAt&&(ln?t._startAt.revert(Al):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Dy=function i(t){return!t||t._ts&&i(t.parent)},cp=function(t){return t._repeat?pa(t._tTime,t=t.duration()+t._rDelay)*t:0},pa=function(t,e){var n=Math.floor(t=Le(t/e));return t&&n===t?n-1:n},Jl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vc=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ae)||0))},yc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vc(t),n._dirty||xs(n,t)),t},kg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Jl(t.rawTime(),e),(!e._dur||Ao(0,e.totalDuration(),n)-e._tTime>Ae)&&e.render(n,!0)),xs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ae}},ki=function(t,e,n,r){return e.parent&&Br(e),e._start=Le((pr(n)?n:n||t!==Ne?fi(t,n,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Og(t,e,"_first","_last",t._sort?"_start":0),Qu(e)||(t._recent=e),r||kg(t,e),t._ts<0&&yc(t,t._tTime),t},Bg=function(t,e){return(oi.ScrollTrigger||kf("scrollTrigger",e))&&oi.ScrollTrigger.create(e,t)},zg=function(t,e,n,r,s){if(Wf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!ln&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Lg!==ni.frame)return Ur.push(t),t._lazy=[s,r],1},Ly=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Qu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ny=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&Ly(t)&&!(!t._initted&&Qu(t))||(t._ts<0||t._dp._ts<0)&&!Qu(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Ao(0,t._tDur,e),u=pa(l,a),t._yoyo&&u&1&&(o=1-o),u!==pa(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||ln||r||t._zTime===Ae||!e&&t._zTime){if(!t._initted&&zg(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ae:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Ju(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Br(t,1),!n&&!ln&&(ri(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Iy=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ma=function(t,e,n,r){var s=t._repeat,o=Le(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Le(o*(s+1)+t._rDelay*s):o,a>0&&!r&&yc(t,t._tTime=t._tDur*a),t.parent&&vc(t),n||xs(t.parent,t),t},up=function(t){return t instanceof An?xs(t):ma(t,t._dur)},Uy={_start:0,endTime:mo,totalDuration:mo},fi=function i(t,e,n){var r=t.labels,s=t._recent||Uy,o=t.duration()>=vi?s.endTime(!1):t._dur,a,l,c;return sn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Qa=function(t,e,n){var r=pr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;o.immediateRender=Bn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new $e(e[0],o,e[s+1])},Xr=function(t,e){return t||t===0?e(t):e},Ao=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!sn(t)||!(e=Ey.exec(t))?"":e[1]},Fy=function(t,e,n){return Xr(n,function(r){return Ao(t,e,r)})},th=[].slice,Vg=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Ui},Oy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return sn(r)&&!e||Vg(r,1)?(s=n).push.apply(s,yi(r)):n.push(r)})||n},yi=function(t,e,n){return De&&!e&&De.selector?De.selector(t):sn(t)&&!n&&(Ku||!ga())?th.call((e||Of).querySelectorAll(t),0):vn(t)?Oy(t,n):Vg(t)?th.call(t,0):t?[t]:[]},eh=function(t){return t=yi(t)[0]||po("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yi(e,n.querySelectorAll?n:n===t?po("Invalid scope")||Of.createElement("div"):t)}},Hg=function(t){return t.sort(function(){return .5-Math.random()})},Gg=function(t){if(Oe(t))return t;var e=Yi(t)?t:{each:t},n=vs(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return sn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,p){var m=(p||e).length,g=o[m],_,y,M,x,S,b,w,R,v;if(!g){if(v=e.grid==="auto"?0:(e.grid||[1,vi])[1],!v){for(w=-vi;w<(w=p[v++].getBoundingClientRect().left)&&v<m;);v<m&&v--}for(g=o[m]=[],_=l?Math.min(v,m)*u-.5:r%v,y=v===vi?0:l?m*h/v-.5:r/v|0,w=0,R=vi,b=0;b<m;b++)M=b%v-_,x=y-(b/v|0),g[b]=S=c?Math.abs(c==="y"?x:M):Tg(M*M+x*x),S>w&&(w=S),S<R&&(R=S);r==="random"&&Hg(g),g.max=w-R,g.min=R,g.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(v>m?m-1:c?c==="y"?m/v:v:Math.max(v,m/v))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=gn(e.amount||e.each)||0,n=n&&m<0?Qg(n):n}return m=(g[f]-g.min)/g.max||0,Le(g.b+(n?n(m):m)*g.v)+g.u}},nh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Le(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(pr(n)?0:gn(n))}},Wg=function(t,e){var n=vn(t),r,s;return!n&&Yi(t)&&(r=n=t.radius||vi,t.values?(t=yi(t.values),(s=!pr(t[0]))&&(r*=r)):t=nh(t.increment)),Xr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=vi,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||pr(o)?u:u+gn(o)}:nh(t))},Xg=function(t,e,n,r){return Xr(vn(t)?!e:n===!0?!!(n=0):!r,function(){return vn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},ky=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},By=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},zy=function(t,e,n){return Yg(t,e,0,1,n)},$g=function(t,e,n){return Xr(n,function(r){return t[~~e(r)]})},Vy=function i(t,e,n){var r=e-t;return vn(t)?$g(t,i(0,t.length),e):Xr(n,function(s){return(r+(s-t)%r)%r+t})},Hy=function i(t,e,n){var r=e-t,s=r*2;return vn(t)?$g(t,i(0,t.length-1),e):Xr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},go=function(t){return t.replace(My,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Sy);return Xg(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Yg=function(t,e,n,r,s){var o=e-t,a=r-n;return Xr(s,function(l){return n+((l-t)/o*a||0)})},Gy=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=sn(t),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(vn(t)&&!vn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(p){p*=h;var m=Math.min(f,~~p);return u[m](p-m)},n=e}else r||(t=da(vn(t)?[]:{},t));if(!u){for(l in e)Gf.call(a,t,l,"get",e[l]);s=function(p){return Yf(p,a)||(o?t.p:t)}}}return Xr(n,s)},hp=function(t,e,n){var r=t.labels,s=vi,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ri=function(t,e,n){var r=t.vars,s=r[e],o=De,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ur.length&&Kl(),a&&(De=a),u=l?s.apply(c,l):s.call(c),De=o,u},Ha=function(t){return Br(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ln),t.progress()<1&&ri(t,"onInterrupt"),t},Qs,qg=[],jg=function(t){if(t)if(t=!t.name&&t.default||t,Ff()||t.headless){var e=t.name,n=Oe(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:mo,render:Yf,add:Gf,kill:sM,modifier:rM,rawVars:0},o={targetTest:0,get:0,getSetter:$f,aliases:{},register:0};if(ga(),t!==r){if(ti[e])return;li(r,li(Zl(t,s),o)),da(r.prototype,da(s,Zl(t,o))),ti[r.prop=e]=r,t.targetTest&&(Cl.push(r),Bf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Dg(e,r),t.register&&t.register($n,r,Vn)}else qg.push(t)},we=255,Ga={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},Gc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},Kg=function(t,e,n){var r=t?pr(t)?[t>>16,t>>8&we,t&we]:0:Ga.black,s,o,a,l,c,u,h,f,d,p;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ga[t])r=Ga[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&we,r&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(r=p=t.match(ap),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Gc(l+1/3,s,o),r[1]=Gc(l,s,o),r[2]=Gc(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Ag),n&&r.length<4&&(r[3]=1),r}else r=t.match(ap)||Ga.transparent;r=r.map(Number)}return e&&!p&&(s=r[0]/we,o=r[1]/we,a=r[2]/we,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Zg=function(t){var e=[],n=[],r=-1;return t.split(Fr).forEach(function(s){var o=s.match(Js)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},fp=function(t,e,n){var r="",s=(t+r).match(Fr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Kg(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Zg(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Fr,"1").split(Js),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Fr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Fr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ga)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),Wy=/hsl[a]?\(/,Jg=function(t){var e=t.join(" "),n;if(Fr.lastIndex=0,Fr.test(e))return n=Wy.test(e),t[1]=fp(t[1],n),t[0]=fp(t[0],n,Zg(t[1])),!0},_o,ni=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function m(g){var _=i()-r,y=g===!0,M,x,S,b;if((_>t||_<0)&&(n+=_-e),r+=_,S=r-n,M=S-o,(M>0||y)&&(b=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=M+(M>=s?4:s-M),x=1),y||(l=c(m)),x)for(d=0;d<a.length;d++)a[d](S,f,b,g)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Rg&&(!Ku&&Ff()&&(Ui=Ku=window,Of=Ui.document||{},oi.gsap=$n,(Ui.gsapVersions||(Ui.gsapVersions=[])).push($n.version),Pg(jl||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),qg.forEach(jg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},_o=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),_o=0,c=mo},lagSmoothing:function(g,_){t=g||1/0,e=Math.min(_||33,t)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,_,y){var M=_?function(x,S,b,w){g(x,S,b,w),h.remove(M)}:g;return h.remove(g),a[y?"unshift":"push"](M),ga(),M},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},h})(),ga=function(){return!_o&&ni.wake()},ue={},Xy=/^[\d.\-M][\d.\-,\s]/,$y=/["']/g,Yy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace($y,"").trim():+c,r=l.substr(a+1).trim();return e},qy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},jy=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Yy(e[1])]:qy(t).split(",").map(Ug)):ue._CE&&Xy.test(t)?ue._CE("",t):n},Qg=function(t){return function(e){return 1-t(1-e)}},t_=function i(t,e){for(var n=t._first,r;n;)n instanceof An?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},vs=function(t,e){return t&&(Oe(t)?t:ue[t]||jy(t))||e},Cs=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return zn(t,function(a){ue[a]=oi[a]=s,ue[o=a.toLowerCase()]=n;for(var l in s)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=s[l]}),s},e_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Wc=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ju*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*yy((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:e_(a);return s=ju/s,l.config=function(c,u){return i(t,c,u)},l},Xc=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:e_(n);return r.config=function(s){return i(t,s)},r};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Cs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;Cs("Elastic",Wc("in"),Wc("out"),Wc());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Cs("Circ",function(i){return-(Tg(1-i*i)-1)});Cs("Sine",function(i){return i===1?1:-vy(i*_y)+1});Cs("Back",Xc("in"),Xc("out"),Xc());ue.SteppedEase=ue.steps=oi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Ae;return function(a){return((r*Ao(0,o,a)|0)+s)*n}}};fa.ease=ue["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return zf+=i+","+i+"Params,"});var n_=function(t,e){this.id=xy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ng,this.set=e?e.getSetter:$f},xo=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ma(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),_o||ni.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ma(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ga(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yc(this,n),!s._dp||s.parent||kg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ae||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ig(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?pa(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ae?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Jl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ae?0:this._rts,this.totalTime(Ao(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),vc(this),Py(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ga(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ae&&(this._tTime-=Ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Le(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ki(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jl(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=wy);var r=ln;return ln=n,Hf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,up(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,up(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(fi(this,n),Bn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Bn(r)),this._dur||(this._zTime=-Ae),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ae,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ae)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Oe(n)?n:Fg,l=function(){var u=r.then;r.then=null,s&&s(),Oe(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){Ha(this)},i})();li(xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ae,_prom:0,_ps:!1,_rts:1});var An=(function(i){Eg(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bn(n.sortChildren),Ne&&ki(n.parent||Ne,nr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bg(nr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Qa(0,arguments,this),this},e.from=function(r,s,o){return Qa(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Qa(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Ja(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $e(r,s,fi(this,o),1),this},e.call=function(r,s,o){return ki(this,$e.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $e(r,o,fi(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ja(o).immediateRender=Bn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Ja(a).immediateRender=Bn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Le(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,p,m,g,_,y,M,x,S,b,w;if(this!==Ne&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,M=this._ts,_=!M,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=Le(u%g),u===l?(m=this._repeat,f=c):(S=Le(u/g),m=~~S,m&&m===S&&(f=c,m--),f>c&&(f=c)),S=pa(this._tTime,g),!a&&this._tTime&&S!==m&&this._tTime-S*g-this._dur<=0&&(S=m),b&&m&1&&(f=c-f,w=1),m!==S&&!this._lock){var R=b&&S&1,v=R===(b&&m&1);if(m<S&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Le(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,S=m),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;t_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Iy(this,Le(a),Le(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!S&&(ri(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!_){y=0,p&&(u+=this._zTime=-Ae);break}}d=p}else{d=this._last;for(var E=r<0?r:f;d;){if(p=d._prev,(d._act||E<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||ln&&Hf(d)),f!==this._time||!this._ts&&!_){y=0,p&&(u+=this._zTime=E?-Ae:Ae);break}}d=p}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Ae)._zTime=f>=a?1:-1,this._ts))return this._start=x,vc(this),this.render(r,s,o);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Br(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ri(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(pr(s)||(s=fi(this,s,r)),!(r instanceof xo)){if(vn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(sn(r))return this.addLabel(r,s);if(Oe(r))r=$e.delayedCall(0,r);else return this}return this!==r?ki(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $e?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return sn(r)?this.removeLabel(r):Oe(r)?this.killTweensOf(r):(r.parent===this&&xc(this,r),r===this._recent&&(this._recent=this._last),xs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(ni.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=fi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=$e.delayedCall(0,s||mo,o);return a.data="isPause",this._hasPause=1,ki(this,a,fi(this,r))},e.removePause=function(r){var s=this._first;for(r=fi(this,r);s;)s._start===r&&s.data==="isPause"&&Br(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Rr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=yi(r),l=this._first,c=pr(s),u;l;)l instanceof $e?Ay(l._targets,a)&&(c?(!Rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=fi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=$e.to(o,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ae,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&ma(p,g,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,li({startAt:{time:fi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),hp(this,fi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),hp(this,fi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ae)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Le(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return xs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xs(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=vi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ki(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Le(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ma(o,o===Ne&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ne._ts&&(Ig(Ne,Jl(r,Ne)),Lg=ni.frame),ni.frame>=op){op+=ai.autoSleep||120;var s=Ne._first;if((!s||!s._ts)&&ai.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},t})(xo);li(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ky=function(t,e,n,r,s,o,a){var l=new Vn(this._pt,t,e,0,1,l_,null,s),c=0,u=0,h,f,d,p,m,g,_,y;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=go(r)),o&&(y=[n,r],o(y,t,e),n=y[0],r=y[1]),f=n.match(Vc)||[];h=Vc.exec(r);)p=h[0],m=r.substring(c,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:p.charAt(1)==="="?ea(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=Vc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Cg.test(r)||_)&&(l.e=0),this._pt=l,l},Gf=function(t,e,n,r,s,o,a,l,c,u){Oe(r)&&(r=r(s||0,t,o));var h=t[e],f=n!=="get"?n:Oe(h)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Oe(h)?c?eM:a_:Xf,p;if(sn(r)&&(~r.indexOf("random(")&&(r=go(r)),r.charAt(1)==="="&&(p=ea(f,r)+(gn(f)||0),(p||p===0)&&(r=p))),!u||f!==r||ih)return!isNaN(f*r)&&r!==""?(p=new Vn(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?iM:o_,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!h&&!(e in t)&&kf(e,r),Ky.call(this,t,e,f,r,d,l||ai.stringFilter,c))},Zy=function(t,e,n,r,s){if(Oe(t)&&(t=to(t,s,e,n,r)),!Yi(t)||t.style&&t.nodeType||vn(t)||wg(t))return sn(t)?to(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=to(t[a],s,e,n,r);return o},i_=function(t,e,n,r,s,o){var a,l,c,u;if(ti[t]&&(a=new ti[t]).init(s,a.rawVars?e[t]:Zy(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Vn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Qs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Rr,ih,Wf=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,p=t._dur,m=t._startAt,g=t._targets,_=t.parent,y=_&&_.data==="nested"?_.vars.targets:g,M=t._overwrite==="auto"&&!If,x=t.timeline,S,b,w,R,v,E,D,C,L,U,V,z,I;if(x&&(!f||!s)&&(s="none"),t._ease=vs(s,fa.ease),t._yEase=h?Qg(vs(h===!0?s:h,fa.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!r.runBackwards,!x||f&&!r.stagger){if(C=g[0]?_s(g[0]).harness:0,z=C&&r[C.prop],S=Zl(r,Bf),m&&(m._zTime<0&&m.progress(1),e<0&&u&&a&&!d?m.render(-1,!0):m.revert(u&&p?Al:Ty),m._lazy=0),o){if(Br(t._startAt=$e.set(g,li({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!m&&Bn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ln||!a&&!d)&&t._startAt.revert(Al),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!m){if(e&&(a=!1),w=li({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Bn(l),immediateRender:a,stagger:0,parent:_},S),z&&(w[C.prop]=z),Br(t._startAt=$e.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ln?t._startAt.revert(Al):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Ae,Ae);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Bn(l)||l&&!p,b=0;b<g.length;b++){if(v=g[b],D=v._gsap||Vf(g)[b]._gsap,t._ptLookup[b]=U={},Zu[D.id]&&Ur.length&&Kl(),V=y===g?b:y.indexOf(v),C&&(L=new C).init(v,z||S,t,V,y)!==!1&&(t._pt=R=new Vn(t._pt,v,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(k){U[k]=R}),L.priority&&(E=1)),!C||z)for(w in S)ti[w]&&(L=i_(w,S,t,V,v,y))?L.priority&&(E=1):U[w]=R=Gf.call(t,v,w,"get",S[w],V,y,0,r.stringFilter);t._op&&t._op[b]&&t.kill(v,t._op[b]),M&&t._pt&&(Rr=t,Ne.killTweensOf(v,U,t.globalTime(e)),I=!t.parent,Rr=0),t._pt&&l&&(Zu[D.id]=1)}E&&c_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!I,f&&e<=0&&x.render(vi,!0,!0)},Jy=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return ih=1,t.vars[e]="+=0",Wf(t,a),ih=0,l?po(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Be(n)+gn(h.e)),h.b&&(h.b=u.s+gn(h.b))},Qy=function(t,e){var n=t[0]?_s(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=da({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tM=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(vn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},to=function(t,e,n,r,s){return Oe(t)?t.call(e,n,r,s):sn(t)&&~t.indexOf("random(")?go(t):t},r_=zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",s_={};zn(r_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return s_[i]=1});var $e=(function(i){Eg(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ja(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,m=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,y=r.parent||Ne,M=(vn(n)||wg(n)?pr(n[0]):"length"in r)?[n]:yi(n),x,S,b,w,R,v,E,D;if(a._targets=M.length?Vf(M):po("GSAP target "+n+" not found. https://gsap.com",!ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Fo(c)||Fo(u)){if(r=a.vars,x=a.timeline=new An({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:M}),x.kill(),x.parent=x._dp=nr(a),x._start=0,f||Fo(c)||Fo(u)){if(w=M.length,E=f&&Gg(f),Yi(f))for(R in f)~r_.indexOf(R)&&(D||(D={}),D[R]=f[R]);for(S=0;S<w;S++)b=Zl(r,s_),b.stagger=0,_&&(b.yoyoEase=_),D&&da(b,D),v=M[S],b.duration=+to(c,nr(a),S,v,M),b.delay=(+to(u,nr(a),S,v,M)||0)-a._delay,!f&&w===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),x.to(v,b,E?E(S,v,M):0),x._ease=ue.none;x.duration()?c=u=0:a.timeline=0}else if(p){Ja(li(x.vars.defaults,{ease:"none"})),x._ease=vs(p.ease||r.ease||"none");var C=0,L,U,V;if(vn(p))p.forEach(function(z){return x.to(M,z,">")}),x.duration();else{b={};for(R in p)R==="ease"||R==="easeEach"||tM(R,p[R],b,p.easeEach);for(R in b)for(L=b[R].sort(function(z,I){return z.t-I.t}),C=0,S=0;S<L.length;S++)U=L[S],V={ease:U.e,duration:(U.t-(S?L[S-1].t:0))/100*c},V[R]=U.v,x.to(M,V,C),C+=V.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!If&&(Rr=nr(a),Ne.killTweensOf(M),Rr=0),ki(y,nr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!p&&a._start===Le(y._time)&&Bn(h)&&Dy(nr(a))&&y.data!=="nested")&&(a._tTime=-Ae,a.render(Math.max(0,-u)||0)),g&&Bg(nr(a),g),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Ae&&!u?l:r<Ae?0:r,f,d,p,m,g,_,y,M,x;if(!c)Ny(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,o);if(f=Le(h%m),h===l?(p=this._repeat,f=c):(g=Le(h/m),p=~~g,p&&p===g?(f=c,p--):f>c&&(f=c)),_=this._yoyo&&p&1,_&&(x=this._yEase,f=c-f),g=pa(this._tTime,m),f===a&&!o&&this._initted&&p===g)return this._tTime=h,this;p!==g&&(M&&this._yEase&&t_(M,_),this.vars.repeatRefresh&&!_&&!this._lock&&f!==m&&this._initted&&(this._lock=o=1,this.render(Le(m*p),!0).invalidate()._lock=0))}if(!this._initted){if(zg(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&h&&!s&&!g&&(ri(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;M&&M.render(r<0?r:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ju(this,r,s,o),ri(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ju(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!s&&!(u&&!a)&&(h||a||_)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){_o||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Wf(this,c),u=this._ease(c/this._dur),Jy(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(yc(this,0),this.parent||Og(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ha(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Rr&&Rr.vars.overwrite!==!0)._first||Ha(this),this.parent&&o!==this.timeline.totalDuration()&&ma(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?yi(r):a,c=this._ptLookup,u=this._pt,h,f,d,p,m,g,_;if((!s||s==="all")&&Ry(a,l))return s==="all"&&(this._pt=0),Ha(this);for(h=this._op=this._op||[],s!=="all"&&(sn(s)&&(m={},zn(s,function(y){return m[y]=1}),s=m),s=Qy(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,p=f,d={}):(d=h[_]=h[_]||{},p=s);for(m in p)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&xc(this,g,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&Ha(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Qa(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Qa(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ne.killTweensOf(r,s,o)},t})(xo);li($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(i){$e[i]=function(){var t=new An,e=th.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Xf=function(t,e,n){return t[e]=n},a_=function(t,e,n){return t[e](n)},eM=function(t,e,n,r){return t[e](r.fp,n)},nM=function(t,e,n){return t.setAttribute(e,n)},$f=function(t,e){return Oe(t[e])?a_:Uf(t[e])&&t.setAttribute?nM:Xf},o_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},iM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},l_=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Yf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},rM=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},sM=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?xc(this,e,"_pt"):e.dep||(n=1),e=r;return!n},aM=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},c_=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Vn=(function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||o_,this.d=l||this,this.set=c||Xf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=aM,this.m=n,this.mt=s,this.tween=r},i})();zn(zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Bf[i]=1});oi.TweenMax=oi.TweenLite=$e;oi.TimelineLite=oi.TimelineMax=An;Ne=new An({sortChildren:!1,defaults:fa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=Jg;var ys=[],Rl={},oM=[],dp=0,lM=0,$c=function(t){return(Rl[t]||oM).map(function(e){return e()})},rh=function(){var t=Date.now(),e=[];t-dp>2&&($c("matchMediaInit"),ys.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ui.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),$c("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),dp=t,$c("matchMedia"))},u_=(function(){function i(e,n){this.selector=n&&eh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lM++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){Oe(n)&&(s=r,r=n,n=Oe);var o=this,a=function(){var c=De,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=eh(s)),De=o,h=r.apply(o,arguments),Oe(h)&&o._r.push(h),De=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=De;De=null,n(this),De=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof $e&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $e)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1)},t.revert=function(n){this.kill(n||{})},i})(),cM=(function(){function i(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Yi(n)||(n={matches:n});var o=new u_(0,s||this.scope),a=o.conditions={},l,c,u;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Ui.matchMedia(n[c]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(rh):l.addEventListener("change",rh)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Ql={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return jg(r)})},timeline:function(t){return new An(t)},getTweensOf:function(t,e){return Ne.getTweensOf(t,e)},getProperty:function(t,e,n,r){sn(t)&&(t=yi(t)[0]);var s=_s(t||{}).get,o=n?Fg:Ug;return n==="native"&&(n=""),t&&(e?o((ti[e]&&ti[e].get||s)(t,e,n,r)):function(a,l,c){return o((ti[a]&&ti[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yi(t),t.length>1){var r=t.map(function(u){return $n.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=ti[e],a=_s(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Qs._pt=0,h.init(t,n?u+n:u,Qs,0,[t]),h.render(1,h),Qs._pt&&Yf(1,Qs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=$n.to(t,li((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vs(t.ease,fa.ease)),lp(fa,t||{})},config:function(t){return lp(ai,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ti[a]&&!oi[a]&&po(e+" effect requires "+a+" plugin.")}),Hc[e]=function(a,l,c){return n(yi(a),li(l||{},s),c)},o&&(An.prototype[e]=function(a,l,c){return this.add(Hc[e](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=vs(e)},parseEase:function(t,e){return arguments.length?vs(t,e):ue},getById:function(t){return Ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new An(t),r,s;for(n.smoothChildTiming=Bn(t.smoothChildTiming),Ne.remove(n),n._dp=0,n._time=n._tTime=Ne._time,r=Ne._first;r;)s=r._next,(e||!(!r._dur&&r instanceof $e&&r.vars.onComplete===r._targets[0]))&&ki(n,r,r._start-r._delay),r=s;return ki(Ne,n,0),n},context:function(t,e){return t?new u_(t,e):De},matchMedia:function(t){return new cM(t)},matchMediaRefresh:function(){return ys.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||rh()},addEventListener:function(t,e){var n=Rl[t]||(Rl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Rl[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:Vy,wrapYoyo:Hy,distribute:Gg,random:Xg,snap:Wg,normalize:zy,getUnit:gn,clamp:Fy,splitColor:Kg,toArray:yi,selector:eh,mapRange:Yg,pipe:ky,unitize:By,interpolate:Gy,shuffle:Hg},install:Pg,effects:Hc,ticker:ni,updateRoot:An.updateRoot,plugins:ti,globalTimeline:Ne,core:{PropTween:Vn,globals:Dg,Tween:$e,Timeline:An,Animation:xo,getCache:_s,_removeLinkedListItem:xc,reverting:function(){return ln},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return If=t}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ql[i]=$e[i]});ni.add(An.updateRoot);Qs=Ql.to({},{duration:0});var uM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},hM=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=uM(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Yc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(sn(s)&&(l={},zn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}hM(a,s)}}}},$n=Ql.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Yc("roundProps",nh),Yc("modifiers"),Yc("snap",Wg))||Ql;$e.version=An.version=$n.version="3.14.2";Rg=1;Ff()&&ga();ue.Power0;ue.Power1;ue.Power2;ue.Power3;ue.Power4;ue.Linear;ue.Quad;ue.Cubic;ue.Quart;ue.Quint;ue.Strong;ue.Elastic;ue.Back;ue.SteppedEase;ue.Bounce;ue.Sine;ue.Expo;ue.Circ;var pp,Pr,na,qf,fs,mp,jf,fM=function(){return typeof window<"u"},mr={},ss=180/Math.PI,ia=Math.PI/180,Ds=Math.atan2,gp=1e8,Kf=/([A-Z])/g,dM=/(left|right|width|margin|padding|x)/i,pM=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},mM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},_M=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},h_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},f_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},vM=function(t,e,n){return t.style[e]=n},yM=function(t,e,n){return t.style.setProperty(e,n)},MM=function(t,e,n){return t._gsap[e]=n},SM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},bM=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},EM=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ie="transform",Hn=Ie+"Origin",TM=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in mr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=rr(r,a)}):this.tfm[t]=o.x?o[t]:rr(r,t),t===Hn&&(this.tfm.zOrigin=o.zOrigin);else return zi.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Hn,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},d_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},wM=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Kf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=jf(),(!s||!s.isStart)&&!n[Ie]&&(d_(n),r.zOrigin&&n[Hn]&&(n[Hn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},p_=function(t,e){var n={target:t,props:[],revert:wM,save:TM};return t._gsap||$n.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},m_,ah=function(t,e){var n=Pr.createElementNS?Pr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Pr.createElement(t);return n&&n.style?n:Pr.createElement(t)},si=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Kf,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,_a(e)||e,1)||""},_p="O,Moz,ms,Ms,Webkit".split(","),_a=function(t,e,n){var r=e||fs,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(_p[o]+t in s););return o<0?null:(o===3?"ms":o>=0?_p[o]:"")+t},oh=function(){fM()&&window.document&&(pp=window,Pr=pp.document,na=Pr.documentElement,fs=ah("div")||{style:{}},ah("div"),Ie=_a(Ie),Hn=Ie+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",m_=!!_a("perspective"),jf=$n.core.reverting,qf=1)},xp=function(t){var e=t.ownerSVGElement,n=ah("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),na.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),na.removeChild(n),s},vp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},g_=function(t){var e,n;try{e=t.getBBox()}catch{e=xp(t),n=1}return e&&(e.width||e.height)||n||(e=xp(t)),e&&!e.width&&!e.x&&!e.y?{x:+vp(t,["x","cx","x1"])||0,y:+vp(t,["y","cy","y1"])||0,width:0,height:0}:e},__=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&g_(t))},zr=function(t,e){if(e){var n=t.style,r;e in mr&&e!==Hn&&(e=Ie),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Kf,"-$1").toLowerCase())):n.removeAttribute(e)}},Dr=function(t,e,n,r,s,o){var a=new Vn(t._pt,e,n,0,1,o?f_:h_);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},yp={deg:1,rad:1,turn:1},AM={grid:1,flex:1},Vr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=fs.style,l=dM.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",p,m,g,_;if(r===o||!s||yp[r]||yp[o])return s;if(o!=="px"&&!f&&(s=i(t,e,n,"px")),_=t.getCTM&&__(t),(d||o==="%")&&(mr[e]||~e.indexOf("adius")))return p=_?t.getBBox()[l?"width":"height"]:t[u],Be(d?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(f?o:r),m=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===Pr||!m.appendChild)&&(m=Pr.body),g=m._gsap,g&&d&&g.width&&l&&g.time===ni.time&&!g.uncache)return Be(s/g.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+r,p=t[u],y?t.style[e]=y:zr(t,e)}else(d||o==="%")&&!AM[si(m,"display")]&&(a.position=si(t,"position")),m===t&&(a.position="static"),m.appendChild(fs),p=fs[u],m.removeChild(fs),a.position="absolute";return l&&d&&(g=_s(m),g.time=ni.time,g.width=m[u]),Be(f?p*s/h:p&&s?h/p*s:0)},rr=function(t,e,n,r){var s;return qf||oh(),e in zi&&e!=="transform"&&(e=zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),mr[e]&&e!=="transform"?(s=yo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ec(si(t,Hn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=tc[e]&&tc[e](t,e,n)||si(t,e)||Ng(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vr(t,e,s,n)+n:s},CM=function(t,e,n,r){if(!n||n==="none"){var s=_a(e,t,1),o=s&&si(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=si(t,"borderTopColor"))}var a=new Vn(this._pt,t.style,e,0,1,l_),l=0,c=0,u,h,f,d,p,m,g,_,y,M,x,S;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=si(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=t.style[e],t.style[e]=r,r=si(t,e)||r,m?t.style[e]=m:zr(t,e)),u=[n,r],Jg(u),n=u[0],r=u[1],f=n.match(Js)||[],S=r.match(Js)||[],S.length){for(;h=Js.exec(r);)g=h[0],y=r.substring(l,h.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),g!==(m=f[c++]||"")&&(d=parseFloat(m)||0,x=m.substr((d+"").length),g.charAt(1)==="="&&(g=ea(d,g)+x),_=parseFloat(g),M=g.substr((_+"").length),l=Js.lastIndex-M.length,M||(M=M||ai.units[e]||x,l===r.length&&(r+=M,a.e+=M)),x!==M&&(d=Vr(t,e,m,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:_-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?f_:h_;return Cg.test(r)&&(a.e=0),this._pt=a,a},Mp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RM=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Mp[n]||n,e[1]=Mp[r]||r,e.join(" ")},PM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mr[a]&&(l=1,a=a==="transformOrigin"?Hn:Ie),zr(n,a);l&&(zr(n,Ie),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",yo(n,1),o.uncache=1,d_(r)))}},tc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Vn(t._pt,e,n,0,0,PM);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},vo=[1,0,0,1,0,0],x_={},v_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Sp=function(t){var e=si(t,Ie);return v_(e)?vo:e.substr(7).match(Ag).map(Be)},Zf=function(t,e){var n=t._gsap||_s(t),r=t.style,s=Sp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vo:s):(s===vo&&!t.offsetParent&&t!==na&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,na.appendChild(t)),s=Sp(t),l?r.display=l:zr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):na.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lh=function(t,e,n,r,s,o){var a=t._gsap,l=s||Zf(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],m=l[2],g=l[3],_=l[4],y=l[5],M=e.split(" "),x=parseFloat(M[0])||0,S=parseFloat(M[1])||0,b,w,R,v;n?l!==vo&&(w=d*g-p*m)&&(R=x*(g/w)+S*(-m/w)+(m*y-g*_)/w,v=x*(-p/w)+S*(d/w)-(d*y-p*_)/w,x=R,S=v):(b=g_(t),x=b.x+(~M[0].indexOf("%")?x/100*b.width:x),S=b.y+(~(M[1]||M[0]).indexOf("%")?S/100*b.height:S)),r||r!==!1&&a.smooth?(_=x-c,y=S-u,a.xOffset=h+(_*d+y*m)-_,a.yOffset=f+(_*p+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=S,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Hn]="0px 0px",o&&(Dr(o,a,"xOrigin",c,x),Dr(o,a,"yOrigin",u,S),Dr(o,a,"xOffset",h,a.xOffset),Dr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+S)},yo=function(t,e){var n=t._gsap||new n_(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=si(t,Hn)||"0",u,h,f,d,p,m,g,_,y,M,x,S,b,w,R,v,E,D,C,L,U,V,z,I,k,X,P,Y,pt,yt,nt,et;return u=h=f=m=g=_=y=M=x=0,d=p=1,n.svg=!!(t.getCTM&&__(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),r.scale=r.rotate=r.translate="none"),w=Zf(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",I=""):I=!e&&t.getAttribute("data-svg-origin"),lh(t,I||c,!!I||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,b=n.yOrigin||0,w!==vo&&(D=w[0],C=w[1],L=w[2],U=w[3],u=V=w[4],h=z=w[5],w.length===6?(d=Math.sqrt(D*D+C*C),p=Math.sqrt(U*U+L*L),m=D||C?Ds(C,D)*ss:0,y=L||U?Ds(L,U)*ss+m:0,y&&(p*=Math.abs(Math.cos(y*ia))),n.svg&&(u-=S-(S*D+b*L),h-=b-(S*C+b*U))):(et=w[6],yt=w[7],P=w[8],Y=w[9],pt=w[10],nt=w[11],u=w[12],h=w[13],f=w[14],R=Ds(et,pt),g=R*ss,R&&(v=Math.cos(-R),E=Math.sin(-R),I=V*v+P*E,k=z*v+Y*E,X=et*v+pt*E,P=V*-E+P*v,Y=z*-E+Y*v,pt=et*-E+pt*v,nt=yt*-E+nt*v,V=I,z=k,et=X),R=Ds(-L,pt),_=R*ss,R&&(v=Math.cos(-R),E=Math.sin(-R),I=D*v-P*E,k=C*v-Y*E,X=L*v-pt*E,nt=U*E+nt*v,D=I,C=k,L=X),R=Ds(C,D),m=R*ss,R&&(v=Math.cos(R),E=Math.sin(R),I=D*v+C*E,k=V*v+z*E,C=C*v-D*E,z=z*v-V*E,D=I,V=k),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,_=180-_),d=Be(Math.sqrt(D*D+C*C+L*L)),p=Be(Math.sqrt(z*z+et*et)),R=Ds(V,z),y=Math.abs(R)>2e-4?R*ss:0,x=nt?1/(nt<0?-nt:nt):0),n.svg&&(I=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!v_(si(t,Ie)),I&&t.setAttribute("transform",I))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Be(d),n.scaleY=Be(p),n.rotation=Be(m)+a,n.rotationX=Be(g)+a,n.rotationY=Be(_)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Hn]=ec(c)),n.xOffset=n.yOffset=0,n.force3D=ai.force3D,n.renderTransform=n.svg?LM:m_?y_:DM,n.uncache=0,n},ec=function(t){return(t=t.split(" "))[0]+" "+t[1]},qc=function(t,e,n){var r=gn(e);return Be(parseFloat(e)+parseFloat(Vr(t,"x",n+"px",r)))+r},DM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,y_(t,e)},jr="0deg",Da="0px",Kr=") ",y_=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,m=n.scaleY,g=n.transformPerspective,_=n.force3D,y=n.target,M=n.zOrigin,x="",S=_==="auto"&&t&&t!==1||_===!0;if(M&&(h!==jr||u!==jr)){var b=parseFloat(u)*ia,w=Math.sin(b),R=Math.cos(b),v;b=parseFloat(h)*ia,v=Math.cos(b),o=qc(y,o,w*v*-M),a=qc(y,a,-Math.sin(b)*-M),l=qc(y,l,R*v*-M+M)}g!==Da&&(x+="perspective("+g+Kr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(S||o!==Da||a!==Da||l!==Da)&&(x+=l!==Da||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Kr),c!==jr&&(x+="rotate("+c+Kr),u!==jr&&(x+="rotateY("+u+Kr),h!==jr&&(x+="rotateX("+h+Kr),(f!==jr||d!==jr)&&(x+="skew("+f+", "+d+Kr),(p!==1||m!==1)&&(x+="scale("+p+", "+m+Kr),y.style[Ie]=x||"translate(0, 0)"},LM=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,m=n.yOrigin,g=n.xOffset,_=n.yOffset,y=n.forceCSS,M=parseFloat(o),x=parseFloat(a),S,b,w,R,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ia,c*=ia,S=Math.cos(l)*h,b=Math.sin(l)*h,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=ia,v=Math.tan(c-u),v=Math.sqrt(1+v*v),w*=v,R*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),S*=v,b*=v)),S=Be(S),b=Be(b),w=Be(w),R=Be(R)):(S=h,R=f,b=w=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=Vr(d,"x",o,"px"),x=Vr(d,"y",a,"px")),(p||m||g||_)&&(M=Be(M+p-(p*S+m*w)+g),x=Be(x+m-(p*b+m*R)+_)),(r||s)&&(v=d.getBBox(),M=Be(M+r/100*v.width),x=Be(x+s/100*v.height)),v="matrix("+S+","+b+","+w+","+R+","+M+","+x+")",d.setAttribute("transform",v),y&&(d.style[Ie]=v)},NM=function(t,e,n,r,s){var o=360,a=sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ss:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*gp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*gp)%o-~~(c/o)*o)),t._pt=f=new Vn(t._pt,e,n,r,c,mM),f.e=u,f.u="deg",t._props.push(n),f},bp=function(t,e){for(var n in e)t[n]=e[n];return t},IM=function(t,e,n){var r=bp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,p;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ie]=e,a=yo(n,1),zr(n,Ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ie],o[Ie]=e,a=yo(n,1),o[Ie]=c);for(l in mr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=gn(c),p=gn(u),h=d!==p?Vr(n,l,c,p):parseFloat(c),f=parseFloat(u),t._pt=new Vn(t._pt,a,l,h,f-h,sh),t._pt.u=p||0,t._props.push(l));bp(a,r)};zn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});tc[t>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return rr(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,m){return d[p]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,d,h)}});var M_={name:"css",register:oh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,p,m,g,_,y,M,x,S,b,w,R,v;qf||oh(),this.styles=this.styles||p_(t),R=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(u=e[m],!(ti[m]&&i_(m,e,n,r,t,s)))){if(d=typeof u,p=tc[m],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=go(u)),p)p(this,t,m,u,n)&&(w=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(m)+"").trim(),u+="",Fr.lastIndex=0,Fr.test(c)||(g=gn(c),_=gn(u),_?g!==_&&(c=Vr(t,m,c,_)+_):g&&(u+=g)),this.add(a,"setProperty",c,u,r,s,0,0,m),o.push(m),R.push(m,0,a[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,r,t,s):l[m],sn(c)&&~c.indexOf("random(")&&(c=go(c)),gn(c+"")||c==="auto"||(c+=ai.units[m]||gn(rr(t,m))||""),(c+"").charAt(1)==="="&&(c=rr(t,m))):c=rr(t,m),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),m in zi&&(m==="autoAlpha"&&(f===1&&rr(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Dr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=zi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),M=m in mr,M){if(this.styles.save(m),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=si(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=u,u=si(t,"perspective"),E?t.style.perspective=E:zr(t,"perspective")}h=parseFloat(u)}if(x||(S=t._gsap,S.renderTransform&&!e.parseTransform||yo(t,e.parseTransform),b=e.smoothOrigin!==!1&&S.smooth,x=this._pt=new Vn(this._pt,a,Ie,0,1,S.renderTransform,S,0,-1),x.dep=1),m==="scale")this._pt=new Vn(this._pt,S,"scaleY",S.scaleY,(y?ea(S.scaleY,y+h):h)-S.scaleY||0,sh),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(Hn,0,a[Hn]),u=RM(u),S.svg?lh(t,u,0,b,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==S.zOrigin&&Dr(this,S,"zOrigin",S.zOrigin,_),Dr(this,a,m,ec(c),ec(u)));continue}else if(m==="svgOrigin"){lh(t,u,1,b,0,this);continue}else if(m in x_){NM(this,S,m,f,y?ea(f,y+u):u);continue}else if(m==="smoothOrigin"){Dr(this,S,"smooth",S.smooth,u);continue}else if(m==="force3D"){S[m]=u;continue}else if(m==="transform"){IM(this,u,t);continue}}else m in a||(m=_a(m)||m);if(M||(h||h===0)&&(f||f===0)&&!pM.test(u)&&m in a)g=(c+"").substr((f+"").length),h||(h=0),_=gn(u)||(m in ai.units?ai.units[m]:g),g!==_&&(f=Vr(t,m,c,_)),this._pt=new Vn(this._pt,M?S:a,m,f,(y?ea(f,y+h):h)-f,!M&&(_==="px"||m==="zIndex")&&e.autoRound!==!1?xM:sh),this._pt.u=_||0,M&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=_M):g!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=gM);else if(m in a)CM.call(this,t,m,c,y?y+u:u);else if(m in t)this.add(t,m,c||t[m],y?y+u:u,r,s);else if(m!=="parseTransform"){kf(m,u);continue}M||(m in a?R.push(m,0,a[m]):typeof t[m]=="function"?R.push(m,2,t[m]()):R.push(m,1,c||t[m])),o.push(m)}}w&&c_(this)},render:function(t,e){if(e.tween._time||!jf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:rr,aliases:zi,getSetter:function(t,e,n){var r=zi[e];return r&&r.indexOf(",")<0&&(e=r),e in mr&&e!==Hn&&(t._gsap.x||rr(t,"x"))?n&&mp===n?e==="scale"?SM:MM:(mp=n||{})&&(e==="scale"?bM:EM):t.style&&!Uf(t.style[e])?vM:~e.indexOf("-")?yM:$f(t,e)},core:{_removeProperty:zr,_getMatrix:Zf}};$n.utils.checkPrefix=_a;$n.core.getStyleSaver=p_;(function(i,t,e,n){var r=zn(i+","+t+","+e,function(s){mr[s]=1});zn(t,function(s){ai.units[s]="deg",x_[s]=1}),zi[r[13]]=i+","+t,zn(n,function(s){var o=s.split(":");zi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ai.units[i]="px"});$n.registerPlugin(M_);var nc=$n.registerPlugin(M_)||$n;nc.core.Tween;function UM(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function FM(i,t,e){return t&&UM(i.prototype,t),i}var an,Pl,ii,Lr,Nr,ra,S_,as,eo,b_,lr,Ai,E_,T_=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},w_=1,ta=[],oe=[],Wi=[],no=Date.now,ch=function(t,e){return e},OM=function(){var t=eo.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,oe),r.push.apply(r,Wi),oe=n,Wi=r,ch=function(o,a){return e[o](a)}},Or=function(t,e){return~Wi.indexOf(t)&&Wi[Wi.indexOf(t)+1][e]},io=function(t){return!!~b_.indexOf(t)},Sn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},Mn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Oo="scrollLeft",ko="scrollTop",uh=function(){return lr&&lr.isPressed||oe.cache++},ic=function(t,e){var n=function r(s){if(s||s===0){w_&&(ii.history.scrollRestoration="manual");var o=lr&&lr.isPressed;s=r.v=Math.round(s)||(lr&&lr.iOS?1:0),t(s),r.cacheID=oe.cache,o&&ch("ss",s)}else(e||oe.cache!==r.cacheID||ch("ref"))&&(r.cacheID=oe.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Cn={s:Oo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ic(function(i){return arguments.length?ii.scrollTo(i,Ke.sc()):ii.pageXOffset||Lr[Oo]||Nr[Oo]||ra[Oo]||0})},Ke={s:ko,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:ic(function(i){return arguments.length?ii.scrollTo(Cn.sc(),i):ii.pageYOffset||Lr[ko]||Nr[ko]||ra[ko]||0})},On=function(t,e){return(e&&e._ctx&&e._ctx.selector||an.utils.toArray)(t)[0]||(typeof t=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},kM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Hr=function(t,e){var n=e.s,r=e.sc;io(t)&&(t=Lr.scrollingElement||Nr);var s=oe.indexOf(t),o=r===Ke.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+o]||Sn(t,"scroll",uh);var a=oe[s+o],l=a||(oe[s+o]=ic(Or(t,n),!0)||(io(t)?r:ic(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=an.getProperty(t,"scrollBehavior")==="smooth"),l},hh=function(t,e,n){var r=t,s=t,o=no(),a=o,l=e||50,c=Math.max(500,l*3),u=function(p,m){var g=no();m||g-o>l?(s=r,r=p,a=o,o=g):n?r+=p:r=s+(p-s)/(g-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(p){var m=a,g=s,_=no();return(p||p===0)&&p!==r&&u(p),o===a||_-a>c?0:(r+(n?g:-g))/((n?_:o)-m)*1e3};return{update:u,reset:h,getVelocity:f}},La=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ep=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},A_=function(){eo=an.core.globals().ScrollTrigger,eo&&eo.core&&OM()},C_=function(t){return an=t||T_(),!Pl&&an&&typeof document<"u"&&document.body&&(ii=window,Lr=document,Nr=Lr.documentElement,ra=Lr.body,b_=[ii,Lr,Nr,ra],an.utils.clamp,E_=an.core.context||function(){},as="onpointerenter"in ra?"pointer":"mouse",S_=Ve.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=Ve.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return w_=0},500),A_(),Pl=1),Pl};Cn.op=Ke;oe.cache=0;var Ve=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){Pl||C_(an)||console.warn("Please gsap.registerPlugin(Observer)"),eo||A_();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,m=n.event,g=n.onDragStart,_=n.onDragEnd,y=n.onDrag,M=n.onPress,x=n.onRelease,S=n.onRight,b=n.onLeft,w=n.onUp,R=n.onDown,v=n.onChangeX,E=n.onChangeY,D=n.onChange,C=n.onToggleX,L=n.onToggleY,U=n.onHover,V=n.onHoverEnd,z=n.onMove,I=n.ignoreCheck,k=n.isNormalizer,X=n.onGestureStart,P=n.onGestureEnd,Y=n.onWheel,pt=n.onEnable,yt=n.onDisable,nt=n.onClick,et=n.scrollSpeed,G=n.capture,j=n.allowClicks,rt=n.lockAxis,gt=n.onLockAxis;this.target=a=On(a)||Nr,this.vars=n,d&&(d=an.utils.toArray(d)),r=r||1e-9,s=s||0,p=p||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(ra).lineHeight)||22);var mt,Ut,$t,Mt,Ot,Vt,kt,$=this,O=0,at=0,Rt=n.passive||!u&&n.passive!==!1,Dt=Hr(a,Cn),St=Hr(a,Ke),N=Dt(),T=St(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",Q=io(a),tt=a.ownerDocument||Lr,J=[0,0,0],Ct=[0,0,0],ct=0,Nt=function(){return ct=no()},Lt=function(Bt,Jt){return($.event=Bt)&&d&&kM(Bt.target,d)||Jt&&B&&Bt.pointerType!=="touch"||I&&I(Bt,Jt)},lt=function(){$._vx.reset(),$._vy.reset(),Ut.pause(),h&&h($)},ut=function(){var Bt=$.deltaX=Ep(J),Jt=$.deltaY=Ep(Ct),bt=Math.abs(Bt)>=r,jt=Math.abs(Jt)>=r;D&&(bt||jt)&&D($,Bt,Jt,J,Ct),bt&&(S&&$.deltaX>0&&S($),b&&$.deltaX<0&&b($),v&&v($),C&&$.deltaX<0!=O<0&&C($),O=$.deltaX,J[0]=J[1]=J[2]=0),jt&&(R&&$.deltaY>0&&R($),w&&$.deltaY<0&&w($),E&&E($),L&&$.deltaY<0!=at<0&&L($),at=$.deltaY,Ct[0]=Ct[1]=Ct[2]=0),(Mt||$t)&&(z&&z($),$t&&(g&&$t===1&&g($),y&&y($),$t=0),Mt=!1),Vt&&!(Vt=!1)&&gt&&gt($),Ot&&(Y($),Ot=!1),mt=0},Pt=function(Bt,Jt,bt){J[bt]+=Bt,Ct[bt]+=Jt,$._vx.update(Bt),$._vy.update(Jt),c?mt||(mt=requestAnimationFrame(ut)):ut()},It=function(Bt,Jt){rt&&!kt&&($.axis=kt=Math.abs(Bt)>Math.abs(Jt)?"x":"y",Vt=!0),kt!=="y"&&(J[2]+=Bt,$._vx.update(Bt,!0)),kt!=="x"&&(Ct[2]+=Jt,$._vy.update(Jt,!0)),c?mt||(mt=requestAnimationFrame(ut)):ut()},ht=function(Bt){if(!Lt(Bt,1)){Bt=La(Bt,u);var Jt=Bt.clientX,bt=Bt.clientY,jt=Jt-$.x,Ht=bt-$.y,Kt=$.isDragging;$.x=Jt,$.y=bt,(Kt||(jt||Ht)&&(Math.abs($.startX-Jt)>=s||Math.abs($.startY-bt)>=s))&&($t||($t=Kt?2:1),Kt||($.isDragging=!0),It(jt,Ht))}},qt=$.onPress=function(Tt){Lt(Tt,1)||Tt&&Tt.button||($.axis=kt=null,Ut.pause(),$.isPressed=!0,Tt=La(Tt),O=at=0,$.startX=$.x=Tt.clientX,$.startY=$.y=Tt.clientY,$._vx.reset(),$._vy.reset(),Sn(k?a:tt,Ai[1],ht,Rt,!0),$.deltaX=$.deltaY=0,M&&M($))},F=$.onRelease=function(Tt){if(!Lt(Tt,1)){Mn(k?a:tt,Ai[1],ht,!0);var Bt=!isNaN($.y-$.startY),Jt=$.isDragging,bt=Jt&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),jt=La(Tt);!bt&&Bt&&($._vx.reset(),$._vy.reset(),u&&j&&an.delayedCall(.08,function(){if(no()-ct>300&&!Tt.defaultPrevented){if(Tt.target.click)Tt.target.click();else if(tt.createEvent){var Ht=tt.createEvent("MouseEvents");Ht.initMouseEvent("click",!0,!0,ii,1,jt.screenX,jt.screenY,jt.clientX,jt.clientY,!1,!1,!1,!1,0,null),Tt.target.dispatchEvent(Ht)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,h&&Jt&&!k&&Ut.restart(!0),$t&&ut(),_&&Jt&&_($),x&&x($,bt)}},_t=function(Bt){return Bt.touches&&Bt.touches.length>1&&($.isGesturing=!0)&&X(Bt,$.isDragging)},ot=function(){return($.isGesturing=!1)||P($)},xt=function(Bt){if(!Lt(Bt)){var Jt=Dt(),bt=St();Pt((Jt-N)*et,(bt-T)*et,1),N=Jt,T=bt,h&&Ut.restart(!0)}},st=function(Bt){if(!Lt(Bt)){Bt=La(Bt,u),Y&&(Ot=!0);var Jt=(Bt.deltaMode===1?l:Bt.deltaMode===2?ii.innerHeight:1)*p;Pt(Bt.deltaX*Jt,Bt.deltaY*Jt,0),h&&!k&&Ut.restart(!0)}},it=function(Bt){if(!Lt(Bt)){var Jt=Bt.clientX,bt=Bt.clientY,jt=Jt-$.x,Ht=bt-$.y;$.x=Jt,$.y=bt,Mt=!0,h&&Ut.restart(!0),(jt||Ht)&&It(jt,Ht)}},dt=function(Bt){$.event=Bt,U($)},Gt=function(Bt){$.event=Bt,V($)},fe=function(Bt){return Lt(Bt)||La(Bt,u)&&nt($)};Ut=$._dc=an.delayedCall(f||.25,lt).pause(),$.deltaX=$.deltaY=0,$._vx=hh(0,50,!0),$._vy=hh(0,50,!0),$.scrollX=Dt,$.scrollY=St,$.isDragging=$.isGesturing=$.isPressed=!1,E_(this),$.enable=function(Tt){return $.isEnabled||(Sn(Q?tt:a,"scroll",uh),o.indexOf("scroll")>=0&&Sn(Q?tt:a,"scroll",xt,Rt,G),o.indexOf("wheel")>=0&&Sn(a,"wheel",st,Rt,G),(o.indexOf("touch")>=0&&S_||o.indexOf("pointer")>=0)&&(Sn(a,Ai[0],qt,Rt,G),Sn(tt,Ai[2],F),Sn(tt,Ai[3],F),j&&Sn(a,"click",Nt,!0,!0),nt&&Sn(a,"click",fe),X&&Sn(tt,"gesturestart",_t),P&&Sn(tt,"gestureend",ot),U&&Sn(a,as+"enter",dt),V&&Sn(a,as+"leave",Gt),z&&Sn(a,as+"move",it)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Mt=$t=!1,$._vx.reset(),$._vy.reset(),N=Dt(),T=St(),Tt&&Tt.type&&qt(Tt),pt&&pt($)),$},$.disable=function(){$.isEnabled&&(ta.filter(function(Tt){return Tt!==$&&io(Tt.target)}).length||Mn(Q?tt:a,"scroll",uh),$.isPressed&&($._vx.reset(),$._vy.reset(),Mn(k?a:tt,Ai[1],ht,!0)),Mn(Q?tt:a,"scroll",xt,G),Mn(a,"wheel",st,G),Mn(a,Ai[0],qt,G),Mn(tt,Ai[2],F),Mn(tt,Ai[3],F),Mn(a,"click",Nt,!0),Mn(a,"click",fe),Mn(tt,"gesturestart",_t),Mn(tt,"gestureend",ot),Mn(a,as+"enter",dt),Mn(a,as+"leave",Gt),Mn(a,as+"move",it),$.isEnabled=$.isPressed=$.isDragging=!1,yt&&yt($))},$.kill=$.revert=function(){$.disable();var Tt=ta.indexOf($);Tt>=0&&ta.splice(Tt,1),lr===$&&(lr=0)},ta.push($),k&&io(a)&&(lr=$),$.enable(m)},FM(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Ve.version="3.14.2";Ve.create=function(i){return new Ve(i)};Ve.register=C_;Ve.getAll=function(){return ta.slice()};Ve.getById=function(i){return ta.filter(function(t){return t.vars.id===i})[0]};T_()&&an.registerPlugin(Ve);var Ft,qs,ae,Re,ei,ge,Jf,rc,Mo,ro,Wa,Bo,dn,Mc,fh,Tn,Tp,wp,js,R_,jc,P_,En,dh,D_,L_,Ar,ph,Qf,sa,td,so,mh,Kc,zo=1,mn=Date.now,Zc=mn(),Mi=0,Xa=0,Ap=function(t,e,n){var r=Qn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},Cp=function(t,e){return e&&(!Qn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},BM=function i(){return Xa&&requestAnimationFrame(i)},Rp=function(){return Mc=1},Pp=function(){return Mc=0},Fi=function(t){return t},$a=function(t){return Math.round(t*1e5)/1e5||0},N_=function(){return typeof window<"u"},I_=function(){return Ft||N_()&&(Ft=window.gsap)&&Ft.registerPlugin&&Ft},Es=function(t){return!!~Jf.indexOf(t)},U_=function(t){return(t==="Height"?td:ae["inner"+t])||ei["client"+t]||ge["client"+t]},F_=function(t){return Or(t,"getBoundingClientRect")||(Es(t)?function(){return Ul.width=ae.innerWidth,Ul.height=td,Ul}:function(){return sr(t)})},zM=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=Or(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?U_(s):t["client"+s])||0}},VM=function(t,e){return!e||~Wi.indexOf(t)?F_(t):function(){return Ul}},Vi=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=Or(t,n))?o()-F_(t)()[s]:Es(t)?(ei[n]||ge[n])-U_(r):t[n]-t["offset"+r])},Vo=function(t,e){for(var n=0;n<js.length;n+=3)(!e||~e.indexOf(js[n+1]))&&t(js[n],js[n+1],js[n+2])},Qn=function(t){return typeof t=="string"},_n=function(t){return typeof t=="function"},Ya=function(t){return typeof t=="number"},os=function(t){return typeof t=="object"},Na=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Jc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ls=Math.abs,O_="left",k_="top",ed="right",nd="bottom",Ms="width",Ss="height",ao="Right",oo="Left",lo="Top",co="Bottom",Xe="padding",mi="margin",xa="Width",id="Height",je="px",gi=function(t){return ae.getComputedStyle(t)},HM=function(t){var e=gi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Dp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},sr=function(t,e){var n=e&&gi(t)[fh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ft.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},sc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},B_=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},GM=function(t){return function(e){return Ft.utils.snap(B_(t),e)}},rd=function(t){var e=Ft.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},WM=function(t){return function(e,n){return rd(B_(t))(e,n.direction)}},Ho=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},rn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},nn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Go=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Lp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wo={toggleActions:"play",anticipatePin:0},ac={top:0,left:0,center:.5,bottom:1,right:1},Dl=function(t,e){if(Qn(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in ac?ac[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Xo=function(t,e,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,p=Re.createElement("div"),m=Es(n)||Or(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,_=m?ge:n,y=t.indexOf("start")!==-1,M=y?c:u,x="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(x+=(r===Ke?ed:nd)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+r.op.d2],Ll(p,0,r,y),p},Ll=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+xa]=1,s["border"+a+xa]=0,s[n.p]=e+"px",Ft.set(t,s)},ie=[],gh={},So,Np=function(){return mn()-Mi>34&&(So||(So=requestAnimationFrame(ur)))},Ns=function(){(!En||!En.isPressed||En.startX>ge.clientWidth)&&(oe.cache++,En?So||(So=requestAnimationFrame(ur)):ur(),Mi||ws("scrollStart"),Mi=mn())},Qc=function(){L_=ae.innerWidth,D_=ae.innerHeight},qa=function(t){oe.cache++,(t===!0||!dn&&!P_&&!Re.fullscreenElement&&!Re.webkitFullscreenElement&&(!dh||L_!==ae.innerWidth||Math.abs(ae.innerHeight-D_)>ae.innerHeight*.25))&&rc.restart(!0)},Ts={},XM=[],z_=function i(){return nn(te,"scrollEnd",i)||ds(!0)},ws=function(t){return Ts[t]&&Ts[t].map(function(e){return e()})||XM},Jn=[],V_=function(t){for(var e=0;e<Jn.length;e+=5)(!t||Jn[e+4]&&Jn[e+4].query===t)&&(Jn[e].style.cssText=Jn[e+1],Jn[e].getBBox&&Jn[e].setAttribute("transform",Jn[e+2]||""),Jn[e+3].uncache=1)},H_=function(){return oe.forEach(function(t){return _n(t)&&++t.cacheID&&(t.rec=t())})},sd=function(t,e){var n;for(Tn=0;Tn<ie.length;Tn++)n=ie[Tn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));so=!0,e&&V_(e),e||ws("revert")},G_=function(t,e){oe.cache++,(e||!wn)&&oe.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Qn(t)&&(ae.history.scrollRestoration=Qf=t)},wn,bs=0,Ip,$M=function(){if(Ip!==bs){var t=Ip=bs;requestAnimationFrame(function(){return t===bs&&ds(!0)})}},W_=function(){ge.appendChild(sa),td=!En&&sa.offsetHeight||ae.innerHeight,ge.removeChild(sa)},Up=function(t){return Mo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ds=function(t,e){if(ei=Re.documentElement,ge=Re.body,Jf=[ae,Re,ei,ge],Mi&&!t&&!so){rn(te,"scrollEnd",z_);return}W_(),wn=te.isRefreshing=!0,so||H_();var n=ws("refreshInit");R_&&te.sort(),e||sd(),oe.forEach(function(r){_n(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ie.slice(0).forEach(function(r){return r.refresh()}),so=!1,ie.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),mh=1,Up(!0),ie.forEach(function(r){var s=Vi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Up(!1),mh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),oe.forEach(function(r){_n(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),G_(Qf,1),rc.pause(),bs++,wn=2,ur(2),ie.forEach(function(r){return _n(r.vars.onRefresh)&&r.vars.onRefresh(r)}),wn=te.isRefreshing=!1,ws("refresh")},_h=0,Nl=1,uo,ur=function(t){if(t===2||!wn&&!so){te.isUpdating=!0,uo&&uo.update(0);var e=ie.length,n=mn(),r=n-Zc>=50,s=e&&ie[0].scroll();if(Nl=_h>s?-1:1,wn||(_h=s),r&&(Mi&&!Mc&&n-Mi>200&&(Mi=0,ws("scrollEnd")),Wa=Zc,Zc=n),Nl<0){for(Tn=e;Tn-- >0;)ie[Tn]&&ie[Tn].update(0,r);Nl=1}else for(Tn=0;Tn<e;Tn++)ie[Tn]&&ie[Tn].update(0,r);te.isUpdating=!1}So=0},xh=[O_,k_,nd,ed,mi+co,mi+ao,mi+lo,mi+oo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Il=xh.concat([Ms,Ss,"boxSizing","max"+xa,"max"+id,"position",mi,Xe,Xe+lo,Xe+ao,Xe+co,Xe+oo]),YM=function(t,e,n){aa(n);var r=t._gsap;if(r.spacerIsNative)aa(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},tu=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=xh.length,o=e.style,a=t.style,l;s--;)l=xh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[nd]=a[ed]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ms]=sc(t,Cn)+je,o[Ss]=sc(t,Ke)+je,o[Xe]=a[mi]=a[k_]=a[O_]="0",aa(r),a[Ms]=a["max"+xa]=n[Ms],a[Ss]=a["max"+id]=n[Ss],a[Xe]=n[Xe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},qM=/([A-Z])/g,aa=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||Ft.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(qM,"-$1").toLowerCase())}},$o=function(t){for(var e=Il.length,n=t.style,r=[],s=0;s<e;s++)r.push(Il[s],n[Il[s]]);return r.t=t,r},jM=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},Ul={left:0,top:0},Fp=function(t,e,n,r,s,o,a,l,c,u,h,f,d,p){_n(t)&&(t=t(l)),Qn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Dl("0"+t.substr(3),n):0));var m=d?d.time():0,g,_,y;if(d&&d.seek(0),isNaN(t)||(t=+t),Ya(t))d&&(t=Ft.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&Ll(a,n,r,!0);else{_n(e)&&(e=e(l));var M=(t||"0").split(" "),x,S,b,w;y=On(e,l)||ge,x=sr(y)||{},(!x||!x.left&&!x.top)&&gi(y).display==="none"&&(w=y.style.display,y.style.display="block",x=sr(y),w?y.style.display=w:y.style.removeProperty("display")),S=Dl(M[0],x[r.d]),b=Dl(M[1]||"0",n),t=x[r.p]-c[r.p]-u+S+s-b,a&&Ll(a,b,r,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var R=t+n,v=o._isStart;g="scroll"+r.d2,Ll(o,R,r,v&&R>20||!v&&(h?Math.max(ge[g],ei[g]):o.parentNode[g])<=R+1),h&&(c=sr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+je))}return d&&y&&(g=sr(y),d.seek(f),_=sr(y),d._caScrollDist=g[r.p]-_[r.p],t=t/d._caScrollDist*f),d&&d.seek(m),d?t:Math.round(t)},KM=/(webkit|moz|length|cssText|inset)/i,Op=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===ge){t._stOrig=s.cssText,a=gi(t);for(o in a)!+o&&!KM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;Ft.core.getCache(t).uncache=1,e.appendChild(t)}},X_=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Yo=function(t,e,n){var r={};r[e.p]="+="+n,Ft.set(t,r)},kp=function(t,e){var n=Hr(t,e),r="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,p={};c=c||n();var m=X_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=p,p[r]=function(){return m(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ft.to(t,l),f};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(t,"wheel",n.wheelHandler),te.isTouch&&rn(t,"touchmove",n.wheelHandler),s},te=(function(){function i(e,n){qs||i.register(Ft)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ph(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xa){this.update=this.refresh=this.kill=Fi;return}n=Dp(Qn(n)||Ya(n)||n.nodeType?{trigger:n}:n,Wo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,_=s.onScrubComplete,y=s.onSnapComplete,M=s.once,x=s.snap,S=s.pinReparent,b=s.pinSpacer,w=s.containerAnimation,R=s.fastScrollEnd,v=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:Ke,D=!h&&h!==0,C=On(n.scroller||ae),L=Ft.core.getCache(C),U=Es(C),V=("pinType"in n?n.pinType:Or(C,"pinType")||U&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],I=D&&n.toggleActions.split(" "),k="markers"in n?n.markers:Wo.markers,X=U?0:parseFloat(gi(C)["border"+E.p2+xa])||0,P=this,Y=n.onRefreshInit&&function(){return n.onRefreshInit(P)},pt=zM(C,U,E),yt=VM(C,U),nt=0,et=0,G=0,j=Hr(C,E),rt,gt,mt,Ut,$t,Mt,Ot,Vt,kt,$,O,at,Rt,Dt,St,N,T,B,Q,tt,J,Ct,ct,Nt,Lt,lt,ut,Pt,It,ht,qt,F,_t,ot,xt,st,it,dt,Gt;if(P._startClamp=P._endClamp=!1,P._dir=E,g*=45,P.scroller=C,P.scroll=w?w.time.bind(w):j,Ut=j(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(R_=1,n.refreshPriority===-9999&&(uo=P)),L.tweenScroll=L.tweenScroll||{top:kp(C,Ke),left:kp(C,Cn)},P.tweenTo=rt=L.tweenScroll[E.p],P.scrubDuration=function(bt){_t=Ya(bt)&&bt,_t?F?F.duration(bt):F=Ft.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:_t,paused:!0,onComplete:function(){return _&&_(P)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(h),ht=0,l||(l=r.vars.id)),x&&((!os(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ge.style&&Ft.set(U?[ge,ei]:C,{scrollBehavior:"auto"}),oe.forEach(function(bt){return _n(bt)&&bt.target===(U?Re.scrollingElement||ei:C)&&(bt.smooth=!1)}),mt=_n(x.snapTo)?x.snapTo:x.snapTo==="labels"?GM(r):x.snapTo==="labelsDirectional"?WM(r):x.directional!==!1?function(bt,jt){return rd(x.snapTo)(bt,mn()-et<500?0:jt.direction)}:Ft.utils.snap(x.snapTo),ot=x.duration||{min:.1,max:2},ot=os(ot)?ro(ot.min,ot.max):ro(ot,ot),xt=Ft.delayedCall(x.delay||_t/2||.1,function(){var bt=j(),jt=mn()-et<500,Ht=rt.tween;if((jt||Math.abs(P.getVelocity())<10)&&!Ht&&!Mc&&nt!==bt){var Kt=(bt-Mt)/Dt,ke=r&&!D?r.totalProgress():Kt,re=jt?0:(ke-qt)/(mn()-Wa)*1e3||0,xe=Ft.utils.clamp(-Kt,1-Kt,Ls(re/2)*re/.185),Ge=Kt+(x.inertia===!1?0:xe),Pe,Ee,de=x,Pn=de.onStart,Me=de.onInterrupt,cn=de.onComplete;if(Pe=mt(Ge,P),Ya(Pe)||(Pe=Ge),Ee=Math.max(0,Math.round(Mt+Pe*Dt)),bt<=Ot&&bt>=Mt&&Ee!==bt){if(Ht&&!Ht._initted&&Ht.data<=Ls(Ee-bt))return;x.inertia===!1&&(xe=Pe-Kt),rt(Ee,{duration:ot(Ls(Math.max(Ls(Ge-ke),Ls(Pe-ke))*.185/re/.05||0)),ease:x.ease||"power3",data:Ls(Ee-bt),onInterrupt:function(){return xt.restart(!0)&&Me&&Me(P)},onComplete:function(){P.update(),nt=j(),r&&!D&&(F?F.resetTo("totalProgress",Pe,r._tTime/r._tDur):r.progress(Pe)),ht=qt=r&&!D?r.totalProgress():P.progress,y&&y(P),cn&&cn(P)}},bt,xe*Dt,Ee-bt-xe*Dt),Pn&&Pn(P,rt.tween)}}else P.isActive&&nt!==bt&&xt.restart(!0)}).pause()),l&&(gh[l]=P),f=P.trigger=On(f||d!==!0&&d),Gt=f&&f._gsap&&f._gsap.stRevert,Gt&&(Gt=Gt(P)),d=d===!0?f:On(d),Qn(a)&&(a={targets:f,className:a}),d&&(p===!1||p===mi||(p=!p&&d.parentNode&&d.parentNode.style&&gi(d.parentNode).display==="flex"?!1:Xe),P.pin=d,gt=Ft.core.getCache(d),gt.spacer?St=gt.pinState:(b&&(b=On(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),gt.spacerIsNative=!!b,b&&(gt.spacerState=$o(b))),gt.spacer=B=b||Re.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),gt.pinState=St=$o(d)),n.force3D!==!1&&Ft.set(d,{force3D:!0}),P.spacer=B=gt.spacer,It=gi(d),Nt=It[p+E.os2],tt=Ft.getProperty(d),J=Ft.quickSetter(d,E.a,je),tu(d,B,It),T=$o(d)),k){at=os(k)?Dp(k,Lp):Lp,$=Xo("scroller-start",l,C,E,at,0),O=Xo("scroller-end",l,C,E,at,0,$),Q=$["offset"+E.op.d2];var fe=On(Or(C,"content")||C);Vt=this.markerStart=Xo("start",l,fe,E,at,Q,0,w),kt=this.markerEnd=Xo("end",l,fe,E,at,Q,0,w),w&&(dt=Ft.quickSetter([Vt,kt],E.a,je)),!V&&!(Wi.length&&Or(C,"fixedMarkers")===!0)&&(HM(U?ge:C),Ft.set([$,O],{force3D:!0}),lt=Ft.quickSetter($,E.a,je),Pt=Ft.quickSetter(O,E.a,je))}if(w){var Tt=w.vars.onUpdate,Bt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),Tt&&Tt.apply(w,Bt||[])})}if(P.previous=function(){return ie[ie.indexOf(P)-1]},P.next=function(){return ie[ie.indexOf(P)+1]},P.revert=function(bt,jt){if(!jt)return P.kill(!0);var Ht=bt!==!1||!P.enabled,Kt=dn;Ht!==P.isReverted&&(Ht&&(st=Math.max(j(),P.scroll.rec||0),G=P.progress,it=r&&r.progress()),Vt&&[Vt,kt,$,O].forEach(function(ke){return ke.style.display=Ht?"none":"block"}),Ht&&(dn=P,P.update(Ht)),d&&(!S||!P.isActive)&&(Ht?YM(d,B,St):tu(d,B,gi(d),Lt)),Ht||P.update(Ht),dn=Kt,P.isReverted=Ht)},P.refresh=function(bt,jt,Ht,Kt){if(!((dn||!P.enabled)&&!jt)){if(d&&bt&&Mi){rn(i,"scrollEnd",z_);return}!wn&&Y&&Y(P),dn=P,rt.tween&&!Ht&&(rt.tween.kill(),rt.tween=0),F&&F.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(At){return At.vars.immediateRender&&At.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var ke=pt(),re=yt(),xe=w?w.duration():Vi(C,E),Ge=Dt<=.01||!Dt,Pe=0,Ee=Kt||0,de=os(Ht)?Ht.end:n.end,Pn=n.endTrigger||f,Me=os(Ht)?Ht.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),cn=P.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,P),Yn=f&&Math.max(0,ie.indexOf(P))||0,Ye=Yn,qe,Qe,Ki,Rs,tn,A,H,Z,q,W,ft,wt,vt;for(k&&os(Ht)&&(wt=Ft.getProperty($,E.p),vt=Ft.getProperty(O,E.p));Ye-- >0;)A=ie[Ye],A.end||A.refresh(0,1)||(dn=P),H=A.pin,H&&(H===f||H===d||H===cn)&&!A.isReverted&&(W||(W=[]),W.unshift(A),A.revert(!0,!0)),A!==ie[Ye]&&(Yn--,Ye--);for(_n(Me)&&(Me=Me(P)),Me=Ap(Me,"start",P),Mt=Fp(Me,f,ke,E,j(),Vt,$,P,re,X,V,xe,w,P._startClamp&&"_startClamp")||(d?-.001:0),_n(de)&&(de=de(P)),Qn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Qn(Me)?Me.split(" ")[0]:"")+de:(Pe=Dl(de.substr(2),ke),de=Qn(Me)?Me:(w?Ft.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Mt):Mt)+Pe,Pn=f)),de=Ap(de,"end",P),Ot=Math.max(Mt,Fp(de||(Pn?"100% 0":xe),Pn,ke,E,j()+Pe,kt,O,P,re,X,V,xe,w,P._endClamp&&"_endClamp"))||-.001,Pe=0,Ye=Yn;Ye--;)A=ie[Ye]||{},H=A.pin,H&&A.start-A._pinPush<=Mt&&!w&&A.end>0&&(qe=A.end-(P._startClamp?Math.max(0,A.start):A.start),(H===f&&A.start-A._pinPush<Mt||H===cn)&&isNaN(Me)&&(Pe+=qe*(1-A.progress)),H===d&&(Ee+=qe));if(Mt+=Pe,Ot+=Pe,P._startClamp&&(P._startClamp+=Pe),P._endClamp&&!wn&&(P._endClamp=Ot||-.001,Ot=Math.min(Ot,Vi(C,E))),Dt=Ot-Mt||(Mt-=.01)&&.001,Ge&&(G=Ft.utils.clamp(0,1,Ft.utils.normalize(Mt,Ot,st))),P._pinPush=Ee,Vt&&Pe&&(qe={},qe[E.a]="+="+Pe,cn&&(qe[E.p]="-="+j()),Ft.set([Vt,kt],qe)),d&&!(mh&&P.end>=Vi(C,E)))qe=gi(d),Rs=E===Ke,Ki=j(),Ct=parseFloat(tt(E.a))+Ee,!xe&&Ot>1&&(ft=(U?Re.scrollingElement||ei:C).style,ft={style:ft,value:ft["overflow"+E.a.toUpperCase()]},U&&gi(ge)["overflow"+E.a.toUpperCase()]!=="scroll"&&(ft.style["overflow"+E.a.toUpperCase()]="scroll")),tu(d,B,qe),T=$o(d),Qe=sr(d,!0),Z=V&&Hr(C,Rs?Cn:Ke)(),p?(Lt=[p+E.os2,Dt+Ee+je],Lt.t=B,Ye=p===Xe?sc(d,E)+Dt+Ee:0,Ye&&(Lt.push(E.d,Ye+je),B.style.flexBasis!=="auto"&&(B.style.flexBasis=Ye+je)),aa(Lt),cn&&ie.forEach(function(At){At.pin===cn&&At.vars.pinSpacing!==!1&&(At._subPinOffset=!0)}),V&&j(st)):(Ye=sc(d,E),Ye&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=Ye+je)),V&&(tn={top:Qe.top+(Rs?Ki-Mt:Z)+je,left:Qe.left+(Rs?Z:Ki-Mt)+je,boxSizing:"border-box",position:"fixed"},tn[Ms]=tn["max"+xa]=Math.ceil(Qe.width)+je,tn[Ss]=tn["max"+id]=Math.ceil(Qe.height)+je,tn[mi]=tn[mi+lo]=tn[mi+ao]=tn[mi+co]=tn[mi+oo]="0",tn[Xe]=qe[Xe],tn[Xe+lo]=qe[Xe+lo],tn[Xe+ao]=qe[Xe+ao],tn[Xe+co]=qe[Xe+co],tn[Xe+oo]=qe[Xe+oo],N=jM(St,tn,S),wn&&j(0)),r?(q=r._initted,jc(1),r.render(r.duration(),!0,!0),ct=tt(E.a)-Ct+Dt+Ee,ut=Math.abs(Dt-ct)>1,V&&ut&&N.splice(N.length-2,2),r.render(0,!0,!0),q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),jc(0)):ct=Dt,ft&&(ft.value?ft.style["overflow"+E.a.toUpperCase()]=ft.value:ft.style.removeProperty("overflow-"+E.a));else if(f&&j()&&!w)for(Qe=f.parentNode;Qe&&Qe!==ge;)Qe._pinOffset&&(Mt-=Qe._pinOffset,Ot-=Qe._pinOffset),Qe=Qe.parentNode;W&&W.forEach(function(At){return At.revert(!1,!0)}),P.start=Mt,P.end=Ot,Ut=$t=wn?st:j(),!w&&!wn&&(Ut<st&&j(st),P.scroll.rec=0),P.revert(!1,!0),et=mn(),xt&&(nt=-1,xt.restart(!0)),dn=0,r&&D&&(r._initted||it)&&r.progress()!==it&&r.progress(it||0,!0).render(r.time(),!0,!0),(Ge||G!==P.progress||w||m||r&&!r._initted)&&(r&&!D&&(r._initted||G||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Mt<-.001&&!G?Ft.utils.normalize(Mt,Ot,0):G,!0),P.progress=Ge||(Ut-Mt)/Dt===G?0:G),d&&p&&(B._pinOffset=Math.round(P.progress*ct)),F&&F.invalidate(),isNaN(wt)||(wt-=Ft.getProperty($,E.p),vt-=Ft.getProperty(O,E.p),Yo($,E,wt),Yo(Vt,E,wt-(Kt||0)),Yo(O,E,vt),Yo(kt,E,vt-(Kt||0))),Ge&&!wn&&P.update(),u&&!wn&&!Rt&&(Rt=!0,u(P),Rt=!1)}},P.getVelocity=function(){return(j()-$t)/(mn()-Wa)*1e3||0},P.endAnimation=function(){Na(P.callbackAnimation),r&&(F?F.progress(1):r.paused()?D||Na(r,P.direction<0,1):Na(r,r.reversed()))},P.labelToScroll=function(bt){return r&&r.labels&&(Mt||P.refresh()||Mt)+r.labels[bt]/r.duration()*Dt||0},P.getTrailing=function(bt){var jt=ie.indexOf(P),Ht=P.direction>0?ie.slice(0,jt).reverse():ie.slice(jt+1);return(Qn(bt)?Ht.filter(function(Kt){return Kt.vars.preventOverlaps===bt}):Ht).filter(function(Kt){return P.direction>0?Kt.end<=Mt:Kt.start>=Ot})},P.update=function(bt,jt,Ht){if(!(w&&!Ht&&!bt)){var Kt=wn===!0?st:P.scroll(),ke=bt?0:(Kt-Mt)/Dt,re=ke<0?0:ke>1?1:ke||0,xe=P.progress,Ge,Pe,Ee,de,Pn,Me,cn,Yn;if(jt&&($t=Ut,Ut=w?j():Kt,x&&(qt=ht,ht=r&&!D?r.totalProgress():re)),g&&d&&!dn&&!zo&&Mi&&(!re&&Mt<Kt+(Kt-$t)/(mn()-Wa)*g?re=1e-4:re===1&&Ot>Kt+(Kt-$t)/(mn()-Wa)*g&&(re=.9999)),re!==xe&&P.enabled){if(Ge=P.isActive=!!re&&re<1,Pe=!!xe&&xe<1,Me=Ge!==Pe,Pn=Me||!!re!=!!xe,P.direction=re>xe?1:-1,P.progress=re,Pn&&!dn&&(Ee=re&&!xe?0:re===1?1:xe===1?2:3,D&&(de=!Me&&I[Ee+1]!=="none"&&I[Ee+1]||I[Ee],Yn=r&&(de==="complete"||de==="reset"||de in r))),v&&(Me||Yn)&&(Yn||h||!r)&&(_n(v)?v(P):P.getTrailing(v).forEach(function(Ki){return Ki.endAnimation()})),D||(F&&!dn&&!zo?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",re,r._tTime/r._tDur):(F.vars.totalProgress=re,F.invalidate().restart())):r&&r.totalProgress(re,!!(dn&&(et||bt)))),d){if(bt&&p&&(B.style[p+E.os2]=Nt),!V)J($a(Ct+ct*re));else if(Pn){if(cn=!bt&&re>xe&&Ot+1>Kt&&Kt+1>=Vi(C,E),S)if(!bt&&(Ge||cn)){var Ye=sr(d,!0),qe=Kt-Mt;Op(d,ge,Ye.top+(E===Ke?qe:0)+je,Ye.left+(E===Ke?0:qe)+je)}else Op(d,B);aa(Ge||cn?N:T),ut&&re<1&&Ge||J(Ct+(re===1&&!cn?ct:0))}}x&&!rt.tween&&!dn&&!zo&&xt.restart(!0),a&&(Me||M&&re&&(re<1||!Kc))&&Mo(a.targets).forEach(function(Ki){return Ki.classList[Ge||M?"add":"remove"](a.className)}),o&&!D&&!bt&&o(P),Pn&&!dn?(D&&(Yn&&(de==="complete"?r.pause().totalProgress(1):de==="reset"?r.restart(!0).pause():de==="restart"?r.restart(!0):r[de]()),o&&o(P)),(Me||!Kc)&&(c&&Me&&Jc(P,c),z[Ee]&&Jc(P,z[Ee]),M&&(re===1?P.kill(!1,1):z[Ee]=0),Me||(Ee=re===1?1:3,z[Ee]&&Jc(P,z[Ee]))),R&&!Ge&&Math.abs(P.getVelocity())>(Ya(R)?R:2500)&&(Na(P.callbackAnimation),F?F.progress(1):Na(r,de==="reverse"?1:!re,1))):D&&o&&!dn&&o(P)}if(Pt){var Qe=w?Kt/w.duration()*(w._caScrollDist||0):Kt;lt(Qe+($._isFlipped?1:0)),Pt(Qe)}dt&&dt(-Kt/w.duration()*(w._caScrollDist||0))}},P.enable=function(bt,jt){P.enabled||(P.enabled=!0,rn(C,"resize",qa),U||rn(C,"scroll",Ns),Y&&rn(i,"refreshInit",Y),bt!==!1&&(P.progress=G=0,Ut=$t=nt=j()),jt!==!1&&P.refresh())},P.getTween=function(bt){return bt&&rt?rt.tween:F},P.setPositions=function(bt,jt,Ht,Kt){if(w){var ke=w.scrollTrigger,re=w.duration(),xe=ke.end-ke.start;bt=ke.start+xe*bt/re,jt=ke.start+xe*jt/re}P.refresh(!1,!1,{start:Cp(bt,Ht&&!!P._startClamp),end:Cp(jt,Ht&&!!P._endClamp)},Kt),P.update()},P.adjustPinSpacing=function(bt){if(Lt&&bt){var jt=Lt.indexOf(E.d)+1;Lt[jt]=parseFloat(Lt[jt])+bt+je,Lt[1]=parseFloat(Lt[1])+bt+je,aa(Lt)}},P.disable=function(bt,jt){if(bt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,jt||F&&F.pause(),st=0,gt&&(gt.uncache=1),Y&&nn(i,"refreshInit",Y),xt&&(xt.pause(),rt.tween&&rt.tween.kill()&&(rt.tween=0)),!U)){for(var Ht=ie.length;Ht--;)if(ie[Ht].scroller===C&&ie[Ht]!==P)return;nn(C,"resize",qa),U||nn(C,"scroll",Ns)}},P.kill=function(bt,jt){P.disable(bt,jt),F&&!jt&&F.kill(),l&&delete gh[l];var Ht=ie.indexOf(P);Ht>=0&&ie.splice(Ht,1),Ht===Tn&&Nl>0&&Tn--,Ht=0,ie.forEach(function(Kt){return Kt.scroller===P.scroller&&(Ht=1)}),Ht||wn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,bt&&r.revert({kill:!1}),jt||r.kill()),Vt&&[Vt,kt,$,O].forEach(function(Kt){return Kt.parentNode&&Kt.parentNode.removeChild(Kt)}),uo===P&&(uo=0),d&&(gt&&(gt.uncache=1),Ht=0,ie.forEach(function(Kt){return Kt.pin===d&&Ht++}),Ht||(gt.spacer=0)),n.onKill&&n.onKill(P)},ie.push(P),P.enable(!1,!1),Gt&&Gt(P),r&&r.add&&!Dt){var Jt=P.update;P.update=function(){P.update=Jt,oe.cache++,Mt||Ot||P.refresh()},Ft.delayedCall(.01,P.update),Dt=.01,Mt=Ot=0}else P.refresh();d&&$M()},i.register=function(n){return qs||(Ft=n||I_(),N_()&&window.document&&i.enable(),qs=Xa),qs},i.defaults=function(n){if(n)for(var r in n)Wo[r]=n[r];return Wo},i.disable=function(n,r){Xa=0,ie.forEach(function(o){return o[r?"kill":"disable"](n)}),nn(ae,"wheel",Ns),nn(Re,"scroll",Ns),clearInterval(Bo),nn(Re,"touchcancel",Fi),nn(ge,"touchstart",Fi),Ho(nn,Re,"pointerdown,touchstart,mousedown",Rp),Ho(nn,Re,"pointerup,touchend,mouseup",Pp),rc.kill(),Vo(nn);for(var s=0;s<oe.length;s+=3)Go(nn,oe[s],oe[s+1]),Go(nn,oe[s],oe[s+2])},i.enable=function(){if(ae=window,Re=document,ei=Re.documentElement,ge=Re.body,Ft&&(Mo=Ft.utils.toArray,ro=Ft.utils.clamp,ph=Ft.core.context||Fi,jc=Ft.core.suppressOverwrites||Fi,Qf=ae.history.scrollRestoration||"auto",_h=ae.pageYOffset||0,Ft.core.globals("ScrollTrigger",i),ge)){Xa=1,sa=document.createElement("div"),sa.style.height="100vh",sa.style.position="absolute",W_(),BM(),Ve.register(Ft),i.isTouch=Ve.isTouch,Ar=Ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dh=Ve.isTouch===1,rn(ae,"wheel",Ns),Jf=[ae,Re,ei,ge],Ft.matchMedia?(i.matchMedia=function(c){var u=Ft.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ft.addEventListener("matchMediaInit",function(){H_(),sd()}),Ft.addEventListener("matchMediaRevert",function(){return V_()}),Ft.addEventListener("matchMedia",function(){ds(0,1),ws("matchMedia")}),Ft.matchMedia().add("(orientation: portrait)",function(){return Qc(),Qc})):console.warn("Requires GSAP 3.11.0 or later"),Qc(),rn(Re,"scroll",Ns);var n=ge.hasAttribute("style"),r=ge.style,s=r.borderTopStyle,o=Ft.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=sr(ge),Ke.m=Math.round(a.top+Ke.sc())||0,Cn.m=Math.round(a.left+Cn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Bo=setInterval(Np,250),Ft.delayedCall(.5,function(){return zo=0}),rn(Re,"touchcancel",Fi),rn(ge,"touchstart",Fi),Ho(rn,Re,"pointerdown,touchstart,mousedown",Rp),Ho(rn,Re,"pointerup,touchend,mouseup",Pp),fh=Ft.utils.checkPrefix("transform"),Il.push(fh),qs=mn(),rc=Ft.delayedCall(.2,ds).pause(),js=[Re,"visibilitychange",function(){var c=ae.innerWidth,u=ae.innerHeight;Re.hidden?(Tp=c,wp=u):(Tp!==c||wp!==u)&&qa()},Re,"DOMContentLoaded",ds,ae,"load",ds,ae,"resize",qa],Vo(rn),ie.forEach(function(c){return c.enable(0,1)}),l=0;l<oe.length;l+=3)Go(nn,oe[l],oe[l+1]),Go(nn,oe[l],oe[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Kc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Bo)||(Bo=r)&&setInterval(Np,r),"ignoreMobileResize"in n&&(dh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Vo(nn)||Vo(rn,n.autoRefreshEvents||"none"),P_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=On(n),o=oe.indexOf(s),a=Es(s);~o&&oe.splice(o,a?6:2),r&&(a?Wi.unshift(ae,r,ge,r,ei,r):Wi.unshift(s,r))},i.clearMatchMedia=function(n){ie.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Qn(n)?On(n):n).getBoundingClientRect(),a=o[s?Ms:Ss]*r||0;return s?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},i.positionInViewport=function(n,r,s){Qn(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[s?Ms:Ss],l=r==null?a/2:r in ac?ac[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},i.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ts.killAll||[];Ts={},r.forEach(function(s){return s()})}},i})();te.version="3.14.2";te.saveStyles=function(i){return i?Mo(i).forEach(function(t){if(t&&t.style){var e=Jn.indexOf(t);e>=0&&Jn.splice(e,5),Jn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ft.core.getCache(t),ph())}}):Jn};te.revert=function(i,t){return sd(!i,t)};te.create=function(i,t){return new te(i,t)};te.refresh=function(i){return i?qa(!0):(qs||te.register())&&ds(!0)};te.update=function(i){return++oe.cache&&ur(i===!0?2:0)};te.clearScrollMemory=G_;te.maxScroll=function(i,t){return Vi(i,t?Cn:Ke)};te.getScrollFunc=function(i,t){return Hr(On(i),t?Cn:Ke)};te.getById=function(i){return gh[i]};te.getAll=function(){return ie.filter(function(i){return i.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!Mi};te.snapDirectional=rd;te.addEventListener=function(i,t){var e=Ts[i]||(Ts[i]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(i,t){var e=Ts[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ft.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&_n(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return _n(s)&&(s=s(),rn(te,"refresh",function(){return s=t.batchMax()})),Mo(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(te.create(c))}),e};var Bp=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},eu=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ve.isTouch?" pinch-zoom":""):"none",t===ei&&i(ge,e)},qo={auto:1,scroll:1},ZM=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ft.core.getCache(s),a=mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(qo[(l=gi(s)).overflowY]||qo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Es(s)&&(qo[(l=gi(s)).overflowY]||qo[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},$_=function(t,e,n,r){return Ve.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&ZM,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&rn(Re,Ve.eventTypes[0],Vp,!1,!0)},onDisable:function(){return nn(Re,Ve.eventTypes[0],Vp,!0)}})},JM=/(input|label|select|textarea)/i,zp,Vp=function(t){var e=JM.test(t.target.tagName);(e||zp)&&(t._gsapAllow=!0,zp=e)},QM=function(t){os(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=On(t.target)||ei,u=Ft.core.globals().ScrollSmoother,h=u&&u.get(),f=Ar&&(t.content&&On(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Hr(c,Ke),p=Hr(c,Cn),m=1,g=(Ve.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,_=0,y=_n(r)?function(){return r(a)}:function(){return r||2.8},M,x,S=$_(c,t.type,!0,s),b=function(){return x=!1},w=Fi,R=Fi,v=function(){l=Vi(c,Ke),R=ro(Ar?1:0,l),n&&(w=ro(0,Vi(c,Cn))),M=bs},E=function(){f._gsap.y=$a(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(b);var k=$a(a.deltaY/2),X=R(d.v-k);if(f&&X!==d.v+d.offset){d.offset=X-d.v;var P=$a((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=oe.cache,ur()}return!0}d.offset&&E(),x=!0},C,L,U,V,z=function(){v(),C.isActive()&&C.vars.scrollY>l&&(d()>l?C.progress(1)&&d(l):C.resetTo("scrollY",l))};return f&&Ft.set(f,{y:"+=0"}),t.ignoreCheck=function(I){return Ar&&I.type==="touchmove"&&D()||m>1.05&&I.type!=="touchstart"||a.isGesturing||I.touches&&I.touches.length>1},t.onPress=function(){x=!1;var I=m;m=$a((ae.visualViewport&&ae.visualViewport.scale||1)/g),C.pause(),I!==m&&eu(c,m>1.01?!0:n?!1:"x"),L=p(),U=d(),v(),M=bs},t.onRelease=t.onGestureStart=function(I,k){if(d.offset&&E(),!k)V.restart(!0);else{oe.cache++;var X=y(),P,Y;n&&(P=p(),Y=P+X*.05*-I.velocityX/.227,X*=Bp(p,P,Y,Vi(c,Cn)),C.vars.scrollX=w(Y)),P=d(),Y=P+X*.05*-I.velocityY/.227,X*=Bp(d,P,Y,Vi(c,Ke)),C.vars.scrollY=R(Y),C.invalidate().duration(X).play(.01),(Ar&&C.vars.scrollY>=l||P>=l-1)&&Ft.to({},{onUpdate:z,duration:X})}o&&o(I)},t.onWheel=function(){C._ts&&C.pause(),mn()-_>1e3&&(M=0,_=mn())},t.onChange=function(I,k,X,P,Y){if(bs!==M&&v(),k&&n&&p(w(P[2]===k?L+(I.startX-I.x):p()+k-P[1])),X){d.offset&&E();var pt=Y[2]===X,yt=pt?U+I.startY-I.y:d()+X-Y[1],nt=R(yt);pt&&yt!==nt&&(U+=nt-yt),d(nt)}(X||k)&&ur()},t.onEnable=function(){eu(c,n?!1:"x"),te.addEventListener("refresh",z),rn(ae,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),S.enable()},t.onDisable=function(){eu(c,!0),nn(ae,"resize",z),te.removeEventListener("refresh",z),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ve(t),a.iOS=Ar,Ar&&!d()&&d(1),Ar&&Ft.ticker.add(Fi),V=a._dc,C=Ft.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:X_(d,d(),function(){return C.pause()})},onUpdate:ur,onComplete:V.vars.onComplete}),a};te.sort=function(i){if(_n(i))return ie.sort(i);var t=ae.pageYOffset||0;return te.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ae.innerHeight}),ie.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};te.observe=function(i){return new Ve(i)};te.normalizeScroll=function(i){if(typeof i>"u")return En;if(i===!0&&En)return En.enable();if(i===!1){En&&En.kill(),En=i;return}var t=i instanceof Ve?i:QM(i);return En&&En.target===t.target&&En.kill(),Es(t.target)&&(En=t),t};te.core={_getVelocityProp:hh,_inputObserver:$_,_scrollers:oe,_proxies:Wi,bridge:{ss:function(){Mi||ws("scrollStart"),Mi=mn()},ref:function(){return dn}}};I_()&&Ft.registerPlugin(te);nc.registerPlugin(te);class tS{constructor({onStepEnter:t,onStepLeave:e,onProgress:n}){this.onStepEnter=t,this.onStepLeave=e,this.onProgress=n,this.lenis=null,this.triggers=[],this.progressBar=null}init(){this.initLenis(),this.initProgressBar(),this.initStepTriggers()}initLenis(){this.lenis=new gy({lerp:.1,smoothWheel:!0}),this.lenis.on("scroll",te.update),nc.ticker.add(t=>this.lenis.raf(t*1e3)),nc.ticker.lagSmoothing(0)}initProgressBar(){const t=document.createElement("div");t.className="scroll-progress";const e=document.createElement("div");e.className="scroll-progress-bar",t.appendChild(e),document.body.appendChild(t),this.progressBar=e}initStepTriggers(){document.querySelectorAll(".step").forEach((e,n)=>{const r=te.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>this.onStepEnter(n,"down"),onEnterBack:()=>this.onStepEnter(n,"up"),onLeave:()=>this.onStepLeave(n,"down"),onLeaveBack:()=>this.onStepLeave(n,"up")});this.triggers.push(r)}),te.create({trigger:"#scroll-content",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>{this.onProgress(e.progress),this.updateProgressBar(e.progress)}})}updateProgressBar(t){this.progressBar&&(this.progressBar.style.width=`${t*100}%`)}destroy(){this.triggers.forEach(t=>t.kill()),this.triggers=[],this.lenis?.destroy(),te.getAll().forEach(t=>t.kill()),this.progressBar&&(this.progressBar.parentElement?.remove(),this.progressBar=null)}}const ad="182",eS=0,Hp=1,nS=2,Fl=1,iS=2,ja=3,Gr=0,Gn=1,ar=2,hr=0,oa=1,Gp=2,Wp=3,Xp=4,rS=5,us=100,sS=101,aS=102,oS=103,lS=104,cS=200,uS=201,hS=202,fS=203,vh=204,yh=205,dS=206,pS=207,mS=208,gS=209,_S=210,xS=211,vS=212,yS=213,MS=214,Mh=0,Sh=1,bh=2,va=3,Eh=4,Th=5,wh=6,Ah=7,Y_=0,SS=1,bS=2,Xi=0,q_=1,j_=2,K_=3,Z_=4,J_=5,Q_=6,t0=7,e0=300,As=301,ya=302,Ch=303,Rh=304,Sc=306,Ph=1e3,cr=1001,Dh=1002,on=1003,ES=1004,jo=1005,xn=1006,nu=1007,ps=1008,xi=1009,n0=1010,i0=1011,bo=1012,od=1013,qi=1014,Hi=1015,gr=1016,ld=1017,cd=1018,Eo=1020,r0=35902,s0=35899,a0=1021,o0=1022,Ri=1023,_r=1026,ms=1027,l0=1028,ud=1029,Ma=1030,hd=1031,fd=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Lh=35840,Nh=35841,Ih=35842,Uh=35843,Fh=36196,Oh=37492,kh=37496,Bh=37488,zh=37489,Vh=37490,Hh=37491,Gh=37808,Wh=37809,Xh=37810,$h=37811,Yh=37812,qh=37813,jh=37814,Kh=37815,Zh=37816,Jh=37817,Qh=37818,tf=37819,ef=37820,nf=37821,rf=36492,sf=36494,af=36495,of=36283,lf=36284,cf=36285,uf=36286,TS=3200,wS=0,AS=1,Cr="",pi="srgb",Sa="srgb-linear",oc="linear",ye="srgb",Is=7680,$p=519,CS=512,RS=513,PS=514,dd=515,DS=516,LS=517,pd=518,NS=519,Yp=35044,qp="300 es",Gi=2e3,lc=2001;function c0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function IS(){const i=cc("canvas");return i.style.display="block",i}const jp={};function Kp(...i){const t="THREE."+i.shift();console.log(t,...i)}function Zt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function me(...i){const t="THREE."+i.shift();console.error(t,...i)}function To(...i){const t=i.join(" ");t in jp||(jp[t]=!0,Zt(...i))}function US(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Ea{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,hf=180/Math.PI;function Co(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function FS(i,t){return(i%t+t)%t}function ru(i,t,e){return(1-e)*i+e*t}function Ia(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,e=0){be.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ro{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],m=s[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a>=1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(h!==m||l!==f||c!==d||u!==p){let g=l*f+c*d+u*p+h*m;g<0&&(f=-f,d=-d,p=-p,m=-m,g=-g);let _=1-a;if(g<.9995){const y=Math.acos(g),M=Math.sin(y);_=Math.sin(_*y)/M,a=Math.sin(a*y)/M,l=l*_+f*a,c=c*_+d*a,u=u*_+p*a,h=h*_+m*a}else{l=l*_+f*a,c=c*_+d*a,u=u*_+p*a,h=h*_+m*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return su.copy(this).projectOnVector(t),this.sub(su)}reflect(t){return this.sub(su.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new K,Zp=new Ro;class Qt{constructor(t,e,n,r,s,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],m=r[0],g=r[3],_=r[6],y=r[1],M=r[4],x=r[7],S=r[2],b=r[5],w=r[8];return s[0]=o*m+a*y+l*S,s[3]=o*g+a*M+l*b,s[6]=o*_+a*x+l*w,s[1]=c*m+u*y+h*S,s[4]=c*g+u*M+h*b,s[7]=c*_+u*x+h*w,s[2]=f*m+d*y+p*S,s[5]=f*g+d*M+p*b,s[8]=f*_+d*x+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(r*c-u*n)*m,t[2]=(a*n-r*o)*m,t[3]=f*m,t[4]=(u*e-r*l)*m,t[5]=(r*s-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(au.makeScale(t,e)),this}rotate(t){return this.premultiply(au.makeRotation(-t)),this}translate(t,e){return this.premultiply(au.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const au=new Qt,Jp=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const i={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=la(r.r),r.g=la(r.g),r.b=la(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cr?oc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return To("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return To("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sa]:{primaries:t,whitePoint:n,transfer:oc,toXYZ:Jp,fromXYZ:Qp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Jp,fromXYZ:Qp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),i}const he=OS();function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function la(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class kS{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=cc("canvas")),Us.width=t.width,Us.height=t.height;const r=Us.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BS=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Co(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ou(r[o].image)):s.push(ou(r[o]))}else s=ou(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ou(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let zS=0;const lu=new K;class Rn extends Ea{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,n=cr,r=cr,s=xn,o=ps,a=Ri,l=xi,c=Rn.DEFAULT_ANISOTROPY,u=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Co(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lu).x}get height(){return this.source.getSize(lu).y}get depth(){return this.source.getSize(lu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==e0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case cr:t.x=t.x<0?0:1;break;case Dh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case cr:t.y=t.y<0?0:1;break;case Dh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=e0;Rn.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,n=0,r=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],m=l[2],g=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(d+1)/2,S=(_+1)/2,b=(u+f)/4,w=(h+m)/4,R=(p+g)/4;return M>x&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=b/n,s=w/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=b/r,s=R/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=R/s),this.set(n,r,s,e),this}let y=Math.sqrt((g-p)*(g-p)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends Ea{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Rn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new md(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends VS{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class u0 extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HS extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ei):Ei.fromBufferAttribute(s,o),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ua),Zo.subVectors(this.max,Ua),Fs.subVectors(t.a,Ua),Os.subVectors(t.b,Ua),ks.subVectors(t.c,Ua),Mr.subVectors(Os,Fs),Sr.subVectors(ks,Os),Zr.subVectors(Fs,ks);let e=[0,-Mr.z,Mr.y,0,-Sr.z,Sr.y,0,-Zr.z,Zr.y,Mr.z,0,-Mr.x,Sr.z,0,-Sr.x,Zr.z,0,-Zr.x,-Mr.y,Mr.x,0,-Sr.y,Sr.x,0,-Zr.y,Zr.x,0];return!cu(e,Fs,Os,ks,Zo)||(e=[1,0,0,0,1,0,0,0,1],!cu(e,Fs,Os,ks,Zo))?!1:(Jo.crossVectors(Mr,Sr),e=[Jo.x,Jo.y,Jo.z],cu(e,Fs,Os,ks,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new K,new K,new K,new K,new K,new K,new K,new K],Ei=new K,Ko=new Po,Fs=new K,Os=new K,ks=new K,Mr=new K,Sr=new K,Zr=new K,Ua=new K,Zo=new K,Jo=new K,Jr=new K;function cu(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Jr.fromArray(i,s);const a=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),l=t.dot(Jr),c=e.dot(Jr),u=n.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const GS=new Po,Fa=new K,uu=new K;class bc{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):GS.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fa.subVectors(t,this.center);const e=Fa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Fa,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fa.copy(t.center).add(uu)),this.expandByPoint(Fa.copy(t.center).sub(uu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ji=new K,hu=new K,Qo=new K,br=new K,fu=new K,tl=new K,du=new K;class h0{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){hu.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),br.copy(this.origin).sub(hu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=br.dot(this.direction),l=-br.dot(Qo),c=br.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(hu).addScaledVector(Qo,f),d}intersectSphere(t,e){Ji.subVectors(t.center,this.origin);const n=Ji.dot(this.direction),r=Ji.dot(Ji)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,n,r,s){fu.subVectors(e,t),tl.subVectors(n,t),du.crossVectors(fu,tl);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;br.subVectors(this.origin,t);const l=a*this.direction.dot(tl.crossVectors(br,tl));if(l<0)return null;const c=a*this.direction.dot(fu.cross(br));if(c<0||l+c>o)return null;const u=-a*br.dot(du);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,p,m,g){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,m,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,m,g){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=p,_[11]=m,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Bs.setFromMatrixColumn(t,0).length(),s=1/Bs.setFromMatrixColumn(t,1).length(),o=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,p=a*u,m=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,p=c*u,m=c*h;e[0]=f+m*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,p=c*u,m=c*h;e[0]=f-m*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,p=a*u,m=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+m,e[1]=l*h,e[5]=m*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,p=a*l,m=a*c;e[0]=l*u,e[4]=m-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-m*h}else if(t.order==="XZY"){const f=o*l,d=o*c,p=a*l,m=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+m,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(WS,t,XS)}lookAt(t,e,n){const r=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Er.crossVectors(n,Kn),Er.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Er.crossVectors(n,Kn)),Er.normalize(),el.crossVectors(Kn,Er),r[0]=Er.x,r[4]=el.x,r[8]=Kn.x,r[1]=Er.y,r[5]=el.y,r[9]=Kn.y,r[2]=Er.z,r[6]=el.z,r[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],m=n[6],g=n[10],_=n[14],y=n[3],M=n[7],x=n[11],S=n[15],b=r[0],w=r[4],R=r[8],v=r[12],E=r[1],D=r[5],C=r[9],L=r[13],U=r[2],V=r[6],z=r[10],I=r[14],k=r[3],X=r[7],P=r[11],Y=r[15];return s[0]=o*b+a*E+l*U+c*k,s[4]=o*w+a*D+l*V+c*X,s[8]=o*R+a*C+l*z+c*P,s[12]=o*v+a*L+l*I+c*Y,s[1]=u*b+h*E+f*U+d*k,s[5]=u*w+h*D+f*V+d*X,s[9]=u*R+h*C+f*z+d*P,s[13]=u*v+h*L+f*I+d*Y,s[2]=p*b+m*E+g*U+_*k,s[6]=p*w+m*D+g*V+_*X,s[10]=p*R+m*C+g*z+_*P,s[14]=p*v+m*L+g*I+_*Y,s[3]=y*b+M*E+x*U+S*k,s[7]=y*w+M*D+x*V+S*X,s[11]=y*R+M*C+x*z+S*P,s[15]=y*v+M*L+x*I+S*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],m=t[7],g=t[11],_=t[15],y=l*d-c*f,M=a*d-c*h,x=a*f-l*h,S=o*d-c*u,b=o*f-l*u,w=o*h-a*u;return e*(m*y-g*M+_*x)-n*(p*y-g*S+_*b)+r*(p*M-m*S+_*w)-s*(p*x-m*b+g*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],m=t[13],g=t[14],_=t[15],y=h*g*c-m*f*c+m*l*d-a*g*d-h*l*_+a*f*_,M=p*f*c-u*g*c-p*l*d+o*g*d+u*l*_-o*f*_,x=u*m*c-p*h*c+p*a*d-o*m*d-u*a*_+o*h*_,S=p*h*l-u*m*l-p*a*f+o*m*f+u*a*g-o*h*g,b=e*y+n*M+r*x+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=y*w,t[1]=(m*f*s-h*g*s-m*r*d+n*g*d+h*r*_-n*f*_)*w,t[2]=(a*g*s-m*l*s+m*r*c-n*g*c-a*r*_+n*l*_)*w,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*w,t[4]=M*w,t[5]=(u*g*s-p*f*s+p*r*d-e*g*d-u*r*_+e*f*_)*w,t[6]=(p*l*s-o*g*s-p*r*c+e*g*c+o*r*_-e*l*_)*w,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*w,t[8]=x*w,t[9]=(p*h*s-u*m*s-p*n*d+e*m*d+u*n*_-e*h*_)*w,t[10]=(o*m*s-p*a*s+p*n*c-e*m*c-o*n*_+e*a*_)*w,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*w,t[12]=S*w,t[13]=(u*m*r-p*h*r+p*n*f-e*m*f-u*n*g+e*h*g)*w,t[14]=(p*a*r-o*m*r-p*n*l+e*m*l+o*n*g-e*a*g)*w,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,m=o*u,g=o*h,_=a*h,y=l*c,M=l*u,x=l*h,S=n.x,b=n.y,w=n.z;return r[0]=(1-(m+_))*S,r[1]=(d+x)*S,r[2]=(p-M)*S,r[3]=0,r[4]=(d-x)*b,r[5]=(1-(f+_))*b,r[6]=(g+y)*b,r[7]=0,r[8]=(p+M)*w,r[9]=(g-y)*w,r[10]=(1-(f+m))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Bs.set(r[0],r[1],r[2]).length();const o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Ti.copy(this);const c=1/s,u=1/o,h=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,e.setFromRotationMatrix(Ti),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Gi,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,m;if(l)p=s/(o-s),m=o*s/(o-s);else if(a===Gi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===lc)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Gi,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let p,m;if(l)p=1/(o-s),m=o/(o-s);else if(a===Gi)p=-2/(o-s),m=-(o+s)/(o-s);else if(a===lc)p=-1/(o-s),m=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bs=new K,Ti=new He,WS=new K(0,0,0),XS=new K(1,1,1),Er=new K,el=new K,Kn=new K,tm=new He,em=new Ro;class xr{constructor(t=0,e=0,n=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return em.setFromEuler(this),this.setFromQuaternion(em,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $S=0;const nm=new K,zs=new Ro,Qi=new He,nl=new K,Oa=new K,YS=new K,qS=new Ro,im=new K(1,0,0),rm=new K(0,1,0),sm=new K(0,0,1),am={type:"added"},jS={type:"removed"},Vs={type:"childadded",child:null},pu={type:"childremoved",child:null};class Wn extends Ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new K,e=new xr,n=new Ro,r=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Qt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(im,t)}rotateY(t){return this.rotateOnAxis(rm,t)}rotateZ(t){return this.rotateOnAxis(sm,t)}translateOnAxis(t,e){return nm.copy(t).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(im,t)}translateY(t){return this.translateOnAxis(rm,t)}translateZ(t){return this.translateOnAxis(sm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nl.copy(t):nl.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Oa,nl,this.up):Qi.lookAt(nl,Oa,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Qi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(am),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jS),pu.child=t,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(am),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,t,YS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,qS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Wn.DEFAULT_UP=new K(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new K,tr=new K,mu=new K,er=new K,Hs=new K,Gs=new K,om=new K,gu=new K,_u=new K,xu=new K,vu=new ze,yu=new ze,Mu=new ze;class Ci{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),wi.subVectors(t,e),r.cross(wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){wi.subVectors(r,e),tr.subVectors(n,e),mu.subVectors(t,e);const o=wi.dot(wi),a=wi.dot(tr),l=wi.dot(mu),c=tr.dot(tr),u=tr.dot(mu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return vu.setScalar(0),yu.setScalar(0),Mu.setScalar(0),vu.fromBufferAttribute(t,e),yu.fromBufferAttribute(t,n),Mu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(vu,s.x),o.addScaledVector(yu,s.y),o.addScaledVector(Mu,s.z),o}static isFrontFacing(t,e,n,r){return wi.subVectors(n,e),tr.subVectors(t,e),wi.cross(tr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),wi.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ci.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Hs.subVectors(r,n),Gs.subVectors(s,n),gu.subVectors(t,n);const l=Hs.dot(gu),c=Gs.dot(gu);if(l<=0&&c<=0)return e.copy(n);_u.subVectors(t,r);const u=Hs.dot(_u),h=Gs.dot(_u);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Hs,o);xu.subVectors(t,s);const d=Hs.dot(xu),p=Gs.dot(xu);if(p>=0&&d<=p)return e.copy(s);const m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Gs,a);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return om.subVectors(s,r),a=(h-u)/(h-u+(d-p)),e.copy(r).addScaledVector(om,a);const _=1/(g+m+f);return o=m*_,a=f*_,e.copy(n).addScaledVector(Hs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},il={h:0,s:0,l:0};function Su(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _e{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=FS(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Su(o,s,t+1/3),this.g=Su(o,s,t),this.b=Su(o,s,t-1/3)}return he.colorSpaceToWorking(this,r),this}setStyle(t,e=pi){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pi){const n=d0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return he.workingToColorSpace(fn.copy(this),t),Math.round(ce(fn.r*255,0,255))*65536+Math.round(ce(fn.g*255,0,255))*256+Math.round(ce(fn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,s=fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=pi){he.workingToColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,r=fn.b;return t!==pi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Tr),this.setHSL(Tr.h+t,Tr.s+e,Tr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tr),t.getHSL(il);const n=ru(Tr.h,il.h,e),r=ru(Tr.s,il.s,e),s=ru(Tr.l,il.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new _e;_e.NAMES=d0;let KS=0;class Do extends Ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=oa,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=yh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(n.blending=this.blending),this.side!==Gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vh&&(n.blendSrc=this.blendSrc),this.blendDst!==yh&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class p0 extends Do{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new K,rl=new be;let ZS=0;class Si{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rl.fromBufferAttribute(this,e),rl.applyMatrix3(t),this.setXY(e,rl.x,rl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ia(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ia(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ia(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ia(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ia(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yp&&(t.usage=this.usage),t}}class m0 extends Si{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class g0 extends Si{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class dr extends Si{constructor(t,e,n){super(new Float32Array(t),e,n)}}let JS=0;const ui=new He,bu=new Wn,Ws=new K,Zn=new Po,ka=new Po,en=new K;class Di extends Ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?g0:m0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,n){return ui.makeTranslation(t,e,n),this.applyMatrix4(ui),this}scale(t,e,n){return ui.makeScale(t,e,n),this.applyMatrix4(ui),this}lookAt(t){return bu.lookAt(t),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dr(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ka.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Zn.min,ka.min),Zn.expandByPoint(en),en.addVectors(Zn.max,ka.max),Zn.expandByPoint(en)):(Zn.expandByPoint(ka.min),Zn.expandByPoint(ka.max))}Zn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)en.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(en));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(t,c),en.add(Ws)),r=Math.max(r,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new K,l[R]=new K;const c=new K,u=new K,h=new K,f=new be,d=new be,p=new be,m=new K,g=new K;function _(R,v,E){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),p.sub(f);const D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(D),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(D),a[R].add(m),a[v].add(m),a[E].add(m),l[R].add(g),l[v].add(g),l[E].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,v=y.length;R<v;++R){const E=y[R],D=E.start,C=E.count;for(let L=D,U=D+C;L<U;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new K,x=new K,S=new K,b=new K;function w(R){S.fromBufferAttribute(r,R),b.copy(S);const v=a[R];M.copy(v),M.sub(S.multiplyScalar(S.dot(v))).normalize(),x.crossVectors(b,v);const D=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,D)}for(let R=0,v=y.length;R<v;++R){const E=y[R],D=E.start,C=E.count;for(let L=D,U=D+C;L<U;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Si(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,h=new K;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),m=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,p=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[p++]=c[d++]}return new Si(f,u,h)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Di,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new He,Qr=new h0,sl=new bc,cm=new K,al=new K,ol=new K,ll=new K,Eu=new K,cl=new K,um=new K,ul=new K;class vr extends Wn{constructor(t=new Di,e=new p0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Eu.fromBufferAttribute(h,t),o?cl.addScaledVector(Eu,u):cl.addScaledVector(Eu.sub(e),u))}e.add(cl)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),Qr.copy(t.ray).recast(t.near),!(sl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(sl,cm)===null||Qr.origin.distanceToSquared(cm)>(t.far-t.near)**2))&&(lm.copy(s).invert(),Qr.copy(t.ray).applyMatrix4(lm),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const g=f[p],_=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,S=M;x<S;x+=3){const b=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);r=hl(this,_,t,n,c,u,h,b,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=p,_=m;g<_;g+=3){const y=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);r=hl(this,o,t,n,c,u,h,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const g=f[p],_=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,S=M;x<S;x+=3){const b=x,w=x+1,R=x+2;r=hl(this,_,t,n,c,u,h,b,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let g=p,_=m;g<_;g+=3){const y=g,M=g+1,x=g+2;r=hl(this,o,t,n,c,u,h,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function QS(i,t,e,n,r,s,o,a){let l;if(t.side===Gn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Gr,a),l===null)return null;ul.copy(a),ul.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ul);return c<e.near||c>e.far?null:{distance:c,point:ul.clone(),object:i}}function hl(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,al),i.getVertexPosition(l,ol),i.getVertexPosition(c,ll);const u=QS(i,t,e,n,al,ol,ll,um);if(u){const h=new K;Ci.getBarycoord(um,al,ol,ll,h),r&&(u.uv=Ci.getInterpolatedAttribute(r,a,l,c,h,new be)),s&&(u.uv1=Ci.getInterpolatedAttribute(s,a,l,c,h,new be)),o&&(u.normal=Ci.getInterpolatedAttribute(o,a,l,c,h,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};Ci.getNormal(al,ol,ll,f.normal),u.face=f,u.barycoord=h}return u}class Lo extends Di{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(u,3)),this.setAttribute("uv",new dr(h,2));function p(m,g,_,y,M,x,S,b,w,R,v){const E=x/w,D=S/R,C=x/2,L=S/2,U=b/2,V=w+1,z=R+1;let I=0,k=0;const X=new K;for(let P=0;P<z;P++){const Y=P*D-L;for(let pt=0;pt<V;pt++){const yt=pt*E-C;X[m]=yt*y,X[g]=Y*M,X[_]=U,c.push(X.x,X.y,X.z),X[m]=0,X[g]=0,X[_]=b>0?1:-1,u.push(X.x,X.y,X.z),h.push(pt/w),h.push(1-P/R),I+=1}}for(let P=0;P<R;P++)for(let Y=0;Y<w;Y++){const pt=f+Y+V*P,yt=f+Y+V*(P+1),nt=f+(Y+1)+V*(P+1),et=f+(Y+1)+V*P;l.push(pt,yt,et),l.push(yt,nt,et),k+=6}a.addGroup(d,k,v),d+=k,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ba(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function bn(i){const t={};for(let e=0;e<i.length;e++){const n=ba(i[e]);for(const r in n)t[r]=n[r]}return t}function tb(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const eb={clone:ba,merge:bn};var nb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Do{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nb,this.fragmentShader=ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ba(t.uniforms),this.uniformsGroups=tb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class x0 extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new K,hm=new be,fm=new be;class _i extends x0{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hf*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wr.x,wr.y).multiplyScalar(-t/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-t/wr.z)}getViewSize(t,e){return this.getViewBounds(t,hm,fm),e.subVectors(fm,hm)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(iu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xs=-90,$s=1;class rb extends Wn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _i(Xs,$s,t,e);r.layers=this.layers,this.add(r);const s=new _i(Xs,$s,t,e);s.layers=this.layers,this.add(s);const o=new _i(Xs,$s,t,e);o.layers=this.layers,this.add(o);const a=new _i(Xs,$s,t,e);a.layers=this.layers,this.add(a);const l=new _i(Xs,$s,t,e);l.layers=this.layers,this.add(l);const c=new _i(Xs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class v0 extends Rn{constructor(t=[],e=As,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class y0 extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new v0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lo(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:ba(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:hr});s.uniforms.tEquirect.value=e;const o=new vr(r,s),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=xn),new rb(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class fl extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const g=e.getJointPose(m,n),_=this._getHandJoint(c,m);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fl;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ab extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ob extends Rn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=on,u=on,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new K,lb=new K,cb=new Qt;class ls{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=wu.subVectors(n,e).cross(lb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cb.getNormalMatrix(t),r=this.coplanarPoint(wu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new bc,ub=new be(.5,.5),dl=new K;class M0{constructor(t=new ls,e=new ls,n=new ls,r=new ls,s=new ls,o=new ls){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],m=s[9],g=s[10],_=s[11],y=s[12],M=s[13],x=s[14],S=s[15];if(r[0].setComponents(c-o,d-u,_-p,S-y).normalize(),r[1].setComponents(c+o,d+u,_+p,S+y).normalize(),r[2].setComponents(c+a,d+h,_+m,S+M).normalize(),r[3].setComponents(c-a,d-h,_-m,S-M).normalize(),n)r[4].setComponents(l,f,g,x).normalize(),r[5].setComponents(c-l,d-f,_-g,S-x).normalize();else if(r[4].setComponents(c-l,d-f,_-g,S-x).normalize(),e===Gi)r[5].setComponents(c+l,d+f,_+g,S+x).normalize();else if(e===lc)r[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const e=ub.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(dl.x=r.normal.x>0?t.max.x:t.min.x,dl.y=r.normal.y>0?t.max.y:t.min.y,dl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hb extends Do{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dm=new He,ff=new h0,pl=new bc,ml=new K;class fb extends Wn{constructor(t=new Di,e=new hb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,t.ray.intersectsSphere(pl)===!1)return;dm.copy(r).invert(),ff.copy(t.ray).applyMatrix4(dm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,m=d;p<m;p++){const g=c.getX(p);ml.fromBufferAttribute(h,g),pm(ml,g,l,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,m=d;p<m;p++)ml.fromBufferAttribute(h,p),pm(ml,p,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pm(i,t,e,n,r,s,o){const a=ff.distanceSqToPoint(i);if(a<e){const l=new K;ff.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wo extends Rn{constructor(t,e,n=qi,r,s,o,a=on,l=on,c,u=_r,h=1){if(u!==_r&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class db extends wo{constructor(t,e=qi,n=As,r,s,o=on,a=on,l,c=_r){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class S0 extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ec extends Di{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],m=[],g=[];for(let _=0;_<u;_++){const y=_*f-o;for(let M=0;M<c;M++){const x=M*h-s;p.push(x,-y,0),m.push(0,0,1),g.push(M/a),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const M=y+c*_,x=y+c*(_+1),S=y+1+c*(_+1),b=y+1+c*_;d.push(M,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new dr(p,3)),this.setAttribute("normal",new dr(m,3)),this.setAttribute("uv",new dr(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.width,t.height,t.widthSegments,t.heightSegments)}}class pb extends Pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mb extends Do{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gb extends Do{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class b0 extends x0{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _b extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function mm(i,t,e,n){const r=xb(n);switch(e){case a0:return i*t;case l0:return i*t/r.components*r.byteLength;case ud:return i*t/r.components*r.byteLength;case Ma:return i*t*2/r.components*r.byteLength;case hd:return i*t*2/r.components*r.byteLength;case o0:return i*t*3/r.components*r.byteLength;case Ri:return i*t*4/r.components*r.byteLength;case fd:return i*t*4/r.components*r.byteLength;case Ol:case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bl:case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Uh:return Math.max(i,16)*Math.max(t,8)/4;case Lh:case Ih:return Math.max(i,8)*Math.max(t,8)/2;case Fh:case Oh:case Bh:case zh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kh:case Vh:case Hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tf:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ef:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nf:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rf:case sf:case af:return Math.ceil(i/4)*Math.ceil(t/4)*16;case of:case lf:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cf:case uf:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xb(i){switch(i){case xi:case n0:return{byteLength:1,components:1};case bo:case i0:case gr:return{byteLength:2,components:1};case ld:case cd:return{byteLength:2,components:4};case qi:case od:case Hi:return{byteLength:4,components:1};case r0:case s0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);function E0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function vb(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],m=h[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,h[f]=m)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mb=`#ifdef USE_ALPHAHASH
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
#endif`,Sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wb=`#ifdef USE_AOMAP
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
#endif`,Ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cb=`#ifdef USE_BATCHING
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
#endif`,Rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ib=`#ifdef USE_BUMPMAP
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gb=`#define PI 3.141592653589793
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
} // validated`,Wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
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
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h1=`uniform bool receiveShadow;
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
#endif`,f1=`#ifdef USE_ENVMAP
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
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
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
#endif`,x1=`uniform sampler2D dfgLUT;
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
}`,v1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R1=`#if defined( USE_POINTS_UV )
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
#endif`,P1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
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
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,AE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
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
}`,LE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,BE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,HE=`#define PHONG
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
}`,GE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,XE=`#define TOON
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
}`,$E=`#define TOON
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
}`,YE=`uniform float size;
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
}`,qE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
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
}`,KE=`uniform vec3 color;
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
}`,ZE=`uniform float rotation;
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
}`,JE=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:yb,alphahash_pars_fragment:Mb,alphamap_fragment:Sb,alphamap_pars_fragment:bb,alphatest_fragment:Eb,alphatest_pars_fragment:Tb,aomap_fragment:wb,aomap_pars_fragment:Ab,batching_pars_vertex:Cb,batching_vertex:Rb,begin_vertex:Pb,beginnormal_vertex:Db,bsdfs:Lb,iridescence_fragment:Nb,bumpmap_pars_fragment:Ib,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Fb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:kb,color_fragment:Bb,color_pars_fragment:zb,color_pars_vertex:Vb,color_vertex:Hb,common:Gb,cube_uv_reflection_fragment:Wb,defaultnormal_vertex:Xb,displacementmap_pars_vertex:$b,displacementmap_vertex:Yb,emissivemap_fragment:qb,emissivemap_pars_fragment:jb,colorspace_fragment:Kb,colorspace_pars_fragment:Zb,envmap_fragment:Jb,envmap_common_pars_fragment:Qb,envmap_pars_fragment:t1,envmap_pars_vertex:e1,envmap_physical_pars_fragment:f1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:r1,fog_fragment:s1,fog_pars_fragment:a1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:u1,lights_pars_begin:h1,lights_toon_fragment:d1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:_1,lights_physical_pars_fragment:x1,lights_fragment_begin:v1,lights_fragment_maps:y1,lights_fragment_end:M1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:T1,map_fragment:w1,map_pars_fragment:A1,map_particle_fragment:C1,map_particle_pars_fragment:R1,metalnessmap_fragment:P1,metalnessmap_pars_fragment:D1,morphinstance_vertex:L1,morphcolor_vertex:N1,morphnormal_vertex:I1,morphtarget_pars_vertex:U1,morphtarget_vertex:F1,normal_fragment_begin:O1,normal_fragment_maps:k1,normal_pars_fragment:B1,normal_pars_vertex:z1,normal_vertex:V1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:W1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:$1,opaque_fragment:Y1,packing:q1,premultiplied_alpha_fragment:j1,project_vertex:K1,dithering_fragment:Z1,dithering_pars_fragment:J1,roughnessmap_fragment:Q1,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:eE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:aE,skinning_vertex:oE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:hE,tonemapping_pars_fragment:fE,transmission_fragment:dE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:_E,worldpos_vertex:xE,background_vert:vE,background_frag:yE,backgroundCube_vert:ME,backgroundCube_frag:SE,cube_vert:bE,cube_frag:EE,depth_vert:TE,depth_frag:wE,distance_vert:AE,distance_frag:CE,equirect_vert:RE,equirect_frag:PE,linedashed_vert:DE,linedashed_frag:LE,meshbasic_vert:NE,meshbasic_frag:IE,meshlambert_vert:UE,meshlambert_frag:FE,meshmatcap_vert:OE,meshmatcap_frag:kE,meshnormal_vert:BE,meshnormal_frag:zE,meshphong_vert:VE,meshphong_frag:HE,meshphysical_vert:GE,meshphysical_frag:WE,meshtoon_vert:XE,meshtoon_frag:$E,points_vert:YE,points_frag:qE,shadow_vert:jE,shadow_frag:KE,sprite_vert:ZE,sprite_frag:JE},Et={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Oi={basic:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new _e(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:bn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:bn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new _e(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:bn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:bn([Et.points,Et.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:bn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:bn([Et.common,Et.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:bn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:bn([Et.sprite,Et.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:bn([Et.common,Et.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:bn([Et.lights,Et.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Oi.physical={uniforms:bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const gl={r:0,b:0,g:0},es=new xr,QE=new He;function tT(i,t,e,n,r,s,o){const a=new _e(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function p(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function m(M){let x=!1;const S=p(M);S===null?_(a,l):S&&S.isColor&&(_(S,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===Sc)?(u===void 0&&(u=new vr(new Lo(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:ba(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),es.copy(x.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(QE.makeRotationFromEuler(es)),u.material.toneMapped=he.getTransfer(S.colorSpace)!==ye,(h!==S||f!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new vr(new Ec(2,2),new Pi({name:"BackgroundMaterial",uniforms:ba(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(S.colorSpace)!==ye,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function _(M,x){M.getRGB(gl,_0(i)),n.buffers.color.setClear(gl.r,gl.g,gl.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,_(a,l)},render:m,addToRenderList:g,dispose:y}}function eT(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,D,C,L,U){let V=!1;const z=h(L,C,D);s!==z&&(s=z,c(s.object)),V=d(E,L,C,U),V&&p(E,L,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(E,D,C,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,D,C){const L=C.wireframe===!0;let U=n[E.id];U===void 0&&(U={},n[E.id]=U);let V=U[D.id];V===void 0&&(V={},U[D.id]=V);let z=V[L];return z===void 0&&(z=f(l()),V[L]=z),z}function f(E){const D=[],C=[],L=[];for(let U=0;U<e;U++)D[U]=0,C[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:L,object:E,attributes:{},index:null}}function d(E,D,C,L){const U=s.attributes,V=D.attributes;let z=0;const I=C.getAttributes();for(const k in I)if(I[k].location>=0){const P=U[k];let Y=V[k];if(Y===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function p(E,D,C,L){const U={},V=D.attributes;let z=0;const I=C.getAttributes();for(const k in I)if(I[k].location>=0){let P=V[k];P===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(P=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(P=E.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),U[k]=Y,z++}s.attributes=U,s.attributesNum=z,s.index=L}function m(){const E=s.newAttributes;for(let D=0,C=E.length;D<C;D++)E[D]=0}function g(E){_(E,0)}function _(E,D){const C=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;C[E]=1,L[E]===0&&(i.enableVertexAttribArray(E),L[E]=1),U[E]!==D&&(i.vertexAttribDivisor(E,D),U[E]=D)}function y(){const E=s.newAttributes,D=s.enabledAttributes;for(let C=0,L=D.length;C<L;C++)D[C]!==E[C]&&(i.disableVertexAttribArray(C),D[C]=0)}function M(E,D,C,L,U,V,z){z===!0?i.vertexAttribIPointer(E,D,C,U,V):i.vertexAttribPointer(E,D,C,L,U,V)}function x(E,D,C,L){m();const U=L.attributes,V=C.getAttributes(),z=D.defaultAttributeValues;for(const I in V){const k=V[I];if(k.location>=0){let X=U[I];if(X===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),X!==void 0){const P=X.normalized,Y=X.itemSize,pt=t.get(X);if(pt===void 0)continue;const yt=pt.buffer,nt=pt.type,et=pt.bytesPerElement,G=nt===i.INT||nt===i.UNSIGNED_INT||X.gpuType===od;if(X.isInterleavedBufferAttribute){const j=X.data,rt=j.stride,gt=X.offset;if(j.isInstancedInterleavedBuffer){for(let mt=0;mt<k.locationSize;mt++)_(k.location+mt,j.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let mt=0;mt<k.locationSize;mt++)g(k.location+mt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let mt=0;mt<k.locationSize;mt++)M(k.location+mt,Y/k.locationSize,nt,P,rt*et,(gt+Y/k.locationSize*mt)*et,G)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<k.locationSize;j++)_(k.location+j,X.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<k.locationSize;j++)g(k.location+j);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let j=0;j<k.locationSize;j++)M(k.location+j,Y/k.locationSize,nt,P,Y*et,Y/k.locationSize*j*et,G)}}else if(z!==void 0){const P=z[I];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(k.location,P);break;case 3:i.vertexAttrib3fv(k.location,P);break;case 4:i.vertexAttrib4fv(k.location,P);break;default:i.vertexAttrib1fv(k.location,P)}}}}y()}function S(){R();for(const E in n){const D=n[E];for(const C in D){const L=D[C];for(const U in L)u(L[U].object),delete L[U];delete D[C]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const C in D){const L=D[C];for(const U in L)u(L[U].object),delete L[U];delete D[C]}delete n[E.id]}function w(E){for(const D in n){const C=n[D];if(C[E.id]===void 0)continue;const L=C[E.id];for(const U in L)u(L[U].object),delete L[U];delete C[E.id]}}function R(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:m,enableAttribute:g,disableUnusedAttributes:y}}function nT(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m]*f[m];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iT(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Ri&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==xi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hi&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:b}}function rT(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ls,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,_=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const y=s?0:n,M=y*4;let x=_.clippingState||null;l.value=x,x=u(p,f,M,d);for(let S=0;S!==M;++S)x[S]=e[S];_.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const _=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<_)&&(g=new Float32Array(_));for(let M=0,x=d;M!==m;++M,x+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function sT(i){let t=new WeakMap;function e(o,a){return a===Ch?o.mapping=As:a===Rh&&(o.mapping=ya),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ch||a===Rh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new y0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ir=4,gm=[.125,.215,.35,.446,.526,.582],hs=20,aT=256,Ba=new b0,_m=new _e;let Au=null,Cu=0,Ru=0,Pu=!1;const oT=new K;class xm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=oT}=s;Au=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Au,Cu,Ru),this._renderer.xr.enabled=Pu,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===ya?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Au=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:gr,format:Ri,colorSpace:Sa,depthBuffer:!1},r=vm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(s)),this._blurMaterial=uT(s,t,e),this._ggxMaterial=cT(s,t,e)}return r}_compileMaterial(t){const e=new vr(new Di,t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,r,s){const l=new _i(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_m),h.toneMapping=Xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vr(new Lo,new p0({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,g=m.material;let _=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,_=!0):(g.color.copy(_m),_=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const S=this._cubeSize;Ys(r,x*S,M>2?S:0,S,S),h.setRenderTarget(r),_&&h.render(m,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===As||t.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ym());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:p}=this,m=this._sizeLods[n],g=3*m*(n>p-Ir?n-p+Ir:0),_=4*(this._cubeSize-m);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Ys(s,g,_,3*m,2*m),r.setRenderTarget(s),r.render(a,Ba),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Ys(t,g,_,3*m,2*m),r.setRenderTarget(t),r.render(a,Ba)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&me("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hs-1),m=s/p,g=isFinite(s)?1+Math.floor(u*m):hs;g>hs&&Zt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const _=[];let y=0;for(let w=0;w<hs;++w){const R=w/m,v=Math.exp(-R*R/2);_.push(v),w===0?y+=v:w<g&&(y+=2*v)}for(let w=0;w<_.length;w++)_[w]=_[w]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=p,f.mipInt.value=M-n;const x=this._sizeLods[r],S=3*x*(r>M-Ir?r-M+Ir:0),b=4*(this._cubeSize-x);Ys(e,S,b,3*x,2*x),l.setRenderTarget(e),l.render(h,Ba)}}function lT(i){const t=[],e=[],n=[];let r=i;const s=i-Ir+1+gm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ir?l=gm[o-i+Ir-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,m=3,g=2,_=1,y=new Float32Array(m*p*d),M=new Float32Array(g*p*d),x=new Float32Array(_*p*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,R=b>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(v,m*p*b),M.set(f,g*p*b);const E=[b,b,b,b,b,b];x.set(E,_*p*b)}const S=new Di;S.setAttribute("position",new Si(y,m)),S.setAttribute("uv",new Si(M,g)),S.setAttribute("faceIndex",new Si(x,_)),n.push(new vr(S,null)),r>Ir&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function vm(i,t,e){const n=new $i(i,t,e);return n.texture.mapping=Sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function cT(i,t,e){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function uT(i,t,e){const n=new Float32Array(hs),r=new K(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function ym(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Mm(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function hT(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ch||l===Rh,u=l===As||l===ya;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xm(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new xm(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function fT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&To("WebGLRenderer: "+n+" extension not supported."),r}}}function dT(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,p=h.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let M=0,x=y.length;M<x;M+=3){const S=y[M+0],b=y[M+1],w=y[M+2];f.push(S,b,b,w,w,S)}}else if(p!==void 0){const y=p.array;m=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const S=M+0,b=M+1,w=M+2;f.push(S,b,b,w,w,S)}}else return;const g=new(c0(f)?g0:m0)(f,1);g.version=m;const _=s.get(h);_&&t.remove(_),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pT(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let _=0;_<p;_++)g+=d[_];e.update(g,n,1)}function h(f,d,p,m){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f.length;_++)c(f[_]/o,d[_],m[_]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,m,0,p);let _=0;for(let y=0;y<p;y++)_+=d[y]*m[y];e.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:me("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function gT(i,t,e){const n=new WeakMap,r=new ze;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),m===!0&&(M=3);let x=a.attributes.position.count*M,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*S*4*h),w=new u0(b,x,S,h);w.type=Hi,w.needsUpdate=!0;const R=M*4;for(let E=0;E<h;E++){const D=g[E],C=_[E],L=y[E],U=x*S*4*E;for(let V=0;V<D.count;V++){const z=V*R;d===!0&&(r.fromBufferAttribute(D,V),b[U+z+0]=r.x,b[U+z+1]=r.y,b[U+z+2]=r.z,b[U+z+3]=0),p===!0&&(r.fromBufferAttribute(C,V),b[U+z+4]=r.x,b[U+z+5]=r.y,b[U+z+6]=r.z,b[U+z+7]=0),m===!0&&(r.fromBufferAttribute(L,V),b[U+z+8]=r.x,b[U+z+9]=r.y,b[U+z+10]=r.z,b[U+z+11]=L.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new be(x,S)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function _T(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const xT={[q_]:"LINEAR_TONE_MAPPING",[j_]:"REINHARD_TONE_MAPPING",[K_]:"CINEON_TONE_MAPPING",[Z_]:"ACES_FILMIC_TONE_MAPPING",[Q_]:"AGX_TONE_MAPPING",[t0]:"NEUTRAL_TONE_MAPPING",[J_]:"CUSTOM_TONE_MAPPING"};function vT(i,t,e,n,r){const s=new $i(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new $i(t,e,{type:gr,depthBuffer:!1,stencilBuffer:!1}),a=new Di;a.setAttribute("position",new dr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new dr([0,2,0,0,2,0],2));const l=new pb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new vr(a,l),u=new b0(-1,1,1,-1,0,1);let h=null,f=null,d=!1,p,m=null,g=[],_=!1;this.setSize=function(y,M){s.setSize(y,M),o.setSize(y,M);for(let x=0;x<g.length;x++){const S=g[x];S.setSize&&S.setSize(y,M)}},this.setEffects=function(y){g=y,_=g.length>0&&g[0].isRenderPass===!0;const M=s.width,x=s.height;for(let S=0;S<g.length;S++){const b=g[S];b.setSize&&b.setSize(M,x)}},this.begin=function(y,M){if(d||y.toneMapping===Xi&&g.length===0)return!1;if(m=M,M!==null){const x=M.width,S=M.height;(s.width!==x||s.height!==S)&&this.setSize(x,S)}return _===!1&&y.setRenderTarget(s),p=y.toneMapping,y.toneMapping=Xi,!0},this.hasRenderPass=function(){return _},this.end=function(y,M){y.toneMapping=p,d=!0;let x=s,S=o;for(let b=0;b<g.length;b++){const w=g[b];if(w.enabled!==!1&&(w.render(y,S,x,M),w.needsSwap!==!1)){const R=x;x=S,S=R}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},he.getTransfer(h)===ye&&(l.defines.SRGB_TRANSFER="");const b=xT[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(m),y.render(c,u),m=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const T0=new Rn,df=new wo(1,1),w0=new u0,A0=new HS,C0=new v0,Sm=[],bm=[],Em=new Float32Array(16),Tm=new Float32Array(9),wm=new Float32Array(4);function Ta(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wc(i,t){let e=bm[t];e===void 0&&(e=new Int32Array(t),bm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function MT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function ST(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function bT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function ET(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;wm.set(n),i.uniformMatrix2fv(this.addr,!1,wm),Je(e,n)}}function TT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Tm.set(n),i.uniformMatrix3fv(this.addr,!1,Tm),Je(e,n)}}function wT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Em.set(n),i.uniformMatrix4fv(this.addr,!1,Em),Je(e,n)}}function AT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function CT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function RT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function PT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function DT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function LT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function NT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function IT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function UT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=e.isReversedDepthBuffer()?pd:dd,s=df):s=T0,e.setTexture2D(t||s,r)}function FT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||A0,r)}function OT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||C0,r)}function kT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||w0,r)}function BT(i){switch(i){case 5126:return yT;case 35664:return MT;case 35665:return ST;case 35666:return bT;case 35674:return ET;case 35675:return TT;case 35676:return wT;case 5124:case 35670:return AT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return DT;case 36294:return LT;case 36295:return NT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return kT}}function zT(i,t){i.uniform1fv(this.addr,t)}function VT(i,t){const e=Ta(t,this.size,2);i.uniform2fv(this.addr,e)}function HT(i,t){const e=Ta(t,this.size,3);i.uniform3fv(this.addr,e)}function GT(i,t){const e=Ta(t,this.size,4);i.uniform4fv(this.addr,e)}function WT(i,t){const e=Ta(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function XT(i,t){const e=Ta(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $T(i,t){const e=Ta(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function YT(i,t){i.uniform1iv(this.addr,t)}function qT(i,t){i.uniform2iv(this.addr,t)}function jT(i,t){i.uniform3iv(this.addr,t)}function KT(i,t){i.uniform4iv(this.addr,t)}function ZT(i,t){i.uniform1uiv(this.addr,t)}function JT(i,t){i.uniform2uiv(this.addr,t)}function QT(i,t){i.uniform3uiv(this.addr,t)}function tw(i,t){i.uniform4uiv(this.addr,t)}function ew(i,t,e){const n=this.cache,r=t.length,s=wc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=df:o=T0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function nw(i,t,e){const n=this.cache,r=t.length,s=wc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||A0,s[o])}function iw(i,t,e){const n=this.cache,r=t.length,s=wc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||C0,s[o])}function rw(i,t,e){const n=this.cache,r=t.length,s=wc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||w0,s[o])}function sw(i){switch(i){case 5126:return zT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return $T;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return jT;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return JT;case 36295:return QT;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}class aw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=BT(e.type)}}class ow{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sw(e.type)}}class lw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Am(i,t){i.seq.push(t),i.map[t.id]=t}function cw(i,t,e){const n=i.name,r=n.length;for(Du.lastIndex=0;;){const s=Du.exec(n),o=Du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Am(e,c===void 0?new aw(a,i,t):new ow(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new lw(a),Am(e,h)),e=h}}}class Vl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);cw(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Cm(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const uw=37297;let hw=0;function fw(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Rm=new Qt;function dw(i){he._getMatrix(Rm,he.workingColorSpace,i);const t=`mat3( ${Rm.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case oc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pm(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+fw(i.getShaderSource(t),a)}else return s}function pw(i,t){const e=dw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const mw={[q_]:"Linear",[j_]:"Reinhard",[K_]:"Cineon",[Z_]:"ACESFilmic",[Q_]:"AgX",[t0]:"Neutral",[J_]:"Custom"};function gw(i,t){const e=mw[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _l=new K;function _w(){he.getLuminanceCoefficients(_l);const i=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function vw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ka(i){return i!==""}function Dm(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(i){return i.replace(Mw,bw)}const Sw=new Map;function bw(i,t){let e=ee[t];if(e===void 0){const n=Sw.get(t);if(n!==void 0)e=ee[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pf(e)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(i){return i.replace(Ew,Tw)}function Tw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Im(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const ww={[Fl]:"SHADOWMAP_TYPE_PCF",[ja]:"SHADOWMAP_TYPE_VSM"};function Aw(i){return ww[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Cw={[As]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function Rw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Cw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Pw={[ya]:"ENVMAP_MODE_REFRACTION"};function Dw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Pw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lw={[Y_]:"ENVMAP_BLENDING_MULTIPLY",[SS]:"ENVMAP_BLENDING_MIX",[bS]:"ENVMAP_BLENDING_ADD"};function Nw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lw[i.combine]||"ENVMAP_BLENDING_NONE"}function Iw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Uw(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Aw(e),c=Rw(e),u=Dw(e),h=Nw(e),f=Iw(e),d=xw(e),p=vw(s),m=r.createProgram();let g,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),_.length>0&&(_+=`
`)):(g=[Im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),_=[Im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Xi?gw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,pw("linearToOutputTexel",e.outputColorSpace),_w(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ka).join(`
`)),o=pf(o),o=Dm(o,e),o=Lm(o,e),a=pf(a),a=Dm(a,e),a=Lm(a,e),o=Nm(o),a=Nm(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",e.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=y+g+o,x=y+_+a,S=Cm(r,r.VERTEX_SHADER,M),b=Cm(r,r.FRAGMENT_SHADER,x);r.attachShader(m,S),r.attachShader(m,b),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function w(D){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(m)||"",L=r.getShaderInfoLog(S)||"",U=r.getShaderInfoLog(b)||"",V=C.trim(),z=L.trim(),I=U.trim();let k=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,S,b);else{const P=Pm(r,S,"vertex"),Y=Pm(r,b,"fragment");me("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+P+`
`+Y)}else V!==""?Zt("WebGLProgram: Program Info Log:",V):(z===""||I==="")&&(X=!1);X&&(D.diagnostics={runnable:k,programLog:V,vertexShader:{log:z,prefix:g},fragmentShader:{log:I,prefix:_}})}r.deleteShader(S),r.deleteShader(b),R=new Vl(r,m),v=yw(r,m)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(m,uw)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hw++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=b,this}let Fw=0;class Ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kw(t),e.set(t,n)),n}}class kw{constructor(t){this.id=Fw++,this.code=t,this.usedTimes=0}}function Bw(i,t,e,n,r,s,o){const a=new f0,l=new Ow,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let d=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,E,D,C,L){const U=C.fog,V=L.geometry,z=v.isMeshStandardMaterial?C.environment:null,I=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),k=I&&I.mapping===Sc?I.image.height:null,X=p[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&Zt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const P=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=P!==void 0?P.length:0;let pt=0;V.morphAttributes.position!==void 0&&(pt=1),V.morphAttributes.normal!==void 0&&(pt=2),V.morphAttributes.color!==void 0&&(pt=3);let yt,nt,et,G;if(X){const Tt=Oi[X];yt=Tt.vertexShader,nt=Tt.fragmentShader}else yt=v.vertexShader,nt=v.fragmentShader,l.update(v),et=l.getVertexShaderID(v),G=l.getFragmentShaderID(v);const j=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),gt=L.isInstancedMesh===!0,mt=L.isBatchedMesh===!0,Ut=!!v.map,$t=!!v.matcap,Mt=!!I,Ot=!!v.aoMap,Vt=!!v.lightMap,kt=!!v.bumpMap,$=!!v.normalMap,O=!!v.displacementMap,at=!!v.emissiveMap,Rt=!!v.metalnessMap,Dt=!!v.roughnessMap,St=v.anisotropy>0,N=v.clearcoat>0,T=v.dispersion>0,B=v.iridescence>0,Q=v.sheen>0,tt=v.transmission>0,J=St&&!!v.anisotropyMap,Ct=N&&!!v.clearcoatMap,ct=N&&!!v.clearcoatNormalMap,Nt=N&&!!v.clearcoatRoughnessMap,Lt=B&&!!v.iridescenceMap,lt=B&&!!v.iridescenceThicknessMap,ut=Q&&!!v.sheenColorMap,Pt=Q&&!!v.sheenRoughnessMap,It=!!v.specularMap,ht=!!v.specularColorMap,qt=!!v.specularIntensityMap,F=tt&&!!v.transmissionMap,_t=tt&&!!v.thicknessMap,ot=!!v.gradientMap,xt=!!v.alphaMap,st=v.alphaTest>0,it=!!v.alphaHash,dt=!!v.extensions;let Gt=Xi;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const fe={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:yt,fragmentShader:nt,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:mt,batchingColor:mt&&L._colorsTexture!==null,instancing:gt,instancingColor:gt&&L.instanceColor!==null,instancingMorph:gt&&L.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Sa,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:$t,envMap:Mt,envMapMode:Mt&&I.mapping,envMapCubeUVHeight:k,aoMap:Ot,lightMap:Vt,bumpMap:kt,normalMap:$,displacementMap:O,emissiveMap:at,normalMapObjectSpace:$&&v.normalMapType===AS,normalMapTangentSpace:$&&v.normalMapType===wS,metalnessMap:Rt,roughnessMap:Dt,anisotropy:St,anisotropyMap:J,clearcoat:N,clearcoatMap:Ct,clearcoatNormalMap:ct,clearcoatRoughnessMap:Nt,dispersion:T,iridescence:B,iridescenceMap:Lt,iridescenceThicknessMap:lt,sheen:Q,sheenColorMap:ut,sheenRoughnessMap:Pt,specularMap:It,specularColorMap:ht,specularIntensityMap:qt,transmission:tt,transmissionMap:F,thicknessMap:_t,gradientMap:ot,opaque:v.transparent===!1&&v.blending===oa&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:st,alphaHash:it,combine:v.combine,mapUv:Ut&&m(v.map.channel),aoMapUv:Ot&&m(v.aoMap.channel),lightMapUv:Vt&&m(v.lightMap.channel),bumpMapUv:kt&&m(v.bumpMap.channel),normalMapUv:$&&m(v.normalMap.channel),displacementMapUv:O&&m(v.displacementMap.channel),emissiveMapUv:at&&m(v.emissiveMap.channel),metalnessMapUv:Rt&&m(v.metalnessMap.channel),roughnessMapUv:Dt&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:Ct&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&m(v.sheenRoughnessMap.channel),specularMapUv:It&&m(v.specularMap.channel),specularColorMapUv:ht&&m(v.specularColorMap.channel),specularIntensityMapUv:qt&&m(v.specularIntensityMap.channel),transmissionMapUv:F&&m(v.transmissionMap.channel),thicknessMapUv:_t&&m(v.thicknessMap.channel),alphaMapUv:xt&&m(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($||St),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ut||xt),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===ye,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ar,flipSided:v.side===Gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function _(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(E,v),M(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const E=p[v.type];let D;if(E){const C=Oi[E];D=eb.clone(C.uniforms)}else D=v.uniforms;return D}function S(v,E){let D=h.get(E);return D!==void 0?++D.usedTimes:(D=new Uw(i,E,v,s),u.push(D),h.set(E,D)),D}function b(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){l.remove(v)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:R}}function zw(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Vw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fm(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,p,m,g){let _=i[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:m,group:g},i[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=p,_.renderOrder=h.renderOrder,_.z=m,_.group=g),t++,_}function a(h,f,d,p,m,g){const _=o(h,f,d,p,m,g);d.transmission>0?n.push(_):d.transparent===!0?r.push(_):e.push(_)}function l(h,f,d,p,m,g){const _=o(h,f,d,p,m,g);d.transmission>0?n.unshift(_):d.transparent===!0?r.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||Vw),n.length>1&&n.sort(f||Um),r.length>1&&r.sort(f||Um)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Hw(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Fm,i.set(n,[o])):r>=s.length?(o=new Fm,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new _e};break;case"SpotLight":e={position:new K,direction:new K,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function Ww(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xw=0;function $w(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yw(i){const t=new Gw,e=Ww(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const r=new K,s=new He,o=new He;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,p=0,m=0,g=0,_=0,y=0,M=0,x=0,S=0,b=0,w=0;c.sort($w);for(let v=0,E=c.length;v<E;v++){const D=c[v],C=D.color,L=D.intensity,U=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ma?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=C.r*L,h+=C.g*L,f+=C.b*L;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],L);w++}else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const I=D.shadow,k=e.get(D);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=D.shadow.matrix,y++}n.directional[d]=z,d++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(C).multiplyScalar(L),z.distance=U,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[m]=z;const I=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,I.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[m]=I.matrix,D.castShadow){const k=e.get(D);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=V,x++}m++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(C).multiplyScalar(L),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=z,g++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const I=D.shadow,k=e.get(D);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,k.shadowCameraNear=I.camera.near,k.shadowCameraFar=I.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=D.shadow.matrix,M++}n.point[p]=z,p++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(L),z.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[_]=z,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==g||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==S||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+S-b,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,R.directionalLength=d,R.pointLength=p,R.spotLength=m,R.rectAreaLength=g,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=S,R.numLightProbes=w,n.version=Xw++)}function l(c,u){let h=0,f=0,d=0,p=0,m=0;const g=u.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const M=c[_];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),h++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const x=n.hemi[m];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Om(i){const t=new Yw(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qw(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Om(i),t.set(r,[a])):s>=o.length?(a=new Om(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
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
}`,Zw=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Jw=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],km=new He,za=new K,Lu=new K;function Qw(i,t,e){let n=new M0;const r=new be,s=new be,o=new ze,a=new mb,l=new gb,c={},u=e.maxTextureSize,h={[Gr]:Gn,[Gn]:Gr,[ar]:ar},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:jw,fragmentShader:Kw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Di;p.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new vr(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let _=this.type;this.render=function(b,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;b.type===iS&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),b.type=Fl);const v=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),C=i.state;C.setBlending(hr),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=_!==this.type;L&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(V=>V.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,V=b.length;U<V;U++){const z=b[U],I=z.shadow;if(I===void 0){Zt("WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const k=I.getFrameExtents();if(r.multiply(k),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null||L===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ja){if(z.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new $i(r.x,r.y,{format:Ma,type:gr,minFilter:xn,magFilter:xn,generateMipmaps:!1}),I.map.texture.name=z.name+".shadowMap",I.map.depthTexture=new wo(r.x,r.y,Hi),I.map.depthTexture.name=z.name+".shadowMapDepth",I.map.depthTexture.format=_r,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on}else{z.isPointLight?(I.map=new y0(r.x),I.map.depthTexture=new db(r.x,qi)):(I.map=new $i(r.x,r.y),I.map.depthTexture=new wo(r.x,r.y,qi)),I.map.depthTexture.name=z.name+".shadowMap",I.map.depthTexture.format=_r;const P=i.state.buffers.depth.getReversed();this.type===Fl?(I.map.depthTexture.compareFunction=P?pd:dd,I.map.depthTexture.minFilter=xn,I.map.depthTexture.magFilter=xn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on)}I.camera.updateProjectionMatrix()}const X=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<X;P++){if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,P),i.clear();else{P===0&&(i.setRenderTarget(I.map),i.clear());const Y=I.getViewport(P);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),C.viewport(o)}if(z.isPointLight){const Y=I.camera,pt=I.matrix,yt=z.distance||Y.far;yt!==Y.far&&(Y.far=yt,Y.updateProjectionMatrix()),za.setFromMatrixPosition(z.matrixWorld),Y.position.copy(za),Lu.copy(Y.position),Lu.add(Zw[P]),Y.up.copy(Jw[P]),Y.lookAt(Lu),Y.updateMatrixWorld(),pt.makeTranslation(-za.x,-za.y,-za.z),km.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(km,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(z);n=I.getFrustum(),x(w,R,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===ja&&y(I,R),I.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(v,E,D)};function y(b,w){const R=t.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $i(r.x,r.y,{format:Ma,type:gr})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,m,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,R,d,m,null)}function M(b,w,R,v){let E=null;const D=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)E=D;else if(E=R.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const C=E.uuid,L=w.uuid;let U=c[C];U===void 0&&(U={},c[C]=U);let V=U[L];V===void 0&&(V=E.clone(),U[L]=V,w.addEventListener("dispose",S)),E=V}if(E.visible=w.visible,E.wireframe=w.wireframe,v===ja?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=i.properties.get(E);C.light=R}return E}function x(b,w,R,v,E){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===ja)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const L=t.update(b),U=b.material;if(Array.isArray(U)){const V=L.groups;for(let z=0,I=V.length;z<I;z++){const k=V[z],X=U[k.materialIndex];if(X&&X.visible){const P=M(b,X,v,E);b.onBeforeShadow(i,b,w,R,L,P,k),i.renderBufferDirect(R,null,L,P,b,k),b.onAfterShadow(i,b,w,R,L,P,k)}}}else if(U.visible){const V=M(b,U,v,E);b.onBeforeShadow(i,b,w,R,L,V,null),i.renderBufferDirect(R,null,L,V,b,null),b.onAfterShadow(i,b,w,R,L,V,null)}}const C=b.children;for(let L=0,U=C.length;L<U;L++)x(C[L],w,R,v,E)}function S(b){b.target.removeEventListener("dispose",S);for(const R in c){const v=c[R],E=b.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const tA={[Mh]:Sh,[bh]:wh,[Eh]:Ah,[va]:Th,[Sh]:Mh,[wh]:bh,[Ah]:Eh,[Th]:va};function eA(i,t){function e(){let F=!1;const _t=new ze;let ot=null;const xt=new ze(0,0,0,0);return{setMask:function(st){ot!==st&&!F&&(i.colorMask(st,st,st,st),ot=st)},setLocked:function(st){F=st},setClear:function(st,it,dt,Gt,fe){fe===!0&&(st*=Gt,it*=Gt,dt*=Gt),_t.set(st,it,dt,Gt),xt.equals(_t)===!1&&(i.clearColor(st,it,dt,Gt),xt.copy(_t))},reset:function(){F=!1,ot=null,xt.set(-1,0,0,0)}}}function n(){let F=!1,_t=!1,ot=null,xt=null,st=null;return{setReversed:function(it){if(_t!==it){const dt=t.get("EXT_clip_control");it?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),_t=it;const Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return _t},setTest:function(it){it?j(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(it){ot!==it&&!F&&(i.depthMask(it),ot=it)},setFunc:function(it){if(_t&&(it=tA[it]),xt!==it){switch(it){case Mh:i.depthFunc(i.NEVER);break;case Sh:i.depthFunc(i.ALWAYS);break;case bh:i.depthFunc(i.LESS);break;case va:i.depthFunc(i.LEQUAL);break;case Eh:i.depthFunc(i.EQUAL);break;case Th:i.depthFunc(i.GEQUAL);break;case wh:i.depthFunc(i.GREATER);break;case Ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=it}},setLocked:function(it){F=it},setClear:function(it){st!==it&&(_t&&(it=1-it),i.clearDepth(it),st=it)},reset:function(){F=!1,ot=null,xt=null,st=null,_t=!1}}}function r(){let F=!1,_t=null,ot=null,xt=null,st=null,it=null,dt=null,Gt=null,fe=null;return{setTest:function(Tt){F||(Tt?j(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Tt){_t!==Tt&&!F&&(i.stencilMask(Tt),_t=Tt)},setFunc:function(Tt,Bt,Jt){(ot!==Tt||xt!==Bt||st!==Jt)&&(i.stencilFunc(Tt,Bt,Jt),ot=Tt,xt=Bt,st=Jt)},setOp:function(Tt,Bt,Jt){(it!==Tt||dt!==Bt||Gt!==Jt)&&(i.stencilOp(Tt,Bt,Jt),it=Tt,dt=Bt,Gt=Jt)},setLocked:function(Tt){F=Tt},setClear:function(Tt){fe!==Tt&&(i.clearStencil(Tt),fe=Tt)},reset:function(){F=!1,_t=null,ot=null,xt=null,st=null,it=null,dt=null,Gt=null,fe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,m=!1,g=null,_=null,y=null,M=null,x=null,S=null,b=null,w=new _e(0,0,0),R=0,v=!1,E=null,D=null,C=null,L=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,I=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=I>=1):k.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=I>=2);let X=null,P={};const Y=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),yt=new ze().fromArray(Y),nt=new ze().fromArray(pt);function et(F,_t,ot,xt){const st=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<ot;dt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(_t+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return it}const G={};G[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(va),kt(!1),$(Hp),j(i.CULL_FACE),Ot(hr);function j(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function rt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function gt(F,_t){return h[F]!==_t?(i.bindFramebuffer(F,_t),h[F]=_t,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function mt(F,_t){let ot=d,xt=!1;if(F){ot=f.get(_t),ot===void 0&&(ot=[],f.set(_t,ot));const st=F.textures;if(ot.length!==st.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let it=0,dt=st.length;it<dt;it++)ot[it]=i.COLOR_ATTACHMENT0+it;ot.length=st.length,xt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,xt=!0);xt&&i.drawBuffers(ot)}function Ut(F){return p!==F?(i.useProgram(F),p=F,!0):!1}const $t={[us]:i.FUNC_ADD,[sS]:i.FUNC_SUBTRACT,[aS]:i.FUNC_REVERSE_SUBTRACT};$t[oS]=i.MIN,$t[lS]=i.MAX;const Mt={[cS]:i.ZERO,[uS]:i.ONE,[hS]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[_S]:i.SRC_ALPHA_SATURATE,[mS]:i.DST_COLOR,[dS]:i.DST_ALPHA,[fS]:i.ONE_MINUS_SRC_COLOR,[yh]:i.ONE_MINUS_SRC_ALPHA,[gS]:i.ONE_MINUS_DST_COLOR,[pS]:i.ONE_MINUS_DST_ALPHA,[xS]:i.CONSTANT_COLOR,[vS]:i.ONE_MINUS_CONSTANT_COLOR,[yS]:i.CONSTANT_ALPHA,[MS]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(F,_t,ot,xt,st,it,dt,Gt,fe,Tt){if(F===hr){m===!0&&(rt(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),F!==rS){if(F!==g||Tt!==v){if((_!==us||x!==us)&&(i.blendEquation(i.FUNC_ADD),_=us,x=us),Tt)switch(F){case oa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gp:i.blendFunc(i.ONE,i.ONE);break;case Wp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xp:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",F);break}else switch(F){case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gp:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wp:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xp:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",F);break}y=null,M=null,S=null,b=null,w.set(0,0,0),R=0,g=F,v=Tt}return}st=st||_t,it=it||ot,dt=dt||xt,(_t!==_||st!==x)&&(i.blendEquationSeparate($t[_t],$t[st]),_=_t,x=st),(ot!==y||xt!==M||it!==S||dt!==b)&&(i.blendFuncSeparate(Mt[ot],Mt[xt],Mt[it],Mt[dt]),y=ot,M=xt,S=it,b=dt),(Gt.equals(w)===!1||fe!==R)&&(i.blendColor(Gt.r,Gt.g,Gt.b,fe),w.copy(Gt),R=fe),g=F,v=!1}function Vt(F,_t){F.side===ar?rt(i.CULL_FACE):j(i.CULL_FACE);let ot=F.side===Gn;_t&&(ot=!ot),kt(ot),F.blending===oa&&F.transparent===!1?Ot(hr):Ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const xt=F.stencilWrite;a.setTest(xt),xt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function $(F){F!==eS?(j(i.CULL_FACE),F!==D&&(F===Hp?i.cullFace(i.BACK):F===nS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),D=F}function O(F){F!==C&&(z&&i.lineWidth(F),C=F)}function at(F,_t,ot){F?(j(i.POLYGON_OFFSET_FILL),(L!==_t||U!==ot)&&(i.polygonOffset(_t,ot),L=_t,U=ot)):rt(i.POLYGON_OFFSET_FILL)}function Rt(F){F?j(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Dt(F){F===void 0&&(F=i.TEXTURE0+V-1),X!==F&&(i.activeTexture(F),X=F)}function St(F,_t,ot){ot===void 0&&(X===null?ot=i.TEXTURE0+V-1:ot=X);let xt=P[ot];xt===void 0&&(xt={type:void 0,texture:void 0},P[ot]=xt),(xt.type!==F||xt.texture!==_t)&&(X!==ot&&(i.activeTexture(ot),X=ot),i.bindTexture(F,_t||G[F]),xt.type=F,xt.texture=_t)}function N(){const F=P[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(F){me("WebGLState:",F)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(F){me("WebGLState:",F)}}function Q(){try{i.texSubImage2D(...arguments)}catch(F){me("WebGLState:",F)}}function tt(){try{i.texSubImage3D(...arguments)}catch(F){me("WebGLState:",F)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(F){me("WebGLState:",F)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(F){me("WebGLState:",F)}}function ct(){try{i.texStorage2D(...arguments)}catch(F){me("WebGLState:",F)}}function Nt(){try{i.texStorage3D(...arguments)}catch(F){me("WebGLState:",F)}}function Lt(){try{i.texImage2D(...arguments)}catch(F){me("WebGLState:",F)}}function lt(){try{i.texImage3D(...arguments)}catch(F){me("WebGLState:",F)}}function ut(F){yt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),yt.copy(F))}function Pt(F){nt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function It(F,_t){let ot=c.get(_t);ot===void 0&&(ot=new WeakMap,c.set(_t,ot));let xt=ot.get(F);xt===void 0&&(xt=i.getUniformBlockIndex(_t,F.name),ot.set(F,xt))}function ht(F,_t){const xt=c.get(_t).get(F);l.get(_t)!==xt&&(i.uniformBlockBinding(_t,xt,F.__bindingPointIndex),l.set(_t,xt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,P={},h={},f=new WeakMap,d=[],p=null,m=!1,g=null,_=null,y=null,M=null,x=null,S=null,b=null,w=new _e(0,0,0),R=0,v=!1,E=null,D=null,C=null,L=null,U=null,yt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:rt,bindFramebuffer:gt,drawBuffers:mt,useProgram:Ut,setBlending:Ot,setMaterial:Vt,setFlipSided:kt,setCullFace:$,setLineWidth:O,setPolygonOffset:at,setScissorTest:Rt,activeTexture:Dt,bindTexture:St,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:B,texImage2D:Lt,texImage3D:lt,updateUBOMapping:It,uniformBlockBinding:ht,texStorage2D:ct,texStorage3D:Nt,texSubImage2D:Q,texSubImage3D:tt,compressedTexSubImage2D:J,compressedTexSubImage3D:Ct,scissor:ut,viewport:Pt,reset:qt}}function nA(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(N,T){return d?new OffscreenCanvas(N,T):cc("canvas")}function m(N,T,B){let Q=1;const tt=St(N);if((tt.width>B||tt.height>B)&&(Q=B/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const J=Math.floor(Q*tt.width),Ct=Math.floor(Q*tt.height);h===void 0&&(h=p(J,Ct));const ct=T?p(J,Ct):h;return ct.width=J,ct.height=Ct,ct.getContext("2d").drawImage(N,0,0,J,Ct),Zt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Ct+")."),ct}else return"data"in N&&Zt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),N;return N}function g(N){return N.generateMipmaps}function _(N){i.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(N,T,B,Q,tt=!1){if(N!==null){if(i[N]!==void 0)return i[N];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let J=T;if(T===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),T===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),T===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),T===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),T===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),T===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),T===i.RGBA){const Ct=tt?oc:he.getTransfer(Q);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Ct===ye?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(N,T){let B;return N?T===null||T===qi||T===Eo?B=i.DEPTH24_STENCIL8:T===Hi?B=i.DEPTH32F_STENCIL8:T===bo&&(B=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===Eo?B=i.DEPTH_COMPONENT24:T===Hi?B=i.DEPTH_COMPONENT32F:T===bo&&(B=i.DEPTH_COMPONENT16),B}function S(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==on&&N.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function b(N){const T=N.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&u.delete(T)}function w(N){const T=N.target;T.removeEventListener("dispose",w),E(T)}function R(N){const T=n.get(N);if(T.__webglInit===void 0)return;const B=N.source,Q=f.get(B);if(Q){const tt=Q[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&v(N),Object.keys(Q).length===0&&f.delete(B)}n.remove(N)}function v(N){const T=n.get(N);i.deleteTexture(T.__webglTexture);const B=N.source,Q=f.get(B);delete Q[T.__cacheKey],o.memory.textures--}function E(N){const T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let tt=0;tt<T.__webglFramebuffer[Q].length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[Q][tt]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=N.textures;for(let Q=0,tt=B.length;Q<tt;Q++){const J=n.get(B[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[Q])}n.remove(N)}let D=0;function C(){D=0}function L(){const N=D;return N>=r.maxTextures&&Zt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),D+=1,N}function U(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function V(N,T){const B=n.get(N);if(N.isVideoTexture&&Rt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&B.__version!==N.version){const Q=N.image;if(Q===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,N,T);return}}else N.isExternalTexture&&(B.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function z(N,T){const B=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&B.__version!==N.version){G(B,N,T);return}else N.isExternalTexture&&(B.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function I(N,T){const B=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&B.__version!==N.version){G(B,N,T);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function k(N,T){const B=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&B.__version!==N.version){j(B,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}const X={[Ph]:i.REPEAT,[cr]:i.CLAMP_TO_EDGE,[Dh]:i.MIRRORED_REPEAT},P={[on]:i.NEAREST,[ES]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[nu]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},Y={[CS]:i.NEVER,[NS]:i.ALWAYS,[RS]:i.LESS,[dd]:i.LEQUAL,[PS]:i.EQUAL,[pd]:i.GEQUAL,[DS]:i.GREATER,[LS]:i.NOTEQUAL};function pt(N,T){if(T.type===Hi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===nu||T.magFilter===jo||T.magFilter===ps||T.minFilter===xn||T.minFilter===nu||T.minFilter===jo||T.minFilter===ps)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,X[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,X[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,X[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,P[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Y[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===on||T.minFilter!==jo&&T.minFilter!==ps||T.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function yt(N,T){let B=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",b));const Q=T.source;let tt=f.get(Q);tt===void 0&&(tt={},f.set(Q,tt));const J=U(T);if(J!==N.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[J].usedTimes++;const Ct=tt[N.__cacheKey];Ct!==void 0&&(tt[N.__cacheKey].usedTimes--,Ct.usedTimes===0&&v(T)),N.__cacheKey=J,N.__webglTexture=tt[J].texture}return B}function nt(N,T,B){return Math.floor(Math.floor(N/B)/T)}function et(N,T,B,Q){const J=N.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,B,Q,T.data);else{J.sort((lt,ut)=>lt.start-ut.start);let Ct=0;for(let lt=1;lt<J.length;lt++){const ut=J[Ct],Pt=J[lt],It=ut.start+ut.count,ht=nt(Pt.start,T.width,4),qt=nt(ut.start,T.width,4);Pt.start<=It+1&&ht===qt&&nt(Pt.start+Pt.count-1,T.width,4)===ht?ut.count=Math.max(ut.count,Pt.start+Pt.count-ut.start):(++Ct,J[Ct]=Pt)}J.length=Ct+1;const ct=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let lt=0,ut=J.length;lt<ut;lt++){const Pt=J[lt],It=Math.floor(Pt.start/4),ht=Math.ceil(Pt.count/4),qt=It%T.width,F=Math.floor(It/T.width),_t=ht,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,qt,F,_t,ot,B,Q,T.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function G(N,T,B){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);const tt=yt(N,T),J=T.source;e.bindTexture(Q,N.__webglTexture,i.TEXTURE0+B);const Ct=n.get(J);if(J.version!==Ct.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ct=he.getPrimaries(he.workingColorSpace),Nt=T.colorSpace===Cr?null:he.getPrimaries(T.colorSpace),Lt=T.colorSpace===Cr||ct===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let lt=m(T.image,!1,r.maxTextureSize);lt=Dt(T,lt);const ut=s.convert(T.format,T.colorSpace),Pt=s.convert(T.type);let It=M(T.internalFormat,ut,Pt,T.colorSpace,T.isVideoTexture);pt(Q,T);let ht;const qt=T.mipmaps,F=T.isVideoTexture!==!0,_t=Ct.__version===void 0||tt===!0,ot=J.dataReady,xt=S(T,lt);if(T.isDepthTexture)It=x(T.format===ms,T.type),_t&&(F?e.texStorage2D(i.TEXTURE_2D,1,It,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,It,lt.width,lt.height,0,ut,Pt,null));else if(T.isDataTexture)if(qt.length>0){F&&_t&&e.texStorage2D(i.TEXTURE_2D,xt,It,qt[0].width,qt[0].height);for(let st=0,it=qt.length;st<it;st++)ht=qt[st],F?ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ht.width,ht.height,ut,Pt,ht.data):e.texImage2D(i.TEXTURE_2D,st,It,ht.width,ht.height,0,ut,Pt,ht.data);T.generateMipmaps=!1}else F?(_t&&e.texStorage2D(i.TEXTURE_2D,xt,It,lt.width,lt.height),ot&&et(T,lt,ut,Pt)):e.texImage2D(i.TEXTURE_2D,0,It,lt.width,lt.height,0,ut,Pt,lt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,It,qt[0].width,qt[0].height,lt.depth);for(let st=0,it=qt.length;st<it;st++)if(ht=qt[st],T.format!==Ri)if(ut!==null)if(F){if(ot)if(T.layerUpdates.size>0){const dt=mm(ht.width,ht.height,T.format,T.type);for(const Gt of T.layerUpdates){const fe=ht.data.subarray(Gt*dt/ht.data.BYTES_PER_ELEMENT,(Gt+1)*dt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Gt,ht.width,ht.height,1,ut,fe)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ht.width,ht.height,lt.depth,ut,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,It,ht.width,ht.height,lt.depth,0,ht.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ht.width,ht.height,lt.depth,ut,Pt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,It,ht.width,ht.height,lt.depth,0,ut,Pt,ht.data)}else{F&&_t&&e.texStorage2D(i.TEXTURE_2D,xt,It,qt[0].width,qt[0].height);for(let st=0,it=qt.length;st<it;st++)ht=qt[st],T.format!==Ri?ut!==null?F?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,st,It,ht.width,ht.height,0,ht.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ht.width,ht.height,ut,Pt,ht.data):e.texImage2D(i.TEXTURE_2D,st,It,ht.width,ht.height,0,ut,Pt,ht.data)}else if(T.isDataArrayTexture)if(F){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,It,lt.width,lt.height,lt.depth),ot)if(T.layerUpdates.size>0){const st=mm(lt.width,lt.height,T.format,T.type);for(const it of T.layerUpdates){const dt=lt.data.subarray(it*st/lt.data.BYTES_PER_ELEMENT,(it+1)*st/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,ut,Pt,dt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,ut,Pt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,lt.width,lt.height,lt.depth,0,ut,Pt,lt.data);else if(T.isData3DTexture)F?(_t&&e.texStorage3D(i.TEXTURE_3D,xt,It,lt.width,lt.height,lt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,ut,Pt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,It,lt.width,lt.height,lt.depth,0,ut,Pt,lt.data);else if(T.isFramebufferTexture){if(_t)if(F)e.texStorage2D(i.TEXTURE_2D,xt,It,lt.width,lt.height);else{let st=lt.width,it=lt.height;for(let dt=0;dt<xt;dt++)e.texImage2D(i.TEXTURE_2D,dt,It,st,it,0,ut,Pt,null),st>>=1,it>>=1}}else if(qt.length>0){if(F&&_t){const st=St(qt[0]);e.texStorage2D(i.TEXTURE_2D,xt,It,st.width,st.height)}for(let st=0,it=qt.length;st<it;st++)ht=qt[st],F?ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ut,Pt,ht):e.texImage2D(i.TEXTURE_2D,st,It,ut,Pt,ht);T.generateMipmaps=!1}else if(F){if(_t){const st=St(lt);e.texStorage2D(i.TEXTURE_2D,xt,It,st.width,st.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Pt,lt)}else e.texImage2D(i.TEXTURE_2D,0,It,ut,Pt,lt);g(T)&&_(Q),Ct.__version=J.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function j(N,T,B){if(T.image.length!==6)return;const Q=yt(N,T),tt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+B);const J=n.get(tt);if(tt.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const Ct=he.getPrimaries(he.workingColorSpace),ct=T.colorSpace===Cr?null:he.getPrimaries(T.colorSpace),Nt=T.colorSpace===Cr||Ct===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Lt=T.isCompressedTexture||T.image[0].isCompressedTexture,lt=T.image[0]&&T.image[0].isDataTexture,ut=[];for(let it=0;it<6;it++)!Lt&&!lt?ut[it]=m(T.image[it],!0,r.maxCubemapSize):ut[it]=lt?T.image[it].image:T.image[it],ut[it]=Dt(T,ut[it]);const Pt=ut[0],It=s.convert(T.format,T.colorSpace),ht=s.convert(T.type),qt=M(T.internalFormat,It,ht,T.colorSpace),F=T.isVideoTexture!==!0,_t=J.__version===void 0||Q===!0,ot=tt.dataReady;let xt=S(T,Pt);pt(i.TEXTURE_CUBE_MAP,T);let st;if(Lt){F&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,qt,Pt.width,Pt.height);for(let it=0;it<6;it++){st=ut[it].mipmaps;for(let dt=0;dt<st.length;dt++){const Gt=st[dt];T.format!==Ri?It!==null?F?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,0,0,Gt.width,Gt.height,It,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,qt,Gt.width,Gt.height,0,Gt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,0,0,Gt.width,Gt.height,It,ht,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,qt,Gt.width,Gt.height,0,It,ht,Gt.data)}}}else{if(st=T.mipmaps,F&&_t){st.length>0&&xt++;const it=St(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(lt){F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ut[it].width,ut[it].height,It,ht,ut[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,ut[it].width,ut[it].height,0,It,ht,ut[it].data);for(let dt=0;dt<st.length;dt++){const fe=st[dt].image[it].image;F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,0,0,fe.width,fe.height,It,ht,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,qt,fe.width,fe.height,0,It,ht,fe.data)}}else{F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,ht,ut[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,It,ht,ut[it]);for(let dt=0;dt<st.length;dt++){const Gt=st[dt];F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,0,0,It,ht,Gt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,qt,It,ht,Gt.image[it])}}}g(T)&&_(i.TEXTURE_CUBE_MAP),J.__version=tt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function rt(N,T,B,Q,tt,J){const Ct=s.convert(B.format,B.colorSpace),ct=s.convert(B.type),Nt=M(B.internalFormat,Ct,ct,B.colorSpace),Lt=n.get(T),lt=n.get(B);if(lt.__renderTarget=T,!Lt.__hasExternalTextures){const ut=Math.max(1,T.width>>J),Pt=Math.max(1,T.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,Nt,ut,Pt,T.depth,0,Ct,ct,null):e.texImage2D(tt,J,Nt,ut,Pt,0,Ct,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,lt.__webglTexture,0,O(T)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,lt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(N,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){const Q=T.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,J=x(T.stencilBuffer,tt),Ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(T),J,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(T),J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,N)}else{const Q=T.textures;for(let tt=0;tt<Q.length;tt++){const J=Q[tt],Ct=s.convert(J.format,J.colorSpace),ct=s.convert(J.type),Nt=M(J.internalFormat,Ct,ct,J.colorSpace);at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(T),Nt,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(T),Nt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(N,T,B){const Q=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(T.depthTexture);if(tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,T.depthTexture.addEventListener("dispose",b)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),pt(i.TEXTURE_CUBE_MAP,T.depthTexture);const Lt=s.convert(T.depthTexture.format),lt=s.convert(T.depthTexture.type);let ut;T.depthTexture.format===_r?ut=i.DEPTH_COMPONENT24:T.depthTexture.format===ms&&(ut=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,ut,T.width,T.height,0,Lt,lt,null)}}else V(T.depthTexture,0);const J=tt.__webglTexture,Ct=O(T),ct=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Nt=T.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===_r)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Nt,ct,J,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,Nt,ct,J,0);else if(T.depthTexture.format===ms)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Nt,ct,J,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,Nt,ct,J,0);else throw new Error("Unknown depthTexture format")}function Ut(N){const T=n.get(N),B=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const Q=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",tt)};Q.addEventListener("dispose",tt),T.__depthDisposeCallback=tt}T.__boundDepthTexture=Q}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)mt(T.__webglFramebuffer[Q],N,Q);else{const Q=N.texture.mipmaps;Q&&Q.length>0?mt(T.__webglFramebuffer[0],N,0):mt(T.__webglFramebuffer,N,0)}else if(B){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),gt(T.__webglDepthbuffer[Q],N,!1);else{const tt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else{const Q=N.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),gt(T.__webglDepthbuffer,N,!1);else{const tt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(N,T,B){const Q=n.get(N);T!==void 0&&rt(Q.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ut(N)}function Mt(N){const T=N.texture,B=n.get(N),Q=n.get(T);N.addEventListener("dispose",w);const tt=N.textures,J=N.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)B.__webglFramebuffer[ct][Nt]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<T.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ct=0,Nt=tt.length;ct<Nt;ct++){const Lt=n.get(tt[ct]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&at(N)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const Nt=tt[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const Lt=s.convert(Nt.format,Nt.colorSpace),lt=s.convert(Nt.type),ut=M(Nt.internalFormat,Lt,lt,Nt.colorSpace,N.isXRRenderTarget===!0),Pt=O(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,ut,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(B.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),pt(i.TEXTURE_CUBE_MAP,T);for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)rt(B.__webglFramebuffer[ct][Nt],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt);else rt(B.__webglFramebuffer[ct],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(T)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ct=0,Nt=tt.length;ct<Nt;ct++){const Lt=tt[ct],lt=n.get(Lt);let ut=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ut=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,lt.__webglTexture),pt(ut,Lt),rt(B.__webglFramebuffer,N,Lt,i.COLOR_ATTACHMENT0+ct,ut,0),g(Lt)&&_(ut)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ct=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),pt(ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)rt(B.__webglFramebuffer[Nt],N,T,i.COLOR_ATTACHMENT0,ct,Nt);else rt(B.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,ct,0);g(T)&&_(ct),e.unbindTexture()}N.depthBuffer&&Ut(N)}function Ot(N){const T=N.textures;for(let B=0,Q=T.length;B<Q;B++){const tt=T[B];if(g(tt)){const J=y(N),Ct=n.get(tt).__webglTexture;e.bindTexture(J,Ct),_(J),e.unbindTexture()}}}const Vt=[],kt=[];function $(N){if(N.samples>0){if(at(N)===!1){const T=N.textures,B=N.width,Q=N.height;let tt=i.COLOR_BUFFER_BIT;const J=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(N),ct=T.length>1;if(ct)for(let Lt=0;Lt<T.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Nt=N.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Lt]);const lt=n.get(T[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,tt,i.NEAREST),l===!0&&(Vt.length=0,kt.length=0,Vt.push(i.COLOR_ATTACHMENT0+Lt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Vt.push(J),kt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Lt=0;Lt<T.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Lt]);const lt=n.get(T[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function O(N){return Math.min(r.maxSamples,N.samples)}function at(N){const T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(N){const T=o.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function Dt(N,T){const B=N.colorSpace,Q=N.format,tt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||B!==Sa&&B!==Cr&&(he.getTransfer(B)===ye?(Q!==Ri||tt!==xi)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",B)),T}function St(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=I,this.setTextureCube=k,this.rebindTextures=$t,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function iA(i,t){function e(n,r=Cr){let s;const o=he.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===ld)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===r0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===s0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===n0)return i.BYTE;if(n===i0)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===od)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Hi)return i.FLOAT;if(n===gr)return i.HALF_FLOAT;if(n===a0)return i.ALPHA;if(n===o0)return i.RGB;if(n===Ri)return i.RGBA;if(n===_r)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===l0)return i.RED;if(n===ud)return i.RED_INTEGER;if(n===Ma)return i.RG;if(n===hd)return i.RG_INTEGER;if(n===fd)return i.RGBA_INTEGER;if(n===Ol||n===kl||n===Bl||n===zl)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Nh||n===Ih||n===Uh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fh||n===Oh||n===kh||n===Bh||n===zh||n===Vh||n===Hh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fh||n===Oh)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bh)return s.COMPRESSED_R11_EAC;if(n===zh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Vh)return s.COMPRESSED_RG11_EAC;if(n===Hh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gh||n===Wh||n===Xh||n===$h||n===Yh||n===qh||n===jh||n===Kh||n===Zh||n===Jh||n===Qh||n===tf||n===ef||n===nf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tf)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ef)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nf)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rf||n===sf||n===af)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rf)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===af)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===of||n===lf||n===cf||n===uf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===of)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const rA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new S0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:rA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vr(new Ec(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Ea{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null;const m=typeof XRWebGLBinding<"u",g=new aA,_={},y=e.getContextAttributes();let M=null,x=null;const S=[],b=[],w=new be;let R=null;const v=new _i;v.viewport=new ze;const E=new _i;E.viewport=new ze;const D=[v,E],C=new _b;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=S[G];return j===void 0&&(j=new Tu,S[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=S[G];return j===void 0&&(j=new Tu,S[G]=j),j.getGripSpace()},this.getHand=function(G){let j=S[G];return j===void 0&&(j=new Tu,S[G]=j),j.getHandSpace()};function V(G){const j=b.indexOf(G.inputSource);if(j===-1)return;const rt=S[j];rt!==void 0&&(rt.update(G.inputSource,G.frame,c||o),rt.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",I);for(let G=0;G<S.length;G++){const j=b[G];j!==null&&(b[G]=null,S[G].disconnect(j))}L=null,U=null,g.reset();for(const G in _)delete _[G];t.setRenderTarget(M),d=null,f=null,h=null,r=null,x=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&m&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",z),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,gt=null,mt=null;y.depth&&(mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=y.stencil?ms:_r,gt=y.stencil?Eo:qi);const Ut={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ut),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new $i(f.textureWidth,f.textureHeight,{format:Ri,type:xi,depthTexture:new wo(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new $i(d.framebufferWidth,d.framebufferHeight,{format:Ri,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(G){for(let j=0;j<G.removed.length;j++){const rt=G.removed[j],gt=b.indexOf(rt);gt>=0&&(b[gt]=null,S[gt].disconnect(rt))}for(let j=0;j<G.added.length;j++){const rt=G.added[j];let gt=b.indexOf(rt);if(gt===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=b.length){b.push(rt),gt=Ut;break}else if(b[Ut]===null){b[Ut]=rt,gt=Ut;break}if(gt===-1)break}const mt=S[gt];mt&&mt.connect(rt)}}const k=new K,X=new K;function P(G,j,rt){k.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(rt.matrixWorld);const gt=k.distanceTo(X),mt=j.projectionMatrix.elements,Ut=rt.projectionMatrix.elements,$t=mt[14]/(mt[10]-1),Mt=mt[14]/(mt[10]+1),Ot=(mt[9]+1)/mt[5],Vt=(mt[9]-1)/mt[5],kt=(mt[8]-1)/mt[0],$=(Ut[8]+1)/Ut[0],O=$t*kt,at=$t*$,Rt=gt/(-kt+$),Dt=Rt*-kt;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Dt),G.translateZ(Rt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),mt[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const St=$t+Rt,N=Mt+Rt,T=O-Dt,B=at+(gt-Dt),Q=Ot*Mt/N*St,tt=Vt*Mt/N*St;G.projectionMatrix.makePerspective(T,B,Q,tt,St,N),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Y(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let j=G.near,rt=G.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),C.near=E.near=v.near=j,C.far=E.far=v.far=rt,(L!==C.near||U!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,U=C.far),C.layers.mask=G.layers.mask|6,v.layers.mask=C.layers.mask&3,E.layers.mask=C.layers.mask&5;const gt=G.parent,mt=C.cameras;Y(C,gt);for(let Ut=0;Ut<mt.length;Ut++)Y(mt[Ut],gt);mt.length===2?P(C,v,E):C.projectionMatrix.copy(v.projectionMatrix),pt(G,C,gt)};function pt(G,j,rt){rt===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(rt.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=hf*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(G){return _[G]};let yt=null;function nt(G,j){if(u=j.getViewerPose(c||o),p=j,u!==null){const rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let gt=!1;rt.length!==C.cameras.length&&(C.cameras.length=0,gt=!0);for(let Mt=0;Mt<rt.length;Mt++){const Ot=rt[Mt];let Vt=null;if(d!==null)Vt=d.getViewport(Ot);else{const $=h.getViewSubImage(f,Ot);Vt=$.viewport,Mt===0&&(t.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(x))}let kt=D[Mt];kt===void 0&&(kt=new _i,kt.layers.enable(Mt),kt.viewport=new ze,D[Mt]=kt),kt.matrix.fromArray(Ot.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ot.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Mt===0&&(C.matrix.copy(kt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),gt===!0&&C.cameras.push(kt)}const mt=r.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){h=n.getBinding();const Mt=h.getDepthInformation(rt[0]);Mt&&Mt.isValid&&Mt.texture&&g.init(Mt,r.renderState)}if(mt&&mt.includes("camera-access")&&m){t.state.unbindTexture(),h=n.getBinding();for(let Mt=0;Mt<rt.length;Mt++){const Ot=rt[Mt].camera;if(Ot){let Vt=_[Ot];Vt||(Vt=new S0,_[Ot]=Vt);const kt=h.getCameraImage(Ot);Vt.sourceTexture=kt}}}}for(let rt=0;rt<S.length;rt++){const gt=b[rt],mt=S[rt];gt!==null&&mt!==void 0&&mt.update(gt,j,c||o)}yt&&yt(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}const et=new E0;et.setAnimationLoop(nt),this.setAnimationLoop=function(G){yt=G},this.dispose=function(){}}}const ns=new xr,lA=new He;function cA(i,t){function e(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,_0(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,y,M,x){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),h(g,_)):_.isMeshPhongMaterial?(s(g,_),u(g,_)):_.isMeshStandardMaterial?(s(g,_),f(g,_),_.isMeshPhysicalMaterial&&d(g,_,x)):_.isMeshMatcapMaterial?(s(g,_),p(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),m(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?l(g,_,y,M):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,e(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Gn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,e(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Gn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,e(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,e(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const y=t.get(_),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(ns)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,y,M){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*y,g.scale.value=M*.5,_.map&&(g.map.value=_.map,e(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function h(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function f(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function d(g,_,y){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,_){_.matcap&&(g.matcap.value=_.matcap)}function m(g,_){const y=t.get(_).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function uA(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=r[y.id];x===void 0&&(p(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",g));const S=M.program;n.updateUBOMapping(y,S);const b=t.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function u(y){const M=h();y.__bindingPointIndex=M;const x=i.createBuffer(),S=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=r[y.id],x=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,w=x.length;b<w;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,E=R.length;v<E;v++){const D=R[v];if(d(D,b,v,S)===!0){const C=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let U=0;for(let V=0;V<L.length;V++){const z=L[V],I=m(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,C+U,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,x,S){const b=y.value,w=M+"_"+x;if(S[w]===void 0)return typeof b=="number"||typeof b=="boolean"?S[w]=b:S[w]=b.clone(),!0;{const R=S[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return S[w]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function p(y){const M=y.uniforms;let x=0;const S=16;for(let w=0,R=M.length;w<R;w++){const v=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,D=v.length;E<D;E++){const C=v[E],L=Array.isArray(C.value)?C.value:[C.value];for(let U=0,V=L.length;U<V;U++){const z=L[U],I=m(z),k=x%S,X=k%I.boundary,P=k+X;x+=X,P!==0&&S-P<I.storage&&(x+=S-P),C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=I.storage}}}const b=x%S;return b>0&&(x+=S-b),y.__size=x,y.__cache={},this}function m(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Zt("WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}const hA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function fA(){return Ni===null&&(Ni=new ob(hA,16,16,Ma,gr),Ni.name="DFG_LUT",Ni.minFilter=xn,Ni.magFilter=xn,Ni.wrapS=cr,Ni.wrapT=cr,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class dA{constructor(t={}){const{canvas:e=IS(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=xi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=d,g=new Set([fd,hd,ud]),_=new Set([xi,qi,bo,Eo,ld,cd]),y=new Uint32Array(4),M=new Int32Array(4);let x=null,S=null;const b=[],w=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=pi;let D=0,C=0,L=null,U=-1,V=null;const z=new ze,I=new ze;let k=null;const X=new _e(0);let P=0,Y=e.width,pt=e.height,yt=1,nt=null,et=null;const G=new ze(0,0,Y,pt),j=new ze(0,0,Y,pt);let rt=!1;const gt=new M0;let mt=!1,Ut=!1;const $t=new He,Mt=new K,Ot=new ze,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function $(){return L===null?yt:1}let O=n;function at(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ad}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),O===null){const H="webgl2";if(O=at(H,A),O===null)throw at(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw me("WebGLRenderer: "+A.message),A}let Rt,Dt,St,N,T,B,Q,tt,J,Ct,ct,Nt,Lt,lt,ut,Pt,It,ht,qt,F,_t,ot,xt,st;function it(){Rt=new fT(O),Rt.init(),ot=new iA(O,Rt),Dt=new iT(O,Rt,t,ot),St=new eA(O,Rt),Dt.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),N=new mT(O),T=new zw,B=new nA(O,Rt,St,T,Dt,ot,N),Q=new sT(v),tt=new hT(v),J=new vb(O),xt=new eT(O,J),Ct=new dT(O,J,N,xt),ct=new _T(O,Ct,J,N),qt=new gT(O,Dt,B),Pt=new rT(T),Nt=new Bw(v,Q,tt,Rt,Dt,xt,Pt),Lt=new cA(v,T),lt=new Hw,ut=new qw(Rt),ht=new tT(v,Q,tt,St,ct,p,l),It=new Qw(v,ct,Dt),st=new uA(O,N,Dt,St),F=new nT(O,Rt,N),_t=new pT(O,Rt,N),N.programs=Nt.programs,v.capabilities=Dt,v.extensions=Rt,v.properties=T,v.renderLists=lt,v.shadowMap=It,v.state=St,v.info=N}it(),m!==xi&&(R=new vT(m,e.width,e.height,r,s));const dt=new oA(v,O);this.xr=dt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(A){A!==void 0&&(yt=A,this.setSize(Y,pt,!1))},this.getSize=function(A){return A.set(Y,pt)},this.setSize=function(A,H,Z=!0){if(dt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,pt=H,e.width=Math.floor(A*yt),e.height=Math.floor(H*yt),Z===!0&&(e.style.width=A+"px",e.style.height=H+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Y*yt,pt*yt).floor()},this.setDrawingBufferSize=function(A,H,Z){Y=A,pt=H,yt=Z,e.width=Math.floor(A*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(m===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,H,Z,q){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,H,Z,q),St.viewport(z.copy(G).multiplyScalar(yt).round())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,H,Z,q){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,H,Z,q),St.scissor(I.copy(j).multiplyScalar(yt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(A){St.setScissorTest(rt=A)},this.setOpaqueSort=function(A){nt=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Z=!0){let q=0;if(A){let W=!1;if(L!==null){const ft=L.texture.format;W=g.has(ft)}if(W){const ft=L.texture.type,wt=_.has(ft),vt=ht.getClearColor(),At=ht.getClearAlpha(),zt=vt.r,Yt=vt.g,Wt=vt.b;wt?(y[0]=zt,y[1]=Yt,y[2]=Wt,y[3]=At,O.clearBufferuiv(O.COLOR,0,y)):(M[0]=zt,M[1]=Yt,M[2]=Wt,M[3]=At,O.clearBufferiv(O.COLOR,0,M))}else q|=O.COLOR_BUFFER_BIT}H&&(q|=O.DEPTH_BUFFER_BIT),Z&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),ht.dispose(),lt.dispose(),ut.dispose(),T.dispose(),Q.dispose(),tt.dispose(),ct.dispose(),xt.dispose(),st.dispose(),Nt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ke),dt.removeEventListener("sessionend",re),xe.stop()};function Gt(A){A.preventDefault(),Kp("WebGLRenderer: Context Lost."),E=!0}function fe(){Kp("WebGLRenderer: Context Restored."),E=!1;const A=N.autoReset,H=It.enabled,Z=It.autoUpdate,q=It.needsUpdate,W=It.type;it(),N.autoReset=A,It.enabled=H,It.autoUpdate=Z,It.needsUpdate=q,It.type=W}function Tt(A){me("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const H=A.target;H.removeEventListener("dispose",Bt),Jt(H)}function Jt(A){bt(A),T.remove(A)}function bt(A){const H=T.get(A).programs;H!==void 0&&(H.forEach(function(Z){Nt.releaseProgram(Z)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Z,q,W,ft){H===null&&(H=Vt);const wt=W.isMesh&&W.matrixWorld.determinant()<0,vt=Ye(A,H,Z,q,W);St.setMaterial(q,wt);let At=Z.index,zt=1;if(q.wireframe===!0){if(At=Ct.getWireframeAttribute(Z),At===void 0)return;zt=2}const Yt=Z.drawRange,Wt=Z.attributes.position;let se=Yt.start*zt,Se=(Yt.start+Yt.count)*zt;ft!==null&&(se=Math.max(se,ft.start*zt),Se=Math.min(Se,(ft.start+ft.count)*zt)),At!==null?(se=Math.max(se,0),Se=Math.min(Se,At.count)):Wt!=null&&(se=Math.max(se,0),Se=Math.min(Se,Wt.count));const Ue=Se-se;if(Ue<0||Ue===1/0)return;xt.setup(W,q,vt,Z,At);let Fe,Te=F;if(At!==null&&(Fe=J.get(At),Te=_t,Te.setIndex(Fe)),W.isMesh)q.wireframe===!0?(St.setLineWidth(q.wireframeLinewidth*$()),Te.setMode(O.LINES)):Te.setMode(O.TRIANGLES);else if(W.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),St.setLineWidth(Xt*$()),W.isLineSegments?Te.setMode(O.LINES):W.isLineLoop?Te.setMode(O.LINE_LOOP):Te.setMode(O.LINE_STRIP)}else W.isPoints?Te.setMode(O.POINTS):W.isSprite&&Te.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)To("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Te.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xt=W._multiDrawStarts,ve=W._multiDrawCounts,pe=W._multiDrawCount,qn=At?J.get(At).bytesPerElement:1,Ps=T.get(q).currentProgram.getUniforms();for(let jn=0;jn<pe;jn++)Ps.setValue(O,"_gl_DrawID",jn),Te.render(Xt[jn]/qn,ve[jn])}else if(W.isInstancedMesh)Te.renderInstances(se,Ue,W.count);else if(Z.isInstancedBufferGeometry){const Xt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ve=Math.min(Z.instanceCount,Xt);Te.renderInstances(se,Ue,ve)}else Te.render(se,Ue)};function jt(A,H,Z){A.transparent===!0&&A.side===ar&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Me(A,H,Z),A.side=Gr,A.needsUpdate=!0,Me(A,H,Z),A.side=ar):Me(A,H,Z)}this.compile=function(A,H,Z=null){Z===null&&(Z=A),S=ut.get(Z),S.init(H),w.push(S),Z.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),A!==Z&&A.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights();const q=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ft=W.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const vt=ft[wt];jt(vt,Z,W),q.add(vt)}else jt(ft,Z,W),q.add(ft)}),S=w.pop(),q},this.compileAsync=function(A,H,Z=null){const q=this.compile(A,H,Z);return new Promise(W=>{function ft(){if(q.forEach(function(wt){T.get(wt).currentProgram.isReady()&&q.delete(wt)}),q.size===0){W(A);return}setTimeout(ft,10)}Rt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ht=null;function Kt(A){Ht&&Ht(A)}function ke(){xe.stop()}function re(){xe.start()}const xe=new E0;xe.setAnimationLoop(Kt),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(A){Ht=A,dt.setAnimationLoop(A),A===null?xe.stop():xe.start()},dt.addEventListener("sessionstart",ke),dt.addEventListener("sessionend",re),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const Z=dt.enabled===!0&&dt.isPresenting===!0,q=R!==null&&(L===null||Z)&&R.begin(v,L);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(H),H=dt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,L),S=ut.get(A,w.length),S.init(H),w.push(S),$t.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),gt.setFromProjectionMatrix($t,Gi,H.reversedDepth),Ut=this.localClippingEnabled,mt=Pt.init(this.clippingPlanes,Ut),x=lt.get(A,b.length),x.init(),b.push(x),dt.enabled===!0&&dt.isPresenting===!0){const wt=v.xr.getDepthSensingMesh();wt!==null&&Ge(wt,H,-1/0,v.sortObjects)}Ge(A,H,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(nt,et),kt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,kt&&ht.addToRenderList(x,A),this.info.render.frame++,mt===!0&&Pt.beginShadows();const W=S.state.shadowsArray;if(It.render(W,A,H),mt===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&R.hasRenderPass())===!1){const wt=x.opaque,vt=x.transmissive;if(S.setupLights(),H.isArrayCamera){const At=H.cameras;if(vt.length>0)for(let zt=0,Yt=At.length;zt<Yt;zt++){const Wt=At[zt];Ee(wt,vt,A,Wt)}kt&&ht.render(A);for(let zt=0,Yt=At.length;zt<Yt;zt++){const Wt=At[zt];Pe(x,A,Wt,Wt.viewport)}}else vt.length>0&&Ee(wt,vt,A,H),kt&&ht.render(A),Pe(x,A,H)}L!==null&&C===0&&(B.updateMultisampleRenderTarget(L),B.updateRenderTargetMipmap(L)),q&&R.end(v),A.isScene===!0&&A.onAfterRender(v,A,H),xt.resetDefaultState(),U=-1,V=null,w.pop(),w.length>0?(S=w[w.length-1],mt===!0&&Pt.setGlobalState(v.clippingPlanes,S.state.camera)):S=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function Ge(A,H,Z,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||gt.intersectsSprite(A)){q&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const wt=ct.update(A),vt=A.material;vt.visible&&x.push(A,wt,vt,Z,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||gt.intersectsObject(A))){const wt=ct.update(A),vt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ot.copy(wt.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(vt)){const At=wt.groups;for(let zt=0,Yt=At.length;zt<Yt;zt++){const Wt=At[zt],se=vt[Wt.materialIndex];se&&se.visible&&x.push(A,wt,se,Z,Ot.z,Wt)}}else vt.visible&&x.push(A,wt,vt,Z,Ot.z,null)}}const ft=A.children;for(let wt=0,vt=ft.length;wt<vt;wt++)Ge(ft[wt],H,Z,q)}function Pe(A,H,Z,q){const{opaque:W,transmissive:ft,transparent:wt}=A;S.setupLightsView(Z),mt===!0&&Pt.setGlobalState(v.clippingPlanes,Z),q&&St.viewport(z.copy(q)),W.length>0&&de(W,H,Z),ft.length>0&&de(ft,H,Z),wt.length>0&&de(wt,H,Z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ee(A,H,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const se=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new $i(1,1,{generateMipmaps:!0,type:se?gr:xi,minFilter:ps,samples:Dt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const ft=S.state.transmissionRenderTarget[q.id],wt=q.viewport||z;ft.setSize(wt.z*v.transmissionResolutionScale,wt.w*v.transmissionResolutionScale);const vt=v.getRenderTarget(),At=v.getActiveCubeFace(),zt=v.getActiveMipmapLevel();v.setRenderTarget(ft),v.getClearColor(X),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear(),kt&&ht.render(Z);const Yt=v.toneMapping;v.toneMapping=Xi;const Wt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),mt===!0&&Pt.setGlobalState(v.clippingPlanes,q),de(A,Z,q),B.updateMultisampleRenderTarget(ft),B.updateRenderTargetMipmap(ft),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Se=0,Ue=H.length;Se<Ue;Se++){const Fe=H[Se],{object:Te,geometry:Xt,material:ve,group:pe}=Fe;if(ve.side===ar&&Te.layers.test(q.layers)){const qn=ve.side;ve.side=Gn,ve.needsUpdate=!0,Pn(Te,Z,q,Xt,ve,pe),ve.side=qn,ve.needsUpdate=!0,se=!0}}se===!0&&(B.updateMultisampleRenderTarget(ft),B.updateRenderTargetMipmap(ft))}v.setRenderTarget(vt,At,zt),v.setClearColor(X,P),Wt!==void 0&&(q.viewport=Wt),v.toneMapping=Yt}function de(A,H,Z){const q=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ft=A.length;W<ft;W++){const wt=A[W],{object:vt,geometry:At,group:zt}=wt;let Yt=wt.material;Yt.allowOverride===!0&&q!==null&&(Yt=q),vt.layers.test(Z.layers)&&Pn(vt,H,Z,At,Yt,zt)}}function Pn(A,H,Z,q,W,ft){A.onBeforeRender(v,H,Z,q,W,ft),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,H,Z,q,A,ft),W.transparent===!0&&W.side===ar&&W.forceSinglePass===!1?(W.side=Gn,W.needsUpdate=!0,v.renderBufferDirect(Z,H,q,W,A,ft),W.side=Gr,W.needsUpdate=!0,v.renderBufferDirect(Z,H,q,W,A,ft),W.side=ar):v.renderBufferDirect(Z,H,q,W,A,ft),A.onAfterRender(v,H,Z,q,W,ft)}function Me(A,H,Z){H.isScene!==!0&&(H=Vt);const q=T.get(A),W=S.state.lights,ft=S.state.shadowsArray,wt=W.state.version,vt=Nt.getParameters(A,W.state,ft,H,Z),At=Nt.getProgramCacheKey(vt);let zt=q.programs;q.environment=A.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(A.isMeshStandardMaterial?tt:Q).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Bt),zt=new Map,q.programs=zt);let Yt=zt.get(At);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===wt)return Yn(A,vt),Yt}else vt.uniforms=Nt.getUniforms(A),A.onBeforeCompile(vt,v),Yt=Nt.acquireProgram(vt,At),zt.set(At,Yt),q.uniforms=vt.uniforms;const Wt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Pt.uniform),Yn(A,vt),q.needsLights=Qe(A),q.lightsStateVersion=wt,q.needsLights&&(Wt.ambientLightColor.value=W.state.ambient,Wt.lightProbe.value=W.state.probe,Wt.directionalLights.value=W.state.directional,Wt.directionalLightShadows.value=W.state.directionalShadow,Wt.spotLights.value=W.state.spot,Wt.spotLightShadows.value=W.state.spotShadow,Wt.rectAreaLights.value=W.state.rectArea,Wt.ltc_1.value=W.state.rectAreaLTC1,Wt.ltc_2.value=W.state.rectAreaLTC2,Wt.pointLights.value=W.state.point,Wt.pointLightShadows.value=W.state.pointShadow,Wt.hemisphereLights.value=W.state.hemi,Wt.directionalShadowMap.value=W.state.directionalShadowMap,Wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Wt.spotShadowMap.value=W.state.spotShadowMap,Wt.spotLightMatrix.value=W.state.spotLightMatrix,Wt.spotLightMap.value=W.state.spotLightMap,Wt.pointShadowMap.value=W.state.pointShadowMap,Wt.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function cn(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Yn(A,H){const Z=T.get(A);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Ye(A,H,Z,q,W){H.isScene!==!0&&(H=Vt),B.resetTextureUnits();const ft=H.fog,wt=q.isMeshStandardMaterial?H.environment:null,vt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Sa,At=(q.isMeshStandardMaterial?tt:Q).get(q.envMap||wt),zt=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Yt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Wt=!!Z.morphAttributes.position,se=!!Z.morphAttributes.normal,Se=!!Z.morphAttributes.color;let Ue=Xi;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ue=v.toneMapping);const Fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Te=Fe!==void 0?Fe.length:0,Xt=T.get(q),ve=S.state.lights;if(mt===!0&&(Ut===!0||A!==V)){const yn=A===V&&q.id===U;Pt.setState(q,A,yn)}let pe=!1;q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ve.state.version||Xt.outputColorSpace!==vt||W.isBatchedMesh&&Xt.batching===!1||!W.isBatchedMesh&&Xt.batching===!0||W.isBatchedMesh&&Xt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xt.instancing===!1||!W.isInstancedMesh&&Xt.instancing===!0||W.isSkinnedMesh&&Xt.skinning===!1||!W.isSkinnedMesh&&Xt.skinning===!0||W.isInstancedMesh&&Xt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xt.instancingMorph===!1&&W.morphTexture!==null||Xt.envMap!==At||q.fog===!0&&Xt.fog!==ft||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Pt.numPlanes||Xt.numIntersection!==Pt.numIntersection)||Xt.vertexAlphas!==zt||Xt.vertexTangents!==Yt||Xt.morphTargets!==Wt||Xt.morphNormals!==se||Xt.morphColors!==Se||Xt.toneMapping!==Ue||Xt.morphTargetsCount!==Te)&&(pe=!0):(pe=!0,Xt.__version=q.version);let qn=Xt.currentProgram;pe===!0&&(qn=Me(q,H,W));let Ps=!1,jn=!1,Ca=!1;const Ce=qn.getUniforms(),Dn=Xt.uniforms;if(St.useProgram(qn.program)&&(Ps=!0,jn=!0,Ca=!0),q.id!==U&&(U=q.id,jn=!0),Ps||V!==A){St.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ce.setValue(O,"projectionMatrix",A.projectionMatrix),Ce.setValue(O,"viewMatrix",A.matrixWorldInverse);const Ln=Ce.map.cameraPosition;Ln!==void 0&&Ln.setValue(O,Mt.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&Ce.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ce.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,jn=!0,Ca=!0)}if(Xt.needsLights&&(ve.state.directionalShadowMap.length>0&&Ce.setValue(O,"directionalShadowMap",ve.state.directionalShadowMap,B),ve.state.spotShadowMap.length>0&&Ce.setValue(O,"spotShadowMap",ve.state.spotShadowMap,B),ve.state.pointShadowMap.length>0&&Ce.setValue(O,"pointShadowMap",ve.state.pointShadowMap,B)),W.isSkinnedMesh){Ce.setOptional(O,W,"bindMatrix"),Ce.setOptional(O,W,"bindMatrixInverse");const yn=W.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ce.setValue(O,"boneTexture",yn.boneTexture,B))}W.isBatchedMesh&&(Ce.setOptional(O,W,"batchingTexture"),Ce.setValue(O,"batchingTexture",W._matricesTexture,B),Ce.setOptional(O,W,"batchingIdTexture"),Ce.setValue(O,"batchingIdTexture",W._indirectTexture,B),Ce.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Ce.setValue(O,"batchingColorTexture",W._colorsTexture,B));const ci=Z.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&qt.update(W,Z,qn),(jn||Xt.receiveShadow!==W.receiveShadow)&&(Xt.receiveShadow=W.receiveShadow,Ce.setValue(O,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Dn.envMap.value=At,Dn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Dn.envMapIntensity.value=H.environmentIntensity),Dn.dfgLUT!==void 0&&(Dn.dfgLUT.value=fA()),jn&&(Ce.setValue(O,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&qe(Dn,Ca),ft&&q.fog===!0&&Lt.refreshFogUniforms(Dn,ft),Lt.refreshMaterialUniforms(Dn,q,yt,pt,S.state.transmissionRenderTarget[A.id]),Vl.upload(O,cn(Xt),Dn,B)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vl.upload(O,cn(Xt),Dn,B),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ce.setValue(O,"center",W.center),Ce.setValue(O,"modelViewMatrix",W.modelViewMatrix),Ce.setValue(O,"normalMatrix",W.normalMatrix),Ce.setValue(O,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yn=q.uniformsGroups;for(let Ln=0,Dc=yn.length;Ln<Dc;Ln++){const Yr=yn[Ln];st.update(Yr,qn),st.bind(Yr,qn)}}return qn}function qe(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Qe(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,H,Z){const q=T.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),T.get(A.texture).__webglTexture=H,T.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const Z=T.get(A);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const Ki=O.createFramebuffer();this.setRenderTarget=function(A,H=0,Z=0){L=A,D=H,C=Z;let q=null,W=!1,ft=!1;if(A){const vt=T.get(A);if(vt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),z.copy(A.viewport),I.copy(A.scissor),k=A.scissorTest,St.viewport(z),St.scissor(I),St.setScissorTest(k),U=-1;return}else if(vt.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(vt.__hasExternalTextures)B.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(vt.__boundDepthTexture!==Yt){if(Yt!==null&&T.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const At=A.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ft=!0);const zt=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[H])?q=zt[H][Z]:q=zt[H],W=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?q=T.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?q=zt[Z]:q=zt,z.copy(A.viewport),I.copy(A.scissor),k=A.scissorTest}else z.copy(G).multiplyScalar(yt).floor(),I.copy(j).multiplyScalar(yt).floor(),k=rt;if(Z!==0&&(q=Ki),St.bindFramebuffer(O.FRAMEBUFFER,q)&&St.drawBuffers(A,q),St.viewport(z),St.scissor(I),St.setScissorTest(k),W){const vt=T.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt.__webglTexture,Z)}else if(ft){const vt=H;for(let At=0;At<A.textures.length;At++){const zt=T.get(A.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,zt.__webglTexture,Z,vt)}}else if(A!==null&&Z!==0){const vt=T.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,Z)}U=-1},this.readRenderTargetPixels=function(A,H,Z,q,W,ft,wt,vt=0){if(!(A&&A.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){St.bindFramebuffer(O.FRAMEBUFFER,At);try{const zt=A.textures[vt],Yt=zt.format,Wt=zt.type;if(!Dt.textureFormatReadable(Yt)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Wt)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&Z>=0&&Z<=A.height-W&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt),O.readPixels(H,Z,q,W,ot.convert(Yt),ot.convert(Wt),ft))}finally{const zt=L!==null?T.get(L).__webglFramebuffer:null;St.bindFramebuffer(O.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,H,Z,q,W,ft,wt,vt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(H>=0&&H<=A.width-q&&Z>=0&&Z<=A.height-W){St.bindFramebuffer(O.FRAMEBUFFER,At);const zt=A.textures[vt],Yt=zt.format,Wt=zt.type;if(!Dt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt),O.readPixels(H,Z,q,W,ot.convert(Yt),ot.convert(Wt),0);const Se=L!==null?T.get(L).__webglFramebuffer:null;St.bindFramebuffer(O.FRAMEBUFFER,Se);const Ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await US(O,Ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.deleteBuffer(se),O.deleteSync(Ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Z=0){const q=Math.pow(2,-Z),W=Math.floor(A.image.width*q),ft=Math.floor(A.image.height*q),wt=H!==null?H.x:0,vt=H!==null?H.y:0;B.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,wt,vt,W,ft),St.unbindTexture()};const Rs=O.createFramebuffer(),tn=O.createFramebuffer();this.copyTextureToTexture=function(A,H,Z=null,q=null,W=0,ft=null){ft===null&&(W!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=W,W=0):ft=0);let wt,vt,At,zt,Yt,Wt,se,Se,Ue;const Fe=A.isCompressedTexture?A.mipmaps[ft]:A.image;if(Z!==null)wt=Z.max.x-Z.min.x,vt=Z.max.y-Z.min.y,At=Z.isBox3?Z.max.z-Z.min.z:1,zt=Z.min.x,Yt=Z.min.y,Wt=Z.isBox3?Z.min.z:0;else{const ci=Math.pow(2,-W);wt=Math.floor(Fe.width*ci),vt=Math.floor(Fe.height*ci),A.isDataArrayTexture?At=Fe.depth:A.isData3DTexture?At=Math.floor(Fe.depth*ci):At=1,zt=0,Yt=0,Wt=0}q!==null?(se=q.x,Se=q.y,Ue=q.z):(se=0,Se=0,Ue=0);const Te=ot.convert(H.format),Xt=ot.convert(H.type);let ve;H.isData3DTexture?(B.setTexture3D(H,0),ve=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(B.setTexture2DArray(H,0),ve=O.TEXTURE_2D_ARRAY):(B.setTexture2D(H,0),ve=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const pe=O.getParameter(O.UNPACK_ROW_LENGTH),qn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ps=O.getParameter(O.UNPACK_SKIP_PIXELS),jn=O.getParameter(O.UNPACK_SKIP_ROWS),Ca=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,zt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Wt);const Ce=A.isDataArrayTexture||A.isData3DTexture,Dn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const ci=T.get(A),yn=T.get(H),Ln=T.get(ci.__renderTarget),Dc=T.get(yn.__renderTarget);St.bindFramebuffer(O.READ_FRAMEBUFFER,Ln.__webglFramebuffer),St.bindFramebuffer(O.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let Yr=0;Yr<At;Yr++)Ce&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(A).__webglTexture,W,Wt+Yr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(H).__webglTexture,ft,Ue+Yr)),O.blitFramebuffer(zt,Yt,wt,vt,se,Se,wt,vt,O.DEPTH_BUFFER_BIT,O.NEAREST);St.bindFramebuffer(O.READ_FRAMEBUFFER,null),St.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||T.has(A)){const ci=T.get(A),yn=T.get(H);St.bindFramebuffer(O.READ_FRAMEBUFFER,Rs),St.bindFramebuffer(O.DRAW_FRAMEBUFFER,tn);for(let Ln=0;Ln<At;Ln++)Ce?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ci.__webglTexture,W,Wt+Ln):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ci.__webglTexture,W),Dn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yn.__webglTexture,ft,Ue+Ln):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yn.__webglTexture,ft),W!==0?O.blitFramebuffer(zt,Yt,wt,vt,se,Se,wt,vt,O.COLOR_BUFFER_BIT,O.NEAREST):Dn?O.copyTexSubImage3D(ve,ft,se,Se,Ue+Ln,zt,Yt,wt,vt):O.copyTexSubImage2D(ve,ft,se,Se,zt,Yt,wt,vt);St.bindFramebuffer(O.READ_FRAMEBUFFER,null),St.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Dn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(ve,ft,se,Se,Ue,wt,vt,At,Te,Xt,Fe.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(ve,ft,se,Se,Ue,wt,vt,At,Te,Fe.data):O.texSubImage3D(ve,ft,se,Se,Ue,wt,vt,At,Te,Xt,Fe):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,se,Se,wt,vt,Te,Xt,Fe.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,se,Se,Fe.width,Fe.height,Te,Fe.data):O.texSubImage2D(O.TEXTURE_2D,ft,se,Se,wt,vt,Te,Xt,Fe);O.pixelStorei(O.UNPACK_ROW_LENGTH,pe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,qn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ps),O.pixelStorei(O.UNPACK_SKIP_ROWS,jn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ca),ft===0&&H.generateMipmaps&&O.generateMipmap(ve),St.unbindTexture()},this.initRenderTarget=function(A){T.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),St.unbindTexture()},this.resetState=function(){D=0,C=0,L=null,St.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class pA{constructor(t){this.canvas=t,this.renderer=null,this.scene=null,this.camera=null,this.particles=null,this.uniforms={},this.animationId=null,this.progress=0,this.themeColor=new _e("#66c2a5")}init(){this.renderer=new dA({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new ab,this.camera=new _i(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.createParticles(),this.animate(),window.addEventListener("resize",()=>this.onResize())}createParticles(){const e=new Di,n=new Float32Array(2e3*3),r=new Float32Array(2e3);for(let o=0;o<2e3;o++)n[o*3]=(Math.random()-.5)*20,n[o*3+1]=(Math.random()-.5)*20,n[o*3+2]=(Math.random()-.5)*10,r[o]=Math.random();e.setAttribute("position",new Si(n,3)),e.setAttribute("aRandom",new Si(r,1));const s=new Pi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uProgress:{value:0},uColor:{value:this.themeColor},uSize:{value:3},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
      `});this.particles=new fb(e,s),this.scene.add(this.particles),this.uniforms=s.uniforms}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.uniforms.uTime.value+=.01,this.uniforms.uProgress.value=this.progress,this.renderer.render(this.scene,this.camera)}setProgress(t){this.progress=t}setThemeColor(t){this.themeColor.set(t),this.uniforms.uColor&&(this.uniforms.uColor.value=this.themeColor)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.uniforms.uPixelRatio&&(this.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2))}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles?.geometry.dispose(),this.particles?.material.dispose(),this.renderer?.dispose()}}class mA{constructor(t){this.container=t,this.currentImage=null,this.parallaxEnabled=!1,this.handleScroll=this.updateParallax.bind(this)}show(t){if(!t?.src)return;this.clear();const e=document.createElement("div");e.style.cssText=`
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    `;const n=document.createElement("img"),s=t.src.startsWith("/")?`/prj-jcie/${t.src.slice(1)}`:t.src;n.src=s,n.alt=t.alt||"";const o=t.fit||"cover",a={cover:"width: 100%; height: 120%; object-fit: cover;",width:"width: 100%; height: auto; object-fit: contain;",height:"width: auto; height: 120%; object-fit: contain;",contain:"width: 100%; height: 100%; object-fit: contain;"},l=t.objectPosition||"center center";if(n.style.cssText=`
      ${a[o]||a.cover}
      object-position: ${l};
      opacity: ${t.opacity??1};
      transform: translateY(-10%);
      will-change: transform;
      transition: transform 0.05s linear;
    `,t.colorOverlay){const u=getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#66c2a5",h=t.colorOverlay.opacity??.8,f=document.createElement("div");f.style.cssText=`
        position: absolute;
        inset: 0;
        background: ${u};
        opacity: ${h};
        mix-blend-mode: multiply;
        pointer-events: none;
        z-index: 1;
      `,e.appendChild(f)}const c=document.createElement("div");c.style.cssText=`
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
      z-index: 2;
    `,e.appendChild(n),e.appendChild(c),this.container.appendChild(e),this.currentImage=e,this.parallaxImg=n,this.parallaxEnabled=!0,window.addEventListener("scroll",this.handleScroll,{passive:!0})}updateParallax(){if(!this.parallaxEnabled||!this.parallaxImg)return;const t=window.scrollY||window.pageYOffset,e=window.innerHeight,n=-10+t/e*3,r=Math.max(-10,Math.min(0,n));this.parallaxImg.style.transform=`translateY(${r}%)`}hide(){this.clear()}clear(){this.parallaxEnabled=!1,window.removeEventListener("scroll",this.handleScroll),this.currentImage&&(this.currentImage.remove(),this.currentImage=null,this.parallaxImg=null)}}const gA="modulepreload",_A=function(i){return"/prj-jcie/"+i},Bm={},zm=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(e.map(c=>{if(c=_A(c),c in Bm)return;Bm[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":gA,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,p)=>{f.addEventListener("load",d),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},xl=1440,vl=900,Vm=230,xA={europe:["Albania","Austria","Belarus","Belgium","Bosnia and Herz.","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Lithuania","Luxembourg","Macedonia","Moldova","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Ukraine","United Kingdom","N. Cyprus"],asia:["Afghanistan","Armenia","Azerbaijan","Bangladesh","Bhutan","Brunei","Cambodia","China","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Saudi Arabia","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"],africa:["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Central African Rep.","Chad","Congo","Côte d'Ivoire","Dem. Rep. Congo","Djibouti","Egypt","Eq. Guinea","Eritrea","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","S. Sudan","Senegal","Sierra Leone","Somalia","Somaliland","South Africa","Sudan","Tanzania","Togo","Tunisia","Uganda","W. Sahara","Zambia","Zimbabwe","eSwatini"]};function vA(i){const t=new Set(i.highlightCountries||[]);if(i.highlightRegions)for(const e of i.highlightRegions){const n=xA[e.toLowerCase()];if(n)for(const r of n)t.add(r)}return t}const yA="/prj-jcie/data/countries-110m.json",MA="/prj-jcie/config/map-style.json";class SA{constructor(t){this.container=t,this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null,this.glMap=null,this.tileContainer=null,this.currentCenter=[0,15],this.currentZoom=1.2,this.style=null}render(t){if(t?.visible){if(this.tileContainer&&(this.tileContainer.style.display="",this.glMap))try{this.glMap.resize()}catch{}this.pendingConfig=t,this.ensureReady().then(()=>{this.pendingConfig&&this.applyConfig(this.pendingConfig)}).catch(e=>{console.error("MapLayer render failed:",e)})}}ensureReady(){if(this.readyPromise)return this.readyPromise;const t=Bu(yA),e=Bu(MA);return this.readyPromise=Promise.all([t,e]).then(async([n,r])=>{this.style=r,await this.initTileBackground().catch(()=>null);const s=n?.objects?.countries;if(!s)throw new Error("countries object not found in TopoJSON");this.countryFeatures=Sx(n,s).features,this.createSvg(),this.drawBaseMap()}),this.readyPromise}async initTileBackground(){if(!(this.glMap||!this.container))try{const[t,{Protocol:e}]=await Promise.all([zm(()=>import("./maplibre-gl-CAsIRMuf.js").then(a=>a.m),[]),zm(()=>import("./index-CQ-HbO1j.js"),[])]),n=t.default||t,r=new e;n.addProtocol("pmtiles",r.tile),this.tileContainer=document.createElement("div"),this.tileContainer.className="map-tile-container",this.container.appendChild(this.tileContainer);const s=this.style?.tile||{},o=s.hillshade||{};this.glMap=new n.Map({container:this.tileContainer,style:{version:8,sources:{terrain:{type:"raster-dem",url:"https://tiles.mapterhorn.com/tilejson.json",tileSize:512,encoding:"terrarium"}},layers:[{id:"background",type:"background",paint:{"background-color":s.backgroundColor||"#b8cee0"}},{id:"hillshade",type:"hillshade",source:"terrain",paint:{"hillshade-shadow-color":o.shadowColor||"#8a8a8a","hillshade-highlight-color":o.highlightColor||"#ffffff","hillshade-accent-color":o.accentColor||"#d0d0d0","hillshade-exaggeration":o.exaggeration??.35,"hillshade-illumination-direction":o.illuminationDirection??315}}]},center:[0,15],zoom:1.5,interactive:!1,attributionControl:!1,fadeDuration:0,preserveDrawingBuffer:!1}),await new Promise(a=>{this.glMap.on("load",a)})}catch(t){console.warn("MapLibre tile background init failed (falling back to flat map):",t),this.glMap=null}}createSvg(){if(!this.container||this.svg)return;this.svg=og(this.container).append("svg").attr("class","map-svg-overlay").attr("viewBox",`0 0 ${xl} ${vl}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","world map");const t=this.style?.background||{},e=t.hillshade||{},n=t.flat||{};this.svg.append("rect").attr("x",0).attr("y",0).attr("width",xl).attr("height",vl).attr("fill",this.glMap?e.fill||"#8ab4d0":n.fill||"#e8f0f8").attr("fill-opacity",this.glMap?e.fillOpacity??.35:n.fillOpacity??.7)}drawBaseMap(){this.svg&&(this.countryPaths=this.svg.append("g").attr("class","countries").selectAll("path").data(this.countryFeatures,t=>t.properties?.name).join("path").attr("vector-effect","non-scaling-stroke").attr("stroke-linejoin","round"),this.markerCircles=this.svg.append("g").attr("class","map-markers"),this.markerLabels=this.svg.append("g").attr("class","map-marker-labels"))}applyConfig(t){if(!this.countryPaths)return;const e=this.resolveCenter(t.center),n=Number.isFinite(t.zoom)?t.zoom:1.2,r=vA(t),s=!!(t.lightenNonVisited||t.lightenAllCountries),o=Ev().center(e).scale(Vm*n).translate([xl/2,vl/2]),a=bx(o),l=!!this.glMap,c=this.style?.country||{},u=l?c.hillshade||{}:c.flat||{},h=u.opacity||{},f=c.highlight||{},d=this.getThemePrimary(),p=x=>{const S=x.properties?.name;return r.has(S)?f.fill||d:u.fill||(l?"#f8f8f8":"#3f4f63")},m=x=>{const S=x.properties?.name;return r.has(S)?h.highlight??.45:r.size===0?t.lightenAllCountries?h.lightenAll??.45:h.normal??.6:s?h.lightenNonVisited??.35:h.nonHighlight??.55},g=x=>r.has(x.properties?.name)?f.stroke||d:u.stroke||"#9a9a9a",_=x=>r.has(x.properties?.name)?f.strokeOpacity??.5:u.strokeOpacity??.35,y=x=>r.has(x.properties?.name)?f.strokeWidth??1:c.defaultStrokeWidth??.4;if(!this.countryPaths.node()?.getAttribute("d")){if(this.countryPaths.attr("d",a).attr("fill",p).attr("fill-opacity",m).attr("stroke",g).attr("stroke-opacity",_).attr("stroke-width",y),this.glMap){this._cameraTimer&&this._cameraTimer.stop(),this._cameraTimer=null;try{this.jumpTileCamera(e,n)}catch{}}}else if(this.countryPaths.transition().duration(650).ease(Fn).attr("d",a).attr("fill",p).attr("fill-opacity",m).attr("stroke",g).attr("stroke-opacity",_).attr("stroke-width",y),this.glMap){const x=[...this.currentCenter],S=this.currentZoom,b=El(x[0],e[0]),w=El(x[1],e[1]),R=El(S,n),v=Fn,E=650,D=performance.now();this._cameraTimer&&this._cameraTimer.stop(),this._cameraTimer=Ex(()=>{const C=Math.min(1,(performance.now()-D)/E),L=v(C);try{this.jumpTileCamera([b(L),w(L)],R(L))}catch{}C>=1&&(this._cameraTimer.stop(),this._cameraTimer=null)})}this.updateMarkers(t.markers||[],o),this.currentCenter=e,this.currentZoom=n}jumpTileCamera(t,e){if(!this.glMap||!this.container)return;const n=Vm*e,r=this.container.clientWidth,s=this.container.clientHeight,o=Math.min(r/xl,s/vl),a=n*o,l=Math.log2(a*2*Math.PI/512);this.glMap.jumpTo({center:[t[0],t[1]],zoom:Math.max(0,l)})}resolveCenter(t){if(!Array.isArray(t)||t.length!==2)return[0,15];const[e,n]=t;return!Number.isFinite(e)||!Number.isFinite(n)?[0,15]:[e,n]}updateMarkers(t,e){if(!this.markerCircles||!this.markerLabels)return;const n=this.style?.marker||{},r=n.fillOpacity||{},s=n.strokeWidth||{},o=this.style?.label||{},a=n.defaultSize??7,l=n.sizeBonus??3,c=o.offsetX??10,u=o.offsetY??-12,h=t.map(m=>{const g=Number(m.longitude),_=Number(m.latitude);if(!Number.isFinite(g)||!Number.isFinite(_))return null;const y=e([g,_]);return y?{id:m.id||`${m.name||m.country}-${g}-${_}`,x:y[0],y:y[1],name:m.name||"",country:m.country||"",isCurrent:!!m.isCurrent,color:this.getThemePrimary(),size:Number(m.size)||a}:null}).filter(Boolean),f=this.markerCircles.selectAll("circle").data(h,m=>m.id);f.exit().transition().duration(200).attr("r",0).remove(),f.enter().append("circle").attr("cx",m=>m.x).attr("cy",m=>m.y).attr("r",0).attr("fill-opacity",.1).merge(f).transition().duration(650).ease(Fn).attr("cx",m=>m.x).attr("cy",m=>m.y).attr("r",m=>m.isCurrent?m.size+l:m.size).attr("fill",m=>m.color).attr("fill-opacity",m=>m.isCurrent?r.current??.95:r.default??.72).attr("stroke",n.stroke||"#f5f0ec").attr("stroke-width",m=>m.isCurrent?s.current??2:s.default??1).attr("stroke-opacity",n.strokeOpacity??.95);const d=h.filter(m=>m.isCurrent),p=this.markerLabels.selectAll("text").data(d,m=>m.id);p.exit().transition().duration(150).attr("opacity",0).remove(),p.enter().append("text").attr("x",m=>m.x+c).attr("y",m=>m.y+u).attr("fill",o.fill||"#f5f0ec").attr("font-size",o.fontSize??14).attr("font-weight",o.fontWeight??600).attr("paint-order","stroke").attr("stroke",o.stroke||"rgba(10,14,22,0.9)").attr("stroke-width",o.strokeWidth??3).attr("stroke-linejoin","round").attr("opacity",0).text(m=>m.name).merge(p).transition().duration(650).ease(Fn).attr("x",m=>m.x+c).attr("y",m=>m.y+u).attr("opacity",1).text(m=>m.name)}clear(){if(this._cameraTimer&&(this._cameraTimer.stop(),this._cameraTimer=null),this.tileContainer&&(this.tileContainer.style.display="none"),this.container){const t=this.container.querySelector(".map-svg-overlay");t&&t.remove()}this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null}getThemePrimary(){return getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#66c2a5"}destroy(){this.clear(),this.glMap&&(this.glMap.remove(),this.glMap=null),this.tileContainer&&(this.tileContainer.remove(),this.tileContainer=null)}}const R0=1e-10;function Ac(i,t){const e=EA(i),n=e.filter(a=>bA(a,i));let r=0,s=0;const o=[];if(n.length>1){const a=D0(n);for(let c=0;c<n.length;++c){const u=n[c];u.angle=Math.atan2(u.x-a.x,u.y-a.y)}n.sort((c,u)=>u.angle-c.angle);let l=n[n.length-1];for(let c=0;c<n.length;++c){const u=n[c];s+=(l.x+u.x)*(u.y-l.y);const h={x:(u.x+l.x)/2,y:(u.y+l.y)/2};let f=null;for(let d=0;d<u.parentIndex.length;++d)if(l.parentIndex.includes(u.parentIndex[d])){const p=i[u.parentIndex[d]],m=Math.atan2(u.x-p.x,u.y-p.y),g=Math.atan2(l.x-p.x,l.y-p.y);let _=g-m;_<0&&(_+=2*Math.PI);const y=g-_/2;let M=Xn(h,{x:p.x+p.radius*Math.sin(y),y:p.y+p.radius*Math.cos(y)});M>p.radius*2&&(M=p.radius*2),(f==null||f.width>M)&&(f={circle:p,width:M,p1:u,p2:l,large:M>p.radius,sweep:!0})}f!=null&&(o.push(f),r+=mf(f.circle.radius,f.width),l=u)}}else{let a=i[0];for(let c=1;c<i.length;++c)i[c].radius<a.radius&&(a=i[c]);let l=!1;for(let c=0;c<i.length;++c)if(Xn(i[c],a)>Math.abs(a.radius-i[c].radius)){l=!0;break}l?r=s=0:(r=a.radius*a.radius*Math.PI,o.push({circle:a,p1:{x:a.x,y:a.y+a.radius},p2:{x:a.x-R0,y:a.y+a.radius},width:a.radius*2,large:!0,sweep:!0}))}return s/=2,t&&(t.area=r+s,t.arcArea=r,t.polygonArea=s,t.arcs=o,t.innerPoints=n,t.intersectionPoints=e),r+s}function bA(i,t){return t.every(e=>Xn(i,e)<e.radius+R0)}function EA(i){const t=[];for(let e=0;e<i.length;++e)for(let n=e+1;n<i.length;++n){const r=P0(i[e],i[n]);for(const s of r)s.parentIndex=[e,n],t.push(s)}return t}function mf(i,t){return i*i*Math.acos(1-t/i)-(i-t)*Math.sqrt(t*(2*i-t))}function Xn(i,t){return Math.sqrt((i.x-t.x)*(i.x-t.x)+(i.y-t.y)*(i.y-t.y))}function gd(i,t,e){if(e>=i+t)return 0;if(e<=Math.abs(i-t))return Math.PI*Math.min(i,t)*Math.min(i,t);const n=i-(e*e-t*t+i*i)/(2*e),r=t-(e*e-i*i+t*t)/(2*e);return mf(i,n)+mf(t,r)}function P0(i,t){const e=Xn(i,t),n=i.radius,r=t.radius;if(e>=n+r||e<=Math.abs(n-r))return[];const s=(n*n-r*r+e*e)/(2*e),o=Math.sqrt(n*n-s*s),a=i.x+s*(t.x-i.x)/e,l=i.y+s*(t.y-i.y)/e,c=-(t.y-i.y)*(o/e),u=-(t.x-i.x)*(o/e);return[{x:a+c,y:l-u},{x:a-c,y:l+u}]}function D0(i){const t={x:0,y:0};for(const e of i)t.x+=e.x,t.y+=e.y;return t.x/=i.length,t.y/=i.length,t}function TA(i,t,e,n){n=n||{};const r=n.maxIterations||100,s=n.tolerance||1e-10,o=i(t),a=i(e);let l=e-t;if(o*a>0)throw"Initial bisect points must have opposite signs";if(o===0)return t;if(a===0)return e;for(let c=0;c<r;++c){l/=2;const u=t+l,h=i(u);if(h*o>=0&&(t=u),Math.abs(l)<s||h===0)return u}return t+l}function gf(i){const t=new Array(i);for(let e=0;e<i;++e)t[e]=0;return t}function Hm(i,t){return gf(i).map(()=>gf(t))}function ca(i,t){let e=0;for(let n=0;n<i.length;++n)e+=i[n]*t[n];return e}function _f(i){return Math.sqrt(ca(i,i))}function xf(i,t,e){for(let n=0;n<t.length;++n)i[n]=t[n]*e}function or(i,t,e,n,r){for(let s=0;s<i.length;++s)i[s]=t*e[s]+n*r[s]}function L0(i,t,e){e=e||{};const n=e.maxIterations||t.length*200,r=e.nonZeroDelta||1.05,s=e.zeroDelta||.001,o=e.minErrorDelta||1e-6,a=e.minErrorDelta||1e-5,l=e.rho!==void 0?e.rho:1,c=e.chi!==void 0?e.chi:2,u=e.psi!==void 0?e.psi:-.5,h=e.sigma!==void 0?e.sigma:.5;let f;const d=t.length,p=new Array(d+1);p[0]=t,p[0].fx=i(t),p[0].id=0;for(let S=0;S<d;++S){const b=t.slice();b[S]=b[S]?b[S]*r:s,p[S+1]=b,p[S+1].fx=i(b),p[S+1].id=S+1}function m(S){for(let b=0;b<S.length;b++)p[d][b]=S[b];p[d].fx=S.fx}const g=(S,b)=>S.fx-b.fx,_=t.slice(),y=t.slice(),M=t.slice(),x=t.slice();for(let S=0;S<n;++S){if(p.sort(g),e.history){const w=p.map(R=>{const v=R.slice();return v.fx=R.fx,v.id=R.id,v});w.sort((R,v)=>R.id-v.id),e.history.push({x:p[0].slice(),fx:p[0].fx,simplex:w})}f=0;for(let w=0;w<d;++w)f=Math.max(f,Math.abs(p[0][w]-p[1][w]));if(Math.abs(p[0].fx-p[d].fx)<o&&f<a)break;for(let w=0;w<d;++w){_[w]=0;for(let R=0;R<d;++R)_[w]+=p[R][w];_[w]/=d}const b=p[d];if(or(y,1+l,_,-l,b),y.fx=i(y),y.fx<p[0].fx)or(x,1+c,_,-c,b),x.fx=i(x),x.fx<y.fx?m(x):m(y);else if(y.fx>=p[d-1].fx){let w=!1;if(y.fx>b.fx?(or(M,1+u,_,-u,b),M.fx=i(M),M.fx<b.fx?m(M):w=!0):(or(M,1-u*l,_,u*l,b),M.fx=i(M),M.fx<y.fx?m(M):w=!0),w){if(h>=1)break;for(let R=1;R<p.length;++R)or(p[R],1-h,p[0],h,p[R]),p[R].fx=i(p[R])}}else m(y)}return p.sort(g),{fx:p[0].fx,x:p[0]}}function wA(i,t,e,n,r,s,o){const a=e.fx,l=ca(e.fxprime,t);let c=a,u=a,h=l,f=0;r=r||1,s=s||1e-6,o=o||.1;function d(p,m,g){for(let _=0;_<16;++_)if(r=(p+m)/2,or(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),h=ca(n.fxprime,t),c>a+s*r*l||c>=g)m=r;else{if(Math.abs(h)<=-o*l)return r;h*(m-p)>=0&&(m=p),p=r,g=c}return 0}for(let p=0;p<10;++p){if(or(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),h=ca(n.fxprime,t),c>a+s*r*l||p&&c>=u)return d(f,r,u);if(Math.abs(h)<=-o*l)return r;if(h>=0)return d(r,f,c);u=c,f=r,r*=2}return r}function AA(i,t,e){let n={x:t.slice(),fx:0,fxprime:t.slice()},r={x:t.slice(),fx:0,fxprime:t.slice()};const s=t.slice();let o,a,l=1,c;e=e||{},c=e.maxIterations||t.length*20,n.fx=i(n.x,n.fxprime),o=n.fxprime.slice(),xf(o,n.fxprime,-1);for(let u=0;u<c;++u){if(l=wA(i,o,n,r,l),e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),!l)xf(o,n.fxprime,-1);else{or(s,1,r.fxprime,-1,n.fxprime);const h=ca(n.fxprime,n.fxprime),f=Math.max(0,ca(s,r.fxprime)/h);or(o,f,o,-1,r.fxprime),a=n,n=r,r=a}if(_f(n.fxprime)<=1e-5)break}return e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),n}function CA(i,t={}){t.maxIterations=t.maxIterations||500;const e=t.initialLayout||LA,n=t.lossFunction||Cc,r=RA(i,t),s=e(r,t),o=Object.keys(s),a=[];for(const u of o)a.push(s[u].x),a.push(s[u].y);const c=L0(u=>{const h={};for(let f=0;f<o.length;++f){const d=o[f];h[d]={x:u[2*f],y:u[2*f+1],radius:s[d].radius}}return n(h,r)},a,t).x;for(let u=0;u<o.length;++u){const h=o[u];s[h].x=c[2*u],s[h].y=c[2*u+1]}return s}const N0=1e-10;function vf(i,t,e){return Math.min(i,t)*Math.min(i,t)*Math.PI<=e+N0?Math.abs(i-t):TA(n=>gd(i,t,n)-e,0,i+t)}function RA(i,t={}){const e=t.distinct,n=i.map(a=>Object.assign({},a));function r(a){return a.join(";")}if(e){const a=new Map;for(const l of n)for(let c=0;c<l.sets.length;c++){const u=String(l.sets[c]);a.set(u,l.size+(a.get(u)||0));for(let h=c+1;h<l.sets.length;h++){const f=String(l.sets[h]),d=`${u};${f}`,p=`${f};${u}`;a.set(d,l.size+(a.get(d)||0)),a.set(p,l.size+(a.get(p)||0))}}for(const l of n)l.sets.length<3&&(l.size=a.get(r(l.sets)))}const s=[],o=new Set;for(const a of n)if(a.sets.length===1)s.push(a.sets[0]);else if(a.sets.length===2){const l=a.sets[0],c=a.sets[1];o.add(r(a.sets)),o.add(r([c,l]))}s.sort((a,l)=>a===l?0:a<l?-1:1);for(let a=0;a<s.length;++a){const l=s[a];for(let c=a+1;c<s.length;++c){const u=s[c];o.has(r([l,u]))||n.push({sets:[l,u],size:0})}}return n}function PA(i,t,e){const n=Hm(t.length,t.length),r=Hm(t.length,t.length);return i.filter(s=>s.sets.length===2).forEach(s=>{const o=e[s.sets[0]],a=e[s.sets[1]],l=Math.sqrt(t[o].size/Math.PI),c=Math.sqrt(t[a].size/Math.PI),u=vf(l,c,s.size);n[o][a]=n[a][o]=u;let h=0;s.size+1e-10>=Math.min(t[o].size,t[a].size)?h=1:s.size<=1e-10&&(h=-1),r[o][a]=r[a][o]=h}),{distances:n,constraints:r}}function DA(i,t,e,n){for(let s=0;s<t.length;++s)t[s]=0;let r=0;for(let s=0;s<e.length;++s){const o=i[2*s],a=i[2*s+1];for(let l=s+1;l<e.length;++l){const c=i[2*l],u=i[2*l+1],h=e[s][l],f=n[s][l],d=(c-o)*(c-o)+(u-a)*(u-a),p=Math.sqrt(d),m=d-h*h;f>0&&p<=h||f<0&&p>=h||(r+=2*m*m,t[2*s]+=4*m*(o-c),t[2*s+1]+=4*m*(a-u),t[2*l]+=4*m*(c-o),t[2*l+1]+=4*m*(u-a))}}return r}function LA(i,t={}){let e=IA(i,t);const n=t.lossFunction||Cc;if(i.length>=8){const r=NA(i,t),s=n(r,i),o=n(e,i);s+1e-8<o&&(e=r)}return e}function NA(i,t={}){const e=t.restarts||10,n=[],r={};for(const f of i)f.sets.length===1&&(r[f.sets[0]]=n.length,n.push(f));let{distances:s,constraints:o}=PA(i,n,r);const a=_f(s.map(_f))/s.length;s=s.map(f=>f.map(d=>d/a));const l=(f,d)=>DA(f,d,s,o);let c=null;for(let f=0;f<e;++f){const d=gf(s.length*2).map(Math.random),p=AA(l,d,t);(!c||p.fx<c.fx)&&(c=p)}const u=c.x,h={};for(let f=0;f<n.length;++f){const d=n[f];h[d.sets[0]]={x:u[2*f]*a,y:u[2*f+1]*a,radius:Math.sqrt(d.size/Math.PI)}}if(t.history)for(const f of t.history)xf(f.x,a);return h}function IA(i,t){const e=t&&t.lossFunction?t.lossFunction:Cc,n={},r={};for(const h of i)if(h.sets.length===1){const f=h.sets[0];n[f]={x:1e10,y:1e10,rowid:n.length,size:h.size,radius:Math.sqrt(h.size/Math.PI)},r[f]=[]}i=i.filter(h=>h.sets.length===2);for(const h of i){let f=h.weight!=null?h.weight:1;const d=h.sets[0],p=h.sets[1];h.size+N0>=Math.min(n[d].size,n[p].size)&&(f=0),r[d].push({set:p,size:h.size,weight:f}),r[p].push({set:d,size:h.size,weight:f})}const s=[];Object.keys(r).forEach(h=>{let f=0;for(let d=0;d<r[h].length;++d)f+=r[h][d].size*r[h][d].weight;s.push({set:h,size:f})});function o(h,f){return f.size-h.size}s.sort(o);const a={};function l(h){return h.set in a}function c(h,f){n[f].x=h.x,n[f].y=h.y,a[f]=!0}c({x:0,y:0},s[0].set);for(let h=1;h<s.length;++h){const f=s[h].set,d=r[f].filter(l),p=n[f];if(d.sort(o),d.length===0)throw"ERROR: missing pairwise overlap information";const m=[];for(var u=0;u<d.length;++u){const y=n[d[u].set],M=vf(p.radius,y.radius,d[u].size);m.push({x:y.x+M,y:y.y}),m.push({x:y.x-M,y:y.y}),m.push({y:y.y+M,x:y.x}),m.push({y:y.y-M,x:y.x});for(let x=u+1;x<d.length;++x){const S=n[d[x].set],b=vf(p.radius,S.radius,d[x].size),w=P0({x:y.x,y:y.y,radius:M},{x:S.x,y:S.y,radius:b});m.push(...w)}}let g=1e50,_=m[0];for(const y of m){n[f].x=y.x,n[f].y=y.y;const M=e(n,i);M<g&&(g=M,_=y)}c(_,f)}return n}function Cc(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const o=i[n.sets[0]],a=i[n.sets[1]];r=gd(o.radius,a.radius,Xn(o,a))}else r=Ac(n.sets.map(o=>i[o]));const s=n.weight!=null?n.weight:1;e+=s*(r-n.size)*(r-n.size)}return e}function UA(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const a=i[n.sets[0]],l=i[n.sets[1]];r=gd(a.radius,l.radius,Xn(a,l))}else r=Ac(n.sets.map(a=>i[a]));const s=n.weight!=null?n.weight:1,o=Math.log((r+1)/(n.size+1));e+=s*o*o}return e}function FA(i,t,e){if(e==null?i.sort((r,s)=>s.radius-r.radius):i.sort(e),i.length>0){const r=i[0].x,s=i[0].y;for(const o of i)o.x-=r,o.y-=s}if(i.length===2&&Xn(i[0],i[1])<Math.abs(i[1].radius-i[0].radius)&&(i[1].x=i[0].x+i[0].radius-i[1].radius-1e-10,i[1].y=i[0].y),i.length>1){const r=Math.atan2(i[1].x,i[1].y)-t,s=Math.cos(r),o=Math.sin(r);for(const a of i){const l=a.x,c=a.y;a.x=s*l-o*c,a.y=o*l+s*c}}if(i.length>2){let r=Math.atan2(i[2].x,i[2].y)-t;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;if(r>Math.PI){const s=i[1].y/(1e-10+i[1].x);for(const o of i){var n=(o.x+s*o.y)/(1+s*s);o.x=2*n-o.x,o.y=2*n*s-o.y}}}}function OA(i){i.forEach(r=>{r.parent=r});function t(r){return r.parent!==r&&(r.parent=t(r.parent)),r.parent}function e(r,s){const o=t(r),a=t(s);o.parent=a}for(let r=0;r<i.length;++r)for(let s=r+1;s<i.length;++s){const o=i[r].radius+i[s].radius;Xn(i[r],i[s])+1e-10<o&&e(i[s],i[r])}const n=new Map;for(let r=0;r<i.length;++r){const s=t(i[r]).parent.setid;n.has(s)||n.set(s,[]),n.get(s).push(i[r])}return i.forEach(r=>{delete r.parent}),Array.from(n.values())}function yf(i){const t=e=>{const n=i.reduce((s,o)=>Math.max(s,o[e]+o.radius),Number.NEGATIVE_INFINITY),r=i.reduce((s,o)=>Math.min(s,o[e]-o.radius),Number.POSITIVE_INFINITY);return{max:n,min:r}};return{xRange:t("x"),yRange:t("y")}}function kA(i,t,e){t==null&&(t=Math.PI/2);let n=U0(i).map(c=>Object.assign({},c));const r=OA(n);for(const c of r){FA(c,t,e);const u=yf(c);c.size=(u.xRange.max-u.xRange.min)*(u.yRange.max-u.yRange.min),c.bounds=u}r.sort((c,u)=>u.size-c.size),n=r[0];let s=n.bounds;const o=(s.xRange.max-s.xRange.min)/50;function a(c,u,h){if(!c)return;const f=c.bounds;let d,p;if(u)d=s.xRange.max-f.xRange.min+o;else{d=s.xRange.max-f.xRange.max;const m=(f.xRange.max-f.xRange.min)/2-(s.xRange.max-s.xRange.min)/2;m<0&&(d+=m)}if(h)p=s.yRange.max-f.yRange.min+o;else{p=s.yRange.max-f.yRange.max;const m=(f.yRange.max-f.yRange.min)/2-(s.yRange.max-s.yRange.min)/2;m<0&&(p+=m)}for(const m of c)m.x+=d,m.y+=p,n.push(m)}let l=1;for(;l<r.length;)a(r[l],!0,!1),a(r[l+1],!1,!0),a(r[l+2],!0,!0),l+=3,s=yf(n);return I0(n)}function BA(i,t,e,n,r){const s=U0(i);t-=2*n,e-=2*n;const{xRange:o,yRange:a}=yf(s);if(o.max===o.min||a.max===a.min)return console.log("not scaling solution: zero size detected"),i;let l,c;if(r){const d=Math.sqrt(r/Math.PI)*2;l=t/d,c=e/d}else l=t/(o.max-o.min),c=e/(a.max-a.min);const u=Math.min(c,l),h=(t-(o.max-o.min)*u)/2,f=(e-(a.max-a.min)*u)/2;return I0(s.map(d=>({radius:u*d.radius,x:n+h+(d.x-o.min)*u,y:n+f+(d.y-a.min)*u,setid:d.setid})))}function I0(i){const t={};for(const e of i)t[e.setid]=e;return t}function U0(i){return Object.keys(i).map(e=>Object.assign(i[e],{setid:e}))}function Nu(i,t,e){let n=t[0].radius-Xn(t[0],i);for(let r=1;r<t.length;++r){const s=t[r].radius-Xn(t[r],i);s<=n&&(n=s)}for(let r=0;r<e.length;++r){const s=Xn(e[r],i)-e[r].radius;s<=n&&(n=s)}return n}function F0(i,t,e){const n=[];for(const u of i)n.push({x:u.x,y:u.y}),n.push({x:u.x+u.radius/2,y:u.y}),n.push({x:u.x-u.radius/2,y:u.y}),n.push({x:u.x,y:u.y+u.radius/2}),n.push({x:u.x,y:u.y-u.radius/2});let r=n[0],s=Nu(n[0],i,t);for(let u=1;u<n.length;++u){const h=Nu(n[u],i,t);h>=s&&(r=n[u],s=h)}const o=L0(u=>-1*Nu({x:u[0],y:u[1]},i,t),[r.x,r.y],{maxIterations:500,minErrorDelta:1e-10}).x,a={x:e?0:o[0],y:o[1]};let l=!0;for(const u of i)if(Xn(a,u)>u.radius){l=!1;break}for(const u of t)if(Xn(a,u)<u.radius){l=!1;break}if(l)return a;if(i.length==1)return{x:i[0].x,y:i[0].y};const c={};return Ac(i,c),c.arcs.length===0?{x:0,y:-1e3,disjoint:!0}:c.arcs.length==1?{x:c.arcs[0].circle.x,y:c.arcs[0].circle.y}:t.length?F0(i,[]):D0(c.arcs.map(u=>u.p1))}function zA(i){const t={},e=Object.keys(i);for(const n of e)t[n]=[];for(let n=0;n<e.length;n++){const r=e[n],s=i[r];for(let o=n+1;o<e.length;++o){const a=e[o],l=i[a],c=Xn(s,l);c+l.radius<=s.radius+1e-10?t[a].push(r):c+s.radius<=l.radius+1e-10&&t[r].push(a)}}return t}function VA(i,t,e){const n={},r=zA(i);for(let s=0;s<t.length;++s){const o=t[s].sets,a={},l={};for(let f=0;f<o.length;++f){a[o[f]]=!0;const d=r[o[f]];for(let p=0;p<d.length;++p)l[d[p]]=!0}const c=[],u=[];for(let f in i)f in a?c.push(i[f]):f in l||u.push(i[f]);const h=F0(c,u,e);n[o]=h,h.disjoint&&t[s].size>0&&console.log("WARNING: area "+o+" not represented on screen")}return n}function HA(i,t,e){const n=[];return n.push(`
M`,i,t),n.push(`
m`,-e,0),n.push(`
a`,e,e,0,1,0,e*2,0),n.push(`
a`,e,e,0,1,0,-e*2,0),n.join(" ")}function GA(i){if(i.length===0)return[];const t={};return Ac(i,t),t.arcs}function WA(i,t){if(i.length===0)return"M 0 0";const e=Math.pow(10,t||0),n=t!=null?s=>Math.round(s*e)/e:s=>s;if(i.length==1){const s=i[0].circle;return HA(n(s.x),n(s.y),n(s.radius))}const r=[`
M`,n(i[0].p2.x),n(i[0].p2.y)];for(const s of i){const o=n(s.circle.radius);r.push(`
A`,o,o,0,s.large?1:0,s.sweep?1:0,n(s.p1.x),n(s.p1.y))}return r.join(" ")}function XA(i,t={}){const{lossFunction:e,layoutFunction:n=CA,normalize:r=!0,orientation:s=Math.PI/2,orientationOrder:o,width:a=600,height:l=350,padding:c=15,scaleToFit:u=!1,symmetricalTextCentre:h=!1,distinct:f,round:d=2}=t;let p=n(i,{lossFunction:e==="default"||!e?Cc:e==="logRatio"?UA:e,distinct:f});r&&(p=kA(p,s,o));const m=BA(p,a,l,c,u),g=VA(m,i,h),_=new Map(Object.keys(m).map(x=>[x,{set:x,x:m[x].x,y:m[x].y,radius:m[x].radius}])),y=i.map(x=>{const S=x.sets.map(R=>_.get(R)),b=GA(S),w=WA(b,d);return{circles:S,arcs:b,path:w,area:x,has:new Set(x.sets)}});function M(x){let S="";for(const b of y)b.has.size>x.length&&x.every(w=>b.has.has(w))&&(S+=" "+b.path);return S}return y.map(({circles:x,arcs:S,path:b,area:w})=>({data:w,text:g[w.sets],circles:x,arcs:S,path:b,distinctPath:b+M(w.sets)}))}var Mf="http://www.w3.org/1999/xhtml";const Gm={svg:"http://www.w3.org/2000/svg",xhtml:Mf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function O0(i){var t=i+="",e=t.indexOf(":");return e>=0&&(t=i.slice(0,e))!=="xmlns"&&(i=i.slice(e+1)),Gm.hasOwnProperty(t)?{space:Gm[t],local:i}:i}function $A(i){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Mf&&t.documentElement.namespaceURI===Mf?t.createElement(i):t.createElementNS(e,i)}}function YA(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function k0(i){var t=O0(i);return(t.local?YA:$A)(t)}function qA(){}function B0(i){return i==null?qA:function(){return this.querySelector(i)}}function jA(i){typeof i!="function"&&(i=B0(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=n[r]=new Array(o),l,c,u=0;u<o;++u)(l=s[u])&&(c=i.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new bi(n,this._parents)}function KA(){return[]}function ZA(i){return i==null?KA:function(){return this.querySelectorAll(i)}}function JA(i){typeof i!="function"&&(i=ZA(i));for(var t=this._groups,e=t.length,n=[],r=[],s=0;s<e;++s)for(var o=t[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(n.push(i.call(l,l.__data__,c,o)),r.push(l));return new bi(n,r)}function QA(i){return function(){return this.matches(i)}}function tC(i){typeof i!="function"&&(i=QA(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=n[r]=[],l,c=0;c<o;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&a.push(l);return new bi(n,this._parents)}function z0(i){return new Array(i.length)}function eC(){return new bi(this._enter||this._groups.map(z0),this._parents)}function uc(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}uc.prototype={constructor:uc,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function nC(i){return function(){return i}}var Wm="$";function iC(i,t,e,n,r,s){for(var o=0,a,l=t.length,c=s.length;o<c;++o)(a=t[o])?(a.__data__=s[o],n[o]=a):e[o]=new uc(i,s[o]);for(;o<l;++o)(a=t[o])&&(r[o]=a)}function rC(i,t,e,n,r,s,o){var a,l,c={},u=t.length,h=s.length,f=new Array(u),d;for(a=0;a<u;++a)(l=t[a])&&(f[a]=d=Wm+o.call(l,l.__data__,a,t),d in c?r[a]=l:c[d]=l);for(a=0;a<h;++a)d=Wm+o.call(i,s[a],a,s),(l=c[d])?(n[a]=l,l.__data__=s[a],c[d]=null):e[a]=new uc(i,s[a]);for(a=0;a<u;++a)(l=t[a])&&c[f[a]]===l&&(r[a]=l)}function sC(i,t){if(!i)return d=new Array(this.size()),c=-1,this.each(function(b){d[++c]=b}),d;var e=t?rC:iC,n=this._parents,r=this._groups;typeof i!="function"&&(i=nC(i));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],h=r[c],f=h.length,d=i.call(u,u&&u.__data__,c,n),p=d.length,m=a[c]=new Array(p),g=o[c]=new Array(p),_=l[c]=new Array(f);e(u,h,m,g,_,d,t);for(var y=0,M=0,x,S;y<p;++y)if(x=m[y]){for(y>=M&&(M=y+1);!(S=g[M])&&++M<p;);x._next=S||null}}return o=new bi(o,n),o._enter=a,o._exit=l,o}function aC(){return new bi(this._exit||this._groups.map(z0),this._parents)}function oC(i,t,e){var n=this.enter(),r=this,s=this.exit();return n=typeof i=="function"?i(n):n.append(i+""),t!=null&&(r=t(r)),e==null?s.remove():e(s),n&&r?n.merge(r).order():r}function lC(i){for(var t=this._groups,e=i._groups,n=t.length,r=e.length,s=Math.min(n,r),o=new Array(n),a=0;a<s;++a)for(var l=t[a],c=e[a],u=l.length,h=o[a]=new Array(u),f,d=0;d<u;++d)(f=l[d]||c[d])&&(h[d]=f);for(;a<n;++a)o[a]=t[a];return new bi(o,this._parents)}function cC(){for(var i=this._groups,t=-1,e=i.length;++t<e;)for(var n=i[t],r=n.length-1,s=n[r],o;--r>=0;)(o=n[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function uC(i){i||(i=hC);function t(h,f){return h&&f?i(h.__data__,f.__data__):!h-!f}for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s){for(var o=e[s],a=o.length,l=r[s]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(t)}return new bi(r,this._parents).order()}function hC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function fC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function dC(){var i=new Array(this.size()),t=-1;return this.each(function(){i[++t]=this}),i}function pC(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length;r<s;++r){var o=n[r];if(o)return o}return null}function mC(){var i=0;return this.each(function(){++i}),i}function gC(){return!this.node()}function _C(i){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,o=r.length,a;s<o;++s)(a=r[s])&&i.call(a,a.__data__,s,r);return this}function xC(i){return function(){this.removeAttribute(i)}}function vC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function yC(i,t){return function(){this.setAttribute(i,t)}}function MC(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function SC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(i):this.setAttribute(i,e)}}function bC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,e)}}function EC(i,t){var e=O0(i);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?vC:xC:typeof t=="function"?e.local?bC:SC:e.local?MC:yC)(e,t))}function V0(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function TC(i){return function(){this.style.removeProperty(i)}}function wC(i,t,e){return function(){this.style.setProperty(i,t,e)}}function AC(i,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,e)}}function CC(i,t,e){return arguments.length>1?this.each((t==null?TC:typeof t=="function"?AC:wC)(i,t,e??"")):RC(this.node(),i)}function RC(i,t){return i.style.getPropertyValue(t)||V0(i).getComputedStyle(i,null).getPropertyValue(t)}function PC(i){return function(){delete this[i]}}function DC(i,t){return function(){this[i]=t}}function LC(i,t){return function(){var e=t.apply(this,arguments);e==null?delete this[i]:this[i]=e}}function NC(i,t){return arguments.length>1?this.each((t==null?PC:typeof t=="function"?LC:DC)(i,t)):this.node()[i]}function H0(i){return i.trim().split(/^|\s+/)}function _d(i){return i.classList||new G0(i)}function G0(i){this._node=i,this._names=H0(i.getAttribute("class")||"")}G0.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function W0(i,t){for(var e=_d(i),n=-1,r=t.length;++n<r;)e.add(t[n])}function X0(i,t){for(var e=_d(i),n=-1,r=t.length;++n<r;)e.remove(t[n])}function IC(i){return function(){W0(this,i)}}function UC(i){return function(){X0(this,i)}}function FC(i,t){return function(){(t.apply(this,arguments)?W0:X0)(this,i)}}function OC(i,t){var e=H0(i+"");if(arguments.length<2){for(var n=_d(this.node()),r=-1,s=e.length;++r<s;)if(!n.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?FC:t?IC:UC)(e,t))}function kC(){this.textContent=""}function BC(i){return function(){this.textContent=i}}function zC(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function VC(i){return arguments.length?this.each(i==null?kC:(typeof i=="function"?zC:BC)(i)):this.node().textContent}function HC(){this.innerHTML=""}function GC(i){return function(){this.innerHTML=i}}function WC(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function XC(i){return arguments.length?this.each(i==null?HC:(typeof i=="function"?WC:GC)(i)):this.node().innerHTML}function $C(){this.nextSibling&&this.parentNode.appendChild(this)}function YC(){return this.each($C)}function qC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function jC(){return this.each(qC)}function KC(i){var t=typeof i=="function"?i:k0(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ZC(){return null}function JC(i,t){var e=typeof i=="function"?i:k0(i),n=t==null?ZC:typeof t=="function"?t:B0(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function QC(){var i=this.parentNode;i&&i.removeChild(this)}function tR(){return this.each(QC)}function eR(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function nR(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}function iR(i){return this.select(i?nR:eR)}function rR(i){return arguments.length?this.property("__data__",i):this.node().__data__}var $0={},ne=null;if(typeof document<"u"){var sR=document.documentElement;"onmouseenter"in sR||($0={mouseenter:"mouseover",mouseleave:"mouseout"})}function aR(i,t,e){return i=Y0(i,t,e),function(n){var r=n.relatedTarget;(!r||r!==this&&!(r.compareDocumentPosition(this)&8))&&i.call(this,n)}}function Y0(i,t,e){return function(n){var r=ne;ne=n;try{i.call(this,this.__data__,t,e)}finally{ne=r}}}function oR(i){return i.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function lR(i){return function(){var t=this.__on;if(t){for(var e=0,n=-1,r=t.length,s;e<r;++e)s=t[e],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.capture):t[++n]=s;++n?t.length=n:delete this.__on}}}function cR(i,t,e){var n=$0.hasOwnProperty(i.type)?aR:Y0;return function(r,s,o){var a=this.__on,l,c=n(t,s,o);if(a){for(var u=0,h=a.length;u<h;++u)if((l=a[u]).type===i.type&&l.name===i.name){this.removeEventListener(l.type,l.listener,l.capture),this.addEventListener(l.type,l.listener=c,l.capture=e),l.value=t;return}}this.addEventListener(i.type,c,e),l={type:i.type,name:i.name,value:t,listener:c,capture:e},a?a.push(l):this.__on=[l]}}function uR(i,t,e){var n=oR(i+""),r,s=n.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<s;++r)if((o=n[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=t?cR:lR,e==null&&(e=!1),r=0;r<s;++r)this.each(a(n[r],t,e));return this}function Xm(i,t,e,n){var r=ne;i.sourceEvent=ne,ne=i;try{return t.apply(e,n)}finally{ne=r}}function q0(i,t,e){var n=V0(i),r=n.CustomEvent;typeof r=="function"?r=new r(t,e):(r=n.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),i.dispatchEvent(r)}function hR(i,t){return function(){return q0(this,i,t)}}function fR(i,t){return function(){return q0(this,i,t.apply(this,arguments))}}function dR(i,t){return this.each((typeof t=="function"?fR:hR)(i,t))}var pR=[null];function bi(i,t){this._groups=i,this._parents=t}bi.prototype={constructor:bi,select:jA,selectAll:JA,filter:tC,data:sC,enter:eC,exit:aC,join:oC,merge:lC,order:cC,sort:uC,call:fC,nodes:dC,node:pC,size:mC,empty:gC,each:_C,attr:EC,style:CC,property:NC,classed:OC,text:VC,html:XC,raise:YC,lower:jC,append:KC,insert:JC,remove:tR,clone:iR,datum:rR,on:uR,dispatch:dR};function Wr(i){return typeof i=="string"?new bi([[document.querySelector(i)]],[document.documentElement]):new bi([[i]],pR)}var mR=0;function $m(){this._="@"+(++mR).toString(36)}$m.prototype={constructor:$m,get:function(i){for(var t=this._;!(t in i);)if(!(i=i.parentNode))return;return i[t]},set:function(i,t){return i[this._]=t},remove:function(i){return this._ in i&&delete i[this._]},toString:function(){return this._}};function j0(){for(var i=ne,t;t=i.sourceEvent;)i=t;return i}function K0(i,t){var e=i.ownerSVGElement||i;if(e.createSVGPoint){var n=e.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,n=n.matrixTransform(i.getScreenCTM().inverse()),[n.x,n.y]}var r=i.getBoundingClientRect();return[t.clientX-r.left-i.clientLeft,t.clientY-r.top-i.clientTop]}function gR(i){var t=j0();return t.changedTouches&&(t=t.changedTouches[0]),K0(i,t)}function _R(i,t,e){arguments.length<3&&(e=t,t=j0().changedTouches);for(var n=0,r=t?t.length:0,s;n<r;++n)if((s=t[n]).identifier===e)return K0(i,s);return null}var xR={value:function(){}};function xd(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e)throw new Error("illegal type: "+n);e[n]=[]}return new Hl(e)}function Hl(i){this._=i}function vR(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}Hl.prototype=xd.prototype={constructor:Hl,on:function(i,t){var e=this._,n=vR(i+"",e),r,s=-1,o=n.length;if(arguments.length<2){for(;++s<o;)if((r=(i=n[s]).type)&&(r=yR(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(i=n[s]).type)e[r]=Ym(e[r],i.name,t);else if(t==null)for(r in e)e[r]=Ym(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new Hl(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function yR(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function Ym(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=xR,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}function Iu(){ne.stopImmediatePropagation()}function ua(){ne.preventDefault(),ne.stopImmediatePropagation()}function MR(i){var t=i.document.documentElement,e=Wr(i).on("dragstart.drag",ua,!0);"onselectstart"in t?e.on("selectstart.drag",ua,!0):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function SR(i,t){var e=i.document.documentElement,n=Wr(i).on("dragstart.drag",null);t&&(n.on("click.drag",ua,!0),setTimeout(function(){n.on("click.drag",null)},0)),"onselectstart"in e?n.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function yl(i){return function(){return i}}function Sf(i,t,e,n,r,s,o,a,l,c){this.target=i,this.type=t,this.subject=e,this.identifier=n,this.active=r,this.x=s,this.y=o,this.dx=a,this.dy=l,this._=c}Sf.prototype.on=function(){var i=this._.on.apply(this._,arguments);return i===this._?this:i};function bR(){return!ne.button}function ER(){return this.parentNode}function TR(i){return i??{x:ne.x,y:ne.y}}function wR(){return"ontouchstart"in this}function Z0(){var i=bR,t=ER,e=TR,n=wR,r={},s=xd("start","drag","end"),o=0,a,l,c,u,h=0;function f(x){x.on("mousedown.drag",d).filter(n).on("touchstart.drag",g).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(){if(!(u||!i.apply(this,arguments))){var x=M("mouse",t.apply(this,arguments),gR,this,arguments);x&&(Wr(ne.view).on("mousemove.drag",p,!0).on("mouseup.drag",m,!0),MR(ne.view),Iu(),c=!1,a=ne.clientX,l=ne.clientY,x("start"))}}function p(){if(ua(),!c){var x=ne.clientX-a,S=ne.clientY-l;c=x*x+S*S>h}r.mouse("drag")}function m(){Wr(ne.view).on("mousemove.drag mouseup.drag",null),SR(ne.view,c),ua(),r.mouse("end")}function g(){if(i.apply(this,arguments)){var x=ne.changedTouches,S=t.apply(this,arguments),b=x.length,w,R;for(w=0;w<b;++w)(R=M(x[w].identifier,S,_R,this,arguments))&&(Iu(),R("start"))}}function _(){var x=ne.changedTouches,S=x.length,b,w;for(b=0;b<S;++b)(w=r[x[b].identifier])&&(ua(),w("drag"))}function y(){var x=ne.changedTouches,S=x.length,b,w;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),b=0;b<S;++b)(w=r[x[b].identifier])&&(Iu(),w("end"))}function M(x,S,b,w,R){var v=b(S,x),E,D,C,L=s.copy();if(Xm(new Sf(f,"beforestart",E,x,o,v[0],v[1],0,0,L),function(){return(ne.subject=E=e.apply(w,R))==null?!1:(D=E.x-v[0]||0,C=E.y-v[1]||0,!0)}))return function U(V){var z=v,I;switch(V){case"start":r[x]=U,I=o++;break;case"end":delete r[x],--o;case"drag":v=b(S,x),I=o;break}Xm(new Sf(f,V,E,x,I,v[0]+D,v[1]+C,v[0]-z[0],v[1]-z[1],L),L.apply,L,[V,w,R])}}return f.filter=function(x){return arguments.length?(i=typeof x=="function"?x:yl(!!x),f):i},f.container=function(x){return arguments.length?(t=typeof x=="function"?x:yl(x),f):t},f.subject=function(x){return arguments.length?(e=typeof x=="function"?x:yl(x),f):e},f.touchable=function(x){return arguments.length?(n=typeof x=="function"?x:yl(!!x),f):n},f.on=function(){var x=s.on.apply(s,arguments);return x===s?f:x},f.clickDistance=function(x){return arguments.length?(h=(x=+x)*x,f):Math.sqrt(h)},f}var bf=Math.PI,Ef=2*bf,cs=1e-6,AR=Ef-cs;function Tf(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function vd(){return new Tf}Tf.prototype=vd.prototype={constructor:Tf,moveTo:function(i,t){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+t)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(i,t){this._+="L"+(this._x1=+i)+","+(this._y1=+t)},quadraticCurveTo:function(i,t,e,n){this._+="Q"+ +i+","+ +t+","+(this._x1=+e)+","+(this._y1=+n)},bezierCurveTo:function(i,t,e,n,r,s){this._+="C"+ +i+","+ +t+","+ +e+","+ +n+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(i,t,e,n,r){i=+i,t=+t,e=+e,n=+n,r=+r;var s=this._x1,o=this._y1,a=e-i,l=n-t,c=s-i,u=o-t,h=c*c+u*u;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null)this._+="M"+(this._x1=i)+","+(this._y1=t);else if(h>cs)if(!(Math.abs(u*a-l*c)>cs)||!r)this._+="L"+(this._x1=i)+","+(this._y1=t);else{var f=e-s,d=n-o,p=a*a+l*l,m=f*f+d*d,g=Math.sqrt(p),_=Math.sqrt(h),y=r*Math.tan((bf-Math.acos((p+h-m)/(2*g*_)))/2),M=y/_,x=y/g;Math.abs(M-1)>cs&&(this._+="L"+(i+M*c)+","+(t+M*u)),this._+="A"+r+","+r+",0,0,"+ +(u*f>c*d)+","+(this._x1=i+x*a)+","+(this._y1=t+x*l)}},arc:function(i,t,e,n,r,s){i=+i,t=+t,e=+e,s=!!s;var o=e*Math.cos(n),a=e*Math.sin(n),l=i+o,c=t+a,u=1^s,h=s?n-r:r-n;if(e<0)throw new Error("negative radius: "+e);this._x1===null?this._+="M"+l+","+c:(Math.abs(this._x1-l)>cs||Math.abs(this._y1-c)>cs)&&(this._+="L"+l+","+c),e&&(h<0&&(h=h%Ef+Ef),h>AR?this._+="A"+e+","+e+",0,1,"+u+","+(i-o)+","+(t-a)+"A"+e+","+e+",0,1,"+u+","+(this._x1=l)+","+(this._y1=c):h>cs&&(this._+="A"+e+","+e+",0,"+ +(h>=bf)+","+u+","+(this._x1=i+e*Math.cos(r))+","+(this._y1=t+e*Math.sin(r))))},rect:function(i,t,e,n){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+t)+"h"+ +e+"v"+ +n+"h"+-e+"Z"},toString:function(){return this._}};function di(i){return function(){return i}}var pn=1e-12,hc=Math.PI,fc=hc/2,CR=2*hc;function RR(i){return i.innerRadius}function PR(i){return i.outerRadius}function DR(i){return i.startAngle}function LR(i){return i.endAngle}function NR(i){return i&&i.padAngle}function qm(i){return i>=1?fc:i<=-1?-fc:Math.asin(i)}function IR(i,t,e,n,r,s,o,a){var l=e-i,c=n-t,u=o-r,h=a-s,f=(u*(t-s)-h*(i-r))/(h*l-u*c);return[i+f*l,t+f*c]}function Ml(i,t,e,n,r,s,o){var a=i-e,l=t-n,c=(o?s:-s)/Math.sqrt(a*a+l*l),u=c*l,h=-c*a,f=i+u,d=t+h,p=e+u,m=n+h,g=(f+p)/2,_=(d+m)/2,y=p-f,M=m-d,x=y*y+M*M,S=r-s,b=f*m-p*d,w=(M<0?-1:1)*Math.sqrt(Math.max(0,S*S*x-b*b)),R=(b*M-y*w)/x,v=(-b*y-M*w)/x,E=(b*M+y*w)/x,D=(-b*y+M*w)/x,C=R-g,L=v-_,U=E-g,V=D-_;return C*C+L*L>U*U+V*V&&(R=E,v=D),{cx:R,cy:v,x01:-u,y01:-h,x11:R*(r/S-1),y11:v*(r/S-1)}}function UR(){var i=RR,t=PR,e=di(0),n=null,r=DR,s=LR,o=NR,a=null;function l(){var c,u,h=+i.apply(this,arguments),f=+t.apply(this,arguments),d=r.apply(this,arguments)-fc,p=s.apply(this,arguments)-fc,m=Math.abs(p-d),g=p>d;if(a||(a=c=vd()),f<h&&(u=f,f=h,h=u),!(f>pn))a.moveTo(0,0);else if(m>CR-pn)a.moveTo(f*Math.cos(d),f*Math.sin(d)),a.arc(0,0,f,d,p,!g),h>pn&&(a.moveTo(h*Math.cos(p),h*Math.sin(p)),a.arc(0,0,h,p,d,g));else{var _=d,y=p,M=d,x=p,S=m,b=m,w=o.apply(this,arguments)/2,R=w>pn&&(n?+n.apply(this,arguments):Math.sqrt(h*h+f*f)),v=Math.min(Math.abs(f-h)/2,+e.apply(this,arguments)),E=v,D=v,C,L;if(R>pn){var U=qm(R/h*Math.sin(w)),V=qm(R/f*Math.sin(w));(S-=U*2)>pn?(U*=g?1:-1,M+=U,x-=U):(S=0,M=x=(d+p)/2),(b-=V*2)>pn?(V*=g?1:-1,_+=V,y-=V):(b=0,_=y=(d+p)/2)}var z=f*Math.cos(_),I=f*Math.sin(_),k=h*Math.cos(x),X=h*Math.sin(x);if(v>pn){var P=f*Math.cos(y),Y=f*Math.sin(y),pt=h*Math.cos(M),yt=h*Math.sin(M);if(m<hc){var nt=S>pn?IR(z,I,pt,yt,P,Y,k,X):[k,X],et=z-nt[0],G=I-nt[1],j=P-nt[0],rt=Y-nt[1],gt=1/Math.sin(Math.acos((et*j+G*rt)/(Math.sqrt(et*et+G*G)*Math.sqrt(j*j+rt*rt)))/2),mt=Math.sqrt(nt[0]*nt[0]+nt[1]*nt[1]);E=Math.min(v,(h-mt)/(gt-1)),D=Math.min(v,(f-mt)/(gt+1))}}b>pn?D>pn?(C=Ml(pt,yt,z,I,f,D,g),L=Ml(P,Y,k,X,f,D,g),a.moveTo(C.cx+C.x01,C.cy+C.y01),D<v?a.arc(C.cx,C.cy,D,Math.atan2(C.y01,C.x01),Math.atan2(L.y01,L.x01),!g):(a.arc(C.cx,C.cy,D,Math.atan2(C.y01,C.x01),Math.atan2(C.y11,C.x11),!g),a.arc(0,0,f,Math.atan2(C.cy+C.y11,C.cx+C.x11),Math.atan2(L.cy+L.y11,L.cx+L.x11),!g),a.arc(L.cx,L.cy,D,Math.atan2(L.y11,L.x11),Math.atan2(L.y01,L.x01),!g))):(a.moveTo(z,I),a.arc(0,0,f,_,y,!g)):a.moveTo(z,I),!(h>pn)||!(S>pn)?a.lineTo(k,X):E>pn?(C=Ml(k,X,P,Y,h,-E,g),L=Ml(z,I,pt,yt,h,-E,g),a.lineTo(C.cx+C.x01,C.cy+C.y01),E<v?a.arc(C.cx,C.cy,E,Math.atan2(C.y01,C.x01),Math.atan2(L.y01,L.x01),!g):(a.arc(C.cx,C.cy,E,Math.atan2(C.y01,C.x01),Math.atan2(C.y11,C.x11),!g),a.arc(0,0,h,Math.atan2(C.cy+C.y11,C.cx+C.x11),Math.atan2(L.cy+L.y11,L.cx+L.x11),g),a.arc(L.cx,L.cy,E,Math.atan2(L.y11,L.x11),Math.atan2(L.y01,L.x01),!g))):a.arc(0,0,h,x,M,g)}if(a.closePath(),c)return a=null,c+""||null}return l.centroid=function(){var c=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,u=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-hc/2;return[Math.cos(u)*c,Math.sin(u)*c]},l.innerRadius=function(c){return arguments.length?(i=typeof c=="function"?c:di(+c),l):i},l.outerRadius=function(c){return arguments.length?(t=typeof c=="function"?c:di(+c),l):t},l.cornerRadius=function(c){return arguments.length?(e=typeof c=="function"?c:di(+c),l):e},l.padRadius=function(c){return arguments.length?(n=c==null?null:typeof c=="function"?c:di(+c),l):n},l.startAngle=function(c){return arguments.length?(r=typeof c=="function"?c:di(+c),l):r},l.endAngle=function(c){return arguments.length?(s=typeof c=="function"?c:di(+c),l):s},l.padAngle=function(c){return arguments.length?(o=typeof c=="function"?c:di(+c),l):o},l.context=function(c){return arguments.length?(a=c??null,l):a},l}function J0(i){this._context=i}J0.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function Q0(i){return new J0(i)}function FR(i){return i[0]}function OR(i){return i[1]}function kR(){var i=FR,t=OR,e=di(!0),n=null,r=Q0,s=null;function o(a){var l,c=a.length,u,h=!1,f;for(n==null&&(s=r(f=vd())),l=0;l<=c;++l)!(l<c&&e(u=a[l],l,a))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+i(u,l,a),+t(u,l,a));if(f)return s=null,f+""||null}return o.x=function(a){return arguments.length?(i=typeof a=="function"?a:di(+a),o):i},o.y=function(a){return arguments.length?(t=typeof a=="function"?a:di(+a),o):t},o.defined=function(a){return arguments.length?(e=typeof a=="function"?a:di(!!a),o):e},o.curve=function(a){return arguments.length?(r=a,n!=null&&(s=r(n)),o):r},o.context=function(a){return arguments.length?(a==null?n=s=null:s=r(n=a),o):n},o}function dc(){}function jm(i,t,e){i._context.bezierCurveTo((2*i._x0+i._x1)/3,(2*i._y0+i._y1)/3,(i._x0+2*i._x1)/3,(i._y0+2*i._y1)/3,(i._x0+4*i._x1+t)/6,(i._y0+4*i._y1+e)/6)}function yd(i){this._context=i}yd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:jm(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:jm(this,i,t);break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t}};function tx(i,t){this._basis=new yd(i),this._beta=t}tx.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var i=this._x,t=this._y,e=i.length-1;if(e>0)for(var n=i[0],r=t[0],s=i[e]-n,o=t[e]-r,a=-1,l;++a<=e;)l=a/e,this._basis.point(this._beta*i[a]+(1-this._beta)*(n+l*s),this._beta*t[a]+(1-this._beta)*(r+l*o));this._x=this._y=null,this._basis.lineEnd()},point:function(i,t){this._x.push(+i),this._y.push(+t)}};(function i(t){function e(n){return t===1?new yd(n):new tx(n,t)}return e.beta=function(n){return i(+n)},e})(.85);function pc(i,t,e){i._context.bezierCurveTo(i._x1+i._k*(i._x2-i._x0),i._y1+i._k*(i._y2-i._y0),i._x2+i._k*(i._x1-t),i._y2+i._k*(i._y1-e),i._x2,i._y2)}function Md(i,t){this._context=i,this._k=(1-t)/6}Md.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:pc(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2,this._x1=i,this._y1=t;break;case 2:this._point=3;default:pc(this,i,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return new Md(n,t)}return e.tension=function(n){return i(+n)},e})(0);function Sd(i,t){this._context=i,this._k=(1-t)/6}Sd.prototype={areaStart:dc,areaEnd:dc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._x3=i,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=i,this._y4=t);break;case 2:this._point=3,this._x5=i,this._y5=t;break;default:pc(this,i,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return new Sd(n,t)}return e.tension=function(n){return i(+n)},e})(0);function bd(i,t){this._context=i,this._k=(1-t)/6}bd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:pc(this,i,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return new bd(n,t)}return e.tension=function(n){return i(+n)},e})(0);function Ed(i,t,e){var n=i._x1,r=i._y1,s=i._x2,o=i._y2;if(i._l01_a>pn){var a=2*i._l01_2a+3*i._l01_a*i._l12_a+i._l12_2a,l=3*i._l01_a*(i._l01_a+i._l12_a);n=(n*a-i._x0*i._l12_2a+i._x2*i._l01_2a)/l,r=(r*a-i._y0*i._l12_2a+i._y2*i._l01_2a)/l}if(i._l23_a>pn){var c=2*i._l23_2a+3*i._l23_a*i._l12_a+i._l12_2a,u=3*i._l23_a*(i._l23_a+i._l12_a);s=(s*c+i._x1*i._l23_2a-t*i._l12_2a)/u,o=(o*c+i._y1*i._l23_2a-e*i._l12_2a)/u}i._context.bezierCurveTo(n,r,s,o,i._x2,i._y2)}function ex(i,t){this._context=i,this._alpha=t}ex.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){if(i=+i,t=+t,this._point){var e=this._x2-i,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3;default:Ed(this,i,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const BR=(function i(t){function e(n){return t?new ex(n,t):new Md(n,0)}return e.alpha=function(n){return i(+n)},e})(.5);function nx(i,t){this._context=i,this._alpha=t}nx.prototype={areaStart:dc,areaEnd:dc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(i,t){if(i=+i,t=+t,this._point){var e=this._x2-i,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=i,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=i,this._y4=t);break;case 2:this._point=3,this._x5=i,this._y5=t;break;default:Ed(this,i,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return t?new nx(n,t):new Sd(n,0)}return e.alpha=function(n){return i(+n)},e})(.5);function ix(i,t){this._context=i,this._alpha=t}ix.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){if(i=+i,t=+t,this._point){var e=this._x2-i,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+n*n,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Ed(this,i,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return t?new ix(n,t):new bd(n,0)}return e.alpha=function(n){return i(+n)},e})(.5);function Km(i){return i<0?-1:1}function Zm(i,t,e){var n=i._x1-i._x0,r=t-i._x1,s=(i._y1-i._y0)/(n||r<0&&-0),o=(e-i._y1)/(r||n<0&&-0),a=(s*r+o*n)/(n+r);return(Km(s)+Km(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(a))||0}function Jm(i,t){var e=i._x1-i._x0;return e?(3*(i._y1-i._y0)/e-t)/2:t}function Uu(i,t,e){var n=i._x0,r=i._y0,s=i._x1,o=i._y1,a=(s-n)/3;i._context.bezierCurveTo(n+a,r+a*t,s-a,o-a*e,s,o)}function wf(i){this._context=i}wf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Uu(this,this._t0,Jm(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var e=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,Uu(this,Jm(this,e=Zm(this,i,t)),e);break;default:Uu(this,this._t0,e=Zm(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=e}}};Object.create(wf.prototype).point=function(i,t){wf.prototype.point.call(this,t,i)};var zR=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},wa=function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")},Aa=(function(){function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}})(),kn=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},ir=function i(t,e,n){t===null&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(r===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:i(s,e,n)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(n)}},Td=function(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)},wd=function(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:i},VR=function(i){if(Array.isArray(i)){for(var t=0,e=Array(i.length);t<i.length;t++)e[t]=i[t];return e}else return Array.from(i)},HR=(function(){function i(t){var e=t.x,n=e===void 0?0:e,r=t.y,s=r===void 0?0:r,o=t.nx,a=t.ny,l=t.dy,c=l===void 0?0:l,u=t.dx,h=u===void 0?0:u,f=t.color,d=f===void 0?"grey":f,p=t.data,m=t.type,g=t.subject,_=t.connector,y=t.note,M=t.disable,x=t.id,S=t.className;wa(this,i),this._dx=o!==void 0?o-n:h,this._dy=a!==void 0?a-s:c,this._x=n,this._y=s,this._color=d,this.id=x,this._className=S||"",this._type=m||"",this.data=p,this.note=y||{},this.connector=_||{},this.subject=g||{},this.disable=M||[]}return Aa(i,[{key:"updatePosition",value:function(){this.type.setPosition&&(this.type.setPosition(),this.type.subject&&this.type.subject.selectAll(":not(.handle)").nodes().length!==0&&this.type.redrawSubject())}},{key:"clearComponents",value:function(){this.type.clearComponents&&this.type.clearComponents()}},{key:"updateOffset",value:function(){this.type.setOffset&&(this.type.setOffset(),this.type.connector.selectAll(":not(.handle)").nodes().length!==0&&this.type.redrawConnector(),this.type.redrawNote())}},{key:"className",get:function(){return this._className},set:function(e){this._className=e,this.type.setClassName&&this.type.setClassName()}},{key:"type",get:function(){return this._type},set:function(e){this._type=e,this.clearComponents()}},{key:"x",get:function(){return this._x},set:function(e){this._x=e,this.updatePosition()}},{key:"y",get:function(){return this._y},set:function(e){this._y=e,this.updatePosition()}},{key:"color",get:function(){return this._color},set:function(e){this._color=e,this.updatePosition()}},{key:"dx",get:function(){return this._dx},set:function(e){this._dx=e,this.updateOffset()}},{key:"dy",get:function(){return this._dy},set:function(e){this._dy=e,this.updateOffset()}},{key:"nx",set:function(e){this._dx=e-this._x,this.updateOffset()}},{key:"ny",set:function(e){this._dy=e-this._y,this.updateOffset()}},{key:"offset",get:function(){return{x:this._dx,y:this._dy}},set:function(e){var n=e.x,r=e.y;this._dx=n,this._dy=r,this.updateOffset()}},{key:"position",get:function(){return{x:this._x,y:this._y}},set:function(e){var n=e.x,r=e.y;this._x=n,this._y=r,this.updatePosition()}},{key:"translation",get:function(){return{x:this._x+this._dx,y:this._y+this._dy}}},{key:"json",get:function(){var e={x:this._x,y:this._y,dx:this._dx,dy:this._dy};return this.data&&Object.keys(this.data).length>0&&(e.data=this.data),this.type&&(e.type=this.type),this._className&&(e.className=this._className),Object.keys(this.connector).length>0&&(e.connector=this.connector),Object.keys(this.subject).length>0&&(e.subject=this.subject),Object.keys(this.note).length>0&&(e.note=this.note),e}}]),i})(),GR=(function(){function i(t){var e=t.annotations,n=t.accessors,r=t.accessorsInverse;wa(this,i),this.accessors=n,this.accessorsInverse=r,this.annotations=e}return Aa(i,[{key:"clearTypes",value:function(e){this.annotations.forEach(function(n){n.type=void 0,n.subject=e&&e.subject||n.subject,n.connector=e&&e.connector||n.connector,n.note=e&&e.note||n.note})}},{key:"setPositionWithAccessors",value:function(){var e=this;this.annotations.forEach(function(n){n.type.setPositionWithAccessors(e.accessors)})}},{key:"editMode",value:function(e){this.annotations.forEach(function(n){n.type&&(n.type.editMode=e,n.type.updateEditMode())})}},{key:"updateDisable",value:function(e){this.annotations.forEach(function(n){n.disable=e,n.type&&e.forEach(function(r){n.type[r]&&(n.type[r].remove&&n.type[r].remove(),n.type[r]=void 0)})})}},{key:"updateTextWrap",value:function(e){this.annotations.forEach(function(n){n.type&&n.type.updateTextWrap&&n.type.updateTextWrap(e)})}},{key:"updateText",value:function(){this.annotations.forEach(function(e){e.type&&e.type.drawText&&e.type.drawText()})}},{key:"updateNotePadding",value:function(e){this.annotations.forEach(function(n){n.type&&(n.type.notePadding=e)})}},{key:"json",get:function(){var e=this;return this.annotations.map(function(n){var r=n.json;return e.accessorsInverse&&n.data&&(r.data={},Object.keys(e.accessorsInverse).forEach(function(s){r.data[s]=e.accessorsInverse[s]({x:n.x,y:n.y})})),r})}},{key:"noteNodes",get:function(){return this.annotations.map(function(e){return kn({},e.type.getNoteBBoxOffset(),{positionX:e.x,positionY:e.y})})}}]),i})(),WR=function(t){var e=t.cx,n=e===void 0?0:e,r=t.cy,s=r===void 0?0:r;return{move:{x:n,y:s}}},XR=function(t){var e=t.cx,n=e===void 0?0:e,r=t.cy,s=r===void 0?0:r,o=t.r1,a=t.r2,l=t.padding,c={move:{x:n,y:s}};return o!==void 0&&(c.r1={x:n+o/Math.sqrt(2),y:s+o/Math.sqrt(2)}),a!==void 0&&(c.r2={x:n+a/Math.sqrt(2),y:s+a/Math.sqrt(2)}),l!==void 0&&(c.padding={x:n+o+l,y:s}),c},$R=function(t){var e=t.group,n=t.handles,r=t.r,s=r===void 0?10:r,o=e.selectAll("circle.handle").data(n);o.enter().append("circle").attr("class","handle").attr("fill","grey").attr("fill-opacity",.1).attr("cursor","move").attr("stroke-dasharray",5).attr("stroke","grey").call(Z0().container(Wr("g.annotations").node()).on("start",function(a){return a.start&&a.start(a)}).on("drag",function(a){return a.drag&&a.drag(a)}).on("end",function(a){return a.end&&a.end(a)})),e.selectAll("circle.handle").attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}).attr("r",function(a){return a.r||s}).attr("class",function(a){return"handle "+(a.className||"")}),o.exit().remove()},rx=function(t,e){return(t==="dynamic"||t==="left"||t==="right")&&(e<0?t="top":t="bottom"),t},sx=function(t,e){return(t==="dynamic"||t==="top"||t==="bottom")&&(e<0?t="right":t="left"),t},YR=["topBottom","top","bottom"],qR=["leftRight","left","right"],jR=(function(i){var t=i.padding,e=t===void 0?0:t,n=i.bbox,r=n===void 0?{x:0,width:0,height:0}:n,s=i.align,o=i.orientation,a=i.offset,l=a===void 0?{x:0,y:0}:a,c=-r.x,u=0;return YR.indexOf(o)!==-1?(s=sx(s,l.x),l.y<0&&o==="topBottom"||o==="top"?u-=r.height+e:u+=e,s==="middle"?c-=r.width/2:s==="right"&&(c-=r.width)):qR.indexOf(o)!==-1&&(s=rx(s,l.y),l.x<0&&o==="leftRight"||o==="left"?c-=r.width+e:c+=e,s==="middle"?u-=r.height/2:s==="top"&&(u-=r.height)),{x:c,y:u}}),ji=function(t){var e=t.data,n=t.curve,r=n===void 0?Q0:n,s=t.canvasContext,o=t.className,a=t.classID,l=kR().curve(r),c={type:"path",className:o,classID:a,data:e};return s?(l.context(s),c.pathMethods=l):c.attrs={d:l(e)},c},mc=function(t){var e=t.data,n=t.canvasContext,r=t.className,s=t.classID,o={type:"path",className:r,classID:s,data:e},a=UR().innerRadius(e.innerRadius||0).outerRadius(e.outerRadius||e.radius||2).startAngle(e.startAngle||0).endAngle(e.endAngle||2*Math.PI);return n?(a.context(n),o.pathMethods=lineGen):o.attrs={d:a()},o},KR=(function(i){var t=i.align,e=i.x,n=e===void 0?0:e,r=i.y,s=r===void 0?0:r,o=i.bbox,a=i.offset;t=rx(t,a.y),t==="top"?s-=o.height:t==="middle"&&(s-=o.height/2);var l=[[n,s],[n,s+o.height]];return{components:[ji({data:l,className:"note-line"})]}}),ZR=(function(i){var t=i.align,e=i.x,n=e===void 0?0:e,r=i.y,s=r===void 0?0:r,o=i.offset,a=i.bbox;t=sx(t,o.x),t==="right"?n-=a.width:t==="middle"&&(n-=a.width/2);var l=[[n,s],[n+a.width,s]];return{components:[ji({data:l,className:"note-line"})]}}),ax=function(t){var e=t.type,n=t.subjectType,r=e.annotation,s=r.position,o=r.x-s.x,a=o+r.dx,l=r.y-s.y,c=l+r.dy,u=r.subject;if(n==="circle"&&(u.outerRadius||u.radius)){var h=Math.sqrt((o-a)*(o-a)+(l-c)*(l-c)),f=Math.asin(-c/h),d=u.outerRadius||u.radius+(u.radiusPadding||0);o=Math.abs(Math.cos(f)*d)*(a<0?-1:1),l=Math.abs(Math.sin(f)*d)*(c<0?-1:1)}if(n==="rect"){var p=u.width,m=u.height;(p>0&&r.dx>0||p<0&&r.dx<0)&&(Math.abs(p)>Math.abs(r.dx)?o=p/2:o=p),(m>0&&r.dy>0||m<0&&r.dy<0)&&(Math.abs(m)>Math.abs(r.dy)?l=m/2:l=m),o===p/2&&l===m/2&&(o=a,l=c)}return[[o,l],[a,c]]},JR=(function(i){var t=ax(i);return{components:[ji({data:t,className:"connector"})]}}),QR=(function(i){var t=i.type,e=i.subjectType,n=t.annotation,r=n.position,s=n.x-r.x,o=s+n.dx,a=n.y-r.y,l=a+n.dy,c=n.subject;if(e==="rect"){var u=c.width,h=c.height;(u>0&&n.dx>0||u<0&&n.dx<0)&&(Math.abs(u)>Math.abs(n.dx)?s=u/2:s=u),(h>0&&n.dy>0||h<0&&n.dy<0)&&(Math.abs(h)>Math.abs(n.dy)?a=h/2:a=h),s===u/2&&a===h/2&&(s=o,a=l)}var f=[[s,a],[o,l]],d=l-a,p=o-s,m=o,g=l,_=l<a&&o>s||o<s&&l>a?-1:1;if(Math.abs(p)<Math.abs(d)?(m=o,g=a+p*_):(g=l,m=s+d*_),e==="circle"&&(c.outerRadius||c.radius)){var y=(c.outerRadius||c.radius)+(c.radiusPadding||0),M=y/Math.sqrt(2);if(Math.abs(p)>M&&Math.abs(d)>M)s=M*(o<0?-1:1),a=M*(l<0?-1:1),f=[[s,a],[m,g],[o,l]];else if(Math.abs(p)>Math.abs(d)){var x=Math.asin(-l/y);s=Math.abs(Math.cos(x)*y)*(o<0?-1:1),f=[[s,l],[o,l]]}else{var S=Math.acos(o/y);a=Math.abs(Math.sin(S)*y)*(l<0?-1:1),f=[[o,a],[o,l]]}}else f=[[s,a],[m,g],[o,l]];return{components:[ji({data:f,className:"connector"})]}}),t2=(function(i){var t=i.type,e=i.connectorData,n=i.subjectType;e||(e={}),(!e.points||typeof e.points=="number")&&(e.points=e2(t.annotation.offset,e.points)),e.curve||(e.curve=BR);var r=[];if(t.editMode){var s=e.points.map(function(c,u){return kn({},WR({cx:c[0],cy:c[1]}),{index:u})}),o=function(u){e.points[u][0]+=ne.dx,e.points[u][1]+=ne.dy,t.redrawConnector()};r=t.mapHandles(s.map(function(c){return kn({},c.move,{drag:o.bind(t,c.index)})}))}var a=ax({type:t,subjectType:n});a=[a[0]].concat(VR(e.points),[a[1]]);var l=[ji({data:a,curve:e.curve,className:"connector"})];return{components:l,handles:r}}),e2=function(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n={x:t.x/(e+1),y:t.y/(e+1)},r=[],s=1;s<=e;s++)r.push([n.x*s+s%2*20,n.y*s-s%2*20]);return r},n2=(function(i){var t=i.annotation,e=i.start,n=i.end,r=i.scale,s=r===void 0?1:r,o=t.position;e?e=[-n[0]+e[0],-n[1]+e[1]]:e=[t.dx,t.dy],n||(n=[t.x-o.x,t.y-o.y]);var a=n[0],l=n[1],c=e[0],u=e[1],h=10*s,f=16/180*Math.PI,d=Math.atan(u/c);c<0&&(d+=Math.PI);var p=[[a,l],[Math.cos(d+f)*h+a,Math.sin(d+f)*h+l],[Math.cos(d-f)*h+a,Math.sin(d-f)*h+l],[a,l]];return{components:[ji({data:p,className:"connector-end connector-arrow",classID:"connector-end"})]}}),i2=(function(i){var t=i.line,e=i.scale,n=e===void 0?1:e,r=mc({className:"connector-end connector-dot",classID:"connector-end",data:{radius:3*Math.sqrt(n)}});return r.attrs.transform="translate("+t.data[0][0]+", "+t.data[0][1]+")",{components:[r]}}),r2=(function(i){var t=i.subjectData,e=i.type;!t.radius&&!t.outerRadius&&(t.radius=20);var n=[],r=mc({data:t,className:"subject"});if(e.editMode){var s=XR({r1:r.data.outerRadius||r.data.radius,r2:r.data.innerRadius,padding:t.radiusPadding}),o=function(c){var u=t[c]+ne.dx*Math.sqrt(2);t[c]=u,e.redrawSubject(),e.redrawConnector()},a=[kn({},s.r1,{drag:o.bind(e,t.outerRadius!==void 0?"outerRadius":"radius")})];t.innerRadius&&a.push(kn({},s.r2,{drag:o.bind(e,"innerRadius")})),n=e.mapHandles(a)}return r.attrs["fill-opacity"]=0,{components:[r],handles:n}}),s2=(function(i){var t=i.subjectData,e=i.type;t.width||(t.width=100),t.height||(t.height=100);var n=[],r=t.width,s=t.height,o=[[0,0],[r,0],[r,s],[0,s],[0,0]],a=ji({data:o,className:"subject"});if(e.editMode){var l=function(){t.width=ne.x,e.redrawSubject(),e.redrawConnector()},c=function(){t.height=ne.y,e.redrawSubject(),e.redrawConnector()},u=[{x:r,y:s/2,drag:l.bind(e)},{x:r/2,y:s,drag:c.bind(e)}];n=e.mapHandles(u)}return a.attrs["fill-opacity"]=.1,{components:[a],handles:n}}),a2=(function(i){var t=i.subjectData,e=i.type,n=e.annotation.position,r=(t.x1!==void 0?t.x1:n.x)-n.x,s=(t.x2!==void 0?t.x2:n.x)-n.x,o=(t.y1!==void 0?t.y1:n.y)-n.y,a=(t.y2!==void 0?t.y2:n.y)-n.y,l=[[r,o],[s,a]];return{components:[ji({data:l,className:"subject"})]}}),o2=(function(i){var t=i.subjectData,e=t===void 0?{}:t,n=i.type,r=n===void 0?{}:n,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.typeSettings&&r.typeSettings.subject;e.radius||(o&&o.radius?e.radius=o.radius:e.radius=14),e.x||o&&o.x&&(e.x=o.x),e.y||o&&o.y&&(e.y=o.y);var a=[],l=[],c=e.radius,u=c*.7,h=0,f=0,d=Math.sqrt(2)*c,p={xleftcorner:-c,xrightcorner:c,ytopcorner:-c,ybottomcorner:c,xleft:-d,xright:d,ytop:-d,ybottom:d};e.x&&!e.y?h=p["x"+e.x]:e.y&&!e.x?f=p["y"+e.y]:e.x&&e.y&&(h=p["x"+e.x+"corner"],f=p["y"+e.y+"corner"]);var m="translate("+h+", "+f+")",g=mc({className:"subject",data:{radius:c}});g.attrs.transform=m,g.attrs.fill=s.color,g.attrs["stroke-linecap"]="round",g.attrs["stroke-width"]="3px";var _=mc({className:"subject-ring",data:{outerRadius:c,innerRadius:u}});_.attrs.transform=m,_.attrs["stroke-width"]="3px",_.attrs.fill="white";var y=void 0;if(h&&f||!h&&!f)y=ji({className:"subject-pointer",data:[[0,0],[h||0,0],[0,f||0],[0,0]]});else if(h||f){var M=function(R){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return R&&R/Math.sqrt(2)/Math.sqrt(2)||v*c/Math.sqrt(2)};y=ji({className:"subject-pointer",data:[[0,0],[M(h),M(f)],[M(h,-1),M(f,-1)],[0,0]]})}if(y&&(y.attrs.fill=s.color,y.attrs["stroke-linecap"]="round",y.attrs["stroke-width"]="3px",l.push(y)),r.editMode){var x=function(){e.x=ne.x<-c*2?"left":ne.x>c*2?"right":void 0,e.y=ne.y<-c*2?"top":ne.y>c*2?"bottom":void 0,r.redrawSubject()},S={x:h*2,y:f*2,drag:x.bind(r)};!S.x&&!S.y&&(S.y=-c),a=r.mapHandles([S])}var b=void 0;return e.text&&(b={type:"text",className:"badge-text",attrs:{fill:"white",stroke:"none","font-size":".7em",text:e.text,"text-anchor":"middle",dy:".25em",x:h,y:f}}),l.push(g),l.push(_),l.push(b),{components:l,handles:a}}),ox=(function(){function i(t){var e=t.a,n=t.annotation,r=t.editMode,s=t.dispatcher,o=t.notePadding,a=t.accessors;if(wa(this,i),this.a=e,this.note=n.disable.indexOf("note")===-1&&e.select("g.annotation-note"),this.noteContent=this.note&&e.select("g.annotation-note-content"),this.connector=n.disable.indexOf("connector")===-1&&e.select("g.annotation-connector"),this.subject=n.disable.indexOf("subject")===-1&&e.select("g.annotation-subject"),this.dispatcher=s,s){var l=u2.bind(null,s,n);l({component:this.note,name:"note"}),l({component:this.connector,name:"connector"}),l({component:this.subject,name:"subject"})}this.annotation=n,this.editMode=n.editMode||r,this.notePadding=o!==void 0?o:3,this.offsetCornerX=0,this.offsetCornerY=0,a&&n.data&&this.init(a)}return Aa(i,[{key:"init",value:function(e){this.annotation.x||this.mapX(e),this.annotation.y||this.mapY(e)}},{key:"mapY",value:function(e){e.y&&(this.annotation.y=e.y(this.annotation.data))}},{key:"mapX",value:function(e){e.x&&(this.annotation.x=e.x(this.annotation.data))}},{key:"updateEditMode",value:function(){this.a.selectAll("circle.handle").remove()}},{key:"drawOnSVG",value:function(e,n){var r=this;Array.isArray(n)||(n=[n]),n.filter(function(s){return s}).forEach(function(s){var o=s.type,a=s.className,l=s.attrs,c=s.handles,u=s.classID;if(o==="handle")$R({group:e,r:l&&l.r,handles:c});else{Bi(e,[r.annotation],o,a,u);for(var h=e.select(o+"."+(u||a)),f=Object.keys(l),d=[],p=h.node().attributes,m=p.length-1;m>=0;m--){var g=p[m].name;f.indexOf(g)===-1&&g!=="class"&&d.push(g)}f.forEach(function(_){_==="text"?h.text(l[_]):h.attr(_,l[_])}),d.forEach(function(_){return h.attr(_,null)})}})}},{key:"getNoteBBox",value:function(){return eg(this.note,".annotation-note-content text")}},{key:"getNoteBBoxOffset",value:function(){var e=eg(this.note,".annotation-note-content"),n=this.noteContent.attr("transform").split(/\(|\,|\)/g);return e.offsetCornerX=parseFloat(n[1])+this.annotation.dx,e.offsetCornerY=parseFloat(n[2])+this.annotation.dy,e.offsetX=this.annotation.dx,e.offsetY=this.annotation.dy,e}},{key:"drawSubject",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=this.annotation.subject,s=n.type,o={type:this,subjectData:r},a={};s==="circle"?a=r2(o):s==="rect"?a=s2(o):s==="threshold"?a=a2(o):s==="badge"&&(a=o2(o,this.annotation));var l=a,c=l.components,u=c===void 0?[]:c,h=l.handles,f=h===void 0?[]:h;return u.forEach(function(d){d&&d.attrs&&!d.attrs.stroke&&(d.attrs.stroke=e.annotation.color)}),this.editMode&&(f=f.concat(this.mapHandles([{drag:this.dragSubject.bind(this)}])),u.push({type:"handle",handles:f})),u}},{key:"drawConnector",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=this.annotation.connector,s=r.type||n.type,o={type:this,connectorData:r};o.subjectType=this.typeSettings&&this.typeSettings.subject&&this.typeSettings.subject.type;var a={};s==="curve"?a=t2(o):s==="elbow"?a=QR(o):a=JR(o);var l=a,c=l.components,u=c===void 0?[]:c,h=l.handles,f=h===void 0?[]:h,d=u[0];d&&(d.attrs.stroke=this.annotation.color,d.attrs.fill="none");var p=r.end||n.end,m={};if(p==="arrow"){var g=d.data[1],_=d.data[0],y=Math.sqrt(Math.pow(g[0]-_[0],2)+Math.pow(g[1]-_[1],2));y<5&&d.data[2]&&(g=d.data[2]),m=n2({annotation:this.annotation,start:g,end:_,scale:r.endScale})}else p==="dot"?m=i2({line:d,scale:r.endScale}):(!p||p==="none")&&this.connector&&this.connector.select(".connector-end").remove();return m.components&&(m.components.forEach(function(M){M.attrs.fill=e.annotation.color,M.attrs.stroke=e.annotation.color}),u=u.concat(m.components)),this.editMode&&f.length!==0&&u.push({type:"handle",handles:f}),u}},{key:"drawNote",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=this.annotation.note,s=r.align||n.align||"dynamic",o={bbox:n.bbox,align:s,offset:this.annotation.offset},a=r.lineType||n.lineType,l={};a==="vertical"?l=KR(o):a==="horizontal"&&(l=ZR(o));var c=l,u=c.components,h=u===void 0?[]:u,f=c.handles,d=f===void 0?[]:f;if(h.forEach(function(_){_.attrs.stroke=e.annotation.color}),this.editMode){d=this.mapHandles([{x:0,y:0,drag:this.dragNote.bind(this)}]),h.push({type:"handle",handles:d});var p=this.dragNote.bind(this),m=this.dragstarted.bind(this),g=this.dragended.bind(this);this.note.call(Z0().container(Wr("g.annotations").node()).on("start",function(_){return m(_)}).on("drag",function(_){return p(_)}).on("end",function(_){return g(_)}))}else this.note.on("mousedown.drag",null);return h}},{key:"drawNoteContent",value:function(e){var n=this.annotation.note,r=n.padding!==void 0?n.padding:this.notePadding,s=n.orientation||e.orientation||"topBottom",o=n.lineType||e.lineType,a=n.align||e.align||"dynamic";o==="vertical"?s="leftRight":o==="horizontal"&&(s="topBottom");var l={padding:r,bbox:e.bbox,offset:this.annotation.offset,orientation:s,align:a},c=jR(l),u=c.x,h=c.y;return this.offsetCornerX=u+this.annotation.dx,this.offsetCornerY=h+this.annotation.dy,this.note&&this.noteContent.attr("transform","translate("+u+", "+h+")"),[]}},{key:"drawOnScreen",value:function(e,n){return this.drawOnSVG(e,n)}},{key:"redrawSubject",value:function(){this.subject&&this.drawOnScreen(this.subject,this.drawSubject())}},{key:"redrawConnector",value:function(){this.connector&&this.drawOnScreen(this.connector,this.drawConnector())}},{key:"redrawNote",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getNoteBBox();this.noteContent&&this.drawOnScreen(this.noteContent,this.drawNoteContent({bbox:e})),this.note&&this.drawOnScreen(this.note,this.drawNote({bbox:e}))}},{key:"setPosition",value:function(){var e=this.annotation.position;this.a.attr("transform","translate("+e.x+", "+e.y+")")}},{key:"clearComponents",value:function(){this.subject&&this.subject.select("*").remove(),this.connector&&this.connector.select("*").remove()}},{key:"setOffset",value:function(){if(this.note){var e=this.annotation.offset;this.note.attr("transform","translate("+e.x+", "+e.y+")")}}},{key:"setPositionWithAccessors",value:function(e){e&&this.annotation.data&&(this.mapX(e),this.mapY(e)),this.setPosition()}},{key:"setClassName",value:function(){this.a.attr("class","annotation "+(this.className&&this.className())+" "+(this.editMode?"editable":"")+" "+(this.annotation.className||""))}},{key:"draw",value:function(){this.setClassName(),this.setPosition(),this.setOffset(),this.redrawSubject(),this.redrawConnector(),this.redrawNote()}},{key:"dragstarted",value:function(){ne.sourceEvent.stopPropagation(),this.dispatcher&&this.dispatcher.call("dragstart",this.a,this.annotation),this.a.classed("dragging",!0),this.a.selectAll("circle.handle").style("pointer-events","none")}},{key:"dragended",value:function(){this.dispatcher&&this.dispatcher.call("dragend",this.a,this.annotation),this.a.classed("dragging",!1),this.a.selectAll("circle.handle").style("pointer-events","all")}},{key:"dragSubject",value:function(){var e=this.annotation.position;e.x+=ne.dx,e.y+=ne.dy,this.annotation.position=e}},{key:"dragNote",value:function(){var e=this.annotation.offset;e.x+=ne.dx,e.y+=ne.dy,this.annotation.offset=e}},{key:"mapHandles",value:function(e){var n=this;return e.map(function(r){return kn({},r,{start:n.dragstarted.bind(n),end:n.dragended.bind(n)})})}}]),i})(),$r=function(t,e,n){return(function(r){Td(s,r);function s(o){wa(this,s);var a=wd(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,o));return a.typeSettings=e,e.disable&&e.disable.forEach(function(l){a[l]&&a[l].remove(),a[l]=void 0,l==="note"&&(a.noteContent=void 0)}),a}return Aa(s,[{key:"className",value:function(){return""+(e.className||ir(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"className",this)&&ir(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"className",this).call(this)||"")}},{key:"drawSubject",value:function(a){return this.typeSettings.subject=kn({},e.subject,this.typeSettings.subject),ir(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawSubject",this).call(this,kn({},a,this.typeSettings.subject))}},{key:"drawConnector",value:function(a){return this.typeSettings.connector=kn({},e.connector,this.typeSettings.connector),ir(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawConnector",this).call(this,kn({},a,e.connector,this.typeSettings.connector))}},{key:"drawNote",value:function(a){return this.typeSettings.note=kn({},e.note,this.typeSettings.note),ir(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawNote",this).call(this,kn({},a,e.note,this.typeSettings.note))}},{key:"drawNoteContent",value:function(a){return ir(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawNoteContent",this).call(this,kn({},a,e.note,this.typeSettings.note))}}],[{key:"init",value:function(a,l){return ir(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,a,l),n&&(a=n(a,l)),a}}]),s})(t)},Rc=(function(i){Td(t,i);function t(e){wa(this,t);var n=wd(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.textWrap=e.textWrap||120,n.drawText(),n}return Aa(t,[{key:"updateTextWrap",value:function(n){this.textWrap=n,this.drawText()}},{key:"drawText",value:function(){if(this.note){Bi(this.note,[this.annotation],"g","annotation-note-content");var n=this.note.select("g.annotation-note-content");Bi(n,[this.annotation],"rect","annotation-note-bg"),Bi(n,[this.annotation],"text","annotation-note-label"),Bi(n,[this.annotation],"text","annotation-note-title");var r={height:0},s=this.a.select("text.annotation-note-label"),o=this.annotation.note&&this.annotation.note.wrap||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.wrap||this.textWrap,a=this.annotation.note&&this.annotation.note.wrapSplitter||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.wrapSplitter,l=this.annotation.note&&this.annotation.note.bgPadding||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.bgPadding,c={top:0,bottom:0,left:0,right:0};if(typeof l=="number"?c={top:l,bottom:l,left:l,right:l}:l&&(typeof l>"u"?"undefined":zR(l))==="object"&&(c=kn(c,l)),this.annotation.note.title){var u=this.a.select("text.annotation-note-title");u.text(this.annotation.note.title),u.attr("fill",this.annotation.color),u.attr("font-weight","bold"),u.call(tg,o,a),r=u.node().getBBox()}s.text(this.annotation.note.label).attr("dx","0"),s.call(tg,o,a),s.attr("y",r.height*1.1||0),s.attr("fill",this.annotation.color);var h=this.getNoteBBox();this.a.select("rect.annotation-note-bg").attr("width",h.width+c.left+c.right).attr("height",h.height+c.top+c.bottom).attr("x",h.x-c.left).attr("y",-c.top).attr("fill","white").attr("fill-opacity",0)}}}]),t})(ox);$r(Rc,{className:"label",note:{align:"middle"}});var Pc=$r(Rc,{className:"callout",note:{lineType:"horizontal"}}),Fu=$r(Pc,{className:"callout elbow",connector:{type:"elbow"}}),l2=$r(Pc,{className:"callout curve",connector:{type:"curve"}});$r(ox,{className:"badge",subject:{type:"badge"},disable:["connector","note"]});$r(Rc,{className:"callout circle",subject:{type:"circle"},note:{lineType:"horizontal"},connector:{type:"elbow"}});$r(Rc,{className:"callout rect",subject:{type:"rect"},note:{lineType:"horizontal"},connector:{type:"elbow"}});var c2=(function(i){Td(t,i);function t(){return wa(this,t),wd(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Aa(t,[{key:"mapY",value:function(n){ir(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"mapY",this).call(this,n);var r=this.annotation;(r.subject.x1||r.subject.x2)&&r.data&&n.y&&(r.y=n.y(r.data)),(r.subject.x1||r.subject.x2)&&!r.x&&(r.x=r.subject.x1||r.subject.x2)}},{key:"mapX",value:function(n){ir(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"mapX",this).call(this,n);var r=this.annotation;(r.subject.y1||r.subject.y2)&&r.data&&n.x&&(r.x=n.x(r.data)),(r.subject.y1||r.subject.y2)&&!r.y&&(r.y=r.subject.y1||r.subject.y2)}}]),t})(Pc),Qm=$r(c2,{className:"callout xythreshold",subject:{type:"threshold"}}),Bi=function(t,e,n,r,s){var o=t.selectAll(n+"."+(s||r)).data(e);return o.enter().append(n).merge(o).attr("class",r),o.exit().remove(),t},u2=function(t,e,n){var r=n.component,s=n.name;r&&r.on("mouseover.annotations",function(){t.call(s+"over",r,e)}).on("mouseout.annotations",function(){return t.call(s+"out",r,e)}).on("click.annotations",function(){return t.call(s+"click",r,e)})},tg=function(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1.2;t.each(function(){for(var s=Wr(this),o=s.text().split(n||/[ \t\r\n]+/).reverse().filter(function(u){return u!==""}),a=void 0,l=[],c=s.text(null).append("tspan").attr("x",0).attr("dy",.8+"em");a=o.pop();)l.push(a),c.text(l.join(" ")),c.node().getComputedTextLength()>e&&l.length>1&&(l.pop(),c.text(l.join(" ")),l=[a],c=s.append("tspan").attr("x",0).attr("dy",r+"em").text(a))})},eg=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:":not(.handle)";return t?t.selectAll(e).nodes().reduce(function(n,r){var s=r.getBBox();n.x=Math.min(n.x,s.x),n.y=Math.min(n.y,s.y),n.width=Math.max(n.width,s.width);var o=r&&r.attributes&&r.attributes.y;return n.height=Math.max(n.height,(o&&parseFloat(o.value)||0)+s.height),n},{x:0,y:0,width:0,height:0}):{x:0,y:0,width:0,height:0}};function ng(){var i=[],t=void 0,e=void 0,n=[],r={},s={},o=!1,a=void 0,l=Pc,c=void 0,u=void 0,h=xd("subjectover","subjectout","subjectclick","connectorover","connectorout","connectorclick","noteover","noteout","noteclick","dragend","dragstart"),f=void 0,d=function(m){f=m,o||m.selectAll("circle.handle").remove();var g=i.map(function(x){return x.type||(x.type=l),x.disable||(x.disable=n),new HR(x)});t=t||new GR({annotations:g,accessors:r,accessorsInverse:s,ids:a});var _=m.selectAll("g").data([t]);_.enter().append("g").attr("class","annotations");var y=m.select("g.annotations");Bi(y,t.annotations,"g","annotation");var M=y.selectAll("g.annotation");M.each(function(x){var S=Wr(this);S.attr("class","annotation"),Bi(S,[x],"g","annotation-connector"),Bi(S,[x],"g","annotation-subject"),Bi(S,[x],"g","annotation-note"),Bi(S.select("g.annotation-note"),[x],"g","annotation-note-content"),x.type=x.type.toString()==="[object Object]"?x.type:new x.type({a:S,annotation:x,textWrap:c,notePadding:u,editMode:o,dispatcher:h,accessors:r}),x.type.draw(),x.type.drawText&&x.type.drawText()})};return d.json=function(){return console.log("Annotations JSON was copied to your clipboard. Please note the annotation type is not JSON compatible. It appears in the objects array in the console, but not in the copied JSON.",t.json),window.copy(JSON.stringify(t.json.map(function(p){return delete p.type,p}))),d},d.update=function(){return i&&t&&(i=t.annotations.map(function(p){return p.type.draw(),p})),d},d.updateText=function(){return t&&(t.updateText(c),i=t.annotations),d},d.updatedAccessors=function(){return t.setPositionWithAccessors(),i=t.annotations,d},d.disable=function(p){return arguments.length?(n=p,t&&(t.updateDisable(n),i=t.annotations),d):n},d.textWrap=function(p){return arguments.length?(c=p,t&&(t.updateTextWrap(c),i=t.annotations),d):c},d.notePadding=function(p){return arguments.length?(u=p,t&&(t.updateNotePadding(u),i=t.annotations),d):u},d.type=function(p,m){return arguments.length?(l=p,t&&(t.annotations.map(function(g){g.type.note&&g.type.note.selectAll("*:not(.annotation-note-content)").remove(),g.type.noteContent&&g.type.noteContent.selectAll("*").remove(),g.type.subject&&g.type.subject.selectAll("*").remove(),g.type.connector&&g.type.connector.selectAll("*").remove(),g.type.typeSettings={},g.type=l,g.subject=m&&m.subject||g.subject,g.connector=m&&m.connector||g.connector,g.note=m&&m.note||g.note}),i=t.annotations),d):l},d.annotations=function(p){if(!arguments.length)return t&&t.annotations||i;if(i=p,t&&t.annotations){var m=i.some(function(g){return!g.type||g.type.toString()!=="[object Object]"});m?(t=null,d(f)):t.annotations=i}return d},d.context=function(p){return arguments.length?(e=p,d):e},d.accessors=function(p){return arguments.length?(r=p,d):r},d.accessorsInverse=function(p){return arguments.length?(s=p,d):s},d.ids=function(p){return arguments.length?(a=p,d):a},d.editMode=function(p){return arguments.length?(o=p,f&&f.selectAll("g.annotation").classed("editable",o),t&&(t.editMode(o),i=t.annotations),d):o},d.collection=function(p){return arguments.length?(t=p,d):t},d.on=function(){var p=h.on.apply(h,arguments);return p===h?d:p},d}const Ou=1440,ku=900,Sl=24,h2=768,ig=56,f2=130,Ii={color:"#374151",lineOpacity:.8,lineDash:"4 4",wrapWidth:140,verticalLine:{dx:30,dy:-40},horizontalLine:{dx:40,dy:-20},callout:{dx:50,dy:-30}};class d2{constructor(t){this.container=t,this.svg=null,this.root=null,this.dataCache=new Map,this.lineSpanState=new Map,this.onResize=()=>{},window.addEventListener("resize",this.onResize)}async render(t,e={}){if(!t?.visible)return;const n=this.normalizeChartConfig(t,e);if(this.ensureSvg(),!this.root)return;this.root.selectAll("*").remove(),this.drawBackdrop();const r=window.innerWidth<h2,s=this.buildPanelSpecs(n,r);if(s.length===0)return;const o=s.filter(a=>a.chart).map(async a=>{const l=await this.loadDataset(a.chart);this.renderChart(a,l)});await Promise.all(o)}normalizeChartConfig(t,e={}){const n=t.layout||(Array.isArray(t.charts)&&t.charts.length===2?"dual":"single"),r=t.span||(e.spanId?{id:e.spanId}:null),s=!!e.transitionFromPrevious,o=Array.isArray(t.charts)&&t.charts.length>0?t.charts.map(a=>({...a,span:r,transitionFromPrevious:s})):[{id:t.id||"chart-1",type:t.type||"line",dataFile:t.dataFile,dataFormat:t.dataFormat||"auto",config:t.config||{},span:r,transitionFromPrevious:s}];return{visible:t.visible,layout:n,responsive:t.responsive||{mobileStack:!0},grid:t.grid||null,charts:o,position:t.position||null}}buildPanelSpecs(t,e){const n=t.charts||[];if(n.length===0)return[];const r=this.getPlotBounds(),s=t.responsive?.mobileStack!==!1,o=e&&s&&(t.layout==="dual"||t.layout==="grid");if(t.layout==="single"||o)return this.buildStackedPanels(n,r);if(t.layout==="dual"){const a=t.dualTitle||null,l=a?32:0;a&&this.root&&this.root.append("text").attr("x",r.left+(r.right-r.left)/2).attr("y",r.top+20).attr("text-anchor","middle").attr("fill","#1f2937").attr("font-size",16).attr("font-weight",700).text(a);const c=l?{...r,top:r.top+l}:r;return this.buildDualPanels(n,c)}return t.layout==="grid"?this.buildGridPanels(n,t.grid||{},r):this.buildStackedPanels(n,r)}getPlotBounds(){const e=document.getElementById("header-nav")?.offsetHeight??ig,n=Math.min(Math.max(e,ig),f2);return{left:Sl,right:Ou-Sl,top:Sl+n,bottom:ku-Sl}}buildStackedPanels(t,e){const n=t.length,r=20,o=(e.bottom-e.top-r*(n-1))/n;return t.map((a,l)=>({chart:a,x:e.left,y:e.top+l*(o+r),width:e.right-e.left,height:o}))}buildDualPanels(t,e){const s=Math.ceil(t.length/2),o=(e.right-e.left-20)/2,a=(e.bottom-e.top-20*(s-1))/s;return t.map((l,c)=>{const u=c%2,h=Math.floor(c/2);return{chart:l,x:e.left+u*(o+20),y:e.top+h*(a+20),width:o,height:a}})}buildGridPanels(t,e,n){const r=e.allowEmptyCells!==!1,s=Array.isArray(e.rowPattern)&&e.rowPattern.length>0?e.rowPattern:this.makeDefaultRowPattern(e,t.length),o=Array.isArray(e.rowTitles)?e.rowTitles:[],a=e.title?32:0;e.title&&this.root&&this.root.append("text").attr("x",n.left+(n.right-n.left)/2).attr("y",n.top+20).attr("text-anchor","middle").attr("fill","#1f2937").attr("font-size",16).attr("font-weight",700).text(e.title);const l=Math.max(...s),c=18,u=18,h=s.length,f=n.right-n.left,d=n.bottom-n.top-a,p=o.length>0?22:0,m=(d-p*h-c*(h-1))/h,g=(f-u*(l-1))/l,_=[];let y=0;return s.forEach((M,x)=>{const S=n.top+a+x*(m+p+c);o[x]&&this.root&&this.root.append("text").attr("x",n.left+f/2).attr("y",S+15).attr("text-anchor","middle").attr("fill","#4b5563").attr("font-size",14).attr("font-weight",600).text(o[x]);const b=S+p,w=M*g+(M-1)*u,R=n.left+(f-w)/2;for(let v=0;v<M;v+=1){const E=t[y]||null;if(!E&&!r)break;_.push({chart:E,x:R+v*(g+u),y:b,width:g,height:m,_gridIndex:_.length}),E&&(y+=1)}}),_}makeDefaultRowPattern(t,e){const n=Number.isFinite(t.columns)?Math.max(1,t.columns):e,r=Number.isFinite(t.rows)?Math.max(1,t.rows):Math.ceil(e/n),s=[];for(let o=0;o<r;o+=1){const a=e-o*n;a<=0?s.push(n):s.push(Math.min(n,a))}return s}async loadDataset(t){const e=t.dataFile;if(!e)return null;const n="/prj-jcie/",r=e.startsWith("/")?e.slice(1):e,s=`${n}${r}`,o=(t.dataFormat||"auto").toLowerCase(),a=o==="auto"?this.detectFormatFromPath(s):o,l=`${a}:${s}`;if(this.dataCache.has(l))return this.dataCache.get(l);let c;if(a==="json")c=await Bu(s);else if(a==="csv")c=await fv(s,ov);else throw new Error(`Unsupported data format: ${a}`);return this.dataCache.set(l,c),c}detectFormatFromPath(t){if(t.endsWith(".json"))return"json";if(t.endsWith(".csv"))return"csv";throw new Error(`Cannot detect data format from path: ${t}`)}renderChart(t,e){if(!t.chart){this.drawEmptyPanel(t);return}const n=t.chart.type||"line";try{n==="line"?this.renderLine(t,e,t.chart.config||{},t.chart):n==="pie"?this.renderPie(t,e,t.chart.config||{}):n==="sankey"?this.renderSankey(t,e,t.chart.config||{}):n==="venn"?this.renderVenn(t,e,t.chart.config||{}):n==="bump"?this.renderBump(t,e,t.chart.config||{}):n==="streamgraph"?this.renderStreamgraph(t,e,t.chart.config||{}):this.renderUnsupported(t,`未対応チャート: ${n}`)}catch(r){this.renderUnsupported(t,`描画エラー: ${n}`),console.error(r)}}renderLine(t,e,n,r={}){if(!Array.isArray(e)){this.renderUnsupported(t,"lineデータ形式が不正です");return}const s=n.xField||"year",o=n.yField||"value",a=n.seriesField||"series",l=e.filter(at=>Number.isFinite(Number(at[s]))&&(Number.isFinite(Number(at[o]))||at[o]==null||String(at[o]).trim()===""||String(at[o]).trim()==="―"));if(l.length===0){this.renderUnsupported(t,"lineデータが空です");return}const c=Ld(l,at=>Number(at[s])),u=Array.isArray(n.xDomain)&&n.xDomain.length===2?[Number(n.xDomain[0]),Number(n.xDomain[1])]:null,h=u&&u.every(Number.isFinite)?[Math.min(u[0],u[1]),Math.max(u[0],u[1])]:[Number(c[0]),Number(c[1])];if(!h.every(Number.isFinite)||h[0]===h[1]){this.renderUnsupported(t,"lineのx軸設定が不正です");return}const f=l.filter(at=>{const Rt=Number(at[s]);return Rt>=h[0]&&Rt<=h[1]});if(f.length===0){this.renderUnsupported(t,"lineデータが空です");return}const d=Ra(f,at=>Number(at[o]))||0,p=Array.isArray(n.yDomain)&&n.yDomain.length===2?n.yDomain.map(Number):null,m=rs().domain(p||[0,d*1.1]).nice(),g=p||m.domain(),_=r?.span?.id,y=_==null?null:String(_).trim(),M=!!(r?.transitionFromPrevious&&y),x=M?this.lineSpanState.get(y):null,S=x?.xDomain||h,b=x?.yDomain||g,w=n.title||"折れ線グラフ",R=this.createPanelInner(t,w),v=R.width,E=R.height,D=Ix(f,at=>at[a]==null?"__single__":String(at[a])),C=D.length>1&&D.some(([at])=>at!=="__single__"),L=C?this.resolveLineLabelGutter(v):0,U=this.resolveYAxisLabelGutter(f,o),V=6,z=24,I=Math.max(80,v-U-L),k=Math.max(80,E-V-z),X=R.group.append("g").attr("transform",`translate(${U}, ${V})`),P=rs().domain(S).range([0,I]),Y=rs().domain(b).range([k,0]),pt=Ic(P).ticks(5).tickFormat(hi("d")),yt=Od(Y).ticks(5),nt=at=>at.selectAll("text").attr("fill","#4b5563").attr("font-size",11),et=at=>at.selectAll("line,path").attr("stroke","#d1d5db").attr("opacity",.5);let G=null;if(n.gridLines!==!1){G=X.append("g").attr("class","grid-lines");const at=Y.ticks(5);G.selectAll("line").data(at).enter().append("line").attr("x1",0).attr("y1",Rt=>Y(Rt)).attr("x2",I).attr("y2",Rt=>Y(Rt)).attr("stroke","#d1d5db").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}const j=X.append("g").attr("transform",`translate(0, ${k})`).call(pt).call(nt).call(et),rt=X.append("g").call(yt).call(nt).call(et),gt=at=>at[o]!=null&&at[o]!==""&&Number.isFinite(Number(at[o])),mt=$u().defined(gt).x(at=>P(Number(at[s]))).y(at=>Y(Number(at[o]))).curve(ip),Ut=n.areaFill!==!1?Jd().defined(gt).x(at=>P(Number(at[s]))).y0(k).y1(at=>Y(Number(at[o]))).curve(ip):null;if(!C){const at=this.getThemePrimary();let Rt=null;if(Ut){const N=`area-grad-single-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",N).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:at,opacity:.25},{offset:"100%",color:at,opacity:0}]).enter().append("stop").attr("offset",T=>T.offset).attr("stop-color",T=>T.color).attr("stop-opacity",T=>T.opacity),Rt=X.append("path").datum(f).attr("fill",`url(#${N})`).attr("opacity",0).attr("d",Ut)}const Dt=X.append("path").datum(f).attr("fill","none").attr("stroke",at).attr("stroke-width",2.5).attr("d",mt),St=X.selectAll(".point").data(f.filter(gt)).enter().append("circle").attr("cx",N=>P(Number(N[s]))).attr("cy",N=>Y(Number(N[o]))).attr("r",2.7).attr("fill",at);if(M&&x){P.domain(h),Y.domain(g);const N=Rd().duration(850).ease(Pd);if(G){G.selectAll("line").remove();const T=Y.ticks(5);G.selectAll("line").data(T).enter().append("line").attr("x1",0).attr("y1",B=>Y(B)).attr("x2",I).attr("y2",B=>Y(B)).attr("stroke","#d1d5db").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}j.transition(N).call(pt).call(nt).call(et),rt.transition(N).call(yt).call(nt).call(et),Dt.transition(N).attr("d",mt).on("end",()=>{this.renderLineAnnotations(X,P,Y,I,k,n.annotations)}),Rt&&Rt.transition(N).attr("d",Ut).attr("opacity",1),St.transition(N).attr("cx",T=>P(Number(T[s]))).attr("cy",T=>Y(Number(T[o])))}else{this.renderLineAnnotations(X,P,Y,I,k,n.annotations);const N=Dt.node()?.getTotalLength()||0;Dt.attr("stroke-dasharray",`${N} ${N}`).attr("stroke-dashoffset",N).transition().duration(700).ease(Fn).attr("stroke-dashoffset",0),Rt&&Rt.transition().duration(700).ease(Fn).attr("opacity",1)}this.attachLineTooltip(X,[{name:"__single__",values:f}],P,Y,I,k,s,o,()=>at),y&&this.lineSpanState.set(y,{xDomain:[...h],yDomain:[...g]});return}const $t=D.map(([at,Rt])=>({name:at,values:[...Rt].sort((Dt,St)=>Number(Dt[s])-Number(St[s]))})).filter(at=>at.values.length>0),Mt=this.buildPalette($t.length),Ot=Za().domain($t.map(at=>at.name)).range(Mt),Vt=X.append("g").attr("class","line-series"),kt=[],$=[],O=[];if($t.forEach((at,Rt)=>{let Dt=null;if(Ut){const T=`area-grad-${Rt}-${t.x}-${t.y}`,B=Ot(at.name);this.defs.append("linearGradient").attr("id",T).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:B,opacity:.18},{offset:"100%",color:B,opacity:0}]).enter().append("stop").attr("offset",Q=>Q.offset).attr("stop-color",Q=>Q.color).attr("stop-opacity",Q=>Q.opacity),Dt=Vt.append("path").datum(at.values).attr("fill",`url(#${T})`).attr("opacity",0).attr("d",Ut)}O.push(Dt);const St=Vt.append("path").datum(at.values).attr("fill","none").attr("stroke",Ot(at.name)).attr("stroke-width",2.2).attr("d",mt);kt.push(St);const N=Vt.selectAll(`.point-${this.toSafeCssToken(at.name)}`).data(at.values.filter(gt)).enter().append("circle").attr("cx",T=>P(Number(T[s]))).attr("cy",T=>Y(Number(T[o]))).attr("r",2.2).attr("fill",Ot(at.name));$.push(N)}),M&&x){P.domain(h),Y.domain(g);const at=Rd().duration(850).ease(Pd);if(G){G.selectAll("line").remove();const Rt=Y.ticks(5);G.selectAll("line").data(Rt).enter().append("line").attr("x1",0).attr("y1",Dt=>Y(Dt)).attr("x2",I).attr("y2",Dt=>Y(Dt)).attr("stroke","#d1d5db").attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}j.transition(at).call(pt).call(nt).call(et),rt.transition(at).call(yt).call(nt).call(et),kt.forEach((Rt,Dt)=>{Rt.transition(at).attr("d",mt).on("end",()=>{Dt===0&&(this.renderLineAnnotations(X,P,Y,I,k,n.annotations),this.drawLineEndLabels(X,$t,Ot,P,Y,I,k,s,o))})}),O.forEach(Rt=>{Rt&&Rt.transition(at).attr("d",Ut).attr("opacity",1)}),$.forEach(Rt=>{Rt.transition(at).attr("cx",Dt=>P(Number(Dt[s]))).attr("cy",Dt=>Y(Number(Dt[o])))})}else this.renderLineAnnotations(X,P,Y,I,k,n.annotations),kt.forEach(at=>{const Rt=at.node()?.getTotalLength()||0;at.attr("stroke-dasharray",`${Rt} ${Rt}`).attr("stroke-dashoffset",Rt).transition().duration(700).ease(Fn).attr("stroke-dashoffset",0)}),O.forEach(at=>{at&&at.transition().duration(700).ease(Fn).attr("opacity",1)}),this.drawLineEndLabels(X,$t,Ot,P,Y,I,k,s,o);this.attachLineTooltip(X,$t,P,Y,I,k,s,o,at=>Ot(at)),y&&this.lineSpanState.set(y,{xDomain:[...h],yDomain:[...g]})}attachLineTooltip(t,e,n,r,s,o,a,l,c){const u=t.append("rect").attr("width",s).attr("height",o).attr("fill","none").style("pointer-events","all").style("cursor","crosshair"),h=t.append("line").attr("y1",0).attr("y2",o).attr("stroke","#ffffff").attr("stroke-opacity",0).attr("stroke-width",.8).attr("stroke-dasharray","3 3"),f=t.append("g").attr("class","line-tooltip").attr("opacity",0),d=[...new Set(e.flatMap(m=>m.values.map(g=>Number(g[a]))))].sort((m,g)=>m-g),p=Af(m=>m).left;u.on("mousemove",m=>{const[g]=Uc(m),_=n.invert(g),y=p(d,_),M=d[y-1],x=d[y],S=M==null?x:x==null||_-M<x-_?M:x;if(S==null)return;const b=n(S);h.attr("x1",b).attr("x2",b).attr("stroke-opacity",.3),f.selectAll("*").remove(),f.attr("opacity",1);let w=0;e.forEach(R=>{const v=R.values.find(U=>Number(U[a])===S);if(!v)return;const E=r(Number(v[l])),D=c(R.name);f.append("circle").attr("cx",b).attr("cy",E).attr("r",4).attr("fill",D).attr("stroke","#fff").attr("stroke-width",1.5);const C=b+8,L=12+w*16;f.append("rect").attr("x",C-2).attr("y",L-10).attr("width",70).attr("height",14).attr("rx",3).attr("fill","rgba(255,255,255,0.92)"),f.append("text").attr("x",C).attr("y",L).attr("fill",D).attr("font-size",10).attr("font-weight",500).text(hi(",")(Number(v[l]))),w+=1}),f.append("text").attr("x",b).attr("y",o+16).attr("text-anchor","middle").attr("fill","#4b5563").attr("font-size",10).text(hi("d")(S))}),u.on("mouseleave",()=>{h.attr("stroke-opacity",0),f.attr("opacity",0)})}drawLineEndLabels(t,e,n,r,s,o,a,l,c){if(!Array.isArray(e)||e.length===0)return;const u=o+10,h=12,f=8,d=Math.max(f,a-8),p=e.map(g=>{const _=g.values[g.values.length-1];if(!_)return null;const y=Number(_[l]),M=Number(_[c]);return!Number.isFinite(y)||!Number.isFinite(M)?null:{name:g.name,xEnd:r(y),yTarget:s(M),y:s(M)}}).filter(Boolean).sort((g,_)=>g.yTarget-_.yTarget);if(p.length===0)return;p.forEach((g,_)=>{_===0?g.y=Math.max(f,g.yTarget):g.y=Math.max(g.yTarget,p[_-1].y+h)}),p[p.length-1].y=Math.min(p[p.length-1].y,d);for(let g=p.length-2;g>=0;g-=1)p[g].y=Math.min(p[g].y,p[g+1].y-h);if(p[0].y<f)if(p.length===1)p[0].y=(f+d)/2;else{const g=(d-f)/(p.length-1);p.forEach((_,y)=>{_.y=f+g*y})}const m=t.append("g").attr("class","line-end-labels");m.selectAll("line").data(p).enter().append("line").attr("x1",g=>g.xEnd+2).attr("y1",g=>g.yTarget).attr("x2",u-4).attr("y2",g=>g.y).attr("stroke",g=>n(g.name)).attr("stroke-opacity",.8).attr("stroke-width",1),m.selectAll("text").data(p).enter().append("text").attr("x",u).attr("y",g=>g.y).attr("dominant-baseline","middle").attr("fill",g=>n(g.name)).attr("font-size",10).attr("font-weight",600).text(g=>g.name)}renderLineAnnotations(t,e,n,r,s,o){if(!Array.isArray(o)||o.length===0)return;const a=e.domain(),l=n.domain(),c=[];for(const f of o){const d=f?.type,p=String(f?.label||""),m=f?.color||Ii.color,g=f?.wrap||Ii.wrapWidth;if(d==="verticalLine"){const _=f.year??f.x??f.value,y=Number(_);if(!Number.isFinite(y)||y<Math.min(...a)||y>Math.max(...a))continue;const M=e(y);c.push({type:Qm,note:{label:p,wrap:g},color:m,x:M,y:0,dx:f.dx??Ii.verticalLine.dx,dy:f.dy??Ii.verticalLine.dy,subject:{y1:0,y2:s}})}else if(d==="horizontalLine"){const _=f.y??f.value,y=Number(_);if(!Number.isFinite(y)||y<Math.min(...l)||y>Math.max(...l))continue;const M=n(y),x=f.anchor==="right";c.push({type:Qm,note:{label:p,wrap:g,align:x?"right":void 0},color:m,x:x?r:0,y:M,dx:f.dx??(x?-40:Ii.horizontalLine.dx),dy:f.dy??Ii.horizontalLine.dy,subject:{x1:0,x2:r}})}else if(d==="callout"){const _=Number(f.x),y=Number(f.y);if(!Number.isFinite(_)||!Number.isFinite(y))continue;const M=f.connector==="curve"?l2:Fu;c.push({type:M,note:{label:p,wrap:g},color:m,x:e(_),y:n(y),dx:f.dx??Ii.callout.dx,dy:f.dy??Ii.callout.dy})}}if(c.length===0)return;const u=ng().annotations(c);t.append("g").attr("class","chart-annotations").call(u).selectAll(".annotation .subject path, .annotation .subject line").attr("stroke-dasharray",Ii.lineDash).attr("stroke-opacity",Ii.lineOpacity)}renderPie(t,e,n){const r=this.resolvePieDataset(e,n);if(!Array.isArray(r)||r.length===0){this.renderUnsupported(t,"pieデータが空です");return}const s=n.labelField||"label",o=n.valueField||"value",a=r.map(M=>({...M,__pieValue:this.parsePieNumericValue(M[o])})).filter(M=>M[s]!=null&&Number.isFinite(M.__pieValue));if(a.length===0){this.renderUnsupported(t,"pieデータが不正です");return}const l=n.title||n.groupTitle||"円グラフ",c=this.createPanelInner(t,l,{compact:!0}),u=Math.max(24,Math.min(c.width,c.height)*.33),h=jv().value(M=>M.__pieValue).sort(null),f=$v().innerRadius(0).outerRadius(u),d=this.buildPalette(a.length);n.primaryColor&&(d[0]=n.primaryColor),n.remainderColor&&a.length===2&&(d[1]=n.remainderColor);const p=c.group.append("g").attr("transform",`translate(${c.width/2}, ${c.height/2-8})`),m=t._gridIndex!=null?t._gridIndex*80:0,g=h(a),_=g[g.length-1].endAngle;p.selectAll("path").data(g).enter().append("path").attr("fill",(M,x)=>d[x]).attr("stroke","#ffffff").attr("stroke-width",1).attr("opacity",.95).attr("d",M=>f({...M,endAngle:M.startAngle})).transition().duration(800).delay(m).ease(Fn).attrTween("d",M=>x=>{const S=x*_;return S<=M.startAngle?f({...M,endAngle:M.startAngle}):f({...M,endAngle:Math.min(M.endAngle,S)})});const y=c.group.append("g").attr("transform",`translate(0, ${c.height-Math.min(a.length*15,c.height*.38)})`);a.slice(0,6).forEach((M,x)=>{const S=x*15;y.append("rect").attr("x",0).attr("y",S-9).attr("width",9).attr("height",9).attr("fill",d[x]),y.append("text").attr("x",14).attr("y",S).attr("fill","#4b5563").attr("font-size",10).text(`${M[s]}: ${M[o]}`)})}resolvePieDataset(t,e){if(Array.isArray(t)){const n=e.rowField,r=e.rowValue;if(n&&r!=null){const s=t.find(l=>String(l?.[n]??"").trim()===String(r).trim());if(!s)return[];const a=(Array.isArray(e.categoryColumns)&&e.categoryColumns.length>0?e.categoryColumns:Object.keys(s).filter(l=>l!==n)).map(l=>({label:l,value:this.parsePieNumericValue(s[l])})).filter(l=>Number.isFinite(l.value));if(a.length===0)return[];if(a.length===1&&e.primaryLabel&&(a[0].label=String(e.primaryLabel)),a.length===1&&Number.isFinite(Number(e.normalizeTo))){const l=Number(e.normalizeTo),c=Math.round(Math.max(0,l-a[0].value)*10)/10;a.push({label:e.remainderLabel||"未治療",value:c})}return a}return t}if(Array.isArray(t?.groups)){const n=e.groupId,r=n?t.groups.find(s=>s.id===n):t.groups[e.groupIndex??0];return r?r.values||[]:[]}return[]}parsePieNumericValue(t){if(Number.isFinite(t))return Number(t);if(typeof t=="string"){const e=t.replace(/,/g,"").replace(/%/g,"").trim(),n=Number(e);if(Number.isFinite(n))return n}return NaN}renderSankey(t,e,n){const r=this.normalizeSankeyData(e);if(!r||r.nodes.length===0||r.links.length===0){this.renderUnsupported(t,"sankeyデータが不正です");return}const s=n.title||"サンキー・ダイアグラム",o=this.createPanelInner(t,s),a=o.width,l=o.height,c=new Map(r.nodes.map(v=>[v.id,{...v,in:[],out:[],level:0}])),u=r.links.map(v=>({source:c.get(v.source),target:c.get(v.target),value:Number(v.value)})).filter(v=>v.source&&v.target&&Number.isFinite(v.value)&&v.value>0);u.forEach(v=>{v.source.out.push(v),v.target.in.push(v)}),this.assignNodeLevels(c);const h=new Map;[...c.values()].forEach(v=>{h.has(v.level)||h.set(v.level,[]),h.get(v.level).push(v)});const f=[...h.keys()].sort((v,E)=>v-E),d=Math.max(...f,1),p=12,m=Math.max(8,Math.min(18,a*.03)),g=Math.max(...f.map(v=>h.get(v).reduce((E,D)=>E+this.nodeValue(D),0)),1),_=(l-p*6)/g;f.forEach(v=>{const E=h.get(v),C=E.reduce((U,V)=>U+this.nodeValue(V),0)*_+(E.length-1)*p;let L=(l-C)/2;E.forEach(U=>{U.h=Math.max(8,this.nodeValue(U)*_),U.w=m,U.x=v/d*(a-m),U.y=L,U.inOffset=0,U.outOffset=0,L+=U.h+p})});const y=this.buildPalette(Math.max(f.length,2)),M=[...c.values()];M.forEach(v=>{v.color=y[Math.min(v.level,y.length-1)]});const x=o.group.append("g").attr("fill","none"),S=[],b=600;u.forEach((v,E)=>{const D=Math.max(1.5,v.value*_),C=v.source.x+v.source.w,L=v.source.y+v.source.outOffset+D/2,U=v.target.x,V=v.target.y+v.target.inOffset+D/2;v.source.outOffset+=D,v.target.inOffset+=D;const z=C+(U-C)*.45,I=C+(U-C)*.55,k=`M${C},${L} C${z},${L} ${I},${V} ${U},${V}`,X=`sankey-link-grad-${E}-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",X).attr("gradientUnits","userSpaceOnUse").attr("x1",C).attr("y1",L).attr("x2",U).attr("y2",V).selectAll("stop").data([{offset:"0%",color:v.source.color},{offset:"100%",color:v.target.color}]).enter().append("stop").attr("offset",nt=>nt.offset).attr("stop-color",nt=>nt.color);const P=x.append("path").attr("d",k).attr("stroke",`url(#${X})`).attr("stroke-width",D).attr("stroke-opacity",0),pt=P.node().getTotalLength();P.attr("stroke-dasharray",pt).attr("stroke-dashoffset",pt);const yt=v.source.level*b+300;P.transition().delay(yt).duration(500).ease(Fn).attr("stroke-opacity",.35).attr("stroke-dashoffset",0),S.push({el:P,link:v})});const w=o.group.append("g"),R=w.selectAll("rect").data(M).enter().append("rect").attr("x",v=>v.x).attr("y",v=>v.y).attr("width",v=>v.w).attr("height",0).attr("fill",v=>v.color).attr("fill-opacity",0).attr("stroke","#ffffff").attr("stroke-width",.6).style("pointer-events","all").style("cursor","pointer");R.transition().delay(v=>v.level*b).duration(400).ease(Fn).attr("height",v=>v.h).attr("fill-opacity",.88),R.on("mouseenter",(v,E)=>{S.forEach(({el:D,link:C})=>{const L=C.source.id===E.id||C.target.id===E.id;D.transition().duration(200).attr("stroke-opacity",L?.7:.08)})}).on("mouseleave",()=>{S.forEach(({el:v})=>{v.transition().duration(200).attr("stroke-opacity",.35)})}),w.selectAll("text.sankey-label").data(M).enter().append("text").attr("class","sankey-label").attr("x",v=>v.level===0?v.x+v.w+6:v.x-6).attr("y",v=>v.y+v.h/2+3).attr("text-anchor",v=>v.level===0?"start":"end").attr("fill","#1f2937").attr("font-size",11).attr("opacity",0).text(v=>v.label).transition().delay(v=>v.level*b+200).duration(300).attr("opacity",1)}normalizeSankeyData(t){if(t?.nodes&&t?.links){const e=t.nodes.map((s,o)=>({id:s.id??s.name??String(o),label:s.name??s.id??String(o)})),n=e.map(s=>s.id),r=t.links.map(s=>({source:typeof s.source=="number"?n[s.source]:s.source,target:typeof s.target=="number"?n[s.target]:s.target,value:Number(s.value)}));return{nodes:e,links:r}}if(Array.isArray(t)){const e=new Set,n=t.map(s=>{const o=String(s.source??s.from??""),a=String(s.target??s.to??"");return e.add(o),e.add(a),{source:o,target:a,value:Number(s.value??s.count??0)}});return{nodes:[...e].filter(Boolean).map(s=>({id:s,label:s})),links:n}}return null}assignNodeLevels(t){const e=[...t.values()],n=new Map(e.map(s=>[s.id,s.in.length])),r=e.filter(s=>s.in.length===0);if(r.length===0){e.forEach(s=>{s.level=0});return}for(;r.length>0;){const s=r.shift();s.out.forEach(o=>{const a=o.target;a.level=Math.max(a.level,s.level+1),n.set(a.id,n.get(a.id)-1),n.get(a.id)===0&&r.push(a)})}}nodeValue(t){const e=Ud(t.in,r=>r.value),n=Ud(t.out,r=>r.value);return Math.max(e,n,1)}renderVenn(t,e,n){const r=this.resolveVennDataset(e,n);if(!r||!Array.isArray(r.sets)||r.sets.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const s=n.title||r.title||"ベン図",o=this.createPanelInner(t,s,{compact:!0}),a=r.sets.filter(I=>Array.isArray(I?.sets)&&I.sets.length>=1&&Number.isFinite(Number(I.size))).map(I=>({sets:I.sets.map(k=>String(k)),size:Math.max(0,Number(I.size))})),l=[...new Set(a.filter(I=>I.sets.length===1).map(I=>I.sets[0]))];if(l.length<2||l.length>3){this.renderUnsupported(t,"ベン図は2〜3集合を想定しています");return}if(a.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const c=this.buildPalette(l.length);n.colors&&l.forEach((I,k)=>{n.colors[I]&&(c[k]=n.colors[I])});const u=new Map(l.map((I,k)=>[I,c[k]])),h=I=>I.slice().sort().join("&"),f=new Map(a.map(I=>[h(I.sets),I]));let d;try{d=XA(a,{width:o.width,height:o.height,padding:6,round:2})}catch(I){console.warn("venn layout failed",I),this.renderUnsupported(t,"vennレイアウトの計算に失敗しました");return}if(!Array.isArray(d)||d.length===0){this.renderUnsupported(t,"vennレイアウト結果が空です");return}if(l.length>=2){const I=d.find(Y=>Y.data.sets.length===1&&Y.data.sets[0]===l[0]),k=d.find(Y=>Y.data.sets.length===1&&Y.data.sets[0]===l[1]),X=I?.circles.find(Y=>Y.set===l[0])?.x??0,P=k?.circles.find(Y=>Y.set===l[1])?.x??0;if(X>P){const Y=yt=>o.width-yt,pt=new Set;for(const yt of d){yt.text.x=Y(yt.text.x);for(const nt of yt.circles)pt.has(nt)||(nt.x=Y(nt.x),pt.add(nt))}}}const p=`gooey-${Math.random().toString(36).slice(2,8)}`;let m=o.group.select("defs");m.empty()&&(m=o.group.append("defs"));const g=m.append("filter").attr("id",p);g.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",5).attr("result","blur"),g.append("feColorMatrix").attr("in","blur").attr("mode","matrix").attr("values","1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7").attr("result","gooey");const _=Math.max(...a.filter(I=>I.sets.length===1).map(I=>I.size),0),y=this.computeVennGlobalMax(e),M=y>0&&_>0?Math.sqrt(_/y):1,x=o.width/2,S=o.height/2,b=o.group.append("g").attr("transform",`translate(${x*(1-M)},${S*(1-M)}) scale(${M})`),w=1/M,R=b.append("g").style("filter",`url(#${p})`),v=b.append("g"),E=d.filter(I=>I.data.sets.length===1);if(E.forEach(I=>{const k=I.data.sets[0],X=I.circles.find(P=>P.set===k)||I.circles[0];X&&R.append("circle").attr("cx",X.x).attr("cy",X.y).attr("r",X.radius).attr("fill",u.get(k)||"#5fb3ff").attr("fill-opacity",0).attr("stroke","none").attr("transform",`translate(${x-X.x*.7},${S-X.y*.7}) scale(0.3)`).transition().duration(600).ease(Fn).attr("fill-opacity",.55).attr("transform","translate(0,0) scale(1)")}),n.intersectionColor&&l.length===2){const I=E[0]?.circles.find(X=>X.set===l[0])||E[0]?.circles[0],k=E[1]?.circles.find(X=>X.set===l[1])||E[1]?.circles[0];if(I&&k){const X=`venn-clip-${Math.random().toString(36).slice(2,8)}`;m.append("clipPath").attr("id",X).append("circle").attr("cx",k.x).attr("cy",k.y).attr("r",k.radius),v.append("circle").attr("cx",I.x).attr("cy",I.y).attr("r",I.radius).attr("clip-path",`url(#${X})`).attr("fill",n.intersectionColor).attr("fill-opacity",0).transition().duration(600).delay(300).attr("fill-opacity",.55)}}const D=o.group.append("g"),C=30,L=l.length===2?[o.width*.25,o.width*.75]:l.map((I,k)=>o.width*(k+1)/(l.length+1));if(l.forEach((I,k)=>{D.append("text").attr("x",L[k]).attr("y",C).attr("text-anchor","middle").attr("fill","#1f2937").attr("font-size",13).attr("font-weight",700).attr("opacity",0).transition().duration(400).delay(200).attr("opacity",1).text(I)}),n.intersectionLabel&&l.length>=2){const I=h(l.slice(0,2)),k=d.find(X=>h(X.data.sets)===I);if(k){const X=n.hideValues?3:-8;v.append("text").attr("x",k.text.x).attr("y",k.text.y+X).attr("text-anchor","middle").attr("fill","#1f2937").attr("font-size",13*w).attr("font-weight",700).attr("opacity",0).text(n.intersectionLabel).transition().duration(400).delay(350).attr("opacity",1)}}if(n.hideValues)return;const U=(I,k)=>({x:x*(1-M)+I*M,y:S*(1-M)+k*M}),V=o.group.append("g"),z=[];if(l.length===2){const I=l[0],k=l[1],X=f.get(h([I,k]))?.size??0,P=f.get(h([I]))?.size??0,Y=f.get(h([k]))?.size??0,pt=new Map;d.forEach(et=>{pt.set(h(et.data.sets),{x:et.text.x,y:et.text.y})});const yt=[{key:h([I]),value:Math.max(0,P-X)},{key:h([I,k]),value:Math.max(0,X)},{key:h([k]),value:Math.max(0,Y-X)}],nt=[{x:o.width*.13,y:o.height-16},{x:o.width*.5,y:o.height-16},{x:o.width*.87,y:o.height-16}];yt.forEach((et,G)=>{if(!Number.isFinite(et.value))return;const j=pt.get(et.key);if(!j)return;const rt=U(j.x,j.y),gt=nt[G];z.push({note:{label:hi(",")(et.value),wrap:200,align:"middle",padding:2},x:rt.x,y:rt.y,dx:gt.x-rt.x,dy:gt.y-rt.y,type:Fu,connector:{end:"dot"}})})}if(l.length===3){const I=new Map;d.forEach(k=>{I.set(h(k.data.sets),{x:k.text.x,y:k.text.y})}),d.filter(k=>k.data.sets.length>=2).forEach(k=>{const X=f.get(h(k.data.sets));if(!X)return;const P=U(k.text.x,k.text.y);z.push({note:{label:hi(",")(X.size),wrap:200,align:"middle",padding:2},x:P.x,y:P.y,dx:0,dy:30,type:Fu,connector:{end:"dot"}})})}if(z.length>0){const I=ng().annotations(z);V.append("g").attr("class","venn-value-annotations").call(I),V.selectAll(".venn-value-annotations .annotation path").attr("stroke","#6b7280").attr("stroke-width",1),V.selectAll(".venn-value-annotations .annotation .connector .connector-end").attr("fill","#6b7280").attr("stroke","#6b7280"),V.selectAll(".venn-value-annotations .annotation .note .note-line").attr("stroke","#6b7280"),V.selectAll(".venn-value-annotations .annotation text").attr("fill","#1f2937").attr("font-size",12).attr("font-weight",700),V.selectAll(".venn-value-annotations .annotation").attr("opacity",0).transition().duration(400).delay(350).attr("opacity",1)}}resolveVennDataset(t,e){return t?.sets?t:Array.isArray(t?.groups)&&(e.groupId?t.groups.find(r=>r.id===e.groupId):t.groups[e.groupIndex??0])||null}computeVennGlobalMax(t){if(!Array.isArray(t?.groups))return 0;let e=0;for(const n of t.groups)if(Array.isArray(n.sets))for(const r of n.sets)Array.isArray(r.sets)&&r.sets.length===1&&(e=Math.max(e,Number(r.size)||0));return e}renderBump(t,e,n){if(!Array.isArray(e)||e.length===0){this.renderUnsupported(t,"bumpデータが空です");return}const r=n.xField||"year",s=n.yField||"rank",o=n.seriesField||"country",a=n.maxRank||5,l=n.title||"順位推移",c=new Set(Array.isArray(n.highlight)?n.highlight:n.highlight?[n.highlight]:[]),u=c.size>0,h=n.xMin!=null?Number(n.xMin):-1/0,f=n.xMax!=null?Number(n.xMax):1/0,d=e.filter(nt=>nt[r]!=null&&Number.isFinite(Number(nt[s]))&&Number(nt[r])>=h&&Number(nt[r])<=f);if(d.length===0){this.renderUnsupported(t,"bumpデータが空です");return}const p=this.createPanelInner(t,l),m=p.width,g=p.height,_=[...new Set(d.map(nt=>Number(nt[r])))].sort((nt,et)=>nt-et),y=[...new Set(d.map(nt=>String(nt[o])))],M=this.buildPalette(y.length),x=Za().domain(y).range(M),S=this.resolveLineLabelGutter(m),b=32,w=6,R=24,v=Math.max(80,m-b-S),E=Math.max(80,g-w-R),D=p.group.append("g").attr("transform",`translate(${b}, ${w})`),C=wv().domain(_.map(String)).range([0,v]).padding(.1),L=rs().domain([.5,a+.5]).range([0,E]);if(n.gridLines!==!1){const nt=D.append("g").attr("class","grid-lines");for(let et=1;et<=a;et+=1)nt.append("line").attr("x1",0).attr("y1",L(et)).attr("x2",v).attr("y2",L(et)).attr("stroke","#d1d5db").attr("stroke-opacity",.15).attr("stroke-dasharray","2 4")}const U=Ic(C).tickFormat(hi("d")),V=nt=>nt.selectAll("text").attr("fill","#4b5563").attr("font-size",11),z=nt=>nt.selectAll("line,path").attr("stroke","#d1d5db").attr("opacity",.5);D.append("g").attr("transform",`translate(0, ${E})`).call(U).call(V).call(z);const I=Od(L).tickValues(ag(1,a+1)).tickFormat(nt=>`${nt}位`);D.append("g").call(I).call(V).call(z);const k=y.map(nt=>{const et=d.filter(G=>String(G[o])===nt).sort((G,j)=>Number(G[r])-Number(j[r]));return{name:nt,values:et}}).filter(nt=>nt.values.length>0),X=$u().x(nt=>C(String(Number(nt[r])))).y(nt=>L(Number(nt[s]))).curve(Zv),P=D.append("g").attr("class","bump-series");k.forEach(nt=>{const et=x(nt.name),G=!u||c.has(nt.name),j=G?3.5:1.5,rt=G?.95:.25,gt=G?6:3.5,mt=G?1:.3,Ut=P.append("path").datum(nt.values).attr("fill","none").attr("stroke",et).attr("stroke-width",j).attr("stroke-opacity",rt).attr("d",X),$t=Ut.node()?.getTotalLength()||0;Ut.attr("stroke-dasharray",`${$t} ${$t}`).attr("stroke-dashoffset",$t).transition().duration(800).ease(Fn).attr("stroke-dashoffset",0),P.selectAll(`.bump-point-${this.toSafeCssToken(nt.name)}`).data(nt.values).enter().append("circle").attr("cx",Mt=>C(String(Number(Mt[r])))).attr("cy",Mt=>L(Number(Mt[s]))).attr("r",gt).attr("fill",et).attr("stroke","#fff").attr("stroke-width",G?2:1).attr("opacity",0).transition().delay(600).duration(300).attr("opacity",mt)});const Y=_[_.length-1],pt=v+10,yt=D.append("g").attr("class","bump-end-labels");k.forEach(nt=>{const et=nt.values[nt.values.length-1];if(!et||Number(et[r])!==Y)return;const G=L(Number(et[s]));yt.append("text").attr("x",pt).attr("y",G).attr("dominant-baseline","middle").attr("fill",x(nt.name)).attr("font-size",10).attr("font-weight",600).attr("opacity",0).text(nt.name).transition().delay(800).duration(300).attr("opacity",1)}),this.attachBumpTooltip(D,k,C,L,v,E,r,s,x)}attachBumpTooltip(t,e,n,r,s,o,a,l,c){const u=t.append("rect").attr("width",s).attr("height",o).attr("fill","none").style("pointer-events","all").style("cursor","crosshair"),h=t.append("line").attr("y1",0).attr("y2",o).attr("stroke","#ffffff").attr("stroke-opacity",0).attr("stroke-width",.8).attr("stroke-dasharray","3 3"),f=t.append("g").attr("class","bump-tooltip").attr("opacity",0),d=n.domain();u.on("mousemove",p=>{const[m]=Uc(p);let g=d[0],_=1/0;d.forEach(x=>{const S=Math.abs(n(x)-m);S<_&&(_=S,g=x)});const y=n(g);h.attr("x1",y).attr("x2",y).attr("stroke-opacity",.3),f.selectAll("*").remove(),f.attr("opacity",1);let M=0;e.forEach(x=>{const S=x.values.find(E=>String(Number(E[a]))===g);if(!S)return;const b=r(Number(S[l])),w=c(x.name);f.append("circle").attr("cx",y).attr("cy",b).attr("r",6).attr("fill",w).attr("stroke","#fff").attr("stroke-width",2);const R=y+10,v=12+M*16;f.append("rect").attr("x",R-2).attr("y",v-10).attr("width",90).attr("height",14).attr("rx",3).attr("fill","rgba(255,255,255,0.92)"),f.append("text").attr("x",R).attr("y",v).attr("fill",w).attr("font-size",10).attr("font-weight",500).text(`${x.name}: ${S[l]}位`),M+=1}),f.append("text").attr("x",y).attr("y",o+16).attr("text-anchor","middle").attr("fill","#4b5563").attr("font-size",10).text(g)}),u.on("mouseleave",()=>{h.attr("stroke-opacity",0),f.attr("opacity",0)})}renderUnsupported(t,e){const n=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);n.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#f3f4f6").attr("fill-opacity",.7).attr("stroke","#d1d5db").attr("stroke-opacity",.5),n.append("text").attr("x",t.width/2).attr("y",t.height/2).attr("text-anchor","middle").attr("fill","#374151").attr("font-size",12).text(e)}drawEmptyPanel(t){this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`).append("rect").attr("width",t.width).attr("height",t.height).attr("rx",8).attr("fill","#f3f4f6").attr("fill-opacity",.2).attr("stroke","#d1d5db").attr("stroke-dasharray","4 4").attr("stroke-opacity",.35)}createPanelInner(t,e="",n={}){const r=n.compact===!0,s=e?r?20:28:0,o=r?10:14,a=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);a.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","none").attr("stroke",this.getThemePrimary()).attr("stroke-width",1.5).attr("stroke-opacity",.15).attr("filter","url(#panel-glow)"),a.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#f3f4f6").attr("fill-opacity",.63).attr("stroke","#d1d5db").attr("stroke-opacity",.35),e&&a.append("text").attr("x",o).attr("y",o+3).attr("dominant-baseline","hanging").attr("fill","#111827").attr("font-size",r?12:14).attr("font-weight",600).text(e);const l=a.append("g").attr("transform",`translate(${o}, ${o+s})`),c=t.width-o*2,u=t.height-o*2-s;return{group:l,width:c,height:u}}drawBackdrop(){this.root.append("rect").attr("x",0).attr("y",0).attr("width",Ou).attr("height",ku).attr("fill","#ffffff").attr("fill-opacity",.64)}ensureSvg(){if(!this.container||this.svg&&this.svg.node()?.isConnected)return;this.clear(),this.svg=og(this.container).append("svg").attr("viewBox",`0 0 ${Ou} ${ku}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","chart layer"),this.root=this.svg.append("g"),this.defs=this.svg.append("defs");const t=this.defs.append("filter").attr("id","panel-glow").attr("x","-20%").attr("y","-20%").attr("width","140%").attr("height","140%");t.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",3).attr("result","blur"),t.append("feMerge").selectAll("feMergeNode").data(["blur","SourceGraphic"]).enter().append("feMergeNode").attr("in",e=>e)}getThemePrimary(){return getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#66c2a5"}renderStreamgraph(t,e,n){if(!Array.isArray(e)){this.renderUnsupported(t,"streamgraphデータ形式が不正です");return}const r=n.xField||"year",s=n.yField||"value",o=n.seriesField||"series",a=e.filter(et=>Number.isFinite(Number(et[r]))&&Number.isFinite(Number(et[s])));if(a.length===0){this.renderUnsupported(t,"streamgraphデータが空です");return}const l=Ld(a,et=>Number(et[r])),c=Array.isArray(n.xDomain)&&n.xDomain.length===2?[Number(n.xDomain[0]),Number(n.xDomain[1])]:null,u=c&&c.every(Number.isFinite)?[Math.min(...c),Math.max(...c)]:[Number(l[0]),Number(l[1])],h=a.filter(et=>{const G=Number(et[r]);return G>=u[0]&&G<=u[1]});if(h.length===0){this.renderUnsupported(t,"streamgraphデータが空です");return}const f=n.title||"Streamgraph",d=this.createPanelInner(t,f),p=d.width,m=d.height,g=6,_=24,y=10,x=Math.max(80,p-y-10),S=Math.max(80,m-g-_),b=d.group.append("g").attr("transform",`translate(${y}, ${g})`),w=[...new Set(h.map(et=>String(et[o])))],R=[...new Set(h.map(et=>Number(et[r])))].sort((et,G)=>et-G),v=R.map(et=>{const G={[r]:et};return w.forEach(j=>{const rt=h.find(gt=>Number(gt[r])===et&&String(gt[o])===j);G[j]=rt?Number(rt[s]):0}),G}),D=ey().keys(w).offset(ny).order(ay)(v),C=rs().domain(u).range([0,x]),L=[Id(D,et=>Id(et,G=>G[0])),Ra(D,et=>Ra(et,G=>G[1]))],U=rs().domain(L).range([S,0]),V=Ic(C).ticks(5).tickFormat(hi("d"));b.append("g").attr("transform",`translate(0, ${S})`).call(V).selectAll("text").attr("fill","#4b5563").attr("font-size",11),b.select(".domain").attr("stroke","#d1d5db").attr("opacity",.5),b.selectAll(".tick line").attr("stroke","#d1d5db").attr("opacity",.5);const z=this.buildPalette(w.length),I=Za().domain(w).range(z),k=Jd().x(et=>C(et.data[r])).y0(et=>U(et[0])).y1(et=>U(et[1])).curve(Jv);b.selectAll(".stream-layer").data(D).enter().append("path").attr("class","stream-layer").attr("d",k).attr("fill",et=>I(et.key)).attr("fill-opacity",0).attr("stroke","none").transition().duration(800).delay((et,G)=>G*60).ease(Fn).attr("fill-opacity",.75);const P=b.append("rect").attr("width",x).attr("height",S).attr("fill","transparent").attr("pointer-events","all"),Y=b.append("line").attr("y1",0).attr("y2",S).attr("stroke","#6b7280").attr("stroke-width",1).attr("stroke-dasharray","3 3").attr("opacity",0),pt=b.append("g").attr("opacity",0);P.on("mousemove",et=>{const[G]=Uc(et),j=Math.round(C.invert(G)),rt=Math.max(u[0],Math.min(u[1],j)),gt=v.find(Vt=>Vt[r]===rt);if(!gt)return;Y.attr("x1",C(rt)).attr("x2",C(rt)).attr("opacity",.6),pt.selectAll("*").remove();const mt=w.reduce((Vt,kt)=>Vt+(gt[kt]||0),0),Ut=[`${rt}年 (合計: ${hi(",")(mt)})`];w.forEach(Vt=>{gt[Vt]&&Ut.push(`${Vt}: ${hi(",")(gt[Vt])}`)});const $t=180,Mt=Ut.length*15+10;let Ot=C(rt)+10;Ot+$t>x&&(Ot=C(rt)-$t-10),pt.append("rect").attr("x",Ot).attr("y",5).attr("width",$t).attr("height",Mt).attr("rx",4).attr("fill","rgba(0,0,0,0.8)"),Ut.forEach((Vt,kt)=>{pt.append("text").attr("x",Ot+8).attr("y",20+kt*15).attr("fill","#ffffff").attr("font-size",10).text(Vt)}),pt.attr("opacity",1)}).on("mouseleave",()=>{Y.attr("opacity",0),pt.attr("opacity",0)});const yt=R[R.length-1];D.map(et=>{const G=et.find(rt=>rt.data[r]===yt);if(!G)return null;const j=(U(G[0])+U(G[1]))/2;return{key:et.key,y:j}}).filter(Boolean).forEach(et=>{b.append("text").attr("x",x+4).attr("y",et.y).attr("dominant-baseline","central").attr("fill",I(et.key)).attr("font-size",8).attr("font-weight",500).attr("opacity",0).text(et.key).transition().duration(400).delay(800).attr("opacity",1)}),this.renderLineAnnotations(b,C,U,x,S,n.annotations)}buildPalette(t){const e=["#5fb3ff","#f59e0b","#34d399","#f87171","#a78bfa","#2dd4bf","#f472b6","#60a5fa","#fbbf24","#4ade80"];return t<=e.length?e.slice(0,t):Array.from({length:t},(n,r)=>Ov(r/t))}toSafeCssToken(t){return String(t).replaceAll(/[^a-zA-Z0-9_-]/g,"-")}resolveLineLabelGutter(t){return t<280?70:t<420?96:130}resolveYAxisLabelGutter(t,e){const n=t.map(l=>Number(l[e])).filter(l=>Number.isFinite(l));if(n.length===0)return 56;const r=Ra(n.map(l=>Math.abs(l)))||0,s=[0,r*.25,r*.5,r*.75,r],a=14+(Ra(s.map(l=>hi(",")(Math.round(l)).length))||4)*7;return Math.max(56,Math.min(110,a))}clear(){this.container&&(this.container.innerHTML=""),this.svg=null,this.root=null,this.defs=null}destroy(){window.removeEventListener("resize",this.onResize),this.clear()}}class p2{constructor(t){this.config=t,this.elements={},this.svgHosts=null,this.webglLayer=null,this.imageLayer=null,this.mapLayer=null,this.chartLayer=null,this.activeLayer=null,this.activeChartSpanId=null}async init(){this.elements={image:document.getElementById("image-layer"),webgl:document.getElementById("webgl-layer"),svg:document.getElementById("svg-layer")};const t=this.elements.webgl;t&&(this.webglLayer=new pA(t),this.webglLayer.init(),t.classList.add("active"),this.activeLayer="webgl"),this.elements.image&&(this.imageLayer=new mA(this.elements.image)),this.elements.svg&&(this.svgHosts=this.createSvgHosts(this.elements.svg),this.mapLayer=new SA(this.svgHosts.map),this.chartLayer=new d2(this.svgHosts.chart))}createSvgHosts(t){t.innerHTML="";const e=document.createElement("div");e.className="svg-sub-layer",e.dataset.layer="map";const n=document.createElement("div");return n.className="svg-sub-layer",n.dataset.layer="chart",t.appendChild(e),t.appendChild(n),{map:e,chart:n}}transition(t,e){const n=this.resolveActiveLayer(t);if(this.activeLayer&&this.activeLayer!==n){const r=this.elements[this.activeLayer];r&&(r.classList.remove("active"),r.classList.remove("clip-enter")),this.activeLayer==="image"&&this.imageLayer?.hide(),this.activeLayer==="svg"&&(this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null)}if(n&&this.elements[n]){const r=this.elements[n];r.classList.add("active"),this.activeLayer&&this.activeLayer!==n&&(r.classList.remove("clip-enter"),r.offsetWidth,r.classList.add("clip-enter"))}if(n==="image"&&t.image&&this.imageLayer?.show(t.image),n==="svg")if(t.map?.visible)this.chartLayer?.clear(),this.activeChartSpanId=null,this.mapLayer?.render(t.map);else if(t.chart?.visible){this.mapLayer?.clear();const r=this.resolveChartSpanId(t.chart),o=this.shouldContinueChartFromPrevious(t.chart)&&r&&this.activeChartSpanId===r;this.chartLayer?.render(t.chart,{transitionFromPrevious:!!o,spanId:r}).catch(a=>{console.error("Chart render failed:",a)}),this.activeChartSpanId=r}else this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null;this.activeLayer=n}resolveActiveLayer(t){return t.chart?.visible||t.map?.visible?"svg":t.image?.visible?"image":"webgl"}resolveChartSpanId(t){const e=t?.span?.id;if(e==null)return null;const n=String(e).trim();return n.length>0?n:null}shouldContinueChartFromPrevious(t){return!!t?.span?.continueFromPrevious}updateProgress(t){this.webglLayer?.setProgress(t)}setThemeColor(t){this.webglLayer?.setThemeColor(t)}destroy(){this.chartLayer?.destroy(),this.mapLayer?.destroy(),this.webglLayer?.destroy()}}class m2{constructor(t){this.config=t,this.container=document.getElementById("scroll-content"),this.stepElements=[]}render(){this.config.steps.forEach((t,e)=>{const n=this.createStepElement(t,e);this.container.appendChild(n),this.stepElements.push(n)})}createStepElement(t,e){const n=document.createElement("section");if(n.className="step",n.dataset.step=e,n.id=t.id,t.scrollHeight&&(n.style.minHeight=t.scrollHeight),t.id&&t.id.endsWith("-hero")&&n.classList.add("hero-step"),t.fixedClosing)return n.classList.add("fixed-closing-step"),n.appendChild(this.createFixedClosingElement()),n;if(t.text?.content){const s=document.createElement("div");s.className="text-card",s.innerHTML=t.text.content;const o=t.chart?.charts?.map(c=>c.config?.source).filter(Boolean)||[],a=t.source?Array.isArray(t.source)?t.source:[t.source]:[],l=[...o,...a];if(l.length>0){const c=document.createElement("div");c.className="chart-source",l.forEach(u=>{const h=document.createElement("span");if(h.textContent="出典: ",c.appendChild(h),u.url){const f=document.createElement("a");f.href=u.url,f.target="_blank",f.rel="noopener noreferrer",f.textContent=u.name||u.url,c.appendChild(f)}else h.textContent+=u.name||""}),s.appendChild(c)}this.applySplitText(s),this.applyPosition(s,t.text.position),n.appendChild(s)}return n}applySplitText(t){t.querySelectorAll("h2").forEach(n=>{const r=n.textContent;if(!r.trim())return;const s=n.getAttribute("style")||"",o=r.length>12?this.splitIntoLines(r):[r];n.innerHTML="",s&&n.setAttribute("style",s),o.forEach((a,l)=>{const c=document.createElement("span");c.className="split-line";const u=document.createElement("span");u.className="split-line-inner",u.textContent=a,u.style.transitionDelay=`${l*.08}s`,c.appendChild(u),n.appendChild(c)})})}splitIntoLines(t){const e=t.split(new RegExp("(?<=[。、！？〜～ ―])"));if(e.length>=2)return e.filter(r=>r.trim().length>0);const n=Math.ceil(t.length/2);return[t.slice(0,n),t.slice(n)]}applyPosition(t,e){e&&(e.width&&(t.style.maxWidth=e.width),t.dataset.hAlign=e.horizontal||"center",t.dataset.vAlign=e.vertical||"center")}activateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");if(n){n.classList.add("visible");const r=n.dataset.hAlign||"center",s=n.dataset.vAlign||"center",o={left:"flex-start",center:"center",right:"flex-end"},a={top:"flex-start",center:"center",bottom:"flex-end"};e.style.justifyContent=o[r]||"center",e.style.alignItems=a[s]||"center"}}deactivateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");n&&n.classList.remove("visible")}createFixedClosingElement(){const t=document.createElement("div");return t.className="fixed-closing-inner",t.innerHTML=`
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
    `,t}}class g2{constructor(t,e="aids"){this.container=t,this.currentDiseaseId=e}render(){const t=Dd[this.currentDiseaseId];this.container.innerHTML=`
      <div class="nav-inner">
        <div class="nav-logo">
          <a href="/prj-jcie/" class="nav-logo-text">データで見る感染症との闘い</a>
        </div>
        <ul class="nav-links">
          ${Object.values(Dd).map(e=>{const n=e.id===this.currentDiseaseId;return`
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
    `,document.documentElement.style.setProperty("--theme-primary",t.primary),document.documentElement.style.setProperty("--theme-secondary",t.secondary),document.documentElement.style.setProperty("--theme-accent",t.accent)}}class _2{constructor(){this.config=null,this.scrollController=null,this.layerOrchestrator=null,this.contentRenderer=null}async init(){try{const t=document.body.dataset.disease;if(!t){console.error("data-disease attribute not found on <body>");return}new g2(document.getElementById("header-nav"),t).render();const n=new oy(t);this.config=await n.load(),this.contentRenderer=new m2(this.config),this.contentRenderer.render(),this.layerOrchestrator=new p2(this.config),await this.layerOrchestrator.init(),this.scrollController=new tS({onStepEnter:(r,s)=>this.handleStepEnter(r,s),onStepLeave:(r,s)=>this.handleStepLeave(r,s),onProgress:r=>this.handleProgress(r)}),this.scrollController.init()}catch(t){console.error("DiseaseApp initialization failed:",t)}}handleStepEnter(t,e){const n=this.config.steps[t];n&&(this.contentRenderer.activateStep(t),this.layerOrchestrator.transition(n,e),document.body.classList.toggle("is-fixed-closing",!!n.fixedClosing))}handleStepLeave(t,e){this.config.steps[t]?.fixedClosing&&document.body.classList.remove("is-fixed-closing"),this.contentRenderer.deactivateStep(t)}handleProgress(t){this.layerOrchestrator.updateProgress(t)}}const x2=new _2;x2.init();
