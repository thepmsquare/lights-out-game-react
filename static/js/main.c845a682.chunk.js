(this["webpackJsonplights-out-game-react"]=this["webpackJsonplights-out-game-react"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(6),i=n.n(r),c=(n(13),n(1)),s=n(2),u=n(4),l=n(3),d=n(7),f=(n(14),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var o;Object(c.a)(this,n),(o=e.call(this,t)).changeColor=function(t){var e=parseInt(t.target.getAttribute("data-row")),n=parseInt(t.target.getAttribute("data-column")),a=Object(d.a)(o.state.status),r=a.findIndex((function(t){return t.pos==="".concat(e).concat(n)})),i=a.findIndex((function(t){return t.pos==="".concat(e+1).concat(n)})),c=a.findIndex((function(t){return t.pos==="".concat(e-1).concat(n)})),s=a.findIndex((function(t){return t.pos==="".concat(e).concat(n+1)})),u=a.findIndex((function(t){return t.pos==="".concat(e).concat(n-1)}));r>=0&&(!0===a[r].on?a[r].on=!1:a[r].on=!0),i>=0&&(!0===a[i].on?a[i].on=!1:a[i].on=!0),c>=0&&(!0===a[c].on?a[c].on=!1:a[c].on=!0),s>=0&&(!0===a[s].on?a[s].on=!1:a[s].on=!0),u>=0&&(!0===a[u].on?a[u].on=!1:a[u].on=!0),a.every((function(t){return!1===t.on}))?o.setState({win:!0,status:a}):o.setState({status:a})},o.newPuzzle=function(){o.setState({status:o.numBoxesArray.map((function(t){return{pos:t.join(""),on:!(Math.random()>o.props.prob)}})),win:!1})},o.gridDim=t.gridDim,o.numBoxesArray=[];for(var a=1;a<=o.gridDim;a++)for(var r=1;r<=o.gridDim;r++)o.numBoxesArray.push([a,r]);return o.state={status:o.numBoxesArray.map((function(e){return{pos:e.join(""),on:!(Math.random()>t.prob)}})),win:!1},o}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"LightsOut"},a.a.createElement("h1",{className:"LightsOut-Header"},"Lights Out"),a.a.createElement("div",{className:"LightsOut-Boxes"},this.numBoxesArray.map((function(e,n){return a.a.createElement("div",{className:t.state.status[n].on?"LightsOut-Box LightsOut-On":"LightsOut-Box LightsOut-Off",style:{gridRow:e[0],gridColumn:e[1],height:80/t.gridDim+"vmin",width:80/t.gridDim+"vmin"},key:n,"data-row":e[0],"data-column":e[1],"data-index":n,onClick:t.changeColor})}))),this.state.win?a.a.createElement("h1",null,"You Win!"):null,a.a.createElement("button",{onClick:this.newPuzzle,className:"LightsOut-Button"},"Refresh Boxes?"))}}]),n}(o.Component)),h=(n(15),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,{gridDim:5,prob:.25}),a.a.createElement("p",null,a.a.createElement("a",{href:"https://www.youtube.com/watch?v=ffCWa3Cppk4"},"Solution (youtube link)")),a.a.createElement("p",null,"Thanks to"," ",a.a.createElement("a",{href:"https://www.1001freefonts.com/search.php?d=1&q=Studio+Typo"},"Studio Typo")," ","for the font"," ",a.a.createElement("a",{href:"https://www.1001freefonts.com/typo-round.font"},"Typo Round")))}}]),n}(o.Component)),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/lights-out-game-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/lights-out-game-react","/service-worker.js");m?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):p(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(e,t)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.c845a682.chunk.js.map