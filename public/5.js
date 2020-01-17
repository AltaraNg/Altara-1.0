webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImagePreview.vue":
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

exports.default = {
    props: {
        preview: {
            type: [String, File],
            default: null
        }
    },
    data: function data() {
        return {
            image: null
        };
    },
    created: function created() {
        this.setPreview();
    },

    watch: {
        'preview': 'setPreview'
    },
    methods: {
        setPreview: function setPreview() {
            var _this = this;

            if (this.preview instanceof File) {
                var fileReader = new FileReader();
                fileReader.onload = function (event) {
                    _this.image = event.target.result;
                };
                fileReader.readAsDataURL(this.preview);
            } else if (typeof this.preview === 'string') {
                this.image = 'https://s3.eu-west-2.amazonaws.com/altara-one/' + this.preview;
            } else this.image = null;
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ImagePreview = __webpack_require__("./resources/assets/js/components/ImagePreview.vue");

var _ImagePreview2 = _interopRequireDefault(_ImagePreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        ImagePreview: _ImagePreview2.default
    },
    props: {
        value: {
            type: [String, File],
            default: null
        },
        usage: {
            type: [String],
            default: 'verification'
        }
    },
    methods: {
        upload: function upload(e) {
            var files = e.target.files;
            if (files && files.length > 0) this.$emit('input', files[0]);
        }
    }
}; //
//
//
//
//
//

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/product/form.vue":
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

var _ImageUpload = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(to) {
    var urls = { create: "/api/product/create", edit: "/api/product/" + to.params.id + "/edit" };
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

exports.default = {
    components: { Typeahead: _Typeahead2.default, CustomHeader: _customHeader2.default, ImageUpload: _ImageUpload2.default },
    props: {},
    data: function data() {
        return {
            form: {},
            categories: [],
            brands: [],
            mode: null,
            error: {},
            show: false,
            store: '/api/product',
            method: 'POST',
            statuses: [{ name: 'available', value: 1 }, { name: 'unavailable', value: 0 }]

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
            _vue2.default.set(this.$data, 'form', data.form);
            _vue2.default.set(this.$data, 'brands', data.brands);
            _vue2.default.set(this.$data, 'categories', data.categories);
            if (this.mode === 'edit') {
                this.store = "/api/product/" + this.$route.params.id;
                this.method = 'PUT';
            }
            this.show = true;
        },
        modal: function modal(name) {
            $("#" + name).modal('toggle');
            /*this method is used to automatically
            * toggle the modal with the id of
            * "name passed to it"*/
            this.errors.clear(name);
        },
        onSave: function onSave() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        (0, _api.byMethod)(_this.method, _this.store, _this.form).then(function (_ref2) {
                            var data = _ref2.data;

                            if (data.saved || data.updated) {
                                (0, _log.log)(data.log, data.staff_id);
                                _vue2.default.set(_this.$data, 'form', data.form);
                                _flash2.default.setSuccess(data.message, 5000);
                                if (data['updated']) _this.$router.push('/log/products');
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
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        }
    },
    watch: {
        form: {
            handler: function handler(val) {
                var brand = this.brands.find(function (_ref4) {
                    var id = _ref4.id;
                    return id === val.brand_id;
                });
                var category = this.categories.find(function (_ref5) {
                    var id = _ref5.id;
                    return id === val.category_id;
                });
                _vue2.default.set(this.$data.form, 'name', val.feature + " " + (brand ? brand.name : '') + " " + (category ? category.name : ''));
            },
            deep: true
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-162bd0b6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/product/form.vue":
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
            to: "/log/products",
            title: _vm.mode + " product",
            "button-title": "view Products!"
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
                  return _vm.onSave($event)
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
                      _c("label", [_vm._v("Product name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: "",
                          placeholder: "product name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.error.name
                        ? _c("small", [_vm._v(_vm._s(_vm.error.name[0]))])
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
                      _c("label", [_vm._v("Product feature")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.feature,
                            expression: "form.feature"
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
                          name: "feature",
                          placeholder: "product feature",
                          type: "text"
                        },
                        domProps: { value: _vm.form.feature },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "feature", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("feature")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("feature")))
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
                      _c("label", [_vm._v("Brand")]),
                      _vm._v(" "),
                      _c("typeahead", {
                        attrs: { options: _vm.brands, caption: "name" },
                        model: {
                          value: _vm.form.brand_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "brand_id", $$v)
                          },
                          expression: "form.brand_id"
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
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Category")]),
                      _vm._v(" "),
                      _c("typeahead", {
                        attrs: { options: _vm.categories, caption: "name" },
                        model: {
                          value: _vm.form.category_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "category_id", $$v)
                          },
                          expression: "form.category_id"
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
                      _c("label", [_vm._v("Retail Price")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.retail_price,
                            expression: "form.retail_price"
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
                          name: "price",
                          placeholder: "retail price",
                          type: "number"
                        },
                        domProps: { value: _vm.form.retail_price },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "retail_price",
                              $event.target.value
                            )
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
                      _c("label", { staticClass: "w-100 float-left" }, [
                        _vm._v("Availability Status")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.statuses, function(ref) {
                        var name = ref.name
                        var value = ref.value
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
                                  value: _vm.form.is_active,
                                  expression: "form.is_active"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                id: name,
                                name: "status",
                                type: "radio"
                              },
                              domProps: {
                                value: value,
                                checked: _vm._q(_vm.form.is_active, value)
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(_vm.form, "is_active", value)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: name } }, [
                              _vm._v(_vm._s(name))
                            ])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.errors.first("status")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("status")))
                          ])
                        : _vm._e()
                    ],
                    2
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
                              "\n                                Cancel\n                            "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-default",
                        attrs: { disabled: _vm.$isProcessing, type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm._f("capitalize")(_vm.mode)) +
                            " Product "
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
    require("vue-hot-reload-api")      .rerender("data-v-162bd0b6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue":
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
            attrs: { type: "text", value: "null" },
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-78eff338\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.image
    ? _c("div", { staticClass: "position-relative" }, [
        _c("img", { attrs: { src: _vm.image } }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-danger upload-close m-0 px-3 py-2",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$emit("close")
              }
            }
          },
          [_c("i", { staticClass: "fas fa-times text-white" })]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78eff338", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e5db395\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "image" },
    [
      _vm.value
        ? _c("image-preview", {
            attrs: { preview: _vm.value },
            on: {
              close: function($event) {
                _vm.$emit("input", null)
              }
            }
          })
        : _c("div", [
            _c("input", {
              attrs: { type: "file", accept: "images/*" },
              on: { change: _vm.upload }
            })
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-7e5db395", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e2d34c0a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
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

/***/ "./resources/assets/js/components/ImagePreview.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImagePreview.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-78eff338\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\ImagePreview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78eff338", Component.options)
  } else {
    hotAPI.reload("data-v-78eff338", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e5db395\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\ImageUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e5db395", Component.options)
  } else {
    hotAPI.reload("data-v-7e5db395", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da2cc40\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6da2cc40\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6da2cc40"
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