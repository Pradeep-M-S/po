webpackJsonp([0x67ef26645b2a,60335399758886],{75:function(e,I){e.exports={layoutContext:{}}},127:function(e,I,t){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}I.__esModule=!0;var l=Object.assign||function(e){for(var I=1;I<arguments.length;I++){var t=arguments[I];for(var M in t)Object.prototype.hasOwnProperty.call(t,M)&&(e[M]=t[M])}return e},i=t(1),a=M(i),n=t(135),u=M(n),c=t(75),o=M(c);I.default=function(e){return a.default.createElement(u.default,l({},e,o.default))},e.exports=I.default},222:function(e,I){},133:function(e,I,t){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}function l(e,I){if(!(e instanceof I))throw new TypeError("Cannot call a class as a function")}function i(e,I){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!I||"object"!=typeof I&&"function"!=typeof I?e:I}function a(e,I){if("function"!=typeof I&&null!==I)throw new TypeError("Super expression must either be null or a function, not "+typeof I);e.prototype=Object.create(I&&I.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(e,I):e.__proto__=I)}I.__esModule=!0;var n=t(1),u=M(n),c=t(71),o=M(c);t(222);var d=function(e){function I(){var t,M,a;l(this,I);for(var n=arguments.length,u=Array(n),c=0;c<n;c++)u[c]=arguments[c];return t=M=i(this,e.call.apply(e,[this].concat(u))),M.state={hasUserScrolled:!1},M.handleScroll=function(e){var I=window.pageYOffset;I>50?M.setState({hasUserScrolled:!0}):M.setState({hasUserScrolled:!1})},a=t,i(M,a)}return a(I,e),I.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},I.prototype.render=function(){return u.default.createElement("div",{className:this.state.hasUserScrolled?"Header HeaderScrolled":"Header"},u.default.createElement("div",{className:"HeaderGroup"},u.default.createElement(o.default,{to:"/"},u.default.createElement("img",{src:t(80),width:"30"})),u.default.createElement(o.default,{to:"/"},"Skills"),u.default.createElement(o.default,{to:"/"},"Blog"),u.default.createElement(o.default,{to:"/"},"Projects"),u.default.createElement(o.default,{to:"/"},u.default.createElement("button",null,"Buy"))))},I}(n.Component);I.default=d,e.exports=I.default},80:function(e,I){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCAzMCA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwSDE1QzIzLjI4NDMgMCAzMCA2LjcxNTczIDMwIDE1QzMwIDIzLjI4NDMgMjMuMjg0MyAzMCAxNSAzMEgwVjBaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMTVDMjMuMjg0MyAwIDMwIDYuNzE1NzMgMzAgMTVDMzAgMjMuMjg0MyAyMy4yODQzIDMwIDE1IDMwSDBWMFoiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjE0OTkgMEMyMy40MzQyIDAgMzAuMTQ5OSA2LjcxNTczIDMwLjE0OTkgMTVDMzAuMTQ5OSAyMy4yODQzIDIzLjQzNDIgMzAgMTUuMTQ5OSAzMFYwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE1TDE1IDBDMTguNzYwMyAwIDIyLjE5NzQgMS4zODM2NCAyNC44MyAzLjY2OTU2QzI0LjgyOTQgMy42NzUgMTMuNSAxNSAxMy41IDE1QzEzLjUgMTUgMjQuODMgMjYuMzI1IDI0LjgyOTQgMjYuMzMwOUMyMi4xOTY5IDI4LjYxNjUgMTguNzYgMzAgMTUgMzBMMCAxNVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC44MzAzIDMuNjY5OEMyNy45OTc0IDYuNDIgMzAgMTAuNDc2MSAzMCAxNUMzMCAxOS41MjQxIDI3Ljk5NzEgMjMuNTgwNCAyNC44Mjk3IDI2LjMzMDZDMjQuODMwMyAyNi4zMjUgMTMuNSAxNSAxMy41IDE1TDI0LjgzMDMgMy42Njk4WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8L2c+CjxtYXNrIGlkPSJtYXNrMSIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTUiIHk9IjMiIHdpZHRoPSIxNyIgaGVpZ2h0PSIyMyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjYuMzMwMyAzQzI5LjQ5NzQgNS43NTAyIDMxLjUgOS44MDYzMSAzMS41IDE0LjMzMDJDMzEuNSAxOC44NTQzIDI5LjQ5NzEgMjIuOTEwNiAyNi4zMjk3IDI1LjY2MDhDMjYuMzMwMyAyNS42NTUyIDE1IDE0LjMzMDIgMTUgMTQuMzMwMkwyNi4zMzAzIDNaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazEpIj4KPC9nPgo8L2c+CjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMwKSIgZmlsbD0iIzUzMzJGRiIvPgo8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIxNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzMCkiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMzAuNiIgeTI9IjMwLjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzUzMzRGNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QjQyRjYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iMCIgeTE9IjE1IiB4Mj0iLTIiIHkyPSIxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMkMzRDNDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI0NTdGNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSIyNiIgeTE9IjE5IiB4Mj0iNDUuOTg0NyIgeTI9IjEyLjM5ODgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwRkZBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCOERGQjIiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyIiB4MT0iMy41IiB5MT0iMCIgeDI9IjMuNSIgeTI9IjE3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyRDJEMkYiIHN0b3Atb3BhY2l0eT0iMC41OSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},224:function(e,I){},135:function(e,I,t){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}I.__esModule=!0;var l=t(1),i=M(l),a=t(2),n=M(a),u=t(133),c=M(u);t(224);var o=function(e){var I=e.children;e.data;return i.default.createElement("div",null,i.default.createElement(c.default,null),I())};o.propTypes={children:n.default.func},I.default=o,e.exports=I.default}});
//# sourceMappingURL=component---src-layouts-index-js-22c530a5cecdb1c6c681.js.map