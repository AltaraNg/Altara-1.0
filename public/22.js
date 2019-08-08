<<<<<<< HEAD
<<<<<<< HEAD
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/report.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: { CustomHeader: _customHeader2.default },

    beforeCreate: function beforeCreate() {
        var _this = this;

        !this.$store.getters.auth('DSACaptain') && this.$networkErr('page');
        (0, _api.get)('/api/user/' + this.$store.state.user_id).then(function (_ref) {
            var data = _ref.data;

            _this.report.branch = data.user.branch;
            _this.pageBranch.push(data.user.branch);
        });
        (0, _api.get)('/api/user/getBranchUsers').then(function (_ref2) {
            var data = _ref2.data;
            return _this.users = data.DSAs;
        });
        this.$prepareBranches();
    },
    created: function created() {
        this.setDates();
        this.initForm();
    },
    data: function data() {
        return {
            types: [{ name: "sales report", slug: "sales_report" }, { name: "score card", slug: "score_card" }, { name: "weekly operations", slug: "weekly_operations" }],
            report: {
                to: '',
                from: '',
                branch: { id: '', name: '' },
                employee: '',
                type: ''
            },
            //for daily report
            users: null,
            dailyReport: null,
            pageBranch: []
        };
    },

    methods: {
        initForm: function initForm() {
            this.dailyReport = {
                user_id: '',
                date: this.$getDate(),
                number_on_portal: '',
                number_to_captain: '',
                remark: ''
            };
        },
        generateReport: function generateReport() {
            var _this2 = this;

            this.$validator.validateAll('f1').then(function (result) {
                if (result) {
                    if (_this2.$network()) {
                        var branch = _this2.$store.state.branches.find(function (_ref3) {
                            var id = _ref3.id;
                            return id === _this2.report.branch.id;
                        });
                        _this2.report.branch = branch;
                        (0, _api.postD)('/api/report', _this2.report).then(function (_ref4) {
                            var data = _ref4.data;

                            var url = window.URL.createObjectURL(new Blob([data]));
                            var link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', _this2.report.type + '_for_' + branch.name + '.xlsx');
                            document.body.appendChild(link);
                            link.click();
                        });
                    } else _this2.$networkErr();
                } else _this2.$networkErr('form');
            });
        },
        setDates: function setDates() {
            /** this function computes and set the FROM and TO date to the
             * Monday and Friday of the current Week
             * PURPOSE: For better UX */
            var toTwoDigs = function toTwoDigs(num) {
                return num < 10 ? '0' + num : num;
            };
            var reformatDate = function reformatDate(d) {
                return d.getFullYear() + '-' + toTwoDigs(d.getMonth() + 1) + '-' + toTwoDigs(d.getDate());
            },
                d = new Date(),
                day = d.getDay(),
                diff = d.getDate() - day + (day === 0 ? -6 : 1),
                m = new Date(d.setDate(diff)),
                f = new Date();
            f.setDate(m.getDate() + 5);
            this.report.from = m = reformatDate(m);
            this.report.to = f = reformatDate(f);
            /** this function returns the monday ie this.report.from
             * and the saturday of the : this.report.to of the
             * current week*/
        },
        submitReport: function submitReport() {
            var _this3 = this;

            this.$validator.validateAll('f2').then(function (result) {
                if (result) {
                    if (_this3.$network()) {
                        _this3.$LIPS(true);
                        (0, _api.post)('/api/dsa_daily_registration', _this3.dailyReport).then(function (_ref5) {
                            var data = _ref5.data;

                            _this3.$validator.reset();
                            _this3.initForm();
                            _this3.$scrollToTop();
                            _this3.$LIPS(false);
                            data.submitted && _flash2.default.setSuccess(data.message);
                        }).catch(function () {
                            return _flash2.default.setError('Error logging report please try again later!');
                        });
                    } else _this3.$networkErr();
                } else _this3.$networkErr('form');
            });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53ac12f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/report.vue":
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
        _c("custom-header", { attrs: { title: "Generate Report" } }),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _c(
            "form",
            {
              attrs: { "data-vv-scope": "f1" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.generateReport($event)
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
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.report.type,
                              expression: "report.type"
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
                            "data-vv-as": "report type",
                            "data-vv-validate-on": "blur",
                            name: "report_type"
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
                                _vm.report,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("select type")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.types, function(ref) {
                            var slug = ref.slug
                            var name = ref.name
                            return _c("option", { domProps: { value: slug } }, [
                              _vm._v(_vm._s(_vm._f("capitalize")(name)))
                            ])
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("f1.report_type")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("f1.report_type")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Branch")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.report.branch.id,
                              expression: "report.branch.id"
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
                            disabled: !_vm.$store.getters.auth("DSALead"),
                            "data-vv-as": "office branch",
                            "data-vv-validate-on": "blur",
                            name: "branch_id"
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
                                _vm.report.branch,
                                "id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("select branch")
                          ]),
                          _vm._v(" "),
                          _vm._l(
                            _vm.$store.getters.auth("DSALead")
                              ? _vm.$store.state.branches
                              : _vm.pageBranch,
                            function(branch) {
                              return _c(
                                "option",
                                { domProps: { value: branch.id } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(branch.name) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("f1.branch_id")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("f1.branch_id")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Date from:")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.report.from,
                            expression: "report.from"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|date_format:MM/DD/YYYY",
                            expression: "'required|date_format:MM/DD/YYYY'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "Date from",
                          name: "date_from",
                          type: "date"
                        },
                        domProps: { value: _vm.report.from },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.report, "from", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("f1.date_from")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("f1.date_from")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Date To:")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.report.to,
                            expression: "report.to"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|date_format:MM/DD/YYYY",
                            expression: "'required|date_format:MM/DD/YYYY'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "Date to",
                          name: "date_to",
                          type: "date"
                        },
                        domProps: { value: _vm.report.to },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.report, "to", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("f1.date_to")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("f1.date_to")))
                          ])
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
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-default",
                        attrs: { disabled: _vm.$isProcessing, type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                            Generate Report "
                        ),
                        _c("i", { staticClass: "far fa-paper-plane ml-1" })
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("custom-header", { attrs: { title: "Send Daily Report" } }),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _c(
            "form",
            {
              attrs: { "data-vv-scope": "f2", id: "dsaDailyReportForm" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitReport($event)
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
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("DSA (Name-ID)")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.dailyReport.user_id,
                              expression: "dailyReport.user_id"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "custom-select w-100",
                          attrs: { "data-vv-validate-on": "blur", name: "dsa" },
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
                                _vm.dailyReport,
                                "user_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("select DSA")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.users, function(user) {
                            return _c(
                              "option",
                              { domProps: { value: user.id } },
                              [
                                _vm._v(
                                  _vm._s(
                                    user.full_name +
                                      " - (" +
                                      user.staff_id +
                                      ")"
                                  )
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("f2.dsa")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("f2.dsa")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.dailyReport.date,
                            expression: "dailyReport.date"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|date_format:MM/DD/YYYY",
                            expression: "'required|date_format:MM/DD/YYYY'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "date", type: "date" },
                        domProps: { value: _vm.dailyReport.date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.dailyReport,
                              "date",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("f2.date")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("f2.date")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Forms registered on portal")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.dailyReport.number_on_portal,
                            expression: "dailyReport.number_on_portal"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|integer|min:0",
                            expression: "'required|integer|min:0'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "number on portal",
                          name: "number_on_portal",
                          type: "number"
                        },
                        domProps: { value: _vm.dailyReport.number_on_portal },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.dailyReport,
                              "number_on_portal",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("f2.number_on_portal")
                        ? _c("small", [
                            _vm._v(
                              _vm._s(_vm.errors.first("f2.number_on_portal"))
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Forms submitted to captain")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.dailyReport.number_to_captain,
                            expression: "dailyReport.number_to_captain"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|integer|min:0",
                            expression: "'required|integer|min:0'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "number to captain",
                          name: "number_to_captain",
                          type: "number"
                        },
                        domProps: { value: _vm.dailyReport.number_to_captain },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.dailyReport,
                              "number_to_captain",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("f2.number_to_captain")
                        ? _c("small", [
                            _vm._v(
                              _vm._s(_vm.errors.first("f2.number_to_captain"))
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", { staticClass: "w-100 float-left" }, [
                        _vm._v("Remark/Comment")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.dailyReport.remark,
                            expression: "dailyReport.remark"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:255",
                            expression: "'required|max:255'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { cols: "1", name: "remark" },
                        domProps: { value: _vm.dailyReport.remark },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.dailyReport,
                              "remark",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("f2.remark")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("f2.remark")))
                          ])
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
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-default",
                        attrs: { disabled: _vm.$isProcessing, type: "submit" }
                      },
                      [
                        _vm._v("\n                            Log Report "),
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
    require("vue-hot-reload-api")      .rerender("data-v-53ac12f5", module.exports)
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

/***/ "./resources/assets/js/views/DSA/report/report.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/report.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53ac12f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/report.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DSA\\report\\report.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53ac12f5", Component.options)
  } else {
    hotAPI.reload("data-v-53ac12f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([22],{"+O4B":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-5 attendance-head"},[s("div",{staticClass:"mb-5 row align-items-center"},[s("div",{staticClass:"col-12 title-con"},[s("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?s("div",{staticClass:"row justify-content-end"},[s("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"57Cy":function(t,a,s){var i=s("VU/8")(s("N2ek"),s("WNta"),!1,null,null,null);t.exports=i.exports},EJ7O:function(t,a,s){var i=s("VU/8")(s("oKx2"),s("+O4B"),!1,null,null,null);t.exports=i.exports},N2ek:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=o(s("I3G/")),e=s("p/p5"),l=o(s("K23+")),n=o(s("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(t){var a=t.page;return"/caution"+(a?"?page="+a:"")};a.default={components:{CustomHeader:n.default},data:function(){return{show:!1,caution:null,cautions:{},columns:[{name:"Employee",col:4},{name:"Issued by",col:3},{name:"Reason",col:2},{name:"Penalty",col:2},{name:"Date",col:1}]}},beforeRouteEnter:function(t,a,s){var i=t.query;(0,e.get)("/api"+c(i)).then(function(t){var a=t.data;return s(function(t){return t.prepareForm(a)})}).catch(function(t){return s(function(a){return a.handleErr(t)})})},beforeRouteUpdate:function(t,a,s){var i=t.query,l=this;this.show=!1,this.$LIPS(!0),(0,e.get)("/api"+c(i)).then(function(t){var a=t.data;l.prepareForm(a),s()}).catch(function(t){l.handleErr(t),s()})},methods:{prepareForm:function(t){var a=t.cautions;a.data.length<1&&0!==a.total&&this.$router.push({query:{page:a.last_page}}),a.data.length&&(i.default.set(this.$data,"cautions",a),this.show=!0),this.$LIPS(!1)},handleErr:function(t){l.default.setError("Error Fetching Cautions")},displayInfo:function(t){return i.default.set(this.$data,"caution",t),$("#view-caution").modal("toggle")}},updated:function(){var t=this;$('[data-toggle="tooltip"]').tooltip({boundary:"window",html:!0}),$(document).on("hidden.bs.modal",".modal",function(){return t.caution=""})}}},WNta:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[s("custom-header",{attrs:{to:"caution/create",title:"Caution(s) register","button-title":"click here to send caution a staff!"}}),t._v(" "),t.show?s("div",{staticClass:"mt-5 row attendance-head mb-4"},t._l(t.columns,function(a){var i=a.name,e=a.col;return s("div",{class:"col-"+e},[s("div",{staticClass:"row"},[s("div",{staticClass:"light-heading"},[s("span",{staticClass:"d-none d-sm-inline"}),t._v(" "+t._s(i))])])])})):t._e(),t._v(" "),s("div",{staticClass:"mt-1 attendance-body"},[t.show?s("div",[t._l(t.cautions.data,function(a,i){return s("div",{staticClass:"mb-3 px-0 row align-items-center attendance-item",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"click on here to view full details!"},on:{click:function(s){t.displayInfo(a)}}},[s("div",{staticClass:"col-12 col-xs-4 col-md-4 col-lg-4"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"ml-5 mr-3 sm-hide"},[s("span",{staticClass:"user mx-auto"},[t._v("\n                                    "+t._s(i+1+10*(t.cautions.current_page-1))+"\n                                ")])]),t._v(" "),s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v(t._s(a.user.full_name))])])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.issuer.full_name))])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.reason_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.penalty_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-1 col-md-1 col-lg-1 pl-3 py-4 py-sm-0"},[s("div",{staticClass:"row"},[s("span",[t._v("\n                                "+t._s(a.date)+"\n                            ")])])])])}),t._v(" "),s("div",{staticClass:"mb-5 px-0 row align-items-center"},[s("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),t._v(" "),s("div",{staticClass:"clearfix w-100 mt-4"},[s("div",{staticClass:"float-left"},[s("strong",{staticClass:"light-heading float-left"},[t._v("\n                                Displaying: "+t._s(t.cautions.from)+" - "+t._s(t.cautions.to)+" of "+t._s(t.cautions.total)+"\n                            ")])]),t._v(" "),s("nav",{staticClass:"float-right",attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination pagination-lg float-left"},[s("li",{staticClass:"page-item",class:t.cautions.first_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:1}}}},[t._v("\n                                        First\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.prev_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page-1}}}},[t._v("\n                                        Previous\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item"},[s("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.cautions.current_page))])]),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.next_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page+1}}}},[t._v("\n                                        Next\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.last_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.last_page}}}},[t._v("\n                                        Last\n                                    ")])],1)])])])])],2):s("div",{staticClass:"row attendance-item p-5 mb-5"},[s("span",{staticClass:"no-attendance"},[t._v("No cautions has been issued!")])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"view-caution"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header py-2"},[s("h6",{staticClass:"modal-title py-1"},[t._v("Caution")]),t._v(" "),s("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[s("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])])]),t._v(" "),s("div",{staticClass:"modal-body"},[t.caution?s("div",{staticClass:"px-2"},[s("div",{staticClass:"px-4"},[s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Employee : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.user.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Issued by : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.issuer.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Reason : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.reason))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Penalty : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.penalty))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Date : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.date))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])])])])],1)])},staticRenderFns:[]}},oKx2:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{title:"",buttonTitle:null,to:null}}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([22],{"5GeB":function(t,e,s){var l=s("VU/8")(s("Mx+4"),s("BX/K"),!1,null,null,null);t.exports=l.exports},"BX/K":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",this._l(this.portals,function(t){return e("div",[e("portal-card",{attrs:{url:t.url,title:t.title,url_c:t.url_c,desc:t.desc,aces:t.aces}})],1)}))])},staticRenderFns:[]}},"K5f/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",desc:"",url:"",url_c:"",aces:{default:!0}}}},"Mx+4":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l,a=s("mdxA"),r=(l=a)&&l.__esModule?l:{default:l};e.default={components:{PortalCard:r.default},data:function(){return{portals:[{url:"/customer",title:"Customer List",url_c:"View Customer List",desc:"View all registered customers!"},{url:"sales",title:"Sales List",url_c:"View Sales List",desc:"View all Sales!"},{url:"all-overdue",title:"All overdue payments list",url_c:"View All Overdue payments",desc:"View all overdue payment!"}]}}}},mdxA:function(t,e,s){var l=s("VU/8")(s("K5f/"),s("zs6E"),!1,null,null,null);t.exports=l.exports},zs6E:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.aces?s("div",{staticClass:"col-md-4 col-sm-6 float-left product p-4"},[s("div",{staticClass:"portal-card clearfix"},[s("div",{staticClass:"first portion clearfix"},[s("span",{staticClass:"deco"}),s("span",{staticClass:"deco second"}),t._v(" "),s("span",{staticClass:"portal-title"},[t._v(t._s(t._f("capitalize")(t.title)))])]),t._v(" "),s("div",{staticClass:"portion clearfix"},[s("p",[t._v(t._s(t._f("capitalize")(t.desc)))]),t._v(" "),s("h6",{staticStyle:{"margin-top":"2rem"}},[t._v(t._s(t._f("capitalize")(t.url_c)))]),t._v(" "),s("span",{staticClass:"deco-down first"}),t._v(" "),s("span",{staticClass:"deco-down second"},[s("router-link",{staticClass:"btn bg-default btn-round m-0",attrs:{to:t.url}},[t._v("\n                   continue "),s("span",{staticClass:"custom-icon ml-2"},[s("i",{staticClass:"now-ui-icons ui-1_send"})])])],1)])])]):t._e()},staticRenderFns:[]}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
