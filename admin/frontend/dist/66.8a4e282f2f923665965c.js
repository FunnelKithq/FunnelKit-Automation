(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1196:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(154),c=n(4),o=n(2),i=n(809),l=n(808),s=n(67),u=n(16),m=(n(135),n(10)),b=n.n(m),d=n(5);function f(e,t,n,r,a,c,o){try{var i=e[c](o),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){f(c,r,a,o,i,"next",e)}function i(e){f(c,r,a,o,i,"throw",e)}o(void 0)}))}}var g=function(e){return{sendTestEmail:(a=p(regeneratorRuntime.mark((function e(t,n,r,a,c,o){var i,l,s,u,m,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>6&&void 0!==f[6]&&f[6],l=f.length>7&&void 0!==f[7]?f[7]:{},s=f.length>8&&void 0!==f[8]&&f[8],u=f.length>9&&void 0!==f[9]?f[9]:{},e.prev=4,m={email:t,content:JSON.stringify({subject:n,body:r,type:a,mail_data:c,preheader:o,utmEnabled:i,utmDetails:l,overRideSenderInfo:s,overRideInfo:u})},e.next=8,b()({method:"POST",path:Object(d.m)("/send-test-email"),data:m});case 8:return e.abrupt("return",2);case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",3);case 14:case"end":return e.stop()}}),e,null,[[4,11]])}))),function(e,t,n,r,c,o){return a.apply(this,arguments)}),saveEditorContent:(r=p(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={content:JSON.stringify(n)},t.next=4,b()({method:"POST",path:Object(d.m)("/form-feeds/".concat(e,"/save-email-content")),data:r});case 4:return t.abrupt("return",2);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",3);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)}),uploadImage:(n=p(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),e.prev=2,e.next=5,b()({method:"POST",path:Object(d.m)("/upload-image"),body:n});case 5:return r=e.sent,e.abrupt("return",r&&r.result?r.result:"");case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return","");case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(e){return n.apply(this,arguments)}),fetchCurrentMailEditorContent:(t=p(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b()({method:"GET",path:Object(d.m)("/form-feeds/".concat(e,"/get-email-content"))});case 3:return n=t.sent,t.abrupt("return",n&&n.result?n.result:"");case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return","");case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(){return t.apply(this,arguments)})};var t,n,r,a},_=n(814),O=n(3);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){var t=bwfcrm_contacts_data&&bwfcrm_contacts_data.editor_settings&&bwfcrm_contacts_data.editor_settings.default&&bwfcrm_contacts_data.editor_settings.default.form?bwfcrm_contacts_data.editor_settings.default.form:{};return e&&0!==Object.keys(t).length?Array.isArray(e.content)&&e.content[0]?(e.content[0].body||(e.content[0].body=t.body?t.body:""),e.content[0].editor||(e.content[0].editor=t.editor?t.editor:{}),e):y(y({},e),{},{content:[{body:t.body?t.body:"",editor:t.editor?y({},t.editor):{}}]}):e};t.default=function(e){var t,n=e.feedId,m=Object(i.a)(),b=Object(l.a)(),d=m.getUpdateStepThreeStatus(),f=m.getFeed(),p=f&&f.status?parseInt(f.status):1,w=f&&f.data?f.data:{},v=!(!w||!("incentivize_email"in w))&&w.incentivize_email,h=!(!w||!("marketing_status"in w))&&w.marketing_status,k=!(!w||!("not_send_to_subscribed"in w))&&w.not_send_to_subscribed,S=!(!w||!("add_tag_enable"in w))&&w.add_tag_enable,C=w&&"tag_to_add"in w?w.tag_to_add:[],N=w&&"redirect_url"in w?w.redirect_url:"",T=w&&"redirect_mode"in w?w.redirect_mode:"url",P=j(Object(r.useState)(!1),2),R=P[0],x=P[1],A=j(Object(r.useState)(!1),2),B=A[0],I=A[1],D=j(Object(r.useState)(!1),2),F=D[0],M=D[1],U=Object(r.useCallback)((function(e){!1===v?b.updateStepThree(n,{incentivize_email:v,marketing_status:h},e):(I(e),x(!0))}),[v,h]),z=Object(r.useCallback)((function(e){b.updateStepThree(n,{incentivize_email:v,marketing_status:h,incentive_email:e,redirect_mode:T,redirect_url:N,add_tag_enable:S,tag_to_add:C,not_send_to_subscribed:k},B),x(!1)}),[v,h,B,T,N]),J={objectId:"crm.form.".concat(n),mergeTagsContext:"forms"};return Object(r.createElement)("div",{className:"bwf-crm-stepper-wrap bwf-card-wrap bwf-crm-forms-step-3"},Object(r.createElement)(s.a,null),Object(r.createElement)("div",{className:"bwf-card-header"},Object(r.createElement)("span",{className:"bwf-form-title"},Object(o.__)("Lead Notification","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-crm-importer-wrap"},Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-crm-import-section"},Object(r.createElement)(c.ToggleControl,{label:Object(o.__)("Enable email notification","wp-marketing-automations"),className:"bwf-tooglecontrol-advance",help:Object(o.__)("Note: Use {{contact_confirmation_link}} for double optin","wp-marketing-automations"),onChange:function(e){return b.setIncentivizeEmail(e)},checked:!!v})),!!v&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-p-gap bwf-pt-0 bwf-pb-0"},Object(r.createElement)(a.a,{disableDefaultButtons:!0,onEmailContentReady:z,onEmailContentError:function(){return x(!1)},showTab:!1,initData:E(w&&"incentive_email"in w?y(y({},w.incentive_email),J):J),validateEmailContent:!!R,apiMethods:g?g(n):{},openTemplateModal:F,setTemplateModal:M})),Object(r.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(r.createElement)(c.Card,{className:"bwf-p-gap bwf-border"},Object(r.createElement)(c.ToggleControl,{label:Object(o.__)("Don't send email if contact is already subscribed","wp-marketing-automations"),className:"bwf-tooglecontrol-advance",onChange:function(e){return b.setNotSendToSubscribed(e)},checked:!!k}),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)(u.a,{gap:5,justify:"start",align:"start"},Object(r.createElement)(c.FlexItem,null,Object(r.createElement)("p",{className:"bwf-c-input-label"},Object(o.__)("Redirect After Confirmation","wp-marketing-automations")),Object(r.createElement)(c.ButtonGroup,{className:"bwf-btn-group-tabs"},Object(r.createElement)(c.Button,{key:"url",isPrimary:"url"===T,isSecondary:"url"!==T,onClick:function(){return b.setRedirectMode("url")}},Object(o.__)("URL","wp-marketing-automations")),Object(r.createElement)(c.Button,{key:"file",isPrimary:"file"===T,isSecondary:"file"!==T,onClick:function(){return b.setRedirectMode("file")}},Object(o.__)("File","wp-marketing-automations"))))),Object(r.createElement)("div",{className:"bwf_clear_16"}),Object(r.createElement)(c.TextControl,{label:"",value:N,onChange:function(e){return b.setRedirectUrl(e)},placeholder:Object(o.__)("Enter URL","wp-marketing-automations")}),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)(c.ToggleControl,{label:Object(o.__)("Add Tags after confirmation","wp-marketing-automations"),className:"bwf-tooglecontrol-advance",onChange:function(e){return b.setAddTagEnabled(e)},checked:!!S}),S&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf_clear_10"}),Object(r.createElement)(_.a,{onTagsChange:function(e){b.setTagList(e.map((function(e){return{id:e.key,value:e.label}})))},selected:(t=[],Object(O.isEmpty)(C)||C.map((function(e){t.push({key:e.id,label:e.value})})),t)})),Object(r.createElement)("p",null,Object(o.__)("Note: The settings will work when confirmation link is clicked","wp-marketing-automations"))))),Object(r.createElement)("div",{className:"bwf-crm-import-section"},Object(r.createElement)(c.ToggleControl,{label:Object(o.__)("Auto-confirm Contacts","wp-marketing-automations"),help:Object(o.__)("This will automatically mark new Contacts as Subscribed","wp-marketing-automations"),onChange:function(e){return b.setMarketingStatus(e)},className:"bwf-tooglecontrol-advance",checked:!!h})),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(r.createElement)(u.a,null,Object(r.createElement)(u.b,null,Object(r.createElement)(c.Button,{className:"bwf-display-flex",isSecondary:!0,onClick:function(){return b.setStep("mapping")}},Object(o.__)("Back","wp-marketing-automations"))),Object(r.createElement)(u.b,{className:"bwf_text_right"},3===parseInt(p)&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.Button,{onClick:function(){return U(p)},isSecondary:!0},Object(o.__)("Save","wp-marketing-automations")),Object(r.createElement)(c.Button,{onClick:function(){return U(2)},className:"bwf-ml-10",isPrimary:!0,isBusy:1===d},Object(o.__)("Save & Activate","wp-marketing-automations"))),2===parseInt(p)&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.Button,{onClick:function(){return U(3)},isSecondary:!0},Object(o.__)("Deactivate","wp-marketing-automations")),Object(r.createElement)(c.Button,{onClick:function(){return U(p)},className:"bwf-ml-10",isPrimary:!0,isBusy:1===d},Object(o.__)("Save","wp-marketing-automations"))),1===parseInt(p)&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.Button,{onClick:function(){return U(p)},isSecondary:!0},Object(o.__)("Save As Draft","wp-marketing-automations")),Object(r.createElement)(c.Button,{onClick:function(){return U(2)},className:"bwf-ml-10",isPrimary:!0,isBusy:1===d},Object(o.__)("Activate","wp-marketing-automations"))))))))}},814:function(e,t,n){"use strict";var r=n(0),a=n(27),c=n(2),o=n(140);t.a=function(e){var t=e.selected,n=e.onTagsChange;return Object(r.createElement)("div",{className:"bwf-c-field-mapper-terms"},Object(r.createElement)("div",{className:"bwf-input-label"},Object(c.__)("Add Tags","wp-marketing-automations")),Object(r.createElement)(a.a,{autocompleter:o.b,multiple:!1,allowFreeTextSearch:!0,inlineTags:!1,selected:t,onChange:function(e){n(e)},onRemoveTag:function(e,r){var a=t.filter((function(t){return!(t.key==e&&t.label==r)}));n(a)},placeholder:Object(c.__)("Search by tag name","wp-marketing-automations"),showClearButton:!0,disabled:!1}))}}}]);