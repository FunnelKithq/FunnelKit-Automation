(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1184:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(4),i=n(5),o=n(8),c=n(2),u=n(876),s=n(91),l=n(252),b=n(15),f=n(248),m=n(135),p=n(58),g=n(90),O=n(16),d=n(10),j=n.n(d),y=n(27),h=n(32),v=n.n(h),w=n(115),k=n.n(w),E=n(31),_=n.n(E),S=n(3),C=n(288);function P(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}var x=function(e){var t=e.query,n=t.hasOwnProperty("s")?t.s:"",a=v()(n)?[]:[{key:n,label:Object(c.__)("Search Link Trigger: ","wp-marketing-automations")+n,bwfLabelSource:"bwfcrm_lists",isSearchTerm:!0}],i=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var r,a,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k()(n)){e.next=2;break}return e.abrupt("return");case 2:if(v()(n)||(r=n[n.length-1],(n=[])[0]=r),a=n.find((function(e){return _()(e,"key")})),!(!Object(S.isUndefined)(a)&&n.length>0&&n[0].hasOwnProperty("key")&&parseInt(n[0].key)>0)){e.next=7;break}return Object(b.k)({path:"/link-trigger/"+n[0].key},"/",t),e.abrupt("return");case 7:if(i=Object(S.isUndefined)(a)?void 0:a.label,o=_()(t,"s")&&!v()(t.s)?t.s:"",i!==o){e.next=11;break}return e.abrupt("return");case 11:Object(b.k)({s:i},"/",t);case 12:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){P(i,r,a,o,c,"next",e)}function c(e){P(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return Object(r.createElement)(y.a,{autocompleter:C.a,multiple:!1,allowFreeTextSearch:!0,inlineTags:!0,selected:a,onChange:i,placeholder:Object(c.__)("Search by name","wp-marketing-automations"),showClearButton:!0,disabled:!1})},L=n(134),A=n(830),D=n(851),T=n(204),N=n(139),R=n(803);function I(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}var M=function(e){var t=e.isOpen,n=e.links,a=e.onSuccess,o=e.onError,u=e.onRequestClose,s=Object(R.a)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({path:Object(i.m)("/link-triggers/delete"),method:"DELETE",data:{ids:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){I(i,r,a,o,c,"next",e)}function c(e){I(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(){setTimeout((function(){return s.reset()}),2500),a&&a(),u&&u()},onError:function(){o&&o()}});return Object(r.createElement)(m.a,{modalTitle:Object(c.__)("Delete Trigger"),deleteEntityName:1===n.length?n[0].title:"".concat(n.length," Trigger"),confirmButtonText:Object(c.__)("Delete","wp-marketing-automations"),cancelButtonText:Object(c.__)("Cancel","wp-marketing-automations"),onConfirm:function(){return s.mutate(n.map((function(e){return e.ID})))},errorMessage:s.isError&&(s.error&&s.error.message?s.error.message:Object(c.__)("Unable to delete link triggers","wp-marketing-automations")),onRequestClose:function(){return!!u&&u()},isOpen:t,isDelete:!0})};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=[{id:"delete",icon:"trash",hint:Object(c.__)("Delete Links","wp-marketing-automations")}],V=function(e){var t=e.floatingBarProps,n=void 0===t?{}:t,a=e.resetSelection,i=e.onSuccess,o=B(Object(r.useState)([]),2),c=o[0],u=o[1],s=B(Object(r.useState)(!1),2),l=s[0],b=s[1],f=function(){a&&a(),u([])},m=Object(r.useCallback)((function(e,t){switch(e){case"delete":u(t),b(!0)}}),[]);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(T.a,q({actions:F,onAction:m},n)),Object(r.createElement)(M,{links:c,isOpen:l,onSuccess:function(){i&&i("delete",c),f()},onError:f,onRequestClose:function(){return b(!1)}}))},z=n(92);function J(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function $(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){J(i,r,a,o,c,"next",e)}function c(e){J(i,r,a,o,c,"throw",e)}o(void 0)}))}}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||Y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=function(e){var t=e.selected,n=Object(b.i)(),u=Object(L.a)().setActiveMultiple,s=K(Object(r.useState)(""),2),l=s[0],d=s[1],y=Object(A.a)().setSingleLinkValue,h={all:"",inactive:1,active:2};Object(r.useEffect)((function(){Object(i.g)(Object(c.__)("Link Triggers","wp-marketing-automations"))}),[]);var v=Object(N.a)().getPageCountData,w=Object(L.a)().setPageCountData;Object(r.useEffect)((function(){u({leftNav:"link-triggers",rightNav:t}),d(h.hasOwnProperty(t)?h[t]:"")}),[t]);var k=Object(A.a)(),E=k.fetchAll,_=k.setLinkListValues,C=Object(D.a)(),P=C.getLoading,R=C.getAllLists,I=C.getTotalCount,M=C.getPageOffset,q=C.getPerPageCount,B=C.getPageNumber,U=C.getCountData,F=C.getActions,J=R(),G=M(),Q=q(),W=P(),X=I(),Z=B(),ee=U(),te=F(),ne=v();Object(r.useEffect)((function(){w(H(H({},ne),ee))}),[ee]);var re=Object(r.useMemo)((function(){var e={};if(Array.isArray(J)){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Y(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}(J);try{for(n.s();!(t=n.n()).done;){var r=t.value;e[r.ID]=r}}catch(e){n.e(e)}finally{n.f()}}return e}),[J]),ae=Object(T.b)(re),ie=ae.singleSelectProps,oe=ae.selectAllProps,ce=ae.floatingBarProps,ue=ae.resetSelection;Object(r.useEffect)((function(){E(n,G,Q,l)}),[G,Q,n.s,l]);var se=K(Object(r.useState)({loading:!1,status:!1}),2),le=se[0],be=se[1],fe=Object(r.useContext)(i.d),me=function(){var e=$(regeneratorRuntime.mark((function e(t){var r,a,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},be(H(H({},r),{},{status:!0})),e.prev=2,e.next=5,j()({path:Object(i.m)("/link-triggers/delete"),method:"DELETE",data:{ids:[t]}});case 5:if(!(a=e.sent)||200!==a.code){e.next=12;break}fe("Link trigger deleted"),be({status:!1}),E(n,G,Q,l),e.next=13;break;case 12:throw Error(Object(i.j)(null==a?void 0:a.message));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),be({status:!0,error:e.t0.message?e.t0.message:Object(c.__)("Error in deleting link","wp-marketing-automations")});case 18:Object(i.eb)(fe,2e3);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=$(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fe(Object(c.__)("Cloning...","wp-marketing-automations")),e.prev=1,e.next=4,j()({path:Object(i.m)("/link-trigger/".concat(t,"/clone")),method:"GET"}).then((function(e){200==e.code&&(fe(Object(c.__)("Link Trigger cloned","wp-marketing-automations")),E(n,0,Q,l))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),fe(e.t0.message);case 9:Object(i.eb)(fe,2e3);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(e){switch(e.hasOwnProperty("status")?parseInt(e.status):1){case 1:return Object(r.createElement)("span",{className:"bwf-tags bwf-tag-gray"},Object(c.__)("Inactive","wp-marketing-automations")," ");case 2:return Object(r.createElement)("span",{className:"bwf-tags bwf-tag-green"},Object(c.__)("Active","wp-marketing-automations")," ");default:return Object(r.createElement)("span",{className:"bwf-tags bwf-tag-gray"},Object(c.__)("Draft","wp-marketing-automations")," ")}},Oe=function(e){return Object(r.createElement)(p.a,{label:Object(c.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(t){var n=t.onToggle;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(g.a,{isClickable:!0,onInvoke:function(){y("listData",e),Object(b.k)({page:"autonami",path:"/link-trigger/"+parseInt(e.ID)},"/",{}),n()}},Object(r.createElement)(O.a,{justify:"flex-start"},Object(r.createElement)(O.c,null,Object(r.createElement)(o.a,{icon:"edit"})),Object(r.createElement)(O.c,null,Object(c.__)("Edit","wp-marketing-automations")))),Object(r.createElement)(g.a,{isClickable:!0,onInvoke:function(){var t,r,a=Object(i.U)()+"/?bwfan-link-trigger="+e.hash;t=a,(r=document.createElement("textarea")).value=t,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),fe(Object(c.__)("Link copied","wp-marketing-automations")),Object(i.eb)(fe,1e3),n()}},Object(r.createElement)(O.a,{justify:"flex-start"},Object(r.createElement)(O.c,null,Object(r.createElement)(o.a,{icon:"copy"})),Object(r.createElement)(O.c,null,Object(c.__)("Copy","wp-marketing-automations")))),Object(r.createElement)(g.a,{isClickable:!0,onInvoke:function(){pe(parseInt(e.ID)),n()}},Object(r.createElement)(O.a,{justify:"flex-start"},Object(r.createElement)(O.c,null,Object(r.createElement)(o.a,{icon:"duplicate"})),Object(r.createElement)(O.c,null,Object(c.__)("Clone","wp-marketing-automations")))),Object(r.createElement)(g.a,{isClickable:!0,onInvoke:function(){var t={modalTitle:Object(c.__)("Delete Trigger"),status:!0,deleteEntityName:e.title,buttonConfirm:Object(c.__)("Confirm","wp-marketing-automations"),buttonCancel:Object(c.__)("Cancel","wp-marketing-automations"),isDelete:!0};be(H(H({},t),{},{onConfirm:function(){return me(e.ID,t)}})),n()}},Object(r.createElement)(O.a,{justify:"flex-start"},Object(r.createElement)(O.c,null,Object(r.createElement)(o.a,{icon:"trash"})),Object(r.createElement)(O.c,null,Object(c.__)("Delete","wp-marketing-automations")))))}})},de=[{key:"select_link",label:Object(r.createElement)(a.CheckboxControl,oe),isLeftAligned:!1,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"actions",label:"",isLeftAligned:!1,cellClassName:"bwf-col-action bwf-w-45"},{key:"name",label:Object(c.__)("Name","wp-marketing-automations"),isLeftAligned:!0},{key:"created_on",label:Object(c.__)("Created On","wp-marketing-automations"),isLeftAligned:!0,required:!0,cellClassName:"bwf-w-180"},{key:"desc",label:Object(c.__)("Description","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-210"},{key:"linkaction",label:Object(c.__)("Actions","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-210"},{key:"autologin",label:Object(c.__)("Auto Login","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-120 bwf-col-center"},{key:"clicks",label:Object(c.__)("Clicks","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-90 bwf-col-center"},{key:"status",label:Object(c.__)("Status","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-60 bwf-col-center"}],je=function(e){return Object(r.createElement)("a",{href:"admin.php?page=autonami&path=/link-trigger/"+e.ID,type:"bwf-crm",className:"bwf-a-no-underline",onClick:function(t){t.preventDefault(),y("listData",e),Object(b.k)({page:"autonami",path:"/link-trigger/"+e.ID},"/",{})}},Object(r.createElement)("b",null,e.title.charAt(0).toUpperCase()+e.title.slice(1)+" "))},ye=function(e){var t="-";return e.hasOwnProperty("data")&&e.data.hasOwnProperty("desc")&&!Object(S.isEmpty)(e.data.desc)&&(t=Object(r.createElement)("p",{className:"bwf-p-0 bwf-m-0"},e.data.desc)),t},he=function(e){if(e.hasOwnProperty("data")&&e.data.hasOwnProperty("actions")&&!Object(S.isEmpty)(e.data.actions)){var t=e.data.actions,n="",a=[];return Object.keys(t).map((function(e){te.hasOwnProperty(e)&&(Object(S.isEmpty)(n)&&(n=te[e]),a.push(Object(r.createElement)("span",{key:e},te[e])))})),Object(S.isEmpty)(n)&&Object(S.isEmpty)(a)?"-":Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-table-v-center"},Object(r.createElement)("span",null,n),!Object(S.isEmpty)(a)&&a.length>1&&Object(r.createElement)(z.a,{items:a})))}return"-"},ve=function(e){var t="No";return e.hasOwnProperty("data")&&e.data.hasOwnProperty("enable_auto_login")&&e.data.enable_auto_login&&(t="Yes"),t},we=J.map((function(e){return[{display:ie&&ie[e.ID]&&Object(r.createElement)(a.CheckboxControl,ie[e.ID]),value:""},{display:Oe(e),value:"action"},{display:e.hasOwnProperty("title")?je(e):"-",value:""},{display:e.created_at?Object(i.N)(e.created_at):" - ",value:e.created_at},{display:ye(e),value:""},{display:he(e),value:""},{display:ve(e),value:""},{display:e.hasOwnProperty("total_clicked")?e.total_clicked:"-",value:""},{display:ge(e),value:""}]})),ke=function(e){e!==Q&&_("limit",e)};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(f.a,{className:"bwf-link-table has-search",title:"",rows:we,headers:de,query:{paged:Z},rowsPerPage:Q,totalRows:X,isLoading:W,onPageChange:function(e,t){_("offset",(e-1)*Q)},onQueryChange:function(e){return"per_page"!==e?function(){}:ke},showMenu:!1,rowHeader:!0,actions:[Object(r.createElement)(x,{key:"search",query:n})],emptyMessage:Object(c.__)("No link trigger found.","wp-marketing-automations")}),Object(r.createElement)(m.a,{modalTitle:Object(c.__)("Delete Trigger","wp-marketing-automations"),content:le.content,deleteEntityName:le.deleteEntityName,confirmText:le.confirmText,confirmButtonText:le.buttonConfirm,cancelButtonText:le.buttonCancel,onConfirm:le.onConfirm,isLoading:le.loading,successMessage:le.success,errorMessage:le.error,onRequestClose:function(){return be({status:!1})},isOpen:le.status,isDelete:!le.hasOwnProperty("isDelete")||le.isDelete}),Object(r.createElement)(V,{floatingBarProps:ce,resetSelection:ue,onSuccess:function(){return E(n,0,Q,l)}}))};n(254),n(255),n(44);function Z(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=function(e){var t=e.onCloseModal,n=Object(r.useContext)(i.d),u=(Object(b.i)(),ee(Object(r.useState)(!1),2)),s=u[0],l=u[1],f=ee(Object(r.useState)(""),2),m=f[0],p=f[1],g=ee(Object(r.useState)({}),2),O=(g[0],g[1]),d=ee(Object(r.useState)(null),2),y=d[0],h=d[1],v=ee(Object(r.useState)(null),2),w=v[0],k=v[1],E=Object(A.a)().setSingleLinkValue;Object(r.useEffect)((function(){l(!1),O({}),h(""),p("")}),[]);var _=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),p(""),e.prev=2,e.next=5,j()({path:Object(i.m)("/link-trigger/"),method:"POST",data:{title:y,desc:w,only_title:!0}});case 5:if(!(t=e.sent)||200!=t.code){e.next=13;break}Object(i.J)()||(bwfcrm_contacts_data.first_link_trigger_id=1),n(t.message),E("listData",{title:y,status:0}),Object(b.k)({page:"autonami",path:"/link-trigger/"+t.result.id},"/",{}),e.next=14;break;case 13:throw Error(Object(i.j)(null==t?void 0:t.message));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),l(!1),p(e.t0.message);case 20:Object(i.eb)(n,2e3);case 21:case"end":return e.stop()}}),e,null,[[2,16]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){Z(i,r,a,o,c,"next",e)}function c(e){Z(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),C=function(){Object(S.isEmpty)(y)?p(Object(c.__)("Name is required.","wp-marketing-automations")):(p(""),_())};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.Modal,{className:"bwf-admin-modal bwf-admin-modal-squeezy bwf-h--core-header",onRequestClose:function(){return t()}},Object(r.createElement)("div",{className:"bwf-modal-header"},Object(r.createElement)("div",{className:"bwf-modal-heading"},Object(c.__)("Add Link Trigger","wp-marketing-automations")),Object(r.createElement)("span",{onClick:function(){return t()},className:"bwf-modal-close"},Object(r.createElement)(o.a,{icon:"close",color:"#353030"}))),Object(r.createElement)("div",{className:"bwf-form-fields",onKeyPress:function(e){"Enter"==e.key&&C()}},m&&Object(r.createElement)(a.Notice,{status:"error",onRemove:function(){return p("")}},m),Object(r.createElement)(a.TextControl,{placeholder:Object(c.__)("Enter link trigger name","wp-marketing-automations"),autoFocus:!0,label:Object(c.__)("Name","wp-marketing-automations"),value:y||"",onChange:function(e){return h(e)},disabled:s}),Object(r.createElement)(a.TextareaControl,{label:Object(c.__)("Description","wp-marketing-automations"),type:"text",value:w||"",placeholder:Object(c.__)("Enter Description","wp-marketing-automations"),onChange:function(e){k(e)}}),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf_text_right bwf-form-buttons"},Object(r.createElement)(a.Button,{onClick:function(){return t()},className:"bwf-cancel-btn"},Object(c.__)("Cancel","wp-marketing-automations")),Object(r.createElement)(a.Button,{isPrimary:!0,disabled:s,isBusy:s,onClick:function(){C()}},Object(c.__)("Add","wp-marketing-automations"))))))},re=n(67);function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=e.selected,n=ae(Object(r.useState)(!1),2),b=n[0],f=n[1],m=ae(Object(r.useState)(!1),2),p=m[0],g=m[1],O=Object(r.createElement)(a.Button,{isPrimary:!0,className:"bwf-display-flex",onClick:function(){Object(i.lb)()?g(!0):f(!0)}},!Object(i.lb)()&&Object(r.createElement)(o.a,{icon:"lock",size:"15"}),Object(r.createElement)("span",null,Object(c.__)("Add New Link Trigger","wp-marketing-automations")));Object(u.a)(Object(c.__)("Link Triggers","wp-marketing-automations"),O,t);var d=[{type:"icon",data:{class:"bwf-pb-gap",content:Object(r.createElement)(o.a,{icon:"zero-link-trigger",size:90})}},{type:"content",data:{class:"bwf-h2 bwf-pb-10",content:Object(c.__)("No Link Triggers Created","wp-marketing-automations")}},{type:"content",data:{class:"bwf-h4-1 bwf-pb-gap",content:Object(c.__)("Links Triggers allow you to tag and segment your subscribers when they click a link in an email\non your site anywhere.","wp-marketing-automations")}},{type:"buttons",data:{buttons:[{text:Object(c.__)("Create Link Trigger","wp-marketing-automations"),proCheck:!0,onClick:function(){Object(i.lb)()?g(!0):f(!0)}}]}}];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(re.a,null),Object(i.J)()&&Object(i.lb)()?Object(r.createElement)(X,{selected:t}):Object(r.createElement)(l.a,{data:d}),Object(r.createElement)(s.a,{isOpen:b,onRequestClose:function(){return f(!1)}}),p&&Object(r.createElement)(ne,{onCloseModal:function(){return g(!1)}}))}},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(12),a=n(7),i=n.n(a),o=n(25),c=n(13),u=n(26),s=n(253),l=function(e){function t(t,n){var r;return(r=e.call(this)||this).client=t,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(u.a)(t,e);var n=t.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},n.onUnsubscribe=function(){var e;this.listeners.length||(null==(e=this.currentMutation)||e.removeObserver(this))},n.onMutationUpdate=function(e){this.updateResult();var t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:void 0!==e?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:Object(s.b)();this.currentResult=Object(r.a)({},e,{isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset})},n.notify=function(e){var t=this;o.a.batch((function(){t.mutateOptions&&(e.onSuccess?(null==t.mutateOptions.onSuccess||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):e.onError&&(null==t.mutateOptions.onError||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)}))}))},t}(n(52).a),b=n(251);function f(e,t,n){var a=i.a.useRef(!1),u=i.a.useState(0)[1],s=Object(c.k)(e,t,n),f=Object(b.b)(),m=i.a.useRef();m.current?m.current.setOptions(s):m.current=new l(f,s);var p=m.current.getCurrentResult();i.a.useEffect((function(){a.current=!0;var e=m.current.subscribe(o.a.batchCalls((function(){a.current&&u((function(e){return e+1}))})));return function(){a.current=!1,e()}}),[]);var g=i.a.useCallback((function(e,t){m.current.mutate(e,t).catch(c.i)}),[]);if(p.error&&m.current.options.useErrorBoundary)throw p.error;return Object(r.a)({},p,{mutate:g,mutateAsync:p.mutate})}},830:function(e,t,n){"use strict";var r=n(136),a=n(5);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(){var e=Object(r.a)("linkTriggerListData"),t=e.fetch,n=e.setStateProp,i=u(e,["fetch","setStateProp"]),c=Object(r.a)("singleLinkTriggerData"),s=c.fetch,l=c.setStateProp;return o(o({},i),{},{fetchAll:function(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=e.s,c={offset:n,limit:r,search:o,status:i};t("GET",Object(a.m)("/link-triggers"),c)},setLinkListValues:function(e,t){n(e,t)},fetchSingleLink:function(e){l("error",{}),s("GET",Object(a.m)("/link-trigger/".concat(e)))},setSingleLinkValue:function(e,t){l(e,t)}})}},851:function(e,t,n){"use strict";var r=n(137);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(){var e=Object(r.a)("linkTriggerListData"),t=e.getStateProp,n=c(e,["getStateProp"]),a=Object(r.a)("singleLinkTriggerData"),o=a.getStateProp,u=a.getLoading;return i(i({},n),{},{getAllLists:function(){return t("data")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getCountData:function(){return t("countData")},getPerPageCount:function(){return parseInt(t("limit"))},getPageOffset:function(){return parseInt(t("offset"))},getTotalCount:function(){return parseInt(t("total_count"))},getActions:function(){return t("actions")},getSingleLinkLoad:function(){return u()},getSingleLinkData:function(){return o("data")},getLinkActionList:function(){return o("actionList")},getLinkActionSchemaList:function(){return o("actionSchema")},getLinkEditableStatus:function(){return o("isEditable")},getSingleLinkError:function(){return o("error")},getSingleLinkListData:function(){return o("listData")}})}},876:function(e,t,n){"use strict";var r=n(134),a=n(0),i=n(3);t.a=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},c=Object(r.a)(),u=c.setActiveMultiple,s=c.setL2NavType,l=c.setL2Nav,b=c.resetHeaderMenu,f=c.setPageHeader,m=c.setPageCountData,p=c.setL2Content;return Object(a.useEffect)((function(){b(),u({leftNav:"link-triggers",rightNav:t}),s("menu"),l(o.links_triggers_nav),f("Link Triggers"),!Object(i.isEmpty)(n)&&m({templates:n}),e&&p(e)}),[n]),!0}}}]);