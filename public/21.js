webpackJsonp([21],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _auth = __webpack_require__("./resources/assets/js/store/auth.js");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            cards: [{ name: 'DSA', url: 'dsa/home', icon: ['fa-id-card'] }, { name: 'DVA', url: 'dva/home', icon: ['fa-file-signature'] }, { name: 'HRM', url: 'hrm/home', icon: ['fa-user'] }, { name: 'FSL', url: 'fsl/home', icon: ['fa-box'] }, { name: 'LOG', url: 'log/home', icon: ['fa-truck'] }]
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product .card {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.product .card:hover {\n    -webkit-transform: scale(1.02);\n            transform: scale(1.02);\n}\n.product .card i, .product .card svg {\n    font-size: 9rem;\n    opacity: .1;\n    margin: 1rem auto;\n}\n@media (max-width: 990px) {\n.product i, .product svg {\n    font-size: 1.2rem;\n}\n}\n@media (max-width: 600px) {\n.product i, .product svg {\n    font-size: 1rem;\n}\n}\n", ""]);

// exports


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
      _vm._l(_vm.cards, function(dept) {
        return _vm.$store.getters["verify" + dept.name + "Access"]
          ? _c(
              "div",
              {
                staticClass:
                  "col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"
              },
              [
                _c(
                  "router-link",
                  { staticClass: "card", attrs: { to: dept.url } },
                  [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "nav nav-tabs bg-default justify-content-center"
                      },
                      [_c("h6", [_vm._v(_vm._s(dept.name) + " Portal")])]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body float-left w-100" }, [
                      _c(
                        "div",
                        { staticClass: "text-center w-100 float-left" },
                        [
                          _vm._l(dept.icon, function(icon) {
                            return _c("i", { staticClass: "fas", class: icon })
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "pt-md-3 pt-2" }, [
                            _vm._v("For the " + _vm._s(dept.name) + " Agents.")
                          ])
                        ],
                        2
                      )
                    ])
                  ]
                )
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("243eda0b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomePage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomePage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ed756bca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HomePage.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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