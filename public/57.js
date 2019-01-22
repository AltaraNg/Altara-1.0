webpackJsonp([57],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/supplier/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
   props: {},
   data: function data() {
      return {
         form: {
            supplier_id: 'SP-0001', //this will come from a counter in the db
            supplier_name: null,
            category_id: '',
            date_of_reg: this.$getDate(),
            status: 'active',
            address: null,
            contact_phone_no: null,
            contact_person_name: null
         },
         mode: null,
         error: {},
         show: false,
         resource: 'suppliers',
         store: '/api/suppliers',
         method: 'POST',
         title: 'Create',
         statuses: ['active', 'suspended'],
         categories: [
         /*this object is temporary pending when catagory if fetched from backend*/
         { id: 1, name: 'First Category' }, { id: 2, name: 'Second Category' }]
      };
   },
   beforeRouteEnter: function beforeRouteEnter(to, from, next) {
      //1. make request to back end for the form to be used

      //2 send to the method in this component that will handle it when component is created

      //3. set the current mode of the form
      next(function (vm) {
         return vm.setMode(to.meta.mode);
      });
   },
   beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
      //1. make request to back end for the form to be used

      //2 send to the method in this component that will handle it when component is created

      //3. Edit data that will be used for api update call
      this.store = '/api/suppliers/' + this.$route.params.id;
      this.method = 'PUT';

      //3. set the current mode of the form
      this.setMode(to.meta.mode);
      next();
   },

   methods: {
      setMode: function setMode(mode) {
         this.show = false;
         /** set the current mode of the form*/
         _vue2.default.set(this.$data, 'mode', mode);
      },
      onCancel: function onCancel() {},
      onSave: function onSave() {
         var _this = this;

         /** 1. Validate form*/
         this.$validator.validateAll().then(function (result) {
            /** 2.if validation is successful*/
            if (result) {
               /** 3. Check is there is network*/
               if (_this.$network()) {
                  //There is network
                  /** 4. Show loader and set isProcessing to true*/
                  _this.$LIPS(true);
                  /** 5. Clear errors*/
                  _this.error = {};
                  /** 6 make request to BE*/
                  console.log(_this.form);

                  _this.$LIPS(false);

                  /** 7. Log the process*/

                  /** 8. Throw success message*/

                  /** 9. Take to the page view of the current supplier created*/
               } else _this.$networkErr();
            } else _this.$networkErr('form');
         });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ccd51d8c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/supplier/form.vue":
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
        _c("div", { staticClass: "card" }, [
          _c(
            "ul",
            { staticClass: "nav nav-tabs justify-content-center bg-default" },
            [_c("h6", [_vm._v(_vm._s(_vm.mode) + " Supplier")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pl-4 pr-4" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSave($event)
                  }
                }
              },
              [
                _c("h5", [_vm._v("Supplier Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Supplier ID")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.supplier_id,
                            expression: "form.supplier_id"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "supplier id",
                          name: "supplier_id",
                          placeholder: "supplier id",
                          type: "text",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.supplier_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "supplier_id",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("supplier_id")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("supplier_id")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Supplier name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.supplier_name,
                            expression: "form.supplier_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:150",
                            expression: "'required|max:150'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "supplier name",
                          name: "supplier_name",
                          placeholder: "supplier name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.supplier_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "supplier_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("supplier_name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("supplier_name")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Category")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.category_id,
                              expression: "form.category_id"
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
                            "data-vv-validate-on": "blur",
                            name: "category"
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
                                _vm.form,
                                "category_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { selected: "", value: "" } }, [
                            _vm._v("-- select category --")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.categories, function(category) {
                            return _c(
                              "option",
                              { domProps: { value: category.id } },
                              [
                                _vm._v(
                                  "\n                           " +
                                    _vm._s(
                                      _vm._f("capitalize")(category.name)
                                    ) +
                                    "\n                        "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("category")
                        ? _c("small", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.errors.first("category")) +
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
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Date of registration")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.date_of_reg,
                            expression: "form.date_of_reg"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "date of reg",
                          name: "date_of_reg",
                          type: "date"
                        },
                        domProps: { value: _vm.form.date_of_reg },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "date_of_reg",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("date_of_reg")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("date_of_reg")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", { staticClass: "w-100 float-left pl-1" }, [
                        _vm._v("Status")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.statuses, function(status) {
                        return _c(
                          "div",
                          {
                            staticClass: "radio p-0 col-md-6 col-6 float-left"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.status,
                                  expression: "form.status"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                id: status,
                                name: "status",
                                type: "radio"
                              },
                              domProps: {
                                value: status,
                                checked: _vm._q(_vm.form.status, status)
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(_vm.form, "status", status)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: status } }, [
                              _vm._v(_vm._s(status))
                            ])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.errors.first("status")
                        ? _c("small", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.errors.first("status")) +
                                "\n                     "
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Address")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address,
                            expression: "form.address"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:255",
                            expression: "'required|max:255'"
                          }
                        ],
                        staticClass: "form-control w-100",
                        attrs: {
                          name: "address",
                          placeholder: "address",
                          rows: "1"
                        },
                        domProps: { value: _vm.form.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("address")
                        ? _c("small", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.errors.first("address")) +
                                "\n                     "
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Phone Number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.contact_phone_no,
                            expression: "form.contact_phone_no"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric|max:11|min:11",
                            expression: "'required|numeric|max:11|min:11'"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.error.phone_number },
                        attrs: {
                          "data-vv-as": "phone number",
                          name: "phone_number",
                          placeholder: "081xxxxxxxx",
                          type: "tel"
                        },
                        domProps: { value: _vm.form.contact_phone_no },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "contact_phone_no",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("phone_number")
                        ? _c("small", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.errors.first("phone_number")) +
                                "\n                     "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.error.contact_phone_no
                        ? _c("small", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.error.contact_phone_no[0]) +
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
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Contact person name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.contact_person_name,
                            expression: "form.contact_person_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "contact name",
                          name: "contact_name",
                          placeholder: "enter full name here",
                          type: "text"
                        },
                        domProps: { value: _vm.form.contact_person_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "contact_person_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("contact_name")
                        ? _c("small", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.errors.first("contact_name")) +
                                "\n                     "
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c("hr", { staticClass: "style-two" })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "clearfix d-flex justify-content-end" },
                      [
                        _vm.mode === "edit"
                          ? _c(
                              "button",
                              {
                                staticClass: "mx-3 btn btn-secondary",
                                attrs: { type: "button" },
                                on: { click: _vm.onCancel }
                              },
                              [_vm._v("Cancel")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "mx-3 btn bg-default",
                            attrs: {
                              disabled: _vm.$isProcessing,
                              type: "submit"
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm._f("capitalize")(_vm.mode)) +
                                " Supplier "
                            ),
                            _c("i", { staticClass: "far fa-paper-plane ml-1" })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-ccd51d8c", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/FSL/supplier/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/supplier/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ccd51d8c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/supplier/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\supplier\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ccd51d8c", Component.options)
  } else {
    hotAPI.reload("data-v-ccd51d8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});