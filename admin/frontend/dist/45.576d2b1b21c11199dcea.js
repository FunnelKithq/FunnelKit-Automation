(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1180:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(2),i=a(262),c=a(260),o=a(15),l=a(259),s=a(798),u=a(68),m=a(5),b=a(8),f=function(e){var t=e.query,a=Object(u.a)(Object(m.X)()).formatAmount,f=s.a.getEmailAnalytics,p=s.a.getEmailAnalyticsLoading,d=t.chart?t.chart:"email_sents",g=p(),O=f(),y=function(e){if(!O||!O.hasOwnProperty("totals"))return 0;var t=O.totals;return t.hasOwnProperty(e)?t[e]:void 0};return Object(r.createElement)("div",{className:"bwf-crm-emails-report-tiles"},Object(r.createElement)(i.a,null,(function(){var e;return e=[Object(r.createElement)(c.a,{key:1,value:parseInt(y("email_sents")),label:Object(n.__)("Sent","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/emails&chart=email_sents",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"email_sents"},"/",t)},selected:"email_sents"==d,tileIcon:Object(r.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(r.createElement)(b.a,{icon:"sent",size:30}))}),Object(r.createElement)(c.a,{key:2,value:parseInt(y("email_click")),label:Object(n.__)("Clicks","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/emails&chart=email_click",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"email_click"},"/",t)},selected:"email_click"==d,tileIcon:Object(r.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(r.createElement)(b.a,{icon:"cursor",size:30}))})].concat([Object(m.xb)()?[Object(r.createElement)(c.a,{key:3,value:parseInt(y("total_orders")),label:Object(n.__)("Orders","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/emails&chart=total_orders",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"total_orders"},"/",t)},selected:"total_orders"==d,tileIcon:Object(r.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(r.createElement)(b.a,{icon:"order",size:30}))}),Object(r.createElement)(c.a,{key:4,value:a(y("total_revenue")),label:Object(n.__)("Revenue","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/emails&chart=total_revenue",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"total_revenue"},"/",t)},selected:"total_revenue"==d,tileIcon:Object(r.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(r.createElement)(b.a,{icon:"revenue",size:30}))})]:[]]),g?Object(r.createElement)(l.a,{numberOfItems:Object(m.xb)()?4:2,hideDelta:!0}):e})))},p=a(261),d=a(29),g=function(e){var t=e.query,a=t.chart?t.chart:"email_sents",i=s.a.getEmailAnalyticsLoading,c=s.a.getEmailAnalytics,o=i(),l=c(),u=t.chartType?t.chartType:"line",m=Object(d.f)(t),b=Object(d.b)(function(e){return e.period&&null!=e.period&&""!=e.period||(e.period="month"),e.compare&&null!=e.compare&&""!=e.compare||(e.compare="previous_year"),e}(t));b.includes(m)||(m=b[b.length-1]);var f={email_sents:Object(n.__)("Sent","wp-marketing-automations"),email_click:Object(n.__)("Clicks","wp-marketing-automations"),total_orders:Object(n.__)("Orders","wp-marketing-automations"),total_revenue:Object(n.__)("Revenue","wp-marketing-automations")};return Object(r.createElement)(p.a,{isRequesting:o,data:function(e){var t=[];l&&l.hasOwnProperty("intervals")&&l.intervals.map((function(a){"email_sents"===e&&t.push({date:a.start_date,email_sents:{label:Object(n.__)("SMS Sent","wp-marketing-automations"),value:parseInt(a.subtotals.email_sents)}}),"email_click"===e&&t.push({date:a.start_date,email_click:{label:Object(n.__)("SMS Clicks","wp-marketing-automations"),value:parseInt(a.subtotals.email_click)}}),"total_orders"===e&&t.push({date:a.start_date,total_orders:{label:Object(n.__)("Total Orders","wp-marketing-automations"),value:parseInt(a.subtotals.total_orders)}}),"total_revenue"===e&&t.push({date:a.start_date,total_revenue:{label:Object(n.__)("Total Revenue","wp-marketing-automations"),value:parseInt(a.subtotals.total_revenue)}})}));return t}(a),title:f[a],interval:m,layout:"item-comparison",chartType:u,interactiveLegend:!0})},O=a(273),y=a(285),v=a(32),j=a.n(v),h=a(10),_=a.n(h),w=a(17),k=a(31),E=a.n(k);function P(e,t,a,r,n,i,c){try{var o=e[i](c),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,n)}function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){D(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var S=A(A({},y.a),{options:function(e){return(t=regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return a={search:t,type:1,mode:2,limit:5,offset:0},e.next=5,_()({path:Object(m.m)("/analytics/engagements/search?"+Object(w.stringify)(a)),method:"GET"});case 5:return r=e.sent,n=E()(r,"result")?r.result.map((function(e){return{key:e.id,name:e.title,label:e.title}})):[],e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})),a=function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function c(e){P(i,r,n,c,o,"next",e)}function o(e){P(i,r,n,c,o,"throw",e)}c(void 0)}))},function(e){return a.apply(this,arguments)})(e);var t,a}});function L(e,t,a,r,n,i,c){try{var o=e[i](c),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,n)}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){C(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Y=I(I({},a(860).a),{options:function(e){return(t=regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return a={search:t,type:2,mode:2,limit:5,offset:0},e.next=5,_()({path:Object(m.m)("/analytics/engagements/search?"+Object(w.stringify)(a)),method:"GET"});case 5:return r=e.sent,n=E()(r,"result")?r.result.map((function(e){return{key:e.id,name:e.title,label:e.title}})):[],e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})),a=function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function c(e){L(i,r,n,c,o,"next",e)}function o(e){L(i,r,n,c,o,"throw",e)}c(void 0)}))},function(e){return a.apply(this,arguments)})(e);var t,a}});function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){R(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function R(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function q(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return F(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var G=function(e){var t=e.query,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(t.hasOwnProperty("filter")){var a=0;return"broadcast"==t.filter?a=2:"automation"==t.filter&&(a=1),_()({path:Object(m.m)("/analytics/entity/data/?type=".concat(a,"&oid=").concat(e)),method:"GET"}).then((function(e){return 200==e.code&&e.hasOwnProperty("result")?[{key:e.result.id,label:e.result.title}]:[]}))}},i=[{staticParams:["page","path","period","chart","chartType"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(n.__)("All SMS","wp-marketing-automations"),value:"all"}]}];if(Object(m.mb)()){var c=[{label:Object(n.__)("Single Automation","wp-marketing-automations"),value:"select_automation",subFilters:[{component:"Search",value:"automation",path:["select_automation"],autocompleter:S,settings:{type:"custom",param:"id",selected:!0,getLabels:a,labels:{placeholder:Object(n.__)("Type to search for a automation","wp-marketing-automations"),button:Object(n.__)("Automation","wp-marketing-automations")}}}]},{label:Object(n.__)("Single Broadcast","wp-marketing-automations"),value:"select_broadcast",subFilters:[{component:"Search",value:"broadcast",path:["select_broadcast"],autocompleter:Y,settings:{type:"custom",param:"id",getLabels:a,labels:{placeholder:Object(n.__)("Type to search for a broadcast","wp-marketing-automations"),button:Object(n.__)("Broadcast","wp-marketing-automations")}}}]}];i[0].filters=[].concat(q(i[0].filters),c)}return Object(r.createElement)("div",{className:"bwf-crm-emails-report-filter"},Object(r.createElement)(O.a,{siteLocale:"en-US",path:"/",query:t,filterTitle:"Email",filters:i,onDateSelect:function(e){var a=N(N({},t),e);delete a.compare,Object(o.k)(a,"/",{})},showDatePicker:!0,isoDateFormat:d.g,hideCompare:!0,dateQuery:function(e){e.compare="previous_year";var t=Object(d.e)(e),a=t.period,r=t.compare,n=t.before,i=t.after,c=Object(d.c)(e);return{period:a,compare:r,before:n,after:i,primaryDate:c.primary,secondaryDate:c.secondary}}(t),currency:Object(m.X)()}))},B=a(811),H=a(3),z=a(268),U=a(812),X=a(67),J=a(248),Q=a(92);function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(){var e=Object(u.a)(Object(m.X)()).formatAmount,t=Object(B.a)(),a=t.fetchEmailAnalytics,i=t.fetchEmailTable,c=t.setEmailTableData,l=t.setEmailAnalyticsData;Object(U.a)("sms",!1,"");var b=Object(o.i)(),p=function(e){return e.compare="previous_year",Object(d.c)(e).primary};b.hasOwnProperty("period")||(b.period="month");var O=$(Object(r.useState)(!0),2),y=O[0],v=O[1],j=s.a.getEmailTableLoading,h=s.a.getEmailTableLimit,_=s.a.getEmailTableOffset,w=s.a.getEmailTablePage,k=s.a.getEmailTableList,E=s.a.getEmailTableTotal,P=j(),T=_(),A=h(),D=w(),S=k(),L=E(),M=b.period,I=b.compare,C=b.interval,Y=b.after,x=b.before,N=b.id,R=b.filter,q=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,c=arguments.length>4?arguments[4]:void 0,o=p(e),l="",s="";o&&(Object(H.isEmpty)(o.after)||(l=o.after.format("YYYY-MM-DD HH:mm:ss")),Object(H.isEmpty)(o.before)||(s=o.before.format("YYYY-MM-DD 23:59:59")),Object(H.isEmpty)(l)||Object(H.isEmpty)(s)||(r&&a(l,s,t,N,R,2),i(n,c,l,s,t,N,R,2)))};Object(r.useEffect)((function(){if(Object(m.g)("SMS Analytics"),Object(m.mb)()){var e=b.hasOwnProperty("interval")?b.interval:"day";q(b,e,!0,A,T)}else{for(var t=p(b),a=0,r=0,n=0,i=0,o=[],s=t.after;s.isBefore(t.before);s.add(1,"days")){var u=Math.floor(11*Math.random()),f=Math.floor(Math.random()*parseInt(u)),d=Math.floor(Math.random()*parseInt(f)),g=Math.floor(100*Math.random());o.push({date_end_gmt:s.format("YYYY-MM-DD")+" 23:59:59",date_start_gmt:s.format("YYYY-MM-DD")+" 00:00:00",end_date:s.format("YYYY-MM-DD")+" 23:59:59",interval:s.format("YYYY-MM-DD"),start_date:s.format("YYYY-MM-DD")+" 00:00:00",subtotals:{click_rate:(f/u*100).toFixed(2),email_click:f,email_sents:u,total_orders:d,total_revenue:g}}),a+=u,r+=f,n+=d,i+=g}l("data",{totals:{click_rate:(r/a*100).toFixed(2),email_click:r,email_sents:a,total_orders:n,total_revenue:i},intervals:o}),l("isLoading",!1),c("data",[{click_count:r,click_rate:(r/a*100).toFixed(2),conversions:n,oid:"5",revenue:i,sent:a,subject:"Dummy Message",template:"",tid:"52",title:"Dummy SMS",type:"1"}]),c("isLoading",!1)}}),[M,I,C,Y,x,N,R]);var F,K=[{key:"message",label:Object(n.__)("Message","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-360 bwf-max-w-400"},{key:"source",label:Object(n.__)("Source","wp-marketing-automations"),isLeftAligned:!1},{key:"sent",label:Object(n.__)("Sent","wp-marketing-automations"),isLeftAligned:!0,isNumeric:!0},{key:"click",label:Object(n.__)("Click","wp-marketing-automations"),isLeftAligned:!1,isNumeric:!0},Object(m.xb)()?{key:"orders",label:Object(n.__)("Orders","wp-marketing-automations"),isLeftAligned:!0}:{},Object(m.xb)()?{key:"revenue",label:Object(n.__)("Revenue","wp-marketing-automations"),isLeftAligned:!1,isNumeric:!0}:{}],V=function(e){if(e!==A){c("limit",e);var t=b.hasOwnProperty("interval")?b.interval:"day";q(b,t,!1,e,T)}};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(X.a,null),Object(r.createElement)("div",{className:"bwf-crm-analytics-wrap bwf-crm-emails-report-wrap"},Object(r.createElement)(G,{query:b}),Object(r.createElement)("div",{className:"bwf_clear_24"}),Object(r.createElement)(z.a,{className:"bwf-emails-report-header-chart",title:Object(n.__)("Performance","wp-marketing-automations")}),Object(r.createElement)(f,{query:b}),Object(r.createElement)(g,{query:b}),Object(r.createElement)(J.a,{title:Object(n.__)("SMS","wp-marketing-automations"),rows:(F=[],Object(H.isEmpty)(S)||S.map((function(t){var a=parseFloat(t.click_rate)?" ( "+parseFloat(t.click_rate).toFixed(2)+"% ) ":"";F.push([{display:t.template?Object(r.createElement)("div",{className:"bwf-pre-line"},t.template):"-",value:t.subject},{display:t.title?t.title:"-",value:t.title},{display:parseInt(t.sent)?parseInt(t.sent):"-",value:t.sent},{display:parseInt(t.click_count)?t.click_count+a:"-",value:t.click_count},Object(m.xb)()?{display:parseInt(t.conversions)?parseInt(t.conversions):"-",value:t.conversions}:{},Object(m.xb)()?{display:e(t.revenue),value:t.revenue}:{}])})),F),headers:K,query:{paged:D},rowsPerPage:A?parseInt(A):25,totalRows:L,isLoading:P,onPageChange:function(e,t){var a=(e-1)*A;c("offset",a);var r=b.hasOwnProperty("interval")?b.interval:"day";q(b,r,!1,A,a)},onQueryChange:function(e){return"per_page"!==e?function(){}:V},showMenu:!1,rowHeader:!0,emptyMessage:Object(n.__)("No SMS found","wp-marketing-automations")})),!Object(m.mb)()&&Object(r.createElement)(Q.a,{isOpen:y,onRequestClose:function(){return v(!1)},closeOnClickOut:!1,modalContent:{demoLabel:Object(n.__)("Try Demo","wp-marketing-automations")}}))}},798:function(e,t,a){"use strict";var r=a(137),n=a(257),i=Object(r.a)(n.b.cartAnalytics).getStateProp,c=Object(r.a)(n.b.contactAnalytics).getStateProp,o=Object(r.a)(n.b.emailAnalytics).getStateProp,l=Object(r.a)(n.b.emailTable).getStateProp,s=Object(r.a)(n.b.engagementAnalytics).getStateProp,u=Object(r.a)(n.b.directEmailTable).getStateProp,m={getCartAnalytics:function(){return i("data")},getCartAnalyticsLoading:function(){return i("isLoading")},getContactAnalytics:function(){return c("data")},getContactAnalyticsLoading:function(){return c("isLoading")},getEmailAnalytics:function(){return o("data")},getEmailAnalyticsLoading:function(){return o("isLoading")},getEmailTableList:function(){return l("data")},getEmailTableTotal:function(){return l("total")},getEmailTableOffset:function(){return l("offset")},getEmailTableLimit:function(){return l("limit")},getEmailTableLoading:function(){return l("isLoading")},getEmailTablePage:function(){return parseInt(l("offset"))/parseInt(l("limit"))+1},getEngagementAnalytics:function(){return s("data")},getEngagementAnalyticsLoading:function(){return s("isLoading")},getDirectEmailTableList:function(){return u("data")},getDirectEmailTableTotal:function(){return u("total")},getDirectEmailTableOffset:function(){return u("offset")},getDirectEmailTableLimit:function(){return u("limit")},getDirectEmailTableLoading:function(){return u("isLoading")},getDirectEmailTablePage:function(){return parseInt(u("offset"))/parseInt(u("limit"))+1}};t.a=m},811:function(e,t,a){"use strict";var r=a(136),n=a(5),i=a(257),c=a(17),o=function(e){var t=0;return"automation"===e?t=1:"broadcast"===e&&(t=2),t};t.a=function(){var e=Object(r.a)(i.b.cartAnalytics).fetch,t=Object(r.a)(i.b.contactAnalytics),a=t.fetch,l=t.setStateProp,s=Object(r.a)(i.b.emailAnalytics),u=s.fetch,m=s.setStateProp,b=Object(r.a)(i.b.emailTable),f=b.fetch,p=b.setStateProp,d=Object(r.a)(i.b.engagementAnalytics),g=d.fetch,O=d.setStateProp,y=Object(r.a)(i.b.directEmailTable),v=y.fetch,j=y.setStateProp;return{fetchCartAnalytics:function(t,a,r){e("GET",Object(n.m)("/analytics/carts/")+"?"+Object(c.stringify)({after:t,before:a,interval:r}))},fetchContactAnalytics:function(e,t,r){a("GET",Object(n.m)("/analytics/contacts/")+"?"+Object(c.stringify)({after:e,before:t,interval:r}))},fetchEmailAnalytics:function(e,t,a,r,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;u("GET",Object(n.m)("/analytics/emails/chart/")+"?"+Object(c.stringify)({after:e,before:t,interval:a,oid:r,type:o(i),mode:l}))},fetchEmailTable:function(e,t,a,r,i,l,s){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;f("GET",Object(n.m)("/analytics/emails/tabular/")+"?"+Object(c.stringify)({after:a,before:r,interval:i,oid:l,type:o(s),limit:e,offset:t,mode:u}))},setEmailTableData:function(e,t){p(e,t)},fetchEngagementData:function(e,t){g("GET",Object(n.m)("/analytics/engagement")+"?"+Object(c.stringify)({after:e,before:t}))},setContactAnalyticsData:function(e,t){l(e,t)},setEmailAnalyticsData:function(e,t){m(e,t)},setEngagementData:function(e,t){O(e,t)},fetchDirectEmailTable:function(e,t,a,r,i){v("GET",Object(n.m)("/analytics/direct-emails/tabular/")+"?"+Object(c.stringify)({after:a,before:r,interval:i,limit:e,offset:t}))},setDirectEmailTableData:function(e,t){j(e,t)}}}},812:function(e,t,a){"use strict";var r=a(134),n=a(0);t.a=function(e,t,a){var i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},c=Object(r.a)(),o=c.setActiveMultiple,l=c.resetHeaderMenu,s=c.setL2NavType,u=c.setL2Nav,m=c.setBackLink,b=c.setL2Title,f=c.setPageHeader;return Object(n.useEffect)((function(){l(),!t&&s("menu"),!t&&u(i.reports_nav),o({leftNav:"analytics-"+e,rightNav:e+"-analytics"}),t&&m(t),a&&b(a),f("Analytics")}),[e,a]),!0}},860:function(e,t,a){"use strict";var r=a(0),n=a(2),i=a(10),c=a.n(i),o=a(14),l=a.n(o),s=a(31),u=a.n(s),m=a(32),b=a.n(m),f=a(5),p=a(17);function d(e,t,a,r,n,i,c){try{var o=e[i](c),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,n)}var g=function(e){return e.name};t.a={name:"broadcast",className:"bwf-search-bwf-broadcast-result",options:function(e){return(t=regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return a={search:t,type:2,limit:5,offset:0},e.next=5,c()({path:Object(f.m)("/analytics/engagements/search?"+Object(p.stringify)(a)),method:"GET"});case 5:return r=e.sent,n=u()(r,"result")?r.result.map((function(e){return{key:e.id,name:e.title,label:e.title}})):[],e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})),a=function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function c(e){d(i,r,n,c,o,"next",e)}function o(e){d(i,r,n,c,o,"throw",e)}c(void 0)}))},function(e){return a.apply(this,arguments)})(e);var t,a},isDebounced:!0,getOptionIdentifier:function(e){return e.key},getOptionKeywords:function(e){return[e.name]},getFreeTextOptions:function(e,t){return[{key:"name",label:Object(r.createElement)("span",{key:"name",className:"bwf-search-result-name"},l()({mixedString:Object(n.__)("All broadcast with names that include {{query /}}","wp-marketing-automations"),components:{query:Object(r.createElement)("strong",{className:"components-form-token-field__suggestion-match"},e)}})),value:{id:e,name:e,tags:t.map((function(e){return u()(e,"value")?e.value:e})),searchTerm:e}}]},getOptionLabel:function(e,t){var a=Object(f.i)(g(e),t)||{};return Object(r.createElement)("span",{key:"name",className:"bwf-search-result-name","aria-label":g(e)},a.suggestionBeforeMatch,Object(r.createElement)("strong",{className:"components-form-token-field__suggestion-match"},a.suggestionMatch),a.suggestionAfterMatch)},getOptionCompletion:function(e){return e}}}}]);