(this["webpackJsonplightshow-games-client"]=this["webpackJsonplightshow-games-client"]||[]).push([[4],{116:function(e,n){},119:function(e,n,t){},120:function(e,n,t){var a={"./Manual":[59,1],"./Manual.jsx":[59,1],"./Pong":[60,2],"./Pong.jsx":[60,2],"./Wand":[61,0,3],"./Wand.jsx":[61,0,3]};function c(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],c=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(c)}))}c.keys=function(){return Object.keys(a)},c.id=120,e.exports=c},121:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(22),o=t.n(r),i=t(18),s=t(12),l=t(27);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={x:NaN,y:NaN};function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f={inGame:!1,currentGame:"",placeInLine:-1},h=Object(s.combineReducers)({position:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DEVICE_POSITION":var t=n.payload,a=t.x,c=t.y;return d({},e,{x:a,y:c});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"START_GAME":return b({},e,{inGame:!0});case"END_GAME":return b({},e,{inGame:!1});case"LOAD_GAME":return b({},e,{currentGame:n.payload.game});case"QUEUE_UPDATE":return b({},e,{placeInLine:n.payload.placeInLine});default:return e}}}),g=t(54),v=Object(s.createStore)(h,Object(g.composeWithDevTools)()),O=(t(71),t(6)),y=t(7),j=t(10),E=t(8),w=t(3),G=t(9),k=function(e){return{currentGame:e.game.currentGame,inGame:e.game.inGame,placeInLine:e.game.placeInLine}},P=t(14),x=t(38),C=function(){return c.a.createElement("div",{className:"connection-floating"},c.a.createElement(x.a,null))},D=t(55),L=t.n(D),N=function(e){function n(e){var t;return Object(O.a)(this,n),(t=Object(j.a)(this,Object(E.a)(n).call(this,e))).draw=t.draw.bind(Object(w.a)(t)),t}return Object(G.a)(n,e),Object(y.a)(n,[{key:"componentDidMount",value:function(){this.draw(),window.addEventListener("resize",this.draw)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.draw)}},{key:"draw",value:function(){L()({height:window.innerHeight/4,width:window.innerWidth,x_colors:["#73b2d7","#72b1d7","#70b0d6","#6fafd6","#6daed5","#6caed5","#6badd5","#69acd4","#68abd4","#66aad3","#65a9d3","#63a8d2","#62a7d2","#61a7d1","#5fa6d1","#5ea5d0","#5da4d0","#5ba3d0","#5aa2cf","#59a1cf","#57a0ce","#569fce","#559ecd","#549ecd","#529dcc","#519ccc","#509bcb","#4f9acb","#4d99ca","#4c98ca","#4b97c9","#4a96c9","#4895c8","#4794c8","#4693c7","#4592c7","#4492c6","#4391c6","#4190c5","#408fc4","#3f8ec4","#3e8dc3","#3d8cc3","#3c8bc2","#3b8ac2","#3a89c1","#3988c1","#3787c0","#3686c0","#3585bf","#3484bf","#3383be","#3282bd","#3181bd","#3080bc","#2f7fbc","#2e7ebb","#2d7dbb","#2c7cba","#2b7bb9","#2a7ab9","#2979b8","#2878b8","#2777b7","#2676b6","#2574b6","#2473b5","#2372b4","#2371b4","#2270b3","#216fb3","#206eb2","#1f6db1","#1e6cb0","#1d6bb0","#1c6aaf","#1c69ae","#1b68ae","#1a67ad","#1966ac","#1865ab","#1864aa","#1763aa","#1662a9","#1561a8","#1560a7","#145fa6","#135ea5","#135da4","#125ca4","#115ba3","#115aa2","#1059a1","#1058a0","#0f579f","#0e569e","#0e559d","#0e549c","#0d539a","#0d5299","#0c5198","#0c5097","#0b4f96","#0b4e95","#0b4d93","#0b4c92","#0a4b91","#0a4a90","#0a498e","#0a488d","#09478c","#09468a","#094589","#094487","#094386","#094285","#094183","#084082","#083e80","#083d7f","#083c7d","#083b7c","#083a7a","#083979","#083877","#083776","#083674","#083573","#083471","#083370","#08326e","#08316d","#08306b"]}).canvas(this.refs.canvas)}},{key:"render",value:function(){var e=this.props.game||"none";return c.a.createElement("div",{className:"view-game"},c.a.createElement("canvas",{ref:"canvas"}),c.a.createElement("div",{className:"game-icon-position"},c.a.createElement("img",{className:"game-icon rounded-circle",src:"/lightshow-games-client/icons/"+e.toLowerCase()+".svg",alt:e+" icon"})))}}]),n}(c.a.Component),T=t(124),I=t(123),_=function(e){function n(){var e;return Object(O.a)(this,n),(e=Object(j.a)(this,Object(E.a)(n).call(this))).joinGame=e.joinGame.bind(Object(w.a)(e)),e.cancelGame=e.cancelGame.bind(Object(w.a)(e)),e}return Object(G.a)(n,e),Object(y.a)(n,[{key:"joinGame",value:function(){console.log("Joining game"),this.context.emit("join")}},{key:"cancelGame",value:function(){console.log("Cancelling Join"),this.context.emit("cancel")}},{key:"render",value:function(){var e,n;return e=this.context.connected?-1===this.props.placeInLine?c.a.createElement(T.a,{onClick:this.joinGame,variant:"primary",size:"lg",block:!0},"Join"):c.a.createElement(T.a,{onClick:this.cancelGame,variant:"secondary",size:"lg",block:!0},"Cancel"):c.a.createElement(T.a,{variant:"secondary",size:"lg",disabled:!0,block:!0},"Disconnected"),n=-1===this.props.placeInLine?"Press play to join!":1===this.props.placeInLine?"You're next in line!":2===this.props.placeInLine?"There is one person ahead of you.":"There are "+(this.props.placeInLine-1)+" people ahead of you.",this.props.currentGame||(n=this.context.connected?"The light show is not currently playing a game. Please check back later! ":"The light show is currently disconnected. Please refresh and try again. "),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"large-header"},c.a.createElement(C,null),c.a.createElement(N,{game:this.props.currentGame})),c.a.createElement("div",{className:"dashboard-body"},c.a.createElement(I.a,null,c.a.createElement("h1",null,this.props.currentGame||(this.context.connected?"None":"No connection")),c.a.createElement("div",{className:"queue p-5"},c.a.createElement("p",null,n),e))))}}]),n}(a.Component);_.contextType=P.a;var A=Object(i.b)((function(e){return k(e)}))(_),U=t(57),M=t.n(U),S=t(34),W=t(58),z=t.n(W),R=(t(119),z()("https://lightshow.centralus.cloudapp.azure.com/")),J=function(e){function n(e){var t,a=e.loadGame,c=e.updateQueue,r=e.startGame;return Object(O.a)(this,n),t=Object(j.a)(this,Object(E.a)(n).call(this)),R.on("game",(function(e){console.log("Game:",e),a(e)})),R.on("queue",(function(e){console.log("Queue:",e),c(e)})),R.on("started",(function(){console.log("Starting game!"),r()})),t.Loading=t.Loading.bind(Object(w.a)(t)),t}return Object(G.a)(n,e),Object(y.a)(n,[{key:"Loading",value:function(e){return e.error?(console.error(e.error),c.a.createElement(S.a,{title:"Error!",description:"Unable to load "+this.props.currentGame+". ",button:"Retry",callback:"props.retry"})):e.pastDelay?c.a.createElement(S.a,{title:"Loading",description:"Loading"+this.props.currentGame+". Please wait."}):null}},{key:"render",value:function(){var e,n=this;return e=this.props.inGame?M()({loader:function(){return t(120)("./"+n.props.currentGame)},loading:this.Loading}):A,c.a.createElement(P.a.Provider,{value:R},c.a.createElement("main",{role:"main"},c.a.createElement(e,null)))}}]),n}(c.a.Component),Q=Object(i.b)((function(e){return k(e)}),(function(e){return{loadGame:function(n){return e({type:"LOAD_GAME",payload:{game:n||null}})},updateQueue:function(n){return e({type:"QUEUE_UPDATE",payload:{placeInLine:n||-1}})},startGame:function(){return e({type:"START_GAME"})}}}))(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,{store:v},c.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},14:function(e,n,t){"use strict";var a=t(0),c=t.n(a).a.createContext();n.a=c},34:function(e,n,t){"use strict";var a=t(0),c=t.n(a);n.a=function(e){var n=e.title,t=e.description,a=e.buttons;return c.a.createElement("div",{className:"container center-item"},c.a.createElement("h1",{className:"mt-5"},n),c.a.createElement("p",{className:"lead"},t),a)}},38:function(e,n,t){"use strict";var a=t(6),c=t(7),r=t(10),o=t(8),i=t(9),s=t(0),l=t.n(s),u=t(14),d=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(r.a)(this,Object(o.a)(n).call(this))).state={status:"Disconnected",connected:!1},e}return Object(i.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.context.on("connect",(function(){return e.updateConnection("Connected",!0)})),this.context.on("connect_timeout",(function(){return e.updateConnection("Timed out",!1)})),this.context.on("reconnect",(function(){return e.updateConnection("Reconnected",!0)})),this.context.on("reconnecting",(function(n){return e.updateConnection("Reconnecting"+".".repeat(n%5),!1)})),this.context.on("reconnect_failed",(function(){return e.updateConnection("Unable to reconnect",!1)})),this.context.on("disconnect",(function(){return e.updateConnection("Disconnected",!1)})),this.context.on("connect_error",(function(e){"TransportError"===e.type?console.log("Can't connect to server"):console.error(e)})),this.context.connected&&this.updateConnection("Connected",!0)}},{key:"updateConnection",value:function(e,n){this.setState({status:e,connected:n})}},{key:"render",value:function(){return l.a.createElement("div",{className:"connection-indicator d-flex align-items-center"},l.a.createElement("span",{className:"p-1 pr-2"},this.state.status)," ",l.a.createElement("span",{className:"dot "+(this.state.connected?"green":"red")}))}}]),n}(s.Component);d.contextType=u.a,n.a=d},62:function(e,n,t){e.exports=t(121)},71:function(e,n,t){},81:function(e,n){},86:function(e,n){},87:function(e,n){}},[[62,5,6]]]);
//# sourceMappingURL=main.5d48d01e.chunk.js.map