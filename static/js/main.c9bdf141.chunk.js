(this["webpackJsonprate-converter"]=this["webpackJsonprate-converter"]||[]).push([[0],{36:function(t,e,a){},38:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=(a(36),a(26)),s=a.n(i),u=a(27),d=a(14),l=(a(38),a(8)),m=function(t,e,a){return Object(l.a)(Object(l.a)({},e),{},{rateFrom:a,amountTo:e.amountFrom*t.rates[e.rateTo]})},j=function(t){return"".concat("https://api.exchangeratesapi.io/v1/latest","?access_key=").concat("token-here","&base=").concat(t)},b=a(50),f=a(52),h=a(51),x=a(31),O=a(6),p=function(t){return Object(O.jsxs)(b.a,{className:"p-2","data-testid":"".concat(t.testidPrefix,"-currency-row"),children:[Object(O.jsx)(f.a,{className:"text-light bg-dark","data-testid":"".concat(t.testidPrefix,"-currency-row-input"),value:t.amount,type:"number",min:"0",onChange:t.handleAmountChange}),Object(O.jsx)(h.a,{"data-testid":"".concat(t.testidPrefix,"-currency-row-dropdown"),as:b.a.Append,variant:"secondary",title:t.rate,children:Object.keys(t.rates).map((function(e){return e===t.distinctRate?null:Object(O.jsx)(x.a.Item,{"data-testid":"".concat(t.testidPrefix,"-currency-row-dropdown-item"),onClick:function(){return t.handleRateClick(e)},active:t.rate===e,children:e},e)}))})]})},g=function(){var t=Object(n.useState)({}),e=Object(d.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)({amountFrom:0,amountTo:0,rateFrom:"EUR",rateTo:"TRY"}),o=Object(d.a)(c,2),i=o[0],b=o[1],f=Object(n.useState)(!1),h=Object(d.a)(f,2),x=h[0],g=h[1],v=Object(n.useState)(!0),k=Object(d.a)(v,2),T=k[0],F=k[1],w=function(){var t=Object(u.a)(s.a.mark((function t(e){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.prev=1,t.next=4,fetch(j(e)).then((function(t){return t.json()}));case 4:if((a=t.sent).success){t.next=8;break}return g(!0),t.abrupt("return");case 8:r(a),b(m(a,i,e)),F(!1),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0),g(!0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){w(i.rateFrom)}),[]),x?Object(O.jsx)("h1",{className:"d-flex vh-100 justify-content-center align-items-center bg-dark text-light","data-testid":"error-text",children:"Something went wrong!"}):T?Object(O.jsx)("h1",{className:"d-flex vh-100 justify-content-center align-items-center bg-dark text-light","data-testid":"loader-text",children:"Loading..."}):Object(O.jsxs)("div",{className:"App d-flex vh-100 bg-dark align-items-center","data-testid":"app-container",children:[Object(O.jsx)(p,{testidPrefix:"from",amount:i.amountFrom,handleAmountChange:function(t){var e,n,r;b((e=a,n=i,r=t.target.value,Object(l.a)(Object(l.a)({},n),{},{amountFrom:r,amountTo:r*e.rates[n.rateTo]})))},rate:i.rateFrom,rates:a.rates,distinctRate:i.rateTo,handleRateClick:function(t){w(t)}}),Object(O.jsx)(p,{testidPrefix:"to",amount:i.amountTo,handleAmountChange:function(t){var e,n,r;b((e=a,n=i,r=t.target.value,Object(l.a)(Object(l.a)({},n),{},{amountFrom:r/e.rates[n.rateTo],amountTo:r})))},rates:a.rates,rate:i.rateTo,distinctRate:i.rateFrom,handleRateClick:function(t){var e,n,r;b((e=a,n=i,r=t,Object(l.a)(Object(l.a)({},n),{},{rateTo:r,amountTo:n.amountFrom*e.rates[r]})))}})]})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.c9bdf141.chunk.js.map