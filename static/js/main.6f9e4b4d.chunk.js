(this["webpackJsonpethermine-dashboard"]=this["webpackJsonpethermine-dashboard"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),i=(a(52),a(14)),l=(a(53),a(115)),d=(a(41),a(55),a(2));a(57);var h=a(106),j=a(8),u=a(103),o=a(110),b=a(114),x=a(113),m=a(108),O=a(111),v=a(112),f=a(109),g=Object(u.a)({table:{minWidth:320}});function p(e){function t(t,n){var s=(a*n).toFixed(5)+"ETH",r="\u20ac"+(a*n*e.ethEur).toFixed(2);return console.log(s,e.ethEur),{name:t,eth:s,eur:r}}var a=60*e.ethPerMin*24,n=[t("Daily",1),t("Weekly",7),t("Monthly",30),t("Yearly",365)],s=g();return Object(d.jsxs)(h.a,{container:!0,item:!0,xs:12,justify:"center",styles:{flexBasis:"auto"},children:[Object(d.jsx)("div",{className:"StatsSubPanelTitle",children:"Estimated Earnings"}),Object(d.jsx)(m.a,{component:f.a,children:Object(d.jsxs)(o.a,{className:s.table,size:"small","aria-label":"a dense table",children:[Object(d.jsx)(O.a,{children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(x.a,{}),Object(d.jsx)(x.a,{align:"right",children:"ETH"}),Object(d.jsx)(x.a,{align:"right",children:"EUR"})]})}),Object(d.jsx)(b.a,{children:n.map((function(e){return Object(d.jsxs)(v.a,{children:[Object(d.jsx)(x.a,{component:"th",scope:"row",children:e.name}),Object(d.jsx)(x.a,{align:"right",children:e.eth}),Object(d.jsx)(x.a,{align:"right",children:e.eur})]},e.name)}))})]})})]})}function H(e){function t(){var e=setInterval((function(){O-=1,function(){var e=O,t=Math.floor(e/86400);e-=60*t*60*24;var a=Math.floor(e/3600);e-=60*a*60;var n=Math.floor(e/60);e-=60*n;var s=Math.floor(e);c(t+" day"+(1!==t?"s":"")),o(a+"h "+n+"m "+s+"s")}()}),1e3);return function(){return clearInterval(e)}}n.useEffect((function(){t()}),[]);var a=n.useState(null),s=Object(i.a)(a,2),r=s[0],c=s[1],l=n.useState(null),j=Object(i.a)(l,2),u=j[0],o=j[1],b=1e-18*e.unpaid,x=(.1-1e-18*e.unpaid)/(e.ethPerMin/60),m=function(){for(var e=Date.now(),t=1614902399e3;t<e;)t+=12096e5;return(t-e)/1e3}(),O=Math.min(x,m),v=m<x?m/60*e.ethPerMin+b:.1;return Object(d.jsx)(h.a,{item:!0,xs:12,children:Object(d.jsx)(f.a,{style:{padding:"0.3rem"},children:Object(d.jsxs)(h.a,{item:!0,container:!0,xs:12,children:[Object(d.jsxs)(h.a,{item:!0,xs:4,children:[Object(d.jsx)("div",{className:"Label",children:"Unpaid Balance"}),Object(d.jsx)("div",{className:"Data",children:b.toFixed(6)+" ETH"}),Object(d.jsx)("div",{className:"Data",children:"\u20ac"+(b*e.ethEur).toFixed(2)})]}),Object(d.jsxs)(h.a,{item:!0,xs:4,children:[Object(d.jsx)("div",{className:"Label",children:"Payout Amount"}),Object(d.jsx)("div",{className:"Data",children:v.toFixed(6)+" ETH"}),Object(d.jsx)("div",{className:"Data",children:"\u20ac"+(v*e.ethEur).toFixed(2)})]}),Object(d.jsxs)(h.a,{item:!0,xs:4,children:[Object(d.jsx)("div",{className:"Label",children:"Time to Payout"}),Object(d.jsx)("div",{className:"Data",children:r}),Object(d.jsx)("div",{className:"Data",children:u})]})]})})})}var E=function(e,t){return e+t};function N(e){var t=function(e){var t=e.statistics.sort((function(e,t){return e.time>t.time})),a=t.map((function(e){return e.currentHashrate})).reduce(E,0),n=t.slice(t.length-73,t.length-1).map((function(e){return e.currentHashrate})).reduce(E,0),s=t.slice(t.length-37,t.length-1).map((function(e){return e.currentHashrate})).reduce(E,0);return{avgReportedHash:t.map((function(e){return e.reportedHashrate})).reduce(E,0)/t.length,avgHash24:a/t.length,avgHash12:n/t.slice(t.length-73,t.length-1).length,avgHash6:s/t.slice(t.length-37,t.length-1).length}}(e.data);return Object(d.jsx)(h.a,{item:!0,xs:12,children:Object(d.jsx)(f.a,{style:{padding:"0.3rem"},children:Object(d.jsxs)(h.a,{item:!0,container:!0,xs:12,children:[Object(d.jsxs)(h.a,{item:!0,xs:6,children:[Object(d.jsx)("div",{className:"Label",children:"Current Hashrate"}),Object(d.jsx)(a,{data:e.data.currentStatistics.currentHashrate})]}),Object(d.jsxs)(h.a,{item:!0,xs:6,children:[Object(d.jsx)("div",{className:"Label",children:"Average Hashrate - 6h"}),Object(d.jsx)(a,{data:t.avgHash6})]}),Object(d.jsxs)(h.a,{item:!0,xs:6,children:[Object(d.jsx)("div",{className:"Label",children:"Reported Hashrate"}),Object(d.jsx)(a,{data:e.data.currentStatistics.reportedHashrate})]}),Object(d.jsxs)(h.a,{item:!0,xs:6,children:[Object(d.jsx)("div",{className:"Label",children:"Average Hashrate - 12h"}),Object(d.jsx)(a,{data:t.avgHash12})]}),Object(d.jsxs)(h.a,{item:!0,xs:6,children:[Object(d.jsx)("div",{className:"Label",children:"Reported Hashrate - 24h"}),Object(d.jsx)(a,{data:t.avgReportedHash})]}),Object(d.jsxs)(h.a,{item:!0,xs:6,children:[Object(d.jsx)("div",{className:"Label",children:"Average Hashrate - 24h"}),Object(d.jsx)(a,{data:t.avgHash24})]})]})})});function a(e){return Object(d.jsx)("div",{className:"Data",children:(t=e.data,(t/1e6).toFixed(2)+" MH/s")});var t}}var y="https://api.ethermine.org/";function w(e){var t=Object(j.g)().minerId;var a=n.useState(null),s=Object(i.a)(a,2),r=s[0],c=s[1],l=n.useState(null),u=Object(i.a)(l,2),o=u[0],b=u[1],x=n.useState(null),m=Object(i.a)(x,2),O=m[0],v=m[1];return n.useEffect((function(){!function(e,t){fetch(y+"miner/"+e+"/dashboard").then((function(e){return e.json()})).then((function(e){return t({status:e.status,data:e.data})}))}(t,c),function(e,t){fetch(y+"miner/"+e+"/currentStats").then((function(e){return e.json()})).then((function(e){return t({status:e.status,data:e.data})}))}(t,b),O||function(e){fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR").then((function(e){return e.json()})).then((function(t){return e(t.EUR)}))}(v)}),[t]),Object(d.jsx)("div",{className:"StatsPanel",children:r&&o&&O?"OK"===r.status&&"OK"===o.status?function(){if(r.data&&r.data.currentStatistics&&o.data){var e=o.data.coinsPerMin;return Object(d.jsxs)(h.a,{container:!0,spacing:2,justify:"center",children:[Object(d.jsx)(H,{unpaid:o.data.unpaid,ethPerMin:e,ethEur:O}),Object(d.jsx)(p,{ethPerMin:o.data.coinsPerMin,ethEur:O}),Object(d.jsx)(N,{data:r.data})]})}return"No data in Ethermine response."}():"Couldn't get data from Ethermine, status was: "+r.status:null})}a(65);function M(){return Object(d.jsx)("div",{className:"chartContainer",children:Object(d.jsx)("iframe",{id:"Chart",srcDoc:'<html lang="en"> <div class="tradingview-widget-container"> <div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async> { "symbol": "KRAKEN:ETHEUR", "width": 350, "height": 220, "locale": "en", "dateRange": "1D", "colorTheme": "light", "trendLineColor": "#37a6ef", "underLineColor": "#E3F2FD", "isTransparent": false, "autosize": false, "largeChartUrl": "" } <\/script> </div> </html>'})})}var S=a(42),D=a.n(S);var P=function(){var e=n.useState(null),t=Object(i.a)(e,2),a=t[0],s=t[1],r=D()("user-wallet",null),c=Object(i.a)(r,2),h=c[0],u=c[1],o=Object(j.f)();return h&&o.push("/"+h),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"App-header",children:[Object(d.jsx)(M,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/:minerId",children:Object(d.jsx)(w,{})}),Object(d.jsx)(j.a,{path:"/",children:Object(d.jsx)(l.a,{className:"MinerIdInput",variant:"outlined",value:a,onKeyDown:function(e){"Enter"===e.key&&(o.push("/"+a),u(a))},onChange:function(e){return s(e.target.value)},inputProps:{style:{textAlign:"center"}}})})]})]})})},L=a(27);c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(L.a,{children:Object(d.jsx)(P,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6f9e4b4d.chunk.js.map