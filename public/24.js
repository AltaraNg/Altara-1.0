<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([24],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue":
=======
webpackJsonp([24],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customHeader.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
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
<<<<<<< HEAD
//
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
=======

exports.default = {
    props: {
        title: '',
        buttonTitle: null,
        to: null
    }
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
};

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/index.vue":
=======
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/report.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

<<<<<<< HEAD
var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);
=======
var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
<<<<<<< HEAD
    components: { AppNavigation: _AppNavigation2.default }
=======

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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
}; //
//
//
//
//
//
//
//
<<<<<<< HEAD

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
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
=======
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
    require("vue-hot-reload-api")      .rerender("data-v-2f542aae", module.exports)
=======
    require("vue-hot-reload-api")      .rerender("data-v-02013d35", module.exports)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-991322c8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/index.vue":
=======
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53ac12f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/report.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c(
    "div",
    { staticClass: "px-md-4 px-2" },
    [
      _c("app-navigation", {
        attrs: {
          pageTitle: "Human Resource Management",
          pageTitleSmall: "HRM",
          previous: { path: _vm.$routerHistory.previous().path },
          forward: { path: _vm.$routerHistory.next().path }
        }
      }),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
=======
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
    require("vue-hot-reload-api")      .rerender("data-v-991322c8", module.exports)
=======
    require("vue-hot-reload-api")      .rerender("data-v-53ac12f5", module.exports)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
}

/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/AppNavigation.vue":
=======
/***/ "./resources/assets/js/components/customHeader.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
<<<<<<< HEAD
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
=======
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customHeader.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\AppNavigation.vue"
=======
Component.options.__file = "resources\\assets\\js\\components\\customHeader.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-2f542aae", Component.options)
  } else {
    hotAPI.reload("data-v-2f542aae", Component.options)
=======
    hotAPI.createRecord("data-v-02013d35", Component.options)
  } else {
    hotAPI.reload("data-v-02013d35", Component.options)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/views/HRM/index.vue":
=======
/***/ "./resources/assets/js/views/DSA/report/report.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
<<<<<<< HEAD
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-991322c8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/index.vue")
=======
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/report.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53ac12f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/report.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\index.vue"
=======
Component.options.__file = "resources\\assets\\js\\views\\DSA\\report\\report.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-991322c8", Component.options)
  } else {
    hotAPI.reload("data-v-991322c8", Component.options)
=======
    hotAPI.createRecord("data-v-53ac12f5", Component.options)
  } else {
    hotAPI.reload("data-v-53ac12f5", Component.options)
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
webpackJsonp([24],{"1gIg":function(t,a,s){var e=s("VU/8")(s("wBhk"),s("9sZT"),!1,null,null,null);t.exports=e.exports},"9sZT":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},ItRt:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,r=s("1gIg"),l=(e=r)&&e.__esModule?e:{default:e};a.default={components:{AppNavigation:l.default}}},ZjJq:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"px-md-4 px-2"},[a("app-navigation",{attrs:{pageTitle:"Logistic Agents",pageTitleSmall:"LOG",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]}},l3Md:function(t,a,s){var e=s("VU/8")(s("ItRt"),s("ZjJq"),!1,null,null,null);t.exports=e.exports},wBhk:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([24],{"+O4B":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.title)))]),e._v(" "),e.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:e.to}},[e._v(e._s(e.buttonTitle))])],1):e._e()])])])},staticRenderFns:[]}},EJ7O:function(e,t,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);e.exports=a.exports},UorG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r("K23+")),o=r("p/p5"),s=i(r("EJ7O"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={components:{CustomHeader:s.default},beforeCreate:function(){var e=this;!this.$store.getters.auth("DSACaptain")&&this.$networkErr("page"),(0,o.get)("/api/user/"+this.$store.state.user_id).then(function(t){var r=t.data;e.report.branch=r.user.branch,e.pageBranch.push(r.user.branch)}),(0,o.get)("/api/user/getBranchUsers").then(function(t){var r=t.data;return e.users=r.DSAs}),this.$prepareBranches()},created:function(){this.setDates(),this.initForm()},data:function(){return{types:[{name:"sales report",slug:"sales_report"},{name:"score card",slug:"score_card"},{name:"weekly operations",slug:"weekly_operations"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""},users:null,dailyReport:null,pageBranch:[]}},methods:{initForm:function(){this.dailyReport={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},generateReport:function(){var e=this;this.$validator.validateAll("f1").then(function(t){if(t)if(e.$network()){var r=e.$store.state.branches.find(function(t){return t.id===e.report.branch.id});e.report.branch=r,(0,o.postD)("/api/report",e.report).then(function(t){var a=t.data,o=window.URL.createObjectURL(new Blob([a])),s=document.createElement("a");s.href=o,s.setAttribute("download",e.report.type+"_for_"+r.name+".xlsx"),document.body.appendChild(s),s.click()})}else e.$networkErr();else e.$networkErr("form")})},setDates:function(){var e=function(e){return e<10?"0"+e:e},t=function(t){return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())},r=new Date,a=r.getDay(),o=r.getDate()-a+(0===a?-6:1),s=new Date(r.setDate(o)),i=new Date;i.setDate(s.getDate()+5),this.report.from=s=t(s),this.report.to=i=t(i)},submitReport:function(){var e=this;this.$validator.validateAll("f2").then(function(t){t?e.$network()?(e.$LIPS(!0),(0,o.post)("/api/dsa_daily_registration",e.dailyReport).then(function(t){var r=t.data;e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),r.submitted&&a.default.setSuccess(r.message)}).catch(function(){return a.default.setError("Error logging report please try again later!")})):e.$networkErr():e.$networkErr("form")})}}}},khuM:function(e,t,r){var a=r("VU/8")(r("UorG"),r("rgtB"),!1,null,null,null);e.exports=a.exports},oKx2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",buttonTitle:null,to:null}}},rgtB:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[r("custom-header",{attrs:{title:"Generate Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f1"},on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){var a=t.slug,o=t.name;return r("option",{domProps:{value:a}},[e._v(e._s(e._f("capitalize")(o)))])})],2),e._v(" "),e.errors.first("f1.report_type")?r("small",[e._v(e._s(e.errors.first("f1.report_type")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{disabled:!e.$store.getters.auth("DSALead"),"data-vv-as":"office branch","data-vv-validate-on":"blur",name:"branch_id"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.getters.auth("DSALead")?e.$store.state.branches:e.pageBranch,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})],2),e._v(" "),e.errors.first("f1.branch_id")?r("small",[e._v(e._s(e.errors.first("f1.branch_id")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date from:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date from",name:"date_from",type:"date"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_from")?r("small",[e._v(e._s(e.errors.first("f1.date_from")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date To:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date to",name:"date_to",type:"date"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_to")?r("small",[e._v(e._s(e.errors.first("f1.date_to")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Generate Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]),e._v(" "),r("custom-header",{attrs:{title:"Send Daily Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f2",id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("DSA (Name-ID)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.user_id,expression:"dailyReport.user_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"dsa"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.dailyReport,"user_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select DSA")]),e._v(" "),e._l(e.users,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(t.full_name+" - ("+t.staff_id+")"))])})],2),e._v(" "),e.errors.first("f2.dsa")?r("small",[e._v(e._s(e.errors.first("f2.dsa")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.date,expression:"dailyReport.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.dailyReport.date},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"date",t.target.value)}}}),e._v(" "),e.errors.first("f2.date")?r("small",[e._v(e._s(e.errors.first("f2.date")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms registered on portal")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_on_portal,expression:"dailyReport.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.dailyReport.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_on_portal")?r("small",[e._v(e._s(e.errors.first("f2.number_on_portal")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms submitted to captain")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_to_captain,expression:"dailyReport.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.dailyReport.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_to_captain")?r("small",[e._v(e._s(e.errors.first("f2.number_to_captain")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.remark,expression:"dailyReport.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"1",name:"remark"},domProps:{value:e.dailyReport.remark},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"remark",t.target.value)}}}),e._v(" "),e.errors.first("f2.remark")?r("small",[e._v(e._s(e.errors.first("f2.remark")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Log Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])],1)])},staticRenderFns:[]}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
=======
});
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
