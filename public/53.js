webpackJsonp([53],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

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
        },
        nameValue: {
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
        filteredOptions: function filteredOptions() {
            var _this = this;

            var exp = new RegExp(this.search, 'i');
            return this.options.filter(function (option) {
                return exp.test(option.id) || exp.test(option[_this.caption]);
            });
        }
    },
    watch: {
        value: function value(newVal) {
            if (newVal) this.select(this.options.find(function (option) {
                return option.id === newVal;
            }));
        }
        // nameValue: function (newName) {
        //     if (newName) this.select((this.options.find(option => option.name === newName)))
        // }
    },
    methods: {
        onDownKey: function onDownKey() {
            this.filteredOptions.length - 1 > this.selectIndex && this.selectIndex++;
        },
        onUpKey: function onUpKey() {
            this.selectIndex > 0 && this.selectIndex--;
        },
        onEnterKey: function onEnterKey() {
            var option = this.filteredOptions[this.selectIndex];
            if (option) this.select(option);
        },
        select: function select(option) {
            this.displayText = option[this.caption];
            this.$emit('input', option.id);
            this.$refs.search.blur();
        },
        toggle: function toggle(e) {
            if (e.target === this.$refs.toggle || e.target === this.$refs.search || e.target === this.$refs[this.caption]) {
                if (this.open) {
                    if (e.target !== this.$refs.search && e.target !== this.$refs[this.caption]) this.$refs.search.blur();
                } else this.$refs.search.focus();
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
    },
    created: function created() {
        var _this2 = this;

        _eventBus.EventBus.$on('clearTypeAhead', function () {
            return _this2.displayText = null;
        });
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

/***/ }),

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

var _Typeahead = __webpack_require__("./resources/assets/js/components/Typeahead.vue");

var _Typeahead2 = _interopRequireDefault(_Typeahead);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    components: { Typeahead: _Typeahead2.default, CustomHeader: _customHeader2.default },

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
            types: [{ name: "sales report", slug: "sales_report" }],
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
                        var _$store$state$branche = _this2.$store.state.branches.find(function (_ref3) {
                            var id = _ref3.id;
                            return id === _this2.report.branch.id;
                        }),
                            id = _$store$state$branche.id,
                            name = _$store$state$branche.name;

                        _this2.report.branch = { id: id, name: name };
                        (0, _api.postD)('/api/report', _this2.report).then(function (_ref4) {
                            var data = _ref4.data;

                            var url = window.URL.createObjectURL(new Blob([data]));
                            var link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', _this2.report.type + '_for_' + name + '.xlsx');
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
            var today = new Date(),
                day = today.getDay(),
                diff = today.getDate() - day + (day === 0 ? -6 : 1),
                monday = new Date(today.setDate(diff)),
                friday = new Date();

            friday.setDate(monday.getDate() + 4);
            this.report.from = monday = this.$getDate(monday);
            this.report.to = friday = this.$getDate(friday);
            /** this function returns the monday ie this.report.from
             * and the saturday of the : this.report.to of the
             * current week*/
        },
        submitReport: function submitReport() {
            var _this3 = this;

            this.$validator.validateAll('f2').then(function (result) {
                if (result) {
                    if (!_this3.dailyReport.user_id) {
                        _this3.$scrollToTop();
                        return _flash2.default.setError('Please select a DSA.');
                    }
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
                      _c("typeahead", {
                        attrs: { options: _vm.users, caption: "full_name" },
                        model: {
                          value: _vm.dailyReport.user_id,
                          callback: function($$v) {
                            _vm.$set(_vm.dailyReport, "user_id", $$v)
                          },
                          expression: "dailyReport.user_id"
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
                              _vm._s(_vm.errors.first("f2.number_on_portal")) +
                                "\n                        "
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
                              "\n                            " +
                                _vm._s(
                                  _vm.errors.first("f2.number_to_captain")
                                ) +
                                "\n                        "
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "position-relative",
      class: _vm.open ? "typeahead typeahead__open" : "typeahead"
    },
    [
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
            _vm._v("\n        " + _vm._s(_vm.displayText) + "\n     ")
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
                    class: [
                      _vm.selectIndex === index ? "typeahead__active" : ""
                    ],
                    on: {
                      mousedown: function($event) {
                        $event.preventDefault()
                        _vm.select(option)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(option[_vm.caption]) +
                        "\n            "
                    )
                  ]
                )
              ])
            })
          )
        : _vm._e()
    ]
  )
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

/***/ "./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue")
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

/***/ "./resources/assets/js/utilities/event-bus.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventBus = undefined;

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventBus = exports.EventBus = new _vue2.default();

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