(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1222:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(3),o=n(2),c=n(5),i=n(102),l=n(4);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,i=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=s(Object(r.useState)(!1),2),n=t[0],u=t[1];return Object(r.createElement)("div",{className:"bwf-c-s-data"},Object(r.createElement)("div",{className:"bwf-c-s-section"},Object(r.createElement)(l.Button,{isPrimary:!0,className:"bwf-btn-small",onClick:function(){return u(!0)}},Object(o.__)("Add Note","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf_clear_30"}),Object(r.createElement)("div",{className:"bwf-notes-wrap"},[{id:1,created_date:"2021-02-03 12:34:01",title:"Note 1",private:1,body:"This is note body 1",created_username:"Admin"},{id:2,created_date:"2021-02-04 12:34:01",title:"Note 2",private:0,body:"This is note body 2",created_username:"Admin"}].map((function(e){var t,n,i,l,s=new Date(e.created_date);return Object(r.createElement)("div",{className:"bwf-note-item",key:e.id},Object(r.createElement)("div",{className:"bwf-note-text"},Object(r.createElement)("div",{className:"bwf-h4"},e.title,1==e.private&&Object(r.createElement)("div",{className:"bwf-note-highlight"},Object(o.__)("Sent to Contact","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-p"},e.body)),Object(r.createElement)("div",{className:"bwf-note-meta"},Object(r.createElement)("span",{className:"bwf-note-added"},!Object(a.isEmpty)(e.created_username)&&Object(r.createElement)(r.Fragment,null,"By"," ",Object(r.createElement)("span",null,e.created_username))," ","on"," ",Object(r.createElement)("span",null,Object(c.M)(e.created_date))," ","at"," ",Object(r.createElement)("span",null,(n=(t=s).getHours(),i=t.getMinutes(),l=n>=12?"PM":"AM",(n=(n%=12)||12)+":"+(i=i<10?"0"+i:i)+" "+l))),Object(r.createElement)("span",{className:"bwf-note-sep"},"|"),Object(r.createElement)("a",{href:"#",onClick:function(e){e.preventDefault(),u(!0)}},Object(o.__)("Edit","wp-marketing-automations")),Object(r.createElement)("span",{className:"bwf-note-sep"},"|"),Object(r.createElement)("a",{href:"#",className:"link-danger",onClick:function(e){e.preventDefault(),u(!0)}},Object(o.__)("Delete","wp-marketing-automations"))))})))),Object(r.createElement)(i.a,{isOpen:n,onRequestClose:function(){return u(!1)}}))}},1259:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(3),o=n(2),c=n(12),i=n.n(c),l=n(4),s=n(9),u=n.n(s),f=n(862),m=n(144);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=["getStateProp"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=function(){var e=Object(m.a)("singleContactNotes"),t=e.getStateProp;return y(y({},g(e,d)),{},{getNotes:function(){return t("notes")},isLoading:function(){return t("isLoading")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getPerPageCount:function(){return parseInt(t("limit"))},getOffset:function(){return parseInt(t("offset"))},getTotalCount:function(){return parseInt(t("total"))},getContactId:function(){return parseInt(t("contactId"))}})},v=n(143),j=n(5);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=["fetch","setStateProp"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===w(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=function(){var e=Object(v.a)("singleContactNotes"),t=e.fetch,n=e.setStateProp;return N(N({},P(e,E)),{},{fetch:function(e,r,a){n("contactId",a),n("isLoading",!0);var o={offset:e,limit:r};t("GET",Object(j.m)("/contacts/".concat(a,"/notes")),o)},setStateValue:function(e,t){n(e,t)}})},x=n(866),C=n(117),L=n(149),T=(n(471),n(8)),I=n(157);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(){D=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,c=Object.create(o.prototype),i=new x(r||[]);return a(c,"_invoke",{value:N(e,n,i)}),c}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var m="suspendedStart",b="executing",d="completed",p={};function y(){}function h(){}function g(){}var O={};s(O,c,(function(){return this}));var v=Object.getPrototypeOf,j=v&&v(v(C([])));j&&j!==n&&r.call(j,c)&&(O=j);var w=g.prototype=y.prototype=Object.create(O);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(a,o,c,i){var l=f(e[a],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==A(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(u).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function N(t,n,r){var a=m;return function(o,c){if(a===b)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw c;return{value:e,done:!0}}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var l=S(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=b;var s=f(t,n,r);if("normal"===s.type){if(a=r.done?d:"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=d,r.method="throw",r.arg=s.arg)}}}function S(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var c=o.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(A(t)+" is not iterable")}return h.prototype=g,a(w,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:h,configurable:!0}),h.displayName=s(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},E(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new _(u(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=C,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var l=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===A(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){G(o,r,a,c,i,"next",e)}function i(e){G(o,r,a,c,i,"throw",e)}c(void 0)}))}}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,i=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=Object(r.useContext)(j.d),n={id:0,cid:0,type:"",created_by:"0",created_date:"0000-00-00 00:00:00",private:0,title:"",body:"",modified_by:null,modified_date:null,date_time:"0000-00-00 00:00:00"},c=e.contactId,s=f.a.getContact(),m=R(Object(r.useState)(!1),2),b=m[0],d=m[1],p=R(Object(r.useState)(!1),2),y=p[0],h=p[1],g=R(Object(r.useState)(n),2),v=g[0],w=g[1],E=R(Object(r.useState)({message:"",type:1}),2),_=E[0],N=E[1],S=[{value:"",label:Object(o.__)("Select Type","wp-marketing-automations")}].concat(Object(j.v)()),P=Object(x.a)().fetchConversations,A=O(),B=k(),M=B.fetch,G=B.setStateValue,Y=A.getNotes(),H=A.isLoading(),J=A.getPerPageCount(),K=A.getPageNumber(),U=A.getTotalCount(),V=A.getContactId(),$=A.getOffset(),z=function(){var e=q(D().mark((function e(n){var r;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={title:n.title,body:n.body,type:n.type,private:n.send,modified_by:Object(j.x)()},Object(a.isEmpty)(n.id)){e.next=14;break}return w(F(F({},v),{},{loading:!0})),e.prev=3,e.next=6,i()({path:Object(j.m)("/contacts/".concat(s.id,"/notes/").concat(n.id)),method:"POST",data:{notes:r},headers:{"Content-Type":"application/json"}}).then((function(e){w(F(F({},v),{},{success:!0,loading:!0,message:e.message})),t(e.message),setTimeout((function(){var e=Y.map((function(e){return e.id==n.id&&(e.title=n.title,e.body=n.body,e.type=n.type,e.private=n.send),e}));G("notes",e),d(!1),w({})}),1e3)})).catch((function(e){throw Error(Object(j.j)(null==e?void 0:e.message))}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),h(e.t0.message),w(F(F({},v),{},{loading:!1}));case 12:e.next=24;break;case 14:return r.created_by=Object(j.x)(),e.prev=15,e.next=18,i()({path:Object(j.m)("/contacts/".concat(s.id,"/notes/")),method:"POST",data:{notes:r},headers:{"Content-Type":"application/json"}}).then((function(e){200==e.code?(w(F(F({},v),{},{success:!0,loading:!0,message:e.message})),t(e.message),setTimeout((function(){d(!1),w({}),M((K-1)*J,J,s.id),P(s.id,0,25)}),1e3)):(w(F(F({},v),{},{error:!0,loading:!0,message:e.message,delete:!0})),t(e.message),setTimeout((function(){d(!1),w({})}),1e3))})).catch((function(e){throw Error(Object(j.j)(null==e?void 0:e.message))}));case 18:e.next=24;break;case 20:e.prev=20,e.t1=e.catch(15),h(e.t1.message),w(F(F({},v),{},{loading:!1}));case 24:Object(j.fb)(t,2e3);case 25:case"end":return e.stop()}}),e,null,[[3,8],[15,20]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=q(D().mark((function e(n){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({path:Object(j.m)("/contacts/".concat(s.id,"/notes/").concat(n,"/")),method:"DELETE"}).then((function(e){t(e.message),setTimeout((function(){d(!1),M((K-1)*J,J,s.id),w({})}),1e3)})).catch((function(e){throw Error(Object(j.j)(null==e?void 0:e.message))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),w(F(F({},v),{},{error:e.t0.message,loading:!1,delete:!0}));case 8:Object(j.fb)(t,2e3);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){(Object(a.isEmpty)(Y)||parseInt(c)!==parseInt(V))&&M($,J,c)}),[$,J]);return Object(r.createElement)("div",{className:"bwf-c-s-data bwf-mb-0"},b&&Object(r.createElement)(l.Modal,{onRequestClose:function(){return d(!1)},shouldCloseOnEsc:!1,shouldCloseOnClickOutside:!1,className:"bwf-admin-modal bwf-message-modal "+(v.loading?"bwf-admin-modal-no-header ":" ")+(v.delete?" bwf-admin-modal-squeezy ":"bwf-admin-modal-large")},Object(r.createElement)("div",{className:"bwf-modal-header"},Object(r.createElement)("div",{className:"bwf-modal-heading"},v.delete?Object(o.__)("Delete Note","wp-marketing-automations"):0==v.id?Object(o.__)("Add Note","wp-marketing-automations"):Object(o.__)("Edit Note","wp-marketing-automations")),Object(r.createElement)("span",{onClick:function(){return d(!1)},className:"bwf-modal-close"},Object(r.createElement)(T.a,{icon:"close",color:"#353030"}))),v.delete?Object(r.createElement)("div",{className:"bwf-form-buttons"},Object(r.createElement)("div",{className:"bwf-h4 bwf-h4-grey",style:{margin:0}},v.error?v.error:Object(r.createElement)(r.Fragment,null,Object(o.__)("You are about to delete ","wp-marketing-automations"),Object(r.createElement)("strong",null,v.entityName),Object(o.__)(". This action cannot be undone. Cancel to stop, Delete to proceed.","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf_clear_24"}),v.error?Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(l.Button,{isPrimary:!0,onClick:function(){w({}),d(!1)}},Object(o.__)("OK","wp-marketing-automations"))):Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(l.Button,{className:"bwf-cancel-btn",onClick:function(){w({}),d(!1)},disabled:v.loading&&v.deleteconfirm},Object(o.__)("Cancel","wp-marketing-automations")),Object(r.createElement)(l.Button,{isPrimary:!0,isBusy:v.loading&&v.deleteconfirm,disabled:v.loading&&v.deleteconfirm,onClick:function(){w(F(F({},v),{},{loading:!0,deleteconfirm:!0,deleteid:v.deleteid,delete:!0})),Q(v.deleteid)}},Object(o.__)("Delete","wp-marketing-automations")))):Object(r.createElement)("div",{className:"bwf-form-fields"},y&&Object(r.createElement)(l.Notice,{status:"error",onRemove:function(){return h(!1)}},y),Object(r.createElement)("div",{className:"bwf-message-wrap"},Object(r.createElement)("div",{className:"bwf-pmb-16 bwf-pt-0 bwf-bb-grey"},Object(r.createElement)("div",{className:"bwf-w-120 bwf_bold"},Object(o.__)("Type","wp-marketing-automations")),Object(r.createElement)(l.SelectControl,{value:v.type,className:"bwf-w-150",options:S,onChange:function(e){return w(F(F({},v),{},{type:e}))},disabled:v.loading})),Object(r.createElement)("div",{className:"bwf-pmb-16 bwf-bb-grey"},Object(r.createElement)("div",{className:"bwf-w-120 bwf_bold"},Object(o.__)("Title","wp-marketing-automations")),Object(r.createElement)(l.TextControl,{type:"text",value:v.title,placeholder:Object(o.__)("Title comes here …","wp-marketing-automations"),onChange:function(e){return w(F(F({},v),{},{title:e}))},disabled:v.loading})),Object(r.createElement)("div",{className:"bwf-message-textarea"},Object(r.createElement)(I.a,{keyid:"bwf-note-editor",content:v.body,setContent:function(e){return w(F(F({},v),{},{body:e}))},height:200})),Object(r.createElement)("div",{className:"bwf-message-footer"},0==parseInt(v.id)?Object(r.createElement)("div",{className:"bwf-note-send"},Object(r.createElement)(l.ToggleControl,{label:Object(o.__)("Send Note to Contact","wp-marketing-automations"),className:"bwf-tooglecontrol-advance",checked:Boolean(parseInt(v.send)),onChange:function(e){return w(F(F({},v),{},{send:e?"1":"0"}))}})):Object(r.createElement)("div",null),Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(l.Button,{className:"bwf-cancel-btn",onClick:function(){return d(!1)}},Object(o.__)("Cancel")),Object(r.createElement)(l.Button,{isPrimary:!0,onClick:function(){Object(a.isEmpty)(v.title)||Object(a.isEmpty)(v.body)||Object(a.isEmpty)(v.type)?h(Object(o.__)("Title, type and body are mandatory field. Kindly fill them.","wp-marketing-automations")):(h(!1),w(F(F({},v),{},{loading:!0})),z(v))},disabled:v.loading,isBusy:v.loading},0==v.id?Object(o.__)("Add","wp-marketing-automations"):Object(o.__)("Save","wp-marketing-automations"))))))),Object(r.createElement)("div",{className:"bwf-c-s-section bwf-mb-0"},Object(r.createElement)(L.a,{message:_.message,type:_.type,removeMessage:function(){return N({message:"",type:1})}}),Object(r.createElement)(l.Button,{isPrimary:!0,className:"bwf-btn-small",onClick:function(){w(n),d(!0)}},Object(o.__)("Add Note","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf_clear_30"}),H?Object(r.createElement)(r.Fragment,null,[0,1,2,3,4,5,6,7,8,9].map((function(e){return Object(r.createElement)("div",{className:"bwf-notes-wrap bwf-placeholder-content",key:e},Object(r.createElement)("div",{className:"bwf-note-item"},Object(r.createElement)("div",{className:"bwf-note-text"},Object(r.createElement)("div",{className:"is-placeholder long",style:{width:"100%"}}),Object(r.createElement)("div",{className:"is-placeholder long",style:{width:"100%"}})),Object(r.createElement)("div",{className:"bwf-note-meta"})))}))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-notes-wrap"},Object(a.isEmpty)(Y)?Object(r.createElement)("div",{className:"bwf-empty-note-item"},Object(o.__)("No Notes Available","wp-marketing-automations")):Y.map((function(e){return Object(r.createElement)("div",{className:"bwf-note-item",key:e.id},Object(r.createElement)("div",{className:"bwf-note-text"},Object(r.createElement)("div",{className:"bwf-h4"},e.title,1==e.private&&Object(r.createElement)("div",{className:"bwf-note-highlight"},Object(o.__)("Sent to Contact","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-p",dangerouslySetInnerHTML:{__html:e.body}})),Object(r.createElement)("div",{className:"bwf-note-meta"},Object(r.createElement)("span",{className:"bwf-note-added"},!Object(a.isEmpty)(e.created_username)&&Object(r.createElement)(r.Fragment,null,"By"," ",Object(r.createElement)("span",null,e.created_username))," ","on"," ",Object(r.createElement)("span",null,Object(j.M)(e.created_date))," ","at"," ",Object(r.createElement)("span",null,u()(e.created_date).format("hh:mm A"))),Object(r.createElement)("span",{className:"bwf-note-sep"},"|"),Object(r.createElement)("a",{href:"#",onClick:function(t){t.preventDefault(),w(e),d(!0)}},Object(o.__)("Edit","wp-marketing-automations")),Object(r.createElement)("span",{className:"bwf-note-sep"},"|"),Object(r.createElement)("a",{href:"#",className:"link-danger",onClick:function(t){t.preventDefault(),w(F(F({},v),{},{loading:!0,delete:!0,deleteid:e.id,entityName:e.title})),d(!0)}},Object(o.__)("Delete","wp-marketing-automations"))))}))),parseInt(U)>0&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf_clear_30"}),Object(r.createElement)(C.a,{page:K,perPage:J,total:U,onPageChange:function(e){G("offset",(e-1)*J),M((e-1)*J,J,c)},onPerPageChange:function(e){e!==J&&(G("limit",e),M($,e,c))}})))))}}}]);