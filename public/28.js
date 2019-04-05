webpackJsonp([28],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/product/form.vue":
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
            product_id: 'PID-0001', //expected to be generated automatically from the backend
            product_name: null,
            product_desc: null,
            category_id: '',
            supplier_id: '',
            brand_id: '',
            date_supplied: this.$getDate(),
            date_sold: null,
            sold_by: '',
            inventory_agent: ''
         },
         categories: [
         /*this list will come from the backend*/
         { id: 1, name: 'Fans' }, { id: 2, name: 'Refrigerators' }, { id: 3, name: 'Sound systems' }, { id: 4, name: 'Phones' }],
         suppliers: [
         /*this list will come from the backend*/
         { id: 1, name: 'Supplier 1' }, { id: 2, name: 'Supplier 2' }, { id: 3, name: 'Supplier 3' }, { id: 4, name: 'Supplier 4' }],
         brands: [
         /*this list will come from the backend*/
         { id: 1, name: 'synix' }, { id: 2, name: 'samsung' }, { id: 3, name: 'toshiba' }, { id: 4, name: 'panasoni' }],
         floorAgents: [
         /*this list will come from the backend - list of shop floor agents, and for best use will be defaulted to the logged in user*/
         { id: 1, name: 'agent-name-1' }, { id: 2, name: 'agent-name-1' }, { id: 3, name: 'agent-name-1' }, { id: 4, name: 'agent-name-1' }],
         inventoryAgents: [
         /*this will come from the backend*/
         { id: 1, name: 'officer-name-1' }, { id: 2, name: 'officer-name-1' }, { id: 3, name: 'officer-name-1' }, { id: 4, name: 'officer-name-1' }],
         mode: null,
         error: {},
         show: false,
         resource: 'products',
         store: '/api/products',
         method: 'POST',
         title: 'Create'
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
      this.store = '/api/products/' + this.$route.params.id;
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-162bd0b6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/product/form.vue":
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
            [_c("h6", [_vm._v(_vm._s(_vm.mode) + " Product")])]
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
                _c("h5", [_vm._v("Product Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Product ID")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.product_id,
                            expression: "form.product_id"
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
                          "data-vv-as": "product id",
                          name: "product_id",
                          placeholder: "product id",
                          type: "text",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.product_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "product_id",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("product_id")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("product_id")))
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
                      _c("label", [_vm._v("Product name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.product_name,
                            expression: "form.product_name"
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
                          "data-vv-as": "product name",
                          name: "product_name",
                          placeholder: "product name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.product_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "product_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("product_name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("product_name")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Product description")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.product_desc,
                            expression: "form.product_desc"
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
                          "data-vv-as": "product description",
                          name: "product_desc",
                          placeholder: "product desc",
                          type: "text"
                        },
                        domProps: { value: _vm.form.product_desc },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "product_desc",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("product_desc")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("product_desc")))
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
                      _c("label", [_vm._v("Category ID")]),
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
                            name: "category_id",
                            "data-vv-validate-on": "blur",
                            "data-vv-as": "category id"
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
                          _c("option", { attrs: { value: "", selected: "" } }, [
                            _vm._v("-- select category --")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.categories, function(category) {
                            return _c(
                              "option",
                              { domProps: { value: category.id } },
                              [
                                _vm._v(
                                  _vm._s(_vm._f("capitalize")(category.name))
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("category_id")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("category_id")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Supplier ID")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
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
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "custom-select w-100",
                          attrs: {
                            name: "supplier_id",
                            "data-vv-validate-on": "blur",
                            "data-vv-as": "supplier id"
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
                                "supplier_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", selected: "" } }, [
                            _vm._v("-- select supplier --")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.suppliers, function(supplier) {
                            return _c(
                              "option",
                              { domProps: { value: supplier.id } },
                              [
                                _vm._v(
                                  _vm._s(_vm._f("capitalize")(supplier.name))
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
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
                      _c("label", [_vm._v("Brand ID")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.brand_id,
                              expression: "form.brand_id"
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
                            name: "brand_id",
                            "data-vv-validate-on": "blur",
                            "data-vv-as": "brand id"
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
                                "brand_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", selected: "" } }, [
                            _vm._v("-- select brand --")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.brands, function(brand) {
                            return _c(
                              "option",
                              { domProps: { value: brand.id } },
                              [_vm._v(_vm._s(_vm._f("capitalize")(brand.name)))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("brand_id")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("brand_id")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Date supplied")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.date_supplied,
                            expression: "form.date_supplied"
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
                          "data-vv-as": "date supplied",
                          name: "date_supplied",
                          type: "date"
                        },
                        domProps: { value: _vm.form.date_supplied },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "date_supplied",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("date_supplied")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("date_supplied")))
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
                      _c("label", [_vm._v("Date sold")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.date_sold,
                            expression: "form.date_sold"
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
                          "data-vv-as": "date sold",
                          name: "date_sold",
                          type: "date"
                        },
                        domProps: { value: _vm.form.date_sold },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "date_sold", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("date_sold")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("date_sold")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Sold by")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.sold_by,
                              expression: "form.sold_by"
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
                            name: "sold_by",
                            "data-vv-validate-on": "blur",
                            "data-vv-as": "sold by"
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
                                "sold_by",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", selected: "" } }, [
                            _vm._v("-- select floor agent --")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.floorAgents, function(agent) {
                            return _c(
                              "option",
                              { domProps: { value: agent.id } },
                              [_vm._v(_vm._s(_vm._f("capitalize")(agent.name)))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("sold_by")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("sold_by")))
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
                      _c("label", [_vm._v("Inventory agent")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.inventory_agent,
                              expression: "form.inventory_agent"
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
                            name: "inventory_agent",
                            "data-vv-validate-on": "blur",
                            "data-vv-as": "inventory agent"
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
                                "inventory_agent",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", selected: "" } }, [
                            _vm._v("-- select inventory agents --")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.inventoryAgents, function(agent) {
                            return _c(
                              "option",
                              { domProps: { value: agent.id } },
                              [_vm._v(_vm._s(_vm._f("capitalize")(agent.name)))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("inventory_agent")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("inventory_agent")))
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
                                " Product "
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
    require("vue-hot-reload-api")      .rerender("data-v-162bd0b6", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/LOG/product/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/product/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-162bd0b6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/product/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\product\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-162bd0b6", Component.options)
  } else {
    hotAPI.reload("data-v-162bd0b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});