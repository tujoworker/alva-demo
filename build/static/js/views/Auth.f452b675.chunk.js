webpackJsonp([4],{517:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c,f,s,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(3),h=r(d),m=n(288),E=n(2),b=r(E),y={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},g=function(){return h.default.createElement("h3",null,"Public")},v=function(){return h.default.createElement("h3",null,"Protected")},w=(c=i=function(e){function t(){var e,n,r,o;a(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={redirectToReferrer:!1},o=n,u(r,o)}return l(t,e),p(t,[{key:"login",value:function(){var e=this;y.authenticate(function(){e.setState({redirectToReferrer:!0})})}},{key:"render",value:function(){if(this.state.hasError)return h.default.createElement("h1",null,"Something went wrong.");var e=this.props.location.state||{from:{pathname:"/"}},t=e.from,n=this.state.redirectToReferrer;return h.default.createElement("div",null,!0===n&&h.default.createElement(m.Redirect,{to:t}),h.default.createElement("p",null,"You must log in to view the page"),h.default.createElement("button",{onClick:this.login.bind(this)},"Log in"))}}]),t}(d.Component),i.propTypes={location:b.default.object.isRequired},c),_=function(e){var t=e.component,n=o(e,["component"]);return h.default.createElement(m.Route,Object.assign({},n,{render:function(e){return!0===y.isAuthenticated?h.default.createElement(t,e):h.default.createElement(m.Redirect,{to:{pathname:"/login",state:{from:e.location}}})}}))};_.defaultProps={location:null},_.propTypes={location:b.default.object,component:b.default.func.isRequired};var O=(0,m.withRouter)(function(e){var t=e.history;return y.isAuthenticated?h.default.createElement("p",null,"Welcome!"," ",h.default.createElement("button",{onClick:function(){y.signout(function(){return t.push("/")})}},"Sign out")):h.default.createElement("p",null,"You are not logged in.")}),P=function(){return h.default.createElement(m.BrowserRouter,{basename:"/auth"},h.default.createElement("div",null,h.default.createElement(O,null),h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement(m.Link,{to:"/public"},"Public Page")),h.default.createElement("li",null,h.default.createElement(m.Link,{to:"/protected"},"Protected Page"))),h.default.createElement(m.Route,{path:"/public",component:g}),h.default.createElement(R,null,h.default.createElement(m.Route,{path:"/login",component:w})),h.default.createElement(_,{path:"/protected",component:v})))},R=(s=f=function(e){function t(){var e,n,r,o;a(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={hasError:!1},o=n,u(r,o)}return l(t,e),p(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?h.default.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(d.Component),f.propTypes={children:b.default.node.isRequired},s);t.default=P}});
//# sourceMappingURL=Auth.f452b675.chunk.js.map