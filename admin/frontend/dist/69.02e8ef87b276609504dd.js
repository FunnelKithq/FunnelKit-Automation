(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(3),c=a(2),i=a(10),o=a.n(i),s=a(4),l=a(15),m=a(5),b=a(796),p=a(805),u=a(17),d=a(142),f=a(277),O=a(67),y=a(8),j=a(134);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(e,t,a,n,r,c,i){try{var o=e[c](i),s=o.value}catch(e){return void a(e)}o.done?t(s):Promise.resolve(s).then(n,r)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=location&&location.search?Object(u.parse)(location.search.substring(1)):{},a=Object(p.a)(),i=E(Object(n.useState)(!0),2),g=i[0],h=i[1],_=E(Object(n.useState)({}),2),k=_[0],P=_[1],N=E(Object(n.useState)(!0),2),S=N[0],x=N[1],C=E(Object(n.useState)({message:"",type:1}),2),T=C[0],I=C[1],A=Object(j.a)().setL2Title;Object(n.useEffect)((function(){A("title"in k?k.title:"")}),[k]);var B=E(Object(n.useState)(!1),2),F=B[0],D=B[1],J=E(Object(n.useState)(!1),2),M=J[0],R=(J[1],a.setCampaignValues),q=a.setExclude,H=(Object(m.k)(),function(){var e=!0;!Object(r.isEmpty)(k.title)&&[1,2,3].includes(parseInt(k.type))&&(e=!1),!e&&2==k.type&&M&&(e=!0),e||3!=k.type||Object(m.vb)()||(e=!0),x(e)}),L=b.a.getCampaignId(),U=b.a.getCampaignData(),V=b.a.getExcludes(),W=!!(!(!U||!U.parent)&&U.parent);Object(n.useEffect)((function(){U&&L>0&&e.campaignId==L&&(P({title:U.title,description:U.description,type:U.type,isPromotional:!U.data||!U.data.hasOwnProperty("is_promotional")||U.data.is_promotional,abType:U.data&&U.data.hasOwnProperty("ab_type")?U.data.ab_type:"standard"}),h(!1)),0==e.campaignId&&(P({title:"",description:"",type:0,isPromotional:!1,abType:!1}),h(!1))}),[L]),Object(n.useEffect)((function(){H()}),[k,M]);var $=function(){var a,n=(a=regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(S){a.next=18;break}if(e.setPending(!0),c=void 0,c={title:U.title,description:U.description,type:U.type,isPromotional:U.data&&U.data.hasOwnProperty("is_promotional")?U.data.is_promotional:null,abType:U.data&&U.data.hasOwnProperty("ab_type")?U.data.ab_type:null},JSON.stringify(c)==JSON.stringify(k)){a.next=14;break}if(!(L>0)){a.next=12;break}return a.prev=4,a.next=7,o()({path:Object(m.m)("/broadcast/".concat(L)),method:"POST",data:{data:{title:k.title,description:k.description,type:k.type,promotional:k.isPromotional,ab_type:k.abType,modified_by:Object(m.x)(),exclude:V},step:1},headers:{"Content-Type":"application/json"}}).then((function(e){if(200==e.code){R("data",w(w({},U),{},{title:e.result.title,description:e.result.description,type:e.result.type,data:e.result.data})),I({message:e.message,type:1});var a=U.data&&!Object(r.isNull)(U.data)&&U.data.hasOwnProperty("filters")?U.data.filters:{};Object(r.isEmpty)(a)||Object(l.k)(a,"/",t),R("step",2)}else I({message:e.message,type:0})}));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(4),I({message:a.t0.message,type:0});case 12:a.next=17;break;case 14:n=U.data&&U.data.hasOwnProperty("filters")?U.data.filters:{},Object(r.isEmpty)(n)||Object(l.k)(n,"/",t),R("step",2);case 17:e.setPending(!1);case 18:case"end":return a.stop()}var c}),a,null,[[4,9]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var c=a.apply(e,t);function i(e){v(c,n,r,i,o,"next",e)}function o(e){v(c,n,r,i,o,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(O.a,null),g||Object(r.isEmpty)(k)?Object(n.createElement)("div",{className:"bwf-crm-campaign-preview bwf-placeholder-content"},[0,1,2,3,4].map((function(e){return Object(n.createElement)("div",{className:"bwf-crm-campaign-field",key:e},Object(n.createElement)("div",{className:"is-placeholder long",style:{width:"20%"}}),Object(n.createElement)("div",{className:"is-placeholder long",style:{width:"100%"}}))}))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-campaign-step-div bwf-card-wrap bwf-campaign-step-1"},Object(n.createElement)("div",{className:"bwf-card-header"},Object(n.createElement)("span",{className:"bwf-form-title"},Object(c.__)("Information","wp-marketing-automations"))),Object(n.createElement)("div",{className:"bwf-card-bg-wrap"},Object(n.createElement)(s.TextControl,{value:k.title,label:Object(c.__)("Name","wp-marketing-automations"),className:"bwf-campaign-input-field",placeholder:Object(c.__)("Enter Name","wp-marketing-automations"),onChange:function(e){P(w(w({},k),{},{title:e}))}}),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)("div",null,Object(n.createElement)(s.Flex,{gap:5,justify:"start",align:"start"},Object(n.createElement)(s.FlexItem,null,Object(n.createElement)("p",{className:"bwf-c-input-label"},Object(c.__)("Type","wp-marketing-automations")),Object(n.createElement)(f.a,{isSelected:"standard"===k.abType,onClick:function(){P(w(w({},k),{},{abType:"standard"}))},alterButton:!0},Object(c.__)("Standard","wp-marketing-automations")),Object(n.createElement)(f.a,{isSelected:"ab"===k.abType,onClick:function(){P(w(w({},k),{},{abType:"ab"}))},alterButton:!0},Object(c.__)("A/B Test","wp-marketing-automations"))))),Object(n.createElement)("div",{className:"bwf_clear_20"}),!W&&Object(n.createElement)(s.CheckboxControl,{className:"bwf-crm-campaign-toggle",label:Object(c.__)("Send it to all contacts including unsubscribers","wp-marketing-automations"),help:[Object(n.createElement)(n.Fragment,{key:1},Object(c.__)("This allows you to send the email to all your contacts, even if their status is unsubscribed or unverified.","wp-marketing-automations")),Object(n.createElement)("br",{key:2}),Object(n.createElement)(n.Fragment,{key:3},Object(c.__)("On the default mode, your broadcast will be sent only to the subscribed contacts","wp-marketing-automations"))],checked:!k.isPromotional,onChange:function(e){q([]),P(w(w({},k),{},{isPromotional:!e}))}}),F&&Object(n.createElement)(s.Modal,{title:Object(c.__)("Configure SMS Setting","wp-marketing-automations"),onRequestClose:function(){return D(!1)},style:{minWidth:"540px",height:"fit-content"},className:"bwf-crm-merge-tag-model"},Object(n.createElement)("p",null,Object(n.createElement)(y.a,{icon:"profile"})),Object(n.createElement)("a",{href:"admin.php?page=autonami&tab=connector",className:"bwf-a-no-underline"},Object(c.__)("Click Here to go configuration page","wp-marketing-automations")),Object(n.createElement)("p",null,Object(n.createElement)(s.Button,{isPrimary:!0,onClick:function(){return D(!1)}},Object(c.__)("Cancel","wp-marketing-automations")))),Object(n.createElement)(d.a,{message:T.message,type:T.type,removeMessage:function(){return I({message:"",type:1})}})),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)("div",{className:"bwf-crm-stepper-navigation bwf_text_right"},Object(n.createElement)(s.Button,{isPrimary:!0,className:"bwf-crm-navigation-next",disabled:S,onClick:function(){H(),$()},isBusy:e.isPending},Object(n.createElement)("span",null,Object(c.__)("Next","wp-marketing-automations")))))))}}}]);