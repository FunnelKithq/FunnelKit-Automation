(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1091:function(e,t,n){},1173:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(2),r=n(4),a=n(3),i=n(69),s=n(24),l=n(258),u=n(128),b=n(5),f=n(8);function m(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=function(e){var t=e.isSyncable,n=void 0!==t&&t,a=e.isConnected,l=e.id,u=e.connector,d=m(e,["isSyncable","isConnected","id","connector"]),O=Object(i.b)(),j=d.ispro,v=(void 0===j||j)&&(!Object(b.mb)()||!Object(b.kb)());return Object(c.createElement)("div",{className:"wfco-connector-btns"},Object(c.createElement)("div",{className:"wfco-connector-btns-left"},!v&&!!a&&Object(c.createElement)(r.Button,{isLink:!0,icon:"no-alt",onClick:function(){return O(s.a.showDisconnectModal(u))}},Object(o.__)("Disconnect","wp-marketing-automations"))),Object(c.createElement)("div",{className:"wfco-connector-btns-right"},!!v&&Object(c.createElement)(r.Button,{className:"bwf-display-flex",isPrimary:!0,onClick:function(){return O(s.a.showGetPro(!0))}},Object(c.createElement)(f.a,{icon:"lock",size:15,color:"#ffffff"}),Object(c.createElement)("span",null,Object(o.__)("Locked","wp-marketing-automations"))),!v&&!a&&Object(c.createElement)(r.Button,{isPrimary:!0,onClick:function(){return O(s.a.showSettingsModal(u))}},Object(o.__)("Connect","wp-marketing-automations")),!v&&!!n&&!!parseInt(l)&&!!a&&Object(c.createElement)(r.Button,{isPrimary:!0,onClick:function(){return O(s.a.showSyncModal(u))}},Object(o.__)("Sync","wp-marketing-automations")),!v&&!!a&&Object(c.createElement)(r.Button,{isSecondary:!0,onClick:function(){return O(s.a.showSettingsModal(u))}},Object(o.__)("Settings","wp-marketing-automations"))))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=function(){return Object(c.createElement)("div",{className:"wfco-col-md-4"},Object(c.createElement)("div",{className:"wfco-connector-wrap"},Object(c.createElement)("div",{className:"wfco-connector_card_outer"},Object(c.createElement)("div",{className:"wfco-connector-img-outer"},Object(c.createElement)("div",{className:"wfco-connector-img"},Object(c.createElement)(u.a,{height:90,width:110}))),Object(c.createElement)("div",{className:"wfco_connector_info"},Object(c.createElement)("div",{className:"wfco_connector_info_head"},Object(c.createElement)(u.a,null)),Object(c.createElement)("div",{className:"wfco_connector_info_details"},Object(c.createElement)(u.a,{width:180}),Object(c.createElement)(u.a,{width:160}),Object(c.createElement)(u.a,{width:140})))),Object(c.createElement)("div",{className:"wfco-connector-action"},Object(c.createElement)("div",{className:"wfco-connector-btns"},Object(c.createElement)(u.a,{height:36})))))},_=function(e){var t=e.connector,n=e.connector_id,r=e.name,a=e.logo,i=e.description,s=e.is_connected,l=e.is_syncable,u=(e.meta,e.new),b=void 0===u?0:u,f=j(e,["connector","connector_id","name","logo","description","is_connected","is_syncable","meta","new"]);return Object(c.createElement)("div",{className:"wfco-col-md-4"},Object(c.createElement)("div",{className:"wfco-connector-wrap"},Object(c.createElement)("div",{className:"wfco-connector_card_outer"},!!a&&Object(c.createElement)("div",{className:"wfco-connector-img-outer"},Object(c.createElement)("div",{className:"wfco-connector-img"},Object(c.createElement)("div",{className:"wfco-connector-img-section"},Object(c.createElement)("img",{src:a})))),Object(c.createElement)("div",{className:"wfco_connector_info"},b?Object(c.createElement)("span",{className:"bwf-tags bwf-tag-green"},Object(o.__)("New","wp-marketing-automations")):null,!!r&&Object(c.createElement)("div",{className:"wfco_connector_info_head"},r),!!i&&Object(c.createElement)("div",{className:"wfco_connector_info_details"},i))),Object(c.createElement)("div",{className:"wfco-connector-action"},Object(c.createElement)(d,O({isConnected:s,isSyncable:l,connector:t,id:n},f)))))},p=n(92);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}var g=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(i.b)(),n=Object(i.c)(l.a.shouldShowGetPro),r=!Object(b.kb)()&&Object(b.mb)()?{modalContent:{title:Object(o.__)("Activate Connector Addon","wp-marketing-automations"),content:Object(o.__)("Download the addon from your FunnelKit Account and activate the license to access integrations. ","wp-marketing-automations"),demoLabel:Object(o.__)("Close","wp-marketing-automations"),proLabel:Object(o.__)("Login to FunnelKit","wp-marketing-automations"),proLink:"https://myaccount.funnelkit.com/"}}:{};return Object(c.createElement)(p.a,w({},r,{isOpen:n,onRequestClose:function(){return t(s.a.showGetPro(!1))},showLock:!(!Object(b.kb)()&&Object(b.mb)())}))},y=n(287),h=n(44),E=n(254),k=n(17);function C(e,t,n,c,o,r,a){try{var i=e[r](a),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(c,o)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],c=!0,o=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(c=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);c=!0);}catch(e){o=!0,r=e}finally{try{c||null==i.return||i.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(){var e=Object(i.b)(),t=Object(i.c)(l.a.settingsModalOpen),n=Object(i.c)(l.a.saveConnectorError),u=Object(i.c)(l.a.saveConnectorStatus),b=!!u&&"idle"===u,f=!!u&&"loading"===u,m=!!u&&"connected"===u,d=Object(i.c)(l.a.getCurrentConnector),O=d.fields_schema,j=void 0===O?[]:O,v=d.fields_values,_=void 0===v?{}:v,p=d.name,w=void 0===p?"":p,g=d.is_connected,N=d.connector,P=d.connector_id,x=d.direct_connect,D=void 0!==x&&x,T=d.meta,A=(T=void 0===T?{}:T).redirect_url,L=void 0===A?"":A,B=T.connect_type,F=void 0===B?"normal":B,z=T.action,I=void 0===z?"":z,R=T.buttonLabel,U=void 0===R?"":R,K=T.busyLabel,q=void 0===K?"":K,H=Object(c.useCallback)((function(t){return e(s.a.saveConnector({connector:N,settings:g?M(M({},t),{},{id:P}):t}))}),[s.a,g,P]),G=Object(c.useCallback)((function(){window.location.href=L}),[L]);Object(c.useEffect)((function(){!g&&D&&Z(Object(a.isEmpty)(_)||Object(a.isUndefined)(_)?{}:_)}),[D]);var J=S(Object(c.useState)(!1),2),Y=J[0],$=J[1],Q=S(Object(c.useState)(!1),2),V=Q[0],W=Q[1],X=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==I){e.next=2;break}return e.abrupt("return");case 2:return t={v:2,action:I},$(!0),e.next=6,fetch(bwfanParams.ajax_url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},credentials:"same-origin",body:Object(k.stringify)(t)});case 6:return n=e.sent,e.next=9,n.json();case 9:(c=e.sent).hasOwnProperty("msg")&&"string"==typeof c.msg?(W(!0),setTimeout((function(){$(!1)}),1e3),window.location.href=L+"&n="+(new Date).getTime()):$(!1);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(c,o){var r=e.apply(t,n);function a(e){C(r,c,o,a,i,"next",e)}function i(e){C(r,c,o,a,i,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),Z=function(e){switch(F){case"redirect_url":G();break;case"ajax_redirect_url":X();break;default:H(e)}};return Object(c.createElement)(c.Fragment,null,t&&Object(c.createElement)(r.Modal,{className:"bwf-admin-modal bwf-admin-modal-medium bwfan-connector-settings-modal",isDismissible:b,shouldCloseOnClickOutside:!1,shoulfCloseOnEsc:!1,onRequestClose:function(){return!!b&&e(s.a.hideSettingsModal())},title:!!w&&Object(o.__)("Connect with ","wp-amrketing-automations-crm")+w},Object(c.createElement)("div",{className:"bwfan-connector-settings-modal-inner"},!!n&&Object(c.createElement)(r.Notice,{status:"error",isDismissible:!0,onRemove:function(){return e(s.a.clearSaveConnectorError())}},n),!!f&&Object(c.createElement)("div",{className:"bwf-t-center"},Object(c.createElement)(h.a,null)),!!m&&Object(c.createElement)("div",{className:"bwf-t-center"},Object(c.createElement)(E.a,null),Object(c.createElement)("div",{className:"bwf-h1"},Object(o.__)("Connected / Updated Successfully","wp-marketing-automations"))),!!b&&Object(a.size)(j)>0&&Object(c.createElement)(y.a,{fields:j,values:Object(a.isEmpty)(_)||Object(a.isUndefined)(_)?{}:_,handleSubmit:function(e){return Z(e)},submitButtonTitle:function(){if(g&&0===Object(a.size)(_))return"";if("ajax_redirect_url"===F){var e="Connect";return V?e="Redirecting...":Y&&q?e=q:U&&(e=U),e}return g&&"redirect_url"!==F?"Update":"Connect"}(),isLoading:Y,connector:N}),!!b&&0===Object(a.size)(j)&&Object(c.createElement)("p",null,Object(o.__)("No settings available for this connector","wp-marketing-automations")))))},T=n(135),A=function(){var e=Object(i.b)(),t=Object(i.c)(l.a.disconnectModalOpen),n=Object(i.c)(l.a.deleteConnectorError),r=Object(i.c)(l.a.deleteConnectorStatus),a=!!r&&"idle"===r,u=!!r&&"loading"===r,b=!!r&&"success"===r,f=Object(i.c)(l.a.getCurrentConnector).connector;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(T.a,{isOpen:t,modalTitle:Object(o.__)("Disconnect Connector","wp-marketing-automations"),deleteDescriptionText:Object(o.__)("You are about to disconnect connector. All the action, tasks, logs of this connector will be deleted. Cancel to stop, Proceed to continue.","wp-marketing-automations"),confirmButtonText:Object(o.__)("Proceed","wp-marketing-automations"),cancelButtonText:Object(o.__)("Cancel","wp-marketing-automations"),onConfirm:function(){return e(s.a.deleteConnector(f))},isLoading:u,successMessage:!!b&&Object(o.__)("Disconnected Successfully!","wp-marketing-automations"),errorMessage:!!n&&n,onRequestClose:function(){return!!a&&e(s.a.hideDisconnectModal())},isDelete:!0,showSuccessMsg:!0}))},L=function(){var e=Object(i.b)(),t=Object(i.c)(l.a.syncModalOpen),n=Object(i.c)(l.a.syncConnectorError),r=Object(i.c)(l.a.syncConnectorStatus),a=!!r&&"idle"===r,u=!!r&&"loading"===r,b=!!r&&"success"===r,f=Object(i.c)(l.a.getCurrentConnector),m=f.connector,d=f.connector_id;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(T.a,{isOpen:t,modalTitle:Object(o.__)("Sync Connector","wp-marketing-automations"),deleteDescriptionText:Object(o.__)("You are about to sync connector. All the data of this connector will be synced. Cancel to stop, Proceed to continue","wp-marketing-automations"),confirmButtonText:Object(o.__)("Proceed","wp-marketing-automations"),cancelButtonText:Object(o.__)("Cancel","wp-marketing-automations"),onConfirm:function(){return e(s.a.syncConnector({connector:m,id:d}))},isLoading:u,successMessage:!!b&&Object(o.__)("Synced Successfully!","wp-marketing-automations"),errorMessage:!!n&&n,onRequestClose:function(){return!!a&&e(s.a.hideSyncModal())},isDelete:!0,showSuccessMsg:!0}))},B=n(67),F=n(15),z=function(e){var t=e.wfco_connector,n=void 0===t?"":t,o=e.access_token,r=void 0===o?"":o,u=e.bwfco_access_t,b=void 0===u?"":u,f=Object(i.b)(),m="success"===Object(i.c)(l.a.getConnectorsStatus),d=Object(c.useCallback)((function(){f(s.a.showSettingsModal(n)),f(s.a.saveConnector({connector:n,settings:{access_token:Object(a.isEmpty)(r)?b:r}})),Object(F.k)({page:e.page},e.path,{})}),[n,r,f,b]);return Object(c.useEffect)((function(){"bwfco_slack"===n&&(r||b)&&m&&d()}),[n,r,d,m,b]),null},I=function(e){var t=e.bitly,n=void 0===t?"":t,o=e.login,r=void 0===o?"":o,a=e.access_token,u=void 0===a?"":a,b=e.bwfco_access_t,f=void 0===b?"":b,m=Object(i.b)(),d="success"===Object(i.c)(l.a.getConnectorsStatus),O=Object(c.useCallback)((function(){m(s.a.showSettingsModal("bwfco_bitly")),m(s.a.saveConnectorSuccess({connector:"bwfco_bitly",id:"bitly"})),Object(F.k)({page:e.page},e.path,{});var t=setTimeout((function(){m(s.a.hideSettingsModal()),clearInterval(t)}),3e3)}),[m]);return Object(c.useEffect)((function(){"yes"===n&&(u||f)&&r&&O()}),[n,u,r,O,d,f]),null},R=function(e){var t=e.wfco_connector,n=void 0===t?"":t,r=e.status,a=void 0===r?0:r,u=e.error_msg,b=Object(i.b)(),f="success"===Object(i.c)(l.a.getConnectorsStatus);return Object(c.useEffect)((function(){if("bwfco_mautic"===n&&"success"===a&&f){b(s.a.showSettingsModal(n)),b(s.a.dummyConnectorSuccess()),Object(F.k)({page:e.page},e.path,{});var t=setTimeout((function(){b(s.a.hideSettingsModal()),clearInterval(t)}),3e3)}if("bwfco_mautic"===n&&"failed"===a&&f){b(s.a.showSettingsModal(n));var c=u||Object(o.__)("Unknown Error Occurred","wp-marketing-automations");b(s.a.saveConnectorFailed(c))}}),[n,a,f]),null},U=function(e){var t=e.wfco_connector,n=void 0===t?"":t,o=e.code,r=void 0===o?"":o,a=e.state,u=void 0===a?"":a,b=e.client_id,f=void 0===b?"":b,m=e.client_secret,d=void 0===m?"":m,O=e.redirect_url,j=void 0===O?"":O,v=Object(i.b)(),_="success"===Object(i.c)(l.a.getConnectorsStatus),p=Object(i.c)(l.a.getConnector("bwfco_zoom")),w=p&&p.fields_values?p.fields_values:{},g=p&&p.fields_schema?p.fields_schema:{},y=Object(c.useCallback)((function(){v(s.a.showSettingsModal(n)),v(s.a.saveConnector({connector:n,settings:{code:r,state:u,client_id:f,client_secret:d,redirect_url:j}}))}),[n,r,u,v,f,d,j]);return Object(c.useEffect)((function(){if((w.code||w.state)&&w.client_id&&w.client_secret&&w.redirect_url){var t={client_id:w.client_id,client_secret:w.client_secret,redirect_url:w.redirect_url};v(s.a.setConnectorSchema({connector:"bwfco_zoom",schema:g,values:t,saveStatus:"connected"})),Object(F.k)({page:e.page},e.path,{})}}),[w]),Object(c.useEffect)((function(){"bwfco_zoom"===n&&r&&u&&_&&y()}),[n,r,u,y,_]),null},K=n(134),q=n(139),H=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},r=Object(K.a)(),a=r.setActiveMultiple,i=r.setL2NavType,s=r.setL2Nav,l=r.resetHeaderMenu,u=r.setPageHeader,m=r.setPageCountData,d=r.setPageHeaderBelowContent,O=Object(q.a)(),j=O.getPageCountData,v=j();return Object(c.useEffect)((function(){v!==t&&(l(),a({leftNav:"connectors",rightNav:e}),i("menu"),s(n.connectors_nav),u("Connectors"),t&&m(t),!Object(b.kb)()&&Object(b.mb)()&&d(Object(c.createElement)("div",{className:"bwf-shield-notice"},Object(c.createElement)("span",{className:"bwf-display-flex"},Object(c.createElement)(f.a,{icon:"shield"})),Object(c.createElement)("p",{className:"bwf-shield-notice-content"},Object(o.__)("FunnelKit Automations Connector Addon is not installed. To access integrations, download the addon from your FunnelKit account and activate the license. ","wp-marketing-automations"),Object(c.createElement)("a",{href:"https://myaccount.funnelkit.com/",className:"bwf-noticebar-btn",target:"_blank",rel:"noreferrer"},Object(o.__)("Login to FunnelKit","wp-marketing-automations"))))))}),[e,t]),!0},G=(n(1091),function(e){var t=e.connector,n=void 0===t?"":t,o=e.code,r=void 0===o?"":o,a=e.state,u=void 0===a?"":a,b=e.client_id,f=void 0===b?"":b,m=e.client_secret,d=void 0===m?"":m,O=Object(i.b)(),j="success"===Object(i.c)(l.a.getConnectorsStatus),v=Object(i.c)(l.a.getConnector("bwfco_keap")),_=v&&v.fields_values?v.fields_values:{},p=v&&v.fields_schema?v.fields_schema:{},w=Object(c.useCallback)((function(){O(s.a.showSettingsModal("bwfco_keap")),O(s.a.saveConnector({connector:"bwfco_keap",settings:{code:r,state:u,client_id:f,client_secret:d}}))}),[n,r,u,O,f,d]);return Object(c.useEffect)((function(){if((_.code||_.state)&&_.client_id&&_.client_secret){var t={client_id:_.client_id,client_secret:_.client_secret};O(s.a.setConnectorSchema({connector:"bwfco_keap",schema:p,values:t,saveStatus:"connected"})),Object(F.k)({page:e.page},e.path,{})}}),[_]),Object(c.useEffect)((function(){"keap"===n&&r&&u&&j&&w()}),[n,r,u,w,j]),null});function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=Object(c.memo)((function(e){var t=e.size,n=void 0===t?15:t;return Object(c.createElement)("div",{className:"wfco_global wfco_connector_listing"},Object(c.createElement)("div",{className:"wfco_connector_listing_wrap wfco_clearfix"},Object(c.createElement)("div",{className:"wfco-row"},Array.from(Array(n).keys()).map((function(e){return Object(c.createElement)(v,{key:e})})))))})),W=Object(c.memo)((function(e){var t=e.selected,n=void 0===t?"all":t,u=location&&location.search?Object(k.parse)(location.search.substring(1)):{};z(u),I(u),R(u),G(u),U(u);var f=Object(K.a)().setPageHeaderBelowContent,m=Object(i.c)(l.a.settingsModalOpen),d=Object(i.c)(l.a.disconnectModalOpen),O=Object(i.c)(l.a.syncModalOpen),j=Object(i.b)(),v=Object(i.c)(l.a.getConnectorsStatus),p=Object(i.c)(l.a.getConnectorsError),w=Object(i.c)(l.a.getConnectors),y="loading"===v,h=Object(i.c)(l.a.getConnectorsCount);Object(c.useEffect)((function(){return Object(b.g)(Object(o.__)("Connectors","wp-marketing-automations")),j(s.a.getConnectors()),0,function(){return f("")}}),[]);var E={all:Object(o.__)("No connector found","wp-marketing-automations"),active:Object(o.__)("No active connector found","wp-marketing-automations"),inactive:Object(o.__)("No inactive connector found","wp-marketing-automations")};H(Object(o.__)("Connectors","wp-marketing-automations"),n,h),Object(c.useEffect)((function(){if(!Object(a.isEmpty)(w)){var e=[],t={all:0,active:0,inactive:0};Object.keys(w).sort().forEach((function(c){var o=w[c];("all"===n||"inactive"===n&&!o.is_connected||"active"===n&&o.is_connected)&&(e.push(c)),t.all++,o.is_connected?t.active++:t.inactive++})),j(s.a.getCount(t))}}),[w,n]);var C=Object(c.useMemo)((function(){if(!Object(a.isEmpty)(w)){var e=[];return Object.keys(w).map((function(t){var c=w[t];("all"===n||"inactive"===n&&!c.is_connected||"active"===n&&c.is_connected)&&e.push($($({},c),{},{connector:t}))})),e.sort((function(e,t){return e.priority-t.priority})),Object(c.createElement)(c.Fragment,null,Object(c.createElement)(B.a,null),Object(c.createElement)("div",{className:"wfco_global wfco_connector_listing"},Object(c.createElement)("div",{className:"wfco_connector_listing_wrap wfco_clearfix"},Object(c.createElement)("div",{className:"wfco-row"},e.map((function(e,t){return Object(c.createElement)(_,J({key:t},e))})),0===e.length&&Object(c.createElement)("div",{className:"bwf-p"},E[n])))))}}),[w,n]);return Object(c.createElement)("div",{className:"bwfan_global bwfan_global_settings bwfan_connectors"},Object(c.createElement)("div",{className:"bwfan_global_settings_wrap"},!!p&&Object(c.createElement)(r.Notice,{status:"error"},p),!!y&&Object(c.createElement)(V,null),!y&&!!w&&C,m&&Object(c.createElement)(D,null),d&&Object(c.createElement)(A,null),O&&Object(c.createElement)(L,null),Object(c.createElement)(g,null)))}));t.default=W}}]);