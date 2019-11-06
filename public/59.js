webpackJsonp([59],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customHeader.vue":
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

exports.default = {
    props: {
        title: '',
        buttonTitle: null,
        to: null
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/brand/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(to) {
    var urls = { create: "/api/brand/create", edit: "/api/brand/" + to.params.id + "/edit" };
    return urls[to.meta.mode];
} //
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
//
//
//
//
//

exports.default = {

    components: { CustomHeader: _customHeader2.default },

    data: function data() {
        return {
            form: {},
            mode: null,
            error: {},
            show: false,
            store: '/api/brand',
            method: 'POST'
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)(initialize(to)).then(function (_ref) {
            var data = _ref.data;
            return next(function (vm) {
                return vm.prepareForm(data);
            });
        }).catch(function () {
            return next(function () {
                return _flash2.default.setError('Error Preparing form');
            });
        });
    },

    methods: {
        prepareForm: function prepareForm(_ref2) {
            var form = _ref2.form;

            _vue2.default.set(this.$data, 'mode', this.$route.meta.mode);
            _vue2.default.set(this.$data, 'form', form);
            if (this.mode === 'edit') {
                this.store = "/api/brand/" + this.$route.params.id;
                this.method = 'PUT';
            }
            this.show = true;
        },
        onSave: function onSave() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        (0, _api.byMethod)(_this.method, _this.store, _this.form).then(function (_ref3) {
                            var data = _ref3.data;

                            if (data.saved || data.updated) {
                                (0, _log.log)(data.log, data.staff_id);
                                _vue2.default.set(_this.$data, 'form', data.form);
                                _flash2.default.setSuccess(data.message, 5000);
                                if (data['updated']) _this.$router.push('/log/brands');
                            }
                            _this.error = {};
                        }).catch(function (_ref4) {
                            var r = _ref4.response;
                            var data = r.data,
                                status = r.status;

                            if (status === 422) {
                                _this.error = data.errors ? data.errors : data;
                                _this.$networkErr('unique');
                            }
                        }).finally(function () {
                            _this.$scrollToTop();
                            _this.$LIPS(false);
                        });
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-5 attendance-head" }, [
    _c("div", { staticClass: "mb-5 row align-items-center" }, [
      _c("div", { staticClass: "col-12 title-con" }, [
        _c("span", { staticClass: "title" }, [
          _vm._v(_vm._s(_vm._f("capitalize")(_vm.title)))
        ]),
        _vm._v(" "),
        _vm.to
          ? _c(
              "div",
              { staticClass: "row justify-content-end" },
              [
                _c(
                  "router-link",
                  { staticClass: "text-link mt-3", attrs: { to: _vm.to } },
                  [_vm._v(_vm._s(_vm.buttonTitle))]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-02013d35", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3dbe9c5e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/brand/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "pt-md-3 pt-2 attendance-view", attrs: { id: "index" } },
      [
        _c("custom-header", {
          attrs: {
            to: "/log/brands",
            title: _vm.mode + " brand",
            "button-title": "view brands!"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSave($event)
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "my-4 clearfix p-5 row bg-white shadow-sm card-radius"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "form-group col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Brand name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50|alpha_spaces",
                            expression: "'required|max:50|alpha_spaces'"
                          }
                        ],
                        staticClass: "form-control mb-2",
                        attrs: {
                          placeholder: "brand name",
                          name: "brand name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("brand name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("brand name")))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.error.name
                        ? _c("small", [_vm._v(_vm._s(_vm.error.name[0]))])
                        : _vm._e()
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
                _c(
                  "div",
                  { staticClass: "clearfix d-flex justify-content-end w-100" },
                  [
                    _vm.mode === "edit"
                      ? _c(
                          "router-link",
                          {
                            staticClass: "mx-5 text-link mt-4 pt-2",
                            attrs: { to: "/log/brands" }
                          },
                          [
                            _vm._v(
                              "\n                            Cancel\n                        "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-default",
                        attrs: { disabled: _vm.$isProcessing, type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm._f("capitalize")(_vm.mode)) +
                            " Brand "
                        ),
                        _c("i", { staticClass: "far fa-paper-plane ml-1" })
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3dbe9c5e", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/customHeader.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customHeader.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\customHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02013d35", Component.options)
  } else {
    hotAPI.reload("data-v-02013d35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/utilities/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

function log(action, description) {
    /*actions is the action performed
    * description is reference of the data the action was taken on*/
    action = action.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
    });
    //formats and capitalize the action performed
    (0, _api.post)('/api/log', { action: action, description: description });
    //and logs then on the log table;
}

/***/ }),

/***/ "./resources/assets/js/views/LOG/brand/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/brand/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3dbe9c5e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/brand/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\brand\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dbe9c5e", Component.options)
  } else {
    hotAPI.reload("data-v-3dbe9c5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});