(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1215:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(268),o=n(2),i=n(4),c=n(5),u=n(862),l=n(3),s=n(894),f=n(866),p=n(8);function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,c=[],u=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,a=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(t){var e=t.contactId,n=m(Object(r.useState)({}),2),y=n[0],h=n[1],b=m(Object(r.useState)(!1),2),d=b[0],v=b[1],g=u.a.getContact(),w=u.a.getConversationLimit,j=u.a.getConversations,O=u.a.getConversationOffset,_=u.a.getConversationTotal,E=u.a.getConversationPage,k=u.a.getConversationLoading,L=u.a.getConversationContactId,S=Object(f.a)().fetchConversations,A=j(),x=k(),N=O(),C=_(),I=w(),T=E(),P=L();Object(r.useEffect)((function(){(Object(l.isEmpty)(A)||e!=P)&&S(e,N,I)}),[]);var M=[{key:"subject",label:Object(o.__)("Subject","wp-marketing-automations"),isLeftAligned:!1},{key:"sent_time",label:Object(o.__)("Sent On","wp-marketing-automations"),isLeftAligned:!0},{key:"last_activity",label:Object(o.__)("Last Activity","wp-marketing-automations"),isLeftAligned:!0},{key:"opens",label:Object(o.__)("Opens","wp-marketing-automations"),isLeftAligned:!0},{key:"clicks",label:Object(o.__)("Clicks","wp-marketing-automations"),isLeftAligned:!0},{key:"view",label:"",isLeftAligned:!0,cellClassName:"bwf-w-60"}],F=function(t){var e=t.c_status?function(t){switch(parseInt(t)){case 1:return Object(r.createElement)("span",{className:"bwf-tags bwf-tag-gray"},Object(o.__)("Draft","wp-marketing-automations"));case 3:return Object(r.createElement)("span",{className:"bwf-tags bwf-tag-red"},Object(o.__)("Failed","wp-marketing-automations"));case 4:return Object(r.createElement)("span",{className:"bwf-tags bwf-tag-orange"},Object(o.__)("Bounced","wp-marketing-automations"));default:return Object(r.createElement)(r.Fragment,null)}}(t.c_status):"-";return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"bwf-mr-10"},t.subject?t.subject:"-"),e)},D=A&&A.length>0?A.map((function(t){return"ID"in t&&parseInt(t.ID)>0&&[{display:F(t),value:t.subject},{display:Object(c.N)(t.created_at,!1),value:t.created_at},{display:t.o_interaction?(e=JSON.parse(t.o_interaction),n=e[e.length-1],Object(c.N)(n,!1,!1)):"-",value:""},{display:t.open?t.open:0,value:t.open},{display:t.click?t.click:0,value:t.click},{display:Object(r.createElement)(i.Button,{className:"bwf-w-60 bwf-display-flex",onClick:function(){h(t),v(!0)}},Object(r.createElement)(p.a,{icon:"view"})),value:null}];var e,n})):[];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-c-s-data"},Object(r.createElement)("div",{className:"bwf-c-s-section"},Object(r.createElement)(a.a,{className:"contact-single-table contact-emails",headers:M,rows:D,query:{paged:T},totalRows:C,rowsPerPage:I,isLoading:x,showMenu:!1,onPageChange:function(t,n){return S(e,(t-1)*I,I)},onQueryChange:function(t){return"per_page"===t?function(t){return t!==I&&S(e,N,t)}:function(){return{}}},emptyMessage:Object(o.__)("No emails found","wp-marketing-automations")}))),Object(r.createElement)(s.a,{onRequestClose:function(){return v(!1)},conversation:y,contact:g,isOpen:d}))}},1223:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(268),o=n(2),i=n(5),c=n(4),u=n(102),l=n(283),s=n(60),f=n.n(s);function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,c=[],u=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,a=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(){var t=p(Object(r.useState)(!1),2),e=t[0],n=t[1],s=p(Object(r.useState)(!1),2),m=s[0],y=s[1],h=[{key:"subject",label:Object(o.__)("Subject","wp-marketing-automations"),isLeftAligned:!1},{key:"sent_time",label:Object(o.__)("Sent On","wp-marketing-automations"),isLeftAligned:!0},{key:"last_activity",label:Object(o.__)("Last Activity","wp-marketing-automations"),isLeftAligned:!0},{key:"opens",label:Object(o.__)("Opens","wp-marketing-automations"),isLeftAligned:!0},{key:"clicks",label:Object(o.__)("Clicks","wp-marketing-automations"),isLeftAligned:!0},{key:"view",label:"",isLeftAligned:!0,cellClassName:"bwf-col-action"}],b=[[{display:"Test Subject",value:""},{display:Object(i.N)("2021-02-01 12:00:00"),value:""},{display:Object(i.N)("2021-02-05 00:00:00"),value:""},{display:1,value:""},{display:1,value:""},{display:Object(r.createElement)(c.Button,{icon:"visibility",onClick:function(t){t.preventDefault(),y(!0)}}),value:null}]],d=f()(),v={};return v[d.format("YYYY-MM-DD")+" 10:23:00"]="Opened",v[d.format("YYYY-MM-DD")+" 12:11:00"]="Clicked",Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf_clear_10"}),Object(r.createElement)("div",{className:"bwf-c-s-data"},Object(r.createElement)("div",{className:"bwf-c-s-section"},Object(r.createElement)(a.a,{className:"contact-single-table contact-emails",headers:h,rows:b,query:{paged:1},totalRows:1,rowsPerPage:1,isLoading:!1,showMenu:!1,emptyMessage:Object(o.__)("No direct emails found","wp-marketing-automations")})),Object(r.createElement)(u.a,{isOpen:e,onRequestClose:function(){return n(!1)}}),Object(r.createElement)(l.a,{isOpen:m,isLoading:!1,onRequestClose:y,subject:"Dummy Subject",body:Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:"<p>Hi John,</p> <p> this is test mail.</p><p>thanks</p>"}}),sourceType:2,mode:1,contact:{},conversation:{c_status:"2",created_at:d.subtract(1,"days").format(),mode:"1",source:{type:"1",name:"FunnelKit Automations",updated_at:d.format()},updated_at:d.format()},template:{timeline:v}})))}},894:function(t,e,n){"use strict";var r=n(0),a=n(2),o=n(12),i=n.n(o),c=n(5),u=n(283);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new C(r||[]);return a(i,"_invoke",{value:S(t,n,c)}),i}function m(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var y="suspendedStart",h="executing",b="completed",d={};function v(){}function g(){}function w(){}var j={};f(j,i,(function(){return this}));var O=Object.getPrototypeOf,_=O&&O(O(I([])));_&&_!==n&&r.call(_,i)&&(j=_);var E=w.prototype=v.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(a,o,i,c){var u=m(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}})}function S(e,n,r){var a=y;return function(o,i){if(a===h)throw new Error("Generator is already running");if(a===b){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=A(c,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===y)throw a=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var l=m(e,n,r);if("normal"===l.type){if(a=r.done?b:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=b,r.method="throw",r.arg=l.arg)}}}function A(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=m(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(l(e)+" is not iterable")}return g.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(L.prototype),f(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new L(p(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),f(E,u,"Generator"),f(E,i,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=I,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),d}},e}function f(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,a)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,c=[],u=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,a=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=function(t){var e=t.conversation,n=void 0===e?{}:e,o=n.ID,l=n.mode,m=n.type,y=t.onRequestClose,h=t.isOpen,b=t.contact,d=void 0===b?{}:b,v=p(Object(r.useState)(null),2),g=v[0],w=v[1],j=p(Object(r.useState)(!1),2),O=j[0],_=j[1],E=p(Object(r.useState)(null),2),k=E[0],L=E[1],S=function(){var t,e=(t=s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o&&!(!parseInt(o)>0)){t.next=2;break}return t.abrupt("return");case 2:return _(!0),t.prev=3,t.next=6,i()({method:"GET",path:Object(c.m)("/contacts/".concat(d.id,"/engagement/").concat(parseInt(o),"?mode=1"))});case 6:"result"in(e=t.sent)&&w(e.result),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0),t.t0&&"message"in t.t0?L(t.t0.message):Object(a.__)("There are some technical difficulties while getting emails. Please contact support.","wp-marketing-automations");case 14:_(!1);case 15:case"end":return t.stop()}}),t,null,[[3,10]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){f(o,r,a,i,c,"next",t)}function c(t){f(o,r,a,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){h&&S()}),[h]);return Object(r.createElement)(u.a,{isOpen:h,isLoading:O,onRequestClose:function(){y(),w(null),L(null)},error:k,subject:parseInt(l)<2&&g&&g.subject,body:g&&Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:g.body}}),sourceType:m,mode:l,contact:t.contact,conversation:t.conversation,template:g})}}}]);