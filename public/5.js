<<<<<<< HEAD
webpackJsonp([5,20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue":
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

exports.default = {
    /*router navigation is used in the entire app for in app navigation (basically previous and next)
    * the : pageTitle is the title of the page where this navigation component is used
    * the : pageTitleSmall is the minimized title for the small screen view
    * the previous is the this.$routerHistory.previous().path sent from the parent component
    * the forward is the this.$routerHistory.next().path sent from the parent component*/
    props: ['pageTitle', 'pageTitleSmall', 'previous', 'forward']
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerList.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataViewer = __webpack_require__("./resources/assets/js/components/DataViewer.vue");

var _DataViewer2 = _interopRequireDefault(_DataViewer);

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

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

exports.default = {
    components: { DataViewer: _DataViewer2.default, AppNavigation: _AppNavigation2.default }
};

/***/ }),

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Not the css is included in this component to reduce\n* the size of the main css file because\n* the components are lazy loaded*/\n#index a#back {\n  left: 0;\n}\n#index a#forward {\n  right: 0;\n}\n#index a#back, #index a#forward {\n  margin-top: .8rem;\n  position: absolute;\n}\n#index a#back i, #index a#forward i {\n    font-size: 2.4rem;\n}\n#index .forward, #index .back {\n  line-height: 2.4rem;\n  margin-top: -.2rem;\n  font-weight: bold;\n}\n@media (max-width: 990px) {\n#index a#back i, #index a#forward i {\n    font-size: 2.6rem;\n}\n}\n@media (max-width: 600px) {\n#index a#back, #index a#forward, #index [data-title=\"title\"] {\n    margin-top: -.3rem;\n    margin-bottom: .3rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "h4",
    {
      staticClass: "mx-md-3 mx-0 py-0 my-0 text-center clearfix",
      attrs: { id: "index" }
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
                  { staticClass: "back float-left ml-2 d-none d-sm-block" },
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
            _vm._v(_vm._s(_vm.pageTitle) + " Portal")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "d-block d-sm-none" }, [
            _vm._v(_vm._s(_vm.pageTitleSmall) + " Portal")
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
                  { staticClass: "forward float-right mr-2 d-none d-sm-block" },
                  [_vm._v("Forward")]
                )
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f542aae", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c2d112da\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "px-md-4 px-2" },
      [
        _c("app-navigation", {
          attrs: {
            pageTitle: "General Customer List",
            pageTitleSmall: "Customers",
            previous: { path: _vm.$routerHistory.previous().path },
            forward: { path: _vm.$routerHistory.next().path }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "float-left w-100 pt-md-3 pt-2 clearfix",
            attrs: { id: "index" }
          },
          [
            _c(
              "div",
              { staticClass: "card" },
              [
                _c(
                  "ul",
                  {
                    staticClass:
                      "nav nav-tabs justify-content-center bg-default"
                  },
                  [_c("h6", [_vm._v("Customer List")])]
                ),
                _vm._v(" "),
                _c("data-viewer", {
                  attrs: {
                    source: "/api/customer",
                    title: "Customer Data",
                    appModel: "customer"
                  }
                })
              ],
              1
            )
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-c2d112da", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("25e038e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavigation.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\AppNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f542aae", Component.options)
  } else {
    hotAPI.reload("data-v-2f542aae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/CustomerList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c2d112da\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerList.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\CustomerList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2d112da", Component.options)
  } else {
    hotAPI.reload("data-v-c2d112da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ })

});
=======
webpackJsonp([5],{A7oB:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r("Xxa5")),o=i(r("Bph5")),a=r("uD8u"),s=i(r("TOoT"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{contacts:"",sentData:{},form:{}}},methods:{sendMessage:function(){var t,e,r=this;this.$validator.validateAll().then((t=n.default.mark(function t(e){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e?r.$network()?(r.$LIPS(!0),(a=r.contacts.split(",").filter(function(t){return/\S/.test(t)})).forEach(function(t){r.sentData.phone=t.trim().substr(1),o.default.dvaMessage(r.sentData)}),r.done(a)):r.$networkErr():r.$networkErr("form");case 1:case"end":return t.stop()}},t,r)}),e=function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,a){try{var s=e[o](a),i=s.value}catch(t){return void r(t)}if(!s.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}("next")})},function(t){return e.apply(this,arguments)}))},done:function(t){var e=this;this.$LIPS(!1),s.default.setSuccess("Messages sent!"),this.form.contacts=t,this.form.contact_count=t.length,this.form.message=this.sentData.message,this.form.pages=Math.ceil(this.form.message.length/160),this.form.message.length%160>0&&(this.form.pages+=1),(0,a.post)("/api/message",this.form).then(function(){return e.resetData()})},resetData:function(){this.contacts="",this.sentData={message:"",phone:""},this.form={pages:0,user_id:"",message:"",contacts:[],contact_count:0}}},created:function(){this.resetData()}}},Bph5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("uD8u");e.default={message:"",welcome:function(t){this.message="Welcome to Altara credit. Please secure your login details. Staff ID: "+t.loginID+", password: "+t.loginPassword,this.send(t)},customerReg:function(t){this.message="Dear "+t.first_name+" "+t.last_name+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+t.branch.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: "+t.branch.phone_yoruba+". Your customer id is: "+t.id,this.send({phone:t.telephone.substr(1)})},passwordReset:function(t){this.message="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+t.staff_id+", new password: "+t.password,this.send(t)},dvaMessage:function(t){this.message=t.message,this.send(t)},send:function(t){console.log(t),(0,n.get)("/api/message/create?to=234"+t.phone+"&message="+this.message).then(function(t){1===JSON.parse(t.data).messages[0].status.groupId&&console.log("sms sent successfully")})}}},DF3R:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"#messaging textarea[data-v-707e8d9d]{font:500 1.5rem Raleway,sans-serif}",""])},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var f="suspendedStart",h="suspendedYield",d="executing",m="completed",p={},g={};g[s]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==n&&o.call(y,s)&&(g=y);var w=E.prototype=_.prototype=Object.create(g);L.prototype=w.constructor=E,E.constructor=L,E[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},P(D.prototype),D.prototype[i]=function(){return this},l.AsyncIterator=D,l.async=function(t,e,r,n){var o=new D(x(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},P(w),w[c]="Generator",w[s]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return i.type="throw",i.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),u=o.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function x(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),s=new R(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=j(s,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=b(t,e,r);if("normal"===c.type){if(n=r.done?m:h,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}(t,r,s),a}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function E(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function D(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,s){var i=b(t[r],t,n);if("throw"!==i.type){var c=i.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,s)},function(t){e("throw",t,a,s)}):Promise.resolve(u).then(function(t){c.value=t,a(c)},s)}s(i.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},bZ5I:function(t,e,r){var n=r("VU/8")(r("A7oB"),r("seBZ"),!1,function(t){r("x05e")},"data-v-707e8d9d",null);t.exports=n.exports},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},seBZ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[r("h6",[t._v("Messaging")])]),t._v(" "),r("div",{staticClass:"card-body p-4 "},[r("form",{staticClass:"clearfix",attrs:{id:"messaging"},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[r("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[r("label",[t._v("Phone Numbers")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contacts,expression:"contacts"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-12",attrs:{name:"contacts",placeholder:"Kindly add the number and seperate each with a semi-colon ';'",rows:"3"},domProps:{value:t.contacts},on:{input:function(e){e.target.composing||(t.contacts=e.target.value)}}}),t._v(" "),t.errors.first("contacts")?r("small",[t._v(t._s(t.errors.first("contacts")))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[r("label",[t._v("Message Body")]),t._v(" "),r("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.sentData.message,expression:"sentData.message"}],staticClass:"form-control col-sm-12",attrs:{name:"message",placeholder:"the content of the message goes here",rows:"3"},domProps:{value:t.sentData.message},on:{input:function(e){e.target.composing||t.$set(t.sentData,"message",e.target.value)}}}),t._v(" "),t.errors.first("message")?r("small",[t._v(t._s(t.errors.first("message")))]):t._e()]),t._v(" "),r("hr",{staticClass:"style-two"}),t._v(" "),r("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[r("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                     Send messages "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[]}},x05e:function(t,e,r){var n=r("DF3R");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("65f25e9d",n,!0,{})}});
>>>>>>> 592c4ccc33c040d78da2c20bf08dc4e818f089b9
