!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EXMS=e():t.EXMS=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=31)}([function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){function r(){g===h&&(g=h.slice())}function i(){return v}function f(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return r(),g.push(t),function(){if(e){e=!1,r();var n=g.indexOf(t);g.splice(n,1)}}}function l(t){if(!(0,c.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,v=b(v,t)}finally{m=!1}for(var e=h=g,n=0;n<e.length;n++)e[n]();return t}function d(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");b=t,l({type:s.INIT})}function p(){var t,e=f;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!==("undefined"==typeof t?"undefined":u(t)))throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[a.default]=function(){return this},t}var y;if("function"==typeof e&&"undefined"==typeof n&&(n=e,e=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var b=t,v=e,h=[],g=h,m=!1;return l({type:s.INIT}),y={dispatch:l,subscribe:f,getState:i,replaceReducer:d},y[a.default]=p,y}Object.defineProperty(e,"__esModule",{value:!0}),e.ActionTypes=void 0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=o;var i=n(5),c=r(i),f=n(23),a=r(f),s=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(1),u=r(o),i=n(14),c=r(i),f=n(13),a=r(f),s=n(12),l=r(s),d=n(0),p=r(d),y=n(3);r(y);e.createStore=u.default,e.combineReducers=c.default,e.bindActionCreators=a.default,e.applyMiddleware=l.default,e.compose=p.default},function(t,e,n){"use strict";function r(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),u=r(o),i=u.default.Symbol;e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(!(0,s.default)(t)||(0,i.default)(t)!=l)return!1;var e=(0,f.default)(t);if(null===e)return!0;var n=b.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&y.call(n)==v}Object.defineProperty(e,"__esModule",{value:!0});var u=n(15),i=r(u),c=n(17),f=r(c),a=n(22),s=r(a),l="[object Object]",d=Function.prototype,p=Object.prototype,y=d.toString,b=p.hasOwnProperty,v=y.call(Object);e.default=o},function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(11),c=r(i),f=(0,c.default)(),a=Object.assign({},f),s=function(){function t(){o(this,t)}return u(t,[{key:"on",value:function(t,e){f.on(t,e)}},{key:"off",value:function(t,e){f.off(t,e)}},{key:"emit",value:function(t,e){f.emit(t,e)}},{key:"trigger",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];this.emit(e)}}]),t}();t.exports={API:s,emitterAPI:a}},function(t,e,n){"use strict";var r=n(30),o=r.getQueryVariable,u=o("debug")||o("debugger"),i=u?console:function(){},c=u?console.log:function(){};t.exports={logger:i,log:c,debugMode:u}},function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};(function(){var u=function(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,o){return e.apply(this,arguments)};case 5:return function(t,n,r,o,u){return e.apply(this,arguments)};case 6:return function(t,n,r,o,u,i){return e.apply(this,arguments)};case 7:return function(t,n,r,o,u,i,c){return e.apply(this,arguments)};case 8:return function(t,n,r,o,u,i,c,f){return e.apply(this,arguments)};case 9:return function(t,n,r,o,u,i,c,f,a){return e.apply(this,arguments)};case 10:return function(t,n,r,o,u,i,c,f,a,s){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}},i=function(t){return{"@@transducer/value":t,"@@transducer/reduced":!0}},c=function(t,e){return Object.prototype.hasOwnProperty.call(e,t)},f=function(){var t=Object.prototype.toString;return"[object Arguments]"===t.call(arguments)?function(e){return"[object Arguments]"===t.call(e)}:function(t){return c("callee",t)}}(),a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)},s=function(t){return null!=t&&"object"===("undefined"==typeof t?"undefined":o(t))&&t["@@functional/placeholder"]===!0},l=function(t){return"[object String]"===Object.prototype.toString.call(t)},d=function(t){return"function"==typeof t["@@transducer/step"]},p=function(t,e){for(var n=0,r=e.length,o=Array(r);n<r;)o[n]=t(e[n]),n+=1;return o},y=function(t,e){return function(){return e.call(this,t.apply(this,arguments))}},b={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}},v=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},function(e){return new t(e)}}(),h=function(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return a(r)||"function"!=typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}},g=function(t){return function e(n){return 0===arguments.length||s(n)?e:t.apply(this,arguments)}},m=function(t){return function e(n,r){switch(arguments.length){case 0:return e;case 1:return s(n)?e:g(function(e){return t(n,e)});default:return s(n)&&s(r)?e:s(n)?g(function(e){return t(e,r)}):s(r)?g(function(e){return t(n,e)}):t(n,r)}}},j=function(t){return function e(n,r,o){switch(arguments.length){case 0:return e;case 1:return s(n)?e:m(function(e,r){return t(n,e,r)});case 2:return s(n)&&s(r)?e:s(n)?m(function(e,n){return t(e,r,n)}):s(r)?m(function(e,r){return t(n,e,r)}):g(function(e){return t(n,r,e)});default:return s(n)&&s(r)&&s(o)?e:s(n)&&s(r)?m(function(e,n){return t(e,n,o)}):s(n)&&s(o)?m(function(e,n){return t(e,r,n)}):s(r)&&s(o)?m(function(e,r){return t(n,e,r)}):s(n)?g(function(e){return t(e,r,o)}):s(r)?g(function(e){return t(n,e,o)}):s(o)?g(function(e){return t(n,r,e)}):t(n,r,o)}}},S=function t(e,n,r){return function(){for(var o=[],i=0,c=e,f=0;f<n.length||i<arguments.length;){var a;f<n.length&&(!s(n[f])||i>=arguments.length)?a=n[f]:(a=arguments[i],i+=1),o[f]=a,s(a)||(c-=1),f+=1}return c<=0?r.apply(this,o):u(c,t(e,o,r))}},w=function(t,e,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),o=r.pop();if(!a(o)){for(var u=0;u<t.length;){if("function"==typeof o[t[u]])return o[t[u]].apply(o,r);u+=1}if(d(o)){var i=e.apply(null,r);return i(o)}}return n.apply(this,arguments)}},O=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=b.init,t.prototype["@@transducer/result"]=b.result,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},m(function(e,n){return new t(e,n)})}(),_=g(function(t){return function(){return t}}),E=j(function(t,e,n){var r={};for(var o in n)r[o]=n[o];return r[t]=e,r}),M=m(function(t,e){return u(t.length,function(){return t.apply(e,arguments)})}),x=m(function(t,e){return 1===t?g(e):u(t,S(t,[],e))}),P=g(function(t){return!!a(t)||!!t&&("object"===("undefined"==typeof t?"undefined":o(t))&&(!l(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),A=function(){var t=!{toString:null}.propertyIsEnumerable("toString"),e=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],n=function(){return arguments.propertyIsEnumerable("length")}(),r=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1};return g("function"!=typeof Object.keys||n?function(o){if(Object(o)!==o)return[];var u,i,a=[],s=n&&f(o);for(u in o)!c(u,o)||s&&"length"===u||(a[a.length]=u);if(t)for(i=e.length-1;i>=0;)u=e[i],c(u,o)&&!r(a,u)&&(a[a.length]=u),i-=1;return a}:function(t){return Object(t)!==t?[]:Object.keys(t)})}(),I=function(){var t=function t(e){return{value:e,map:function(n){return t(n(e))}}};return j(function(e,n,r){return e(function(e){return t(n(e))})(r).value})}(),k=m(function(t,e){return e[t]}),T=g(function(t){return l(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}),R=j(function(t,e,n){return I(t,_(e),n)}),C=j(h("slice",function(t,e,n){return Array.prototype.slice.call(n,t,e)})),N=g(h("tail",C(1,1/0))),D=j(function(t,e,n){return t(n)?e(n):n}),F=function(t){return function e(n){for(var r,o,u,i=[],c=0,f=n.length;c<f;){if(P(n[c]))for(r=t?e(n[c]):n[c],u=0,o=r.length;u<o;)i[i.length]=r[u],u+=1;else i[i.length]=n[c];c+=1}return i}},G=function(){function t(t,e,n){for(var r=0,o=n.length;r<o;){if(e=t["@@transducer/step"](e,n[r]),e&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}function e(t,e,n){for(var r=n.next();!r.done;){if(e=t["@@transducer/step"](e,r.value),e&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function n(t,e,n){return t["@@transducer/result"](n.reduce(M(t["@@transducer/step"],t),e))}var r="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";return function(o,u,i){if("function"==typeof o&&(o=v(o)),P(i))return t(o,u,i);if("function"==typeof i.reduce)return n(o,u,i);if(null!=i[r])return e(o,u,i[r]());if("function"==typeof i.next)return e(o,u,i);throw new TypeError("reduce: list must be array or iterable")}}(),V=g(function(t){return x(t.length,t)}),X=m(w(["map"],O,function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return x(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return G(function(n,r){return n[r]=t(e[r]),n},{},A(e));default:return p(t,e)}})),L=j(G),q=function(){var t=function(t){return{"@@transducer/init":b.init,"@@transducer/result":function(e){return t["@@transducer/result"](e)},"@@transducer/step":function(e,n){var r=t["@@transducer/step"](e,n);return r["@@transducer/reduced"]?i(r):r}}};return function(e){var n=t(e);return{"@@transducer/init":b.init,"@@transducer/result":function(t){return n["@@transducer/result"](t)},"@@transducer/step":function(t,e){return P(e)?G(n,t,e):G(n,t,[e])}}}}(),K=m(function(t,e){return X(t,q(e))}),U=m(w(["chain"],K,function(t,e){return"function"==typeof e?function(n){return t(e(n))(n)}:F(!1)(X(t,e))})),H=m(function(t,e){return function(n){return function(r){return X(function(t){return e(t,r)},n(t(r)))}}}),Q=g(function(t){return H(k(t),E(t))}),W=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return u(arguments[0].length,L(y,arguments[0],N(arguments)))},z=function(){if(0===arguments.length)throw new Error("compose requires at least one argument");return W.apply(this,T(arguments))},B={chain:U,compose:z,curry:V,lens:H,lensProp:Q,pipe:W,set:R,when:D};"object"===o(e)?t.exports=B:(r=function(){return B}.call(e,n,e,t),!(void 0!==r&&(t.exports=r)))}).call(void 0)},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(9),u=n(28),i=n(29),c=i.stackState,f=i.stackFunctions,a=n(27),s=n(7),l=s.emitterAPI,d=n(8),p=d.logger,y=d.log,b=d.debugMode;window.R=o;var v={globalConfig:new u({debugger:b,initCompleted:!1,moduleSelector:"[data-module]"}),get stacks(){return c&&c.stack||{}},set stacks(t){c.stack=t},get config(){return this.globalConfig.config},set config(t){this.globalConfig.set(t)},init:function(t){this.globalConfig.set(t)},logger:p,getElements:function(){return document.querySelectorAll(this.config.moduleSelector)},getModuleName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.replace(/[\[\]]/g,"");return t?t&&t.attributes&&t.attributes[n]&&t.attributes[n].value:t},getModule:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(this.stacks.modules||[]).reduce(function(e,n){return n.name===t&&n||e})},addService:f.addToStack("services"),addModule:f.addToStack("modules"),getService:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this.stacks.services.reduce(function(t,n){return n.name===e&&n||t}),o=void 0;if(n){var u=function(){if("api"in n)return y("Got ",n.name," already"),{v:n.api};var e=n.name,r=t.stacks.serviceInit;if(r.length>5)return y("too deep"),{v:void 0};var u=r.some(function(t){return t.name===e});return u?(y("Found a circular ref!",e),{v:void 0}):(y("No circular refs",e),t.stacks={type:"serviceInitAdd",name:e},o=n.fn(t),t.stacks={type:"serviceInitDone",name:e},y(t.stacks.serviceInit),Object.assign(n,{api:o,type:"services"}),{v:o})}();if("object"===("undefined"==typeof u?"undefined":r(u)))return u.v}},asSubModule:function(){},startModules:function(){var t=this;if(this.config.initCompleted)return void y("Global Init already done - exit!");var e=this.getElements();e.forEach(function(e){var n=t.getModuleName(e,t.config.moduleSelector);if(n){var r=t.getModule(n),o=new a(e,t);r&&r.fn&&r.fn(o)}}),this.config={initCompleted:!0}}};Object.assign(v,l),t.exports=v},function(t,e,n){"use strict";function r(t){function e(e){var n=e.toLowerCase();return t[n]||(t[n]=[])}return t=t||{},{on:function(t,n){e(t).push(n)},off:function(t,n){var r=e(t),o=r.indexOf(n);~o&&r.splice(o,1)},emit:function(t,n){e("*").concat(e(t)).forEach(function(t){t(n)})}}}t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var u=t(n,r,o),f=u.dispatch,a=[],s={getState:u.getState,dispatch:function(t){return f(t)}};return a=e.map(function(t){return t(s)}),f=i.default.apply(void 0,a)(u.dispatch),c({},u,{dispatch:f})}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var u=n(0),i=r(u),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";function r(t,e){return function(){return e(t.apply(void 0,arguments))}}function o(t,e){if("function"==typeof t)return r(t,e);if("object"!==("undefined"==typeof t?"undefined":u(t))||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":"undefined"==typeof t?"undefined":u(t))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),o={},i=0;i<n.length;i++){var c=n[i],f=t[c];"function"==typeof f&&(o[c]=r(f,e))}return o}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function u(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function i(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];"function"==typeof t[i]&&(n[i]=t[i])}var c,f=Object.keys(n);try{u(n)}catch(t){c=t}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(c)throw c;for(var r=!1,u={},i=0;i<f.length;i++){var a=f[i],s=n[a],l=t[a],d=s(l,e);if("undefined"==typeof d){var p=o(a,e);throw new Error(p)}u[a]=d,r=r||d!==l}return r?u:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var c=n(1),f=n(5),a=(r(f),n(3));r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return null==t?void 0===t?d:l:p&&p in Object(t)?(0,f.default)(t):(0,s.default)(t)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(4),i=r(u),c=n(18),f=r(c),a=n(19),s=r(a),l="[object Null]",d="[object Undefined]",p=i.default?i.default.toStringTag:void 0;e.default=o},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="object"==("undefined"==typeof t?"undefined":n(t))&&t&&t.Object===Object&&t;e.default=r}).call(e,n(6))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),u=r(o),i=(0,u.default)(Object.getPrototypeOf,Object);e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=f.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[s]=n:delete t[s]),o}Object.defineProperty(e,"__esModule",{value:!0});var u=n(4),i=r(u),c=Object.prototype,f=c.hasOwnProperty,a=c.toString,s=i.default?i.default.toStringTag:void 0;e.default=o},function(t,e,n){"use strict";function r(t){return u.call(t)}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.prototype,u=o.toString;e.default=r},function(t,e,n){"use strict";function r(t,e){return function(n){return t(e(n))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=n(16),i=r(u),c="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,f=i.default||c||Function("return this")();e.default=f},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==("undefined"==typeof t?"undefined":o(t))}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=r},function(t,e,n){"use strict";t.exports=n(24)},function(t,e,n){"use strict";(function(t,r){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u,i=n(25),c=o(i);u="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof t?t:r;var f=(0,c.default)(u);e.default=f}).call(e,n(6),n(26)(t))},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(7),f=c.API,a=(c.methods,n(8)),s=(a.logger,a.debugMode,function(t){function e(t,n){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.el=u.elem=t,u.status="created",u.getService=n.getService.bind(n),u.getSubModule=n.asSubModule.bind(n),u}return u(e,t),i(e,[{key:"destroy",value:function(){this.el=null,this.status=null}}]),e}(f));t.exports=s},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case"SET_VAL":return Object.assign({},t,e.value);default:return t}}function o(){function t(t){u.store.dispatch({type:"SET_VAL",value:t})}function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=u.store.getState();return t?e[t]:e}function n(t){return this.unsubscribe=u.store.subscribe(t)}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1],u=this;return this.store=i(f),t(r),o&&n(o),{get:e,set:t,setHandler:n,get config(){return this.get("config")}}}var u=n(2),i=u.createStore,c=u.combineReducers,f=c({config:r});t.exports=o},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e,n,r){var o="REGISTER";switch(n){case"serviceInitDone":console.log("Removing Service",t),o="REMOVE_FROM_SVC_STACK",n="serviceInit";break;case"serviceInitAdd":console.log("adding service",t),o="REGISTER",n="serviceInit";break;case"services":o="undefined"==typeof r?"REGISTER":"ADD_API"}return{type:o,itemType:n,name:t,fn:e}}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case"REGISTER":return{name:e.name,fn:e.fn,itemType:e.itemType};case"ADD_API":return Object.assign({},t,{api:e.api});default:return t}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{services:[],serviceInit:[],modules:[],moduleRefs:[],plugins:[]},e=arguments[1],n=e.itemType,o=e.type,i=e.name,c={};if(!n)return t;switch(o){case"REMOVE_FROM_SVC_STACK":return c.serviceInit=(t.serviceInit||[]).filter(function(t){return t.name!==i}),Object.assign({},t,c);case"ADD_API":return console.log("running map"),c[n]=[(t[n]||[]).map(function(t){return t.name===i?u(t,e):t})],Object.assign({},t,c);case"REGISTER":return c[n]=[].concat(r(t[n]||[]),[u(void 0,e)]),Object.assign({},t,c);default:return t}}function c(t){var e=t.name,n=t.fn,r=t.type,u=t.api;b.dispatch(o(e,n,r,u))}function f(t,e,n){v.stack={type:t,name:e,fn:n}}function a(){return p.curry(f)}var s=n(2),l=s.createStore,d=s.combineReducers,p=n(9),y=d({stack:i}),b=l(y),v={unsubscribe:{},handleSubscribe:function(t){this.unsubscribe=b.subscribe(t)},set stack(t){c(t||{})},get stack(){var t=b.getState()||{},e=t.stack;return e}};t.exports={stackState:v,stackFunctions:{updateStack:f,addToStack:a}}},function(t,e,n){"use strict";function r(t){for(var e=window.location.search.substring(1),n=e.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");if(o[0]==t)return o[1]}return!1}t.exports={getQueryVariable:r}},function(t,e,n){"use strict";var r=n(10),o=void 0,u=Object.assign(r,{noConflict:function(){return window.EXMS=o,this}});window.EXMS&&(o=window.EXMS),t.exports=u}])});