(this["webpackJsonptest-game"]=this["webpackJsonptest-game"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(12),a(1)),s=(a(13),a(14),a(15),function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}),i=function(e){var t=e.value,a=e.onPress,c=void 0===a?function(){}:a,o=e.valueColor,i=void 0===o?"default":o,u=function(){var e=Object(n.useState)(s()),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),m=u.height,v=u.width;return r.a.createElement("div",{key:t,className:"wrapper ".concat(m<v?"wrapperByHeight":null," ").concat(0!==t?null:"wrapperHovered"),onClick:0===t?function(){return c()}:function(){}},0!==t&&r.a.createElement("p",{className:"symbol ".concat("contrast"===i?"symbolContrast":"")},t))},u=a(6),m=function(e){var t;switch(e){case"X":t=1;break;case"O":t=-1;break;default:t=0}return t},v=function(e,t,a,n,r,c){for(var o=0,l=0,s=0;s<r;s++)o+=m(e[a][s].value),l+=m(e[s][n].value);var i=0;if(a===n)for(var u=0;u<r;u++)i+=m(e[u][u].value);var v=0;if(a+n===r-1)for(var f=0;f<r;f++)v+=m(e[f][r-1-f].value);o!==r&&l!==r||c("X"),o!==-1*r&&l!==-1*r||c("O"),i!==r&&v!==r||c("X"),i!==-1*r&&v!==-1*r||c("O")},f=function(e,t,a,n,r,c){for(var o=e[a][n].value,l=-1,s=n;s<r;s++)e[a][s].value===o&&l++;for(var i=n;i>=0;i--)e[a][i].value===o&&l++;console.log("+++ counterSameSymbol",l),5===l&&c("TEST")},d=(a(16),a(17),function(e){var t=e.value,a=e.isSelected,n=void 0!==a&&a,c=e.onPress,o=void 0===c?function(){}:c;return r.a.createElement("div",{className:"selectorItemWrapper ".concat(n?"selectedSelectorItem":null),onClick:function(){return o()}},r.a.createElement("p",{className:"symbolSelectorItemText ".concat(n?"selectedSelectorItemText":null)},t))}),h=function(e){var t=e.player,a=e.selectedValue,n=e.setSelectedValue;return r.a.createElement("div",{className:"symbolSelectorWrapper"},r.a.createElement("p",{className:"selectorTurnMessage ".concat("Chaos"===t?"selectorTurnMessageContrast":null)},t," turn"),r.a.createElement("div",{className:"selectorItems"},r.a.createElement(d,{value:"X",isSelected:"X"===a,onPress:function(){return n("X")}}),r.a.createElement(d,{value:"O",isSelected:"O"===a,onPress:function(){return n("O")}})))},w=function(e){var t=e.gameMode,a=void 0===t?"Classic":t,c="Order & Chaos"===a?6:3,o=Object(n.useState)(0),s=Object(l.a)(o,2),m=s[0],d=s[1],w=Object(n.useState)(null),O=Object(l.a)(w,2),p=O[0],E=O[1],C=Object(n.useState)(new Array(c).fill(0).map((function(){return new Array(c).fill(0)}))),b=Object(l.a)(C,2),g=b[0],S=b[1],y=Object(n.useState)("X"),j=Object(l.a)(y,2),k=j[0],N=j[1];return Object(n.useEffect)((function(){S(new Array(c).fill({value:0,color:"default"}).map((function(){return new Array(c).fill({value:0,color:"default"})}))),d(0),E(null)}),[c]),r.a.createElement("div",null,p&&r.a.createElement("div",{className:"winnerMessageContainer"},r.a.createElement("p",{className:"winnerMessage"},p," wins!")),r.a.createElement("div",{className:"gameContainer"},g.map((function(e,t){return r.a.createElement("div",{key:t,className:"rowContainer"},e.map((function(e,n){return r.a.createElement(i,{key:t+""+n,valueColor:g[t][n].color,onPress:function(){return function(e,t,a,n,r,c,o,l){var s,i=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,m=c.length;"Classic"===e&&(s=n%2===0?"X":"O"),"Order & Chaos"===e&&(s=i);var d=Object(u.a)(c);d[t][a]={value:s,color:n%2===0?"default":"contrast"},o(d),r(n+1),"Classic"===e&&v(c,0,t,a,m,l),"Order & Chaos"===e&&f(c,0,t,a,m,l)}(a,t,n,m,d,g,S,E,k)},value:g[t][n].value})})))}))),"Order & Chaos"===a&&r.a.createElement(h,{player:m%2===0?"Order":"Chaos",selectedValue:k,setSelectedValue:N}))},O=function(){var e=Object(n.useState)("Order & Chaos"),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(w,{gameMode:a}),r.a.createElement("button",{onClick:function(){c("Classic"===a?"Order & Chaos":"Classic")}},"Classic"===a?"Switch to Order & Chaos":"Switch to Classic"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c58677b6.chunk.js.map