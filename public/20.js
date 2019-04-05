<<<<<<< HEAD
webpackJsonp([20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/dailyReport.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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

exports.default = {
   data: function data() {

      return {
         // duration: 'daily',
         /** duration is used a to toggle the "to date"
          * to make if disabled when the user
          * wants a daily report*/
         users: null,
         report: null
      };
   },


   methods: {
      initForm: function initForm() {
         this.report = {
            user_id: '',
            date: this.$getDate(),
            number_on_portal: '',
            number_to_captain: '',
            remark: ''
         };
      },


      /*generateReport() {
          /!** check if the required fields have a value *!/
         this.$validator.validateAll().then(result => {
             if (result) {
               /!** if the result from the check is truthy*!/
                if (this.$network()) {
                  /!** check network connectivity*!/
                   let branch;
                   this.$LIPS(true);
                   /!** check is the user select "for all branches is where value is 0"*!/
                  if (this.report.branch.id !== 0) {
                     /!** if it he doesnt want for all branches*!/
                      /!** find the branch where the value of the branch input field matches with the branch id
                      * NB: the branches are stored in the store for use globally in the app*!/
                     branch = store.state.branches.find(obj => obj.id === this.report.branch.id);
                      /!**when u get the branch set the report branch to the branch retrieved above*!/
                     this.report.branch = branch;
                  }
                   /!** if
                   * (
                   *    (the duration is daily) and (the report.from is not today's date)
                   *    (NB: this.$getDate() is a vue prototype i created to return the current date)
                   * ) or (
                   *    report.from is greater than report.to
                   *    (NB: this implies that report.from must be earlier(in date) than the report to)
                   * )
                   * then reset the report.to to the report.from.
                   * The above ensure
                   * 1. that when a user selects daily that the both dates are the same date.
                   * 2. That the report.from must be earlier(in date) than the report to
                   * *!/
                  if ((this.duration === 'daily' && this.report.from !== this.$getDate()) || (this.report.from > this.report.to))
                     this.report.to = this.report.from;
                   postD(`/api/report/daily`, this.report)
                     .then(res => {
                         const url = window.URL.createObjectURL(new Blob([res.data]));
                         const link = document.createElement('a');
                         link.href = url;
                         link.setAttribute('download',
                            `report from ${this.report.from} to ${this.report.to}.xlsx`);
                         document.body.appendChild(link);
                         link.click();
                         this.$LIPS(false);
                     });
               } else this.$networkErr();
            }
            if (!result) this.$networkErr('form');
         });
      },*/

      submitReport: function submitReport() {
         var _this = this;

         /** validate form*/
         this.$validator.validateAll().then(function (result) {
            /** if validation is successful*/
            if (result) {
               /** check is network is available*/
               if (_this.$network()) {
                  /** if network is available*/
                  _this.$LIPS(true);
                  /** make a request to the backend*/
                  (0, _api.post)('/api/dsa_daily_registration', _this.report).then(function (res) {
                     document.getElementById('dsaDailyReportForm').reset();
                     _this.$validator.reset();
                     _this.initForm();
                     _this.$scrollToTop();
                     _this.$LIPS(false);
                     if (res.data.submitted) _flash2.default.setSuccess(res.data.message);
                  }).catch(function () {
                     return _flash2.default.setError('Error logging report please try again later!');
                  });
               } else _this.$networkErr();
            }
            if (!result) _this.$networkErr('form');
         });
      }
   },

   created: function created() {
      var _this2 = this;

      /** get the details of the current user */
      /*get(`/api/user/${this.$store.state.user_id}`)
         .then(res => this.report.branch = res.data.user.branch);*/
      this.initForm();
      (0, _api.get)('/api/user/getBranchUsers').then(function (res) {
         return _this2.users = res.data.DSAs;
      });

      /** set the branch for the daily report form to the current users branch.
       * This is to reduce the time the user spend on selecting
       * options on the form*/
   },


   watch: {
      /* duration: function (val) {
          /!** ifi the current option select by the user is "daily" set the TO to current date*!/
           if (val === 'daily') this.report.to = this.$getDate();
       }*/
   }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/report.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _dailyReport = __webpack_require__("./resources/assets/js/views/DSA/report/dailyReport.vue");

var _dailyReport2 = _interopRequireDefault(_dailyReport);

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
   components: { DailyReport: _dailyReport2.default },
   beforeCreate: function beforeCreate() {
      if (!this.$store.getters.verifyDSACaptain) this.$networkErr('page');
      /** this component can only be accessed by the dsa leads and captains hence this route guard
      * if the role of the dsa agent logged in is contained in the
      * array of the dsa lead then access will be granted*/
      this.$prepareBranches();
   },
   data: function data() {
      return {
         types: [{
            name: "sales report",
            slug: "sales_report"
         }, {
            name: "score card",
            slug: "score_card"
         }, {
            name: "weekly operations",
            slug: "weekly_operations"
         }],
         report: {
            to: '',
            from: '',
            branch: {
               id: '',
               name: ''
            },
            employee: '',
            type: ''
         }
      };
   },
   created: function created() {
      this.setDates();
   },

   methods: {
      generateReport: function generateReport() {
         var _this = this;

         this.$validator.validateAll().then(function (result) {
            if (result) {
               if (_this.$network()) {
                  var branch = _store.store.state.branches.find(function (obj) {
                     return obj.id === _this.report.branch.id;
                  });
                  _this.report.branch = branch;
                  (0, _api.postD)('/api/report', _this.report).then(function (res) {
                     var url = window.URL.createObjectURL(new Blob([res.data]));
                     var link = document.createElement('a');
                     link.href = url;
                     link.setAttribute('download', _this.report.type + '_for_' + branch.name + '.xlsx');
                     document.body.appendChild(link);
                     link.click();
                  });
               } else _this.$networkErr();
            }
            if (!result) _this.$networkErr('form');
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e31093c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/dailyReport.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body px-4" }, [
      _c(
        "form",
        {
          attrs: { id: "dsaDailyReportForm" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submitReport($event)
            }
          }
        },
        [
          _c("div", { staticClass: "my-4 clearfix" }, [
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
                        value: _vm.report.user_id,
                        expression: "report.user_id"
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
                          _vm.report,
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
                      return _c("option", { domProps: { value: user.id } }, [
                        _vm._v(
                          _vm._s(user.full_name + " - (" + user.staff_id + ")")
                        )
                      ])
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors.first("dsa")
                  ? _c("small", [_vm._v(_vm._s(_vm.errors.first("dsa")))])
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
                _c("label", [_vm._v("Date")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.report.date,
                      expression: "report.date"
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
                  domProps: { value: _vm.report.date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.report, "date", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.first("date")
                  ? _c("small", [_vm._v(_vm._s(_vm.errors.first("date")))])
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
                _c("label", [_vm._v("Number of forms registered on portal")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.report.number_on_portal,
                      expression: "report.number_on_portal"
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
                  domProps: { value: _vm.report.number_on_portal },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.report,
                        "number_on_portal",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.first("number_on_portal")
                  ? _c("small", [
                      _vm._v(_vm._s(_vm.errors.first("number_on_portal")))
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
                _c("label", [_vm._v("Number of forms submitted to captain")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.report.number_to_captain,
                      expression: "report.number_to_captain"
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
                  domProps: { value: _vm.report.number_to_captain },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.report,
                        "number_to_captain",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.first("number_to_captain")
                  ? _c("small", [
                      _vm._v(_vm._s(_vm.errors.first("number_to_captain")))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "spaceAfter" }),
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
                      value: _vm.report.remark,
                      expression: "report.remark"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|max:255",
                      expression: "'required|max:255'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { cols: "3", name: "remark" },
                  domProps: { value: _vm.report.remark },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.report, "remark", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.first("remark")
                  ? _c("small", [_vm._v(_vm._s(_vm.errors.first("remark")))])
                  : _vm._e()
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-block btn-lg bg-default",
                  attrs: { disabled: _vm.$isProcessing, type: "submit" }
                },
                [
                  _vm._v("\n               Log Report "),
                  _c("i", { staticClass: "far fa-paper-plane ml-1" })
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav nav-tabs justify-content-center bg-default" },
      [_c("h6", [_vm._v("Daily Report (Captains)")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e31093c", module.exports)
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
      { staticClass: "pt-md-3 pt-2", attrs: { id: "employeeRegister" } },
      [
        _vm.$store.getters.verifyDSALead
          ? _c("div", { staticClass: "card" }, [
              _c(
                "ul",
                {
                  staticClass: "nav nav-tabs justify-content-center bg-default"
                },
                [_c("h6", [_vm._v("Report Generation")])]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body px-4" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.generateReport($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "my-4 clearfix" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                        },
                        [
                          _c("label", [_vm._v("Report Type")]),
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                              _vm._l(_vm.types, function(type) {
                                return _c(
                                  "option",
                                  { domProps: { value: type.slug } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm._f("capitalize")(type.name))
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("report_type")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("report_type")) +
                                    "\n                     "
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
                                "data-vv-as": "office branch",
                                name: "branch_id",
                                "data-vv-validate-on": "blur"
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
                              _vm._l(_vm.$store.state.branches, function(
                                branch
                              ) {
                                return _c(
                                  "option",
                                  { domProps: { value: branch.id } },
                                  [
                                    _vm._v(
                                      "\n                           " +
                                        _vm._s(branch.name) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("branch_id")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("branch_id")) +
                                    "\n                     "
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
                              type: "date",
                              "data-vv-as": "Date from",
                              name: "date_from"
                            },
                            domProps: { value: _vm.report.from },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.report,
                                  "from",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("date_from")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("date_from")) +
                                    "\n                     "
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
                              type: "date",
                              "data-vv-as": "Date to",
                              name: "date_to"
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
                          _vm.errors.first("date_to")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("date_to")) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-block btn-lg bg-default",
                            attrs: {
                              type: "submit",
                              disabled: _vm.$isProcessing
                            }
                          },
                          [
                            _vm._v("\n                     Generate Report "),
                            _c("i", { staticClass: "far fa-paper-plane ml-1" })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.getters.verifyDSACaptain ? _c("daily-report") : _vm._e()
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

/***/ "./resources/assets/js/views/DSA/report/dailyReport.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/dailyReport.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e31093c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/dailyReport.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DSA\\report\\dailyReport.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e31093c", Component.options)
  } else {
    hotAPI.reload("data-v-4e31093c", Component.options)
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
webpackJsonp([20],{RXsi:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s=r("NYxO"),n=i(r("qYF3")),a=i(r("TOoT"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{Auth:n.default.state}},computed:o({},(0,s.mapGetters)(["getProfileAccess"])),methods:o({},(0,s.mapActions)([])),beforeCreate:function(){var e=parseInt(localStorage.getItem("role"));this.$store.dispatch("mutateProfileAccess",e),-1!==this.$store.state.ProfileAccess.indexOf(e)||localStorage.getItem("api_token")||(a.default.setError("You do not have access to that page!"),this.$router.push("/login"))}}},dgKe:function(e,t,r){var o=r("VU/8")(r("RXsi"),r("iiI2"),!1,null,null,null);e.exports=o.exports},iiI2:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"profile-view"}},[t("router-view")],1)},staticRenderFns:[]}}});
>>>>>>> a6badb66dd1c3c9d8d4944777dabf072e5614b15
