webpackJsonp([17],{361:function(n,t,e){n.exports={basic:e(829)}},480:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){var e={};for(var a in n)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}},481:function(n,t,e){"use strict";e(29),e(509)},482:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(e(510)),s=o(e(511));function o(n){return n&&n.__esModule?n:{default:n}}a.default.Item=s.default,t.default=a.default,n.exports=t.default},509:function(n,t){},510:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=r(e(0)),p=r(e(3));function r(n){return n&&n.__esModule?n:{default:n}}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var l=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},u=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n,t=this.props,e=t.direction,s=t.wrap,r=t.justify,u=t.align,i=t.alignContent,f=t.className,k=t.children,d=t.prefixCls,b=t.style,y=l(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),h=(0,p.default)(d,f,(c(n={},d+"-dir-row","row"===e),c(n,d+"-dir-row-reverse","row-reverse"===e),c(n,d+"-dir-column","column"===e),c(n,d+"-dir-column-reverse","column-reverse"===e),c(n,d+"-nowrap","nowrap"===s),c(n,d+"-wrap","wrap"===s),c(n,d+"-wrap-reverse","wrap-reverse"===s),c(n,d+"-justify-start","start"===r),c(n,d+"-justify-end","end"===r),c(n,d+"-justify-center","center"===r),c(n,d+"-justify-between","between"===r),c(n,d+"-justify-around","around"===r),c(n,d+"-align-start","start"===u),c(n,d+"-align-center","center"===u),c(n,d+"-align-end","end"===u),c(n,d+"-align-baseline","baseline"===u),c(n,d+"-align-stretch","stretch"===u),c(n,d+"-align-content-start","start"===i),c(n,d+"-align-content-end","end"===i),c(n,d+"-align-content-center","center"===i),c(n,d+"-align-content-between","between"===i),c(n,d+"-align-content-around","around"===i),c(n,d+"-align-content-stretch","stretch"===i),n));return o.default.createElement("div",a({className:h,style:b},y),k)}}]),t}();t.default=u,u.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=t.default},511:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=r(e(0)),p=r(e(3));function r(n){return n&&n.__esModule?n:{default:n}}var c=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},l=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n=this.props,t=n.children,e=n.className,s=n.prefixCls,r=n.style,l=c(n,["children","className","prefixCls","style"]),u=(0,p.default)(s+"-item",e);return o.default.createElement("div",a({className:u,style:r},l),t)}}]),t}();t.default=l,l.defaultProps={prefixCls:"am-flexbox"},n.exports=t.default},521:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return Object.keys(n).reduce(function(t,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(t[e]=n[e]),t},{})},n.exports=t.default},648:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),s=r(e(0)),o=r(e(662)),p=r(e(3));function r(n){return n&&n.__esModule?n:{default:n}}var c=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},l=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,s.default.Component),a(t,[{key:"render",value:function(){var n=this.props,t=n.className,e=n.style,a=c(n,["className","style"]),r=a.prefixCls,l=a.children,u=(0,p.default)(r+"-wrapper",t);"class"in a&&delete a.class;var i=s.default.createElement("label",{className:u,style:e},s.default.createElement(o.default,a),l);return this.props.wrapLabel?i:s.default.createElement(o.default,this.props)}}]),t}();t.default=l,l.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=t.default},662:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(676);e.d(t,"default",function(){return a.a})},676:function(n,t,e){"use strict";var a=e(2),s=e.n(a),o=e(34),p=e.n(o),r=e(480),c=e.n(r),l=e(5),u=e.n(l),i=e(8),f=e.n(i),k=e(6),d=e.n(k),b=e(7),y=e.n(b),h=e(0),g=e(1),v=e.n(g),m=e(677),O=e.n(m),j=e(3),w=e.n(j),x=function(n){function t(n){u()(this,t);var e=d()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));C.call(e);var a="checked"in n?n.checked:n.defaultChecked;return e.state={checked:a},e}return y()(t,n),f()(t,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return O.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var n,t=this.props,e=t.prefixCls,a=t.className,o=t.style,r=t.name,l=t.type,u=t.disabled,i=t.readOnly,f=t.tabIndex,k=t.onClick,d=t.onFocus,b=t.onBlur,y=c()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),g=Object.keys(y).reduce(function(n,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(n[t]=y[t]),n},{}),v=this.state.checked,m=w()(e,a,(n={},p()(n,e+"-checked",v),p()(n,e+"-disabled",u),n));return h.default.createElement("span",{className:m,style:o},h.default.createElement("input",s()({name:r,type:l,readOnly:i,disabled:u,tabIndex:f,className:e+"-input",checked:!!v,onClick:k,onFocus:d,onBlur:b,onChange:this.handleChange},g)),h.default.createElement("span",{className:e+"-inner"}))}}]),t}(h.default.Component);x.propTypes={prefixCls:v.a.string,className:v.a.string,style:v.a.object,name:v.a.string,type:v.a.string,defaultChecked:v.a.oneOfType([v.a.number,v.a.bool]),checked:v.a.oneOfType([v.a.number,v.a.bool]),disabled:v.a.bool,onFocus:v.a.func,onBlur:v.a.func,onChange:v.a.func,onClick:v.a.func,tabIndex:v.a.string,readOnly:v.a.bool},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var C=function(){var n=this;this.handleChange=function(t){var e=n.props;e.disabled||("checked"in e||n.setState({checked:t.target.checked}),e.onChange({target:s()({},e,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t.a=x},677:function(n,t,e){var a=e(678);var s={shouldComponentUpdate:function(n,t){return s=n,o=t,!a((e=this).props,s)||!a(e.state,o);var e,s,o}};n.exports=s},678:function(n,t,e){"use strict";var a=e(679);n.exports=function(n,t,e,s){var o=e?e.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=a(n),r=a(t),c=p.length;if(c!==r.length)return!1;s=s||null;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<c;u++){var i=p[u];if(!l(i))return!1;var f=n[i],k=t[i],d=e?e.call(s,f,k,i):void 0;if(!1===d||void 0===d&&f!==k)return!1}return!0}},679:function(n,t,e){var a=e(680),s=e(681),o=e(682),p=/^\d+$/,r=Object.prototype.hasOwnProperty,c=a(Object,"keys"),l=9007199254740991;var u,i=(u="length",function(n){return null==n?void 0:n[u]});function f(n,t){return n="number"==typeof n||p.test(n)?+n:-1,t=null==t?l:t,n>-1&&n%1==0&&n<t}function k(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=l}function d(n){for(var t=function(n){if(null==n)return[];b(n)||(n=Object(n));var t=n.length;t=t&&k(t)&&(o(n)||s(n))&&t||0;var e=n.constructor,a=-1,p="function"==typeof e&&e.prototype===n,c=Array(t),l=t>0;for(;++a<t;)c[a]=a+"";for(var u in n)l&&f(u,t)||"constructor"==u&&(p||!r.call(n,u))||c.push(u);return c}(n),e=t.length,a=e&&n.length,p=!!a&&k(a)&&(o(n)||s(n)),c=-1,l=[];++c<e;){var u=t[c];(p&&f(u,a)||r.call(n,u))&&l.push(u)}return l}function b(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}var y=c?function(n){var t,e=null==n?void 0:n.constructor;return"function"==typeof e&&e.prototype===n||"function"!=typeof n&&(null!=(t=n)&&k(i(t)))?d(n):b(n)?c(n):[]}:d;n.exports=y},680:function(n,t){var e="[object Function]",a=/^\[object .+?Constructor\]$/;var s=Object.prototype,o=Function.prototype.toString,p=s.hasOwnProperty,r=s.toString,c=RegExp("^"+o.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=function(n,t){var s=null==n?void 0:n[t];return p=s,null!=p&&(i=typeof(u=l=p),!u||"object"!=i&&"function"!=i||r.call(l)!=e?(f=p)&&"object"==typeof f&&a.test(p):c.test(o.call(p)))?s:void 0;var p,l,u,i,f}},681:function(n,t){var e=9007199254740991,a="[object Arguments]",s="[object Function]",o="[object GeneratorFunction]",p=Object.prototype,r=p.hasOwnProperty,c=p.toString,l=p.propertyIsEnumerable;n.exports=function(n){return!!(b=t=n)&&"object"==typeof b&&null!=(p=t)&&"number"==typeof(d=p.length)&&d>-1&&d%1==0&&d<=e&&(k=typeof(f=u=p),!((i=!f||"object"!=k&&"function"!=k?"":c.call(u))==s||i==o))&&r.call(n,"callee")&&(!l.call(n,"callee")||c.call(n)==a);var t,p,u,i,f,k,d,b}},682:function(n,t){var e="[object Function]",a=/^\[object .+?Constructor\]$/;function s(n){return!!n&&"object"==typeof n}var o,p,r,c,l,u,i=Object.prototype,f=Function.prototype.toString,k=i.hasOwnProperty,d=i.toString,b=RegExp("^"+f.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=9007199254740991;var h=(l=Array,u=null==l?void 0:l["isArray"],null!=(o=u)&&(c=typeof(r=p=o),!r||"object"!=c&&"function"!=c||d.call(p)!=e?s(o)&&a.test(o):b.test(f.call(o)))?u:void 0)||function(n){return s(n)&&("number"==typeof(t=n.length)&&t>-1&&t%1==0&&t<=y)&&"[object Array]"==d.call(n);var t};n.exports=h},716:function(n,t,e){"use strict";e(29),e(130),e(733)},717:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(e(648)),s=p(e(734)),o=p(e(735));function p(n){return n&&n.__esModule?n:{default:n}}a.default.CheckboxItem=s.default,a.default.AgreeItem=o.default,t.default=a.default,n.exports=t.default},733:function(n,t){},734:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=l(e(0)),p=l(e(3)),r=l(e(131)),c=l(e(648));function l(n){return n&&n.__esModule?n:{default:n}}var u=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},i=r.default.Item;function f(){}var k=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n,t,e,s=this,r=this.props,l=r.listPrefixCls,k=(r.onChange,r.disabled),d=r.checkboxProps,b=r.onClick,y=u(r,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),h=y.prefixCls,g=y.className,v=y.children,m=(0,p.default)(h+"-item",g,(e=!0===k,(t=h+"-item-disabled")in(n={})?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n));k||(y.onClick=b||f);var O={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(n){n in s.props&&(O[n]=s.props[n])}),o.default.createElement(i,a({},y,{prefixCls:l,className:m,thumb:o.default.createElement(c.default,a({},d,O))}),v)}}]),t}();t.default=k,k.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},n.exports=t.default},735:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=l(e(0)),p=l(e(3)),r=l(e(648)),c=l(e(521));function l(n){return n&&n.__esModule?n:{default:n}}var u=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},i=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n=this.props,t=n.style,e=u(n,["style"]),s=e.prefixCls,l=e.className,i=(0,p.default)(s+"-agree",l);return o.default.createElement("div",a({},(0,c.default)(e),{className:i,style:t}),o.default.createElement(r.default,a({},e,{className:s+"-agree-label"})))}}]),t}();t.default=i,i.defaultProps={prefixCls:"am-checkbox"},n.exports=t.default},829:function(n,t,e){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Ph.D.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bachelor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'College diploma\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem demo\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          Undergraduate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>Auxiliary text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Agree <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'agree it\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>agreement<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=e(0);e(0);e(481);var t=u(e(482)).default;e(481);var a=u(e(482)).default;e(130);var s=u(e(131)).default;e(130);var o=u(e(131)).default;e(716);var p=u(e(717)).default;e(716);var r=u(e(717)).default,c=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}();function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n){return n&&n.__esModule?n:{default:n}}var i=r.CheckboxItem,f=p.AgreeItem,k=function(e){function p(){var n,t,e;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);for(var a=arguments.length,s=Array(a),o=0;o<a;o++)s[o]=arguments[o];return t=e=l(this,(n=p.__proto__||Object.getPrototypeOf(p)).call.apply(n,[this].concat(s))),e.onChange=function(n){console.log(n)},l(e,t)}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(p,n.Component),c(p,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement(s,{renderHeader:function(){return"CheckboxItem demo"}},[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"College diploma"}].map(function(t){return n.createElement(i,{key:t.value,onChange:function(){return e.onChange(t.value)}},t.label)}),n.createElement(i,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"Undergraduate",n.createElement(o.Item.Brief,null,"Auxiliary text"))),n.createElement(t,null,n.createElement(a.Item,null,n.createElement(f,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"Agree ",n.createElement("a",{onClick:function(n){n.preventDefault(),alert("agree it")}},"agreement")))))}}]),p}();return n.createElement(k,null)}}}});