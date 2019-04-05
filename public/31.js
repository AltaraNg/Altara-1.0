webpackJsonp([31],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/brand/form.vue":
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
                brand_id: 'BR-0001', //Expected to come from a counter in the db
                brand_name: null
            },
            mode: null,
            error: {},
            show: false,
            resource: 'brands',
            store: '/api/brands',
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
        this.store = '/api/brands/' + this.$route.params.id;
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3dbe9c5e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/brand/form.vue":
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
            [_c("h6", [_vm._v(_vm._s(_vm.mode) + " Brand")])]
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
                _c("h5", [_vm._v("Brand Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Brand ID")]),
                      _vm._v(" "),
                      _c("input", {
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
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "brand id",
                          disabled: "",
                          name: "brand_id",
                          placeholder: "brand id",
                          type: "text"
                        },
                        domProps: { value: _vm.form.brand_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "brand_id", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("brand_id")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("brand_id")))
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
                      _c("label", [_vm._v("Brand name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.brand_name,
                            expression: "form.brand_name"
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
                          "data-vv-as": "brand name",
                          name: "brand_name",
                          placeholder: "brand name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.brand_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "brand_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("brand_name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("brand_name")))
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
                              "\n                                " +
                                _vm._s(_vm._f("capitalize")(_vm.mode)) +
                                " Brand "
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
    require("vue-hot-reload-api")      .rerender("data-v-3dbe9c5e", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/LOG/brand/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/brand/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3dbe9c5e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/brand/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\brand\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dbe9c5e", Component.options)
  } else {
    hotAPI.reload("data-v-3dbe9c5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});