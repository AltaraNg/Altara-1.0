<<<<<<< HEAD
webpackJsonp([16,20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import UtilityForm from '../views/HRM/employee/employeeForm';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
   // components: {UtilityForm},
   data: function data() {
      return {
         /*data generic to data viewer starts here*/
         model: {},
         columns: {},
         query: {
            page: 1,
            column: 'id',
            direction: 'desc',
            per_page: 10,
            search_column: 'id',
            search_operator: 'greater_than',
            search_input: 0
         },
         operators: {
            equal: '=',
            not_equal: '<>',
            less_than: '<',
            greater_than: '>',
            less_than_or_equal_to: '<=',
            greater_than_or_equal_to: '>=',
            in: 'IN',
            like: 'LIKE'
         },
         /*data generic to data viewer stops here*/

         /*data peculiar to hrm portal data viewer starts here*/
         bus: new _vue2.default(),
         form: {},
         portal_access: [{ name: 'grant', value: 1 }, { name: 'deny', value: 0 }]
         //sentData: {},
         /*data peculiar to hrm portal data viewer stops here*/
      };
   },
   created: function created() {
      this.$prepareStates();
      this.fetchIndexData();
      $(document).on('click', 'tr', function () {
         $('tr.current').removeClass('current');
         $(this).addClass('current');
      });
   },
   updated: function updated() {
      $('[data-toggle="tooltip"]').tooltip();
   },


   methods: {
      /*methods exclusive to data viewer starts here*/

      next: function next() {
         if (this.model.next_page_url) {
            this.query.page++;
            this.fetchIndexData();
         }
      },
      prev: function prev() {
         if (this.model.prev_page_url) {
            this.query.page--;
            this.fetchIndexData();
         }
      },
      toggleOrder: function toggleOrder(column) {
         if (column === this.query.column) this.query.direction = this.query.direction === 'desc' ? 'asc' : 'desc';else {
            this.query.column = column;
            this.query.direcntion = 'asc';
         }
         this.fetchIndexData();
      },
      fetchIndexData: function fetchIndexData() {
         var _this = this;

         this.$LIPS(true);
         $('.modal').modal('hide');
         (0, _api.get)('' + this.$route.meta.source + ('?page=' + this.query.page) + ('&column=' + this.query.column) + ('&per_page=' + this.query.per_page) + ('&direction=' + this.query.direction) + ('&search_input=' + this.query.search_input) + ('&search_column=' + this.query.search_column) + ('&search_operator=' + this.query.search_operator)).then(function (res) {
            var data = res.data.model.data;
            /*the state id for the branch fetched from the db is a number
            * hence the code below is used to get the state name
            * corresponding to the state id and display it
            * instead of showing state id as a number*/
            if (data.length && data[0].state_id) {
               data.forEach(function (curr) {
                  return curr.state_id = _store.store.getters.getStates.find(function (obj) {
                     return obj.id === curr.state_id;
                  }).name;
               });
            }
            _vue2.default.set(_this.$data, 'model', res.data.model);
            _vue2.default.set(_this.$data, 'columns', res.data.columns);
            _this.$scrollToTop();
            _this.$LIPS(false);
         });
      },

      /*methods exclusive to data viewer stop here*/

      /*methods exclusive to hrm data viewer starts here*/
      accessStatus: function accessStatus(status) {
         return Boolean(Number(status));
         /*returns true or false for the portal
         access status for each staff
         (1 or 0 respectively)*/
      },
      update: function update(emp, mod) {
         this.form = emp;
         $('#' + mod).modal('toggle');
      },
      resetPassword: function resetPassword() {
         var _this2 = this;

         if (this.$network()) {
            this.$LIPS(true);
            (0, _api.get)('/api/reset-password/' + this.form.id).then(function (res) {
               (0, _log.log)('resetUserPassword', _this2.form.staff_id);
               _flash2.default.setSuccess('Employee password reset successful!');
               var details = {
                  phone: String(parseInt(_this2.form.phone_number)), password: res.data.password,
                  staff_id: _this2.form.staff_id
               };
               _sms2.default.passwordReset(details);
            }).finally(function () {
               return _this2.done();
            });
         } else this.$networkErr();
      },
      myLog: function myLog(id) {
         var _this3 = this;

         if (this.$network()) {
            this.$LIPS(true);
            (0, _api.byMethod)('PUT', '/api/user/' + id, this.form).then(function (res) {
               (0, _log.log)('PortalAccessUpdated', String(res.data.staff_id));
               _flash2.default.setSuccess('Portal access updated', 20000);
            }).catch(function () {
               return _flash2.default.setError('Error updating status. Try again later!');
            }).finally(function () {
               return _this3.done();
            });
         } else this.$networkErr();
      },
      done: function done() {
         this.$scrollToTop();
         this.$LIPS(false);
         $('.modal').modal('hide');
      }
      /*methods exclusive to hrm data viewer stops here*/

   },
   computed: {
      user: function user() {
         return this.$route.meta.appModel === 'user';
         /*return true if the context
         * of the data viewer is
         * for employees*/
      },
      branch: function branch() {
         return this.$route.meta.appModel === 'branch';
         /*return true if the context
         * of the data viewer is
         * for branch*/
      },
      customer: function customer() {
         return this.$route.meta.appModel === 'customer';
         /*return true if the context
         * of the data viewer is
         * for customer*/
      }
   }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/branch/branches.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataViewer = __webpack_require__("./resources/assets/js/components/DataViewer.vue");

var _DataViewer2 = _interopRequireDefault(_DataViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { DataViewer: _DataViewer2.default }
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-412d66a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/branch/branches.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-md-3 pt-2", attrs: { id: "index" } }, [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c(
            "ul",
            { staticClass: "nav nav-tabs justify-content-center bg-default" },
            [_c("h6", [_vm._v("Manage Branches")])]
          ),
          _vm._v(" "),
          _c("data-viewer", {
            attrs: {
              source: "/api/branch",
              title: "Branch(s)",
              appModel: "branch"
            }
          })
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-412d66a0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53eb4313\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-md-3 pt-2", attrs: { id: "employeeEdit" } }, [
      _c(
        "div",
        {
          staticClass: "card",
          staticStyle: { "border-top": "4px solid #0e5f92" }
        },
        [
          _c("div", { staticClass: "px-5 py-4" }, [
            _c(
              "div",
              { staticClass: "px-3 clearfix" },
              [
                _c("h5", { staticClass: "h5-custom float-left m-0" }, [
                  _vm._v("Staff Management")
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "float-right btn btn-primary bg-default m-0",
                    attrs: { to: "/hrm/employee/create" }
                  },
                  [_vm._v("Register a Staff!")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "m-0" }),
          _vm._v(" "),
          _c("div", [
            _c("div", { staticClass: "card-body p-4 p-md-5" }, [
              _c("div", { staticClass: "clearfix w-100" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
                  },
                  [
                    _c("label", [_vm._v("Search Column")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.query.search_column,
                            expression: "query.search_column"
                          }
                        ],
                        staticClass: "custom-select w-100",
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
                              _vm.query,
                              "search_column",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.columns, function(column) {
                        return _c("option", { domProps: { value: column } }, [
                          _vm._v(_vm._s(_vm._f("capitalize")(column)))
                        ])
                      })
                    )
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
                    _c("label", [_vm._v("Search Operator")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.query.search_operator,
                            expression: "query.search_operator"
                          }
                        ],
                        staticClass: "custom-select w-100",
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
                              _vm.query,
                              "search_operator",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.operators, function(value, key) {
                        return _c("option", { domProps: { value: key } }, [
                          _vm._v(_vm._s(value))
                        ])
                      })
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"
                  },
                  [
                    _c("label", [_vm._v("Search Input")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.query.search_input,
                          expression: "query.search_input"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "search...", type: "text" },
                      domProps: { value: _vm.query.search_input },
                      on: {
                        keyup: function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          _vm.fetchIndexData()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.query,
                            "search_input",
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
                  {
                    staticClass:
                      "form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-block bg-default mb-0 mt-3 mt-md-4",
                        on: {
                          click: function($event) {
                            _vm.fetchIndexData()
                          }
                        }
                      },
                      [_vm._v("Filter")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "px-0 px-md-3 mt-3 table-responsive" }, [
                _c(
                  "table",
                  { staticClass: "table m-0  table-bordered table-hover" },
                  [
                    _c("thead", { staticClass: "thead-light" }, [
                      _c(
                        "tr",
                        [
                          _vm._l(_vm.columns, function(column) {
                            return _c(
                              "th",
                              {
                                attrs: { scope: "col" },
                                on: {
                                  click: function($event) {
                                    _vm.toggleOrder(column)
                                  }
                                }
                              },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(_vm._f("capitalize")(column)))
                                ]),
                                _vm._v(" "),
                                column === _vm.query.column
                                  ? _c(
                                      "span",
                                      { staticClass: "dv-table-column" },
                                      [
                                        _vm.query.direction === "desc"
                                          ? _c("span", [_vm._v("↑")])
                                          : _c("span", [_vm._v("↓")])
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _vm.user || _vm.branch || _vm.customer
                            ? _c("th", { attrs: { scope: "col" } }, [
                                _c("span", [_vm._v("Action")])
                              ])
                            : _vm._e()
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.model.data, function(model) {
                        return _c(
                          "tr",
                          [
                            _vm._l(model, function(value, key) {
                              return _c("td", [_vm._v(_vm._s(value))])
                            }),
                            _vm._v(" "),
                            _vm.user
                              ? _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",
                                        attrs: {
                                          to:
                                            "/hrm/employee/" +
                                            model.id +
                                            "/edit",
                                          "data-placement": "top",
                                          "data-toggle": "tooltip",
                                          title: "Edit Employee Detail"
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-user-edit"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "text-center mr-2 btn btn-icon btn-sm float-left btn-round",
                                        class: {
                                          "btn-success": _vm.accessStatus(
                                            model.portal_access
                                          ),
                                          "btn-danger": !_vm.accessStatus(
                                            model.portal_access
                                          )
                                        },
                                        attrs: {
                                          "data-placement": "top",
                                          "data-toggle": "tooltip",
                                          title: "Edit Employee Portal Access"
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.update(
                                              model,
                                              "editPortalAccess"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm.accessStatus(model.portal_access)
                                          ? _c("i", {
                                              staticClass: "fas fa-lock-open"
                                            })
                                          : _c("i", {
                                              staticClass: "fas fa-lock"
                                            })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",
                                        attrs: {
                                          "data-placement": "top",
                                          "data-toggle": "tooltip",
                                          title: "Reset Employee Password"
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.update(model, "editPassword")
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-key" })]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.branch || _vm.customer
                              ? _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",
                                      attrs: {
                                        title:
                                          "" +
                                          (_vm.branch
                                            ? "update branch details"
                                            : "view details"),
                                        "data-placement": "top",
                                        "data-toggle": "tooltip"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.branch
                                            ? _vm.$router.push(
                                                "/fsl/branch/" +
                                                  model.id +
                                                  "/edit"
                                              )
                                            : _vm.$router.push(
                                                "/customer/" + model.id
                                              )
                                        }
                                      }
                                    },
                                    [
                                      _vm.branch
                                        ? _c("i", { staticClass: "fas fa-cog" })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.customer
                                        ? _c("i", {
                                            staticClass: "far fa-user"
                                          })
                                        : _vm._e()
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ],
                          2
                        )
                      })
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "nav",
                {
                  staticClass: "clearfix pt-5",
                  attrs: { "aria-label": "Page navigation example" }
                },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "float-left col-md-6 col-12 px-0 mb-5 mb-md-0"
                    },
                    [
                      _vm._v(
                        "\n                 Displaying: " +
                          _vm._s(_vm.model.from) +
                          " - " +
                          _vm._s(_vm.model.to) +
                          " of " +
                          _vm._s(_vm.model.total) +
                          " " +
                          _vm._s(
                            _vm._f("capitalize")(_vm.$route.meta.appModel)
                          ) +
                          " (s)\n             "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"
                    },
                    [
                      _c("ul", { staticClass: "pagination m-0 float-right" }, [
                        _c("li", { staticClass: "page-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "page-link",
                              on: {
                                click: function($event) {
                                  _vm.prev()
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-arrow-circle-left"
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "page-item" }, [
                          _c("span", { staticClass: "page-link" }, [
                            _vm._v(
                              "Current Page: " + _vm._s(_vm.model.current_page)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "page-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "page-link",
                              on: {
                                click: function($event) {
                                  _vm.next()
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-arrow-circle-right"
                              })
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "float-left" }, [
                        _c("span", { staticClass: "py-2 pr-3 float-left" }, [
                          _vm._v("Rows Per Page ")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.query.per_page,
                              expression: "query.per_page"
                            }
                          ],
                          staticClass: "form-control float-left",
                          attrs: { placeholder: "search...", type: "text" },
                          domProps: { value: _vm.query.per_page },
                          on: {
                            keyup: function($event) {
                              if (
                                !("button" in $event) &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              _vm.fetchIndexData()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.query,
                                "per_page",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal fade", attrs: { id: "editPortalAccess" } },
              [
                _c(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _c("div", { staticClass: "modal-header py-2" }, [
                        _c("h6", { staticClass: "modal-title py-1" }, [
                          _vm._v("Edit Employee Portal Access")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "close py-1",
                            attrs: {
                              "aria-label": "Close",
                              "data-dismiss": "modal"
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "modal-close text-danger",
                                attrs: { "aria-hidden": "true" }
                              },
                              [_c("i", { staticClass: "fas fa-times" })]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("form", [
                        _c("div", { staticClass: "modal-body" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-12 float-left mt-0 mb-2"
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "mb-2 w-100 float-left pl-1 text-center",
                                  staticStyle: { "font-size": "14px" }
                                },
                                [
                                  _vm._v(
                                    "\n                        Please Verify you selected the right access before clicking "
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("strong", [_vm._v("Save Changes ")]),
                                  _vm._v("!\n                     ")
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.portal_access, function(access) {
                                return _c(
                                  "div",
                                  {
                                    staticClass:
                                      "radio p-0 col-6 float-left text-center"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.portal_access,
                                          expression: "form.portal_access"
                                        }
                                      ],
                                      attrs: {
                                        id: access.name,
                                        name: "access",
                                        type: "radio"
                                      },
                                      domProps: {
                                        value: access.value,
                                        checked: _vm._q(
                                          _vm.form.portal_access,
                                          access.value
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.form,
                                            "portal_access",
                                            access.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: access.name } },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("capitalize")(access.name)
                                          ) + " Access"
                                        )
                                      ]
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "m-2 btn btn-secondary",
                              attrs: { "data-dismiss": "modal", type: "button" }
                            },
                            [_vm._v("cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "m-2 btn bg-default",
                              attrs: {
                                disabled: _vm.$isProcessing,
                                type: "button"
                              },
                              on: {
                                click: function($event) {
                                  _vm.myLog(_vm.form.id)
                                }
                              }
                            },
                            [
                              _vm._v(" Save changes "),
                              _c("i", {
                                staticClass: "far fa-paper-plane ml-1"
                              })
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal fade", attrs: { id: "editPassword" } },
              [
                _c(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _c("div", { staticClass: "modal-header py-2" }, [
                        _c("h6", { staticClass: "modal-title py-1" }, [
                          _vm._v("Reset Employee Password")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "close py-1",
                            attrs: {
                              "aria-label": "Close",
                              "data-dismiss": "modal"
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "modal-close text-danger",
                                attrs: { "aria-hidden": "true" }
                              },
                              [_c("i", { staticClass: "fas fa-times" })]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("form", [
                        _c("div", { staticClass: "modal-body" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-12 float-left mt-2 mb-4 "
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  "A new password will be sent to the employee via "
                                ),
                                _c("strong", [_vm._v("sms")]),
                                _vm._v(
                                  " on the\n                                   telephone He/She "
                                ),
                                _c("strong", [_vm._v("used for registration")]),
                                _vm._v(
                                  " on this portal.\n                                 "
                                ),
                                _c("br"),
                                _c("br"),
                                _vm._v(
                                  "Please Kindly verify that the phone to receive the new password is on and active!\n                             "
                                )
                              ]),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("u", [
                                _c("em", [
                                  _vm._v(
                                    "click the continue and reset password to finish this task!"
                                  )
                                ])
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "m-2 btn btn-secondary",
                              attrs: { "data-dismiss": "modal", type: "button" }
                            },
                            [_vm._v("cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "m-2 btn bg-default",
                              attrs: {
                                disabled: _vm.$isProcessing,
                                type: "button"
                              },
                              on: { click: _vm.resetPassword }
                            },
                            [
                              _vm._v(
                                "\n                              continue and reset password "
                              ),
                              _c("i", {
                                staticClass: "far fa-paper-plane ml-1"
                              })
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                )
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
    require("vue-hot-reload-api")      .rerender("data-v-53eb4313", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53eb4313\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\DataViewer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53eb4313", Component.options)
  } else {
    hotAPI.reload("data-v-53eb4313", Component.options)
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

/***/ "./resources/assets/js/helpers/sms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

exports.default = {
   message: "",
   welcome: function welcome(details) {
      this.message = "Welcome to Altara credit. Please secure your login details. Staff ID: " + details.loginID + ", password: " + details.loginPassword;
      this.send(details);
   },
   customerReg: function customerReg(details) {
      this.message = "Dear " + details.first_name + " " + details.last_name + ", Welcome to Altara Credit Limited, You are hereby invited to our showroom at " + details.branch.description + " to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: " + details.branch.phone_yoruba + ". Your customer id is: " + details.id;
      this.send({ phone: details.telephone.substr(1) });
   },
   passwordReset: function passwordReset(details) {
      this.message = "Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is " + details.staff_id + ", new password: " + details.password;
      this.send(details);
   },
   dvaMessage: function dvaMessage(details) {
      this.message = details.message;
      this.send(details);
   },
   send: function send(details) {
      console.log(details);
      /*get(`/api/message/create?to=234${details.phone}&message=${this.message}`).then(res => {
         let data = JSON.parse(res.data);
         if (data.messages[0].status.groupId === 1) {
            console.log("sms sent successfully");
         }
      });*/
   }
};

/***/ }),

/***/ "./resources/assets/js/views/FSL/branch/branches.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/branch/branches.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-412d66a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/branch/branches.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\branch\\branches.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-412d66a0", Component.options)
  } else {
    hotAPI.reload("data-v-412d66a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([16],{"2tpd":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[e._m(0),e._v(" "),r("div",{staticClass:"card-body px-4"},[r("form",{attrs:{id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[r("div",{staticClass:"my-4 clearfix"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("DSA (Name-ID)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.user_id,expression:"report.user_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"dsa"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"user_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select DSA")]),e._v(" "),e._l(e.users,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(t.full_name+" - ("+t.staff_id+")"))])})],2),e._v(" "),e.errors.first("dsa")?r("small",[e._v(e._s(e.errors.first("dsa")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.date,expression:"report.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.report.date},on:{input:function(t){t.target.composing||e.$set(e.report,"date",t.target.value)}}}),e._v(" "),e.errors.first("date")?r("small",[e._v(e._s(e.errors.first("date")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Number of forms registered on portal")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.number_on_portal,expression:"report.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.report.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.report,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("number_on_portal")?r("small",[e._v(e._s(e.errors.first("number_on_portal")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Number of forms submitted too captain")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.number_to_captain,expression:"report.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.report.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.report,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("number_to_captain")?r("small",[e._v(e._s(e.errors.first("number_to_captain")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.report.remark,expression:"report.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"3",name:"remark"},domProps:{value:e.report.remark},on:{input:function(t){t.target.composing||e.$set(e.report,"remark",t.target.value)}}}),e._v(" "),e.errors.first("remark")?r("small",[e._v(e._s(e.errors.first("remark")))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4"},[r("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n               Log Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[t("h6",[this._v("Daily Report (Captains)")])])}]}},Mb2S:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=r("TOoT"),s=(a=o)&&a.__esModule?a:{default:a},n=r("uD8u");t.default={data:function(){return{users:null,report:null}},methods:{initForm:function(){this.report={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},submitReport:function(){var e=this;this.$validator.validateAll().then(function(t){t&&(e.$network()?(e.$LIPS(!0),(0,n.post)("/api/dsa_daily_registration",e.report).then(function(t){document.getElementById("dsaDailyReportForm").reset(),e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),t.data.submitted&&s.default.setSuccess(t.data.message)}).catch(function(){return s.default.setError("Error logging report please try again later!")})):e.$networkErr()),t||e.$networkErr("form")})}},created:function(){var e=this;this.initForm(),(0,n.get)("/api/user/getBranchUsers").then(function(t){return e.users=t.data.DSAs})},watch:{}}},UorG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=r("oPea"),s=(a=o)&&a.__esModule?a:{default:a},n=r("N71M"),i=r("uD8u");t.default={components:{DailyReport:s.default},beforeCreate:function(){this.$store.getters.verifyDSACaptain||this.$networkErr("page"),this.$prepareBranches()},data:function(){return{types:[{name:"sales report",slug:"sales_report"},{name:"score card",slug:"score_card"},{name:"weekly operations",slug:"weekly_operations"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""}}},created:function(){this.setDates()},methods:{generateReport:function(){var e=this;this.$validator.validateAll().then(function(t){if(t)if(e.$network()){var r=n.store.state.branches.find(function(t){return t.id===e.report.branch.id});e.report.branch=r,(0,i.postD)("/api/report",e.report).then(function(t){var a=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=a,o.setAttribute("download",e.report.type+"_for_"+r.name+".xlsx"),document.body.appendChild(o),o.click()})}else e.$networkErr();t||e.$networkErr("form")})},setDates:function(){var e=function(e){return e<10?"0"+e:e},t=function(t){return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())},r=new Date,a=r.getDay(),o=r.getDate()-a+(0===a?-6:1),s=new Date(r.setDate(o)),n=new Date;n.setDate(s.getDate()+5),this.report.from=s=t(s),this.report.to=n=t(n)}}}},fVHq:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[e.$store.getters.verifyDSALead?r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[r("h6",[e._v("Report Generation")])]),e._v(" "),r("div",{staticClass:"card-body px-4"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[r("div",{staticClass:"my-4 clearfix"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Report Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){return r("option",{domProps:{value:t.slug}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("report_type")?r("small",[e._v("\n                        "+e._s(e.errors.first("report_type"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"office branch",name:"branch_id","data-vv-validate-on":"blur"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.state.branches,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                           "+e._s(t.name)+"\n                        ")])})],2),e._v(" "),e.errors.first("branch_id")?r("small",[e._v("\n                        "+e._s(e.errors.first("branch_id"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date from:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{type:"date","data-vv-as":"Date from",name:"date_from"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("date_from")?r("small",[e._v("\n                        "+e._s(e.errors.first("date_from"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date To:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{type:"date","data-vv-as":"Date to",name:"date_to"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("date_to")?r("small",[e._v("\n                        "+e._s(e.errors.first("date_to"))+"\n                     ")]):e._e()])]),e._v(" "),r("div",{staticClass:"col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4"},[r("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{type:"submit",disabled:e.$isProcessing}},[e._v("\n                     Generate Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]):e._e(),e._v(" "),e.$store.getters.verifyDSACaptain?r("daily-report"):e._e()],1)])},staticRenderFns:[]}},khuM:function(e,t,r){var a=r("VU/8")(r("UorG"),r("fVHq"),!1,null,null,null);e.exports=a.exports},oPea:function(e,t,r){var a=r("VU/8")(r("Mb2S"),r("2tpd"),!1,null,null,null);e.exports=a.exports}});
>>>>>>> 592c4ccc33c040d78da2c20bf08dc4e818f089b9
