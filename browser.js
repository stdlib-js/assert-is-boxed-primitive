// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,c=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=r,a=function(t,e,r){var f,a,y,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(u.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,b="set"in r,a&&(y||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),b&&c&&c.call(t,e,r.set),t},y=e()?f:a,b=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},p=function(t){return"boolean"==typeof t},s=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")},m=s(),j=function(){return m&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,v=_,d=function(t){return v.call(t)},g=Object.prototype.hasOwnProperty,S=function(t,e){return null!=t&&g.call(t,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",h=S,P=O,w=_,T=d,x=function(t){var e,r,n;if(null==t)return w.call(t);r=t[P],e=h(t,P);try{t[P]=void 0}catch(e){return w.call(t)}return n=w.call(t),e?t[P]=r:delete t[P],n},B=j()?x:T,E=Boolean.prototype.toString,k=B,A=function(t){try{return E.call(t),!0}catch(t){return!1}},G=j(),N=function(t){return"object"==typeof t&&(t instanceof Boolean||(G?A(t):"[object Boolean]"===k(t)))},V=p,C=N,F=b,$=function(t){return V(t)||C(t)},q=N;F($,"isPrimitive",p),F($,"isObject",q);var z=$,D=function(t){return"number"==typeof t},H=Number,I=H.prototype.toString,J=B,K=H,L=function(t){try{return I.call(t),!0}catch(t){return!1}},M=j(),Q=function(t){return"object"==typeof t&&(t instanceof K||(M?L(t):"[object Number]"===J(t)))},R=D,U=Q,W=b,X=function(t){return R(t)||U(t)},Y=Q;W(X,"isPrimitive",D),W(X,"isObject",Y);var Z=X,tt=function(t){return"string"==typeof t},et=String.prototype.valueOf,rt=B,nt=function(t){try{return et.call(t),!0}catch(t){return!1}},ot=j(),it=function(t){return"object"==typeof t&&(t instanceof String||(ot?nt(t):"[object String]"===rt(t)))},ct=tt,ut=it,lt=b,ft=function(t){return ct(t)||ut(t)},at=it;lt(ft,"isPrimitive",tt),lt(ft,"isObject",at);var yt=ft,bt=function(t){return"symbol"==typeof t},pt=function(t){return Symbol.prototype.toString.call(t)},st=/^Symbol\(.*\)$/,mt=B,jt=function(t){try{return"symbol"==typeof t.valueOf()&&st.test(pt(t))}catch(t){return!1}},_t=function(t){return"object"==typeof t&&"[object Symbol]"===mt(t)&&jt(t)},vt=bt,dt=_t,gt=b,St=function(t){return vt(t)||dt(t)},Ot=_t;gt(St,"isPrimitive",bt),gt(St,"isObject",Ot);var ht=St,Pt=b,wt=function(t){return function(){return t}},Tt=wt(!1),xt=wt(!1),Bt=wt(!1);Pt(Tt,"isPrimitive",xt),Pt(Tt,"isObject",Bt);var Et=ht,kt=Tt,At=s()?Et:kt;return function(t){return"object"==typeof t&&(z.isObject(t)||Z.isObject(t)||yt.isObject(t)||At.isObject(t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isBoxedPrimitive=e();
//# sourceMappingURL=browser.js.map
