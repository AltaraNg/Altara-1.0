<<<<<<< HEAD
webpackJsonp([5],{

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

var _branchForm = __webpack_require__("./resources/assets/js/views/FSL/utility/branchForm.vue");

var _branchForm2 = _interopRequireDefault(_branchForm);

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

exports.default = {
    components: {
        UtilityForm: _form2.default,
        BranchForm: _branchForm2.default
    },
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
            sentData: {},
            /*data peculiar to hrm portal data viewer stops here*/

            /*data peculiar to fsl branch portal data viewer starts here*/
            branchToUpdate: {}
            /*data peculiar to fsl branch portal data viewer stops here*/
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
        },

        /*methods exclusive to hrm data viewer stops here*/

        /*methods exclusive to branch on  fsl portal*/
        updateBranch: function updateBranch(id) {
            var _this4 = this;

            /*id id the id of the branch as fetched from the data view*/
            if (this.$network()) {
                this.$LIPS(true);
                (0, _api.get)('/api/branch/' + id).then(function (res) {
                    /*the branch details with that id is fetched and prepared to be
                    * sent to the for for branch update
                    * NB same form is used both for
                    * update and creating branch*/
                    _this4.branchToUpdate = res.data.branch;
                    $('#updateBranch').modal('toggle');
                });
            } else this.$networkErr();
        }
        /*methods exclusive to branch on  fsl portal*/

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
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        //the component is never called exclusively its
        //is called by another parent component.
        //the action is purpose or the context
        action: '',
        branchToUpdate: { default: '' }
    },
    data: function data() {
        return {
            form: {},
            banks: {},
            error: {},
            states: {}
        };
    },

    methods: {
        ifCreate: function ifCreate(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === create else else
            return a === 'create';
        },
        ifUpdate: function ifUpdate(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === update else else
            return a === 'update';
        },
        prepareForm: function prepareForm(data) {
            //this function is used when a data is sent to this component
            //or this component makes a request to backend the
            //data received is used to prepare the form
            this.error = {};
            this.errors.clear();
            this.form = data.form;
            this.banks = data.banks;
            this.states = data.states;
        },
        processBranch: function processBranch() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        _this.error = {};
                        var url = '/api/branch',
                            action = _this.$options.filters.capitalize(_this.action);
                        //for creating a branch the url above is used
                        if (_this.action === 'update') url = '/api/branch/' + _this.branchToUpdate.id;
                        //else if the form action is not create den its update
                        //hence the url "/api/branch/{id}"
                        (0, _api.post)(url, _this.form).then(function (res) {
                            (0, _log.log)('Branch' + action, '' + _this.form.employee_id);
                            if (_this.ifCreate(_this.action)) _this.prepareForm(res.data.prepareForm);
                            if (_this.ifUpdate(_this.action)) _this.$emit('done');
                            _flash2.default.setSuccess('Branch ' + _this.action + 'd successfully!', 20000);
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

        (0, _api.get)('/api/branch/create').then(function (res) {
            return _this2.prepareForm(res.data);
        });
        // fetch data for new branch registration and prepare form
    },

    watch: {
        branchToUpdate: function branchToUpdate(newVal) {
            /*watches when a data is sent from the parent (dataviewer)
            * to this component*/
            this.form = newVal;
            this.$LIPS(false);
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/Manager.vue":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01f74a80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue":
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
          return _vm.processBranch($event)
        }
      }
    },
    [
      _c("h5", [_vm._v("Branch Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Branch Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.name },
            attrs: {
              type: "text",
              placeholder: "branch name",
              name: "branch_name",
              "data-vv-as": "branch name"
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
          _vm.errors.first("branch_name")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("branch_name")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.name
            ? _c("small", [_vm._v(_vm._s(_vm.error.name[0]))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("State")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.state_id,
                  expression: "form.state_id"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "custom-select w-100",
              attrs: { name: "state", "data-vv-validate-on": "blur" },
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
                    "state_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select state")
              ]),
              _vm._v(" "),
              _vm._l(_vm.states, function(state) {
                return _c("option", { domProps: { value: state.id } }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(state.name)))
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("state")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("state")))])
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
          _c("label", [_vm._v("Phone (English)")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.phone_english,
                expression: "form.phone_english"
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
              name: "phone_english",
              "data-vv-as": "phone english"
            },
            domProps: { value: _vm.form.phone_english },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "phone_english", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("phone_english")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("phone_english")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Phone (Yoruba)")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.phone_yoruba,
                expression: "form.phone_yoruba"
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
              name: "phone_yoruba",
              "data-vv-as": "phone yoruba"
            },
            domProps: { value: _vm.form.phone_yoruba },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "phone_yoruba", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("phone_yoruba")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("phone_yoruba")))])
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
          _c("label", { staticClass: "w-100 float-left pl-1" }, [
            _vm._v("Status")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "radio pl-1 w-50 pr-3 float-left" }, [
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
                type: "radio",
                name: "status",
                id: "active",
                value: "active"
              },
              domProps: { checked: _vm._q(_vm.form.status, "active") },
              on: {
                change: function($event) {
                  _vm.$set(_vm.form, "status", "active")
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "active" } }, [_vm._v("Active")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "radio pl-1 w-50 pr-3 float-left" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.status,
                  expression: "form.status"
                }
              ],
              attrs: {
                type: "radio",
                name: "status",
                id: "passive",
                value: "passive"
              },
              domProps: { checked: _vm._q(_vm.form.status, "passive") },
              on: {
                change: function($event) {
                  _vm.$set(_vm.form, "status", "passive")
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "passive" } }, [_vm._v("Passive")])
          ]),
          _vm._v(" "),
          _vm.errors.first("status")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("status")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Describe Location")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.description,
                expression: "form.description"
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
              placeholder: "address description",
              name: "description",
              rows: "1"
            },
            domProps: { value: _vm.form.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "description", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("description")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("description")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceAfter" }),
      _vm._v(" "),
      _c("h5", [_vm._v("Account Details")]),
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
                value: "required|email",
                expression: "'required|email'"
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
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("email")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.email
            ? _c("small", [_vm._v(_vm._s(_vm.error.email[0]))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Bank")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.bank,
                  expression: "form.bank"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "custom-select w-100",
              attrs: { name: "bank", "data-vv-validate-on": "blur" },
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
                    "bank",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select bank")
              ]),
              _vm._v(" "),
              _vm._l(_vm.banks, function(bank) {
                return _c("option", { domProps: { value: bank.id } }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(bank.name)))
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("bank")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("bank")))])
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
          _c("label", [_vm._v("Account Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.account_name,
                expression: "form.account_name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "branch name",
              name: "account_name",
              "data-vv-as": "account name"
            },
            domProps: { value: _vm.form.account_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "account_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("account_name")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("account_name")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Account Number")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.account_number,
                expression: "form.account_number"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric|max:10|min:10",
                expression: "'required|numeric|max:10|min:10'"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.account_number },
            attrs: {
              type: "tel",
              placeholder: "01xxxxxxxx",
              name: "account_number",
              "data-vv-as": "account number"
            },
            domProps: { value: _vm.form.account_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "account_number", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("account_number")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("account_number")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.account_number
            ? _c("small", [_vm._v(_vm._s(_vm.error.account_number[0]))])
            : _vm._e()
        ]
      ),
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
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-lg bg-default",
              attrs: { type: "submit", disabled: _vm.$isProcessing }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm._f("capitalize")(_vm.action)) +
                  " Branch "
              ),
              _c("i", { staticClass: "far fa-paper-plane ml-1" })
            ]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-01f74a80", module.exports)
  }
}

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49110c05\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/Manager.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-md-3 pt-2", attrs: { id: "employeeEdit" } }, [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c(
            "ul",
            { staticClass: "nav nav-tabs justify-content-center bg-default" },
            [_c("h6", [_vm._v("Staff Management")])]
          ),
          _vm._v(" "),
          _c("data-viewer", {
            attrs: { source: "/api/user", title: "User Data", appModel: "user" }
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
    require("vue-hot-reload-api")      .rerender("data-v-49110c05", module.exports)
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
              attrs: { type: "text", placeholder: "search..." },
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
                              "data-toggle": "tooltip",
                              "data-placement": "top",
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
                              "data-toggle": "tooltip",
                              "data-placement": "top",
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
                              "data-toggle": "tooltip",
                              "data-placement": "top",
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
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title:
                                "" +
                                (_vm.branch
                                  ? "update branch details"
                                  : "view details")
                            },
                            on: {
                              click: function($event) {
                                _vm.branch
                                  ? _vm.updateBranch(model.id)
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
                "\n                Displaying: " +
                  _vm._s(_vm.model.from) +
                  " - " +
                  _vm._s(_vm.model.to) +
                  " of " +
                  _vm._s(_vm.model.total) +
                  " " +
                  _vm._s(_vm._f("capitalize")(_vm.appModel)) +
                  " (s)\n            "
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
                  staticStyle: { width: "50px" },
                  attrs: { type: "text", placeholder: "search..." },
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
                                name: "access",
                                type: "radio",
                                id: access.name
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
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "m-2 btn bg-default",
                      attrs: { type: "button", disabled: _vm.$isProcessing },
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
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "m-2 btn bg-default",
                  attrs: { type: "button", disabled: _vm.$isProcessing },
                  on: { click: _vm.resetPassword }
                },
                [
                  _vm._v(
                    "\n                            continue and reset password "
                  ),
                  _c("i", { staticClass: "far fa-paper-plane ml-1" })
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade bd-example-modal-lg",
        attrs: { id: "updateBranch" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(5),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c("branch-form", {
                  attrs: {
                    action: "update",
                    branchToUpdate: _vm.branchToUpdate
                  },
                  on: { done: _vm.fetchIndexData }
                })
              ],
              1
            )
          ])
        ])
      ]
    )
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
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
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
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
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
          "\n                                Please Verify you selected the right access before clicking "
        ),
        _c("br"),
        _vm._v(" "),
        _c("strong", [_vm._v("Save Changes ")]),
        _vm._v("!\n                            ")
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
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
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
            " on the\n                                  telephone He/She "
          ),
          _c("strong", [_vm._v("used for registration")]),
          _vm._v(" on this portal.\n                                "),
          _c("br"),
          _c("br"),
          _vm._v(
            "Please Kindly verify that the phone to receive the new password is on and active!\n                            "
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Update Branch Details")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
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
        (0, _api.get)("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to=234" + details.phone + "&text=" + this.message).then(function () {
            return console.log("sms sent successfully");
        });
    }
};

/***/ }),

/***/ "./resources/assets/js/views/FSL/utility/branchForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01f74a80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\utility\\branchForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01f74a80", Component.options)
  } else {
    hotAPI.reload("data-v-01f74a80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/HRM/employee/Manager.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/Manager.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49110c05\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/Manager.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\employee\\Manager.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49110c05", Component.options)
  } else {
    hotAPI.reload("data-v-49110c05", Component.options)
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
webpackJsonp([5],{"2Q7A":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:t})};var r=a("uD8u")},Bph5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("uD8u");t.default={message:"",welcome:function(e){this.message="Welcome to Altara credit. Please secure your login details. Staff ID: "+e.loginID+", password: "+e.loginPassword,this.send(e)},customerReg:function(e){this.message="Dear "+e.first_name+" "+e.last_name+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+e.branch.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: "+e.branch.phone_yoruba+". Your customer id is: "+e.id,this.send({phone:e.telephone.substr(1)})},passwordReset:function(e){this.message="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+e.staff_id+", new password: "+e.password,this.send(e)},dvaMessage:function(e){this.message=e.message,this.send(e)},send:function(e){(0,r.get)("/api/message/create?to=234"+e.phone+"&message="+this.message).then(function(e){var t=JSON.parse(e.data);console.log(t),1===t.messages[0].status.groupId&&console.log("sms sent successfully")})}}},"K+9w":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a("Bph5")),s=a("2Q7A"),o=i(a("TOoT")),n=a("uD8u");function i(e){return e&&e.__esModule?e:{default:e}}t.default={props:{action:"",receivedData:{default:""},bus:{default:""}},data:function(){return{form:{},error:{},roles:{},branches:{},password:"",countries:["nigeria"],gender:["male","female"],categories:{},textDetails:{phone:"",loginPassword:"",loginID:""},statuses:["married","single","divorced","complicated"],qualifications:["NCE","HND","OND","bachelors","masters","doctorate"]}},methods:{ifReg:function(e){return"register"===e},ifUp:function(e){return"update"===e},prepareForm:function(e){this.error={},this.form=e.form,this.roles=e.roles,this.branches=e.branches,this.categories=e.categories},register:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;1===a&&(this.updatingPortalAccess=!0),this.$validator.validateAll().then(function(i){if(1===a&&(e.errors.clear(),i=!0),i)if(e.$network()){e.$LIPS(!0),e.error={};var l="/api/register",c=void 0,m=void 0;"update"===e.action&&(l="/api/employee/"+t.id+"/update"),(0,n.post)(l,t).then(function(t){t.data.hasOwnProperty("registered")?(m="Registered",e.textDetails.loginID=String(t.data.staff_id),e.textDetails.phone=String(parseInt(e.form.phone_number)),e.textDetails.loginPassword=e.password=t.data.password,c="Staff registered with ID "+t.data.staff_id+". An sms has been sent to the employee with his Login details!",r.default.welcome(e.textDetails)):t.data.hasOwnProperty("updated")&&(m="Updated",c="Staff details updated!",e.$emit("done")),(0,s.log)("Staff"+m,String(t.data.staff_id)),o.default.setSuccess(c,2e4),e.ifReg(e.action)&&(e.form=t.data.form)}).catch(function(t){422===(t=t.response).status&&(e.error=t.data.errors?t.data.errors:t.data,e.$networkErr("unique"))}).finally(function(){e.$scrollToTop(),e.$LIPS(!1)})}else e.$networkErr();else e.$networkErr("form")})}},created:function(){var e=this;this.ifReg(this.action)&&(0,n.get)("/api/create").then(function(t){return e.prepareForm(t.data)}),"update"===this.action&&this.bus.$on("submit",this.register)},watch:{receivedData:function(e){this.prepareForm(e)}}}},NQ6i:function(e,t,a){var r=a("VU/8")(a("bKOv"),a("ptBw"),!1,null,null,null);e.exports=r.exports},Ueij:function(e,t,a){var r=a("VU/8")(a("K+9w"),a("pNt1"),!1,null,null,null);e.exports=r.exports},"X+Zd":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a("I3G/")),s=m(a("Bph5")),o=a("2Q7A"),n=a("uD8u"),i=a("N71M"),l=m(a("TOoT")),c=m(a("Ueij"));function m(e){return e&&e.__esModule?e:{default:e}}t.default={components:{UtilityForm:c.default},data:function(){return{model:{},columns:{},query:{page:1,column:"id",direction:"desc",per_page:10,search_column:"id",search_operator:"greater_than",search_input:0},operators:{equal:"=",not_equal:"<>",less_than:"<",greater_than:">",less_than_or_equal_to:"<=",greater_than_or_equal_to:">=",in:"IN",like:"LIKE"},bus:new r.default,form:{},portal_access:[{name:"grant",value:1},{name:"deny",value:0}],sentData:{}}},props:["source","title","appModel"],created:function(){this.$prepareStates(),this.fetchIndexData(),$(document).on("click","tr",function(){$("tr.current").removeClass("current"),$(this).addClass("current")})},updated:function(){$('[data-toggle="tooltip"]').tooltip()},methods:{next:function(){this.model.next_page_url&&(this.query.page++,this.fetchIndexData())},prev:function(){this.model.prev_page_url&&(this.query.page--,this.fetchIndexData())},toggleOrder:function(e){e===this.query.column?this.query.direction="desc"===this.query.direction?"asc":"desc":(this.query.column=e,this.query.direcntion="asc"),this.fetchIndexData()},fetchIndexData:function(){var e=this;this.$LIPS(!0),$(".modal").modal("hide"),(0,n.get)(this.source+"?page="+this.query.page+"&column="+this.query.column+"&per_page="+this.query.per_page+"&direction="+this.query.direction+"&search_input="+this.query.search_input+"&search_column="+this.query.search_column+"&search_operator="+this.query.search_operator).then(function(t){var a=t.data.model.data;a.length&&a[0].state_id&&a.forEach(function(e){return e.state_id=i.store.getters.getStates.find(function(t){return t.id===e.state_id}).name}),r.default.set(e.$data,"model",t.data.model),r.default.set(e.$data,"columns",t.data.columns),e.$scrollToTop(),e.$LIPS(!1)})},accessStatus:function(e){return Boolean(Number(e))},update:function(e,t){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;0===r?(this.form=e,$("#"+t).modal("toggle")):1===r&&(this.$network()?(this.$LIPS(!0),(0,n.get)("/api/employee/"+e.id+"/edit").then(function(e){a.sentData=e.data,$("#"+t).modal("toggle"),a.$LIPS(!1)})):this.$networkErr())},resetPassword:function(){var e=this;this.$network()?(this.$LIPS(!0),(0,n.get)("/api/reset-password/"+this.form.id).then(function(t){e.$scrollToTop(),$("#editPassword").modal("toggle"),(0,o.log)("resetUserPassword",e.form.staff_id),l.default.setSuccess("Employee password reset successful!");var a={phone:String(parseInt(e.form.phone_number)),password:t.data.password,staff_id:e.form.staff_id};s.default.passwordReset(a),e.$LIPS(!1)})):this.$networkErr()}},computed:{user:function(){return"user"===this.appModel},branch:function(){return"branch"===this.appModel},customer:function(){return"customer"===this.appModel}}}},Y1qv:function(e,t,a){var r=a("VU/8")(a("X+Zd"),a("fv3N"),!1,null,null,null);e.exports=r.exports},bKOv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=a("Y1qv"),o=(r=s)&&r.__esModule?r:{default:r};t.default={components:{DataViewer:o.default}}},fv3N:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card-body p-4 p-md-5"},[a("div",{staticClass:"clearfix w-100"},[a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Search Column")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.query.search_column,expression:"query.search_column"}],staticClass:"custom-select w-100",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"search_column",t.target.multiple?a:a[0])}}},e._l(e.columns,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(e._f("capitalize")(t)))])}))]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Search Operator")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.query.search_operator,expression:"query.search_operator"}],staticClass:"custom-select w-100",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"search_operator",t.target.multiple?a:a[0])}}},e._l(e.operators,function(t,r){return a("option",{domProps:{value:r}},[e._v(e._s(t))])}))]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Search Input")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query.search_input,expression:"query.search_input"}],staticClass:"form-control",attrs:{placeholder:"search...",type:"text"},domProps:{value:e.query.search_input},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.fetchIndexData()},input:function(t){t.target.composing||e.$set(e.query,"search_input",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"},[a("button",{staticClass:"btn btn-block bg-default mb-0 mt-3 mt-md-4",on:{click:function(t){e.fetchIndexData()}}},[e._v("Filter")])])]),e._v(" "),a("div",{staticClass:"px-0 px-md-3 mt-3 table-responsive"},[a("table",{staticClass:"table m-0  table-bordered table-hover"},[a("thead",{staticClass:"thead-light"},[a("tr",[e._l(e.columns,function(t){return a("th",{attrs:{scope:"col"},on:{click:function(a){e.toggleOrder(t)}}},[a("span",[e._v(e._s(e._f("capitalize")(t)))]),e._v(" "),t===e.query.column?a("span",{staticClass:"dv-table-column"},["desc"===e.query.direction?a("span",[e._v("↑")]):a("span",[e._v("↓")])]):e._e()])}),e._v(" "),e.user||e.branch||e.customer?a("th",{attrs:{scope:"col"}},[a("span",[e._v("Action")])]):e._e()],2)]),e._v(" "),a("tbody",e._l(e.model.data,function(t){return a("tr",[e._l(t,function(t,r){return a("td",[e._v(e._s(t))])}),e._v(" "),e.user?a("td",[a("button",{staticClass:"text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Detail"},on:{click:function(a){e.update(t,"updateEmployee",1)}}},[a("i",{staticClass:"fas fa-user-edit"})]),e._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-icon btn-sm float-left btn-round",class:{"btn-success":e.accessStatus(t.portal_access),"btn-danger":!e.accessStatus(t.portal_access)},attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Portal Access"},on:{click:function(a){e.update(t,"editPortalAccess")}}},[e.accessStatus(t.portal_access)?a("i",{staticClass:"fas fa-lock-open"}):a("i",{staticClass:"fas fa-lock"})]),e._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Reset Employee Password"},on:{click:function(a){e.update(t,"editPassword")}}},[a("i",{staticClass:"fas fa-key"})])]):e._e(),e._v(" "),e.branch||e.customer?a("td",[a("button",{staticClass:"text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",attrs:{title:e.branch?"update branch details":"view details","data-placement":"top","data-toggle":"tooltip"},on:{click:function(a){e.branch?e.$router.push("/fsl/branch/"+t.id+"/edit"):e.$router.push("/customer/"+t.id)}}},[e.branch?a("i",{staticClass:"fas fa-cog"}):e._e(),e._v(" "),e.customer?a("i",{staticClass:"far fa-user"}):e._e()])]):e._e()],2)}))])]),e._v(" "),a("nav",{staticClass:"clearfix pt-5",attrs:{"aria-label":"Page navigation example"}},[a("span",{staticClass:"float-left col-md-6 col-12 px-0 mb-5 mb-md-0"},[e._v("\n                 Displaying: "+e._s(e.model.from)+" - "+e._s(e.model.to)+" of "+e._s(e.model.total)+" "+e._s(e._f("capitalize")(e.appModel))+" (s)\n             ")]),e._v(" "),a("span",{staticClass:"justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"},[a("ul",{staticClass:"pagination m-0 float-right"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(t){e.prev()}}},[a("i",{staticClass:"fas fa-arrow-circle-left"})])]),e._v(" "),a("li",{staticClass:"page-item"},[a("span",{staticClass:"page-link"},[e._v("Current Page: "+e._s(e.model.current_page))])]),e._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(t){e.next()}}},[a("i",{staticClass:"fas fa-arrow-circle-right"})])])]),e._v(" "),a("span",{staticClass:"float-left"},[a("span",{staticClass:"py-2 pr-3 float-left"},[e._v("Rows Per Page ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query.per_page,expression:"query.per_page"}],staticClass:"form-control float-left",attrs:{placeholder:"search...",type:"text"},domProps:{value:e.query.per_page},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.fetchIndexData()},input:function(t){t.target.composing||e.$set(e.query,"per_page",t.target.value)}}})])])])]),e._v(" "),a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"updateEmployee"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),a("div",{staticClass:"modal-body"},[a("utility-form",{attrs:{bus:e.bus,receivedData:e.sentData,action:"update"},on:{done:function(t){e.fetchIndexData()}}})],1)])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPortalAccess"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),a("form",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-0 mb-2"},[e._m(2),e._v(" "),e._l(e.portal_access,function(t){return a("div",{staticClass:"radio p-0 col-6 float-left text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.portal_access,expression:"form.portal_access"}],attrs:{id:t.name,name:"access",type:"radio"},domProps:{value:t.value,checked:e._q(e.form.portal_access,t.value)},on:{change:function(a){e.$set(e.form,"portal_access",t.value)}}}),e._v(" "),a("label",{attrs:{for:t.name}},[e._v(e._s(e._f("capitalize")(t.name))+" Access")])])})],2)]),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("cancel")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"button"},on:{click:function(t){e.bus.$emit("submit",e.form)}}},[e._v(" Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPassword"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(3),e._v(" "),a("form",[e._m(4),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("cancel")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"button"},on:{click:e.resetPassword}},[e._v("\n                     continue and reset password "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header py-2"},[t("h6",{staticClass:"modal-title py-1"},[this._v("Update Employee Details")]),this._v(" "),t("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[t("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fas fa-times"})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header py-2"},[t("h6",{staticClass:"modal-title py-1"},[this._v("Edit Employee Portal Access")]),this._v(" "),t("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[t("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fas fa-times"})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"mb-2 w-100 float-left pl-1 text-center",staticStyle:{"font-size":"14px"}},[this._v("\n                        Please Verify you selected the right access before clicking "),t("br"),this._v(" "),t("strong",[this._v("Save Changes ")]),this._v("!\n                     ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header py-2"},[t("h6",{staticClass:"modal-title py-1"},[this._v("Reset Employee Password")]),this._v(" "),t("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[t("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fas fa-times"})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-2 mb-4 "},[a("span",[e._v("A new password will be sent to the employee via "),a("strong",[e._v("sms")]),e._v(" on the\n                                   telephone He/She "),a("strong",[e._v("used for registration")]),e._v(" on this portal.\n                                 "),a("br"),a("br"),e._v("Please Kindly verify that the phone to receive the new password is on and active!\n                             ")]),a("br"),a("br"),e._v(" "),a("u",[a("em",[e._v("click the continue and reset password to finish this task!")])])])])}]}},pNt1:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){t.preventDefault(),e.register(e.form,0)}}},[a("h5",[e._v("Employee Personal Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.full_name,expression:"form.full_name"},{name:"validate",rawName:"v-validate",value:"required|max:100",expression:"'required|max:100'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"employee full name",name:"name"},domProps:{value:e.form.full_name},on:{input:function(t){t.target.composing||e.$set(e.form,"full_name",t.target.value)}}}),e._v(" "),e.errors.first("name")?a("small",[e._v(e._s(e.errors.first("name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_number,expression:"form.phone_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",class:{"is-invalid":e.error.phone_number},attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"phone_number","data-vv-as":"phone number"},domProps:{value:e.form.phone_number},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_number",t.target.value)}}}),e._v(" "),e.errors.first("phone_number")?a("small",[e._v("\n            "+e._s(e.errors.first("phone_number"))+"\n        ")]):e._e(),e._v(" "),e.error.phone_number?a("small",[e._v("\n            "+e._s(e.error.phone_number[0])+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Marital Status")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"status","data-vv-validate-on":"blur"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"status",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select status")]),e._v(" "),e._l(e.statuses,function(t){return a("option",{domProps:{value:t}},[e._v("\n                "+e._s(e._f("capitalize")(t))+"\n            ")])})],2),e._v(" "),e.errors.first("status")?a("small",[e._v("\n            "+e._s(e.errors.first("status"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Nationality")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.nationality,expression:"form.nationality"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"nationality","data-vv-validate-on":"blur"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"nationality",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select nationality")]),e._v(" "),e._l(e.countries,function(t){return a("option",{domProps:{value:t}},[e._v("\n                "+e._s(e._f("capitalize")(t))+"\n            ")])})],2),e._v(" "),e.errors.first("nationality")?a("small",[e._v("\n            "+e._s(e.errors.first("nationality"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date of Birth")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_birth,expression:"form.date_of_birth"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"date",name:"date_of_birth","data-vv-as":"date of birth"},domProps:{value:e.form.date_of_birth},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_birth",t.target.value)}}}),e._v(" "),e.errors.first("date_of_birth")?a("small",[e._v(e._s(e.errors.first("date_of_birth")))]):e._e(),e._v(" "),e.error.date_of_birth?a("small",[e._v(e._s(e.error.date_of_birth[0]))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email|min:1",expression:"'required|email|min:1'"}],staticClass:"form-control",class:{"is-invalid":e.error.email},attrs:{type:"email",placeholder:"name@example.com",name:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.errors.first("email")?a("small",[e._v("\n            "+e._s(e.errors.first("email"))+"\n        ")]):e._e(),e._v(" "),e.error.email?a("small",[e._v("\n            "+e._s(e.error.email[0])+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Role in the company")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.role_id,expression:"form.role_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"role","data-vv-validate-on":"blur","data-vv-name":"role"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"role_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select role")]),e._v(" "),e._l(e.roles,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                "+e._s(e._f("capitalize")(t.name))+"\n            ")])})],2),e._v(" "),e.errors.first("role")?a("small",[e._v("\n            "+e._s(e.errors.first("role"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Highest Qualification")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.highest_qualification,expression:"form.highest_qualification"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"qualification","data-vv-validate-on":"blur","data-vv-name":"qualification"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"highest_qualification",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select qualification")]),e._v(" "),e._l(e.qualifications,function(t){return a("option",{domProps:{value:t}},[e._v("\n                "+e._s(e._f("capitalize")(t))+"\n            ")])})],2),e._v(" "),e.errors.has("qualification")?a("small",[e._v("\n            "+e._s(e.errors.first("qualification"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Operations Branch")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.branch_id,expression:"form.branch_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"branch","data-vv-validate-on":"blur","data-vv-name":"branch"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"branch_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select branch")]),e._v(" "),e._l(e.branches,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                "+e._s(e._f("capitalize")(t.name))+"\n            ")])})],2),e._v(" "),e.errors.has("branch")?a("small",[e._v("\n            "+e._s(e.errors.first("branch"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date of Appointment")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_appointment,expression:"form.date_of_appointment"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"date",name:"date_of_appointment","data-vv-as":"date of appointment"},domProps:{value:e.form.date_of_appointment},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_appointment",t.target.value)}}}),e._v(" "),e.errors.first("date_of_appointment")?a("small",[e._v("\n            "+e._s(e.errors.first("date_of_appointment"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),e.ifUp(e.action)?a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date of Exit")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_exit,expression:"form.date_of_exit"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.form.date_of_exit},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_exit",t.target.value)}}})]):e._e(),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Staff Category")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.category,expression:"form.category"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"qualification","data-vv-validate-on":"blur","data-vv-name":"category"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"category",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select category")]),e._v(" "),e._l(e.categories,function(t){return a("option",{domProps:{value:t.name}},[e._v("\n                "+e._s(e._f("capitalize")(t.name))+"\n            ")])})],2),e._v(" "),e.errors.has("category")?a("small",[e._v("\n            "+e._s(e.errors.first("category"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"gender",type:"radio",id:t},domProps:{value:t,checked:e._q(e.form.gender,t)},on:{change:function(a){e.$set(e.form,"gender",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v("\n                "+e._s(t)+"\n            ")])])}),e._v(" "),e.errors.first("gender")?a("small",[e._v("\n            "+e._s(e.errors.first("gender"))+"\n        ")]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-12 float-left px-0 px-md-3"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{placeholder:"address",rows:"1",name:"address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),e.errors.first("address")?a("small",[e._v("\n            "+e._s(e.errors.first("address"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Referee Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 1 Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_1,expression:"form.referee_1"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"enter full name here",name:"referee_1","data-vv-as":"referee 1 full name"},domProps:{value:e.form.referee_1},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_1",t.target.value)}}}),e._v(" "),e.errors.first("referee_1")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_1"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 1 Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_1_phone_no,expression:"form.referee_1_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"referee_1_phone_no","data-vv-as":"referee 1 phone number"},domProps:{value:e.form.referee_1_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_1_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("referee_1_phone_no")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_1_phone_no"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 2 Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_2,expression:"form.referee_2"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"enter full name here",name:"referee_2","data-vv-as":"referee 2 full name"},domProps:{value:e.form.referee_2},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_2",t.target.value)}}}),e._v(" "),e.errors.first("referee_2")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_2"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 2 Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_2_phone_no,expression:"form.referee_2_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"referee_2_phone_no","data-vv-as":"referee 2 phone number"},domProps:{value:e.form.referee_2_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_2_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("referee_2_phone_no")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_2_phone_no"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Next of Kin Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Next of Kin Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.next_of_kin_name,expression:"form.next_of_kin_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"enter full name here",name:"next_of_kin_name","data-vv-as":"next of kin name"},domProps:{value:e.form.next_of_kin_name},on:{input:function(t){t.target.composing||e.$set(e.form,"next_of_kin_name",t.target.value)}}}),e._v(" "),e.errors.first("next_of_kin_name")?a("small",[e._v("\n            "+e._s(e.errors.first("next_of_kin_name"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Next of Kin Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.next_of_kin_phone_no,expression:"form.next_of_kin_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"next_of_kin_phone_no","data-vv-as":"next of kin phone number"},domProps:{value:e.form.next_of_kin_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"next_of_kin_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("next_of_kin_phone_no")?a("small",[e._v("\n            "+e._s(e.errors.first("next_of_kin_phone_no"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("hr",{staticClass:"style-two"}),e._v(" "),a("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[e.ifReg(e.action)?a("div",[a("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{type:"submit",disabled:e.$isProcessing}},[e._v("\n                Register Employee "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]):e._e(),e._v(" "),e.ifUp(e.action)?a("div",[a("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Cancel")]),e._v(" "),a("button",{staticClass:"mx-3 btn bg-default float-right",attrs:{type:"submit",disabled:e.$isProcessing}},[e._v("\n                Update Employee "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]):e._e()])])},staticRenderFns:[]}},ptBw:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeEdit"}},[t("div",{staticClass:"card"},[t("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[t("h6",[this._v("Staff Management")])]),this._v(" "),t("data-viewer",{attrs:{source:"/api/user",title:"User Data",appModel:"user"}})],1)])])},staticRenderFns:[]}}});
>>>>>>> 5b66d6bd3124cd9c1e27808029b5045efc350129
