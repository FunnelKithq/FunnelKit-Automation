(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),i=a(262),c=a(260),o=a(15),l=a(259),s=a(798),u=a(68),m=a(5),b=a(8),f=function(e){var t=e.query,a=Object(u.a)(Object(m.X)()).formatAmount,f=s.a.getEmailAnalytics,p=s.a.getEmailAnalyticsLoading,d=t.chart?t.chart:"email_sents",g=p(),O=f(),y=function(e){if(!O||!O.hasOwnProperty("totals"))return 0;var t=O.totals;return t.hasOwnProperty(e)?t[e]:void 0};return Object(n.createElement)("div",{className:"bwf-crm-emails-report-tiles"},Object(n.createElement)(i.a,null,(function(){var e;return e=[Object(n.createElement)(c.a,{key:1,value:parseInt(y("email_sents")),label:Object(r.__)("Sent","wp-marketing-automations"),href:"admin.php?page=autonami&path=/analytics/emails&chart=email_sents",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"email_sents"},"/",t)},selected:"email_sents"===d,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(b.a,{icon:"sent",size:30}))}),Object(n.createElement)(c.a,{key:2,value:parseFloat(y("open_rate"))+" %",label:Object(r.__)("Open Rate","wp-marketing-automations"),href:"admin.php?page=autonami&path=/analytics/emails&chart=open_rate",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"open_rate"},"/",t)},selected:"open_rate"===d,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(b.a,{icon:"open-in-popup",size:30}))}),Object(n.createElement)(c.a,{key:3,value:parseFloat(y("click_rate"))+" %",label:Object(r.__)("Click Rate","wp-marketing-automations"),href:"admin.php?page=autonami&path=/analytics/emails&chart=click_rate",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"click_rate"},"/",t)},selected:"click_rate"===d,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(b.a,{icon:"cursor",size:30}))})].concat([Object(m.wb)()?[Object(n.createElement)(c.a,{key:4,value:parseInt(y("total_orders")),label:Object(r.__)("Orders","wp-marketing-automations"),href:"admin.php?page=autonami&path=/analytics/emails&chart=total_orders",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"total_orders"},"/",t)},selected:"total_orders"===d,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(b.a,{icon:"order",size:30}))}),Object(n.createElement)(c.a,{key:5,value:a(y("total_revenue")),label:Object(r.__)("Revenue","wp-marketing-automations"),href:"admin.php?page=autonami&path=/analytics/emails&chart=total_revenue",onLinkClickCallback:function(e){e.preventDefault(),delete t.compare,Object(o.k)({chart:"total_revenue"},"/",t)},selected:"total_revenue"===d,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(b.a,{icon:"revenue",size:30}))})]:[]]),g?Object(n.createElement)(l.a,{numberOfItems:Object(m.wb)()?5:3,hideDelta:!0}):e})))},p=a(261),d=a(29),g=function(e){var t,a=e.query,i=a.chart?a.chart:"email_sents",c=s.a.getEmailAnalyticsLoading,o=s.a.getEmailAnalytics,l=c(),u=o(),m=a.chartType?a.chartType:"line",b=Object(d.f)(a),f=Object(d.b)(((t=a).period&&""!==t.period||(t.period="month"),t.compare&&""!==t.compare||(t.compare="previous_year"),a));f.includes(b)||(b=f[f.length-1]);var g={email_sents:Object(r.__)("Sent","wp-marketing-automations"),email_open:Object(r.__)("Open","wp-marketing-automations"),email_click:Object(r.__)("Clicks","wp-marketing-automations"),total_orders:Object(r.__)("Orders","wp-marketing-automations"),total_revenue:Object(r.__)("Revenue","wp-marketing-automations")};return Object(n.createElement)(p.a,{isRequesting:l,data:function(e){var t=[];u&&u.hasOwnProperty("intervals")&&u.intervals.map((function(a){return"email_sents"===e&&t.push({date:a.start_date,email_sents:{label:Object(r.__)("Email Sent","wp-marketing-automations"),value:parseInt(a.subtotals.email_sents)}}),"open_rate"===e&&t.push({date:a.start_date,email_open:{label:Object(r.__)("Opens","wp-marketing-automations"),value:parseInt(a.subtotals.email_open)}}),"click_rate"===e&&t.push({date:a.start_date,email_click:{label:Object(r.__)("Clicks","wp-marketing-automations"),value:parseInt(a.subtotals.email_click)}}),"total_orders"===e&&t.push({date:a.start_date,total_orders:{label:Object(r.__)("Total Orders","wp-marketing-automations"),value:parseInt(a.subtotals.total_orders)}}),"total_revenue"===e&&t.push({date:a.start_date,total_revenue:{label:Object(r.__)("Total Revenue","wp-marketing-automations"),value:parseInt(a.subtotals.total_revenue)}}),""}));return t}(i),title:g[i],interval:b,layout:"item-comparison",chartType:m,interactiveLegend:!0})},O=a(273),y=a(860),_=a(285),j=a(10),v=a.n(j);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function E(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var T=function(e){var t=e.query,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(t.hasOwnProperty("filter")){var a=0;return"broadcast"==t.filter?a=2:"automation"==t.filter&&(a=1),v()({path:Object(m.m)("/analytics/entity/data/?type=".concat(a,"&oid=").concat(e)),method:"GET"}).then((function(e){return 200==e.code&&e.hasOwnProperty("result")?[{key:e.result.id,label:e.result.title}]:[]}))}},i=[{staticParams:["page","path","period","chart","chartType"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(r.__)("All Emails","wp-marketing-automations"),value:"all"}]}];if(Object(m.lb)()){var c=[{label:Object(r.__)("Single Automation","wp-marketing-automations"),value:"select_automation",subFilters:[{component:"Search",value:"automation",path:["select_automation"],autocompleter:_.a,settings:{type:"custom",param:"id",selected:!0,getLabels:a,labels:{placeholder:Object(r.__)("Type to search for a automation","wp-marketing-automations"),button:Object(r.__)("Automation","wp-marketing-automations")}}}]},{label:Object(r.__)("Single Broadcast","wp-marketing-automations"),value:"select_broadcast",subFilters:[{component:"Search",value:"broadcast",path:["select_broadcast"],autocompleter:y.a,settings:{type:"custom",param:"id",getLabels:a,labels:{placeholder:Object(r.__)("Type to search for a broadcast","wp-marketing-automations"),button:Object(r.__)("Broadcast","wp-marketing-automations")}}}]}];i[0].filters=[].concat(E(i[0].filters),c)}return Object(n.createElement)("div",{className:"bwf-crm-emails-report-filter"},Object(n.createElement)(O.a,{siteLocale:"en-US",path:"/",query:t,filterTitle:"Email",filters:i,onDateSelect:function(e){var a=w(w({},t),e);delete a.compare,Object(o.k)(a,"/",{})},showDatePicker:!0,isoDateFormat:d.g,hideCompare:!0,dateQuery:function(e){e.compare="previous_year";var t=Object(d.e)(e),a=t.period,n=t.compare,r=t.before,i=t.after,c=Object(d.c)(e);return{period:a,compare:n,before:r,after:i,primaryDate:c.primary,secondaryDate:c.secondary}}(t),currency:Object(m.X)()}))},D=a(811),L=a(3),P=a(268),S=a(812),I=a(67),M=a(248),C=a(91);function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(u.a)(Object(m.X)()).formatAmount,t=Object(D.a)(),a=t.fetchEmailAnalytics,i=t.setEmailAnalyticsData,c=t.fetchEmailTable,l=t.setEmailTableData;Object(S.a)("emails",!1,"");var b=Object(o.i)(),p=function(e){return e.compare="previous_year",Object(d.c)(e).primary},O=Y(Object(n.useState)(!0),2),y=O[0],_=O[1];b.hasOwnProperty("period")||(b.period="month");var j=s.a.getEmailTableLoading,v=s.a.getEmailTableLimit,h=s.a.getEmailTableOffset,w=s.a.getEmailTablePage,k=s.a.getEmailTableList,E=s.a.getEmailTableTotal,A=j(),N=h(),F=v(),x=w(),R=k(),q=E(),G=b.period,z=b.compare,B=b.interval,H=b.after,U=b.before,X=b.id,J=b.filter,Q=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=p(e),l="",s="";o&&(Object(L.isEmpty)(o.after)||(l=o.after.format("YYYY-MM-DD HH:mm:ss")),Object(L.isEmpty)(o.before)||(s=o.before.format("YYYY-MM-DD 23:59:59")),Object(L.isEmpty)(l)||Object(L.isEmpty)(s)||(n&&a(l,s,t,X,J),c(r,i,l,s,t,X,J)))};Object(n.useEffect)((function(){if(Object(m.g)("Email Analytics"),Object(m.lb)()){var e=b.hasOwnProperty("interval")?b.interval:"day";Q(b,e,!0,F,N)}else{for(var t=p(b),a=0,n=0,r=0,c=0,o=0,s=[],u=t.after;u.isBefore(t.before);u.add(1,"days")){var f=Math.floor(11*Math.random()),d=Math.floor(Math.random()*parseInt(f)),g=Math.floor(Math.random()*parseInt(f)),O=Math.floor(Math.random()*parseInt(g)),y=Math.floor(100*Math.random());s.push({date_end_gmt:u.format("YYYY-MM-DD")+" 23:59:59",date_start_gmt:u.format("YYYY-MM-DD")+" 00:00:00",end_date:u.format("YYYY-MM-DD")+" 23:59:59",interval:u.format("YYYY-MM-DD"),start_date:u.format("YYYY-MM-DD")+" 00:00:00",subtotals:{click_rate:(d/f*100).toFixed(2),email_click:d,email_open:g,email_sents:f,open_rate:(g/f*100).toFixed(2),total_orders:O,total_revenue:y}}),a+=g,n+=f,r+=d,c+=O,o+=y}i("data",{totals:{click_rate:(r/n*100).toFixed(2),email_click:r,email_open:a,email_sents:n,open_rate:(a/n*100).toFixed(2),total_orders:c,total_revenue:o},intervals:s}),i("isLoading",!1),l("data",[{click_count:r,click_rate:(r/n*100).toFixed(2),conversions:c,oid:"5",open_count:a,open_rate:(a/n*100).toFixed(2),revenue:o,sent:n,subject:"Dummy Subject",template:"",tid:"52",title:"Dummy Mail",type:"1"}]),l("isLoading",!1)}}),[G,z,B,H,U,X,J]);var $,K=[{key:"subject",label:Object(r.__)("Subject","wp-marketing-automations"),isLeftAligned:!0},{key:"source",label:Object(r.__)("Source","wp-marketing-automations"),isLeftAligned:!1},{key:"sent",label:Object(r.__)("Sent","wp-marketing-automations"),isLeftAligned:!0,isNumeric:!0},{key:"open",label:Object(r.__)("Open Rate","wp-marketing-automations"),isLeftAligned:!0},{key:"click",label:Object(r.__)("Click Rate","wp-marketing-automations"),isLeftAligned:!1,isNumeric:!0},Object(m.wb)()?{key:"orders",label:Object(r.__)("Orders","wp-marketing-automations"),isLeftAligned:!0}:{},Object(m.wb)()?{key:"revenue",label:Object(r.__)("Revenue","wp-marketing-automations"),isLeftAligned:!1,isNumeric:!0}:{}],V=function(e){if(e!==F){l("limit",e);var t=b.hasOwnProperty("interval")?b.interval:"day";Q(b,t,!1,e,N)}};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(I.a,null),Object(n.createElement)("div",{className:"bwf-crm-analytics-wrap bwf-crm-emails-report-wrap"},Object(n.createElement)(T,{query:b}),Object(n.createElement)("div",{className:"bwf_clear_24"}),Object(n.createElement)(P.a,{className:"bwf-emails-report-header-chart",title:Object(r.__)("Performance","wp-marketing-automations")}),Object(n.createElement)(f,{query:b}),Object(n.createElement)(g,{query:b}),Object(n.createElement)(M.a,{title:Object(r.__)("Email","wp-marketing-automations"),rows:($=[],Object(L.isEmpty)(R)||R.map((function(t){$.push([{display:t.subject?t.subject:"-",value:t.subject},{display:t.title?t.title:"-",value:t.title},{display:parseInt(t.sent)?parseInt(t.sent):"-",value:t.sent},{display:parseInt(t.open_rate)?parseFloat(t.open_rate).toFixed(1)+"%":"-",value:t.open_count},{display:parseInt(t.click_rate)?parseFloat(t.click_rate).toFixed(1)+"%":"-",value:t.click_count},Object(m.wb)()?{display:parseInt(t.conversions)?parseInt(t.conversions):"-",value:t.conversions}:{},Object(m.wb)()?{display:e(t.revenue),value:t.revenue}:{}])})),$),headers:K,query:{paged:x},rowsPerPage:F?parseInt(F):25,totalRows:q,isLoading:A,onPageChange:function(e,t){var a=(e-1)*F;l("offset",a);var n=b.hasOwnProperty("interval")?b.interval:"day";Q(b,n,!1,F,a)},onQueryChange:function(e){return"per_page"!==e?function(){}:V},showMenu:!1,rowHeader:!0,emptyMessage:Object(r.__)("No emails found","wp-marketing-automations")})),!Object(m.lb)()&&Object(n.createElement)(C.a,{isOpen:y,onRequestClose:function(){return _(!1)},closeOnClickOut:!1,modalContent:{demoLabel:Object(r.__)("Try Demo","wp-marketing-automations")}}))}},798:function(e,t,a){"use strict";var n=a(137),r=a(257),i=Object(n.a)(r.b.cartAnalytics).getStateProp,c=Object(n.a)(r.b.contactAnalytics).getStateProp,o=Object(n.a)(r.b.emailAnalytics).getStateProp,l=Object(n.a)(r.b.emailTable).getStateProp,s=Object(n.a)(r.b.engagementAnalytics).getStateProp,u=Object(n.a)(r.b.directEmailTable).getStateProp,m={getCartAnalytics:function(){return i("data")},getCartAnalyticsLoading:function(){return i("isLoading")},getContactAnalytics:function(){return c("data")},getContactAnalyticsLoading:function(){return c("isLoading")},getEmailAnalytics:function(){return o("data")},getEmailAnalyticsLoading:function(){return o("isLoading")},getEmailTableList:function(){return l("data")},getEmailTableTotal:function(){return l("total")},getEmailTableOffset:function(){return l("offset")},getEmailTableLimit:function(){return l("limit")},getEmailTableLoading:function(){return l("isLoading")},getEmailTablePage:function(){return parseInt(l("offset"))/parseInt(l("limit"))+1},getEngagementAnalytics:function(){return s("data")},getEngagementAnalyticsLoading:function(){return s("isLoading")},getDirectEmailTableList:function(){return u("data")},getDirectEmailTableTotal:function(){return u("total")},getDirectEmailTableOffset:function(){return u("offset")},getDirectEmailTableLimit:function(){return u("limit")},getDirectEmailTableLoading:function(){return u("isLoading")},getDirectEmailTablePage:function(){return parseInt(u("offset"))/parseInt(u("limit"))+1}};t.a=m},811:function(e,t,a){"use strict";var n=a(136),r=a(5),i=a(257),c=a(17),o=function(e){var t=0;return"automation"===e?t=1:"broadcast"===e&&(t=2),t};t.a=function(){var e=Object(n.a)(i.b.cartAnalytics).fetch,t=Object(n.a)(i.b.contactAnalytics),a=t.fetch,l=t.setStateProp,s=Object(n.a)(i.b.emailAnalytics),u=s.fetch,m=s.setStateProp,b=Object(n.a)(i.b.emailTable),f=b.fetch,p=b.setStateProp,d=Object(n.a)(i.b.engagementAnalytics),g=d.fetch,O=d.setStateProp,y=Object(n.a)(i.b.directEmailTable),_=y.fetch,j=y.setStateProp;return{fetchCartAnalytics:function(t,a,n){e("GET",Object(r.m)("/analytics/carts/")+"?"+Object(c.stringify)({after:t,before:a,interval:n}))},fetchContactAnalytics:function(e,t,n){a("GET",Object(r.m)("/analytics/contacts/")+"?"+Object(c.stringify)({after:e,before:t,interval:n}))},fetchEmailAnalytics:function(e,t,a,n,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;u("GET",Object(r.m)("/analytics/emails/chart/")+"?"+Object(c.stringify)({after:e,before:t,interval:a,oid:n,type:o(i),mode:l}))},fetchEmailTable:function(e,t,a,n,i,l,s){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;f("GET",Object(r.m)("/analytics/emails/tabular/")+"?"+Object(c.stringify)({after:a,before:n,interval:i,oid:l,type:o(s),limit:e,offset:t,mode:u}))},setEmailTableData:function(e,t){p(e,t)},fetchEngagementData:function(e,t){g("GET",Object(r.m)("/analytics/engagement")+"?"+Object(c.stringify)({after:e,before:t}))},setContactAnalyticsData:function(e,t){l(e,t)},setEmailAnalyticsData:function(e,t){m(e,t)},setEngagementData:function(e,t){O(e,t)},fetchDirectEmailTable:function(e,t,a,n,i){_("GET",Object(r.m)("/analytics/direct-emails/tabular/")+"?"+Object(c.stringify)({after:a,before:n,interval:i,limit:e,offset:t}))},setDirectEmailTableData:function(e,t){j(e,t)}}}},812:function(e,t,a){"use strict";var n=a(134),r=a(0);t.a=function(e,t,a){var i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},c=Object(n.a)(),o=c.setActiveMultiple,l=c.resetHeaderMenu,s=c.setL2NavType,u=c.setL2Nav,m=c.setBackLink,b=c.setL2Title,f=c.setPageHeader;return Object(r.useEffect)((function(){l(),!t&&s("menu"),!t&&u(i.reports_nav),o({leftNav:"analytics-"+e,rightNav:e+"-analytics"}),t&&m(t),a&&b(a),f("Analytics")}),[e,a]),!0}},860:function(e,t,a){"use strict";var n=a(0),r=a(2),i=a(10),c=a.n(i),o=a(14),l=a.n(o),s=a(31),u=a.n(s),m=a(32),b=a.n(m),f=a(5),p=a(17);function d(e,t,a,n,r,i,c){try{var o=e[i](c),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(n,r)}var g=function(e){return e.name};t.a={name:"broadcast",className:"bwf-search-bwf-broadcast-result",options:function(e){return(t=regeneratorRuntime.mark((function e(t){var a,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return a={search:t,type:2,limit:5,offset:0},e.next=5,c()({path:Object(f.m)("/analytics/engagements/search?"+Object(p.stringify)(a)),method:"GET"});case 5:return n=e.sent,r=u()(n,"result")?n.result.map((function(e){return{key:e.id,name:e.title,label:e.title}})):[],e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})),a=function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function c(e){d(i,n,r,c,o,"next",e)}function o(e){d(i,n,r,c,o,"throw",e)}c(void 0)}))},function(e){return a.apply(this,arguments)})(e);var t,a},isDebounced:!0,getOptionIdentifier:function(e){return e.key},getOptionKeywords:function(e){return[e.name]},getFreeTextOptions:function(e,t){return[{key:"name",label:Object(n.createElement)("span",{key:"name",className:"bwf-search-result-name"},l()({mixedString:Object(r.__)("All broadcast with names that include {{query /}}","wp-marketing-automations"),components:{query:Object(n.createElement)("strong",{className:"components-form-token-field__suggestion-match"},e)}})),value:{id:e,name:e,tags:t.map((function(e){return u()(e,"value")?e.value:e})),searchTerm:e}}]},getOptionLabel:function(e,t){var a=Object(f.i)(g(e),t)||{};return Object(n.createElement)("span",{key:"name",className:"bwf-search-result-name","aria-label":g(e)},a.suggestionBeforeMatch,Object(n.createElement)("strong",{className:"components-form-token-field__suggestion-match"},a.suggestionMatch),a.suggestionAfterMatch)},getOptionCompletion:function(e){return e}}}}]);