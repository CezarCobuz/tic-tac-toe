(this["webpackJsonptest-game"]=this["webpackJsonptest-game"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(5),c=t.n(r),i=(t(12),t(13),t(3)),l=(t(14),t(6)),s=function(e,n,t,o,a,r){var c,i=a.length;c=t%2===0?1:-1;var s=Object(l.a)(a);s[e][n]=c,r(s),o(t+1),function(e,n,t,o,a){console.log("+++ gridValues",e),console.log("+++ turn",n),console.log("+++ x",t),console.log("+++ y",o),console.log("+++ dimension",a);for(var r=0,c=0,i=0;i<a;i++)r+=e[t][i],c+=e[i][o];var l=0;if(t===o)for(var s=0;s<a;s++)l+=e[s][s];var u=0;if(t+o===a-1)for(var m=0;m<a;m++)u+=e[m][a-1-m];r!==a&&c!==a||alert("X WON"),r!==-1*a&&c!==-1*a||alert("O WON"),l!==a&&u!==a||alert("X WON"),l!==-1*a&&u!==-1*a||alert("O WON"),console.log("+++ sumSecondaryDiagonal",u),console.log("+++ sumMainDiagonal",l)}(a,t,e,n,i)},u=(t(15),function(e){var n=e.value,t=e.onPress,o=void 0===t?function(){}:t;return a.a.createElement("div",{key:n,className:"wrapper ".concat(0!==n?"":"wrapperHovered"),onClick:0===n?function(){return o()}:function(){}},0!==n&&a.a.createElement("p",null," ",function(e){return 1===e?"X":"O"}(n)))}),m=function(e){var n=e.dimension,t=void 0===n?3:n,r=Object(o.useState)(0),c=Object(i.a)(r,2),l=c[0],m=c[1],f=Object(o.useState)(new Array(t).fill(0).map((function(){return new Array(t).fill(0)}))),v=Object(i.a)(f,2),d=v[0],g=v[1];return a.a.createElement("div",{className:"gameContainer"},d.map((function(e,n){return a.a.createElement("div",{key:n,className:"rowContainer"},e.map((function(e,t){return a.a.createElement(u,{key:n+""+t,onPress:function(){return s(n,t,l,m,d,g)},value:d[n][t]})})))})))};var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.649be5b7.chunk.js.map