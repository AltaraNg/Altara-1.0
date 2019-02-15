webpackJsonp([19],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

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

var apiLink = function apiLink(query) {
    return '/attendance?branch=' + query.branch + '&month=' + query.month + '&year=' + query.year;
};

exports.default = {
    data: function data() {
        return {
            columns: {},
            show: false,
            query: {
                month: null,
                branch: null,
                year: '2019'
            },
            attendances: {}
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        //1. make request to back-end
        if (to.query.branch) {
            (0, _api.get)('/api' + apiLink(to.query)).then(function (res) {
                //2 send to the method to prepare form
                next(function (vm) {
                    return vm.prepareForm(res.data);
                });
            });
        } else next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        //1. make request to back-end
        if (to.query.branch) {
            (0, _api.get)('/api' + apiLink(to.query)).then(function (res) {
                //2 send to the method to prepare form
                _this.prepareForm(res.data);
                next();
            });
        } else next();
    },
    created: function created() {
        this.$prepareBranches();
    },

    methods: {
        fetch: function fetch() {
            this.$router.push('/hrm' + apiLink(this.query));
        },
        prepareForm: function prepareForm(data) {
            if (data) {
                _vue2.default.set(this.$data, 'columns', data.columns);
                _vue2.default.set(this.$data, 'attendances', data.attendances);
                _vue2.default.set(this.$data.query, 'branch', data.branch[0].id);
                this.show = true;
            }
        },
        isPresent: function isPresent(userAtt, day) {
            var c = userAtt.attendances.filter(function (att) {
                return att.date === day.fullDate;
            });
            if (c.length > 0) {
                return c[0].is_present;
            } else {
                return null;
            }
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.attendance-head[data-v-92afc2ae] {\n    margin-left: 5.5rem;\n    margin-right: 5.5rem;\n}\n.title[data-v-92afc2ae] {\n    font-size: 2.2rem;\n    font-weight: bold;\n    padding-bottom: 1.5rem;\n    position: relative;\n    float: left;\n    border-bottom: 3px solid #2975a5;\n    z-index: 1;\n}\n.col-12.clins[data-v-92afc2ae]::after {\n    content: '';\n    height: 2px;\n    background-color: #e9ebf3;\n    position: absolute;\n    bottom: 0;\n    left: 1.8rem;\n    width: calc(100% - 3.6rem);\n    z-index: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92afc2ae\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-5 mx-5" }, [
      _c("div", { staticClass: "mt-5 attendance-head" }, [
        _c("div", { staticClass: "mb-5 row align-items-center" }, [
          _c("div", { staticClass: "col-12 clins" }, [
            _c("span", { staticClass: "title" }, [
              _vm._v(
                "\n                        Attendance Report for\n                        " +
                  _vm._s(
                    _vm.$store.getters.getMonths[
                      parseInt(_vm.$route.query.month) - 1
                    ].name +
                      " " +
                      _vm.$route.query.year
                  ) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "row px-5 heading pt-3 pb-4" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("div", { staticClass: "row align-items-center" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.query.branch,
                            expression: "query.branch"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "custom-select w-auto",
                        attrs: {
                          "data-vv-validate-on": "blur",
                          name: "branch"
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
                              _vm.query,
                              "branch",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { selected: "", value: "" } }, [
                          _vm._v("select branch")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.$store.getters.getBranches, function(
                          branch
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: branch.id } },
                            [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm._f("capitalize")(branch.name)) +
                                  "\n                                        "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c("div", { staticClass: "row align-items-center" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.query.month,
                            expression: "query.month"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "custom-select w-auto",
                        attrs: { "data-vv-validate-on": "blur", name: "month" },
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
                              "month",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { selected: "", value: "" } }, [
                          _vm._v("select month")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.$store.getters.getMonths, function(month) {
                          return _c(
                            "option",
                            { domProps: { value: month.id } },
                            [
                              _vm._v(
                                _vm._s(month.name) +
                                  "\n                                        "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c("div", { staticClass: "row align-items-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary bg-default",
                        on: {
                          click: function($event) {
                            _vm.fetch()
                          }
                        }
                      },
                      [_vm._v("View Attendance")]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _vm.show
          ? _c("div", [
              _c("div", { staticClass: "w-25 float-left p-5" }, [
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v("Employee Name")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.attendances, function(user) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s("" + user.full_name))])
                      ])
                    })
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "w-75 float-left p-5",
                  staticStyle: { "overflow-x": "scroll" }
                },
                [
                  _c("table", { staticClass: "table" }, [
                    _c("thead", [
                      _c(
                        "tr",
                        _vm._l(_vm.columns, function(col) {
                          return _c("th", { attrs: { scope: "col" } }, [
                            _vm._v(
                              _vm._s(
                                col.month + " " + col.date + " " + col.dayString
                              )
                            )
                          ])
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.attendances, function(userAtt) {
                        return _c(
                          "tr",
                          _vm._l(_vm.columns, function(day) {
                            return _c("td", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.isPresent(userAtt, day)) +
                                  "\n                            "
                              )
                            ])
                          })
                        )
                      })
                    )
                  ])
                ]
              )
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-92afc2ae", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3f624c43", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92afc2ae\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-92afc2ae"
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\attendance\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92afc2ae", Component.options)
  } else {
    hotAPI.reload("data-v-92afc2ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});