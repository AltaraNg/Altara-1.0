<<<<<<< HEAD
webpackJsonp([28],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/form.vue":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var init = function init(_ref) {
    var b = _ref.branch;
    return '/api/attendance/create' + (b ? '?branch=' + b : '');
};

exports.default = {
    data: function data() {
        return {
            form: {},
            mode: null,
            show: false,
            today: '',
            newDate: '',
            submittedToday: '',
            columns: ['Employee', 'ID', 'Date', 'Arr. Time', 'Dep. Time', 'Present?', 'Remark'],
            branch: ''
        };
    },
    beforeRouteEnter: function beforeRouteEnter(_ref2, from, next) {
        var q = _ref2.query;

        (0, _api.get)(init(q)).then(function (_ref3) {
            var data = _ref3.data;
            return next(function (vm) {
                return vm.prepareForm(data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(_ref4, from, next) {
        var q = _ref4.query;

        var _this = this;

        this.show = false;
        (0, _api.get)(init(q)).then(function (_ref5) {
            var data = _ref5.data;

            _this.prepareForm(data);
            next();
        });
    },
    created: function created() {
        this.$prepareBranches();
    },


    methods: {
        prepareForm: function prepareForm(data) {
            if (this.$store.getters.auth('peoplesOps') || !this.$route.query['branch']) {
                this.mode = this.$route.meta.mode;
                if (data.form.length) data.form.forEach(function (obj) {
                    return obj['no_signout'] = false;
                });
                _vue2.default.set(this.$data, 'form', data.form);
                _vue2.default.set(this.$data, 'today', data.today);
                _vue2.default.set(this.$data, 'submittedToday', data.submittedToday);
                this.show = !this.submittedToday;
            } else {
                _flash2.default.setError('You cannot create attendance for a branch other than yours', 5000);
                this.$router.push({ path: '../home' });
            }
        },
        onSave: function onSave() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this2.$network()) {
                        _this2.$LIPS(true);
                        _this2.form.forEach(function (obj) {
                            return delete obj.no_signout;
                        });
                        (0, _api.post)('/api/attendance', { form: _this2.form }).then(function (_ref6) {
                            var data = _ref6.data,
                                id = _ref6.employee_id;

                            if (data.saved || data.updated) {
                                (0, _log.log)('Attendance ' + _this2.mode + 'd', '' + id);
                                _flash2.default.setSuccess('Attendance Submitted successfully!', 3000);
                                _this2.$router.push('/');
                            }
                        }).catch(function (e) {
                            e = e.response;
                            if (e.status === 422) _flash2.default.setError(e.data.message ? e.data.message : e.data);
                        }).finally(function () {
                            _this2.$LIPS(false);
                            _this2.$scrollToTop();
                        });
                    } else _this2.$networkErr();
                } else _this2.$networkErr('form');
            });
        },
        clearTime: function clearTime(index) {
            var _ref7 = ['', ''];
            this.form[index].arrival_time = _ref7[0];
            this.form[index].departure_time = _ref7[1];
        },
        no_signout: function no_signout(index, e) {
            _vue2.default.set(this.$data.form[index], 'departure_time', '');
            _vue2.default.set(this.$data.form[index], 'remark', e ? '' : 'Did not sign out.');
        },
        fetchAttendanceByDate: function fetchAttendanceByDate() {
            var _this3 = this;

            if (this.newDate) {
                var newDate = new Date(this.newDate);
                var today = new Date();
                if (newDate < today) {
                    newDate = newDate.toDateString().split(' ');
                    newDate.shift();
                    this.form.forEach(function (obj) {
                        return obj.date = _this3.newDate;
                    });
                    this.submittedToday = false;
                    this.show = true;
                    this.today = [].concat(_toConsumableArray(newDate)).join(' ');
                } else _flash2.default.setError('Sorry you cannot create attendance for a feature date!', 2000);
            } else _flash2.default.setError('Select date to continue!', 2000);
            this.$scrollToTop();
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6defbd3d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 attendance attendance-create",
        attrs: { id: "index" }
      },
      [
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "mb-5 row" }, [
            _c("div", { staticClass: "col-12 title-con" }, [
              _c("span", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(_vm._f("capitalize")("attendance for " + _vm.today))
                )
              ]),
              _vm._v(" "),
              _vm.$store.getters.auth("peoplesOps")
                ? _c(
                    "div",
                    {
                      staticClass: "row justify-content-end align-items-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "text-link pr-4 text-capitalize",
                          attrs: { href: "javascript:" },
                          on: {
                            click: function($event) {
                              _vm.$router.push(
                                "" + (_vm.branch ? "?branch=" + _vm.branch : "")
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            get attendance list for :\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.branch,
                              expression: "branch"
                            }
                          ],
                          staticClass: "custom-select",
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
                              _vm.branch = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { disabled: "", selected: "", value: "" }
                            },
                            [_vm._v("branch")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.$store.getters.getBranches, function(
                            branch
                          ) {
                            return _c(
                              "option",
                              { domProps: { value: branch.id } },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm._f("capitalize")(branch.name)) +
                                    "\n                            "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]
                  )
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "row px-5 pt-3 pb-4" }, [
            _c("div", { staticClass: "col-10 col-xs-3 col-md-3 col-lg-3" }, [
              _c("div", { staticClass: "row align-items-center" }, [
                _c("div", { staticClass: "mx-5 col-1 p-0 sm-hide" }),
                _vm._v(" "),
                _c("div", { staticClass: "col pl-4 ml-1 ml-xs-0 pl-xs-3" }, [
                  _c("span", { staticClass: "user-name light-heading" }, [
                    _vm._v(_vm._s(_vm.columns[0]))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 light-heading" }, [
              _vm._v(_vm._s(_vm.columns[1]))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-xs-3 col-md-3 col-lg-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col light-heading pr-1 pr-lg-4" }, [
                  _vm._v(_vm._s(_vm.columns[3]))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col light-heading pl-1 pl-lg-4" }, [
                  _vm._v(_vm._s(_vm.columns[4]))
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-6 col-xs-2 col-md-2 col-lg-2 px-0 px-lg-4 light-heading"
              },
              [_vm._v(_vm._s(_vm.columns[5]))]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6 col-xs-2 col-md-2 col-lg-2 light-heading" },
              [_vm._v(_vm._s(_vm.columns[6]))]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-1 attendance-body" }, [
          _vm.show
            ? _c(
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
                  _vm._l(_vm.form, function(user, index) {
                    return _c(
                      "div",
                      {
                        staticClass:
                          "mb-3 px-4 row align-items-center attendance-item"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-xs-3 col-md-3 col-lg-3 pt-2 pb-3 p-xs-0"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "row align-items-center" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "ml-5 mr-3 sm-hide" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "user mx-auto" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "user-icon fas fa-user-alt"
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _c("span", { staticClass: "user-name" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          user.user.full_name
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "sm-show staff_id-sm" },
                                    [
                                      _vm._v(
                                        "\n                                    - " +
                                          _vm._s(user.user.staff_id) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(user.user.staff_id) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-xs-3 col-md-3 col-lg-3" },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col pr-3 pr-sm-1 pr-lg-4" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form[index].arrival_time,
                                        expression: "form[index].arrival_time"
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
                                      disabled:
                                        _vm.form[index].is_present === "0",
                                      name: "arrival_time_" + index,
                                      type: "time"
                                    },
                                    domProps: {
                                      value: _vm.form[index].arrival_time
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form[index],
                                          "arrival_time",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col pl-3 pl-sm-1 pl-lg-4" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form[index].departure_time,
                                        expression: "form[index].departure_time"
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
                                      disabled:
                                        _vm.form[index].is_present === "0" ||
                                        _vm.form[index].no_signout,
                                      name: "departure_time_" + index,
                                      type: "time"
                                    },
                                    domProps: {
                                      value: _vm.form[index].departure_time
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form[index],
                                          "departure_time",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mr-5" }, [
                                _c("div", { staticClass: "form-check" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form[index].no_signout,
                                        expression: "form[index].no_signout"
                                      }
                                    ],
                                    staticClass: "form-check-input mt-3 ml-2",
                                    attrs: {
                                      disabled:
                                        _vm.form[index].is_present === "0",
                                      id: "exampleCheck1",
                                      type: "checkbox",
                                      value: "true"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.form[index].no_signout
                                      )
                                        ? _vm._i(
                                            _vm.form[index].no_signout,
                                            "true"
                                          ) > -1
                                        : _vm.form[index].no_signout
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.no_signout(
                                          index,
                                          _vm.form[index].no_signout
                                        )
                                      },
                                      change: function($event) {
                                        var $$a = _vm.form[index].no_signout,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = "true",
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.form[index],
                                                "no_signout",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.form[index],
                                                "no_signout",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.form[index],
                                            "no_signout",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", {
                                    staticClass: "form-check-label",
                                    attrs: { for: "exampleCheck1" }
                                  })
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "clearfix",
                                class:
                                  _vm.form[index].is_present === "0"
                                    ? "absent"
                                    : "present"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "radio w-50 pr-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form[index].is_present,
                                          expression: "form[index].is_present"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        id: "yes_" + index,
                                        name: "status_" + index,
                                        type: "radio",
                                        value: "1"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.form[index].is_present,
                                          "1"
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.form[index],
                                            "is_present",
                                            "1"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "yes_" + index } },
                                      [_vm._v("yes")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "radio w-50 pl-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form[index].is_present,
                                          expression: "form[index].is_present"
                                        }
                                      ],
                                      attrs: {
                                        id: "no_" + index,
                                        name: "status_" + index,
                                        type: "radio",
                                        value: "0"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.form[index].is_present,
                                          "0"
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.clearTime(index)
                                        },
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.form[index],
                                            "is_present",
                                            "0"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "no_" + index } },
                                      [_vm._v("no")]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-6 col-xs-2 col-md-2 col-lg-2 pl-3 py-4 py-sm-0"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form[index].remark,
                                  expression: "form[index].remark"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    required: _vm.form[index].is_present == 0
                                  },
                                  expression:
                                    "{ required: form[index].is_present == 0 }"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                disabled: _vm.form[index].no_signout,
                                name: "remark_" + index,
                                type: "text"
                              },
                              domProps: { value: _vm.form[index].remark },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form[index],
                                    "remark",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-5 px-0 row align-items-center" },
                    [
                      _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "clearfix d-flex justify-content-end w-100"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn bg-default",
                              attrs: {
                                disabled: _vm.$isProcessing,
                                type: "submit"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm._f("capitalize")(_vm.mode)) +
                                  " Attendance "
                              ),
                              _c("i", {
                                staticClass: "far fa-paper-plane ml-1"
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ],
                2
              )
            : _c("div", { staticClass: "row attendance-item p-5 mb-5" }, [
                _c("span", { staticClass: "no-attendance" }, [
                  _vm._v("You have already submitted attendance for today!")
                ])
              ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
          _vm._v(" "),
          _c("div", { staticClass: "pt-3 pb-4 align-items-center" }, [
            _c("div", { staticClass: "light-heading d-flex" }, [
              _c("div", { staticClass: "float-left align-self-center" }, [
                _vm._v(
                  "\n                        To fill attendance for a past date kindly select the date and click get attendance list.\n                        "
                ),
                _c("span", { staticClass: "mx-5" }, [
                  _vm._v(
                    "\n                            ||\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-left align-self-center",
                  on: {
                    click: function($event) {
                      _vm.fetchAttendanceByDate()
                    }
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "text-link text-capitalize",
                      attrs: { href: "javascript:" }
                    },
                    [
                      _vm._v(
                        "get attendance list for\n                            "
                      ),
                      _c("strong", [_vm._v("Date")]),
                      _vm._v(" : ")
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "float-left align-self-center ml-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newDate,
                      expression: "newDate"
                    }
                  ],
                  staticClass: "form-control float-left",
                  attrs: { type: "date" },
                  domProps: { value: _vm.newDate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newDate = $event.target.value
                    }
                  }
                })
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6defbd3d", module.exports)
  }
}

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

/***/ "./resources/assets/js/views/FSL/attendance/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6defbd3d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\attendance\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6defbd3d", Component.options)
  } else {
    hotAPI.reload("data-v-6defbd3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([28],{ic49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,s.post)("/api/log",{action:t,description:e})};var s=a("p/p5")},v7K3:function(t,e,a){var s=a("VU/8")(a("xgek"),a("zZRK"),!1,null,null,null);t.exports=s.exports},xgek:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(a("I3G/")),r=a("ic49"),i=o(a("K23+")),n=a("p/p5");function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t){var e=t.branch;return"/api/attendance/create"+(e?"?branch="+e:"")};e.default={data:function(){return{form:{},mode:null,show:!1,today:"",newDate:"",submittedToday:"",columns:["Employee","ID","Date","Arr. Time","Dep. Time","Present?","Remark"],branch:""}},beforeRouteEnter:function(t,e,a){var s=t.query;(0,n.get)(l(s)).then(function(t){var e=t.data;return a(function(t){return t.prepareForm(e)})})},beforeRouteUpdate:function(t,e,a){var s=t.query,r=this;this.show=!1,(0,n.get)(l(s)).then(function(t){var e=t.data;r.prepareForm(e),a()})},created:function(){this.$prepareBranches()},methods:{prepareForm:function(t){this.$store.getters.auth("peoplesOps")||!this.$route.query.branch?(this.mode=this.$route.meta.mode,t.form.length&&t.form.forEach(function(t){return t.no_signout=!1}),s.default.set(this.$data,"form",t.form),s.default.set(this.$data,"today",t.today),s.default.set(this.$data,"submittedToday",t.submittedToday),this.show=!this.submittedToday):(i.default.setError("You cannot create attendance for a branch other than yours",5e3),this.$router.push({path:"../home"}))},onSave:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),t.form.forEach(function(t){return delete t.no_signout}),(0,n.post)("/api/attendance",{form:t.form}).then(function(e){var a=e.data,s=e.employee_id;(a.saved||a.updated)&&((0,r.log)("Attendance "+t.mode+"d",""+s),i.default.setSuccess("Attendance Submitted successfully!",3e3),t.$router.push("/"))}).catch(function(t){422===(t=t.response).status&&i.default.setError(t.data.message?t.data.message:t.data)}).finally(function(){t.$LIPS(!1),t.$scrollToTop()})):t.$networkErr():t.$networkErr("form")})},clearTime:function(t){var e=["",""];this.form[t].arrival_time=e[0],this.form[t].departure_time=e[1]},no_signout:function(t,e){s.default.set(this.$data.form[t],"departure_time",""),s.default.set(this.$data.form[t],"remark",e?"":"Did not sign out.")},fetchAttendanceByDate:function(){var t=this;if(this.newDate){var e=new Date(this.newDate);e<new Date?((e=e.toDateString().split(" ")).shift(),this.form.forEach(function(e){return e.date=t.newDate}),this.submittedToday=!1,this.show=!0,this.today=[].concat(function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}(e)).join(" ")):i.default.setError("Sorry you cannot create attendance for a feature date!",2e3)}else i.default.setError("Select date to continue!",2e3);this.$scrollToTop()}}}},zZRK:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-create",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")("attendance for "+t.today)))]),t._v(" "),t.$store.getters.auth("peoplesOps")?a("div",{staticClass:"row justify-content-end align-items-center"},[a("a",{staticClass:"text-link pr-4 text-capitalize",attrs:{href:"javascript:"},on:{click:function(e){t.$router.push(t.branch?"?branch="+t.branch:"")}}},[t._v("\n                            get attendance list for :\n                        ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.branch,expression:"branch"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.branch=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("branch")]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                "+t._s(t._f("capitalize")(e.name))+"\n                            ")])})],2)]):t._e()])])]),t._v(" "),a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"row px-5 pt-3 pb-4"},[a("div",{staticClass:"col-10 col-xs-3 col-md-3 col-lg-3"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"mx-5 col-1 p-0 sm-hide"}),t._v(" "),a("div",{staticClass:"col pl-4 ml-1 ml-xs-0 pl-xs-3"},[a("span",{staticClass:"user-name light-heading"},[t._v(t._s(t.columns[0]))])])])]),t._v(" "),a("div",{staticClass:"col-2 light-heading"},[t._v(t._s(t.columns[1]))]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col light-heading pr-1 pr-lg-4"},[t._v(t._s(t.columns[3]))]),t._v(" "),a("div",{staticClass:"col light-heading pl-1 pl-lg-4"},[t._v(t._s(t.columns[4]))])])]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 px-0 px-lg-4 light-heading"},[t._v(t._s(t.columns[5]))]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 light-heading"},[t._v(t._s(t.columns[6]))])])]),t._v(" "),a("div",{staticClass:"mt-1 attendance-body"},[t.show?a("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[t._l(t.form,function(e,s){return a("div",{staticClass:"mb-3 px-4 row align-items-center attendance-item"},[a("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3 pt-2 pb-3 p-xs-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"ml-5 mr-3 sm-hide"},[a("span",{staticClass:"user mx-auto"},[a("i",{staticClass:"user-icon fas fa-user-alt"})])]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"user-name"},[t._v(t._s(t._f("capitalize")(e.user.full_name)))]),t._v(" "),a("span",{staticClass:"sm-show staff_id-sm"},[t._v("\n                                    - "+t._s(e.user.staff_id)+"\n                                ")])])])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"},[t._v("\n                        "+t._s(e.user.staff_id)+"\n                    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col pr-3 pr-sm-1 pr-lg-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].arrival_time,expression:"form[index].arrival_time"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"0"===t.form[s].is_present,name:"arrival_time_"+s,type:"time"},domProps:{value:t.form[s].arrival_time},on:{input:function(e){e.target.composing||t.$set(t.form[s],"arrival_time",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col pl-3 pl-sm-1 pl-lg-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].departure_time,expression:"form[index].departure_time"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"0"===t.form[s].is_present||t.form[s].no_signout,name:"departure_time_"+s,type:"time"},domProps:{value:t.form[s].departure_time},on:{input:function(e){e.target.composing||t.$set(t.form[s],"departure_time",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"mr-5"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].no_signout,expression:"form[index].no_signout"}],staticClass:"form-check-input mt-3 ml-2",attrs:{disabled:"0"===t.form[s].is_present,id:"exampleCheck1",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.form[s].no_signout)?t._i(t.form[s].no_signout,"true")>-1:t.form[s].no_signout},on:{click:function(e){t.no_signout(s,t.form[s].no_signout)},change:function(e){var a=t.form[s].no_signout,r=e.target,i=!!r.checked;if(Array.isArray(a)){var n=t._i(a,"true");r.checked?n<0&&t.$set(t.form[s],"no_signout",a.concat(["true"])):n>-1&&t.$set(t.form[s],"no_signout",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.form[s],"no_signout",i)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}})])])])]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4"},[a("div",{staticClass:"clearfix",class:"0"===t.form[s].is_present?"absent":"present"},[a("div",{staticClass:"radio w-50 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].is_present,expression:"form[index].is_present"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"yes_"+s,name:"status_"+s,type:"radio",value:"1"},domProps:{checked:t._q(t.form[s].is_present,"1")},on:{change:function(e){t.$set(t.form[s],"is_present","1")}}}),t._v(" "),a("label",{attrs:{for:"yes_"+s}},[t._v("yes")])]),t._v(" "),a("div",{staticClass:"radio w-50 pl-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].is_present,expression:"form[index].is_present"}],attrs:{id:"no_"+s,name:"status_"+s,type:"radio",value:"0"},domProps:{checked:t._q(t.form[s].is_present,"0")},on:{click:function(e){t.clearTime(s)},change:function(e){t.$set(t.form[s],"is_present","0")}}}),t._v(" "),a("label",{attrs:{for:"no_"+s}},[t._v("no")])])])]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pl-3 py-4 py-sm-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].remark,expression:"form[index].remark"},{name:"validate",rawName:"v-validate",value:{required:0==t.form[s].is_present},expression:"{ required: form[index].is_present == 0 }"}],staticClass:"form-control",attrs:{disabled:t.form[s].no_signout,name:"remark_"+s,type:"text"},domProps:{value:t.form[s].remark},on:{input:function(e){e.target.composing||t.$set(t.form[s],"remark",e.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            "+t._s(t._f("capitalize")(t.mode))+" Attendance "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])],2):a("div",{staticClass:"row attendance-item p-5 mb-5"},[a("span",{staticClass:"no-attendance"},[t._v("You have already submitted attendance for today!")])])]),t._v(" "),a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"pt-3 pb-4 align-items-center"},[a("div",{staticClass:"light-heading d-flex"},[a("div",{staticClass:"float-left align-self-center"},[t._v("\n                        To fill attendance for a past date kindly select the date and click get attendance list.\n                        "),a("span",{staticClass:"mx-5"},[t._v("\n                            ||\n                        ")])]),t._v(" "),a("div",{staticClass:"float-left align-self-center",on:{click:function(e){t.fetchAttendanceByDate()}}},[a("a",{staticClass:"text-link text-capitalize",attrs:{href:"javascript:"}},[t._v("get attendance list for\n                            "),a("strong",[t._v("Date")]),t._v(" : ")])]),t._v(" "),a("div",{staticClass:"float-left align-self-center ml-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],staticClass:"form-control float-left",attrs:{type:"date"},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})])])])])])])},staticRenderFns:[]}}});
>>>>>>> 717b73666b06ef9a4098637f6e3966e98184a99e
