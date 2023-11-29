(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1018:function(t,e,a){},1207:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(874),c=a(2),o=a(282),i=(a(1018),a(939)),s=a(15),l=a(148),u=a(861),b=a(873),m=a(29),f=a(3),p=a(76),O=a(5),d=a(102);function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,c,o,i=[],s=!0,l=!1;try{if(c=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=c.call(a)).done)&&(i.push(n.value),i.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(l)throw r}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}e.default=function(){Object(r.a)("engagement",!1,"");var t=Object(b.a)(),e=t.fetchEngagementData,a=t.setEngagementData,g=u.a.getEngagementAnalytics,j=(0,u.a.getEngagementAnalyticsLoading)(),v=g(),w=Object(s.i)(),_=y(Object(n.useState)(!0),2),h=_[0],E=_[1],k=function(t){var a=function(t){return t.compare="previous_year",Object(m.c)(t).primary}(t),n="",r="";a&&(Object(f.isEmpty)(a.after)||(n=a.after.format("YYYY-MM-DD HH:mm:ss")),Object(f.isEmpty)(a.before)||(r=a.before.format("YYYY-MM-DD 23:59:59")),Object(f.isEmpty)(n)||Object(f.isEmpty)(r)||e(n,r))};w.hasOwnProperty("period")||(w.period="month");var T=w.period,A=w.compare,C=w.interval,D=w.after,S=w.before;Object(n.useEffect)((function(){if(Object(O.g)("Engagement Analytics"),Object(O.mb)())k(w);else{for(var t=[1,2,3,4,5,6,7].map((function(t){return{day:t,mean:Math.random().toFixed(4),open:1,total:1}})),e=[],n=0;n<24;n++)e.push({hour:n,mean:Math.random().toFixed(4),open:1,total:1});a("data",{day:t,hour:e}),a("isLoading",!1)}}),[T,A,C,D,S]);var N,L=[Object(c.__)("Monday","wp-marketing-automations"),Object(c.__)("Tuesday","wp-marketing-automations"),Object(c.__)("Wednesday","wp-marketing-automations"),Object(c.__)("Thursday","wp-marketing-automations"),Object(c.__)("Friday","wp-marketing-automations"),Object(c.__)("Saturday","wp-marketing-automations"),Object(c.__)("Sunday","wp-marketing-automations")],P=function(t,e){return j?Object(n.createElement)(n.Fragment,null,function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=[1,2,3,4,5,6,7];return t||(e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),Object(n.createElement)("ul",{className:"bwf-report-section"},e.map((function(t){return Object(n.createElement)("li",{className:"bwf-report-e-list",key:t},Object(n.createElement)("div",{className:"bwf-report-e-label"},Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-210"})),Object(n.createElement)("div",{className:"bwf-report-e-value"},Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-100p"})))})))}(e)):Object(f.isEmpty)(t)?Object(c.__)("No data Available","wp-marketing-automations"):Object(n.createElement)("ul",{className:"bwf-report-section"},t.map((function(t,a){return Object(n.createElement)("li",{className:"bwf-report-e-list",key:a},Object(n.createElement)("div",{className:"bwf-report-e-label"},e?L[parseInt(t.day)-1]:(r=t.hour,c=r+" (",c+=(r%12||12)+(r>11?"PM":"AM")+")")),Object(n.createElement)("div",{className:"bwf-report-e-value"},t.total&&t.open?Object(n.createElement)(o.a,{status:"info",size:"md",progress:(100*t.mean).toFixed(2),noStriped:!0,text:"".concat((100*t.mean).toFixed(2)," %")}):"-"));var r,c})))};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(p.a,null),Object(n.createElement)("div",{className:"bwf-crm-analytics-wrap bwf-report-engagement-wrapper"},Object(n.createElement)(i.b,{query:w}),Object(n.createElement)("div",{className:"bwf-accordian-wrap"},Object(n.createElement)(l.a,{items:(N=[],N.push({key:1,label:Object(c.__)("Open by Weekday","wp-marketing-automations"),display:P(Object(f.isEmpty)(v)?[]:v.day,!0)},{key:2,label:Object(c.__)("Open by Hour","wp-marketing-automations"),display:P(Object(f.isEmpty)(v)?[]:v.hour,!1)}),N)}))),!Object(O.mb)()&&Object(n.createElement)(d.a,{isOpen:h,onRequestClose:function(){return E(!1)},closeOnClickOut:!1,modalContent:{demoLabel:Object(c.__)("Try Demo","wp-marketing-automations")}}))}},861:function(t,e,a){"use strict";var n=a(144),r=a(275),c=Object(n.a)(r.b.cartAnalytics).getStateProp,o=Object(n.a)(r.b.contactAnalytics).getStateProp,i=Object(n.a)(r.b.emailAnalytics).getStateProp,s=Object(n.a)(r.b.emailTable).getStateProp,l=Object(n.a)(r.b.engagementAnalytics).getStateProp,u=Object(n.a)(r.b.directEmailTable).getStateProp,b={getCartAnalytics:function(){return c("data")},getCartAnalyticsLoading:function(){return c("isLoading")},getContactAnalytics:function(){return o("data")},getContactAnalyticsLoading:function(){return o("isLoading")},getEmailAnalytics:function(){return i("data")},getEmailAnalyticsLoading:function(){return i("isLoading")},getEmailTableList:function(){return s("data")},getEmailTableTotal:function(){return s("total")},getEmailTableOffset:function(){return s("offset")},getEmailTableLimit:function(){return s("limit")},getEmailTableLoading:function(){return s("isLoading")},getEmailTablePage:function(){return parseInt(s("offset"))/parseInt(s("limit"))+1},getEngagementAnalytics:function(){return l("data")},getEngagementAnalyticsLoading:function(){return l("isLoading")},getDirectEmailTableList:function(){return u("data")},getDirectEmailTableTotal:function(){return u("total")},getDirectEmailTableOffset:function(){return u("offset")},getDirectEmailTableLimit:function(){return u("limit")},getDirectEmailTableLoading:function(){return u("isLoading")},getDirectEmailTablePage:function(){return parseInt(u("offset"))/parseInt(u("limit"))+1}};e.a=b},873:function(t,e,a){"use strict";var n=a(143),r=a(5),c=a(275),o=a(16),i=function(t){var e=0;return"automation"===t?e=1:"broadcast"===t&&(e=2),e};e.a=function(){var t=Object(n.a)(c.b.cartAnalytics).fetch,e=Object(n.a)(c.b.contactAnalytics),a=e.fetch,s=e.setStateProp,l=Object(n.a)(c.b.emailAnalytics),u=l.fetch,b=l.setStateProp,m=Object(n.a)(c.b.emailTable),f=m.fetch,p=m.setStateProp,O=Object(n.a)(c.b.engagementAnalytics),d=O.fetch,y=O.setStateProp,g=Object(n.a)(c.b.directEmailTable),j=g.fetch,v=g.setStateProp;return{fetchCartAnalytics:function(e,a,n){t("GET",Object(r.m)("/analytics/carts/")+"?"+Object(o.stringify)({after:e,before:a,interval:n}))},fetchContactAnalytics:function(t,e,n){a("GET",Object(r.m)("/analytics/contacts/")+"?"+Object(o.stringify)({after:t,before:e,interval:n}))},fetchEmailAnalytics:function(t,e,a,n,c){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;u("GET",Object(r.m)("/analytics/emails/chart/")+"?"+Object(o.stringify)({after:t,before:e,interval:a,oid:n,type:i(c),mode:s}))},fetchEmailTable:function(t,e,a,n,c,s,l){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;f("GET",Object(r.m)("/analytics/emails/tabular/")+"?"+Object(o.stringify)({after:a,before:n,interval:c,oid:s,type:i(l),limit:t,offset:e,mode:u}))},setEmailTableData:function(t,e){p(t,e)},fetchEngagementData:function(t,e){d("GET",Object(r.m)("/analytics/engagement")+"?"+Object(o.stringify)({after:t,before:e}))},setContactAnalyticsData:function(t,e){s(t,e)},setEmailAnalyticsData:function(t,e){b(t,e)},setEngagementData:function(t,e){y(t,e)},fetchDirectEmailTable:function(t,e,a,n,c){j("GET",Object(r.m)("/analytics/direct-emails/tabular/")+"?"+Object(o.stringify)({after:a,before:n,interval:c,limit:t,offset:e}))},setDirectEmailTableData:function(t,e){v(t,e)}}}},874:function(t,e,a){"use strict";var n=a(141),r=a(0);e.a=function(t,e,a){var c=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},o=Object(n.a)(),i=o.setActiveMultiple,s=o.resetHeaderMenu,l=o.setL2NavType,u=o.setL2Nav,b=o.setBackLink,m=o.setL2Title,f=o.setPageHeader;return Object(r.useEffect)((function(){s(),!e&&l("menu"),!e&&u(c.reports_nav),i({leftNav:"analytics-"+t,rightNav:t+"-analytics"}),e&&b(e),a&&m(a),f("Analytics")}),[t,a]),!0}},939:function(t,e,a){"use strict";a.d(e,"c",(function(){return m})),a.d(e,"a",(function(){return O})),a.d(e,"b",(function(){return _}));var n=a(0),r=a(2),c=a(280),o=a(278),i=a(15),s=a(277),l=a(861),u=a(8),b=a(5),m=function(t){var e=t.query,a=l.a.getContactAnalytics,m=l.a.getContactAnalyticsLoading,f=e.chart?e.chart:"new_contacts",p=m(),O=a(),d=function(t){if(!O||!O.hasOwnProperty("totals"))return 0;var e=O.totals;return e.hasOwnProperty(t)?e[t]:void 0};return Object(n.createElement)("div",{className:"bwf-crm-contacts-report-tiles"},Object(n.createElement)(c.a,null,(function(){var t=[];return t.push(Object(n.createElement)(o.a,{key:1,value:d("new_contacts"),label:Object(r.__)("New Contacts","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/contacts&chart=new_contacts",onLinkClickCallback:function(t){t.preventDefault(),delete e.compare,Object(i.k)({chart:"new_contacts"},"/",e)},selected:"new_contacts"==f,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(u.a,{icon:"contact-tile",size:30,color:"#0073aa"}))}),Object(n.createElement)(o.a,{key:2,value:d("total_contacts"),label:Object(r.__)("Total Contacts","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/contacts&chart=total_contacts",onLinkClickCallback:function(t){t.preventDefault(),delete e.compare,Object(i.k)({chart:"total_contacts"},"/",e)},selected:"total_contacts"==f,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(u.a,{icon:"total-contact",size:30,color:"#0073aa"}))})),Object(b.xb)()&&t.push(Object(n.createElement)(o.a,{key:3,value:d("total_customers"),label:Object(r.__)("Total Customers","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/contacts&chart=total_customers",onLinkClickCallback:function(t){t.preventDefault(),delete e.compare,Object(i.k)({chart:"total_customers"},"/",e)},selected:"total_customers"==f,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(u.a,{icon:"total-customer",size:30,color:"#0073aa"}))})),t.push(Object(n.createElement)(o.a,{key:4,value:d("unsubscribers"),label:Object(r.__)("Unsubscribers","wp-marketing-automations"),href:"admin.php?page=autonami&path=/reports/contacts&chart=unsubscribers",onLinkClickCallback:function(t){t.preventDefault(),delete e.compare,Object(i.k)({chart:"unsubscribers"},"/",e)},selected:"unsubscribers"==f,tileIcon:Object(n.createElement)("div",{className:"bwf-tile-icon-wrap"},Object(n.createElement)(u.a,{icon:"unsubscribe",size:30,color:"#0073aa"}))})),p?Object(n.createElement)(s.a,{numberOfItems:Object(b.xb)()?4:3,hideDelta:!0}):t})))},f=a(279),p=a(29),O=function(t){var e=t.query,a=e.chart?e.chart:"new_contacts",c=l.a.getContactAnalyticsLoading,o=l.a.getContactAnalytics,i=c(),s=o(),u=e.chartType?e.chartType:"line",b=Object(p.f)(e),m=Object(p.b)(function(t){return t.period&&null!=t.period&&""!=t.period||(t.period="month"),t.compare&&null!=t.compare&&""!=t.compare||(t.compare="previous_year"),t}(e));m.includes(b)||(b=m[m.length-1]);var O=0,d=0,y={new_contacts:Object(r.__)("New Contacts","wp-marketing-automations"),total_contacts:Object(r.__)("Total Contacts","wp-marketing-automations"),unsubscribers:Object(r.__)("Unsubscribers","wp-marketing-automations"),total_customers:Object(r.__)("Total Customers","wp-marketing-automations")};return Object(n.createElement)(f.a,{isRequesting:i,data:function(t){var e=[];s&&s.hasOwnProperty("intervals")&&s.intervals.map((function(a){"new_contacts"==t&&e.push({date:a.start_date,new_contacts:{label:Object(r.__)("New Contacts","wp-marketing-automations"),value:parseInt(a.subtotals.new_contacts)}}),"total_contacts"===t&&(e.push({date:a.start_date,total_contacts:{label:Object(r.__)("Total Contacts","wp-marketing-automations"),value:parseInt(a.subtotals.total_contacts)}}),O=parseInt(a.subtotals.total_contacts)),"unsubscribers"===t&&e.push({date:a.start_date,unsubscribers:{label:Object(r.__)("Unsubscribers","wp-marketing-automations"),value:parseInt(a.subtotals.unsubscribers)}}),"total_customers"===t&&(e.push({date:a.start_date,total_customers:{label:Object(r.__)("Total Customers","wp-marketing-automations"),value:parseInt(a.subtotals.total_customers)}}),d=parseInt(a.subtotals.total_customers))}));return e}(a),title:y[a],interval:b,layout:"item-comparison",chartType:u,legendTotals:"total_contacts"==a?{total_contacts:O}:"total_customers"==a?{total_customers:d}:null,interactiveLegend:!0})},d=a(152),y=a(37);a(457);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?j(Object(a),!0).forEach((function(e){w(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function w(t,e,a){return(e=function(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===g(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var _=function(t){var e=t.query;return Object(n.createElement)("div",{className:"bwf-crm-contacts-report-filter"},Object(n.createElement)(y.a,{className:"screen-reader-text"},Object(r.__)("Filters","wp-marketing-automations")),Object(n.createElement)(y.b,{component:"div",className:"bwf-filters"},Object(n.createElement)("div",{className:"bwfcrm-filters-basic-filters"},Object(n.createElement)(d.a,{key:JSON.stringify(e),onRangeSelect:function(t){var a=v(v({},e),t);delete a.compare,Object(i.k)(a,"/",{})},dateQuery:function(t){t.compare="previous_year";var e=Object(p.e)(t),a=e.period,n=e.compare,r=e.before,c=e.after,o=Object(p.c)(t);return{period:a,compare:n,before:r,after:c,primaryDate:o.primary,secondaryDate:o.secondary}}(e),isoDateFormat:p.g,hideCompare:!0}))))}}}]);