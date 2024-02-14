// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===a.call(e.specifier)?a.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":u(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,m,"$1e"),i=f.call(i,v,"e"),i=f.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,b,"$1."),i=f.call(i,y,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):l.call(i)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var i=r-e.length;return i<0?e:e=t?e+S(i):S(i)+e}var _=String.fromCharCode,x=isNaN,k=Array.isArray;function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,i,o,a,u,l,p,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,p=0;p<e.length;p++)if(s(i=e[p]))u+=i;else{if(r=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,x(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(a)?String(i.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=j(i.arg,i.width,i.padRight)),u+=i.arg||"",l+=1}return u}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,n;for(t=[],n=0,i=P.exec(e);i;)(r=e.slice(n,P.lastIndex-i[0].length)).length&&t.push(r),t.push(T(i)),n=P.lastIndex,i=P.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function $(e){return"string"==typeof e}function F(e){var r,t;if(!$(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var I=Object.prototype,A=I.toString,C=I.__defineGetter__,R=I.__defineSetter__,Z=I.__lookupGetter__,B=I.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,o,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(e,r)||B.call(e,r)?(i=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),o="get"in t,a="set"in t,n&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};function N(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"boolean"==typeof e}function L(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var U=L();function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=X()?function(e){var r,t,i,n,o;if(null==e)return z.call(e);t=e[D],o=D,r=null!=(n=e)&&M.call(n,o);try{e[D]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[D]=t:delete e[D],i}:function(e){return z.call(e)},J=Boolean,K=Boolean.prototype.toString,Q=X();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ee(e){return W(e)||Y(e)}function re(e){return"number"==typeof e}N(ee,"isPrimitive",W),N(ee,"isObject",Y);var te=Number,ie=te.prototype.toString,ne=X();function oe(e){return"object"==typeof e&&(e instanceof te||(ne?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function ae(e){return re(e)||oe(e)}function ce(e){return"string"==typeof e}N(ae,"isPrimitive",re),N(ae,"isObject",oe);var se=String.prototype.valueOf,ue=X();function le(e){return"object"==typeof e&&(e instanceof String||(ue?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function pe(e){return ce(e)||le(e)}function fe(e){return"symbol"==typeof e}N(pe,"isPrimitive",ce),N(pe,"isObject",le);var ge=/^Symbol\(.*\)$/;function de(e){try{return"symbol"==typeof e.valueOf()&&ge.test(function(e){return Symbol.prototype.toString.call(e)}(e))}catch(e){return!1}}function be(e){return"object"==typeof e&&"[object Symbol]"===H(e)&&de(e)}function ye(e){return fe(e)||be(e)}function he(e){return function(){return e}}N(ye,"isPrimitive",fe),N(ye,"isObject",be);var ve,me=he(!1),we=he(!1),Se=he(!1);N(me,"isPrimitive",we),N(me,"isObject",Se),ve=L()?ye:me;const{isObject:je}=ve;return function(e){return"object"==typeof e&&(Y(e)||oe(e)||le(e)||je(e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isBoxedPrimitive=r();
//# sourceMappingURL=index.js.map
