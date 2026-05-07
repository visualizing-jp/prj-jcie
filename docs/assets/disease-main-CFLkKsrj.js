import{R as ag,x as ux,y as hx,z as fx,B as Pd,C as Dd,E as dx,F as Al,G as px,H as mx,p as gx,I as _x,J as xx,K as vx,L as yx,M as og,N as Sx,O as Mx,j as lg,P as bx,u as Cl,m as Hu,o as Ex,t as cg,q as Tx,Q as wx,S as di,v as Ld,w as Nd,D as Id}from"./feature-CW9aUBhx.js";function Rl(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function Ax(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Pf(i){let t,e,n;i.length!==2?(t=Rl,e=(a,l)=>Rl(i(a),l),n=(a,l)=>i(a)-l):(t=i===Rl||i===Ax?i:Cx,e=i,n=i);function r(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<0?c=h+1:u=h}while(c<u)}return c}function s(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function o(a,l,c=0,u=a.length){const h=r(a,l,c,u-1);return h>c&&n(a[h-1],l)>-n(a[h],l)?h-1:h}return{left:r,center:o,right:s}}function Cx(){return 0}function Rx(i){return i===null?NaN:+i}const Px=Pf(Rl),Dx=Px.right;Pf(Rx).center;function Ud(i,t){let e,n;if(t===void 0)for(const r of i)r!=null&&(e===void 0?r>=r&&(e=n=r):(e>r&&(e=r),n<r&&(n=r)));else{let r=-1;for(let s of i)(s=t(s,++r,i))!=null&&(e===void 0?s>=s&&(e=n=s):(e>s&&(e=s),n<s&&(n=s)))}return[e,n]}class Gu extends Map{constructor(t,e=Ix){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(Fd(this,t))}has(t){return super.has(Fd(this,t))}set(t,e){return super.set(Lx(this,t),e)}delete(t){return super.delete(Nx(this,t))}}function Fd({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):e}function Lx({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):(i.set(n,e),e)}function Nx({_intern:i,_key:t},e){const n=t(e);return i.has(n)&&(e=i.get(n),i.delete(n)),e}function Ix(i){return i!==null&&typeof i=="object"?i.valueOf():i}function Ux(i){return i}function Fx(i,...t){return Ox(i,Array.from,Ux,t)}function Ox(i,t,e,n){return(function r(s,o){if(o>=n.length)return e(s);const a=new Gu,l=n[o++];let c=-1;for(const u of s){const h=l(u,++c,s),f=a.get(h);f?f.push(u):a.set(h,[u])}for(const[u,h]of a)a.set(u,r(h,o));return t(a)})(i,0)}const kx=Math.sqrt(50),Bx=Math.sqrt(10),zx=Math.sqrt(2);function Yl(i,t,e){const n=(t-i)/Math.max(0,e),r=Math.floor(Math.log10(n)),s=n/Math.pow(10,r),o=s>=kx?10:s>=Bx?5:s>=zx?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/o,a=Math.round(i*c),l=Math.round(t*c),a/c<i&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*o,a=Math.round(i/c),l=Math.round(t/c),a*c<i&&++a,l*c>t&&--l),l<a&&.5<=e&&e<2?Yl(i,t,e*2):[a,l,c]}function Vx(i,t,e){if(t=+t,i=+i,e=+e,!(e>0))return[];if(i===t)return[i];const n=t<i,[r,s,o]=n?Yl(t,i,e):Yl(i,t,e);if(!(s>=r))return[];const a=s-r+1,l=new Array(a);if(n)if(o<0)for(let c=0;c<a;++c)l[c]=(s-c)/-o;else for(let c=0;c<a;++c)l[c]=(s-c)*o;else if(o<0)for(let c=0;c<a;++c)l[c]=(r+c)/-o;else for(let c=0;c<a;++c)l[c]=(r+c)*o;return l}function Wu(i,t,e){return t=+t,i=+i,e=+e,Yl(i,t,e)[2]}function Hx(i,t,e){t=+t,i=+i,e=+e;const n=t<i,r=n?Wu(t,i,e):Wu(i,t,e);return(n?-1:1)*(r<0?1/-r:r)}function Da(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e<n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function Od(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e>n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e>r||e===void 0&&r>=r)&&(e=r)}return e}function kd(i,t){let e=0;if(t===void 0)for(let n of i)(n=+n)&&(e+=n);else{let n=-1;for(let r of i)(r=+t(r,++n,i))&&(e+=r)}return e}function Gx(i){return i}var Fc=1,Oc=2,Xu=3,Xa=4,Bd=1e-6;function Wx(i){return"translate("+i+",0)"}function Xx(i){return"translate(0,"+i+")"}function $x(i){return t=>+i(t)}function Yx(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),e=>+i(e)+t}function qx(){return!this.__axis}function ug(i,t){var e=[],n=null,r=null,s=6,o=6,a=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=i===Fc||i===Xa?-1:1,u=i===Xa||i===Oc?"x":"y",h=i===Fc||i===Xu?Wx:Xx;function f(d){var m=n??(t.ticks?t.ticks.apply(t,e):t.domain()),p=r??(t.tickFormat?t.tickFormat.apply(t,e):Gx),_=Math.max(s,0)+a,g=t.range(),y=+g[0]+l,S=+g[g.length-1]+l,v=(t.bandwidth?Yx:$x)(t.copy(),l),M=d.selection?d.selection():d,b=M.selectAll(".domain").data([null]),T=M.selectAll(".tick").data(m,t).order(),R=T.exit(),x=T.enter().append("g").attr("class","tick"),E=T.select("line"),L=T.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(x),E=E.merge(x.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),L=L.merge(x.append("text").attr("fill","currentColor").attr(u,c*_).attr("dy",i===Fc?"0em":i===Xu?"0.71em":"0.32em")),d!==M&&(b=b.transition(d),T=T.transition(d),E=E.transition(d),L=L.transition(d),R=R.transition(d).attr("opacity",Bd).attr("transform",function(C){return isFinite(C=v(C))?h(C+l):this.getAttribute("transform")}),x.attr("opacity",Bd).attr("transform",function(C){var P=this.parentNode.__axis;return h((P&&isFinite(P=P(C))?P:v(C))+l)})),R.remove(),b.attr("d",i===Xa||i===Oc?o?"M"+c*o+","+y+"H"+l+"V"+S+"H"+c*o:"M"+l+","+y+"V"+S:o?"M"+y+","+c*o+"V"+l+"H"+S+"V"+c*o:"M"+y+","+l+"H"+S),T.attr("opacity",1).attr("transform",function(C){return h(v(C)+l)}),E.attr(u+"2",c*s),L.attr(u,c*_).text(p),M.filter(qx).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Oc?"start":i===Xa?"end":"middle"),M.each(function(){this.__axis=v})}return f.scale=function(d){return arguments.length?(t=d,f):t},f.ticks=function(){return e=Array.from(arguments),f},f.tickArguments=function(d){return arguments.length?(e=d==null?[]:Array.from(d),f):e.slice()},f.tickValues=function(d){return arguments.length?(n=d==null?null:Array.from(d),f):n&&n.slice()},f.tickFormat=function(d){return arguments.length?(r=d,f):r},f.tickSize=function(d){return arguments.length?(s=o=+d,f):s},f.tickSizeInner=function(d){return arguments.length?(s=+d,f):s},f.tickSizeOuter=function(d){return arguments.length?(o=+d,f):o},f.tickPadding=function(d){return arguments.length?(a=+d,f):a},f.offset=function(d){return arguments.length?(l=+d,f):l},f}function kc(i){return ug(Xu,i)}function zd(i){return ug(Xa,i)}function jx(i){let t;for(;t=i.sourceEvent;)i=t;return i}function Bc(i,t){if(i=jx(i),t===void 0&&(t=i.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var n=e.createSVGPoint();return n.x=i.clientX,n.y=i.clientY,n=n.matrixTransform(t.getScreenCTM().inverse()),[n.x,n.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[i.clientX-r.left-t.clientLeft,i.clientY-r.top-t.clientTop]}}return[i.pageX,i.pageY]}const Zx=Math.PI/180,Kx=180/Math.PI;var hg=-.14861,Df=1.78277,Lf=-.29227,yc=-.90649,go=1.97294,Vd=go*yc,Hd=go*Df,Gd=Df*Lf-yc*hg;function Jx(i){if(i instanceof xs)return new xs(i.h,i.s,i.l,i.opacity);i instanceof ag||(i=ux(i));var t=i.r/255,e=i.g/255,n=i.b/255,r=(Gd*n+Vd*t-Hd*e)/(Gd+Vd-Hd),s=n-r,o=(go*(e-r)-Lf*s)/yc,a=Math.sqrt(o*o+s*s)/(go*r*(1-r)),l=a?Math.atan2(o,s)*Kx-120:NaN;return new xs(l<0?l+360:l,a,r,i.opacity)}function Vr(i,t,e,n){return arguments.length===1?Jx(i):new xs(i,t,e,n??1)}function xs(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}hx(xs,Vr,fx(dx,{brighter(i){return i=i==null?Dd:Math.pow(Dd,i),new xs(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Pd:Math.pow(Pd,i),new xs(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=isNaN(this.h)?0:(this.h+120)*Zx,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),n=Math.cos(i),r=Math.sin(i);return new ag(255*(t+e*(hg*n+Df*r)),255*(t+e*(Lf*n+yc*r)),255*(t+e*(go*n)),this.opacity)}}));function Qx(i,t){return i=+i,t=+t,function(e){return Math.round(i*(1-e)+t*e)}}function fg(i){return(function t(e){e=+e;function n(r,s){var o=i((r=Vr(r)).h,(s=Vr(s)).h),a=Al(r.s,s.s),l=Al(r.l,s.l),c=Al(r.opacity,s.opacity);return function(u){return r.h=o(u),r.s=a(u),r.l=l(Math.pow(u,e)),r.opacity=c(u),r+""}}return n.gamma=t,n})(1)}fg(px);var dg=fg(Al);const $u=Math.PI,Yu=2*$u,as=1e-6,tv=Yu-as;function pg(i){this._+=i[0];for(let t=1,e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function ev(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return pg;const e=10**t;return function(n){this._+=n[0];for(let r=1,s=n.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+n[r]}}let nv=class{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?pg:ev(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,r){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(t,e,n,r,s,o){this._append`C${+t},${+e},${+n},${+r},${this._x1=+s},${this._y1=+o}`}arcTo(t,e,n,r,s){if(t=+t,e=+e,n=+n,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,l=n-t,c=r-e,u=o-t,h=a-e,f=u*u+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(f>as)if(!(Math.abs(h*l-c*u)>as)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let d=n-o,m=r-a,p=l*l+c*c,_=d*d+m*m,g=Math.sqrt(p),y=Math.sqrt(f),S=s*Math.tan(($u-Math.acos((p+f-_)/(2*g*y)))/2),v=S/y,M=S/g;Math.abs(v-1)>as&&this._append`L${t+v*u},${e+v*h}`,this._append`A${s},${s},0,0,${+(h*d>u*m)},${this._x1=t+M*l},${this._y1=e+M*c}`}}arc(t,e,n,r,s,o){if(t=+t,e=+e,n=+n,o=!!o,n<0)throw new Error(`negative radius: ${n}`);let a=n*Math.cos(r),l=n*Math.sin(r),c=t+a,u=e+l,h=1^o,f=o?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>as||Math.abs(this._y1-u)>as)&&this._append`L${c},${u}`,n&&(f<0&&(f=f%Yu+Yu),f>tv?this._append`A${n},${n},0,1,${h},${t-a},${e-l}A${n},${n},0,1,${h},${this._x1=c},${this._y1=u}`:f>as&&this._append`A${n},${n},0,${+(f>=$u)},${h},${this._x1=t+n*Math.cos(s)},${this._y1=e+n*Math.sin(s)}`)}rect(t,e,n,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};var Wd={},zc={},Vc=34,La=10,Hc=13;function mg(i){return new Function("d","return {"+i.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function iv(i,t){var e=mg(i);return function(n,r){return t(e(n),r,i)}}function Xd(i){var t=Object.create(null),e=[];return i.forEach(function(n){for(var r in n)r in t||e.push(t[r]=r)}),e}function kn(i,t){var e=i+"",n=e.length;return n<t?new Array(t-n+1).join(0)+e:e}function rv(i){return i<0?"-"+kn(-i,6):i>9999?"+"+kn(i,6):kn(i,4)}function sv(i){var t=i.getUTCHours(),e=i.getUTCMinutes(),n=i.getUTCSeconds(),r=i.getUTCMilliseconds();return isNaN(i)?"Invalid Date":rv(i.getUTCFullYear())+"-"+kn(i.getUTCMonth()+1,2)+"-"+kn(i.getUTCDate(),2)+(r?"T"+kn(t,2)+":"+kn(e,2)+":"+kn(n,2)+"."+kn(r,3)+"Z":n?"T"+kn(t,2)+":"+kn(e,2)+":"+kn(n,2)+"Z":e||t?"T"+kn(t,2)+":"+kn(e,2)+"Z":"")}function av(i){var t=new RegExp('["'+i+`
\r]`),e=i.charCodeAt(0);function n(h,f){var d,m,p=r(h,function(_,g){if(d)return d(_,g-1);m=_,d=f?iv(_,f):mg(_)});return p.columns=m||[],p}function r(h,f){var d=[],m=h.length,p=0,_=0,g,y=m<=0,S=!1;h.charCodeAt(m-1)===La&&--m,h.charCodeAt(m-1)===Hc&&--m;function v(){if(y)return zc;if(S)return S=!1,Wd;var b,T=p,R;if(h.charCodeAt(T)===Vc){for(;p++<m&&h.charCodeAt(p)!==Vc||h.charCodeAt(++p)===Vc;);return(b=p)>=m?y=!0:(R=h.charCodeAt(p++))===La?S=!0:R===Hc&&(S=!0,h.charCodeAt(p)===La&&++p),h.slice(T+1,b-1).replace(/""/g,'"')}for(;p<m;){if((R=h.charCodeAt(b=p++))===La)S=!0;else if(R===Hc)S=!0,h.charCodeAt(p)===La&&++p;else if(R!==e)continue;return h.slice(T,b)}return y=!0,h.slice(T,m)}for(;(g=v())!==zc;){for(var M=[];g!==Wd&&g!==zc;)M.push(g),g=v();f&&(M=f(M,_++))==null||d.push(M)}return d}function s(h,f){return h.map(function(d){return f.map(function(m){return u(d[m])}).join(i)})}function o(h,f){return f==null&&(f=Xd(h)),[f.map(u).join(i)].concat(s(h,f)).join(`
`)}function a(h,f){return f==null&&(f=Xd(h)),s(h,f).join(`
`)}function l(h){return h.map(c).join(`
`)}function c(h){return h.map(u).join(i)}function u(h){return h==null?"":h instanceof Date?sv(h):t.test(h+="")?'"'+h.replace(/"/g,'""')+'"':h}return{parse:n,parseRows:r,format:o,formatBody:a,formatRows:l,formatRow:c,formatValue:u}}var ov=av(","),lv=ov.parse;function cv(i){for(var t in i){var e=i[t].trim(),n,r;if(!e)e=null;else if(e==="true")e=!0;else if(e==="false")e=!1;else if(e==="NaN")e=NaN;else if(!isNaN(n=+e))e=n;else if(r=e.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))uv&&r[4]&&!r[7]&&(e=e.replace(/-/g,"/").replace(/T/," ")),e=new Date(e);else continue;i[t]=e}return i}const uv=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function hv(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);return i.text()}function fv(i,t){return fetch(i,t).then(hv)}function dv(i){return function(t,e,n){return arguments.length===2&&typeof e=="function"&&(n=e,e=void 0),fv(t,e).then(function(r){return i(r,n)})}}var pv=dv(lv);function mv(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function ql(i,t){if(!isFinite(i)||i===0)return null;var e=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"),n=i.slice(0,e);return[n.length>1?n[0]+n.slice(2):n,+i.slice(e+1)]}function da(i){return i=ql(Math.abs(i)),i?i[1]:NaN}function gv(i,t){return function(e,n){for(var r=e.length,s=[],o=0,a=i[0],l=0;r>0&&a>0&&(l+a+1>n&&(a=Math.max(1,n-l)),s.push(e.substring(r-=a,r+a)),!((l+=a+1)>n));)a=i[o=(o+1)%i.length];return s.reverse().join(t)}}function _v(i){return function(t){return t.replace(/[0-9]/g,function(e){return i[+e]})}}var xv=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function jl(i){if(!(t=xv.exec(i)))throw new Error("invalid format: "+i);var t;return new Nf({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}jl.prototype=Nf.prototype;function Nf(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Nf.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function vv(i){t:for(var t=i.length,e=1,n=-1,r;e<t;++e)switch(i[e]){case".":n=r=e;break;case"0":n===0&&(n=e),r=e;break;default:if(!+i[e])break t;n>0&&(n=0);break}return n>0?i.slice(0,n)+i.slice(r+1):i}var Zl;function yv(i,t){var e=ql(i,t);if(!e)return Zl=void 0,i.toPrecision(t);var n=e[0],r=e[1],s=r-(Zl=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=n.length;return s===o?n:s>o?n+new Array(s-o+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+ql(i,Math.max(0,t+s-1))[0]}function $d(i,t){var e=ql(i,t);if(!e)return i+"";var n=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+n:n.length>r+1?n.slice(0,r+1)+"."+n.slice(r+1):n+new Array(r-n.length+2).join("0")}const Yd={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:mv,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>$d(i*100,t),r:$d,s:yv,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function qd(i){return i}var jd=Array.prototype.map,Zd=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Sv(i){var t=i.grouping===void 0||i.thousands===void 0?qd:gv(jd.call(i.grouping,Number),i.thousands+""),e=i.currency===void 0?"":i.currency[0]+"",n=i.currency===void 0?"":i.currency[1]+"",r=i.decimal===void 0?".":i.decimal+"",s=i.numerals===void 0?qd:_v(jd.call(i.numerals,String)),o=i.percent===void 0?"%":i.percent+"",a=i.minus===void 0?"−":i.minus+"",l=i.nan===void 0?"NaN":i.nan+"";function c(h,f){h=jl(h);var d=h.fill,m=h.align,p=h.sign,_=h.symbol,g=h.zero,y=h.width,S=h.comma,v=h.precision,M=h.trim,b=h.type;b==="n"?(S=!0,b="g"):Yd[b]||(v===void 0&&(v=12),M=!0,b="g"),(g||d==="0"&&m==="=")&&(g=!0,d="0",m="=");var T=(f&&f.prefix!==void 0?f.prefix:"")+(_==="$"?e:_==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():""),R=(_==="$"?n:/[%p]/.test(b)?o:"")+(f&&f.suffix!==void 0?f.suffix:""),x=Yd[b],E=/[defgprs%]/.test(b);v=v===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function L(C){var P=T,U=R,z,B,N;if(b==="c")U=x(C)+U,C="";else{C=+C;var V=C<0||1/C<0;if(C=isNaN(C)?l:x(Math.abs(C),v),M&&(C=vv(C)),V&&+C==0&&p!=="+"&&(V=!1),P=(V?p==="("?p:a:p==="-"||p==="("?"":p)+P,U=(b==="s"&&!isNaN(C)&&Zl!==void 0?Zd[8+Zl/3]:"")+U+(V&&p==="("?")":""),E){for(z=-1,B=C.length;++z<B;)if(N=C.charCodeAt(z),48>N||N>57){U=(N===46?r+C.slice(z+1):C.slice(z))+U,C=C.slice(0,z);break}}}S&&!g&&(C=t(C,1/0));var Y=P.length+C.length+U.length,I=Y<y?new Array(y-Y+1).join(d):"";switch(S&&g&&(C=t(I+C,I.length?y-U.length:1/0),I=""),m){case"<":C=P+C+U+I;break;case"=":C=P+I+C+U;break;case"^":C=I.slice(0,Y=I.length>>1)+P+C+U+I.slice(Y);break;default:C=I+P+C+U;break}return s(C)}return L.toString=function(){return h+""},L}function u(h,f){var d=Math.max(-8,Math.min(8,Math.floor(da(f)/3)))*3,m=Math.pow(10,-d),p=c((h=jl(h),h.type="f",h),{suffix:Zd[8+d/3]});return function(_){return p(m*_)}}return{format:c,formatPrefix:u}}var Oo,pi,gg;Mv({thousands:",",grouping:[3],currency:["$",""]});function Mv(i){return Oo=Sv(i),pi=Oo.format,gg=Oo.formatPrefix,Oo}function bv(i){return Math.max(0,-da(Math.abs(i)))}function Ev(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(da(t)/3)))*3-da(Math.abs(i)))}function Tv(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,da(t)-da(i))+1}function If(i,t){return[i,vx(yx((og+t)/2))]}If.invert=function(i,t){return[i,2*Sx(Mx(t))-og]};function wv(){return Av(If).scale(961/mx)}function Av(i){var t=gx(i),e=t.center,n=t.scale,r=t.translate,s=t.clipExtent,o=null,a,l,c;t.scale=function(h){return arguments.length?(n(h),u()):n()},t.translate=function(h){return arguments.length?(r(h),u()):r()},t.center=function(h){return arguments.length?(e(h),u()):e()},t.clipExtent=function(h){return arguments.length?(h==null?o=a=l=c=null:(o=+h[0][0],a=+h[0][1],l=+h[1][0],c=+h[1][1]),u()):o==null?null:[[o,a],[l,c]]};function u(){var h=_x*n(),f=t(xx(t.rotate()).invert([0,0]));return s(o==null?[[f[0]-h,f[1]-h],[f[0]+h,f[1]+h]]:i===If?[[Math.max(f[0]-h,o),a],[Math.min(f[0]+h,l),c]]:[[o,Math.max(f[1]-h,a)],[l,Math.min(f[1]+h,c)]])}return u()}function Uf(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}const Kd=Symbol("implicit");function eo(){var i=new Gu,t=[],e=[],n=Kd;function r(s){let o=i.get(s);if(o===void 0){if(n!==Kd)return n;i.set(s,o=t.push(s)-1)}return e[o%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],i=new Gu;for(const o of s)i.has(o)||i.set(o,t.push(o)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(n=s,r):n},r.copy=function(){return eo(t,e).unknown(n)},Uf.apply(r,arguments),r}function _g(){var i=eo().unknown(void 0),t=i.domain,e=i.range,n=0,r=1,s,o,a=!1,l=0,c=0,u=.5;delete i.unknown;function h(){var f=t().length,d=r<n,m=d?r:n,p=d?n:r;s=(p-m)/Math.max(1,f-l+c*2),a&&(s=Math.floor(s)),m+=(p-m-s*(f-l))*u,o=s*(1-l),a&&(m=Math.round(m),o=Math.round(o));var _=lg(f).map(function(g){return m+s*g});return e(d?_.reverse():_)}return i.domain=function(f){return arguments.length?(t(f),h()):t()},i.range=function(f){return arguments.length?([n,r]=f,n=+n,r=+r,h()):[n,r]},i.rangeRound=function(f){return[n,r]=f,n=+n,r=+r,a=!0,h()},i.bandwidth=function(){return o},i.step=function(){return s},i.round=function(f){return arguments.length?(a=!!f,h()):a},i.padding=function(f){return arguments.length?(l=Math.min(1,c=+f),h()):l},i.paddingInner=function(f){return arguments.length?(l=Math.min(1,f),h()):l},i.paddingOuter=function(f){return arguments.length?(c=+f,h()):c},i.align=function(f){return arguments.length?(u=Math.max(0,Math.min(1,f)),h()):u},i.copy=function(){return _g(t(),[n,r]).round(a).paddingInner(l).paddingOuter(c).align(u)},Uf.apply(h(),arguments)}function xg(i){var t=i.copy;return i.padding=i.paddingOuter,delete i.paddingInner,delete i.paddingOuter,i.copy=function(){return xg(t())},i}function Cv(){return xg(_g.apply(null,arguments).paddingInner(1))}function Rv(i){return function(){return i}}function Pv(i){return+i}var Jd=[0,1];function Js(i){return i}function qu(i,t){return(t-=i=+i)?function(e){return(e-i)/t}:Rv(isNaN(t)?NaN:.5)}function Dv(i,t){var e;return i>t&&(e=i,i=t,t=e),function(n){return Math.max(i,Math.min(t,n))}}function Lv(i,t,e){var n=i[0],r=i[1],s=t[0],o=t[1];return r<n?(n=qu(r,n),s=e(o,s)):(n=qu(n,r),s=e(s,o)),function(a){return s(n(a))}}function Nv(i,t,e){var n=Math.min(i.length,t.length)-1,r=new Array(n),s=new Array(n),o=-1;for(i[n]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++o<n;)r[o]=qu(i[o],i[o+1]),s[o]=e(t[o],t[o+1]);return function(a){var l=Dx(i,a,1,n)-1;return s[l](r[l](a))}}function Iv(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function Uv(){var i=Jd,t=Jd,e=Cl,n,r,s,o=Js,a,l,c;function u(){var f=Math.min(i.length,t.length);return o!==Js&&(o=Dv(i[0],i[f-1])),a=f>2?Nv:Lv,l=c=null,h}function h(f){return f==null||isNaN(f=+f)?s:(l||(l=a(i.map(n),t,e)))(n(o(f)))}return h.invert=function(f){return o(r((c||(c=a(t,i.map(n),bx)))(f)))},h.domain=function(f){return arguments.length?(i=Array.from(f,Pv),u()):i.slice()},h.range=function(f){return arguments.length?(t=Array.from(f),u()):t.slice()},h.rangeRound=function(f){return t=Array.from(f),e=Qx,u()},h.clamp=function(f){return arguments.length?(o=f?!0:Js,u()):o!==Js},h.interpolate=function(f){return arguments.length?(e=f,u()):e},h.unknown=function(f){return arguments.length?(s=f,h):s},function(f,d){return n=f,r=d,u()}}function Fv(){return Uv()(Js,Js)}function Ov(i,t,e,n){var r=Hx(i,t,e),s;switch(n=jl(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(i),Math.abs(t));return n.precision==null&&!isNaN(s=Ev(r,o))&&(n.precision=s),gg(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(s=Tv(r,Math.max(Math.abs(i),Math.abs(t))))&&(n.precision=s-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(s=bv(r))&&(n.precision=s-(n.type==="%")*2);break}}return pi(n)}function kv(i){var t=i.domain;return i.ticks=function(e){var n=t();return Vx(n[0],n[n.length-1],e??10)},i.tickFormat=function(e,n){var r=t();return Ov(r[0],r[r.length-1],e??10,n)},i.nice=function(e){e==null&&(e=10);var n=t(),r=0,s=n.length-1,o=n[r],a=n[s],l,c,u=10;for(a<o&&(c=o,o=a,a=c,c=r,r=s,s=c);u-- >0;){if(c=Wu(o,a,e),c===l)return n[r]=o,n[s]=a,t(n);if(c>0)o=Math.floor(o/c)*c,a=Math.ceil(a/c)*c;else if(c<0)o=Math.ceil(o*c)/c,a=Math.floor(a*c)/c;else break;l=c}return i},i}function Rr(){var i=Fv();return i.copy=function(){return Iv(i,Rr())},Uf.apply(i,arguments),kv(i)}dg(Vr(-100,.75,.35),Vr(80,1.5,.8));dg(Vr(260,.75,.35),Vr(80,1.5,.8));var ko=Vr();function Bv(i){(i<0||i>1)&&(i-=Math.floor(i));var t=Math.abs(i-.5);return ko.h=360*i-100,ko.s=1.5-1.5*t,ko.l=.8-.9*t,ko+""}function le(i){return function(){return i}}const Qd=Math.abs,dn=Math.atan2,Kr=Math.cos,zv=Math.max,Gc=Math.min,Ui=Math.sin,Qs=Math.sqrt,On=1e-12,_o=Math.PI,Kl=_o/2,Pl=2*_o;function Vv(i){return i>1?0:i<-1?_o:Math.acos(i)}function tp(i){return i>=1?Kl:i<=-1?-Kl:Math.asin(i)}function Ff(i){let t=3;return i.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);t=n}return i},()=>new nv(t)}function Hv(i){return i.innerRadius}function Gv(i){return i.outerRadius}function Wv(i){return i.startAngle}function Xv(i){return i.endAngle}function $v(i){return i&&i.padAngle}function Yv(i,t,e,n,r,s,o,a){var l=e-i,c=n-t,u=o-r,h=a-s,f=h*l-u*c;if(!(f*f<On))return f=(u*(t-s)-h*(i-r))/f,[i+f*l,t+f*c]}function Bo(i,t,e,n,r,s,o){var a=i-e,l=t-n,c=(o?s:-s)/Qs(a*a+l*l),u=c*l,h=-c*a,f=i+u,d=t+h,m=e+u,p=n+h,_=(f+m)/2,g=(d+p)/2,y=m-f,S=p-d,v=y*y+S*S,M=r-s,b=f*p-m*d,T=(S<0?-1:1)*Qs(zv(0,M*M*v-b*b)),R=(b*S-y*T)/v,x=(-b*y-S*T)/v,E=(b*S+y*T)/v,L=(-b*y+S*T)/v,C=R-_,P=x-g,U=E-_,z=L-g;return C*C+P*P>U*U+z*z&&(R=E,x=L),{cx:R,cy:x,x01:-u,y01:-h,x11:R*(r/M-1),y11:x*(r/M-1)}}function qv(){var i=Hv,t=Gv,e=le(0),n=null,r=Wv,s=Xv,o=$v,a=null,l=Ff(c);function c(){var u,h,f=+i.apply(this,arguments),d=+t.apply(this,arguments),m=r.apply(this,arguments)-Kl,p=s.apply(this,arguments)-Kl,_=Qd(p-m),g=p>m;if(a||(a=u=l()),d<f&&(h=d,d=f,f=h),!(d>On))a.moveTo(0,0);else if(_>Pl-On)a.moveTo(d*Kr(m),d*Ui(m)),a.arc(0,0,d,m,p,!g),f>On&&(a.moveTo(f*Kr(p),f*Ui(p)),a.arc(0,0,f,p,m,g));else{var y=m,S=p,v=m,M=p,b=_,T=_,R=o.apply(this,arguments)/2,x=R>On&&(n?+n.apply(this,arguments):Qs(f*f+d*d)),E=Gc(Qd(d-f)/2,+e.apply(this,arguments)),L=E,C=E,P,U;if(x>On){var z=tp(x/f*Ui(R)),B=tp(x/d*Ui(R));(b-=z*2)>On?(z*=g?1:-1,v+=z,M-=z):(b=0,v=M=(m+p)/2),(T-=B*2)>On?(B*=g?1:-1,y+=B,S-=B):(T=0,y=S=(m+p)/2)}var N=d*Kr(y),V=d*Ui(y),Y=f*Kr(M),I=f*Ui(M);if(E>On){var tt=d*Kr(S),gt=d*Ui(S),_t=f*Kr(v),xt=f*Ui(v),rt;if(_<_o)if(rt=Yv(N,V,_t,xt,tt,gt,Y,I)){var H=N-rt[0],W=V-rt[1],it=tt-rt[0],ft=gt-rt[1],ut=1/Ui(Vv((H*it+W*ft)/(Qs(H*H+W*W)*Qs(it*it+ft*ft)))/2),Ot=Qs(rt[0]*rt[0]+rt[1]*rt[1]);L=Gc(E,(f-Ot)/(ut-1)),C=Gc(E,(d-Ot)/(ut+1))}else L=C=0}T>On?C>On?(P=Bo(_t,xt,N,V,d,C,g),U=Bo(tt,gt,Y,I,d,C,g),a.moveTo(P.cx+P.x01,P.cy+P.y01),C<E?a.arc(P.cx,P.cy,C,dn(P.y01,P.x01),dn(U.y01,U.x01),!g):(a.arc(P.cx,P.cy,C,dn(P.y01,P.x01),dn(P.y11,P.x11),!g),a.arc(0,0,d,dn(P.cy+P.y11,P.cx+P.x11),dn(U.cy+U.y11,U.cx+U.x11),!g),a.arc(U.cx,U.cy,C,dn(U.y11,U.x11),dn(U.y01,U.x01),!g))):(a.moveTo(N,V),a.arc(0,0,d,y,S,!g)):a.moveTo(N,V),!(f>On)||!(b>On)?a.lineTo(Y,I):L>On?(P=Bo(Y,I,tt,gt,f,-L,g),U=Bo(N,V,_t,xt,f,-L,g),a.lineTo(P.cx+P.x01,P.cy+P.y01),L<E?a.arc(P.cx,P.cy,L,dn(P.y01,P.x01),dn(U.y01,U.x01),!g):(a.arc(P.cx,P.cy,L,dn(P.y01,P.x01),dn(P.y11,P.x11),!g),a.arc(0,0,f,dn(P.cy+P.y11,P.cx+P.x11),dn(U.cy+U.y11,U.cx+U.x11),g),a.arc(U.cx,U.cy,L,dn(U.y11,U.x11),dn(U.y01,U.x01),!g))):a.arc(0,0,f,M,v,g)}if(a.closePath(),u)return a=null,u+""||null}return c.centroid=function(){var u=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,h=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-_o/2;return[Kr(h)*u,Ui(h)*u]},c.innerRadius=function(u){return arguments.length?(i=typeof u=="function"?u:le(+u),c):i},c.outerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:le(+u),c):t},c.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:le(+u),c):e},c.padRadius=function(u){return arguments.length?(n=u==null?null:typeof u=="function"?u:le(+u),c):n},c.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:le(+u),c):r},c.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:le(+u),c):s},c.padAngle=function(u){return arguments.length?(o=typeof u=="function"?u:le(+u),c):o},c.context=function(u){return arguments.length?(a=u??null,c):a},c}function Sc(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function vg(i){this._context=i}vg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function yg(i){return new vg(i)}function Sg(i){return i[0]}function Mg(i){return i[1]}function ju(i,t){var e=le(!0),n=null,r=yg,s=null,o=Ff(a);i=typeof i=="function"?i:i===void 0?Sg:le(i),t=typeof t=="function"?t:t===void 0?Mg:le(t);function a(l){var c,u=(l=Sc(l)).length,h,f=!1,d;for(n==null&&(s=r(d=o())),c=0;c<=u;++c)!(c<u&&e(h=l[c],c,l))===f&&((f=!f)?s.lineStart():s.lineEnd()),f&&s.point(+i(h,c,l),+t(h,c,l));if(d)return s=null,d+""||null}return a.x=function(l){return arguments.length?(i=typeof l=="function"?l:le(+l),a):i},a.y=function(l){return arguments.length?(t=typeof l=="function"?l:le(+l),a):t},a.defined=function(l){return arguments.length?(e=typeof l=="function"?l:le(!!l),a):e},a.curve=function(l){return arguments.length?(r=l,n!=null&&(s=r(n)),a):r},a.context=function(l){return arguments.length?(l==null?n=s=null:s=r(n=l),a):n},a}function ep(i,t,e){var n=null,r=le(!0),s=null,o=yg,a=null,l=Ff(c);i=typeof i=="function"?i:i===void 0?Sg:le(+i),t=typeof t=="function"?t:le(t===void 0?0:+t),e=typeof e=="function"?e:e===void 0?Mg:le(+e);function c(h){var f,d,m,p=(h=Sc(h)).length,_,g=!1,y,S=new Array(p),v=new Array(p);for(s==null&&(a=o(y=l())),f=0;f<=p;++f){if(!(f<p&&r(_=h[f],f,h))===g)if(g=!g)d=f,a.areaStart(),a.lineStart();else{for(a.lineEnd(),a.lineStart(),m=f-1;m>=d;--m)a.point(S[m],v[m]);a.lineEnd(),a.areaEnd()}g&&(S[f]=+i(_,f,h),v[f]=+t(_,f,h),a.point(n?+n(_,f,h):S[f],e?+e(_,f,h):v[f]))}if(y)return a=null,y+""||null}function u(){return ju().defined(r).curve(o).context(s)}return c.x=function(h){return arguments.length?(i=typeof h=="function"?h:le(+h),n=null,c):i},c.x0=function(h){return arguments.length?(i=typeof h=="function"?h:le(+h),c):i},c.x1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:le(+h),c):n},c.y=function(h){return arguments.length?(t=typeof h=="function"?h:le(+h),e=null,c):t},c.y0=function(h){return arguments.length?(t=typeof h=="function"?h:le(+h),c):t},c.y1=function(h){return arguments.length?(e=h==null?null:typeof h=="function"?h:le(+h),c):e},c.lineX0=c.lineY0=function(){return u().x(i).y(t)},c.lineY1=function(){return u().x(i).y(e)},c.lineX1=function(){return u().x(n).y(t)},c.defined=function(h){return arguments.length?(r=typeof h=="function"?h:le(!!h),c):r},c.curve=function(h){return arguments.length?(o=h,s!=null&&(a=o(s)),c):o},c.context=function(h){return arguments.length?(h==null?s=a=null:a=o(s=h),c):s},c}function jv(i,t){return t<i?-1:t>i?1:t>=i?0:NaN}function Zv(i){return i}function Kv(){var i=Zv,t=jv,e=null,n=le(0),r=le(Pl),s=le(0);function o(a){var l,c=(a=Sc(a)).length,u,h,f=0,d=new Array(c),m=new Array(c),p=+n.apply(this,arguments),_=Math.min(Pl,Math.max(-Pl,r.apply(this,arguments)-p)),g,y=Math.min(Math.abs(_)/c,s.apply(this,arguments)),S=y*(_<0?-1:1),v;for(l=0;l<c;++l)(v=m[d[l]=l]=+i(a[l],l,a))>0&&(f+=v);for(t!=null?d.sort(function(M,b){return t(m[M],m[b])}):e!=null&&d.sort(function(M,b){return e(a[M],a[b])}),l=0,h=f?(_-c*S)/f:0;l<c;++l,p=g)u=d[l],v=m[u],g=p+(v>0?v*h:0)+S,m[u]={data:a[u],index:l,value:v,startAngle:p,endAngle:g,padAngle:y};return m}return o.value=function(a){return arguments.length?(i=typeof a=="function"?a:le(+a),o):i},o.sortValues=function(a){return arguments.length?(t=a,e=null,o):t},o.sort=function(a){return arguments.length?(e=a,t=null,o):e},o.startAngle=function(a){return arguments.length?(n=typeof a=="function"?a:le(+a),o):n},o.endAngle=function(a){return arguments.length?(r=typeof a=="function"?a:le(+a),o):r},o.padAngle=function(a){return arguments.length?(s=typeof a=="function"?a:le(+a),o):s},o}class Jv{constructor(t,e){this._context=t,this._x=e}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,e){switch(t=+t,e=+e,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,e,t,e):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+e)/2,t,this._y0,t,e);break}}this._x0=t,this._y0=e}}function Qv(i){return new Jv(i,!0)}function np(i,t,e){i._context.bezierCurveTo((2*i._x0+i._x1)/3,(2*i._y0+i._y1)/3,(i._x0+2*i._x1)/3,(i._y0+2*i._y1)/3,(i._x0+4*i._x1+t)/6,(i._y0+4*i._y1+e)/6)}function bg(i){this._context=i}bg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:np(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:np(this,i,t);break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t}};function ty(i){return new bg(i)}function ip(i){return i<0?-1:1}function rp(i,t,e){var n=i._x1-i._x0,r=t-i._x1,s=(i._y1-i._y0)/(n||r<0&&-0),o=(e-i._y1)/(r||n<0&&-0),a=(s*r+o*n)/(n+r);return(ip(s)+ip(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(a))||0}function sp(i,t){var e=i._x1-i._x0;return e?(3*(i._y1-i._y0)/e-t)/2:t}function Wc(i,t,e){var n=i._x0,r=i._y0,s=i._x1,o=i._y1,a=(s-n)/3;i._context.bezierCurveTo(n+a,r+a*t,s-a,o-a*e,s,o)}function Jl(i){this._context=i}Jl.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Wc(this,this._t0,sp(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var e=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,Wc(this,sp(this,e=rp(this,i,t)),e);break;default:Wc(this,this._t0,e=rp(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=e}}};Object.create(Jl.prototype).point=function(i,t){Jl.prototype.point.call(this,t,i)};function ap(i){return new Jl(i)}function Zu(i,t){if((o=i.length)>1)for(var e=1,n,r,s=i[t[0]],o,a=s.length;e<o;++e)for(r=s,s=i[t[e]],n=0;n<a;++n)s[n][1]+=s[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]}function Ku(i){for(var t=i.length,e=new Array(t);--t>=0;)e[t]=t;return e}function ey(i,t){return i[t]}function ny(i){const t=[];return t.key=i,t}function iy(){var i=le([]),t=Ku,e=Zu,n=ey;function r(s){var o=Array.from(i.apply(this,arguments),ny),a,l=o.length,c=-1,u;for(const h of s)for(a=0,++c;a<l;++a)(o[a][c]=[0,+n(h,o[a].key,c,s)]).data=h;for(a=0,u=Sc(t(o));a<l;++a)o[u[a]].index=a;return e(o,u),o}return r.keys=function(s){return arguments.length?(i=typeof s=="function"?s:le(Array.from(s)),r):i},r.value=function(s){return arguments.length?(n=typeof s=="function"?s:le(+s),r):n},r.order=function(s){return arguments.length?(t=s==null?Ku:typeof s=="function"?s:le(Array.from(s)),r):t},r.offset=function(s){return arguments.length?(e=s??Zu,r):e},r}function ry(i,t){if(!(!((o=i.length)>0)||!((s=(r=i[t[0]]).length)>0))){for(var e=0,n=1,r,s,o;n<s;++n){for(var a=0,l=0,c=0;a<o;++a){for(var u=i[t[a]],h=u[n][1]||0,f=u[n-1][1]||0,d=(h-f)/2,m=0;m<a;++m){var p=i[t[m]],_=p[n][1]||0,g=p[n-1][1]||0;d+=_-g}l+=h,c+=d*h}r[n-1][1]+=r[n-1][0]=e,l&&(e-=c/l)}r[n-1][1]+=r[n-1][0]=e,Zu(i,t)}}function sy(i){var t=i.map(ay);return Ku(i).sort(function(e,n){return t[e]-t[n]})}function ay(i){for(var t=-1,e=0,n=i.length,r,s=-1/0;++t<n;)(r=+i[t][1])>s&&(s=r,e=t);return e}function oy(i){for(var t=0,e=-1,n=i.length,r;++e<n;)(r=+i[e][1])&&(t+=r);return t}function ly(i){var t=i.length,e,n,r=i.map(oy),s=sy(i),o=0,a=0,l=[],c=[];for(e=0;e<t;++e)n=s[e],o<a?(o+=r[n],l.push(n)):(a+=r[n],c.push(n));return c.reverse().concat(l)}class cy{constructor(t="aids"){this.diseaseId=t}async load(){const[t,e]=await Promise.all([this.loadContentConfig(),this.loadCityEpisodeConfig()]);return this.normalize(t,e)}async loadContentConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content.json`);if(!e.ok)throw new Error(`Failed to load config: ${e.status}`);return e.json()}async loadCityEpisodeConfig(){const e=await fetch(`/prj-jcie/config/${this.diseaseId}/content-map.json`);if(!e.ok){if(e.status===404)return null;throw new Error(`Failed to load city episode config: ${e.status}`)}return e.json()}normalize(t,e){const n=this.expandSteps(t.steps||[],e);return{steps:this.appendFixedClosingStep(n).map((s,o)=>({id:s.id||`step${o}`,index:o,text:s.text||null,chart:s.chart||null,map:s.map||null,image:s.image||null,source:s.source||null,scrollHeight:s.scrollHeight||null,fixedClosing:!!s.fixedClosing})),settings:t.settings||{},raw:t}}expandSteps(t,e){const n=[];for(const r of t){if(r.id==="city-episodes-anchor"||r.cityEpisodes?.enabled){const o=this.buildCityEpisodeSteps(e);if(o.length>0){n.push(...o);continue}}n.push(r)}return n}buildCityEpisodeSteps(t){const e=Array.isArray(t?.cities)?t.cities:[];if(e.length===0)return[];const n=this.escapeHtml(t?.timeline?.title||"都市エピソード"),r=this.escapeHtml(t?.timeline?.description||""),s=[...e].sort((c,u)=>(c.order??0)-(u.order??0)),o=[{id:"episode-intro",text:{content:`<h2>${n}</h2><p>${r}</p>`,visible:!0,position:{horizontal:"left",vertical:"center",width:"34%"}},chart:{visible:!1},map:{visible:!0,mode:"world-overview",center:[0,15],zoom:1.15,highlightCountries:[],lightenAllCountries:!0,lightenNonVisited:!1,markers:[]},image:{visible:!1},scrollHeight:"100vh"}],a=new Set,l=[];return s.forEach((c,u)=>{const h=c.country||"",f=Number(c.longitude),d=Number(c.latitude);Number.isFinite(f)&&Number.isFinite(d)&&l.push(c),h&&a.add(h),o.push({id:`city-episodes-${c.id||u+1}`,text:{content:this.renderCityEpisodeCard(c,u+1,s.length),visible:!0,position:{horizontal:u%2===0?"right":"left",vertical:"center",width:"36%"}},chart:{visible:!1},map:{visible:!0,mode:"single-city",cityId:c.id||null,center:[Number.isFinite(f)?f:0,Number.isFinite(d)?d:15],zoom:this.resolveCityZoom(c),highlightCountries:[...a],lightenNonVisited:!0,markers:l.map(m=>({id:m.id||`${m.nameEn||m.name}`,name:m.name||m.nameEn||"",country:m.country||"",longitude:Number(m.longitude),latitude:Number(m.latitude),color:m.style?.color||null,size:m.style?.size||7,isCurrent:m.id===c.id}))},image:{visible:!1},scrollHeight:c.transitions?.scrollHeight||"120vh"})}),o}renderCityEpisodeCard(t,e,n){const r=this.escapeHtml(t?.data?.title||t?.name||""),s=this.escapeHtml(t?.data?.description||""),o=this.escapeHtml(t?.name||t?.nameEn||""),a=this.escapeHtml(t?.nameEn||""),l=this.escapeHtml(t?.data?.url||"#"),u=t?.data?.thumbnail?`/prj-jcie/config/${this.diseaseId}/thumb/${encodeURIComponent(t.data.thumbnail)}`:"",h=u?`<img class="city-episode-thumb" src="${u}" alt="${r}" loading="lazy" />`:"";return`
      <article class="city-episode-card">
        <p class="city-episode-meta">都市エピソード ${e}/${n}</p>
        ${h}
        <h3 class="city-episode-title">${r}</h3>
        <p class="city-episode-location">${o}${a&&a!==o?`（${a}）`:""}</p>
        <p class="city-episode-description">${s}</p>
        <a class="city-episode-link" href="${l}" target="_blank" rel="noopener noreferrer">外部コンテンツを見る</a>
      </article>
    `}resolveCityZoom(t){const e=t?.transitions?.routeType;return e==="same-location"?3.6:e==="start"?2.8:2.5}escapeHtml(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}appendFixedClosingStep(t){const e=t.filter(n=>n.id!=="closing"&&n.id!=="fixed-closing");return e.push({id:"fixed-closing",fixedClosing:!0,text:null,chart:{visible:!1},map:{visible:!1},image:{visible:!1},scrollHeight:"100vh"}),e}}var uy="1.3.17";function Eg(i,t,e){return Math.max(i,Math.min(t,e))}function hy(i,t,e){return(1-e)*i+e*t}function fy(i,t,e,n){return hy(i,t,1-Math.exp(-e*n))}function dy(i,t){return(i%t+t)%t}var py=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const e=Eg(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=fy(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function my(i,t){let e;return function(...n){let r=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(r,n)},t)}}var gy=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=i,this.content=t,e&&(this.debouncedResize=my(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Tg=class{events={};emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},op=100/6,Mr={passive:!1},_y=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Mr),this.element.addEventListener("touchstart",this.onTouchStart,Mr),this.element.addEventListener("touchmove",this.onTouchMove,Mr),this.element.addEventListener("touchend",this.onTouchEnd,Mr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Tg;on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Mr),this.element.removeEventListener("touchstart",this.onTouchStart,Mr),this.element.removeEventListener("touchmove",this.onTouchMove,Mr),this.element.removeEventListener("touchend",this.onTouchEnd,Mr)}onTouchStart=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=n===1?op:n===2?this.window.width:1,s=n===1?op:n===2?this.window.height:1;t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},lp=i=>Math.min(1,1.001-Math.pow(2,-10*i)),xy=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new py;emitter=new Tg;dimensions;virtualScroll;constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:p=!0,prevent:_,virtualScroll:g,overscroll:y=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:R=T,stopInertiaOnNavigate:x=!1}={}){window.lenisVersion=uy,(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=lp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:m,autoResize:p,prevent:_,virtualScroll:g,overscroll:y,autoRaf:S,anchors:v,autoToggle:M,allowNestedScroll:b,naiveDimensions:R,stopInertiaOnNavigate:x},this.dimensions=new gy(i,t,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new _y(e,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=e.find(r=>r.getAttribute("href")?.includes("#"));if(n){const r=n.getAttribute("href");if(r){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${r.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&e.find(r=>r.host===window.location.host)&&this.reset()};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(_=>_ instanceof HTMLElement&&(typeof u=="function"&&u?.(_)||_.hasAttribute?.("data-lenis-prevent")||r&&_.hasAttribute?.("data-lenis-prevent-touch")||s&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(_,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,p=r&&n.type==="touchend";p&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof i=="string"&&["top","left","start","#"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let f;if(typeof i=="string"?(f=document.querySelector(i),f||(i==="#top"?i=0:console.warn("Lenis: Target not found",i))):i instanceof HTMLElement&&i?.nodeType&&(f=i),f){if(this.options.wrapper!==window){const m=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?m.left:m.top}const d=f.getBoundingClientRect();i=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const f=i-this.animatedScroll;f>this.limit/2?i=i-this.limit:f<-this.limit/2&&(i=i+this.limit)}}else i=Eg(0,i,this.limit);if(i===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=i),typeof o=="number"&&typeof a!="function"?a=lp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,i,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),r&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now(),r=i._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(r.time??0)>2e3){r.time=Date.now();const M=window.getComputedStyle(i);r.computedStyle=M;const b=M.overflowX,T=M.overflowY;if(s=["auto","overlay","scroll"].includes(b),o=["auto","overlay","scroll"].includes(T),r.hasOverflowX=s,r.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight,a=c>h,l=u>f,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=c,r.scrollHeight=u,r.clientWidth=h,r.clientHeight=f}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let m;if(d==="horizontal")m="x";else if(d==="vertical")m="y";else{const M=t!==0,b=e!==0;M&&s&&a&&(m="x"),b&&o&&l&&(m="y")}if(!m)return!1;let p,_,g,y,S;if(m==="x")p=i.scrollLeft,_=c-h,g=t,y=s,S=a;else if(m==="y")p=i.scrollTop,_=u-f,g=e,y=o,S=l;else return!1;return(g>0?p<_:p>0)&&y&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?dy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function rr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function wg(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pa={duration:.5,overwrite:!1,delay:0},Of,hn,Ne,Mi=1e8,Re=1/Mi,Ju=Math.PI*2,vy=Ju/4,yy=0,Ag=Math.sqrt,Sy=Math.cos,My=Math.sin,ln=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},gr=function(t){return typeof t=="number"},kf=function(t){return typeof t>"u"},ji=function(t){return typeof t=="object"},Vn=function(t){return t!==!1},Bf=function(){return typeof window<"u"},zo=function(t){return ze(t)||ln(t)},Cg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,by=/random\([^)]+\)/g,Ey=/,\s*/g,cp=/(?:-?\.?\d|\.)+/gi,Rg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pg=/[+-]=-?[.\d]+/,Ty=/[^,'"\[\]\s]+/gi,wy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Oi,Qu,zf,ci={},Ql={},Dg,Lg=function(t){return(Ql=ma(t,ci))&&qn},Vf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xo=function(t,e){return!e&&console.warn(t)},Ng=function(t,e){return t&&(ci[t]=e)&&Ql&&(Ql[t]=e)||ci},vo=function(){return 0},Ay={suppressEvents:!0,isStart:!0,kill:!1},Dl={suppressEvents:!0,kill:!1},Cy={suppressEvents:!0},Hf={},kr=[],th={},Ig,ni={},$c={},up=30,Ll=[],Gf="",Wf=function(t){var e=t[0],n,r;if(ji(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Ll.length;r--&&!Ll[r].targetTest(e););n=Ll[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new r_(t[r],n)))||t.splice(r,1);return t},vs=function(t){return t._gsap||Wf(bi(t))[0]._gsap},Ug=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():kf(n)&&t.getAttribute&&t.getAttribute(e)||n},Hn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Ie=function(t){return Math.round(t*1e7)/1e7||0},ia=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Ry=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},tc=function(){var t=kr.length,e=kr.slice(0),n,r;for(th={},kr.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Xf=function(t){return!!(t._initted||t._startAt||t.add)},Fg=function(t,e,n,r){kr.length&&!hn&&tc(),t.render(e,n,!!(hn&&e<0&&Xf(t))),kr.length&&!hn&&tc()},Og=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ty).length<2?e:ln(t)?t.trim():t},kg=function(t){return t},ui=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Py=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},ma=function(t,e){for(var n in e)t[n]=e[n];return t},hp=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ji(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},ec=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},no=function(t){var e=t.parent||Ue,n=t.keyframes?Py(Mn(t.keyframes)):ui;if(Vn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Dy=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Bg=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Mc=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Hr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ys=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ly=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},eh=function(t,e,n,r){return t._startAt&&(hn?t._startAt.revert(Dl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Ny=function i(t){return!t||t._ts&&i(t.parent)},fp=function(t){return t._repeat?ga(t._tTime,t=t.duration()+t._rDelay)*t:0},ga=function(t,e){var n=Math.floor(t=Ie(t/e));return t&&n===t?n-1:n},nc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},bc=function(t){return t._end=Ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||Re)||0))},Ec=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ie(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),bc(t),n._dirty||ys(n,t)),t},zg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=nc(t.rawTime(),e),(!e._dur||Do(0,e.totalDuration(),n)-e._tTime>Re)&&e.render(n,!0)),ys(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Re}},zi=function(t,e,n,r){return e.parent&&Hr(e),e._start=Ie((gr(n)?n:n||t!==Ue?mi(t,n,e):t._time)+e._delay),e._end=Ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bg(t,e,"_first","_last",t._sort?"_start":0),nh(e)||(t._recent=e),r||zg(t,e),t._ts<0&&Ec(t,t._tTime),t},Vg=function(t,e){return(ci.ScrollTrigger||Vf("scrollTrigger",e))&&ci.ScrollTrigger.create(e,t)},Hg=function(t,e,n,r,s){if(Yf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!hn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ig!==ri.frame)return kr.push(t),t._lazy=[s,r],1},Iy=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},nh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Uy=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&Iy(t)&&!(!t._initted&&nh(t))||(t._ts<0||t._dp._ts<0)&&!nh(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Do(0,t._tDur,e),u=ga(l,a),t._yoyo&&u&1&&(o=1-o),u!==ga(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||hn||r||t._zTime===Re||!e&&t._zTime){if(!t._initted&&Hg(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?Re:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&eh(t,e,n,!0),t._onUpdate&&!n&&ai(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ai(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Hr(t,1),!n&&!hn&&(ai(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Fy=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},_a=function(t,e,n,r){var s=t._repeat,o=Ie(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ie(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Ec(t,t._tTime=t._tDur*a),t.parent&&bc(t),n||ys(t.parent,t),t},dp=function(t){return t instanceof Pn?ys(t):_a(t,t._dur)},Oy={_start:0,endTime:vo,totalDuration:vo},mi=function i(t,e,n){var r=t.labels,s=t._recent||Oy,o=t.duration()>=Mi?s.endTime(!1):t._dur,a,l,c;return ln(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},io=function(t,e,n){var r=gr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new je(e[0],o,e[s+1])},qr=function(t,e){return t||t===0?e(t):e},Do=function(t,e,n){return n<t?t:n>e?e:n},vn=function(t,e){return!ln(t)||!(e=wy.exec(t))?"":e[1]},ky=function(t,e,n){return qr(n,function(r){return Do(t,e,r)})},ih=[].slice,Gg=function(t,e){return t&&ji(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ji(t[0]))&&!t.nodeType&&t!==Oi},By=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return ln(r)&&!e||Gg(r,1)?(s=n).push.apply(s,bi(r)):n.push(r)})||n},bi=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):ln(t)&&!n&&(Qu||!xa())?ih.call((e||zf).querySelectorAll(t),0):Mn(t)?By(t,n):Gg(t)?ih.call(t,0):t?[t]:[]},rh=function(t){return t=bi(t)[0]||xo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return bi(e,n.querySelectorAll?n:n===t?xo("Invalid scope")||zf.createElement("div"):t)}},Wg=function(t){return t.sort(function(){return .5-Math.random()})},Xg=function(t){if(ze(t))return t;var e=ji(t)?t:{each:t},n=Ss(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return ln(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,m){var p=(m||e).length,_=o[p],g,y,S,v,M,b,T,R,x;if(!_){if(x=e.grid==="auto"?0:(e.grid||[1,Mi])[1],!x){for(T=-Mi;T<(T=m[x++].getBoundingClientRect().left)&&x<p;);x<p&&x--}for(_=o[p]=[],g=l?Math.min(x,p)*u-.5:r%x,y=x===Mi?0:l?p*h/x-.5:r/x|0,T=0,R=Mi,b=0;b<p;b++)S=b%x-g,v=y-(b/x|0),_[b]=M=c?Math.abs(c==="y"?v:S):Ag(S*S+v*v),M>T&&(T=M),M<R&&(R=M);r==="random"&&Wg(_),_.max=T-R,_.min=R,_.v=p=(parseFloat(e.amount)||parseFloat(e.each)*(x>p?p-1:c?c==="y"?p/x:x:Math.max(x,p/x))||0)*(r==="edges"?-1:1),_.b=p<0?s-p:s,_.u=vn(e.amount||e.each)||0,n=n&&p<0?e_(n):n}return p=(_[f]-_.min)/_.max||0,Ie(_.b+(n?n(p):p)*_.v)+_.u}},sh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Ie(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(gr(n)?0:vn(n))}},$g=function(t,e){var n=Mn(t),r,s;return!n&&ji(t)&&(r=n=t.radius||Mi,t.values?(t=bi(t.values),(s=!gr(t[0]))&&(r*=r)):t=sh(t.increment)),qr(e,n?ze(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Mi,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||gr(o)?u:u+vn(o)}:sh(t))},Yg=function(t,e,n,r){return qr(Mn(t)?!e:n===!0?!!(n=0):!r,function(){return Mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},zy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},Vy=function(t,e){return function(n){return t(parseFloat(n))+(e||vn(n))}},Hy=function(t,e,n){return jg(t,e,0,1,n)},qg=function(t,e,n){return qr(n,function(r){return t[~~e(r)]})},Gy=function i(t,e,n){var r=e-t;return Mn(t)?qg(t,i(0,t.length),e):qr(n,function(s){return(r+(s-t)%r)%r+t})},Wy=function i(t,e,n){var r=e-t,s=r*2;return Mn(t)?qg(t,i(0,t.length-1),e):qr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},yo=function(t){return t.replace(by,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Ey);return Yg(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},jg=function(t,e,n,r,s){var o=e-t,a=r-n;return qr(s,function(l){return n+((l-t)/o*a||0)})},Xy=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=ln(t),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Mn(t)&&!Mn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(m){m*=h;var p=Math.min(f,~~m);return u[p](m-p)},n=e}else r||(t=ma(Mn(t)?[]:{},t));if(!u){for(l in e)$f.call(a,t,l,"get",e[l]);s=function(m){return Zf(m,a)||(o?t.p:t)}}}return qr(n,s)},pp=function(t,e,n){var r=t.labels,s=Mi,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ai=function(t,e,n){var r=t.vars,s=r[e],o=Ne,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&kr.length&&tc(),a&&(Ne=a),u=l?s.apply(c,l):s.call(c),Ne=o,u},$a=function(t){return Hr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!hn),t.progress()<1&&ai(t,"onInterrupt"),t},ea,Zg=[],Kg=function(t){if(t)if(t=!t.name&&t.default||t,Bf()||t.headless){var e=t.name,n=ze(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:vo,render:Zf,add:$f,kill:oS,modifier:aS,rawVars:0},o={targetTest:0,get:0,getSetter:jf,aliases:{},register:0};if(xa(),t!==r){if(ni[e])return;ui(r,ui(ec(t,s),o)),ma(r.prototype,ma(s,ec(t,o))),ni[r.prop=e]=r,t.targetTest&&(Ll.push(r),Hf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ng(e,r),t.register&&t.register(qn,r,Gn)}else Zg.push(t)},Ce=255,Ya={aqua:[0,Ce,Ce],lime:[0,Ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ce],navy:[0,0,128],white:[Ce,Ce,Ce],olive:[128,128,0],yellow:[Ce,Ce,0],orange:[Ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ce,0,0],pink:[Ce,192,203],cyan:[0,Ce,Ce],transparent:[Ce,Ce,Ce,0]},Yc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ce+.5|0},Jg=function(t,e,n){var r=t?gr(t)?[t>>16,t>>8&Ce,t&Ce]:0:Ya.black,s,o,a,l,c,u,h,f,d,m;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ya[t])r=Ya[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ce,r&Ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ce,t&Ce]}else if(t.substr(0,3)==="hsl"){if(r=m=t.match(cp),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Yc(l+1/3,s,o),r[1]=Yc(l,s,o),r[2]=Yc(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Rg),n&&r.length<4&&(r[3]=1),r}else r=t.match(cp)||Ya.transparent;r=r.map(Number)}return e&&!m&&(s=r[0]/Ce,o=r[1]/Ce,a=r[2]/Ce,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Qg=function(t){var e=[],n=[],r=-1;return t.split(Br).forEach(function(s){var o=s.match(ta)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},mp=function(t,e,n){var r="",s=(t+r).match(Br),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Jg(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Qg(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Br,"1").split(ta),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Br),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Br=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ya)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),$y=/hsl[a]?\(/,t_=function(t){var e=t.join(" "),n;if(Br.lastIndex=0,Br.test(e))return n=$y.test(e),t[1]=mp(t[1],n),t[0]=mp(t[0],n,Qg(t[1])),!0},So,ri=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function p(_){var g=i()-r,y=_===!0,S,v,M,b;if((g>t||g<0)&&(n+=g-e),r+=g,M=r-n,S=M-o,(S>0||y)&&(b=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=S+(S>=s?4:s-S),v=1),y||(l=c(p)),v)for(d=0;d<a.length;d++)a[d](M,f,b,_)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Dg&&(!Qu&&Bf()&&(Oi=Qu=window,zf=Oi.document||{},ci.gsap=qn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(qn.version),Lg(Ql||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),Zg.forEach(Kg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,o-h.time*1e3+1|0)},So=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),So=0,c=vo},lagSmoothing:function(_,g){t=_||1/0,e=Math.min(g||33,t)},fps:function(_){s=1e3/(_||240),o=h.time*1e3+s},add:function(_,g,y){var S=g?function(v,M,b,T){_(v,M,b,T),h.remove(S)}:_;return h.remove(_),a[y?"unshift":"push"](S),xa(),S},remove:function(_,g){~(g=a.indexOf(_))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),xa=function(){return!So&&ri.wake()},he={},Yy=/^[\d.\-M][\d.\-,\s]/,qy=/["']/g,jy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(qy,"").trim():+c,r=l.substr(a+1).trim();return e},Zy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},Ky=function(t){var e=(t+"").split("("),n=he[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[jy(e[1])]:Zy(t).split(",").map(Og)):he._CE&&Yy.test(t)?he._CE("",t):n},e_=function(t){return function(e){return 1-t(1-e)}},n_=function i(t,e){for(var n=t._first,r;n;)n instanceof Pn?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Ss=function(t,e){return t&&(ze(t)?t:he[t]||Ky(t))||e},Ps=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Hn(t,function(a){he[a]=ci[a]=s,he[o=a.toLowerCase()]=n;for(var l in s)he[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=he[a+"."+l]=s[l]}),s},i_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qc=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Ju*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*My((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:i_(a);return s=Ju/s,l.config=function(c,u){return i(t,c,u)},l},jc=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:i_(n);return r.config=function(s){return i(t,s)},r};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Ps(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});he.Linear.easeNone=he.none=he.Linear.easeIn;Ps("Elastic",qc("in"),qc("out"),qc());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Ps("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ps("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ps("Circ",function(i){return-(Ag(1-i*i)-1)});Ps("Sine",function(i){return i===1?1:-Sy(i*vy)+1});Ps("Back",jc("in"),jc("out"),jc());he.SteppedEase=he.steps=ci.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Re;return function(a){return((r*Do(0,o,a)|0)+s)*n}}};pa.ease=he["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Gf+=i+","+i+"Params,"});var r_=function(t,e){this.id=yy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ug,this.set=e?e.getSetter:jf},Mo=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_a(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),So||ri.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,_a(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(xa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ec(this,n),!s._dp||s.parent||zg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fg(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ga(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?nc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Re?0:this._rts,this.totalTime(Do(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),bc(this),Ly(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Re&&(this._tTime-=Re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ie(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&zi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nc(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Cy);var r=hn;return hn=n,Xf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,dp(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(mi(this,n),Vn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Vn(r)),this._dur||(this._zTime=-Re),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Re,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Re)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=ze(n)?n:kg,l=function(){var u=r.then;r.then=null,s&&s(),ze(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){$a(this)},i})();ui(Mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Re,_prom:0,_ps:!1,_rts:1});var Pn=(function(i){wg(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vn(n.sortChildren),Ue&&zi(n.parent||Ue,rr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vg(rr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return io(0,arguments,this),this},e.from=function(r,s,o){return io(1,arguments,this),this},e.fromTo=function(r,s,o,a){return io(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,no(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new je(r,s,mi(this,o),1),this},e.call=function(r,s,o){return zi(this,je.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new je(r,o,mi(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,no(o).immediateRender=Vn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,no(a).immediateRender=Vn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ie(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,m,p,_,g,y,S,v,M,b,T;if(this!==Ue&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,v=this._start,S=this._ts,g=!S,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(f=Ie(u%_),u===l?(p=this._repeat,f=c):(M=Ie(u/_),p=~~M,p&&p===M&&(f=c,p--),f>c&&(f=c)),M=ga(this._tTime,_),!a&&this._tTime&&M!==p&&this._tTime-M*_-this._dur<=0&&(M=p),b&&p&1&&(f=c-f,T=1),p!==M&&!this._lock){var R=b&&M&1,x=R===(b&&p&1);if(p<M&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ie(p*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,M=p),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;n_(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Fy(this,Ie(a),Ie(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!M&&(ai(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=-Re);break}}d=m}else{d=this._last;for(var E=r<0?r:f;d;){if(m=d._prev,(d._act||E<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||hn&&Xf(d)),f!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=E?-Re:Re);break}}d=m}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Re)._zTime=f>=a?1:-1,this._ts))return this._start=v,bc(this),this.render(r,s,o);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ai(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(gr(s)||(s=mi(this,s,r)),!(r instanceof Mo)){if(Mn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(ln(r))return this.addLabel(r,s);if(ze(r))r=je.delayedCall(0,r);else return this}return this!==r?zi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof je?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return ln(r)?this.removeLabel(r):ze(r)?this.killTweensOf(r):(r.parent===this&&Mc(this,r),r===this._recent&&(this._recent=this._last),ys(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ie(ri.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=mi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=je.delayedCall(0,s||vo,o);return a.data="isPause",this._hasPause=1,zi(this,a,mi(this,r))},e.removePause=function(r){var s=this._first;for(r=mi(this,r);s;)s._start===r&&s.data==="isPause"&&Hr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Lr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=bi(r),l=this._first,c=gr(s),u;l;)l instanceof je?Ry(l._targets,a)&&(c?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=mi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=je.to(o,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Re,onStart:function(){if(o.pause(),!d){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==_&&_a(m,_,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,ui({startAt:{time:mi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),pp(this,mi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),pp(this,mi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Re)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Ie(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ys(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ys(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Mi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ie(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;_a(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ue._ts&&(Fg(Ue,nc(r,Ue)),Ig=ri.frame),ri.frame>=up){up+=li.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&li.autoSleep&&ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ri.sleep()}}},t})(Mo);ui(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jy=function(t,e,n,r,s,o,a){var l=new Gn(this._pt,t,e,0,1,u_,null,s),c=0,u=0,h,f,d,m,p,_,g,y;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=yo(r)),o&&(y=[n,r],o(y,t,e),n=y[0],r=y[1]),f=n.match(Xc)||[];h=Xc.exec(r);)m=h[0],p=r.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:_,c:m.charAt(1)==="="?ia(_,m)-_:parseFloat(m)-_,m:d&&d<4?Math.round:0},c=Xc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Pg.test(r)||g)&&(l.e=0),this._pt=l,l},$f=function(t,e,n,r,s,o,a,l,c,u){ze(r)&&(r=r(s||0,t,o));var h=t[e],f=n!=="get"?n:ze(h)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=ze(h)?c?iS:l_:qf,m;if(ln(r)&&(~r.indexOf("random(")&&(r=yo(r)),r.charAt(1)==="="&&(m=ia(f,r)+(vn(f)||0),(m||m===0)&&(r=m))),!u||f!==r||ah)return!isNaN(f*r)&&r!==""?(m=new Gn(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?sS:c_,0,d),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!h&&!(e in t)&&Vf(e,r),Jy.call(this,t,e,f,r,d,l||li.stringFilter,c))},Qy=function(t,e,n,r,s){if(ze(t)&&(t=ro(t,s,e,n,r)),!ji(t)||t.style&&t.nodeType||Mn(t)||Cg(t))return ln(t)?ro(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=ro(t[a],s,e,n,r);return o},s_=function(t,e,n,r,s,o){var a,l,c,u;if(ni[t]&&(a=new ni[t]).init(s,a.rawVars?e[t]:Qy(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Gn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ea))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Lr,ah,Yf=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,m=t._dur,p=t._startAt,_=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:_,S=t._overwrite==="auto"&&!Of,v=t.timeline,M,b,T,R,x,E,L,C,P,U,z,B,N;if(v&&(!f||!s)&&(s="none"),t._ease=Ss(s,pa.ease),t._yEase=h?e_(Ss(h===!0?s:h,pa.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!r.runBackwards,!v||f&&!r.stagger){if(C=_[0]?vs(_[0]).harness:0,B=C&&r[C.prop],M=ec(r,Hf),p&&(p._zTime<0&&p.progress(1),e<0&&u&&a&&!d?p.render(-1,!0):p.revert(u&&m?Dl:Ay),p._lazy=0),o){if(Hr(t._startAt=je.set(_,ui({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!p&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn||!a&&!d)&&t._startAt.revert(Dl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&m&&!p){if(e&&(a=!1),T=ui({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Vn(l),immediateRender:a,stagger:0,parent:g},M),B&&(T[C.prop]=B),Hr(t._startAt=je.set(_,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn?t._startAt.revert(Dl):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Re,Re);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Vn(l)||l&&!m,b=0;b<_.length;b++){if(x=_[b],L=x._gsap||Wf(_)[b]._gsap,t._ptLookup[b]=U={},th[L.id]&&kr.length&&tc(),z=y===_?b:y.indexOf(x),C&&(P=new C).init(x,B||M,t,z,y)!==!1&&(t._pt=R=new Gn(t._pt,x,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(V){U[V]=R}),P.priority&&(E=1)),!C||B)for(T in M)ni[T]&&(P=s_(T,M,t,z,x,y))?P.priority&&(E=1):U[T]=R=$f.call(t,x,T,"get",M[T],z,y,0,r.stringFilter);t._op&&t._op[b]&&t.kill(x,t._op[b]),S&&t._pt&&(Lr=t,Ue.killTweensOf(x,U,t.globalTime(e)),N=!t.parent,Lr=0),t._pt&&l&&(th[L.id]=1)}E&&h_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!N,f&&e<=0&&v.render(Mi,!0,!0)},tS=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return ah=1,t.vars[e]="+=0",Yf(t,a),ah=0,l?xo(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=He(n)+vn(h.e)),h.b&&(h.b=u.s+vn(h.b))},eS=function(t,e){var n=t[0]?vs(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=ma({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},nS=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ro=function(t,e,n,r,s){return ze(t)?t.call(e,n,r,s):ln(t)&&~t.indexOf("random(")?yo(t):t},a_=Gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",o_={};Hn(a_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return o_[i]=1});var je=(function(i){wg(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:no(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,p=l.defaults,_=l.scrollTrigger,g=l.yoyoEase,y=r.parent||Ue,S=(Mn(n)||Cg(n)?gr(n[0]):"length"in r)?[n]:bi(n),v,M,b,T,R,x,E,L;if(a._targets=S.length?Wf(S):xo("GSAP target "+n+" not found. https://gsap.com",!li.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||zo(c)||zo(u)){if(r=a.vars,v=a.timeline=new Pn({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:S}),v.kill(),v.parent=v._dp=rr(a),v._start=0,f||zo(c)||zo(u)){if(T=S.length,E=f&&Xg(f),ji(f))for(R in f)~a_.indexOf(R)&&(L||(L={}),L[R]=f[R]);for(M=0;M<T;M++)b=ec(r,o_),b.stagger=0,g&&(b.yoyoEase=g),L&&ma(b,L),x=S[M],b.duration=+ro(c,rr(a),M,x,S),b.delay=(+ro(u,rr(a),M,x,S)||0)-a._delay,!f&&T===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(x,b,E?E(M,x,S):0),v._ease=he.none;v.duration()?c=u=0:a.timeline=0}else if(m){no(ui(v.vars.defaults,{ease:"none"})),v._ease=Ss(m.ease||r.ease||"none");var C=0,P,U,z;if(Mn(m))m.forEach(function(B){return v.to(S,B,">")}),v.duration();else{b={};for(R in m)R==="ease"||R==="easeEach"||nS(R,m[R],b,m.easeEach);for(R in b)for(P=b[R].sort(function(B,N){return B.t-N.t}),C=0,M=0;M<P.length;M++)U=P[M],z={ease:U.e,duration:(U.t-(M?P[M-1].t:0))/100*c},z[R]=U.v,v.to(S,z,C),C+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Of&&(Lr=rr(a),Ue.killTweensOf(S),Lr=0),zi(y,rr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!m&&a._start===Ie(y._time)&&Vn(h)&&Ny(rr(a))&&y.data!=="nested")&&(a._tTime=-Re,a.render(Math.max(0,-u)||0)),_&&Vg(rr(a),_),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Re&&!u?l:r<Re?0:r,f,d,m,p,_,g,y,S,v;if(!c)Uy(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+r,s,o);if(f=Ie(h%p),h===l?(m=this._repeat,f=c):(_=Ie(h/p),m=~~_,m&&m===_?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(v=this._yEase,f=c-f),_=ga(this._tTime,p),f===a&&!o&&this._initted&&m===_)return this._tTime=h,this;m!==_&&(S&&this._yEase&&n_(S,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(Ie(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(Hg(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&h&&!s&&!_&&(ai(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&eh(this,r,s,o),ai(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&eh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Hr(this,1),!s&&!(u&&!a)&&(h||a||g)&&(ai(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){So||ri.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yf(this,c),u=this._ease(c/this._dur),tS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ec(this,0),this.parent||Bg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Lr&&Lr.vars.overwrite!==!0)._first||$a(this),this.parent&&o!==this.timeline.totalDuration()&&_a(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?bi(r):a,c=this._ptLookup,u=this._pt,h,f,d,m,p,_,g;if((!s||s==="all")&&Dy(a,l))return s==="all"&&(this._pt=0),$a(this);for(h=this._op=this._op||[],s!=="all"&&(ln(s)&&(p={},Hn(s,function(y){return p[y]=1}),s=p),s=eS(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(h[g]=s,m=f,d={}):(d=h[g]=h[g]||{},m=s);for(p in m)_=f&&f[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&Mc(this,_,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&$a(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return io(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return io(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ue.killTweensOf(r,s,o)},t})(Mo);ui(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(i){je[i]=function(){var t=new Pn,e=ih.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var qf=function(t,e,n){return t[e]=n},l_=function(t,e,n){return t[e](n)},iS=function(t,e,n,r){return t[e](r.fp,n)},rS=function(t,e,n){return t.setAttribute(e,n)},jf=function(t,e){return ze(t[e])?l_:kf(t[e])&&t.setAttribute?rS:qf},c_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},sS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},u_=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Zf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},aS=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},oS=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Mc(this,e,"_pt"):e.dep||(n=1),e=r;return!n},lS=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},h_=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Gn=(function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||c_,this.d=l||this,this.set=c||qf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=lS,this.m=n,this.mt=s,this.tween=r},i})();Hn(Gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Hf[i]=1});ci.TweenMax=ci.TweenLite=je;ci.TimelineLite=ci.TimelineMax=Pn;Ue=new Pn({sortChildren:!1,defaults:pa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=t_;var Ms=[],Nl={},cS=[],gp=0,uS=0,Zc=function(t){return(Nl[t]||cS).map(function(e){return e()})},oh=function(){var t=Date.now(),e=[];t-gp>2&&(Zc("matchMediaInit"),Ms.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Oi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Zc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),gp=t,Zc("matchMedia"))},f_=(function(){function i(e,n){this.selector=n&&rh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=uS++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ze(n)&&(s=r,r=n,n=ze);var o=this,a=function(){var c=Ne,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=rh(s)),Ne=o,h=r.apply(o,arguments),ze(h)&&o._r.push(h),Ne=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=Ne;Ne=null,n(this),Ne=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof je&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ms.length;o--;)Ms[o].id===this.id&&Ms.splice(o,1)},t.revert=function(n){this.kill(n||{})},i})(),hS=(function(){function i(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){ji(n)||(n={matches:n});var o=new f_(0,s||this.scope),a=o.conditions={},l,c,u;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Oi.matchMedia(n[c]),l&&(Ms.indexOf(o)<0&&Ms.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(oh):l.addEventListener("change",oh)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),ic={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Kg(r)})},timeline:function(t){return new Pn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,r){ln(t)&&(t=bi(t)[0]);var s=vs(t||{}).get,o=n?kg:Og;return n==="native"&&(n=""),t&&(e?o((ni[e]&&ni[e].get||s)(t,e,n,r)):function(a,l,c){return o((ni[a]&&ni[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=bi(t),t.length>1){var r=t.map(function(u){return qn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=ni[e],a=vs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;ea._pt=0,h.init(t,n?u+n:u,ea,0,[t]),h.render(1,h),ea._pt&&Zf(1,ea)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=qn.to(t,ui((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ss(t.ease,pa.ease)),hp(pa,t||{})},config:function(t){return hp(li,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ni[a]&&!ci[a]&&xo(e+" effect requires "+a+" plugin.")}),$c[e]=function(a,l,c){return n(bi(a),ui(l||{},s),c)},o&&(Pn.prototype[e]=function(a,l,c){return this.add($c[e](a,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){he[t]=Ss(e)},parseEase:function(t,e){return arguments.length?Ss(t,e):he},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Pn(t),r,s;for(n.smoothChildTiming=Vn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,r=Ue._first;r;)s=r._next,(e||!(!r._dur&&r instanceof je&&r.vars.onComplete===r._targets[0]))&&zi(n,r,r._start-r._delay),r=s;return zi(Ue,n,0),n},context:function(t,e){return t?new f_(t,e):Ne},matchMedia:function(t){return new hS(t)},matchMediaRefresh:function(){return Ms.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||oh()},addEventListener:function(t,e){var n=Nl[t]||(Nl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Nl[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:Gy,wrapYoyo:Wy,distribute:Xg,random:Yg,snap:$g,normalize:Hy,getUnit:vn,clamp:ky,splitColor:Jg,toArray:bi,selector:rh,mapRange:jg,pipe:zy,unitize:Vy,interpolate:Xy,shuffle:Wg},install:Lg,effects:$c,ticker:ri,updateRoot:Pn.updateRoot,plugins:ni,globalTimeline:Ue,core:{PropTween:Gn,globals:Ng,Tween:je,Timeline:Pn,Animation:Mo,getCache:vs,_removeLinkedListItem:Mc,reverting:function(){return hn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return Of=t}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ic[i]=je[i]});ri.add(Pn.updateRoot);ea=ic.to({},{duration:0});var fS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},dS=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=fS(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Kc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}dS(a,s)}}}},qn=ic.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Kc("roundProps",sh),Kc("modifiers"),Kc("snap",$g))||ic;je.version=Pn.version=qn.version="3.14.2";Dg=1;Bf()&&xa();he.Power0;he.Power1;he.Power2;he.Power3;he.Power4;he.Linear;he.Quad;he.Cubic;he.Quart;he.Quint;he.Strong;he.Elastic;he.Back;he.SteppedEase;he.Bounce;he.Sine;he.Expo;he.Circ;var _p,Nr,ra,Kf,ps,xp,Jf,pS=function(){return typeof window<"u"},_r={},os=180/Math.PI,sa=Math.PI/180,Ns=Math.atan2,vp=1e8,Qf=/([A-Z])/g,mS=/(left|right|width|margin|padding|x)/i,gS=/[\s,\(]\S/,Hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_S=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},vS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},yS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},d_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},p_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},SS=function(t,e,n){return t.style[e]=n},MS=function(t,e,n){return t.style.setProperty(e,n)},bS=function(t,e,n){return t._gsap[e]=n},ES=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},TS=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},wS=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Fe="transform",Wn=Fe+"Origin",AS=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in _r&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Hi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ar(r,a)}):this.tfm[t]=o.x?o[t]:ar(r,t),t===Wn&&(this.tfm.zOrigin=o.zOrigin);else return Hi.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Fe)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Wn,e,"")),t=Fe}(s||e)&&this.props.push(t,e,s[t])},m_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},CS=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Qf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Jf(),(!s||!s.isStart)&&!n[Fe]&&(m_(n),r.zOrigin&&n[Wn]&&(n[Wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},g_=function(t,e){var n={target:t,props:[],revert:CS,save:AS};return t._gsap||qn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},__,ch=function(t,e){var n=Nr.createElementNS?Nr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Nr.createElement(t);return n&&n.style?n:Nr.createElement(t)},oi=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Qf,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,va(e)||e,1)||""},yp="O,Moz,ms,Ms,Webkit".split(","),va=function(t,e,n){var r=e||ps,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(yp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?yp[o]:"")+t},uh=function(){pS()&&window.document&&(_p=window,Nr=_p.document,ra=Nr.documentElement,ps=ch("div")||{style:{}},ch("div"),Fe=va(Fe),Wn=Fe+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",__=!!va("perspective"),Jf=qn.core.reverting,Kf=1)},Sp=function(t){var e=t.ownerSVGElement,n=ch("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ra.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ra.removeChild(n),s},Mp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},x_=function(t){var e,n;try{e=t.getBBox()}catch{e=Sp(t),n=1}return e&&(e.width||e.height)||n||(e=Sp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Mp(t,["x","cx","x1"])||0,y:+Mp(t,["y","cy","y1"])||0,width:0,height:0}:e},v_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&x_(t))},Gr=function(t,e){if(e){var n=t.style,r;e in _r&&e!==Wn&&(e=Fe),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Qf,"-$1").toLowerCase())):n.removeAttribute(e)}},Ir=function(t,e,n,r,s,o){var a=new Gn(t._pt,e,n,0,1,o?p_:d_);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},bp={deg:1,rad:1,turn:1},RS={grid:1,flex:1},Wr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ps.style,l=mS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",m,p,_,g;if(r===o||!s||bp[r]||bp[o])return s;if(o!=="px"&&!f&&(s=i(t,e,n,"px")),g=t.getCTM&&v_(t),(d||o==="%")&&(_r[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[u],He(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:r),p=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===Nr||!p.appendChild)&&(p=Nr.body),_=p._gsap,_&&d&&_.width&&l&&_.time===ri.time&&!_.uncache)return He(s/_.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+r,m=t[u],y?t.style[e]=y:Gr(t,e)}else(d||o==="%")&&!RS[oi(p,"display")]&&(a.position=oi(t,"position")),p===t&&(a.position="static"),p.appendChild(ps),m=ps[u],p.removeChild(ps),a.position="absolute";return l&&d&&(_=vs(p),_.time=ri.time,_.width=p[u]),He(f?m*s/h:m&&s?h/m*s:0)},ar=function(t,e,n,r){var s;return Kf||uh(),e in Hi&&e!=="transform"&&(e=Hi[e],~e.indexOf(",")&&(e=e.split(",")[0])),_r[e]&&e!=="transform"?(s=Eo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:sc(oi(t,Wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=rc[e]&&rc[e](t,e,n)||oi(t,e)||Ug(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Wr(t,e,s,n)+n:s},PS=function(t,e,n,r){if(!n||n==="none"){var s=va(e,t,1),o=s&&oi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new Gn(this._pt,t.style,e,0,1,u_),l=0,c=0,u,h,f,d,m,p,_,g,y,S,v,M;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=oi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=t.style[e],t.style[e]=r,r=oi(t,e)||r,p?t.style[e]=p:Gr(t,e)),u=[n,r],t_(u),n=u[0],r=u[1],f=n.match(ta)||[],M=r.match(ta)||[],M.length){for(;h=ta.exec(r);)_=h[0],y=r.substring(l,h.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),_!==(p=f[c++]||"")&&(d=parseFloat(p)||0,v=p.substr((d+"").length),_.charAt(1)==="="&&(_=ia(d,_)+v),g=parseFloat(_),S=_.substr((g+"").length),l=ta.lastIndex-S.length,S||(S=S||li.units[e]||v,l===r.length&&(r+=S,a.e+=S)),v!==S&&(d=Wr(t,e,p,S)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?p_:d_;return Pg.test(r)&&(a.e=0),this._pt=a,a},Ep={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DS=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Ep[n]||n,e[1]=Ep[r]||r,e.join(" ")},LS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],_r[a]&&(l=1,a=a==="transformOrigin"?Wn:Fe),Gr(n,a);l&&(Gr(n,Fe),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Eo(n,1),o.uncache=1,m_(r)))}},rc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Gn(t._pt,e,n,0,0,LS);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},bo=[1,0,0,1,0,0],y_={},S_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Tp=function(t){var e=oi(t,Fe);return S_(e)?bo:e.substr(7).match(Rg).map(He)},td=function(t,e){var n=t._gsap||vs(t),r=t.style,s=Tp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bo:s):(s===bo&&!t.offsetParent&&t!==ra&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ra.appendChild(t)),s=Tp(t),l?r.display=l:Gr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ra.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hh=function(t,e,n,r,s,o){var a=t._gsap,l=s||td(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],p=l[2],_=l[3],g=l[4],y=l[5],S=e.split(" "),v=parseFloat(S[0])||0,M=parseFloat(S[1])||0,b,T,R,x;n?l!==bo&&(T=d*_-m*p)&&(R=v*(_/T)+M*(-p/T)+(p*y-_*g)/T,x=v*(-m/T)+M*(d/T)-(d*y-m*g)/T,v=R,M=x):(b=x_(t),v=b.x+(~S[0].indexOf("%")?v/100*b.width:v),M=b.y+(~(S[1]||S[0]).indexOf("%")?M/100*b.height:M)),r||r!==!1&&a.smooth?(g=v-c,y=M-u,a.xOffset=h+(g*d+y*p)-g,a.yOffset=f+(g*m+y*_)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Wn]="0px 0px",o&&(Ir(o,a,"xOrigin",c,v),Ir(o,a,"yOrigin",u,M),Ir(o,a,"xOffset",h,a.xOffset),Ir(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},Eo=function(t,e){var n=t._gsap||new r_(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=oi(t,Wn)||"0",u,h,f,d,m,p,_,g,y,S,v,M,b,T,R,x,E,L,C,P,U,z,B,N,V,Y,I,tt,gt,_t,xt,rt;return u=h=f=p=_=g=y=S=v=0,d=m=1,n.svg=!!(t.getCTM&&v_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),r.scale=r.rotate=r.translate="none"),T=td(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),hh(t,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,b=n.yOrigin||0,T!==bo&&(L=T[0],C=T[1],P=T[2],U=T[3],u=z=T[4],h=B=T[5],T.length===6?(d=Math.sqrt(L*L+C*C),m=Math.sqrt(U*U+P*P),p=L||C?Ns(C,L)*os:0,y=P||U?Ns(P,U)*os+p:0,y&&(m*=Math.abs(Math.cos(y*sa))),n.svg&&(u-=M-(M*L+b*P),h-=b-(M*C+b*U))):(rt=T[6],_t=T[7],I=T[8],tt=T[9],gt=T[10],xt=T[11],u=T[12],h=T[13],f=T[14],R=Ns(rt,gt),_=R*os,R&&(x=Math.cos(-R),E=Math.sin(-R),N=z*x+I*E,V=B*x+tt*E,Y=rt*x+gt*E,I=z*-E+I*x,tt=B*-E+tt*x,gt=rt*-E+gt*x,xt=_t*-E+xt*x,z=N,B=V,rt=Y),R=Ns(-P,gt),g=R*os,R&&(x=Math.cos(-R),E=Math.sin(-R),N=L*x-I*E,V=C*x-tt*E,Y=P*x-gt*E,xt=U*E+xt*x,L=N,C=V,P=Y),R=Ns(C,L),p=R*os,R&&(x=Math.cos(R),E=Math.sin(R),N=L*x+C*E,V=z*x+B*E,C=C*x-L*E,B=B*x-z*E,L=N,z=V),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,g=180-g),d=He(Math.sqrt(L*L+C*C+P*P)),m=He(Math.sqrt(B*B+rt*rt)),R=Ns(z,B),y=Math.abs(R)>2e-4?R*os:0,v=xt?1/(xt<0?-xt:xt):0),n.svg&&(N=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!S_(oi(t,Fe)),N&&t.setAttribute("transform",N))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=He(d),n.scaleY=He(m),n.rotation=He(p)+a,n.rotationX=He(_)+a,n.rotationY=He(g)+a,n.skewX=y+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Wn]=sc(c)),n.xOffset=n.yOffset=0,n.force3D=li.force3D,n.renderTransform=n.svg?IS:__?M_:NS,n.uncache=0,n},sc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Jc=function(t,e,n){var r=vn(e);return He(parseFloat(e)+parseFloat(Wr(t,"x",n+"px",r)))+r},NS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,M_(t,e)},Jr="0deg",Na="0px",Qr=") ",M_=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,p=n.scaleY,_=n.transformPerspective,g=n.force3D,y=n.target,S=n.zOrigin,v="",M=g==="auto"&&t&&t!==1||g===!0;if(S&&(h!==Jr||u!==Jr)){var b=parseFloat(u)*sa,T=Math.sin(b),R=Math.cos(b),x;b=parseFloat(h)*sa,x=Math.cos(b),o=Jc(y,o,T*x*-S),a=Jc(y,a,-Math.sin(b)*-S),l=Jc(y,l,R*x*-S+S)}_!==Na&&(v+="perspective("+_+Qr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(M||o!==Na||a!==Na||l!==Na)&&(v+=l!==Na||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qr),c!==Jr&&(v+="rotate("+c+Qr),u!==Jr&&(v+="rotateY("+u+Qr),h!==Jr&&(v+="rotateX("+h+Qr),(f!==Jr||d!==Jr)&&(v+="skew("+f+", "+d+Qr),(m!==1||p!==1)&&(v+="scale("+m+", "+p+Qr),y.style[Fe]=v||"translate(0, 0)"},IS=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,p=n.yOrigin,_=n.xOffset,g=n.yOffset,y=n.forceCSS,S=parseFloat(o),v=parseFloat(a),M,b,T,R,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=sa,c*=sa,M=Math.cos(l)*h,b=Math.sin(l)*h,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=sa,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,b*=x)),M=He(M),b=He(b),T=He(T),R=He(R)):(M=h,R=f,b=T=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=Wr(d,"x",o,"px"),v=Wr(d,"y",a,"px")),(m||p||_||g)&&(S=He(S+m-(m*M+p*T)+_),v=He(v+p-(m*b+p*R)+g)),(r||s)&&(x=d.getBBox(),S=He(S+r/100*x.width),v=He(v+s/100*x.height)),x="matrix("+M+","+b+","+T+","+R+","+S+","+v+")",d.setAttribute("transform",x),y&&(d.style[Fe]=x)},US=function(t,e,n,r,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?os:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*vp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*vp)%o-~~(c/o)*o)),t._pt=f=new Gn(t._pt,e,n,r,c,_S),f.e=u,f.u="deg",t._props.push(n),f},wp=function(t,e){for(var n in e)t[n]=e[n];return t},FS=function(t,e,n){var r=wp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,m;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Fe]=e,a=Eo(n,1),Gr(n,Fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fe],o[Fe]=e,a=Eo(n,1),o[Fe]=c);for(l in _r)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=vn(c),m=vn(u),h=d!==m?Wr(n,l,c,m):parseFloat(c),f=parseFloat(u),t._pt=new Gn(t._pt,a,l,h,f-h,lh),t._pt.u=m||0,t._props.push(l));wp(a,r)};Hn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});rc[t>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return ar(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,p){return d[m]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,h)}});var b_={name:"css",register:uh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,m,p,_,g,y,S,v,M,b,T,R,x;Kf||uh(),this.styles=this.styles||g_(t),R=this.styles.props,this.tween=n;for(p in e)if(p!=="autoRound"&&(u=e[p],!(ni[p]&&s_(p,e,n,r,t,s)))){if(d=typeof u,m=rc[p],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=yo(u)),m)m(this,t,p,u,n)&&(T=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(p)+"").trim(),u+="",Br.lastIndex=0,Br.test(c)||(_=vn(c),g=vn(u),g?_!==g&&(c=Wr(t,p,c,g)+g):_&&(u+=_)),this.add(a,"setProperty",c,u,r,s,0,0,p),o.push(p),R.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,r,t,s):l[p],ln(c)&&~c.indexOf("random(")&&(c=yo(c)),vn(c+"")||c==="auto"||(c+=li.units[p]||vn(ar(t,p))||""),(c+"").charAt(1)==="="&&(c=ar(t,p))):c=ar(t,p),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),p in Hi&&(p==="autoAlpha"&&(f===1&&ar(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Ir(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Hi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),S=p in _r,S){if(this.styles.save(p),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=oi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=u,u=oi(t,"perspective"),E?t.style.perspective=E:Gr(t,"perspective")}h=parseFloat(u)}if(v||(M=t._gsap,M.renderTransform&&!e.parseTransform||Eo(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new Gn(this._pt,a,Fe,0,1,M.renderTransform,M,0,-1),v.dep=1),p==="scale")this._pt=new Gn(this._pt,M,"scaleY",M.scaleY,(y?ia(M.scaleY,y+h):h)-M.scaleY||0,lh),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){R.push(Wn,0,a[Wn]),u=DS(u),M.svg?hh(t,u,0,b,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&Ir(this,M,"zOrigin",M.zOrigin,g),Ir(this,a,p,sc(c),sc(u)));continue}else if(p==="svgOrigin"){hh(t,u,1,b,0,this);continue}else if(p in y_){US(this,M,p,f,y?ia(f,y+u):u);continue}else if(p==="smoothOrigin"){Ir(this,M,"smooth",M.smooth,u);continue}else if(p==="force3D"){M[p]=u;continue}else if(p==="transform"){FS(this,u,t);continue}}else p in a||(p=va(p)||p);if(S||(h||h===0)&&(f||f===0)&&!gS.test(u)&&p in a)_=(c+"").substr((f+"").length),h||(h=0),g=vn(u)||(p in li.units?li.units[p]:_),_!==g&&(f=Wr(t,p,c,g)),this._pt=new Gn(this._pt,S?M:a,p,f,(y?ia(f,y+h):h)-f,!S&&(g==="px"||p==="zIndex")&&e.autoRound!==!1?yS:lh),this._pt.u=g||0,S&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=vS):_!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=xS);else if(p in a)PS.call(this,t,p,c,y?y+u:u);else if(p in t)this.add(t,p,c||t[p],y?y+u:u,r,s);else if(p!=="parseTransform"){Vf(p,u);continue}S||(p in a?R.push(p,0,a[p]):typeof t[p]=="function"?R.push(p,2,t[p]()):R.push(p,1,c||t[p])),o.push(p)}}T&&h_(this)},render:function(t,e){if(e.tween._time||!Jf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ar,aliases:Hi,getSetter:function(t,e,n){var r=Hi[e];return r&&r.indexOf(",")<0&&(e=r),e in _r&&e!==Wn&&(t._gsap.x||ar(t,"x"))?n&&xp===n?e==="scale"?ES:bS:(xp=n||{})&&(e==="scale"?TS:wS):t.style&&!kf(t.style[e])?SS:~e.indexOf("-")?MS:jf(t,e)},core:{_removeProperty:Gr,_getMatrix:td}};qn.utils.checkPrefix=va;qn.core.getStyleSaver=g_;(function(i,t,e,n){var r=Hn(i+","+t+","+e,function(s){_r[s]=1});Hn(t,function(s){li.units[s]="deg",y_[s]=1}),Hi[r[13]]=i+","+t,Hn(n,function(s){var o=s.split(":");Hi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){li.units[i]="px"});qn.registerPlugin(b_);var ac=qn.registerPlugin(b_)||qn;ac.core.Tween;function OS(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function kS(i,t,e){return t&&OS(i.prototype,t),i}var cn,Il,si,Ur,Fr,aa,E_,ls,so,T_,ur,Pi,w_,A_=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},C_=1,na=[],oe=[],$i=[],ao=Date.now,fh=function(t,e){return e},BS=function(){var t=so.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,oe),r.push.apply(r,$i),oe=n,$i=r,fh=function(o,a){return e[o](a)}},zr=function(t,e){return~$i.indexOf(t)&&$i[$i.indexOf(t)+1][e]},oo=function(t){return!!~T_.indexOf(t)},Tn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},En=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Vo="scrollLeft",Ho="scrollTop",dh=function(){return ur&&ur.isPressed||oe.cache++},oc=function(t,e){var n=function r(s){if(s||s===0){C_&&(si.history.scrollRestoration="manual");var o=ur&&ur.isPressed;s=r.v=Math.round(s)||(ur&&ur.iOS?1:0),t(s),r.cacheID=oe.cache,o&&fh("ss",s)}else(e||oe.cache!==r.cacheID||fh("ref"))&&(r.cacheID=oe.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Dn={s:Vo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:oc(function(i){return arguments.length?si.scrollTo(i,Qe.sc()):si.pageXOffset||Ur[Vo]||Fr[Vo]||aa[Vo]||0})},Qe={s:Ho,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:oc(function(i){return arguments.length?si.scrollTo(Dn.sc(),i):si.pageYOffset||Ur[Ho]||Fr[Ho]||aa[Ho]||0})},Bn=function(t,e){return(e&&e._ctx&&e._ctx.selector||cn.utils.toArray)(t)[0]||(typeof t=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},zS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Xr=function(t,e){var n=e.s,r=e.sc;oo(t)&&(t=Ur.scrollingElement||Fr);var s=oe.indexOf(t),o=r===Qe.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+o]||Tn(t,"scroll",dh);var a=oe[s+o],l=a||(oe[s+o]=oc(zr(t,n),!0)||(oo(t)?r:oc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=cn.getProperty(t,"scrollBehavior")==="smooth"),l},ph=function(t,e,n){var r=t,s=t,o=ao(),a=o,l=e||50,c=Math.max(500,l*3),u=function(m,p){var _=ao();p||_-o>l?(s=r,r=m,a=o,o=_):n?r+=m:r=s+(m-s)/(_-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(m){var p=a,_=s,g=ao();return(m||m===0)&&m!==r&&u(m),o===a||g-a>c?0:(r+(n?_:-_))/((n?g:o)-p)*1e3};return{update:u,reset:h,getVelocity:f}},Ia=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ap=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},R_=function(){so=cn.core.globals().ScrollTrigger,so&&so.core&&BS()},P_=function(t){return cn=t||A_(),!Il&&cn&&typeof document<"u"&&document.body&&(si=window,Ur=document,Fr=Ur.documentElement,aa=Ur.body,T_=[si,Ur,Fr,aa],cn.utils.clamp,w_=cn.core.context||function(){},ls="onpointerenter"in aa?"pointer":"mouse",E_=We.isTouch=si.matchMedia&&si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pi=We.eventTypes=("ontouchstart"in Fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return C_=0},500),R_(),Il=1),Il};Dn.op=Qe;oe.cache=0;var We=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){Il||P_(cn)||console.warn("Please gsap.registerPlugin(Observer)"),so||R_();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,p=n.event,_=n.onDragStart,g=n.onDragEnd,y=n.onDrag,S=n.onPress,v=n.onRelease,M=n.onRight,b=n.onLeft,T=n.onUp,R=n.onDown,x=n.onChangeX,E=n.onChangeY,L=n.onChange,C=n.onToggleX,P=n.onToggleY,U=n.onHover,z=n.onHoverEnd,B=n.onMove,N=n.ignoreCheck,V=n.isNormalizer,Y=n.onGestureStart,I=n.onGestureEnd,tt=n.onWheel,gt=n.onEnable,_t=n.onDisable,xt=n.onClick,rt=n.scrollSpeed,H=n.capture,W=n.allowClicks,it=n.lockAxis,ft=n.onLockAxis;this.target=a=Bn(a)||Fr,this.vars=n,d&&(d=cn.utils.toArray(d)),r=r||1e-9,s=s||0,m=m||1,rt=rt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(si.getComputedStyle(aa).lineHeight)||22);var ut,Ot,Wt,St,Ut,Vt,Nt,$=this,O=0,fe=0,Zt=n.passive||!u&&n.passive!==!1,nt=Xr(a,Dn),ot=Xr(a,Qe),D=nt(),w=ot(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Pi[0]==="pointerdown",J=oo(a),Q=a.ownerDocument||Ur,Z=[0,0,0],wt=[0,0,0],ht=0,Dt=function(){return ht=ao()},Pt=function(Ft,Kt){return($.event=Ft)&&d&&zS(Ft.target,d)||Kt&&k&&Ft.pointerType!=="touch"||N&&N(Ft,Kt)},at=function(){$._vx.reset(),$._vy.reset(),Ot.pause(),h&&h($)},dt=function(){var Ft=$.deltaX=Ap(Z),Kt=$.deltaY=Ap(wt),Et=Math.abs(Ft)>=r,Yt=Math.abs(Kt)>=r;L&&(Et||Yt)&&L($,Ft,Kt,Z,wt),Et&&(M&&$.deltaX>0&&M($),b&&$.deltaX<0&&b($),x&&x($),C&&$.deltaX<0!=O<0&&C($),O=$.deltaX,Z[0]=Z[1]=Z[2]=0),Yt&&(R&&$.deltaY>0&&R($),T&&$.deltaY<0&&T($),E&&E($),P&&$.deltaY<0!=fe<0&&P($),fe=$.deltaY,wt[0]=wt[1]=wt[2]=0),(St||Wt)&&(B&&B($),Wt&&(_&&Wt===1&&_($),y&&y($),Wt=0),St=!1),Vt&&!(Vt=!1)&&ft&&ft($),Ut&&(tt($),Ut=!1),ut=0},bt=function(Ft,Kt,Et){Z[Et]+=Ft,wt[Et]+=Kt,$._vx.update(Ft),$._vy.update(Kt),c?ut||(ut=requestAnimationFrame(dt)):dt()},Lt=function(Ft,Kt){it&&!Nt&&($.axis=Nt=Math.abs(Ft)>Math.abs(Kt)?"x":"y",Vt=!0),Nt!=="y"&&(Z[2]+=Ft,$._vx.update(Ft,!0)),Nt!=="x"&&(wt[2]+=Kt,$._vy.update(Kt,!0)),c?ut||(ut=requestAnimationFrame(dt)):dt()},ct=function(Ft){if(!Pt(Ft,1)){Ft=Ia(Ft,u);var Kt=Ft.clientX,Et=Ft.clientY,Yt=Kt-$.x,Bt=Et-$.y,qt=$.isDragging;$.x=Kt,$.y=Et,(qt||(Yt||Bt)&&(Math.abs($.startX-Kt)>=s||Math.abs($.startY-Et)>=s))&&(Wt||(Wt=qt?2:1),qt||($.isDragging=!0),Lt(Yt,Bt))}},$t=$.onPress=function(At){Pt(At,1)||At&&At.button||($.axis=Nt=null,Ot.pause(),$.isPressed=!0,At=Ia(At),O=fe=0,$.startX=$.x=At.clientX,$.startY=$.y=At.clientY,$._vx.reset(),$._vy.reset(),Tn(V?a:Q,Pi[1],ct,Zt,!0),$.deltaX=$.deltaY=0,S&&S($))},F=$.onRelease=function(At){if(!Pt(At,1)){En(V?a:Q,Pi[1],ct,!0);var Ft=!isNaN($.y-$.startY),Kt=$.isDragging,Et=Kt&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),Yt=Ia(At);!Et&&Ft&&($._vx.reset(),$._vy.reset(),u&&W&&cn.delayedCall(.08,function(){if(ao()-ht>300&&!At.defaultPrevented){if(At.target.click)At.target.click();else if(Q.createEvent){var Bt=Q.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,si,1,Yt.screenX,Yt.screenY,Yt.clientX,Yt.clientY,!1,!1,!1,!1,0,null),At.target.dispatchEvent(Bt)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,h&&Kt&&!V&&Ot.restart(!0),Wt&&dt(),g&&Kt&&g($),v&&v($,Et)}},vt=function(Ft){return Ft.touches&&Ft.touches.length>1&&($.isGesturing=!0)&&Y(Ft,$.isDragging)},lt=function(){return($.isGesturing=!1)||I($)},yt=function(Ft){if(!Pt(Ft)){var Kt=nt(),Et=ot();bt((Kt-D)*rt,(Et-w)*rt,1),D=Kt,w=Et,h&&Ot.restart(!0)}},st=function(Ft){if(!Pt(Ft)){Ft=Ia(Ft,u),tt&&(Ut=!0);var Kt=(Ft.deltaMode===1?l:Ft.deltaMode===2?si.innerHeight:1)*m;bt(Ft.deltaX*Kt,Ft.deltaY*Kt,0),h&&!V&&Ot.restart(!0)}},et=function(Ft){if(!Pt(Ft)){var Kt=Ft.clientX,Et=Ft.clientY,Yt=Kt-$.x,Bt=Et-$.y;$.x=Kt,$.y=Et,St=!0,h&&Ot.restart(!0),(Yt||Bt)&&Lt(Yt,Bt)}},mt=function(Ft){$.event=Ft,U($)},zt=function(Ft){$.event=Ft,z($)},pe=function(Ft){return Pt(Ft)||Ia(Ft,u)&&xt($)};Ot=$._dc=cn.delayedCall(f||.25,at).pause(),$.deltaX=$.deltaY=0,$._vx=ph(0,50,!0),$._vy=ph(0,50,!0),$.scrollX=nt,$.scrollY=ot,$.isDragging=$.isGesturing=$.isPressed=!1,w_(this),$.enable=function(At){return $.isEnabled||(Tn(J?Q:a,"scroll",dh),o.indexOf("scroll")>=0&&Tn(J?Q:a,"scroll",yt,Zt,H),o.indexOf("wheel")>=0&&Tn(a,"wheel",st,Zt,H),(o.indexOf("touch")>=0&&E_||o.indexOf("pointer")>=0)&&(Tn(a,Pi[0],$t,Zt,H),Tn(Q,Pi[2],F),Tn(Q,Pi[3],F),W&&Tn(a,"click",Dt,!0,!0),xt&&Tn(a,"click",pe),Y&&Tn(Q,"gesturestart",vt),I&&Tn(Q,"gestureend",lt),U&&Tn(a,ls+"enter",mt),z&&Tn(a,ls+"leave",zt),B&&Tn(a,ls+"move",et)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=St=Wt=!1,$._vx.reset(),$._vy.reset(),D=nt(),w=ot(),At&&At.type&&$t(At),gt&&gt($)),$},$.disable=function(){$.isEnabled&&(na.filter(function(At){return At!==$&&oo(At.target)}).length||En(J?Q:a,"scroll",dh),$.isPressed&&($._vx.reset(),$._vy.reset(),En(V?a:Q,Pi[1],ct,!0)),En(J?Q:a,"scroll",yt,H),En(a,"wheel",st,H),En(a,Pi[0],$t,H),En(Q,Pi[2],F),En(Q,Pi[3],F),En(a,"click",Dt,!0),En(a,"click",pe),En(Q,"gesturestart",vt),En(Q,"gestureend",lt),En(a,ls+"enter",mt),En(a,ls+"leave",zt),En(a,ls+"move",et),$.isEnabled=$.isPressed=$.isDragging=!1,_t&&_t($))},$.kill=$.revert=function(){$.disable();var At=na.indexOf($);At>=0&&na.splice(At,1),ur===$&&(ur=0)},na.push($),V&&oo(a)&&(ur=$),$.enable(p)},kS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();We.version="3.14.2";We.create=function(i){return new We(i)};We.register=P_;We.getAll=function(){return na.slice()};We.getById=function(i){return na.filter(function(t){return t.vars.id===i})[0]};A_()&&cn.registerPlugin(We);var It,Zs,ae,De,ii,xe,ed,lc,To,lo,qa,Go,gn,Tc,mh,Cn,Cp,Rp,Ks,D_,Qc,L_,An,gh,N_,I_,Pr,_h,nd,oa,id,co,xh,tu,Wo=1,xn=Date.now,eu=xn(),Ei=0,ja=0,Pp=function(t,e,n){var r=ei(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},Dp=function(t,e){return e&&(!ei(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},VS=function i(){return ja&&requestAnimationFrame(i)},Lp=function(){return Tc=1},Np=function(){return Tc=0},ki=function(t){return t},Za=function(t){return Math.round(t*1e5)/1e5||0},U_=function(){return typeof window<"u"},F_=function(){return It||U_()&&(It=window.gsap)&&It.registerPlugin&&It},ws=function(t){return!!~ed.indexOf(t)},O_=function(t){return(t==="Height"?id:ae["inner"+t])||ii["client"+t]||xe["client"+t]},k_=function(t){return zr(t,"getBoundingClientRect")||(ws(t)?function(){return Bl.width=ae.innerWidth,Bl.height=id,Bl}:function(){return or(t)})},HS=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=zr(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?O_(s):t["client"+s])||0}},GS=function(t,e){return!e||~$i.indexOf(t)?k_(t):function(){return Bl}},Gi=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=zr(t,n))?o()-k_(t)()[s]:ws(t)?(ii[n]||xe[n])-O_(r):t[n]-t["offset"+r])},Xo=function(t,e){for(var n=0;n<Ks.length;n+=3)(!e||~e.indexOf(Ks[n+1]))&&t(Ks[n],Ks[n+1],Ks[n+2])},ei=function(t){return typeof t=="string"},yn=function(t){return typeof t=="function"},Ka=function(t){return typeof t=="number"},cs=function(t){return typeof t=="object"},Ua=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},nu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Is=Math.abs,B_="left",z_="top",rd="right",sd="bottom",bs="width",Es="height",uo="Right",ho="Left",fo="Top",po="Bottom",qe="padding",xi="margin",ya="Width",ad="Height",Je="px",vi=function(t){return ae.getComputedStyle(t)},WS=function(t){var e=vi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ip=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},or=function(t,e){var n=e&&vi(t)[mh]!=="matrix(1, 0, 0, 1, 0, 0)"&&It.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},cc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},V_=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},XS=function(t){return function(e){return It.utils.snap(V_(t),e)}},od=function(t){var e=It.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},$S=function(t){return function(e,n){return od(V_(t))(e,n.direction)}},$o=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},on=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},an=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Yo=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Up={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qo={toggleActions:"play",anticipatePin:0},uc={top:0,left:0,center:.5,bottom:1,right:1},Ul=function(t,e){if(ei(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in uc?uc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},jo=function(t,e,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=De.createElement("div"),p=ws(n)||zr(n,"pinType")==="fixed",_=t.indexOf("scroller")!==-1,g=p?xe:n,y=t.indexOf("start")!==-1,S=y?c:u,v="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(v+=(r===Qe?rd:sd)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=v,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+r.op.d2],Fl(m,0,r,y),m},Fl=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+ya]=1,s["border"+a+ya]=0,s[n.p]=e+"px",It.set(t,s)},ie=[],vh={},wo,Fp=function(){return xn()-Ei>34&&(wo||(wo=requestAnimationFrame(fr)))},Us=function(){(!An||!An.isPressed||An.startX>xe.clientWidth)&&(oe.cache++,An?wo||(wo=requestAnimationFrame(fr)):fr(),Ei||Cs("scrollStart"),Ei=xn())},iu=function(){I_=ae.innerWidth,N_=ae.innerHeight},Ja=function(t){oe.cache++,(t===!0||!gn&&!L_&&!De.fullscreenElement&&!De.webkitFullscreenElement&&(!gh||I_!==ae.innerWidth||Math.abs(ae.innerHeight-N_)>ae.innerHeight*.25))&&lc.restart(!0)},As={},YS=[],H_=function i(){return an(Qt,"scrollEnd",i)||ms(!0)},Cs=function(t){return As[t]&&As[t].map(function(e){return e()})||YS},ti=[],G_=function(t){for(var e=0;e<ti.length;e+=5)(!t||ti[e+4]&&ti[e+4].query===t)&&(ti[e].style.cssText=ti[e+1],ti[e].getBBox&&ti[e].setAttribute("transform",ti[e+2]||""),ti[e+3].uncache=1)},W_=function(){return oe.forEach(function(t){return yn(t)&&++t.cacheID&&(t.rec=t())})},ld=function(t,e){var n;for(Cn=0;Cn<ie.length;Cn++)n=ie[Cn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));co=!0,e&&G_(e),e||Cs("revert")},X_=function(t,e){oe.cache++,(e||!Rn)&&oe.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),ei(t)&&(ae.history.scrollRestoration=nd=t)},Rn,Ts=0,Op,qS=function(){if(Op!==Ts){var t=Op=Ts;requestAnimationFrame(function(){return t===Ts&&ms(!0)})}},$_=function(){xe.appendChild(oa),id=!An&&oa.offsetHeight||ae.innerHeight,xe.removeChild(oa)},kp=function(t){return To(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ms=function(t,e){if(ii=De.documentElement,xe=De.body,ed=[ae,De,ii,xe],Ei&&!t&&!co){on(Qt,"scrollEnd",H_);return}$_(),Rn=Qt.isRefreshing=!0,co||W_();var n=Cs("refreshInit");D_&&Qt.sort(),e||ld(),oe.forEach(function(r){yn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ie.slice(0).forEach(function(r){return r.refresh()}),co=!1,ie.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),xh=1,kp(!0),ie.forEach(function(r){var s=Gi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),kp(!1),xh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),oe.forEach(function(r){yn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),X_(nd,1),lc.pause(),Ts++,Rn=2,fr(2),ie.forEach(function(r){return yn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Rn=Qt.isRefreshing=!1,Cs("refresh")},yh=0,Ol=1,mo,fr=function(t){if(t===2||!Rn&&!co){Qt.isUpdating=!0,mo&&mo.update(0);var e=ie.length,n=xn(),r=n-eu>=50,s=e&&ie[0].scroll();if(Ol=yh>s?-1:1,Rn||(yh=s),r&&(Ei&&!Tc&&n-Ei>200&&(Ei=0,Cs("scrollEnd")),qa=eu,eu=n),Ol<0){for(Cn=e;Cn-- >0;)ie[Cn]&&ie[Cn].update(0,r);Ol=1}else for(Cn=0;Cn<e;Cn++)ie[Cn]&&ie[Cn].update(0,r);Qt.isUpdating=!1}wo=0},Sh=[B_,z_,sd,rd,xi+po,xi+uo,xi+fo,xi+ho,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],kl=Sh.concat([bs,Es,"boxSizing","max"+ya,"max"+ad,"position",xi,qe,qe+fo,qe+uo,qe+po,qe+ho]),jS=function(t,e,n){la(n);var r=t._gsap;if(r.spacerIsNative)la(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},ru=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=Sh.length,o=e.style,a=t.style,l;s--;)l=Sh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[sd]=a[rd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[bs]=cc(t,Dn)+Je,o[Es]=cc(t,Qe)+Je,o[qe]=a[xi]=a[z_]=a[B_]="0",la(r),a[bs]=a["max"+ya]=n[bs],a[Es]=a["max"+ad]=n[Es],a[qe]=n[qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},ZS=/([A-Z])/g,la=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||It.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(ZS,"-$1").toLowerCase())}},Zo=function(t){for(var e=kl.length,n=t.style,r=[],s=0;s<e;s++)r.push(kl[s],n[kl[s]]);return r.t=t,r},KS=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},Bl={left:0,top:0},Bp=function(t,e,n,r,s,o,a,l,c,u,h,f,d,m){yn(t)&&(t=t(l)),ei(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Ul("0"+t.substr(3),n):0));var p=d?d.time():0,_,g,y;if(d&&d.seek(0),isNaN(t)||(t=+t),Ka(t))d&&(t=It.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&Fl(a,n,r,!0);else{yn(e)&&(e=e(l));var S=(t||"0").split(" "),v,M,b,T;y=Bn(e,l)||xe,v=or(y)||{},(!v||!v.left&&!v.top)&&vi(y).display==="none"&&(T=y.style.display,y.style.display="block",v=or(y),T?y.style.display=T:y.style.removeProperty("display")),M=Ul(S[0],v[r.d]),b=Ul(S[1]||"0",n),t=v[r.p]-c[r.p]-u+M+s-b,a&&Fl(a,b,r,n-b<20||a._isStart&&b>20),n-=n-b}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var R=t+n,x=o._isStart;_="scroll"+r.d2,Fl(o,R,r,x&&R>20||!x&&(h?Math.max(xe[_],ii[_]):o.parentNode[_])<=R+1),h&&(c=or(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+Je))}return d&&y&&(_=or(y),d.seek(f),g=or(y),d._caScrollDist=_[r.p]-g[r.p],t=t/d._caScrollDist*f),d&&d.seek(p),d?t:Math.round(t)},JS=/(webkit|moz|length|cssText|inset)/i,zp=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===xe){t._stOrig=s.cssText,a=vi(t);for(o in a)!+o&&!JS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;It.core.getCache(t).uncache=1,e.appendChild(t)}},Y_=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Ko=function(t,e,n){var r={};r[e.p]="+="+n,It.set(t,r)},Vp=function(t,e){var n=Xr(t,e),r="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||n();var p=Y_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return p(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&fr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=It.to(t,l),f};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(t,"wheel",n.wheelHandler),Qt.isTouch&&on(t,"touchmove",n.wheelHandler),s},Qt=(function(){function i(e,n){Zs||i.register(It)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_h(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ja){this.update=this.refresh=this.kill=ki;return}n=Ip(ei(n)||Ka(n)||n.nodeType?{trigger:n}:n,qo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,p=s.invalidateOnRefresh,_=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,S=s.once,v=s.snap,M=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,x=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:Qe,L=!h&&h!==0,C=Bn(n.scroller||ae),P=It.core.getCache(C),U=ws(C),z=("pinType"in n?n.pinType:zr(C,"pinType")||U&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=L&&n.toggleActions.split(" "),V="markers"in n?n.markers:qo.markers,Y=U?0:parseFloat(vi(C)["border"+E.p2+ya])||0,I=this,tt=n.onRefreshInit&&function(){return n.onRefreshInit(I)},gt=HS(C,U,E),_t=GS(C,U),xt=0,rt=0,H=0,W=Xr(C,E),it,ft,ut,Ot,Wt,St,Ut,Vt,Nt,$,O,fe,Zt,nt,ot,D,w,k,J,Q,Z,wt,ht,Dt,Pt,at,dt,bt,Lt,ct,$t,F,vt,lt,yt,st,et,mt,zt;if(I._startClamp=I._endClamp=!1,I._dir=E,_*=45,I.scroller=C,I.scroll=T?T.time.bind(T):W,Ot=W(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(D_=1,n.refreshPriority===-9999&&(mo=I)),P.tweenScroll=P.tweenScroll||{top:Vp(C,Qe),left:Vp(C,Dn)},I.tweenTo=it=P.tweenScroll[E.p],I.scrubDuration=function(Et){vt=Ka(Et)&&Et,vt?F?F.duration(Et):F=It.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:vt,paused:!0,onComplete:function(){return g&&g(I)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(h),ct=0,l||(l=r.vars.id)),v&&((!cs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in xe.style&&It.set(U?[xe,ii]:C,{scrollBehavior:"auto"}),oe.forEach(function(Et){return yn(Et)&&Et.target===(U?De.scrollingElement||ii:C)&&(Et.smooth=!1)}),ut=yn(v.snapTo)?v.snapTo:v.snapTo==="labels"?XS(r):v.snapTo==="labelsDirectional"?$S(r):v.directional!==!1?function(Et,Yt){return od(v.snapTo)(Et,xn()-rt<500?0:Yt.direction)}:It.utils.snap(v.snapTo),lt=v.duration||{min:.1,max:2},lt=cs(lt)?lo(lt.min,lt.max):lo(lt,lt),yt=It.delayedCall(v.delay||vt/2||.1,function(){var Et=W(),Yt=xn()-rt<500,Bt=it.tween;if((Yt||Math.abs(I.getVelocity())<10)&&!Bt&&!Tc&&xt!==Et){var qt=(Et-St)/nt,Ve=r&&!L?r.totalProgress():qt,re=Yt?0:(Ve-$t)/(xn()-qa)*1e3||0,ye=It.utils.clamp(-qt,1-qt,Is(re/2)*re/.185),$e=qt+(v.inertia===!1?0:ye),Le,we,me=v,Nn=me.onStart,be=me.onInterrupt,fn=me.onComplete;if(Le=ut($e,I),Ka(Le)||(Le=$e),we=Math.max(0,Math.round(St+Le*nt)),Et<=Ut&&Et>=St&&we!==Et){if(Bt&&!Bt._initted&&Bt.data<=Is(we-Et))return;v.inertia===!1&&(ye=Le-qt),it(we,{duration:lt(Is(Math.max(Is($e-Ve),Is(Le-Ve))*.185/re/.05||0)),ease:v.ease||"power3",data:Is(we-Et),onInterrupt:function(){return yt.restart(!0)&&be&&be(I)},onComplete:function(){I.update(),xt=W(),r&&!L&&(F?F.resetTo("totalProgress",Le,r._tTime/r._tDur):r.progress(Le)),ct=$t=r&&!L?r.totalProgress():I.progress,y&&y(I),fn&&fn(I)}},Et,ye*nt,we-Et-ye*nt),Nn&&Nn(I,it.tween)}}else I.isActive&&xt!==Et&&yt.restart(!0)}).pause()),l&&(vh[l]=I),f=I.trigger=Bn(f||d!==!0&&d),zt=f&&f._gsap&&f._gsap.stRevert,zt&&(zt=zt(I)),d=d===!0?f:Bn(d),ei(a)&&(a={targets:f,className:a}),d&&(m===!1||m===xi||(m=!m&&d.parentNode&&d.parentNode.style&&vi(d.parentNode).display==="flex"?!1:qe),I.pin=d,ft=It.core.getCache(d),ft.spacer?ot=ft.pinState:(b&&(b=Bn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),ft.spacerIsNative=!!b,b&&(ft.spacerState=Zo(b))),ft.spacer=k=b||De.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),ft.pinState=ot=Zo(d)),n.force3D!==!1&&It.set(d,{force3D:!0}),I.spacer=k=ft.spacer,Lt=vi(d),Dt=Lt[m+E.os2],Q=It.getProperty(d),Z=It.quickSetter(d,E.a,Je),ru(d,k,Lt),w=Zo(d)),V){fe=cs(V)?Ip(V,Up):Up,$=jo("scroller-start",l,C,E,fe,0),O=jo("scroller-end",l,C,E,fe,0,$),J=$["offset"+E.op.d2];var pe=Bn(zr(C,"content")||C);Vt=this.markerStart=jo("start",l,pe,E,fe,J,0,T),Nt=this.markerEnd=jo("end",l,pe,E,fe,J,0,T),T&&(mt=It.quickSetter([Vt,Nt],E.a,Je)),!z&&!($i.length&&zr(C,"fixedMarkers")===!0)&&(WS(U?xe:C),It.set([$,O],{force3D:!0}),at=It.quickSetter($,E.a,Je),bt=It.quickSetter(O,E.a,Je))}if(T){var At=T.vars.onUpdate,Ft=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),At&&At.apply(T,Ft||[])})}if(I.previous=function(){return ie[ie.indexOf(I)-1]},I.next=function(){return ie[ie.indexOf(I)+1]},I.revert=function(Et,Yt){if(!Yt)return I.kill(!0);var Bt=Et!==!1||!I.enabled,qt=gn;Bt!==I.isReverted&&(Bt&&(st=Math.max(W(),I.scroll.rec||0),H=I.progress,et=r&&r.progress()),Vt&&[Vt,Nt,$,O].forEach(function(Ve){return Ve.style.display=Bt?"none":"block"}),Bt&&(gn=I,I.update(Bt)),d&&(!M||!I.isActive)&&(Bt?jS(d,k,ot):ru(d,k,vi(d),Pt)),Bt||I.update(Bt),gn=qt,I.isReverted=Bt)},I.refresh=function(Et,Yt,Bt,qt){if(!((gn||!I.enabled)&&!Yt)){if(d&&Et&&Ei){on(i,"scrollEnd",H_);return}!Rn&&tt&&tt(I),gn=I,it.tween&&!Bt&&(it.tween.kill(),it.tween=0),F&&F.pause(),p&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Rt){return Rt.vars.immediateRender&&Rt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Ve=gt(),re=_t(),ye=T?T.duration():Gi(C,E),$e=nt<=.01||!nt,Le=0,we=qt||0,me=cs(Bt)?Bt.end:n.end,Nn=n.endTrigger||f,be=cs(Bt)?Bt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),fn=I.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,I),jn=f&&Math.max(0,ie.indexOf(I))||0,Ze=jn,Ke,nn,Ji,Ds,rn,A,G,K,q,X,pt,Ct,Mt;for(V&&cs(Bt)&&(Ct=It.getProperty($,E.p),Mt=It.getProperty(O,E.p));Ze-- >0;)A=ie[Ze],A.end||A.refresh(0,1)||(gn=I),G=A.pin,G&&(G===f||G===d||G===fn)&&!A.isReverted&&(X||(X=[]),X.unshift(A),A.revert(!0,!0)),A!==ie[Ze]&&(jn--,Ze--);for(yn(be)&&(be=be(I)),be=Pp(be,"start",I),St=Bp(be,f,Ve,E,W(),Vt,$,I,re,Y,z,ye,T,I._startClamp&&"_startClamp")||(d?-.001:0),yn(me)&&(me=me(I)),ei(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(ei(be)?be.split(" ")[0]:"")+me:(Le=Ul(me.substr(2),Ve),me=ei(be)?be:(T?It.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,St):St)+Le,Nn=f)),me=Pp(me,"end",I),Ut=Math.max(St,Bp(me||(Nn?"100% 0":ye),Nn,Ve,E,W()+Le,Nt,O,I,re,Y,z,ye,T,I._endClamp&&"_endClamp"))||-.001,Le=0,Ze=jn;Ze--;)A=ie[Ze]||{},G=A.pin,G&&A.start-A._pinPush<=St&&!T&&A.end>0&&(Ke=A.end-(I._startClamp?Math.max(0,A.start):A.start),(G===f&&A.start-A._pinPush<St||G===fn)&&isNaN(be)&&(Le+=Ke*(1-A.progress)),G===d&&(we+=Ke));if(St+=Le,Ut+=Le,I._startClamp&&(I._startClamp+=Le),I._endClamp&&!Rn&&(I._endClamp=Ut||-.001,Ut=Math.min(Ut,Gi(C,E))),nt=Ut-St||(St-=.01)&&.001,$e&&(H=It.utils.clamp(0,1,It.utils.normalize(St,Ut,st))),I._pinPush=we,Vt&&Le&&(Ke={},Ke[E.a]="+="+Le,fn&&(Ke[E.p]="-="+W()),It.set([Vt,Nt],Ke)),d&&!(xh&&I.end>=Gi(C,E)))Ke=vi(d),Ds=E===Qe,Ji=W(),wt=parseFloat(Q(E.a))+we,!ye&&Ut>1&&(pt=(U?De.scrollingElement||ii:C).style,pt={style:pt,value:pt["overflow"+E.a.toUpperCase()]},U&&vi(xe)["overflow"+E.a.toUpperCase()]!=="scroll"&&(pt.style["overflow"+E.a.toUpperCase()]="scroll")),ru(d,k,Ke),w=Zo(d),nn=or(d,!0),K=z&&Xr(C,Ds?Dn:Qe)(),m?(Pt=[m+E.os2,nt+we+Je],Pt.t=k,Ze=m===qe?cc(d,E)+nt+we:0,Ze&&(Pt.push(E.d,Ze+Je),k.style.flexBasis!=="auto"&&(k.style.flexBasis=Ze+Je)),la(Pt),fn&&ie.forEach(function(Rt){Rt.pin===fn&&Rt.vars.pinSpacing!==!1&&(Rt._subPinOffset=!0)}),z&&W(st)):(Ze=cc(d,E),Ze&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=Ze+Je)),z&&(rn={top:nn.top+(Ds?Ji-St:K)+Je,left:nn.left+(Ds?K:Ji-St)+Je,boxSizing:"border-box",position:"fixed"},rn[bs]=rn["max"+ya]=Math.ceil(nn.width)+Je,rn[Es]=rn["max"+ad]=Math.ceil(nn.height)+Je,rn[xi]=rn[xi+fo]=rn[xi+uo]=rn[xi+po]=rn[xi+ho]="0",rn[qe]=Ke[qe],rn[qe+fo]=Ke[qe+fo],rn[qe+uo]=Ke[qe+uo],rn[qe+po]=Ke[qe+po],rn[qe+ho]=Ke[qe+ho],D=KS(ot,rn,M),Rn&&W(0)),r?(q=r._initted,Qc(1),r.render(r.duration(),!0,!0),ht=Q(E.a)-wt+nt+we,dt=Math.abs(nt-ht)>1,z&&dt&&D.splice(D.length-2,2),r.render(0,!0,!0),q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Qc(0)):ht=nt,pt&&(pt.value?pt.style["overflow"+E.a.toUpperCase()]=pt.value:pt.style.removeProperty("overflow-"+E.a));else if(f&&W()&&!T)for(nn=f.parentNode;nn&&nn!==xe;)nn._pinOffset&&(St-=nn._pinOffset,Ut-=nn._pinOffset),nn=nn.parentNode;X&&X.forEach(function(Rt){return Rt.revert(!1,!0)}),I.start=St,I.end=Ut,Ot=Wt=Rn?st:W(),!T&&!Rn&&(Ot<st&&W(st),I.scroll.rec=0),I.revert(!1,!0),rt=xn(),yt&&(xt=-1,yt.restart(!0)),gn=0,r&&L&&(r._initted||et)&&r.progress()!==et&&r.progress(et||0,!0).render(r.time(),!0,!0),($e||H!==I.progress||T||p||r&&!r._initted)&&(r&&!L&&(r._initted||H||r.vars.immediateRender!==!1)&&r.totalProgress(T&&St<-.001&&!H?It.utils.normalize(St,Ut,0):H,!0),I.progress=$e||(Ot-St)/nt===H?0:H),d&&m&&(k._pinOffset=Math.round(I.progress*ht)),F&&F.invalidate(),isNaN(Ct)||(Ct-=It.getProperty($,E.p),Mt-=It.getProperty(O,E.p),Ko($,E,Ct),Ko(Vt,E,Ct-(qt||0)),Ko(O,E,Mt),Ko(Nt,E,Mt-(qt||0))),$e&&!Rn&&I.update(),u&&!Rn&&!Zt&&(Zt=!0,u(I),Zt=!1)}},I.getVelocity=function(){return(W()-Wt)/(xn()-qa)*1e3||0},I.endAnimation=function(){Ua(I.callbackAnimation),r&&(F?F.progress(1):r.paused()?L||Ua(r,I.direction<0,1):Ua(r,r.reversed()))},I.labelToScroll=function(Et){return r&&r.labels&&(St||I.refresh()||St)+r.labels[Et]/r.duration()*nt||0},I.getTrailing=function(Et){var Yt=ie.indexOf(I),Bt=I.direction>0?ie.slice(0,Yt).reverse():ie.slice(Yt+1);return(ei(Et)?Bt.filter(function(qt){return qt.vars.preventOverlaps===Et}):Bt).filter(function(qt){return I.direction>0?qt.end<=St:qt.start>=Ut})},I.update=function(Et,Yt,Bt){if(!(T&&!Bt&&!Et)){var qt=Rn===!0?st:I.scroll(),Ve=Et?0:(qt-St)/nt,re=Ve<0?0:Ve>1?1:Ve||0,ye=I.progress,$e,Le,we,me,Nn,be,fn,jn;if(Yt&&(Wt=Ot,Ot=T?W():qt,v&&($t=ct,ct=r&&!L?r.totalProgress():re)),_&&d&&!gn&&!Wo&&Ei&&(!re&&St<qt+(qt-Wt)/(xn()-qa)*_?re=1e-4:re===1&&Ut>qt+(qt-Wt)/(xn()-qa)*_&&(re=.9999)),re!==ye&&I.enabled){if($e=I.isActive=!!re&&re<1,Le=!!ye&&ye<1,be=$e!==Le,Nn=be||!!re!=!!ye,I.direction=re>ye?1:-1,I.progress=re,Nn&&!gn&&(we=re&&!ye?0:re===1?1:ye===1?2:3,L&&(me=!be&&N[we+1]!=="none"&&N[we+1]||N[we],jn=r&&(me==="complete"||me==="reset"||me in r))),x&&(be||jn)&&(jn||h||!r)&&(yn(x)?x(I):I.getTrailing(x).forEach(function(Ji){return Ji.endAnimation()})),L||(F&&!gn&&!Wo?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",re,r._tTime/r._tDur):(F.vars.totalProgress=re,F.invalidate().restart())):r&&r.totalProgress(re,!!(gn&&(rt||Et)))),d){if(Et&&m&&(k.style[m+E.os2]=Dt),!z)Z(Za(wt+ht*re));else if(Nn){if(fn=!Et&&re>ye&&Ut+1>qt&&qt+1>=Gi(C,E),M)if(!Et&&($e||fn)){var Ze=or(d,!0),Ke=qt-St;zp(d,xe,Ze.top+(E===Qe?Ke:0)+Je,Ze.left+(E===Qe?0:Ke)+Je)}else zp(d,k);la($e||fn?D:w),dt&&re<1&&$e||Z(wt+(re===1&&!fn?ht:0))}}v&&!it.tween&&!gn&&!Wo&&yt.restart(!0),a&&(be||S&&re&&(re<1||!tu))&&To(a.targets).forEach(function(Ji){return Ji.classList[$e||S?"add":"remove"](a.className)}),o&&!L&&!Et&&o(I),Nn&&!gn?(L&&(jn&&(me==="complete"?r.pause().totalProgress(1):me==="reset"?r.restart(!0).pause():me==="restart"?r.restart(!0):r[me]()),o&&o(I)),(be||!tu)&&(c&&be&&nu(I,c),B[we]&&nu(I,B[we]),S&&(re===1?I.kill(!1,1):B[we]=0),be||(we=re===1?1:3,B[we]&&nu(I,B[we]))),R&&!$e&&Math.abs(I.getVelocity())>(Ka(R)?R:2500)&&(Ua(I.callbackAnimation),F?F.progress(1):Ua(r,me==="reverse"?1:!re,1))):L&&o&&!gn&&o(I)}if(bt){var nn=T?qt/T.duration()*(T._caScrollDist||0):qt;at(nn+($._isFlipped?1:0)),bt(nn)}mt&&mt(-qt/T.duration()*(T._caScrollDist||0))}},I.enable=function(Et,Yt){I.enabled||(I.enabled=!0,on(C,"resize",Ja),U||on(C,"scroll",Us),tt&&on(i,"refreshInit",tt),Et!==!1&&(I.progress=H=0,Ot=Wt=xt=W()),Yt!==!1&&I.refresh())},I.getTween=function(Et){return Et&&it?it.tween:F},I.setPositions=function(Et,Yt,Bt,qt){if(T){var Ve=T.scrollTrigger,re=T.duration(),ye=Ve.end-Ve.start;Et=Ve.start+ye*Et/re,Yt=Ve.start+ye*Yt/re}I.refresh(!1,!1,{start:Dp(Et,Bt&&!!I._startClamp),end:Dp(Yt,Bt&&!!I._endClamp)},qt),I.update()},I.adjustPinSpacing=function(Et){if(Pt&&Et){var Yt=Pt.indexOf(E.d)+1;Pt[Yt]=parseFloat(Pt[Yt])+Et+Je,Pt[1]=parseFloat(Pt[1])+Et+Je,la(Pt)}},I.disable=function(Et,Yt){if(Et!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Yt||F&&F.pause(),st=0,ft&&(ft.uncache=1),tt&&an(i,"refreshInit",tt),yt&&(yt.pause(),it.tween&&it.tween.kill()&&(it.tween=0)),!U)){for(var Bt=ie.length;Bt--;)if(ie[Bt].scroller===C&&ie[Bt]!==I)return;an(C,"resize",Ja),U||an(C,"scroll",Us)}},I.kill=function(Et,Yt){I.disable(Et,Yt),F&&!Yt&&F.kill(),l&&delete vh[l];var Bt=ie.indexOf(I);Bt>=0&&ie.splice(Bt,1),Bt===Cn&&Ol>0&&Cn--,Bt=0,ie.forEach(function(qt){return qt.scroller===I.scroller&&(Bt=1)}),Bt||Rn||(I.scroll.rec=0),r&&(r.scrollTrigger=null,Et&&r.revert({kill:!1}),Yt||r.kill()),Vt&&[Vt,Nt,$,O].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),mo===I&&(mo=0),d&&(ft&&(ft.uncache=1),Bt=0,ie.forEach(function(qt){return qt.pin===d&&Bt++}),Bt||(ft.spacer=0)),n.onKill&&n.onKill(I)},ie.push(I),I.enable(!1,!1),zt&&zt(I),r&&r.add&&!nt){var Kt=I.update;I.update=function(){I.update=Kt,oe.cache++,St||Ut||I.refresh()},It.delayedCall(.01,I.update),nt=.01,St=Ut=0}else I.refresh();d&&qS()},i.register=function(n){return Zs||(It=n||F_(),U_()&&window.document&&i.enable(),Zs=ja),Zs},i.defaults=function(n){if(n)for(var r in n)qo[r]=n[r];return qo},i.disable=function(n,r){ja=0,ie.forEach(function(o){return o[r?"kill":"disable"](n)}),an(ae,"wheel",Us),an(De,"scroll",Us),clearInterval(Go),an(De,"touchcancel",ki),an(xe,"touchstart",ki),$o(an,De,"pointerdown,touchstart,mousedown",Lp),$o(an,De,"pointerup,touchend,mouseup",Np),lc.kill(),Xo(an);for(var s=0;s<oe.length;s+=3)Yo(an,oe[s],oe[s+1]),Yo(an,oe[s],oe[s+2])},i.enable=function(){if(ae=window,De=document,ii=De.documentElement,xe=De.body,It&&(To=It.utils.toArray,lo=It.utils.clamp,_h=It.core.context||ki,Qc=It.core.suppressOverwrites||ki,nd=ae.history.scrollRestoration||"auto",yh=ae.pageYOffset||0,It.core.globals("ScrollTrigger",i),xe)){ja=1,oa=document.createElement("div"),oa.style.height="100vh",oa.style.position="absolute",$_(),VS(),We.register(It),i.isTouch=We.isTouch,Pr=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gh=We.isTouch===1,on(ae,"wheel",Us),ed=[ae,De,ii,xe],It.matchMedia?(i.matchMedia=function(c){var u=It.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},It.addEventListener("matchMediaInit",function(){W_(),ld()}),It.addEventListener("matchMediaRevert",function(){return G_()}),It.addEventListener("matchMedia",function(){ms(0,1),Cs("matchMedia")}),It.matchMedia().add("(orientation: portrait)",function(){return iu(),iu})):console.warn("Requires GSAP 3.11.0 or later"),iu(),on(De,"scroll",Us);var n=xe.hasAttribute("style"),r=xe.style,s=r.borderTopStyle,o=It.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=or(xe),Qe.m=Math.round(a.top+Qe.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),Go=setInterval(Fp,250),It.delayedCall(.5,function(){return Wo=0}),on(De,"touchcancel",ki),on(xe,"touchstart",ki),$o(on,De,"pointerdown,touchstart,mousedown",Lp),$o(on,De,"pointerup,touchend,mouseup",Np),mh=It.utils.checkPrefix("transform"),kl.push(mh),Zs=xn(),lc=It.delayedCall(.2,ms).pause(),Ks=[De,"visibilitychange",function(){var c=ae.innerWidth,u=ae.innerHeight;De.hidden?(Cp=c,Rp=u):(Cp!==c||Rp!==u)&&Ja()},De,"DOMContentLoaded",ms,ae,"load",ms,ae,"resize",Ja],Xo(on),ie.forEach(function(c){return c.enable(0,1)}),l=0;l<oe.length;l+=3)Yo(an,oe[l],oe[l+1]),Yo(an,oe[l],oe[l+2])}},i.config=function(n){"limitCallbacks"in n&&(tu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Go)||(Go=r)&&setInterval(Fp,r),"ignoreMobileResize"in n&&(gh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Xo(an)||Xo(on,n.autoRefreshEvents||"none"),L_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Bn(n),o=oe.indexOf(s),a=ws(s);~o&&oe.splice(o,a?6:2),r&&(a?$i.unshift(ae,r,xe,r,ii,r):$i.unshift(s,r))},i.clearMatchMedia=function(n){ie.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ei(n)?Bn(n):n).getBoundingClientRect(),a=o[s?bs:Es]*r||0;return s?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},i.positionInViewport=function(n,r,s){ei(n)&&(n=Bn(n));var o=n.getBoundingClientRect(),a=o[s?bs:Es],l=r==null?a/2:r in uc?uc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},i.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=As.killAll||[];As={},r.forEach(function(s){return s()})}},i})();Qt.version="3.14.2";Qt.saveStyles=function(i){return i?To(i).forEach(function(t){if(t&&t.style){var e=ti.indexOf(t);e>=0&&ti.splice(e,5),ti.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),It.core.getCache(t),_h())}}):ti};Qt.revert=function(i,t){return ld(!i,t)};Qt.create=function(i,t){return new Qt(i,t)};Qt.refresh=function(i){return i?Ja(!0):(Zs||Qt.register())&&ms(!0)};Qt.update=function(i){return++oe.cache&&fr(i===!0?2:0)};Qt.clearScrollMemory=X_;Qt.maxScroll=function(i,t){return Gi(i,t?Dn:Qe)};Qt.getScrollFunc=function(i,t){return Xr(Bn(i),t?Dn:Qe)};Qt.getById=function(i){return vh[i]};Qt.getAll=function(){return ie.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!Ei};Qt.snapDirectional=od;Qt.addEventListener=function(i,t){var e=As[i]||(As[i]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(i,t){var e=As[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=It.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&yn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return yn(s)&&(s=s(),on(Qt,"refresh",function(){return s=t.batchMax()})),To(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var Hp=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},su=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(We.isTouch?" pinch-zoom":""):"none",t===ii&&i(xe,e)},Jo={auto:1,scroll:1},QS=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||It.core.getCache(s),a=xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Jo[(l=vi(s)).overflowY]||Jo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ws(s)&&(Jo[(l=vi(s)).overflowY]||Jo[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},q_=function(t,e,n,r){return We.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&QS,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&on(De,We.eventTypes[0],Wp,!1,!0)},onDisable:function(){return an(De,We.eventTypes[0],Wp,!0)}})},tM=/(input|label|select|textarea)/i,Gp,Wp=function(t){var e=tM.test(t.target.tagName);(e||Gp)&&(t._gsapAllow=!0,Gp=e)},eM=function(t){cs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Bn(t.target)||ii,u=It.core.globals().ScrollSmoother,h=u&&u.get(),f=Pr&&(t.content&&Bn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Xr(c,Qe),m=Xr(c,Dn),p=1,_=(We.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,g=0,y=yn(r)?function(){return r(a)}:function(){return r||2.8},S,v,M=q_(c,t.type,!0,s),b=function(){return v=!1},T=ki,R=ki,x=function(){l=Gi(c,Qe),R=lo(Pr?1:0,l),n&&(T=lo(0,Gi(c,Dn))),S=Ts},E=function(){f._gsap.y=Za(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(b);var V=Za(a.deltaY/2),Y=R(d.v-V);if(f&&Y!==d.v+d.offset){d.offset=Y-d.v;var I=Za((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=oe.cache,fr()}return!0}d.offset&&E(),v=!0},C,P,U,z,B=function(){x(),C.isActive()&&C.vars.scrollY>l&&(d()>l?C.progress(1)&&d(l):C.resetTo("scrollY",l))};return f&&It.set(f,{y:"+=0"}),t.ignoreCheck=function(N){return Pr&&N.type==="touchmove"&&L()||p>1.05&&N.type!=="touchstart"||a.isGesturing||N.touches&&N.touches.length>1},t.onPress=function(){v=!1;var N=p;p=Za((ae.visualViewport&&ae.visualViewport.scale||1)/_),C.pause(),N!==p&&su(c,p>1.01?!0:n?!1:"x"),P=m(),U=d(),x(),S=Ts},t.onRelease=t.onGestureStart=function(N,V){if(d.offset&&E(),!V)z.restart(!0);else{oe.cache++;var Y=y(),I,tt;n&&(I=m(),tt=I+Y*.05*-N.velocityX/.227,Y*=Hp(m,I,tt,Gi(c,Dn)),C.vars.scrollX=T(tt)),I=d(),tt=I+Y*.05*-N.velocityY/.227,Y*=Hp(d,I,tt,Gi(c,Qe)),C.vars.scrollY=R(tt),C.invalidate().duration(Y).play(.01),(Pr&&C.vars.scrollY>=l||I>=l-1)&&It.to({},{onUpdate:B,duration:Y})}o&&o(N)},t.onWheel=function(){C._ts&&C.pause(),xn()-g>1e3&&(S=0,g=xn())},t.onChange=function(N,V,Y,I,tt){if(Ts!==S&&x(),V&&n&&m(T(I[2]===V?P+(N.startX-N.x):m()+V-I[1])),Y){d.offset&&E();var gt=tt[2]===Y,_t=gt?U+N.startY-N.y:d()+Y-tt[1],xt=R(_t);gt&&_t!==xt&&(U+=xt-_t),d(xt)}(Y||V)&&fr()},t.onEnable=function(){su(c,n?!1:"x"),Qt.addEventListener("refresh",B),on(ae,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),M.enable()},t.onDisable=function(){su(c,!0),an(ae,"resize",B),Qt.removeEventListener("refresh",B),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new We(t),a.iOS=Pr,Pr&&!d()&&d(1),Pr&&It.ticker.add(ki),z=a._dc,C=It.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Y_(d,d(),function(){return C.pause()})},onUpdate:fr,onComplete:z.vars.onComplete}),a};Qt.sort=function(i){if(yn(i))return ie.sort(i);var t=ae.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ae.innerHeight}),ie.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(i){return new We(i)};Qt.normalizeScroll=function(i){if(typeof i>"u")return An;if(i===!0&&An)return An.enable();if(i===!1){An&&An.kill(),An=i;return}var t=i instanceof We?i:eM(i);return An&&An.target===t.target&&An.kill(),ws(t.target)&&(An=t),t};Qt.core={_getVelocityProp:ph,_inputObserver:q_,_scrollers:oe,_proxies:$i,bridge:{ss:function(){Ei||Cs("scrollStart"),Ei=xn()},ref:function(){return gn}}};F_()&&It.registerPlugin(Qt);ac.registerPlugin(Qt);class nM{constructor({onStepEnter:t,onStepLeave:e,onProgress:n}){this.onStepEnter=t,this.onStepLeave=e,this.onProgress=n,this.lenis=null,this.triggers=[],this.progressBar=null}init(){this.initLenis(),this.initProgressBar(),this.initStepTriggers()}initLenis(){this.lenis=new xy({lerp:.1,smoothWheel:!0}),this.lenis.on("scroll",Qt.update),ac.ticker.add(t=>this.lenis.raf(t*1e3)),ac.ticker.lagSmoothing(0)}initProgressBar(){const t=document.createElement("div");t.className="scroll-progress";const e=document.createElement("div");e.className="scroll-progress-bar",t.appendChild(e),document.body.appendChild(t),this.progressBar=e}initStepTriggers(){document.querySelectorAll(".step").forEach((e,n)=>{const r=Qt.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>this.onStepEnter(n,"down"),onEnterBack:()=>this.onStepEnter(n,"up"),onLeave:()=>this.onStepLeave(n,"down"),onLeaveBack:()=>this.onStepLeave(n,"up")});this.triggers.push(r)}),Qt.create({trigger:"#scroll-content",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>{this.onProgress(e.progress),this.updateProgressBar(e.progress)}})}updateProgressBar(t){this.progressBar&&(this.progressBar.style.width=`${t*100}%`)}destroy(){this.triggers.forEach(t=>t.kill()),this.triggers=[],this.lenis?.destroy(),Qt.getAll().forEach(t=>t.kill()),this.progressBar&&(this.progressBar.parentElement?.remove(),this.progressBar=null)}}const cd="182",iM=0,Xp=1,rM=2,zl=1,sM=2,Qa=3,$r=0,Xn=1,lr=2,dr=0,ca=1,$p=2,Yp=3,qp=4,aM=5,fs=100,oM=101,lM=102,cM=103,uM=104,hM=200,fM=201,dM=202,pM=203,Mh=204,bh=205,mM=206,gM=207,_M=208,xM=209,vM=210,yM=211,SM=212,MM=213,bM=214,Eh=0,Th=1,wh=2,Sa=3,Ah=4,Ch=5,Rh=6,Ph=7,j_=0,EM=1,TM=2,Yi=0,Z_=1,K_=2,J_=3,Q_=4,t0=5,e0=6,n0=7,i0=300,Rs=301,Ma=302,Dh=303,Lh=304,wc=306,Nh=1e3,hr=1001,Ih=1002,un=1003,wM=1004,Qo=1005,Sn=1006,au=1007,gs=1008,Si=1009,r0=1010,s0=1011,Ao=1012,ud=1013,Zi=1014,Wi=1015,xr=1016,hd=1017,fd=1018,Co=1020,a0=35902,o0=35899,l0=1021,c0=1022,Li=1023,vr=1026,_s=1027,u0=1028,dd=1029,ba=1030,pd=1031,md=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,Uh=35840,Fh=35841,Oh=35842,kh=35843,Bh=36196,zh=37492,Vh=37496,Hh=37488,Gh=37489,Wh=37490,Xh=37491,$h=37808,Yh=37809,qh=37810,jh=37811,Zh=37812,Kh=37813,Jh=37814,Qh=37815,tf=37816,ef=37817,nf=37818,rf=37819,sf=37820,af=37821,of=36492,lf=36494,cf=36495,uf=36283,hf=36284,ff=36285,df=36286,AM=3200,CM=0,RM=1,Dr="",_i="srgb",Ea="srgb-linear",hc="linear",Me="srgb",Fs=7680,jp=519,PM=512,DM=513,LM=514,gd=515,NM=516,IM=517,_d=518,UM=519,Zp=35044,Kp="300 es",Xi=2e3,fc=2001;function h0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function FM(){const i=dc("canvas");return i.style.display="block",i}const Jp={};function Qp(...i){const t="THREE."+i.shift();console.log(t,...i)}function jt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function _e(...i){const t="THREE."+i.shift();console.error(t,...i)}function Ro(...i){const t=i.join(" ");t in Jp||(Jp[t]=!0,jt(...i))}function OM(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class wa{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=Math.PI/180,pf=180/Math.PI;function Lo(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function kM(i,t){return(i%t+t)%t}function lu(i,t,e){return(1-e)*i+e*t}function Fa(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,e=0){Te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class No{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],p=s[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a>=1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=p;return}if(h!==p||l!==f||c!==d||u!==m){let _=l*f+c*d+u*m+h*p;_<0&&(f=-f,d=-d,m=-m,p=-p,_=-_);let g=1-a;if(_<.9995){const y=Math.acos(_),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+p*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+p*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,n=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tm.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cu.copy(this).projectOnVector(t),this.sub(cu)}reflect(t){return this.sub(cu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new j,tm=new No;class Jt{constructor(t,e,n,r,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],p=r[0],_=r[3],g=r[6],y=r[1],S=r[4],v=r[7],M=r[2],b=r[5],T=r[8];return s[0]=o*p+a*y+l*M,s[3]=o*_+a*S+l*b,s[6]=o*g+a*v+l*T,s[1]=c*p+u*y+h*M,s[4]=c*_+u*S+h*b,s[7]=c*g+u*v+h*T,s[2]=f*p+d*y+m*M,s[5]=f*_+d*S+m*b,s[8]=f*g+d*v+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=e*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/m;return t[0]=h*p,t[1]=(r*c-u*n)*p,t[2]=(a*n-r*o)*p,t[3]=f*p,t[4]=(u*e-r*l)*p,t[5]=(r*s-a*e)*p,t[6]=d*p,t[7]=(n*l-c*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uu.makeScale(t,e)),this}rotate(t){return this.premultiply(uu.makeRotation(-t)),this}translate(t,e){return this.premultiply(uu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uu=new Jt,em=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BM(){const i={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(r.r=ua(r.r),r.g=ua(r.g),r.b=ua(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ea]:{primaries:t,whitePoint:n,transfer:hc,toXYZ:em,fromXYZ:nm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:em,fromXYZ:nm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),i}const de=BM();function pr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Os;class zM{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=dc("canvas")),Os.width=t.width,Os.height=t.height;const r=Os.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pr(e[n]/255)*255):e[n]=pr(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VM=0;class xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hu(r[o].image)):s.push(hu(r[o]))}else s=hu(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function hu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let HM=0;const fu=new j;class Ln extends wa{constructor(t=Ln.DEFAULT_IMAGE,e=Ln.DEFAULT_MAPPING,n=hr,r=hr,s=Sn,o=gs,a=Li,l=Si,c=Ln.DEFAULT_ANISOTROPY,u=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Lo(),this.name="",this.source=new xd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nh:t.x=t.x-Math.floor(t.x);break;case hr:t.x=t.x<0?0:1;break;case Ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nh:t.y=t.y-Math.floor(t.y);break;case hr:t.y=t.y<0?0:1;break;case Ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=i0;Ln.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,r=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],p=l[2],_=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(m+_)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(d+1)/2,M=(g+1)/2,b=(u+f)/4,T=(h+p)/4,R=(m+_)/4;return S>v&&S>M?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=b/n,s=T/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=R/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=T/s,r=R/s),this.set(n,r,s,e),this}let y=Math.sqrt((_-m)*(_-m)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(h-p)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GM extends wa{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Ln(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new xd(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends GM{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class f0 extends Ln{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends Ln{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tl.copy(n.boundingBox)),tl.applyMatrix4(t.matrixWorld),this.union(tl)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oa),el.subVectors(this.max,Oa),ks.subVectors(t.a,Oa),Bs.subVectors(t.b,Oa),zs.subVectors(t.c,Oa),br.subVectors(Bs,ks),Er.subVectors(zs,Bs),ts.subVectors(ks,zs);let e=[0,-br.z,br.y,0,-Er.z,Er.y,0,-ts.z,ts.y,br.z,0,-br.x,Er.z,0,-Er.x,ts.z,0,-ts.x,-br.y,br.x,0,-Er.y,Er.x,0,-ts.y,ts.x,0];return!du(e,ks,Bs,zs,el)||(e=[1,0,0,0,1,0,0,0,1],!du(e,ks,Bs,zs,el))?!1:(nl.crossVectors(br,Er),e=[nl.x,nl.y,nl.z],du(e,ks,Bs,zs,el))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qi=[new j,new j,new j,new j,new j,new j,new j,new j],Ai=new j,tl=new Io,ks=new j,Bs=new j,zs=new j,br=new j,Er=new j,ts=new j,Oa=new j,el=new j,nl=new j,es=new j;function du(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){es.fromArray(i,s);const a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=n.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const XM=new Io,ka=new j,pu=new j;class Ac{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):XM.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ka.subVectors(t,this.center);const e=ka.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ka,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ka.copy(t.center).add(pu)),this.expandByPoint(ka.copy(t.center).sub(pu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const tr=new j,mu=new j,il=new j,Tr=new j,gu=new j,rl=new j,_u=new j;class d0{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tr.copy(this.origin).addScaledVector(this.direction,e),tr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){mu.copy(t).add(e).multiplyScalar(.5),il.copy(e).sub(t).normalize(),Tr.copy(this.origin).sub(mu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(il),a=Tr.dot(this.direction),l=-Tr.dot(il),c=Tr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mu).addScaledVector(il,f),d}intersectSphere(t,e){tr.subVectors(t.center,this.origin);const n=tr.dot(this.direction),r=tr.dot(tr)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,tr)!==null}intersectTriangle(t,e,n,r,s){gu.subVectors(e,t),rl.subVectors(n,t),_u.crossVectors(gu,rl);let o=this.direction.dot(_u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,t);const l=a*this.direction.dot(rl.crossVectors(Tr,rl));if(l<0)return null;const c=a*this.direction.dot(gu.cross(Tr));if(c<0||l+c>o)return null;const u=-a*Tr.dot(_u);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,m,p,_){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,p,_)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,p,_){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=p,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Vs.setFromMatrixColumn(t,0).length(),s=1/Vs.setFromMatrixColumn(t,1).length(),o=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,m=a*u,p=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-p*c,e[9]=-a*l,e[2]=p-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,m=c*u,p=c*h;e[0]=f+p*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=p+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,m=c*u,p=c*h;e[0]=f-p*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=p-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,m=a*u,p=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+p,e[1]=l*h,e[5]=p*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,p=a*c;e[0]=l*u,e[4]=p-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-p*h}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,p=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+p,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=p*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($M,t,YM)}lookAt(t,e,n){const r=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),wr.crossVectors(n,Jn),wr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),wr.crossVectors(n,Jn)),wr.normalize(),sl.crossVectors(Jn,wr),r[0]=wr.x,r[4]=sl.x,r[8]=Jn.x,r[1]=wr.y,r[5]=sl.y,r[9]=Jn.y,r[2]=wr.z,r[6]=sl.z,r[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],p=n[6],_=n[10],g=n[14],y=n[3],S=n[7],v=n[11],M=n[15],b=r[0],T=r[4],R=r[8],x=r[12],E=r[1],L=r[5],C=r[9],P=r[13],U=r[2],z=r[6],B=r[10],N=r[14],V=r[3],Y=r[7],I=r[11],tt=r[15];return s[0]=o*b+a*E+l*U+c*V,s[4]=o*T+a*L+l*z+c*Y,s[8]=o*R+a*C+l*B+c*I,s[12]=o*x+a*P+l*N+c*tt,s[1]=u*b+h*E+f*U+d*V,s[5]=u*T+h*L+f*z+d*Y,s[9]=u*R+h*C+f*B+d*I,s[13]=u*x+h*P+f*N+d*tt,s[2]=m*b+p*E+_*U+g*V,s[6]=m*T+p*L+_*z+g*Y,s[10]=m*R+p*C+_*B+g*I,s[14]=m*x+p*P+_*N+g*tt,s[3]=y*b+S*E+v*U+M*V,s[7]=y*T+S*L+v*z+M*Y,s[11]=y*R+S*C+v*B+M*I,s[15]=y*x+S*P+v*N+M*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],p=t[7],_=t[11],g=t[15],y=l*d-c*f,S=a*d-c*h,v=a*f-l*h,M=o*d-c*u,b=o*f-l*u,T=o*h-a*u;return e*(p*y-_*S+g*v)-n*(m*y-_*M+g*b)+r*(m*S-p*M+g*T)-s*(m*v-p*b+_*T)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],p=t[13],_=t[14],g=t[15],y=h*_*c-p*f*c+p*l*d-a*_*d-h*l*g+a*f*g,S=m*f*c-u*_*c-m*l*d+o*_*d+u*l*g-o*f*g,v=u*p*c-m*h*c+m*a*d-o*p*d-u*a*g+o*h*g,M=m*h*l-u*p*l-m*a*f+o*p*f+u*a*_-o*h*_,b=e*y+n*S+r*v+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=y*T,t[1]=(p*f*s-h*_*s-p*r*d+n*_*d+h*r*g-n*f*g)*T,t[2]=(a*_*s-p*l*s+p*r*c-n*_*c-a*r*g+n*l*g)*T,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*T,t[4]=S*T,t[5]=(u*_*s-m*f*s+m*r*d-e*_*d-u*r*g+e*f*g)*T,t[6]=(m*l*s-o*_*s-m*r*c+e*_*c+o*r*g-e*l*g)*T,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*T,t[8]=v*T,t[9]=(m*h*s-u*p*s-m*n*d+e*p*d+u*n*g-e*h*g)*T,t[10]=(o*p*s-m*a*s+m*n*c-e*p*c-o*n*g+e*a*g)*T,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*T,t[12]=M*T,t[13]=(u*p*r-m*h*r+m*n*f-e*p*f-u*n*_+e*h*_)*T,t[14]=(m*a*r-o*p*r-m*n*l+e*p*l+o*n*_-e*a*_)*T,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,p=o*u,_=o*h,g=a*h,y=l*c,S=l*u,v=l*h,M=n.x,b=n.y,T=n.z;return r[0]=(1-(p+g))*M,r[1]=(d+v)*M,r[2]=(m-S)*M,r[3]=0,r[4]=(d-v)*b,r[5]=(1-(f+g))*b,r[6]=(_+y)*b,r[7]=0,r[8]=(m+S)*T,r[9]=(_-y)*T,r[10]=(1-(f+p))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Vs.set(r[0],r[1],r[2]).length();const o=Vs.set(r[4],r[5],r[6]).length(),a=Vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Ci.copy(this);const c=1/s,u=1/o,h=1/a;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,e.setFromRotationMatrix(Ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Xi,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let m,p;if(l)m=s/(o-s),p=o*s/(o-s);else if(a===Xi)m=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===fc)m=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Xi,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let m,p;if(l)m=1/(o-s),p=o/(o-s);else if(a===Xi)m=-2/(o-s),p=-(o+s)/(o-s);else if(a===fc)m=-1/(o-s),p=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vs=new j,Ci=new Xe,$M=new j(0,0,0),YM=new j(1,1,1),wr=new j,sl=new j,Jn=new j,im=new Xe,rm=new No;class yr{constructor(t=0,e=0,n=0,r=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return im.makeRotationFromQuaternion(t),this.setFromRotationMatrix(im,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rm.setFromEuler(this),this.setFromQuaternion(rm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class p0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qM=0;const sm=new j,Hs=new No,er=new Xe,al=new j,Ba=new j,jM=new j,ZM=new No,am=new j(1,0,0),om=new j(0,1,0),lm=new j(0,0,1),cm={type:"added"},KM={type:"removed"},Gs={type:"childadded",child:null},xu={type:"childremoved",child:null};class $n extends wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const t=new j,e=new yr,n=new No,r=new j(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Jt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(am,t)}rotateY(t){return this.rotateOnAxis(om,t)}rotateZ(t){return this.rotateOnAxis(lm,t)}translateOnAxis(t,e){return sm.copy(t).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(am,t)}translateY(t){return this.translateOnAxis(om,t)}translateZ(t){return this.translateOnAxis(lm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?al.copy(t):al.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Ba,al,this.up):er.lookAt(al,Ba,this.up),this.quaternion.setFromRotationMatrix(er),r&&(er.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(er),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cm),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(KM),xu.child=t,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),er.multiply(t.parent.matrixWorld)),t.applyMatrix4(er),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cm),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,t,jM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,ZM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}$n.DEFAULT_UP=new j(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new j,nr=new j,vu=new j,ir=new j,Ws=new j,Xs=new j,um=new j,yu=new j,Su=new j,Mu=new j,bu=new Ge,Eu=new Ge,Tu=new Ge;class Di{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ri.subVectors(t,e),r.cross(Ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ri.subVectors(r,e),nr.subVectors(n,e),vu.subVectors(t,e);const o=Ri.dot(Ri),a=Ri.dot(nr),l=Ri.dot(vu),c=nr.dot(nr),u=nr.dot(vu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return bu.setScalar(0),Eu.setScalar(0),Tu.setScalar(0),bu.fromBufferAttribute(t,e),Eu.fromBufferAttribute(t,n),Tu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(bu,s.x),o.addScaledVector(Eu,s.y),o.addScaledVector(Tu,s.z),o}static isFrontFacing(t,e,n,r){return Ri.subVectors(n,e),nr.subVectors(t,e),Ri.cross(nr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Ri.cross(nr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Di.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ws.subVectors(r,n),Xs.subVectors(s,n),yu.subVectors(t,n);const l=Ws.dot(yu),c=Xs.dot(yu);if(l<=0&&c<=0)return e.copy(n);Su.subVectors(t,r);const u=Ws.dot(Su),h=Xs.dot(Su);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ws,o);Mu.subVectors(t,s);const d=Ws.dot(Mu),m=Xs.dot(Mu);if(m>=0&&d<=m)return e.copy(s);const p=d*c-l*m;if(p<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Xs,a);const _=u*m-d*h;if(_<=0&&h-u>=0&&d-m>=0)return um.subVectors(s,r),a=(h-u)/(h-u+(d-m)),e.copy(r).addScaledVector(um,a);const g=1/(_+p+f);return o=p*g,a=f*g,e.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},ol={h:0,s:0,l:0};function wu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ve{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=kM(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=wu(o,s,t+1/3),this.g=wu(o,s,t),this.b=wu(o,s,t-1/3)}return de.colorSpaceToWorking(this,r),this}setStyle(t,e=_i){function n(s){s!==void 0&&parseFloat(s)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_i){const n=m0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return de.workingToColorSpace(mn.copy(this),t),Math.round(ue(mn.r*255,0,255))*65536+Math.round(ue(mn.g*255,0,255))*256+Math.round(ue(mn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,s=mn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=_i){de.workingToColorSpace(mn.copy(this),t);const e=mn.r,n=mn.g,r=mn.b;return t!==_i?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ar),this.setHSL(Ar.h+t,Ar.s+e,Ar.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ar),t.getHSL(ol);const n=lu(Ar.h,ol.h,e),r=lu(Ar.s,ol.s,e),s=lu(Ar.l,ol.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ve;ve.NAMES=m0;let JM=0;class Uo extends wa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=ca,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=bh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(n.blending=this.blending),this.side!==$r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mh&&(n.blendSrc=this.blendSrc),this.blendDst!==bh&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class g0 extends Uo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new j,ll=new Te;let QM=0;class Ti{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ll.fromBufferAttribute(this,e),ll.applyMatrix3(t),this.setXY(e,ll.x,ll.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fa(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),r=Fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),r=Fn(r,this.array),s=Fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zp&&(t.usage=this.usage),t}}class _0 extends Ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class x0 extends Ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class mr extends Ti{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tb=0;const fi=new Xe,Au=new $n,$s=new j,Qn=new Io,za=new Io,sn=new j;class Ii extends wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(h0(t)?x0:_0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return Au.lookAt(t),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mr(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];za.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Qn.min,za.min),Qn.expandByPoint(sn),sn.addVectors(Qn.max,za.max),Qn.expandByPoint(sn)):(Qn.expandByPoint(za.min),Qn.expandByPoint(za.max))}Qn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)sn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(sn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),sn.add($s)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new j,l[R]=new j;const c=new j,u=new j,h=new j,f=new Te,d=new Te,m=new Te,p=new j,_=new j;function g(R,x,E){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),_.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),a[R].add(p),a[x].add(p),a[E].add(p),l[R].add(_),l[x].add(_),l[E].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,x=y.length;R<x;++R){const E=y[R],L=E.start,C=E.count;for(let P=L,U=L+C;P<U;P+=3)g(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const S=new j,v=new j,M=new j,b=new j;function T(R){M.fromBufferAttribute(r,R),b.copy(M);const x=a[R];S.copy(x),S.sub(M.multiplyScalar(M.dot(x))).normalize(),v.crossVectors(b,x);const L=v.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,L)}for(let R=0,x=y.length;R<x;++R){const E=y[R],L=E.start,C=E.count;for(let P=L,U=L+C;P<U;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,h=new j;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),p=t.getX(f+1),_=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let p=0,_=l.length;p<_;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new Ti(f,u,h)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ii,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Xe,ns=new d0,cl=new Ac,fm=new j,ul=new j,hl=new j,fl=new j,Cu=new j,dl=new j,dm=new j,pl=new j;class Sr extends $n{constructor(t=new Ii,e=new g0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Cu.fromBufferAttribute(h,t),o?dl.addScaledVector(Cu,u):dl.addScaledVector(Cu.sub(e),u))}e.add(dl)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),ns.copy(t.ray).recast(t.near),!(cl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(cl,fm)===null||ns.origin.distanceToSquared(fm)>(t.far-t.near)**2))&&(hm.copy(s).invert(),ns.copy(t.ray).applyMatrix4(hm),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){const _=f[m],g=o[_.materialIndex],y=Math.max(_.start,d.start),S=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,M=S;v<M;v+=3){const b=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);r=ml(this,g,t,n,c,u,h,b,T,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let _=m,g=p;_<g;_+=3){const y=a.getX(_),S=a.getX(_+1),v=a.getX(_+2);r=ml(this,o,t,n,c,u,h,y,S,v),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){const _=f[m],g=o[_.materialIndex],y=Math.max(_.start,d.start),S=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,M=S;v<M;v+=3){const b=v,T=v+1,R=v+2;r=ml(this,g,t,n,c,u,h,b,T,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let _=m,g=p;_<g;_+=3){const y=_,S=_+1,v=_+2;r=ml(this,o,t,n,c,u,h,y,S,v),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function eb(i,t,e,n,r,s,o,a){let l;if(t.side===Xn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===$r,a),l===null)return null;pl.copy(a),pl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(pl);return c<e.near||c>e.far?null:{distance:c,point:pl.clone(),object:i}}function ml(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ul),i.getVertexPosition(l,hl),i.getVertexPosition(c,fl);const u=eb(i,t,e,n,ul,hl,fl,dm);if(u){const h=new j;Di.getBarycoord(dm,ul,hl,fl,h),r&&(u.uv=Di.getInterpolatedAttribute(r,a,l,c,h,new Te)),s&&(u.uv1=Di.getInterpolatedAttribute(s,a,l,c,h,new Te)),o&&(u.normal=Di.getInterpolatedAttribute(o,a,l,c,h,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};Di.getNormal(ul,hl,fl,f.normal),u.face=f,u.barycoord=h}return u}class Fo extends Ii{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,r,o,2),m("x","z","y",1,-1,t,n,-e,r,o,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mr(c,3)),this.setAttribute("normal",new mr(u,3)),this.setAttribute("uv",new mr(h,2));function m(p,_,g,y,S,v,M,b,T,R,x){const E=v/T,L=M/R,C=v/2,P=M/2,U=b/2,z=T+1,B=R+1;let N=0,V=0;const Y=new j;for(let I=0;I<B;I++){const tt=I*L-P;for(let gt=0;gt<z;gt++){const _t=gt*E-C;Y[p]=_t*y,Y[_]=tt*S,Y[g]=U,c.push(Y.x,Y.y,Y.z),Y[p]=0,Y[_]=0,Y[g]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(gt/T),h.push(1-I/R),N+=1}}for(let I=0;I<R;I++)for(let tt=0;tt<T;tt++){const gt=f+tt+z*I,_t=f+tt+z*(I+1),xt=f+(tt+1)+z*(I+1),rt=f+(tt+1)+z*I;l.push(gt,_t,rt),l.push(_t,xt,rt),V+=6}a.addGroup(d,V,x),d+=V,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ta(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function wn(i){const t={};for(let e=0;e<i.length;e++){const n=Ta(i[e]);for(const r in n)t[r]=n[r]}return t}function nb(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function v0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const ib={clone:Ta,merge:wn};var rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Uo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rb,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ta(t.uniforms),this.uniformsGroups=nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class y0 extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new j,pm=new Te,mm=new Te;class yi extends y0{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pf*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ou*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z)}getViewSize(t,e){return this.getViewBounds(t,pm,mm),e.subVectors(mm,pm)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ou*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ys=-90,qs=1;class ab extends $n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(Ys,qs,t,e);r.layers=this.layers,this.add(r);const s=new yi(Ys,qs,t,e);s.layers=this.layers,this.add(s);const o=new yi(Ys,qs,t,e);o.layers=this.layers,this.add(o);const a=new yi(Ys,qs,t,e);a.layers=this.layers,this.add(a);const l=new yi(Ys,qs,t,e);l.layers=this.layers,this.add(l);const c=new yi(Ys,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=p,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class S0 extends Ln{constructor(t=[],e=Rs,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class M0 extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new S0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fo(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:dr});s.uniforms.tEquirect.value=e;const o=new Sr(r,s),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=Sn),new ab(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class gl extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ob={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const p of t.hand.values()){const _=e.getJointPose(p,n),g=this._getHandJoint(c,p);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gl;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class lb extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yr,this.environmentIntensity=1,this.environmentRotation=new yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cb extends Ln{constructor(t=null,e=1,n=1,r,s,o,a,l,c=un,u=un,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pu=new j,ub=new j,hb=new Jt;class us{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Pu.subVectors(n,e).cross(ub.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hb.getNormalMatrix(t),r=this.coplanarPoint(Pu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Ac,fb=new Te(.5,.5),_l=new j;class b0{constructor(t=new us,e=new us,n=new us,r=new us,s=new us,o=new us){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xi,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],p=s[9],_=s[10],g=s[11],y=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,g-m,M-y).normalize(),r[1].setComponents(c+o,d+u,g+m,M+y).normalize(),r[2].setComponents(c+a,d+h,g+p,M+S).normalize(),r[3].setComponents(c-a,d-h,g-p,M-S).normalize(),n)r[4].setComponents(l,f,_,v).normalize(),r[5].setComponents(c-l,d-f,g-_,M-v).normalize();else if(r[4].setComponents(c-l,d-f,g-_,M-v).normalize(),e===Xi)r[5].setComponents(c+l,d+f,g+_,M+v).normalize();else if(e===fc)r[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);const e=fb.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(_l.x=r.normal.x>0?t.max.x:t.min.x,_l.y=r.normal.y>0?t.max.y:t.min.y,_l.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class db extends Uo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gm=new Xe,mf=new d0,xl=new Ac,vl=new j;class pb extends $n{constructor(t=new Ii,e=new db){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(r),xl.radius+=s,t.ray.intersectsSphere(xl)===!1)return;gm.copy(r).invert(),mf.copy(t.ray).applyMatrix4(gm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,p=d;m<p;m++){const _=c.getX(m);vl.fromBufferAttribute(h,_),_m(vl,_,l,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,p=d;m<p;m++)vl.fromBufferAttribute(h,m),_m(vl,m,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _m(i,t,e,n,r,s,o){const a=mf.distanceSqToPoint(i);if(a<e){const l=new j;mf.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Po extends Ln{constructor(t,e,n=Zi,r,s,o,a=un,l=un,c,u=vr,h=1){if(u!==vr&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class mb extends Po{constructor(t,e=Zi,n=Rs,r,s,o=un,a=un,l,c=vr){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class E0 extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cc extends Ii{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],p=[],_=[];for(let g=0;g<u;g++){const y=g*f-o;for(let S=0;S<c;S++){const v=S*h-s;m.push(v,-y,0),p.push(0,0,1),_.push(S/a),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const S=y+c*g,v=y+c*(g+1),M=y+1+c*(g+1),b=y+1+c*g;d.push(S,v,b),d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new mr(m,3)),this.setAttribute("normal",new mr(p,3)),this.setAttribute("uv",new mr(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.width,t.height,t.widthSegments,t.heightSegments)}}class gb extends Ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _b extends Uo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xb extends Uo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class T0 extends y0{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vb extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function xm(i,t,e,n){const r=yb(n);switch(e){case l0:return i*t;case u0:return i*t/r.components*r.byteLength;case dd:return i*t/r.components*r.byteLength;case ba:return i*t*2/r.components*r.byteLength;case pd:return i*t*2/r.components*r.byteLength;case c0:return i*t*3/r.components*r.byteLength;case Li:return i*t*4/r.components*r.byteLength;case md:return i*t*4/r.components*r.byteLength;case Vl:case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fh:case kh:return Math.max(i,16)*Math.max(t,8)/4;case Uh:case Oh:return Math.max(i,8)*Math.max(t,8)/2;case Bh:case zh:case Hh:case Gh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vh:case Wh:case Xh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tf:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ef:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nf:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rf:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sf:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case af:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case of:case lf:case cf:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uf:case hf:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ff:case df:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yb(i){switch(i){case Si:case r0:return{byteLength:1,components:1};case Ao:case s0:case xr:return{byteLength:2,components:1};case hd:case fd:return{byteLength:2,components:4};case Zi:case ud:case Wi:return{byteLength:4,components:1};case a0:case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);function w0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Sb(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],p=h[d];p.start<=m.start+m.count+1?m.count=Math.max(m.count,p.start+p.count-m.start):(++f,h[f]=p)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bb=`#ifdef USE_ALPHAHASH
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
#endif`,Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
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
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ub=`#ifdef USE_IRIDESCENCE
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
#endif`,Fb=`#ifdef USE_BUMPMAP
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xb=`#define PI 3.141592653589793
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
} // validated`,$b=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yb=`vec3 transformedNormal = objectNormal;
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
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t1=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
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
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d1=`uniform bool receiveShadow;
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
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
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
#endif`,y1=`uniform sampler2D dfgLUT;
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
}`,S1=`
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
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
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
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
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W1=`#ifdef USE_NORMALMAP
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
#endif`,X1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aE=`float getShadowMask() {
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
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,CE=`#if DEPTH_PACKING == 3200
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
}`,RE=`#define DISTANCE
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
}`,PE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
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
}`,IE=`uniform vec3 diffuse;
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
}`,UE=`#include <common>
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
}`,FE=`uniform vec3 diffuse;
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
}`,OE=`#define LAMBERT
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
}`,kE=`#define LAMBERT
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
}`,BE=`#define MATCAP
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
}`,zE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,HE=`#define NORMAL
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
}`,GE=`#define PHONG
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
}`,WE=`#define PHONG
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
}`,XE=`#define STANDARD
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
}`,$E=`#define STANDARD
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
}`,YE=`#define TOON
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
}`,qE=`#define TOON
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
}`,jE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,JE=`uniform vec3 color;
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
}`,QE=`uniform float rotation;
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
}`,tT=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Mb,alphahash_pars_fragment:bb,alphamap_fragment:Eb,alphamap_pars_fragment:Tb,alphatest_fragment:wb,alphatest_pars_fragment:Ab,aomap_fragment:Cb,aomap_pars_fragment:Rb,batching_pars_vertex:Pb,batching_vertex:Db,begin_vertex:Lb,beginnormal_vertex:Nb,bsdfs:Ib,iridescence_fragment:Ub,bumpmap_pars_fragment:Fb,clipping_planes_fragment:Ob,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Bb,clipping_planes_vertex:zb,color_fragment:Vb,color_pars_fragment:Hb,color_pars_vertex:Gb,color_vertex:Wb,common:Xb,cube_uv_reflection_fragment:$b,defaultnormal_vertex:Yb,displacementmap_pars_vertex:qb,displacementmap_vertex:jb,emissivemap_fragment:Zb,emissivemap_pars_fragment:Kb,colorspace_fragment:Jb,colorspace_pars_fragment:Qb,envmap_fragment:t1,envmap_common_pars_fragment:e1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:p1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:a1,fog_fragment:o1,fog_pars_fragment:l1,gradientmap_pars_fragment:c1,lightmap_pars_fragment:u1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:f1,lights_pars_begin:d1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:_1,lights_phong_pars_fragment:x1,lights_physical_fragment:v1,lights_physical_pars_fragment:y1,lights_fragment_begin:S1,lights_fragment_maps:M1,lights_fragment_end:b1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:T1,logdepthbuf_pars_vertex:w1,logdepthbuf_vertex:A1,map_fragment:C1,map_pars_fragment:R1,map_particle_fragment:P1,map_particle_pars_fragment:D1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:N1,morphinstance_vertex:I1,morphcolor_vertex:U1,morphnormal_vertex:F1,morphtarget_pars_vertex:O1,morphtarget_vertex:k1,normal_fragment_begin:B1,normal_fragment_maps:z1,normal_pars_fragment:V1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:W1,clearcoat_normal_fragment_begin:X1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:Y1,iridescence_pars_fragment:q1,opaque_fragment:j1,packing:Z1,premultiplied_alpha_fragment:K1,project_vertex:J1,dithering_fragment:Q1,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:aE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:hE,specularmap_pars_fragment:fE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:xE,uv_vertex:vE,worldpos_vertex:yE,background_vert:SE,background_frag:ME,backgroundCube_vert:bE,backgroundCube_frag:EE,cube_vert:TE,cube_frag:wE,depth_vert:AE,depth_frag:CE,distance_vert:RE,distance_frag:PE,equirect_vert:DE,equirect_frag:LE,linedashed_vert:NE,linedashed_frag:IE,meshbasic_vert:UE,meshbasic_frag:FE,meshlambert_vert:OE,meshlambert_frag:kE,meshmatcap_vert:BE,meshmatcap_frag:zE,meshnormal_vert:VE,meshnormal_frag:HE,meshphong_vert:GE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:$E,meshtoon_vert:YE,meshtoon_frag:qE,points_vert:jE,points_frag:ZE,shadow_vert:KE,shadow_frag:JE,sprite_vert:QE,sprite_frag:tT},Tt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Bi={basic:{uniforms:wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ve(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:wn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:wn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ve(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:wn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:wn([Tt.points,Tt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:wn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:wn([Tt.common,Tt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:wn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:wn([Tt.sprite,Tt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:wn([Tt.common,Tt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:wn([Tt.lights,Tt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Bi.physical={uniforms:wn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const yl={r:0,b:0,g:0},rs=new yr,eT=new Xe;function nT(i,t,e,n,r,s,o){const a=new ve(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function p(S){let v=!1;const M=m(S);M===null?g(a,l):M&&M.isColor&&(g(M,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,v){const M=m(v);M&&(M.isCubeTexture||M.mapping===wc)?(u===void 0&&(u=new Sr(new Fo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ta(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),rs.copy(v.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(rs)),u.material.toneMapped=de.getTransfer(M.colorSpace)!==Me,(h!==M||f!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Sr(new Cc(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ta(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=de.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,v){S.getRGB(yl,v0(i)),n.buffers.color.setClear(yl.r,yl.g,yl.b,v,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:p,addToRenderList:_,dispose:y}}function iT(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,L,C,P,U){let z=!1;const B=h(P,C,L);s!==B&&(s=B,c(s.object)),z=d(E,P,C,U),z&&m(E,P,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(E,L,C,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,L,C){const P=C.wireframe===!0;let U=n[E.id];U===void 0&&(U={},n[E.id]=U);let z=U[L.id];z===void 0&&(z={},U[L.id]=z);let B=z[P];return B===void 0&&(B=f(l()),z[P]=B),B}function f(E){const L=[],C=[],P=[];for(let U=0;U<e;U++)L[U]=0,C[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:C,attributeDivisors:P,object:E,attributes:{},index:null}}function d(E,L,C,P){const U=s.attributes,z=L.attributes;let B=0;const N=C.getAttributes();for(const V in N)if(N[V].location>=0){const I=U[V];let tt=z[V];if(tt===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),I===void 0||I.attribute!==tt||tt&&I.data!==tt.data)return!0;B++}return s.attributesNum!==B||s.index!==P}function m(E,L,C,P){const U={},z=L.attributes;let B=0;const N=C.getAttributes();for(const V in N)if(N[V].location>=0){let I=z[V];I===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(I=E.instanceColor));const tt={};tt.attribute=I,I&&I.data&&(tt.data=I.data),U[V]=tt,B++}s.attributes=U,s.attributesNum=B,s.index=P}function p(){const E=s.newAttributes;for(let L=0,C=E.length;L<C;L++)E[L]=0}function _(E){g(E,0)}function g(E,L){const C=s.newAttributes,P=s.enabledAttributes,U=s.attributeDivisors;C[E]=1,P[E]===0&&(i.enableVertexAttribArray(E),P[E]=1),U[E]!==L&&(i.vertexAttribDivisor(E,L),U[E]=L)}function y(){const E=s.newAttributes,L=s.enabledAttributes;for(let C=0,P=L.length;C<P;C++)L[C]!==E[C]&&(i.disableVertexAttribArray(C),L[C]=0)}function S(E,L,C,P,U,z,B){B===!0?i.vertexAttribIPointer(E,L,C,U,z):i.vertexAttribPointer(E,L,C,P,U,z)}function v(E,L,C,P){p();const U=P.attributes,z=C.getAttributes(),B=L.defaultAttributeValues;for(const N in z){const V=z[N];if(V.location>=0){let Y=U[N];if(Y===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor)),Y!==void 0){const I=Y.normalized,tt=Y.itemSize,gt=t.get(Y);if(gt===void 0)continue;const _t=gt.buffer,xt=gt.type,rt=gt.bytesPerElement,H=xt===i.INT||xt===i.UNSIGNED_INT||Y.gpuType===ud;if(Y.isInterleavedBufferAttribute){const W=Y.data,it=W.stride,ft=Y.offset;if(W.isInstancedInterleavedBuffer){for(let ut=0;ut<V.locationSize;ut++)g(V.location+ut,W.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ut=0;ut<V.locationSize;ut++)_(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ut=0;ut<V.locationSize;ut++)S(V.location+ut,tt/V.locationSize,xt,I,it*rt,(ft+tt/V.locationSize*ut)*rt,H)}else{if(Y.isInstancedBufferAttribute){for(let W=0;W<V.locationSize;W++)g(V.location+W,Y.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let W=0;W<V.locationSize;W++)_(V.location+W);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let W=0;W<V.locationSize;W++)S(V.location+W,tt/V.locationSize,xt,I,tt*rt,tt/V.locationSize*W*rt,H)}}else if(B!==void 0){const I=B[N];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(V.location,I);break;case 3:i.vertexAttrib3fv(V.location,I);break;case 4:i.vertexAttrib4fv(V.location,I);break;default:i.vertexAttrib1fv(V.location,I)}}}}y()}function M(){R();for(const E in n){const L=n[E];for(const C in L){const P=L[C];for(const U in P)u(P[U].object),delete P[U];delete L[C]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const L=n[E.id];for(const C in L){const P=L[C];for(const U in P)u(P[U].object),delete P[U];delete L[C]}delete n[E.id]}function T(E){for(const L in n){const C=n[L];if(C[E.id]===void 0)continue;const P=C[E.id];for(const U in P)u(P[U].object),delete P[U];delete C[E.id]}}function R(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:p,enableAttribute:_,disableUnusedAttributes:y}}function rT(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p]*f[p];e.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sT(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Li&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Si&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Wi&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(jt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:b}}function aT(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new us,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,p=h.clipIntersection,_=h.clipShadows,g=i.get(h);if(!r||m===null||m.length===0||s&&!_)s?u(null):c();else{const y=s?0:n,S=y*4;let v=g.clippingState||null;l.value=v,v=u(m,f,S,d);for(let M=0;M!==S;++M)v[M]=e[M];g.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){const p=h!==null?h.length:0;let _=null;if(p!==0){if(_=l.value,m!==!0||_===null){const g=d+p*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<g)&&(_=new Float32Array(g));for(let S=0,v=d;S!==p;++S,v+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,_}}function oT(i){let t=new WeakMap;function e(o,a){return a===Dh?o.mapping=Rs:a===Lh&&(o.mapping=Ma),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dh||a===Lh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new M0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Or=4,vm=[.125,.215,.35,.446,.526,.582],ds=20,lT=256,Va=new T0,ym=new ve;let Du=null,Lu=0,Nu=0,Iu=!1;const cT=new j;class Sm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=cT}=s;Du=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Du,Lu,Nu),this._renderer.xr.enabled=Iu,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Ma?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Du=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:xr,format:Li,colorSpace:Ea,depthBuffer:!1},r=Mm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uT(s)),this._blurMaterial=fT(s,t,e),this._ggxMaterial=hT(s,t,e)}return r}_compileMaterial(t){const e=new Sr(new Ii,t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,r,s){const l=new yi(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ym),h.toneMapping=Yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sr(new Fo,new g0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const p=this._backgroundBox,_=p.material;let g=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,g=!0):(_.color.copy(ym),g=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const M=this._cubeSize;js(r,v*M,S>2?M:0,M,M),h.setRenderTarget(r),g&&h.render(p,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Rs||t.mapping===Ma;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:m}=this,p=this._sizeLods[n],_=3*p*(n>m-Or?n-m+Or:0),g=4*(this._cubeSize-p);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,js(s,_,g,3*p,2*p),r.setRenderTarget(s),r.render(a,Va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,js(t,_,g,3*p,2*p),r.setRenderTarget(t),r.render(a,Va)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&_e("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ds-1),p=s/m,_=isFinite(s)?1+Math.floor(u*p):ds;_>ds&&jt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ds}`);const g=[];let y=0;for(let T=0;T<ds;++T){const R=T/p,x=Math.exp(-R*R/2);g.push(x),T===0?y+=x:T<_&&(y+=2*x)}for(let T=0;T<g.length;T++)g[T]=g[T]/y;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-n;const v=this._sizeLods[r],M=3*v*(r>S-Or?r-S+Or:0),b=4*(this._cubeSize-v);js(e,M,b,3*v,2*v),l.setRenderTarget(e),l.render(h,Va)}}function uT(i){const t=[],e=[],n=[];let r=i;const s=i-Or+1+vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Or?l=vm[o-i+Or-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,p=3,_=2,g=1,y=new Float32Array(p*m*d),S=new Float32Array(_*m*d),v=new Float32Array(g*m*d);for(let b=0;b<d;b++){const T=b%3*2/3-1,R=b>2?0:-1,x=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(x,p*m*b),S.set(f,_*m*b);const E=[b,b,b,b,b,b];v.set(E,g*m*b)}const M=new Ii;M.setAttribute("position",new Ti(y,p)),M.setAttribute("uv",new Ti(S,_)),M.setAttribute("faceIndex",new Ti(v,g)),n.push(new Sr(M,null)),r>Or&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Mm(i,t,e){const n=new qi(i,t,e);return n.texture.mapping=wc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function hT(i,t,e){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function fT(i,t,e){const n=new Float32Array(ds),r=new j(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function bm(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Em(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Rc(){return`

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
	`}function dT(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dh||l===Lh,u=l===Rs||l===Ma;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Sm(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Sm(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ro("WebGLRenderer: "+n+" extension not supported."),r}}}function mT(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let p=0;if(d!==null){const y=d.array;p=d.version;for(let S=0,v=y.length;S<v;S+=3){const M=y[S+0],b=y[S+1],T=y[S+2];f.push(M,b,b,T,T,M)}}else if(m!==void 0){const y=m.array;p=m.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const M=S+0,b=S+1,T=S+2;f.push(M,b,b,T,T,M)}}else return;const _=new(h0(f)?x0:_0)(f,1);_.version=p;const g=s.get(h);g&&t.remove(g),s.set(h,_)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function gT(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let _=0;for(let g=0;g<m;g++)_+=d[g];e.update(_,n,1)}function h(f,d,m,p){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],p[g]);else{_.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,p,0,m);let g=0;for(let y=0;y<m;y++)g+=d[y]*p[y];e.update(g,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _T(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:_e("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function xT(i,t,e){const n=new WeakMap,r=new Ge;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),m===!0&&(S=2),p===!0&&(S=3);let v=a.attributes.position.count*S,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*M*4*h),T=new f0(b,v,M,h);T.type=Wi,T.needsUpdate=!0;const R=S*4;for(let E=0;E<h;E++){const L=_[E],C=g[E],P=y[E],U=v*M*4*E;for(let z=0;z<L.count;z++){const B=z*R;d===!0&&(r.fromBufferAttribute(L,z),b[U+B+0]=r.x,b[U+B+1]=r.y,b[U+B+2]=r.z,b[U+B+3]=0),m===!0&&(r.fromBufferAttribute(C,z),b[U+B+4]=r.x,b[U+B+5]=r.y,b[U+B+6]=r.z,b[U+B+7]=0),p===!0&&(r.fromBufferAttribute(P,z),b[U+B+8]=r.x,b[U+B+9]=r.y,b[U+B+10]=r.z,b[U+B+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new Te(v,M)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let p=0;p<c.length;p++)d+=c[p];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function vT(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const yT={[Z_]:"LINEAR_TONE_MAPPING",[K_]:"REINHARD_TONE_MAPPING",[J_]:"CINEON_TONE_MAPPING",[Q_]:"ACES_FILMIC_TONE_MAPPING",[e0]:"AGX_TONE_MAPPING",[n0]:"NEUTRAL_TONE_MAPPING",[t0]:"CUSTOM_TONE_MAPPING"};function ST(i,t,e,n,r){const s=new qi(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new qi(t,e,{type:xr,depthBuffer:!1,stencilBuffer:!1}),a=new Ii;a.setAttribute("position",new mr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new mr([0,2,0,0,2,0],2));const l=new gb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Sr(a,l),u=new T0(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,p=null,_=[],g=!1;this.setSize=function(y,S){s.setSize(y,S),o.setSize(y,S);for(let v=0;v<_.length;v++){const M=_[v];M.setSize&&M.setSize(y,S)}},this.setEffects=function(y){_=y,g=_.length>0&&_[0].isRenderPass===!0;const S=s.width,v=s.height;for(let M=0;M<_.length;M++){const b=_[M];b.setSize&&b.setSize(S,v)}},this.begin=function(y,S){if(d||y.toneMapping===Yi&&_.length===0)return!1;if(p=S,S!==null){const v=S.width,M=S.height;(s.width!==v||s.height!==M)&&this.setSize(v,M)}return g===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Yi,!0},this.hasRenderPass=function(){return g},this.end=function(y,S){y.toneMapping=m,d=!0;let v=s,M=o;for(let b=0;b<_.length;b++){const T=_[b];if(T.enabled!==!1&&(T.render(y,M,v,S),T.needsSwap!==!1)){const R=v;v=M,M=R}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},de.getTransfer(h)===Me&&(l.defines.SRGB_TRANSFER="");const b=yT[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(p),y.render(c,u),p=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const A0=new Ln,gf=new Po(1,1),C0=new f0,R0=new WM,P0=new S0,Tm=[],wm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function Aa(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Tm[r];if(s===void 0&&(s=new Float32Array(r),Tm[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pc(i,t){let e=wm[t];e===void 0&&(e=new Int32Array(t),wm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function MT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function ET(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function TT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function wT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Rm.set(n),i.uniformMatrix2fv(this.addr,!1,Rm),en(e,n)}}function AT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Cm.set(n),i.uniformMatrix3fv(this.addr,!1,Cm),en(e,n)}}function CT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Am.set(n),i.uniformMatrix4fv(this.addr,!1,Am),en(e,n)}}function RT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function PT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function DT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function LT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function NT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function IT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function UT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function FT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function OT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(gf.compareFunction=e.isReversedDepthBuffer()?_d:gd,s=gf):s=A0,e.setTexture2D(t||s,r)}function kT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||R0,r)}function BT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||P0,r)}function zT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||C0,r)}function VT(i){switch(i){case 5126:return MT;case 35664:return bT;case 35665:return ET;case 35666:return TT;case 35674:return wT;case 35675:return AT;case 35676:return CT;case 5124:case 35670:return RT;case 35667:case 35671:return PT;case 35668:case 35672:return DT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return IT;case 36295:return UT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return zT}}function HT(i,t){i.uniform1fv(this.addr,t)}function GT(i,t){const e=Aa(t,this.size,2);i.uniform2fv(this.addr,e)}function WT(i,t){const e=Aa(t,this.size,3);i.uniform3fv(this.addr,e)}function XT(i,t){const e=Aa(t,this.size,4);i.uniform4fv(this.addr,e)}function $T(i,t){const e=Aa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function YT(i,t){const e=Aa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qT(i,t){const e=Aa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jT(i,t){i.uniform1iv(this.addr,t)}function ZT(i,t){i.uniform2iv(this.addr,t)}function KT(i,t){i.uniform3iv(this.addr,t)}function JT(i,t){i.uniform4iv(this.addr,t)}function QT(i,t){i.uniform1uiv(this.addr,t)}function tw(i,t){i.uniform2uiv(this.addr,t)}function ew(i,t){i.uniform3uiv(this.addr,t)}function nw(i,t){i.uniform4uiv(this.addr,t)}function iw(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=gf:o=A0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function rw(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||R0,s[o])}function sw(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||P0,s[o])}function aw(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||C0,s[o])}function ow(i){switch(i){case 5126:return HT;case 35664:return GT;case 35665:return WT;case 35666:return XT;case 35674:return $T;case 35675:return YT;case 35676:return qT;case 5124:case 35670:return jT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return JT;case 5125:return QT;case 36294:return tw;case 36295:return ew;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}class lw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=VT(e.type)}}class cw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ow(e.type)}}class uw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function Pm(i,t){i.seq.push(t),i.map[t.id]=t}function hw(i,t,e){const n=i.name,r=n.length;for(Uu.lastIndex=0;;){const s=Uu.exec(n),o=Uu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pm(e,c===void 0?new lw(a,i,t):new cw(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new uw(a),Pm(e,h)),e=h}}}class Xl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);hw(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Dm(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fw=37297;let dw=0;function pw(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lm=new Jt;function mw(i){de._getMatrix(Lm,de.workingColorSpace,i);const t=`mat3( ${Lm.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case hc:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nm(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+pw(i.getShaderSource(t),a)}else return s}function gw(i,t){const e=mw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const _w={[Z_]:"Linear",[K_]:"Reinhard",[J_]:"Cineon",[Q_]:"ACESFilmic",[e0]:"AgX",[n0]:"Neutral",[t0]:"Custom"};function xw(i,t){const e=_w[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sl=new j;function vw(){de.getLuminanceCoefficients(Sl);const i=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Sw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function to(i){return i!==""}function Im(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Um(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(i){return i.replace(bw,Tw)}const Ew=new Map;function Tw(i,t){let e=te[t];if(e===void 0){const n=Ew.get(t);if(n!==void 0)e=te[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _f(e)}const ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(i){return i.replace(ww,Aw)}function Aw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Om(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Cw={[zl]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function Rw(i){return Cw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Pw={[Rs]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function Dw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Pw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Lw={[Ma]:"ENVMAP_MODE_REFRACTION"};function Nw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Iw={[j_]:"ENVMAP_BLENDING_MULTIPLY",[EM]:"ENVMAP_BLENDING_MIX",[TM]:"ENVMAP_BLENDING_ADD"};function Uw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Iw[i.combine]||"ENVMAP_BLENDING_NONE"}function Fw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ow(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rw(e),c=Dw(e),u=Nw(e),h=Uw(e),f=Fw(e),d=yw(e),m=Sw(s),p=r.createProgram();let _,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(to).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(to).join(`
`),g.length>0&&(g+=`
`)):(_=[Om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),g=[Om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?te.tonemapping_pars_fragment:"",e.toneMapping!==Yi?xw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,gw("linearToOutputTexel",e.outputColorSpace),vw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=_f(o),o=Im(o,e),o=Um(o,e),a=_f(a),a=Im(a,e),a=Um(a,e),o=Fm(o),a=Fm(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=y+_+o,v=y+g+a,M=Dm(r,r.VERTEX_SHADER,S),b=Dm(r,r.FRAGMENT_SHADER,v);r.attachShader(p,M),r.attachShader(p,b),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function T(L){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(p)||"",P=r.getShaderInfoLog(M)||"",U=r.getShaderInfoLog(b)||"",z=C.trim(),B=P.trim(),N=U.trim();let V=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,M,b);else{const I=Nm(r,M,"vertex"),tt=Nm(r,b,"fragment");_e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+I+`
`+tt)}else z!==""?jt("WebGLProgram: Program Info Log:",z):(B===""||N==="")&&(Y=!1);Y&&(L.diagnostics={runnable:V,programLog:z,vertexShader:{log:B,prefix:_},fragmentShader:{log:N,prefix:g}})}r.deleteShader(M),r.deleteShader(b),R=new Xl(r,p),x=Mw(r,p)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(p,fw)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dw++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}let kw=0;class Bw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zw(t),e.set(t,n)),n}}class zw{constructor(t){this.id=kw++,this.code=t,this.usedTimes=0}}function Vw(i,t,e,n,r,s,o){const a=new p0,l=new Bw,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,L,C,P){const U=C.fog,z=P.geometry,B=x.isMeshStandardMaterial?C.environment:null,N=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),V=N&&N.mapping===wc?N.image.height:null,Y=m[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const I=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=I!==void 0?I.length:0;let gt=0;z.morphAttributes.position!==void 0&&(gt=1),z.morphAttributes.normal!==void 0&&(gt=2),z.morphAttributes.color!==void 0&&(gt=3);let _t,xt,rt,H;if(Y){const At=Bi[Y];_t=At.vertexShader,xt=At.fragmentShader}else _t=x.vertexShader,xt=x.fragmentShader,l.update(x),rt=l.getVertexShaderID(x),H=l.getFragmentShaderID(x);const W=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),ft=P.isInstancedMesh===!0,ut=P.isBatchedMesh===!0,Ot=!!x.map,Wt=!!x.matcap,St=!!N,Ut=!!x.aoMap,Vt=!!x.lightMap,Nt=!!x.bumpMap,$=!!x.normalMap,O=!!x.displacementMap,fe=!!x.emissiveMap,Zt=!!x.metalnessMap,nt=!!x.roughnessMap,ot=x.anisotropy>0,D=x.clearcoat>0,w=x.dispersion>0,k=x.iridescence>0,J=x.sheen>0,Q=x.transmission>0,Z=ot&&!!x.anisotropyMap,wt=D&&!!x.clearcoatMap,ht=D&&!!x.clearcoatNormalMap,Dt=D&&!!x.clearcoatRoughnessMap,Pt=k&&!!x.iridescenceMap,at=k&&!!x.iridescenceThicknessMap,dt=J&&!!x.sheenColorMap,bt=J&&!!x.sheenRoughnessMap,Lt=!!x.specularMap,ct=!!x.specularColorMap,$t=!!x.specularIntensityMap,F=Q&&!!x.transmissionMap,vt=Q&&!!x.thicknessMap,lt=!!x.gradientMap,yt=!!x.alphaMap,st=x.alphaTest>0,et=!!x.alphaHash,mt=!!x.extensions;let zt=Yi;x.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(zt=i.toneMapping);const pe={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:_t,fragmentShader:xt,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:H,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ut,batchingColor:ut&&P._colorsTexture!==null,instancing:ft,instancingColor:ft&&P.instanceColor!==null,instancingMorph:ft&&P.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ea,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Wt,envMap:St,envMapMode:St&&N.mapping,envMapCubeUVHeight:V,aoMap:Ut,lightMap:Vt,bumpMap:Nt,normalMap:$,displacementMap:O,emissiveMap:fe,normalMapObjectSpace:$&&x.normalMapType===RM,normalMapTangentSpace:$&&x.normalMapType===CM,metalnessMap:Zt,roughnessMap:nt,anisotropy:ot,anisotropyMap:Z,clearcoat:D,clearcoatMap:wt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Dt,dispersion:w,iridescence:k,iridescenceMap:Pt,iridescenceThicknessMap:at,sheen:J,sheenColorMap:dt,sheenRoughnessMap:bt,specularMap:Lt,specularColorMap:ct,specularIntensityMap:$t,transmission:Q,transmissionMap:F,thicknessMap:vt,gradientMap:lt,opaque:x.transparent===!1&&x.blending===ca&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:st,alphaHash:et,combine:x.combine,mapUv:Ot&&p(x.map.channel),aoMapUv:Ut&&p(x.aoMap.channel),lightMapUv:Vt&&p(x.lightMap.channel),bumpMapUv:Nt&&p(x.bumpMap.channel),normalMapUv:$&&p(x.normalMap.channel),displacementMapUv:O&&p(x.displacementMap.channel),emissiveMapUv:fe&&p(x.emissiveMap.channel),metalnessMapUv:Zt&&p(x.metalnessMap.channel),roughnessMapUv:nt&&p(x.roughnessMap.channel),anisotropyMapUv:Z&&p(x.anisotropyMap.channel),clearcoatMapUv:wt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(x.sheenRoughnessMap.channel),specularMapUv:Lt&&p(x.specularMap.channel),specularColorMapUv:ct&&p(x.specularColorMap.channel),specularIntensityMapUv:$t&&p(x.specularIntensityMap.channel),transmissionMapUv:F&&p(x.transmissionMap.channel),thicknessMapUv:vt&&p(x.thicknessMap.channel),alphaMapUv:yt&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($||ot),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Ot||yt),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:it,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&de.getTransfer(x.map.colorSpace)===Me,decodeVideoTextureEmissive:fe&&x.emissiveMap.isVideoTexture===!0&&de.getTransfer(x.emissiveMap.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===lr,flipSided:x.side===Xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)E.push(L),E.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(y(E,x),S(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const E=m[x.type];let L;if(E){const C=Bi[E];L=ib.clone(C.uniforms)}else L=x.uniforms;return L}function M(x,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new Ow(i,E,x,s),u.push(L),h.set(E,L)),L}function b(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){l.remove(x)}function R(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:R}}function Hw(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Gw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bm(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,m,p,_){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:p,group:_},i[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=p,g.group=_),t++,g}function a(h,f,d,m,p,_){const g=o(h,f,d,m,p,_);d.transmission>0?n.push(g):d.transparent===!0?r.push(g):e.push(g)}function l(h,f,d,m,p,_){const g=o(h,f,d,m,p,_);d.transmission>0?n.unshift(g):d.transparent===!0?r.unshift(g):e.unshift(g)}function c(h,f){e.length>1&&e.sort(h||Gw),n.length>1&&n.sort(f||km),r.length>1&&r.sort(f||km)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ww(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Bm,i.set(n,[o])):r>=s.length?(o=new Bm,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new ve};break;case"SpotLight":e={position:new j,direction:new j,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function $w(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yw=0;function qw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jw(i){const t=new Xw,e=$w(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const r=new j,s=new Xe,o=new Xe;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,m=0,p=0,_=0,g=0,y=0,S=0,v=0,M=0,b=0,T=0;c.sort(qw);for(let x=0,E=c.length;x<E;x++){const L=c[x],C=L.color,P=L.intensity,U=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ba?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=C.r*P,h+=C.g*P,f+=C.b*P;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],P);T++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const N=L.shadow,V=e.get(L);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=B,d++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(C).multiplyScalar(P),B.distance=U,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[p]=B;const N=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,N.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[p]=N.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,n.spotShadow[p]=V,n.spotShadowMap[p]=z,v++}p++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(C).multiplyScalar(P),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=B,_++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const N=L.shadow,V=e.get(L);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,V.shadowCameraNear=N.camera.near,V.shadowCameraFar=N.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=B,m++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(P),B.groundColor.copy(L.groundColor).multiplyScalar(P),n.hemi[g]=B,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==p||R.rectAreaLength!==_||R.hemiLength!==g||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==M||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=p,n.rectArea.length=_,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,R.directionalLength=d,R.pointLength=m,R.spotLength=p,R.rectAreaLength=_,R.hemiLength=g,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=M,R.numLightProbes=T,n.version=Yw++)}function l(c,u){let h=0,f=0,d=0,m=0,p=0;const _=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const S=c[g];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),h++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),d++}else if(S.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),o.identity(),s.copy(S.matrixWorld),s.premultiply(_),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const v=n.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:a,setupView:l,state:n}}function zm(i){const t=new jw(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Zw(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new zm(i),t.set(r,[a])):s>=o.length?(a=new zm(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jw=`uniform sampler2D shadow_pass;
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
}`,Qw=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],tA=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Vm=new Xe,Ha=new j,Fu=new j;function eA(i,t,e){let n=new b0;const r=new Te,s=new Te,o=new Ge,a=new _b,l=new xb,c={},u=e.maxTextureSize,h={[$r]:Xn,[Xn]:$r,[lr]:lr},f=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Kw,fragmentShader:Jw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ii;m.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Sr(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let g=this.type;this.render=function(b,T,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;b.type===sM&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),b.type=zl);const x=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),C=i.state;C.setBlending(dr),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=g!==this.type;P&&T.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=b.length;U<z;U++){const B=b[U],N=B.shadow;if(N===void 0){jt("WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const V=N.getFrameExtents();if(r.multiply(V),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,N.mapSize.y=s.y)),N.map===null||P===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Qa){if(B.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new qi(r.x,r.y,{format:ba,type:xr,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),N.map.texture.name=B.name+".shadowMap",N.map.depthTexture=new Po(r.x,r.y,Wi),N.map.depthTexture.name=B.name+".shadowMapDepth",N.map.depthTexture.format=vr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=un,N.map.depthTexture.magFilter=un}else{B.isPointLight?(N.map=new M0(r.x),N.map.depthTexture=new mb(r.x,Zi)):(N.map=new qi(r.x,r.y),N.map.depthTexture=new Po(r.x,r.y,Zi)),N.map.depthTexture.name=B.name+".shadowMap",N.map.depthTexture.format=vr;const I=i.state.buffers.depth.getReversed();this.type===zl?(N.map.depthTexture.compareFunction=I?_d:gd,N.map.depthTexture.minFilter=Sn,N.map.depthTexture.magFilter=Sn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=un,N.map.depthTexture.magFilter=un)}N.camera.updateProjectionMatrix()}const Y=N.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Y;I++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,I),i.clear();else{I===0&&(i.setRenderTarget(N.map),i.clear());const tt=N.getViewport(I);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),C.viewport(o)}if(B.isPointLight){const tt=N.camera,gt=N.matrix,_t=B.distance||tt.far;_t!==tt.far&&(tt.far=_t,tt.updateProjectionMatrix()),Ha.setFromMatrixPosition(B.matrixWorld),tt.position.copy(Ha),Fu.copy(tt.position),Fu.add(Qw[I]),tt.up.copy(tA[I]),tt.lookAt(Fu),tt.updateMatrixWorld(),gt.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Vm.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Vm,tt.coordinateSystem,tt.reversedDepth)}else N.updateMatrices(B);n=N.getFrustum(),v(T,R,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===Qa&&y(N,R),N.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(x,E,L)};function y(b,T){const R=t.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qi(r.x,r.y,{format:ba,type:xr})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,p,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,R,d,p,null)}function S(b,T,R,x){let E=null;const L=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const C=E.uuid,P=T.uuid;let U=c[C];U===void 0&&(U={},c[C]=U);let z=U[P];z===void 0&&(z=E.clone(),U[P]=z,T.addEventListener("dispose",M)),E=z}if(E.visible=T.visible,E.wireframe=T.wireframe,x===Qa?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=i.properties.get(E);C.light=R}return E}function v(b,T,R,x,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Qa)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const P=t.update(b),U=b.material;if(Array.isArray(U)){const z=P.groups;for(let B=0,N=z.length;B<N;B++){const V=z[B],Y=U[V.materialIndex];if(Y&&Y.visible){const I=S(b,Y,x,E);b.onBeforeShadow(i,b,T,R,P,I,V),i.renderBufferDirect(R,null,P,I,b,V),b.onAfterShadow(i,b,T,R,P,I,V)}}}else if(U.visible){const z=S(b,U,x,E);b.onBeforeShadow(i,b,T,R,P,z,null),i.renderBufferDirect(R,null,P,z,b,null),b.onAfterShadow(i,b,T,R,P,z,null)}}const C=b.children;for(let P=0,U=C.length;P<U;P++)v(C[P],T,R,x,E)}function M(b){b.target.removeEventListener("dispose",M);for(const R in c){const x=c[R],E=b.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}const nA={[Eh]:Th,[wh]:Rh,[Ah]:Ph,[Sa]:Ch,[Th]:Eh,[Rh]:wh,[Ph]:Ah,[Ch]:Sa};function iA(i,t){function e(){let F=!1;const vt=new Ge;let lt=null;const yt=new Ge(0,0,0,0);return{setMask:function(st){lt!==st&&!F&&(i.colorMask(st,st,st,st),lt=st)},setLocked:function(st){F=st},setClear:function(st,et,mt,zt,pe){pe===!0&&(st*=zt,et*=zt,mt*=zt),vt.set(st,et,mt,zt),yt.equals(vt)===!1&&(i.clearColor(st,et,mt,zt),yt.copy(vt))},reset:function(){F=!1,lt=null,yt.set(-1,0,0,0)}}}function n(){let F=!1,vt=!1,lt=null,yt=null,st=null;return{setReversed:function(et){if(vt!==et){const mt=t.get("EXT_clip_control");et?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),vt=et;const zt=st;st=null,this.setClear(zt)}},getReversed:function(){return vt},setTest:function(et){et?W(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(et){lt!==et&&!F&&(i.depthMask(et),lt=et)},setFunc:function(et){if(vt&&(et=nA[et]),yt!==et){switch(et){case Eh:i.depthFunc(i.NEVER);break;case Th:i.depthFunc(i.ALWAYS);break;case wh:i.depthFunc(i.LESS);break;case Sa:i.depthFunc(i.LEQUAL);break;case Ah:i.depthFunc(i.EQUAL);break;case Ch:i.depthFunc(i.GEQUAL);break;case Rh:i.depthFunc(i.GREATER);break;case Ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=et}},setLocked:function(et){F=et},setClear:function(et){st!==et&&(vt&&(et=1-et),i.clearDepth(et),st=et)},reset:function(){F=!1,lt=null,yt=null,st=null,vt=!1}}}function r(){let F=!1,vt=null,lt=null,yt=null,st=null,et=null,mt=null,zt=null,pe=null;return{setTest:function(At){F||(At?W(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(At){vt!==At&&!F&&(i.stencilMask(At),vt=At)},setFunc:function(At,Ft,Kt){(lt!==At||yt!==Ft||st!==Kt)&&(i.stencilFunc(At,Ft,Kt),lt=At,yt=Ft,st=Kt)},setOp:function(At,Ft,Kt){(et!==At||mt!==Ft||zt!==Kt)&&(i.stencilOp(At,Ft,Kt),et=At,mt=Ft,zt=Kt)},setLocked:function(At){F=At},setClear:function(At){pe!==At&&(i.clearStencil(At),pe=At)},reset:function(){F=!1,vt=null,lt=null,yt=null,st=null,et=null,mt=null,zt=null,pe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,p=!1,_=null,g=null,y=null,S=null,v=null,M=null,b=null,T=new ve(0,0,0),R=0,x=!1,E=null,L=null,C=null,P=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,N=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=N>=1):V.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=N>=2);let Y=null,I={};const tt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),_t=new Ge().fromArray(tt),xt=new Ge().fromArray(gt);function rt(F,vt,lt,yt){const st=new Uint8Array(4),et=i.createTexture();i.bindTexture(F,et),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<lt;mt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(vt+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return et}const H={};H[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(Sa),Nt(!1),$(Xp),W(i.CULL_FACE),Ut(dr);function W(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function it(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function ft(F,vt){return h[F]!==vt?(i.bindFramebuffer(F,vt),h[F]=vt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ut(F,vt){let lt=d,yt=!1;if(F){lt=f.get(vt),lt===void 0&&(lt=[],f.set(vt,lt));const st=F.textures;if(lt.length!==st.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,mt=st.length;et<mt;et++)lt[et]=i.COLOR_ATTACHMENT0+et;lt.length=st.length,yt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(lt)}function Ot(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const Wt={[fs]:i.FUNC_ADD,[oM]:i.FUNC_SUBTRACT,[lM]:i.FUNC_REVERSE_SUBTRACT};Wt[cM]=i.MIN,Wt[uM]=i.MAX;const St={[hM]:i.ZERO,[fM]:i.ONE,[dM]:i.SRC_COLOR,[Mh]:i.SRC_ALPHA,[vM]:i.SRC_ALPHA_SATURATE,[_M]:i.DST_COLOR,[mM]:i.DST_ALPHA,[pM]:i.ONE_MINUS_SRC_COLOR,[bh]:i.ONE_MINUS_SRC_ALPHA,[xM]:i.ONE_MINUS_DST_COLOR,[gM]:i.ONE_MINUS_DST_ALPHA,[yM]:i.CONSTANT_COLOR,[SM]:i.ONE_MINUS_CONSTANT_COLOR,[MM]:i.CONSTANT_ALPHA,[bM]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(F,vt,lt,yt,st,et,mt,zt,pe,At){if(F===dr){p===!0&&(it(i.BLEND),p=!1);return}if(p===!1&&(W(i.BLEND),p=!0),F!==aM){if(F!==_||At!==x){if((g!==fs||v!==fs)&&(i.blendEquation(i.FUNC_ADD),g=fs,v=fs),At)switch(F){case ca:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $p:i.blendFunc(i.ONE,i.ONE);break;case Yp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qp:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_e("WebGLState: Invalid blending: ",F);break}else switch(F){case ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $p:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yp:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qp:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",F);break}y=null,S=null,M=null,b=null,T.set(0,0,0),R=0,_=F,x=At}return}st=st||vt,et=et||lt,mt=mt||yt,(vt!==g||st!==v)&&(i.blendEquationSeparate(Wt[vt],Wt[st]),g=vt,v=st),(lt!==y||yt!==S||et!==M||mt!==b)&&(i.blendFuncSeparate(St[lt],St[yt],St[et],St[mt]),y=lt,S=yt,M=et,b=mt),(zt.equals(T)===!1||pe!==R)&&(i.blendColor(zt.r,zt.g,zt.b,pe),T.copy(zt),R=pe),_=F,x=!1}function Vt(F,vt){F.side===lr?it(i.CULL_FACE):W(i.CULL_FACE);let lt=F.side===Xn;vt&&(lt=!lt),Nt(lt),F.blending===ca&&F.transparent===!1?Ut(dr):Ut(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const yt=F.stencilWrite;a.setTest(yt),yt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function $(F){F!==iM?(W(i.CULL_FACE),F!==L&&(F===Xp?i.cullFace(i.BACK):F===rM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),L=F}function O(F){F!==C&&(B&&i.lineWidth(F),C=F)}function fe(F,vt,lt){F?(W(i.POLYGON_OFFSET_FILL),(P!==vt||U!==lt)&&(i.polygonOffset(vt,lt),P=vt,U=lt)):it(i.POLYGON_OFFSET_FILL)}function Zt(F){F?W(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function nt(F){F===void 0&&(F=i.TEXTURE0+z-1),Y!==F&&(i.activeTexture(F),Y=F)}function ot(F,vt,lt){lt===void 0&&(Y===null?lt=i.TEXTURE0+z-1:lt=Y);let yt=I[lt];yt===void 0&&(yt={type:void 0,texture:void 0},I[lt]=yt),(yt.type!==F||yt.texture!==vt)&&(Y!==lt&&(i.activeTexture(lt),Y=lt),i.bindTexture(F,vt||H[F]),yt.type=F,yt.texture=vt)}function D(){const F=I[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(F){_e("WebGLState:",F)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(F){_e("WebGLState:",F)}}function J(){try{i.texSubImage2D(...arguments)}catch(F){_e("WebGLState:",F)}}function Q(){try{i.texSubImage3D(...arguments)}catch(F){_e("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(F){_e("WebGLState:",F)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){_e("WebGLState:",F)}}function ht(){try{i.texStorage2D(...arguments)}catch(F){_e("WebGLState:",F)}}function Dt(){try{i.texStorage3D(...arguments)}catch(F){_e("WebGLState:",F)}}function Pt(){try{i.texImage2D(...arguments)}catch(F){_e("WebGLState:",F)}}function at(){try{i.texImage3D(...arguments)}catch(F){_e("WebGLState:",F)}}function dt(F){_t.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),_t.copy(F))}function bt(F){xt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),xt.copy(F))}function Lt(F,vt){let lt=c.get(vt);lt===void 0&&(lt=new WeakMap,c.set(vt,lt));let yt=lt.get(F);yt===void 0&&(yt=i.getUniformBlockIndex(vt,F.name),lt.set(F,yt))}function ct(F,vt){const yt=c.get(vt).get(F);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,F.__bindingPointIndex),l.set(vt,yt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,I={},h={},f=new WeakMap,d=[],m=null,p=!1,_=null,g=null,y=null,S=null,v=null,M=null,b=null,T=new ve(0,0,0),R=0,x=!1,E=null,L=null,C=null,P=null,U=null,_t.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:W,disable:it,bindFramebuffer:ft,drawBuffers:ut,useProgram:Ot,setBlending:Ut,setMaterial:Vt,setFlipSided:Nt,setCullFace:$,setLineWidth:O,setPolygonOffset:fe,setScissorTest:Zt,activeTexture:nt,bindTexture:ot,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:k,texImage2D:Pt,texImage3D:at,updateUBOMapping:Lt,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:Dt,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:wt,scissor:dt,viewport:bt,reset:$t}}function rA(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,w){return d?new OffscreenCanvas(D,w):dc("canvas")}function p(D,w,k){let J=1;const Q=ot(D);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(J*Q.width),wt=Math.floor(J*Q.height);h===void 0&&(h=m(Z,wt));const ht=w?m(Z,wt):h;return ht.width=Z,ht.height=wt,ht.getContext("2d").drawImage(D,0,0,Z,wt),jt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+wt+")."),ht}else return"data"in D&&jt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function _(D){return D.generateMipmaps}function g(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(D,w,k,J,Q=!1){if(D!==null){if(i[D]!==void 0)return i[D];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=w;if(w===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),w===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),w===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),w===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),w===i.RGBA){const wt=Q?hc:de.getTransfer(J);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=wt===Me?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(D,w){let k;return D?w===null||w===Zi||w===Co?k=i.DEPTH24_STENCIL8:w===Wi?k=i.DEPTH32F_STENCIL8:w===Ao&&(k=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zi||w===Co?k=i.DEPTH_COMPONENT24:w===Wi?k=i.DEPTH_COMPONENT32F:w===Ao&&(k=i.DEPTH_COMPONENT16),k}function M(D,w){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==un&&D.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function b(D){const w=D.target;w.removeEventListener("dispose",b),R(w),w.isVideoTexture&&u.delete(w)}function T(D){const w=D.target;w.removeEventListener("dispose",T),E(w)}function R(D){const w=n.get(D);if(w.__webglInit===void 0)return;const k=D.source,J=f.get(k);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(D),Object.keys(J).length===0&&f.delete(k)}n.remove(D)}function x(D){const w=n.get(D);i.deleteTexture(w.__webglTexture);const k=D.source,J=f.get(k);delete J[w.__cacheKey],o.memory.textures--}function E(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=D.textures;for(let J=0,Q=k.length;J<Q;J++){const Z=n.get(k[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(D)}let L=0;function C(){L=0}function P(){const D=L;return D>=r.maxTextures&&jt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),L+=1,D}function U(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function z(D,w){const k=n.get(D);if(D.isVideoTexture&&Zt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&k.__version!==D.version){const J=D.image;if(J===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{H(k,D,w);return}}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+w)}function B(D,w){const k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){H(k,D,w);return}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+w)}function N(D,w){const k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){H(k,D,w);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+w)}function V(D,w){const k=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&k.__version!==D.version){W(k,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+w)}const Y={[Nh]:i.REPEAT,[hr]:i.CLAMP_TO_EDGE,[Ih]:i.MIRRORED_REPEAT},I={[un]:i.NEAREST,[wM]:i.NEAREST_MIPMAP_NEAREST,[Qo]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[au]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},tt={[PM]:i.NEVER,[UM]:i.ALWAYS,[DM]:i.LESS,[gd]:i.LEQUAL,[LM]:i.EQUAL,[_d]:i.GEQUAL,[NM]:i.GREATER,[IM]:i.NOTEQUAL};function gt(D,w){if(w.type===Wi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===au||w.magFilter===Qo||w.magFilter===gs||w.minFilter===Sn||w.minFilter===au||w.minFilter===Qo||w.minFilter===gs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Y[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,I[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,I[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,tt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===un||w.minFilter!==Qo&&w.minFilter!==gs||w.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function _t(D,w){let k=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",b));const J=w.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const Z=U(w);if(Z!==D.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[Z].usedTimes++;const wt=Q[D.__cacheKey];wt!==void 0&&(Q[D.__cacheKey].usedTimes--,wt.usedTimes===0&&x(w)),D.__cacheKey=Z,D.__webglTexture=Q[Z].texture}return k}function xt(D,w,k){return Math.floor(Math.floor(D/k)/w)}function rt(D,w,k,J){const Z=D.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,k,J,w.data);else{Z.sort((at,dt)=>at.start-dt.start);let wt=0;for(let at=1;at<Z.length;at++){const dt=Z[wt],bt=Z[at],Lt=dt.start+dt.count,ct=xt(bt.start,w.width,4),$t=xt(dt.start,w.width,4);bt.start<=Lt+1&&ct===$t&&xt(bt.start+bt.count-1,w.width,4)===ct?dt.count=Math.max(dt.count,bt.start+bt.count-dt.start):(++wt,Z[wt]=bt)}Z.length=wt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),Dt=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let at=0,dt=Z.length;at<dt;at++){const bt=Z[at],Lt=Math.floor(bt.start/4),ct=Math.ceil(bt.count/4),$t=Lt%w.width,F=Math.floor(Lt/w.width),vt=ct,lt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,$t,F,vt,lt,k,J,w.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function H(D,w,k){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const Q=_t(D,w),Z=w.source;e.bindTexture(J,D.__webglTexture,i.TEXTURE0+k);const wt=n.get(Z);if(Z.version!==wt.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const ht=de.getPrimaries(de.workingColorSpace),Dt=w.colorSpace===Dr?null:de.getPrimaries(w.colorSpace),Pt=w.colorSpace===Dr||ht===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let at=p(w.image,!1,r.maxTextureSize);at=nt(w,at);const dt=s.convert(w.format,w.colorSpace),bt=s.convert(w.type);let Lt=S(w.internalFormat,dt,bt,w.colorSpace,w.isVideoTexture);gt(J,w);let ct;const $t=w.mipmaps,F=w.isVideoTexture!==!0,vt=wt.__version===void 0||Q===!0,lt=Z.dataReady,yt=M(w,at);if(w.isDepthTexture)Lt=v(w.format===_s,w.type),vt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Lt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Lt,at.width,at.height,0,dt,bt,null));else if(w.isDataTexture)if($t.length>0){F&&vt&&e.texStorage2D(i.TEXTURE_2D,yt,Lt,$t[0].width,$t[0].height);for(let st=0,et=$t.length;st<et;st++)ct=$t[st],F?lt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,dt,bt,ct.data):e.texImage2D(i.TEXTURE_2D,st,Lt,ct.width,ct.height,0,dt,bt,ct.data);w.generateMipmaps=!1}else F?(vt&&e.texStorage2D(i.TEXTURE_2D,yt,Lt,at.width,at.height),lt&&rt(w,at,dt,bt)):e.texImage2D(i.TEXTURE_2D,0,Lt,at.width,at.height,0,dt,bt,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Lt,$t[0].width,$t[0].height,at.depth);for(let st=0,et=$t.length;st<et;st++)if(ct=$t[st],w.format!==Li)if(dt!==null)if(F){if(lt)if(w.layerUpdates.size>0){const mt=xm(ct.width,ct.height,w.format,w.type);for(const zt of w.layerUpdates){const pe=ct.data.subarray(zt*mt/ct.data.BYTES_PER_ELEMENT,(zt+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,zt,ct.width,ct.height,1,dt,pe)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,at.depth,dt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,ct.width,ct.height,at.depth,0,ct.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,at.depth,dt,bt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,ct.width,ct.height,at.depth,0,dt,bt,ct.data)}else{F&&vt&&e.texStorage2D(i.TEXTURE_2D,yt,Lt,$t[0].width,$t[0].height);for(let st=0,et=$t.length;st<et;st++)ct=$t[st],w.format!==Li?dt!==null?F?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,dt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,ct.width,ct.height,0,ct.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?lt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,dt,bt,ct.data):e.texImage2D(i.TEXTURE_2D,st,Lt,ct.width,ct.height,0,dt,bt,ct.data)}else if(w.isDataArrayTexture)if(F){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Lt,at.width,at.height,at.depth),lt)if(w.layerUpdates.size>0){const st=xm(at.width,at.height,w.format,w.type);for(const et of w.layerUpdates){const mt=at.data.subarray(et*st/at.data.BYTES_PER_ELEMENT,(et+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,dt,bt,mt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,dt,bt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,at.width,at.height,at.depth,0,dt,bt,at.data);else if(w.isData3DTexture)F?(vt&&e.texStorage3D(i.TEXTURE_3D,yt,Lt,at.width,at.height,at.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,dt,bt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,at.width,at.height,at.depth,0,dt,bt,at.data);else if(w.isFramebufferTexture){if(vt)if(F)e.texStorage2D(i.TEXTURE_2D,yt,Lt,at.width,at.height);else{let st=at.width,et=at.height;for(let mt=0;mt<yt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Lt,st,et,0,dt,bt,null),st>>=1,et>>=1}}else if($t.length>0){if(F&&vt){const st=ot($t[0]);e.texStorage2D(i.TEXTURE_2D,yt,Lt,st.width,st.height)}for(let st=0,et=$t.length;st<et;st++)ct=$t[st],F?lt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt,bt,ct):e.texImage2D(i.TEXTURE_2D,st,Lt,dt,bt,ct);w.generateMipmaps=!1}else if(F){if(vt){const st=ot(at);e.texStorage2D(i.TEXTURE_2D,yt,Lt,st.width,st.height)}lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,bt,at)}else e.texImage2D(i.TEXTURE_2D,0,Lt,dt,bt,at);_(w)&&g(J),wt.__version=Z.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function W(D,w,k){if(w.image.length!==6)return;const J=_t(D,w),Q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+k);const Z=n.get(Q);if(Q.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const wt=de.getPrimaries(de.workingColorSpace),ht=w.colorSpace===Dr?null:de.getPrimaries(w.colorSpace),Dt=w.colorSpace===Dr||wt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,dt=[];for(let et=0;et<6;et++)!Pt&&!at?dt[et]=p(w.image[et],!0,r.maxCubemapSize):dt[et]=at?w.image[et].image:w.image[et],dt[et]=nt(w,dt[et]);const bt=dt[0],Lt=s.convert(w.format,w.colorSpace),ct=s.convert(w.type),$t=S(w.internalFormat,Lt,ct,w.colorSpace),F=w.isVideoTexture!==!0,vt=Z.__version===void 0||J===!0,lt=Q.dataReady;let yt=M(w,bt);gt(i.TEXTURE_CUBE_MAP,w);let st;if(Pt){F&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,bt.width,bt.height);for(let et=0;et<6;et++){st=dt[et].mipmaps;for(let mt=0;mt<st.length;mt++){const zt=st[mt];w.format!==Li?Lt!==null?F?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,0,0,zt.width,zt.height,Lt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,$t,zt.width,zt.height,0,zt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,0,0,zt.width,zt.height,Lt,ct,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,$t,zt.width,zt.height,0,Lt,ct,zt.data)}}}else{if(st=w.mipmaps,F&&vt){st.length>0&&yt++;const et=ot(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,et.width,et.height)}for(let et=0;et<6;et++)if(at){F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,dt[et].width,dt[et].height,Lt,ct,dt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,dt[et].width,dt[et].height,0,Lt,ct,dt[et].data);for(let mt=0;mt<st.length;mt++){const pe=st[mt].image[et].image;F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,0,0,pe.width,pe.height,Lt,ct,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,$t,pe.width,pe.height,0,Lt,ct,pe.data)}}else{F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Lt,ct,dt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,Lt,ct,dt[et]);for(let mt=0;mt<st.length;mt++){const zt=st[mt];F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,0,0,Lt,ct,zt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,$t,Lt,ct,zt.image[et])}}}_(w)&&g(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function it(D,w,k,J,Q,Z){const wt=s.convert(k.format,k.colorSpace),ht=s.convert(k.type),Dt=S(k.internalFormat,wt,ht,k.colorSpace),Pt=n.get(w),at=n.get(k);if(at.__renderTarget=w,!Pt.__hasExternalTextures){const dt=Math.max(1,w.width>>Z),bt=Math.max(1,w.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,Dt,dt,bt,w.depth,0,wt,ht,null):e.texImage2D(Q,Z,Dt,dt,bt,0,wt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,at.__webglTexture,0,O(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,at.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(D,w,k){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const J=w.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Z=v(w.stencilBuffer,Q),wt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(w),Z,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(w),Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,D)}else{const J=w.textures;for(let Q=0;Q<J.length;Q++){const Z=J[Q],wt=s.convert(Z.format,Z.colorSpace),ht=s.convert(Z.type),Dt=S(Z.internalFormat,wt,ht,Z.colorSpace);fe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(w),Dt,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(w),Dt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(D,w,k){const J=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),gt(i.TEXTURE_CUBE_MAP,w.depthTexture);const Pt=s.convert(w.depthTexture.format),at=s.convert(w.depthTexture.type);let dt;w.depthTexture.format===vr?dt=i.DEPTH_COMPONENT24:w.depthTexture.format===_s&&(dt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,w.width,w.height,0,Pt,at,null)}}else z(w.depthTexture,0);const Z=Q.__webglTexture,wt=O(w),ht=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Dt=w.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===vr)fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Dt,ht,Z,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,Dt,ht,Z,0);else if(w.depthTexture.format===_s)fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Dt,ht,Z,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,Dt,ht,Z,0);else throw new Error("Unknown depthTexture format")}function Ot(D){const w=n.get(D),k=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=J}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(k)for(let J=0;J<6;J++)ut(w.__webglFramebuffer[J],D,J);else{const J=D.texture.mipmaps;J&&J.length>0?ut(w.__webglFramebuffer[0],D,0):ut(w.__webglFramebuffer,D,0)}else if(k){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),ft(w.__webglDepthbuffer[J],D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ft(w.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(D,w,k){const J=n.get(D);w!==void 0&&it(J.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ot(D)}function St(D){const w=D.texture,k=n.get(D),J=n.get(w);D.addEventListener("dispose",T);const Q=D.textures,Z=D.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let Dt=0;Dt<w.mipmaps.length;Dt++)k.__webglFramebuffer[ht][Dt]=i.createFramebuffer()}else k.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<w.mipmaps.length;ht++)k.__webglFramebuffer[ht]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ht=0,Dt=Q.length;ht<Dt;ht++){const Pt=n.get(Q[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&fe(D)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const Dt=Q[ht];k.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const Pt=s.convert(Dt.format,Dt.colorSpace),at=s.convert(Dt.type),dt=S(Dt.internalFormat,Pt,at,Dt.colorSpace,D.isXRRenderTarget===!0),bt=O(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,dt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(k.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),gt(i.TEXTURE_CUBE_MAP,w);for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0)for(let Dt=0;Dt<w.mipmaps.length;Dt++)it(k.__webglFramebuffer[ht][Dt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt);else it(k.__webglFramebuffer[ht],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);_(w)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,Dt=Q.length;ht<Dt;ht++){const Pt=Q[ht],at=n.get(Pt);let dt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(dt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,at.__webglTexture),gt(dt,Pt),it(k.__webglFramebuffer,D,Pt,i.COLOR_ATTACHMENT0+ht,dt,0),_(Pt)&&g(dt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),gt(ht,w),w.mipmaps&&w.mipmaps.length>0)for(let Dt=0;Dt<w.mipmaps.length;Dt++)it(k.__webglFramebuffer[Dt],D,w,i.COLOR_ATTACHMENT0,ht,Dt);else it(k.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,ht,0);_(w)&&g(ht),e.unbindTexture()}D.depthBuffer&&Ot(D)}function Ut(D){const w=D.textures;for(let k=0,J=w.length;k<J;k++){const Q=w[k];if(_(Q)){const Z=y(D),wt=n.get(Q).__webglTexture;e.bindTexture(Z,wt),g(Z),e.unbindTexture()}}}const Vt=[],Nt=[];function $(D){if(D.samples>0){if(fe(D)===!1){const w=D.textures,k=D.width,J=D.height;let Q=i.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(D),ht=w.length>1;if(ht)for(let Pt=0;Pt<w.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Dt=D.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Pt=0;Pt<w.length;Pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Pt]);const at=n.get(w[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,Q,i.NEAREST),l===!0&&(Vt.length=0,Nt.length=0,Vt.push(i.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Vt.push(Z),Nt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Pt=0;Pt<w.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Pt]);const at=n.get(w[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function O(D){return Math.min(r.maxSamples,D.samples)}function fe(D){const w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Zt(D){const w=o.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function nt(D,w){const k=D.colorSpace,J=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||k!==Ea&&k!==Dr&&(de.getTransfer(k)===Me?(J!==Li||Q!==Si)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",k)),w}function ot(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=it,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function sA(i,t){function e(n,r=Dr){let s;const o=de.getTransfer(r);if(n===Si)return i.UNSIGNED_BYTE;if(n===hd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===a0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===o0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===r0)return i.BYTE;if(n===s0)return i.SHORT;if(n===Ao)return i.UNSIGNED_SHORT;if(n===ud)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Wi)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===l0)return i.ALPHA;if(n===c0)return i.RGB;if(n===Li)return i.RGBA;if(n===vr)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===u0)return i.RED;if(n===dd)return i.RED_INTEGER;if(n===ba)return i.RG;if(n===pd)return i.RG_INTEGER;if(n===md)return i.RGBA_INTEGER;if(n===Vl||n===Hl||n===Gl||n===Wl)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uh||n===Fh||n===Oh||n===kh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bh||n===zh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bh||n===zh)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hh)return s.COMPRESSED_R11_EAC;if(n===Gh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Wh)return s.COMPRESSED_RG11_EAC;if(n===Xh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$h||n===Yh||n===qh||n===jh||n===Zh||n===Kh||n===Jh||n===Qh||n===tf||n===ef||n===nf||n===rf||n===sf||n===af)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$h)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tf)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ef)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nf)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rf)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sf)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===af)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===of||n===lf||n===cf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===of)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uf||n===hf||n===ff||n===df)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===uf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ff)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
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

}`;class lA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new E0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ni({vertexShader:aA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sr(new Cc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends wa{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const p=typeof XRWebGLBinding<"u",_=new lA,g={},y=e.getContextAttributes();let S=null,v=null;const M=[],b=[],T=new Te;let R=null;const x=new yi;x.viewport=new Ge;const E=new yi;E.viewport=new Ge;const L=[x,E],C=new vb;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=M[H];return W===void 0&&(W=new Ru,M[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=M[H];return W===void 0&&(W=new Ru,M[H]=W),W.getGripSpace()},this.getHand=function(H){let W=M[H];return W===void 0&&(W=new Ru,M[H]=W),W.getHandSpace()};function z(H){const W=b.indexOf(H.inputSource);if(W===-1)return;const it=M[W];it!==void 0&&(it.update(H.inputSource,H.frame,c||o),it.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",N);for(let H=0;H<M.length;H++){const W=b[H];W!==null&&(b[H]=null,M[H].disconnect(W))}P=null,U=null,_.reset();for(const H in g)delete g[H];t.setRenderTarget(S),d=null,f=null,h=null,r=null,v=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&p&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",B),r.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,ft=null,ut=null;y.depth&&(ut=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=y.stencil?_s:vr,ft=y.stencil?Co:Zi);const Ot={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ot),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new qi(f.textureWidth,f.textureHeight,{format:Li,type:Si,depthTexture:new Po(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const it={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new qi(d.framebufferWidth,d.framebufferHeight,{format:Li,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(H){for(let W=0;W<H.removed.length;W++){const it=H.removed[W],ft=b.indexOf(it);ft>=0&&(b[ft]=null,M[ft].disconnect(it))}for(let W=0;W<H.added.length;W++){const it=H.added[W];let ft=b.indexOf(it);if(ft===-1){for(let Ot=0;Ot<M.length;Ot++)if(Ot>=b.length){b.push(it),ft=Ot;break}else if(b[Ot]===null){b[Ot]=it,ft=Ot;break}if(ft===-1)break}const ut=M[ft];ut&&ut.connect(it)}}const V=new j,Y=new j;function I(H,W,it){V.setFromMatrixPosition(W.matrixWorld),Y.setFromMatrixPosition(it.matrixWorld);const ft=V.distanceTo(Y),ut=W.projectionMatrix.elements,Ot=it.projectionMatrix.elements,Wt=ut[14]/(ut[10]-1),St=ut[14]/(ut[10]+1),Ut=(ut[9]+1)/ut[5],Vt=(ut[9]-1)/ut[5],Nt=(ut[8]-1)/ut[0],$=(Ot[8]+1)/Ot[0],O=Wt*Nt,fe=Wt*$,Zt=ft/(-Nt+$),nt=Zt*-Nt;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(nt),H.translateZ(Zt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ut[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const ot=Wt+Zt,D=St+Zt,w=O-nt,k=fe+(ft-nt),J=Ut*St/D*ot,Q=Vt*St/D*ot;H.projectionMatrix.makePerspective(w,k,J,Q,ot,D),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function tt(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let W=H.near,it=H.far;_.texture!==null&&(_.depthNear>0&&(W=_.depthNear),_.depthFar>0&&(it=_.depthFar)),C.near=E.near=x.near=W,C.far=E.far=x.far=it,(P!==C.near||U!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,U=C.far),C.layers.mask=H.layers.mask|6,x.layers.mask=C.layers.mask&3,E.layers.mask=C.layers.mask&5;const ft=H.parent,ut=C.cameras;tt(C,ft);for(let Ot=0;Ot<ut.length;Ot++)tt(ut[Ot],ft);ut.length===2?I(C,x,E):C.projectionMatrix.copy(x.projectionMatrix),gt(H,C,ft)};function gt(H,W,it){it===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(it.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=pf*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(H){return g[H]};let _t=null;function xt(H,W){if(u=W.getViewerPose(c||o),m=W,u!==null){const it=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ft=!1;it.length!==C.cameras.length&&(C.cameras.length=0,ft=!0);for(let St=0;St<it.length;St++){const Ut=it[St];let Vt=null;if(d!==null)Vt=d.getViewport(Ut);else{const $=h.getViewSubImage(f,Ut);Vt=$.viewport,St===0&&(t.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(v))}let Nt=L[St];Nt===void 0&&(Nt=new yi,Nt.layers.enable(St),Nt.viewport=new Ge,L[St]=Nt),Nt.matrix.fromArray(Ut.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ut.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),St===0&&(C.matrix.copy(Nt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ft===!0&&C.cameras.push(Nt)}const ut=r.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&p){h=n.getBinding();const St=h.getDepthInformation(it[0]);St&&St.isValid&&St.texture&&_.init(St,r.renderState)}if(ut&&ut.includes("camera-access")&&p){t.state.unbindTexture(),h=n.getBinding();for(let St=0;St<it.length;St++){const Ut=it[St].camera;if(Ut){let Vt=g[Ut];Vt||(Vt=new E0,g[Ut]=Vt);const Nt=h.getCameraImage(Ut);Vt.sourceTexture=Nt}}}}for(let it=0;it<M.length;it++){const ft=b[it],ut=M[it];ft!==null&&ut!==void 0&&ut.update(ft,W,c||o)}_t&&_t(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}const rt=new w0;rt.setAnimationLoop(xt),this.setAnimationLoop=function(H){_t=H},this.dispose=function(){}}}const ss=new yr,uA=new Xe;function hA(i,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,v0(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,y,S,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),h(_,g)):g.isMeshPhongMaterial?(s(_,g),u(_,g)):g.isMeshStandardMaterial?(s(_,g),f(_,g),g.isMeshPhysicalMaterial&&d(_,g,v)):g.isMeshMatcapMaterial?(s(_,g),m(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),p(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?l(_,g,y,S):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Xn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Xn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const y=t.get(g),S=y.envMap,v=y.envMapRotation;S&&(_.envMap.value=S,ss.copy(v),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),_.envMapRotation.value.setFromMatrix4(uA.makeRotationFromEuler(ss)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,y,S){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*y,_.scale.value=S*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function d(_,g,y){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,g){g.matcap&&(_.matcap.value=g.matcap)}function p(_,g){const y=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fA(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=r[y.id];v===void 0&&(m(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",_));const M=S.program;n.updateUBOMapping(y,M);const b=t.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function u(y){const S=h();y.__bindingPointIndex=S;const v=i.createBuffer(),M=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=r[y.id],v=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,T=v.length;b<T;b++){const R=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,E=R.length;x<E;x++){const L=R[x];if(d(L,b,x,M)===!0){const C=L.__offset,P=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let z=0;z<P.length;z++){const B=P[z],N=p(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,C+U,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,U),U+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,v,M){const b=y.value,T=S+"_"+v;if(M[T]===void 0)return typeof b=="number"||typeof b=="boolean"?M[T]=b:M[T]=b.clone(),!0;{const R=M[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return M[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function m(y){const S=y.uniforms;let v=0;const M=16;for(let T=0,R=S.length;T<R;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,L=x.length;E<L;E++){const C=x[E],P=Array.isArray(C.value)?C.value:[C.value];for(let U=0,z=P.length;U<z;U++){const B=P[U],N=p(B),V=v%M,Y=V%N.boundary,I=V+Y;v+=Y,I!==0&&M-I<N.storage&&(v+=M-I),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=N.storage}}}const b=v%M;return b>0&&(v+=M-b),y.__size=v,y.__cache={},this}function p(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):jt("WebGLRenderer: Unsupported uniform value type.",y),S}function _(y){const S=y.target;S.removeEventListener("dispose",_);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function g(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}const dA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function pA(){return Fi===null&&(Fi=new cb(dA,16,16,ba,xr),Fi.name="DFG_LUT",Fi.minFilter=Sn,Fi.magFilter=Sn,Fi.wrapS=hr,Fi.wrapT=hr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class mA{constructor(t={}){const{canvas:e=FM(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Si}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const p=d,_=new Set([md,pd,dd]),g=new Set([Si,Zi,Ao,Co,hd,fd]),y=new Uint32Array(4),S=new Int32Array(4);let v=null,M=null;const b=[],T=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let E=!1;this._outputColorSpace=_i;let L=0,C=0,P=null,U=-1,z=null;const B=new Ge,N=new Ge;let V=null;const Y=new ve(0);let I=0,tt=e.width,gt=e.height,_t=1,xt=null,rt=null;const H=new Ge(0,0,tt,gt),W=new Ge(0,0,tt,gt);let it=!1;const ft=new b0;let ut=!1,Ot=!1;const Wt=new Xe,St=new j,Ut=new Ge,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function $(){return P===null?_t:1}let O=n;function fe(A,G){return e.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cd}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",At,!1),O===null){const G="webgl2";if(O=fe(G,A),O===null)throw fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw _e("WebGLRenderer: "+A.message),A}let Zt,nt,ot,D,w,k,J,Q,Z,wt,ht,Dt,Pt,at,dt,bt,Lt,ct,$t,F,vt,lt,yt,st;function et(){Zt=new pT(O),Zt.init(),lt=new sA(O,Zt),nt=new sT(O,Zt,t,lt),ot=new iA(O,Zt),nt.reversedDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),D=new _T(O),w=new Hw,k=new rA(O,Zt,ot,w,nt,lt,D),J=new oT(x),Q=new dT(x),Z=new Sb(O),yt=new iT(O,Z),wt=new mT(O,Z,D,yt),ht=new vT(O,wt,Z,D),$t=new xT(O,nt,k),bt=new aT(w),Dt=new Vw(x,J,Q,Zt,nt,yt,bt),Pt=new hA(x,w),at=new Ww,dt=new Zw(Zt),ct=new nT(x,J,Q,ot,ht,m,l),Lt=new eA(x,ht,nt),st=new fA(O,D,nt,ot),F=new rT(O,Zt,D),vt=new gT(O,Zt,D),D.programs=Dt.programs,x.capabilities=nt,x.extensions=Zt,x.properties=w,x.renderLists=at,x.shadowMap=Lt,x.state=ot,x.info=D}et(),p!==Si&&(R=new ST(p,e.width,e.height,r,s));const mt=new cA(x,O);this.xr=mt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(A){A!==void 0&&(_t=A,this.setSize(tt,gt,!1))},this.getSize=function(A){return A.set(tt,gt)},this.setSize=function(A,G,K=!0){if(mt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=A,gt=G,e.width=Math.floor(A*_t),e.height=Math.floor(G*_t),K===!0&&(e.style.width=A+"px",e.style.height=G+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(tt*_t,gt*_t).floor()},this.setDrawingBufferSize=function(A,G,K){tt=A,gt=G,_t=K,e.width=Math.floor(A*K),e.height=Math.floor(G*K),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(p===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,G,K,q){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,G,K,q),ot.viewport(B.copy(H).multiplyScalar(_t).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,G,K,q){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,G,K,q),ot.scissor(N.copy(W).multiplyScalar(_t).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){ot.setScissorTest(it=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,K=!0){let q=0;if(A){let X=!1;if(P!==null){const pt=P.texture.format;X=_.has(pt)}if(X){const pt=P.texture.type,Ct=g.has(pt),Mt=ct.getClearColor(),Rt=ct.getClearAlpha(),kt=Mt.r,Xt=Mt.g,Ht=Mt.b;Ct?(y[0]=kt,y[1]=Xt,y[2]=Ht,y[3]=Rt,O.clearBufferuiv(O.COLOR,0,y)):(S[0]=kt,S[1]=Xt,S[2]=Ht,S[3]=Rt,O.clearBufferiv(O.COLOR,0,S))}else q|=O.COLOR_BUFFER_BIT}G&&(q|=O.DEPTH_BUFFER_BIT),K&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",At,!1),ct.dispose(),at.dispose(),dt.dispose(),w.dispose(),J.dispose(),Q.dispose(),ht.dispose(),yt.dispose(),st.dispose(),Dt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Ve),mt.removeEventListener("sessionend",re),ye.stop()};function zt(A){A.preventDefault(),Qp("WebGLRenderer: Context Lost."),E=!0}function pe(){Qp("WebGLRenderer: Context Restored."),E=!1;const A=D.autoReset,G=Lt.enabled,K=Lt.autoUpdate,q=Lt.needsUpdate,X=Lt.type;et(),D.autoReset=A,Lt.enabled=G,Lt.autoUpdate=K,Lt.needsUpdate=q,Lt.type=X}function At(A){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const G=A.target;G.removeEventListener("dispose",Ft),Kt(G)}function Kt(A){Et(A),w.remove(A)}function Et(A){const G=w.get(A).programs;G!==void 0&&(G.forEach(function(K){Dt.releaseProgram(K)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,K,q,X,pt){G===null&&(G=Vt);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,Mt=Ze(A,G,K,q,X);ot.setMaterial(q,Ct);let Rt=K.index,kt=1;if(q.wireframe===!0){if(Rt=wt.getWireframeAttribute(K),Rt===void 0)return;kt=2}const Xt=K.drawRange,Ht=K.attributes.position;let se=Xt.start*kt,Ee=(Xt.start+Xt.count)*kt;pt!==null&&(se=Math.max(se,pt.start*kt),Ee=Math.min(Ee,(pt.start+pt.count)*kt)),Rt!==null?(se=Math.max(se,0),Ee=Math.min(Ee,Rt.count)):Ht!=null&&(se=Math.max(se,0),Ee=Math.min(Ee,Ht.count));const Oe=Ee-se;if(Oe<0||Oe===1/0)return;yt.setup(X,q,Mt,K,Rt);let ke,Ae=F;if(Rt!==null&&(ke=Z.get(Rt),Ae=vt,Ae.setIndex(ke)),X.isMesh)q.wireframe===!0?(ot.setLineWidth(q.wireframeLinewidth*$()),Ae.setMode(O.LINES)):Ae.setMode(O.TRIANGLES);else if(X.isLine){let Gt=q.linewidth;Gt===void 0&&(Gt=1),ot.setLineWidth(Gt*$()),X.isLineSegments?Ae.setMode(O.LINES):X.isLineLoop?Ae.setMode(O.LINE_LOOP):Ae.setMode(O.LINE_STRIP)}else X.isPoints?Ae.setMode(O.POINTS):X.isSprite&&Ae.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ro("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Gt=X._multiDrawStarts,Se=X._multiDrawCounts,ge=X._multiDrawCount,Zn=Rt?Z.get(Rt).bytesPerElement:1,Ls=w.get(q).currentProgram.getUniforms();for(let Kn=0;Kn<ge;Kn++)Ls.setValue(O,"_gl_DrawID",Kn),Ae.render(Gt[Kn]/Zn,Se[Kn])}else if(X.isInstancedMesh)Ae.renderInstances(se,Oe,X.count);else if(K.isInstancedBufferGeometry){const Gt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Se=Math.min(K.instanceCount,Gt);Ae.renderInstances(se,Oe,Se)}else Ae.render(se,Oe)};function Yt(A,G,K){A.transparent===!0&&A.side===lr&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,be(A,G,K),A.side=$r,A.needsUpdate=!0,be(A,G,K),A.side=lr):be(A,G,K)}this.compile=function(A,G,K=null){K===null&&(K=A),M=dt.get(K),M.init(G),T.push(M),K.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),A!==K&&A.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights();const q=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pt=X.material;if(pt)if(Array.isArray(pt))for(let Ct=0;Ct<pt.length;Ct++){const Mt=pt[Ct];Yt(Mt,K,X),q.add(Mt)}else Yt(pt,K,X),q.add(pt)}),M=T.pop(),q},this.compileAsync=function(A,G,K=null){const q=this.compile(A,G,K);return new Promise(X=>{function pt(){if(q.forEach(function(Ct){w.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){X(A);return}setTimeout(pt,10)}Zt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Bt=null;function qt(A){Bt&&Bt(A)}function Ve(){ye.stop()}function re(){ye.start()}const ye=new w0;ye.setAnimationLoop(qt),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(A){Bt=A,mt.setAnimationLoop(A),A===null?ye.stop():ye.start()},mt.addEventListener("sessionstart",Ve),mt.addEventListener("sessionend",re),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const K=mt.enabled===!0&&mt.isPresenting===!0,q=R!==null&&(P===null||K)&&R.begin(x,P);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(G),G=mt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,G,P),M=dt.get(A,T.length),M.init(G),T.push(M),Wt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ft.setFromProjectionMatrix(Wt,Xi,G.reversedDepth),Ot=this.localClippingEnabled,ut=bt.init(this.clippingPlanes,Ot),v=at.get(A,b.length),v.init(),b.push(v),mt.enabled===!0&&mt.isPresenting===!0){const Ct=x.xr.getDepthSensingMesh();Ct!==null&&$e(Ct,G,-1/0,x.sortObjects)}$e(A,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(xt,rt),Nt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Nt&&ct.addToRenderList(v,A),this.info.render.frame++,ut===!0&&bt.beginShadows();const X=M.state.shadowsArray;if(Lt.render(X,A,G),ut===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&R.hasRenderPass())===!1){const Ct=v.opaque,Mt=v.transmissive;if(M.setupLights(),G.isArrayCamera){const Rt=G.cameras;if(Mt.length>0)for(let kt=0,Xt=Rt.length;kt<Xt;kt++){const Ht=Rt[kt];we(Ct,Mt,A,Ht)}Nt&&ct.render(A);for(let kt=0,Xt=Rt.length;kt<Xt;kt++){const Ht=Rt[kt];Le(v,A,Ht,Ht.viewport)}}else Mt.length>0&&we(Ct,Mt,A,G),Nt&&ct.render(A),Le(v,A,G)}P!==null&&C===0&&(k.updateMultisampleRenderTarget(P),k.updateRenderTargetMipmap(P)),q&&R.end(x),A.isScene===!0&&A.onAfterRender(x,A,G),yt.resetDefaultState(),U=-1,z=null,T.pop(),T.length>0?(M=T[T.length-1],ut===!0&&bt.setGlobalState(x.clippingPlanes,M.state.camera)):M=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function $e(A,G,K,q){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ft.intersectsSprite(A)){q&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);const Ct=ht.update(A),Mt=A.material;Mt.visible&&v.push(A,Ct,Mt,K,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ft.intersectsObject(A))){const Ct=ht.update(A),Mt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ut.copy(Ct.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(Mt)){const Rt=Ct.groups;for(let kt=0,Xt=Rt.length;kt<Xt;kt++){const Ht=Rt[kt],se=Mt[Ht.materialIndex];se&&se.visible&&v.push(A,Ct,se,K,Ut.z,Ht)}}else Mt.visible&&v.push(A,Ct,Mt,K,Ut.z,null)}}const pt=A.children;for(let Ct=0,Mt=pt.length;Ct<Mt;Ct++)$e(pt[Ct],G,K,q)}function Le(A,G,K,q){const{opaque:X,transmissive:pt,transparent:Ct}=A;M.setupLightsView(K),ut===!0&&bt.setGlobalState(x.clippingPlanes,K),q&&ot.viewport(B.copy(q)),X.length>0&&me(X,G,K),pt.length>0&&me(pt,G,K),Ct.length>0&&me(Ct,G,K),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function we(A,G,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){const se=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new qi(1,1,{generateMipmaps:!0,type:se?xr:Si,minFilter:gs,samples:nt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace})}const pt=M.state.transmissionRenderTarget[q.id],Ct=q.viewport||B;pt.setSize(Ct.z*x.transmissionResolutionScale,Ct.w*x.transmissionResolutionScale);const Mt=x.getRenderTarget(),Rt=x.getActiveCubeFace(),kt=x.getActiveMipmapLevel();x.setRenderTarget(pt),x.getClearColor(Y),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&ct.render(K);const Xt=x.toneMapping;x.toneMapping=Yi;const Ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),ut===!0&&bt.setGlobalState(x.clippingPlanes,q),me(A,K,q),k.updateMultisampleRenderTarget(pt),k.updateRenderTargetMipmap(pt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Ee=0,Oe=G.length;Ee<Oe;Ee++){const ke=G[Ee],{object:Ae,geometry:Gt,material:Se,group:ge}=ke;if(Se.side===lr&&Ae.layers.test(q.layers)){const Zn=Se.side;Se.side=Xn,Se.needsUpdate=!0,Nn(Ae,K,q,Gt,Se,ge),Se.side=Zn,Se.needsUpdate=!0,se=!0}}se===!0&&(k.updateMultisampleRenderTarget(pt),k.updateRenderTargetMipmap(pt))}x.setRenderTarget(Mt,Rt,kt),x.setClearColor(Y,I),Ht!==void 0&&(q.viewport=Ht),x.toneMapping=Xt}function me(A,G,K){const q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,pt=A.length;X<pt;X++){const Ct=A[X],{object:Mt,geometry:Rt,group:kt}=Ct;let Xt=Ct.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),Mt.layers.test(K.layers)&&Nn(Mt,G,K,Rt,Xt,kt)}}function Nn(A,G,K,q,X,pt){A.onBeforeRender(x,G,K,q,X,pt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,G,K,q,A,pt),X.transparent===!0&&X.side===lr&&X.forceSinglePass===!1?(X.side=Xn,X.needsUpdate=!0,x.renderBufferDirect(K,G,q,X,A,pt),X.side=$r,X.needsUpdate=!0,x.renderBufferDirect(K,G,q,X,A,pt),X.side=lr):x.renderBufferDirect(K,G,q,X,A,pt),A.onAfterRender(x,G,K,q,X,pt)}function be(A,G,K){G.isScene!==!0&&(G=Vt);const q=w.get(A),X=M.state.lights,pt=M.state.shadowsArray,Ct=X.state.version,Mt=Dt.getParameters(A,X.state,pt,G,K),Rt=Dt.getProgramCacheKey(Mt);let kt=q.programs;q.environment=A.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(A.isMeshStandardMaterial?Q:J).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",Ft),kt=new Map,q.programs=kt);let Xt=kt.get(Rt);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===Ct)return jn(A,Mt),Xt}else Mt.uniforms=Dt.getUniforms(A),A.onBeforeCompile(Mt,x),Xt=Dt.acquireProgram(Mt,Rt),kt.set(Rt,Xt),q.uniforms=Mt.uniforms;const Ht=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=bt.uniform),jn(A,Mt),q.needsLights=nn(A),q.lightsStateVersion=Ct,q.needsLights&&(Ht.ambientLightColor.value=X.state.ambient,Ht.lightProbe.value=X.state.probe,Ht.directionalLights.value=X.state.directional,Ht.directionalLightShadows.value=X.state.directionalShadow,Ht.spotLights.value=X.state.spot,Ht.spotLightShadows.value=X.state.spotShadow,Ht.rectAreaLights.value=X.state.rectArea,Ht.ltc_1.value=X.state.rectAreaLTC1,Ht.ltc_2.value=X.state.rectAreaLTC2,Ht.pointLights.value=X.state.point,Ht.pointLightShadows.value=X.state.pointShadow,Ht.hemisphereLights.value=X.state.hemi,Ht.directionalShadowMap.value=X.state.directionalShadowMap,Ht.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ht.spotShadowMap.value=X.state.spotShadowMap,Ht.spotLightMatrix.value=X.state.spotLightMatrix,Ht.spotLightMap.value=X.state.spotLightMap,Ht.pointShadowMap.value=X.state.pointShadowMap,Ht.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function fn(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Xl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function jn(A,G){const K=w.get(A);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Ze(A,G,K,q,X){G.isScene!==!0&&(G=Vt),k.resetTextureUnits();const pt=G.fog,Ct=q.isMeshStandardMaterial?G.environment:null,Mt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ea,Rt=(q.isMeshStandardMaterial?Q:J).get(q.envMap||Ct),kt=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xt=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ht=!!K.morphAttributes.position,se=!!K.morphAttributes.normal,Ee=!!K.morphAttributes.color;let Oe=Yi;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Oe=x.toneMapping);const ke=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ae=ke!==void 0?ke.length:0,Gt=w.get(q),Se=M.state.lights;if(ut===!0&&(Ot===!0||A!==z)){const bn=A===z&&q.id===U;bt.setState(q,A,bn)}let ge=!1;q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Se.state.version||Gt.outputColorSpace!==Mt||X.isBatchedMesh&&Gt.batching===!1||!X.isBatchedMesh&&Gt.batching===!0||X.isBatchedMesh&&Gt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Gt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Gt.instancing===!1||!X.isInstancedMesh&&Gt.instancing===!0||X.isSkinnedMesh&&Gt.skinning===!1||!X.isSkinnedMesh&&Gt.skinning===!0||X.isInstancedMesh&&Gt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Gt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Gt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Gt.instancingMorph===!1&&X.morphTexture!==null||Gt.envMap!==Rt||q.fog===!0&&Gt.fog!==pt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==bt.numPlanes||Gt.numIntersection!==bt.numIntersection)||Gt.vertexAlphas!==kt||Gt.vertexTangents!==Xt||Gt.morphTargets!==Ht||Gt.morphNormals!==se||Gt.morphColors!==Ee||Gt.toneMapping!==Oe||Gt.morphTargetsCount!==Ae)&&(ge=!0):(ge=!0,Gt.__version=q.version);let Zn=Gt.currentProgram;ge===!0&&(Zn=be(q,G,X));let Ls=!1,Kn=!1,Pa=!1;const Pe=Zn.getUniforms(),In=Gt.uniforms;if(ot.useProgram(Zn.program)&&(Ls=!0,Kn=!0,Pa=!0),q.id!==U&&(U=q.id,Kn=!0),Ls||z!==A){ot.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pe.setValue(O,"projectionMatrix",A.projectionMatrix),Pe.setValue(O,"viewMatrix",A.matrixWorldInverse);const Un=Pe.map.cameraPosition;Un!==void 0&&Un.setValue(O,St.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&Pe.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pe.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Kn=!0,Pa=!0)}if(Gt.needsLights&&(Se.state.directionalShadowMap.length>0&&Pe.setValue(O,"directionalShadowMap",Se.state.directionalShadowMap,k),Se.state.spotShadowMap.length>0&&Pe.setValue(O,"spotShadowMap",Se.state.spotShadowMap,k),Se.state.pointShadowMap.length>0&&Pe.setValue(O,"pointShadowMap",Se.state.pointShadowMap,k)),X.isSkinnedMesh){Pe.setOptional(O,X,"bindMatrix"),Pe.setOptional(O,X,"bindMatrixInverse");const bn=X.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Pe.setValue(O,"boneTexture",bn.boneTexture,k))}X.isBatchedMesh&&(Pe.setOptional(O,X,"batchingTexture"),Pe.setValue(O,"batchingTexture",X._matricesTexture,k),Pe.setOptional(O,X,"batchingIdTexture"),Pe.setValue(O,"batchingIdTexture",X._indirectTexture,k),Pe.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Pe.setValue(O,"batchingColorTexture",X._colorsTexture,k));const hi=K.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&$t.update(X,K,Zn),(Kn||Gt.receiveShadow!==X.receiveShadow)&&(Gt.receiveShadow=X.receiveShadow,Pe.setValue(O,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(In.envMap.value=Rt,In.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(In.envMapIntensity.value=G.environmentIntensity),In.dfgLUT!==void 0&&(In.dfgLUT.value=pA()),Kn&&(Pe.setValue(O,"toneMappingExposure",x.toneMappingExposure),Gt.needsLights&&Ke(In,Pa),pt&&q.fog===!0&&Pt.refreshFogUniforms(In,pt),Pt.refreshMaterialUniforms(In,q,_t,gt,M.state.transmissionRenderTarget[A.id]),Xl.upload(O,fn(Gt),In,k)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xl.upload(O,fn(Gt),In,k),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pe.setValue(O,"center",X.center),Pe.setValue(O,"modelViewMatrix",X.modelViewMatrix),Pe.setValue(O,"normalMatrix",X.normalMatrix),Pe.setValue(O,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const bn=q.uniformsGroups;for(let Un=0,Uc=bn.length;Un<Uc;Un++){const Zr=bn[Un];st.update(Zr,Zn),st.bind(Zr,Zn)}}return Zn}function Ke(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function nn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,G,K){const q=w.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=G,w.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const K=w.get(A);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const Ji=O.createFramebuffer();this.setRenderTarget=function(A,G=0,K=0){P=A,L=G,C=K;let q=null,X=!1,pt=!1;if(A){const Mt=w.get(A);if(Mt.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),B.copy(A.viewport),N.copy(A.scissor),V=A.scissorTest,ot.viewport(B),ot.scissor(N),ot.setScissorTest(V),U=-1;return}else if(Mt.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Mt.__hasExternalTextures)k.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Mt.__boundDepthTexture!==Xt){if(Xt!==null&&w.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const Rt=A.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(pt=!0);const kt=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[G])?q=kt[G][K]:q=kt[G],X=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?q=w.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?q=kt[K]:q=kt,B.copy(A.viewport),N.copy(A.scissor),V=A.scissorTest}else B.copy(H).multiplyScalar(_t).floor(),N.copy(W).multiplyScalar(_t).floor(),V=it;if(K!==0&&(q=Ji),ot.bindFramebuffer(O.FRAMEBUFFER,q)&&ot.drawBuffers(A,q),ot.viewport(B),ot.scissor(N),ot.setScissorTest(V),X){const Mt=w.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Mt.__webglTexture,K)}else if(pt){const Mt=G;for(let Rt=0;Rt<A.textures.length;Rt++){const kt=w.get(A.textures[Rt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Rt,kt.__webglTexture,K,Mt)}}else if(A!==null&&K!==0){const Mt=w.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,K)}U=-1},this.readRenderTargetPixels=function(A,G,K,q,X,pt,Ct,Mt=0){if(!(A&&A.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Rt=Rt[Ct]),Rt){ot.bindFramebuffer(O.FRAMEBUFFER,Rt);try{const kt=A.textures[Mt],Xt=kt.format,Ht=kt.type;if(!nt.textureFormatReadable(Xt)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ht)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-q&&K>=0&&K<=A.height-X&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt),O.readPixels(G,K,q,X,lt.convert(Xt),lt.convert(Ht),pt))}finally{const kt=P!==null?w.get(P).__webglFramebuffer:null;ot.bindFramebuffer(O.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,G,K,q,X,pt,Ct,Mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Rt=Rt[Ct]),Rt)if(G>=0&&G<=A.width-q&&K>=0&&K<=A.height-X){ot.bindFramebuffer(O.FRAMEBUFFER,Rt);const kt=A.textures[Mt],Xt=kt.format,Ht=kt.type;if(!nt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt),O.readPixels(G,K,q,X,lt.convert(Xt),lt.convert(Ht),0);const Ee=P!==null?w.get(P).__webglFramebuffer:null;ot.bindFramebuffer(O.FRAMEBUFFER,Ee);const Oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await OM(O,Oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.deleteBuffer(se),O.deleteSync(Oe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,K=0){const q=Math.pow(2,-K),X=Math.floor(A.image.width*q),pt=Math.floor(A.image.height*q),Ct=G!==null?G.x:0,Mt=G!==null?G.y:0;k.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Ct,Mt,X,pt),ot.unbindTexture()};const Ds=O.createFramebuffer(),rn=O.createFramebuffer();this.copyTextureToTexture=function(A,G,K=null,q=null,X=0,pt=null){pt===null&&(X!==0?(Ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=X,X=0):pt=0);let Ct,Mt,Rt,kt,Xt,Ht,se,Ee,Oe;const ke=A.isCompressedTexture?A.mipmaps[pt]:A.image;if(K!==null)Ct=K.max.x-K.min.x,Mt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Xt=K.min.y,Ht=K.isBox3?K.min.z:0;else{const hi=Math.pow(2,-X);Ct=Math.floor(ke.width*hi),Mt=Math.floor(ke.height*hi),A.isDataArrayTexture?Rt=ke.depth:A.isData3DTexture?Rt=Math.floor(ke.depth*hi):Rt=1,kt=0,Xt=0,Ht=0}q!==null?(se=q.x,Ee=q.y,Oe=q.z):(se=0,Ee=0,Oe=0);const Ae=lt.convert(G.format),Gt=lt.convert(G.type);let Se;G.isData3DTexture?(k.setTexture3D(G,0),Se=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(k.setTexture2DArray(G,0),Se=O.TEXTURE_2D_ARRAY):(k.setTexture2D(G,0),Se=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const ge=O.getParameter(O.UNPACK_ROW_LENGTH),Zn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ls=O.getParameter(O.UNPACK_SKIP_PIXELS),Kn=O.getParameter(O.UNPACK_SKIP_ROWS),Pa=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ke.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ke.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ht);const Pe=A.isDataArrayTexture||A.isData3DTexture,In=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const hi=w.get(A),bn=w.get(G),Un=w.get(hi.__renderTarget),Uc=w.get(bn.__renderTarget);ot.bindFramebuffer(O.READ_FRAMEBUFFER,Un.__webglFramebuffer),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,Uc.__webglFramebuffer);for(let Zr=0;Zr<Rt;Zr++)Pe&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,w.get(A).__webglTexture,X,Ht+Zr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,w.get(G).__webglTexture,pt,Oe+Zr)),O.blitFramebuffer(kt,Xt,Ct,Mt,se,Ee,Ct,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||w.has(A)){const hi=w.get(A),bn=w.get(G);ot.bindFramebuffer(O.READ_FRAMEBUFFER,Ds),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,rn);for(let Un=0;Un<Rt;Un++)Pe?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hi.__webglTexture,X,Ht+Un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hi.__webglTexture,X),In?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bn.__webglTexture,pt,Oe+Un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bn.__webglTexture,pt),X!==0?O.blitFramebuffer(kt,Xt,Ct,Mt,se,Ee,Ct,Mt,O.COLOR_BUFFER_BIT,O.NEAREST):In?O.copyTexSubImage3D(Se,pt,se,Ee,Oe+Un,kt,Xt,Ct,Mt):O.copyTexSubImage2D(Se,pt,se,Ee,kt,Xt,Ct,Mt);ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else In?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Se,pt,se,Ee,Oe,Ct,Mt,Rt,Ae,Gt,ke.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,pt,se,Ee,Oe,Ct,Mt,Rt,Ae,ke.data):O.texSubImage3D(Se,pt,se,Ee,Oe,Ct,Mt,Rt,Ae,Gt,ke):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,se,Ee,Ct,Mt,Ae,Gt,ke.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,se,Ee,ke.width,ke.height,Ae,ke.data):O.texSubImage2D(O.TEXTURE_2D,pt,se,Ee,Ct,Mt,Ae,Gt,ke);O.pixelStorei(O.UNPACK_ROW_LENGTH,ge),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Zn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ls),O.pixelStorei(O.UNPACK_SKIP_ROWS,Kn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pa),pt===0&&G.generateMipmaps&&O.generateMipmap(Se),ot.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),ot.unbindTexture()},this.resetState=function(){L=0,C=0,P=null,ot.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class gA{constructor(t){this.canvas=t,this.renderer=null,this.scene=null,this.camera=null,this.particles=null,this.uniforms={},this.animationId=null,this.progress=0,this.themeColor=new ve("#66c2a5")}init(){this.renderer=new mA({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new lb,this.camera=new yi(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.createParticles(),this.animate(),window.addEventListener("resize",()=>this.onResize())}createParticles(){const e=new Ii,n=new Float32Array(2e3*3),r=new Float32Array(2e3);for(let o=0;o<2e3;o++)n[o*3]=(Math.random()-.5)*20,n[o*3+1]=(Math.random()-.5)*20,n[o*3+2]=(Math.random()-.5)*10,r[o]=Math.random();e.setAttribute("position",new Ti(n,3)),e.setAttribute("aRandom",new Ti(r,1));const s=new Ni({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uProgress:{value:0},uColor:{value:this.themeColor},uSize:{value:3},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
      `});this.particles=new pb(e,s),this.scene.add(this.particles),this.uniforms=s.uniforms}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.uniforms.uTime.value+=.01,this.uniforms.uProgress.value=this.progress,this.renderer.render(this.scene,this.camera)}setProgress(t){this.progress=t}setThemeColor(t){this.themeColor.set(t),this.uniforms.uColor&&(this.uniforms.uColor.value=this.themeColor)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.uniforms.uPixelRatio&&(this.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2))}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles?.geometry.dispose(),this.particles?.material.dispose(),this.renderer?.dispose()}}class _A{constructor(t){this.container=t,this.currentImage=null,this.parallaxEnabled=!1,this.handleScroll=this.updateParallax.bind(this)}show(t){if(!t?.src)return;this.clear();const e=document.createElement("div");e.style.cssText=`
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
    `,e.appendChild(n),e.appendChild(c),this.container.appendChild(e),this.currentImage=e,this.parallaxImg=n,this.parallaxEnabled=!0,window.addEventListener("scroll",this.handleScroll,{passive:!0})}updateParallax(){if(!this.parallaxEnabled||!this.parallaxImg)return;const t=window.scrollY||window.pageYOffset,e=window.innerHeight,n=-10+t/e*3,r=Math.max(-10,Math.min(0,n));this.parallaxImg.style.transform=`translateY(${r}%)`}hide(){this.clear()}clear(){this.parallaxEnabled=!1,window.removeEventListener("scroll",this.handleScroll),this.currentImage&&(this.currentImage.remove(),this.currentImage=null,this.parallaxImg=null)}}const xA="modulepreload",vA=function(i){return"/prj-jcie/"+i},Hm={},Gm=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(e.map(c=>{if(c=vA(c),c in Hm)return;Hm[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":xA,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,m)=>{f.addEventListener("load",d),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Ml=1440,bl=900,Wm=230,yA=650,SA=di,MA={europe:["Albania","Austria","Belarus","Belgium","Bosnia and Herz.","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Lithuania","Luxembourg","Macedonia","Moldova","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Ukraine","United Kingdom","N. Cyprus"],asia:["Afghanistan","Armenia","Azerbaijan","Bangladesh","Bhutan","Brunei","Cambodia","China","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Saudi Arabia","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"],africa:["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Central African Rep.","Chad","Congo","Côte d'Ivoire","Dem. Rep. Congo","Djibouti","Egypt","Eq. Guinea","Eritrea","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","S. Sudan","Senegal","Sierra Leone","Somalia","Somaliland","South Africa","Sudan","Tanzania","Togo","Tunisia","Uganda","W. Sahara","Zambia","Zimbabwe","eSwatini"]};function bA(i){const t=new Set(i.highlightCountries||[]);if(i.highlightRegions)for(const e of i.highlightRegions){const n=MA[e.toLowerCase()];if(n)for(const r of n)t.add(r)}return t}const EA="/prj-jcie/data/countries-110m.json",TA="/prj-jcie/config/map-style.json";class wA{constructor(t){this.container=t,this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null,this.glMap=null,this.tileContainer=null,this.currentCenter=[0,15],this.currentZoom=1.2,this._cameraTimer=null,this.style=null}render(t){if(t?.visible){if(this.tileContainer&&(this.tileContainer.style.display="",this.glMap))try{this.glMap.resize()}catch{}this.pendingConfig=t,this.ensureReady().then(()=>{this.pendingConfig&&this.applyConfig(this.pendingConfig)}).catch(e=>{console.error("MapLayer render failed:",e)})}}ensureReady(){if(this.readyPromise)return this.readyPromise;const t=Hu(EA),e=Hu(TA);return this.readyPromise=Promise.all([t,e]).then(async([n,r])=>{this.style=r,await this.initTileBackground().catch(()=>null);const s=n?.objects?.countries;if(!s)throw new Error("countries object not found in TopoJSON");this.countryFeatures=Ex(n,s).features,this.createSvg(),this.drawBaseMap()}),this.readyPromise}async initTileBackground(){if(!(this.glMap||!this.container))try{const[t,{Protocol:e}]=await Promise.all([Gm(()=>import("./maplibre-gl-CAsIRMuf.js").then(a=>a.m),[]),Gm(()=>import("./index-CQ-HbO1j.js"),[])]),n=t.default||t,r=new e;n.addProtocol("pmtiles",r.tile),this.tileContainer=document.createElement("div"),this.tileContainer.className="map-tile-container",this.container.appendChild(this.tileContainer);const s=this.style?.tile||{},o=s.hillshade||{};this.glMap=new n.Map({container:this.tileContainer,style:{version:8,sources:{terrain:{type:"raster-dem",url:"https://tiles.mapterhorn.com/tilejson.json",tileSize:512,encoding:"terrarium"}},layers:[{id:"background",type:"background",paint:{"background-color":s.backgroundColor||"#b8cee0"}},{id:"hillshade",type:"hillshade",source:"terrain",paint:{"hillshade-shadow-color":o.shadowColor||"#8a8a8a","hillshade-highlight-color":o.highlightColor||"#ffffff","hillshade-accent-color":o.accentColor||"#d0d0d0","hillshade-exaggeration":o.exaggeration??.35,"hillshade-illumination-direction":o.illuminationDirection??315}}]},center:[0,15],zoom:1.5,interactive:!1,attributionControl:!1,fadeDuration:0,preserveDrawingBuffer:!1}),await new Promise(a=>{this.glMap.on("load",a)})}catch(t){console.warn("MapLibre tile background init failed (falling back to flat map):",t),this.glMap=null}}createSvg(){if(!this.container||this.svg)return;this.svg=cg(this.container).append("svg").attr("class","map-svg-overlay").attr("viewBox",`0 0 ${Ml} ${bl}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","world map");const t=this.style?.background||{},e=t.hillshade||{},n=t.flat||{};this.svg.append("rect").attr("x",0).attr("y",0).attr("width",Ml).attr("height",bl).attr("fill",this.glMap?e.fill||"#8ab4d0":n.fill||"#e8f0f8").attr("fill-opacity",this.glMap?e.fillOpacity??.35:n.fillOpacity??.7)}drawBaseMap(){this.svg&&(this.countryPaths=this.svg.append("g").attr("class","countries").selectAll("path").data(this.countryFeatures,t=>t.properties?.name).join("path").attr("vector-effect","non-scaling-stroke").attr("stroke-linejoin","round"),this.markerCircles=this.svg.append("g").attr("class","map-markers"),this.markerLabels=this.svg.append("g").attr("class","map-marker-labels"))}createRenderState(t){const e=bA(t),n=!!(t.lightenNonVisited||t.lightenAllCountries),r=!!this.glMap,s=this.style?.country||{},o=r?s.hillshade||{}:s.flat||{},a=o.opacity||{},l=s.highlight||{},c=this.getThemePrimary();return{markers:t.markers||[],fillFn:u=>{const h=u.properties?.name;return e.has(h)?l.fill||c:o.fill||(r?"#f8f8f8":"#3f4f63")},fillOpacityFn:u=>{const h=u.properties?.name;return e.has(h)?a.highlight??.45:e.size===0?t.lightenAllCountries?a.lightenAll??.45:a.normal??.6:n?a.lightenNonVisited??.35:a.nonHighlight??.55},strokeFn:u=>e.has(u.properties?.name)?l.stroke||c:o.stroke||"#9a9a9a",strokeOpacityFn:u=>e.has(u.properties?.name)?l.strokeOpacity??.5:o.strokeOpacity??.35,strokeWidthFn:u=>e.has(u.properties?.name)?l.strokeWidth??1:s.defaultStrokeWidth??.4}}buildProjection(t,e){return wv().center(t).scale(Wm*e).translate([Ml/2,bl/2])}renderFrame(t,e,n){if(!this.countryPaths)return;const r=this.buildProjection(e,n),s=Tx(r);this.countryPaths.interrupt().attr("d",s).attr("fill",t.fillFn).attr("fill-opacity",t.fillOpacityFn).attr("stroke",t.strokeFn).attr("stroke-opacity",t.strokeOpacityFn).attr("stroke-width",t.strokeWidthFn),this.updateMarkers(t.markers,r)}stopCameraAnimation(){this._cameraTimer&&(this._cameraTimer.stop(),this._cameraTimer=null)}applyConfig(t){if(!this.countryPaths)return;const e=this.resolveCenter(t.center),n=Number.isFinite(t.zoom)?t.zoom:1.2,r=this.createRenderState(t),s=!this.countryPaths.node()?.getAttribute("d"),o=!s&&this.currentCenter[0]===e[0]&&this.currentCenter[1]===e[1]&&this.currentZoom===n;if(this.stopCameraAnimation(),s||o){if(this.glMap)try{this.jumpTileCamera(e,n)}catch{}this.renderFrame(r,e,n),this.currentCenter=[...e],this.currentZoom=n;return}const a=[...this.currentCenter],l=this.currentZoom,c=Cl(a[0],e[0]),u=Cl(a[1],e[1]),h=Cl(l,n),f=performance.now();this._cameraTimer=wx(()=>{const d=Math.min(1,(performance.now()-f)/yA),m=SA(d),p=[c(m),u(m)],_=h(m);if(this.glMap)try{this.jumpTileCamera(p,_)}catch{}this.renderFrame(r,p,_),this.currentCenter=p,this.currentZoom=_,d>=1&&this.stopCameraAnimation()})}jumpTileCamera(t,e){if(!this.glMap||!this.container)return;const n=Wm*e,r=this.container.clientWidth,s=this.container.clientHeight,o=Math.min(r/Ml,s/bl),a=n*o,l=Math.log2(a*2*Math.PI/512);this.glMap.jumpTo({center:[t[0],t[1]],zoom:Math.max(0,l)})}resolveCenter(t){if(!Array.isArray(t)||t.length!==2)return[0,15];const[e,n]=t;return!Number.isFinite(e)||!Number.isFinite(n)?[0,15]:[e,n]}updateMarkers(t,e){if(!this.markerCircles||!this.markerLabels)return;const n=this.style?.marker||{},r=n.fillOpacity||{},s=n.strokeWidth||{},o=this.style?.label||{},a=n.defaultSize??7,l=n.sizeBonus??3,c=o.offsetX??10,u=o.offsetY??-12,h=t.map(p=>{const _=Number(p.longitude),g=Number(p.latitude);if(!Number.isFinite(_)||!Number.isFinite(g))return null;const y=e([_,g]);return y?{id:p.id||`${p.name||p.country}-${_}-${g}`,x:y[0],y:y[1],name:p.name||"",country:p.country||"",isCurrent:!!p.isCurrent,color:this.getThemePrimary(),size:Number(p.size)||a}:null}).filter(Boolean),f=this.markerCircles.selectAll("circle").data(h,p=>p.id);f.exit().interrupt().remove(),f.enter().append("circle").merge(f).interrupt().attr("cx",p=>p.x).attr("cy",p=>p.y).attr("r",p=>p.isCurrent?p.size+l:p.size).attr("fill",p=>p.color).attr("fill-opacity",p=>p.isCurrent?r.current??.95:r.default??.72).attr("stroke",n.stroke||"#f5f0ec").attr("stroke-width",p=>p.isCurrent?s.current??2:s.default??1).attr("stroke-opacity",n.strokeOpacity??.95);const d=h.filter(p=>p.isCurrent),m=this.markerLabels.selectAll("text").data(d,p=>p.id);m.exit().interrupt().remove(),m.enter().append("text").attr("x",p=>p.x+c).attr("y",p=>p.y+u).attr("fill",o.fill||"#f5f0ec").attr("font-size",o.fontSize??14).attr("font-weight",o.fontWeight??600).attr("paint-order","stroke").attr("stroke",o.stroke||"rgba(10,14,22,0.9)").attr("stroke-width",o.strokeWidth??3).attr("stroke-linejoin","round").text(p=>p.name).merge(m).interrupt().attr("x",p=>p.x+c).attr("y",p=>p.y+u).attr("opacity",1).text(p=>p.name)}clear(){if(this.stopCameraAnimation(),this.tileContainer&&(this.tileContainer.style.display="none"),this.container){const t=this.container.querySelector(".map-svg-overlay");t&&t.remove()}this.svg=null,this.countryPaths=null,this.markerCircles=null,this.markerLabels=null,this.countryFeatures=[],this.readyPromise=null,this.pendingConfig=null}getThemePrimary(){return getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#66c2a5"}destroy(){this.clear(),this.glMap&&(this.glMap.remove(),this.glMap=null),this.tileContainer&&(this.tileContainer.remove(),this.tileContainer=null)}}const D0=1e-10;function Dc(i,t){const e=CA(i),n=e.filter(a=>AA(a,i));let r=0,s=0;const o=[];if(n.length>1){const a=N0(n);for(let c=0;c<n.length;++c){const u=n[c];u.angle=Math.atan2(u.x-a.x,u.y-a.y)}n.sort((c,u)=>u.angle-c.angle);let l=n[n.length-1];for(let c=0;c<n.length;++c){const u=n[c];s+=(l.x+u.x)*(u.y-l.y);const h={x:(u.x+l.x)/2,y:(u.y+l.y)/2};let f=null;for(let d=0;d<u.parentIndex.length;++d)if(l.parentIndex.includes(u.parentIndex[d])){const m=i[u.parentIndex[d]],p=Math.atan2(u.x-m.x,u.y-m.y),_=Math.atan2(l.x-m.x,l.y-m.y);let g=_-p;g<0&&(g+=2*Math.PI);const y=_-g/2;let S=Yn(h,{x:m.x+m.radius*Math.sin(y),y:m.y+m.radius*Math.cos(y)});S>m.radius*2&&(S=m.radius*2),(f==null||f.width>S)&&(f={circle:m,width:S,p1:u,p2:l,large:S>m.radius,sweep:!0})}f!=null&&(o.push(f),r+=xf(f.circle.radius,f.width),l=u)}}else{let a=i[0];for(let c=1;c<i.length;++c)i[c].radius<a.radius&&(a=i[c]);let l=!1;for(let c=0;c<i.length;++c)if(Yn(i[c],a)>Math.abs(a.radius-i[c].radius)){l=!0;break}l?r=s=0:(r=a.radius*a.radius*Math.PI,o.push({circle:a,p1:{x:a.x,y:a.y+a.radius},p2:{x:a.x-D0,y:a.y+a.radius},width:a.radius*2,large:!0,sweep:!0}))}return s/=2,t&&(t.area=r+s,t.arcArea=r,t.polygonArea=s,t.arcs=o,t.innerPoints=n,t.intersectionPoints=e),r+s}function AA(i,t){return t.every(e=>Yn(i,e)<e.radius+D0)}function CA(i){const t=[];for(let e=0;e<i.length;++e)for(let n=e+1;n<i.length;++n){const r=L0(i[e],i[n]);for(const s of r)s.parentIndex=[e,n],t.push(s)}return t}function xf(i,t){return i*i*Math.acos(1-t/i)-(i-t)*Math.sqrt(t*(2*i-t))}function Yn(i,t){return Math.sqrt((i.x-t.x)*(i.x-t.x)+(i.y-t.y)*(i.y-t.y))}function vd(i,t,e){if(e>=i+t)return 0;if(e<=Math.abs(i-t))return Math.PI*Math.min(i,t)*Math.min(i,t);const n=i-(e*e-t*t+i*i)/(2*e),r=t-(e*e-i*i+t*t)/(2*e);return xf(i,n)+xf(t,r)}function L0(i,t){const e=Yn(i,t),n=i.radius,r=t.radius;if(e>=n+r||e<=Math.abs(n-r))return[];const s=(n*n-r*r+e*e)/(2*e),o=Math.sqrt(n*n-s*s),a=i.x+s*(t.x-i.x)/e,l=i.y+s*(t.y-i.y)/e,c=-(t.y-i.y)*(o/e),u=-(t.x-i.x)*(o/e);return[{x:a+c,y:l-u},{x:a-c,y:l+u}]}function N0(i){const t={x:0,y:0};for(const e of i)t.x+=e.x,t.y+=e.y;return t.x/=i.length,t.y/=i.length,t}function RA(i,t,e,n){n=n||{};const r=n.maxIterations||100,s=n.tolerance||1e-10,o=i(t),a=i(e);let l=e-t;if(o*a>0)throw"Initial bisect points must have opposite signs";if(o===0)return t;if(a===0)return e;for(let c=0;c<r;++c){l/=2;const u=t+l,h=i(u);if(h*o>=0&&(t=u),Math.abs(l)<s||h===0)return u}return t+l}function vf(i){const t=new Array(i);for(let e=0;e<i;++e)t[e]=0;return t}function Xm(i,t){return vf(i).map(()=>vf(t))}function ha(i,t){let e=0;for(let n=0;n<i.length;++n)e+=i[n]*t[n];return e}function yf(i){return Math.sqrt(ha(i,i))}function Sf(i,t,e){for(let n=0;n<t.length;++n)i[n]=t[n]*e}function cr(i,t,e,n,r){for(let s=0;s<i.length;++s)i[s]=t*e[s]+n*r[s]}function I0(i,t,e){e=e||{};const n=e.maxIterations||t.length*200,r=e.nonZeroDelta||1.05,s=e.zeroDelta||.001,o=e.minErrorDelta||1e-6,a=e.minErrorDelta||1e-5,l=e.rho!==void 0?e.rho:1,c=e.chi!==void 0?e.chi:2,u=e.psi!==void 0?e.psi:-.5,h=e.sigma!==void 0?e.sigma:.5;let f;const d=t.length,m=new Array(d+1);m[0]=t,m[0].fx=i(t),m[0].id=0;for(let M=0;M<d;++M){const b=t.slice();b[M]=b[M]?b[M]*r:s,m[M+1]=b,m[M+1].fx=i(b),m[M+1].id=M+1}function p(M){for(let b=0;b<M.length;b++)m[d][b]=M[b];m[d].fx=M.fx}const _=(M,b)=>M.fx-b.fx,g=t.slice(),y=t.slice(),S=t.slice(),v=t.slice();for(let M=0;M<n;++M){if(m.sort(_),e.history){const T=m.map(R=>{const x=R.slice();return x.fx=R.fx,x.id=R.id,x});T.sort((R,x)=>R.id-x.id),e.history.push({x:m[0].slice(),fx:m[0].fx,simplex:T})}f=0;for(let T=0;T<d;++T)f=Math.max(f,Math.abs(m[0][T]-m[1][T]));if(Math.abs(m[0].fx-m[d].fx)<o&&f<a)break;for(let T=0;T<d;++T){g[T]=0;for(let R=0;R<d;++R)g[T]+=m[R][T];g[T]/=d}const b=m[d];if(cr(y,1+l,g,-l,b),y.fx=i(y),y.fx<m[0].fx)cr(v,1+c,g,-c,b),v.fx=i(v),v.fx<y.fx?p(v):p(y);else if(y.fx>=m[d-1].fx){let T=!1;if(y.fx>b.fx?(cr(S,1+u,g,-u,b),S.fx=i(S),S.fx<b.fx?p(S):T=!0):(cr(S,1-u*l,g,u*l,b),S.fx=i(S),S.fx<y.fx?p(S):T=!0),T){if(h>=1)break;for(let R=1;R<m.length;++R)cr(m[R],1-h,m[0],h,m[R]),m[R].fx=i(m[R])}}else p(y)}return m.sort(_),{fx:m[0].fx,x:m[0]}}function PA(i,t,e,n,r,s,o){const a=e.fx,l=ha(e.fxprime,t);let c=a,u=a,h=l,f=0;r=r||1,s=s||1e-6,o=o||.1;function d(m,p,_){for(let g=0;g<16;++g)if(r=(m+p)/2,cr(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),h=ha(n.fxprime,t),c>a+s*r*l||c>=_)p=r;else{if(Math.abs(h)<=-o*l)return r;h*(p-m)>=0&&(p=m),m=r,_=c}return 0}for(let m=0;m<10;++m){if(cr(n.x,1,e.x,r,t),c=n.fx=i(n.x,n.fxprime),h=ha(n.fxprime,t),c>a+s*r*l||m&&c>=u)return d(f,r,u);if(Math.abs(h)<=-o*l)return r;if(h>=0)return d(r,f,c);u=c,f=r,r*=2}return r}function DA(i,t,e){let n={x:t.slice(),fx:0,fxprime:t.slice()},r={x:t.slice(),fx:0,fxprime:t.slice()};const s=t.slice();let o,a,l=1,c;e=e||{},c=e.maxIterations||t.length*20,n.fx=i(n.x,n.fxprime),o=n.fxprime.slice(),Sf(o,n.fxprime,-1);for(let u=0;u<c;++u){if(l=PA(i,o,n,r,l),e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),!l)Sf(o,n.fxprime,-1);else{cr(s,1,r.fxprime,-1,n.fxprime);const h=ha(n.fxprime,n.fxprime),f=Math.max(0,ha(s,r.fxprime)/h);cr(o,f,o,-1,r.fxprime),a=n,n=r,r=a}if(yf(n.fxprime)<=1e-5)break}return e.history&&e.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:l}),n}function LA(i,t={}){t.maxIterations=t.maxIterations||500;const e=t.initialLayout||FA,n=t.lossFunction||Lc,r=NA(i,t),s=e(r,t),o=Object.keys(s),a=[];for(const u of o)a.push(s[u].x),a.push(s[u].y);const c=I0(u=>{const h={};for(let f=0;f<o.length;++f){const d=o[f];h[d]={x:u[2*f],y:u[2*f+1],radius:s[d].radius}}return n(h,r)},a,t).x;for(let u=0;u<o.length;++u){const h=o[u];s[h].x=c[2*u],s[h].y=c[2*u+1]}return s}const U0=1e-10;function Mf(i,t,e){return Math.min(i,t)*Math.min(i,t)*Math.PI<=e+U0?Math.abs(i-t):RA(n=>vd(i,t,n)-e,0,i+t)}function NA(i,t={}){const e=t.distinct,n=i.map(a=>Object.assign({},a));function r(a){return a.join(";")}if(e){const a=new Map;for(const l of n)for(let c=0;c<l.sets.length;c++){const u=String(l.sets[c]);a.set(u,l.size+(a.get(u)||0));for(let h=c+1;h<l.sets.length;h++){const f=String(l.sets[h]),d=`${u};${f}`,m=`${f};${u}`;a.set(d,l.size+(a.get(d)||0)),a.set(m,l.size+(a.get(m)||0))}}for(const l of n)l.sets.length<3&&(l.size=a.get(r(l.sets)))}const s=[],o=new Set;for(const a of n)if(a.sets.length===1)s.push(a.sets[0]);else if(a.sets.length===2){const l=a.sets[0],c=a.sets[1];o.add(r(a.sets)),o.add(r([c,l]))}s.sort((a,l)=>a===l?0:a<l?-1:1);for(let a=0;a<s.length;++a){const l=s[a];for(let c=a+1;c<s.length;++c){const u=s[c];o.has(r([l,u]))||n.push({sets:[l,u],size:0})}}return n}function IA(i,t,e){const n=Xm(t.length,t.length),r=Xm(t.length,t.length);return i.filter(s=>s.sets.length===2).forEach(s=>{const o=e[s.sets[0]],a=e[s.sets[1]],l=Math.sqrt(t[o].size/Math.PI),c=Math.sqrt(t[a].size/Math.PI),u=Mf(l,c,s.size);n[o][a]=n[a][o]=u;let h=0;s.size+1e-10>=Math.min(t[o].size,t[a].size)?h=1:s.size<=1e-10&&(h=-1),r[o][a]=r[a][o]=h}),{distances:n,constraints:r}}function UA(i,t,e,n){for(let s=0;s<t.length;++s)t[s]=0;let r=0;for(let s=0;s<e.length;++s){const o=i[2*s],a=i[2*s+1];for(let l=s+1;l<e.length;++l){const c=i[2*l],u=i[2*l+1],h=e[s][l],f=n[s][l],d=(c-o)*(c-o)+(u-a)*(u-a),m=Math.sqrt(d),p=d-h*h;f>0&&m<=h||f<0&&m>=h||(r+=2*p*p,t[2*s]+=4*p*(o-c),t[2*s+1]+=4*p*(a-u),t[2*l]+=4*p*(c-o),t[2*l+1]+=4*p*(u-a))}}return r}function FA(i,t={}){let e=kA(i,t);const n=t.lossFunction||Lc;if(i.length>=8){const r=OA(i,t),s=n(r,i),o=n(e,i);s+1e-8<o&&(e=r)}return e}function OA(i,t={}){const e=t.restarts||10,n=[],r={};for(const f of i)f.sets.length===1&&(r[f.sets[0]]=n.length,n.push(f));let{distances:s,constraints:o}=IA(i,n,r);const a=yf(s.map(yf))/s.length;s=s.map(f=>f.map(d=>d/a));const l=(f,d)=>UA(f,d,s,o);let c=null;for(let f=0;f<e;++f){const d=vf(s.length*2).map(Math.random),m=DA(l,d,t);(!c||m.fx<c.fx)&&(c=m)}const u=c.x,h={};for(let f=0;f<n.length;++f){const d=n[f];h[d.sets[0]]={x:u[2*f]*a,y:u[2*f+1]*a,radius:Math.sqrt(d.size/Math.PI)}}if(t.history)for(const f of t.history)Sf(f.x,a);return h}function kA(i,t){const e=t&&t.lossFunction?t.lossFunction:Lc,n={},r={};for(const h of i)if(h.sets.length===1){const f=h.sets[0];n[f]={x:1e10,y:1e10,rowid:n.length,size:h.size,radius:Math.sqrt(h.size/Math.PI)},r[f]=[]}i=i.filter(h=>h.sets.length===2);for(const h of i){let f=h.weight!=null?h.weight:1;const d=h.sets[0],m=h.sets[1];h.size+U0>=Math.min(n[d].size,n[m].size)&&(f=0),r[d].push({set:m,size:h.size,weight:f}),r[m].push({set:d,size:h.size,weight:f})}const s=[];Object.keys(r).forEach(h=>{let f=0;for(let d=0;d<r[h].length;++d)f+=r[h][d].size*r[h][d].weight;s.push({set:h,size:f})});function o(h,f){return f.size-h.size}s.sort(o);const a={};function l(h){return h.set in a}function c(h,f){n[f].x=h.x,n[f].y=h.y,a[f]=!0}c({x:0,y:0},s[0].set);for(let h=1;h<s.length;++h){const f=s[h].set,d=r[f].filter(l),m=n[f];if(d.sort(o),d.length===0)throw"ERROR: missing pairwise overlap information";const p=[];for(var u=0;u<d.length;++u){const y=n[d[u].set],S=Mf(m.radius,y.radius,d[u].size);p.push({x:y.x+S,y:y.y}),p.push({x:y.x-S,y:y.y}),p.push({y:y.y+S,x:y.x}),p.push({y:y.y-S,x:y.x});for(let v=u+1;v<d.length;++v){const M=n[d[v].set],b=Mf(m.radius,M.radius,d[v].size),T=L0({x:y.x,y:y.y,radius:S},{x:M.x,y:M.y,radius:b});p.push(...T)}}let _=1e50,g=p[0];for(const y of p){n[f].x=y.x,n[f].y=y.y;const S=e(n,i);S<_&&(_=S,g=y)}c(g,f)}return n}function Lc(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const o=i[n.sets[0]],a=i[n.sets[1]];r=vd(o.radius,a.radius,Yn(o,a))}else r=Dc(n.sets.map(o=>i[o]));const s=n.weight!=null?n.weight:1;e+=s*(r-n.size)*(r-n.size)}return e}function BA(i,t){let e=0;for(const n of t){if(n.sets.length===1)continue;let r;if(n.sets.length===2){const a=i[n.sets[0]],l=i[n.sets[1]];r=vd(a.radius,l.radius,Yn(a,l))}else r=Dc(n.sets.map(a=>i[a]));const s=n.weight!=null?n.weight:1,o=Math.log((r+1)/(n.size+1));e+=s*o*o}return e}function zA(i,t,e){if(e==null?i.sort((r,s)=>s.radius-r.radius):i.sort(e),i.length>0){const r=i[0].x,s=i[0].y;for(const o of i)o.x-=r,o.y-=s}if(i.length===2&&Yn(i[0],i[1])<Math.abs(i[1].radius-i[0].radius)&&(i[1].x=i[0].x+i[0].radius-i[1].radius-1e-10,i[1].y=i[0].y),i.length>1){const r=Math.atan2(i[1].x,i[1].y)-t,s=Math.cos(r),o=Math.sin(r);for(const a of i){const l=a.x,c=a.y;a.x=s*l-o*c,a.y=o*l+s*c}}if(i.length>2){let r=Math.atan2(i[2].x,i[2].y)-t;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;if(r>Math.PI){const s=i[1].y/(1e-10+i[1].x);for(const o of i){var n=(o.x+s*o.y)/(1+s*s);o.x=2*n-o.x,o.y=2*n*s-o.y}}}}function VA(i){i.forEach(r=>{r.parent=r});function t(r){return r.parent!==r&&(r.parent=t(r.parent)),r.parent}function e(r,s){const o=t(r),a=t(s);o.parent=a}for(let r=0;r<i.length;++r)for(let s=r+1;s<i.length;++s){const o=i[r].radius+i[s].radius;Yn(i[r],i[s])+1e-10<o&&e(i[s],i[r])}const n=new Map;for(let r=0;r<i.length;++r){const s=t(i[r]).parent.setid;n.has(s)||n.set(s,[]),n.get(s).push(i[r])}return i.forEach(r=>{delete r.parent}),Array.from(n.values())}function bf(i){const t=e=>{const n=i.reduce((s,o)=>Math.max(s,o[e]+o.radius),Number.NEGATIVE_INFINITY),r=i.reduce((s,o)=>Math.min(s,o[e]-o.radius),Number.POSITIVE_INFINITY);return{max:n,min:r}};return{xRange:t("x"),yRange:t("y")}}function HA(i,t,e){t==null&&(t=Math.PI/2);let n=O0(i).map(c=>Object.assign({},c));const r=VA(n);for(const c of r){zA(c,t,e);const u=bf(c);c.size=(u.xRange.max-u.xRange.min)*(u.yRange.max-u.yRange.min),c.bounds=u}r.sort((c,u)=>u.size-c.size),n=r[0];let s=n.bounds;const o=(s.xRange.max-s.xRange.min)/50;function a(c,u,h){if(!c)return;const f=c.bounds;let d,m;if(u)d=s.xRange.max-f.xRange.min+o;else{d=s.xRange.max-f.xRange.max;const p=(f.xRange.max-f.xRange.min)/2-(s.xRange.max-s.xRange.min)/2;p<0&&(d+=p)}if(h)m=s.yRange.max-f.yRange.min+o;else{m=s.yRange.max-f.yRange.max;const p=(f.yRange.max-f.yRange.min)/2-(s.yRange.max-s.yRange.min)/2;p<0&&(m+=p)}for(const p of c)p.x+=d,p.y+=m,n.push(p)}let l=1;for(;l<r.length;)a(r[l],!0,!1),a(r[l+1],!1,!0),a(r[l+2],!0,!0),l+=3,s=bf(n);return F0(n)}function GA(i,t,e,n,r){const s=O0(i);t-=2*n,e-=2*n;const{xRange:o,yRange:a}=bf(s);if(o.max===o.min||a.max===a.min)return console.log("not scaling solution: zero size detected"),i;let l,c;if(r){const d=Math.sqrt(r/Math.PI)*2;l=t/d,c=e/d}else l=t/(o.max-o.min),c=e/(a.max-a.min);const u=Math.min(c,l),h=(t-(o.max-o.min)*u)/2,f=(e-(a.max-a.min)*u)/2;return F0(s.map(d=>({radius:u*d.radius,x:n+h+(d.x-o.min)*u,y:n+f+(d.y-a.min)*u,setid:d.setid})))}function F0(i){const t={};for(const e of i)t[e.setid]=e;return t}function O0(i){return Object.keys(i).map(e=>Object.assign(i[e],{setid:e}))}function Ou(i,t,e){let n=t[0].radius-Yn(t[0],i);for(let r=1;r<t.length;++r){const s=t[r].radius-Yn(t[r],i);s<=n&&(n=s)}for(let r=0;r<e.length;++r){const s=Yn(e[r],i)-e[r].radius;s<=n&&(n=s)}return n}function k0(i,t,e){const n=[];for(const u of i)n.push({x:u.x,y:u.y}),n.push({x:u.x+u.radius/2,y:u.y}),n.push({x:u.x-u.radius/2,y:u.y}),n.push({x:u.x,y:u.y+u.radius/2}),n.push({x:u.x,y:u.y-u.radius/2});let r=n[0],s=Ou(n[0],i,t);for(let u=1;u<n.length;++u){const h=Ou(n[u],i,t);h>=s&&(r=n[u],s=h)}const o=I0(u=>-1*Ou({x:u[0],y:u[1]},i,t),[r.x,r.y],{maxIterations:500,minErrorDelta:1e-10}).x,a={x:e?0:o[0],y:o[1]};let l=!0;for(const u of i)if(Yn(a,u)>u.radius){l=!1;break}for(const u of t)if(Yn(a,u)<u.radius){l=!1;break}if(l)return a;if(i.length==1)return{x:i[0].x,y:i[0].y};const c={};return Dc(i,c),c.arcs.length===0?{x:0,y:-1e3,disjoint:!0}:c.arcs.length==1?{x:c.arcs[0].circle.x,y:c.arcs[0].circle.y}:t.length?k0(i,[]):N0(c.arcs.map(u=>u.p1))}function WA(i){const t={},e=Object.keys(i);for(const n of e)t[n]=[];for(let n=0;n<e.length;n++){const r=e[n],s=i[r];for(let o=n+1;o<e.length;++o){const a=e[o],l=i[a],c=Yn(s,l);c+l.radius<=s.radius+1e-10?t[a].push(r):c+s.radius<=l.radius+1e-10&&t[r].push(a)}}return t}function XA(i,t,e){const n={},r=WA(i);for(let s=0;s<t.length;++s){const o=t[s].sets,a={},l={};for(let f=0;f<o.length;++f){a[o[f]]=!0;const d=r[o[f]];for(let m=0;m<d.length;++m)l[d[m]]=!0}const c=[],u=[];for(let f in i)f in a?c.push(i[f]):f in l||u.push(i[f]);const h=k0(c,u,e);n[o]=h,h.disjoint&&t[s].size>0&&console.log("WARNING: area "+o+" not represented on screen")}return n}function $A(i,t,e){const n=[];return n.push(`
M`,i,t),n.push(`
m`,-e,0),n.push(`
a`,e,e,0,1,0,e*2,0),n.push(`
a`,e,e,0,1,0,-e*2,0),n.join(" ")}function YA(i){if(i.length===0)return[];const t={};return Dc(i,t),t.arcs}function qA(i,t){if(i.length===0)return"M 0 0";const e=Math.pow(10,t||0),n=t!=null?s=>Math.round(s*e)/e:s=>s;if(i.length==1){const s=i[0].circle;return $A(n(s.x),n(s.y),n(s.radius))}const r=[`
M`,n(i[0].p2.x),n(i[0].p2.y)];for(const s of i){const o=n(s.circle.radius);r.push(`
A`,o,o,0,s.large?1:0,s.sweep?1:0,n(s.p1.x),n(s.p1.y))}return r.join(" ")}function jA(i,t={}){const{lossFunction:e,layoutFunction:n=LA,normalize:r=!0,orientation:s=Math.PI/2,orientationOrder:o,width:a=600,height:l=350,padding:c=15,scaleToFit:u=!1,symmetricalTextCentre:h=!1,distinct:f,round:d=2}=t;let m=n(i,{lossFunction:e==="default"||!e?Lc:e==="logRatio"?BA:e,distinct:f});r&&(m=HA(m,s,o));const p=GA(m,a,l,c,u),_=XA(p,i,h),g=new Map(Object.keys(p).map(v=>[v,{set:v,x:p[v].x,y:p[v].y,radius:p[v].radius}])),y=i.map(v=>{const M=v.sets.map(R=>g.get(R)),b=YA(M),T=qA(b,d);return{circles:M,arcs:b,path:T,area:v,has:new Set(v.sets)}});function S(v){let M="";for(const b of y)b.has.size>v.length&&v.every(T=>b.has.has(T))&&(M+=" "+b.path);return M}return y.map(({circles:v,arcs:M,path:b,area:T})=>({data:T,text:_[T.sets],circles:v,arcs:M,path:b,distinctPath:b+S(T.sets)}))}var Ef="http://www.w3.org/1999/xhtml";const $m={svg:"http://www.w3.org/2000/svg",xhtml:Ef,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function B0(i){var t=i+="",e=t.indexOf(":");return e>=0&&(t=i.slice(0,e))!=="xmlns"&&(i=i.slice(e+1)),$m.hasOwnProperty(t)?{space:$m[t],local:i}:i}function ZA(i){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Ef&&t.documentElement.namespaceURI===Ef?t.createElement(i):t.createElementNS(e,i)}}function KA(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function z0(i){var t=B0(i);return(t.local?KA:ZA)(t)}function JA(){}function V0(i){return i==null?JA:function(){return this.querySelector(i)}}function QA(i){typeof i!="function"&&(i=V0(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=n[r]=new Array(o),l,c,u=0;u<o;++u)(l=s[u])&&(c=i.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new wi(n,this._parents)}function tC(){return[]}function eC(i){return i==null?tC:function(){return this.querySelectorAll(i)}}function nC(i){typeof i!="function"&&(i=eC(i));for(var t=this._groups,e=t.length,n=[],r=[],s=0;s<e;++s)for(var o=t[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(n.push(i.call(l,l.__data__,c,o)),r.push(l));return new wi(n,r)}function iC(i){return function(){return this.matches(i)}}function rC(i){typeof i!="function"&&(i=iC(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=n[r]=[],l,c=0;c<o;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&a.push(l);return new wi(n,this._parents)}function H0(i){return new Array(i.length)}function sC(){return new wi(this._enter||this._groups.map(H0),this._parents)}function pc(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}pc.prototype={constructor:pc,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function aC(i){return function(){return i}}var Ym="$";function oC(i,t,e,n,r,s){for(var o=0,a,l=t.length,c=s.length;o<c;++o)(a=t[o])?(a.__data__=s[o],n[o]=a):e[o]=new pc(i,s[o]);for(;o<l;++o)(a=t[o])&&(r[o]=a)}function lC(i,t,e,n,r,s,o){var a,l,c={},u=t.length,h=s.length,f=new Array(u),d;for(a=0;a<u;++a)(l=t[a])&&(f[a]=d=Ym+o.call(l,l.__data__,a,t),d in c?r[a]=l:c[d]=l);for(a=0;a<h;++a)d=Ym+o.call(i,s[a],a,s),(l=c[d])?(n[a]=l,l.__data__=s[a],c[d]=null):e[a]=new pc(i,s[a]);for(a=0;a<u;++a)(l=t[a])&&c[f[a]]===l&&(r[a]=l)}function cC(i,t){if(!i)return d=new Array(this.size()),c=-1,this.each(function(b){d[++c]=b}),d;var e=t?lC:oC,n=this._parents,r=this._groups;typeof i!="function"&&(i=aC(i));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],h=r[c],f=h.length,d=i.call(u,u&&u.__data__,c,n),m=d.length,p=a[c]=new Array(m),_=o[c]=new Array(m),g=l[c]=new Array(f);e(u,h,p,_,g,d,t);for(var y=0,S=0,v,M;y<m;++y)if(v=p[y]){for(y>=S&&(S=y+1);!(M=_[S])&&++S<m;);v._next=M||null}}return o=new wi(o,n),o._enter=a,o._exit=l,o}function uC(){return new wi(this._exit||this._groups.map(H0),this._parents)}function hC(i,t,e){var n=this.enter(),r=this,s=this.exit();return n=typeof i=="function"?i(n):n.append(i+""),t!=null&&(r=t(r)),e==null?s.remove():e(s),n&&r?n.merge(r).order():r}function fC(i){for(var t=this._groups,e=i._groups,n=t.length,r=e.length,s=Math.min(n,r),o=new Array(n),a=0;a<s;++a)for(var l=t[a],c=e[a],u=l.length,h=o[a]=new Array(u),f,d=0;d<u;++d)(f=l[d]||c[d])&&(h[d]=f);for(;a<n;++a)o[a]=t[a];return new wi(o,this._parents)}function dC(){for(var i=this._groups,t=-1,e=i.length;++t<e;)for(var n=i[t],r=n.length-1,s=n[r],o;--r>=0;)(o=n[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function pC(i){i||(i=mC);function t(h,f){return h&&f?i(h.__data__,f.__data__):!h-!f}for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s){for(var o=e[s],a=o.length,l=r[s]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(t)}return new wi(r,this._parents).order()}function mC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function gC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function _C(){var i=new Array(this.size()),t=-1;return this.each(function(){i[++t]=this}),i}function xC(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length;r<s;++r){var o=n[r];if(o)return o}return null}function vC(){var i=0;return this.each(function(){++i}),i}function yC(){return!this.node()}function SC(i){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,o=r.length,a;s<o;++s)(a=r[s])&&i.call(a,a.__data__,s,r);return this}function MC(i){return function(){this.removeAttribute(i)}}function bC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function EC(i,t){return function(){this.setAttribute(i,t)}}function TC(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function wC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(i):this.setAttribute(i,e)}}function AC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,e)}}function CC(i,t){var e=B0(i);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?bC:MC:typeof t=="function"?e.local?AC:wC:e.local?TC:EC)(e,t))}function G0(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function RC(i){return function(){this.style.removeProperty(i)}}function PC(i,t,e){return function(){this.style.setProperty(i,t,e)}}function DC(i,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,e)}}function LC(i,t,e){return arguments.length>1?this.each((t==null?RC:typeof t=="function"?DC:PC)(i,t,e??"")):NC(this.node(),i)}function NC(i,t){return i.style.getPropertyValue(t)||G0(i).getComputedStyle(i,null).getPropertyValue(t)}function IC(i){return function(){delete this[i]}}function UC(i,t){return function(){this[i]=t}}function FC(i,t){return function(){var e=t.apply(this,arguments);e==null?delete this[i]:this[i]=e}}function OC(i,t){return arguments.length>1?this.each((t==null?IC:typeof t=="function"?FC:UC)(i,t)):this.node()[i]}function W0(i){return i.trim().split(/^|\s+/)}function yd(i){return i.classList||new X0(i)}function X0(i){this._node=i,this._names=W0(i.getAttribute("class")||"")}X0.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function $0(i,t){for(var e=yd(i),n=-1,r=t.length;++n<r;)e.add(t[n])}function Y0(i,t){for(var e=yd(i),n=-1,r=t.length;++n<r;)e.remove(t[n])}function kC(i){return function(){$0(this,i)}}function BC(i){return function(){Y0(this,i)}}function zC(i,t){return function(){(t.apply(this,arguments)?$0:Y0)(this,i)}}function VC(i,t){var e=W0(i+"");if(arguments.length<2){for(var n=yd(this.node()),r=-1,s=e.length;++r<s;)if(!n.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?zC:t?kC:BC)(e,t))}function HC(){this.textContent=""}function GC(i){return function(){this.textContent=i}}function WC(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function XC(i){return arguments.length?this.each(i==null?HC:(typeof i=="function"?WC:GC)(i)):this.node().textContent}function $C(){this.innerHTML=""}function YC(i){return function(){this.innerHTML=i}}function qC(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function jC(i){return arguments.length?this.each(i==null?$C:(typeof i=="function"?qC:YC)(i)):this.node().innerHTML}function ZC(){this.nextSibling&&this.parentNode.appendChild(this)}function KC(){return this.each(ZC)}function JC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function QC(){return this.each(JC)}function tR(i){var t=typeof i=="function"?i:z0(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function eR(){return null}function nR(i,t){var e=typeof i=="function"?i:z0(i),n=t==null?eR:typeof t=="function"?t:V0(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function iR(){var i=this.parentNode;i&&i.removeChild(this)}function rR(){return this.each(iR)}function sR(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function aR(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}function oR(i){return this.select(i?aR:sR)}function lR(i){return arguments.length?this.property("__data__",i):this.node().__data__}var q0={},ee=null;if(typeof document<"u"){var cR=document.documentElement;"onmouseenter"in cR||(q0={mouseenter:"mouseover",mouseleave:"mouseout"})}function uR(i,t,e){return i=j0(i,t,e),function(n){var r=n.relatedTarget;(!r||r!==this&&!(r.compareDocumentPosition(this)&8))&&i.call(this,n)}}function j0(i,t,e){return function(n){var r=ee;ee=n;try{i.call(this,this.__data__,t,e)}finally{ee=r}}}function hR(i){return i.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function fR(i){return function(){var t=this.__on;if(t){for(var e=0,n=-1,r=t.length,s;e<r;++e)s=t[e],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.capture):t[++n]=s;++n?t.length=n:delete this.__on}}}function dR(i,t,e){var n=q0.hasOwnProperty(i.type)?uR:j0;return function(r,s,o){var a=this.__on,l,c=n(t,s,o);if(a){for(var u=0,h=a.length;u<h;++u)if((l=a[u]).type===i.type&&l.name===i.name){this.removeEventListener(l.type,l.listener,l.capture),this.addEventListener(l.type,l.listener=c,l.capture=e),l.value=t;return}}this.addEventListener(i.type,c,e),l={type:i.type,name:i.name,value:t,listener:c,capture:e},a?a.push(l):this.__on=[l]}}function pR(i,t,e){var n=hR(i+""),r,s=n.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<s;++r)if((o=n[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=t?dR:fR,e==null&&(e=!1),r=0;r<s;++r)this.each(a(n[r],t,e));return this}function qm(i,t,e,n){var r=ee;i.sourceEvent=ee,ee=i;try{return t.apply(e,n)}finally{ee=r}}function Z0(i,t,e){var n=G0(i),r=n.CustomEvent;typeof r=="function"?r=new r(t,e):(r=n.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),i.dispatchEvent(r)}function mR(i,t){return function(){return Z0(this,i,t)}}function gR(i,t){return function(){return Z0(this,i,t.apply(this,arguments))}}function _R(i,t){return this.each((typeof t=="function"?gR:mR)(i,t))}var xR=[null];function wi(i,t){this._groups=i,this._parents=t}wi.prototype={constructor:wi,select:QA,selectAll:nC,filter:rC,data:cC,enter:sC,exit:uC,join:hC,merge:fC,order:dC,sort:pC,call:gC,nodes:_C,node:xC,size:vC,empty:yC,each:SC,attr:CC,style:LC,property:OC,classed:VC,text:XC,html:jC,raise:KC,lower:QC,append:tR,insert:nR,remove:rR,clone:oR,datum:lR,on:pR,dispatch:_R};function Yr(i){return typeof i=="string"?new wi([[document.querySelector(i)]],[document.documentElement]):new wi([[i]],xR)}var vR=0;function jm(){this._="@"+(++vR).toString(36)}jm.prototype={constructor:jm,get:function(i){for(var t=this._;!(t in i);)if(!(i=i.parentNode))return;return i[t]},set:function(i,t){return i[this._]=t},remove:function(i){return this._ in i&&delete i[this._]},toString:function(){return this._}};function K0(){for(var i=ee,t;t=i.sourceEvent;)i=t;return i}function J0(i,t){var e=i.ownerSVGElement||i;if(e.createSVGPoint){var n=e.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,n=n.matrixTransform(i.getScreenCTM().inverse()),[n.x,n.y]}var r=i.getBoundingClientRect();return[t.clientX-r.left-i.clientLeft,t.clientY-r.top-i.clientTop]}function yR(i){var t=K0();return t.changedTouches&&(t=t.changedTouches[0]),J0(i,t)}function SR(i,t,e){arguments.length<3&&(e=t,t=K0().changedTouches);for(var n=0,r=t?t.length:0,s;n<r;++n)if((s=t[n]).identifier===e)return J0(i,s);return null}var MR={value:function(){}};function Sd(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e)throw new Error("illegal type: "+n);e[n]=[]}return new $l(e)}function $l(i){this._=i}function bR(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}$l.prototype=Sd.prototype={constructor:$l,on:function(i,t){var e=this._,n=bR(i+"",e),r,s=-1,o=n.length;if(arguments.length<2){for(;++s<o;)if((r=(i=n[s]).type)&&(r=ER(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(i=n[s]).type)e[r]=Zm(e[r],i.name,t);else if(t==null)for(r in e)e[r]=Zm(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new $l(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function ER(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function Zm(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=MR,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}function ku(){ee.stopImmediatePropagation()}function fa(){ee.preventDefault(),ee.stopImmediatePropagation()}function TR(i){var t=i.document.documentElement,e=Yr(i).on("dragstart.drag",fa,!0);"onselectstart"in t?e.on("selectstart.drag",fa,!0):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function wR(i,t){var e=i.document.documentElement,n=Yr(i).on("dragstart.drag",null);t&&(n.on("click.drag",fa,!0),setTimeout(function(){n.on("click.drag",null)},0)),"onselectstart"in e?n.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function El(i){return function(){return i}}function Tf(i,t,e,n,r,s,o,a,l,c){this.target=i,this.type=t,this.subject=e,this.identifier=n,this.active=r,this.x=s,this.y=o,this.dx=a,this.dy=l,this._=c}Tf.prototype.on=function(){var i=this._.on.apply(this._,arguments);return i===this._?this:i};function AR(){return!ee.button}function CR(){return this.parentNode}function RR(i){return i??{x:ee.x,y:ee.y}}function PR(){return"ontouchstart"in this}function Q0(){var i=AR,t=CR,e=RR,n=PR,r={},s=Sd("start","drag","end"),o=0,a,l,c,u,h=0;function f(v){v.on("mousedown.drag",d).filter(n).on("touchstart.drag",_).on("touchmove.drag",g).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(){if(!(u||!i.apply(this,arguments))){var v=S("mouse",t.apply(this,arguments),yR,this,arguments);v&&(Yr(ee.view).on("mousemove.drag",m,!0).on("mouseup.drag",p,!0),TR(ee.view),ku(),c=!1,a=ee.clientX,l=ee.clientY,v("start"))}}function m(){if(fa(),!c){var v=ee.clientX-a,M=ee.clientY-l;c=v*v+M*M>h}r.mouse("drag")}function p(){Yr(ee.view).on("mousemove.drag mouseup.drag",null),wR(ee.view,c),fa(),r.mouse("end")}function _(){if(i.apply(this,arguments)){var v=ee.changedTouches,M=t.apply(this,arguments),b=v.length,T,R;for(T=0;T<b;++T)(R=S(v[T].identifier,M,SR,this,arguments))&&(ku(),R("start"))}}function g(){var v=ee.changedTouches,M=v.length,b,T;for(b=0;b<M;++b)(T=r[v[b].identifier])&&(fa(),T("drag"))}function y(){var v=ee.changedTouches,M=v.length,b,T;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),b=0;b<M;++b)(T=r[v[b].identifier])&&(ku(),T("end"))}function S(v,M,b,T,R){var x=b(M,v),E,L,C,P=s.copy();if(qm(new Tf(f,"beforestart",E,v,o,x[0],x[1],0,0,P),function(){return(ee.subject=E=e.apply(T,R))==null?!1:(L=E.x-x[0]||0,C=E.y-x[1]||0,!0)}))return function U(z){var B=x,N;switch(z){case"start":r[v]=U,N=o++;break;case"end":delete r[v],--o;case"drag":x=b(M,v),N=o;break}qm(new Tf(f,z,E,v,N,x[0]+L,x[1]+C,x[0]-B[0],x[1]-B[1],P),P.apply,P,[z,T,R])}}return f.filter=function(v){return arguments.length?(i=typeof v=="function"?v:El(!!v),f):i},f.container=function(v){return arguments.length?(t=typeof v=="function"?v:El(v),f):t},f.subject=function(v){return arguments.length?(e=typeof v=="function"?v:El(v),f):e},f.touchable=function(v){return arguments.length?(n=typeof v=="function"?v:El(!!v),f):n},f.on=function(){var v=s.on.apply(s,arguments);return v===s?f:v},f.clickDistance=function(v){return arguments.length?(h=(v=+v)*v,f):Math.sqrt(h)},f}var wf=Math.PI,Af=2*wf,hs=1e-6,DR=Af-hs;function Cf(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Md(){return new Cf}Cf.prototype=Md.prototype={constructor:Cf,moveTo:function(i,t){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+t)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(i,t){this._+="L"+(this._x1=+i)+","+(this._y1=+t)},quadraticCurveTo:function(i,t,e,n){this._+="Q"+ +i+","+ +t+","+(this._x1=+e)+","+(this._y1=+n)},bezierCurveTo:function(i,t,e,n,r,s){this._+="C"+ +i+","+ +t+","+ +e+","+ +n+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(i,t,e,n,r){i=+i,t=+t,e=+e,n=+n,r=+r;var s=this._x1,o=this._y1,a=e-i,l=n-t,c=s-i,u=o-t,h=c*c+u*u;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null)this._+="M"+(this._x1=i)+","+(this._y1=t);else if(h>hs)if(!(Math.abs(u*a-l*c)>hs)||!r)this._+="L"+(this._x1=i)+","+(this._y1=t);else{var f=e-s,d=n-o,m=a*a+l*l,p=f*f+d*d,_=Math.sqrt(m),g=Math.sqrt(h),y=r*Math.tan((wf-Math.acos((m+h-p)/(2*_*g)))/2),S=y/g,v=y/_;Math.abs(S-1)>hs&&(this._+="L"+(i+S*c)+","+(t+S*u)),this._+="A"+r+","+r+",0,0,"+ +(u*f>c*d)+","+(this._x1=i+v*a)+","+(this._y1=t+v*l)}},arc:function(i,t,e,n,r,s){i=+i,t=+t,e=+e,s=!!s;var o=e*Math.cos(n),a=e*Math.sin(n),l=i+o,c=t+a,u=1^s,h=s?n-r:r-n;if(e<0)throw new Error("negative radius: "+e);this._x1===null?this._+="M"+l+","+c:(Math.abs(this._x1-l)>hs||Math.abs(this._y1-c)>hs)&&(this._+="L"+l+","+c),e&&(h<0&&(h=h%Af+Af),h>DR?this._+="A"+e+","+e+",0,1,"+u+","+(i-o)+","+(t-a)+"A"+e+","+e+",0,1,"+u+","+(this._x1=l)+","+(this._y1=c):h>hs&&(this._+="A"+e+","+e+",0,"+ +(h>=wf)+","+u+","+(this._x1=i+e*Math.cos(r))+","+(this._y1=t+e*Math.sin(r))))},rect:function(i,t,e,n){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+t)+"h"+ +e+"v"+ +n+"h"+-e+"Z"},toString:function(){return this._}};function gi(i){return function(){return i}}var _n=1e-12,mc=Math.PI,gc=mc/2,LR=2*mc;function NR(i){return i.innerRadius}function IR(i){return i.outerRadius}function UR(i){return i.startAngle}function FR(i){return i.endAngle}function OR(i){return i&&i.padAngle}function Km(i){return i>=1?gc:i<=-1?-gc:Math.asin(i)}function kR(i,t,e,n,r,s,o,a){var l=e-i,c=n-t,u=o-r,h=a-s,f=(u*(t-s)-h*(i-r))/(h*l-u*c);return[i+f*l,t+f*c]}function Tl(i,t,e,n,r,s,o){var a=i-e,l=t-n,c=(o?s:-s)/Math.sqrt(a*a+l*l),u=c*l,h=-c*a,f=i+u,d=t+h,m=e+u,p=n+h,_=(f+m)/2,g=(d+p)/2,y=m-f,S=p-d,v=y*y+S*S,M=r-s,b=f*p-m*d,T=(S<0?-1:1)*Math.sqrt(Math.max(0,M*M*v-b*b)),R=(b*S-y*T)/v,x=(-b*y-S*T)/v,E=(b*S+y*T)/v,L=(-b*y+S*T)/v,C=R-_,P=x-g,U=E-_,z=L-g;return C*C+P*P>U*U+z*z&&(R=E,x=L),{cx:R,cy:x,x01:-u,y01:-h,x11:R*(r/M-1),y11:x*(r/M-1)}}function BR(){var i=NR,t=IR,e=gi(0),n=null,r=UR,s=FR,o=OR,a=null;function l(){var c,u,h=+i.apply(this,arguments),f=+t.apply(this,arguments),d=r.apply(this,arguments)-gc,m=s.apply(this,arguments)-gc,p=Math.abs(m-d),_=m>d;if(a||(a=c=Md()),f<h&&(u=f,f=h,h=u),!(f>_n))a.moveTo(0,0);else if(p>LR-_n)a.moveTo(f*Math.cos(d),f*Math.sin(d)),a.arc(0,0,f,d,m,!_),h>_n&&(a.moveTo(h*Math.cos(m),h*Math.sin(m)),a.arc(0,0,h,m,d,_));else{var g=d,y=m,S=d,v=m,M=p,b=p,T=o.apply(this,arguments)/2,R=T>_n&&(n?+n.apply(this,arguments):Math.sqrt(h*h+f*f)),x=Math.min(Math.abs(f-h)/2,+e.apply(this,arguments)),E=x,L=x,C,P;if(R>_n){var U=Km(R/h*Math.sin(T)),z=Km(R/f*Math.sin(T));(M-=U*2)>_n?(U*=_?1:-1,S+=U,v-=U):(M=0,S=v=(d+m)/2),(b-=z*2)>_n?(z*=_?1:-1,g+=z,y-=z):(b=0,g=y=(d+m)/2)}var B=f*Math.cos(g),N=f*Math.sin(g),V=h*Math.cos(v),Y=h*Math.sin(v);if(x>_n){var I=f*Math.cos(y),tt=f*Math.sin(y),gt=h*Math.cos(S),_t=h*Math.sin(S);if(p<mc){var xt=M>_n?kR(B,N,gt,_t,I,tt,V,Y):[V,Y],rt=B-xt[0],H=N-xt[1],W=I-xt[0],it=tt-xt[1],ft=1/Math.sin(Math.acos((rt*W+H*it)/(Math.sqrt(rt*rt+H*H)*Math.sqrt(W*W+it*it)))/2),ut=Math.sqrt(xt[0]*xt[0]+xt[1]*xt[1]);E=Math.min(x,(h-ut)/(ft-1)),L=Math.min(x,(f-ut)/(ft+1))}}b>_n?L>_n?(C=Tl(gt,_t,B,N,f,L,_),P=Tl(I,tt,V,Y,f,L,_),a.moveTo(C.cx+C.x01,C.cy+C.y01),L<x?a.arc(C.cx,C.cy,L,Math.atan2(C.y01,C.x01),Math.atan2(P.y01,P.x01),!_):(a.arc(C.cx,C.cy,L,Math.atan2(C.y01,C.x01),Math.atan2(C.y11,C.x11),!_),a.arc(0,0,f,Math.atan2(C.cy+C.y11,C.cx+C.x11),Math.atan2(P.cy+P.y11,P.cx+P.x11),!_),a.arc(P.cx,P.cy,L,Math.atan2(P.y11,P.x11),Math.atan2(P.y01,P.x01),!_))):(a.moveTo(B,N),a.arc(0,0,f,g,y,!_)):a.moveTo(B,N),!(h>_n)||!(M>_n)?a.lineTo(V,Y):E>_n?(C=Tl(V,Y,I,tt,h,-E,_),P=Tl(B,N,gt,_t,h,-E,_),a.lineTo(C.cx+C.x01,C.cy+C.y01),E<x?a.arc(C.cx,C.cy,E,Math.atan2(C.y01,C.x01),Math.atan2(P.y01,P.x01),!_):(a.arc(C.cx,C.cy,E,Math.atan2(C.y01,C.x01),Math.atan2(C.y11,C.x11),!_),a.arc(0,0,h,Math.atan2(C.cy+C.y11,C.cx+C.x11),Math.atan2(P.cy+P.y11,P.cx+P.x11),_),a.arc(P.cx,P.cy,E,Math.atan2(P.y11,P.x11),Math.atan2(P.y01,P.x01),!_))):a.arc(0,0,h,v,S,_)}if(a.closePath(),c)return a=null,c+""||null}return l.centroid=function(){var c=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,u=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-mc/2;return[Math.cos(u)*c,Math.sin(u)*c]},l.innerRadius=function(c){return arguments.length?(i=typeof c=="function"?c:gi(+c),l):i},l.outerRadius=function(c){return arguments.length?(t=typeof c=="function"?c:gi(+c),l):t},l.cornerRadius=function(c){return arguments.length?(e=typeof c=="function"?c:gi(+c),l):e},l.padRadius=function(c){return arguments.length?(n=c==null?null:typeof c=="function"?c:gi(+c),l):n},l.startAngle=function(c){return arguments.length?(r=typeof c=="function"?c:gi(+c),l):r},l.endAngle=function(c){return arguments.length?(s=typeof c=="function"?c:gi(+c),l):s},l.padAngle=function(c){return arguments.length?(o=typeof c=="function"?c:gi(+c),l):o},l.context=function(c){return arguments.length?(a=c??null,l):a},l}function tx(i){this._context=i}tx.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function ex(i){return new tx(i)}function zR(i){return i[0]}function VR(i){return i[1]}function HR(){var i=zR,t=VR,e=gi(!0),n=null,r=ex,s=null;function o(a){var l,c=a.length,u,h=!1,f;for(n==null&&(s=r(f=Md())),l=0;l<=c;++l)!(l<c&&e(u=a[l],l,a))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+i(u,l,a),+t(u,l,a));if(f)return s=null,f+""||null}return o.x=function(a){return arguments.length?(i=typeof a=="function"?a:gi(+a),o):i},o.y=function(a){return arguments.length?(t=typeof a=="function"?a:gi(+a),o):t},o.defined=function(a){return arguments.length?(e=typeof a=="function"?a:gi(!!a),o):e},o.curve=function(a){return arguments.length?(r=a,n!=null&&(s=r(n)),o):r},o.context=function(a){return arguments.length?(a==null?n=s=null:s=r(n=a),o):n},o}function _c(){}function Jm(i,t,e){i._context.bezierCurveTo((2*i._x0+i._x1)/3,(2*i._y0+i._y1)/3,(i._x0+2*i._x1)/3,(i._y0+2*i._y1)/3,(i._x0+4*i._x1+t)/6,(i._y0+4*i._y1+e)/6)}function bd(i){this._context=i}bd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Jm(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Jm(this,i,t);break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t}};function nx(i,t){this._basis=new bd(i),this._beta=t}nx.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var i=this._x,t=this._y,e=i.length-1;if(e>0)for(var n=i[0],r=t[0],s=i[e]-n,o=t[e]-r,a=-1,l;++a<=e;)l=a/e,this._basis.point(this._beta*i[a]+(1-this._beta)*(n+l*s),this._beta*t[a]+(1-this._beta)*(r+l*o));this._x=this._y=null,this._basis.lineEnd()},point:function(i,t){this._x.push(+i),this._y.push(+t)}};(function i(t){function e(n){return t===1?new bd(n):new nx(n,t)}return e.beta=function(n){return i(+n)},e})(.85);function xc(i,t,e){i._context.bezierCurveTo(i._x1+i._k*(i._x2-i._x0),i._y1+i._k*(i._y2-i._y0),i._x2+i._k*(i._x1-t),i._y2+i._k*(i._y1-e),i._x2,i._y2)}function Ed(i,t){this._context=i,this._k=(1-t)/6}Ed.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:xc(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2,this._x1=i,this._y1=t;break;case 2:this._point=3;default:xc(this,i,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return new Ed(n,t)}return e.tension=function(n){return i(+n)},e})(0);function Td(i,t){this._context=i,this._k=(1-t)/6}Td.prototype={areaStart:_c,areaEnd:_c,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._x3=i,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=i,this._y4=t);break;case 2:this._point=3,this._x5=i,this._y5=t;break;default:xc(this,i,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return new Td(n,t)}return e.tension=function(n){return i(+n)},e})(0);function wd(i,t){this._context=i,this._k=(1-t)/6}wd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:xc(this,i,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return new wd(n,t)}return e.tension=function(n){return i(+n)},e})(0);function Ad(i,t,e){var n=i._x1,r=i._y1,s=i._x2,o=i._y2;if(i._l01_a>_n){var a=2*i._l01_2a+3*i._l01_a*i._l12_a+i._l12_2a,l=3*i._l01_a*(i._l01_a+i._l12_a);n=(n*a-i._x0*i._l12_2a+i._x2*i._l01_2a)/l,r=(r*a-i._y0*i._l12_2a+i._y2*i._l01_2a)/l}if(i._l23_a>_n){var c=2*i._l23_2a+3*i._l23_a*i._l12_a+i._l12_2a,u=3*i._l23_a*(i._l23_a+i._l12_a);s=(s*c+i._x1*i._l23_2a-t*i._l12_2a)/u,o=(o*c+i._y1*i._l23_2a-e*i._l12_2a)/u}i._context.bezierCurveTo(n,r,s,o,i._x2,i._y2)}function ix(i,t){this._context=i,this._alpha=t}ix.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){if(i=+i,t=+t,this._point){var e=this._x2-i,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3;default:Ad(this,i,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const GR=(function i(t){function e(n){return t?new ix(n,t):new Ed(n,0)}return e.alpha=function(n){return i(+n)},e})(.5);function rx(i,t){this._context=i,this._alpha=t}rx.prototype={areaStart:_c,areaEnd:_c,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(i,t){if(i=+i,t=+t,this._point){var e=this._x2-i,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=i,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=i,this._y4=t);break;case 2:this._point=3,this._x5=i,this._y5=t;break;default:Ad(this,i,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return t?new rx(n,t):new Td(n,0)}return e.alpha=function(n){return i(+n)},e})(.5);function sx(i,t){this._context=i,this._alpha=t}sx.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){if(i=+i,t=+t,this._point){var e=this._x2-i,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+n*n,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Ad(this,i,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=i,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function i(t){function e(n){return t?new sx(n,t):new wd(n,0)}return e.alpha=function(n){return i(+n)},e})(.5);function Qm(i){return i<0?-1:1}function tg(i,t,e){var n=i._x1-i._x0,r=t-i._x1,s=(i._y1-i._y0)/(n||r<0&&-0),o=(e-i._y1)/(r||n<0&&-0),a=(s*r+o*n)/(n+r);return(Qm(s)+Qm(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(a))||0}function eg(i,t){var e=i._x1-i._x0;return e?(3*(i._y1-i._y0)/e-t)/2:t}function Bu(i,t,e){var n=i._x0,r=i._y0,s=i._x1,o=i._y1,a=(s-n)/3;i._context.bezierCurveTo(n+a,r+a*t,s-a,o-a*e,s,o)}function Rf(i){this._context=i}Rf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Bu(this,this._t0,eg(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var e=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,Bu(this,eg(this,e=tg(this,i,t)),e);break;default:Bu(this,this._t0,e=tg(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=e}}};Object.create(Rf.prototype).point=function(i,t){Rf.prototype.point.call(this,t,i)};var WR=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ca=function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")},Ra=(function(){function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}})(),zn=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},sr=function i(t,e,n){t===null&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(r===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:i(s,e,n)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(n)}},Cd=function(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)},Rd=function(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:i},XR=function(i){if(Array.isArray(i)){for(var t=0,e=Array(i.length);t<i.length;t++)e[t]=i[t];return e}else return Array.from(i)},$R=(function(){function i(t){var e=t.x,n=e===void 0?0:e,r=t.y,s=r===void 0?0:r,o=t.nx,a=t.ny,l=t.dy,c=l===void 0?0:l,u=t.dx,h=u===void 0?0:u,f=t.color,d=f===void 0?"grey":f,m=t.data,p=t.type,_=t.subject,g=t.connector,y=t.note,S=t.disable,v=t.id,M=t.className;Ca(this,i),this._dx=o!==void 0?o-n:h,this._dy=a!==void 0?a-s:c,this._x=n,this._y=s,this._color=d,this.id=v,this._className=M||"",this._type=p||"",this.data=m,this.note=y||{},this.connector=g||{},this.subject=_||{},this.disable=S||[]}return Ra(i,[{key:"updatePosition",value:function(){this.type.setPosition&&(this.type.setPosition(),this.type.subject&&this.type.subject.selectAll(":not(.handle)").nodes().length!==0&&this.type.redrawSubject())}},{key:"clearComponents",value:function(){this.type.clearComponents&&this.type.clearComponents()}},{key:"updateOffset",value:function(){this.type.setOffset&&(this.type.setOffset(),this.type.connector.selectAll(":not(.handle)").nodes().length!==0&&this.type.redrawConnector(),this.type.redrawNote())}},{key:"className",get:function(){return this._className},set:function(e){this._className=e,this.type.setClassName&&this.type.setClassName()}},{key:"type",get:function(){return this._type},set:function(e){this._type=e,this.clearComponents()}},{key:"x",get:function(){return this._x},set:function(e){this._x=e,this.updatePosition()}},{key:"y",get:function(){return this._y},set:function(e){this._y=e,this.updatePosition()}},{key:"color",get:function(){return this._color},set:function(e){this._color=e,this.updatePosition()}},{key:"dx",get:function(){return this._dx},set:function(e){this._dx=e,this.updateOffset()}},{key:"dy",get:function(){return this._dy},set:function(e){this._dy=e,this.updateOffset()}},{key:"nx",set:function(e){this._dx=e-this._x,this.updateOffset()}},{key:"ny",set:function(e){this._dy=e-this._y,this.updateOffset()}},{key:"offset",get:function(){return{x:this._dx,y:this._dy}},set:function(e){var n=e.x,r=e.y;this._dx=n,this._dy=r,this.updateOffset()}},{key:"position",get:function(){return{x:this._x,y:this._y}},set:function(e){var n=e.x,r=e.y;this._x=n,this._y=r,this.updatePosition()}},{key:"translation",get:function(){return{x:this._x+this._dx,y:this._y+this._dy}}},{key:"json",get:function(){var e={x:this._x,y:this._y,dx:this._dx,dy:this._dy};return this.data&&Object.keys(this.data).length>0&&(e.data=this.data),this.type&&(e.type=this.type),this._className&&(e.className=this._className),Object.keys(this.connector).length>0&&(e.connector=this.connector),Object.keys(this.subject).length>0&&(e.subject=this.subject),Object.keys(this.note).length>0&&(e.note=this.note),e}}]),i})(),YR=(function(){function i(t){var e=t.annotations,n=t.accessors,r=t.accessorsInverse;Ca(this,i),this.accessors=n,this.accessorsInverse=r,this.annotations=e}return Ra(i,[{key:"clearTypes",value:function(e){this.annotations.forEach(function(n){n.type=void 0,n.subject=e&&e.subject||n.subject,n.connector=e&&e.connector||n.connector,n.note=e&&e.note||n.note})}},{key:"setPositionWithAccessors",value:function(){var e=this;this.annotations.forEach(function(n){n.type.setPositionWithAccessors(e.accessors)})}},{key:"editMode",value:function(e){this.annotations.forEach(function(n){n.type&&(n.type.editMode=e,n.type.updateEditMode())})}},{key:"updateDisable",value:function(e){this.annotations.forEach(function(n){n.disable=e,n.type&&e.forEach(function(r){n.type[r]&&(n.type[r].remove&&n.type[r].remove(),n.type[r]=void 0)})})}},{key:"updateTextWrap",value:function(e){this.annotations.forEach(function(n){n.type&&n.type.updateTextWrap&&n.type.updateTextWrap(e)})}},{key:"updateText",value:function(){this.annotations.forEach(function(e){e.type&&e.type.drawText&&e.type.drawText()})}},{key:"updateNotePadding",value:function(e){this.annotations.forEach(function(n){n.type&&(n.type.notePadding=e)})}},{key:"json",get:function(){var e=this;return this.annotations.map(function(n){var r=n.json;return e.accessorsInverse&&n.data&&(r.data={},Object.keys(e.accessorsInverse).forEach(function(s){r.data[s]=e.accessorsInverse[s]({x:n.x,y:n.y})})),r})}},{key:"noteNodes",get:function(){return this.annotations.map(function(e){return zn({},e.type.getNoteBBoxOffset(),{positionX:e.x,positionY:e.y})})}}]),i})(),qR=function(t){var e=t.cx,n=e===void 0?0:e,r=t.cy,s=r===void 0?0:r;return{move:{x:n,y:s}}},jR=function(t){var e=t.cx,n=e===void 0?0:e,r=t.cy,s=r===void 0?0:r,o=t.r1,a=t.r2,l=t.padding,c={move:{x:n,y:s}};return o!==void 0&&(c.r1={x:n+o/Math.sqrt(2),y:s+o/Math.sqrt(2)}),a!==void 0&&(c.r2={x:n+a/Math.sqrt(2),y:s+a/Math.sqrt(2)}),l!==void 0&&(c.padding={x:n+o+l,y:s}),c},ZR=function(t){var e=t.group,n=t.handles,r=t.r,s=r===void 0?10:r,o=e.selectAll("circle.handle").data(n);o.enter().append("circle").attr("class","handle").attr("fill","grey").attr("fill-opacity",.1).attr("cursor","move").attr("stroke-dasharray",5).attr("stroke","grey").call(Q0().container(Yr("g.annotations").node()).on("start",function(a){return a.start&&a.start(a)}).on("drag",function(a){return a.drag&&a.drag(a)}).on("end",function(a){return a.end&&a.end(a)})),e.selectAll("circle.handle").attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}).attr("r",function(a){return a.r||s}).attr("class",function(a){return"handle "+(a.className||"")}),o.exit().remove()},ax=function(t,e){return(t==="dynamic"||t==="left"||t==="right")&&(e<0?t="top":t="bottom"),t},ox=function(t,e){return(t==="dynamic"||t==="top"||t==="bottom")&&(e<0?t="right":t="left"),t},KR=["topBottom","top","bottom"],JR=["leftRight","left","right"],QR=(function(i){var t=i.padding,e=t===void 0?0:t,n=i.bbox,r=n===void 0?{x:0,width:0,height:0}:n,s=i.align,o=i.orientation,a=i.offset,l=a===void 0?{x:0,y:0}:a,c=-r.x,u=0;return KR.indexOf(o)!==-1?(s=ox(s,l.x),l.y<0&&o==="topBottom"||o==="top"?u-=r.height+e:u+=e,s==="middle"?c-=r.width/2:s==="right"&&(c-=r.width)):JR.indexOf(o)!==-1&&(s=ax(s,l.y),l.x<0&&o==="leftRight"||o==="left"?c-=r.width+e:c+=e,s==="middle"?u-=r.height/2:s==="top"&&(u-=r.height)),{x:c,y:u}}),Ki=function(t){var e=t.data,n=t.curve,r=n===void 0?ex:n,s=t.canvasContext,o=t.className,a=t.classID,l=HR().curve(r),c={type:"path",className:o,classID:a,data:e};return s?(l.context(s),c.pathMethods=l):c.attrs={d:l(e)},c},vc=function(t){var e=t.data,n=t.canvasContext,r=t.className,s=t.classID,o={type:"path",className:r,classID:s,data:e},a=BR().innerRadius(e.innerRadius||0).outerRadius(e.outerRadius||e.radius||2).startAngle(e.startAngle||0).endAngle(e.endAngle||2*Math.PI);return n?(a.context(n),o.pathMethods=lineGen):o.attrs={d:a()},o},tP=(function(i){var t=i.align,e=i.x,n=e===void 0?0:e,r=i.y,s=r===void 0?0:r,o=i.bbox,a=i.offset;t=ax(t,a.y),t==="top"?s-=o.height:t==="middle"&&(s-=o.height/2);var l=[[n,s],[n,s+o.height]];return{components:[Ki({data:l,className:"note-line"})]}}),eP=(function(i){var t=i.align,e=i.x,n=e===void 0?0:e,r=i.y,s=r===void 0?0:r,o=i.offset,a=i.bbox;t=ox(t,o.x),t==="right"?n-=a.width:t==="middle"&&(n-=a.width/2);var l=[[n,s],[n+a.width,s]];return{components:[Ki({data:l,className:"note-line"})]}}),lx=function(t){var e=t.type,n=t.subjectType,r=e.annotation,s=r.position,o=r.x-s.x,a=o+r.dx,l=r.y-s.y,c=l+r.dy,u=r.subject;if(n==="circle"&&(u.outerRadius||u.radius)){var h=Math.sqrt((o-a)*(o-a)+(l-c)*(l-c)),f=Math.asin(-c/h),d=u.outerRadius||u.radius+(u.radiusPadding||0);o=Math.abs(Math.cos(f)*d)*(a<0?-1:1),l=Math.abs(Math.sin(f)*d)*(c<0?-1:1)}if(n==="rect"){var m=u.width,p=u.height;(m>0&&r.dx>0||m<0&&r.dx<0)&&(Math.abs(m)>Math.abs(r.dx)?o=m/2:o=m),(p>0&&r.dy>0||p<0&&r.dy<0)&&(Math.abs(p)>Math.abs(r.dy)?l=p/2:l=p),o===m/2&&l===p/2&&(o=a,l=c)}return[[o,l],[a,c]]},nP=(function(i){var t=lx(i);return{components:[Ki({data:t,className:"connector"})]}}),iP=(function(i){var t=i.type,e=i.subjectType,n=t.annotation,r=n.position,s=n.x-r.x,o=s+n.dx,a=n.y-r.y,l=a+n.dy,c=n.subject;if(e==="rect"){var u=c.width,h=c.height;(u>0&&n.dx>0||u<0&&n.dx<0)&&(Math.abs(u)>Math.abs(n.dx)?s=u/2:s=u),(h>0&&n.dy>0||h<0&&n.dy<0)&&(Math.abs(h)>Math.abs(n.dy)?a=h/2:a=h),s===u/2&&a===h/2&&(s=o,a=l)}var f=[[s,a],[o,l]],d=l-a,m=o-s,p=o,_=l,g=l<a&&o>s||o<s&&l>a?-1:1;if(Math.abs(m)<Math.abs(d)?(p=o,_=a+m*g):(_=l,p=s+d*g),e==="circle"&&(c.outerRadius||c.radius)){var y=(c.outerRadius||c.radius)+(c.radiusPadding||0),S=y/Math.sqrt(2);if(Math.abs(m)>S&&Math.abs(d)>S)s=S*(o<0?-1:1),a=S*(l<0?-1:1),f=[[s,a],[p,_],[o,l]];else if(Math.abs(m)>Math.abs(d)){var v=Math.asin(-l/y);s=Math.abs(Math.cos(v)*y)*(o<0?-1:1),f=[[s,l],[o,l]]}else{var M=Math.acos(o/y);a=Math.abs(Math.sin(M)*y)*(l<0?-1:1),f=[[o,a],[o,l]]}}else f=[[s,a],[p,_],[o,l]];return{components:[Ki({data:f,className:"connector"})]}}),rP=(function(i){var t=i.type,e=i.connectorData,n=i.subjectType;e||(e={}),(!e.points||typeof e.points=="number")&&(e.points=sP(t.annotation.offset,e.points)),e.curve||(e.curve=GR);var r=[];if(t.editMode){var s=e.points.map(function(c,u){return zn({},qR({cx:c[0],cy:c[1]}),{index:u})}),o=function(u){e.points[u][0]+=ee.dx,e.points[u][1]+=ee.dy,t.redrawConnector()};r=t.mapHandles(s.map(function(c){return zn({},c.move,{drag:o.bind(t,c.index)})}))}var a=lx({type:t,subjectType:n});a=[a[0]].concat(XR(e.points),[a[1]]);var l=[Ki({data:a,curve:e.curve,className:"connector"})];return{components:l,handles:r}}),sP=function(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n={x:t.x/(e+1),y:t.y/(e+1)},r=[],s=1;s<=e;s++)r.push([n.x*s+s%2*20,n.y*s-s%2*20]);return r},aP=(function(i){var t=i.annotation,e=i.start,n=i.end,r=i.scale,s=r===void 0?1:r,o=t.position;e?e=[-n[0]+e[0],-n[1]+e[1]]:e=[t.dx,t.dy],n||(n=[t.x-o.x,t.y-o.y]);var a=n[0],l=n[1],c=e[0],u=e[1],h=10*s,f=16/180*Math.PI,d=Math.atan(u/c);c<0&&(d+=Math.PI);var m=[[a,l],[Math.cos(d+f)*h+a,Math.sin(d+f)*h+l],[Math.cos(d-f)*h+a,Math.sin(d-f)*h+l],[a,l]];return{components:[Ki({data:m,className:"connector-end connector-arrow",classID:"connector-end"})]}}),oP=(function(i){var t=i.line,e=i.scale,n=e===void 0?1:e,r=vc({className:"connector-end connector-dot",classID:"connector-end",data:{radius:3*Math.sqrt(n)}});return r.attrs.transform="translate("+t.data[0][0]+", "+t.data[0][1]+")",{components:[r]}}),lP=(function(i){var t=i.subjectData,e=i.type;!t.radius&&!t.outerRadius&&(t.radius=20);var n=[],r=vc({data:t,className:"subject"});if(e.editMode){var s=jR({r1:r.data.outerRadius||r.data.radius,r2:r.data.innerRadius,padding:t.radiusPadding}),o=function(c){var u=t[c]+ee.dx*Math.sqrt(2);t[c]=u,e.redrawSubject(),e.redrawConnector()},a=[zn({},s.r1,{drag:o.bind(e,t.outerRadius!==void 0?"outerRadius":"radius")})];t.innerRadius&&a.push(zn({},s.r2,{drag:o.bind(e,"innerRadius")})),n=e.mapHandles(a)}return r.attrs["fill-opacity"]=0,{components:[r],handles:n}}),cP=(function(i){var t=i.subjectData,e=i.type;t.width||(t.width=100),t.height||(t.height=100);var n=[],r=t.width,s=t.height,o=[[0,0],[r,0],[r,s],[0,s],[0,0]],a=Ki({data:o,className:"subject"});if(e.editMode){var l=function(){t.width=ee.x,e.redrawSubject(),e.redrawConnector()},c=function(){t.height=ee.y,e.redrawSubject(),e.redrawConnector()},u=[{x:r,y:s/2,drag:l.bind(e)},{x:r/2,y:s,drag:c.bind(e)}];n=e.mapHandles(u)}return a.attrs["fill-opacity"]=.1,{components:[a],handles:n}}),uP=(function(i){var t=i.subjectData,e=i.type,n=e.annotation.position,r=(t.x1!==void 0?t.x1:n.x)-n.x,s=(t.x2!==void 0?t.x2:n.x)-n.x,o=(t.y1!==void 0?t.y1:n.y)-n.y,a=(t.y2!==void 0?t.y2:n.y)-n.y,l=[[r,o],[s,a]];return{components:[Ki({data:l,className:"subject"})]}}),hP=(function(i){var t=i.subjectData,e=t===void 0?{}:t,n=i.type,r=n===void 0?{}:n,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.typeSettings&&r.typeSettings.subject;e.radius||(o&&o.radius?e.radius=o.radius:e.radius=14),e.x||o&&o.x&&(e.x=o.x),e.y||o&&o.y&&(e.y=o.y);var a=[],l=[],c=e.radius,u=c*.7,h=0,f=0,d=Math.sqrt(2)*c,m={xleftcorner:-c,xrightcorner:c,ytopcorner:-c,ybottomcorner:c,xleft:-d,xright:d,ytop:-d,ybottom:d};e.x&&!e.y?h=m["x"+e.x]:e.y&&!e.x?f=m["y"+e.y]:e.x&&e.y&&(h=m["x"+e.x+"corner"],f=m["y"+e.y+"corner"]);var p="translate("+h+", "+f+")",_=vc({className:"subject",data:{radius:c}});_.attrs.transform=p,_.attrs.fill=s.color,_.attrs["stroke-linecap"]="round",_.attrs["stroke-width"]="3px";var g=vc({className:"subject-ring",data:{outerRadius:c,innerRadius:u}});g.attrs.transform=p,g.attrs["stroke-width"]="3px",g.attrs.fill="white";var y=void 0;if(h&&f||!h&&!f)y=Ki({className:"subject-pointer",data:[[0,0],[h||0,0],[0,f||0],[0,0]]});else if(h||f){var S=function(R){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return R&&R/Math.sqrt(2)/Math.sqrt(2)||x*c/Math.sqrt(2)};y=Ki({className:"subject-pointer",data:[[0,0],[S(h),S(f)],[S(h,-1),S(f,-1)],[0,0]]})}if(y&&(y.attrs.fill=s.color,y.attrs["stroke-linecap"]="round",y.attrs["stroke-width"]="3px",l.push(y)),r.editMode){var v=function(){e.x=ee.x<-c*2?"left":ee.x>c*2?"right":void 0,e.y=ee.y<-c*2?"top":ee.y>c*2?"bottom":void 0,r.redrawSubject()},M={x:h*2,y:f*2,drag:v.bind(r)};!M.x&&!M.y&&(M.y=-c),a=r.mapHandles([M])}var b=void 0;return e.text&&(b={type:"text",className:"badge-text",attrs:{fill:"white",stroke:"none","font-size":".7em",text:e.text,"text-anchor":"middle",dy:".25em",x:h,y:f}}),l.push(_),l.push(g),l.push(b),{components:l,handles:a}}),cx=(function(){function i(t){var e=t.a,n=t.annotation,r=t.editMode,s=t.dispatcher,o=t.notePadding,a=t.accessors;if(Ca(this,i),this.a=e,this.note=n.disable.indexOf("note")===-1&&e.select("g.annotation-note"),this.noteContent=this.note&&e.select("g.annotation-note-content"),this.connector=n.disable.indexOf("connector")===-1&&e.select("g.annotation-connector"),this.subject=n.disable.indexOf("subject")===-1&&e.select("g.annotation-subject"),this.dispatcher=s,s){var l=pP.bind(null,s,n);l({component:this.note,name:"note"}),l({component:this.connector,name:"connector"}),l({component:this.subject,name:"subject"})}this.annotation=n,this.editMode=n.editMode||r,this.notePadding=o!==void 0?o:3,this.offsetCornerX=0,this.offsetCornerY=0,a&&n.data&&this.init(a)}return Ra(i,[{key:"init",value:function(e){this.annotation.x||this.mapX(e),this.annotation.y||this.mapY(e)}},{key:"mapY",value:function(e){e.y&&(this.annotation.y=e.y(this.annotation.data))}},{key:"mapX",value:function(e){e.x&&(this.annotation.x=e.x(this.annotation.data))}},{key:"updateEditMode",value:function(){this.a.selectAll("circle.handle").remove()}},{key:"drawOnSVG",value:function(e,n){var r=this;Array.isArray(n)||(n=[n]),n.filter(function(s){return s}).forEach(function(s){var o=s.type,a=s.className,l=s.attrs,c=s.handles,u=s.classID;if(o==="handle")ZR({group:e,r:l&&l.r,handles:c});else{Vi(e,[r.annotation],o,a,u);for(var h=e.select(o+"."+(u||a)),f=Object.keys(l),d=[],m=h.node().attributes,p=m.length-1;p>=0;p--){var _=m[p].name;f.indexOf(_)===-1&&_!=="class"&&d.push(_)}f.forEach(function(g){g==="text"?h.text(l[g]):h.attr(g,l[g])}),d.forEach(function(g){return h.attr(g,null)})}})}},{key:"getNoteBBox",value:function(){return rg(this.note,".annotation-note-content text")}},{key:"getNoteBBoxOffset",value:function(){var e=rg(this.note,".annotation-note-content"),n=this.noteContent.attr("transform").split(/\(|\,|\)/g);return e.offsetCornerX=parseFloat(n[1])+this.annotation.dx,e.offsetCornerY=parseFloat(n[2])+this.annotation.dy,e.offsetX=this.annotation.dx,e.offsetY=this.annotation.dy,e}},{key:"drawSubject",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=this.annotation.subject,s=n.type,o={type:this,subjectData:r},a={};s==="circle"?a=lP(o):s==="rect"?a=cP(o):s==="threshold"?a=uP(o):s==="badge"&&(a=hP(o,this.annotation));var l=a,c=l.components,u=c===void 0?[]:c,h=l.handles,f=h===void 0?[]:h;return u.forEach(function(d){d&&d.attrs&&!d.attrs.stroke&&(d.attrs.stroke=e.annotation.color)}),this.editMode&&(f=f.concat(this.mapHandles([{drag:this.dragSubject.bind(this)}])),u.push({type:"handle",handles:f})),u}},{key:"drawConnector",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=this.annotation.connector,s=r.type||n.type,o={type:this,connectorData:r};o.subjectType=this.typeSettings&&this.typeSettings.subject&&this.typeSettings.subject.type;var a={};s==="curve"?a=rP(o):s==="elbow"?a=iP(o):a=nP(o);var l=a,c=l.components,u=c===void 0?[]:c,h=l.handles,f=h===void 0?[]:h,d=u[0];d&&(d.attrs.stroke=this.annotation.color,d.attrs.fill="none");var m=r.end||n.end,p={};if(m==="arrow"){var _=d.data[1],g=d.data[0],y=Math.sqrt(Math.pow(_[0]-g[0],2)+Math.pow(_[1]-g[1],2));y<5&&d.data[2]&&(_=d.data[2]),p=aP({annotation:this.annotation,start:_,end:g,scale:r.endScale})}else m==="dot"?p=oP({line:d,scale:r.endScale}):(!m||m==="none")&&this.connector&&this.connector.select(".connector-end").remove();return p.components&&(p.components.forEach(function(S){S.attrs.fill=e.annotation.color,S.attrs.stroke=e.annotation.color}),u=u.concat(p.components)),this.editMode&&f.length!==0&&u.push({type:"handle",handles:f}),u}},{key:"drawNote",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=this.annotation.note,s=r.align||n.align||"dynamic",o={bbox:n.bbox,align:s,offset:this.annotation.offset},a=r.lineType||n.lineType,l={};a==="vertical"?l=tP(o):a==="horizontal"&&(l=eP(o));var c=l,u=c.components,h=u===void 0?[]:u,f=c.handles,d=f===void 0?[]:f;if(h.forEach(function(g){g.attrs.stroke=e.annotation.color}),this.editMode){d=this.mapHandles([{x:0,y:0,drag:this.dragNote.bind(this)}]),h.push({type:"handle",handles:d});var m=this.dragNote.bind(this),p=this.dragstarted.bind(this),_=this.dragended.bind(this);this.note.call(Q0().container(Yr("g.annotations").node()).on("start",function(g){return p(g)}).on("drag",function(g){return m(g)}).on("end",function(g){return _(g)}))}else this.note.on("mousedown.drag",null);return h}},{key:"drawNoteContent",value:function(e){var n=this.annotation.note,r=n.padding!==void 0?n.padding:this.notePadding,s=n.orientation||e.orientation||"topBottom",o=n.lineType||e.lineType,a=n.align||e.align||"dynamic";o==="vertical"?s="leftRight":o==="horizontal"&&(s="topBottom");var l={padding:r,bbox:e.bbox,offset:this.annotation.offset,orientation:s,align:a},c=QR(l),u=c.x,h=c.y;return this.offsetCornerX=u+this.annotation.dx,this.offsetCornerY=h+this.annotation.dy,this.note&&this.noteContent.attr("transform","translate("+u+", "+h+")"),[]}},{key:"drawOnScreen",value:function(e,n){return this.drawOnSVG(e,n)}},{key:"redrawSubject",value:function(){this.subject&&this.drawOnScreen(this.subject,this.drawSubject())}},{key:"redrawConnector",value:function(){this.connector&&this.drawOnScreen(this.connector,this.drawConnector())}},{key:"redrawNote",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getNoteBBox();this.noteContent&&this.drawOnScreen(this.noteContent,this.drawNoteContent({bbox:e})),this.note&&this.drawOnScreen(this.note,this.drawNote({bbox:e}))}},{key:"setPosition",value:function(){var e=this.annotation.position;this.a.attr("transform","translate("+e.x+", "+e.y+")")}},{key:"clearComponents",value:function(){this.subject&&this.subject.select("*").remove(),this.connector&&this.connector.select("*").remove()}},{key:"setOffset",value:function(){if(this.note){var e=this.annotation.offset;this.note.attr("transform","translate("+e.x+", "+e.y+")")}}},{key:"setPositionWithAccessors",value:function(e){e&&this.annotation.data&&(this.mapX(e),this.mapY(e)),this.setPosition()}},{key:"setClassName",value:function(){this.a.attr("class","annotation "+(this.className&&this.className())+" "+(this.editMode?"editable":"")+" "+(this.annotation.className||""))}},{key:"draw",value:function(){this.setClassName(),this.setPosition(),this.setOffset(),this.redrawSubject(),this.redrawConnector(),this.redrawNote()}},{key:"dragstarted",value:function(){ee.sourceEvent.stopPropagation(),this.dispatcher&&this.dispatcher.call("dragstart",this.a,this.annotation),this.a.classed("dragging",!0),this.a.selectAll("circle.handle").style("pointer-events","none")}},{key:"dragended",value:function(){this.dispatcher&&this.dispatcher.call("dragend",this.a,this.annotation),this.a.classed("dragging",!1),this.a.selectAll("circle.handle").style("pointer-events","all")}},{key:"dragSubject",value:function(){var e=this.annotation.position;e.x+=ee.dx,e.y+=ee.dy,this.annotation.position=e}},{key:"dragNote",value:function(){var e=this.annotation.offset;e.x+=ee.dx,e.y+=ee.dy,this.annotation.offset=e}},{key:"mapHandles",value:function(e){var n=this;return e.map(function(r){return zn({},r,{start:n.dragstarted.bind(n),end:n.dragended.bind(n)})})}}]),i})(),jr=function(t,e,n){return(function(r){Cd(s,r);function s(o){Ca(this,s);var a=Rd(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,o));return a.typeSettings=e,e.disable&&e.disable.forEach(function(l){a[l]&&a[l].remove(),a[l]=void 0,l==="note"&&(a.noteContent=void 0)}),a}return Ra(s,[{key:"className",value:function(){return""+(e.className||sr(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"className",this)&&sr(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"className",this).call(this)||"")}},{key:"drawSubject",value:function(a){return this.typeSettings.subject=zn({},e.subject,this.typeSettings.subject),sr(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawSubject",this).call(this,zn({},a,this.typeSettings.subject))}},{key:"drawConnector",value:function(a){return this.typeSettings.connector=zn({},e.connector,this.typeSettings.connector),sr(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawConnector",this).call(this,zn({},a,e.connector,this.typeSettings.connector))}},{key:"drawNote",value:function(a){return this.typeSettings.note=zn({},e.note,this.typeSettings.note),sr(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawNote",this).call(this,zn({},a,e.note,this.typeSettings.note))}},{key:"drawNoteContent",value:function(a){return sr(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"drawNoteContent",this).call(this,zn({},a,e.note,this.typeSettings.note))}}],[{key:"init",value:function(a,l){return sr(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,a,l),n&&(a=n(a,l)),a}}]),s})(t)},Nc=(function(i){Cd(t,i);function t(e){Ca(this,t);var n=Rd(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.textWrap=e.textWrap||120,n.drawText(),n}return Ra(t,[{key:"updateTextWrap",value:function(n){this.textWrap=n,this.drawText()}},{key:"drawText",value:function(){if(this.note){Vi(this.note,[this.annotation],"g","annotation-note-content");var n=this.note.select("g.annotation-note-content");Vi(n,[this.annotation],"rect","annotation-note-bg"),Vi(n,[this.annotation],"text","annotation-note-label"),Vi(n,[this.annotation],"text","annotation-note-title");var r={height:0},s=this.a.select("text.annotation-note-label"),o=this.annotation.note&&this.annotation.note.wrap||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.wrap||this.textWrap,a=this.annotation.note&&this.annotation.note.wrapSplitter||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.wrapSplitter,l=this.annotation.note&&this.annotation.note.bgPadding||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.bgPadding,c={top:0,bottom:0,left:0,right:0};if(typeof l=="number"?c={top:l,bottom:l,left:l,right:l}:l&&(typeof l>"u"?"undefined":WR(l))==="object"&&(c=zn(c,l)),this.annotation.note.title){var u=this.a.select("text.annotation-note-title");u.text(this.annotation.note.title),u.attr("fill",this.annotation.color),u.attr("font-weight","bold"),u.call(ig,o,a),r=u.node().getBBox()}s.text(this.annotation.note.label).attr("dx","0"),s.call(ig,o,a),s.attr("y",r.height*1.1||0),s.attr("fill",this.annotation.color);var h=this.getNoteBBox();this.a.select("rect.annotation-note-bg").attr("width",h.width+c.left+c.right).attr("height",h.height+c.top+c.bottom).attr("x",h.x-c.left).attr("y",-c.top).attr("fill","white").attr("fill-opacity",0)}}}]),t})(cx);jr(Nc,{className:"label",note:{align:"middle"}});var Ic=jr(Nc,{className:"callout",note:{lineType:"horizontal"}}),wl=jr(Ic,{className:"callout elbow",connector:{type:"elbow"}}),fP=jr(Ic,{className:"callout curve",connector:{type:"curve"}});jr(cx,{className:"badge",subject:{type:"badge"},disable:["connector","note"]});jr(Nc,{className:"callout circle",subject:{type:"circle"},note:{lineType:"horizontal"},connector:{type:"elbow"}});jr(Nc,{className:"callout rect",subject:{type:"rect"},note:{lineType:"horizontal"},connector:{type:"elbow"}});var dP=(function(i){Cd(t,i);function t(){return Ca(this,t),Rd(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Ra(t,[{key:"mapY",value:function(n){sr(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"mapY",this).call(this,n);var r=this.annotation;(r.subject.x1||r.subject.x2)&&r.data&&n.y&&(r.y=n.y(r.data)),(r.subject.x1||r.subject.x2)&&!r.x&&(r.x=r.subject.x1||r.subject.x2)}},{key:"mapX",value:function(n){sr(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"mapX",this).call(this,n);var r=this.annotation;(r.subject.y1||r.subject.y2)&&r.data&&n.x&&(r.x=n.x(r.data)),(r.subject.y1||r.subject.y2)&&!r.y&&(r.y=r.subject.y1||r.subject.y2)}}]),t})(Ic),ng=jr(dP,{className:"callout xythreshold",subject:{type:"threshold"}}),Vi=function(t,e,n,r,s){var o=t.selectAll(n+"."+(s||r)).data(e);return o.enter().append(n).merge(o).attr("class",r),o.exit().remove(),t},pP=function(t,e,n){var r=n.component,s=n.name;r&&r.on("mouseover.annotations",function(){t.call(s+"over",r,e)}).on("mouseout.annotations",function(){return t.call(s+"out",r,e)}).on("click.annotations",function(){return t.call(s+"click",r,e)})},ig=function(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1.2;t.each(function(){for(var s=Yr(this),o=s.text().split(n||/[ \t\r\n]+/).reverse().filter(function(u){return u!==""}),a=void 0,l=[],c=s.text(null).append("tspan").attr("x",0).attr("dy",.8+"em");a=o.pop();)l.push(a),c.text(l.join(" ")),c.node().getComputedTextLength()>e&&l.length>1&&(l.pop(),c.text(l.join(" ")),l=[a],c=s.append("tspan").attr("x",0).attr("dy",r+"em").text(a))})},rg=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:":not(.handle)";return t?t.selectAll(e).nodes().reduce(function(n,r){var s=r.getBBox();n.x=Math.min(n.x,s.x),n.y=Math.min(n.y,s.y),n.width=Math.max(n.width,s.width);var o=r&&r.attributes&&r.attributes.y;return n.height=Math.max(n.height,(o&&parseFloat(o.value)||0)+s.height),n},{x:0,y:0,width:0,height:0}):{x:0,y:0,width:0,height:0}};function zu(){var i=[],t=void 0,e=void 0,n=[],r={},s={},o=!1,a=void 0,l=Ic,c=void 0,u=void 0,h=Sd("subjectover","subjectout","subjectclick","connectorover","connectorout","connectorclick","noteover","noteout","noteclick","dragend","dragstart"),f=void 0,d=function(p){f=p,o||p.selectAll("circle.handle").remove();var _=i.map(function(v){return v.type||(v.type=l),v.disable||(v.disable=n),new $R(v)});t=t||new YR({annotations:_,accessors:r,accessorsInverse:s,ids:a});var g=p.selectAll("g").data([t]);g.enter().append("g").attr("class","annotations");var y=p.select("g.annotations");Vi(y,t.annotations,"g","annotation");var S=y.selectAll("g.annotation");S.each(function(v){var M=Yr(this);M.attr("class","annotation"),Vi(M,[v],"g","annotation-connector"),Vi(M,[v],"g","annotation-subject"),Vi(M,[v],"g","annotation-note"),Vi(M.select("g.annotation-note"),[v],"g","annotation-note-content"),v.type=v.type.toString()==="[object Object]"?v.type:new v.type({a:M,annotation:v,textWrap:c,notePadding:u,editMode:o,dispatcher:h,accessors:r}),v.type.draw(),v.type.drawText&&v.type.drawText()})};return d.json=function(){return console.log("Annotations JSON was copied to your clipboard. Please note the annotation type is not JSON compatible. It appears in the objects array in the console, but not in the copied JSON.",t.json),window.copy(JSON.stringify(t.json.map(function(m){return delete m.type,m}))),d},d.update=function(){return i&&t&&(i=t.annotations.map(function(m){return m.type.draw(),m})),d},d.updateText=function(){return t&&(t.updateText(c),i=t.annotations),d},d.updatedAccessors=function(){return t.setPositionWithAccessors(),i=t.annotations,d},d.disable=function(m){return arguments.length?(n=m,t&&(t.updateDisable(n),i=t.annotations),d):n},d.textWrap=function(m){return arguments.length?(c=m,t&&(t.updateTextWrap(c),i=t.annotations),d):c},d.notePadding=function(m){return arguments.length?(u=m,t&&(t.updateNotePadding(u),i=t.annotations),d):u},d.type=function(m,p){return arguments.length?(l=m,t&&(t.annotations.map(function(_){_.type.note&&_.type.note.selectAll("*:not(.annotation-note-content)").remove(),_.type.noteContent&&_.type.noteContent.selectAll("*").remove(),_.type.subject&&_.type.subject.selectAll("*").remove(),_.type.connector&&_.type.connector.selectAll("*").remove(),_.type.typeSettings={},_.type=l,_.subject=p&&p.subject||_.subject,_.connector=p&&p.connector||_.connector,_.note=p&&p.note||_.note}),i=t.annotations),d):l},d.annotations=function(m){if(!arguments.length)return t&&t.annotations||i;if(i=m,t&&t.annotations){var p=i.some(function(_){return!_.type||_.type.toString()!=="[object Object]"});p?(t=null,d(f)):t.annotations=i}return d},d.context=function(m){return arguments.length?(e=m,d):e},d.accessors=function(m){return arguments.length?(r=m,d):r},d.accessorsInverse=function(m){return arguments.length?(s=m,d):s},d.ids=function(m){return arguments.length?(a=m,d):a},d.editMode=function(m){return arguments.length?(o=m,f&&f.selectAll("g.annotation").classed("editable",o),t&&(t.editMode(o),i=t.annotations),d):o},d.collection=function(m){return arguments.length?(t=m,d):t},d.on=function(){var m=h.on.apply(h,arguments);return m===h?d:m},d}const Vu=1440,Ga=900,Wa=24,mP=768,sg=56,gP=130,ne={title:20,titleCompact:16,axis:14,series:14,annotation:14,tooltip:14},ce={title:"#1f2937",axisText:"#4b5563",axisLine:"#d1d5db",annotationLine:"#CCCCCC",annotationText:"#4b5563"},Be={color:ce.annotationLine,lineOpacity:.8,lineDash:"4 4",wrapWidth:140,verticalLine:{dx:30,dy:-40},horizontalLine:{dx:40,dy:-20},callout:{dx:50,dy:-30}};class _P{constructor(t){this.container=t,this.svg=null,this.root=null,this.dataCache=new Map,this.lineSpanState=new Map,this.onResize=()=>{},window.addEventListener("resize",this.onResize)}async render(t,e={}){if(!t?.visible)return;this.textPosition=e.textPosition||null,this.panelPlotInfo=[];const n=this.normalizeChartConfig(t,e);if(this.ensureSvg(),!this.root)return;this.root.selectAll("*").remove(),this.drawBackdrop();const r=window.innerWidth<mP,s=this.buildPanelSpecs(n,r);if(s.length===0)return;const o=s.filter(l=>l.chart).map(async l=>({panel:l,dataset:await this.loadDataset(l.chart)})),a=await Promise.all(o);this.applySharedLineLeftGutters(n,a),a.forEach(({panel:l,dataset:c})=>{this.renderChart(l,c)}),n.layout==="dual"&&Array.isArray(t.dualAnnotations)&&t.dualAnnotations.length>0&&this.renderDualAnnotations(t.dualAnnotations)}normalizeChartConfig(t,e={}){const n=t.layout||(Array.isArray(t.charts)&&t.charts.length===2?"dual":"single"),r=t.span||(e.spanId?{id:e.spanId}:null),s=!!e.transitionFromPrevious,o=Array.isArray(t.charts)&&t.charts.length>0?t.charts.map(a=>({...a,span:r,transitionFromPrevious:s})):[{id:t.id||"chart-1",type:t.type||"line",dataFile:t.dataFile,dataFormat:t.dataFormat||"auto",config:t.config||{},span:r,transitionFromPrevious:s}];return{visible:t.visible,layout:n,responsive:t.responsive||{mobileStack:!0},grid:t.grid||null,charts:o,position:t.position||null}}buildPanelSpecs(t,e){const n=t.charts||[];if(n.length===0)return[];const r=this.getPlotBounds(),s=t.responsive?.mobileStack!==!1,o=e&&s&&(t.layout==="dual"||t.layout==="grid");if(t.layout==="single"||o)return this.buildStackedPanels(n,r);if(t.layout==="dual"||t.layout==="dual-vertical"){const a=this.applyDualTitle(r,t.dualTitle||null);return t.layout==="dual-vertical"?this.buildStackedPanels(n,a):this.buildDualPanels(n,a)}return t.layout==="grid"?this.buildGridPanels(n,t.grid||{},r):this.buildStackedPanels(n,r)}applyDualTitle(t,e){const n=e?ne.title+12:0;return e&&this.root&&this.root.append("text").attr("x",t.left+(t.right-t.left)/2).attr("y",t.top+20).attr("text-anchor","middle").attr("fill",ce.title).attr("font-size",ne.title).attr("font-weight",700).text(e),n?{...t,top:t.top+n}:t}getPlotBounds(){const e=document.getElementById("header-nav")?.offsetHeight??sg,n=Math.min(Math.max(e,sg),gP),r=this.viewBoxWidth||Vu;let s=Wa,o=r-Wa;const a=this.textPosition;if(a&&a.horizontal&&a.horizontal!=="center"){const l=parseFloat(a.width)||0;if(l>0){const c=r*(l/100)+Wa;a.horizontal==="right"?o=r-c:a.horizontal==="left"&&(s=c)}}return{left:s,right:o,top:Wa+n,bottom:Ga-Wa}}buildStackedPanels(t,e){const n=t.length,r=20,o=(e.bottom-e.top-r*(n-1))/n;return t.map((a,l)=>({chart:a,x:e.left,y:e.top+l*(o+r),width:e.right-e.left,height:o}))}buildDualPanels(t,e){const s=Math.ceil(t.length/2),o=(e.right-e.left-20)/2,a=(e.bottom-e.top-20*(s-1))/s;return t.map((l,c)=>{const u=c%2,h=Math.floor(c/2);return{chart:l,x:e.left+u*(o+20),y:e.top+h*(a+20),width:o,height:a}})}buildGridPanels(t,e,n){const r=e.allowEmptyCells!==!1,s=Array.isArray(e.rowPattern)&&e.rowPattern.length>0?e.rowPattern:this.makeDefaultRowPattern(e,t.length),o=Array.isArray(e.rowTitles)?e.rowTitles:[],a=e.title?ne.title+12:0;e.title&&this.root&&this.root.append("text").attr("x",n.left+(n.right-n.left)/2).attr("y",n.top+20).attr("text-anchor","middle").attr("fill",ce.title).attr("font-size",ne.title).attr("font-weight",700).text(e.title);const l=Math.max(...s),c=18,u=18,h=s.length,f=n.right-n.left,d=n.bottom-n.top-a,m=o.length>0?38:0,p=(d-m*h-c*(h-1))/h,_=(f-u*(l-1))/l,g=[];let y=0;return s.forEach((S,v)=>{const M=n.top+a+v*(p+m+c);o[v]&&this.root&&this.root.append("text").attr("x",n.left+f/2).attr("y",M+24).attr("text-anchor","middle").attr("fill",ce.axisText).attr("font-size",17).attr("font-weight",700).text(o[v]);const b=M+m,T=S*_+(S-1)*u,R=n.left+(f-T)/2;for(let x=0;x<S;x+=1){const E=t[y]||null;if(!E&&!r)break;g.push({chart:E,x:R+x*(_+u),y:b,width:_,height:p,_gridIndex:g.length}),E&&(y+=1)}}),g}makeDefaultRowPattern(t,e){const n=Number.isFinite(t.columns)?Math.max(1,t.columns):e,r=Number.isFinite(t.rows)?Math.max(1,t.rows):Math.ceil(e/n),s=[];for(let o=0;o<r;o+=1){const a=e-o*n;a<=0?s.push(n):s.push(Math.min(n,a))}return s}async loadDataset(t){const e=t.dataFile;if(!e)return null;const n="/prj-jcie/",r=e.startsWith("/")?e.slice(1):e,s=`${n}${r}`,o=(t.dataFormat||"auto").toLowerCase(),a=o==="auto"?this.detectFormatFromPath(s):o,l=`${a}:${s}`;if(this.dataCache.has(l))return this.dataCache.get(l);let c;if(a==="json")c=await Hu(s);else if(a==="csv")c=await pv(s,cv);else throw new Error(`Unsupported data format: ${a}`);return this.dataCache.set(l,c),c}detectFormatFromPath(t){if(t.endsWith(".json"))return"json";if(t.endsWith(".csv"))return"csv";throw new Error(`Cannot detect data format from path: ${t}`)}renderChart(t,e){if(!t.chart){this.drawEmptyPanel(t);return}const n=t.chart.type||"line";try{n==="line"?this.renderLine(t,e,t.chart.config||{},t.chart):n==="pie"?this.renderPie(t,e,t.chart.config||{}):n==="sankey"?this.renderSankey(t,e,t.chart.config||{}):n==="venn"?this.renderVenn(t,e,t.chart.config||{}):n==="bump"?this.renderBump(t,e,t.chart.config||{}):n==="streamgraph"?this.renderStreamgraph(t,e,t.chart.config||{}):this.renderUnsupported(t,`未対応チャート: ${n}`)}catch(r){this.renderUnsupported(t,`描画エラー: ${n}`),console.error(r)}}applySharedLineLeftGutters(t,e){if(t.layout!=="dual-vertical"||!Array.isArray(e)||e.length<2)return;const n=e.filter(({panel:s})=>s?.chart?.type==="line");if(n.length<2)return;let r=0;n.forEach(({dataset:s,panel:o})=>{const a=this.prepareLineRenderData(s,o.chart.config||{});a&&(r=Math.max(r,this.resolveYAxisLabelGutter(a.rows,a.yField,a.targetYDomain)))}),!(r<=0)&&n.forEach(({panel:s})=>{s._sharedLeftGutter=r})}resolveAxisUnits(t={},e={}){const n=e.allowX!==!1,r=e.allowY!==!1,s=n?this.normalizeAxisUnit(t.xUnit):"",o=r?this.normalizeAxisUnit(t.yUnit):"";return{xUnit:s,yUnit:o,topInsetExtra:o?30:0,bottomInsetExtra:s?18:0}}normalizeAxisUnit(t){return t==null?"":String(t).trim()}drawAxisUnitLabels(t,e,n,r={}){const s=this.normalizeAxisUnit(r.xUnit),o=this.normalizeAxisUnit(r.yUnit);o&&t.append("text").attr("class","axis-unit axis-unit-y").attr("x",-9).attr("y",-22).attr("text-anchor","end").attr("fill",ce.axisText).attr("font-size",ne.axis).attr("font-weight",500).text(o),s&&t.append("text").attr("class","axis-unit axis-unit-x").attr("x",e).attr("y",n+ne.axis+24).attr("text-anchor","end").attr("fill",ce.axisText).attr("font-size",ne.axis).attr("font-weight",500).text(s)}prepareLineRenderData(t,e={}){if(!Array.isArray(t))return null;const n=e.xField||"year",r=e.yField||"value",s=e.seriesField||"series",a=this.filterLineSeries(t,e.seriesFilter,s).filter(g=>Number.isFinite(Number(g[n]))&&(Number.isFinite(Number(g[r]))||g[r]==null||String(g[r]).trim()===""||String(g[r]).trim()==="―"));if(a.length===0)return null;const l=Ud(a,g=>Number(g[n])),c=Array.isArray(e.xDomain)&&e.xDomain.length===2?[Number(e.xDomain[0]),Number(e.xDomain[1])]:null,u=c&&c.every(Number.isFinite)?[Math.min(c[0],c[1]),Math.max(c[0],c[1])]:[Number(l[0]),Number(l[1])];if(!u.every(Number.isFinite)||u[0]===u[1])return null;const h=a.filter(g=>{const y=Number(g[n]);return y>=u[0]&&y<=u[1]});if(h.length===0)return null;const f=Da(h,g=>Number(g[r]))||0,d=Array.isArray(e.yDomain)&&e.yDomain.length===2?e.yDomain.map(Number):null,m=f>0?[0,f*1.1]:[0,1],p=Rr().domain(d||m).nice(),_=d||p.domain();return{xField:n,yField:r,seriesField:s,rows:h,targetXDomain:u,targetYDomain:_}}renderLine(t,e,n,r={}){if(!Array.isArray(e)){this.renderUnsupported(t,"lineデータ形式が不正です");return}const s=this.prepareLineRenderData(e,n);if(!s){this.renderUnsupported(t,"lineデータが空です");return}const{xField:o,yField:a,seriesField:l,rows:c,targetXDomain:u,targetYDomain:h}=s,f=r?.span?.id,d=f==null?null:String(f).trim(),m=!!(r?.transitionFromPrevious&&d),p=m?this.lineSpanState.get(d):null,_=p?.xDomain||u,g=p?.yDomain||h,y=n.title||"折れ線グラフ",S=this.createPanelInner(t,y),v=S.width,M=S.height,b=this.resolveAxisUnits(n),T=Fx(c,nt=>nt[l]==null?"__single__":String(nt[l])),R=T.length>1&&T.some(([nt])=>nt!=="__single__"),x=R?this.resolveLineLabelGutter(v):0,E=t._sharedLeftGutter||this.resolveYAxisLabelGutter(c,a,h),L=6+b.topInsetExtra,C=24+b.bottomInsetExtra,P=Math.max(80,v-E-x),U=Math.max(80,M-L-C),z=S.group.append("g").attr("transform",`translate(${E}, ${L})`),B=Rr().domain(_).range([0,P]),N=Rr().domain(g).range([U,0]),V=14,Y=ne.title+36;this.panelPlotInfo.push({chartId:r?.id||null,plotAbsX:t.x+V+E,plotAbsY:t.y+V+Y+L,plotWidth:P,plotHeight:U,yDomain:[...h],xDomain:[...u]});const I=kc(B).ticks(5).tickFormat(pi("d")),tt=zd(N).ticks(5),gt=nt=>nt.selectAll("text").attr("fill",ce.axisText).attr("font-size",ne.axis),_t=nt=>nt.selectAll("line,path").attr("stroke",ce.axisLine).attr("opacity",.5);let xt=null;if(n.gridLines!==!1){xt=z.append("g").attr("class","grid-lines");const nt=N.ticks(5);xt.selectAll("line").data(nt).enter().append("line").attr("x1",0).attr("y1",ot=>N(ot)).attr("x2",P).attr("y2",ot=>N(ot)).attr("stroke",ce.axisLine).attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}const rt=z.append("g").attr("transform",`translate(0, ${U})`).call(I).call(gt).call(_t),H=z.append("g").call(tt).call(gt).call(_t);this.drawAxisUnitLabels(z,P,U,b);const W=nt=>nt[a]!=null&&nt[a]!==""&&Number.isFinite(Number(nt[a])),it=ju().defined(W).x(nt=>B(Number(nt[o]))).y(nt=>N(Number(nt[a]))).curve(ap),ft=n.areaFill!==!1?ep().defined(W).x(nt=>B(Number(nt[o]))).y0(U).y1(nt=>N(Number(nt[a]))).curve(ap):null;if(!R){const nt=this.getThemePrimary();let ot=null;if(ft){const k=`area-grad-single-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",k).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:nt,opacity:.25},{offset:"100%",color:nt,opacity:0}]).enter().append("stop").attr("offset",J=>J.offset).attr("stop-color",J=>J.color).attr("stop-opacity",J=>J.opacity),ot=z.append("path").datum(c).attr("fill",`url(#${k})`).attr("opacity",0).attr("d",ft)}const D=z.append("path").datum(c).attr("fill","none").attr("stroke",nt).attr("stroke-width",2.5).attr("d",it),w=z.selectAll(".point").data(c.filter(W)).enter().append("circle").attr("cx",k=>B(Number(k[o]))).attr("cy",k=>N(Number(k[a]))).attr("r",2.7).attr("fill",nt);if(m&&p){B.domain(u),N.domain(h);const k=Ld().duration(850).ease(Nd);if(xt){xt.selectAll("line").remove();const J=N.ticks(5);xt.selectAll("line").data(J).enter().append("line").attr("x1",0).attr("y1",Q=>N(Q)).attr("x2",P).attr("y2",Q=>N(Q)).attr("stroke",ce.axisLine).attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}rt.transition(k).call(I).call(gt).call(_t),H.transition(k).call(tt).call(gt).call(_t),D.transition(k).attr("d",it).on("end",()=>{this.renderLineAnnotations(z,B,N,P,U,n.annotations)}),ot&&ot.transition(k).attr("d",ft).attr("opacity",1),w.transition(k).attr("cx",J=>B(Number(J[o]))).attr("cy",J=>N(Number(J[a])))}else{this.renderLineAnnotations(z,B,N,P,U,n.annotations);const k=D.node()?.getTotalLength()||0;D.attr("stroke-dasharray",`${k} ${k}`).attr("stroke-dashoffset",k).transition().duration(700).ease(di).attr("stroke-dashoffset",0),ot&&ot.transition().duration(700).ease(di).attr("opacity",1)}this.attachLineTooltip(z,[{name:"__single__",values:c}],B,N,P,U,o,a,()=>nt),d&&this.lineSpanState.set(d,{xDomain:[...u],yDomain:[...h]});return}const ut=T.map(([nt,ot])=>({name:nt,values:[...ot].sort((D,w)=>Number(D[o])-Number(w[o]))})).filter(nt=>nt.values.length>0),Ot=this.buildPalette(ut.length),Wt=eo().domain(ut.map(nt=>nt.name)).range(Ot),St=new Set(Array.isArray(n.highlight)?n.highlight:n.highlight?[n.highlight]:[]),Ut=St.size>0,Vt=z.append("g").attr("class","line-series"),Nt=[],$=[],O=[],fe=[],Zt=n.projectionField||null;if(ut.forEach((nt,ot)=>{const D=!Ut||St.has(nt.name),w=Ut?D?4.4:1.2:2,k=D?1:.3,J=D?2.8:1.5,Q=Ut?D?.18:.04:.12,Z=this.splitProjection(nt.values,Zt),wt=Z.actual.length>0?Z.actual:nt.values,ht=Z.projected.length>0;let Dt=null;if(ft){const bt=`area-grad-${ot}-${t.x}-${t.y}`,Lt=Wt(nt.name);this.defs.append("linearGradient").attr("id",bt).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").selectAll("stop").data([{offset:"0%",color:Lt,opacity:Q},{offset:"100%",color:Lt,opacity:0}]).enter().append("stop").attr("offset",ct=>ct.offset).attr("stop-color",ct=>ct.color).attr("stop-opacity",ct=>ct.opacity),Dt=Vt.append("path").datum(ht?wt:nt.values).attr("fill",`url(#${bt})`).attr("opacity",0).attr("d",ft)}fe.push(Dt);const Pt=Vt.append("path").datum(ht?wt:nt.values).attr("fill","none").attr("stroke",Wt(nt.name)).attr("stroke-width",w).attr("stroke-opacity",k).attr("d",it);Nt.push(Pt);let at=null;ht&&(at=Vt.append("path").datum(Z.projected).attr("fill","none").attr("stroke",Wt(nt.name)).attr("stroke-width",w).attr("stroke-opacity",k).attr("stroke-dasharray","6 4").attr("d",it)),$.push(at);const dt=Vt.selectAll(`.point-${this.toSafeCssToken(nt.name)}`).data(nt.values.filter(W)).enter().append("circle").attr("cx",bt=>B(Number(bt[o]))).attr("cy",bt=>N(Number(bt[a]))).attr("r",J).attr("fill",Wt(nt.name)).attr("fill-opacity",k);O.push(dt)}),m&&p){B.domain(u),N.domain(h);const nt=Ld().duration(850).ease(Nd);if(xt){xt.selectAll("line").remove();const ot=N.ticks(5);xt.selectAll("line").data(ot).enter().append("line").attr("x1",0).attr("y1",D=>N(D)).attr("x2",P).attr("y2",D=>N(D)).attr("stroke",ce.axisLine).attr("stroke-opacity",.12).attr("stroke-dasharray","2 4")}rt.transition(nt).call(I).call(gt).call(_t),H.transition(nt).call(tt).call(gt).call(_t),Nt.forEach((ot,D)=>{ot.transition(nt).attr("d",it).on("end",()=>{D===0&&(this.renderLineAnnotations(z,B,N,P,U,n.annotations),this.drawLineEndLabels(z,ut,Wt,B,N,P,U,o,a,n))})}),$.forEach(ot=>{ot&&ot.transition(nt).attr("d",it)}),fe.forEach(ot=>{ot&&ot.transition(nt).attr("d",ft).attr("opacity",1)}),O.forEach(ot=>{ot.transition(nt).attr("cx",D=>B(Number(D[o]))).attr("cy",D=>N(Number(D[a])))})}else this.renderLineAnnotations(z,B,N,P,U,n.annotations),Nt.forEach(nt=>{const ot=nt.node()?.getTotalLength()||0;nt.attr("stroke-dasharray",`${ot} ${ot}`).attr("stroke-dashoffset",ot).transition().duration(700).ease(di).attr("stroke-dashoffset",0)}),$.forEach(nt=>{nt&&nt.attr("opacity",0).transition().delay(500).duration(400).ease(di).attr("opacity",1)}),fe.forEach(nt=>{nt&&nt.transition().duration(700).ease(di).attr("opacity",1)}),this.drawLineEndLabels(z,ut,Wt,B,N,P,U,o,a,n);this.attachLineTooltip(z,ut,B,N,P,U,o,a,nt=>Wt(nt)),d&&this.lineSpanState.set(d,{xDomain:[...u],yDomain:[...h]})}filterLineSeries(t,e,n){if(!e)return t;const r=new Set((Array.isArray(e)?e:[e]).map(s=>String(s).trim()).filter(Boolean));return r.size===0?t:t.filter(s=>r.has(String(s?.[n]??"").trim()))}attachLineTooltip(t,e,n,r,s,o,a,l,c){const u=t.append("rect").attr("width",s).attr("height",o).attr("fill","none").style("pointer-events","all").style("cursor","crosshair"),h=t.append("line").attr("y1",0).attr("y2",o).attr("stroke","#ffffff").attr("stroke-opacity",0).attr("stroke-width",.8).attr("stroke-dasharray","3 3"),f=t.append("g").attr("class","line-tooltip").attr("opacity",0),d=[...new Set(e.flatMap(p=>p.values.map(_=>Number(_[a]))))].sort((p,_)=>p-_),m=Pf(p=>p).left;u.on("mousemove",p=>{const[_]=Bc(p),g=n.invert(_),y=m(d,g),S=d[y-1],v=d[y],M=S==null?v:v==null||g-S<v-g?S:v;if(M==null)return;const b=n(M);h.attr("x1",b).attr("x2",b).attr("stroke-opacity",.3),f.selectAll("*").remove(),f.attr("opacity",1);let T=0;e.forEach(R=>{const x=R.values.find(U=>Number(U[a])===M);if(!x)return;const E=r(Number(x[l])),L=c(R.name);f.append("circle").attr("cx",b).attr("cy",E).attr("r",4).attr("fill",L).attr("stroke","#fff").attr("stroke-width",1.5);const C=b+8,P=12+T*16;f.append("rect").attr("x",C-2).attr("y",P-10).attr("width",70).attr("height",14).attr("rx",3).attr("fill","rgba(255,255,255,0.92)"),f.append("text").attr("x",C).attr("y",P).attr("fill",L).attr("font-size",ne.tooltip).attr("font-weight",500).text(pi(",")(Number(x[l]))),T+=1}),f.append("text").attr("x",b).attr("y",o+16).attr("text-anchor","middle").attr("fill",ce.axisText).attr("font-size",ne.tooltip).text(pi("d")(M))}),u.on("mouseleave",()=>{h.attr("stroke-opacity",0),f.attr("opacity",0)})}drawLineEndLabels(t,e,n,r,s,o,a,l,c,u={}){if(!Array.isArray(e)||e.length===0)return;const h=o+10,f=Math.ceil(ne.series*1.6),d=8,m=Math.max(d,a-8),p=e.map(y=>{const S=y.values[y.values.length-1];if(!S)return null;const v=Number(S[l]),M=Number(S[c]);return!Number.isFinite(v)||!Number.isFinite(M)?null:{name:y.name,xEnd:r(v),yTarget:s(M),y:s(M)}}).filter(Boolean).sort((y,S)=>y.yTarget-S.yTarget);if(p.length===0)return;p.forEach((y,S)=>{S===0?y.y=Math.max(d,y.yTarget):y.y=Math.max(y.yTarget,p[S-1].y+f)}),p[p.length-1].y=Math.min(p[p.length-1].y,m);for(let y=p.length-2;y>=0;y-=1)p[y].y=Math.min(p[y].y,p[y+1].y-f);if(p[0].y<d)if(p.length===1)p[0].y=(d+m)/2;else{const y=(m-d)/(p.length-1);p.forEach((S,v)=>{S.y=d+y*v})}const _=t.append("g").attr("class","line-end-labels"),g=new Set(u.textOnlyLabels||[]);_.selectAll("line").data(p.filter(y=>!g.has(y.name))).enter().append("line").attr("x1",y=>y.xEnd+2).attr("y1",y=>y.yTarget).attr("x2",h-4).attr("y2",y=>y.y).attr("stroke",y=>n(y.name)).attr("stroke-opacity",.8).attr("stroke-width",1),_.selectAll("text").data(p).enter().append("text").attr("x",h).attr("y",y=>y.y).attr("dominant-baseline","middle").attr("fill",y=>n(y.name)).attr("font-size",ne.series).attr("font-weight",600).text(y=>y.name)}renderLineAnnotations(t,e,n,r,s,o){if(!Array.isArray(o)||o.length===0)return;const a=e.domain(),l=n.domain(),c=[],u=new Map;for(const h of o){const f=h?.type;if(f==="arrow")continue;const d=String(h?.label||""),m=h?.color||Be.color,p=h?.wrap||Be.wrapWidth;if(f==="verticalLine"){const _=h.year??h.x??h.value,g=Number(_);if(!Number.isFinite(g)||g<Math.min(...a)||g>Math.max(...a))continue;const y=e(g);c.push({type:ng,note:{label:d,wrap:p,labelStyle:{fontSize:ne.annotation}},color:m,x:y,y:0,dx:h.dx??Be.verticalLine.dx,dy:h.dy??Be.verticalLine.dy,subject:{y1:0,y2:s}})}else if(f==="horizontalLine"){const _=h.y??h.value,g=Number(_);if(!Number.isFinite(g)||g<Math.min(...l)||g>Math.max(...l))continue;const y=n(g);h.id&&u.set(h.id,y);const S=h.anchor==="right";c.push({type:ng,note:{label:d,wrap:p,align:S?"right":void 0,labelStyle:{fontSize:ne.annotation}},color:m,x:S?r:0,y,dx:h.dx??(S?-40:Be.horizontalLine.dx),dy:h.dy??Be.horizontalLine.dy,subject:{x1:0,x2:r}})}else if(f==="callout"){const _=Number(h.x),g=Number(h.y);if(!Number.isFinite(_)||!Number.isFinite(g))continue;const y=h.connector==="curve"?fP:wl;c.push({type:y,note:{label:d,wrap:p,labelStyle:{fontSize:ne.annotation}},color:m,x:e(_),y:n(g),dx:h.dx??Be.callout.dx,dy:h.dy??Be.callout.dy})}}if(c.length>0){const h=zu().annotations(c),f=t.append("g").attr("class","chart-annotations").call(h);f.selectAll(".annotation .subject path, .annotation .subject line").attr("stroke-dasharray",Be.lineDash).attr("stroke-opacity",Be.lineOpacity),f.selectAll(".annotation text, .annotation tspan").attr("font-size",ne.annotation).style("font-size",`${ne.annotation}px`).attr("fill",ce.annotationText)}this.renderAnnotationArrows(t,o,u,r)}renderAnnotationArrows(t,e,n,r){const s=e.filter(l=>l?.type==="arrow");if(s.length===0)return;const o=`ann-arrow-${Math.random().toString(36).slice(2,8)}`;let a=t.select("defs");a.empty()&&(a=t.append("defs")),a.append("marker").attr("id",o).attr("viewBox","0 0 10 10").attr("refX",8).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("fill",ce.annotationText);for(const l of s){const c=n.get(l.from),u=n.get(l.to);if(c==null||u==null)continue;const h=l.color||ce.annotationText,f=l.x!=null?Number(l.x):r*.92,d=String(l.label||"");if(t.append("line").attr("x1",f).attr("y1",c).attr("x2",f).attr("y2",u).attr("stroke",h).attr("stroke-width",1.5).attr("marker-end",`url(#${o})`),d){const m=(c+u)/2;t.append("text").attr("x",f-8).attr("y",m).attr("text-anchor","end").attr("dominant-baseline","middle").attr("fill",h).attr("font-size",ne.annotation).attr("font-weight",600).text(d)}}}renderDualAnnotations(t){if(!this.root||!Array.isArray(this.panelPlotInfo)||this.panelPlotInfo.length<2)return;const e=this.panelPlotInfo,n=this.root.append("g").attr("class","dual-annotations"),r=[],s=50,o=new Map;for(const l of t){if(l.type==="arrow"||l.type!=="horizontalLine")continue;const c=Number(l.value);if(!Number.isFinite(c))continue;const u=String(l.label||""),h=l.color||Be.color,f=[];for(const p of e){const[_,g]=p.yDomain;if(c<_||c>g)continue;const S=Rr().domain(p.yDomain).range([p.plotHeight,0])(c);f.push({x1:p.plotAbsX,x2:p.plotAbsX+p.plotWidth,y:p.plotAbsY+S})}if(f.length>0&&l.id&&o.set(l.id,f[0].y),f.length===0)continue;const d=Math.min(...f.map(p=>p.x1)),m=Math.max(...f.map(p=>p.x2));f.forEach(p=>{n.append("line").attr("x1",p.x1).attr("y1",p.y).attr("x2",p.x2).attr("y2",p.y).attr("stroke",h).attr("stroke-dasharray",Be.lineDash).attr("stroke-opacity",Be.lineOpacity)});for(let p=0;p<f.length-1;p++)n.append("line").attr("x1",f[p].x2).attr("y1",f[p].y).attr("x2",f[p+1].x1).attr("y2",f[p+1].y).attr("stroke",h).attr("stroke-dasharray",Be.lineDash).attr("stroke-opacity",Be.lineOpacity);if(u){const p=l.anchor==="right"?m:d,_=f[0].y,g=l.dx??(l.anchor==="right"?-40:Be.horizontalLine.dx);let y=l.dy??Be.horizontalLine.dy,S=_+y;for(const T of r)Math.abs(S-T)<s&&(y-=s,S=_+y);r.push(S);const v=[{type:wl,note:{label:u,wrap:l.wrap||Be.wrapWidth,labelStyle:{fontSize:ne.annotation}},color:h,x:p,y:_,dx:g,dy:y}],M=zu().annotations(v);n.append("g").attr("class","dual-annotation-label").call(M).selectAll(".annotation text, .annotation tspan").attr("font-size",ne.annotation).style("font-size",`${ne.annotation}px`).attr("fill",ce.annotationText)}}const a=t.filter(l=>l?.type==="arrow");if(a.length>0&&o.size>=2){const l=`dual-ann-arrow-${Math.random().toString(36).slice(2,8)}`;let c=this.root.select("defs");c.empty()&&(c=this.root.append("defs")),c.append("marker").attr("id",l).attr("viewBox","0 0 10 10").attr("refX",8).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("fill",ce.annotationText);for(const u of a){const h=o.get(u.from),f=o.get(u.to);if(h==null||f==null)continue;const d=u.color||ce.annotationText,m=String(u.label||""),p=e[0],_=u.x!=null?Number(u.x):p.plotAbsX+p.plotWidth*.92;if(n.append("line").attr("x1",_).attr("y1",h).attr("x2",_).attr("y2",f).attr("stroke",d).attr("stroke-width",1.5).attr("marker-end",`url(#${l})`),m){const g=(h+f)/2;n.append("text").attr("x",_-8).attr("y",g).attr("text-anchor","end").attr("dominant-baseline","middle").attr("fill",d).attr("font-size",ne.annotation).attr("font-weight",600).text(m)}}}}renderPie(t,e,n){const r=this.resolvePieDataset(e,n);if(!Array.isArray(r)||r.length===0){this.renderUnsupported(t,"pieデータが空です");return}const s=n.labelField||"label",o=n.valueField||"value",a=r.map(S=>({...S,__pieValue:this.parsePieNumericValue(S[o])})).filter(S=>S[s]!=null&&Number.isFinite(S.__pieValue));if(a.length===0){this.renderUnsupported(t,"pieデータが不正です");return}const l=n.title||n.groupTitle||"円グラフ",c=this.createPanelInner(t,l,{compact:!0}),u=Math.max(24,Math.min(c.width,c.height)*.33),h=Kv().value(S=>S.__pieValue).sort(null),f=qv().innerRadius(0).outerRadius(u),d=this.buildPalette(a.length);n.primaryColor&&(d[0]=n.primaryColor),n.remainderColor&&a.length===2&&(d[1]=n.remainderColor);const m=c.group.append("g").attr("transform",`translate(${c.width/2}, ${c.height/2-8})`),p=t._gridIndex!=null?t._gridIndex*80:0,_=h(a),g=_[_.length-1].endAngle;m.selectAll("path").data(_).enter().append("path").attr("fill",(S,v)=>d[v]).attr("stroke","#ffffff").attr("stroke-width",1).attr("opacity",.95).attr("d",S=>f({...S,endAngle:S.startAngle})).transition().duration(800).delay(p).ease(di).attrTween("d",S=>v=>{const M=v*g;return M<=S.startAngle?f({...S,endAngle:S.startAngle}):f({...S,endAngle:Math.min(S.endAngle,M)})});const y=c.group.append("g").attr("transform",`translate(0, ${c.height-Math.min(a.length*15,c.height*.38)})`);a.slice(0,6).forEach((S,v)=>{const M=v*15;y.append("rect").attr("x",0).attr("y",M-9).attr("width",9).attr("height",9).attr("fill",d[v]),y.append("text").attr("x",14).attr("y",M).attr("fill",ce.axisText).attr("font-size",ne.series).text(`${S[s]}: ${S[o]}`)})}resolvePieDataset(t,e){if(Array.isArray(t)){const n=e.rowField,r=e.rowValue;if(n&&r!=null){const s=t.find(l=>String(l?.[n]??"").trim()===String(r).trim());if(!s)return[];const a=(Array.isArray(e.categoryColumns)&&e.categoryColumns.length>0?e.categoryColumns:Object.keys(s).filter(l=>l!==n)).map(l=>({label:l,value:this.parsePieNumericValue(s[l])})).filter(l=>Number.isFinite(l.value));if(a.length===0)return[];if(a.length===1&&e.primaryLabel&&(a[0].label=String(e.primaryLabel)),a.length===1&&Number.isFinite(Number(e.normalizeTo))){const l=Number(e.normalizeTo),c=Math.round(Math.max(0,l-a[0].value)*10)/10;a.push({label:e.remainderLabel||"未治療",value:c})}return a}return t}if(Array.isArray(t?.groups)){const n=e.groupId,r=n?t.groups.find(s=>s.id===n):t.groups[e.groupIndex??0];return r?r.values||[]:[]}return[]}parsePieNumericValue(t){if(Number.isFinite(t))return Number(t);if(typeof t=="string"){const e=t.replace(/,/g,"").replace(/%/g,"").trim(),n=Number(e);if(Number.isFinite(n))return n}return NaN}renderSankey(t,e,n){const r=this.normalizeSankeyData(e);if(!r||r.nodes.length===0||r.links.length===0){this.renderUnsupported(t,"sankeyデータが不正です");return}const s=n.title||"サンキー・ダイアグラム",o=this.createPanelInner(t,s),a=o.width,l=o.height,c=new Map(r.nodes.map(x=>[x.id,{...x,in:[],out:[],level:0}])),u=r.links.map(x=>({source:c.get(x.source),target:c.get(x.target),value:Number(x.value)})).filter(x=>x.source&&x.target&&Number.isFinite(x.value)&&x.value>0);u.forEach(x=>{x.source.out.push(x),x.target.in.push(x)}),this.assignNodeLevels(c);const h=new Map;[...c.values()].forEach(x=>{h.has(x.level)||h.set(x.level,[]),h.get(x.level).push(x)});const f=[...h.keys()].sort((x,E)=>x-E),d=Math.max(...f,1),m=12,p=Math.max(8,Math.min(18,a*.03)),_=Math.max(...f.map(x=>h.get(x).reduce((E,L)=>E+this.nodeValue(L),0)),1),g=(l-m*6)/_;f.forEach(x=>{const E=h.get(x),C=E.reduce((U,z)=>U+this.nodeValue(z),0)*g+(E.length-1)*m;let P=(l-C)/2;E.forEach(U=>{U.h=Math.max(8,this.nodeValue(U)*g),U.w=p,U.x=x/d*(a-p),U.y=P,U.inOffset=0,U.outOffset=0,P+=U.h+m})});const y=this.buildPalette(Math.max(f.length,2)),S=[...c.values()];S.forEach(x=>{x.color=y[Math.min(x.level,y.length-1)]});const v=o.group.append("g").attr("fill","none"),M=[],b=600;u.forEach((x,E)=>{const L=Math.max(1.5,x.value*g),C=x.source.x+x.source.w,P=x.source.y+x.source.outOffset+L/2,U=x.target.x,z=x.target.y+x.target.inOffset+L/2;x.source.outOffset+=L,x.target.inOffset+=L;const B=C+(U-C)*.45,N=C+(U-C)*.55,V=`M${C},${P} C${B},${P} ${N},${z} ${U},${z}`,Y=`sankey-link-grad-${E}-${t.x}-${t.y}`;this.defs.append("linearGradient").attr("id",Y).attr("gradientUnits","userSpaceOnUse").attr("x1",C).attr("y1",P).attr("x2",U).attr("y2",z).selectAll("stop").data([{offset:"0%",color:x.source.color},{offset:"100%",color:x.target.color}]).enter().append("stop").attr("offset",xt=>xt.offset).attr("stop-color",xt=>xt.color);const I=v.append("path").attr("d",V).attr("stroke",`url(#${Y})`).attr("stroke-width",L).attr("stroke-opacity",0),gt=I.node().getTotalLength();I.attr("stroke-dasharray",gt).attr("stroke-dashoffset",gt);const _t=x.source.level*b+300;I.transition().delay(_t).duration(500).ease(di).attr("stroke-opacity",.35).attr("stroke-dashoffset",0),M.push({el:I,link:x})});const T=o.group.append("g"),R=T.selectAll("rect").data(S).enter().append("rect").attr("x",x=>x.x).attr("y",x=>x.y).attr("width",x=>x.w).attr("height",0).attr("fill",x=>x.color).attr("fill-opacity",0).attr("stroke","#ffffff").attr("stroke-width",.6).style("pointer-events","all").style("cursor","pointer");R.transition().delay(x=>x.level*b).duration(400).ease(di).attr("height",x=>x.h).attr("fill-opacity",.88),R.on("mouseenter",(x,E)=>{M.forEach(({el:L,link:C})=>{const P=C.source.id===E.id||C.target.id===E.id;L.transition().duration(200).attr("stroke-opacity",P?.7:.08)})}).on("mouseleave",()=>{M.forEach(({el:x})=>{x.transition().duration(200).attr("stroke-opacity",.35)})}),T.selectAll("text.sankey-label").data(S).enter().append("text").attr("class","sankey-label").attr("x",x=>x.level===0?x.x+x.w+6:x.x-6).attr("y",x=>x.y+x.h/2+3).attr("text-anchor",x=>x.level===0?"start":"end").attr("fill",ce.title).attr("font-size",ne.series).attr("opacity",0).text(x=>x.label).transition().delay(x=>x.level*b+200).duration(300).attr("opacity",1)}normalizeSankeyData(t){if(t?.nodes&&t?.links){const e=t.nodes.map((s,o)=>({id:s.id??s.name??String(o),label:s.name??s.id??String(o)})),n=e.map(s=>s.id),r=t.links.map(s=>({source:typeof s.source=="number"?n[s.source]:s.source,target:typeof s.target=="number"?n[s.target]:s.target,value:Number(s.value)}));return{nodes:e,links:r}}if(Array.isArray(t)){const e=new Set,n=t.map(s=>{const o=String(s.source??s.from??""),a=String(s.target??s.to??"");return e.add(o),e.add(a),{source:o,target:a,value:Number(s.value??s.count??0)}});return{nodes:[...e].filter(Boolean).map(s=>({id:s,label:s})),links:n}}return null}assignNodeLevels(t){const e=[...t.values()],n=new Map(e.map(s=>[s.id,s.in.length])),r=e.filter(s=>s.in.length===0);if(r.length===0){e.forEach(s=>{s.level=0});return}for(;r.length>0;){const s=r.shift();s.out.forEach(o=>{const a=o.target;a.level=Math.max(a.level,s.level+1),n.set(a.id,n.get(a.id)-1),n.get(a.id)===0&&r.push(a)})}}nodeValue(t){const e=kd(t.in,r=>r.value),n=kd(t.out,r=>r.value);return Math.max(e,n,1)}renderVenn(t,e,n){const r=this.resolveVennDataset(e,n);if(!r||!Array.isArray(r.sets)||r.sets.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const s=n.title||r.title||"ベン図",o=this.createPanelInner(t,s,{compact:!0}),a=r.sets.filter(N=>Array.isArray(N?.sets)&&N.sets.length>=1&&Number.isFinite(Number(N.size))).map(N=>({sets:N.sets.map(V=>String(V)),size:Math.max(0,Number(N.size))})),l=[...new Set(a.filter(N=>N.sets.length===1).map(N=>N.sets[0]))];if(l.length<2||l.length>3){this.renderUnsupported(t,"ベン図は2〜3集合を想定しています");return}if(a.length===0){this.renderUnsupported(t,"vennデータが不正です");return}const c=this.buildPalette(l.length);n.colors&&l.forEach((N,V)=>{n.colors[N]&&(c[V]=n.colors[N])});const u=new Map(l.map((N,V)=>[N,c[V]])),h=N=>N.slice().sort().join("&"),f=new Map(a.map(N=>[h(N.sets),N]));let d;try{d=jA(a,{width:o.width,height:o.height,padding:6,round:2})}catch(N){console.warn("venn layout failed",N),this.renderUnsupported(t,"vennレイアウトの計算に失敗しました");return}if(!Array.isArray(d)||d.length===0){this.renderUnsupported(t,"vennレイアウト結果が空です");return}if(l.length>=2){const N=d.find(tt=>tt.data.sets.length===1&&tt.data.sets[0]===l[0]),V=d.find(tt=>tt.data.sets.length===1&&tt.data.sets[0]===l[1]),Y=N?.circles.find(tt=>tt.set===l[0])?.x??0,I=V?.circles.find(tt=>tt.set===l[1])?.x??0;if(Y>I){const tt=_t=>o.width-_t,gt=new Set;for(const _t of d){_t.text.x=tt(_t.text.x);for(const xt of _t.circles)gt.has(xt)||(xt.x=tt(xt.x),gt.add(xt))}}}const m=`gooey-${Math.random().toString(36).slice(2,8)}`;let p=o.group.select("defs");p.empty()&&(p=o.group.append("defs"));const _=p.append("filter").attr("id",m);_.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",5).attr("result","blur"),_.append("feColorMatrix").attr("in","blur").attr("mode","matrix").attr("values","1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7").attr("result","gooey");const g=Math.max(...a.filter(N=>N.sets.length===1).map(N=>N.size),0),y=this.computeVennGlobalMax(e),S=y>0&&g>0?Math.sqrt(g/y):1,v=o.width/2,M=o.height/2,b=o.group.append("g").attr("transform",`translate(${v*(1-S)},${M*(1-S)}) scale(${S})`),T=1/S,R=b.append("g").style("filter",`url(#${m})`),x=b.append("g"),E=d.filter(N=>N.data.sets.length===1);if(E.forEach(N=>{const V=N.data.sets[0],Y=N.circles.find(I=>I.set===V)||N.circles[0];Y&&R.append("circle").attr("cx",Y.x).attr("cy",Y.y).attr("r",Y.radius).attr("fill",u.get(V)||"#5fb3ff").attr("fill-opacity",0).attr("stroke","none").attr("transform",`translate(${v-Y.x*.7},${M-Y.y*.7}) scale(0.3)`).transition().duration(600).ease(di).attr("fill-opacity",.55).attr("transform","translate(0,0) scale(1)")}),n.intersectionColor&&l.length===2){const N=E[0]?.circles.find(Y=>Y.set===l[0])||E[0]?.circles[0],V=E[1]?.circles.find(Y=>Y.set===l[1])||E[1]?.circles[0];if(N&&V){const Y=`venn-clip-${Math.random().toString(36).slice(2,8)}`;p.append("clipPath").attr("id",Y).append("circle").attr("cx",V.x).attr("cy",V.y).attr("r",V.radius),x.append("circle").attr("cx",N.x).attr("cy",N.y).attr("r",N.radius).attr("clip-path",`url(#${Y})`).attr("fill",n.intersectionColor).attr("fill-opacity",0).transition().duration(600).delay(300).attr("fill-opacity",.55)}}const L=o.group.append("g"),C=60,P=l.length===2?[o.width*.25,o.width*.75]:l.map((N,V)=>o.width*(V+1)/(l.length+1));if(l.forEach((N,V)=>{L.append("text").attr("x",P[V]).attr("y",C).attr("text-anchor","middle").attr("fill",ce.title).attr("font-size",ne.series).attr("font-weight",700).attr("opacity",0).transition().duration(400).delay(200).attr("opacity",1).text(N)}),n.intersectionLabel&&l.length>=2){const N=h(l.slice(0,2)),V=d.find(Y=>h(Y.data.sets)===N);if(V){const Y=n.hideValues?3:-8;x.append("text").attr("x",V.text.x).attr("y",V.text.y+Y).attr("text-anchor","middle").attr("fill",ce.title).attr("font-size",ne.series*T).attr("font-weight",700).attr("opacity",0).text(n.intersectionLabel).transition().duration(400).delay(350).attr("opacity",1)}}if(n.hideValues)return;const U=(N,V)=>({x:v*(1-S)+N*S,y:M*(1-S)+V*S}),z=o.group.append("g"),B=[];if(l.length===2){const N=l[0],V=l[1],Y=f.get(h([N,V]))?.size??0,I=f.get(h([N]))?.size??0,tt=f.get(h([V]))?.size??0,gt=new Map;d.forEach(rt=>{gt.set(h(rt.data.sets),{x:rt.text.x,y:rt.text.y})});const _t=[{key:h([N]),value:Math.max(0,I-Y)},{key:h([N,V]),value:Math.max(0,Y)},{key:h([V]),value:Math.max(0,tt-Y)}],xt=[{x:o.width*.13,y:o.height-16},{x:o.width*.5,y:o.height-16},{x:o.width*.87,y:o.height-16}];_t.forEach((rt,H)=>{if(!Number.isFinite(rt.value))return;const W=gt.get(rt.key);if(!W)return;const it=U(W.x,W.y),ft=xt[H];B.push({note:{label:pi(",")(rt.value),wrap:200,align:"middle",padding:2},x:it.x,y:it.y,dx:ft.x-it.x,dy:ft.y-it.y,type:wl,connector:{end:"dot"}})})}if(l.length===3){const N=new Map;d.forEach(V=>{N.set(h(V.data.sets),{x:V.text.x,y:V.text.y})}),d.filter(V=>V.data.sets.length>=2).forEach(V=>{const Y=f.get(h(V.data.sets));if(!Y)return;const I=U(V.text.x,V.text.y);B.push({note:{label:pi(",")(Y.size),wrap:200,align:"middle",padding:2},x:I.x,y:I.y,dx:0,dy:30,type:wl,connector:{end:"dot"}})})}if(B.length>0){const N=zu().annotations(B);z.append("g").attr("class","venn-value-annotations").call(N),z.selectAll(".venn-value-annotations .annotation path").attr("stroke",Be.color).attr("stroke-width",1),z.selectAll(".venn-value-annotations .annotation .connector .connector-end").attr("fill",Be.color).attr("stroke",Be.color),z.selectAll(".venn-value-annotations .annotation .note .note-line").attr("stroke",Be.color),z.selectAll(".venn-value-annotations .annotation text").attr("fill",ce.annotationText).attr("font-size",ne.annotation).attr("font-weight",700),z.selectAll(".venn-value-annotations .annotation").attr("opacity",0).transition().duration(400).delay(350).attr("opacity",1)}}resolveVennDataset(t,e){return t?.sets?t:Array.isArray(t?.groups)&&(e.groupId?t.groups.find(r=>r.id===e.groupId):t.groups[e.groupIndex??0])||null}computeVennGlobalMax(t){if(!Array.isArray(t?.groups))return 0;let e=0;for(const n of t.groups)if(Array.isArray(n.sets))for(const r of n.sets)Array.isArray(r.sets)&&r.sets.length===1&&(e=Math.max(e,Number(r.size)||0));return e}renderBump(t,e,n){if(!Array.isArray(e)||e.length===0){this.renderUnsupported(t,"bumpデータが空です");return}const r=n.xField||"year",s=n.yField||"rank",o=n.seriesField||"country",a=n.maxRank||5,l=n.title||"順位推移",c=new Set(Array.isArray(n.highlight)?n.highlight:n.highlight?[n.highlight]:[]),u=c.size>0,h=n.xMin!=null?Number(n.xMin):-1/0,f=n.xMax!=null?Number(n.xMax):1/0,d=e.filter(rt=>rt[r]!=null&&Number.isFinite(Number(rt[s]))&&Number(rt[r])>=h&&Number(rt[r])<=f);if(d.length===0){this.renderUnsupported(t,"bumpデータが空です");return}const m=this.createPanelInner(t,l),p=m.width,_=m.height,g=this.resolveAxisUnits(n),y=[...new Set(d.map(rt=>Number(rt[r])))].sort((rt,H)=>rt-H),S=[...new Set(d.map(rt=>String(rt[o])))],v=this.buildPalette(S.length),M=eo().domain(S).range(v),b=this.resolveLineLabelGutter(p),T=32,R=6+g.topInsetExtra,x=24+g.bottomInsetExtra,E=Math.max(80,p-T-b),L=Math.max(80,_-R-x),C=m.group.append("g").attr("transform",`translate(${T}, ${R})`),P=Cv().domain(y.map(String)).range([0,E]).padding(.1),U=Rr().domain([.5,a+.5]).range([0,L]);if(n.gridLines!==!1){const rt=C.append("g").attr("class","grid-lines");for(let H=1;H<=a;H+=1)rt.append("line").attr("x1",0).attr("y1",U(H)).attr("x2",E).attr("y2",U(H)).attr("stroke",ce.axisLine).attr("stroke-opacity",.15).attr("stroke-dasharray","2 4")}const z=kc(P).tickFormat(pi("d")),B=rt=>rt.selectAll("text").attr("fill",ce.axisText).attr("font-size",ne.axis),N=rt=>rt.selectAll("line,path").attr("stroke",ce.axisLine).attr("opacity",.5);C.append("g").attr("transform",`translate(0, ${L})`).call(z).call(B).call(N);const V=zd(U).tickValues(lg(1,a+1)).tickFormat(rt=>`${rt}位`);C.append("g").call(V).call(B).call(N),this.drawAxisUnitLabels(C,E,L,g);const Y=S.map(rt=>{const H=d.filter(W=>String(W[o])===rt).sort((W,it)=>Number(W[r])-Number(it[r]));return{name:rt,values:H}}).filter(rt=>rt.values.length>0),I=ju().x(rt=>P(String(Number(rt[r])))).y(rt=>U(Number(rt[s]))).curve(Qv),tt=C.append("g").attr("class","bump-series");Y.forEach(rt=>{const H=M(rt.name),W=!u||c.has(rt.name),it=W?3.5:1.5,ft=W?.95:.25,ut=W?6:3.5,Ot=W?1:.3,Wt=tt.append("path").datum(rt.values).attr("fill","none").attr("stroke",H).attr("stroke-width",it).attr("stroke-opacity",ft).attr("d",I),St=Wt.node()?.getTotalLength()||0;Wt.attr("stroke-dasharray",`${St} ${St}`).attr("stroke-dashoffset",St).transition().duration(800).ease(di).attr("stroke-dashoffset",0),tt.selectAll(`.bump-point-${this.toSafeCssToken(rt.name)}`).data(rt.values).enter().append("circle").attr("cx",Ut=>P(String(Number(Ut[r])))).attr("cy",Ut=>U(Number(Ut[s]))).attr("r",ut).attr("fill",H).attr("stroke","#fff").attr("stroke-width",W?2:1).attr("opacity",0).transition().delay(600).duration(300).attr("opacity",Ot)});const gt=y[y.length-1],_t=E+10,xt=C.append("g").attr("class","bump-end-labels");Y.forEach(rt=>{const H=rt.values[rt.values.length-1];if(!H||Number(H[r])!==gt)return;const W=U(Number(H[s]));xt.append("text").attr("x",_t).attr("y",W).attr("dominant-baseline","middle").attr("fill",M(rt.name)).attr("font-size",ne.series).attr("font-weight",600).attr("opacity",0).text(rt.name).transition().delay(800).duration(300).attr("opacity",1)}),this.attachBumpTooltip(C,Y,P,U,E,L,r,s,M)}attachBumpTooltip(t,e,n,r,s,o,a,l,c){const u=t.append("rect").attr("width",s).attr("height",o).attr("fill","none").style("pointer-events","all").style("cursor","crosshair"),h=t.append("line").attr("y1",0).attr("y2",o).attr("stroke","#ffffff").attr("stroke-opacity",0).attr("stroke-width",.8).attr("stroke-dasharray","3 3"),f=t.append("g").attr("class","bump-tooltip").attr("opacity",0),d=n.domain();u.on("mousemove",m=>{const[p]=Bc(m);let _=d[0],g=1/0;d.forEach(v=>{const M=Math.abs(n(v)-p);M<g&&(g=M,_=v)});const y=n(_);h.attr("x1",y).attr("x2",y).attr("stroke-opacity",.3),f.selectAll("*").remove(),f.attr("opacity",1);let S=0;e.forEach(v=>{const M=v.values.find(E=>String(Number(E[a]))===_);if(!M)return;const b=r(Number(M[l])),T=c(v.name);f.append("circle").attr("cx",y).attr("cy",b).attr("r",6).attr("fill",T).attr("stroke","#fff").attr("stroke-width",2);const R=y+10,x=12+S*16;f.append("rect").attr("x",R-2).attr("y",x-10).attr("width",90).attr("height",14).attr("rx",3).attr("fill","rgba(255,255,255,0.92)"),f.append("text").attr("x",R).attr("y",x).attr("fill",T).attr("font-size",ne.tooltip).attr("font-weight",500).text(`${v.name}: ${M[l]}位`),S+=1}),f.append("text").attr("x",y).attr("y",o+16).attr("text-anchor","middle").attr("fill",ce.axisText).attr("font-size",ne.tooltip).text(_)}),u.on("mouseleave",()=>{h.attr("stroke-opacity",0),f.attr("opacity",0)})}renderUnsupported(t,e){const n=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);n.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#f3f4f6").attr("fill-opacity",.7).attr("stroke",ce.axisLine).attr("stroke-opacity",.5),n.append("text").attr("x",t.width/2).attr("y",t.height/2).attr("text-anchor","middle").attr("fill",ce.axisText).attr("font-size",12).text(e)}drawEmptyPanel(t){this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`).append("rect").attr("width",t.width).attr("height",t.height).attr("rx",8).attr("fill","#f3f4f6").attr("fill-opacity",.2).attr("stroke",ce.axisLine).attr("stroke-dasharray","4 4").attr("stroke-opacity",.35)}createPanelInner(t,e="",n={}){const r=n.compact===!0,s=e?r?ne.titleCompact+4:ne.title+36:0,o=r?10:14,a=this.root.append("g").attr("transform",`translate(${t.x}, ${t.y})`);a.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","none").attr("stroke",this.getThemePrimary()).attr("stroke-width",1.5).attr("stroke-opacity",.15).attr("filter","url(#panel-glow)"),a.append("rect").attr("width",t.width).attr("height",t.height).attr("rx",10).attr("fill","#f3f4f6").attr("fill-opacity",.63).attr("stroke",ce.axisLine).attr("stroke-opacity",.35),e&&a.append("text").attr("x",o).attr("y",o+3).attr("dominant-baseline","hanging").attr("fill",ce.title).attr("font-size",r?ne.titleCompact:ne.title).attr("font-weight",600).text(e);const l=a.append("g").attr("transform",`translate(${o}, ${o+s})`),c=t.width-o*2,u=t.height-o*2-s;return{group:l,width:c,height:u}}drawBackdrop(){this.root.append("rect").attr("x",0).attr("y",0).attr("width",this.viewBoxWidth||Vu).attr("height",Ga).attr("fill","#ffffff").attr("fill-opacity",.64)}ensureSvg(){if(!this.container||this.svg&&this.svg.node()?.isConnected)return;this.clear();const t=this.container.getBoundingClientRect(),e=t.width&&t.height?t.width/t.height:Vu/Ga;this.viewBoxWidth=Math.round(Ga*e),this.svg=cg(this.container).append("svg").attr("viewBox",`0 0 ${this.viewBoxWidth} ${Ga}`).attr("preserveAspectRatio","xMidYMid meet").attr("aria-label","chart layer"),this.root=this.svg.append("g"),this.defs=this.svg.append("defs");const n=this.defs.append("filter").attr("id","panel-glow").attr("x","-20%").attr("y","-20%").attr("width","140%").attr("height","140%");n.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",3).attr("result","blur"),n.append("feMerge").selectAll("feMergeNode").data(["blur","SourceGraphic"]).enter().append("feMergeNode").attr("in",r=>r)}getThemePrimary(){return getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#66c2a5"}renderStreamgraph(t,e,n){if(!Array.isArray(e)){this.renderUnsupported(t,"streamgraphデータ形式が不正です");return}const r=n.xField||"year",s=n.yField||"value",o=n.seriesField||"series",a=e.filter(H=>Number.isFinite(Number(H[r]))&&Number.isFinite(Number(H[s])));if(a.length===0){this.renderUnsupported(t,"streamgraphデータが空です");return}const l=Ud(a,H=>Number(H[r])),c=Array.isArray(n.xDomain)&&n.xDomain.length===2?[Number(n.xDomain[0]),Number(n.xDomain[1])]:null,u=c&&c.every(Number.isFinite)?[Math.min(...c),Math.max(...c)]:[Number(l[0]),Number(l[1])],h=a.filter(H=>{const W=Number(H[r]);return W>=u[0]&&W<=u[1]});if(h.length===0){this.renderUnsupported(t,"streamgraphデータが空です");return}const f=n.title||"Streamgraph",d=this.createPanelInner(t,f),m=d.width,p=d.height,_=this.resolveAxisUnits(n,{allowY:!1}),g=6+_.topInsetExtra,y=24+_.bottomInsetExtra,S=10,M=Math.max(80,m-S-10),b=Math.max(80,p-g-y),T=d.group.append("g").attr("transform",`translate(${S}, ${g})`),R=[...new Set(h.map(H=>String(H[o])))],x=[...new Set(h.map(H=>Number(H[r])))].sort((H,W)=>H-W),E=x.map(H=>{const W={[r]:H};return R.forEach(it=>{const ft=h.find(ut=>Number(ut[r])===H&&String(ut[o])===it);W[it]=ft?Number(ft[s]):0}),W}),C=iy().keys(R).offset(ry).order(ly)(E),P=Rr().domain(u).range([0,M]),U=[Od(C,H=>Od(H,W=>W[0])),Da(C,H=>Da(H,W=>W[1]))],z=Rr().domain(U).range([b,0]),B=kc(P).ticks(5).tickFormat(pi("d"));T.append("g").attr("transform",`translate(0, ${b})`).call(B).selectAll("text").attr("fill",ce.axisText).attr("font-size",ne.axis),T.select(".domain").attr("stroke",ce.axisLine).attr("opacity",.5),T.selectAll(".tick line").attr("stroke",ce.axisLine).attr("opacity",.5),this.drawAxisUnitLabels(T,M,b,_);const N=this.buildPalette(R.length),V=eo().domain(R).range(N),Y=ep().x(H=>P(H.data[r])).y0(H=>z(H[0])).y1(H=>z(H[1])).curve(ty);T.selectAll(".stream-layer").data(C).enter().append("path").attr("class","stream-layer").attr("d",Y).attr("fill",H=>V(H.key)).attr("fill-opacity",0).attr("stroke","none").transition().duration(800).delay((H,W)=>W*60).ease(di).attr("fill-opacity",.75);const tt=T.append("rect").attr("width",M).attr("height",b).attr("fill","transparent").attr("pointer-events","all"),gt=T.append("line").attr("y1",0).attr("y2",b).attr("stroke","#6b7280").attr("stroke-width",1).attr("stroke-dasharray","3 3").attr("opacity",0),_t=T.append("g").attr("opacity",0);tt.on("mousemove",H=>{const[W]=Bc(H),it=Math.round(P.invert(W)),ft=Math.max(u[0],Math.min(u[1],it)),ut=E.find(Nt=>Nt[r]===ft);if(!ut)return;gt.attr("x1",P(ft)).attr("x2",P(ft)).attr("opacity",.6),_t.selectAll("*").remove();const Ot=R.reduce((Nt,$)=>Nt+(ut[$]||0),0),Wt=[`${ft}年 (合計: ${pi(",")(Ot)})`];R.forEach(Nt=>{ut[Nt]&&Wt.push(`${Nt}: ${pi(",")(ut[Nt])}`)});const St=180,Ut=Wt.length*15+10;let Vt=P(ft)+10;Vt+St>M&&(Vt=P(ft)-St-10),_t.append("rect").attr("x",Vt).attr("y",5).attr("width",St).attr("height",Ut).attr("rx",4).attr("fill","rgba(0,0,0,0.8)"),Wt.forEach((Nt,$)=>{_t.append("text").attr("x",Vt+8).attr("y",20+$*15).attr("fill","#ffffff").attr("font-size",ne.tooltip).text(Nt)}),_t.attr("opacity",1)}).on("mouseleave",()=>{gt.attr("opacity",0),_t.attr("opacity",0)});const xt=x[x.length-1];C.map(H=>{const W=H.find(ft=>ft.data[r]===xt);if(!W)return null;const it=(z(W[0])+z(W[1]))/2;return{key:H.key,y:it}}).filter(Boolean).forEach(H=>{T.append("text").attr("x",M+4).attr("y",H.y).attr("dominant-baseline","central").attr("fill",V(H.key)).attr("font-size",ne.series).attr("font-weight",500).attr("opacity",0).text(H.key).transition().duration(400).delay(800).attr("opacity",1)}),this.renderLineAnnotations(T,P,z,M,b,n.annotations)}buildPalette(t){const e=["#5fb3ff","#f59e0b","#34d399","#f87171","#a78bfa","#2dd4bf","#f472b6","#60a5fa","#fbbf24","#4ade80"];return t<=e.length?e.slice(0,t):Array.from({length:t},(n,r)=>Bv(r/t))}toSafeCssToken(t){return String(t).replaceAll(/[^a-zA-Z0-9_-]/g,"-")}splitProjection(t,e){if(!e)return{actual:t,projected:[],boundary:null};const n=t.findIndex(s=>!!s[e]);if(n<0)return{actual:t,projected:[],boundary:null};if(n===0)return{actual:[],projected:t,boundary:null};const r=t[n-1];return{actual:t.slice(0,n),projected:[r,...t.slice(n)],boundary:r}}resolveLineLabelGutter(t){return t<280?90:t<420?130:210}resolveYAxisLabelGutter(t,e){const n=t.map(l=>Number(l[e])).filter(l=>Number.isFinite(l));if(n.length===0)return 56;const r=Da(n.map(l=>Math.abs(l)))||0,s=[0,r*.25,r*.5,r*.75,r],a=14+(Da(s.map(l=>pi(",")(Math.round(l)).length))||4)*7;return Math.max(56,Math.min(110,a))}clear(){this.container&&(this.container.innerHTML=""),this.svg=null,this.root=null,this.defs=null}destroy(){window.removeEventListener("resize",this.onResize),this.clear()}}class xP{constructor(t){this.config=t,this.elements={},this.svgHosts=null,this.webglLayer=null,this.imageLayer=null,this.mapLayer=null,this.chartLayer=null,this.activeLayer=null,this.activeChartSpanId=null}async init(){this.elements={image:document.getElementById("image-layer"),webgl:document.getElementById("webgl-layer"),svg:document.getElementById("svg-layer")};const t=this.elements.webgl;t&&(this.webglLayer=new gA(t),this.webglLayer.init(),t.classList.add("active"),this.activeLayer="webgl"),this.elements.image&&(this.imageLayer=new _A(this.elements.image)),this.elements.svg&&(this.svgHosts=this.createSvgHosts(this.elements.svg),this.mapLayer=new wA(this.svgHosts.map),this.chartLayer=new _P(this.svgHosts.chart))}createSvgHosts(t){t.innerHTML="";const e=document.createElement("div");e.className="svg-sub-layer",e.dataset.layer="map";const n=document.createElement("div");return n.className="svg-sub-layer",n.dataset.layer="chart",t.appendChild(e),t.appendChild(n),{map:e,chart:n}}transition(t,e){const n=this.resolveActiveLayer(t);if(this.activeLayer&&this.activeLayer!==n){const r=this.elements[this.activeLayer];r&&(r.classList.remove("active"),r.classList.remove("clip-enter")),this.activeLayer==="image"&&this.imageLayer?.hide(),this.activeLayer==="svg"&&(this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null)}if(n&&this.elements[n]){const r=this.elements[n];r.classList.add("active"),this.activeLayer&&this.activeLayer!==n&&(r.classList.remove("clip-enter"),r.offsetWidth,r.classList.add("clip-enter"))}if(n==="image"&&t.image&&this.imageLayer?.show(t.image),n==="svg")if(t.map?.visible)this.chartLayer?.clear(),this.activeChartSpanId=null,this.mapLayer?.render(t.map);else if(t.chart?.visible){this.mapLayer?.clear();const r=this.resolveChartSpanId(t.chart),o=this.shouldContinueChartFromPrevious(t.chart)&&r&&this.activeChartSpanId===r;this.chartLayer?.render(t.chart,{transitionFromPrevious:!!o,spanId:r,textPosition:t.text?.visible?t.text.position:null}).catch(a=>{console.error("Chart render failed:",a)}),this.activeChartSpanId=r}else this.mapLayer?.clear(),this.chartLayer?.clear(),this.activeChartSpanId=null;this.activeLayer=n}resolveActiveLayer(t){return t.chart?.visible||t.map?.visible?"svg":t.image?.visible?"image":"webgl"}resolveChartSpanId(t){const e=t?.span?.id;if(e==null)return null;const n=String(e).trim();return n.length>0?n:null}shouldContinueChartFromPrevious(t){return!!t?.span?.continueFromPrevious}updateProgress(t){this.webglLayer?.setProgress(t)}setThemeColor(t){this.webglLayer?.setThemeColor(t)}destroy(){this.chartLayer?.destroy(),this.mapLayer?.destroy(),this.webglLayer?.destroy()}}class vP{constructor(t){this.config=t,this.container=document.getElementById("scroll-content"),this.stepElements=[]}render(){this.config.steps.forEach((t,e)=>{const n=this.createStepElement(t,e);this.container.appendChild(n),this.stepElements.push(n)})}createStepElement(t,e){const n=document.createElement("section");if(n.className="step",n.dataset.step=e,n.id=t.id,t.scrollHeight&&(n.style.minHeight=t.scrollHeight),t.id&&t.id.endsWith("-hero")&&n.classList.add("hero-step"),t.fixedClosing)return n.classList.add("fixed-closing-step"),n.appendChild(this.createFixedClosingElement()),n;if(t.text?.content){const s=document.createElement("div");s.className="text-card",s.innerHTML=t.text.content;const o=t.chart?.charts?.map(c=>c.config?.source).filter(Boolean)||[],a=t.source?Array.isArray(t.source)?t.source:[t.source]:[],l=[...o,...a];if(l.length>0){const c=document.createElement("div");c.className="chart-source",l.forEach(u=>{const h=document.createElement("span");if(h.textContent="出典: ",c.appendChild(h),u.url){const f=document.createElement("a");f.href=u.url,f.target="_blank",f.rel="noopener noreferrer",f.textContent=u.name||u.url,c.appendChild(f)}else h.textContent+=u.name||""}),s.appendChild(c)}this.applySplitText(s),this.applyPosition(s,t.text.position),n.appendChild(s)}return n}applySplitText(t){t.querySelectorAll("h2").forEach(n=>{const r=n.textContent;if(!r.trim())return;const s=n.getAttribute("style")||"",o=r.length>20?this.splitIntoLines(r):[r];n.innerHTML="",s&&n.setAttribute("style",s),o.forEach((a,l)=>{const c=document.createElement("span");c.className="split-line";const u=document.createElement("span");u.className="split-line-inner",u.textContent=a,u.style.transitionDelay=`${l*.08}s`,c.appendChild(u),n.appendChild(c)})})}splitIntoLines(t){const e=t.split(new RegExp("(?<=[。、！？〜～ ―])"));if(e.length>=2)return e.filter(r=>r.trim().length>0);const n=Math.ceil(t.length/2);return[t.slice(0,n),t.slice(n)]}applyPosition(t,e){e&&(e.width&&(t.style.maxWidth=e.width),t.dataset.hAlign=e.horizontal||"center",t.dataset.vAlign=e.vertical||"center")}activateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");if(n){n.classList.add("visible");const r=n.dataset.hAlign||"center",s=n.dataset.vAlign||"center",o={left:"flex-start",center:"center",right:"flex-end"},a={top:"flex-start",center:"center",bottom:"flex-end"};e.style.justifyContent=o[r]||"center",e.style.alignItems=a[s]||"center"}}deactivateStep(t){const e=this.stepElements[t];if(!e)return;const n=e.querySelector(".text-card");n&&n.classList.remove("visible")}createFixedClosingElement(){const t=document.createElement("div");return t.className="fixed-closing-inner",t.innerHTML=`
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
    `,t}}class yP{constructor(t,e="aids"){this.container=t,this.currentDiseaseId=e}render(){const t=Id[this.currentDiseaseId];this.container.innerHTML=`
      <div class="nav-inner">
        <div class="nav-logo">
          <a href="/prj-jcie/" class="nav-logo-text">データで見る感染症との闘い</a>
        </div>
        <ul class="nav-links">
          ${Object.values(Id).map(e=>{const n=e.id===this.currentDiseaseId;return`
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
    `,document.documentElement.style.setProperty("--theme-primary",t.primary),document.documentElement.style.setProperty("--theme-secondary",t.secondary),document.documentElement.style.setProperty("--theme-accent",t.accent)}}class SP{constructor(){this.config=null,this.scrollController=null,this.layerOrchestrator=null,this.contentRenderer=null}async init(){try{const t=document.body.dataset.disease;if(!t){console.error("data-disease attribute not found on <body>");return}new yP(document.getElementById("header-nav"),t).render();const n=new cy(t);this.config=await n.load(),this.contentRenderer=new vP(this.config),this.contentRenderer.render(),this.layerOrchestrator=new xP(this.config),await this.layerOrchestrator.init(),this.scrollController=new nM({onStepEnter:(r,s)=>this.handleStepEnter(r,s),onStepLeave:(r,s)=>this.handleStepLeave(r,s),onProgress:r=>this.handleProgress(r)}),this.scrollController.init()}catch(t){console.error("DiseaseApp initialization failed:",t)}}handleStepEnter(t,e){const n=this.config.steps[t];n&&(this.contentRenderer.activateStep(t),this.layerOrchestrator.transition(n,e),document.body.classList.toggle("is-fixed-closing",!!n.fixedClosing))}handleStepLeave(t,e){this.config.steps[t]?.fixedClosing&&document.body.classList.remove("is-fixed-closing"),this.contentRenderer.deactivateStep(t)}handleProgress(t){this.layerOrchestrator.updateProgress(t)}}const MP=new SP;MP.init();
