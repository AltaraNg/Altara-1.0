<<<<<<< HEAD
webpackJsonp([3],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _eventBus = __webpack_require__("./resources/assets/js/helpers/event-bus.js");

var _CustomerProfile = __webpack_require__("./resources/assets/js/components/CustomerProfile.vue");

var _CustomerProfile2 = _interopRequireDefault(_CustomerProfile);

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

var _helpers = __webpack_require__("./resources/assets/js/helpers/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DVA = function DVA() {
    return _store.store.getters.auth('DVAAccess');
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

exports.default = {
    props: ['viewCustomer'],
    components: { CustomerProfile: _CustomerProfile2.default, AppNavigation: _AppNavigation2.default },
    data: function data() {
        return {
            customer: '',
            show: false
        };
    },

    computed: {
        passport: function passport() {
            return 'https://s3.eu-west-2.amazonaws.com/altara-one/' + this.customer.document.passport_url;
        },
        name: function name() {
            return (0, _helpers.getCustomerFullName)(this.customer);
        },
        branch: function branch() {
            return this.customer.branch.description + ' ' + this.customer.branch.name;
        },
        address: function address() {
            return (0, _helpers.getCustomerAddress)(this.customer);
        },
        approved: function approved() {
            return (0, _helpers.getCustomerApprovalStatus)(this.customer.verification);
        }
    },
    created: function created() {
        var _this = this;

        $('.tooltip').remove();
        if (this.viewCustomer) this.setCustomer(this.viewCustomer);
        _eventBus.EventBus.$on('customer', function (customer) {
            _this.setCustomer(customer);
        });
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (DVA()) {
            (0, _api.get)('/api/customer/' + to.params.id).then(function (res) {
                next(function (vm) {
                    return vm.setCustomer(res.data.customer);
                });
            });
        } else next('/');
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this2 = this;

        if (DVA()) {
            (0, _api.get)('/api/customer/' + to.params.id).then(function (res) {
                _this2.setCustomer(res.data.customer);
                next();
            });
        } else next('/');
    },

    methods: {
        setCustomer: function setCustomer(customer) {
            _vue2.default.set(this.$data, 'customer', customer);
            this.show = true;
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Not the css is included in this component to reduce\n* the size of the main css file because\n* the components are lazy loaded*/\n#index a#back {\n  left: 0;\n}\n#index a#forward {\n  right: 0;\n}\n#index a#back, #index a#forward {\n  margin-top: .8rem;\n  position: absolute;\n}\n#index a#back i, #index a#forward i {\n    font-size: 1.76rem;\n}\n#index .forward, #index .back {\n  line-height: 2.4rem;\n  margin-top: -.2rem;\n  font-weight: bold;\n}\n@media (max-width: 990px) {\n#index a#back i, #index a#forward i {\n    font-size: 1.92rem;\n}\n}\n@media (max-width: 600px) {\n#index a#back, #index a#forward, #index [data-title=\"title\"] {\n    margin-top: -.3rem;\n    margin-bottom: .3rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4889778\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.customer-profile {\n  position: relative;\n}\n.customer-profile th {\n    width: auto;\n    font-weight: normal;\n}\n.customer-profile td, .customer-profile .data {\n    font-size: 1.3rem;\n    font-weight: 500;\n}\n.customer-profile .design {\n    position: absolute;\n    top: 13rem;\n    bottom: 0;\n    left: 0;\n    width: 101%;\n    height: calc(100% - 8.1rem);\n    z-index: 0;\n    background: linear-gradient(45deg, #dedede 0%, #ffffff 100%);\n}\n.customer-profile .profile-picture, .customer-profile .no-image {\n    height: 16rem;\n    width: 16rem;\n    -webkit-box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n}\n.customer-profile .no-image {\n    background-color: #e3e3e3;\n    border-radius: 50%;\n    line-height: 16rem;\n    text-align: center;\n    font-size: 8rem;\n    color: rgba(0, 0, 0, 0.15);\n}\n.customer-profile .img-border {\n    padding: 1.1rem;\n    background-color: white;\n    border-radius: 50%;\n}\n.customer-profile .separator {\n    position: absolute;\n    left: 50%;\n    height: 70%;\n    width: 1px;\n    background-color: rgba(0, 0, 0, 0.1);\n    top: 3%;\n}\n@media (max-width: 600px) {\n.customer-profile .design {\n    background: -webkit-gradient(linear, left top, left bottom, from(#dedede), to(#ffffff));\n    background: linear-gradient(180deg, #dedede 0%, #ffffff 100%);\n}\n.customer-profile .separator {\n    top: -11%;\n}\n.customer-profile .small-center {\n    text-align: center;\n}\n.customer-profile th {\n    width: 35%;\n}\n.customer-profile tbody {\n    padding: 1rem 1rem 0;\n    float: left;\n}\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f4889778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { class: _vm.$route.meta.mode === "full" ? "px-md-4 px-2" : "" },
      [
        _vm.$route.meta.mode === "full"
          ? _c("app-navigation", {
              attrs: {
                forward: { path: _vm.$routerHistory.next().path },
                pageTitle: "Customer Profile",
                pageTitleSmall: "Customer Profile",
                previous: { path: _vm.$routerHistory.previous().path }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.show
          ? _c(
              "div",
              {
                staticClass: "pt-md-3 pt-2 verification",
                attrs: { id: "employeeRegister" }
              },
              [
                _c(
                  "div",
                  { staticClass: "customer-profile card position-relative" },
                  [
                    _c("div", { staticClass: "design" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"
                      },
                      [
                        _c("div", { staticClass: "pt-md-3 pt-sm-2 pt-1" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "justify-content-center d-flex position-relative z-1"
                            },
                            [
                              _c("span", { staticClass: "img-border" }, [
                                _vm.customer.document.passport_url
                                  ? _c("img", {
                                      staticClass:
                                        "profile-picture rounded-circle",
                                      attrs: {
                                        src: _vm.passport,
                                        alt: "customer profile pic"
                                      }
                                    })
                                  : _c("i", {
                                      staticClass: "no-image fas fa-user-alt"
                                    })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"
                            },
                            [
                              _c("span", { staticClass: "w-50" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "text-right px-4 py-3 text-light text-muted m-0"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Status"
                                    ),
                                    _c("i", {
                                      staticClass: "ml-3 fas fa-briefcase"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "data text-right px-4 py-3 m-0"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.customer.employment_status
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "separator" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "w-50" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "px-4 py-3 text-muted text-light m-0"
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "mr-3 fas fa-transgender"
                                    }),
                                    _vm._v(
                                      "Gender\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "data px-4 py-3 m-0" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.customer.gender
                                        )
                                      )
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"
                      },
                      [
                        _c("div", { staticClass: "pt-md-4 pt-0 clearfix" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "float-left p-0 m-0 col-md-4 col-sm-6 small-center"
                            },
                            [
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"
                                },
                                [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-user-circle"
                                  }),
                                  _vm._v(" "),
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(_vm._f("capitalize")(_vm.name))
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
                                "float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"
                            },
                            [
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"
                                },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      "Customer ID: " + _vm._s(_vm.customer.id)
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
                                "float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"
                            },
                            [
                              _c(
                                "span",
                                {
                                  class:
                                    "status mt-md-5 my-sm-2 mt-0 " +
                                    (_vm.approved ? "approved" : "not-approved")
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.approved
                                          ? "APPROVED"
                                          : "NOT APPROVED"
                                      ) +
                                      "\n                                "
                                  ),
                                  _c("i", {
                                    class:
                                      "ml-3 fas fa-" +
                                      (_vm.approved ? "check" : "times")
                                  })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "pt-4" }, [
                          _c("table", { staticClass: "table" }, [
                            _c("tbody", [
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 fas fa-mobile-alt"
                                  }),
                                  _vm._v("Phone Number")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.customer.telephone))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 fas fa-map-marker-alt"
                                  }),
                                  _vm._v("Address")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm._f("capitalize")(_vm.address)) +
                                      "\n                                "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", { staticClass: "mr-3 fas fa-gift" }),
                                  _vm._v("Registered On")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.customer.date_of_registration)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-user-circle"
                                  }),
                                  _vm._v("Registered By")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("capitalize")(
                                        _vm.customer.user
                                          ? _vm.customer.user.full_name
                                          : "user not in record"
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-building"
                                  }),
                                  _vm._v("Branch")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm._f("capitalize")(_vm.branch))
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.$route.meta.mode === "full"
                  ? _c("div", { staticClass: "clearfix" }, [
                      _c("div", [_vm._v("This is full profile!")])
                    ])
                  : _vm._e()
              ]
            )
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-f4889778", module.exports)
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4889778\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4889778\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/CustomerProfile.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("5217bc1d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4889778\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomerProfile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4889778\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomerProfile.vue");
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

/***/ "./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4889778\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/CustomerProfile.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f4889778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\CustomerProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4889778", Component.options)
  } else {
    hotAPI.reload("data-v-f4889778", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/helpers/event-bus.js":
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

/***/ })

});
=======
webpackJsonp([3],{"1gIg":function(t,e,s){var a=s("VU/8")(s("wBhk"),s("Nclh"),!1,function(t){s("ssUt")},null,null);t.exports=a.exports},"4I72":function(t,e,s){var a=s("VU/8")(s("WiSW"),s("F2N/"),!1,function(t){s("o+I/")},null,null);t.exports=a.exports},"F2N/":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{class:"full"===t.$route.meta.mode?"px-md-4 px-2":""},["full"===t.$route.meta.mode?s("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile",previous:{path:t.$routerHistory.previous().path}}}):t._e(),t._v(" "),t.show?s("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[s("div",{staticClass:"customer-profile card position-relative"},[s("div",{staticClass:"design"}),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[s("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[s("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[s("span",{staticClass:"img-border"},[t.customer.document.passport_url?s("img",{staticClass:"profile-picture rounded-circle",attrs:{src:t.passport,alt:"customer profile pic"}}):s("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),s("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[s("span",{staticClass:"w-50"},[s("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[t._v("\n                                    Status"),s("i",{staticClass:"ml-3 fas fa-briefcase"})]),t._v(" "),s("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),s("span",{staticClass:"separator"}),t._v(" "),s("span",{staticClass:"w-50"},[s("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[s("i",{staticClass:"mr-3 fas fa-transgender"}),t._v("Gender\n                                ")]),t._v(" "),s("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),s("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[s("div",{staticClass:"pt-md-4 pt-0 clearfix"},[s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[s("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[s("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),s("strong",[t._v(t._s(t._f("capitalize")(t.name)))])])]),t._v(" "),s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[s("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[s("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[s("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(t.approved?"approved":"not-approved")},[t._v("\n                                "+t._s(t.approved?"APPROVED":"NOT APPROVED")+"\n                                "),s("i",{class:"ml-3 fas fa-"+(t.approved?"check":"times")})])])]),t._v(" "),s("div",{staticClass:"pt-4"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-mobile-alt"}),t._v("Phone Number")]),t._v(" "),s("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),t.$store.getters.auth("DVAAccess")?s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),t._v("Address")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.address))+"\n                                ")])]):t._e(),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-gift"}),t._v("Registered On")]),t._v(" "),s("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 far fa-user-circle"}),t._v("Registered By")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.customer.user?t.customer.user.full_name:"user not in record")))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 far fa-building"}),t._v("Branch")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.branch)))])])])])])])]),t._v(" "),"full"===t.$route.meta.mode?s("div",{staticClass:"clearfix"},[s("div",[t._v("This is full profile!")])]):t._e()]):t._e()],1)])},staticRenderFns:[]}},Gsqe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var a,r=s("I3G/"),i=(a=r)&&a.__esModule?a:{default:a};e.EventBus=new i.default},Nclh:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"index"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"back float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"forward float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},V6Wk:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"#index a#back{left:0}#index a#forward{right:0}#index a#back,#index a#forward{margin-top:.8rem;position:absolute}#index a#back i,#index a#forward i{font-size:1.76rem}#index .back,#index .forward{line-height:2.4rem;margin-top:-.2rem;font-weight:700}@media (max-width:990px){#index a#back i,#index a#forward i{font-size:1.92rem}}@media (max-width:600px){#index [data-title=title],#index a#back,#index a#forward{margin-top:-.3rem;margin-bottom:.3rem}}",""])},WiSW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=d(s("I3G/")),r=s("uD8u"),i=s("N71M"),o=s("Gsqe"),l=d(s("4I72")),n=d(s("1gIg")),c=s("vtN9");function d(t){return t&&t.__esModule?t:{default:t}}var m=function(){return i.store.getters.auth("DVAAccess")};e.default={props:["viewCustomer"],components:{CustomerProfile:l.default,AppNavigation:n.default},data:function(){return{customer:"",show:!1}},computed:{passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},name:function(){return(0,c.getCustomerFullName)(this.customer)},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},address:function(){return(0,c.getCustomerAddress)(this.customer)},approved:function(){return(0,c.getCustomerApprovalStatus)(this.customer.verification)}},created:function(){var t=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),o.EventBus.$on("customer",function(e){t.setCustomer(e)})},beforeRouteEnter:function(t,e,s){m()?(0,r.get)("/api/customer/"+t.params.id).then(function(t){s(function(e){return e.setCustomer(t.data.customer)})}):s("/")},beforeRouteUpdate:function(t,e,s){var a=this;m()?(0,r.get)("/api/customer/"+t.params.id).then(function(t){a.setCustomer(t.data.customer),s()}):s("/")},methods:{setCustomer:function(t){a.default.set(this.$data,"customer",t),this.show=!0}}}},XMXm:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".customer-profile{position:relative}.customer-profile th{width:auto;font-weight:400}.customer-profile .data,.customer-profile td{font-size:1.3rem;font-weight:500}.customer-profile .design{position:absolute;top:13rem;bottom:0;left:0;width:101%;height:calc(100% - 8.1rem);z-index:0;background:linear-gradient(45deg,#dedede,#fff)}.customer-profile .no-image,.customer-profile .profile-picture{height:16rem;width:16rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2)}.customer-profile .no-image{background-color:#e3e3e3;border-radius:50%;line-height:16rem;text-align:center;font-size:8rem;color:rgba(0,0,0,.15)}.customer-profile .img-border{padding:1.1rem;background-color:#fff;border-radius:50%}.customer-profile .separator{position:absolute;left:50%;height:70%;width:1px;background-color:rgba(0,0,0,.1);top:3%}@media (max-width:600px){.customer-profile .design{background:-webkit-gradient(linear,left top,left bottom,from(#dedede),to(#fff));background:linear-gradient(180deg,#dedede,#fff)}.customer-profile .separator{top:-11%}.customer-profile .small-center{text-align:center}.customer-profile th{width:35%}.customer-profile tbody{padding:1rem 1rem 0;float:left}}",""])},"o+I/":function(t,e,s){var a=s("XMXm");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("67cc5fd8",a,!0,{})},ssUt:function(t,e,s){var a=s("V6Wk");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("05b5dcca",a,!0,{})},vtN9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getCustomerApprovalStatus=function(t){return!!t&&(t.address&&t.id_card&&t.passport&&t.processing_fee&&t.work_guarantor&&t.personal_guarantor)},e.getCustomerFullName=function(t){return t.first_name+" "+t.last_name},e.getCustomerAddress=function(t){return t.add_houseno+" "+t.add_street+" "+t.area_address+", "+t.city+", "+t.state+"."}},wBhk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 17077dc930036a1cd7516436548b49b8826470f5
