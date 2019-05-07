webpackJsonp([32],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/caution/index.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiLink = function apiLink(to) {
    return "/caution" + (to.query.page ? '?page=' + to.query.page : '');
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

exports.default = {
    data: function data() {
        return {
            show: false,
            caution: null,
            cautions: {},
            columns: [{ name: 'Employee', col: 4 }, { name: 'Issued by', col: 3 }, { name: 'Reason', col: 2 }, { name: 'Penalty', col: 2 }, { name: 'Date', col: 1 }]
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)("/api" + apiLink(to)).then(function (res) {
            next(function (vm) {
                return vm.prepareForm(res.data);
            });
            console.log(res.data);
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
        fetch: function fetch() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this2.$network()) {
                        _this2.$router.push("/hrm" + apiLink(_this2.query));
                    } else _this2.$networkErr();
                } else _this2.$networkErr('form');
            });
        },
        prepareForm: function prepareForm(data) {
            if (data.cautions.data.length < 1 && data.cautions.total !== 0) this.$router.push({ query: { page: data.cautions.last_page } });
            if (data.cautions.data.length) {
                _vue2.default.set(this.$data, 'cautions', data.cautions);
                this.show = true;
            }
            this.$LIPS(false);
        },
        handleErr: function handleErr(e) {
            _flash2.default.setError('Error Fetching Cautions');
        },
        displayInfo: function displayInfo(caution) {
            _vue2.default.set(this.$data, 'caution', caution);
            return $("#view-caution").modal('toggle');
        }
    },
    updated: function updated() {
        var _this3 = this;

        $('[data-toggle="tooltip"]').tooltip({ boundary: 'window', html: true });
        $(document).on("hidden.bs.modal", '.modal', function () {
            return _this3.caution = '';
        });
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42f2c96b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/caution/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
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
              _c("span", { staticClass: "title" }, [
                _vm._v("Caution Register")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row justify-content-end" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "text-link mt-3",
                      attrs: { to: "caution/create" }
                    },
                    [_vm._v("click here to send caution a staff!")]
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.show
          ? _c(
              "div",
              { staticClass: "mt-5 row attendance-head mb-4" },
              _vm._l(_vm.columns, function(capt) {
                return _c("div", { class: "col-" + capt.col }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "light-heading" }, [
                      _c("span", { staticClass: "d-none d-sm-inline" }),
                      _vm._v(" " + _vm._s(capt.name))
                    ])
                  ])
                ])
              })
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "mt-1 attendance-body" }, [
          _vm.show
            ? _c(
                "div",
                [
                  _vm._l(_vm.cautions.data, function(caution, index) {
                    return _c(
                      "div",
                      {
                        staticClass:
                          "mb-3 px-0 row align-items-center attendance-item",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: "click on here to view full details!"
                        },
                        on: {
                          click: function($event) {
                            _vm.displayInfo(caution)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-12 col-xs-4 col-md-4 col-lg-4" },
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
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              index +
                                                1 +
                                                (_vm.cautions.current_page -
                                                  1) *
                                                  10
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _c("span", { staticClass: "user-name" }, [
                                    _vm._v(_vm._s(caution.user.full_name))
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-xs-3 col-md-3 col-lg-3" },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("span", [
                                _vm._v(_vm._s(caution.issuer.full_name))
                              ])
                            ])
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
                            _c("div", { staticClass: "row" }, [
                              _c("span", [_vm._v(_vm._s(caution.reason_min))])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4 sm-hide"
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("span", [_vm._v(_vm._s(caution.penalty_min))])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-6 col-xs-1 col-md-1 col-lg-1 pl-3 py-4 py-sm-0"
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("span", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(caution.date_text) +
                                    "\n                            "
                                )
                              ])
                            ])
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
                      _c("div", { staticClass: "w-100 mb-4 mt-5 mx-0 hr" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix w-100 mt-4" }, [
                        _c("div", { staticClass: "float-left" }, [
                          _c(
                            "strong",
                            { staticClass: "light-heading float-left" },
                            [
                              _vm._v(
                                "\n                                Displaying: " +
                                  _vm._s(_vm.cautions.from) +
                                  " - " +
                                  _vm._s(_vm.cautions.to) +
                                  " of " +
                                  _vm._s(_vm.cautions.total) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "nav",
                          {
                            staticClass: "float-right",
                            attrs: { "aria-label": "Page navigation example" }
                          },
                          [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "pagination pagination-lg float-left"
                              },
                              [
                                _c(
                                  "li",
                                  {
                                    staticClass: "page-item",
                                    class: !_vm.cautions.first_page_url
                                      ? "disabled"
                                      : ""
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "page-link",
                                        attrs: { to: { query: { page: 1 } } }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        First\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "page-item",
                                    class: !_vm.cautions.prev_page_url
                                      ? "disabled"
                                      : ""
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "page-link",
                                        attrs: {
                                          to: {
                                            query: {
                                              page:
                                                _vm.cautions.current_page - 1
                                            }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Previous\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("li", { staticClass: "page-item" }, [
                                  _c("span", { staticClass: "page-link" }, [
                                    _vm._v(
                                      "Current Page: " +
                                        _vm._s(_vm.cautions.current_page)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "page-item",
                                    class: !_vm.cautions.next_page_url
                                      ? "disabled"
                                      : ""
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "page-link",
                                        attrs: {
                                          to: {
                                            query: {
                                              page:
                                                _vm.cautions.current_page + 1
                                            }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Next\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "page-item",
                                    class: !_vm.cautions.last_page_url
                                      ? "disabled"
                                      : ""
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "page-link",
                                        attrs: {
                                          to: {
                                            query: {
                                              page: _vm.cautions.last_page
                                            }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Last\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ],
                2
              )
            : _c("div", { staticClass: "row attendance-item p-5 mb-5" }, [
                _c("span", { staticClass: "no-attendance" }, [
                  _vm._v("No cautions has been issued!")
                ])
              ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "view-caution" } },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header py-2" }, [
                    _c("h6", { staticClass: "modal-title py-1" }, [
                      _vm._v("Caution")
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
                      _vm.caution
                        ? _c("div", { staticClass: "px-2" }, [
                            _c("div", { staticClass: "px-4" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Employee : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(_vm._s(_vm.caution.user.full_name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Issued by : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(_vm._s(_vm.caution.issuer.full_name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Reason : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(_vm._s(_vm.caution.reason))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Penalty : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(_vm._s(_vm.caution.penalty))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [_c("strong", [_vm._v("Date : ")])]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(_vm._s(_vm.caution.date_text))
                                ])
                              ])
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-link mt-3 w-100",
                          staticStyle: { "text-align": "right" },
                          attrs: {
                            "data-dismiss": "modal",
                            href: "javascript:"
                          }
                        },
                        [_vm._v("close dialogue")]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-42f2c96b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/HRM/caution/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/caution/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42f2c96b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/caution/index.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\caution\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42f2c96b", Component.options)
  } else {
    hotAPI.reload("data-v-42f2c96b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});