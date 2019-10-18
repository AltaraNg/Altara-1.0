webpackJsonp([8],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

exports.default = {
    props: {
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        caption: {
            type: [String, Number],
            default: null
        },
        value: {
            type: [String, Number],
            default: null
        },
        nameValue: {
            type: [String, Number],
            default: null
        }
    },
    data: function data() {
        return {
            open: false,
            selectIndex: 0,
            displayText: '',
            search: ''
        };
    },

    computed: {
        filteredOptions: function filteredOptions() {
            var _this = this;

            var exp = new RegExp(this.search, 'i');
            return this.options.filter(function (option) {
                return exp.test(option.id) || exp.test(option[_this.caption]);
            });
        }
    },
    watch: {
        value: function value(newVal) {
            if (newVal) this.select(this.options.find(function (option) {
                return option.id === newVal;
            }));
        }
        // nameValue: function (newName) {
        //     if (newName) this.select((this.options.find(option => option.name === newName)))
        // }
    },
    methods: {
        onDownKey: function onDownKey() {
            this.filteredOptions.length - 1 > this.selectIndex && this.selectIndex++;
        },
        onUpKey: function onUpKey() {
            this.selectIndex > 0 && this.selectIndex--;
        },
        onEnterKey: function onEnterKey() {
            var option = this.filteredOptions[this.selectIndex];
            if (option) this.select(option);
        },
        select: function select(option) {
            this.displayText = option[this.caption];
            this.$emit('input', option.id);
            this.$refs.search.blur();
        },
        toggle: function toggle(e) {
            if (e.target === this.$refs.toggle || e.target === this.$refs.search || e.target === this.$refs[this.caption]) {
                if (this.open) {
                    if (e.target !== this.$refs.search && e.target !== this.$refs[this.caption]) this.$refs.search.blur();
                } else this.$refs.search.focus();
            }
        },
        onFocus: function onFocus() {
            this.open = true;
        },
        onBlur: function onBlur() {
            this.search = '';
            this.open = false;
        },
        onEscape: function onEscape() {
            this.$refs.search.blur();
        }
    },
    created: function created() {
        var _this2 = this;

        _eventBus.EventBus.$on('clearTypeAhead', function () {
            return _this2.displayText = null;
        });
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

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _Typeahead = __webpack_require__("./resources/assets/js/components/Typeahead.vue");

var _Typeahead2 = _interopRequireDefault(_Typeahead);

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

var _auth = __webpack_require__("./resources/assets/js/utilities/auth.js");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(to) {
    var urls = { create: "/api/inventory/create", edit: "/api/product/" + to.params.id + "/edit" };
    return urls[to.meta.mode];
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { Typeahead: _Typeahead2.default, CustomHeader: _customHeader2.default },
    props: {},
    data: function data() {
        return {
            form: {},
            user: {
                name: _auth2.default.state.user_name,
                id: _auth2.default.state.user_id
            },
            mode: null,
            error: {},
            index: null,
            show: false,
            showModalContent: false,
            store: '/api/inventory',
            number: 0,
            products: [],
            suppliers: [],
            product: null,
            categories: null,
            brands: null,
            supplier: null,
            quantity: '',

            method: 'POST',
            statuses: [{ name: 'available', value: 1 }, { name: 'unavailable', value: 0 }],
            productForm: { products: [] },
            canAddProduct: true

        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {

        (0, _api.get)(initialize(to)).then(function (_ref) {
            var data = _ref.data;
            return next(function (vm) {
                return vm.prepareForm(data);
            });
        }).catch(function () {
            return next(function () {
                return _flash2.default.setError('Error Preparing form');
            });
        });
    },

    methods: {
        prepareForm: function prepareForm(data) {
            _vue2.default.set(this.$data, 'mode', this.$route.meta.mode);
            _vue2.default.set(this.$data, 'brands', data.brands);
            _vue2.default.set(this.$data, 'categories', data.categories);
            _vue2.default.set(this.$data, 'suppliers', data.suppliers);
            _vue2.default.set(this.$data, 'products', data.products);
            if (this.mode === 'edit') {
                this.store = "/api/inventory/" + this.$route.params.id;
                this.method = 'PUT';
            }
            this.show = true;
            this.canAddProduct = /*this.canUserAddPayment;*/true;
            this.productForm = { products: [] };
        },
        processForm: function processForm() {
            // this.show = false;
            // this.$LIPS(true);
            // get(`/api/customer/lookup/${this.customer_id}`)
            //     .then(res => this.updateView(res.data))
            //     .catch(() => {
            //         this.$LIPS(false);
            //         Flash.setError('Error Fetching customer detail');
            //     });
        },
        onSave: function onSave() {
            var _this = this;

            console.log(this.productForm.products);
            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        _this.productForm.products.forEach(function (e) {
                            (0, _api.byMethod)(_this.method, _this.store, e).then(function (_ref2) {
                                var data = _ref2.data;

                                if (data.saved || data.updated) {
                                    // log(data.log, data.staff_id);
                                    _vue2.default.set(_this.$data, 'form', data.form);
                                    _flash2.default.setSuccess(data.message, 5000);
                                    if (data['updated']) _this.$router.push('/log/inventory');
                                }
                            }).catch(function (_ref3) {
                                var r = _ref3.response;
                                var data = r.data,
                                    status = r.status;

                                if (status === 422) {
                                    _this.error = data.errors ? data.errors : data;
                                    _this.$networkErr('unique');
                                }
                            }).finally(function () {
                                _this.$scrollToTop();
                                _this.$LIPS(false);
                            });
                        });
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        },
        addProductForm: function addProductForm() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    var quantity = parseInt(_this2.form.quantity);

                    var product = _this2.getEntity(_this2.form.product, _this2.products);
                    var supplier = _this2.getEntity(_this2.form.supplier, _this2.suppliers);

                    //generates rows according to the quantity of products
                    for (var i = 0; i < _this2.quantity; i++) {
                        _this2.productForm.products.push({
                            product_name: product.name,
                            product_id: product.id,
                            supplier_id: supplier.id,
                            inventory_sku: '',
                            serial_number: '',
                            market_price: product.retail_price,
                            received_date: _this2.$getDate(),
                            receiver_id: _this2.user.id,
                            seller_id: _this2.user.id,
                            status: ''

                        });
                        // this.reNumber();
                    }
                }
            });
        },
        deleteProduct: function deleteProduct(index) {
            this.productForm.products.splice(index, 1);
            this.reNumber();
        },
        reNumber: function reNumber() {
            var _this3 = this;

            this.productForm.products.forEach(function (product, index) {
                /*this line below mean if the repayment level is 3 i.e the customer has made 3 repayment
                * u want to display on the ui "4th repayment"
                * so repaymentLevel(3) + index(0 - length of the added payments) + 1*/
                var next = index + 1;
                _this3.productForm.products[index]._col = next;
                _this3.productForm.products[index].column = _this3.$getColumn(next) + " Products";
            });
        },
        getEntity: function getEntity(id, array) {
            return array.find(function (entity) {
                return entity.id === id;
            });
        }
    },
    created: function created() {},

    watch: {
        productForm: {
            handler: function handler() {
                var _this4 = this;

                var date = new Date().getFullYear();
                date = date.toString().slice(2, 4);
                this.productForm.products.forEach(function (e) {
                    // let product = this.getEntity(e.product, this.products);
                    var category_id = _this4.getEntity(e.product_id, _this4.products).category_id;
                    var category_name = _this4.getEntity(category_id, _this4.categories).name;
                    e.inventory_sku = category_name.slice(0, 3).toUpperCase() + "-" + e.product_name.slice(0, 3).toUpperCase() + "-0" + e.serial_number.slice(3, -1) + "-00" + _this4.productForm.products.indexOf(e);

                    // Vue.set(this.$data.e, 'inventory_sku', 'random' );
                });
            },
            // console.log(index);
            deep: true
        }

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59317872\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue":
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
            to: "/log/inventory",
            title: "Generate Inventory",
            "button-title": "view Inventory!"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _c(
            "form",
            {
              attrs: { enctype: "multipart/form-data" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.processForm($event)
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "my-4 clearfix p-5 row bg-white shadow-sm card-radius"
                },
                [
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Product")]),
                      _vm._v(" "),
                      _c("typeahead", {
                        attrs: { options: _vm.products, caption: "name" },
                        model: {
                          value: _vm.form.product,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "product", $$v)
                          },
                          expression: "form.product"
                        }
                      })
                    ],
                    1
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
                      _c("label", [_vm._v("Quantity")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.quantity,
                            expression: "quantity"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50|numeric",
                            expression: "'required|max:50|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "quantity",
                          placeholder: "retail price"
                        },
                        domProps: { value: _vm.quantity },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.quantity = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("price")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("price")))
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
                      _c("label", [_vm._v("Supplier ID")]),
                      _vm._v(" "),
                      _c("typeahead", {
                        attrs: { options: _vm.suppliers, caption: "name" },
                        model: {
                          value: _vm.form.supplier,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "supplier", $$v)
                          },
                          expression: "form.supplier"
                        }
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
                _c(
                  "div",
                  { staticClass: "clearfix d-flex justify-content-end w-100" },
                  [
                    _vm.mode === "edit"
                      ? _c(
                          "router-link",
                          {
                            staticClass: "mx-5 text-link mt-4 pt-2",
                            attrs: { to: "/log/products" }
                          },
                          [
                            _vm._v(
                              "\n                            Cancel\n                        "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-default",
                        attrs: {
                          disabled: _vm.$isProcessing || _vm.quantity == "",
                          type: "submit"
                        },
                        on: {
                          click: function($event) {
                            _vm.addProductForm()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Generate Inventory "
                        ),
                        _c("i", { staticClass: "far fa-paper-plane ml-1" })
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm.canAddProduct
          ? _c("h5", { staticClass: "mt-5 mb-0" }, [
              _vm._v("Add a new payment")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.canAddProduct
          ? _c("table", { staticClass: "table table-bordered" }, [
              _c(
                "tbody",
                { staticClass: "text-center" },
                [
                  _c("tr", { staticClass: "table-separator" }, [
                    _c("td", { staticClass: "text-left" }, [_vm._v("S/No.")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Product ")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Inventory SKU")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Market Price")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Serial/IMEI Number")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Recieved Date")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Recieved By")])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.productForm.products, function(product, index) {
                    return _c("tr", [
                      _c("th", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("th", [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.productForm.products[index].product_name,
                                expression:
                                  "productForm.products[index].product_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "product_sku",
                              type: "text",
                              disabled: ""
                            },
                            domProps: {
                              value:
                                _vm.productForm.products[index].product_name
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.productForm.products[index],
                                  "product_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.productForm.products[index].inventory_sku,
                                expression:
                                  "productForm.products[index].inventory_sku"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "inventory_sku",
                              type: "text",
                              disabled: ""
                            },
                            domProps: {
                              value:
                                _vm.productForm.products[index].inventory_sku
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.productForm.products[index],
                                  "inventory_sku",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.productForm.products[index].market_price,
                                expression:
                                  "productForm.products[index].market_price"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "market_price",
                              type: "text",
                              disabled: ""
                            },
                            domProps: {
                              value:
                                _vm.productForm.products[index].market_price
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.productForm.products[index],
                                  "market_price",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.productForm.products[index].serial_number,
                                expression:
                                  "productForm.products[index].serial_number"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "serial_no", type: "text" },
                            domProps: {
                              value:
                                _vm.productForm.products[index].serial_number
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.productForm.products[index],
                                  "serial_number",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.productForm.products[index].recieved_date,
                                expression:
                                  "productForm.products[index].recieved_date"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "recieved_date", type: "date" },
                            domProps: {
                              value:
                                _vm.productForm.products[index].recieved_date
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.productForm.products[index],
                                  "recieved_date",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.productForm.products[index].receiver_id,
                                expression:
                                  "productForm.products[index].receiver_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "date",
                              name: "date",
                              type: "text",
                              vdisabled: ""
                            },
                            domProps: {
                              value: _vm.productForm.products[index].receiver_id
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.productForm.products[index],
                                  "receiver_id",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "ml-2 btn status status-sm my-sm-2 not-approved",
                            on: {
                              click: function($event) {
                                _vm.deleteProduct(index)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-times" })]
                        )
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            {
              staticClass: "btn bg-default",
              attrs: { disabled: _vm.$isProcessing, type: "submit" },
              on: {
                click: function($event) {
                  _vm.onSave()
                }
              }
            },
            [
              _vm._v("\n                Save Inventory "),
              _c("i", { staticClass: "far fa-paper-plane ml-1" })
            ]
          )
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-59317872", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "position-relative",
      class: _vm.open ? "typeahead typeahead__open" : "typeahead"
    },
    [
      _c(
        "div",
        {
          ref: "toggle",
          staticClass: "typeahead__toggle",
          on: {
            mousedown: function($event) {
              $event.preventDefault()
              return _vm.toggle($event)
            }
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            ref: "search",
            staticClass: "typeahead__search",
            attrs: { type: "text" },
            domProps: { value: _vm.search },
            on: {
              blur: _vm.onBlur,
              focus: _vm.onFocus,
              keydown: [
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown"
                    ])
                  ) {
                    return null
                  }
                  return _vm.onDownKey($event)
                },
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.onEnterKey($event)
                },
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")
                  ) {
                    return null
                  }
                  return _vm.onEscape($event)
                },
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  return _vm.onUpKey($event)
                }
              ],
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("span", { ref: "text", staticClass: "typeahead__text" }, [
            _vm._v("\n        " + _vm._s(_vm.displayText) + "\n     ")
          ])
        ]
      ),
      _vm._v(" "),
      _vm.open
        ? _c(
            "ul",
            { staticClass: "typeahead__list" },
            _vm._l(_vm.filteredOptions, function(option, index) {
              return _c("li", { key: index, staticClass: "typeahead__item" }, [
                _c(
                  "a",
                  {
                    staticClass: "typeahead__link",
                    class: [
                      _vm.selectIndex === index ? "typeahead__active" : ""
                    ],
                    on: {
                      mousedown: function($event) {
                        $event.preventDefault()
                        _vm.select(option)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(option[_vm.caption]) +
                        "\n            "
                    )
                  ]
                )
              ])
            })
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6da2cc40", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Typeahead.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6da2cc40", Component.options)
  } else {
    hotAPI.reload("data-v-6da2cc40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./resources/assets/js/utilities/event-bus.js":
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

/***/ "./resources/assets/js/utilities/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

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

/***/ "./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59317872\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\inventory\\inventory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59317872", Component.options)
  } else {
    hotAPI.reload("data-v-59317872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});