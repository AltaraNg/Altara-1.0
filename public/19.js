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

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiLink = function apiLink(query) {
    return "/attendance?branch=" + query.branch + "&month=" + query.month + "&year=" + query.year;
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

exports.default = {
    data: function data() {
        return {
            years: function years() {
                var years = [];
                var startYear = new Date().getFullYear();
                for (var i = 0; i < 5; i++) {
                    years.push(startYear--);
                }
                return years;
            },
            columns: {},
            show: false,
            query: {
                month: '',
                branch: '',
                year: ''
            },
            attendances: {}
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        //1. make request to back-end
        if (to.query.branch) {
            (0, _api.get)("/api" + apiLink(to.query)).then(function (res) {
                //2 send to the method to prepare form
                next(function (vm) {
                    return vm.prepareForm(res.data);
                });
            }).catch(function (err) {
                next(function (vm) {
                    return vm.handleErr(err);
                });
            });
        } else next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        //1. make request to back-end
        if (to.query.branch) {
            this.$LIPS(true);
            (0, _api.get)("/api" + apiLink(to.query)).then(function (res) {
                //2 send to the method to prepare form
                _this.prepareForm(res.data);
                next();
            }).catch(function (err) {
                _this.handleErr(err);
                next();
            });
        } else next();
    },
    created: function created() {
        this.$prepareBranches();
        if (this.completeQry) {
            _vue2.default.set(this.$data.query, 'year', this.$route.query.year);
            _vue2.default.set(this.$data.query, 'month', this.$route.query.month);
            _vue2.default.set(this.$data.query, 'branch', this.$route.query.branch);
        }
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
            if (data) {
                _vue2.default.set(this.$data, 'columns', data.columns);
                _vue2.default.set(this.$data, 'attendances', data.attendances);
                _vue2.default.set(this.$data.query, 'branch', data.branch[0].id);
                this.show = true;
            }
            this.$LIPS(false);
        },
        handleErr: function handleErr(e) {
            _flash2.default.setError('Error Fetching Attendance');
        },
        isPresent: function isPresent(userAtt, day) {
            var c = userAtt.attendances.filter(function (att) {
                return att.date === day.fullDate;
            });
            if (c.length > 0) {
                return c[0].is_present ? 'P' : 'A';
            } else {
                return null;
            }
        },
        checkClass: function checkClass(userAtt, day) {
            var theClass = void 0,
                isPresent = this.isPresent(userAtt, day);
            if (['Sun', 'Sat'].includes(day.dayString)) {
                theClass = 'weekend';
            } else {
                if (isPresent === 'P') {
                    theClass = 'present';
                } else {
                    if (isPresent === 'A') {
                        theClass = 'absent';
                    } else {
                        theClass = '';
                    }
                }
            }
            return theClass;
        }
    },
    computed: {
        completeQry: function completeQry() {
            return this.$route.query.year && this.$route.query.month && this.$route.query.branch;
        },
        title: function title() {
            var att = 'Attendance Report';
            if (this.completeQry) {
                var qryMonth = this.$route.query.month,
                    qryYear = this.$route.query.year;
                var month = qryMonth ? ' for ' + this.$store.getters.getMonths[parseInt(qryMonth) - 1].name : '';
                att += " " + month + " " + (qryYear ? qryYear : '');
            }
            return att;
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92afc2ae\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.weekend[data-v-92afc2ae] {\n    background: repeating-linear-gradient(45deg, rgba(227, 210, 163, .2), rgba(227, 210, 163, 0.2) 2px, rgba(0, 0, 0, 0.0) 2px,\n        rgba(0, 0, 0, 0) 8px), #fffff1;\n}\n.custom-select[data-v-92afc2ae], .myBtn[data-v-92afc2ae], .daily-attendance[data-v-92afc2ae]{\n    width:75%;\n}\n.daily-attendance[data-v-92afc2ae]{\n    overflow-x: scroll;\n}\n.image-and-names[data-v-92afc2ae]{\n    width:25%;\n}\n@media (max-width: 990px) {\n.custom-select[data-v-92afc2ae] {\n        width: 90%;\n}\n.myBtn[data-v-92afc2ae] {\n        width: 100%;\n}\n.image-and-names[data-v-92afc2ae]{\n        width:30%;\n}\n.daily-attendance[data-v-92afc2ae]{\n        width:70%;\n}\n}\n@media (max-width: 600px) {\n.image-and-names[data-v-92afc2ae]{\n        width:50%;\n}\n.daily-attendance[data-v-92afc2ae]{\n        width:50%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92afc2ae\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-1 pt-lg-5 mx-0 mx-lg-5 attendance attendance-view",
        attrs: { id: "index" }
      },
      [
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "mb-5 row align-items-center" }, [
            _c("div", { staticClass: "col-12 title-con" }, [
              _c("span", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-5 row attendance-head" },
          _vm._l(["Branch", "Month", "Year"], function(capt) {
            return _c("div", { staticClass: "col-4 col-sm-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "light-heading" }, [
                  _c("span", { staticClass: "d-none d-sm-inline" }, [
                    _vm._v("Select")
                  ]),
                  _vm._v(" " + _vm._s(capt))
                ])
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-2 mt-lg-3 row attendance-head" },
          [
            _vm._l(["branch", "month", "year"], function(caption) {
              return _c("div", { staticClass: "col-4 col-sm-3" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.query[caption],
                          expression: "query[caption]"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "custom-select",
                      attrs: { name: caption, "data-vv-validate-on": "blur" },
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
                            caption,
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c(
                        "option",
                        { attrs: { disabled: "", selected: "", value: "" } },
                        [_vm._v(_vm._s(caption))]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.$store.getters.getBranches, function(branch) {
                        return caption === "branch"
                          ? _c("option", { domProps: { value: branch.id } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm._f("capitalize")(branch.name)) +
                                  "\n                        "
                              )
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.$store.getters.getMonths, function(month) {
                        return caption === "month"
                          ? _c("option", { domProps: { value: month.id } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(month.name) +
                                  "\n                        "
                              )
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.years(), function(year) {
                        return caption === "year"
                          ? _c("option", { domProps: { value: year } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(year) +
                                  "\n                        "
                              )
                            ])
                          : _vm._e()
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.first(caption)
                    ? _c("small", { staticClass: "text-muted" }, [
                        _vm._v(_vm._s(_vm.errors.first(caption)))
                      ])
                    : _vm._e()
                ])
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-sm-3" }, [
              _c("div", { staticClass: "row d-flex justify-content-end" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary bg-default mt-0 myBtn",
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
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _vm.show
            ? _c("div", { staticClass: "mt-5 row" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "image-and-names float-left" }, [
                    _c("table", { staticClass: "table table-names" }, [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "ml-5" }, [
                            _vm._v("Employee Name")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.attendances, function(user) {
                          return _c("tr", [
                            _c("td", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center m-0 user-details"
                                },
                                [
                                  _c("span", { staticClass: "user mx-auto" }, [
                                    _c("i", {
                                      staticClass: "user-icon fas fa-user-alt"
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: " col user-name" }, [
                                    _vm._v(_vm._s("" + user.full_name))
                                  ])
                                ]
                              )
                            ])
                          ])
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "float-left daily-attendance" }, [
                    _c(
                      "table",
                      { staticClass: "table table-details table-bordered" },
                      [
                        _c("thead", [
                          _c(
                            "tr",
                            _vm._l(_vm.columns, function(col) {
                              return _c("th", { staticClass: "text-center" }, [
                                _c("span", [
                                  _vm._v(_vm._s(col.month + " " + col.date))
                                ]),
                                _c("br"),
                                _c(
                                  "span",
                                  { staticClass: "light-heading day" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s("" + col.dayString) +
                                        "\n                                "
                                    )
                                  ]
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
                                return _c(
                                  "td",
                                  { class: _vm.checkClass(userAtt, day) },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.isPresent(userAtt, day)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
                            )
                          })
                        )
                      ]
                    )
                  ])
                ])
              ])
            : _c("div", { staticClass: "row attendance-item p-5 my-5" }, [
                _c("span", { staticClass: "no-attendance" }, [
                  _vm._v(
                    "Kindly Select Branch, Month and, Year to get started!"
                  )
                ])
              ])
        ])
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