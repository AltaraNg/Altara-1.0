<<<<<<< HEAD
webpackJsonp([17],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__("./resources/assets/js/views/HRM/utility/form.vue");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        UtilityForm: _form2.default
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        //the component is never called exclusively its
        //is called by another parent component.
        //the action is purpose or the context
        action: '',
        receivedData: { default: '' },
        bus: { default: '' }
    },
    data: function data() {
        return {
            form: {},
            error: {},
            roles: {},
            branches: {},
            password: '',
            countries: ['nigeria'],
            gender: ['male', 'female'],
            categories: {},
            textDetails: { phone: '', loginPassword: '', loginID: '' },
            statuses: ['married', 'single', 'divorced', 'complicated'],
            qualifications: ['NCE', 'HND', 'OND', 'bachelors', 'masters', 'doctorate']
        };
    },

    methods: {
        ifReg: function ifReg(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === register
            return a === 'register';
        },
        ifUp: function ifUp(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === update
            return a === 'update';
        },
        prepareForm: function prepareForm(data) {
            //this function is used when a data is sent to this component
            //or this component makes a request to backend the
            //data received is used to prepare the form
            this.error = {};
            this.form = data.form;
            this.roles = data.roles;
            this.branches = data.branches;
            this.categories = data.categories;
        },
        register: function register() {
            var _this = this;

            var emp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var AC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            //NB: this function is used by the employee register, employee update and for portal access update.
            //the AC means: if the function is called to updated the access control or not.
            //by default it set to 1, but when it is called from the register
            //form it is set to 0 to show that it is not for access
            //control update rather for registration.

            //emp for context :registration is the form, ie a new user hences uses
            //the default url '/api/register' for registration
            //emp for context :details update and portal access
            //update are the staff details to be updated
            if (AC === 1) this.updatingPortalAccess = true;
            this.$validator.validateAll().then(function (result) {
                if (AC === 1) {
                    //AC means the context : access control, by default its set to true i.e 1 because this function
                    //was called as a callback on a this.$emit process and cant pass two params to the function
                    //the employee register call the function in this manner : register(form,0) to show
                    //its not for access control context again;
                    _this.errors.clear();
                    result = true;
                    //This process doesn't need validation because the form has only one field
                    //ref: DataViewer.vue => id="editPortalAccess"
                }
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        _this.error = {};
                        var newUrl = '/api/register',
                            message = void 0,
                            logMsg = void 0;
                        //for registration the url is used
                        if (_this.action === 'update') newUrl = '/api/employee/' + emp.id + '/update';
                        //else f the form action is not registration den its update
                        //hence the url "/api/employee/{id}/update"
                        (0, _api.post)(newUrl, emp).then(function (res) {
                            if (res.data.hasOwnProperty('registered')) {
                                //if the response is from '/api/register'
                                logMsg = 'Registered';
                                _this.textDetails.loginID = String(res.data.staff_id);
                                _this.textDetails.phone = String(parseInt(_this.form.phone_number));
                                _this.textDetails.loginPassword = _this.password = res.data.password;
                                message = 'Staff registered with ID ' + res.data.staff_id + '. An sms has been sent to the employee with his Login details!';
                                _sms2.default.welcome(_this.textDetails);
                            } else if (res.data.hasOwnProperty('updated')) {
                                //if the response is from "/api/employee/{id}/update"
                                logMsg = 'Updated';
                                message = 'Staff details updated!';
                                _this.$emit('done');
                                //it emits an event to the parent(dataviewer.vue)
                                // since its for update
                            }
                            (0, _log.log)('Staff' + logMsg, String(res.data.staff_id));
                            _flash2.default.setSuccess(message, 20000);
                            if (_this.ifReg(_this.action)) _this.form = res.data.form;
                            //the line above is there so as to allow the log
                            // method use its data before resetting
                        }).catch(function (e) {
                            e = e.response;
                            if (e.status === 422) {
                                _this.error = e.data.errors ? e.data.errors : e.data;
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
    created: function created() {
        var _this2 = this;

        if (this.ifReg(this.action)) (0, _api.get)('/api/create').then(function (res) {
            return _this2.prepareForm(res.data);
        });
        //if registration fetch data for new customer registration and prepare form
        if (this.action === 'update') this.bus.$on('submit', this.register);
        //this.bus is a (vue instance and )prop received from dataviewer to track when the access portal form(ref: DataViewer.vue
        //=> id="editPortalAccess") is submitted from the data viewer. this is because we want to use the 'register'
        //function to process both (1)registration, (2)update details and (3)update portal access
    },

    watch: {
        receivedData: function receivedData(newVal) {
            //watches when a data is sent from the parent (dataviewer)
            this.prepareForm(newVal);
            //prepares the form with the data received
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ccfe15a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.register(_vm.form, 0)
        }
      }
    },
    [
      _c("h5", [_vm._v("Employee Personal Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "text",
              placeholder: "employee full name",
              name: "name"
            },
            domProps: { value: _vm.form.full_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "full_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("name")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("name")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "phone_number",
              "data-vv-as": "phone number"
            },
            domProps: { value: _vm.form.phone_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "phone_number", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("phone_number")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("phone_number")) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.phone_number
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.error.phone_number[0]) +
                    "\n        "
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
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              attrs: { name: "status", "data-vv-validate-on": "blur" },
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
                    "status",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select status")
              ]),
              _vm._v(" "),
              _vm._l(_vm.statuses, function(status) {
                return _c("option", { domProps: { value: status } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(status)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("status")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("status")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              attrs: { name: "nationality", "data-vv-validate-on": "blur" },
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
                    "nationality",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select nationality")
              ]),
              _vm._v(" "),
              _vm._l(_vm.countries, function(country) {
                return _c("option", { domProps: { value: country } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(country)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("nationality")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("nationality")) +
                    "\n        "
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
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "date",
              name: "date_of_birth",
              "data-vv-as": "date of birth"
            },
            domProps: { value: _vm.form.date_of_birth },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "date_of_birth", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("date_of_birth")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("date_of_birth")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.date_of_birth
            ? _c("small", [_vm._v(_vm._s(_vm.error.date_of_birth[0]))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "email",
              placeholder: "name@example.com",
              name: "email"
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
                  "\n            " +
                    _vm._s(_vm.errors.first("email")) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.email
            ? _c("small", [
                _vm._v(
                  "\n            " + _vm._s(_vm.error.email[0]) + "\n        "
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
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
                name: "role",
                "data-vv-validate-on": "blur",
                "data-vv-name": "role"
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
                    "role_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select role")
              ]),
              _vm._v(" "),
              _vm._l(_vm.roles, function(role) {
                return _c("option", { domProps: { value: role.id } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(role.name)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("role")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("role")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
                name: "qualification",
                "data-vv-validate-on": "blur",
                "data-vv-name": "qualification"
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
                    "highest_qualification",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select qualification")
              ]),
              _vm._v(" "),
              _vm._l(_vm.qualifications, function(qualification) {
                return _c("option", { domProps: { value: qualification } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(qualification)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.has("qualification")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("qualification")) +
                    "\n        "
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
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
                name: "branch",
                "data-vv-validate-on": "blur",
                "data-vv-name": "branch"
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
                    "branch_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select branch")
              ]),
              _vm._v(" "),
              _vm._l(_vm.branches, function(branch) {
                return _c("option", { domProps: { value: branch.id } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(branch.name)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.has("branch")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("branch")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "date",
              name: "date_of_appointment",
              "data-vv-as": "date of appointment"
            },
            domProps: { value: _vm.form.date_of_appointment },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "date_of_appointment", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("date_of_appointment")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("date_of_appointment")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _vm.ifUp(_vm.action)
        ? _c(
            "div",
            {
              staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3"
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
                    _vm.$set(_vm.form, "date_of_exit", $event.target.value)
                  }
                }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
                name: "qualification",
                "data-vv-validate-on": "blur",
                "data-vv-name": "category"
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
                    "category",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select category")
              ]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category) {
                return _c("option", { domProps: { value: category.name } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(category.name)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.has("category")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("category")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", { staticClass: "w-100 float-left pl-1" }, [
            _vm._v("Gender")
          ]),
          _vm._v(" "),
          _vm._l(_vm.gender, function(sex) {
            return _c(
              "div",
              { staticClass: "radio p-0 col-md-6 col-6 float-left" },
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
                  attrs: { name: "gender", type: "radio", id: sex },
                  domProps: {
                    value: sex,
                    checked: _vm._q(_vm.form.gender, sex)
                  },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.form, "gender", sex)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: sex } }, [
                  _vm._v("\n                " + _vm._s(sex) + "\n            ")
                ])
              ]
            )
          }),
          _vm._v(" "),
          _vm.errors.first("gender")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("gender")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-12 float-left px-0 px-md-3" }, [
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
          attrs: { placeholder: "address", rows: "1", name: "address" },
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
                "\n            " +
                  _vm._s(_vm.errors.first("address")) +
                  "\n        "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "spaceAfter" }),
      _vm._v(" "),
      _c("h5", [_vm._v("Referee Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "text",
              placeholder: "enter full name here",
              name: "referee_1",
              "data-vv-as": "referee 1 full name"
            },
            domProps: { value: _vm.form.referee_1 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_1", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_1")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_1")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "referee_1_phone_no",
              "data-vv-as": "referee 1 phone number"
            },
            domProps: { value: _vm.form.referee_1_phone_no },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_1_phone_no", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_1_phone_no")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_1_phone_no")) +
                    "\n        "
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
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "text",
              placeholder: "enter full name here",
              name: "referee_2",
              "data-vv-as": "referee 2 full name"
            },
            domProps: { value: _vm.form.referee_2 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_2", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_2")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_2")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "referee_2_phone_no",
              "data-vv-as": "referee 2 phone number"
            },
            domProps: { value: _vm.form.referee_2_phone_no },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_2_phone_no", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_2_phone_no")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_2_phone_no")) +
                    "\n        "
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
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "text",
              placeholder: "enter full name here",
              name: "next_of_kin_name",
              "data-vv-as": "next of kin name"
            },
            domProps: { value: _vm.form.next_of_kin_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "next_of_kin_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("next_of_kin_name")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("next_of_kin_name")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "next_of_kin_phone_no",
              "data-vv-as": "next of kin phone number"
            },
            domProps: { value: _vm.form.next_of_kin_phone_no },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "next_of_kin_phone_no", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("next_of_kin_phone_no")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("next_of_kin_phone_no")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _c("hr", { staticClass: "style-two" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"
        },
        [
          _vm.ifReg(_vm.action)
            ? _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-lg bg-default",
                    attrs: { type: "submit", disabled: _vm.$isProcessing }
                  },
                  [
                    _vm._v("\n                Register Employee "),
                    _c("i", { staticClass: "far fa-paper-plane ml-1" })
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.ifUp(_vm.action)
            ? _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "mx-3 btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "mx-3 btn bg-default float-right",
                    attrs: { type: "submit", disabled: _vm.$isProcessing }
                  },
                  [
                    _vm._v("\n                Update Employee "),
                    _c("i", { staticClass: "far fa-paper-plane ml-1" })
                  ]
                )
              ])
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ccfe15a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2cb6f77b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/Register.vue":
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
            [_c("h6", [_vm._v("Staff Registration")])]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body pl-4 pr-4" },
            [_c("utility-form", { attrs: { action: "register" } })],
            1
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-2cb6f77b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/helpers/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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

/***/ "./resources/assets/js/helpers/sms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

exports.default = {
   message: "",
   welcome: function welcome(details) {
      this.message = "Welcome to Altara credit. Please secure your login details. Staff ID: " + details.loginID + ", password: " + details.loginPassword;
      this.send(details);
   },
   customerReg: function customerReg(details) {
      this.message = "Dear " + details.first_name + " " + details.last_name + ", Welcome to Altara Credit Limited, You are hereby invited to our showroom at " + details.branch.description + " to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: " + details.branch.phone_yoruba + ". Your customer id is: " + details.id;
      this.send({ phone: details.telephone.substr(1) });
   },
   passwordReset: function passwordReset(details) {
      this.message = "Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is " + details.staff_id + ", new password: " + details.password;
      this.send(details);
   },
   dvaMessage: function dvaMessage(details) {
      this.message = details.message;
      this.send(details);
   },
   send: function send(details) {
      (0, _api.get)("/api/message/create?to=234" + details.phone + "&message=" + this.message).then(function (res) {
         var data = JSON.parse(res.data);
         console.log(data);
         if (data.messages[0].status.groupId === 1) {
            console.log("sms sent successfully");
         }
      });
   }
};

/***/ }),

/***/ "./resources/assets/js/views/HRM/employee/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/Register.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2cb6f77b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/Register.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\employee\\Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cb6f77b", Component.options)
  } else {
    hotAPI.reload("data-v-2cb6f77b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/HRM/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/utility/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ccfe15a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/utility/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\utility\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ccfe15a", Component.options)
  } else {
    hotAPI.reload("data-v-0ccfe15a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([17],{"2Q7A":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,a.post)("/api/log",{action:e,description:t})};var a=r("uD8u")},ACyo:function(e,t,r){var a=r("VU/8")(r("Q52E"),r("djyR"),!1,null,null,null);e.exports=a.exports},Q52E:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r("Xxa5")),n=l(r("I3G/")),o=r("2Q7A"),i=l(r("TOoT")),s=r("uD8u");function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function a(n,o){try{var i=t[n](o),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}function u(e){return{create:"/api/branch/create",edit:"/api/branch/"+e.params.id+"/edit"}[e.meta.mode]}t.default={data:function(){return{form:{},banks:{},error:{},mode:null,show:!1,resource:"/branch",store:"/api/branch",method:"POST"}},beforeRouteEnter:function(e,t,r){(0,s.get)(u(e)).then(function(e){r(function(t){return t.prepareForm(e.data)})})},beforeRouteUpdate:function(e,t,r){var a=this;this.show=!1,(0,s.get)(u(e)).then(function(e){a.prepareForm(e.data),r()})},methods:{prepareForm:function(){var e=c(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$prepareStates();case 2:this.mode=this.$route.meta.mode,this.error={},this.errors.clear(),n.default.set(this.$data,"form",t.form),n.default.set(this.$data,"banks",t.banks),"edit"===this.$route.meta.mode&&(this.store="/api/branch/"+this.$route.params.id,this.method="PUT"),this.show=!0;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onSave:function(){var e=c(a.default.mark(function e(){var t=this;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),t.error={},(0,s.byMethod)(t.method,t.store,t.form).then(function(e){(e.data.saved||e.data.updated)&&((0,o.log)("Branch "+t.mode+"d",""+t.form.employee_id),i.default.setSuccess("Branch "+t.mode+"d successfully!",2e4))}).catch(function(e){422===(e=e.response).status&&(t.error=e.data.errors?e.data.errors:e.data,t.$networkErr("unique"))}).finally(function(){return t.done()})):t.$networkErr():t.$networkErr("form")});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),done:function(){this.$router.push("/fsl/branch")}}}},SldL:function(e,t){!function(t){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{(u=t.regeneratorRuntime=c?e.exports:{}).wrap=x;var m="suspendedStart",f="suspendedYield",v="executing",d="completed",p={},h={};h[i]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(j([])));g&&g!==a&&n.call(g,i)&&(h=g);var y=N.prototype=w.prototype=Object.create(h);C.prototype=y.constructor=N,N.constructor=C,N[l]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(y),e},u.awrap=function(e){return{__await:e}},E(L.prototype),L.prototype[s]=function(){return this},u.AsyncIterator=L,u.async=function(e,t,r,a){var n=new L(x(e,t,r,a));return u.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},E(y),y[l]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},u.values=j,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,n){return s.type="throw",s.arg=e,t.next=a,n&&(t.method="next",t.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;$(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=r),p}}}function x(e,t,r,a){var n=t&&t.prototype instanceof w?t:w,o=Object.create(n.prototype),i=new q(a||[]);return o._invoke=function(e,t,r){var a=m;return function(n,o){if(a===v)throw new Error("Generator is already running");if(a===d){if("throw"===n)throw o;return O()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var l=b(e,t,r);if("normal"===l.type){if(a=r.done?d:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=d,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function b(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function w(){}function C(){}function N(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function L(e){var t;this._invoke=function(r,a){function o(){return new Promise(function(t,o){!function t(r,a,o,i){var s=b(e[r],e,a);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(c).then(function(e){l.value=e,o(l)},i)}i(s.arg)}(r,a,t,o)})}return t=t?t.then(o,o):o()}}function k(e,t){var a=e.iterator[t.method];if(a===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,k(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=b(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(e,t,r){e.exports=r("jyFz")},djyR:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeEdit"}},[r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[r("h6",[e._v(e._s(e._f("capitalize")(e.mode))+" Branch")])]),e._v(" "),r("div",{staticClass:"card-body pl-4 pr-4"},[e.show?r("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[r("h5",[e._v("Branch Details")]),e._v(" "),r("div",{staticClass:"clearfix"},[r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Branch Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.error.name},attrs:{"data-vv-as":"branch name",name:"branch_name",placeholder:"branch name",type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),e.errors.first("branch_name")?r("small",[e._v(e._s(e.errors.first("branch_name")))]):e._e(),e._v(" "),e.error.name?r("small",[e._v(e._s(e.error.name[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("State")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.state_id,expression:"form.state_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"state"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"state_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select state")]),e._v(" "),e._l(e.$store.getters.getStates,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("state")?r("small",[e._v(e._s(e.errors.first("state")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Phone (English)")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_english,expression:"form.phone_english"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"phone english",name:"phone_english",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.phone_english},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_english",t.target.value)}}}),e._v(" "),e.errors.first("phone_english")?r("small",[e._v(e._s(e.errors.first("phone_english")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Phone (Yoruba)")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_yoruba,expression:"form.phone_yoruba"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"phone yoruba",name:"phone_yoruba",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.phone_yoruba},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_yoruba",t.target.value)}}}),e._v(" "),e.errors.first("phone_yoruba")?r("small",[e._v(e._s(e.errors.first("phone_yoruba")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",{staticClass:"w-100 float-left pl-1"},[e._v("Status")]),e._v(" "),r("div",{staticClass:"radio pl-1 w-50 pr-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"active",name:"status",type:"radio",value:"active"},domProps:{checked:e._q(e.form.status,"active")},on:{change:function(t){e.$set(e.form,"status","active")}}}),e._v(" "),r("label",{attrs:{for:"active"}},[e._v("Active")])]),e._v(" "),r("div",{staticClass:"radio pl-1 w-50 pr-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"}],attrs:{id:"passive",name:"status",type:"radio",value:"passive"},domProps:{checked:e._q(e.form.status,"passive")},on:{change:function(t){e.$set(e.form,"status","passive")}}}),e._v(" "),r("label",{attrs:{for:"passive"}},[e._v("Passive")])]),e._v(" "),e.errors.first("status")?r("small",[e._v(e._s(e.errors.first("status")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Describe Location")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{name:"description",placeholder:"address description",rows:"1"},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}}),e._v(" "),e.errors.first("description")?r("small",[e._v(e._s(e.errors.first("description")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("h5",[e._v("Account Details")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.error.email},attrs:{name:"email",placeholder:"name@example.com",type:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.errors.first("email")?r("small",[e._v(e._s(e.errors.first("email")))]):e._e(),e._v(" "),e.error.email?r("small",[e._v(e._s(e.error.email[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Bank")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bank,expression:"form.bank"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"bank"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"bank",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select bank")]),e._v(" "),e._l(e.banks,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("bank")?r("small",[e._v(e._s(e.errors.first("bank")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Account Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_name,expression:"form.account_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"account name",name:"account_name",placeholder:"branch name",type:"text"},domProps:{value:e.form.account_name},on:{input:function(t){t.target.composing||e.$set(e.form,"account_name",t.target.value)}}}),e._v(" "),e.errors.first("account_name")?r("small",[e._v(e._s(e.errors.first("account_name")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Account Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_number,expression:"form.account_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:10|min:10",expression:"'required|numeric|max:10|min:10'"}],staticClass:"form-control",class:{"is-invalid":e.error.account_number},attrs:{"data-vv-as":"account number",name:"account_number",placeholder:"01xxxxxxxx",type:"tel"},domProps:{value:e.form.account_number},on:{input:function(t){t.target.composing||e.$set(e.form,"account_number",t.target.value)}}}),e._v(" "),e.errors.first("account_number")?r("small",[e._v(e._s(e.errors.first("account_number")))]):e._e(),e._v(" "),e.error.account_number?r("small",[e._v(e._s(e.error.account_number[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("hr",{staticClass:"style-two"})]),e._v(" "),r("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"},[r("div",{staticClass:"clearfix d-flex justify-content-end"},["edit"===e.mode?r("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.done}},[e._v("Cancel")]):e._e(),e._v(" "),r("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        "+e._s(e._f("capitalize")(e.mode))+" Branch "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):e._e()])])])])},staticRenderFns:[]}},jyFz:function(e,t,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,o=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,e.exports=r("SldL"),n)a.regeneratorRuntime=o;else try{delete a.regeneratorRuntime}catch(e){a.regeneratorRuntime=void 0}}});
>>>>>>> 2dc2e2c495d18c7a9372aa09bf9e80a4bd45b742
