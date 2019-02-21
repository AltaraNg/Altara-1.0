webpackJsonp([48],{

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

exports.default = {
    data: function data() {
        return {
            columns: {},
            show: false,
            month: null,
            branch: null,
            attendances: {}
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        //1. make request to back-end
        (0, _api.get)('/api/attendance?branch=' + to.query.branch + '&month=' + to.query.month).then(function (res) {
            //2 send to the method to prepare form
            next(function (vm) {
                return vm.prepareForm(res.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        //1. make request to back-end
        (0, _api.get)('/api/attendance?branch=' + to.query.branch).then(function (res) {
            //2 send to the method to prepare form
            _this.prepareForm(res.data);
            next();
        });
    },

    methods: {
        fetch: function fetch() {
            this.$router.push('/hrm/attendance?branch=' + this.branch + '&month=' + this.month + '&year=2019');
        },
        prepareForm: function prepareForm(data) {
            this.$prepareBranches();
            console.log(data);
            _vue2.default.set(this.$data, 'branch', data.branch[0].id);
            _vue2.default.set(this.$data, 'columns', data.columns);
            _vue2.default.set(this.$data, 'attendances', data.attendances);
            this.show = true;
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.attendance-view-header {\n    border-bottom: 2px solid #e3e8e6;\n}\n\n.attendance-view-date div {\n    border-left: 1px solid #e3e8e6;\n}\n\n.my-col-1{\n    -webkit-box-flex: 0;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n    min-width: 8%;\n}*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92afc2ae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-5 mx-5" }, [
      _vm.show
        ? _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-3" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.branch,
                        expression: "branch"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "custom-select w-100",
                    attrs: { "data-vv-validate-on": "blur", name: "branch" },
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
                        _vm.branch = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { selected: "", value: "" } }, [
                      _vm._v("select branch")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.$store.getters.getBranches, function(branch) {
                      return _c("option", { domProps: { value: branch.id } }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm._f("capitalize")(branch.name)) +
                            "\n                        "
                        )
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.month,
                        expression: "month"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "custom-select w-100",
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
                        _vm.month = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { selected: "", value: "" } }, [
                      _vm._v("select month")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.$store.getters.getMonths, function(
                      value,
                      index
                    ) {
                      return _c("option", { domProps: { value: index + 1 } }, [
                        _vm._v(_vm._s(value))
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        _vm.fetch()
                      }
                    }
                  },
                  [_vm._v("View Attendance")]
                )
              ])
            ]),
            _vm._v(" "),
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
                              "\n                            " +
                                _vm._s(_vm.isPresent(userAtt, day)) +
                                "\n                        "
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3dab5bf4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92afc2ae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
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