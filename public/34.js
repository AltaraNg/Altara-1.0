webpackJsonp([34],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _auth = __webpack_require__("./resources/assets/js/utilities/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
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
    data: function data() {
        return {
            form: { staff_id: '', password: '' },
            cardMT: '',
            error: {}
        };
    },

    methods: {
        login: function login() {
            var _this = this;

            this.$validator.validateAll().then(function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(result) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!result) {
                                        _context.next = 10;
                                        break;
                                    }

                                    if (!_this.$network()) {
                                        _context.next = 9;
                                        break;
                                    }

                                    _this.$LIPS(true);
                                    _this.error = {};
                                    _context.next = 6;
                                    return (0, _api.post)('/api/login', _this.form).then(function (_ref2) {
                                        var data = _ref2.data;

                                        if (data.auth) {
                                            _auth2.default.set(data);
                                            _this.$store.dispatch('mutateAuth');
                                            _this.$router.push('/home');
                                            _flash2.default.setSuccess(data.message);
                                        }
                                    }).catch(function (_ref3) {
                                        var data = _ref3.response.data;

                                        _this.error = data.errors ? data.errors : data;
                                        _flash2.default.setError(data.message);
                                    });

                                case 6:
                                    _this.$LIPS(false);
                                    _context.next = 10;
                                    break;

                                case 9:
                                    _this.$networkErr();

                                case 10:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this);
                }));

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
    },
    beforeCreate: function beforeCreate() {
        !!localStorage.getItem('api_token') && this.$router.push('/home');
    },
    mounted: function mounted() {
        this.cardMT = (window.innerHeight - $('#loginCard').height()) / 2;
        this.$LIPS(false);
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5197e515\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { attrs: { id: "login" } }, [
      _c(
        "div",
        {
          staticClass: "col-md-5 mx-auto",
          style: { marginTop: _vm.cardMT + "px" },
          attrs: { id: "loginCard" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "ul",
              { staticClass: "nav nav-tabs justify-content-center bg-default" },
              [_c("h6", [_vm._v("Staff Login")])]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "pt-1 pb-3",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "card-body clearfix px-5" }, [
                  _c("div", { staticClass: "col-sm-12 px-0 px-md-3" }, [
                    _c("label", { staticClass: "category" }, [
                      _vm._v("* Staff ID")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.staff_id,
                            expression: "form.staff_id"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "Staff ID", placeholder: "Staff ID" },
                        domProps: { value: _vm.form.staff_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "staff_id", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "input-group-addon" }, [
                        _c("i", { staticClass: "ml-2 fa fa-user-circle" })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.errors.first("Staff ID")
                      ? _c("small", { staticClass: "error-control" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("Staff ID")) +
                              "\n                            "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.error.staff_id
                      ? _c("small", { staticClass: "error-control" }, [
                          _vm._v(_vm._s(_vm.error.staff_id[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12 px-0 px-md-3" }, [
                    _c("label", { staticClass: "category" }, [
                      _vm._v("* Password")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:6|max:25",
                            expression: "'required|min:6|max:25'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "password",
                          placeholder: "Password",
                          type: "password"
                        },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "input-group-addon" }, [
                        _c("i", { staticClass: "ml-2 fas fa-key" })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.errors.first("password")
                      ? _c("small", { staticClass: "error-control" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors.first("password")) +
                              "\n                            "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 mb-4 px-0 px-md-3 pt-3" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-block bg-default",
                          attrs: { disabled: _vm.$isProcessing, type: "submit" }
                        },
                        [
                          _vm._v("\n                                Login!   "),
                          _c("i", { staticClass: "far fa-paper-plane" })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "text-center float-left w-100 pb-4" },
                    [
                      _vm._v("Forgot Password? "),
                      _c(
                        "router-link",
                        {
                          staticClass: "text-info",
                          attrs: { to: "/forgotPassword" }
                        },
                        [_vm._v("Click here")]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5197e515", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/auth/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5197e515\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/auth/Login.vue")
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
Component.options.__file = "resources/assets/js/views/auth/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5197e515", Component.options)
  } else {
    hotAPI.reload("data-v-5197e515", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});