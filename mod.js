// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,c=r.__lookupGetter__,u=r.__lookupSetter__;var a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var l,f,y,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(c.call(t,e)||u.call(t,e)?(l=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=l):t[e]=a.value),y="get"in a,b="set"in a,f&&(y||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,a.get),b&&i&&i.call(t,e,a.set),t};function l(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"boolean"==typeof t}function y(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var b=y();function p(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=p()?function(t){var e,r,n,o,i;if(null==t)return s.call(t);r=t[m],i=m,e=null!=(o=t)&&v.call(o,i);try{t[m]=void 0}catch(e){return s.call(t)}return n=s.call(t),e?t[m]=r:delete t[m],n}:function(t){return s.call(t)},j=Boolean.prototype.toString;var g=p();function S(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function d(t){return f(t)||S(t)}function O(t){return"number"==typeof t}l(d,"isPrimitive",f),l(d,"isObject",S);var h=Number,P=h.prototype.toString;var w=p();function T(t){return"object"==typeof t&&(t instanceof h||(w?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function B(t){return O(t)||T(t)}function E(t){return"string"==typeof t}l(B,"isPrimitive",O),l(B,"isObject",T);var k=String.prototype.valueOf;var x=p();function A(t){return"object"==typeof t&&(t instanceof String||(x?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function G(t){return E(t)||A(t)}function N(t){return"symbol"==typeof t}l(G,"isPrimitive",E),l(G,"isObject",A);var V=/^Symbol\(.*\)$/;function C(t){try{return"symbol"==typeof t.valueOf()&&V.test(function(t){return Symbol.prototype.toString.call(t)}(t))}catch(t){return!1}}function F(t){return"object"==typeof t&&"[object Symbol]"===_(t)&&C(t)}function $(t){return N(t)||F(t)}function q(t){return function(){return t}}l($,"isPrimitive",N),l($,"isObject",F);var z,D=q(!1),H=q(!1),I=q(!1);l(D,"isPrimitive",H),l(D,"isObject",I),z=y()?$:D;const{isObject:J}=z;function K(t){return"object"==typeof t&&(S(t)||T(t)||A(t)||J(t))}export{K as default};
//# sourceMappingURL=mod.js.map
