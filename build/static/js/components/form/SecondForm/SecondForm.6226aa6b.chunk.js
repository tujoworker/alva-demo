webpackJsonp([1],{1236:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(20);t.default=(0,o.css)("font-size:0.5em;/* We could use rem;here if HTML element has synamic font sizing! */\n\n  fieldset{/*background-color:red !important;*/\n    /*stacking fieldsets above each other*/\n    position:relative;border:0 none;border-radius:3px;box-sizing:border-box;background:white;/*box-shadow:0 0 15px 1px rgba(0,0,0,0.4);*/}label{display:block;font-size:2em;color:black;padding:0 0 0.4em;}.form_con{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;}.input_set{margin-top:0.8em;margin-bottom:2em;}.err_msg{cursor:default;display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;right:-4px;width:30vw;max-width:30vmin;min-height:2.6em;padding:0.6em 1.2em;border-radius:6px;background-color:rgba(255,10,50,0.8);font-size:1.7em;color:white;/*text-align:center;*/\n    line-height:1.5em;}.err_msg:before{content:'';position:absolute;/*display:flex;*/\n    /*justify-content:center;*/\n    /*left:-0.8em;*/\n    top:40%;/*firefox fix*/\n    left:-11px;border-color:rgba(255,10,50,0.8) transparent;/*border-color:black transparent;*/\n    border-style:solid;border-width:0 6px 10px 6px;/*border-width:0 0.6em 0.8em 0.6em;*/\n    /*height:0;width:0;*/\n    transform:rotate(-90deg);}/*.err_msg:after{content:'';position:absolute;left:-6px;top:100%;border-color:black transparent;border-style:solid;border-width:8px 8px 0px 8px;height:0px;width:0px;}*/\n\n  input,textarea{width:100%;/*padding:15px 15px 14px;*/\n    /*padding:.15em .15em .14em;*/\n    padding:1em 1em 0.8em;/*padding:1.5rem 1.5rem 1.4em;/* We could use rem;here if HTML element has synamic font sizing! */\n    */:0.15em;font-size:2em;/*font-size:2em;*/\n    font-weight:100;color:#2c3e50;border:1px solid #ccc;box-sizing:border-box;}/*buttons*/\n  .action-button{padding:0.6em 1em;margin:0.2em 0.2em;width:5em;background:#27ae60;font-weight:bold;font-size:2em;color:white;border:0 none;border-radius:2px;cursor:pointer;}.action-button:hover,.action-button:focus{box-shadow:0 0 0 2px white,0 0 0 3px #27ae60,0 0 0 5px rgba(222,234,42,0.4);}")},1237:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,u,f,c,p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),d=r(75),m=r(2),b=o(m),h=r(3),y=o(h),g=r(507),w=o(g),_=(0,d.observer)((u=s=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"focus",value:function(){if(this.props.field.error&&this._ErrMsgRef)try{this._ErrMsgRef.hide(),this._ErrMsgRef=null}catch(e){}}},{key:"render",value:function(){var e=this,t=this.props,r=t.field,o=t.type,n=void 0===o?"text":o,i=t.placeholder,a=void 0===i?null:i;return y.default.createElement("div",{className:"input_set"},y.default.createElement("label",{htmlFor:r.id},r.label),y.default.createElement("span",{className:"form_con"},y.default.createElement("input",Object.assign({},r.bind({type:n,placeholder:a}),{onFocus:this.focus.bind(this)})),r.error&&y.default.createElement(v,Object.assign({},this.props,{ref:function(t){return e._ErrMsgRef=t}}))))}}]),t}(h.Component),s.propTypes={field:b.default.object.isRequired,type:b.default.string,placeholder:b.default.string},s.defaultProps={placeholder:null,type:null},l=u))||l,v=(c=f=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"componentDidMount",value:function(){(0,w.default)({targets:this._ref,easing:"easeOutSine",translateX:[{value:-5,duration:0},0],opacity:[0,1],duration:600,delay:100})}},{key:"componentWillUnmount",value:function(){this._ref=null}},{key:"hide",value:function(){var e=this;(0,w.default)({targets:this._ref,easing:"easeOutSine",opacity:[1,0],translateX:[{value:5,duration:300}],duration:400,complete:function(){try{e.props.field.showErrors(!1)}catch(e){}}})}},{key:"render",value:function(){var e=this;return y.default.createElement("span",{className:"err_msg",ref:function(t){return e._ref=t},onMouseDown:this.hide.bind(this)},this.props.field.error)}}]),t}(h.Component),f.propTypes={field:b.default.object.isRequired},c);t.default=_},1242:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(510),s=r(511),u=function(e){return e&&e.__esModule?e:{default:e}}(s),f=r(289),c=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"setup",value:function(){return{fields:[{name:"email",label:(0,f.L)("form.email.label"),placeholder:(0,f.L)("form.email.placeholder"),rules:"required|email|string|between:5,25"},{name:"password",label:(0,f.L)("form.password.label"),placeholder:(0,f.L)("form.password.placeholder"),rules:"required|string|between:5,200"},{name:"passwordConfirm",label:(0,f.L)("form.password.confirm.label"),placeholder:(0,f.L)("form.password.confirm.placeholder"),rules:"required|string|same:password"}]}}},{key:"hooks",value:function(){return{onError:function(e){console.log("All form errors",e.errors())}}}},{key:"plugins",value:function(){return{dvr:u.default}}}]),t}(l.Form);t.default=c},514:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,s,u,f,c=r(55),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),d=r(75),m=r(288),b=r(2),h=o(b),y=r(3),g=o(y),w=r(507),_=o(w),v=r(113),x=r(508),O=o(x),j=r(93),E=o(j),k=r(1242),P=o(k),M=r(1236),S=o(M),R=r(1237),T=o(R),z=(l=(0,d.inject)("store"),(0,m.withRouter)(s=l(s=(0,d.observer)((f=u=function(e){function t(e){n(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.form=new P.default({}),r.form.$hooks.onSuccess=r.submit.bind(r),r.form.$hooks.onError=r.submit.bind(r),r}return a(t,e),p(t,[{key:"componentWillMount",value:function(){this.form_disposer=this.props.store.regForm.bindForm(this.form),this.props.store.regForm.setLocation(),this.props.store.regForm.hasRequiredData()||this.props.store.firstStep.hash||this.props.history.replace("/form/firststep")}},{key:"componentDidMount",value:function(){(0,_.default)(Object.merge(O.default.viewTransactionAnimationIn,{targets:"#alva_demo .app_content_inner",duration:this.props.store.spinner.slowFadeNextView?2e3:300}))}},{key:"componentWillUnmount",value:function(){this.form_disposer()}},{key:"submit",value:function(){var e=this;if(this.props.onSubmit)return this.props.onSubmit();(0,_.default)(Object.merge(O.default.viewTransactionAnimationOut,{targets:"#alva_demo .app_content_inner",complete:function(){e.props.history.push("/form/third")}}))}},{key:"render",value:function(){return g.default.createElement(E.default,null,g.default.createElement("div",{className:(0,c.css)(S.default)},g.default.createElement("form",{onSubmit:this.form.onSubmit},g.default.createElement("fieldset",null,g.default.createElement(T.default,{field:this.form.$("email")}),g.default.createElement(T.default,{field:this.form.$("password")}),g.default.createElement(T.default,{field:this.form.$("passwordConfirm")}),g.default.createElement("br",null),g.default.createElement("button",{type:"submit",className:"action-button",onClick:this.form.onSubmit},g.default.createElement(v.FormattedMessage,{id:"form.submit.label"})),g.default.createElement("p",null,this.form.error)))))}}]),t}(y.Component),u.propTypes={store:h.default.object.isRequired,history:h.default.object.isRequired,onSubmit:h.default.oneOf([h.default.function,null])},u.defaultProps={onSubmit:null},s=f))||s)||s)||s);t.default=z}});
//# sourceMappingURL=SecondForm.6226aa6b.chunk.js.map