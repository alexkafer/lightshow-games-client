(this["webpackJsonplightshow-games-client"]=this["webpackJsonplightshow-games-client"]||[]).push([[3],{146:function(e,t,a){"use strict";var n=a(2),s=a(13),l=a(19),c=a.n(l),r=a(0),o=a.n(r),i=a(20),u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.noGutters,r=e.as,u=void 0===r?"div":r,d=e.className,m=Object(s.a)(e,["bsPrefix","noGutters","as","className"]),f=Object(i.a)(a,"row");return o.a.createElement(u,Object(n.a)({ref:t},m,{className:c()(d,f,l&&"no-gutters")}))}));u.defaultProps={noGutters:!1},t.a=u},147:function(e,t,a){"use strict";var n=a(2),s=a(13),l=a(19),c=a.n(l),r=a(0),o=a.n(r),i=a(20),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,r=e.as,d=void 0===r?"div":r,m=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(i.a)(a,"col"),b=[],p=[];return u.forEach((function(e){var t,a,n,s=m[e];if(delete m[e],null!=s&&"object"===typeof s){var l=s.span;t=void 0===l||l,a=s.offset,n=s.order}else t=s;var c="xs"!==e?"-"+e:"";null!=t&&b.push(!0===t?""+f+c:""+f+c+"-"+t),null!=n&&p.push("order"+c+"-"+n),null!=a&&p.push("offset"+c+"-"+a)})),b.length||b.push(f),o.a.createElement(d,Object(n.a)({},m,{ref:t,className:c.a.apply(void 0,[l].concat(b,p))}))}));d.displayName="Col",t.a=d},59:function(e,t,a){"use strict";a.r(t);var n=a(6),s=a(7),l=a(10),c=a(8),r=a(3),o=a(9),i=a(0),u=a.n(i),d=a(267),m=a(123),f=a(146),b=a(147),p=a(124),h=a(14),v=a(36),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).sendUp=a.sendUp.bind(Object(r.a)(a)),a.sendDown=a.sendDown.bind(Object(r.a)(a)),a.sendRotate=a.sendRotate.bind(Object(r.a)(a)),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"sendUp",value:function(){this.context.emit("up")}},{key:"sendDown",value:function(){this.context.emit("down")}},{key:"sendRotate",value:function(){this.context.emit("rotate")}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{bg:"dark",expand:"lg",variant:"dark"},u.a.createElement(d.a.Brand,null,"Pong"),u.a.createElement(v.a,null)),u.a.createElement(m.a,null,u.a.createElement(f.a,null,u.a.createElement(b.a,null,u.a.createElement(p.a,{className:"p-5 mb-2",onClick:this.sendUp,size:"lg",block:!0}," UP "))),u.a.createElement(f.a,null,u.a.createElement(b.a,null,u.a.createElement(p.a,{className:"p-5 mt-2",onClick:this.sendDown,size:"lg",block:!0}," DOWN ")))))}}]),t}(u.a.Component);j.contextType=h.a,t.default=j}}]);
//# sourceMappingURL=3.6f09a978.chunk.js.map