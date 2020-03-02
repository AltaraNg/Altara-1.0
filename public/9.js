webpackJsonp([9],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _form = __webpack_require__("./resources/assets/js/utilities/form.js");

var _ImageUpload = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function initialize(to) {
    var urls = { create: 'user/create', edit: 'user/' + to.params.id + '/edit' };
    return urls[to.meta.mode];
}

exports.default = {

    components: { ImageUpload: _ImageUpload2.default },

    data: function data() {

        return {
            imgForm: {
                cv: null
            },
            mode: null,
            show: false,
            store: '/api/user',
            method: 'POST',
            form: {},
            error: {},
            roles: {},
            branches: {},
            countries: ['nigeria'],
            gender: ['male', 'female'],
            categories: {},
            statuses: ['married', 'single', 'divorced', 'complicated'],
            qualifications: ['NCE', 'HND', 'OND', 'bachelors', 'masters', 'doctorate'],
            transfer: false
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)('/api/' + initialize(to)).then(function (_ref) {
            var data = _ref.data;
            return next(function (vm) {
                return vm.prepareForm(data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        (0, _api.get)(initialize(to)).then(function (_ref2) {
            var data = _ref2.data;

            _this.prepareForm(data);
            next();
        });
    },


    methods: {
        done: function done() {
            this.$router.push('/hrm/employee');
        },
        prepareForm: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$prepareStates();

                            case 2:
                                this.mode = this.$route.meta.mode;
                                this.error = {};
                                this.errors.clear();
                                this.form = data.form;
                                this.roles = data.roles;
                                this.branches = data.branches;
                                this.categories = data.categories;
                                if (this.$route.meta.mode === 'edit') {
                                    this.store = '/api/user/' + this.$route.params.id;
                                    this.method = 'PUT';
                                }
                                this.show = true;

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function prepareForm(_x) {
                return _ref3.apply(this, arguments);
            }

            return prepareForm;
        }(),
        onSave: function onSave() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this2.$network()) {
                        _this2.$LIPS(true);
                        _this2.error = {};
                        _this2.form.transfer = _this2.transfer;
                        (0, _api.byMethod)(_this2.method, _this2.store, _this2.form).then(function (_ref4) {
                            var data = _ref4.data;

                            if (!!_this2.imgForm.cv) _this2.onSaveCV();
                            var staff_id = data.staff_id,
                                password = data.password,
                                message = data.message,
                                success = data.success,
                                transfer = data.transfer,
                                mode = _this2.mode;

                            if (success || transfer) {
                                var text = success ? 'Welcome to Altara credit. Please secure your login\n                                    details. Staff ID: ' + staff_id + ', password: ' + password : 'Transfer Successful, your new staff ID is ' + staff_id + ' ';
                                new _sms.Message(text, _this2.form.phone_number).send();
                            }
                            (0, _log.log)('Staff ' + mode, String(staff_id));
                            _flash2.default.setSuccess(mode === 'edit' ? message : 'Staff ' + mode + 'd with ID ' + staff_id + '.\n                                    Login details has been sent via SMS to the employee!', 20000);
                            _this2.done();
                        }).catch(function (e) {
                            e = e.response;
                            if (e.status === 422) {
                                _this2.error = e.data.errors ? e.data.errors : e.data;
                                _this2.$networkErr('unique');
                            }
                        }).finally(function () {
                            _this2.$scrollToTop();
                            _this2.$LIPS(false);
                        });
                    } else _this2.$networkErr();
                } else _this2.$networkErr('form');
            });
        },
        onSaveCV: function onSaveCV() {
            var cv = (0, _form.toMulipartedForm)(this.imgForm, 'edit');
            (0, _api.post)('/api/user/' + this.$route.params.id + '/cv', cv).then(function (_ref5) {
                var data = _ref5.data;

                if (data.cv_saved) _flash2.default.setSuccess('CV Successfully updated!');
            });
        },
        viewCV: function viewCV(path) {
            window.open('https://s3.eu-west-2.amazonaws.com/altara-one/' + path, '_blank');
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-319f68d5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "image" },
    [
      _vm.value && _vm.usage === "verification"
        ? _c("image-preview", {
            attrs: { preview: _vm.value },
            on: {
              close: function($event) {
                return _vm.$emit("input", null)
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
    require("vue-hot-reload-api")      .rerender("data-v-319f68d5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54e76424\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue":
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
            [_c("h6", [_vm._v(_vm._s(_vm.mode) + " Staff")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pl-4 pr-4" }, [
            _vm.show
              ? _c(
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
                    _c("div", { staticClass: "clearfix" }, [
                      _c("h5", [
                        _vm._v(
                          "\n                            Employee Personal Details\n                            "
                        ),
                        _vm.mode === "edit"
                          ? _c("span", { staticClass: "float-right" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-link mr-5 float-left",
                                  attrs: { href: "javascript:" },
                                  on: {
                                    click: function($event) {
                                      _vm.transfer = !_vm.transfer
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    click here to activate/deactivate transfer!\n                                "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    "Transfer " + (_vm.transfer ? "ON" : "OFF")
                                  ) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.full_name,
                                expression: "form.full_name"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:100",
                                expression: "'required|max:100'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "name",
                              placeholder: "employee full name",
                              type: "text"
                            },
                            domProps: { value: _vm.form.full_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "full_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("name")
                            ? _c("small", [
                                _vm._v(_vm._s(_vm.errors.first("name")))
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
                          _c("label", [_vm._v("Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.phone_number,
                                expression: "form.phone_number"
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
                            domProps: { value: _vm.form.phone_number },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "phone_number",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("phone_number")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("phone_number")) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.phone_number
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.error.phone_number[0]) +
                                    "\n                            "
                                )
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
                          _c("label", [_vm._v("Marital Status")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
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
                              staticClass: "custom-select w-100",
                              attrs: {
                                "data-vv-validate-on": "blur",
                                name: "status"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "status",
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
                                { attrs: { selected: "", value: "" } },
                                [_vm._v("select status")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.statuses, function(status) {
                                return _c(
                                  "option",
                                  { domProps: { value: status } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm._f("capitalize")(status)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("status")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("status")) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Nationality")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.nationality,
                                  expression: "form.nationality"
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
                                name: "nationality"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "nationality",
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
                                { attrs: { selected: "", value: "" } },
                                [_vm._v("select nationality")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.countries, function(country) {
                                return _c(
                                  "option",
                                  { domProps: { value: country } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm._f("capitalize")(country)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("nationality")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("nationality")) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Date of Birth")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.date_of_birth,
                                expression: "form.date_of_birth"
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
                              "data-vv-as": "date of birth",
                              name: "date_of_birth",
                              type: "date"
                            },
                            domProps: { value: _vm.form.date_of_birth },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "date_of_birth",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("date_of_birth")
                            ? _c("small", [
                                _vm._v(
                                  _vm._s(_vm.errors.first("date_of_birth"))
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.date_of_birth
                            ? _c("small", [
                                _vm._v(_vm._s(_vm.error.date_of_birth[0]))
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
                          _c("label", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|email|min:1",
                                expression: "'required|email|min:1'"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.error.email },
                            attrs: {
                              name: "email",
                              placeholder: "name@example.com",
                              type: "email"
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("email")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("email")) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.email
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.error.email[0]) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Role in the company")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.role_id,
                                  expression: "form.role_id"
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
                                "data-vv-name": "role",
                                "data-vv-validate-on": "blur",
                                name: "role",
                                disabled:
                                  _vm.mode === "edit" ? !_vm.transfer : false
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "role_id",
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
                                { attrs: { selected: "", value: "" } },
                                [_vm._v("select role")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.roles, function(ref) {
                                var name = ref.name
                                var id = ref.id
                                return _c(
                                  "option",
                                  { domProps: { value: id } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm._f("capitalize")(name)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("role")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("role")) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Staff Category")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.category,
                                  expression: "form.category"
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
                                "data-vv-name": "category",
                                "data-vv-validate-on": "blur",
                                name: "qualification",
                                disabled:
                                  _vm.mode === "edit" ? !_vm.transfer : false
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "category",
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
                                { attrs: { selected: "", value: "" } },
                                [_vm._v("select category")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.categories, function(ref) {
                                var name = ref.name
                                return _c(
                                  "option",
                                  { domProps: { value: name } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm._f("capitalize")(name)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("category")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("category")) +
                                    "\n                            "
                                )
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
                          _c("label", [_vm._v("Operations Branch")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.branch_id,
                                  expression: "form.branch_id"
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
                                "data-vv-name": "branch",
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "branch_id",
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
                                { attrs: { selected: "", value: "" } },
                                [_vm._v("select branch")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.branches, function(ref) {
                                var name = ref.name
                                var id = ref.id
                                return _c(
                                  "option",
                                  { domProps: { value: id } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm._f("capitalize")(name)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("branch")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("branch")) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Date of Appointment")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.date_of_appointment,
                                expression: "form.date_of_appointment"
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
                              "data-vv-as": "date of appointment",
                              name: "date_of_appointment",
                              type: "date"
                            },
                            domProps: { value: _vm.form.date_of_appointment },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "date_of_appointment",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("date_of_appointment")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("date_of_appointment")
                                    ) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _vm.mode === "edit"
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-6 col-12 float-left px-0 px-md-3"
                            },
                            [
                              _c("label", [_vm._v("Date of Exit")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.date_of_exit,
                                    expression: "form.date_of_exit"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: { value: _vm.form.date_of_exit },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "date_of_exit",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Highest Qualification")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.highest_qualification,
                                  expression: "form.highest_qualification"
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
                                "data-vv-name": "qualification",
                                "data-vv-validate-on": "blur",
                                name: "qualification"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "highest_qualification",
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
                                { attrs: { selected: "", value: "" } },
                                [_vm._v("select qualification")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.qualifications, function(
                                qualification
                              ) {
                                return _c(
                                  "option",
                                  { domProps: { value: qualification } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm._f("capitalize")(qualification)
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("qualification")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("qualification")) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _vm.mode === "edit"
                        ? _c("div", {
                            staticClass: "spaceBetween mb-md-2 mb-0"
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "w-100 float-left pl-1" },
                            [_vm._v("Gender")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.gender, function(sex) {
                            return _c(
                              "div",
                              {
                                staticClass:
                                  "radio p-0 col-md-6 col-6 float-left"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.gender,
                                      expression: "form.gender"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  attrs: {
                                    id: sex,
                                    name: "gender",
                                    type: "radio"
                                  },
                                  domProps: {
                                    value: sex,
                                    checked: _vm._q(_vm.form.gender, sex)
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(_vm.form, "gender", sex)
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: sex } }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(sex) +
                                      "\n                                "
                                  )
                                ])
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _vm.errors.first("gender")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("gender")) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Describe Location")]),
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
                                _vm.$set(
                                  _vm.form,
                                  "address",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("address")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("address")) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceAfter" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Referee Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Referee 1 Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_1,
                                expression: "form.referee_1"
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
                              "data-vv-as": "referee 1 full name",
                              name: "referee_1",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.referee_1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_1",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_1")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("referee_1")) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Referee 1 Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_1_phone_no,
                                expression: "form.referee_1_phone_no"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|numeric|max:11|min:11",
                                expression: "'required|numeric|max:11|min:11'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "referee 1 phone number",
                              name: "referee_1_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.referee_1_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_1_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_1_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("referee_1_phone_no")
                                    ) +
                                    "\n                            "
                                )
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
                          _c("label", [_vm._v("Referee 2 Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_2,
                                expression: "form.referee_2"
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
                              "data-vv-as": "referee 2 full name",
                              name: "referee_2",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.referee_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_2",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_2")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("referee_2")) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Referee 2 Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_2_phone_no,
                                expression: "form.referee_2_phone_no"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|numeric|max:11|min:11",
                                expression: "'required|numeric|max:11|min:11'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "referee 2 phone number",
                              name: "referee_2_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.referee_2_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_2_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_2_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("referee_2_phone_no")
                                    ) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceAfter" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Next of Kin Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Next of Kin Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.next_of_kin_name,
                                expression: "form.next_of_kin_name"
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
                              "data-vv-as": "next of kin name",
                              name: "next_of_kin_name",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.next_of_kin_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "next_of_kin_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("next_of_kin_name")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("next_of_kin_name")
                                    ) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Next of Kin Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.next_of_kin_phone_no,
                                expression: "form.next_of_kin_phone_no"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|numeric|max:11|min:11",
                                expression: "'required|numeric|max:11|min:11'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "next of kin phone number",
                              name: "next_of_kin_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.next_of_kin_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "next_of_kin_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("next_of_kin_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("next_of_kin_phone_no")
                                    ) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceAfter" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("First Guarantor's Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Guarantor's Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_name,
                                expression: "form.guarantor_name"
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
                              "data-vv-as": "guarantor name",
                              name: "guarantor_name",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.guarantor_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_name")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.first("guarantor_name")) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Guarantor's Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_phone_no,
                                expression: "form.guarantor_phone_no"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|numeric|max:11|min:11",
                                expression: "'required|numeric|max:11|min:11'"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.error.guarantor_phone_no
                            },
                            attrs: {
                              "data-vv-as": "guarantor number",
                              name: "guarantor_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.guarantor_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_phone_no")
                                    ) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.guarantor_phone_no
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.error.guarantor_phone_no[0]) +
                                    "\n                            "
                                )
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
                          _c("label", [_vm._v("Guarantor's relationship")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_relationship,
                                expression: "form.guarantor_relationship"
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
                              "data-vv-as": "guarantor relationship",
                              name: "guarantor_relationship",
                              placeholder: "enter guarantor relationship here",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.form.guarantor_relationship
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_relationship",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_relationship")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_relationship")
                                    ) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Guarantor's address")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_address,
                                expression: "form.guarantor_address"
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
                              "data-vv-as": "guarantor address",
                              name: "guarantor_address",
                              placeholder: "guarantor address",
                              rows: "1"
                            },
                            domProps: { value: _vm.form.guarantor_address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_address",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_address")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_address")
                                    ) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Second Guarantor's Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Guarantor's Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_name_2,
                                expression: "form.guarantor_name_2"
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
                              "data-vv-as": "guarantor name",
                              name: "guarantor_name_2",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.guarantor_name_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_name_2",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_name_2")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_name_2")
                                    ) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Guarantor's Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_phone_no_2,
                                expression: "form.guarantor_phone_no_2"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|numeric|max:11|min:11",
                                expression: "'required|numeric|max:11|min:11'"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.error.guarantor_phone_no_2
                            },
                            attrs: {
                              "data-vv-as": "guarantor number",
                              name: "guarantor_phone_no_2",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.guarantor_phone_no_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_phone_no_2",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_phone_no_2")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_phone_no_2")
                                    ) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.guarantor_phone_no_2
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.error.guarantor_phone_no_2[0]) +
                                    "\n                            "
                                )
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
                          _c("label", [_vm._v("Guarantor's relationship")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_relationship_2,
                                expression: "form.guarantor_relationship_2"
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
                              "data-vv-as": "guarantor relationship",
                              name: "guarantor_relationship_2",
                              placeholder: "enter guarantor relationship here",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.form.guarantor_relationship_2
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_relationship_2",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_relationship_2")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first(
                                        "guarantor_relationship_2"
                                      )
                                    ) +
                                    "\n                            "
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
                          _c("label", [_vm._v("Guarantor's address")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_address_2,
                                expression: "form.guarantor_address_2"
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
                              "data-vv-as": "guarantor address",
                              name: "guarantor_address_2",
                              placeholder: "guarantor address",
                              rows: "1"
                            },
                            domProps: { value: _vm.form.guarantor_address_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_address_2",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_address_2")
                            ? _c("small", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_address_2")
                                    ) +
                                    "\n                            "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Upload Documents")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("div", [
                            _vm.mode === "edit" && _vm.$data.form["cv_url"]
                              ? _c("div", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "view_cv mr-4",
                                      on: {
                                        click: function($event) {
                                          return _vm.viewCV(_vm.form.cv_url)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.form.cv_url.substring(3))
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    "\n                                    ||\n                                    "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "view_cv ml-4",
                                      on: {
                                        click: function($event) {
                                          _vm.form.cv_url = ""
                                        }
                                      }
                                    },
                                    [_vm._v("Edit CV")]
                                  )
                                ])
                              : _c(
                                  "div",
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "cv_label mr-4" },
                                      [_vm._v("CV")]
                                    ),
                                    _vm._v(" "),
                                    _c("image-upload", {
                                      staticClass: "cv_upload",
                                      attrs: { usage: "cv" },
                                      model: {
                                        value: _vm.imgForm.cv,
                                        callback: function($$v) {
                                          _vm.$set(_vm.imgForm, "cv", $$v)
                                        },
                                        expression: "imgForm.cv"
                                      }
                                    })
                                  ],
                                  1
                                )
                          ])
                        ]
                      ),
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
                          {
                            staticClass: "clearfix d-flex justify-content-end"
                          },
                          [
                            _vm.mode === "edit"
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "mx-3 btn btn-secondary",
                                    attrs: { type: "button" },
                                    on: { click: _vm.done }
                                  },
                                  [
                                    _vm._v(
                                      "Cancel\n                            "
                                    )
                                  ]
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
                                    " Employee "
                                ),
                                _c("i", {
                                  staticClass: "far fa-paper-plane ml-1"
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-54e76424", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-787cf924\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue":
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
                return _vm.$emit("close")
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
    require("vue-hot-reload-api")      .rerender("data-v-787cf924", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/ImagePreview.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImagePreview.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-787cf924\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue")
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
Component.options.__file = "resources/assets/js/components/ImagePreview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-787cf924", Component.options)
  } else {
    hotAPI.reload("data-v-787cf924", Component.options)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-319f68d5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue")
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
Component.options.__file = "resources/assets/js/components/ImageUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-319f68d5", Component.options)
  } else {
    hotAPI.reload("data-v-319f68d5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/utilities/form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toMulipartedForm = toMulipartedForm;
exports.objectToFormData = objectToFormData;
function toMulipartedForm(form, mode) {
    if (mode === 'edit' && typeof form.image === 'string') {
        //remove reactivity
        var temp = JSON.parse(JSON.stringify(form));
        delete temp.image;
        return temp;
    } else {
        return objectToFormData(form);
    }
}

function objectToFormData(obj, form, namespace) {
    var fd = form || new FormData();
    var formKey = void 0;
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }
            if (obj[property] instanceof Array) {
                for (var i = 0; i < obj[property].length; i++) {
                    objectToFormData(obj[property][i], fd, property + '[' + i + ']');
                }
            } else if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
                objectToFormData(obj[property], fd, property);
            } else {
                fd.append(formKey, obj[property]);
            }
        }
    }
    return fd;
}

/***/ }),

/***/ "./resources/assets/js/views/HRM/employee/employeeForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54e76424\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue")
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
Component.options.__file = "resources/assets/js/views/HRM/employee/employeeForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54e76424", Component.options)
  } else {
    hotAPI.reload("data-v-54e76424", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});