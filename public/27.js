<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
webpackJsonp([27],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    /*router navigation is used in the entire app for in app navigation (basically previous and next)
    * the : pageTitle is the title of the page where this navigation component is used
    * the : pageTitleSmall is the minimized title for the small screen view
    * the previous is the this.$routerHistory.previous().path sent from the parent component
    * the forward is the this.$routerHistory.next().path sent from the parent component*/
    props: ['pageTitle', 'pageTitleSmall', 'previous', 'forward']
};

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/index.vue":
=======
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/index.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { AppNavigation: _AppNavigation2.default }
}; //
//
//
//
//
//
//
//

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-066398eb\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "px-md-4 px-2" },
    [
      _c("app-navigation", {
        attrs: {
          pageTitle: "Direct Sales Agents",
          pageTitleSmall: "DSA",
          previous: { path: _vm.$routerHistory.previous().path },
          forward: { path: _vm.$routerHistory.next().path }
        }
      }),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-066398eb", module.exports)
  }
}

/***/ }),

=======
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "h4",
    {
      staticClass: "mx-md-3 mx-0 py-0 my-0 text-center clearfix",
      attrs: { id: "app-navigation" }
    },
    [
      _vm.$routerHistory.hasPrevious()
        ? _c(
            "router-link",
            {
              staticClass:
                "text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",
              attrs: { to: _vm.previous, id: "back" }
            },
            [
              _c("span", { staticClass: "mr-5 float-left" }, [
                _c("i", {
                  staticClass: "far fa-arrow-alt-circle-left float-left"
                }),
                _vm._v(" "),
                _c(
                  "small",
                  { staticClass: "float-left ml-2 d-none d-sm-block" },
                  [_vm._v("Back")]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "strong",
        {
          staticClass: "mx-auto w-100 float-left",
          attrs: { "data-title": "title" }
        },
        [
          _c("span", { staticClass: "d-none d-sm-block" }, [
            _vm._v(_vm._s(_vm.pageTitle))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "d-block d-sm-none" }, [
            _vm._v(_vm._s(_vm.pageTitleSmall))
          ])
        ]
      ),
      _vm._v(" "),
      _vm.$routerHistory.hasForward()
        ? _c(
            "router-link",
            {
              staticClass:
                "text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",
              attrs: { to: _vm.forward, id: "forward" }
            },
            [
              _c("span", { staticClass: "ml-5 float-right" }, [
                _c("i", {
                  staticClass: "far fa-arrow-alt-circle-right float-right"
                }),
                _vm._v(" "),
                _c(
                  "small",
                  { staticClass: "float-right mr-2 d-none d-sm-block" },
                  [_vm._v("Forward")]
                )
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f542aae", module.exports)
  }
}

/***/ }),

<<<<<<< HEAD
=======
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-493d5438\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "px-md-4 px-2" },
    [
      _c("app-navigation", {
        attrs: {
          pageTitle: "Floor Sales and Logistics",
          pageTitleSmall: "FSL",
          previous: { path: _vm.$routerHistory.previous().path },
          forward: { path: _vm.$routerHistory.next().path }
        }
      }),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-493d5438", module.exports)
  }
}

/***/ }),

>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ "./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\AppNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f542aae", Component.options)
  } else {
    hotAPI.reload("data-v-2f542aae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/views/DSA/index.vue":
=======
/***/ "./resources/assets/js/views/FSL/index.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
<<<<<<< HEAD
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-066398eb\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/index.vue")
=======
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-493d5438\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/index.vue")
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
<<<<<<< HEAD
Component.options.__file = "resources\\assets\\js\\views\\DSA\\index.vue"
=======
Component.options.__file = "resources\\assets\\js\\views\\FSL\\index.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-066398eb", Component.options)
  } else {
    hotAPI.reload("data-v-066398eb", Component.options)
=======
    hotAPI.createRecord("data-v-493d5438", Component.options)
  } else {
    hotAPI.reload("data-v-493d5438", Component.options)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

<<<<<<< HEAD
});
=======
webpackJsonp([27],{"1gIg":function(t,a,s){var e=s("VU/8")(s("wBhk"),s("9sZT"),!1,null,null,null);t.exports=e.exports},"2YDE":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,r=s("1gIg"),l=(e=r)&&e.__esModule?e:{default:e};a.default={components:{AppNavigation:l.default}}},"9sZT":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},AYZv:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"px-md-4 px-2"},[a("app-navigation",{attrs:{pageTitle:"Document Verifications Agents",pageTitleSmall:"DVA",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]}},t8Qw:function(t,a,s){var e=s("VU/8")(s("2YDE"),s("AYZv"),!1,null,null,null);t.exports=e.exports},wBhk:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([27],{"1gIg":function(t,a,s){var e=s("VU/8")(s("wBhk"),s("9sZT"),!1,null,null,null);t.exports=e.exports},"9sZT":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},UEJX:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,r=s("1gIg"),l=(e=r)&&e.__esModule?e:{default:e};a.default={components:{AppNavigation:l.default}}},Vq3G:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"px-md-4 px-2"},[a("app-navigation",{attrs:{pageTitle:"Floor Sales and Logistics",pageTitleSmall:"FSL",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]}},vyvX:function(t,a,s){var e=s("VU/8")(s("UEJX"),s("Vq3G"),!1,null,null,null);t.exports=e.exports},wBhk:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
=======
});
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
