(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1190:function(e,t,r){},1191:function(e,t,r){},1201:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(2),c=r(268),i=r(296),o=function(){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card",key:"1"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status is-preview"})," ",Object(a.createElement)("span",{className:"is-placeholder"})),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle"},Object(a.createElement)("span",{className:"is-placeholder long"})))),Object(a.createElement)("section",{className:"bwf-crm-card",key:"2"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status is-preview"})," ",Object(a.createElement)("span",{className:"is-placeholder"})),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle"},Object(a.createElement)("span",{className:"is-placeholder long"})))))},s=r(5),l=r(4),m=r(77),u=r(12),b=r.n(u),f=r(3);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){d=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},i=c.iterator||"@@iterator",o=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function m(e,t,r,a){var c=t&&t.prototype instanceof O?t:O,i=Object.create(c.prototype),o=new I(a||[]);return n(i,"_invoke",{value:x(e,r,o)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=m;var b="suspendedStart",f="executing",w="completed",v={};function O(){}function j(){}function h(){}var y={};l(y,i,(function(){return this}));var g=Object.getPrototypeOf,E=g&&g(g(P([])));E&&E!==r&&a.call(E,i)&&(y=E);var N=h.prototype=O.prototype=Object.create(y);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(n,c,i,o){var s=u(e[n],e,c);if("throw"!==s.type){var l=s.arg,m=l.value;return m&&"object"==p(m)&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,o)}),(function(e){r("throw",e,i,o)})):t.resolve(m).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,o)}))}o(s.arg)}var c;n(this,"_invoke",{value:function(e,a){function n(){return new t((function(t,n){r(e,a,t,n)}))}return c=c?c.then(n,n):n()}})}function x(t,r,a){var n=b;return function(c,i){if(n===f)throw new Error("Generator is already running");if(n===w){if("throw"===c)throw i;return{value:e,done:!0}}for(a.method=c,a.arg=i;;){var o=a.delegate;if(o){var s=C(o,a);if(s){if(s===v)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===b)throw n=w,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=f;var l=u(t,r,a);if("normal"===l.type){if(n=a.done?w:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n=w,a.method="throw",a.arg=l.arg)}}}function C(t,r){var a=r.method,n=t.iterator[a];if(n===e)return r.delegate=null,"throw"===a&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),v;var c=u(n,t.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,v;var i=c.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,c=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}throw new TypeError(p(t)+" is not iterable")}return j.prototype=h,n(N,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:j,configurable:!0}),j.displayName=l(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,s,"GeneratorFunction")),e.prototype=Object.create(N),e},t.awrap=function(e){return{__await:e}},_(k.prototype),l(k.prototype,o,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,a,n,c){void 0===c&&(c=Promise);var i=new k(m(e,r,a,n),c);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(N),l(N,s,"Generator"),l(N,i,(function(){return this})),l(N,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=P,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return o.type="throw",o.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;S(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:P(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),v}},t}function w(e,t,r,a,n,c,i){try{var o=e[c](i),s=o.value}catch(e){return void r(e)}o.done?t(s):Promise.resolve(s).then(a,n)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,c,i,o=[],s=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=c.call(r)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw n}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var j=Object(m.a)(Object(s.X)()).formatAmount,h=function(e){var t=e.contact,r=e.campaignId,c=v(Object(a.useState)(!0),2),i=c[0],l=c[1],m=v(Object(a.useState)([]),2),u=m[0],p=m[1],O=function(){var e,a=(e=d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"GET",path:Object(s.m)("/broadcasts/".concat(r,"/recipients/").concat(t.conversation_id,"/timeline"))}).then((function(e){200==e.code&&e.hasOwnProperty("result")&&!Object(f.isEmpty)(e.result)?p(e.result):p([]),l(!1)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),l(!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,r=arguments;return new Promise((function(a,n){var c=e.apply(t,r);function i(e){w(c,a,n,i,o,"next",e)}function o(e){w(c,a,n,i,o,"throw",e)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();Object(a.useEffect)((function(){l(!0),Object(f.isEmpty)(t.conversation_id)||O()}),[t]);return i?Object(a.createElement)(o,null):Object(a.createElement)(a.Fragment,null,Object(f.isEmpty)(u)?Object(a.createElement)("p",null,Object(n.__)("No timeline found","wp-marketing-automations")):u.map((function(e){switch(e.type){case"conversion":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"orderConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l",key:"1"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Converted","wp-marketing-automations"),Object(a.createElement)("a",{href:"post.php?post="+e.order_id+"&action=edit"},Object(n.__)("Order","wp-marketing-automations")+" #"+e.order_id))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.M)(e.date,!0)},Object(s.P)(e.date).fromNow())),Object(a.createElement)("div",{className:"bwf-crm-card-r",key:"2"},Object(a.createElement)("div",{className:"bwf-crm-card-date"},j(parseFloat(e.revenue)))))}(e);case"open":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"openConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Opened","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.M)(e.date,!0)},Object(s.P)(e.date).fromNow())))}(e);case"click":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"clickConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Clicked","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.M)(e.date,!0)},Object(s.P)(e.date).fromNow())))}(e);case"failed":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"failedConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-failed"}),Object(a.createElement)("span",null,Object(n.__)("Failed","wp-marketing-automations"))),e.hasOwnProperty("err_message")&&!Object(f.isEmpty)(e.err_message)&&Object(a.createElement)("div",{className:"bwf-crm-card-title bwf-ml-20"},e.err_message),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.M)(e.date,!0)},Object(s.P)(e.date).fromNow())))}(e);case"sent":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"sentConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Sent","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.M)(e.date,!0)},Object(s.P)(e.date).fromNow())))}(e)}})))},y=(r(1190),r(153)),g=r(180),E=r.n(g),N=r(15),_=Object(m.a)(Object(s.X)()).formatAmount,k=function(e){var t=e.isOpen,r=e.campaignId,c=e.onRequestClose,o=e.contact;return Object(a.createElement)(i.a,{size:400,isOpen:t,onRequestClose:c},Object(a.createElement)("div",{className:"bwf-crm-body"},Object(a.createElement)("div",{className:"bwf-crm-details"},Object(a.createElement)("div",{className:"bwf-crm-d-head bwf-crm-gap-border"},Object(a.createElement)("div",{className:"bwf-gravatar-wrapper"},o.send_to&&Object(a.createElement)(y.a,{user:o.send_to,size:60}),Object(a.createElement)("div",{className:"bwf-crm-gravatar"},Object(a.createElement)("span",null,Object(f.isEmpty)(E()(o.f_name+" "+o.l_name))?"-":Object(s.Q)(o.f_name,o.l_name)))),Object(a.createElement)("div",{className:"bwf-crm-name"},o&&o.f_name&&o.l_name&&o.f_name.charAt(0).toUpperCase()+o.f_name.slice(1)+" "+(o.l_name.charAt(0).toUpperCase()+o.l_name.slice(1))),Object(a.createElement)("div",{className:"bwf-crm-email"},o.send_to),Object(a.createElement)("div",{className:"bwf-t-center bwf-pt-15"},Object(a.createElement)(l.Button,{isSecondary:!0,className:"bwf-btn-small",onClick:function(){Object(N.k)({page:"autonami",path:"/contact/".concat(o.cid)},"/",{})}},Object(n.__)("View Contact","wp-marketing-automations")))),Object(a.createElement)("div",{className:"bwf-crm-d-data bwf-crm-gap-border"},Object(a.createElement)("div",{className:"bwf-crm-head"},Object(n.__)("Details","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-col2",key:1},Object(a.createElement)("div",{className:"bwf-crm-list",key:1},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Sent","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},Object(s.M)(o.sent_time))),o.is_unsubscribe&&!Object(f.isEmpty)(o.unsubscribe)&&Object(a.createElement)("div",{className:"bwf-crm-list",key:2},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Unsubscribe","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},Object(s.M)(o.unsubscribe)))),Object(a.createElement)("div",{className:"bwf-crm-col2",key:3},Object(a.createElement)("div",{className:"bwf-crm-list",key:2},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Total Click","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},o.click&&parseInt(o.click))),Object(a.createElement)("div",{className:"bwf-crm-list",key:1},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Total Open","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},o.open&&parseInt(o.open)))),Object(a.createElement)("div",{className:"bwf-crm-col2",key:4},Object(a.createElement)("div",{className:"bwf-crm-list",key:1},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Is Converted","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},parseInt(o.conversions)>0?Object(n.__)("Yes","wp-marketing-automations"):Object(n.__)("No","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-list",key:2},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Total Revenue","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},_(parseInt(o.revenue))))))),Object(a.createElement)("div",{className:"bwf-crm-timeline"},Object(a.createElement)("div",{className:"bwf-crm-head"},Object(n.__)("Timeline","wp-marketing-automations")),Object(a.createElement)(h,{contact:o,campaignId:r}))))},x=r(270),C=r(17),L=r(38),S=r(867),I=r(859),P=(r(1191),r(886)),A=r(76),T=r(8);function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,c,i,o=[],s=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=c.call(r)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw n}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(e){var t=e.campaignId,r=e.campaignType,i=I.a.getCampaignData(),o=(i||{}).type,l=R(Object(a.useState)(!1),2),u=l[0],b=l[1],f=R(Object(a.useState)({}),2),p=f[0],d=f[1],w=I.a.getRecipientData(),v=I.a.getRecipientLoading(),O=I.a.getRecipientLimit(),j=I.a.getRecipientOffset(),h=I.a.getRecipientTotal(),y=Object(S.a)(),g=y.fetchRecipient,E=y.setRecipientsValues,N=Object(m.a)(Object(s.X)()).formatAmount;Object(P.a)("recipient","",!0,!0,!1,r),Object(a.useEffect)((function(){g(t,O,j)}),[O,j]);var _=[{key:"contact",label:Object(n.__)("Contact","wp-marketing-automations"),required:!0,cellClassName:"bwf-crm-col-contact"},{key:"contact_details",label:Object(n.__)("Details","wp-marketing-automations"),cellClassName:"bwf-crm-col-contact-details"},{key:"sent",label:Object(n.__)("Sent","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"},1===parseInt(o)?{key:"open",label:Object(n.__)("Open","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"}:{},{key:"click",label:Object(n.__)("Click","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"},{key:"unsubscribe",label:Object(n.__)("Unsubscribe","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"},Object(s.xb)()?{key:"converted",label:Object(n.__)("Converted","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"}:{},Object(s.xb)()?{key:"revenue",label:Object(n.__)("Revenue","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m"}:{}],F=I.a.getRecipientPage(),M=function(e){e!==O&&(E("limit",e),E("offset",0))},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="";switch(e){case"null":case null:r="";break;case!0:case"yes":r=t?" bwf-crm-status-failed":" bwf-crm-status-success";break;case!1:case"no":r=t?" bwf-crm-status-success":""}return Object(a.createElement)("div",{className:"bwf-crm-status bwf-crm-status-s"+r})},U=function(e){var t=e;return t.email=e.send_to,Object(a.createElement)("div",{onClick:function(){return function(e){d(e),b(!0)}(e)}},Object(a.createElement)(x.a,{contact:t,dateText:Object(n.__)("Sent","wp-marketing-automations"),date:e.sent_time}))},q=function(e){return Object(a.createElement)("div",{className:"bwf-crm-contact-details-cell"},e.send_to?Object(a.createElement)(C.a,{justify:"start"},Object(a.createElement)(C.c,null,Object(a.createElement)(T.a,{icon:"mail"})),Object(a.createElement)(C.c,null,0!=e.cid?Object(a.createElement)(L.a,{className:"bwf-a-no-underline",href:"mailto:"+e.send_to,type:"external"},e.send_to):e.send_to)):"-")},D=w.map((function(e){return[{display:U(e),value:e.f_name+" "+e.l_name},{display:q(e),value:e.email},{display:G(!parseInt(e.sent)>0,!0),value:e.sent},1===parseInt(o)?{display:G(parseInt(e.open)>0),value:e.open}:{},{display:G(parseInt(e.click)>0),value:e.click},{display:G(0!=parseInt(e.unsubscribed)||null,!0),value:e.unsubscribe},Object(s.xb)()?{display:G(parseInt(e.conversions)>0),value:e.is_converted}:{},Object(s.xb)()?{display:N(parseFloat(e.revenue)),value:e.revenue}:{}]}));return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(A.a,null),Object(a.createElement)(c.a,{className:"bwf-crm-campaign-report-recipients",rows:D,headers:_,query:{paged:F},rowsPerPage:O,totalRows:h,isLoading:v,onPageChange:function(e,t){E("offset",(e-1)*O)},onQueryChange:function(e){return"per_page"!==e?function(){}:M},emptyMessage:Object(n.__)("No engagements found","wp-marketing-automations"),rowHeader:!0,showMenu:!1,hideHeader:"yes"}),Object(a.createElement)(k,{funnelId:1,contact:p,size:400,campaignId:parseInt(t),isOpen:u,onRequestClose:function(){return b(!1)}}))}}}]);