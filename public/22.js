webpackJsonp([22],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/caution/form.vue":
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

var _Typeahead = __webpack_require__("./resources/assets/js/components/Typeahead.vue");

var _Typeahead2 = _interopRequireDefault(_Typeahead);

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { Typeahead: _Typeahead2.default, CustomHeader: _customHeader2.default },
    data: function data() {
        return {
            users: null,
            columns: {},
            show: false,
            form: {},
            error: {},
            issuer: {},
            autoPenalty: true,
            autoReason: true,
            cautions: null,
            value: null
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)("/api/caution/create").then(function (_ref) {
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
        onSave: function onSave() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        _this.error = {};
                        (0, _api.post)('/api/caution', { form: _this.form }).then(function (_ref2) {
                            var data = _ref2.data;

                            if (data.saved) {
                                (0, _log.log)("CautionSent", "" + _this.users.find(function (_ref3) {
                                    var id = _ref3.id;
                                    return id === _this.form.user_id;
                                }).staff_id);
                                _this.prepareForm(data);
                                _flash2.default.setSuccess("Caution sent!", 5000);
                            }
                        }).catch(function (e) {
                            e = e.response;
                            if (e.status === 422) {
                                _this.error = e.data.errors ? e.data.errors : e.data;
                                _this.$networkErr('unique');
                            }
                        }).finally(function () {
                            _this.$LIPS(false);
                            _this.$scrollToTop();
                        });
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        },
        prepareForm: function prepareForm(_ref4) {
            var form = _ref4.form,
                users = _ref4.users,
                cautions = _ref4.cautionsList;

            _vue2.default.set(this.$data, 'form', form);
            _vue2.default.set(this.$data, 'users', users);
            _vue2.default.set(this.$data, 'cautions', cautions);
            this.issuer = users.find(function (_ref5) {
                var id = _ref5.id;
                return id === form.issuer_id;
            });
            this.show = true;
            this.$LIPS(false);
            this.value = null;
            _eventBus.EventBus.$emit('clearTypeAhead');
        }
    },
    watch: {
        form: {
            handler: function handler(val) {
                var caution = this.cautions.find(function (obj) {
                    return obj.reason === val.reason;
                });
                _vue2.default.set(this.$data.form, 'penalty', caution ? caution.penalty : '');
            },
            deep: true
        }
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d42b6a7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/caution/form.vue":
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
            to: ".",
            title: "Send Caution",
            "button-title": "view cautions!"
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
                { staticClass: "p-5 row bg-white shadow-sm card-radius" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Employee Name")]),
                      _vm._v(" "),
                      _c("typeahead", {
                        attrs: {
                          options: _vm.users,
                          value: _vm.value,
                          caption: "full_name"
                        },
                        model: {
                          value: _vm.form.user_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "user_id", $$v)
                          },
                          expression: "form.user_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Issued by")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.issuer_id,
                              expression: "form.issuer_id"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "custom-select w-100",
                          attrs: {
                            "data-vv-validate-on": "blur",
                            disabled: "",
                            name: "issued_by"
                          },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "issuer_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { domProps: { value: _vm.issuer.id } }, [
                            _vm._v(_vm._s(_vm.issuer.full_name))
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceAfter" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("div", { staticClass: "form-check pl-3 ml-1" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.autoReason,
                              expression: "autoReason"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            id: "reason",
                            type: "checkbox",
                            value: "true"
                          },
                          domProps: {
                            checked: Array.isArray(_vm.autoReason)
                              ? _vm._i(_vm.autoReason, "true") > -1
                              : _vm.autoReason
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.autoReason,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "true",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.autoReason = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.autoReason = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.autoReason = $$c
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label",
                            attrs: { for: "reason" }
                          },
                          [_vm._v("Select Reason From List")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.autoReason
                        ? _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.reason,
                                  expression: "form.reason"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "custom-select w-100",
                              attrs: {
                                "data-vv-validate-on": "blur",
                                name: "reason",
                                disabled: !_vm.autoReason
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "reason",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: {
                                    disabled: "",
                                    selected: "",
                                    value: ""
                                  }
                                },
                                [_vm._v("-- select reason --")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.cautions, function(ref) {
                                var reason = ref.reason
                                return _c(
                                  "option",
                                  { domProps: { value: reason } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm._f("capitalize")(reason)) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        : _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.reason,
                                expression: "form.reason"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              disabled: _vm.autoReason,
                              name: "reason",
                              rows: "2"
                            },
                            domProps: { value: _vm.form.reason },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "reason",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                      _vm._v(" "),
                      _vm.errors.first("reason")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("reason")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("div", { staticClass: "form-check pl-3 ml-1" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.autoPenalty,
                              expression: "autoPenalty"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            id: "penalty",
                            type: "checkbox",
                            value: "true"
                          },
                          domProps: {
                            checked: Array.isArray(_vm.autoPenalty)
                              ? _vm._i(_vm.autoPenalty, "true") > -1
                              : _vm.autoPenalty
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.autoPenalty,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "true",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.autoPenalty = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.autoPenalty = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.autoPenalty = $$c
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label",
                            attrs: { for: "penalty" }
                          },
                          [_vm._v("Add Penalty Automatically")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.autoPenalty
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.penalty,
                                expression: "form.penalty"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              disabled: _vm.autoPenalty,
                              name: "penalty"
                            },
                            domProps: { value: _vm.form.penalty },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "penalty",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        : _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.penalty,
                                expression: "form.penalty"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              disabled: _vm.autoPenalty,
                              rows: "2",
                              name: "penalty"
                            },
                            domProps: { value: _vm.form.penalty },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "penalty",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                      _vm._v(" "),
                      _vm.errors.first("penalty")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("penalty")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBefore" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.date,
                            expression: "form.date"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "date",
                          name: "date",
                          type: "date"
                        },
                        domProps: { value: _vm.form.date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "date", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("date")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("date")))
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
                _c("div", { staticClass: "w-100 mb-4 mt-5 mx-0 hr" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "clearfix d-flex justify-content-end w-100" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-default",
                        attrs: { disabled: _vm.$isProcessing, type: "submit" }
                      },
                      [
                        _vm._v("\n                            Submit Caution "),
                        _c("i", { staticClass: "far fa-paper-plane ml-1" })
                      ]
                    )
                  ]
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
    require("vue-hot-reload-api")      .rerender("data-v-0d42b6a7", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9213a016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-9213a016", module.exports)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9213a016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue")
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
Component.options.__file = "resources/assets/js/components/customHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9213a016", Component.options)
  } else {
    hotAPI.reload("data-v-9213a016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/HRM/caution/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/caution/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d42b6a7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/caution/form.vue")
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
Component.options.__file = "resources/assets/js/views/HRM/caution/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d42b6a7", Component.options)
  } else {
    hotAPI.reload("data-v-0d42b6a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});