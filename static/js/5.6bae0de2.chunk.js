/*! For license information please see 5.6bae0de2.chunk.js.LICENSE.txt */
(this["webpackJsonpstaticdeployment-firebase"]=this["webpackJsonpstaticdeployment-firebase"]||[]).push([[5],{34:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,"a",(function(){return n}))},35:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(34);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},i=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(N){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,c=Object.create(o.prototype),i=new L(n||[]);return a(c,"_invoke",{value:x(t,r,i)}),c}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var p={};function d(){}function y(){}function v(){}var b={};f(b,i,(function(){return this}));var m=Object.getPrototypeOf,j=m&&m(m(_([])));j&&j!==e&&r.call(j,i)&&(b=j);var g=v.prototype=d.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(a,c,i,u){var s=h(t[a],t,c);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==Object(n.a)(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(l).then((function(t){f.value=t,i(f)}),(function(t){return o("throw",t,i,u)}))}u(s.arg)}var c;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return c=c?c.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,a(g,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:y,configurable:!0}),y.displayName=f(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},O(w.prototype),f(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(g),f(g,s,"Generator"),f(g,i,(function(){return this})),f(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}},36:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},37:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(34);function o(t){var e=function(t,e){if("object"!==Object(n.a)(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==Object(n.a)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===Object(n.a)(e)?e:String(e)}function a(t,e,r){return(e=o(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},38:function(t,e,r){"use strict";var n=r(37),o=r(35),a=r(36),c=r(40),i=r(0);function u(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(i.useReducer)(u,{status:e?"pending":null,data:null,error:null}),s=Object(c.a)(r,2),f=s[0],l=s[1],h=Object(i.useCallback)(function(){var e=Object(a.a)(Object(o.a)().mark((function e(r){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"SEND"}),e.prev=1,e.next=4,t(r);case 4:n=e.sent,l({type:"SUCCESS",responseData:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.a)({sendRequest:h},f)}},39:function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return p})),r.d(e,"c",(function(){return y}));var n=r(35),o=r(37),a=r(36),c="https://react-http-179ce-default-rtdb.firebaseio.com";function i(){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(Object(n.a)().mark((function t(){var e,r,a,i,u;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(r=t.sent,e.ok){t.next=8;break}throw new Error(r.message||"Could not fetch quotes.");case 8:for(i in a=[],r)u=Object(o.a)({id:i},r[i]),a.push(u);return t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(Object(n.a)().mark((function t(e){var r,a,i;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/quotes/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,r.ok){t.next=8;break}throw new Error(a.message||"Could not fetch quote.");case 8:return i=Object(o.a)({id:e},a),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:o.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return v.apply(this,arguments)}function v(){return(v=Object(a.a)(Object(n.a)().mark((function t(e){var r,a,i,u,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/comments/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,r.ok){t.next=8;break}throw new Error(a.message||"Could not get comments.");case 8:for(u in i=[],a)s=Object(o.a)({id:u},a[u]),i.push(s);return t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},40:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,c,i=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);u=!0);}catch(f){s=!0,o=f}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},41:function(t,e,r){t.exports={card:"Card_card__3yk3U"}},42:function(t,e,r){t.exports={form:"QuoteForm_form__2GVYi",loading:"QuoteForm_loading__3Jx5P",control:"QuoteForm_control__BVs8O",actions:"QuoteForm_actions__2YEU9"}},54:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(2),a=r(40),c=r(41),i=r.n(c),u=r(1),s=function(t){return Object(u.jsx)("div",{className:i.a.card,children:t.children})},f=r(13),l=r(42),h=r.n(l),p=function(t){var e=Object(n.useState)(!1),r=Object(a.a)(e,2),c=r[0],i=r[1],l=Object(n.useRef)(),p=Object(n.useRef)();return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(o.a,{when:c,message:function(t){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(s,{children:Object(u.jsxs)("form",{onFocus:function(){i(!0)},className:h.a.form,onSubmit:function(e){e.preventDefault();var r=l.current.value,n=p.current.value;t.onAddQuote({author:r,text:n})},children:[t.isLoading&&Object(u.jsx)("div",{className:h.a.loading,children:Object(u.jsx)(f.a,{})}),Object(u.jsxs)("div",{className:h.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:l})]}),Object(u.jsxs)("div",{className:h.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:p})]}),Object(u.jsx)("div",{className:h.a.actions,children:Object(u.jsx)("button",{onClick:function(){i(!1)},className:"btn",children:"Add Quote"})})]})})]})},d=r(38),y=r(39);e.default=function(){var t=Object(d.a)(y.b),e=t.sendRequest,r=t.status,a=Object(o.h)();Object(n.useEffect)((function(){"completed"===r&&a.push("/quotes")}),[r,a]);return Object(u.jsx)(p,{isLoading:"pending"===r,onAddQuote:function(t){e(t)}})}}}]);
//# sourceMappingURL=5.6bae0de2.chunk.js.map