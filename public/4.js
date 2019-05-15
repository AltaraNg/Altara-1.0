webpackJsonp([4],{

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

var _helpers = __webpack_require__("./resources/assets/js/helpers/helpers.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: { AppNavigation: _AppNavigation2.default },

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
        this.$prepareBranches();
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
                if (data.length) {
                    data.forEach(function (curr) {
                        if (data[0].state_id) curr.state_id = _this.$store.getters.getStates.find(function (obj) {
                            return obj.id === curr.state_id;
                        }).name;
                        if (data[0].branch_id) curr.branch_id = _this.$store.getters.getBranches.find(function (obj) {
                            return obj.id === curr.branch_id;
                        }).name;
                        if (_this.isModel('customer')) curr.verification = (0, _helpers.getCustomerApprovalStatus)(curr.verification);
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
        },

        /*methods exclusive to hrm data viewer stops here*/

        isModel: function isModel(m) {
            return this.$route.meta.appModel === m;
        }
    } /*,
      computed: {
         isModel(m)2 {
             return this.$route.meta.appModel === m;
         },
           user() {
             return this.$route.meta.appModel === 'user'
         },
         branch() {
             return this.$route.meta.appModel === 'branch'
         },
         customer() {
             return this.$route.meta.appModel === 'customer'
         },
         supplier() {
             return this.$route.meta.appModel === 'supplier'
         },
         product() {
             return this.$route.meta.appModel === 'product'
         },
         brand() {
             return this.$route.meta.appModel === 'brand'
         },
         category() {
             return this.$route.meta.appModel === 'category'
         },
      },*/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Not the css is included in this component to reduce\n* the size of the main css file because\n* the components are lazy loaded*/\n#index a#back {\n  left: 0;\n}\n#index a#forward {\n  right: 0;\n}\n#index a#back, #index a#forward {\n  margin-top: .8rem;\n  position: absolute;\n}\n#index a#back i, #index a#forward i {\n    font-size: 1.76rem;\n}\n#index .forward, #index .back {\n  line-height: 2.4rem;\n  margin-top: -.2rem;\n  font-weight: bold;\n}\n@media (max-width: 990px) {\n#index a#back i, #index a#forward i {\n    font-size: 1.92rem;\n}\n}\n@media (max-width: 600px) {\n#index a#back, #index a#forward, #index [data-title=\"title\"] {\n    margin-top: -.3rem;\n    margin-bottom: .3rem;\n}\n}\n", ""]);

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
    _c(
      "div",
      { class: _vm.isModel("customer") ? "px-md-4 px-2" : "" },
      [
        _vm.isModel("customer")
          ? _c("app-navigation", {
              attrs: {
                forward: { path: _vm.$routerHistory.next().path },
                pageTitle: _vm._f("capitalize")(
                  _vm.$route.meta.appModel + " List"
                ),
                previous: { path: _vm.$routerHistory.previous().path },
                pageTitleSmall: _vm._f("capitalize")(
                  _vm.$route.meta.appModel + ". List"
                )
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "pt-md-3 pt-2", attrs: { id: "employeeEdit" } },
          [
            _c(
              "div",
              {
                staticClass: "card",
                staticStyle: {
                  "border-top": "3px solid #0e5f92",
                  "border-radius": ".2rem .2rem .4rem .4rem"
                }
              },
              [
                _c("div", { staticClass: "px-5 py-4" }, [
                  _c(
                    "div",
                    { staticClass: "px-3 clearfix" },
                    [
                      _c("h5", { staticClass: "h5-custom float-left m-0" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("capitalize")(_vm.$route.meta.appModel)
                          ) + " Management"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "float-right btn btn-primary bg-default m-0",
                          attrs: { to: _vm.$route.meta.new + "/create" }
                        },
                        [
                          _vm._v(
                            "\n                            Add " +
                              _vm._s(_vm.$route.meta.appModel) +
                              "!\n                        "
                          )
                        ]
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                              return _c(
                                "option",
                                { domProps: { value: column } },
                                [_vm._v(_vm._s(_vm._f("capitalize")(column)))]
                              )
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                              return _c(
                                "option",
                                { domProps: { value: key } },
                                [_vm._v(_vm._s(value))]
                              )
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
                    _c(
                      "div",
                      { staticClass: "px-0 px-md-3 mt-3 table-responsive" },
                      [
                        _c(
                          "table",
                          {
                            staticClass: "table m-0  table-bordered table-hover"
                          },
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
                                          _vm._v(
                                            _vm._s(_vm._f("capitalize")(column))
                                          )
                                        ]),
                                        _vm._v(" "),
                                        column === _vm.query.column
                                          ? _c(
                                              "span",
                                              {
                                                staticClass: "dv-table-column"
                                              },
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
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _c("span", [_vm._v("Action")])
                                  ])
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
                                      return _c(
                                        "td",
                                        [
                                          key !== "verification"
                                            ? _c("span", [
                                                _vm._v(_vm._s(value))
                                              ])
                                            : _c(
                                                "router-link",
                                                {
                                                  class:
                                                    "status mx-auto status-sm shadow-sm " +
                                                    (value
                                                      ? "approved"
                                                      : "not-approved"),
                                                  attrs: {
                                                    to: _vm.$store.getters.auth(
                                                      "DVAAccess"
                                                    )
                                                      ? "dva/verification?id=" +
                                                        model.id
                                                      : ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        value
                                                          ? "APPROVED"
                                                          : "NOT APPROVED"
                                                      ) +
                                                      "\n                                            "
                                                  ),
                                                  _c("i", {
                                                    class:
                                                      "ml-3 fas fa-" +
                                                      (value
                                                        ? "check"
                                                        : "times")
                                                  })
                                                ]
                                              )
                                        ],
                                        1
                                      )
                                    }),
                                    _vm._v(" "),
                                    _vm.isModel("user")
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
                                                    "employee/" +
                                                    model.id +
                                                    "/edit",
                                                  "data-placement": "top",
                                                  "data-toggle": "tooltip",
                                                  title: "Edit Employee Detail"
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-user-edit"
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
                                                  title:
                                                    "Edit Employee Portal Access"
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
                                                _vm.accessStatus(
                                                  model.portal_access
                                                )
                                                  ? _c("i", {
                                                      staticClass:
                                                        "fas fa-lock-open"
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
                                                  title:
                                                    "Reset Employee Password"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.update(
                                                      model,
                                                      "editPassword"
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-key"
                                                })
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.isModel("branch") ||
                                    _vm.isModel("product") ||
                                    _vm.isModel("brand") ||
                                    _vm.isModel("category") ||
                                    _vm.isModel("supplier")
                                      ? _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",
                                              attrs: {
                                                "data-placement": "top",
                                                "data-toggle": "tooltip",
                                                title: "update details"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.$router.push(
                                                    _vm.$route.meta.new +
                                                      "/" +
                                                      model.id +
                                                      "/edit"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-cog"
                                              })
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
                      ]
                    ),
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
                              "\n                                Displaying: " +
                                _vm._s(_vm.model.from) +
                                " - " +
                                _vm._s(_vm.model.to) +
                                " of " +
                                _vm._s(_vm.model.total) +
                                " " +
                                _vm._s(
                                  _vm._f("capitalize")(_vm.$route.meta.appModel)
                                ) +
                                " (s)\n                            "
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
                            _c(
                              "ul",
                              { staticClass: "pagination m-0 float-right" },
                              [
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
                                      "Current Page: " +
                                        _vm._s(_vm.model.current_page)
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
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-left" }, [
                              _c(
                                "span",
                                { staticClass: "py-2 pr-3 float-left" },
                                [_vm._v("Rows Per Page ")]
                              ),
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
                                staticClass: "form-control w-25",
                                attrs: {
                                  placeholder: "search...",
                                  type: "text"
                                },
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
                    {
                      staticClass: "modal fade",
                      attrs: { id: "editPortalAccess" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-dialog",
                          attrs: { role: "document" }
                        },
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
                                          "mb-2 w-100 float-left pl-1 text-center"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                               Please Verify you selected the right access before clicking "
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("strong", [_vm._v("Save Changes ")]),
                                        _vm._v(
                                          "!\n                                            "
                                        )
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
                                                  _vm._f("capitalize")(
                                                    access.name
                                                  )
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
                                    attrs: {
                                      "data-dismiss": "modal",
                                      type: "button"
                                    }
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
                    {
                      staticClass: "modal fade",
                      attrs: { id: "editPassword" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-dialog",
                          attrs: { role: "document" }
                        },
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
                                        " on the\n                                                  telephone He/She "
                                      ),
                                      _c("strong", [
                                        _vm._v("used for registration")
                                      ]),
                                      _vm._v(
                                        " on this portal.\n                                                "
                                      ),
                                      _c("br"),
                                      _c("br"),
                                      _vm._v(
                                        "Please Kindly verify that the phone to receive the new password is on and active!\n                                            "
                                      )
                                    ]),
                                    _vm._v(" "),
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
                                    attrs: {
                                      "data-dismiss": "modal",
                                      type: "button"
                                    }
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
                                      "\n                                            continue and reset password "
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
    require("vue-hot-reload-api")      .rerender("data-v-53eb4313", module.exports)
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

/***/ "./resources/assets/js/helpers/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//cus stands for customer
//ver stands for verification
var getCustomerApprovalStatus = exports.getCustomerApprovalStatus = function getCustomerApprovalStatus(ver) {
    return !!ver ? ver.address && ver.id_card && ver.passport && ver.processing_fee && ver.work_guarantor && ver.personal_guarantor : false;
};
var getCustomerFullName = exports.getCustomerFullName = function getCustomerFullName(cus) {
    return cus.first_name + " " + cus.last_name;
};
var getCustomerAddress = exports.getCustomerAddress = function getCustomerAddress(cus) {
    return cus.add_houseno + " " + cus.add_street + " " + cus.area_address + ", " + cus.city + ", " + cus.state + ".";
};

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
exports.Message = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = exports.Message = function () {
    function Message(userId, message, contacts) {
        _classCallCheck(this, Message);

        this.user_id = userId;
        this.message = message;
        this.contacts = contacts;
        this.setPages();
        this.setContactCount();
    }

    _createClass(Message, [{
        key: "setContactCount",
        value: function setContactCount() {
            if (this.contacts.constructor === String) this.contact_count = this.contacts.split(',').length;
            if (this.contacts.constructor === Array) this.contact_count = this.contacts.length;
        }
    }, {
        key: "setPages",
        value: function setPages() {
            this.pages = Math.ceil(this.message.length / 160);
        }
    }]);

    return Message;
}();

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
    transfer: function transfer(details) {
        this.message = "Transfer Successful, your new staff ID is " + details.loginID + " ";
        this.send(details);
    },
    dvaMessage: function dvaMessage(details, callback) {
        this.message = details.message;
        this.sendWithCallback(details, callback);
    },


    /*sendFirstReminder(details, callback) {
        this.message = "Thanks for patronizing us. lol its working";
        details.contacts = details.SMSContactList.join(',');
        delete details.SMSContactList;
        return this.sendWithCallback(details, callback);
    },*/

    sendFirstReminder: function sendFirstReminder(details, callback) {
        this.message = details.message;
        return this.sendWithCallback(details, callback);
    },
    sendWithCallback: function sendWithCallback(_ref, callback) {
        var phone = _ref.phone;

        (0, _api.get)("/api/message/create?to=" + phone + "&message=" + this.message).then(function (res) {
            res.status === 200 && console.log("sms sent successfully");
            return !!callback && callback(res);
        }).catch(function (err) {
            return !!callback && callback(err);
        });
    },
    send: function send(details) {
        (0, _api.get)("/api/message/create?to=234" + details.phone + "&message=" + this.message).then(function (res) {
            res.status === 200 && console.log("sms sent successfully");
        });
    }
};

/***/ })

});