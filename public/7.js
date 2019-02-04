<<<<<<< HEAD
webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _form = __webpack_require__("./resources/assets/js/views/HRM/utility/form.vue");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
   components: { UtilityForm: _form2.default },
   data: function data() {
      return {
         /*data generic to data viewer starts here*/
         model: {},
         columns: {},
         query: {
            page: 1,
            column: 'id',
            direction: 'desc',
            per_page: 10,
            search_column: 'id',
            search_operator: 'greater_than',
            search_input: 0
         },
         operators: {
            equal: '=',
            not_equal: '<>',
            less_than: '<',
            greater_than: '>',
            less_than_or_equal_to: '<=',
            greater_than_or_equal_to: '>=',
            in: 'IN',
            like: 'LIKE'
         },
         /*data generic to data viewer stops here*/

         /*data peculiar to hrm portal data viewer starts here*/
         bus: new _vue2.default(),
         form: {},
         portal_access: [{ name: 'grant', value: 1 }, { name: 'deny', value: 0 }],
         sentData: {}
         /*data peculiar to hrm portal data viewer stops here*/
      };
   },

   props: ['source', 'title', 'appModel'],
   created: function created() {
      this.$prepareStates();
      this.fetchIndexData();
      $(document).on('click', 'tr', function () {
         $('tr.current').removeClass('current');
         $(this).addClass('current');
      });
   },
   updated: function updated() {
      $('[data-toggle="tooltip"]').tooltip();
   },

   methods: {
      /*methods exclusive to data viewer starts here*/
      next: function next() {
         if (this.model.next_page_url) {
            this.query.page++;
            this.fetchIndexData();
         }
      },
      prev: function prev() {
         if (this.model.prev_page_url) {
            this.query.page--;
            this.fetchIndexData();
         }
      },
      toggleOrder: function toggleOrder(column) {
         if (column === this.query.column) this.query.direction = this.query.direction === 'desc' ? 'asc' : 'desc';else {
            this.query.column = column;
            this.query.direcntion = 'asc';
         }
         this.fetchIndexData();
      },
      fetchIndexData: function fetchIndexData() {
         var _this = this;

         this.$LIPS(true);
         $('.modal').modal('hide');
         (0, _api.get)('' + this.source + ('?page=' + this.query.page) + ('&column=' + this.query.column) + ('&per_page=' + this.query.per_page) + ('&direction=' + this.query.direction) + ('&search_input=' + this.query.search_input) + ('&search_column=' + this.query.search_column) + ('&search_operator=' + this.query.search_operator)).then(function (res) {
            var data = res.data.model.data;
            /*the state id for the branch fetched from the db is a number
            * hence the code below is used to get the state name
            * corresponding to the state id and display it
            * instead of showing state id as a number*/
            if (data.length && data[0].state_id) {
               data.forEach(function (curr) {
                  return curr.state_id = _store.store.getters.getStates.find(function (obj) {
                     return obj.id === curr.state_id;
                  }).name;
               });
            }
            _vue2.default.set(_this.$data, 'model', res.data.model);
            _vue2.default.set(_this.$data, 'columns', res.data.columns);
            _this.$scrollToTop();
            _this.$LIPS(false);
         });
      },

      /*methods exclusive to data viewer stop here*/

      /*methods exclusive to hrm data viewer starts here*/
      accessStatus: function accessStatus(status) {
         return Boolean(Number(status));
         /*returns true or false for the portal
         access status for each staff
         (1 or 0 respectively)*/
      },
      update: function update(emp, mod) {
         var _this2 = this;

         var up = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

         /*emp is the employer you want to carry an action on
         * mod is the modal id that carries the form for the process
         * up is tentative if 0*/
         if (up === 0) {
            this.form = emp;
            $('#' + mod).modal('toggle');
            /*then action is for password reset or portal access update
            * the corresponding modal is triggered as above*/
         } else if (up === 1) {
            /*if up is 1 then its for details update*/
            if (this.$network()) {
               this.$LIPS(true);
               (0, _api.get)('/api/employee/' + emp.id + '/edit').then(function (res) {
                  /*the full employee details are fetched to populate
                  the form for editing ie the utility form*/
                  _this2.sentData = res.data;
                  /*the data sent to the utility form is updated*/
                  $('#' + mod).modal('toggle');
                  /*corresponding modal is toggled*/
                  _this2.$LIPS(false);
               });
            } else this.$networkErr();
         }
      },
      resetPassword: function resetPassword() {
         var _this3 = this;

         if (this.$network()) {
            this.$LIPS(true);
            (0, _api.get)('/api/reset-password/' + this.form.id).then(function (res) {
               _this3.$scrollToTop();
               $('#editPassword').modal('toggle');
               (0, _log.log)('resetUserPassword', _this3.form.staff_id);
               _flash2.default.setSuccess('Employee password reset successful!');
               var details = {
                  phone: String(parseInt(_this3.form.phone_number)), password: res.data.password,
                  staff_id: _this3.form.staff_id
               };
               _sms2.default.passwordReset(details);
               _this3.$LIPS(false);
            });
         } else this.$networkErr();
      }
   },
   computed: {
      user: function user() {
         return this.appModel === 'user';
         /*return true if the context
         * of the data viewer is
         * for employees*/
      },
      branch: function branch() {
         return this.appModel === 'branch';
         /*return true if the context
         * of the data viewer is
         * for branch*/
      },
      customer: function customer() {
         return this.appModel === 'customer';
         /*return true if the context
         * of the data viewer is
         * for customer*/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/branch/branches.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataViewer = __webpack_require__("./resources/assets/js/components/DataViewer.vue");

var _DataViewer2 = _interopRequireDefault(_DataViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { DataViewer: _DataViewer2.default }
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-412d66a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/branch/branches.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-md-3 pt-2", attrs: { id: "index" } }, [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c(
            "ul",
            { staticClass: "nav nav-tabs justify-content-center bg-default" },
            [_c("h6", [_vm._v("Manage Branches")])]
          ),
          _vm._v(" "),
          _c("data-viewer", {
            attrs: {
              source: "/api/branch",
              title: "Branch(s)",
              appModel: "branch"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-412d66a0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53eb4313\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card-body p-4 p-md-5" }, [
      _c("div", { staticClass: "clearfix w-100" }, [
        _c(
          "div",
          {
            staticClass: "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
          },
          [
            _c("label", [_vm._v("Search Column")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.query.search_column,
                    expression: "query.search_column"
                  }
                ],
                staticClass: "custom-select w-100",
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
                      "search_column",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.columns, function(column) {
                return _c("option", { domProps: { value: column } }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(column)))
                ])
              })
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
          },
          [
            _c("label", [_vm._v("Search Operator")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.query.search_operator,
                    expression: "query.search_operator"
                  }
                ],
                staticClass: "custom-select w-100",
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
                      "search_operator",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.operators, function(value, key) {
                return _c("option", { domProps: { value: key } }, [
                  _vm._v(_vm._s(value))
                ])
              })
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"
          },
          [
            _c("label", [_vm._v("Search Input")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.query.search_input,
                  expression: "query.search_input"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "search...", type: "text" },
              domProps: { value: _vm.query.search_input },
              on: {
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  _vm.fetchIndexData()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.query, "search_input", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-block bg-default mb-0 mt-3 mt-md-4",
                on: {
                  click: function($event) {
                    _vm.fetchIndexData()
                  }
                }
              },
              [_vm._v("Filter")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "px-0 px-md-3 mt-3 table-responsive" }, [
        _c("table", { staticClass: "table m-0  table-bordered table-hover" }, [
          _c("thead", { staticClass: "thead-light" }, [
            _c(
              "tr",
              [
                _vm._l(_vm.columns, function(column) {
                  return _c(
                    "th",
                    {
                      attrs: { scope: "col" },
                      on: {
                        click: function($event) {
                          _vm.toggleOrder(column)
                        }
                      }
                    },
                    [
                      _c("span", [
                        _vm._v(_vm._s(_vm._f("capitalize")(column)))
                      ]),
                      _vm._v(" "),
                      column === _vm.query.column
                        ? _c("span", { staticClass: "dv-table-column" }, [
                            _vm.query.direction === "desc"
                              ? _c("span", [_vm._v("↑")])
                              : _c("span", [_vm._v("↓")])
                          ])
                        : _vm._e()
                    ]
                  )
                }),
                _vm._v(" "),
                _vm.user || _vm.branch || _vm.customer
                  ? _c("th", { attrs: { scope: "col" } }, [
                      _c("span", [_vm._v("Action")])
                    ])
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.model.data, function(model) {
              return _c(
                "tr",
                [
                  _vm._l(model, function(value, key) {
                    return _c("td", [_vm._v(_vm._s(value))])
                  }),
                  _vm._v(" "),
                  _vm.user
                    ? _c("td", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",
                            attrs: {
                              "data-placement": "top",
                              "data-toggle": "tooltip",
                              title: "Edit Employee Detail"
                            },
                            on: {
                              click: function($event) {
                                _vm.update(model, "updateEmployee", 1)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-user-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mr-2 btn btn-icon btn-sm float-left btn-round",
                            class: {
                              "btn-success": _vm.accessStatus(
                                model.portal_access
                              ),
                              "btn-danger": !_vm.accessStatus(
                                model.portal_access
                              )
                            },
                            attrs: {
                              "data-placement": "top",
                              "data-toggle": "tooltip",
                              title: "Edit Employee Portal Access"
                            },
                            on: {
                              click: function($event) {
                                _vm.update(model, "editPortalAccess")
                              }
                            }
                          },
                          [
                            _vm.accessStatus(model.portal_access)
                              ? _c("i", { staticClass: "fas fa-lock-open" })
                              : _c("i", { staticClass: "fas fa-lock" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",
                            attrs: {
                              "data-placement": "top",
                              "data-toggle": "tooltip",
                              title: "Reset Employee Password"
                            },
                            on: {
                              click: function($event) {
                                _vm.update(model, "editPassword")
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-key" })]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.branch || _vm.customer
                    ? _c("td", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",
                            attrs: {
                              title:
                                "" +
                                (_vm.branch
                                  ? "update branch details"
                                  : "view details"),
                              "data-placement": "top",
                              "data-toggle": "tooltip"
                            },
                            on: {
                              click: function($event) {
                                _vm.branch
                                  ? _vm.$router.push(
                                      "/fsl/branch/" + model.id + "/edit"
                                    )
                                  : _vm.$router.push("/customer/" + model.id)
                              }
                            }
                          },
                          [
                            _vm.branch
                              ? _c("i", { staticClass: "fas fa-cog" })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.customer
                              ? _c("i", { staticClass: "far fa-user" })
                              : _vm._e()
                          ]
                        )
                      ])
                    : _vm._e()
                ],
                2
              )
            })
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "nav",
        {
          staticClass: "clearfix pt-5",
          attrs: { "aria-label": "Page navigation example" }
        },
        [
          _c(
            "span",
            { staticClass: "float-left col-md-6 col-12 px-0 mb-5 mb-md-0" },
            [
              _vm._v(
                "\n                 Displaying: " +
                  _vm._s(_vm.model.from) +
                  " - " +
                  _vm._s(_vm.model.to) +
                  " of " +
                  _vm._s(_vm.model.total) +
                  " " +
                  _vm._s(_vm._f("capitalize")(_vm.appModel)) +
                  " (s)\n             "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"
            },
            [
              _c("ul", { staticClass: "pagination m-0 float-right" }, [
                _c("li", { staticClass: "page-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      on: {
                        click: function($event) {
                          _vm.prev()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-arrow-circle-left" })]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "page-item" }, [
                  _c("span", { staticClass: "page-link" }, [
                    _vm._v("Current Page: " + _vm._s(_vm.model.current_page))
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "page-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      on: {
                        click: function($event) {
                          _vm.next()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-arrow-circle-right" })]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "float-left" }, [
                _c("span", { staticClass: "py-2 pr-3 float-left" }, [
                  _vm._v("Rows Per Page ")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.query.per_page,
                      expression: "query.per_page"
                    }
                  ],
                  staticClass: "form-control float-left",
                  attrs: { placeholder: "search...", type: "text" },
                  domProps: { value: _vm.query.per_page },
                  on: {
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      _vm.fetchIndexData()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.query, "per_page", $event.target.value)
                    }
                  }
                })
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade bd-example-modal-lg",
        attrs: { id: "updateEmployee" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c("utility-form", {
                  attrs: {
                    bus: _vm.bus,
                    receivedData: _vm.sentData,
                    action: "update"
                  },
                  on: {
                    done: function($event) {
                      _vm.fetchIndexData()
                    }
                  }
                })
              ],
              1
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "editPortalAccess" } },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "div",
                    { staticClass: "form-group col-12 float-left mt-0 mb-2" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._l(_vm.portal_access, function(access) {
                        return _c(
                          "div",
                          {
                            staticClass:
                              "radio p-0 col-6 float-left text-center"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.portal_access,
                                  expression: "form.portal_access"
                                }
                              ],
                              attrs: {
                                id: access.name,
                                name: "access",
                                type: "radio"
                              },
                              domProps: {
                                value: access.value,
                                checked: _vm._q(
                                  _vm.form.portal_access,
                                  access.value
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.form,
                                    "portal_access",
                                    access.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: access.name } }, [
                              _vm._v(
                                _vm._s(_vm._f("capitalize")(access.name)) +
                                  " Access"
                              )
                            ])
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "m-2 btn btn-secondary",
                      attrs: { "data-dismiss": "modal", type: "button" }
                    },
                    [_vm._v("cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "m-2 btn bg-default",
                      attrs: { disabled: _vm.$isProcessing, type: "button" },
                      on: {
                        click: function($event) {
                          _vm.bus.$emit("submit", _vm.form)
                        }
                      }
                    },
                    [
                      _vm._v(" Save changes "),
                      _c("i", { staticClass: "far fa-paper-plane ml-1" })
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "editPassword" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("form", [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "m-2 btn btn-secondary",
                  attrs: { "data-dismiss": "modal", type: "button" }
                },
                [_vm._v("cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "m-2 btn bg-default",
                  attrs: { disabled: _vm.$isProcessing, type: "button" },
                  on: { click: _vm.resetPassword }
                },
                [
                  _vm._v("\n                     continue and reset password "),
                  _c("i", { staticClass: "far fa-paper-plane ml-1" })
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Update Employee Details")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "aria-label": "Close", "data-dismiss": "modal" }
        },
        [
          _c(
            "span",
            {
              staticClass: "modal-close text-danger",
              attrs: { "aria-hidden": "true" }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Edit Employee Portal Access")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "aria-label": "Close", "data-dismiss": "modal" }
        },
        [
          _c(
            "span",
            {
              staticClass: "modal-close text-danger",
              attrs: { "aria-hidden": "true" }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "mb-2 w-100 float-left pl-1 text-center",
        staticStyle: { "font-size": "14px" }
      },
      [
        _vm._v(
          "\n                        Please Verify you selected the right access before clicking "
        ),
        _c("br"),
        _vm._v(" "),
        _c("strong", [_vm._v("Save Changes ")]),
        _vm._v("!\n                     ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Reset Employee Password")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "aria-label": "Close", "data-dismiss": "modal" }
        },
        [
          _c(
            "span",
            {
              staticClass: "modal-close text-danger",
              attrs: { "aria-hidden": "true" }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "form-group col-12 float-left mt-2 mb-4 " }, [
        _c("span", [
          _vm._v("A new password will be sent to the employee via "),
          _c("strong", [_vm._v("sms")]),
          _vm._v(
            " on the\n                                   telephone He/She "
          ),
          _c("strong", [_vm._v("used for registration")]),
          _vm._v(" on this portal.\n                                 "),
          _c("br"),
          _c("br"),
          _vm._v(
            "Please Kindly verify that the phone to receive the new password is on and active!\n                             "
          )
        ]),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c("u", [
          _c("em", [
            _vm._v("click the continue and reset password to finish this task!")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-53eb4313", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53eb4313\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\DataViewer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53eb4313", Component.options)
  } else {
    hotAPI.reload("data-v-53eb4313", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./resources/assets/js/views/FSL/branch/branches.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/branch/branches.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-412d66a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/branch/branches.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\branch\\branches.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-412d66a0", Component.options)
  } else {
    hotAPI.reload("data-v-412d66a0", Component.options)
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
webpackJsonp([7],{AB2z:function(t,r,e){var n=e("VU/8")(e("xsZX"),e("wTQ/"),!1,function(t){e("SBcZ")},null,null);t.exports=n.exports},SBcZ:function(t,r,e){var n=e("oYtk");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("374c8a72",n,!0,{})},SldL:function(t,r){!function(r){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag",c="object"==typeof t,u=r.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=r.regeneratorRuntime=c?t.exports:{}).wrap=x;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={},g={};g[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v($([])));y&&y!==n&&o.call(y,a)&&(g=y);var w=C.prototype=_.prototype=Object.create(g);L.prototype=w.constructor=C,C.constructor=L,C[l]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===L||"GeneratorFunction"===(r.displayName||r.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},E(k.prototype),k.prototype[s]=function(){return this},u.AsyncIterator=k,u.async=function(t,r,e,n){var o=new k(x(t,r,e,n));return u.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},u.values=$,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}}}function x(t,r,e,n){var o=r&&r.prototype instanceof _?r:_,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var s=P(a,e);if(s){if(s===m)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var l=b(t,r,e);if("normal"===l.type){if(n=e.done?h:p,l.arg===m)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n=h,e.method="throw",e.arg=l.arg)}}}(t,e,a),i}function b(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function C(){}function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function k(t){var r;this._invoke=function(e,n){function i(){return new Promise(function(r,i){!function r(e,n,i,a){var s=b(t[e],t,n);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(c).then(function(t){l.value=t,i(l)},a)}a(s.arg)}(e,n,r,i)})}return r=r?r.then(i,i):i()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=b(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function $(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,r,e){t.exports=e("jyFz")},jyFz:function(t,r,e){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},oYtk:function(t,r,e){(t.exports=e("FZ+f")(!1)).push([t.i,"#login .col-md-6,#login .col-md-12,#login .col-sm-6,#login .col-sm-12{margin-bottom:2rem}#login .col-md-6 label,#login .col-md-12 label,#login .col-sm-6 label,#login .col-sm-12 label{margin-top:1rem;margin-bottom:.1rem}#login .col-md-6 label+.input-group,#login .col-md-12 label+.input-group,#login .col-sm-6 label+.input-group,#login .col-sm-12 label+.input-group{margin-bottom:0}#login .col-md-6 input,#login .col-md-12 input,#login .col-sm-6 input,#login .col-sm-12 input{border-right:0!important}#login .col-md-6 small,#login .col-md-12 small,#login .col-sm-6 small,#login .col-sm-12 small{color:#c81618;font-size:1.1rem}#login .col-md-6 i,#login .col-md-12 i,#login .col-sm-6 i,#login .col-sm-12 i{font-size:1.1rem}#login .form-control:focus+.input-group-addon,#login .form-control:focus~.input-group-addon{border-color:#0b78bc!important}",""])},"wTQ/":function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("transition",{attrs:{name:"fade"}},[e("div",{attrs:{id:"login"}},[e("div",{staticClass:"col-md-5 mx-auto",style:{marginTop:t.cardMT+"px"},attrs:{id:"loginCard"}},[e("div",{staticClass:"card"},[e("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[e("h6",[t._v("Staff Login")])]),t._v(" "),e("form",{staticClass:"pt-1 pb-3",on:{submit:function(r){return r.preventDefault(),t.login(r)}}},[e("div",{staticClass:"card-body clearfix px-5"},[e("div",{staticClass:"col-sm-12 px-0 px-md-3"},[e("label",{staticClass:"category"},[t._v("* Staff ID")]),t._v(" "),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.staff_id,expression:"form.staff_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"Staff ID",placeholder:"Staff ID"},domProps:{value:t.form.staff_id},on:{input:function(r){r.target.composing||t.$set(t.form,"staff_id",r.target.value)}}}),t._v(" "),e("span",{staticClass:"input-group-addon"},[e("i",{staticClass:"ml-2 fa fa-user-circle"})])]),t._v(" "),t.errors.first("Staff ID")?e("small",{staticClass:"error-control"},[t._v(t._s(t.errors.first("Staff ID"))+"\n                     ")]):t._e(),t._v(" "),t.error.staff_id?e("small",{staticClass:"error-control"},[t._v(t._s(t.error.staff_id[0]))]):t._e()]),t._v(" "),e("div",{staticClass:"col-sm-12 px-0 px-md-3"},[e("label",{staticClass:"category"},[t._v("* Password")]),t._v(" "),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:25",expression:"'required|min:6|max:25'"}],staticClass:"form-control",attrs:{name:"password",placeholder:"Password",type:"password"},domProps:{value:t.form.password},on:{input:function(r){r.target.composing||t.$set(t.form,"password",r.target.value)}}}),t._v(" "),e("span",{staticClass:"input-group-addon"},[e("i",{staticClass:"ml-2 fas fa-key"})])]),t._v(" "),t.errors.first("password")?e("small",{staticClass:"error-control"},[t._v("\n                        "+t._s(t.errors.first("password"))+"\n                     ")]):t._e()]),t._v(" "),e("div",{staticClass:"col-sm-12 mb-4 px-0 px-md-3 pt-3"},[e("button",{staticClass:"btn btn-block bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                        Login!   "),e("i",{staticClass:"far fa-paper-plane"})])]),t._v(" "),e("span",{staticClass:"text-center float-left w-100 pb-4"},[t._v("Forgot Password? "),e("router-link",{staticClass:"text-info",attrs:{to:"/forgotPassword"}},[t._v("Click here")])],1)])])])])])])},staticRenderFns:[]}},xsZX:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=s(e("Xxa5")),o=s(e("qYF3")),i=s(e("TOoT")),a=e("uD8u");function s(t){return t&&t.__esModule?t:{default:t}}r.default={data:function(){return{form:{staff_id:"",password:""},cardMT:"",error:{}}},methods:{login:function(){var t,r,e=this;this.$validator.validateAll().then((t=n.default.mark(function t(r){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=10;break}if(!e.$network()){t.next=9;break}return e.$LIPS(!0),e.error={},t.next=6,(0,a.post)("/api/login",e.form).then(function(t){(t=t.data).auth&&(o.default.set(t),e.$store.dispatch("mutateAuth"),e.$router.push("/home"),i.default.setSuccess(t.message))}).catch(function(t){422===(t=t.response).status&&(e.error=t.data.errors?t.data.errors:t.data),i.default.setError(t.data.message)});case 6:e.$LIPS(!1),t.next=10;break;case 9:e.$networkErr();case 10:case"end":return t.stop()}},t,e)}),r=function(){var r=t.apply(this,arguments);return new Promise(function(t,e){return function n(o,i){try{var a=r[o](i),s=a.value}catch(t){return void e(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})},function(t){return r.apply(this,arguments)}))}},beforeCreate:function(){localStorage.getItem("api_token")&&this.$router.push("/home")},mounted:function(){this.cardMT=(window.innerHeight-$("#loginCard").height())/2,this.$LIPS(!1)}}}});
>>>>>>> 2dc2e2c495d18c7a9372aa09bf9e80a4bd45b742
