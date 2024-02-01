// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,m,"$1e"),n=f.call(n,v,"e"),n=f.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,b,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):u.call(n)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+S(n):S(n)+e}var j=String.fromCharCode,k=isNaN,x=Array.isArray;function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,a,o,l,u,p,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,p=0;p<e.length;p++)if(s(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",u+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function T(e){return"string"==typeof e}function F(e){var r,t,n;if(!T(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var A=Object.prototype,I=A.toString,C=A.__defineGetter__,R=A.__defineSetter__,Z=A.__lookupGetter__,G=A.__lookupSetter__;var N=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function W(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"boolean"==typeof e}function L(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var U=L();function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=X()?function(e){var r,t,n,i,a;if(null==e)return z.call(e);t=e[D],a=D,r=null!=(i=e)&&M.call(i,a);try{e[D]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[D]=t:delete e[D],n}:function(e){return z.call(e)},J=Boolean,K=Boolean.prototype.toString;var Q=X();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ee(e){return B(e)||Y(e)}function re(e){return"number"==typeof e}W(ee,"isPrimitive",B),W(ee,"isObject",Y);var te=Number,ne=te.prototype.toString;var ie=X();function ae(e){return"object"==typeof e&&(e instanceof te||(ie?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function oe(e){return re(e)||ae(e)}function ce(e){return"string"==typeof e}W(oe,"isPrimitive",re),W(oe,"isObject",ae);var se=String.prototype.valueOf;var le=X();function ue(e){return"object"==typeof e&&(e instanceof String||(le?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function pe(e){return ce(e)||ue(e)}function fe(e){return"symbol"==typeof e}W(pe,"isPrimitive",ce),W(pe,"isObject",ue);var ge=/^Symbol\(.*\)$/;function be(e){try{return"symbol"==typeof e.valueOf()&&ge.test(function(e){return Symbol.prototype.toString.call(e)}(e))}catch(e){return!1}}function de(e){return"object"==typeof e&&"[object Symbol]"===H(e)&&be(e)}function ye(e){return fe(e)||de(e)}function he(e){return function(){return e}}W(ye,"isPrimitive",fe),W(ye,"isObject",de);var ve,me=he(!1),we=he(!1),Se=he(!1);W(me,"isPrimitive",we),W(me,"isObject",Se),ve=L()?ye:me;const{isObject:_e}=ve;function je(e){return"object"==typeof e&&(Y(e)||ae(e)||ue(e)||_e(e))}export{je as default};
//# sourceMappingURL=mod.js.map
