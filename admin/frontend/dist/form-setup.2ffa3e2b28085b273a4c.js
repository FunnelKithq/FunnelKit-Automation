(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1199:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(2),c=a(266),l=a(808),o=(a(857),a(952),a(809)),s=a(882),i=a(4),u=a(134),f=a(15),b=a(17),m=a(5),d=a(3),p=a(10),O=a.n(p),w=a(8);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e,t,a,r,n,c,l){try{var o=e[c](l),s=o.value}catch(e){return void a(e)}o.done?t(s):Promise.resolve(s).then(r,n)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var S=function(e){var t=e.feed,a=Object(r.useContext)(m.d),c=E(Object(r.useState)(!1),2),o=c[0],s=c[1],u=E(Object(r.useState)(""),2),f=u[0],b=u[1],p=E(Object(r.useState)(!1),2),j=p[0],g=p[1],y=E(Object(r.useState)(!1),2),S=y[0],N=y[1],_=Object(l.a)().setFeed;Object(r.useEffect)((function(){t&&t.title&&b(t.title)}),[]);var k=function(){var e,r=(e=regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(!0),!Object(d.isEmpty)(f)){e.next=5;break}a(Object(n.__)("Name is required.","wp-marketing-automations")),e.next=23;break;case 5:return r=t,e.prev=6,e.next=9,O()({path:Object(m.m)("/form-feeds/".concat(t.id)),method:"POST",data:v(v({},r),{},{title:f})});case 9:if(!(c=e.sent)||200!=c.code){e.next=16;break}N(!1),a(c.message),setTimeout((function(){_(c.result),s(!1)}),1e3),e.next=17;break;case 16:throw Error(Object(m.j)(null==c?void 0:c.message));case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(6),g(e.t0.message),N(!1);case 23:Object(m.eb)(a,2e3);case 24:case"end":return e.stop()}}),e,null,[[6,19]])})),function(){var t=this,a=arguments;return new Promise((function(r,n){var c=e.apply(t,a);function l(e){h(c,r,n,l,o,"next",e)}function o(e){h(c,r,n,l,o,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}();return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{onClick:function(){return s(!0)},style:{cursor:"pointer",lineHeight:0,marginLeft:"5px"},className:"bwf-hover-primary"},Object(r.createElement)(w.a,{icon:"edit",size:16,color:"#353030"})),o&&Object(r.createElement)(i.Modal,{onRequestClose:function(){return s(!1)},className:"bwf-admin-modal bwf-admin-modal-squeezy bwf-h--core-header"},Object(r.createElement)("div",{className:"bwf-modal-header"},Object(r.createElement)("div",{className:"bwf-modal-heading"},Object(n.__)("Edit Form","wp-marketing-automations")),Object(r.createElement)("span",{onClick:function(){return s(!1)},className:"bwf-modal-close"},Object(r.createElement)(w.a,{icon:"close",color:"#353030"}))),Object(r.createElement)("div",{onKeyPress:function(e){"Enter"===e.key&&(Object(d.isEmpty)(f)?g(!0):k())}},j&&Object(r.createElement)(i.Notice,{status:"error",onRemove:function(){return g("")}},j),Object(r.createElement)(i.TextControl,{type:"text",label:Object(n.__)("Name"),value:f,autoFocus:!0,placeholder:Object(n.__)("Enter Name","wp-marketing-automations"),disabled:S,onChange:function(e){b(e),Object(d.isEmpty)(e)?g(Object(n.__)("Name is required","wp-marketing-automations")):g(!1)}}),Object(r.createElement)("div",{className:"bwf_text_right bwf-form-buttons",style:{marginTop:"24px"}},Object(r.createElement)(i.Button,{isPrimary:!0,onClick:function(){Object(d.isEmpty)(f)?g(!0):k()},isBusy:S},Object(n.__)("Update","wp-marketing-automations"))))))},N=Object(r.lazy)((function(){return a.e(78).then(a.bind(null,1195))})),_=Object(r.lazy)((function(){return a.e(55).then(a.bind(null,1162))})),k=Object(r.lazy)((function(){return a.e(66).then(a.bind(null,1196))})),P=Object(r.lazy)((function(){return a.e(77).then(a.bind(null,1163))}));t.default=function(e){var t=e.match.params.id;Object(m.g)("Form #"+t);var a=Object(l.a)(),d=a.fetch,p=a.resetAll,O=Object(o.a)(),w=O.getFeed,j=O.getLoading,v=O.getStep,g=O.getError,h=O.getEditMapMode,E=O.getListData,y=w(),x=v(),T=!!Object(m.lb)()&&j(),F=g(),M=E(),D=h(),C=location&&location.search?Object(b.parse)(location.search.substring(1)):{},L=Object(u.a)(),I=L.setActive,A=L.resetHeaderMenu,R=L.setBackLink,U=L.setL2Title,z=L.setBackLinkLabel,B=L.setPageHeader,H=L.setL2Nav,q=L.setActiveMultiple,J=L.setL2NavType,G=L.setL2Content,K=L.setL2NavAlign,V=function(){y&&y.status&&!Q&&!D||M.hasOwnProperty("status")&&parseInt(M.status)>1&&!D?(q({leftNav:"forms",rightNav:"overview"}),J("menu"),H({overview:{name:Object(n.__)("Overview","wp-marketing-automations"),link:"admin.php?page=autonami&path=/forms/"+t}}),K("left")):(G(""),H({}))};Object(r.useEffect)((function(){var e,t;A(),I("leftNav","forms"),R(Object(f.f)({},"/forms",C)),z("All Forms"),U((e=y,t=Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"}),e&&e.title?t=e.title:M.hasOwnProperty("title")&&""!==M.title&&(t=M.title),Object(r.createElement)("div",{className:"bwf-display-flex"},t,!!e&&Object(r.createElement)(S,{feedData:e})))),B("Forms"),V()}),[y,M]),Object(r.useEffect)((function(){V()}),[D]),Object(r.useEffect)((function(){return parseInt(t)>0&&Object(m.lb)()&&d(parseInt(t)),function(){p()}}),[t]);var $=[{key:"selection",label:Object(n.__)("Select Form","wp-marketing-automations"),content:Object(r.createElement)(r.Suspense,{fallback:Object(r.createElement)(s.a,null)},Object(r.createElement)(N,{feedId:t}))},{key:"mapping",label:Object(n.__)("Mapping","wp-marketing-automations"),content:Object(r.createElement)(r.Suspense,{fallback:Object(r.createElement)(s.a,null)},Object(r.createElement)(_,{feedId:t}))},{key:"double_optin",label:Object(n.__)("Lead Notification","wp-marketing-automations"),content:Object(r.createElement)(r.Suspense,{fallback:Object(r.createElement)(s.a,null)},Object(r.createElement)(k,{feedId:t}))}];if(!y)return T?Object(r.createElement)(s.a,null):F?Object(r.createElement)(i.Notice,{status:"error"},F.message?F.message:Object(n.__)("Unknown Error","wp-marketing-automations")):Object(r.createElement)(s.a,null);var Q=!!y&&y.hasOwnProperty("status")&&1===parseInt(y.status);return Object(r.createElement)(r.Fragment,null,y&&y.hasOwnProperty("status")?Object(r.createElement)(r.Fragment,null,Q||D?Object(r.createElement)("div",{className:"bwf-form-wrapper"},Object(r.createElement)(c.a,{steps:$,currentStep:x,isPending:T})):Object(r.createElement)(r.Suspense,{fallback:Object(r.createElement)(s.a,null)},Object(r.createElement)(P,null))):Object(r.createElement)(s.a,null))}},808:function(e,t,a){"use strict";var r=a(136),n=a(5),c=a(274),l=a(809),o=a(10),s=a.n(o),i=a(0);function u(e,t,a,r,n,c,l){try{var o=e[c](l),s=o.value}catch(e){return void a(e)}o.done?t(s):Promise.resolve(s).then(r,n)}function f(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var c=e.apply(t,a);function l(e){u(c,r,n,l,o,"next",e)}function o(e){u(c,r,n,l,o,"throw",e)}l(void 0)}))}}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}t.a=function(){var e,t,a,o=Object(i.useContext)(n.d),u=Object(r.a)(c.b.feed),b=u.fetch,O=u.setStateProp,w=p(u,["fetch","setStateProp"]),j=Object(l.a)(),v=j.getFeed,g=j.getSelections,h=j.getSelectionOptions,E=v(),y=(E||{}).source,S=void 0===y?"":y,N=g(),_=h();return m(m({},w),{},{fetch:function(e){b("GET",Object(n.m)("/form-feeds/".concat(e)))},setFeed:function(e){return O("feed",e)},setStep:function(e){return O("step",e)},syncSelection:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];b("POST",Object(n.m)("/form-feeds/".concat(e,"/sync-selection")),{selection:t,form:S,return_all_options:a},{syncSelection:!0})},fetchMappingData:function(e){b("GET",Object(n.m)("/form-feeds/".concat(e,"/mapping-data")),{},{mappingDataFetch:!0})},setFormSource:function(e){var t=E?m(m({},E),{},{source:e}):{source:e};O("feed",t)},setSelection:function(e,t){if(_){var a=9999,r=m({},N);Object.keys(_).map((function(n){var c=_[n];c.slug===e&&(a=parseInt(n),r=m(m({},r),{},d({},e,t))),n>a&&c.slug in r&&delete r[c.slug]})),O("selection",r),O("updateFeed",!1),O("mapData",{}),O("updateStatus",1)}else O("selection",m(m({},N),{},d({},e,t)))},resetAll:function(){O("step","selection"),O("feed",null),O("selectionOptions",{}),O("selectionTotal",10),O("selection",{}),O("error",null),O("editMapFieldsMode",!1)},resetSelection:function(){O("selectionOptions",{}),O("selectionTotal",10),O("selection",{})},setFeedStatus:function(e){return O("feed",m(m({},E),{},{status:e}))},setEditMapMode:function(e){return O("editMapFieldsMode",e)},setError:function(e){return O("error",e)},updateStepTwo:(a=f(regeneratorRuntime.mark((function e(t,a,r){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O("updateStepTwoStatus",1),e.prev=1,e.next=4,s()({path:Object(n.m)("/form-feeds/".concat(t)),method:"POST",data:m(m({},a),{},{status:r})});case 4:(c=e.sent)&&c.result&&c.result.id&&(O("updateStepTwoStatus",2),O("feed",c.result)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),O("updateStepTwoStatus",3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return a.apply(this,arguments)}),resetUpdateStepTwoStatus:function(){return O("updateStepTwoStatus",null)},updateStepThree:(t=f(regeneratorRuntime.mark((function e(t,a,r){var c,l,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O("updateStepThreeStatus",1),e.prev=1,c=m(m({},a),{},{status:r}),l={content:JSON.stringify(c)},e.next=6,s()({path:Object(n.m)("/form-feeds/".concat(t,"/save-email-data")),method:"POST",data:l});case 6:(i=e.sent)&&i.result&&i.result.id&&(o("Form Updated"),Object(n.eb)(o,2e3),O("editMapFieldsMode",!1),O("updateStepThreeStatus",2),O("feed",i.result)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),O("updateStepThreeStatus",3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(e,a,r){return t.apply(this,arguments)}),resetUpdateStepThreeStatus:function(){return O("updateStepThreeStatus",null)},setIncentivizeEmail:function(e){var t=E&&E.data?E.data:{};t.incentivize_email=e,O("feed",m(m({},E),{},{data:t}))},setMarketingStatus:function(e){var t=E&&E.data?E.data:{};t.marketing_status=e,O("feed",m(m({},E),{},{data:t}))},setAddTagEnabled:function(e){var t=E&&E.data?E.data:{};t.add_tag_enable=e,O("feed",m(m({},E),{},{data:t}))},setTagList:function(e){var t=E&&E.data?E.data:{};t.tag_to_add=e,O("feed",m(m({},E),{},{data:t}))},setRedirectMode:function(e){var t=E&&E.data?E.data:{};t.redirect_mode=e,O("feed",m(m({},E),{},{data:t}))},setRedirectUrl:function(e){var t=E&&E.data?E.data:{};t.redirect_url=e,O("feed",m(m({},E),{},{data:t}))},setNotSendToSubscribed:function(e){var t=E&&E.data?E.data:{};t.not_send_to_subscribed=e,O("feed",m(m({},E),{},{data:t}))},updateStatus:(e=f(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O("updateStatusStatus",1),e.prev=1,e.next=4,s()({path:Object(n.m)("/form-feeds/".concat(t,"/status")),method:"POST",data:{status:a}});case 4:(r=e.sent)&&r.result&&r.result.id&&(O("updateStatusStatus",2),O("feed",r.result)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),O("updateStatusStatus",3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(t,a){return e.apply(this,arguments)}),resetUpdateStatusStatus:function(){return O("updateStatusStatus",null)},setListData:function(e){return O("listData",e)}})}},809:function(e,t,a){"use strict";var r=a(137),n=a(274);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}t.a=function(){var e=Object(r.a)(n.b.feed),t=e.getStateProp;return l(l({},s(e,["getStateProp"])),{},{getFeed:function(){return t("feed")},getStep:function(){var e=t("editMapFieldsMode"),a=t("step");return e&&"selection"===a?"mapping":a},getSelectionOptions:function(){return t("selectionOptions")},getSelectionOptionsTotal:function(){return t("selectionTotal")},getSelections:function(){return t("selection")},getSelectionValue:function(e){var a=t("selection");return a&&a[e]?a[e]:""},getLoading:function(){return t("isLoading")},getFormFields:function(){return t("fields")},getFormHeaders:function(){return t("headers")},getUpdateStepTwoStatus:function(){return t("updateStepTwoStatus")},getUpdateStepThreeStatus:function(){return t("updateStepThreeStatus")},getUpdateStatusStatus:function(){return t("updateStatusStatus")},getEditMapMode:function(){return t("editMapFieldsMode")},getListData:function(){return t("listData")}})}},857:function(e,t,a){},882:function(e,t,a){"use strict";var r=a(0),n=a(809),c=a(266),l=a(2),o=a(4);t.a=function(){var e=(0,Object(n.a)().getListData)().status,t=void 0===e?1:e,a=function(){return Object(r.createElement)("div",{className:"bwf-crm-stepper-wrap bwf-card-wrap"},Object(r.createElement)("div",{className:"bwf-card-header"},Object(r.createElement)("span",{className:"bwf-form-title"},Object(l.__)("Select Form","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-crm-background-wrap"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"}),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-display-flex gap-20 bwf-flex-start"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-36 bwf-w-120"}),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-36 bwf-w-120"}),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-36 bwf-w-120"}),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-36 bwf-w-120"})),Object(r.createElement)("div",{className:"bwf_clear_30"}),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"}),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-36 bwf-w-100p"})),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-crm-stepper-navigation bwf_text_right"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-36 bwf-w-90"})))},s=[{key:1,label:Object(l.__)("Select Form","wp-marketing-automations"),content:a()},{key:2,label:Object(l.__)("Mapping","wp-marketing-automations"),content:a()},{key:3,label:Object(l.__)("Lead Notification","wp-marketing-automations"),content:a()}];return 1===parseInt(t)?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.a,{steps:s,currentStep:1,isPending:!1}))):Object(r.createElement)(r.Fragment,null," ",Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwfcrm-overview-wrap"},Object(r.createElement)(o.Card,{className:"bwf-crm-form-feed-report-detail-wrap"},Object(r.createElement)(o.CardHeader,{className:"bwf-crm-form-feed-report-header"},Object(r.createElement)("span",{className:"bwf-form-title"},Object(l.__)("Overview","wp-marketing-automations"))),Object(r.createElement)(o.CardBody,null,[1,2,3,4].map((function(e){return Object(r.createElement)("div",{className:"bwf-form-feed-list",key:e},Object(r.createElement)("div",{className:"bwf-form-feed-list-label"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"})),Object(r.createElement)("div",{className:"bwf-form-feed-list-value"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-300"})))})))),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)(o.Card,{className:"bwf-crm-form-feed-report-detail-wrap"},Object(r.createElement)(o.CardHeader,{className:"bwf-crm-form-feed-report-header"},Object(r.createElement)("span",{className:"bwf-form-title"},Object(l.__)("Mapping","wp-marketing-automations"))),Object(r.createElement)(o.CardBody,{className:"bwf-crm-overview-full"},Object(r.createElement)("div",{className:"bwf-form-feed-list-label"},Object(l.__)("Fields","wp-marketing-automations")),[1,2,3,4].map((function(e){return Object(r.createElement)("div",{className:"bwf-display-flex",style:{justifyContent:"flex-start",gap:"20px",padding:"12px 0"},key:e},Object(r.createElement)("div",{className:"bwf-w-180"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-w-90 bwf-h-15"})),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-w-300 bwf-h-15"}))})),Object(r.createElement)("div",{className:"bwf-form-feed-list"},Object(r.createElement)("div",{className:"bwf-form-feed-list-label"},Object(l.__)("Contact Profile","wp-marketing-automations")),Object(r.createElement)("div",{className:"bwf-form-feed-list-value"},Object(r.createElement)("table",{className:"bwf-overview-table"},Object(r.createElement)("tbody",null,[1,2].map((function(e){return Object(r.createElement)("tr",{key:e},Object(r.createElement)("td",null,Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"})),Object(r.createElement)("td",null,Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-150"})))})),[3,4].map((function(e){return Object(r.createElement)("tr",{key:e},Object(r.createElement)("td",null,Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"})),Object(r.createElement)("td",null,Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-60"})))})))))))),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)(o.Card,{className:"bwf-crm-form-feed-report-detail-wrap"},Object(r.createElement)(o.CardHeader,{className:"bwf-crm-form-feed-report-header"},Object(r.createElement)("span",{className:"bwf-form-title"},Object(l.__)("Email Notification","wp-marketing-automations"))),Object(r.createElement)(o.CardBody,null,[1,2,3,4].map((function(e){return Object(r.createElement)("div",{className:"bwf-form-feed-list",key:e},Object(r.createElement)("div",{className:"bwf-form-feed-list-label"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"})),Object(r.createElement)("div",{className:"bwf-form-feed-list-value"},Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-150"})))}))))))," ")}},952:function(e,t,a){}}]);