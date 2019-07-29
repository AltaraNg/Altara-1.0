<<<<<<< HEAD
webpackJsonp([20],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/caution/index.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apiLink = function apiLink(_ref) {
    var page = _ref.page;
    return "/caution" + (page ? '?page=' + page : '');
};
exports.default = {

    components: { CustomHeader: _customHeader2.default },

    data: function data() {
        return {
            show: false,
            caution: null,
            cautions: {},
            columns: [{ name: 'Employee', col: 4 }, { name: 'Issued by', col: 3 }, { name: 'Reason', col: 2 }, { name: 'Penalty', col: 2 }, { name: 'Date', col: 1 }]
        };
    },
    beforeRouteEnter: function beforeRouteEnter(_ref2, from, next) {
        var query = _ref2.query;

        (0, _api.get)("/api" + apiLink(query)).then(function (_ref3) {
            var data = _ref3.data;
            return next(function (vm) {
                return vm.prepareForm(data);
            });
        }).catch(function (err) {
            return next(function (vm) {
                return vm.handleErr(err);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(_ref4, from, next) {
        var query = _ref4.query;

        var _this = this;

        this.show = false;
        this.$LIPS(true);
        (0, _api.get)("/api" + apiLink(query)).then(function (_ref5) {
            var data = _ref5.data;

            _this.prepareForm(data);
            next();
        }).catch(function (err) {
            _this.handleErr(err);
            next();
        });
    },

    methods: {
        prepareForm: function prepareForm(_ref6) {
            var cautions = _ref6.cautions;

            if (cautions.data.length < 1 && cautions.total !== 0) this.$router.push({ query: { page: cautions.last_page } });
            if (cautions.data.length) {
                _vue2.default.set(this.$data, 'cautions', cautions);
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
        var _this2 = this;

        $('[data-toggle="tooltip"]').tooltip({ boundary: 'window', html: true });
        $(document).on("hidden.bs.modal", '.modal', function () {
            return _this2.caution = '';
        });
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42f2c96b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/caution/index.vue":
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
        _c("custom-header", {
          attrs: {
            to: "caution/create",
            title: "Caution(s) register",
            "button-title": "click here to send caution a staff!"
          }
        }),
        _vm._v(" "),
        _vm.show
          ? _c(
              "div",
              { staticClass: "mt-5 row attendance-head mb-4" },
              _vm._l(_vm.columns, function(ref) {
                var name = ref.name
                var col = ref.col
                return _c("div", { class: "col-" + col }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "light-heading" }, [
                      _c("span", { staticClass: "d-none d-sm-inline" }),
                      _vm._v(" " + _vm._s(name))
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
                                    _vm._s(caution.date) +
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
                              _c("span", [_c("strong", [_vm._v("Reason : ")])]),
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
                                _vm._v(_vm._s(_vm.caution.date))
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
                        attrs: { "data-dismiss": "modal", href: "javascript:" }
                      },
                      [_vm._v("close dialogue")]
                    )
                  ])
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
    require("vue-hot-reload-api")      .rerender("data-v-42f2c96b", module.exports)
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
=======
webpackJsonp([20],{"+O4B":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.title)))]),e._v(" "),e.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:e.to}},[e._v(e._s(e.buttonTitle))])],1):e._e()])])])},staticRenderFns:[]}},EJ7O:function(e,t,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);e.exports=a.exports},UorG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r("K23+")),o=r("p/p5"),s=i(r("EJ7O"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={components:{CustomHeader:s.default},beforeCreate:function(){var e=this;!this.$store.getters.auth("DSACaptain")&&this.$networkErr("page"),(0,o.get)("/api/user/"+this.$store.state.user_id).then(function(t){var r=t.data;e.report.branch=r.user.branch,e.pageBranch.push(r.user.branch)}),(0,o.get)("/api/user/getBranchUsers").then(function(t){var r=t.data;return e.users=r.DSAs}),this.$prepareBranches()},created:function(){this.setDates(),this.initForm()},data:function(){return{types:[{name:"sales report",slug:"sales_report"},{name:"score card",slug:"score_card"},{name:"weekly operations",slug:"weekly_operations"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""},users:null,dailyReport:null,pageBranch:[]}},methods:{initForm:function(){this.dailyReport={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},generateReport:function(){var e=this;this.$validator.validateAll("f1").then(function(t){if(t)if(e.$network()){var r=e.$store.state.branches.find(function(t){return t.id===e.report.branch.id});e.report.branch=r,(0,o.postD)("/api/report",e.report).then(function(t){var a=t.data,o=window.URL.createObjectURL(new Blob([a])),s=document.createElement("a");s.href=o,s.setAttribute("download",e.report.type+"_for_"+r.name+".xlsx"),document.body.appendChild(s),s.click()})}else e.$networkErr();else e.$networkErr("form")})},setDates:function(){var e=function(e){return e<10?"0"+e:e},t=function(t){return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())},r=new Date,a=r.getDay(),o=r.getDate()-a+(0===a?-6:1),s=new Date(r.setDate(o)),i=new Date;i.setDate(s.getDate()+5),this.report.from=s=t(s),this.report.to=i=t(i)},submitReport:function(){var e=this;this.$validator.validateAll("f2").then(function(t){t?e.$network()?(e.$LIPS(!0),(0,o.post)("/api/dsa_daily_registration",e.dailyReport).then(function(t){var r=t.data;e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),r.submitted&&a.default.setSuccess(r.message)}).catch(function(){return a.default.setError("Error logging report please try again later!")})):e.$networkErr():e.$networkErr("form")})}}}},khuM:function(e,t,r){var a=r("VU/8")(r("UorG"),r("rgtB"),!1,null,null,null);e.exports=a.exports},oKx2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",buttonTitle:null,to:null}}},rgtB:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[r("custom-header",{attrs:{title:"Generate Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f1"},on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){var a=t.slug,o=t.name;return r("option",{domProps:{value:a}},[e._v(e._s(e._f("capitalize")(o)))])})],2),e._v(" "),e.errors.first("f1.report_type")?r("small",[e._v(e._s(e.errors.first("f1.report_type")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{disabled:!e.$store.getters.auth("DSALead"),"data-vv-as":"office branch","data-vv-validate-on":"blur",name:"branch_id"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.getters.auth("DSALead")?e.$store.state.branches:e.pageBranch,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})],2),e._v(" "),e.errors.first("f1.branch_id")?r("small",[e._v(e._s(e.errors.first("f1.branch_id")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date from:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date from",name:"date_from",type:"date"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_from")?r("small",[e._v(e._s(e.errors.first("f1.date_from")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date To:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date to",name:"date_to",type:"date"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_to")?r("small",[e._v(e._s(e.errors.first("f1.date_to")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Generate Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]),e._v(" "),r("custom-header",{attrs:{title:"Send Daily Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f2",id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("DSA (Name-ID)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.user_id,expression:"dailyReport.user_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"dsa"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.dailyReport,"user_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select DSA")]),e._v(" "),e._l(e.users,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(t.full_name+" - ("+t.staff_id+")"))])})],2),e._v(" "),e.errors.first("f2.dsa")?r("small",[e._v(e._s(e.errors.first("f2.dsa")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.date,expression:"dailyReport.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.dailyReport.date},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"date",t.target.value)}}}),e._v(" "),e.errors.first("f2.date")?r("small",[e._v(e._s(e.errors.first("f2.date")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms registered on portal")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_on_portal,expression:"dailyReport.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.dailyReport.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_on_portal")?r("small",[e._v(e._s(e.errors.first("f2.number_on_portal")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms submitted to captain")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_to_captain,expression:"dailyReport.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.dailyReport.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_to_captain")?r("small",[e._v(e._s(e.errors.first("f2.number_to_captain")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.remark,expression:"dailyReport.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"1",name:"remark"},domProps:{value:e.dailyReport.remark},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"remark",t.target.value)}}}),e._v(" "),e.errors.first("f2.remark")?r("small",[e._v(e._s(e.errors.first("f2.remark")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Log Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])],1)])},staticRenderFns:[]}}});
>>>>>>> 717b73666b06ef9a4098637f6e3966e98184a99e
