(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1188:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(4),c=a(2),o=a(5),i=a(12),s=a.n(i),l=a(859),m=a(867),b=a(60),u=a.n(b),p=a(3),f=a(893),d=a(149),w=a(76),v=a(8),O=a(142),h=a(141);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function y(){y=function(){return t};var e,t={},a=Object.prototype,r=a.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},c="function"==typeof Symbol?Symbol:{},o=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,a){return e[t]=a}}function m(e,t,a,r){var c=t&&t.prototype instanceof w?t:w,o=Object.create(c.prototype),i=new L(r||[]);return n(o,"_invoke",{value:x(e,a,i)}),o}function b(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}t.wrap=m;var u="suspendedStart",p="executing",f="completed",d={};function w(){}function v(){}function O(){}var h={};l(h,o,(function(){return this}));var g=Object.getPrototypeOf,E=g&&g(g(T([])));E&&E!==a&&r.call(E,o)&&(h=E);var _=O.prototype=w.prototype=Object.create(h);function N(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function a(n,c,o,i){var s=b(e[n],e,c);if("throw"!==s.type){var l=s.arg,m=l.value;return m&&"object"==j(m)&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(m).then((function(e){l.value=e,o(l)}),(function(e){return a("throw",e,o,i)}))}i(s.arg)}var c;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return c=c?c.then(n,n):n()}})}function x(t,a,r){var n=u;return function(c,o){if(n===p)throw new Error("Generator is already running");if(n===f){if("throw"===c)throw o;return{value:e,done:!0}}for(r.method=c,r.arg=o;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=b(t,a,r);if("normal"===l.type){if(n=r.done?f:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}function S(t,a){var r=a.method,n=t.iterator[r];if(n===e)return a.delegate=null,"throw"===r&&t.iterator.return&&(a.method="return",a.arg=e,S(t,a),"throw"===a.method)||"return"!==r&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var c=b(n,t.iterator,a.arg);if("throw"===c.type)return a.method="throw",a.arg=c.arg,a.delegate=null,d;var o=c.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,d):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,d)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function T(t){if(t||""===t){var a=t[o];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,c=function a(){for(;++n<t.length;)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return c.next=c}}throw new TypeError(j(t)+" is not iterable")}return v.prototype=O,n(_,"constructor",{value:O,configurable:!0}),n(O,"constructor",{value:v,configurable:!0}),v.displayName=l(O,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,l(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},N(k.prototype),l(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,a,r,n,c){void 0===c&&(c=Promise);var o=new k(m(e,a,r,n),c);return t.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},N(_),l(_,s,"Generator"),l(_,o,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return i.type="throw",i.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),P(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;P(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:T(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}function E(e,t,a,r,n,c,o){try{var i=e[c](o),s=i.value}catch(e){return void a(e)}i.done?t(s):Promise.resolve(s).then(r,n)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,c,o,i=[],s=!0,l=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=c.call(a)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(e){var t=Object(r.useContext)(o.d),a=_(Object(r.useState)(!1),2),i=a[0],b=a[1],j=_(Object(r.useState)(1),2),N=j[0],k=j[1],x=_(Object(r.useState)(""),2),S=x[0],C=x[1],P=_(Object(r.useState)({loading:!1,error:!1,success:!1,message:""}),2),L=P[0],T=P[1],I=_(Object(r.useState)(!1),2),M=I[0],D=I[1],A=_(Object(r.useState)(!1),2),Y=A[0],B=A[1],H=_(Object(r.useState)(!1),2),F=H[0],G=H[1],z=_(Object(r.useState)({}),2),R=z[0],U=z[1],W={rich:Object(c.__)("Rich Text","wp-marketing-automations"),wc:Object(c.__)("WooCommerce","wp-marketing-automations"),html:Object(c.__)("HTML","wp-marketing-automations"),editor:Object(c.__)("Editor","wp-marketing-automations")},q=_(Object(r.useState)({message:"",type:1}),2),J=q[0],V=q[1],$=Object(m.a)().setCampaignValues,K=Object(o.t)(),Q=l.a.getCampaignData(),X=l.a.getCampaignId(),Z=(l.a.getEditableMode(),parseInt(Q.type));Object(r.useEffect)((function(){!function(){if(Q.data&&Q.data.content&&Q.data.content.length>0){var e=!0;Q.data.content.map((function(t,a){Q.hasOwnProperty("validated_email_body_".concat(a))&&!Q["validated_email_body_".concat(a)]&&(e=!1)})),G(e)}}()}),[Q]),Object(r.useEffect)((function(){if(Q)if(Q.hasOwnProperty("execution_time")&&!Object(p.isNull)(Q.execution_time))k(2),C(u()(Object(o.N)(Q.execution_time,!0,!0,!1)).format("YYYY-MM-DDTHH:mm:ss"));else{var e=Object(o.z)(u()(new Date)).format("YYYY-MM-DDTHH:mm:ss");C(e)}}),[]),Object(r.useEffect)((function(){document.addEventListener("click",(function(e){var t=document.getElementsByClassName("bwf-crm-campaign-schedule-popover")[0],a=!0;void 0!==t&&t.contains(e.target)&&(a=!1),i&&"bwf-crm-campaign-review-schedule-text-box"!=e.target.id&&a&&b(!1)}))}));var ee=Object(h.a)().setL2Title;Object(r.useEffect)((function(){ee("title"in Q?Object(r.createElement)(r.Fragment,null,Q.title):"")}),[Q]);var te,ae,re,ne=Q?Q.count:0,ce=[{value:1,className:"bwf-crm-campaign-schedule bwf-crm-campaign-schedule-now",label:Object(c.__)("Broadcast Now","wp-marketing-automations")},{value:2,className:"bwf-crm-campaign-schedule bwf-crm-campaign-schedule-later",label:Object(c.__)("Schedule For Later","wp-marketing-automations")}],oe=function(){var a,r=(a=y().mark((function a(){var r,n;return y().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.setPending(!0),!(ne<=0)){a.next=5;break}return T({status:!0,error:Object(c.__)("No Contacts are selected.","wp-marketing-automations")}),e.setPending(!1),a.abrupt("return");case 5:if(r=Object(o.z)(u()(new Date)).format("YYYY-MM-DDTHH:mm:ss"),n=Object(o.z)(u()(S)),2!=N||n.isAfter(r)||n.isSame(r,"minute")){a.next=11;break}return T({status:!0,error:Object(c.__)("Given time should exceeds the current time.","wp-marketing-automations")}),e.setPending(!1),a.abrupt("return");case 11:return a.prev=11,a.next=14,s()({path:Object(o.m)("/broadcast/".concat(X)),method:"POST",data:{data:{schedule_time:2==N?Object(o.B)(S).utc().format():"",modified_by:Object(o.x)()},step:4},headers:{"Content-Type":"application/json"}}).then((function(e){200==e.code?(t(e.message),Object(o.fb)(t,2e3),setTimeout((function(){$("data",e.result),$("editableMode",!1)}),2e3)):T({status:!0,error:e.message})}));case 14:a.next=19;break;case 16:a.prev=16,a.t0=a.catch(11),T({status:!0,error:a.t0.message});case 19:e.setPending(!1);case 20:case"end":return a.stop()}}),a,null,[[11,16]])})),function(){var e=this,t=arguments;return new Promise((function(r,n){var c=a.apply(e,t);function o(e){E(c,r,n,o,i,"next",e)}function i(e){E(c,r,n,o,i,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(w.a,null),Object(r.createElement)("div",{className:"bwf-campaign-step-div bwf-card-wrap bwf-campaign-step-4"},Object(r.createElement)("div",{className:"bwf-card-header"},Object(r.createElement)("span",{className:"bwf-form-title"},Object(c.__)("Review & Schedule","wp-marketing-automations"))),Object(r.createElement)("div",{className:""},Object(r.createElement)("div",{className:"bwf-p-gap bwf-top-gap"},Object(r.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(r.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Information","wp-marketing-automations")),Object(r.createElement)(n.CardBody,{className:"bwf-crm-overview-report-body"},Object(r.createElement)("div",{className:"bwf-report-row",key:1},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Title","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Q.title)),Object(r.createElement)("div",{className:"bwf-report-row",key:2},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Type","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},K[Z].label)),!!Q.description&&Object(r.createElement)("div",{className:"bwf-report-row",key:3},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Description","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Q.description)))))),Object(r.createElement)("div",{className:"bwf-pt-0"},Object(r.createElement)("div",{className:"bwf-p-gap "},Object(r.createElement)(r.Fragment,null,Object(r.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(r.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Contacts","wp-marketing-automations")),Object(r.createElement)(n.CardBody,{className:"bwf-crm-overview-report-body"},Object(r.createElement)("div",{className:"bwf-report-row",key:1},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Total","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Object(r.createElement)("b",null,ne))),Q.data.hasOwnProperty("filters")&&!Object(p.isEmpty)(Q.data.filters)&&Object(r.createElement)("div",{className:"bwf-report-row",key:2},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Segments","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Object(f.b)(Q.data.filters)))))))),Object(r.createElement)("div",{className:" bwf-pt-0"},Object(r.createElement)("div",{className:"bwf-p-gap "},Object(r.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(r.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Content","wp-marketing-automations")),Object(r.createElement)(n.CardBody,{className:"bwf-crm-overview-report-body"},Z&&1==Z&&Q.data.hasOwnProperty("senders_name")&&!Object(p.isEmpty)(Q.data.senders_name)&&Object(r.createElement)("div",{className:"bwf-report-row",key:1},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("From Name","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Q.data.senders_name)),Z&&1==Z&&Q.data.hasOwnProperty("senders_email")&&!Object(p.isEmpty)(Q.data.senders_email)&&Object(r.createElement)("div",{className:"bwf-report-row",key:2},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("From Email","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Q.data.senders_email)),Z&&1==Z&&Q.data.hasOwnProperty("replyto")&&!Object(p.isEmpty)(Q.data.replyto)&&Object(r.createElement)("div",{className:"bwf-report-row",key:3},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Reply-To Email","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Q.data.replyto)),Q.data&&Q.data.content&&Q.data.content.map((function(e,t){return Object(r.createElement)("div",{className:"bwf-report-row",key:t},Object(r.createElement)("div",{className:"bwf-report-row-label"},Q.data.content.length>1?Object(c.__)("Content #","wp-marketing-automations")+(parseInt(t)+1):Object(c.__)("Content","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value bwf-report-value-modal"},Z&&e.subject&&Object(r.createElement)("span",null,e.subject),Object(r.createElement)(n.Button,{isSecondary:!0,className:"bwf-a-no-underline",style:{height:"auto",padding:"10px 20px"},onClick:function(){B(!0),[2,3].includes(parseInt(Z))?D(!0):D(!1),U(e)}},Object(c.__)("View details","wp-marketing-automations")),Q.hasOwnProperty("validated_email_body_".concat(t))&&!Q["validated_email_body_".concat(t)]&&Object(r.createElement)("div",{className:"bwf-error"},Object(c.__)("Invalid email content. Please fix to proceed further.","wp-marketing-automations"))))})),!!Q.data&&Q.data.hasOwnProperty("smart_send")&&Q.data.smart_send.hasOwnProperty("enable")&&Q.data.smart_send.enable&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-report-row",key:11},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Smart sending","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Object(c.__)("Enabled","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-report-row",key:12},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Sample size (in percent)","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Q.data.smart_send.percent+" %")),Object(r.createElement)("div",{className:"bwf-report-row",key:13},Object(r.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Wait Time (in hours)","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-report-row-value"},Q.data.smart_send.hours+" hours"))),Y&&Object(r.createElement)(n.Modal,{onRequestClose:function(){return B(!1)},className:"bwf-message-preview-modal bwf-admin-modal bwf-admin-modal-large bwf-h--core-header"},Object(r.createElement)("div",{className:"bwf-modal-header"},Object(r.createElement)("div",{className:"bwf-modal-heading"},Object(c.__)("Details","wp-marketing-automations")),Object(r.createElement)("span",{onClick:function(){return B(!1)},className:"bwf-modal-close"},Object(r.createElement)(v.a,{icon:"close",color:"#353030"}))),(te=R,ae="",re=!0,3==Z&&te.hasOwnProperty("whatsAppImage")&&te.whatsAppImage&&te.hasOwnProperty("whatsAppImageSetting")&&te.whatsAppImageSetting.hasOwnProperty("position")&&!Object(p.isEmpty)(te.whatsAppImageSetting.position)&&te.whatsAppImageSetting.hasOwnProperty("imageURL")&&!Object(p.isEmpty)(te.whatsAppImageSetting.imageURL)&&(ae="before"===te.whatsAppImageSetting.position?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("img",{src:te.whatsAppImageSetting.imageURL,width:50,height:50}),Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:te.body}})):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:te.body}}),Object(r.createElement)("img",{src:te.whatsAppImageSetting.imageURL,width:50,height:50})),re=!1),re&&(ae=Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:"editor"===te.type?te.editor.body:te.body}})),Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-message-wrap"},Object(r.createElement)("div",{className:"bwf-section"},1==Z&&Object(r.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(r.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("Subject","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf_align_center"},te.subject)),1==Z&&te.hasOwnProperty("preheader")&&!Object(p.isEmpty)(te.preheader)&&Object(r.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(r.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("Mail Pre-header","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf_align_center"},te.preheader)),1==Z&&te.hasOwnProperty("type")&&!Object(p.isEmpty)(te.type)&&Object(r.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(r.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("Mail Type","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf_align_center"},W[te.type])),te.hasOwnProperty("utm")&&!Object(p.isEmpty)(te.utm)&&function(e){var t=[];return t.push(Object(c.__)("Source","wp-marketing-automations")+": "+e.source),t.push(Object(c.__)("Medium","wp-marketing-automations")+": "+e.medium),e.hasOwnProperty("name")&&!Object(p.isEmpty)(e.name)&&t.push(Object(c.__)("Name","wp-marketing-automations")+": "+e.name),e.hasOwnProperty("content")&&!Object(p.isEmpty)(e.content)&&t.push(Object(c.__)("Content","wp-marketing-automations")+": "+e.content),e.hasOwnProperty("term")&&!Object(p.isEmpty)(e.term)&&t.push(Object(c.__)("Term","wp-marketing-automations")+": "+e.term),Object(r.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(r.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("UTM Details","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf_align_center",style:{maxWidth:"400px"}},Object(r.createElement)("div",{className:"bwf-p"},t.join(" | "))))}(te.utm),M&&Object(r.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(r.createElement)("div",{className:"bwf-report-row-value"},ae)),Object(r.createElement)("div",{className:"bwf-p-15 bwf-t-center"},Object(r.createElement)("a",{className:"bwf-model-link",onClick:function(){return D(!M)}},M?Object(c.__)("Less Details","wp-marketing-automations"):Object(c.__)("More Details","wp-marketing-automations")))))))))))),Object(r.createElement)("div",{className:"bwf-pt-0"},Object(r.createElement)("div",{className:"bwf-p-gap "},Object(r.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(r.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Schedule","wp-marketing-automations")),Object(r.createElement)(n.CardBody,{className:"bwf-crm-overview-schedule-section"},Object(r.createElement)("div",{className:"bwf-campaign-review-broadcast-wrap",onClick:function(){b(!1)}},Object(r.createElement)(n.ButtonGroup,{className:"bwf-crm-campaign-schedule-btn-grp bwf-alter-button"},ce.map((function(e,t){var a=e.value===N?{isPrimary:!0}:{isSecondary:!0};return Object(r.createElement)(n.Button,g({onClick:function(){k(e.value)}},a,{className:e.className,key:t}),1==e.value?Object(r.createElement)(v.a,{icon:"broadcasts",color:e.value===N?"#fff":"#000"}):Object(r.createElement)(v.a,{icon:"timer",color:e.value===N?"#fff":"#000"}),e.label)}))),2==N&&Object(r.createElement)("div",{className:"bwf-crm-campaign-review-date-wrap"},Object(r.createElement)("div",null,Object(r.createElement)("span",{className:"bwf-mr-5"},Object(r.createElement)(v.a,{icon:"calender"})),Object(c.__)("Pick Date and Time","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-crm-campaign-review-schedule-text-box",id:"bwf-crm-campaign-review-schedule-text-box",onClick:function(e){e.stopPropagation(),b(!i)}},Object(o.N)(u()(S),!1,!1)),i&&Object(r.createElement)("div",{className:"bwf-crm-campaign-schedule-popover",onClick:function(e){return e.stopPropagation()}},Object(r.createElement)(n.DateTimePicker,{currentDate:S,isInvalidDate:function(e){return Object(o.z)(e).isBefore(Object(o.z)(u()()),"day")},onChange:function(e,t){var a=Object(o.z)(u()(new Date)).format("YYYY-MM-DDTHH:mm:ss"),r=Object(o.z)(u()(e));r.isAfter(a)||r.isSame(a,"minute")?C(e):V({message:Object(c.__)("Given time should exceeds the current time.","wp-marketing-automations"),type:0})},is12Hour:!0}),Object(r.createElement)("div",{className:"bwf-p bwf-display-flex"},"Current Store Time: ",Object(o.N)(u()().tz("UTC")))))))))),Object(r.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(r.createElement)("div",{className:"bwf-crm-campaign-navigation"},Object(r.createElement)(n.Button,{isSecondary:!0,className:"bwf-crm-navigation-previous",onClick:function(){$("step",3)}},Object(c.__)("Previous","wp-marketing-automations")),Object(r.createElement)(n.Button,{className:"bwf-crm-navigation-next",isPrimary:!0,disabled:!F,onClick:function(){F&&oe()},isBusy:e.isPending},1===N?Object(c.__)("Send Now","wp-marketing-automations"):Object(c.__)("Schedule","wp-marketing-automations")))),Object(r.createElement)(O.a,{modalTitle:Object(c.__)("Update Broadcast"),confirmText:L.confirmText,deleteEntityName:L.deleteEntityName,confirmButtonText:L.buttonConfirm,cancelButtonText:L.buttonCancel,onConfirm:L.onConfirm,isLoading:L.loading,successMessage:L.success,errorMessage:L.error,onRequestClose:function(){return T({status:!1})},isOpen:L.status,isDelete:!0}),Object(r.createElement)(d.a,{message:J.message,type:J.type,removeMessage:function(){return V({message:"",type:1})}})))}}}]);