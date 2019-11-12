webpackJsonp([18],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/portalCard.vue":
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

exports.default = {
    props: { title: '', desc: '', url: '', url_c: '', aces: { default: true } }
    /*title is the card title also mean the portal title.
    * desc is a few word description of the portal
    * url is the link to the portal
    * url_c is the caption for the link
    * aces is used in situations when a particular portal is accessible to only few person in a
    * department hence from the parent component the aces will be set to false is want
    * only few people to access it. true means everyone in that dept can access it.*/
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _portalCard = __webpack_require__("./resources/assets/js/components/portalCard.vue");

var _portalCard2 = _interopRequireDefault(_portalCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { PortalCard: _portalCard2.default },
    data: function data() {
        return {
            portals: [{
                url: 'customer/create',
                title: 'Customer Registration',
                url_c: 'Register new customer now!',
                desc: 'Registering new customers'
            }, {
                url: 'customer/update',
                title: 'Customer Update',
                url_c: 'Update customers details!',
                desc: 'Updating customers details'
            }, {
                url: 'report',
                title: 'Sales Reporting',
                url_c: 'Get Reports',
                desc: 'Real time DSA reports!',
                aces: this.$store.getters.auth('DSACaptain')
            }, {
                url: '/customer',
                title: 'Customer List',
                url_c: 'View Customer List',
                desc: 'View all registered customers!'
            }]
        };
    }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28781233\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/portalCard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.aces
    ? _c("div", { staticClass: "col-md-4 col-sm-6 float-left product p-4" }, [
        _c("div", { staticClass: "portal-card clearfix" }, [
          _c("div", { staticClass: "first portion clearfix" }, [
            _c("span", { staticClass: "deco" }),
            _c("span", { staticClass: "deco second" }),
            _vm._v(" "),
            _c("span", { staticClass: "portal-title" }, [
              _vm._v(_vm._s(_vm._f("capitalize")(_vm.title)))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "portion clearfix" }, [
            _c("p", [_vm._v(_vm._s(_vm._f("capitalize")(_vm.desc)))]),
            _vm._v(" "),
            _c("h6", { staticStyle: { "margin-top": "2rem" } }, [
              _vm._v(_vm._s(_vm._f("capitalize")(_vm.url_c)))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "deco-down first" }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "deco-down second" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn bg-default btn-round m-0",
                    attrs: { to: _vm.url }
                  },
                  [
                    _vm._v("\n                   continue "),
                    _c("span", { staticClass: "custom-icon ml-2" }, [
                      _c("i", { staticClass: "now-ui-icons ui-1_send" })
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28781233", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c1dfcb6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      _vm._l(_vm.portals, function(portal) {
        return _c(
          "div",
          [
            _c("portal-card", {
              attrs: {
                url: portal.url,
                title: portal.title,
                url_c: portal.url_c,
                desc: portal.desc,
                aces: portal.aces
              }
            })
          ],
          1
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c1dfcb6", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/portalCard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/portalCard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28781233\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/portalCard.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\portalCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28781233", Component.options)
  } else {
    hotAPI.reload("data-v-28781233", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/DSA/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c1dfcb6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/HomePage.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DSA\\HomePage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c1dfcb6", Component.options)
  } else {
    hotAPI.reload("data-v-3c1dfcb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});