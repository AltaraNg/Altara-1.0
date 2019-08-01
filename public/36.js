<<<<<<< HEAD
webpackJsonp([36],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _auth = __webpack_require__("./resources/assets/js/utilities/auth.js");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            cards: [{ name: 'DSA', url: 'dsa/home', icon: 'fa-id-card' }, { name: 'DVA', url: 'dva/home', icon: 'fa-file-signature' }, { name: 'HRM', url: 'hrm/home', icon: 'fa-user' }, { name: 'FSL', url: 'fsl/home', icon: 'fa-box' }, { name: 'LOG', url: 'log/home', icon: 'fa-truck' }, { name: 'CAG', url: 'CAG/home', icon: 'fa-id-card' }]
        };
    },
    beforeCreate: function beforeCreate() {
        _auth2.default.initialize();
        if (!this.$store.state.api_token && !this.$store.state.authRole) this.$store.dispatch('mutateAuth');
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ed756bca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-md-12 px-md-3 p-0" },
    [
      _vm._l(_vm.cards, function(ref) {
        var name = ref.name
        var url = ref.url
        var icon = ref.icon
        return _vm.$store.getters.auth(name + "Access")
          ? _c(
              "div",
              {
                staticClass:
                  "col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"
              },
              [
                _c("router-link", { staticClass: "card", attrs: { to: url } }, [
                  _c(
                    "ul",
                    {
                      staticClass:
                        "nav nav-tabs bg-default justify-content-center"
                    },
                    [_c("h6", [_vm._v(_vm._s(name) + " Portal")])]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body float-left w-100" }, [
                    _c("div", { staticClass: "text-center w-100 float-left" }, [
                      _c("i", { staticClass: "fas", class: icon }),
                      _vm._v(" "),
                      _c("p", { staticClass: "pt-md-3 pt-2" }, [
                        _vm._v("For the " + _vm._s(name) + " Agents.")
                      ])
                    ])
                  ])
                ])
              ],
              1
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm._m(0)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"
      },
      [
        _c(
          "a",
          {
            staticClass: "card",
            attrs: {
              href: "http://catalog.altaracredit.com/",
              target: "_blank"
            }
          },
          [
            _c(
              "ul",
              { staticClass: "nav nav-tabs bg-default justify-content-center" },
              [_c("h6", [_vm._v("Altara Catalogue")])]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body float-left w-100" }, [
              _c("div", { staticClass: "text-center w-100 float-left" }, [
                _c("i", { staticClass: "far fa-images" }),
                _vm._v(" "),
                _c("p", { staticClass: "pt-md-3 pt-2" }, [
                  _vm._v("Official Altara Online Catalogue")
                ])
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ed756bca", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ed756bca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HomePage.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HomePage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed756bca", Component.options)
  } else {
    hotAPI.reload("data-v-ed756bca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([36],{"8F8M":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},p02g:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"inventory"}},[e("h2",[this._v("Inventory")])])])},staticRenderFns:[]}},xvAP:function(t,e,n){var r=n("VU/8")(n("8F8M"),n("p02g"),!1,null,null,null);t.exports=r.exports}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
