(this["webpackJsonplightshow-games-client"]=this["webpackJsonplightshow-games-client"]||[]).push([[7],{117:function(e,n){},120:function(e,n,t){},121:function(e,n,t){var a={"./Manual":[62,0,5],"./Manual.jsx":[62,0,5],"./Pong":[58,0,2],"./Pong.jsx":[58,0,2],"./Snake":[59,0,3],"./Snake.jsx":[59,0,3],"./Tetris":[60,0,4],"./Tetris.jsx":[60,0,4],"./Wand":[61,0,1,6],"./Wand.jsx":[61,0,1,6]};function c(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],c=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(c)}))}c.keys=function(){return Object.keys(a)},c.id=121,e.exports=c},122:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(22),o=t.n(r),i=t(18),s=t(12),l=t(27);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={x:NaN,y:NaN};function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f={inGame:!1,currentGame:"",placeInLine:-1},h=Object(s.combineReducers)({position:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DEVICE_POSITION":var t=n.payload,a=t.x,c=t.y;return d({},e,{x:a,y:c});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"START_GAME":return b({},e,{inGame:!0});case"END_GAME":return b({},e,{inGame:!1});case"LOAD_GAME":return b({},e,{currentGame:n.payload.game});case"QUEUE_UPDATE":return b({},e,{placeInLine:n.payload.placeInLine});default:return e}}}),g=t(53),v=Object(s.createStore)(h,Object(g.composeWithDevTools)()),y=(t(72),t(5)),O=t(6),j=t(8),E=t(7),w=t(3),G=t(9),k=function(e){return{currentGame:e.game.currentGame,inGame:e.game.inGame,placeInLine:e.game.placeInLine}},x=t(14),P=t(36),D=function(){return c.a.createElement("div",{className:"connection-floating"},c.a.createElement(P.a,null))},N=t(54),C=t.n(N),L=function(e){function n(e){var t;return Object(y.a)(this,n),(t=Object(j.a)(this,Object(E.a)(n).call(this,e))).draw=t.draw.bind(Object(w.a)(t)),t}return Object(G.a)(n,e),Object(O.a)(n,[{key:"componentDidMount",value:function(){this.draw(),window.addEventListener("resize",this.draw)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.draw)}},{key:"draw",value:function(){C()({height:window.innerHeight/4,width:window.innerWidth,x_colors:["#73b2d7","#72b1d7","#70b0d6","#6fafd6","#6daed5","#6caed5","#6badd5","#69acd4","#68abd4","#66aad3","#65a9d3","#63a8d2","#62a7d2","#61a7d1","#5fa6d1","#5ea5d0","#5da4d0","#5ba3d0","#5aa2cf","#59a1cf","#57a0ce","#569fce","#559ecd","#549ecd","#529dcc","#519ccc","#509bcb","#4f9acb","#4d99ca","#4c98ca","#4b97c9","#4a96c9","#4895c8","#4794c8","#4693c7","#4592c7","#4492c6","#4391c6","#4190c5","#408fc4","#3f8ec4","#3e8dc3","#3d8cc3","#3c8bc2","#3b8ac2","#3a89c1","#3988c1","#3787c0","#3686c0","#3585bf","#3484bf","#3383be","#3282bd","#3181bd","#3080bc","#2f7fbc","#2e7ebb","#2d7dbb","#2c7cba","#2b7bb9","#2a7ab9","#2979b8","#2878b8","#2777b7","#2676b6","#2574b6","#2473b5","#2372b4","#2371b4","#2270b3","#216fb3","#206eb2","#1f6db1","#1e6cb0","#1d6bb0","#1c6aaf","#1c69ae","#1b68ae","#1a67ad","#1966ac","#1865ab","#1864aa","#1763aa","#1662a9","#1561a8","#1560a7","#145fa6","#135ea5","#135da4","#125ca4","#115ba3","#115aa2","#1059a1","#1058a0","#0f579f","#0e569e","#0e559d","#0e549c","#0d539a","#0d5299","#0c5198","#0c5097","#0b4f96","#0b4e95","#0b4d93","#0b4c92","#0a4b91","#0a4a90","#0a498e","#0a488d","#09478c","#09468a","#094589","#094487","#094386","#094285","#094183","#084082","#083e80","#083d7f","#083c7d","#083b7c","#083a7a","#083979","#083877","#083776","#083674","#083573","#083471","#083370","#08326e","#08316d","#08306b"]}).canvas(this.refs.canvas)}},{key:"render",value:function(){var e=this.props.game||"none";return c.a.createElement("div",{className:"view-game"},c.a.createElement("canvas",{ref:"canvas"}),c.a.createElement("div",{className:"game-icon-position"},c.a.createElement("img",{className:"game-icon rounded-circle",src:"/icons/"+e.toLowerCase()+".svg",alt:e+" icon"})))}}]),n}(c.a.Component),T=t(125),I=t(124),_=function(e){function n(){var e;return Object(y.a)(this,n),(e=Object(j.a)(this,Object(E.a)(n).call(this))).joinGame=e.joinGame.bind(Object(w.a)(e)),e.cancelGame=e.cancelGame.bind(Object(w.a)(e)),e}return Object(G.a)(n,e),Object(O.a)(n,[{key:"joinGame",value:function(){console.log("Joining game"),this.context.emit("join")}},{key:"cancelGame",value:function(){console.log("Cancelling Join"),this.context.emit("cancel")}},{key:"render",value:function(){var e,n;return e=this.context.connected?-1===this.props.placeInLine?c.a.createElement(T.a,{onClick:this.joinGame,variant:"primary",size:"lg",block:!0},"Join"):c.a.createElement(T.a,{onClick:this.cancelGame,variant:"secondary",size:"lg",block:!0},"Cancel"):c.a.createElement(T.a,{variant:"secondary",size:"lg",disabled:!0,block:!0},"Disconnected"),n=-1===this.props.placeInLine?"Press play to join!":1===this.props.placeInLine?"You're next in line!":2===this.props.placeInLine?"There is one person ahead of you.":"There are "+(this.props.placeInLine-1)+" people ahead of you.",this.props.currentGame||(n=this.context.connected?"The light show is not currently playing a game. Please check back later! ":"The light show is currently disconnected. Please refresh and try again. "),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"large-header"},c.a.createElement(D,null),c.a.createElement(L,{game:this.props.currentGame})),c.a.createElement("div",{className:"dashboard-body"},c.a.createElement(I.a,null,c.a.createElement("h1",null,this.props.currentGame||(this.context.connected?"None":"No connection")),c.a.createElement("div",{className:"queue p-5"},c.a.createElement("p",null,n),e))))}}]),n}(a.Component);_.contextType=x.a;var A=Object(i.b)((function(e){return k(e)}))(_),S=t(56),M=t.n(S),U=function(e){var n=e.title,t=e.description,a=e.buttons;return c.a.createElement("div",{className:"container center-item"},c.a.createElement("h1",{className:"mt-5"},n),c.a.createElement("p",{className:"lead"},t),a)},W=t(57),z=t.n(W),R=(t(120),z()("https://lightshow.centralus.cloudapp.azure.com/")),J=function(e){function n(e){var t,a=e.loadGame,c=e.updateQueue,r=e.startGame,o=e.endGame;return Object(y.a)(this,n),t=Object(j.a)(this,Object(E.a)(n).call(this)),R.on("game",(function(e){console.log("Game:",e),a(e)})),R.on("queue",(function(e){console.log("Queue:",e),c(e)})),R.on("started",(function(){console.log("Starting game!"),r()})),R.on("ended",(function(){console.log("Ended game!"),o()})),t.Loading=t.Loading.bind(Object(w.a)(t)),t}return Object(G.a)(n,e),Object(O.a)(n,[{key:"Loading",value:function(e){return e.error?(console.error(e.error),c.a.createElement(U,{title:"Error!",description:"Unable to load "+this.props.currentGame+". ",button:"Retry",callback:"props.retry"})):e.pastDelay?c.a.createElement(U,{title:"Loading",description:"Loading"+this.props.currentGame+". Please wait."}):null}},{key:"render",value:function(){var e,n=this;return e=this.props.inGame?M()({loader:function(){return t(121)("./"+n.props.currentGame)},loading:this.Loading}):A,c.a.createElement(x.a.Provider,{value:R},c.a.createElement("main",{role:"main"},c.a.createElement(e,null)))}}]),n}(c.a.Component),Q=Object(i.b)((function(e){return k(e)}),(function(e){return{loadGame:function(n){return e({type:"LOAD_GAME",payload:{game:n||null}})},updateQueue:function(n){return e({type:"QUEUE_UPDATE",payload:{placeInLine:n||-1}})},startGame:function(){return e({type:"START_GAME"})},endGame:function(){return e({type:"END_GAME"})}}}))(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,{store:v},c.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},14:function(e,n,t){"use strict";var a=t(0),c=t.n(a).a.createContext();n.a=c},36:function(e,n,t){"use strict";var a=t(5),c=t(6),r=t(8),o=t(7),i=t(9),s=t(0),l=t.n(s),u=t(14),d=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(r.a)(this,Object(o.a)(n).call(this))).state={status:"Disconnected",connected:!1},e}return Object(i.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.context.on("connect",(function(){return e.updateConnection("Connected",!0)})),this.context.on("connect_timeout",(function(){return e.updateConnection("Timed out",!1)})),this.context.on("reconnect",(function(){return e.updateConnection("Reconnected",!0)})),this.context.on("reconnecting",(function(n){return e.updateConnection("Reconnecting"+".".repeat(n%5),!1)})),this.context.on("reconnect_failed",(function(){return e.updateConnection("Unable to reconnect",!1)})),this.context.on("disconnect",(function(){return e.updateConnection("Disconnected",!1)})),this.context.on("connect_error",(function(e){"TransportError"===e.type?console.log("Can't connect to server"):console.error(e)})),this.context.connected&&this.updateConnection("Connected",!0)}},{key:"updateConnection",value:function(e,n){this.setState({status:e,connected:n})}},{key:"render",value:function(){return l.a.createElement("div",{className:"connection-indicator d-flex align-items-center"},l.a.createElement("span",{className:"p-1 pr-2"},this.state.status)," ",l.a.createElement("span",{className:"dot "+(this.state.connected?"green":"red")}))}}]),n}(s.Component);d.contextType=u.a,n.a=d},63:function(e,n,t){e.exports=t(122)},72:function(e,n,t){},82:function(e,n){},87:function(e,n){},88:function(e,n){}},[[63,8,9]]]);
//# sourceMappingURL=main.154cd4d4.chunk.js.map