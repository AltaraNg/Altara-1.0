webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/Altara 1/Desktop/Altara-1.0/resources/assets/js/views/LOG/inventory/inventory.vue: Unexpected token (395:10)\n\n\u001b[0m \u001b[90m 393 | \u001b[39m\n \u001b[90m 394 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 395 | \u001b[39m\u001b[32m          )}-0${this.productForm.products.indexOf(e)+1}`\u001b[39m\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m;\u001b[39m\n \u001b[90m     | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 396 | \u001b[39m          e\u001b[33m.\u001b[39mserial_number \u001b[33m=\u001b[39m e\u001b[33m.\u001b[39mserial_number\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m;\u001b[39m\n \u001b[90m 397 | \u001b[39m        })\u001b[33m;\u001b[39m\n \u001b[90m 398 | \u001b[39m      }\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59317872\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.disabled{\n    background-color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
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
        _vm.mode === "create"
          ? _c(
              "div",
              [
                _c("custom-header", {
                  attrs: {
                    to: "/log/inventory",
                    title: "Generate Inventory",
                    "button-title": "view Inventory!"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.mode === "create"
          ? _c("div", { staticClass: "attendance-body" }, [
              _c(
                "form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
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
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-4 col-6 float-left px-0 px-md-3"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-4 col-6 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Branch")]),
                          _vm._v(" "),
                          _c("typeahead", {
                            attrs: { options: _vm.branches, caption: "name" },
                            model: {
                              value: _vm.form.branch,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "branch", $$v)
                              },
                              expression: "form.branch"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-2 col-4 float-left px-0 px-md-3"
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
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-5 px-0 row align-items-center" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "clearfix d-flex justify-content-end w-100"
                        },
                        [
                          _vm.mode === "edit"
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "mx-5 text-link mt-4 pt-2",
                                  attrs: { to: "/log/products" }
                                },
                                [_vm._v("Cancel")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn bg-default",
                              attrs: {
                                disabled:
                                  _vm.$isProcessing || _vm.quantity == "",
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
                                "\n              Generate Inventory\n              "
                              ),
                              _c("i", { staticClass: "fas fa-cog ml-1" })
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
          : _vm._e(),
        _vm._v(" "),
        _vm.productForm.products.length > 0
          ? _c("div", { staticClass: "attendance-body" }, [
              _vm.canAddProduct
                ? _c("h5", { staticClass: "mt-5 mb-0" }, [
                    _vm._v("Generate Inventory")
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
                          _c("td", { staticClass: "text-left" }, [
                            _vm._v("S/No.")
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Inventory SKU")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Market Price")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Serial/IMEI Number")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Received Date")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Received By")])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.productForm.products, function(
                          product,
                          index
                        ) {
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
                                        _vm.productForm.products[index]
                                          .product_name,
                                      expression:
                                        "productForm.products[index].product_name"
                                    }
                                  ],
                                  staticClass: "form-control ",
                                  attrs: {
                                    name: "product_sku",
                                    type: "text",
                                    disabled: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.productForm.products[index]
                                        .product_name
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
                                        _vm.productForm.products[index]
                                          .inventory_sku,
                                      expression:
                                        "productForm.products[index].inventory_sku"
                                    }
                                  ],
                                  staticClass: "form-control ",
                                  attrs: {
                                    name: "inventory_sku",
                                    type: "text",
                                    disabled: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.productForm.products[index]
                                        .inventory_sku
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
                                        _vm.productForm.products[index]
                                          .market_price,
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
                                      _vm.productForm.products[index]
                                        .market_price
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
                                        _vm.productForm.products[index]
                                          .serial_number,
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
                                      _vm.productForm.products[index]
                                        .serial_number
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
                                        _vm.productForm.products[index]
                                          .received_date,
                                      expression:
                                        "productForm.products[index].received_date"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "received_date",
                                    type: "date"
                                  },
                                  domProps: {
                                    value:
                                      _vm.productForm.products[index]
                                        .received_date
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.productForm.products[index],
                                        "received_date",
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
                                      value: _vm.user.name,
                                      expression: "user.name"
                                    }
                                  ],
                                  staticClass: "form-control ",
                                  attrs: {
                                    "data-vv-as": "date",
                                    name: "date",
                                    type: "text",
                                    disabled: ""
                                  },
                                  domProps: { value: _vm.user.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.user,
                                        "name",
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
                    staticClass: "btn bg-default float-right",
                    attrs: { disabled: _vm.$isProcessing, type: "submit" },
                    on: {
                      click: function($event) {
                        _vm.onSave()
                      }
                    }
                  },
                  [
                    _vm._v("\n            Save Inventory\n            "),
                    _c("i", { staticClass: "far fa-save ml-1" })
                  ]
                )
              ])
            ])
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-59317872", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59317872\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59317872\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("55549ec7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59317872\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inventory.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59317872\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inventory.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59317872\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59317872\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue")
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