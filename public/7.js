<<<<<<< HEAD
webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue":
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
      options: {
         type: Array,
         default: function _default() {
            return [];
         }
      },
      caption: {
         type: [String, Number],
         default: null
      },
      value: {
         type: [String, Number],
         default: null
      }
   },
   data: function data() {
      return {
         open: false,
         selectIndex: 0,
         displayText: '',
         search: ''
      };
   },

   computed: {
      typeaheadState: function typeaheadState() {
         return this.open ? 'typeahead typeahead__open' : 'typeahead';
      },
      filteredOptions: function filteredOptions() {
         var _this = this;

         var exp = new RegExp(this.search, 'i');
         return this.options.filter(function (option) {
            return exp.test(option.id) || exp.test(option[_this.caption]);
         });
      }
   },
   methods: {
      onDownKey: function onDownKey() {
         if (this.filteredOptions.length - 1 > this.selectIndex) {
            this.selectIndex++;
         }
      },
      onUpKey: function onUpKey() {
         if (this.selectIndex > 0) {
            this.selectIndex--;
         }
      },
      onEnterKey: function onEnterKey() {
         var option = this.filteredOptions[this.selectIndex];
         if (option) {
            this.select(option);
         }
      },
      select: function select(option) {
         this.displayText = option[this.caption];
         this.$emit('input', option.id);
         this.$refs.search.blur();
      },
      toggle: function toggle(e) {
         if (e.target === this.$refs.toggle || e.target === this.$refs.search || e.target === this.$refs[this.caption]) {
            if (this.open) {
               if (e.target !== this.$refs.search && e.target !== this.$refs[this.caption]) {
                  this.$refs.search.blur();
               }
            } else {
               this.$refs.search.focus();
            }
         }
      },
      onFocus: function onFocus() {
         this.open = true;
      },
      onBlur: function onBlur() {
         this.search = '';
         this.open = false;
      },
      onEscape: function onEscape() {
         this.$refs.search.blur();
      }
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

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _Typeahead = __webpack_require__("./resources/assets/js/components/Typeahead.vue");

var _Typeahead2 = _interopRequireDefault(_Typeahead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiLink = function apiLink() {
    return "/caution/create";
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
    components: { Typeahead: _Typeahead2.default },
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
            cautions: null
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)("/api" + apiLink(to)).then(function (res) {
            next(function (vm) {
                return vm.prepareForm(res.data);
            });
        }).catch(function (err) {
            next(function (vm) {
                return vm.handleErr(err);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        this.$LIPS(true);
        (0, _api.get)("/api" + apiLink(to)).then(function (res) {
            _this.prepareForm(res.data);
            next();
        }).catch(function (err) {
            _this.handleErr(err);
            next();
        });
    },

    methods: {
        onSave: function onSave() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this2.$network()) {
                        _this2.$LIPS(true);
                        _this2.error = {};
                        (0, _api.post)('/api/caution', { form: _this2.form }).then(function (res) {
                            if (res.data.saved) {
                                (0, _log.log)("CautionSent", "" + _this2.users.find(function (obj) {
                                    return obj.id === _this2.form.user_id;
                                }).staff_id);
                                _this2.prepareForm(res.data);
                                _flash2.default.setSuccess("Caution sent!", 5000);
                            }
                        }).catch(function (e) {
                            e = e.response;
                            if (e.status === 422) {
                                _this2.error = e.data.errors ? e.data.errors : e.data;
                                _this2.$networkErr('unique');
                            }
                        }).finally(function () {
                            _this2.$LIPS(false);
                            _this2.$scrollToTop();
                        });
                    } else _this2.$networkErr();
                } else _this2.$networkErr('form');
            });
        },
        prepareForm: function prepareForm(data) {
            _vue2.default.set(this.$data, 'form', data.form);
            _vue2.default.set(this.$data, 'users', data.users);
            _vue2.default.set(this.$data, 'cautions', data.cautionsList);
            this.issuer = data.users.find(function (obj) {
                return obj.id === data.form.issuer_id;
            });
            this.show = true;
            this.$LIPS(false);
        },
        handleErr: function handleErr(e) {
            _flash2.default.setError('Error Preparing form');
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
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.typeahead {\n  border-radius: 3px;\n  border: 1px solid #E3E3E3;\n  position: relative;\n  z-index: 1;\n}\n.typeahead__open {\n  border: 1px solid #0b78bc;\n}\n.typeahead__open .typeahead__text {\n  opacity: 0.4;\n}\n.typeahead__toggle {\n  position: relative;\n  z-index: 1;\n  line-height: 1rem;\n}\n.typeahead__search {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  width: 100%;\n  display: block;\n  cursor: text;\n  background: transparent;\n  border: none;\n  outline: none;\n  z-index: 4;\n}\n.typeahead__text {\n  min-height: 30px;\n  line-height: 1em;\n  padding: 10px;\n  display: inline-block;\n  position: relative;\n  z-index: 3;\n}\n.typeahead__list {\n  margin: 0;\n  padding: 0;\n  max-height: 240px;\n  overflow-y: scroll;\n  position: absolute;\n  background-color: white;\n  width: calc(100% + 2px);\n  border: 1px solid #0b78bc;\n  border-top: 0;\n  left: -1px;\n  right: 0;\n  border-radius: 0 0 4px 4px;\n}\n.typeahead__item {\n  display: block;\n  border-top: 1px solid #f4f4f4;\n}\n.typeahead__link {\n  display: block;\n  padding: 10px;\n  line-height: 1em;\n  cursor: pointer;\n}\n.typeahead__active {\n  background: #0b78bc;\n  color: #fff !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2823b23b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/caution/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", [
      _c(
        "div",
        {
          staticClass: "pt-md-3 pt-2 attendance attendance-view",
          attrs: { id: "index" }
        },
        [
          _c("div", { staticClass: "mt-5 attendance-head" }, [
            _c("div", { staticClass: "mb-5 row align-items-center" }, [
              _c("div", { staticClass: "col-12 title-con" }, [
                _c("span", { staticClass: "title" }, [_vm._v("Send Caution")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row justify-content-end" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "text-link mt-3", attrs: { to: "." } },
                      [_vm._v("view all cautions!")]
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
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
                    staticClass: "p-5 row bg-white shadow-sm",
                    staticStyle: { "border-radius": ".4rem" }
                  },
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
                          attrs: { options: _vm.users, caption: "full_name" },
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
                            _c(
                              "option",
                              { domProps: { value: _vm.issuer.id } },
                              [_vm._v(_vm._s(_vm.issuer.full_name))]
                            )
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
                                _vm._l(_vm.cautions, function(caution) {
                                  return _c(
                                    "option",
                                    { domProps: { value: caution.reason } },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("capitalize")(caution.reason)
                                        )
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
                    {
                      staticClass: "clearfix d-flex justify-content-end w-100"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn bg-default",
                          attrs: { disabled: _vm.$isProcessing, type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n                                create Attendance "
                          ),
                          _c("i", { staticClass: "far fa-paper-plane ml-1" })
                        ]
                      )
                    ]
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
    require("vue-hot-reload-api")      .rerender("data-v-2823b23b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.typeaheadState }, [
    _c(
      "div",
      {
        ref: "toggle",
        staticClass: "typeahead__toggle",
        on: {
          mousedown: function($event) {
            $event.preventDefault()
            return _vm.toggle($event)
          }
        }
      },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search"
            }
          ],
          ref: "search",
          staticClass: "typeahead__search",
          attrs: { type: "text" },
          domProps: { value: _vm.search },
          on: {
            blur: _vm.onBlur,
            focus: _vm.onFocus,
            keydown: [
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                return _vm.onDownKey($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.onEnterKey($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")
                ) {
                  return null
                }
                return _vm.onEscape($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                return _vm.onUpKey($event)
              }
            ],
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { ref: "text", staticClass: "typeahead__text" }, [
          _vm._v("\n         " + _vm._s(_vm.displayText) + "\n      ")
        ])
      ]
    ),
    _vm._v(" "),
    _vm.open
      ? _c(
          "ul",
          { staticClass: "typeahead__list" },
          _vm._l(_vm.filteredOptions, function(option, index) {
            return _c("li", { key: index, staticClass: "typeahead__item" }, [
              _c(
                "a",
                {
                  staticClass: "typeahead__link",
                  class: [_vm.selectIndex === index ? "typeahead__active" : ""],
                  on: {
                    mousedown: function($event) {
                      $event.preventDefault()
                      _vm.select(option)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(option[_vm.caption]) +
                      "\n         "
                  )
                ]
              )
            ])
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6da2cc40", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3d0b4a2f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Typeahead.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6da2cc40", Component.options)
  } else {
    hotAPI.reload("data-v-6da2cc40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/helpers/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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

/***/ "./resources/assets/js/views/HRM/caution/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/caution/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2823b23b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/caution/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\caution\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2823b23b", Component.options)
  } else {
    hotAPI.reload("data-v-2823b23b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([7],{"+7eQ":function(e,t,a){var r=a("Ptib");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("6e48d7c3",r,!0,{})},"2Q7A":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:t})};var r=a("uD8u")},GqYo:function(e,t,a){var r=a("VU/8")(a("MmHb"),a("QxZX"),!1,function(e){a("+7eQ")},null,null);e.exports=r.exports},La9N:function(e,t,a){var r=a("VU/8")(a("WvS4"),a("gM0m"),!1,null,null,null);e.exports=r.exports},MmHb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{options:{type:Array,default:function(){return[]}},caption:{type:[String,Number],default:null},value:{type:[String,Number],default:null}},data:function(){return{open:!1,selectIndex:0,displayText:"",search:""}},computed:{typeaheadState:function(){return this.open?"typeahead typeahead__open":"typeahead"},filteredOptions:function(){var e=this,t=new RegExp(this.search,"i");return this.options.filter(function(a){return t.test(a.id)||t.test(a[e.caption])})}},methods:{onDownKey:function(){this.filteredOptions.length-1>this.selectIndex&&this.selectIndex++},onUpKey:function(){this.selectIndex>0&&this.selectIndex--},onEnterKey:function(){var e=this.filteredOptions[this.selectIndex];e&&this.select(e)},select:function(e){this.displayText=e[this.caption],this.$emit("input",e.id),this.$refs.search.blur()},toggle:function(e){e.target!==this.$refs.toggle&&e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]||(this.open?e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]&&this.$refs.search.blur():this.$refs.search.focus())},onFocus:function(){this.open=!0},onBlur:function(){this.search="",this.open=!1},onEscape:function(){this.$refs.search.blur()}}}},Ptib:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".typeahead{border-radius:3px;border:1px solid #e3e3e3;position:relative;z-index:1}.typeahead__open{border:1px solid #0b78bc}.typeahead__open .typeahead__text{opacity:.4}.typeahead__toggle{position:relative;z-index:1;line-height:1rem}.typeahead__search{position:absolute;top:0;left:0;padding:10px;width:100%;display:block;cursor:text;background:transparent;border:none;outline:none;z-index:4}.typeahead__text{min-height:30px;line-height:1em;padding:10px;display:inline-block;position:relative;z-index:3}.typeahead__list{margin:0;padding:0;max-height:240px;overflow-y:scroll;position:absolute;background-color:#fff;width:calc(100% + 2px);border:1px solid #0b78bc;border-top:0;left:-1px;right:0;border-radius:0 0 4px 4px}.typeahead__item{display:block;border-top:1px solid #f4f4f4}.typeahead__link{display:block;padding:10px;line-height:1em;cursor:pointer}.typeahead__active{background:#0b78bc;color:#fff!important}",""])},QxZX:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.typeaheadState},[a("div",{ref:"toggle",staticClass:"typeahead__toggle",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"typeahead__search",attrs:{type:"text"},domProps:{value:e.search},on:{blur:e.onBlur,focus:e.onFocus,keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.onDownKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnterKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.onEscape(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.onUpKey(t):null}],input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),a("span",{ref:"text",staticClass:"typeahead__text"},[e._v("\n         "+e._s(e.displayText)+"\n      ")])]),e._v(" "),e.open?a("ul",{staticClass:"typeahead__list"},e._l(e.filteredOptions,function(t,r){return a("li",{key:r,staticClass:"typeahead__item"},[a("a",{staticClass:"typeahead__link",class:[e.selectIndex===r?"typeahead__active":""],on:{mousedown:function(a){a.preventDefault(),e.select(t)}}},[e._v("\n            "+e._s(t[e.caption])+"\n         ")])])})):e._e()])},staticRenderFns:[]}},WvS4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a("I3G/")),o=a("uD8u"),s=a("2Q7A"),n=l(a("TOoT")),i=l(a("GqYo"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Typeahead:i.default},data:function(){return{users:null,columns:{},show:!1,form:{},error:{},issuer:{},autoPenalty:!0,autoReason:!0,cautions:null}},beforeRouteEnter:function(e,t,a){(0,o.get)("/api/caution/create").then(function(e){a(function(t){return t.prepareForm(e.data)})}).catch(function(e){a(function(t){return t.handleErr(e)})})},beforeRouteUpdate:function(e,t,a){var r=this;this.show=!1,this.$LIPS(!0),(0,o.get)("/api/caution/create").then(function(e){r.prepareForm(e.data),a()}).catch(function(e){r.handleErr(e),a()})},methods:{onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),e.error={},(0,o.post)("/api/caution",{form:e.form}).then(function(t){t.data.saved&&((0,s.log)("CautionSent",""+e.users.find(function(t){return t.id===e.form.user_id}).staff_id),e.prepareForm(t.data),n.default.setSuccess("Caution sent!",5e3))}).catch(function(t){422===(t=t.response).status&&(e.error=t.data.errors?t.data.errors:t.data,e.$networkErr("unique"))}).finally(function(){e.$LIPS(!1),e.$scrollToTop()})):e.$networkErr():e.$networkErr("form")})},prepareForm:function(e){r.default.set(this.$data,"form",e.form),r.default.set(this.$data,"users",e.users),r.default.set(this.$data,"cautions",e.cautionsList),this.issuer=e.users.find(function(t){return t.id===e.form.issuer_id}),this.show=!0,this.$LIPS(!1)},handleErr:function(e){n.default.setError("Error Preparing form")}},watch:{form:{handler:function(e){var t=this.cautions.find(function(t){return t.reason===e.reason});r.default.set(this.$data.form,"penalty",t?t.penalty:"")},deep:!0}}}},gM0m:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[e._v("Send Caution")]),e._v(" "),a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:"."}},[e._v("view all cautions!")])],1)])])]),e._v(" "),a("div",{staticClass:"attendance-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[a("div",{staticClass:"p-5 row bg-white shadow-sm",staticStyle:{"border-radius":".4rem"}},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Employee Name")]),e._v(" "),a("typeahead",{attrs:{options:e.users,caption:"full_name"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}})],1),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Issued by")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.issuer_id,expression:"form.issuer_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",disabled:"",name:"issued_by"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"issuer_id",t.target.multiple?a:a[0])}}},[a("option",{domProps:{value:e.issuer.id}},[e._v(e._s(e.issuer.full_name))])])]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("div",{staticClass:"form-check pl-3 ml-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.autoReason,expression:"autoReason"}],staticClass:"form-check-input",attrs:{id:"reason",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.autoReason)?e._i(e.autoReason,"true")>-1:e.autoReason},on:{change:function(t){var a=e.autoReason,r=t.target,o=!!r.checked;if(Array.isArray(a)){var s=e._i(a,"true");r.checked?s<0&&(e.autoReason=a.concat(["true"])):s>-1&&(e.autoReason=a.slice(0,s).concat(a.slice(s+1)))}else e.autoReason=o}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"reason"}},[e._v("Select Reason From List")])]),e._v(" "),e.autoReason?a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.reason,expression:"form.reason"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"reason",disabled:!e.autoReason},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"reason",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("-- select reason --")]),e._v(" "),e._l(e.cautions,function(t){return a("option",{domProps:{value:t.reason}},[e._v(e._s(e._f("capitalize")(t.reason)))])})],2):a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.reason,expression:"form.reason"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:e.autoReason,name:"reason",rows:"2"},domProps:{value:e.form.reason},on:{input:function(t){t.target.composing||e.$set(e.form,"reason",t.target.value)}}}),e._v(" "),e.errors.first("reason")?a("small",[e._v(e._s(e.errors.first("reason")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("div",{staticClass:"form-check pl-3 ml-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.autoPenalty,expression:"autoPenalty"}],staticClass:"form-check-input",attrs:{id:"penalty",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.autoPenalty)?e._i(e.autoPenalty,"true")>-1:e.autoPenalty},on:{change:function(t){var a=e.autoPenalty,r=t.target,o=!!r.checked;if(Array.isArray(a)){var s=e._i(a,"true");r.checked?s<0&&(e.autoPenalty=a.concat(["true"])):s>-1&&(e.autoPenalty=a.slice(0,s).concat(a.slice(s+1)))}else e.autoPenalty=o}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"penalty"}},[e._v("Add Penalty Automatically")])]),e._v(" "),e.autoPenalty?a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.penalty,expression:"form.penalty"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:e.autoPenalty,name:"penalty"},domProps:{value:e.form.penalty},on:{input:function(t){t.target.composing||e.$set(e.form,"penalty",t.target.value)}}}):a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.penalty,expression:"form.penalty"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:e.autoPenalty,rows:"2",name:"penalty"},domProps:{value:e.form.penalty},on:{input:function(t){t.target.composing||e.$set(e.form,"penalty",t.target.value)}}}),e._v(" "),e.errors.first("penalty")?a("small",[e._v(e._s(e.errors.first("penalty")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBefore"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date,expression:"form.date"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date",name:"date",type:"date"},domProps:{value:e.form.date},on:{input:function(t){t.target.composing||e.$set(e.form,"date",t.target.value)}}}),e._v(" "),e.errors.first("date")?a("small",[e._v(e._s(e.errors.first("date")))]):e._e()])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),e._v(" "),a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                create Attendance "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])},staticRenderFns:[]}}});
>>>>>>> a6badb66dd1c3c9d8d4944777dabf072e5614b15
