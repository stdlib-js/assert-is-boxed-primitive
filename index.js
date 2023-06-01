// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,c=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var f,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((a="value"in l)&&(u.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=f):t[e]=l.value),y="get"in l,p="set"in l,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,l.get),p&&i&&i.call(t,e,l.set),t};function f(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function a(t){return"boolean"==typeof t}function y(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var p=y();function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,m=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",_=b()?function(t){var e,r,n,o,i;if(null==t)return s.call(t);r=t[j],i=j,e=null!=(o=t)&&m.call(o,i);try{t[j]=void 0}catch(e){return s.call(t)}return n=s.call(t),e?t[j]=r:delete t[j],n}:function(t){return s.call(t)},v=Boolean.prototype.toString,d=b();function g(t){return"object"==typeof t&&(t instanceof Boolean||(d?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function S(t){return a(t)||g(t)}function O(t){return"number"==typeof t}f(S,"isPrimitive",a),f(S,"isObject",g);var h=Number,P=h.prototype.toString,w=b();function T(t){return"object"==typeof t&&(t instanceof h||(w?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function x(t){return O(t)||T(t)}function B(t){return"string"==typeof t}f(x,"isPrimitive",O),f(x,"isObject",T);var E=String.prototype.valueOf,k=b();function A(t){return"object"==typeof t&&(t instanceof String||(k?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function G(t){return B(t)||A(t)}function N(t){return"symbol"==typeof t}f(G,"isPrimitive",B),f(G,"isObject",A);var V=/^Symbol\(.*\)$/;function C(t){try{return"symbol"==typeof t.valueOf()&&V.test(function(t){return Symbol.prototype.toString.call(t)}(t))}catch(t){return!1}}function F(t){return"object"==typeof t&&"[object Symbol]"===_(t)&&C(t)}function $(t){return N(t)||F(t)}function q(t){return function(){return t}}f($,"isPrimitive",N),f($,"isObject",F);var z,D=q(!1),H=q(!1),I=q(!1);f(D,"isPrimitive",H),f(D,"isObject",I),z=y()?$:D;const{isObject:J}=z;return function(t){return"object"==typeof t&&(g(t)||T(t)||A(t)||J(t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isBoxedPrimitive=e();
//# sourceMappingURL=index.js.map
